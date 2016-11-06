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
var args56616 = [];
var len__25826__auto___56622 = arguments.length;
var i__25827__auto___56623 = (0);
while(true){
if((i__25827__auto___56623 < len__25826__auto___56622)){
args56616.push((arguments[i__25827__auto___56623]));

var G__56624 = (i__25827__auto___56623 + (1));
i__25827__auto___56623 = G__56624;
continue;
} else {
}
break;
}

var G__56618 = args56616.length;
switch (G__56618) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56616.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async56619 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56619 = (function (f,blockable,meta56620){
this.f = f;
this.blockable = blockable;
this.meta56620 = meta56620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56621,meta56620__$1){
var self__ = this;
var _56621__$1 = this;
return (new cljs.core.async.t_cljs$core$async56619(self__.f,self__.blockable,meta56620__$1));
});

cljs.core.async.t_cljs$core$async56619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56621){
var self__ = this;
var _56621__$1 = this;
return self__.meta56620;
});

cljs.core.async.t_cljs$core$async56619.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async56619.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async56619.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async56619.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async56619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56620","meta56620",-51938011,null)], null);
});

cljs.core.async.t_cljs$core$async56619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56619";

cljs.core.async.t_cljs$core$async56619.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async56619");
});

cljs.core.async.__GT_t_cljs$core$async56619 = (function cljs$core$async$__GT_t_cljs$core$async56619(f__$1,blockable__$1,meta56620){
return (new cljs.core.async.t_cljs$core$async56619(f__$1,blockable__$1,meta56620));
});

}

return (new cljs.core.async.t_cljs$core$async56619(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args56628 = [];
var len__25826__auto___56631 = arguments.length;
var i__25827__auto___56632 = (0);
while(true){
if((i__25827__auto___56632 < len__25826__auto___56631)){
args56628.push((arguments[i__25827__auto___56632]));

var G__56633 = (i__25827__auto___56632 + (1));
i__25827__auto___56632 = G__56633;
continue;
} else {
}
break;
}

var G__56630 = args56628.length;
switch (G__56630) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56628.length)].join('')));

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
var args56635 = [];
var len__25826__auto___56638 = arguments.length;
var i__25827__auto___56639 = (0);
while(true){
if((i__25827__auto___56639 < len__25826__auto___56638)){
args56635.push((arguments[i__25827__auto___56639]));

var G__56640 = (i__25827__auto___56639 + (1));
i__25827__auto___56639 = G__56640;
continue;
} else {
}
break;
}

var G__56637 = args56635.length;
switch (G__56637) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56635.length)].join('')));

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
var args56642 = [];
var len__25826__auto___56645 = arguments.length;
var i__25827__auto___56646 = (0);
while(true){
if((i__25827__auto___56646 < len__25826__auto___56645)){
args56642.push((arguments[i__25827__auto___56646]));

var G__56647 = (i__25827__auto___56646 + (1));
i__25827__auto___56646 = G__56647;
continue;
} else {
}
break;
}

var G__56644 = args56642.length;
switch (G__56644) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56642.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_56649 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_56649);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_56649,ret){
return (function (){
return fn1.call(null,val_56649);
});})(val_56649,ret))
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
var args56650 = [];
var len__25826__auto___56653 = arguments.length;
var i__25827__auto___56654 = (0);
while(true){
if((i__25827__auto___56654 < len__25826__auto___56653)){
args56650.push((arguments[i__25827__auto___56654]));

var G__56655 = (i__25827__auto___56654 + (1));
i__25827__auto___56654 = G__56655;
continue;
} else {
}
break;
}

var G__56652 = args56650.length;
switch (G__56652) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56650.length)].join('')));

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
var n__25666__auto___56657 = n;
var x_56658 = (0);
while(true){
if((x_56658 < n__25666__auto___56657)){
(a[x_56658] = (0));

var G__56659 = (x_56658 + (1));
x_56658 = G__56659;
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

var G__56660 = (i + (1));
i = G__56660;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async56664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56664 = (function (alt_flag,flag,meta56665){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta56665 = meta56665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_56666,meta56665__$1){
var self__ = this;
var _56666__$1 = this;
return (new cljs.core.async.t_cljs$core$async56664(self__.alt_flag,self__.flag,meta56665__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async56664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_56666){
var self__ = this;
var _56666__$1 = this;
return self__.meta56665;
});})(flag))
;

cljs.core.async.t_cljs$core$async56664.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async56664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async56664.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async56664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async56664.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56665","meta56665",1091796484,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async56664.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56664";

cljs.core.async.t_cljs$core$async56664.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async56664");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async56664 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56664(alt_flag__$1,flag__$1,meta56665){
return (new cljs.core.async.t_cljs$core$async56664(alt_flag__$1,flag__$1,meta56665));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async56664(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async56670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56670 = (function (alt_handler,flag,cb,meta56671){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta56671 = meta56671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56672,meta56671__$1){
var self__ = this;
var _56672__$1 = this;
return (new cljs.core.async.t_cljs$core$async56670(self__.alt_handler,self__.flag,self__.cb,meta56671__$1));
});

cljs.core.async.t_cljs$core$async56670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56672){
var self__ = this;
var _56672__$1 = this;
return self__.meta56671;
});

cljs.core.async.t_cljs$core$async56670.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async56670.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async56670.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async56670.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async56670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56671","meta56671",1860246312,null)], null);
});

cljs.core.async.t_cljs$core$async56670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56670";

cljs.core.async.t_cljs$core$async56670.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async56670");
});

cljs.core.async.__GT_t_cljs$core$async56670 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56670(alt_handler__$1,flag__$1,cb__$1,meta56671){
return (new cljs.core.async.t_cljs$core$async56670(alt_handler__$1,flag__$1,cb__$1,meta56671));
});

}

return (new cljs.core.async.t_cljs$core$async56670(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__56673_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56673_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56674_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56674_SHARP_,port], null));
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
var G__56675 = (i + (1));
i = G__56675;
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
var len__25826__auto___56681 = arguments.length;
var i__25827__auto___56682 = (0);
while(true){
if((i__25827__auto___56682 < len__25826__auto___56681)){
args__25833__auto__.push((arguments[i__25827__auto___56682]));

var G__56683 = (i__25827__auto___56682 + (1));
i__25827__auto___56682 = G__56683;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56678){
var map__56679 = p__56678;
var map__56679__$1 = ((((!((map__56679 == null)))?((((map__56679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56679):map__56679);
var opts = map__56679__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56676){
var G__56677 = cljs.core.first.call(null,seq56676);
var seq56676__$1 = cljs.core.next.call(null,seq56676);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56677,seq56676__$1);
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
var args56684 = [];
var len__25826__auto___56734 = arguments.length;
var i__25827__auto___56735 = (0);
while(true){
if((i__25827__auto___56735 < len__25826__auto___56734)){
args56684.push((arguments[i__25827__auto___56735]));

var G__56736 = (i__25827__auto___56735 + (1));
i__25827__auto___56735 = G__56736;
continue;
} else {
}
break;
}

var G__56686 = args56684.length;
switch (G__56686) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56684.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37979__auto___56738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___56738){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___56738){
return (function (state_56710){
var state_val_56711 = (state_56710[(1)]);
if((state_val_56711 === (7))){
var inst_56706 = (state_56710[(2)]);
var state_56710__$1 = state_56710;
var statearr_56712_56739 = state_56710__$1;
(statearr_56712_56739[(2)] = inst_56706);

(statearr_56712_56739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (1))){
var state_56710__$1 = state_56710;
var statearr_56713_56740 = state_56710__$1;
(statearr_56713_56740[(2)] = null);

(statearr_56713_56740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (4))){
var inst_56689 = (state_56710[(7)]);
var inst_56689__$1 = (state_56710[(2)]);
var inst_56690 = (inst_56689__$1 == null);
var state_56710__$1 = (function (){var statearr_56714 = state_56710;
(statearr_56714[(7)] = inst_56689__$1);

return statearr_56714;
})();
if(cljs.core.truth_(inst_56690)){
var statearr_56715_56741 = state_56710__$1;
(statearr_56715_56741[(1)] = (5));

} else {
var statearr_56716_56742 = state_56710__$1;
(statearr_56716_56742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (13))){
var state_56710__$1 = state_56710;
var statearr_56717_56743 = state_56710__$1;
(statearr_56717_56743[(2)] = null);

(statearr_56717_56743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (6))){
var inst_56689 = (state_56710[(7)]);
var state_56710__$1 = state_56710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56710__$1,(11),to,inst_56689);
} else {
if((state_val_56711 === (3))){
var inst_56708 = (state_56710[(2)]);
var state_56710__$1 = state_56710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56710__$1,inst_56708);
} else {
if((state_val_56711 === (12))){
var state_56710__$1 = state_56710;
var statearr_56718_56744 = state_56710__$1;
(statearr_56718_56744[(2)] = null);

(statearr_56718_56744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (2))){
var state_56710__$1 = state_56710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56710__$1,(4),from);
} else {
if((state_val_56711 === (11))){
var inst_56699 = (state_56710[(2)]);
var state_56710__$1 = state_56710;
if(cljs.core.truth_(inst_56699)){
var statearr_56719_56745 = state_56710__$1;
(statearr_56719_56745[(1)] = (12));

} else {
var statearr_56720_56746 = state_56710__$1;
(statearr_56720_56746[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (9))){
var state_56710__$1 = state_56710;
var statearr_56721_56747 = state_56710__$1;
(statearr_56721_56747[(2)] = null);

(statearr_56721_56747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (5))){
var state_56710__$1 = state_56710;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56722_56748 = state_56710__$1;
(statearr_56722_56748[(1)] = (8));

} else {
var statearr_56723_56749 = state_56710__$1;
(statearr_56723_56749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (14))){
var inst_56704 = (state_56710[(2)]);
var state_56710__$1 = state_56710;
var statearr_56724_56750 = state_56710__$1;
(statearr_56724_56750[(2)] = inst_56704);

(statearr_56724_56750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (10))){
var inst_56696 = (state_56710[(2)]);
var state_56710__$1 = state_56710;
var statearr_56725_56751 = state_56710__$1;
(statearr_56725_56751[(2)] = inst_56696);

(statearr_56725_56751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (8))){
var inst_56693 = cljs.core.async.close_BANG_.call(null,to);
var state_56710__$1 = state_56710;
var statearr_56726_56752 = state_56710__$1;
(statearr_56726_56752[(2)] = inst_56693);

(statearr_56726_56752[(1)] = (10));


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
});})(c__37979__auto___56738))
;
return ((function (switch__37867__auto__,c__37979__auto___56738){
return (function() {
var cljs$core$async$state_machine__37868__auto__ = null;
var cljs$core$async$state_machine__37868__auto____0 = (function (){
var statearr_56730 = [null,null,null,null,null,null,null,null];
(statearr_56730[(0)] = cljs$core$async$state_machine__37868__auto__);

(statearr_56730[(1)] = (1));

return statearr_56730;
});
var cljs$core$async$state_machine__37868__auto____1 = (function (state_56710){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_56710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e56731){if((e56731 instanceof Object)){
var ex__37871__auto__ = e56731;
var statearr_56732_56753 = state_56710;
(statearr_56732_56753[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56754 = state_56710;
state_56710 = G__56754;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$state_machine__37868__auto__ = function(state_56710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37868__auto____1.call(this,state_56710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37868__auto____0;
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37868__auto____1;
return cljs$core$async$state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___56738))
})();
var state__37981__auto__ = (function (){var statearr_56733 = f__37980__auto__.call(null);
(statearr_56733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___56738);

return statearr_56733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___56738))
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
return (function (p__56942){
var vec__56943 = p__56942;
var v = cljs.core.nth.call(null,vec__56943,(0),null);
var p = cljs.core.nth.call(null,vec__56943,(1),null);
var job = vec__56943;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37979__auto___57129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___57129,res,vec__56943,v,p,job,jobs,results){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___57129,res,vec__56943,v,p,job,jobs,results){
return (function (state_56950){
var state_val_56951 = (state_56950[(1)]);
if((state_val_56951 === (1))){
var state_56950__$1 = state_56950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56950__$1,(2),res,v);
} else {
if((state_val_56951 === (2))){
var inst_56947 = (state_56950[(2)]);
var inst_56948 = cljs.core.async.close_BANG_.call(null,res);
var state_56950__$1 = (function (){var statearr_56952 = state_56950;
(statearr_56952[(7)] = inst_56947);

return statearr_56952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56950__$1,inst_56948);
} else {
return null;
}
}
});})(c__37979__auto___57129,res,vec__56943,v,p,job,jobs,results))
;
return ((function (switch__37867__auto__,c__37979__auto___57129,res,vec__56943,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____0 = (function (){
var statearr_56956 = [null,null,null,null,null,null,null,null];
(statearr_56956[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__);

(statearr_56956[(1)] = (1));

return statearr_56956;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____1 = (function (state_56950){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_56950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e56957){if((e56957 instanceof Object)){
var ex__37871__auto__ = e56957;
var statearr_56958_57130 = state_56950;
(statearr_56958_57130[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57131 = state_56950;
state_56950 = G__57131;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__ = function(state_56950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____1.call(this,state_56950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___57129,res,vec__56943,v,p,job,jobs,results))
})();
var state__37981__auto__ = (function (){var statearr_56959 = f__37980__auto__.call(null);
(statearr_56959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___57129);

return statearr_56959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___57129,res,vec__56943,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__56960){
var vec__56961 = p__56960;
var v = cljs.core.nth.call(null,vec__56961,(0),null);
var p = cljs.core.nth.call(null,vec__56961,(1),null);
var job = vec__56961;
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
var n__25666__auto___57132 = n;
var __57133 = (0);
while(true){
if((__57133 < n__25666__auto___57132)){
var G__56964_57134 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__56964_57134) {
case "compute":
var c__37979__auto___57136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__57133,c__37979__auto___57136,G__56964_57134,n__25666__auto___57132,jobs,results,process,async){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (__57133,c__37979__auto___57136,G__56964_57134,n__25666__auto___57132,jobs,results,process,async){
return (function (state_56977){
var state_val_56978 = (state_56977[(1)]);
if((state_val_56978 === (1))){
var state_56977__$1 = state_56977;
var statearr_56979_57137 = state_56977__$1;
(statearr_56979_57137[(2)] = null);

(statearr_56979_57137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56978 === (2))){
var state_56977__$1 = state_56977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56977__$1,(4),jobs);
} else {
if((state_val_56978 === (3))){
var inst_56975 = (state_56977[(2)]);
var state_56977__$1 = state_56977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56977__$1,inst_56975);
} else {
if((state_val_56978 === (4))){
var inst_56967 = (state_56977[(2)]);
var inst_56968 = process.call(null,inst_56967);
var state_56977__$1 = state_56977;
if(cljs.core.truth_(inst_56968)){
var statearr_56980_57138 = state_56977__$1;
(statearr_56980_57138[(1)] = (5));

} else {
var statearr_56981_57139 = state_56977__$1;
(statearr_56981_57139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56978 === (5))){
var state_56977__$1 = state_56977;
var statearr_56982_57140 = state_56977__$1;
(statearr_56982_57140[(2)] = null);

(statearr_56982_57140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56978 === (6))){
var state_56977__$1 = state_56977;
var statearr_56983_57141 = state_56977__$1;
(statearr_56983_57141[(2)] = null);

(statearr_56983_57141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56978 === (7))){
var inst_56973 = (state_56977[(2)]);
var state_56977__$1 = state_56977;
var statearr_56984_57142 = state_56977__$1;
(statearr_56984_57142[(2)] = inst_56973);

(statearr_56984_57142[(1)] = (3));


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
});})(__57133,c__37979__auto___57136,G__56964_57134,n__25666__auto___57132,jobs,results,process,async))
;
return ((function (__57133,switch__37867__auto__,c__37979__auto___57136,G__56964_57134,n__25666__auto___57132,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____0 = (function (){
var statearr_56988 = [null,null,null,null,null,null,null];
(statearr_56988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__);

(statearr_56988[(1)] = (1));

return statearr_56988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____1 = (function (state_56977){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_56977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e56989){if((e56989 instanceof Object)){
var ex__37871__auto__ = e56989;
var statearr_56990_57143 = state_56977;
(statearr_56990_57143[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57144 = state_56977;
state_56977 = G__57144;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__ = function(state_56977){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____1.call(this,state_56977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__;
})()
;})(__57133,switch__37867__auto__,c__37979__auto___57136,G__56964_57134,n__25666__auto___57132,jobs,results,process,async))
})();
var state__37981__auto__ = (function (){var statearr_56991 = f__37980__auto__.call(null);
(statearr_56991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___57136);

return statearr_56991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(__57133,c__37979__auto___57136,G__56964_57134,n__25666__auto___57132,jobs,results,process,async))
);


break;
case "async":
var c__37979__auto___57145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__57133,c__37979__auto___57145,G__56964_57134,n__25666__auto___57132,jobs,results,process,async){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (__57133,c__37979__auto___57145,G__56964_57134,n__25666__auto___57132,jobs,results,process,async){
return (function (state_57004){
var state_val_57005 = (state_57004[(1)]);
if((state_val_57005 === (1))){
var state_57004__$1 = state_57004;
var statearr_57006_57146 = state_57004__$1;
(statearr_57006_57146[(2)] = null);

(statearr_57006_57146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57005 === (2))){
var state_57004__$1 = state_57004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57004__$1,(4),jobs);
} else {
if((state_val_57005 === (3))){
var inst_57002 = (state_57004[(2)]);
var state_57004__$1 = state_57004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57004__$1,inst_57002);
} else {
if((state_val_57005 === (4))){
var inst_56994 = (state_57004[(2)]);
var inst_56995 = async.call(null,inst_56994);
var state_57004__$1 = state_57004;
if(cljs.core.truth_(inst_56995)){
var statearr_57007_57147 = state_57004__$1;
(statearr_57007_57147[(1)] = (5));

} else {
var statearr_57008_57148 = state_57004__$1;
(statearr_57008_57148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57005 === (5))){
var state_57004__$1 = state_57004;
var statearr_57009_57149 = state_57004__$1;
(statearr_57009_57149[(2)] = null);

(statearr_57009_57149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57005 === (6))){
var state_57004__$1 = state_57004;
var statearr_57010_57150 = state_57004__$1;
(statearr_57010_57150[(2)] = null);

(statearr_57010_57150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57005 === (7))){
var inst_57000 = (state_57004[(2)]);
var state_57004__$1 = state_57004;
var statearr_57011_57151 = state_57004__$1;
(statearr_57011_57151[(2)] = inst_57000);

(statearr_57011_57151[(1)] = (3));


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
});})(__57133,c__37979__auto___57145,G__56964_57134,n__25666__auto___57132,jobs,results,process,async))
;
return ((function (__57133,switch__37867__auto__,c__37979__auto___57145,G__56964_57134,n__25666__auto___57132,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____0 = (function (){
var statearr_57015 = [null,null,null,null,null,null,null];
(statearr_57015[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__);

(statearr_57015[(1)] = (1));

return statearr_57015;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____1 = (function (state_57004){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_57004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e57016){if((e57016 instanceof Object)){
var ex__37871__auto__ = e57016;
var statearr_57017_57152 = state_57004;
(statearr_57017_57152[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57153 = state_57004;
state_57004 = G__57153;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__ = function(state_57004){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____1.call(this,state_57004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__;
})()
;})(__57133,switch__37867__auto__,c__37979__auto___57145,G__56964_57134,n__25666__auto___57132,jobs,results,process,async))
})();
var state__37981__auto__ = (function (){var statearr_57018 = f__37980__auto__.call(null);
(statearr_57018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___57145);

return statearr_57018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(__57133,c__37979__auto___57145,G__56964_57134,n__25666__auto___57132,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__57154 = (__57133 + (1));
__57133 = G__57154;
continue;
} else {
}
break;
}

var c__37979__auto___57155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___57155,jobs,results,process,async){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___57155,jobs,results,process,async){
return (function (state_57040){
var state_val_57041 = (state_57040[(1)]);
if((state_val_57041 === (1))){
var state_57040__$1 = state_57040;
var statearr_57042_57156 = state_57040__$1;
(statearr_57042_57156[(2)] = null);

(statearr_57042_57156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57041 === (2))){
var state_57040__$1 = state_57040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57040__$1,(4),from);
} else {
if((state_val_57041 === (3))){
var inst_57038 = (state_57040[(2)]);
var state_57040__$1 = state_57040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57040__$1,inst_57038);
} else {
if((state_val_57041 === (4))){
var inst_57021 = (state_57040[(7)]);
var inst_57021__$1 = (state_57040[(2)]);
var inst_57022 = (inst_57021__$1 == null);
var state_57040__$1 = (function (){var statearr_57043 = state_57040;
(statearr_57043[(7)] = inst_57021__$1);

return statearr_57043;
})();
if(cljs.core.truth_(inst_57022)){
var statearr_57044_57157 = state_57040__$1;
(statearr_57044_57157[(1)] = (5));

} else {
var statearr_57045_57158 = state_57040__$1;
(statearr_57045_57158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57041 === (5))){
var inst_57024 = cljs.core.async.close_BANG_.call(null,jobs);
var state_57040__$1 = state_57040;
var statearr_57046_57159 = state_57040__$1;
(statearr_57046_57159[(2)] = inst_57024);

(statearr_57046_57159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57041 === (6))){
var inst_57021 = (state_57040[(7)]);
var inst_57026 = (state_57040[(8)]);
var inst_57026__$1 = cljs.core.async.chan.call(null,(1));
var inst_57027 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57028 = [inst_57021,inst_57026__$1];
var inst_57029 = (new cljs.core.PersistentVector(null,2,(5),inst_57027,inst_57028,null));
var state_57040__$1 = (function (){var statearr_57047 = state_57040;
(statearr_57047[(8)] = inst_57026__$1);

return statearr_57047;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57040__$1,(8),jobs,inst_57029);
} else {
if((state_val_57041 === (7))){
var inst_57036 = (state_57040[(2)]);
var state_57040__$1 = state_57040;
var statearr_57048_57160 = state_57040__$1;
(statearr_57048_57160[(2)] = inst_57036);

(statearr_57048_57160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57041 === (8))){
var inst_57026 = (state_57040[(8)]);
var inst_57031 = (state_57040[(2)]);
var state_57040__$1 = (function (){var statearr_57049 = state_57040;
(statearr_57049[(9)] = inst_57031);

return statearr_57049;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57040__$1,(9),results,inst_57026);
} else {
if((state_val_57041 === (9))){
var inst_57033 = (state_57040[(2)]);
var state_57040__$1 = (function (){var statearr_57050 = state_57040;
(statearr_57050[(10)] = inst_57033);

return statearr_57050;
})();
var statearr_57051_57161 = state_57040__$1;
(statearr_57051_57161[(2)] = null);

(statearr_57051_57161[(1)] = (2));


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
});})(c__37979__auto___57155,jobs,results,process,async))
;
return ((function (switch__37867__auto__,c__37979__auto___57155,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____0 = (function (){
var statearr_57055 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57055[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__);

(statearr_57055[(1)] = (1));

return statearr_57055;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____1 = (function (state_57040){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_57040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e57056){if((e57056 instanceof Object)){
var ex__37871__auto__ = e57056;
var statearr_57057_57162 = state_57040;
(statearr_57057_57162[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57163 = state_57040;
state_57040 = G__57163;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__ = function(state_57040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____1.call(this,state_57040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___57155,jobs,results,process,async))
})();
var state__37981__auto__ = (function (){var statearr_57058 = f__37980__auto__.call(null);
(statearr_57058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___57155);

return statearr_57058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___57155,jobs,results,process,async))
);


var c__37979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto__,jobs,results,process,async){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto__,jobs,results,process,async){
return (function (state_57096){
var state_val_57097 = (state_57096[(1)]);
if((state_val_57097 === (7))){
var inst_57092 = (state_57096[(2)]);
var state_57096__$1 = state_57096;
var statearr_57098_57164 = state_57096__$1;
(statearr_57098_57164[(2)] = inst_57092);

(statearr_57098_57164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (20))){
var state_57096__$1 = state_57096;
var statearr_57099_57165 = state_57096__$1;
(statearr_57099_57165[(2)] = null);

(statearr_57099_57165[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (1))){
var state_57096__$1 = state_57096;
var statearr_57100_57166 = state_57096__$1;
(statearr_57100_57166[(2)] = null);

(statearr_57100_57166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (4))){
var inst_57061 = (state_57096[(7)]);
var inst_57061__$1 = (state_57096[(2)]);
var inst_57062 = (inst_57061__$1 == null);
var state_57096__$1 = (function (){var statearr_57101 = state_57096;
(statearr_57101[(7)] = inst_57061__$1);

return statearr_57101;
})();
if(cljs.core.truth_(inst_57062)){
var statearr_57102_57167 = state_57096__$1;
(statearr_57102_57167[(1)] = (5));

} else {
var statearr_57103_57168 = state_57096__$1;
(statearr_57103_57168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (15))){
var inst_57074 = (state_57096[(8)]);
var state_57096__$1 = state_57096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57096__$1,(18),to,inst_57074);
} else {
if((state_val_57097 === (21))){
var inst_57087 = (state_57096[(2)]);
var state_57096__$1 = state_57096;
var statearr_57104_57169 = state_57096__$1;
(statearr_57104_57169[(2)] = inst_57087);

(statearr_57104_57169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (13))){
var inst_57089 = (state_57096[(2)]);
var state_57096__$1 = (function (){var statearr_57105 = state_57096;
(statearr_57105[(9)] = inst_57089);

return statearr_57105;
})();
var statearr_57106_57170 = state_57096__$1;
(statearr_57106_57170[(2)] = null);

(statearr_57106_57170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (6))){
var inst_57061 = (state_57096[(7)]);
var state_57096__$1 = state_57096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57096__$1,(11),inst_57061);
} else {
if((state_val_57097 === (17))){
var inst_57082 = (state_57096[(2)]);
var state_57096__$1 = state_57096;
if(cljs.core.truth_(inst_57082)){
var statearr_57107_57171 = state_57096__$1;
(statearr_57107_57171[(1)] = (19));

} else {
var statearr_57108_57172 = state_57096__$1;
(statearr_57108_57172[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (3))){
var inst_57094 = (state_57096[(2)]);
var state_57096__$1 = state_57096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57096__$1,inst_57094);
} else {
if((state_val_57097 === (12))){
var inst_57071 = (state_57096[(10)]);
var state_57096__$1 = state_57096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57096__$1,(14),inst_57071);
} else {
if((state_val_57097 === (2))){
var state_57096__$1 = state_57096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57096__$1,(4),results);
} else {
if((state_val_57097 === (19))){
var state_57096__$1 = state_57096;
var statearr_57109_57173 = state_57096__$1;
(statearr_57109_57173[(2)] = null);

(statearr_57109_57173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (11))){
var inst_57071 = (state_57096[(2)]);
var state_57096__$1 = (function (){var statearr_57110 = state_57096;
(statearr_57110[(10)] = inst_57071);

return statearr_57110;
})();
var statearr_57111_57174 = state_57096__$1;
(statearr_57111_57174[(2)] = null);

(statearr_57111_57174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (9))){
var state_57096__$1 = state_57096;
var statearr_57112_57175 = state_57096__$1;
(statearr_57112_57175[(2)] = null);

(statearr_57112_57175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (5))){
var state_57096__$1 = state_57096;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57113_57176 = state_57096__$1;
(statearr_57113_57176[(1)] = (8));

} else {
var statearr_57114_57177 = state_57096__$1;
(statearr_57114_57177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (14))){
var inst_57076 = (state_57096[(11)]);
var inst_57074 = (state_57096[(8)]);
var inst_57074__$1 = (state_57096[(2)]);
var inst_57075 = (inst_57074__$1 == null);
var inst_57076__$1 = cljs.core.not.call(null,inst_57075);
var state_57096__$1 = (function (){var statearr_57115 = state_57096;
(statearr_57115[(11)] = inst_57076__$1);

(statearr_57115[(8)] = inst_57074__$1);

return statearr_57115;
})();
if(inst_57076__$1){
var statearr_57116_57178 = state_57096__$1;
(statearr_57116_57178[(1)] = (15));

} else {
var statearr_57117_57179 = state_57096__$1;
(statearr_57117_57179[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (16))){
var inst_57076 = (state_57096[(11)]);
var state_57096__$1 = state_57096;
var statearr_57118_57180 = state_57096__$1;
(statearr_57118_57180[(2)] = inst_57076);

(statearr_57118_57180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (10))){
var inst_57068 = (state_57096[(2)]);
var state_57096__$1 = state_57096;
var statearr_57119_57181 = state_57096__$1;
(statearr_57119_57181[(2)] = inst_57068);

(statearr_57119_57181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (18))){
var inst_57079 = (state_57096[(2)]);
var state_57096__$1 = state_57096;
var statearr_57120_57182 = state_57096__$1;
(statearr_57120_57182[(2)] = inst_57079);

(statearr_57120_57182[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57097 === (8))){
var inst_57065 = cljs.core.async.close_BANG_.call(null,to);
var state_57096__$1 = state_57096;
var statearr_57121_57183 = state_57096__$1;
(statearr_57121_57183[(2)] = inst_57065);

(statearr_57121_57183[(1)] = (10));


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
});})(c__37979__auto__,jobs,results,process,async))
;
return ((function (switch__37867__auto__,c__37979__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____0 = (function (){
var statearr_57125 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57125[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__);

(statearr_57125[(1)] = (1));

return statearr_57125;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____1 = (function (state_57096){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_57096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e57126){if((e57126 instanceof Object)){
var ex__37871__auto__ = e57126;
var statearr_57127_57184 = state_57096;
(statearr_57127_57184[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57185 = state_57096;
state_57096 = G__57185;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__ = function(state_57096){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____1.call(this,state_57096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37868__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto__,jobs,results,process,async))
})();
var state__37981__auto__ = (function (){var statearr_57128 = f__37980__auto__.call(null);
(statearr_57128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto__);

return statearr_57128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto__,jobs,results,process,async))
);

return c__37979__auto__;
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
var args57186 = [];
var len__25826__auto___57189 = arguments.length;
var i__25827__auto___57190 = (0);
while(true){
if((i__25827__auto___57190 < len__25826__auto___57189)){
args57186.push((arguments[i__25827__auto___57190]));

var G__57191 = (i__25827__auto___57190 + (1));
i__25827__auto___57190 = G__57191;
continue;
} else {
}
break;
}

var G__57188 = args57186.length;
switch (G__57188) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57186.length)].join('')));

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
var args57193 = [];
var len__25826__auto___57196 = arguments.length;
var i__25827__auto___57197 = (0);
while(true){
if((i__25827__auto___57197 < len__25826__auto___57196)){
args57193.push((arguments[i__25827__auto___57197]));

var G__57198 = (i__25827__auto___57197 + (1));
i__25827__auto___57197 = G__57198;
continue;
} else {
}
break;
}

var G__57195 = args57193.length;
switch (G__57195) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57193.length)].join('')));

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
var args57200 = [];
var len__25826__auto___57253 = arguments.length;
var i__25827__auto___57254 = (0);
while(true){
if((i__25827__auto___57254 < len__25826__auto___57253)){
args57200.push((arguments[i__25827__auto___57254]));

var G__57255 = (i__25827__auto___57254 + (1));
i__25827__auto___57254 = G__57255;
continue;
} else {
}
break;
}

var G__57202 = args57200.length;
switch (G__57202) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57200.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37979__auto___57257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___57257,tc,fc){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___57257,tc,fc){
return (function (state_57228){
var state_val_57229 = (state_57228[(1)]);
if((state_val_57229 === (7))){
var inst_57224 = (state_57228[(2)]);
var state_57228__$1 = state_57228;
var statearr_57230_57258 = state_57228__$1;
(statearr_57230_57258[(2)] = inst_57224);

(statearr_57230_57258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57229 === (1))){
var state_57228__$1 = state_57228;
var statearr_57231_57259 = state_57228__$1;
(statearr_57231_57259[(2)] = null);

(statearr_57231_57259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57229 === (4))){
var inst_57205 = (state_57228[(7)]);
var inst_57205__$1 = (state_57228[(2)]);
var inst_57206 = (inst_57205__$1 == null);
var state_57228__$1 = (function (){var statearr_57232 = state_57228;
(statearr_57232[(7)] = inst_57205__$1);

return statearr_57232;
})();
if(cljs.core.truth_(inst_57206)){
var statearr_57233_57260 = state_57228__$1;
(statearr_57233_57260[(1)] = (5));

} else {
var statearr_57234_57261 = state_57228__$1;
(statearr_57234_57261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57229 === (13))){
var state_57228__$1 = state_57228;
var statearr_57235_57262 = state_57228__$1;
(statearr_57235_57262[(2)] = null);

(statearr_57235_57262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57229 === (6))){
var inst_57205 = (state_57228[(7)]);
var inst_57211 = p.call(null,inst_57205);
var state_57228__$1 = state_57228;
if(cljs.core.truth_(inst_57211)){
var statearr_57236_57263 = state_57228__$1;
(statearr_57236_57263[(1)] = (9));

} else {
var statearr_57237_57264 = state_57228__$1;
(statearr_57237_57264[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57229 === (3))){
var inst_57226 = (state_57228[(2)]);
var state_57228__$1 = state_57228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57228__$1,inst_57226);
} else {
if((state_val_57229 === (12))){
var state_57228__$1 = state_57228;
var statearr_57238_57265 = state_57228__$1;
(statearr_57238_57265[(2)] = null);

(statearr_57238_57265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57229 === (2))){
var state_57228__$1 = state_57228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57228__$1,(4),ch);
} else {
if((state_val_57229 === (11))){
var inst_57205 = (state_57228[(7)]);
var inst_57215 = (state_57228[(2)]);
var state_57228__$1 = state_57228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57228__$1,(8),inst_57215,inst_57205);
} else {
if((state_val_57229 === (9))){
var state_57228__$1 = state_57228;
var statearr_57239_57266 = state_57228__$1;
(statearr_57239_57266[(2)] = tc);

(statearr_57239_57266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57229 === (5))){
var inst_57208 = cljs.core.async.close_BANG_.call(null,tc);
var inst_57209 = cljs.core.async.close_BANG_.call(null,fc);
var state_57228__$1 = (function (){var statearr_57240 = state_57228;
(statearr_57240[(8)] = inst_57208);

return statearr_57240;
})();
var statearr_57241_57267 = state_57228__$1;
(statearr_57241_57267[(2)] = inst_57209);

(statearr_57241_57267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57229 === (14))){
var inst_57222 = (state_57228[(2)]);
var state_57228__$1 = state_57228;
var statearr_57242_57268 = state_57228__$1;
(statearr_57242_57268[(2)] = inst_57222);

(statearr_57242_57268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57229 === (10))){
var state_57228__$1 = state_57228;
var statearr_57243_57269 = state_57228__$1;
(statearr_57243_57269[(2)] = fc);

(statearr_57243_57269[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57229 === (8))){
var inst_57217 = (state_57228[(2)]);
var state_57228__$1 = state_57228;
if(cljs.core.truth_(inst_57217)){
var statearr_57244_57270 = state_57228__$1;
(statearr_57244_57270[(1)] = (12));

} else {
var statearr_57245_57271 = state_57228__$1;
(statearr_57245_57271[(1)] = (13));

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
});})(c__37979__auto___57257,tc,fc))
;
return ((function (switch__37867__auto__,c__37979__auto___57257,tc,fc){
return (function() {
var cljs$core$async$state_machine__37868__auto__ = null;
var cljs$core$async$state_machine__37868__auto____0 = (function (){
var statearr_57249 = [null,null,null,null,null,null,null,null,null];
(statearr_57249[(0)] = cljs$core$async$state_machine__37868__auto__);

(statearr_57249[(1)] = (1));

return statearr_57249;
});
var cljs$core$async$state_machine__37868__auto____1 = (function (state_57228){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_57228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e57250){if((e57250 instanceof Object)){
var ex__37871__auto__ = e57250;
var statearr_57251_57272 = state_57228;
(statearr_57251_57272[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57273 = state_57228;
state_57228 = G__57273;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$state_machine__37868__auto__ = function(state_57228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37868__auto____1.call(this,state_57228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37868__auto____0;
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37868__auto____1;
return cljs$core$async$state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___57257,tc,fc))
})();
var state__37981__auto__ = (function (){var statearr_57252 = f__37980__auto__.call(null);
(statearr_57252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___57257);

return statearr_57252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___57257,tc,fc))
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
var c__37979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto__){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto__){
return (function (state_57337){
var state_val_57338 = (state_57337[(1)]);
if((state_val_57338 === (7))){
var inst_57333 = (state_57337[(2)]);
var state_57337__$1 = state_57337;
var statearr_57339_57360 = state_57337__$1;
(statearr_57339_57360[(2)] = inst_57333);

(statearr_57339_57360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57338 === (1))){
var inst_57317 = init;
var state_57337__$1 = (function (){var statearr_57340 = state_57337;
(statearr_57340[(7)] = inst_57317);

return statearr_57340;
})();
var statearr_57341_57361 = state_57337__$1;
(statearr_57341_57361[(2)] = null);

(statearr_57341_57361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57338 === (4))){
var inst_57320 = (state_57337[(8)]);
var inst_57320__$1 = (state_57337[(2)]);
var inst_57321 = (inst_57320__$1 == null);
var state_57337__$1 = (function (){var statearr_57342 = state_57337;
(statearr_57342[(8)] = inst_57320__$1);

return statearr_57342;
})();
if(cljs.core.truth_(inst_57321)){
var statearr_57343_57362 = state_57337__$1;
(statearr_57343_57362[(1)] = (5));

} else {
var statearr_57344_57363 = state_57337__$1;
(statearr_57344_57363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57338 === (6))){
var inst_57324 = (state_57337[(9)]);
var inst_57320 = (state_57337[(8)]);
var inst_57317 = (state_57337[(7)]);
var inst_57324__$1 = f.call(null,inst_57317,inst_57320);
var inst_57325 = cljs.core.reduced_QMARK_.call(null,inst_57324__$1);
var state_57337__$1 = (function (){var statearr_57345 = state_57337;
(statearr_57345[(9)] = inst_57324__$1);

return statearr_57345;
})();
if(inst_57325){
var statearr_57346_57364 = state_57337__$1;
(statearr_57346_57364[(1)] = (8));

} else {
var statearr_57347_57365 = state_57337__$1;
(statearr_57347_57365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57338 === (3))){
var inst_57335 = (state_57337[(2)]);
var state_57337__$1 = state_57337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57337__$1,inst_57335);
} else {
if((state_val_57338 === (2))){
var state_57337__$1 = state_57337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57337__$1,(4),ch);
} else {
if((state_val_57338 === (9))){
var inst_57324 = (state_57337[(9)]);
var inst_57317 = inst_57324;
var state_57337__$1 = (function (){var statearr_57348 = state_57337;
(statearr_57348[(7)] = inst_57317);

return statearr_57348;
})();
var statearr_57349_57366 = state_57337__$1;
(statearr_57349_57366[(2)] = null);

(statearr_57349_57366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57338 === (5))){
var inst_57317 = (state_57337[(7)]);
var state_57337__$1 = state_57337;
var statearr_57350_57367 = state_57337__$1;
(statearr_57350_57367[(2)] = inst_57317);

(statearr_57350_57367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57338 === (10))){
var inst_57331 = (state_57337[(2)]);
var state_57337__$1 = state_57337;
var statearr_57351_57368 = state_57337__$1;
(statearr_57351_57368[(2)] = inst_57331);

(statearr_57351_57368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57338 === (8))){
var inst_57324 = (state_57337[(9)]);
var inst_57327 = cljs.core.deref.call(null,inst_57324);
var state_57337__$1 = state_57337;
var statearr_57352_57369 = state_57337__$1;
(statearr_57352_57369[(2)] = inst_57327);

(statearr_57352_57369[(1)] = (10));


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
});})(c__37979__auto__))
;
return ((function (switch__37867__auto__,c__37979__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37868__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37868__auto____0 = (function (){
var statearr_57356 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57356[(0)] = cljs$core$async$reduce_$_state_machine__37868__auto__);

(statearr_57356[(1)] = (1));

return statearr_57356;
});
var cljs$core$async$reduce_$_state_machine__37868__auto____1 = (function (state_57337){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_57337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e57357){if((e57357 instanceof Object)){
var ex__37871__auto__ = e57357;
var statearr_57358_57370 = state_57337;
(statearr_57358_57370[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57371 = state_57337;
state_57337 = G__57371;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37868__auto__ = function(state_57337){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37868__auto____1.call(this,state_57337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37868__auto____0;
cljs$core$async$reduce_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37868__auto____1;
return cljs$core$async$reduce_$_state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto__))
})();
var state__37981__auto__ = (function (){var statearr_57359 = f__37980__auto__.call(null);
(statearr_57359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto__);

return statearr_57359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto__))
);

return c__37979__auto__;
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
var args57372 = [];
var len__25826__auto___57424 = arguments.length;
var i__25827__auto___57425 = (0);
while(true){
if((i__25827__auto___57425 < len__25826__auto___57424)){
args57372.push((arguments[i__25827__auto___57425]));

var G__57426 = (i__25827__auto___57425 + (1));
i__25827__auto___57425 = G__57426;
continue;
} else {
}
break;
}

var G__57374 = args57372.length;
switch (G__57374) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57372.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto__){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto__){
return (function (state_57399){
var state_val_57400 = (state_57399[(1)]);
if((state_val_57400 === (7))){
var inst_57381 = (state_57399[(2)]);
var state_57399__$1 = state_57399;
var statearr_57401_57428 = state_57399__$1;
(statearr_57401_57428[(2)] = inst_57381);

(statearr_57401_57428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57400 === (1))){
var inst_57375 = cljs.core.seq.call(null,coll);
var inst_57376 = inst_57375;
var state_57399__$1 = (function (){var statearr_57402 = state_57399;
(statearr_57402[(7)] = inst_57376);

return statearr_57402;
})();
var statearr_57403_57429 = state_57399__$1;
(statearr_57403_57429[(2)] = null);

(statearr_57403_57429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57400 === (4))){
var inst_57376 = (state_57399[(7)]);
var inst_57379 = cljs.core.first.call(null,inst_57376);
var state_57399__$1 = state_57399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57399__$1,(7),ch,inst_57379);
} else {
if((state_val_57400 === (13))){
var inst_57393 = (state_57399[(2)]);
var state_57399__$1 = state_57399;
var statearr_57404_57430 = state_57399__$1;
(statearr_57404_57430[(2)] = inst_57393);

(statearr_57404_57430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57400 === (6))){
var inst_57384 = (state_57399[(2)]);
var state_57399__$1 = state_57399;
if(cljs.core.truth_(inst_57384)){
var statearr_57405_57431 = state_57399__$1;
(statearr_57405_57431[(1)] = (8));

} else {
var statearr_57406_57432 = state_57399__$1;
(statearr_57406_57432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57400 === (3))){
var inst_57397 = (state_57399[(2)]);
var state_57399__$1 = state_57399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57399__$1,inst_57397);
} else {
if((state_val_57400 === (12))){
var state_57399__$1 = state_57399;
var statearr_57407_57433 = state_57399__$1;
(statearr_57407_57433[(2)] = null);

(statearr_57407_57433[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57400 === (2))){
var inst_57376 = (state_57399[(7)]);
var state_57399__$1 = state_57399;
if(cljs.core.truth_(inst_57376)){
var statearr_57408_57434 = state_57399__$1;
(statearr_57408_57434[(1)] = (4));

} else {
var statearr_57409_57435 = state_57399__$1;
(statearr_57409_57435[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57400 === (11))){
var inst_57390 = cljs.core.async.close_BANG_.call(null,ch);
var state_57399__$1 = state_57399;
var statearr_57410_57436 = state_57399__$1;
(statearr_57410_57436[(2)] = inst_57390);

(statearr_57410_57436[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57400 === (9))){
var state_57399__$1 = state_57399;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57411_57437 = state_57399__$1;
(statearr_57411_57437[(1)] = (11));

} else {
var statearr_57412_57438 = state_57399__$1;
(statearr_57412_57438[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57400 === (5))){
var inst_57376 = (state_57399[(7)]);
var state_57399__$1 = state_57399;
var statearr_57413_57439 = state_57399__$1;
(statearr_57413_57439[(2)] = inst_57376);

(statearr_57413_57439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57400 === (10))){
var inst_57395 = (state_57399[(2)]);
var state_57399__$1 = state_57399;
var statearr_57414_57440 = state_57399__$1;
(statearr_57414_57440[(2)] = inst_57395);

(statearr_57414_57440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57400 === (8))){
var inst_57376 = (state_57399[(7)]);
var inst_57386 = cljs.core.next.call(null,inst_57376);
var inst_57376__$1 = inst_57386;
var state_57399__$1 = (function (){var statearr_57415 = state_57399;
(statearr_57415[(7)] = inst_57376__$1);

return statearr_57415;
})();
var statearr_57416_57441 = state_57399__$1;
(statearr_57416_57441[(2)] = null);

(statearr_57416_57441[(1)] = (2));


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
});})(c__37979__auto__))
;
return ((function (switch__37867__auto__,c__37979__auto__){
return (function() {
var cljs$core$async$state_machine__37868__auto__ = null;
var cljs$core$async$state_machine__37868__auto____0 = (function (){
var statearr_57420 = [null,null,null,null,null,null,null,null];
(statearr_57420[(0)] = cljs$core$async$state_machine__37868__auto__);

(statearr_57420[(1)] = (1));

return statearr_57420;
});
var cljs$core$async$state_machine__37868__auto____1 = (function (state_57399){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_57399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e57421){if((e57421 instanceof Object)){
var ex__37871__auto__ = e57421;
var statearr_57422_57442 = state_57399;
(statearr_57422_57442[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57443 = state_57399;
state_57399 = G__57443;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$state_machine__37868__auto__ = function(state_57399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37868__auto____1.call(this,state_57399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37868__auto____0;
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37868__auto____1;
return cljs$core$async$state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto__))
})();
var state__37981__auto__ = (function (){var statearr_57423 = f__37980__auto__.call(null);
(statearr_57423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto__);

return statearr_57423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto__))
);

return c__37979__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async57669 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57669 = (function (mult,ch,cs,meta57670){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta57670 = meta57670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async57669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_57671,meta57670__$1){
var self__ = this;
var _57671__$1 = this;
return (new cljs.core.async.t_cljs$core$async57669(self__.mult,self__.ch,self__.cs,meta57670__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async57669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_57671){
var self__ = this;
var _57671__$1 = this;
return self__.meta57670;
});})(cs))
;

cljs.core.async.t_cljs$core$async57669.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async57669.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async57669.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async57669.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57669.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57669.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57669.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57670","meta57670",2093712502,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async57669.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57669";

cljs.core.async.t_cljs$core$async57669.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async57669");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async57669 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async57669(mult__$1,ch__$1,cs__$1,meta57670){
return (new cljs.core.async.t_cljs$core$async57669(mult__$1,ch__$1,cs__$1,meta57670));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async57669(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37979__auto___57894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___57894,cs,m,dchan,dctr,done){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___57894,cs,m,dchan,dctr,done){
return (function (state_57806){
var state_val_57807 = (state_57806[(1)]);
if((state_val_57807 === (7))){
var inst_57802 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57808_57895 = state_57806__$1;
(statearr_57808_57895[(2)] = inst_57802);

(statearr_57808_57895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (20))){
var inst_57705 = (state_57806[(7)]);
var inst_57717 = cljs.core.first.call(null,inst_57705);
var inst_57718 = cljs.core.nth.call(null,inst_57717,(0),null);
var inst_57719 = cljs.core.nth.call(null,inst_57717,(1),null);
var state_57806__$1 = (function (){var statearr_57809 = state_57806;
(statearr_57809[(8)] = inst_57718);

return statearr_57809;
})();
if(cljs.core.truth_(inst_57719)){
var statearr_57810_57896 = state_57806__$1;
(statearr_57810_57896[(1)] = (22));

} else {
var statearr_57811_57897 = state_57806__$1;
(statearr_57811_57897[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (27))){
var inst_57749 = (state_57806[(9)]);
var inst_57754 = (state_57806[(10)]);
var inst_57674 = (state_57806[(11)]);
var inst_57747 = (state_57806[(12)]);
var inst_57754__$1 = cljs.core._nth.call(null,inst_57747,inst_57749);
var inst_57755 = cljs.core.async.put_BANG_.call(null,inst_57754__$1,inst_57674,done);
var state_57806__$1 = (function (){var statearr_57812 = state_57806;
(statearr_57812[(10)] = inst_57754__$1);

return statearr_57812;
})();
if(cljs.core.truth_(inst_57755)){
var statearr_57813_57898 = state_57806__$1;
(statearr_57813_57898[(1)] = (30));

} else {
var statearr_57814_57899 = state_57806__$1;
(statearr_57814_57899[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (1))){
var state_57806__$1 = state_57806;
var statearr_57815_57900 = state_57806__$1;
(statearr_57815_57900[(2)] = null);

(statearr_57815_57900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (24))){
var inst_57705 = (state_57806[(7)]);
var inst_57724 = (state_57806[(2)]);
var inst_57725 = cljs.core.next.call(null,inst_57705);
var inst_57683 = inst_57725;
var inst_57684 = null;
var inst_57685 = (0);
var inst_57686 = (0);
var state_57806__$1 = (function (){var statearr_57816 = state_57806;
(statearr_57816[(13)] = inst_57724);

(statearr_57816[(14)] = inst_57686);

(statearr_57816[(15)] = inst_57684);

(statearr_57816[(16)] = inst_57685);

(statearr_57816[(17)] = inst_57683);

return statearr_57816;
})();
var statearr_57817_57901 = state_57806__$1;
(statearr_57817_57901[(2)] = null);

(statearr_57817_57901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (39))){
var state_57806__$1 = state_57806;
var statearr_57821_57902 = state_57806__$1;
(statearr_57821_57902[(2)] = null);

(statearr_57821_57902[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (4))){
var inst_57674 = (state_57806[(11)]);
var inst_57674__$1 = (state_57806[(2)]);
var inst_57675 = (inst_57674__$1 == null);
var state_57806__$1 = (function (){var statearr_57822 = state_57806;
(statearr_57822[(11)] = inst_57674__$1);

return statearr_57822;
})();
if(cljs.core.truth_(inst_57675)){
var statearr_57823_57903 = state_57806__$1;
(statearr_57823_57903[(1)] = (5));

} else {
var statearr_57824_57904 = state_57806__$1;
(statearr_57824_57904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (15))){
var inst_57686 = (state_57806[(14)]);
var inst_57684 = (state_57806[(15)]);
var inst_57685 = (state_57806[(16)]);
var inst_57683 = (state_57806[(17)]);
var inst_57701 = (state_57806[(2)]);
var inst_57702 = (inst_57686 + (1));
var tmp57818 = inst_57684;
var tmp57819 = inst_57685;
var tmp57820 = inst_57683;
var inst_57683__$1 = tmp57820;
var inst_57684__$1 = tmp57818;
var inst_57685__$1 = tmp57819;
var inst_57686__$1 = inst_57702;
var state_57806__$1 = (function (){var statearr_57825 = state_57806;
(statearr_57825[(18)] = inst_57701);

(statearr_57825[(14)] = inst_57686__$1);

(statearr_57825[(15)] = inst_57684__$1);

(statearr_57825[(16)] = inst_57685__$1);

(statearr_57825[(17)] = inst_57683__$1);

return statearr_57825;
})();
var statearr_57826_57905 = state_57806__$1;
(statearr_57826_57905[(2)] = null);

(statearr_57826_57905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (21))){
var inst_57728 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57830_57906 = state_57806__$1;
(statearr_57830_57906[(2)] = inst_57728);

(statearr_57830_57906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (31))){
var inst_57754 = (state_57806[(10)]);
var inst_57758 = done.call(null,null);
var inst_57759 = cljs.core.async.untap_STAR_.call(null,m,inst_57754);
var state_57806__$1 = (function (){var statearr_57831 = state_57806;
(statearr_57831[(19)] = inst_57758);

return statearr_57831;
})();
var statearr_57832_57907 = state_57806__$1;
(statearr_57832_57907[(2)] = inst_57759);

(statearr_57832_57907[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (32))){
var inst_57749 = (state_57806[(9)]);
var inst_57746 = (state_57806[(20)]);
var inst_57748 = (state_57806[(21)]);
var inst_57747 = (state_57806[(12)]);
var inst_57761 = (state_57806[(2)]);
var inst_57762 = (inst_57749 + (1));
var tmp57827 = inst_57746;
var tmp57828 = inst_57748;
var tmp57829 = inst_57747;
var inst_57746__$1 = tmp57827;
var inst_57747__$1 = tmp57829;
var inst_57748__$1 = tmp57828;
var inst_57749__$1 = inst_57762;
var state_57806__$1 = (function (){var statearr_57833 = state_57806;
(statearr_57833[(9)] = inst_57749__$1);

(statearr_57833[(20)] = inst_57746__$1);

(statearr_57833[(22)] = inst_57761);

(statearr_57833[(21)] = inst_57748__$1);

(statearr_57833[(12)] = inst_57747__$1);

return statearr_57833;
})();
var statearr_57834_57908 = state_57806__$1;
(statearr_57834_57908[(2)] = null);

(statearr_57834_57908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (40))){
var inst_57774 = (state_57806[(23)]);
var inst_57778 = done.call(null,null);
var inst_57779 = cljs.core.async.untap_STAR_.call(null,m,inst_57774);
var state_57806__$1 = (function (){var statearr_57835 = state_57806;
(statearr_57835[(24)] = inst_57778);

return statearr_57835;
})();
var statearr_57836_57909 = state_57806__$1;
(statearr_57836_57909[(2)] = inst_57779);

(statearr_57836_57909[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (33))){
var inst_57765 = (state_57806[(25)]);
var inst_57767 = cljs.core.chunked_seq_QMARK_.call(null,inst_57765);
var state_57806__$1 = state_57806;
if(inst_57767){
var statearr_57837_57910 = state_57806__$1;
(statearr_57837_57910[(1)] = (36));

} else {
var statearr_57838_57911 = state_57806__$1;
(statearr_57838_57911[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (13))){
var inst_57695 = (state_57806[(26)]);
var inst_57698 = cljs.core.async.close_BANG_.call(null,inst_57695);
var state_57806__$1 = state_57806;
var statearr_57839_57912 = state_57806__$1;
(statearr_57839_57912[(2)] = inst_57698);

(statearr_57839_57912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (22))){
var inst_57718 = (state_57806[(8)]);
var inst_57721 = cljs.core.async.close_BANG_.call(null,inst_57718);
var state_57806__$1 = state_57806;
var statearr_57840_57913 = state_57806__$1;
(statearr_57840_57913[(2)] = inst_57721);

(statearr_57840_57913[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (36))){
var inst_57765 = (state_57806[(25)]);
var inst_57769 = cljs.core.chunk_first.call(null,inst_57765);
var inst_57770 = cljs.core.chunk_rest.call(null,inst_57765);
var inst_57771 = cljs.core.count.call(null,inst_57769);
var inst_57746 = inst_57770;
var inst_57747 = inst_57769;
var inst_57748 = inst_57771;
var inst_57749 = (0);
var state_57806__$1 = (function (){var statearr_57841 = state_57806;
(statearr_57841[(9)] = inst_57749);

(statearr_57841[(20)] = inst_57746);

(statearr_57841[(21)] = inst_57748);

(statearr_57841[(12)] = inst_57747);

return statearr_57841;
})();
var statearr_57842_57914 = state_57806__$1;
(statearr_57842_57914[(2)] = null);

(statearr_57842_57914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (41))){
var inst_57765 = (state_57806[(25)]);
var inst_57781 = (state_57806[(2)]);
var inst_57782 = cljs.core.next.call(null,inst_57765);
var inst_57746 = inst_57782;
var inst_57747 = null;
var inst_57748 = (0);
var inst_57749 = (0);
var state_57806__$1 = (function (){var statearr_57843 = state_57806;
(statearr_57843[(9)] = inst_57749);

(statearr_57843[(20)] = inst_57746);

(statearr_57843[(21)] = inst_57748);

(statearr_57843[(12)] = inst_57747);

(statearr_57843[(27)] = inst_57781);

return statearr_57843;
})();
var statearr_57844_57915 = state_57806__$1;
(statearr_57844_57915[(2)] = null);

(statearr_57844_57915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (43))){
var state_57806__$1 = state_57806;
var statearr_57845_57916 = state_57806__$1;
(statearr_57845_57916[(2)] = null);

(statearr_57845_57916[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (29))){
var inst_57790 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57846_57917 = state_57806__$1;
(statearr_57846_57917[(2)] = inst_57790);

(statearr_57846_57917[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (44))){
var inst_57799 = (state_57806[(2)]);
var state_57806__$1 = (function (){var statearr_57847 = state_57806;
(statearr_57847[(28)] = inst_57799);

return statearr_57847;
})();
var statearr_57848_57918 = state_57806__$1;
(statearr_57848_57918[(2)] = null);

(statearr_57848_57918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (6))){
var inst_57738 = (state_57806[(29)]);
var inst_57737 = cljs.core.deref.call(null,cs);
var inst_57738__$1 = cljs.core.keys.call(null,inst_57737);
var inst_57739 = cljs.core.count.call(null,inst_57738__$1);
var inst_57740 = cljs.core.reset_BANG_.call(null,dctr,inst_57739);
var inst_57745 = cljs.core.seq.call(null,inst_57738__$1);
var inst_57746 = inst_57745;
var inst_57747 = null;
var inst_57748 = (0);
var inst_57749 = (0);
var state_57806__$1 = (function (){var statearr_57849 = state_57806;
(statearr_57849[(29)] = inst_57738__$1);

(statearr_57849[(9)] = inst_57749);

(statearr_57849[(20)] = inst_57746);

(statearr_57849[(30)] = inst_57740);

(statearr_57849[(21)] = inst_57748);

(statearr_57849[(12)] = inst_57747);

return statearr_57849;
})();
var statearr_57850_57919 = state_57806__$1;
(statearr_57850_57919[(2)] = null);

(statearr_57850_57919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (28))){
var inst_57746 = (state_57806[(20)]);
var inst_57765 = (state_57806[(25)]);
var inst_57765__$1 = cljs.core.seq.call(null,inst_57746);
var state_57806__$1 = (function (){var statearr_57851 = state_57806;
(statearr_57851[(25)] = inst_57765__$1);

return statearr_57851;
})();
if(inst_57765__$1){
var statearr_57852_57920 = state_57806__$1;
(statearr_57852_57920[(1)] = (33));

} else {
var statearr_57853_57921 = state_57806__$1;
(statearr_57853_57921[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (25))){
var inst_57749 = (state_57806[(9)]);
var inst_57748 = (state_57806[(21)]);
var inst_57751 = (inst_57749 < inst_57748);
var inst_57752 = inst_57751;
var state_57806__$1 = state_57806;
if(cljs.core.truth_(inst_57752)){
var statearr_57854_57922 = state_57806__$1;
(statearr_57854_57922[(1)] = (27));

} else {
var statearr_57855_57923 = state_57806__$1;
(statearr_57855_57923[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (34))){
var state_57806__$1 = state_57806;
var statearr_57856_57924 = state_57806__$1;
(statearr_57856_57924[(2)] = null);

(statearr_57856_57924[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (17))){
var state_57806__$1 = state_57806;
var statearr_57857_57925 = state_57806__$1;
(statearr_57857_57925[(2)] = null);

(statearr_57857_57925[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (3))){
var inst_57804 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57806__$1,inst_57804);
} else {
if((state_val_57807 === (12))){
var inst_57733 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57858_57926 = state_57806__$1;
(statearr_57858_57926[(2)] = inst_57733);

(statearr_57858_57926[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (2))){
var state_57806__$1 = state_57806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57806__$1,(4),ch);
} else {
if((state_val_57807 === (23))){
var state_57806__$1 = state_57806;
var statearr_57859_57927 = state_57806__$1;
(statearr_57859_57927[(2)] = null);

(statearr_57859_57927[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (35))){
var inst_57788 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57860_57928 = state_57806__$1;
(statearr_57860_57928[(2)] = inst_57788);

(statearr_57860_57928[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (19))){
var inst_57705 = (state_57806[(7)]);
var inst_57709 = cljs.core.chunk_first.call(null,inst_57705);
var inst_57710 = cljs.core.chunk_rest.call(null,inst_57705);
var inst_57711 = cljs.core.count.call(null,inst_57709);
var inst_57683 = inst_57710;
var inst_57684 = inst_57709;
var inst_57685 = inst_57711;
var inst_57686 = (0);
var state_57806__$1 = (function (){var statearr_57861 = state_57806;
(statearr_57861[(14)] = inst_57686);

(statearr_57861[(15)] = inst_57684);

(statearr_57861[(16)] = inst_57685);

(statearr_57861[(17)] = inst_57683);

return statearr_57861;
})();
var statearr_57862_57929 = state_57806__$1;
(statearr_57862_57929[(2)] = null);

(statearr_57862_57929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (11))){
var inst_57705 = (state_57806[(7)]);
var inst_57683 = (state_57806[(17)]);
var inst_57705__$1 = cljs.core.seq.call(null,inst_57683);
var state_57806__$1 = (function (){var statearr_57863 = state_57806;
(statearr_57863[(7)] = inst_57705__$1);

return statearr_57863;
})();
if(inst_57705__$1){
var statearr_57864_57930 = state_57806__$1;
(statearr_57864_57930[(1)] = (16));

} else {
var statearr_57865_57931 = state_57806__$1;
(statearr_57865_57931[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (9))){
var inst_57735 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57866_57932 = state_57806__$1;
(statearr_57866_57932[(2)] = inst_57735);

(statearr_57866_57932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (5))){
var inst_57681 = cljs.core.deref.call(null,cs);
var inst_57682 = cljs.core.seq.call(null,inst_57681);
var inst_57683 = inst_57682;
var inst_57684 = null;
var inst_57685 = (0);
var inst_57686 = (0);
var state_57806__$1 = (function (){var statearr_57867 = state_57806;
(statearr_57867[(14)] = inst_57686);

(statearr_57867[(15)] = inst_57684);

(statearr_57867[(16)] = inst_57685);

(statearr_57867[(17)] = inst_57683);

return statearr_57867;
})();
var statearr_57868_57933 = state_57806__$1;
(statearr_57868_57933[(2)] = null);

(statearr_57868_57933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (14))){
var state_57806__$1 = state_57806;
var statearr_57869_57934 = state_57806__$1;
(statearr_57869_57934[(2)] = null);

(statearr_57869_57934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (45))){
var inst_57796 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57870_57935 = state_57806__$1;
(statearr_57870_57935[(2)] = inst_57796);

(statearr_57870_57935[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (26))){
var inst_57738 = (state_57806[(29)]);
var inst_57792 = (state_57806[(2)]);
var inst_57793 = cljs.core.seq.call(null,inst_57738);
var state_57806__$1 = (function (){var statearr_57871 = state_57806;
(statearr_57871[(31)] = inst_57792);

return statearr_57871;
})();
if(inst_57793){
var statearr_57872_57936 = state_57806__$1;
(statearr_57872_57936[(1)] = (42));

} else {
var statearr_57873_57937 = state_57806__$1;
(statearr_57873_57937[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (16))){
var inst_57705 = (state_57806[(7)]);
var inst_57707 = cljs.core.chunked_seq_QMARK_.call(null,inst_57705);
var state_57806__$1 = state_57806;
if(inst_57707){
var statearr_57874_57938 = state_57806__$1;
(statearr_57874_57938[(1)] = (19));

} else {
var statearr_57875_57939 = state_57806__$1;
(statearr_57875_57939[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (38))){
var inst_57785 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57876_57940 = state_57806__$1;
(statearr_57876_57940[(2)] = inst_57785);

(statearr_57876_57940[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (30))){
var state_57806__$1 = state_57806;
var statearr_57877_57941 = state_57806__$1;
(statearr_57877_57941[(2)] = null);

(statearr_57877_57941[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (10))){
var inst_57686 = (state_57806[(14)]);
var inst_57684 = (state_57806[(15)]);
var inst_57694 = cljs.core._nth.call(null,inst_57684,inst_57686);
var inst_57695 = cljs.core.nth.call(null,inst_57694,(0),null);
var inst_57696 = cljs.core.nth.call(null,inst_57694,(1),null);
var state_57806__$1 = (function (){var statearr_57878 = state_57806;
(statearr_57878[(26)] = inst_57695);

return statearr_57878;
})();
if(cljs.core.truth_(inst_57696)){
var statearr_57879_57942 = state_57806__$1;
(statearr_57879_57942[(1)] = (13));

} else {
var statearr_57880_57943 = state_57806__$1;
(statearr_57880_57943[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (18))){
var inst_57731 = (state_57806[(2)]);
var state_57806__$1 = state_57806;
var statearr_57881_57944 = state_57806__$1;
(statearr_57881_57944[(2)] = inst_57731);

(statearr_57881_57944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (42))){
var state_57806__$1 = state_57806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57806__$1,(45),dchan);
} else {
if((state_val_57807 === (37))){
var inst_57674 = (state_57806[(11)]);
var inst_57765 = (state_57806[(25)]);
var inst_57774 = (state_57806[(23)]);
var inst_57774__$1 = cljs.core.first.call(null,inst_57765);
var inst_57775 = cljs.core.async.put_BANG_.call(null,inst_57774__$1,inst_57674,done);
var state_57806__$1 = (function (){var statearr_57882 = state_57806;
(statearr_57882[(23)] = inst_57774__$1);

return statearr_57882;
})();
if(cljs.core.truth_(inst_57775)){
var statearr_57883_57945 = state_57806__$1;
(statearr_57883_57945[(1)] = (39));

} else {
var statearr_57884_57946 = state_57806__$1;
(statearr_57884_57946[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57807 === (8))){
var inst_57686 = (state_57806[(14)]);
var inst_57685 = (state_57806[(16)]);
var inst_57688 = (inst_57686 < inst_57685);
var inst_57689 = inst_57688;
var state_57806__$1 = state_57806;
if(cljs.core.truth_(inst_57689)){
var statearr_57885_57947 = state_57806__$1;
(statearr_57885_57947[(1)] = (10));

} else {
var statearr_57886_57948 = state_57806__$1;
(statearr_57886_57948[(1)] = (11));

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
});})(c__37979__auto___57894,cs,m,dchan,dctr,done))
;
return ((function (switch__37867__auto__,c__37979__auto___57894,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37868__auto__ = null;
var cljs$core$async$mult_$_state_machine__37868__auto____0 = (function (){
var statearr_57890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57890[(0)] = cljs$core$async$mult_$_state_machine__37868__auto__);

(statearr_57890[(1)] = (1));

return statearr_57890;
});
var cljs$core$async$mult_$_state_machine__37868__auto____1 = (function (state_57806){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_57806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e57891){if((e57891 instanceof Object)){
var ex__37871__auto__ = e57891;
var statearr_57892_57949 = state_57806;
(statearr_57892_57949[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57950 = state_57806;
state_57806 = G__57950;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37868__auto__ = function(state_57806){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37868__auto____1.call(this,state_57806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37868__auto____0;
cljs$core$async$mult_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37868__auto____1;
return cljs$core$async$mult_$_state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___57894,cs,m,dchan,dctr,done))
})();
var state__37981__auto__ = (function (){var statearr_57893 = f__37980__auto__.call(null);
(statearr_57893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___57894);

return statearr_57893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___57894,cs,m,dchan,dctr,done))
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
var args57951 = [];
var len__25826__auto___57954 = arguments.length;
var i__25827__auto___57955 = (0);
while(true){
if((i__25827__auto___57955 < len__25826__auto___57954)){
args57951.push((arguments[i__25827__auto___57955]));

var G__57956 = (i__25827__auto___57955 + (1));
i__25827__auto___57955 = G__57956;
continue;
} else {
}
break;
}

var G__57953 = args57951.length;
switch (G__57953) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57951.length)].join('')));

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
var len__25826__auto___57968 = arguments.length;
var i__25827__auto___57969 = (0);
while(true){
if((i__25827__auto___57969 < len__25826__auto___57968)){
args__25833__auto__.push((arguments[i__25827__auto___57969]));

var G__57970 = (i__25827__auto___57969 + (1));
i__25827__auto___57969 = G__57970;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57962){
var map__57963 = p__57962;
var map__57963__$1 = ((((!((map__57963 == null)))?((((map__57963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57963):map__57963);
var opts = map__57963__$1;
var statearr_57965_57971 = state;
(statearr_57965_57971[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__57963,map__57963__$1,opts){
return (function (val){
var statearr_57966_57972 = state;
(statearr_57966_57972[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__57963,map__57963__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_57967_57973 = state;
(statearr_57967_57973[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57958){
var G__57959 = cljs.core.first.call(null,seq57958);
var seq57958__$1 = cljs.core.next.call(null,seq57958);
var G__57960 = cljs.core.first.call(null,seq57958__$1);
var seq57958__$2 = cljs.core.next.call(null,seq57958__$1);
var G__57961 = cljs.core.first.call(null,seq57958__$2);
var seq57958__$3 = cljs.core.next.call(null,seq57958__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__57959,G__57960,G__57961,seq57958__$3);
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
if(typeof cljs.core.async.t_cljs$core$async58139 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58139 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta58140){
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
this.meta58140 = meta58140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_58141,meta58140__$1){
var self__ = this;
var _58141__$1 = this;
return (new cljs.core.async.t_cljs$core$async58139(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta58140__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_58141){
var self__ = this;
var _58141__$1 = this;
return self__.meta58140;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58139.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async58139.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58139.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async58139.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58139.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58139.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58139.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58139.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async58139.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta58140","meta58140",-472834821,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58139.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58139";

cljs.core.async.t_cljs$core$async58139.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async58139");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async58139 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async58139(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta58140){
return (new cljs.core.async.t_cljs$core$async58139(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta58140));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async58139(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37979__auto___58304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___58304,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___58304,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_58241){
var state_val_58242 = (state_58241[(1)]);
if((state_val_58242 === (7))){
var inst_58157 = (state_58241[(2)]);
var state_58241__$1 = state_58241;
var statearr_58243_58305 = state_58241__$1;
(statearr_58243_58305[(2)] = inst_58157);

(statearr_58243_58305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (20))){
var inst_58169 = (state_58241[(7)]);
var state_58241__$1 = state_58241;
var statearr_58244_58306 = state_58241__$1;
(statearr_58244_58306[(2)] = inst_58169);

(statearr_58244_58306[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (27))){
var state_58241__$1 = state_58241;
var statearr_58245_58307 = state_58241__$1;
(statearr_58245_58307[(2)] = null);

(statearr_58245_58307[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (1))){
var inst_58145 = (state_58241[(8)]);
var inst_58145__$1 = calc_state.call(null);
var inst_58147 = (inst_58145__$1 == null);
var inst_58148 = cljs.core.not.call(null,inst_58147);
var state_58241__$1 = (function (){var statearr_58246 = state_58241;
(statearr_58246[(8)] = inst_58145__$1);

return statearr_58246;
})();
if(inst_58148){
var statearr_58247_58308 = state_58241__$1;
(statearr_58247_58308[(1)] = (2));

} else {
var statearr_58248_58309 = state_58241__$1;
(statearr_58248_58309[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (24))){
var inst_58215 = (state_58241[(9)]);
var inst_58192 = (state_58241[(10)]);
var inst_58201 = (state_58241[(11)]);
var inst_58215__$1 = inst_58192.call(null,inst_58201);
var state_58241__$1 = (function (){var statearr_58249 = state_58241;
(statearr_58249[(9)] = inst_58215__$1);

return statearr_58249;
})();
if(cljs.core.truth_(inst_58215__$1)){
var statearr_58250_58310 = state_58241__$1;
(statearr_58250_58310[(1)] = (29));

} else {
var statearr_58251_58311 = state_58241__$1;
(statearr_58251_58311[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (4))){
var inst_58160 = (state_58241[(2)]);
var state_58241__$1 = state_58241;
if(cljs.core.truth_(inst_58160)){
var statearr_58252_58312 = state_58241__$1;
(statearr_58252_58312[(1)] = (8));

} else {
var statearr_58253_58313 = state_58241__$1;
(statearr_58253_58313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (15))){
var inst_58186 = (state_58241[(2)]);
var state_58241__$1 = state_58241;
if(cljs.core.truth_(inst_58186)){
var statearr_58254_58314 = state_58241__$1;
(statearr_58254_58314[(1)] = (19));

} else {
var statearr_58255_58315 = state_58241__$1;
(statearr_58255_58315[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (21))){
var inst_58191 = (state_58241[(12)]);
var inst_58191__$1 = (state_58241[(2)]);
var inst_58192 = cljs.core.get.call(null,inst_58191__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58193 = cljs.core.get.call(null,inst_58191__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58194 = cljs.core.get.call(null,inst_58191__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_58241__$1 = (function (){var statearr_58256 = state_58241;
(statearr_58256[(10)] = inst_58192);

(statearr_58256[(13)] = inst_58193);

(statearr_58256[(12)] = inst_58191__$1);

return statearr_58256;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_58241__$1,(22),inst_58194);
} else {
if((state_val_58242 === (31))){
var inst_58223 = (state_58241[(2)]);
var state_58241__$1 = state_58241;
if(cljs.core.truth_(inst_58223)){
var statearr_58257_58316 = state_58241__$1;
(statearr_58257_58316[(1)] = (32));

} else {
var statearr_58258_58317 = state_58241__$1;
(statearr_58258_58317[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (32))){
var inst_58200 = (state_58241[(14)]);
var state_58241__$1 = state_58241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58241__$1,(35),out,inst_58200);
} else {
if((state_val_58242 === (33))){
var inst_58191 = (state_58241[(12)]);
var inst_58169 = inst_58191;
var state_58241__$1 = (function (){var statearr_58259 = state_58241;
(statearr_58259[(7)] = inst_58169);

return statearr_58259;
})();
var statearr_58260_58318 = state_58241__$1;
(statearr_58260_58318[(2)] = null);

(statearr_58260_58318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (13))){
var inst_58169 = (state_58241[(7)]);
var inst_58176 = inst_58169.cljs$lang$protocol_mask$partition0$;
var inst_58177 = (inst_58176 & (64));
var inst_58178 = inst_58169.cljs$core$ISeq$;
var inst_58179 = (inst_58177) || (inst_58178);
var state_58241__$1 = state_58241;
if(cljs.core.truth_(inst_58179)){
var statearr_58261_58319 = state_58241__$1;
(statearr_58261_58319[(1)] = (16));

} else {
var statearr_58262_58320 = state_58241__$1;
(statearr_58262_58320[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (22))){
var inst_58201 = (state_58241[(11)]);
var inst_58200 = (state_58241[(14)]);
var inst_58199 = (state_58241[(2)]);
var inst_58200__$1 = cljs.core.nth.call(null,inst_58199,(0),null);
var inst_58201__$1 = cljs.core.nth.call(null,inst_58199,(1),null);
var inst_58202 = (inst_58200__$1 == null);
var inst_58203 = cljs.core._EQ_.call(null,inst_58201__$1,change);
var inst_58204 = (inst_58202) || (inst_58203);
var state_58241__$1 = (function (){var statearr_58263 = state_58241;
(statearr_58263[(11)] = inst_58201__$1);

(statearr_58263[(14)] = inst_58200__$1);

return statearr_58263;
})();
if(cljs.core.truth_(inst_58204)){
var statearr_58264_58321 = state_58241__$1;
(statearr_58264_58321[(1)] = (23));

} else {
var statearr_58265_58322 = state_58241__$1;
(statearr_58265_58322[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (36))){
var inst_58191 = (state_58241[(12)]);
var inst_58169 = inst_58191;
var state_58241__$1 = (function (){var statearr_58266 = state_58241;
(statearr_58266[(7)] = inst_58169);

return statearr_58266;
})();
var statearr_58267_58323 = state_58241__$1;
(statearr_58267_58323[(2)] = null);

(statearr_58267_58323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (29))){
var inst_58215 = (state_58241[(9)]);
var state_58241__$1 = state_58241;
var statearr_58268_58324 = state_58241__$1;
(statearr_58268_58324[(2)] = inst_58215);

(statearr_58268_58324[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (6))){
var state_58241__$1 = state_58241;
var statearr_58269_58325 = state_58241__$1;
(statearr_58269_58325[(2)] = false);

(statearr_58269_58325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (28))){
var inst_58211 = (state_58241[(2)]);
var inst_58212 = calc_state.call(null);
var inst_58169 = inst_58212;
var state_58241__$1 = (function (){var statearr_58270 = state_58241;
(statearr_58270[(15)] = inst_58211);

(statearr_58270[(7)] = inst_58169);

return statearr_58270;
})();
var statearr_58271_58326 = state_58241__$1;
(statearr_58271_58326[(2)] = null);

(statearr_58271_58326[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (25))){
var inst_58237 = (state_58241[(2)]);
var state_58241__$1 = state_58241;
var statearr_58272_58327 = state_58241__$1;
(statearr_58272_58327[(2)] = inst_58237);

(statearr_58272_58327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (34))){
var inst_58235 = (state_58241[(2)]);
var state_58241__$1 = state_58241;
var statearr_58273_58328 = state_58241__$1;
(statearr_58273_58328[(2)] = inst_58235);

(statearr_58273_58328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (17))){
var state_58241__$1 = state_58241;
var statearr_58274_58329 = state_58241__$1;
(statearr_58274_58329[(2)] = false);

(statearr_58274_58329[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (3))){
var state_58241__$1 = state_58241;
var statearr_58275_58330 = state_58241__$1;
(statearr_58275_58330[(2)] = false);

(statearr_58275_58330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (12))){
var inst_58239 = (state_58241[(2)]);
var state_58241__$1 = state_58241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58241__$1,inst_58239);
} else {
if((state_val_58242 === (2))){
var inst_58145 = (state_58241[(8)]);
var inst_58150 = inst_58145.cljs$lang$protocol_mask$partition0$;
var inst_58151 = (inst_58150 & (64));
var inst_58152 = inst_58145.cljs$core$ISeq$;
var inst_58153 = (inst_58151) || (inst_58152);
var state_58241__$1 = state_58241;
if(cljs.core.truth_(inst_58153)){
var statearr_58276_58331 = state_58241__$1;
(statearr_58276_58331[(1)] = (5));

} else {
var statearr_58277_58332 = state_58241__$1;
(statearr_58277_58332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (23))){
var inst_58200 = (state_58241[(14)]);
var inst_58206 = (inst_58200 == null);
var state_58241__$1 = state_58241;
if(cljs.core.truth_(inst_58206)){
var statearr_58278_58333 = state_58241__$1;
(statearr_58278_58333[(1)] = (26));

} else {
var statearr_58279_58334 = state_58241__$1;
(statearr_58279_58334[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (35))){
var inst_58226 = (state_58241[(2)]);
var state_58241__$1 = state_58241;
if(cljs.core.truth_(inst_58226)){
var statearr_58280_58335 = state_58241__$1;
(statearr_58280_58335[(1)] = (36));

} else {
var statearr_58281_58336 = state_58241__$1;
(statearr_58281_58336[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (19))){
var inst_58169 = (state_58241[(7)]);
var inst_58188 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58169);
var state_58241__$1 = state_58241;
var statearr_58282_58337 = state_58241__$1;
(statearr_58282_58337[(2)] = inst_58188);

(statearr_58282_58337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (11))){
var inst_58169 = (state_58241[(7)]);
var inst_58173 = (inst_58169 == null);
var inst_58174 = cljs.core.not.call(null,inst_58173);
var state_58241__$1 = state_58241;
if(inst_58174){
var statearr_58283_58338 = state_58241__$1;
(statearr_58283_58338[(1)] = (13));

} else {
var statearr_58284_58339 = state_58241__$1;
(statearr_58284_58339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (9))){
var inst_58145 = (state_58241[(8)]);
var state_58241__$1 = state_58241;
var statearr_58285_58340 = state_58241__$1;
(statearr_58285_58340[(2)] = inst_58145);

(statearr_58285_58340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (5))){
var state_58241__$1 = state_58241;
var statearr_58286_58341 = state_58241__$1;
(statearr_58286_58341[(2)] = true);

(statearr_58286_58341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (14))){
var state_58241__$1 = state_58241;
var statearr_58287_58342 = state_58241__$1;
(statearr_58287_58342[(2)] = false);

(statearr_58287_58342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (26))){
var inst_58201 = (state_58241[(11)]);
var inst_58208 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_58201);
var state_58241__$1 = state_58241;
var statearr_58288_58343 = state_58241__$1;
(statearr_58288_58343[(2)] = inst_58208);

(statearr_58288_58343[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (16))){
var state_58241__$1 = state_58241;
var statearr_58289_58344 = state_58241__$1;
(statearr_58289_58344[(2)] = true);

(statearr_58289_58344[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (38))){
var inst_58231 = (state_58241[(2)]);
var state_58241__$1 = state_58241;
var statearr_58290_58345 = state_58241__$1;
(statearr_58290_58345[(2)] = inst_58231);

(statearr_58290_58345[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (30))){
var inst_58192 = (state_58241[(10)]);
var inst_58193 = (state_58241[(13)]);
var inst_58201 = (state_58241[(11)]);
var inst_58218 = cljs.core.empty_QMARK_.call(null,inst_58192);
var inst_58219 = inst_58193.call(null,inst_58201);
var inst_58220 = cljs.core.not.call(null,inst_58219);
var inst_58221 = (inst_58218) && (inst_58220);
var state_58241__$1 = state_58241;
var statearr_58291_58346 = state_58241__$1;
(statearr_58291_58346[(2)] = inst_58221);

(statearr_58291_58346[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (10))){
var inst_58145 = (state_58241[(8)]);
var inst_58165 = (state_58241[(2)]);
var inst_58166 = cljs.core.get.call(null,inst_58165,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58167 = cljs.core.get.call(null,inst_58165,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58168 = cljs.core.get.call(null,inst_58165,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_58169 = inst_58145;
var state_58241__$1 = (function (){var statearr_58292 = state_58241;
(statearr_58292[(16)] = inst_58166);

(statearr_58292[(7)] = inst_58169);

(statearr_58292[(17)] = inst_58167);

(statearr_58292[(18)] = inst_58168);

return statearr_58292;
})();
var statearr_58293_58347 = state_58241__$1;
(statearr_58293_58347[(2)] = null);

(statearr_58293_58347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (18))){
var inst_58183 = (state_58241[(2)]);
var state_58241__$1 = state_58241;
var statearr_58294_58348 = state_58241__$1;
(statearr_58294_58348[(2)] = inst_58183);

(statearr_58294_58348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (37))){
var state_58241__$1 = state_58241;
var statearr_58295_58349 = state_58241__$1;
(statearr_58295_58349[(2)] = null);

(statearr_58295_58349[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58242 === (8))){
var inst_58145 = (state_58241[(8)]);
var inst_58162 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58145);
var state_58241__$1 = state_58241;
var statearr_58296_58350 = state_58241__$1;
(statearr_58296_58350[(2)] = inst_58162);

(statearr_58296_58350[(1)] = (10));


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
});})(c__37979__auto___58304,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37867__auto__,c__37979__auto___58304,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37868__auto__ = null;
var cljs$core$async$mix_$_state_machine__37868__auto____0 = (function (){
var statearr_58300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58300[(0)] = cljs$core$async$mix_$_state_machine__37868__auto__);

(statearr_58300[(1)] = (1));

return statearr_58300;
});
var cljs$core$async$mix_$_state_machine__37868__auto____1 = (function (state_58241){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_58241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e58301){if((e58301 instanceof Object)){
var ex__37871__auto__ = e58301;
var statearr_58302_58351 = state_58241;
(statearr_58302_58351[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58352 = state_58241;
state_58241 = G__58352;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37868__auto__ = function(state_58241){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37868__auto____1.call(this,state_58241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37868__auto____0;
cljs$core$async$mix_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37868__auto____1;
return cljs$core$async$mix_$_state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___58304,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37981__auto__ = (function (){var statearr_58303 = f__37980__auto__.call(null);
(statearr_58303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___58304);

return statearr_58303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___58304,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args58353 = [];
var len__25826__auto___58356 = arguments.length;
var i__25827__auto___58357 = (0);
while(true){
if((i__25827__auto___58357 < len__25826__auto___58356)){
args58353.push((arguments[i__25827__auto___58357]));

var G__58358 = (i__25827__auto___58357 + (1));
i__25827__auto___58357 = G__58358;
continue;
} else {
}
break;
}

var G__58355 = args58353.length;
switch (G__58355) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58353.length)].join('')));

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
var args58361 = [];
var len__25826__auto___58486 = arguments.length;
var i__25827__auto___58487 = (0);
while(true){
if((i__25827__auto___58487 < len__25826__auto___58486)){
args58361.push((arguments[i__25827__auto___58487]));

var G__58488 = (i__25827__auto___58487 + (1));
i__25827__auto___58487 = G__58488;
continue;
} else {
}
break;
}

var G__58363 = args58361.length;
switch (G__58363) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58361.length)].join('')));

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
return (function (p1__58360_SHARP_){
if(cljs.core.truth_(p1__58360_SHARP_.call(null,topic))){
return p1__58360_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__58360_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async58364 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58364 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta58365){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta58365 = meta58365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_58366,meta58365__$1){
var self__ = this;
var _58366__$1 = this;
return (new cljs.core.async.t_cljs$core$async58364(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta58365__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58364.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_58366){
var self__ = this;
var _58366__$1 = this;
return self__.meta58365;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58364.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async58364.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58364.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async58364.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58364.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async58364.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58364.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58364.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta58365","meta58365",526158227,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58364.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58364";

cljs.core.async.t_cljs$core$async58364.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async58364");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async58364 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async58364(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58365){
return (new cljs.core.async.t_cljs$core$async58364(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58365));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async58364(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37979__auto___58490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___58490,mults,ensure_mult,p){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___58490,mults,ensure_mult,p){
return (function (state_58438){
var state_val_58439 = (state_58438[(1)]);
if((state_val_58439 === (7))){
var inst_58434 = (state_58438[(2)]);
var state_58438__$1 = state_58438;
var statearr_58440_58491 = state_58438__$1;
(statearr_58440_58491[(2)] = inst_58434);

(statearr_58440_58491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (20))){
var state_58438__$1 = state_58438;
var statearr_58441_58492 = state_58438__$1;
(statearr_58441_58492[(2)] = null);

(statearr_58441_58492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (1))){
var state_58438__$1 = state_58438;
var statearr_58442_58493 = state_58438__$1;
(statearr_58442_58493[(2)] = null);

(statearr_58442_58493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (24))){
var inst_58417 = (state_58438[(7)]);
var inst_58426 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_58417);
var state_58438__$1 = state_58438;
var statearr_58443_58494 = state_58438__$1;
(statearr_58443_58494[(2)] = inst_58426);

(statearr_58443_58494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (4))){
var inst_58369 = (state_58438[(8)]);
var inst_58369__$1 = (state_58438[(2)]);
var inst_58370 = (inst_58369__$1 == null);
var state_58438__$1 = (function (){var statearr_58444 = state_58438;
(statearr_58444[(8)] = inst_58369__$1);

return statearr_58444;
})();
if(cljs.core.truth_(inst_58370)){
var statearr_58445_58495 = state_58438__$1;
(statearr_58445_58495[(1)] = (5));

} else {
var statearr_58446_58496 = state_58438__$1;
(statearr_58446_58496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (15))){
var inst_58411 = (state_58438[(2)]);
var state_58438__$1 = state_58438;
var statearr_58447_58497 = state_58438__$1;
(statearr_58447_58497[(2)] = inst_58411);

(statearr_58447_58497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (21))){
var inst_58431 = (state_58438[(2)]);
var state_58438__$1 = (function (){var statearr_58448 = state_58438;
(statearr_58448[(9)] = inst_58431);

return statearr_58448;
})();
var statearr_58449_58498 = state_58438__$1;
(statearr_58449_58498[(2)] = null);

(statearr_58449_58498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (13))){
var inst_58393 = (state_58438[(10)]);
var inst_58395 = cljs.core.chunked_seq_QMARK_.call(null,inst_58393);
var state_58438__$1 = state_58438;
if(inst_58395){
var statearr_58450_58499 = state_58438__$1;
(statearr_58450_58499[(1)] = (16));

} else {
var statearr_58451_58500 = state_58438__$1;
(statearr_58451_58500[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (22))){
var inst_58423 = (state_58438[(2)]);
var state_58438__$1 = state_58438;
if(cljs.core.truth_(inst_58423)){
var statearr_58452_58501 = state_58438__$1;
(statearr_58452_58501[(1)] = (23));

} else {
var statearr_58453_58502 = state_58438__$1;
(statearr_58453_58502[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (6))){
var inst_58369 = (state_58438[(8)]);
var inst_58419 = (state_58438[(11)]);
var inst_58417 = (state_58438[(7)]);
var inst_58417__$1 = topic_fn.call(null,inst_58369);
var inst_58418 = cljs.core.deref.call(null,mults);
var inst_58419__$1 = cljs.core.get.call(null,inst_58418,inst_58417__$1);
var state_58438__$1 = (function (){var statearr_58454 = state_58438;
(statearr_58454[(11)] = inst_58419__$1);

(statearr_58454[(7)] = inst_58417__$1);

return statearr_58454;
})();
if(cljs.core.truth_(inst_58419__$1)){
var statearr_58455_58503 = state_58438__$1;
(statearr_58455_58503[(1)] = (19));

} else {
var statearr_58456_58504 = state_58438__$1;
(statearr_58456_58504[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (25))){
var inst_58428 = (state_58438[(2)]);
var state_58438__$1 = state_58438;
var statearr_58457_58505 = state_58438__$1;
(statearr_58457_58505[(2)] = inst_58428);

(statearr_58457_58505[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (17))){
var inst_58393 = (state_58438[(10)]);
var inst_58402 = cljs.core.first.call(null,inst_58393);
var inst_58403 = cljs.core.async.muxch_STAR_.call(null,inst_58402);
var inst_58404 = cljs.core.async.close_BANG_.call(null,inst_58403);
var inst_58405 = cljs.core.next.call(null,inst_58393);
var inst_58379 = inst_58405;
var inst_58380 = null;
var inst_58381 = (0);
var inst_58382 = (0);
var state_58438__$1 = (function (){var statearr_58458 = state_58438;
(statearr_58458[(12)] = inst_58380);

(statearr_58458[(13)] = inst_58404);

(statearr_58458[(14)] = inst_58382);

(statearr_58458[(15)] = inst_58381);

(statearr_58458[(16)] = inst_58379);

return statearr_58458;
})();
var statearr_58459_58506 = state_58438__$1;
(statearr_58459_58506[(2)] = null);

(statearr_58459_58506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (3))){
var inst_58436 = (state_58438[(2)]);
var state_58438__$1 = state_58438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58438__$1,inst_58436);
} else {
if((state_val_58439 === (12))){
var inst_58413 = (state_58438[(2)]);
var state_58438__$1 = state_58438;
var statearr_58460_58507 = state_58438__$1;
(statearr_58460_58507[(2)] = inst_58413);

(statearr_58460_58507[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (2))){
var state_58438__$1 = state_58438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58438__$1,(4),ch);
} else {
if((state_val_58439 === (23))){
var state_58438__$1 = state_58438;
var statearr_58461_58508 = state_58438__$1;
(statearr_58461_58508[(2)] = null);

(statearr_58461_58508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (19))){
var inst_58369 = (state_58438[(8)]);
var inst_58419 = (state_58438[(11)]);
var inst_58421 = cljs.core.async.muxch_STAR_.call(null,inst_58419);
var state_58438__$1 = state_58438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58438__$1,(22),inst_58421,inst_58369);
} else {
if((state_val_58439 === (11))){
var inst_58393 = (state_58438[(10)]);
var inst_58379 = (state_58438[(16)]);
var inst_58393__$1 = cljs.core.seq.call(null,inst_58379);
var state_58438__$1 = (function (){var statearr_58462 = state_58438;
(statearr_58462[(10)] = inst_58393__$1);

return statearr_58462;
})();
if(inst_58393__$1){
var statearr_58463_58509 = state_58438__$1;
(statearr_58463_58509[(1)] = (13));

} else {
var statearr_58464_58510 = state_58438__$1;
(statearr_58464_58510[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (9))){
var inst_58415 = (state_58438[(2)]);
var state_58438__$1 = state_58438;
var statearr_58465_58511 = state_58438__$1;
(statearr_58465_58511[(2)] = inst_58415);

(statearr_58465_58511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (5))){
var inst_58376 = cljs.core.deref.call(null,mults);
var inst_58377 = cljs.core.vals.call(null,inst_58376);
var inst_58378 = cljs.core.seq.call(null,inst_58377);
var inst_58379 = inst_58378;
var inst_58380 = null;
var inst_58381 = (0);
var inst_58382 = (0);
var state_58438__$1 = (function (){var statearr_58466 = state_58438;
(statearr_58466[(12)] = inst_58380);

(statearr_58466[(14)] = inst_58382);

(statearr_58466[(15)] = inst_58381);

(statearr_58466[(16)] = inst_58379);

return statearr_58466;
})();
var statearr_58467_58512 = state_58438__$1;
(statearr_58467_58512[(2)] = null);

(statearr_58467_58512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (14))){
var state_58438__$1 = state_58438;
var statearr_58471_58513 = state_58438__$1;
(statearr_58471_58513[(2)] = null);

(statearr_58471_58513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (16))){
var inst_58393 = (state_58438[(10)]);
var inst_58397 = cljs.core.chunk_first.call(null,inst_58393);
var inst_58398 = cljs.core.chunk_rest.call(null,inst_58393);
var inst_58399 = cljs.core.count.call(null,inst_58397);
var inst_58379 = inst_58398;
var inst_58380 = inst_58397;
var inst_58381 = inst_58399;
var inst_58382 = (0);
var state_58438__$1 = (function (){var statearr_58472 = state_58438;
(statearr_58472[(12)] = inst_58380);

(statearr_58472[(14)] = inst_58382);

(statearr_58472[(15)] = inst_58381);

(statearr_58472[(16)] = inst_58379);

return statearr_58472;
})();
var statearr_58473_58514 = state_58438__$1;
(statearr_58473_58514[(2)] = null);

(statearr_58473_58514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (10))){
var inst_58380 = (state_58438[(12)]);
var inst_58382 = (state_58438[(14)]);
var inst_58381 = (state_58438[(15)]);
var inst_58379 = (state_58438[(16)]);
var inst_58387 = cljs.core._nth.call(null,inst_58380,inst_58382);
var inst_58388 = cljs.core.async.muxch_STAR_.call(null,inst_58387);
var inst_58389 = cljs.core.async.close_BANG_.call(null,inst_58388);
var inst_58390 = (inst_58382 + (1));
var tmp58468 = inst_58380;
var tmp58469 = inst_58381;
var tmp58470 = inst_58379;
var inst_58379__$1 = tmp58470;
var inst_58380__$1 = tmp58468;
var inst_58381__$1 = tmp58469;
var inst_58382__$1 = inst_58390;
var state_58438__$1 = (function (){var statearr_58474 = state_58438;
(statearr_58474[(12)] = inst_58380__$1);

(statearr_58474[(14)] = inst_58382__$1);

(statearr_58474[(17)] = inst_58389);

(statearr_58474[(15)] = inst_58381__$1);

(statearr_58474[(16)] = inst_58379__$1);

return statearr_58474;
})();
var statearr_58475_58515 = state_58438__$1;
(statearr_58475_58515[(2)] = null);

(statearr_58475_58515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (18))){
var inst_58408 = (state_58438[(2)]);
var state_58438__$1 = state_58438;
var statearr_58476_58516 = state_58438__$1;
(statearr_58476_58516[(2)] = inst_58408);

(statearr_58476_58516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (8))){
var inst_58382 = (state_58438[(14)]);
var inst_58381 = (state_58438[(15)]);
var inst_58384 = (inst_58382 < inst_58381);
var inst_58385 = inst_58384;
var state_58438__$1 = state_58438;
if(cljs.core.truth_(inst_58385)){
var statearr_58477_58517 = state_58438__$1;
(statearr_58477_58517[(1)] = (10));

} else {
var statearr_58478_58518 = state_58438__$1;
(statearr_58478_58518[(1)] = (11));

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
});})(c__37979__auto___58490,mults,ensure_mult,p))
;
return ((function (switch__37867__auto__,c__37979__auto___58490,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37868__auto__ = null;
var cljs$core$async$state_machine__37868__auto____0 = (function (){
var statearr_58482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58482[(0)] = cljs$core$async$state_machine__37868__auto__);

(statearr_58482[(1)] = (1));

return statearr_58482;
});
var cljs$core$async$state_machine__37868__auto____1 = (function (state_58438){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_58438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e58483){if((e58483 instanceof Object)){
var ex__37871__auto__ = e58483;
var statearr_58484_58519 = state_58438;
(statearr_58484_58519[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58520 = state_58438;
state_58438 = G__58520;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$state_machine__37868__auto__ = function(state_58438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37868__auto____1.call(this,state_58438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37868__auto____0;
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37868__auto____1;
return cljs$core$async$state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___58490,mults,ensure_mult,p))
})();
var state__37981__auto__ = (function (){var statearr_58485 = f__37980__auto__.call(null);
(statearr_58485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___58490);

return statearr_58485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___58490,mults,ensure_mult,p))
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
var args58521 = [];
var len__25826__auto___58524 = arguments.length;
var i__25827__auto___58525 = (0);
while(true){
if((i__25827__auto___58525 < len__25826__auto___58524)){
args58521.push((arguments[i__25827__auto___58525]));

var G__58526 = (i__25827__auto___58525 + (1));
i__25827__auto___58525 = G__58526;
continue;
} else {
}
break;
}

var G__58523 = args58521.length;
switch (G__58523) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58521.length)].join('')));

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
var args58528 = [];
var len__25826__auto___58531 = arguments.length;
var i__25827__auto___58532 = (0);
while(true){
if((i__25827__auto___58532 < len__25826__auto___58531)){
args58528.push((arguments[i__25827__auto___58532]));

var G__58533 = (i__25827__auto___58532 + (1));
i__25827__auto___58532 = G__58533;
continue;
} else {
}
break;
}

var G__58530 = args58528.length;
switch (G__58530) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58528.length)].join('')));

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
var args58535 = [];
var len__25826__auto___58606 = arguments.length;
var i__25827__auto___58607 = (0);
while(true){
if((i__25827__auto___58607 < len__25826__auto___58606)){
args58535.push((arguments[i__25827__auto___58607]));

var G__58608 = (i__25827__auto___58607 + (1));
i__25827__auto___58607 = G__58608;
continue;
} else {
}
break;
}

var G__58537 = args58535.length;
switch (G__58537) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58535.length)].join('')));

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
var c__37979__auto___58610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___58610,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___58610,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_58576){
var state_val_58577 = (state_58576[(1)]);
if((state_val_58577 === (7))){
var state_58576__$1 = state_58576;
var statearr_58578_58611 = state_58576__$1;
(statearr_58578_58611[(2)] = null);

(statearr_58578_58611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58577 === (1))){
var state_58576__$1 = state_58576;
var statearr_58579_58612 = state_58576__$1;
(statearr_58579_58612[(2)] = null);

(statearr_58579_58612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58577 === (4))){
var inst_58540 = (state_58576[(7)]);
var inst_58542 = (inst_58540 < cnt);
var state_58576__$1 = state_58576;
if(cljs.core.truth_(inst_58542)){
var statearr_58580_58613 = state_58576__$1;
(statearr_58580_58613[(1)] = (6));

} else {
var statearr_58581_58614 = state_58576__$1;
(statearr_58581_58614[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58577 === (15))){
var inst_58572 = (state_58576[(2)]);
var state_58576__$1 = state_58576;
var statearr_58582_58615 = state_58576__$1;
(statearr_58582_58615[(2)] = inst_58572);

(statearr_58582_58615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58577 === (13))){
var inst_58565 = cljs.core.async.close_BANG_.call(null,out);
var state_58576__$1 = state_58576;
var statearr_58583_58616 = state_58576__$1;
(statearr_58583_58616[(2)] = inst_58565);

(statearr_58583_58616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58577 === (6))){
var state_58576__$1 = state_58576;
var statearr_58584_58617 = state_58576__$1;
(statearr_58584_58617[(2)] = null);

(statearr_58584_58617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58577 === (3))){
var inst_58574 = (state_58576[(2)]);
var state_58576__$1 = state_58576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58576__$1,inst_58574);
} else {
if((state_val_58577 === (12))){
var inst_58562 = (state_58576[(8)]);
var inst_58562__$1 = (state_58576[(2)]);
var inst_58563 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_58562__$1);
var state_58576__$1 = (function (){var statearr_58585 = state_58576;
(statearr_58585[(8)] = inst_58562__$1);

return statearr_58585;
})();
if(cljs.core.truth_(inst_58563)){
var statearr_58586_58618 = state_58576__$1;
(statearr_58586_58618[(1)] = (13));

} else {
var statearr_58587_58619 = state_58576__$1;
(statearr_58587_58619[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58577 === (2))){
var inst_58539 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_58540 = (0);
var state_58576__$1 = (function (){var statearr_58588 = state_58576;
(statearr_58588[(7)] = inst_58540);

(statearr_58588[(9)] = inst_58539);

return statearr_58588;
})();
var statearr_58589_58620 = state_58576__$1;
(statearr_58589_58620[(2)] = null);

(statearr_58589_58620[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58577 === (11))){
var inst_58540 = (state_58576[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_58576,(10),Object,null,(9));
var inst_58549 = chs__$1.call(null,inst_58540);
var inst_58550 = done.call(null,inst_58540);
var inst_58551 = cljs.core.async.take_BANG_.call(null,inst_58549,inst_58550);
var state_58576__$1 = state_58576;
var statearr_58590_58621 = state_58576__$1;
(statearr_58590_58621[(2)] = inst_58551);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58576__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58577 === (9))){
var inst_58540 = (state_58576[(7)]);
var inst_58553 = (state_58576[(2)]);
var inst_58554 = (inst_58540 + (1));
var inst_58540__$1 = inst_58554;
var state_58576__$1 = (function (){var statearr_58591 = state_58576;
(statearr_58591[(7)] = inst_58540__$1);

(statearr_58591[(10)] = inst_58553);

return statearr_58591;
})();
var statearr_58592_58622 = state_58576__$1;
(statearr_58592_58622[(2)] = null);

(statearr_58592_58622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58577 === (5))){
var inst_58560 = (state_58576[(2)]);
var state_58576__$1 = (function (){var statearr_58593 = state_58576;
(statearr_58593[(11)] = inst_58560);

return statearr_58593;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58576__$1,(12),dchan);
} else {
if((state_val_58577 === (14))){
var inst_58562 = (state_58576[(8)]);
var inst_58567 = cljs.core.apply.call(null,f,inst_58562);
var state_58576__$1 = state_58576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58576__$1,(16),out,inst_58567);
} else {
if((state_val_58577 === (16))){
var inst_58569 = (state_58576[(2)]);
var state_58576__$1 = (function (){var statearr_58594 = state_58576;
(statearr_58594[(12)] = inst_58569);

return statearr_58594;
})();
var statearr_58595_58623 = state_58576__$1;
(statearr_58595_58623[(2)] = null);

(statearr_58595_58623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58577 === (10))){
var inst_58544 = (state_58576[(2)]);
var inst_58545 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_58576__$1 = (function (){var statearr_58596 = state_58576;
(statearr_58596[(13)] = inst_58544);

return statearr_58596;
})();
var statearr_58597_58624 = state_58576__$1;
(statearr_58597_58624[(2)] = inst_58545);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58576__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58577 === (8))){
var inst_58558 = (state_58576[(2)]);
var state_58576__$1 = state_58576;
var statearr_58598_58625 = state_58576__$1;
(statearr_58598_58625[(2)] = inst_58558);

(statearr_58598_58625[(1)] = (5));


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
});})(c__37979__auto___58610,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37867__auto__,c__37979__auto___58610,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37868__auto__ = null;
var cljs$core$async$state_machine__37868__auto____0 = (function (){
var statearr_58602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58602[(0)] = cljs$core$async$state_machine__37868__auto__);

(statearr_58602[(1)] = (1));

return statearr_58602;
});
var cljs$core$async$state_machine__37868__auto____1 = (function (state_58576){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_58576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e58603){if((e58603 instanceof Object)){
var ex__37871__auto__ = e58603;
var statearr_58604_58626 = state_58576;
(statearr_58604_58626[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58627 = state_58576;
state_58576 = G__58627;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$state_machine__37868__auto__ = function(state_58576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37868__auto____1.call(this,state_58576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37868__auto____0;
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37868__auto____1;
return cljs$core$async$state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___58610,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37981__auto__ = (function (){var statearr_58605 = f__37980__auto__.call(null);
(statearr_58605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___58610);

return statearr_58605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___58610,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args58629 = [];
var len__25826__auto___58687 = arguments.length;
var i__25827__auto___58688 = (0);
while(true){
if((i__25827__auto___58688 < len__25826__auto___58687)){
args58629.push((arguments[i__25827__auto___58688]));

var G__58689 = (i__25827__auto___58688 + (1));
i__25827__auto___58688 = G__58689;
continue;
} else {
}
break;
}

var G__58631 = args58629.length;
switch (G__58631) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58629.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37979__auto___58691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___58691,out){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___58691,out){
return (function (state_58663){
var state_val_58664 = (state_58663[(1)]);
if((state_val_58664 === (7))){
var inst_58642 = (state_58663[(7)]);
var inst_58643 = (state_58663[(8)]);
var inst_58642__$1 = (state_58663[(2)]);
var inst_58643__$1 = cljs.core.nth.call(null,inst_58642__$1,(0),null);
var inst_58644 = cljs.core.nth.call(null,inst_58642__$1,(1),null);
var inst_58645 = (inst_58643__$1 == null);
var state_58663__$1 = (function (){var statearr_58665 = state_58663;
(statearr_58665[(9)] = inst_58644);

(statearr_58665[(7)] = inst_58642__$1);

(statearr_58665[(8)] = inst_58643__$1);

return statearr_58665;
})();
if(cljs.core.truth_(inst_58645)){
var statearr_58666_58692 = state_58663__$1;
(statearr_58666_58692[(1)] = (8));

} else {
var statearr_58667_58693 = state_58663__$1;
(statearr_58667_58693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58664 === (1))){
var inst_58632 = cljs.core.vec.call(null,chs);
var inst_58633 = inst_58632;
var state_58663__$1 = (function (){var statearr_58668 = state_58663;
(statearr_58668[(10)] = inst_58633);

return statearr_58668;
})();
var statearr_58669_58694 = state_58663__$1;
(statearr_58669_58694[(2)] = null);

(statearr_58669_58694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58664 === (4))){
var inst_58633 = (state_58663[(10)]);
var state_58663__$1 = state_58663;
return cljs.core.async.ioc_alts_BANG_.call(null,state_58663__$1,(7),inst_58633);
} else {
if((state_val_58664 === (6))){
var inst_58659 = (state_58663[(2)]);
var state_58663__$1 = state_58663;
var statearr_58670_58695 = state_58663__$1;
(statearr_58670_58695[(2)] = inst_58659);

(statearr_58670_58695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58664 === (3))){
var inst_58661 = (state_58663[(2)]);
var state_58663__$1 = state_58663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58663__$1,inst_58661);
} else {
if((state_val_58664 === (2))){
var inst_58633 = (state_58663[(10)]);
var inst_58635 = cljs.core.count.call(null,inst_58633);
var inst_58636 = (inst_58635 > (0));
var state_58663__$1 = state_58663;
if(cljs.core.truth_(inst_58636)){
var statearr_58672_58696 = state_58663__$1;
(statearr_58672_58696[(1)] = (4));

} else {
var statearr_58673_58697 = state_58663__$1;
(statearr_58673_58697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58664 === (11))){
var inst_58633 = (state_58663[(10)]);
var inst_58652 = (state_58663[(2)]);
var tmp58671 = inst_58633;
var inst_58633__$1 = tmp58671;
var state_58663__$1 = (function (){var statearr_58674 = state_58663;
(statearr_58674[(11)] = inst_58652);

(statearr_58674[(10)] = inst_58633__$1);

return statearr_58674;
})();
var statearr_58675_58698 = state_58663__$1;
(statearr_58675_58698[(2)] = null);

(statearr_58675_58698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58664 === (9))){
var inst_58643 = (state_58663[(8)]);
var state_58663__$1 = state_58663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58663__$1,(11),out,inst_58643);
} else {
if((state_val_58664 === (5))){
var inst_58657 = cljs.core.async.close_BANG_.call(null,out);
var state_58663__$1 = state_58663;
var statearr_58676_58699 = state_58663__$1;
(statearr_58676_58699[(2)] = inst_58657);

(statearr_58676_58699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58664 === (10))){
var inst_58655 = (state_58663[(2)]);
var state_58663__$1 = state_58663;
var statearr_58677_58700 = state_58663__$1;
(statearr_58677_58700[(2)] = inst_58655);

(statearr_58677_58700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58664 === (8))){
var inst_58633 = (state_58663[(10)]);
var inst_58644 = (state_58663[(9)]);
var inst_58642 = (state_58663[(7)]);
var inst_58643 = (state_58663[(8)]);
var inst_58647 = (function (){var cs = inst_58633;
var vec__58638 = inst_58642;
var v = inst_58643;
var c = inst_58644;
return ((function (cs,vec__58638,v,c,inst_58633,inst_58644,inst_58642,inst_58643,state_val_58664,c__37979__auto___58691,out){
return (function (p1__58628_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__58628_SHARP_);
});
;})(cs,vec__58638,v,c,inst_58633,inst_58644,inst_58642,inst_58643,state_val_58664,c__37979__auto___58691,out))
})();
var inst_58648 = cljs.core.filterv.call(null,inst_58647,inst_58633);
var inst_58633__$1 = inst_58648;
var state_58663__$1 = (function (){var statearr_58678 = state_58663;
(statearr_58678[(10)] = inst_58633__$1);

return statearr_58678;
})();
var statearr_58679_58701 = state_58663__$1;
(statearr_58679_58701[(2)] = null);

(statearr_58679_58701[(1)] = (2));


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
});})(c__37979__auto___58691,out))
;
return ((function (switch__37867__auto__,c__37979__auto___58691,out){
return (function() {
var cljs$core$async$state_machine__37868__auto__ = null;
var cljs$core$async$state_machine__37868__auto____0 = (function (){
var statearr_58683 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58683[(0)] = cljs$core$async$state_machine__37868__auto__);

(statearr_58683[(1)] = (1));

return statearr_58683;
});
var cljs$core$async$state_machine__37868__auto____1 = (function (state_58663){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_58663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e58684){if((e58684 instanceof Object)){
var ex__37871__auto__ = e58684;
var statearr_58685_58702 = state_58663;
(statearr_58685_58702[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58703 = state_58663;
state_58663 = G__58703;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$state_machine__37868__auto__ = function(state_58663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37868__auto____1.call(this,state_58663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37868__auto____0;
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37868__auto____1;
return cljs$core$async$state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___58691,out))
})();
var state__37981__auto__ = (function (){var statearr_58686 = f__37980__auto__.call(null);
(statearr_58686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___58691);

return statearr_58686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___58691,out))
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
var args58704 = [];
var len__25826__auto___58753 = arguments.length;
var i__25827__auto___58754 = (0);
while(true){
if((i__25827__auto___58754 < len__25826__auto___58753)){
args58704.push((arguments[i__25827__auto___58754]));

var G__58755 = (i__25827__auto___58754 + (1));
i__25827__auto___58754 = G__58755;
continue;
} else {
}
break;
}

var G__58706 = args58704.length;
switch (G__58706) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58704.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37979__auto___58757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___58757,out){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___58757,out){
return (function (state_58730){
var state_val_58731 = (state_58730[(1)]);
if((state_val_58731 === (7))){
var inst_58712 = (state_58730[(7)]);
var inst_58712__$1 = (state_58730[(2)]);
var inst_58713 = (inst_58712__$1 == null);
var inst_58714 = cljs.core.not.call(null,inst_58713);
var state_58730__$1 = (function (){var statearr_58732 = state_58730;
(statearr_58732[(7)] = inst_58712__$1);

return statearr_58732;
})();
if(inst_58714){
var statearr_58733_58758 = state_58730__$1;
(statearr_58733_58758[(1)] = (8));

} else {
var statearr_58734_58759 = state_58730__$1;
(statearr_58734_58759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (1))){
var inst_58707 = (0);
var state_58730__$1 = (function (){var statearr_58735 = state_58730;
(statearr_58735[(8)] = inst_58707);

return statearr_58735;
})();
var statearr_58736_58760 = state_58730__$1;
(statearr_58736_58760[(2)] = null);

(statearr_58736_58760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (4))){
var state_58730__$1 = state_58730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58730__$1,(7),ch);
} else {
if((state_val_58731 === (6))){
var inst_58725 = (state_58730[(2)]);
var state_58730__$1 = state_58730;
var statearr_58737_58761 = state_58730__$1;
(statearr_58737_58761[(2)] = inst_58725);

(statearr_58737_58761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (3))){
var inst_58727 = (state_58730[(2)]);
var inst_58728 = cljs.core.async.close_BANG_.call(null,out);
var state_58730__$1 = (function (){var statearr_58738 = state_58730;
(statearr_58738[(9)] = inst_58727);

return statearr_58738;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58730__$1,inst_58728);
} else {
if((state_val_58731 === (2))){
var inst_58707 = (state_58730[(8)]);
var inst_58709 = (inst_58707 < n);
var state_58730__$1 = state_58730;
if(cljs.core.truth_(inst_58709)){
var statearr_58739_58762 = state_58730__$1;
(statearr_58739_58762[(1)] = (4));

} else {
var statearr_58740_58763 = state_58730__$1;
(statearr_58740_58763[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (11))){
var inst_58707 = (state_58730[(8)]);
var inst_58717 = (state_58730[(2)]);
var inst_58718 = (inst_58707 + (1));
var inst_58707__$1 = inst_58718;
var state_58730__$1 = (function (){var statearr_58741 = state_58730;
(statearr_58741[(8)] = inst_58707__$1);

(statearr_58741[(10)] = inst_58717);

return statearr_58741;
})();
var statearr_58742_58764 = state_58730__$1;
(statearr_58742_58764[(2)] = null);

(statearr_58742_58764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (9))){
var state_58730__$1 = state_58730;
var statearr_58743_58765 = state_58730__$1;
(statearr_58743_58765[(2)] = null);

(statearr_58743_58765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (5))){
var state_58730__$1 = state_58730;
var statearr_58744_58766 = state_58730__$1;
(statearr_58744_58766[(2)] = null);

(statearr_58744_58766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (10))){
var inst_58722 = (state_58730[(2)]);
var state_58730__$1 = state_58730;
var statearr_58745_58767 = state_58730__$1;
(statearr_58745_58767[(2)] = inst_58722);

(statearr_58745_58767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58731 === (8))){
var inst_58712 = (state_58730[(7)]);
var state_58730__$1 = state_58730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58730__$1,(11),out,inst_58712);
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
});})(c__37979__auto___58757,out))
;
return ((function (switch__37867__auto__,c__37979__auto___58757,out){
return (function() {
var cljs$core$async$state_machine__37868__auto__ = null;
var cljs$core$async$state_machine__37868__auto____0 = (function (){
var statearr_58749 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58749[(0)] = cljs$core$async$state_machine__37868__auto__);

(statearr_58749[(1)] = (1));

return statearr_58749;
});
var cljs$core$async$state_machine__37868__auto____1 = (function (state_58730){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_58730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e58750){if((e58750 instanceof Object)){
var ex__37871__auto__ = e58750;
var statearr_58751_58768 = state_58730;
(statearr_58751_58768[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58769 = state_58730;
state_58730 = G__58769;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$state_machine__37868__auto__ = function(state_58730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37868__auto____1.call(this,state_58730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37868__auto____0;
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37868__auto____1;
return cljs$core$async$state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___58757,out))
})();
var state__37981__auto__ = (function (){var statearr_58752 = f__37980__auto__.call(null);
(statearr_58752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___58757);

return statearr_58752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___58757,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async58777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58777 = (function (map_LT_,f,ch,meta58778){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta58778 = meta58778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58779,meta58778__$1){
var self__ = this;
var _58779__$1 = this;
return (new cljs.core.async.t_cljs$core$async58777(self__.map_LT_,self__.f,self__.ch,meta58778__$1));
});

cljs.core.async.t_cljs$core$async58777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58779){
var self__ = this;
var _58779__$1 = this;
return self__.meta58778;
});

cljs.core.async.t_cljs$core$async58777.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async58777.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58777.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58777.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async58777.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async58780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58780 = (function (map_LT_,f,ch,meta58778,_,fn1,meta58781){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta58778 = meta58778;
this._ = _;
this.fn1 = fn1;
this.meta58781 = meta58781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_58782,meta58781__$1){
var self__ = this;
var _58782__$1 = this;
return (new cljs.core.async.t_cljs$core$async58780(self__.map_LT_,self__.f,self__.ch,self__.meta58778,self__._,self__.fn1,meta58781__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async58780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_58782){
var self__ = this;
var _58782__$1 = this;
return self__.meta58781;
});})(___$1))
;

cljs.core.async.t_cljs$core$async58780.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async58780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async58780.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async58780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__58770_SHARP_){
return f1.call(null,(((p1__58770_SHARP_ == null))?null:self__.f.call(null,p1__58770_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async58780.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58778","meta58778",1885217281,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async58777","cljs.core.async/t_cljs$core$async58777",1732097058,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta58781","meta58781",-820451778,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async58780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58780";

cljs.core.async.t_cljs$core$async58780.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async58780");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async58780 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58780(map_LT___$1,f__$1,ch__$1,meta58778__$1,___$2,fn1__$1,meta58781){
return (new cljs.core.async.t_cljs$core$async58780(map_LT___$1,f__$1,ch__$1,meta58778__$1,___$2,fn1__$1,meta58781));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async58780(self__.map_LT_,self__.f,self__.ch,self__.meta58778,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async58777.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async58777.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async58777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58778","meta58778",1885217281,null)], null);
});

cljs.core.async.t_cljs$core$async58777.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58777";

cljs.core.async.t_cljs$core$async58777.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async58777");
});

cljs.core.async.__GT_t_cljs$core$async58777 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58777(map_LT___$1,f__$1,ch__$1,meta58778){
return (new cljs.core.async.t_cljs$core$async58777(map_LT___$1,f__$1,ch__$1,meta58778));
});

}

return (new cljs.core.async.t_cljs$core$async58777(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async58786 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58786 = (function (map_GT_,f,ch,meta58787){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta58787 = meta58787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58788,meta58787__$1){
var self__ = this;
var _58788__$1 = this;
return (new cljs.core.async.t_cljs$core$async58786(self__.map_GT_,self__.f,self__.ch,meta58787__$1));
});

cljs.core.async.t_cljs$core$async58786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58788){
var self__ = this;
var _58788__$1 = this;
return self__.meta58787;
});

cljs.core.async.t_cljs$core$async58786.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async58786.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58786.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async58786.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async58786.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async58786.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async58786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58787","meta58787",1169096721,null)], null);
});

cljs.core.async.t_cljs$core$async58786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58786";

cljs.core.async.t_cljs$core$async58786.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async58786");
});

cljs.core.async.__GT_t_cljs$core$async58786 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async58786(map_GT___$1,f__$1,ch__$1,meta58787){
return (new cljs.core.async.t_cljs$core$async58786(map_GT___$1,f__$1,ch__$1,meta58787));
});

}

return (new cljs.core.async.t_cljs$core$async58786(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async58792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58792 = (function (filter_GT_,p,ch,meta58793){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta58793 = meta58793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58794,meta58793__$1){
var self__ = this;
var _58794__$1 = this;
return (new cljs.core.async.t_cljs$core$async58792(self__.filter_GT_,self__.p,self__.ch,meta58793__$1));
});

cljs.core.async.t_cljs$core$async58792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58794){
var self__ = this;
var _58794__$1 = this;
return self__.meta58793;
});

cljs.core.async.t_cljs$core$async58792.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async58792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58792.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58792.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async58792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async58792.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async58792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async58792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58793","meta58793",1035280472,null)], null);
});

cljs.core.async.t_cljs$core$async58792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58792";

cljs.core.async.t_cljs$core$async58792.cljs$lang$ctorPrWriter = (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"cljs.core.async/t_cljs$core$async58792");
});

cljs.core.async.__GT_t_cljs$core$async58792 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async58792(filter_GT___$1,p__$1,ch__$1,meta58793){
return (new cljs.core.async.t_cljs$core$async58792(filter_GT___$1,p__$1,ch__$1,meta58793));
});

}

return (new cljs.core.async.t_cljs$core$async58792(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args58795 = [];
var len__25826__auto___58839 = arguments.length;
var i__25827__auto___58840 = (0);
while(true){
if((i__25827__auto___58840 < len__25826__auto___58839)){
args58795.push((arguments[i__25827__auto___58840]));

var G__58841 = (i__25827__auto___58840 + (1));
i__25827__auto___58840 = G__58841;
continue;
} else {
}
break;
}

var G__58797 = args58795.length;
switch (G__58797) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58795.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37979__auto___58843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___58843,out){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___58843,out){
return (function (state_58818){
var state_val_58819 = (state_58818[(1)]);
if((state_val_58819 === (7))){
var inst_58814 = (state_58818[(2)]);
var state_58818__$1 = state_58818;
var statearr_58820_58844 = state_58818__$1;
(statearr_58820_58844[(2)] = inst_58814);

(statearr_58820_58844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58819 === (1))){
var state_58818__$1 = state_58818;
var statearr_58821_58845 = state_58818__$1;
(statearr_58821_58845[(2)] = null);

(statearr_58821_58845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58819 === (4))){
var inst_58800 = (state_58818[(7)]);
var inst_58800__$1 = (state_58818[(2)]);
var inst_58801 = (inst_58800__$1 == null);
var state_58818__$1 = (function (){var statearr_58822 = state_58818;
(statearr_58822[(7)] = inst_58800__$1);

return statearr_58822;
})();
if(cljs.core.truth_(inst_58801)){
var statearr_58823_58846 = state_58818__$1;
(statearr_58823_58846[(1)] = (5));

} else {
var statearr_58824_58847 = state_58818__$1;
(statearr_58824_58847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58819 === (6))){
var inst_58800 = (state_58818[(7)]);
var inst_58805 = p.call(null,inst_58800);
var state_58818__$1 = state_58818;
if(cljs.core.truth_(inst_58805)){
var statearr_58825_58848 = state_58818__$1;
(statearr_58825_58848[(1)] = (8));

} else {
var statearr_58826_58849 = state_58818__$1;
(statearr_58826_58849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58819 === (3))){
var inst_58816 = (state_58818[(2)]);
var state_58818__$1 = state_58818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58818__$1,inst_58816);
} else {
if((state_val_58819 === (2))){
var state_58818__$1 = state_58818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58818__$1,(4),ch);
} else {
if((state_val_58819 === (11))){
var inst_58808 = (state_58818[(2)]);
var state_58818__$1 = state_58818;
var statearr_58827_58850 = state_58818__$1;
(statearr_58827_58850[(2)] = inst_58808);

(statearr_58827_58850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58819 === (9))){
var state_58818__$1 = state_58818;
var statearr_58828_58851 = state_58818__$1;
(statearr_58828_58851[(2)] = null);

(statearr_58828_58851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58819 === (5))){
var inst_58803 = cljs.core.async.close_BANG_.call(null,out);
var state_58818__$1 = state_58818;
var statearr_58829_58852 = state_58818__$1;
(statearr_58829_58852[(2)] = inst_58803);

(statearr_58829_58852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58819 === (10))){
var inst_58811 = (state_58818[(2)]);
var state_58818__$1 = (function (){var statearr_58830 = state_58818;
(statearr_58830[(8)] = inst_58811);

return statearr_58830;
})();
var statearr_58831_58853 = state_58818__$1;
(statearr_58831_58853[(2)] = null);

(statearr_58831_58853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58819 === (8))){
var inst_58800 = (state_58818[(7)]);
var state_58818__$1 = state_58818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58818__$1,(11),out,inst_58800);
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
});})(c__37979__auto___58843,out))
;
return ((function (switch__37867__auto__,c__37979__auto___58843,out){
return (function() {
var cljs$core$async$state_machine__37868__auto__ = null;
var cljs$core$async$state_machine__37868__auto____0 = (function (){
var statearr_58835 = [null,null,null,null,null,null,null,null,null];
(statearr_58835[(0)] = cljs$core$async$state_machine__37868__auto__);

(statearr_58835[(1)] = (1));

return statearr_58835;
});
var cljs$core$async$state_machine__37868__auto____1 = (function (state_58818){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_58818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e58836){if((e58836 instanceof Object)){
var ex__37871__auto__ = e58836;
var statearr_58837_58854 = state_58818;
(statearr_58837_58854[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58855 = state_58818;
state_58818 = G__58855;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$state_machine__37868__auto__ = function(state_58818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37868__auto____1.call(this,state_58818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37868__auto____0;
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37868__auto____1;
return cljs$core$async$state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___58843,out))
})();
var state__37981__auto__ = (function (){var statearr_58838 = f__37980__auto__.call(null);
(statearr_58838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___58843);

return statearr_58838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___58843,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args58856 = [];
var len__25826__auto___58859 = arguments.length;
var i__25827__auto___58860 = (0);
while(true){
if((i__25827__auto___58860 < len__25826__auto___58859)){
args58856.push((arguments[i__25827__auto___58860]));

var G__58861 = (i__25827__auto___58860 + (1));
i__25827__auto___58860 = G__58861;
continue;
} else {
}
break;
}

var G__58858 = args58856.length;
switch (G__58858) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58856.length)].join('')));

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
var c__37979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto__){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto__){
return (function (state_59028){
var state_val_59029 = (state_59028[(1)]);
if((state_val_59029 === (7))){
var inst_59024 = (state_59028[(2)]);
var state_59028__$1 = state_59028;
var statearr_59030_59071 = state_59028__$1;
(statearr_59030_59071[(2)] = inst_59024);

(statearr_59030_59071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (20))){
var inst_58994 = (state_59028[(7)]);
var inst_59005 = (state_59028[(2)]);
var inst_59006 = cljs.core.next.call(null,inst_58994);
var inst_58980 = inst_59006;
var inst_58981 = null;
var inst_58982 = (0);
var inst_58983 = (0);
var state_59028__$1 = (function (){var statearr_59031 = state_59028;
(statearr_59031[(8)] = inst_58983);

(statearr_59031[(9)] = inst_58982);

(statearr_59031[(10)] = inst_59005);

(statearr_59031[(11)] = inst_58980);

(statearr_59031[(12)] = inst_58981);

return statearr_59031;
})();
var statearr_59032_59072 = state_59028__$1;
(statearr_59032_59072[(2)] = null);

(statearr_59032_59072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (1))){
var state_59028__$1 = state_59028;
var statearr_59033_59073 = state_59028__$1;
(statearr_59033_59073[(2)] = null);

(statearr_59033_59073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (4))){
var inst_58969 = (state_59028[(13)]);
var inst_58969__$1 = (state_59028[(2)]);
var inst_58970 = (inst_58969__$1 == null);
var state_59028__$1 = (function (){var statearr_59034 = state_59028;
(statearr_59034[(13)] = inst_58969__$1);

return statearr_59034;
})();
if(cljs.core.truth_(inst_58970)){
var statearr_59035_59074 = state_59028__$1;
(statearr_59035_59074[(1)] = (5));

} else {
var statearr_59036_59075 = state_59028__$1;
(statearr_59036_59075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (15))){
var state_59028__$1 = state_59028;
var statearr_59040_59076 = state_59028__$1;
(statearr_59040_59076[(2)] = null);

(statearr_59040_59076[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (21))){
var state_59028__$1 = state_59028;
var statearr_59041_59077 = state_59028__$1;
(statearr_59041_59077[(2)] = null);

(statearr_59041_59077[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (13))){
var inst_58983 = (state_59028[(8)]);
var inst_58982 = (state_59028[(9)]);
var inst_58980 = (state_59028[(11)]);
var inst_58981 = (state_59028[(12)]);
var inst_58990 = (state_59028[(2)]);
var inst_58991 = (inst_58983 + (1));
var tmp59037 = inst_58982;
var tmp59038 = inst_58980;
var tmp59039 = inst_58981;
var inst_58980__$1 = tmp59038;
var inst_58981__$1 = tmp59039;
var inst_58982__$1 = tmp59037;
var inst_58983__$1 = inst_58991;
var state_59028__$1 = (function (){var statearr_59042 = state_59028;
(statearr_59042[(8)] = inst_58983__$1);

(statearr_59042[(9)] = inst_58982__$1);

(statearr_59042[(11)] = inst_58980__$1);

(statearr_59042[(14)] = inst_58990);

(statearr_59042[(12)] = inst_58981__$1);

return statearr_59042;
})();
var statearr_59043_59078 = state_59028__$1;
(statearr_59043_59078[(2)] = null);

(statearr_59043_59078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (22))){
var state_59028__$1 = state_59028;
var statearr_59044_59079 = state_59028__$1;
(statearr_59044_59079[(2)] = null);

(statearr_59044_59079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (6))){
var inst_58969 = (state_59028[(13)]);
var inst_58978 = f.call(null,inst_58969);
var inst_58979 = cljs.core.seq.call(null,inst_58978);
var inst_58980 = inst_58979;
var inst_58981 = null;
var inst_58982 = (0);
var inst_58983 = (0);
var state_59028__$1 = (function (){var statearr_59045 = state_59028;
(statearr_59045[(8)] = inst_58983);

(statearr_59045[(9)] = inst_58982);

(statearr_59045[(11)] = inst_58980);

(statearr_59045[(12)] = inst_58981);

return statearr_59045;
})();
var statearr_59046_59080 = state_59028__$1;
(statearr_59046_59080[(2)] = null);

(statearr_59046_59080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (17))){
var inst_58994 = (state_59028[(7)]);
var inst_58998 = cljs.core.chunk_first.call(null,inst_58994);
var inst_58999 = cljs.core.chunk_rest.call(null,inst_58994);
var inst_59000 = cljs.core.count.call(null,inst_58998);
var inst_58980 = inst_58999;
var inst_58981 = inst_58998;
var inst_58982 = inst_59000;
var inst_58983 = (0);
var state_59028__$1 = (function (){var statearr_59047 = state_59028;
(statearr_59047[(8)] = inst_58983);

(statearr_59047[(9)] = inst_58982);

(statearr_59047[(11)] = inst_58980);

(statearr_59047[(12)] = inst_58981);

return statearr_59047;
})();
var statearr_59048_59081 = state_59028__$1;
(statearr_59048_59081[(2)] = null);

(statearr_59048_59081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (3))){
var inst_59026 = (state_59028[(2)]);
var state_59028__$1 = state_59028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59028__$1,inst_59026);
} else {
if((state_val_59029 === (12))){
var inst_59014 = (state_59028[(2)]);
var state_59028__$1 = state_59028;
var statearr_59049_59082 = state_59028__$1;
(statearr_59049_59082[(2)] = inst_59014);

(statearr_59049_59082[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (2))){
var state_59028__$1 = state_59028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59028__$1,(4),in$);
} else {
if((state_val_59029 === (23))){
var inst_59022 = (state_59028[(2)]);
var state_59028__$1 = state_59028;
var statearr_59050_59083 = state_59028__$1;
(statearr_59050_59083[(2)] = inst_59022);

(statearr_59050_59083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (19))){
var inst_59009 = (state_59028[(2)]);
var state_59028__$1 = state_59028;
var statearr_59051_59084 = state_59028__$1;
(statearr_59051_59084[(2)] = inst_59009);

(statearr_59051_59084[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (11))){
var inst_58980 = (state_59028[(11)]);
var inst_58994 = (state_59028[(7)]);
var inst_58994__$1 = cljs.core.seq.call(null,inst_58980);
var state_59028__$1 = (function (){var statearr_59052 = state_59028;
(statearr_59052[(7)] = inst_58994__$1);

return statearr_59052;
})();
if(inst_58994__$1){
var statearr_59053_59085 = state_59028__$1;
(statearr_59053_59085[(1)] = (14));

} else {
var statearr_59054_59086 = state_59028__$1;
(statearr_59054_59086[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (9))){
var inst_59016 = (state_59028[(2)]);
var inst_59017 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_59028__$1 = (function (){var statearr_59055 = state_59028;
(statearr_59055[(15)] = inst_59016);

return statearr_59055;
})();
if(cljs.core.truth_(inst_59017)){
var statearr_59056_59087 = state_59028__$1;
(statearr_59056_59087[(1)] = (21));

} else {
var statearr_59057_59088 = state_59028__$1;
(statearr_59057_59088[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (5))){
var inst_58972 = cljs.core.async.close_BANG_.call(null,out);
var state_59028__$1 = state_59028;
var statearr_59058_59089 = state_59028__$1;
(statearr_59058_59089[(2)] = inst_58972);

(statearr_59058_59089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (14))){
var inst_58994 = (state_59028[(7)]);
var inst_58996 = cljs.core.chunked_seq_QMARK_.call(null,inst_58994);
var state_59028__$1 = state_59028;
if(inst_58996){
var statearr_59059_59090 = state_59028__$1;
(statearr_59059_59090[(1)] = (17));

} else {
var statearr_59060_59091 = state_59028__$1;
(statearr_59060_59091[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (16))){
var inst_59012 = (state_59028[(2)]);
var state_59028__$1 = state_59028;
var statearr_59061_59092 = state_59028__$1;
(statearr_59061_59092[(2)] = inst_59012);

(statearr_59061_59092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59029 === (10))){
var inst_58983 = (state_59028[(8)]);
var inst_58981 = (state_59028[(12)]);
var inst_58988 = cljs.core._nth.call(null,inst_58981,inst_58983);
var state_59028__$1 = state_59028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59028__$1,(13),out,inst_58988);
} else {
if((state_val_59029 === (18))){
var inst_58994 = (state_59028[(7)]);
var inst_59003 = cljs.core.first.call(null,inst_58994);
var state_59028__$1 = state_59028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59028__$1,(20),out,inst_59003);
} else {
if((state_val_59029 === (8))){
var inst_58983 = (state_59028[(8)]);
var inst_58982 = (state_59028[(9)]);
var inst_58985 = (inst_58983 < inst_58982);
var inst_58986 = inst_58985;
var state_59028__$1 = state_59028;
if(cljs.core.truth_(inst_58986)){
var statearr_59062_59093 = state_59028__$1;
(statearr_59062_59093[(1)] = (10));

} else {
var statearr_59063_59094 = state_59028__$1;
(statearr_59063_59094[(1)] = (11));

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
});})(c__37979__auto__))
;
return ((function (switch__37867__auto__,c__37979__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37868__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37868__auto____0 = (function (){
var statearr_59067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59067[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37868__auto__);

(statearr_59067[(1)] = (1));

return statearr_59067;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37868__auto____1 = (function (state_59028){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_59028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e59068){if((e59068 instanceof Object)){
var ex__37871__auto__ = e59068;
var statearr_59069_59095 = state_59028;
(statearr_59069_59095[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59096 = state_59028;
state_59028 = G__59096;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37868__auto__ = function(state_59028){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37868__auto____1.call(this,state_59028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37868__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37868__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto__))
})();
var state__37981__auto__ = (function (){var statearr_59070 = f__37980__auto__.call(null);
(statearr_59070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto__);

return statearr_59070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto__))
);

return c__37979__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args59097 = [];
var len__25826__auto___59100 = arguments.length;
var i__25827__auto___59101 = (0);
while(true){
if((i__25827__auto___59101 < len__25826__auto___59100)){
args59097.push((arguments[i__25827__auto___59101]));

var G__59102 = (i__25827__auto___59101 + (1));
i__25827__auto___59101 = G__59102;
continue;
} else {
}
break;
}

var G__59099 = args59097.length;
switch (G__59099) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59097.length)].join('')));

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
var args59104 = [];
var len__25826__auto___59107 = arguments.length;
var i__25827__auto___59108 = (0);
while(true){
if((i__25827__auto___59108 < len__25826__auto___59107)){
args59104.push((arguments[i__25827__auto___59108]));

var G__59109 = (i__25827__auto___59108 + (1));
i__25827__auto___59108 = G__59109;
continue;
} else {
}
break;
}

var G__59106 = args59104.length;
switch (G__59106) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59104.length)].join('')));

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
var args59111 = [];
var len__25826__auto___59162 = arguments.length;
var i__25827__auto___59163 = (0);
while(true){
if((i__25827__auto___59163 < len__25826__auto___59162)){
args59111.push((arguments[i__25827__auto___59163]));

var G__59164 = (i__25827__auto___59163 + (1));
i__25827__auto___59163 = G__59164;
continue;
} else {
}
break;
}

var G__59113 = args59111.length;
switch (G__59113) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59111.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37979__auto___59166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___59166,out){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___59166,out){
return (function (state_59137){
var state_val_59138 = (state_59137[(1)]);
if((state_val_59138 === (7))){
var inst_59132 = (state_59137[(2)]);
var state_59137__$1 = state_59137;
var statearr_59139_59167 = state_59137__$1;
(statearr_59139_59167[(2)] = inst_59132);

(statearr_59139_59167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (1))){
var inst_59114 = null;
var state_59137__$1 = (function (){var statearr_59140 = state_59137;
(statearr_59140[(7)] = inst_59114);

return statearr_59140;
})();
var statearr_59141_59168 = state_59137__$1;
(statearr_59141_59168[(2)] = null);

(statearr_59141_59168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (4))){
var inst_59117 = (state_59137[(8)]);
var inst_59117__$1 = (state_59137[(2)]);
var inst_59118 = (inst_59117__$1 == null);
var inst_59119 = cljs.core.not.call(null,inst_59118);
var state_59137__$1 = (function (){var statearr_59142 = state_59137;
(statearr_59142[(8)] = inst_59117__$1);

return statearr_59142;
})();
if(inst_59119){
var statearr_59143_59169 = state_59137__$1;
(statearr_59143_59169[(1)] = (5));

} else {
var statearr_59144_59170 = state_59137__$1;
(statearr_59144_59170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (6))){
var state_59137__$1 = state_59137;
var statearr_59145_59171 = state_59137__$1;
(statearr_59145_59171[(2)] = null);

(statearr_59145_59171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (3))){
var inst_59134 = (state_59137[(2)]);
var inst_59135 = cljs.core.async.close_BANG_.call(null,out);
var state_59137__$1 = (function (){var statearr_59146 = state_59137;
(statearr_59146[(9)] = inst_59134);

return statearr_59146;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59137__$1,inst_59135);
} else {
if((state_val_59138 === (2))){
var state_59137__$1 = state_59137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59137__$1,(4),ch);
} else {
if((state_val_59138 === (11))){
var inst_59117 = (state_59137[(8)]);
var inst_59126 = (state_59137[(2)]);
var inst_59114 = inst_59117;
var state_59137__$1 = (function (){var statearr_59147 = state_59137;
(statearr_59147[(7)] = inst_59114);

(statearr_59147[(10)] = inst_59126);

return statearr_59147;
})();
var statearr_59148_59172 = state_59137__$1;
(statearr_59148_59172[(2)] = null);

(statearr_59148_59172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (9))){
var inst_59117 = (state_59137[(8)]);
var state_59137__$1 = state_59137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59137__$1,(11),out,inst_59117);
} else {
if((state_val_59138 === (5))){
var inst_59114 = (state_59137[(7)]);
var inst_59117 = (state_59137[(8)]);
var inst_59121 = cljs.core._EQ_.call(null,inst_59117,inst_59114);
var state_59137__$1 = state_59137;
if(inst_59121){
var statearr_59150_59173 = state_59137__$1;
(statearr_59150_59173[(1)] = (8));

} else {
var statearr_59151_59174 = state_59137__$1;
(statearr_59151_59174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (10))){
var inst_59129 = (state_59137[(2)]);
var state_59137__$1 = state_59137;
var statearr_59152_59175 = state_59137__$1;
(statearr_59152_59175[(2)] = inst_59129);

(statearr_59152_59175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (8))){
var inst_59114 = (state_59137[(7)]);
var tmp59149 = inst_59114;
var inst_59114__$1 = tmp59149;
var state_59137__$1 = (function (){var statearr_59153 = state_59137;
(statearr_59153[(7)] = inst_59114__$1);

return statearr_59153;
})();
var statearr_59154_59176 = state_59137__$1;
(statearr_59154_59176[(2)] = null);

(statearr_59154_59176[(1)] = (2));


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
});})(c__37979__auto___59166,out))
;
return ((function (switch__37867__auto__,c__37979__auto___59166,out){
return (function() {
var cljs$core$async$state_machine__37868__auto__ = null;
var cljs$core$async$state_machine__37868__auto____0 = (function (){
var statearr_59158 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59158[(0)] = cljs$core$async$state_machine__37868__auto__);

(statearr_59158[(1)] = (1));

return statearr_59158;
});
var cljs$core$async$state_machine__37868__auto____1 = (function (state_59137){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_59137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e59159){if((e59159 instanceof Object)){
var ex__37871__auto__ = e59159;
var statearr_59160_59177 = state_59137;
(statearr_59160_59177[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59178 = state_59137;
state_59137 = G__59178;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$state_machine__37868__auto__ = function(state_59137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37868__auto____1.call(this,state_59137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37868__auto____0;
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37868__auto____1;
return cljs$core$async$state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___59166,out))
})();
var state__37981__auto__ = (function (){var statearr_59161 = f__37980__auto__.call(null);
(statearr_59161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___59166);

return statearr_59161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___59166,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args59179 = [];
var len__25826__auto___59249 = arguments.length;
var i__25827__auto___59250 = (0);
while(true){
if((i__25827__auto___59250 < len__25826__auto___59249)){
args59179.push((arguments[i__25827__auto___59250]));

var G__59251 = (i__25827__auto___59250 + (1));
i__25827__auto___59250 = G__59251;
continue;
} else {
}
break;
}

var G__59181 = args59179.length;
switch (G__59181) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59179.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37979__auto___59253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___59253,out){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___59253,out){
return (function (state_59219){
var state_val_59220 = (state_59219[(1)]);
if((state_val_59220 === (7))){
var inst_59215 = (state_59219[(2)]);
var state_59219__$1 = state_59219;
var statearr_59221_59254 = state_59219__$1;
(statearr_59221_59254[(2)] = inst_59215);

(statearr_59221_59254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59220 === (1))){
var inst_59182 = (new Array(n));
var inst_59183 = inst_59182;
var inst_59184 = (0);
var state_59219__$1 = (function (){var statearr_59222 = state_59219;
(statearr_59222[(7)] = inst_59183);

(statearr_59222[(8)] = inst_59184);

return statearr_59222;
})();
var statearr_59223_59255 = state_59219__$1;
(statearr_59223_59255[(2)] = null);

(statearr_59223_59255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59220 === (4))){
var inst_59187 = (state_59219[(9)]);
var inst_59187__$1 = (state_59219[(2)]);
var inst_59188 = (inst_59187__$1 == null);
var inst_59189 = cljs.core.not.call(null,inst_59188);
var state_59219__$1 = (function (){var statearr_59224 = state_59219;
(statearr_59224[(9)] = inst_59187__$1);

return statearr_59224;
})();
if(inst_59189){
var statearr_59225_59256 = state_59219__$1;
(statearr_59225_59256[(1)] = (5));

} else {
var statearr_59226_59257 = state_59219__$1;
(statearr_59226_59257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59220 === (15))){
var inst_59209 = (state_59219[(2)]);
var state_59219__$1 = state_59219;
var statearr_59227_59258 = state_59219__$1;
(statearr_59227_59258[(2)] = inst_59209);

(statearr_59227_59258[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59220 === (13))){
var state_59219__$1 = state_59219;
var statearr_59228_59259 = state_59219__$1;
(statearr_59228_59259[(2)] = null);

(statearr_59228_59259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59220 === (6))){
var inst_59184 = (state_59219[(8)]);
var inst_59205 = (inst_59184 > (0));
var state_59219__$1 = state_59219;
if(cljs.core.truth_(inst_59205)){
var statearr_59229_59260 = state_59219__$1;
(statearr_59229_59260[(1)] = (12));

} else {
var statearr_59230_59261 = state_59219__$1;
(statearr_59230_59261[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59220 === (3))){
var inst_59217 = (state_59219[(2)]);
var state_59219__$1 = state_59219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59219__$1,inst_59217);
} else {
if((state_val_59220 === (12))){
var inst_59183 = (state_59219[(7)]);
var inst_59207 = cljs.core.vec.call(null,inst_59183);
var state_59219__$1 = state_59219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59219__$1,(15),out,inst_59207);
} else {
if((state_val_59220 === (2))){
var state_59219__$1 = state_59219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59219__$1,(4),ch);
} else {
if((state_val_59220 === (11))){
var inst_59199 = (state_59219[(2)]);
var inst_59200 = (new Array(n));
var inst_59183 = inst_59200;
var inst_59184 = (0);
var state_59219__$1 = (function (){var statearr_59231 = state_59219;
(statearr_59231[(7)] = inst_59183);

(statearr_59231[(8)] = inst_59184);

(statearr_59231[(10)] = inst_59199);

return statearr_59231;
})();
var statearr_59232_59262 = state_59219__$1;
(statearr_59232_59262[(2)] = null);

(statearr_59232_59262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59220 === (9))){
var inst_59183 = (state_59219[(7)]);
var inst_59197 = cljs.core.vec.call(null,inst_59183);
var state_59219__$1 = state_59219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59219__$1,(11),out,inst_59197);
} else {
if((state_val_59220 === (5))){
var inst_59187 = (state_59219[(9)]);
var inst_59183 = (state_59219[(7)]);
var inst_59192 = (state_59219[(11)]);
var inst_59184 = (state_59219[(8)]);
var inst_59191 = (inst_59183[inst_59184] = inst_59187);
var inst_59192__$1 = (inst_59184 + (1));
var inst_59193 = (inst_59192__$1 < n);
var state_59219__$1 = (function (){var statearr_59233 = state_59219;
(statearr_59233[(12)] = inst_59191);

(statearr_59233[(11)] = inst_59192__$1);

return statearr_59233;
})();
if(cljs.core.truth_(inst_59193)){
var statearr_59234_59263 = state_59219__$1;
(statearr_59234_59263[(1)] = (8));

} else {
var statearr_59235_59264 = state_59219__$1;
(statearr_59235_59264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59220 === (14))){
var inst_59212 = (state_59219[(2)]);
var inst_59213 = cljs.core.async.close_BANG_.call(null,out);
var state_59219__$1 = (function (){var statearr_59237 = state_59219;
(statearr_59237[(13)] = inst_59212);

return statearr_59237;
})();
var statearr_59238_59265 = state_59219__$1;
(statearr_59238_59265[(2)] = inst_59213);

(statearr_59238_59265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59220 === (10))){
var inst_59203 = (state_59219[(2)]);
var state_59219__$1 = state_59219;
var statearr_59239_59266 = state_59219__$1;
(statearr_59239_59266[(2)] = inst_59203);

(statearr_59239_59266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59220 === (8))){
var inst_59183 = (state_59219[(7)]);
var inst_59192 = (state_59219[(11)]);
var tmp59236 = inst_59183;
var inst_59183__$1 = tmp59236;
var inst_59184 = inst_59192;
var state_59219__$1 = (function (){var statearr_59240 = state_59219;
(statearr_59240[(7)] = inst_59183__$1);

(statearr_59240[(8)] = inst_59184);

return statearr_59240;
})();
var statearr_59241_59267 = state_59219__$1;
(statearr_59241_59267[(2)] = null);

(statearr_59241_59267[(1)] = (2));


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
});})(c__37979__auto___59253,out))
;
return ((function (switch__37867__auto__,c__37979__auto___59253,out){
return (function() {
var cljs$core$async$state_machine__37868__auto__ = null;
var cljs$core$async$state_machine__37868__auto____0 = (function (){
var statearr_59245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59245[(0)] = cljs$core$async$state_machine__37868__auto__);

(statearr_59245[(1)] = (1));

return statearr_59245;
});
var cljs$core$async$state_machine__37868__auto____1 = (function (state_59219){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_59219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e59246){if((e59246 instanceof Object)){
var ex__37871__auto__ = e59246;
var statearr_59247_59268 = state_59219;
(statearr_59247_59268[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59269 = state_59219;
state_59219 = G__59269;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$state_machine__37868__auto__ = function(state_59219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37868__auto____1.call(this,state_59219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37868__auto____0;
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37868__auto____1;
return cljs$core$async$state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___59253,out))
})();
var state__37981__auto__ = (function (){var statearr_59248 = f__37980__auto__.call(null);
(statearr_59248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___59253);

return statearr_59248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___59253,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args59270 = [];
var len__25826__auto___59344 = arguments.length;
var i__25827__auto___59345 = (0);
while(true){
if((i__25827__auto___59345 < len__25826__auto___59344)){
args59270.push((arguments[i__25827__auto___59345]));

var G__59346 = (i__25827__auto___59345 + (1));
i__25827__auto___59345 = G__59346;
continue;
} else {
}
break;
}

var G__59272 = args59270.length;
switch (G__59272) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59270.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37979__auto___59348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___59348,out){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___59348,out){
return (function (state_59314){
var state_val_59315 = (state_59314[(1)]);
if((state_val_59315 === (7))){
var inst_59310 = (state_59314[(2)]);
var state_59314__$1 = state_59314;
var statearr_59316_59349 = state_59314__$1;
(statearr_59316_59349[(2)] = inst_59310);

(statearr_59316_59349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59315 === (1))){
var inst_59273 = [];
var inst_59274 = inst_59273;
var inst_59275 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_59314__$1 = (function (){var statearr_59317 = state_59314;
(statearr_59317[(7)] = inst_59274);

(statearr_59317[(8)] = inst_59275);

return statearr_59317;
})();
var statearr_59318_59350 = state_59314__$1;
(statearr_59318_59350[(2)] = null);

(statearr_59318_59350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59315 === (4))){
var inst_59278 = (state_59314[(9)]);
var inst_59278__$1 = (state_59314[(2)]);
var inst_59279 = (inst_59278__$1 == null);
var inst_59280 = cljs.core.not.call(null,inst_59279);
var state_59314__$1 = (function (){var statearr_59319 = state_59314;
(statearr_59319[(9)] = inst_59278__$1);

return statearr_59319;
})();
if(inst_59280){
var statearr_59320_59351 = state_59314__$1;
(statearr_59320_59351[(1)] = (5));

} else {
var statearr_59321_59352 = state_59314__$1;
(statearr_59321_59352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59315 === (15))){
var inst_59304 = (state_59314[(2)]);
var state_59314__$1 = state_59314;
var statearr_59322_59353 = state_59314__$1;
(statearr_59322_59353[(2)] = inst_59304);

(statearr_59322_59353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59315 === (13))){
var state_59314__$1 = state_59314;
var statearr_59323_59354 = state_59314__$1;
(statearr_59323_59354[(2)] = null);

(statearr_59323_59354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59315 === (6))){
var inst_59274 = (state_59314[(7)]);
var inst_59299 = inst_59274.length;
var inst_59300 = (inst_59299 > (0));
var state_59314__$1 = state_59314;
if(cljs.core.truth_(inst_59300)){
var statearr_59324_59355 = state_59314__$1;
(statearr_59324_59355[(1)] = (12));

} else {
var statearr_59325_59356 = state_59314__$1;
(statearr_59325_59356[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59315 === (3))){
var inst_59312 = (state_59314[(2)]);
var state_59314__$1 = state_59314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59314__$1,inst_59312);
} else {
if((state_val_59315 === (12))){
var inst_59274 = (state_59314[(7)]);
var inst_59302 = cljs.core.vec.call(null,inst_59274);
var state_59314__$1 = state_59314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59314__$1,(15),out,inst_59302);
} else {
if((state_val_59315 === (2))){
var state_59314__$1 = state_59314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59314__$1,(4),ch);
} else {
if((state_val_59315 === (11))){
var inst_59282 = (state_59314[(10)]);
var inst_59278 = (state_59314[(9)]);
var inst_59292 = (state_59314[(2)]);
var inst_59293 = [];
var inst_59294 = inst_59293.push(inst_59278);
var inst_59274 = inst_59293;
var inst_59275 = inst_59282;
var state_59314__$1 = (function (){var statearr_59326 = state_59314;
(statearr_59326[(7)] = inst_59274);

(statearr_59326[(11)] = inst_59292);

(statearr_59326[(12)] = inst_59294);

(statearr_59326[(8)] = inst_59275);

return statearr_59326;
})();
var statearr_59327_59357 = state_59314__$1;
(statearr_59327_59357[(2)] = null);

(statearr_59327_59357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59315 === (9))){
var inst_59274 = (state_59314[(7)]);
var inst_59290 = cljs.core.vec.call(null,inst_59274);
var state_59314__$1 = state_59314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59314__$1,(11),out,inst_59290);
} else {
if((state_val_59315 === (5))){
var inst_59282 = (state_59314[(10)]);
var inst_59278 = (state_59314[(9)]);
var inst_59275 = (state_59314[(8)]);
var inst_59282__$1 = f.call(null,inst_59278);
var inst_59283 = cljs.core._EQ_.call(null,inst_59282__$1,inst_59275);
var inst_59284 = cljs.core.keyword_identical_QMARK_.call(null,inst_59275,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_59285 = (inst_59283) || (inst_59284);
var state_59314__$1 = (function (){var statearr_59328 = state_59314;
(statearr_59328[(10)] = inst_59282__$1);

return statearr_59328;
})();
if(cljs.core.truth_(inst_59285)){
var statearr_59329_59358 = state_59314__$1;
(statearr_59329_59358[(1)] = (8));

} else {
var statearr_59330_59359 = state_59314__$1;
(statearr_59330_59359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59315 === (14))){
var inst_59307 = (state_59314[(2)]);
var inst_59308 = cljs.core.async.close_BANG_.call(null,out);
var state_59314__$1 = (function (){var statearr_59332 = state_59314;
(statearr_59332[(13)] = inst_59307);

return statearr_59332;
})();
var statearr_59333_59360 = state_59314__$1;
(statearr_59333_59360[(2)] = inst_59308);

(statearr_59333_59360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59315 === (10))){
var inst_59297 = (state_59314[(2)]);
var state_59314__$1 = state_59314;
var statearr_59334_59361 = state_59314__$1;
(statearr_59334_59361[(2)] = inst_59297);

(statearr_59334_59361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59315 === (8))){
var inst_59282 = (state_59314[(10)]);
var inst_59274 = (state_59314[(7)]);
var inst_59278 = (state_59314[(9)]);
var inst_59287 = inst_59274.push(inst_59278);
var tmp59331 = inst_59274;
var inst_59274__$1 = tmp59331;
var inst_59275 = inst_59282;
var state_59314__$1 = (function (){var statearr_59335 = state_59314;
(statearr_59335[(7)] = inst_59274__$1);

(statearr_59335[(14)] = inst_59287);

(statearr_59335[(8)] = inst_59275);

return statearr_59335;
})();
var statearr_59336_59362 = state_59314__$1;
(statearr_59336_59362[(2)] = null);

(statearr_59336_59362[(1)] = (2));


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
});})(c__37979__auto___59348,out))
;
return ((function (switch__37867__auto__,c__37979__auto___59348,out){
return (function() {
var cljs$core$async$state_machine__37868__auto__ = null;
var cljs$core$async$state_machine__37868__auto____0 = (function (){
var statearr_59340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59340[(0)] = cljs$core$async$state_machine__37868__auto__);

(statearr_59340[(1)] = (1));

return statearr_59340;
});
var cljs$core$async$state_machine__37868__auto____1 = (function (state_59314){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_59314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e59341){if((e59341 instanceof Object)){
var ex__37871__auto__ = e59341;
var statearr_59342_59363 = state_59314;
(statearr_59342_59363[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59364 = state_59314;
state_59314 = G__59364;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
cljs$core$async$state_machine__37868__auto__ = function(state_59314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37868__auto____1.call(this,state_59314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37868__auto____0;
cljs$core$async$state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37868__auto____1;
return cljs$core$async$state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___59348,out))
})();
var state__37981__auto__ = (function (){var statearr_59343 = f__37980__auto__.call(null);
(statearr_59343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___59348);

return statearr_59343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___59348,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1478399626650