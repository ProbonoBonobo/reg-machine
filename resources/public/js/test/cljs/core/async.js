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
if(typeof cljs.core.async.t_cljs$core$async22949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22949 = (function (fn_handler,f,meta22950){
this.fn_handler = fn_handler;
this.f = f;
this.meta22950 = meta22950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22951,meta22950__$1){
var self__ = this;
var _22951__$1 = this;
return (new cljs.core.async.t_cljs$core$async22949(self__.fn_handler,self__.f,meta22950__$1));
});

cljs.core.async.t_cljs$core$async22949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22951){
var self__ = this;
var _22951__$1 = this;
return self__.meta22950;
});

cljs.core.async.t_cljs$core$async22949.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22949.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22949.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta22950","meta22950",423655580,null)], null);
});

cljs.core.async.t_cljs$core$async22949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22949";

cljs.core.async.t_cljs$core$async22949.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async22949");
});

cljs.core.async.__GT_t_cljs$core$async22949 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async22949(fn_handler__$1,f__$1,meta22950){
return (new cljs.core.async.t_cljs$core$async22949(fn_handler__$1,f__$1,meta22950));
});

}

return (new cljs.core.async.t_cljs$core$async22949(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args22954 = [];
var len__5619__auto___22957 = arguments.length;
var i__5620__auto___22958 = (0);
while(true){
if((i__5620__auto___22958 < len__5619__auto___22957)){
args22954.push((arguments[i__5620__auto___22958]));

var G__22959 = (i__5620__auto___22958 + (1));
i__5620__auto___22958 = G__22959;
continue;
} else {
}
break;
}

var G__22956 = args22954.length;
switch (G__22956) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22954.length)].join('')));

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
var args22961 = [];
var len__5619__auto___22964 = arguments.length;
var i__5620__auto___22965 = (0);
while(true){
if((i__5620__auto___22965 < len__5619__auto___22964)){
args22961.push((arguments[i__5620__auto___22965]));

var G__22966 = (i__5620__auto___22965 + (1));
i__5620__auto___22965 = G__22966;
continue;
} else {
}
break;
}

var G__22963 = args22961.length;
switch (G__22963) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22961.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22968 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22968);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22968,ret){
return (function (){
return fn1.call(null,val_22968);
});})(val_22968,ret))
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
var args22969 = [];
var len__5619__auto___22972 = arguments.length;
var i__5620__auto___22973 = (0);
while(true){
if((i__5620__auto___22973 < len__5619__auto___22972)){
args22969.push((arguments[i__5620__auto___22973]));

var G__22974 = (i__5620__auto___22973 + (1));
i__5620__auto___22973 = G__22974;
continue;
} else {
}
break;
}

var G__22971 = args22969.length;
switch (G__22971) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22969.length)].join('')));

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
var n__5464__auto___22976 = n;
var x_22977 = (0);
while(true){
if((x_22977 < n__5464__auto___22976)){
(a[x_22977] = (0));

var G__22978 = (x_22977 + (1));
x_22977 = G__22978;
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

var G__22979 = (i + (1));
i = G__22979;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22983 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22983 = (function (alt_flag,flag,meta22984){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22984 = meta22984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22985,meta22984__$1){
var self__ = this;
var _22985__$1 = this;
return (new cljs.core.async.t_cljs$core$async22983(self__.alt_flag,self__.flag,meta22984__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22983.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22985){
var self__ = this;
var _22985__$1 = this;
return self__.meta22984;
});})(flag))
;

cljs.core.async.t_cljs$core$async22983.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22983.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22983.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22983.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22984","meta22984",-719704199,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22983.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22983";

cljs.core.async.t_cljs$core$async22983.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async22983");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22983 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22983(alt_flag__$1,flag__$1,meta22984){
return (new cljs.core.async.t_cljs$core$async22983(alt_flag__$1,flag__$1,meta22984));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22983(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22989 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22989 = (function (alt_handler,flag,cb,meta22990){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22990 = meta22990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22991,meta22990__$1){
var self__ = this;
var _22991__$1 = this;
return (new cljs.core.async.t_cljs$core$async22989(self__.alt_handler,self__.flag,self__.cb,meta22990__$1));
});

cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22991){
var self__ = this;
var _22991__$1 = this;
return self__.meta22990;
});

cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22990","meta22990",-2017853405,null)], null);
});

cljs.core.async.t_cljs$core$async22989.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22989";

cljs.core.async.t_cljs$core$async22989.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async22989");
});

cljs.core.async.__GT_t_cljs$core$async22989 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22989(alt_handler__$1,flag__$1,cb__$1,meta22990){
return (new cljs.core.async.t_cljs$core$async22989(alt_handler__$1,flag__$1,cb__$1,meta22990));
});

}

return (new cljs.core.async.t_cljs$core$async22989(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22992_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22992_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22993_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22993_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4561__auto__ = wport;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22994 = (i + (1));
i = G__22994;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4561__auto__ = ret;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4549__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4549__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4549__auto__;
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
var args__5626__auto__ = [];
var len__5619__auto___23000 = arguments.length;
var i__5620__auto___23001 = (0);
while(true){
if((i__5620__auto___23001 < len__5619__auto___23000)){
args__5626__auto__.push((arguments[i__5620__auto___23001]));

var G__23002 = (i__5620__auto___23001 + (1));
i__5620__auto___23001 = G__23002;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22997){
var map__22998 = p__22997;
var map__22998__$1 = ((((!((map__22998 == null)))?((((map__22998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22998):map__22998);
var opts = map__22998__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22995){
var G__22996 = cljs.core.first.call(null,seq22995);
var seq22995__$1 = cljs.core.next.call(null,seq22995);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22996,seq22995__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23003 = [];
var len__5619__auto___23053 = arguments.length;
var i__5620__auto___23054 = (0);
while(true){
if((i__5620__auto___23054 < len__5619__auto___23053)){
args23003.push((arguments[i__5620__auto___23054]));

var G__23055 = (i__5620__auto___23054 + (1));
i__5620__auto___23054 = G__23055;
continue;
} else {
}
break;
}

var G__23005 = args23003.length;
switch (G__23005) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23003.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15666__auto___23057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto___23057){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto___23057){
return (function (state_23029){
var state_val_23030 = (state_23029[(1)]);
if((state_val_23030 === (7))){
var inst_23025 = (state_23029[(2)]);
var state_23029__$1 = state_23029;
var statearr_23031_23058 = state_23029__$1;
(statearr_23031_23058[(2)] = inst_23025);

(statearr_23031_23058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (1))){
var state_23029__$1 = state_23029;
var statearr_23032_23059 = state_23029__$1;
(statearr_23032_23059[(2)] = null);

(statearr_23032_23059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (4))){
var inst_23008 = (state_23029[(7)]);
var inst_23008__$1 = (state_23029[(2)]);
var inst_23009 = (inst_23008__$1 == null);
var state_23029__$1 = (function (){var statearr_23033 = state_23029;
(statearr_23033[(7)] = inst_23008__$1);

return statearr_23033;
})();
if(cljs.core.truth_(inst_23009)){
var statearr_23034_23060 = state_23029__$1;
(statearr_23034_23060[(1)] = (5));

} else {
var statearr_23035_23061 = state_23029__$1;
(statearr_23035_23061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (13))){
var state_23029__$1 = state_23029;
var statearr_23036_23062 = state_23029__$1;
(statearr_23036_23062[(2)] = null);

(statearr_23036_23062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (6))){
var inst_23008 = (state_23029[(7)]);
var state_23029__$1 = state_23029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23029__$1,(11),to,inst_23008);
} else {
if((state_val_23030 === (3))){
var inst_23027 = (state_23029[(2)]);
var state_23029__$1 = state_23029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23029__$1,inst_23027);
} else {
if((state_val_23030 === (12))){
var state_23029__$1 = state_23029;
var statearr_23037_23063 = state_23029__$1;
(statearr_23037_23063[(2)] = null);

(statearr_23037_23063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (2))){
var state_23029__$1 = state_23029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23029__$1,(4),from);
} else {
if((state_val_23030 === (11))){
var inst_23018 = (state_23029[(2)]);
var state_23029__$1 = state_23029;
if(cljs.core.truth_(inst_23018)){
var statearr_23038_23064 = state_23029__$1;
(statearr_23038_23064[(1)] = (12));

} else {
var statearr_23039_23065 = state_23029__$1;
(statearr_23039_23065[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (9))){
var state_23029__$1 = state_23029;
var statearr_23040_23066 = state_23029__$1;
(statearr_23040_23066[(2)] = null);

(statearr_23040_23066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (5))){
var state_23029__$1 = state_23029;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23041_23067 = state_23029__$1;
(statearr_23041_23067[(1)] = (8));

} else {
var statearr_23042_23068 = state_23029__$1;
(statearr_23042_23068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (14))){
var inst_23023 = (state_23029[(2)]);
var state_23029__$1 = state_23029;
var statearr_23043_23069 = state_23029__$1;
(statearr_23043_23069[(2)] = inst_23023);

(statearr_23043_23069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (10))){
var inst_23015 = (state_23029[(2)]);
var state_23029__$1 = state_23029;
var statearr_23044_23070 = state_23029__$1;
(statearr_23044_23070[(2)] = inst_23015);

(statearr_23044_23070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23030 === (8))){
var inst_23012 = cljs.core.async.close_BANG_.call(null,to);
var state_23029__$1 = state_23029;
var statearr_23045_23071 = state_23029__$1;
(statearr_23045_23071[(2)] = inst_23012);

(statearr_23045_23071[(1)] = (10));


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
});})(c__15666__auto___23057))
;
return ((function (switch__15601__auto__,c__15666__auto___23057){
return (function() {
var cljs$core$async$state_machine__15602__auto__ = null;
var cljs$core$async$state_machine__15602__auto____0 = (function (){
var statearr_23049 = [null,null,null,null,null,null,null,null];
(statearr_23049[(0)] = cljs$core$async$state_machine__15602__auto__);

(statearr_23049[(1)] = (1));

return statearr_23049;
});
var cljs$core$async$state_machine__15602__auto____1 = (function (state_23029){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_23029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e23050){if((e23050 instanceof Object)){
var ex__15605__auto__ = e23050;
var statearr_23051_23072 = state_23029;
(statearr_23051_23072[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23073 = state_23029;
state_23029 = G__23073;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$state_machine__15602__auto__ = function(state_23029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15602__auto____1.call(this,state_23029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15602__auto____0;
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15602__auto____1;
return cljs$core$async$state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto___23057))
})();
var state__15668__auto__ = (function (){var statearr_23052 = f__15667__auto__.call(null);
(statearr_23052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto___23057);

return statearr_23052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto___23057))
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
return (function (p__23257){
var vec__23258 = p__23257;
var v = cljs.core.nth.call(null,vec__23258,(0),null);
var p = cljs.core.nth.call(null,vec__23258,(1),null);
var job = vec__23258;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15666__auto___23440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto___23440,res,vec__23258,v,p,job,jobs,results){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto___23440,res,vec__23258,v,p,job,jobs,results){
return (function (state_23263){
var state_val_23264 = (state_23263[(1)]);
if((state_val_23264 === (1))){
var state_23263__$1 = state_23263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23263__$1,(2),res,v);
} else {
if((state_val_23264 === (2))){
var inst_23260 = (state_23263[(2)]);
var inst_23261 = cljs.core.async.close_BANG_.call(null,res);
var state_23263__$1 = (function (){var statearr_23265 = state_23263;
(statearr_23265[(7)] = inst_23260);

return statearr_23265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23263__$1,inst_23261);
} else {
return null;
}
}
});})(c__15666__auto___23440,res,vec__23258,v,p,job,jobs,results))
;
return ((function (switch__15601__auto__,c__15666__auto___23440,res,vec__23258,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____0 = (function (){
var statearr_23269 = [null,null,null,null,null,null,null,null];
(statearr_23269[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__);

(statearr_23269[(1)] = (1));

return statearr_23269;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____1 = (function (state_23263){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_23263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e23270){if((e23270 instanceof Object)){
var ex__15605__auto__ = e23270;
var statearr_23271_23441 = state_23263;
(statearr_23271_23441[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23442 = state_23263;
state_23263 = G__23442;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__ = function(state_23263){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____1.call(this,state_23263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto___23440,res,vec__23258,v,p,job,jobs,results))
})();
var state__15668__auto__ = (function (){var statearr_23272 = f__15667__auto__.call(null);
(statearr_23272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto___23440);

return statearr_23272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto___23440,res,vec__23258,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23273){
var vec__23274 = p__23273;
var v = cljs.core.nth.call(null,vec__23274,(0),null);
var p = cljs.core.nth.call(null,vec__23274,(1),null);
var job = vec__23274;
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
var n__5464__auto___23443 = n;
var __23444 = (0);
while(true){
if((__23444 < n__5464__auto___23443)){
var G__23275_23445 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23275_23445) {
case "compute":
var c__15666__auto___23447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23444,c__15666__auto___23447,G__23275_23445,n__5464__auto___23443,jobs,results,process,async){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (__23444,c__15666__auto___23447,G__23275_23445,n__5464__auto___23443,jobs,results,process,async){
return (function (state_23288){
var state_val_23289 = (state_23288[(1)]);
if((state_val_23289 === (1))){
var state_23288__$1 = state_23288;
var statearr_23290_23448 = state_23288__$1;
(statearr_23290_23448[(2)] = null);

(statearr_23290_23448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23289 === (2))){
var state_23288__$1 = state_23288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23288__$1,(4),jobs);
} else {
if((state_val_23289 === (3))){
var inst_23286 = (state_23288[(2)]);
var state_23288__$1 = state_23288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23288__$1,inst_23286);
} else {
if((state_val_23289 === (4))){
var inst_23278 = (state_23288[(2)]);
var inst_23279 = process.call(null,inst_23278);
var state_23288__$1 = state_23288;
if(cljs.core.truth_(inst_23279)){
var statearr_23291_23449 = state_23288__$1;
(statearr_23291_23449[(1)] = (5));

} else {
var statearr_23292_23450 = state_23288__$1;
(statearr_23292_23450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23289 === (5))){
var state_23288__$1 = state_23288;
var statearr_23293_23451 = state_23288__$1;
(statearr_23293_23451[(2)] = null);

(statearr_23293_23451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23289 === (6))){
var state_23288__$1 = state_23288;
var statearr_23294_23452 = state_23288__$1;
(statearr_23294_23452[(2)] = null);

(statearr_23294_23452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23289 === (7))){
var inst_23284 = (state_23288[(2)]);
var state_23288__$1 = state_23288;
var statearr_23295_23453 = state_23288__$1;
(statearr_23295_23453[(2)] = inst_23284);

(statearr_23295_23453[(1)] = (3));


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
});})(__23444,c__15666__auto___23447,G__23275_23445,n__5464__auto___23443,jobs,results,process,async))
;
return ((function (__23444,switch__15601__auto__,c__15666__auto___23447,G__23275_23445,n__5464__auto___23443,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____0 = (function (){
var statearr_23299 = [null,null,null,null,null,null,null];
(statearr_23299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__);

(statearr_23299[(1)] = (1));

return statearr_23299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____1 = (function (state_23288){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_23288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e23300){if((e23300 instanceof Object)){
var ex__15605__auto__ = e23300;
var statearr_23301_23454 = state_23288;
(statearr_23301_23454[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23455 = state_23288;
state_23288 = G__23455;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__ = function(state_23288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____1.call(this,state_23288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__;
})()
;})(__23444,switch__15601__auto__,c__15666__auto___23447,G__23275_23445,n__5464__auto___23443,jobs,results,process,async))
})();
var state__15668__auto__ = (function (){var statearr_23302 = f__15667__auto__.call(null);
(statearr_23302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto___23447);

return statearr_23302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(__23444,c__15666__auto___23447,G__23275_23445,n__5464__auto___23443,jobs,results,process,async))
);


break;
case "async":
var c__15666__auto___23456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23444,c__15666__auto___23456,G__23275_23445,n__5464__auto___23443,jobs,results,process,async){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (__23444,c__15666__auto___23456,G__23275_23445,n__5464__auto___23443,jobs,results,process,async){
return (function (state_23315){
var state_val_23316 = (state_23315[(1)]);
if((state_val_23316 === (1))){
var state_23315__$1 = state_23315;
var statearr_23317_23457 = state_23315__$1;
(statearr_23317_23457[(2)] = null);

(statearr_23317_23457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23316 === (2))){
var state_23315__$1 = state_23315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23315__$1,(4),jobs);
} else {
if((state_val_23316 === (3))){
var inst_23313 = (state_23315[(2)]);
var state_23315__$1 = state_23315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23315__$1,inst_23313);
} else {
if((state_val_23316 === (4))){
var inst_23305 = (state_23315[(2)]);
var inst_23306 = async.call(null,inst_23305);
var state_23315__$1 = state_23315;
if(cljs.core.truth_(inst_23306)){
var statearr_23318_23458 = state_23315__$1;
(statearr_23318_23458[(1)] = (5));

} else {
var statearr_23319_23459 = state_23315__$1;
(statearr_23319_23459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23316 === (5))){
var state_23315__$1 = state_23315;
var statearr_23320_23460 = state_23315__$1;
(statearr_23320_23460[(2)] = null);

(statearr_23320_23460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23316 === (6))){
var state_23315__$1 = state_23315;
var statearr_23321_23461 = state_23315__$1;
(statearr_23321_23461[(2)] = null);

(statearr_23321_23461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23316 === (7))){
var inst_23311 = (state_23315[(2)]);
var state_23315__$1 = state_23315;
var statearr_23322_23462 = state_23315__$1;
(statearr_23322_23462[(2)] = inst_23311);

(statearr_23322_23462[(1)] = (3));


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
});})(__23444,c__15666__auto___23456,G__23275_23445,n__5464__auto___23443,jobs,results,process,async))
;
return ((function (__23444,switch__15601__auto__,c__15666__auto___23456,G__23275_23445,n__5464__auto___23443,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____0 = (function (){
var statearr_23326 = [null,null,null,null,null,null,null];
(statearr_23326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__);

(statearr_23326[(1)] = (1));

return statearr_23326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____1 = (function (state_23315){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_23315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e23327){if((e23327 instanceof Object)){
var ex__15605__auto__ = e23327;
var statearr_23328_23463 = state_23315;
(statearr_23328_23463[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23464 = state_23315;
state_23315 = G__23464;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__ = function(state_23315){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____1.call(this,state_23315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__;
})()
;})(__23444,switch__15601__auto__,c__15666__auto___23456,G__23275_23445,n__5464__auto___23443,jobs,results,process,async))
})();
var state__15668__auto__ = (function (){var statearr_23329 = f__15667__auto__.call(null);
(statearr_23329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto___23456);

return statearr_23329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(__23444,c__15666__auto___23456,G__23275_23445,n__5464__auto___23443,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23465 = (__23444 + (1));
__23444 = G__23465;
continue;
} else {
}
break;
}

var c__15666__auto___23466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto___23466,jobs,results,process,async){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto___23466,jobs,results,process,async){
return (function (state_23351){
var state_val_23352 = (state_23351[(1)]);
if((state_val_23352 === (1))){
var state_23351__$1 = state_23351;
var statearr_23353_23467 = state_23351__$1;
(statearr_23353_23467[(2)] = null);

(statearr_23353_23467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23352 === (2))){
var state_23351__$1 = state_23351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23351__$1,(4),from);
} else {
if((state_val_23352 === (3))){
var inst_23349 = (state_23351[(2)]);
var state_23351__$1 = state_23351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23351__$1,inst_23349);
} else {
if((state_val_23352 === (4))){
var inst_23332 = (state_23351[(7)]);
var inst_23332__$1 = (state_23351[(2)]);
var inst_23333 = (inst_23332__$1 == null);
var state_23351__$1 = (function (){var statearr_23354 = state_23351;
(statearr_23354[(7)] = inst_23332__$1);

return statearr_23354;
})();
if(cljs.core.truth_(inst_23333)){
var statearr_23355_23468 = state_23351__$1;
(statearr_23355_23468[(1)] = (5));

} else {
var statearr_23356_23469 = state_23351__$1;
(statearr_23356_23469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23352 === (5))){
var inst_23335 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23351__$1 = state_23351;
var statearr_23357_23470 = state_23351__$1;
(statearr_23357_23470[(2)] = inst_23335);

(statearr_23357_23470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23352 === (6))){
var inst_23337 = (state_23351[(8)]);
var inst_23332 = (state_23351[(7)]);
var inst_23337__$1 = cljs.core.async.chan.call(null,(1));
var inst_23338 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23339 = [inst_23332,inst_23337__$1];
var inst_23340 = (new cljs.core.PersistentVector(null,2,(5),inst_23338,inst_23339,null));
var state_23351__$1 = (function (){var statearr_23358 = state_23351;
(statearr_23358[(8)] = inst_23337__$1);

return statearr_23358;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23351__$1,(8),jobs,inst_23340);
} else {
if((state_val_23352 === (7))){
var inst_23347 = (state_23351[(2)]);
var state_23351__$1 = state_23351;
var statearr_23359_23471 = state_23351__$1;
(statearr_23359_23471[(2)] = inst_23347);

(statearr_23359_23471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23352 === (8))){
var inst_23337 = (state_23351[(8)]);
var inst_23342 = (state_23351[(2)]);
var state_23351__$1 = (function (){var statearr_23360 = state_23351;
(statearr_23360[(9)] = inst_23342);

return statearr_23360;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23351__$1,(9),results,inst_23337);
} else {
if((state_val_23352 === (9))){
var inst_23344 = (state_23351[(2)]);
var state_23351__$1 = (function (){var statearr_23361 = state_23351;
(statearr_23361[(10)] = inst_23344);

return statearr_23361;
})();
var statearr_23362_23472 = state_23351__$1;
(statearr_23362_23472[(2)] = null);

(statearr_23362_23472[(1)] = (2));


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
});})(c__15666__auto___23466,jobs,results,process,async))
;
return ((function (switch__15601__auto__,c__15666__auto___23466,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____0 = (function (){
var statearr_23366 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__);

(statearr_23366[(1)] = (1));

return statearr_23366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____1 = (function (state_23351){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_23351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e23367){if((e23367 instanceof Object)){
var ex__15605__auto__ = e23367;
var statearr_23368_23473 = state_23351;
(statearr_23368_23473[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23474 = state_23351;
state_23351 = G__23474;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__ = function(state_23351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____1.call(this,state_23351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto___23466,jobs,results,process,async))
})();
var state__15668__auto__ = (function (){var statearr_23369 = f__15667__auto__.call(null);
(statearr_23369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto___23466);

return statearr_23369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto___23466,jobs,results,process,async))
);


var c__15666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto__,jobs,results,process,async){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto__,jobs,results,process,async){
return (function (state_23407){
var state_val_23408 = (state_23407[(1)]);
if((state_val_23408 === (7))){
var inst_23403 = (state_23407[(2)]);
var state_23407__$1 = state_23407;
var statearr_23409_23475 = state_23407__$1;
(statearr_23409_23475[(2)] = inst_23403);

(statearr_23409_23475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (20))){
var state_23407__$1 = state_23407;
var statearr_23410_23476 = state_23407__$1;
(statearr_23410_23476[(2)] = null);

(statearr_23410_23476[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (1))){
var state_23407__$1 = state_23407;
var statearr_23411_23477 = state_23407__$1;
(statearr_23411_23477[(2)] = null);

(statearr_23411_23477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (4))){
var inst_23372 = (state_23407[(7)]);
var inst_23372__$1 = (state_23407[(2)]);
var inst_23373 = (inst_23372__$1 == null);
var state_23407__$1 = (function (){var statearr_23412 = state_23407;
(statearr_23412[(7)] = inst_23372__$1);

return statearr_23412;
})();
if(cljs.core.truth_(inst_23373)){
var statearr_23413_23478 = state_23407__$1;
(statearr_23413_23478[(1)] = (5));

} else {
var statearr_23414_23479 = state_23407__$1;
(statearr_23414_23479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (15))){
var inst_23385 = (state_23407[(8)]);
var state_23407__$1 = state_23407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23407__$1,(18),to,inst_23385);
} else {
if((state_val_23408 === (21))){
var inst_23398 = (state_23407[(2)]);
var state_23407__$1 = state_23407;
var statearr_23415_23480 = state_23407__$1;
(statearr_23415_23480[(2)] = inst_23398);

(statearr_23415_23480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (13))){
var inst_23400 = (state_23407[(2)]);
var state_23407__$1 = (function (){var statearr_23416 = state_23407;
(statearr_23416[(9)] = inst_23400);

return statearr_23416;
})();
var statearr_23417_23481 = state_23407__$1;
(statearr_23417_23481[(2)] = null);

(statearr_23417_23481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (6))){
var inst_23372 = (state_23407[(7)]);
var state_23407__$1 = state_23407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23407__$1,(11),inst_23372);
} else {
if((state_val_23408 === (17))){
var inst_23393 = (state_23407[(2)]);
var state_23407__$1 = state_23407;
if(cljs.core.truth_(inst_23393)){
var statearr_23418_23482 = state_23407__$1;
(statearr_23418_23482[(1)] = (19));

} else {
var statearr_23419_23483 = state_23407__$1;
(statearr_23419_23483[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (3))){
var inst_23405 = (state_23407[(2)]);
var state_23407__$1 = state_23407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23407__$1,inst_23405);
} else {
if((state_val_23408 === (12))){
var inst_23382 = (state_23407[(10)]);
var state_23407__$1 = state_23407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23407__$1,(14),inst_23382);
} else {
if((state_val_23408 === (2))){
var state_23407__$1 = state_23407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23407__$1,(4),results);
} else {
if((state_val_23408 === (19))){
var state_23407__$1 = state_23407;
var statearr_23420_23484 = state_23407__$1;
(statearr_23420_23484[(2)] = null);

(statearr_23420_23484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (11))){
var inst_23382 = (state_23407[(2)]);
var state_23407__$1 = (function (){var statearr_23421 = state_23407;
(statearr_23421[(10)] = inst_23382);

return statearr_23421;
})();
var statearr_23422_23485 = state_23407__$1;
(statearr_23422_23485[(2)] = null);

(statearr_23422_23485[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (9))){
var state_23407__$1 = state_23407;
var statearr_23423_23486 = state_23407__$1;
(statearr_23423_23486[(2)] = null);

(statearr_23423_23486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (5))){
var state_23407__$1 = state_23407;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23424_23487 = state_23407__$1;
(statearr_23424_23487[(1)] = (8));

} else {
var statearr_23425_23488 = state_23407__$1;
(statearr_23425_23488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (14))){
var inst_23387 = (state_23407[(11)]);
var inst_23385 = (state_23407[(8)]);
var inst_23385__$1 = (state_23407[(2)]);
var inst_23386 = (inst_23385__$1 == null);
var inst_23387__$1 = cljs.core.not.call(null,inst_23386);
var state_23407__$1 = (function (){var statearr_23426 = state_23407;
(statearr_23426[(11)] = inst_23387__$1);

(statearr_23426[(8)] = inst_23385__$1);

return statearr_23426;
})();
if(inst_23387__$1){
var statearr_23427_23489 = state_23407__$1;
(statearr_23427_23489[(1)] = (15));

} else {
var statearr_23428_23490 = state_23407__$1;
(statearr_23428_23490[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (16))){
var inst_23387 = (state_23407[(11)]);
var state_23407__$1 = state_23407;
var statearr_23429_23491 = state_23407__$1;
(statearr_23429_23491[(2)] = inst_23387);

(statearr_23429_23491[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (10))){
var inst_23379 = (state_23407[(2)]);
var state_23407__$1 = state_23407;
var statearr_23430_23492 = state_23407__$1;
(statearr_23430_23492[(2)] = inst_23379);

(statearr_23430_23492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (18))){
var inst_23390 = (state_23407[(2)]);
var state_23407__$1 = state_23407;
var statearr_23431_23493 = state_23407__$1;
(statearr_23431_23493[(2)] = inst_23390);

(statearr_23431_23493[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (8))){
var inst_23376 = cljs.core.async.close_BANG_.call(null,to);
var state_23407__$1 = state_23407;
var statearr_23432_23494 = state_23407__$1;
(statearr_23432_23494[(2)] = inst_23376);

(statearr_23432_23494[(1)] = (10));


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
});})(c__15666__auto__,jobs,results,process,async))
;
return ((function (switch__15601__auto__,c__15666__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____0 = (function (){
var statearr_23436 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__);

(statearr_23436[(1)] = (1));

return statearr_23436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____1 = (function (state_23407){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_23407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e23437){if((e23437 instanceof Object)){
var ex__15605__auto__ = e23437;
var statearr_23438_23495 = state_23407;
(statearr_23438_23495[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23496 = state_23407;
state_23407 = G__23496;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__ = function(state_23407){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____1.call(this,state_23407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15602__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto__,jobs,results,process,async))
})();
var state__15668__auto__ = (function (){var statearr_23439 = f__15667__auto__.call(null);
(statearr_23439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto__);

return statearr_23439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto__,jobs,results,process,async))
);

return c__15666__auto__;
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
var args23497 = [];
var len__5619__auto___23500 = arguments.length;
var i__5620__auto___23501 = (0);
while(true){
if((i__5620__auto___23501 < len__5619__auto___23500)){
args23497.push((arguments[i__5620__auto___23501]));

var G__23502 = (i__5620__auto___23501 + (1));
i__5620__auto___23501 = G__23502;
continue;
} else {
}
break;
}

var G__23499 = args23497.length;
switch (G__23499) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23497.length)].join('')));

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
var args23504 = [];
var len__5619__auto___23507 = arguments.length;
var i__5620__auto___23508 = (0);
while(true){
if((i__5620__auto___23508 < len__5619__auto___23507)){
args23504.push((arguments[i__5620__auto___23508]));

var G__23509 = (i__5620__auto___23508 + (1));
i__5620__auto___23508 = G__23509;
continue;
} else {
}
break;
}

var G__23506 = args23504.length;
switch (G__23506) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23504.length)].join('')));

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
var args23511 = [];
var len__5619__auto___23564 = arguments.length;
var i__5620__auto___23565 = (0);
while(true){
if((i__5620__auto___23565 < len__5619__auto___23564)){
args23511.push((arguments[i__5620__auto___23565]));

var G__23566 = (i__5620__auto___23565 + (1));
i__5620__auto___23565 = G__23566;
continue;
} else {
}
break;
}

var G__23513 = args23511.length;
switch (G__23513) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23511.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15666__auto___23568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto___23568,tc,fc){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto___23568,tc,fc){
return (function (state_23539){
var state_val_23540 = (state_23539[(1)]);
if((state_val_23540 === (7))){
var inst_23535 = (state_23539[(2)]);
var state_23539__$1 = state_23539;
var statearr_23541_23569 = state_23539__$1;
(statearr_23541_23569[(2)] = inst_23535);

(statearr_23541_23569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (1))){
var state_23539__$1 = state_23539;
var statearr_23542_23570 = state_23539__$1;
(statearr_23542_23570[(2)] = null);

(statearr_23542_23570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (4))){
var inst_23516 = (state_23539[(7)]);
var inst_23516__$1 = (state_23539[(2)]);
var inst_23517 = (inst_23516__$1 == null);
var state_23539__$1 = (function (){var statearr_23543 = state_23539;
(statearr_23543[(7)] = inst_23516__$1);

return statearr_23543;
})();
if(cljs.core.truth_(inst_23517)){
var statearr_23544_23571 = state_23539__$1;
(statearr_23544_23571[(1)] = (5));

} else {
var statearr_23545_23572 = state_23539__$1;
(statearr_23545_23572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (13))){
var state_23539__$1 = state_23539;
var statearr_23546_23573 = state_23539__$1;
(statearr_23546_23573[(2)] = null);

(statearr_23546_23573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (6))){
var inst_23516 = (state_23539[(7)]);
var inst_23522 = p.call(null,inst_23516);
var state_23539__$1 = state_23539;
if(cljs.core.truth_(inst_23522)){
var statearr_23547_23574 = state_23539__$1;
(statearr_23547_23574[(1)] = (9));

} else {
var statearr_23548_23575 = state_23539__$1;
(statearr_23548_23575[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (3))){
var inst_23537 = (state_23539[(2)]);
var state_23539__$1 = state_23539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23539__$1,inst_23537);
} else {
if((state_val_23540 === (12))){
var state_23539__$1 = state_23539;
var statearr_23549_23576 = state_23539__$1;
(statearr_23549_23576[(2)] = null);

(statearr_23549_23576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (2))){
var state_23539__$1 = state_23539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23539__$1,(4),ch);
} else {
if((state_val_23540 === (11))){
var inst_23516 = (state_23539[(7)]);
var inst_23526 = (state_23539[(2)]);
var state_23539__$1 = state_23539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23539__$1,(8),inst_23526,inst_23516);
} else {
if((state_val_23540 === (9))){
var state_23539__$1 = state_23539;
var statearr_23550_23577 = state_23539__$1;
(statearr_23550_23577[(2)] = tc);

(statearr_23550_23577[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (5))){
var inst_23519 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23520 = cljs.core.async.close_BANG_.call(null,fc);
var state_23539__$1 = (function (){var statearr_23551 = state_23539;
(statearr_23551[(8)] = inst_23519);

return statearr_23551;
})();
var statearr_23552_23578 = state_23539__$1;
(statearr_23552_23578[(2)] = inst_23520);

(statearr_23552_23578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (14))){
var inst_23533 = (state_23539[(2)]);
var state_23539__$1 = state_23539;
var statearr_23553_23579 = state_23539__$1;
(statearr_23553_23579[(2)] = inst_23533);

(statearr_23553_23579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (10))){
var state_23539__$1 = state_23539;
var statearr_23554_23580 = state_23539__$1;
(statearr_23554_23580[(2)] = fc);

(statearr_23554_23580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23540 === (8))){
var inst_23528 = (state_23539[(2)]);
var state_23539__$1 = state_23539;
if(cljs.core.truth_(inst_23528)){
var statearr_23555_23581 = state_23539__$1;
(statearr_23555_23581[(1)] = (12));

} else {
var statearr_23556_23582 = state_23539__$1;
(statearr_23556_23582[(1)] = (13));

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
});})(c__15666__auto___23568,tc,fc))
;
return ((function (switch__15601__auto__,c__15666__auto___23568,tc,fc){
return (function() {
var cljs$core$async$state_machine__15602__auto__ = null;
var cljs$core$async$state_machine__15602__auto____0 = (function (){
var statearr_23560 = [null,null,null,null,null,null,null,null,null];
(statearr_23560[(0)] = cljs$core$async$state_machine__15602__auto__);

(statearr_23560[(1)] = (1));

return statearr_23560;
});
var cljs$core$async$state_machine__15602__auto____1 = (function (state_23539){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_23539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e23561){if((e23561 instanceof Object)){
var ex__15605__auto__ = e23561;
var statearr_23562_23583 = state_23539;
(statearr_23562_23583[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23584 = state_23539;
state_23539 = G__23584;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$state_machine__15602__auto__ = function(state_23539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15602__auto____1.call(this,state_23539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15602__auto____0;
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15602__auto____1;
return cljs$core$async$state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto___23568,tc,fc))
})();
var state__15668__auto__ = (function (){var statearr_23563 = f__15667__auto__.call(null);
(statearr_23563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto___23568);

return statearr_23563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto___23568,tc,fc))
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
var c__15666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto__){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto__){
return (function (state_23631){
var state_val_23632 = (state_23631[(1)]);
if((state_val_23632 === (1))){
var inst_23617 = init;
var state_23631__$1 = (function (){var statearr_23633 = state_23631;
(statearr_23633[(7)] = inst_23617);

return statearr_23633;
})();
var statearr_23634_23649 = state_23631__$1;
(statearr_23634_23649[(2)] = null);

(statearr_23634_23649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23632 === (2))){
var state_23631__$1 = state_23631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23631__$1,(4),ch);
} else {
if((state_val_23632 === (3))){
var inst_23629 = (state_23631[(2)]);
var state_23631__$1 = state_23631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23631__$1,inst_23629);
} else {
if((state_val_23632 === (4))){
var inst_23620 = (state_23631[(8)]);
var inst_23620__$1 = (state_23631[(2)]);
var inst_23621 = (inst_23620__$1 == null);
var state_23631__$1 = (function (){var statearr_23635 = state_23631;
(statearr_23635[(8)] = inst_23620__$1);

return statearr_23635;
})();
if(cljs.core.truth_(inst_23621)){
var statearr_23636_23650 = state_23631__$1;
(statearr_23636_23650[(1)] = (5));

} else {
var statearr_23637_23651 = state_23631__$1;
(statearr_23637_23651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23632 === (5))){
var inst_23617 = (state_23631[(7)]);
var state_23631__$1 = state_23631;
var statearr_23638_23652 = state_23631__$1;
(statearr_23638_23652[(2)] = inst_23617);

(statearr_23638_23652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23632 === (6))){
var inst_23617 = (state_23631[(7)]);
var inst_23620 = (state_23631[(8)]);
var inst_23624 = f.call(null,inst_23617,inst_23620);
var inst_23617__$1 = inst_23624;
var state_23631__$1 = (function (){var statearr_23639 = state_23631;
(statearr_23639[(7)] = inst_23617__$1);

return statearr_23639;
})();
var statearr_23640_23653 = state_23631__$1;
(statearr_23640_23653[(2)] = null);

(statearr_23640_23653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23632 === (7))){
var inst_23627 = (state_23631[(2)]);
var state_23631__$1 = state_23631;
var statearr_23641_23654 = state_23631__$1;
(statearr_23641_23654[(2)] = inst_23627);

(statearr_23641_23654[(1)] = (3));


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
});})(c__15666__auto__))
;
return ((function (switch__15601__auto__,c__15666__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15602__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15602__auto____0 = (function (){
var statearr_23645 = [null,null,null,null,null,null,null,null,null];
(statearr_23645[(0)] = cljs$core$async$reduce_$_state_machine__15602__auto__);

(statearr_23645[(1)] = (1));

return statearr_23645;
});
var cljs$core$async$reduce_$_state_machine__15602__auto____1 = (function (state_23631){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_23631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e23646){if((e23646 instanceof Object)){
var ex__15605__auto__ = e23646;
var statearr_23647_23655 = state_23631;
(statearr_23647_23655[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23656 = state_23631;
state_23631 = G__23656;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15602__auto__ = function(state_23631){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15602__auto____1.call(this,state_23631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15602__auto____0;
cljs$core$async$reduce_$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15602__auto____1;
return cljs$core$async$reduce_$_state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto__))
})();
var state__15668__auto__ = (function (){var statearr_23648 = f__15667__auto__.call(null);
(statearr_23648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto__);

return statearr_23648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto__))
);

return c__15666__auto__;
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
var args23657 = [];
var len__5619__auto___23709 = arguments.length;
var i__5620__auto___23710 = (0);
while(true){
if((i__5620__auto___23710 < len__5619__auto___23709)){
args23657.push((arguments[i__5620__auto___23710]));

var G__23711 = (i__5620__auto___23710 + (1));
i__5620__auto___23710 = G__23711;
continue;
} else {
}
break;
}

var G__23659 = args23657.length;
switch (G__23659) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23657.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto__){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto__){
return (function (state_23684){
var state_val_23685 = (state_23684[(1)]);
if((state_val_23685 === (7))){
var inst_23666 = (state_23684[(2)]);
var state_23684__$1 = state_23684;
var statearr_23686_23713 = state_23684__$1;
(statearr_23686_23713[(2)] = inst_23666);

(statearr_23686_23713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (1))){
var inst_23660 = cljs.core.seq.call(null,coll);
var inst_23661 = inst_23660;
var state_23684__$1 = (function (){var statearr_23687 = state_23684;
(statearr_23687[(7)] = inst_23661);

return statearr_23687;
})();
var statearr_23688_23714 = state_23684__$1;
(statearr_23688_23714[(2)] = null);

(statearr_23688_23714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (4))){
var inst_23661 = (state_23684[(7)]);
var inst_23664 = cljs.core.first.call(null,inst_23661);
var state_23684__$1 = state_23684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23684__$1,(7),ch,inst_23664);
} else {
if((state_val_23685 === (13))){
var inst_23678 = (state_23684[(2)]);
var state_23684__$1 = state_23684;
var statearr_23689_23715 = state_23684__$1;
(statearr_23689_23715[(2)] = inst_23678);

(statearr_23689_23715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (6))){
var inst_23669 = (state_23684[(2)]);
var state_23684__$1 = state_23684;
if(cljs.core.truth_(inst_23669)){
var statearr_23690_23716 = state_23684__$1;
(statearr_23690_23716[(1)] = (8));

} else {
var statearr_23691_23717 = state_23684__$1;
(statearr_23691_23717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (3))){
var inst_23682 = (state_23684[(2)]);
var state_23684__$1 = state_23684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23684__$1,inst_23682);
} else {
if((state_val_23685 === (12))){
var state_23684__$1 = state_23684;
var statearr_23692_23718 = state_23684__$1;
(statearr_23692_23718[(2)] = null);

(statearr_23692_23718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (2))){
var inst_23661 = (state_23684[(7)]);
var state_23684__$1 = state_23684;
if(cljs.core.truth_(inst_23661)){
var statearr_23693_23719 = state_23684__$1;
(statearr_23693_23719[(1)] = (4));

} else {
var statearr_23694_23720 = state_23684__$1;
(statearr_23694_23720[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (11))){
var inst_23675 = cljs.core.async.close_BANG_.call(null,ch);
var state_23684__$1 = state_23684;
var statearr_23695_23721 = state_23684__$1;
(statearr_23695_23721[(2)] = inst_23675);

(statearr_23695_23721[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (9))){
var state_23684__$1 = state_23684;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23696_23722 = state_23684__$1;
(statearr_23696_23722[(1)] = (11));

} else {
var statearr_23697_23723 = state_23684__$1;
(statearr_23697_23723[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (5))){
var inst_23661 = (state_23684[(7)]);
var state_23684__$1 = state_23684;
var statearr_23698_23724 = state_23684__$1;
(statearr_23698_23724[(2)] = inst_23661);

(statearr_23698_23724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (10))){
var inst_23680 = (state_23684[(2)]);
var state_23684__$1 = state_23684;
var statearr_23699_23725 = state_23684__$1;
(statearr_23699_23725[(2)] = inst_23680);

(statearr_23699_23725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23685 === (8))){
var inst_23661 = (state_23684[(7)]);
var inst_23671 = cljs.core.next.call(null,inst_23661);
var inst_23661__$1 = inst_23671;
var state_23684__$1 = (function (){var statearr_23700 = state_23684;
(statearr_23700[(7)] = inst_23661__$1);

return statearr_23700;
})();
var statearr_23701_23726 = state_23684__$1;
(statearr_23701_23726[(2)] = null);

(statearr_23701_23726[(1)] = (2));


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
});})(c__15666__auto__))
;
return ((function (switch__15601__auto__,c__15666__auto__){
return (function() {
var cljs$core$async$state_machine__15602__auto__ = null;
var cljs$core$async$state_machine__15602__auto____0 = (function (){
var statearr_23705 = [null,null,null,null,null,null,null,null];
(statearr_23705[(0)] = cljs$core$async$state_machine__15602__auto__);

(statearr_23705[(1)] = (1));

return statearr_23705;
});
var cljs$core$async$state_machine__15602__auto____1 = (function (state_23684){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_23684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e23706){if((e23706 instanceof Object)){
var ex__15605__auto__ = e23706;
var statearr_23707_23727 = state_23684;
(statearr_23707_23727[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23728 = state_23684;
state_23684 = G__23728;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$state_machine__15602__auto__ = function(state_23684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15602__auto____1.call(this,state_23684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15602__auto____0;
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15602__auto____1;
return cljs$core$async$state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto__))
})();
var state__15668__auto__ = (function (){var statearr_23708 = f__15667__auto__.call(null);
(statearr_23708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto__);

return statearr_23708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto__))
);

return c__15666__auto__;
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
var x__5216__auto__ = (((_ == null))?null:_);
var m__5217__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,_);
} else {
var m__5217__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,_);
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
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5217__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,m,ch);
} else {
var m__5217__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,m,ch);
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
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,m);
} else {
var m__5217__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async23950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23950 = (function (mult,ch,cs,meta23951){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23951 = meta23951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23952,meta23951__$1){
var self__ = this;
var _23952__$1 = this;
return (new cljs.core.async.t_cljs$core$async23950(self__.mult,self__.ch,self__.cs,meta23951__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23952){
var self__ = this;
var _23952__$1 = this;
return self__.meta23951;
});})(cs))
;

cljs.core.async.t_cljs$core$async23950.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23950.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23950.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23950.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23950.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23950.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23951","meta23951",-447954711,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23950.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23950";

cljs.core.async.t_cljs$core$async23950.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async23950");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23950 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23950(mult__$1,ch__$1,cs__$1,meta23951){
return (new cljs.core.async.t_cljs$core$async23950(mult__$1,ch__$1,cs__$1,meta23951));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23950(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15666__auto___24171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto___24171,cs,m,dchan,dctr,done){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto___24171,cs,m,dchan,dctr,done){
return (function (state_24083){
var state_val_24084 = (state_24083[(1)]);
if((state_val_24084 === (7))){
var inst_24079 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
var statearr_24085_24172 = state_24083__$1;
(statearr_24085_24172[(2)] = inst_24079);

(statearr_24085_24172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (20))){
var inst_23984 = (state_24083[(7)]);
var inst_23994 = cljs.core.first.call(null,inst_23984);
var inst_23995 = cljs.core.nth.call(null,inst_23994,(0),null);
var inst_23996 = cljs.core.nth.call(null,inst_23994,(1),null);
var state_24083__$1 = (function (){var statearr_24086 = state_24083;
(statearr_24086[(8)] = inst_23995);

return statearr_24086;
})();
if(cljs.core.truth_(inst_23996)){
var statearr_24087_24173 = state_24083__$1;
(statearr_24087_24173[(1)] = (22));

} else {
var statearr_24088_24174 = state_24083__$1;
(statearr_24088_24174[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (27))){
var inst_24026 = (state_24083[(9)]);
var inst_24031 = (state_24083[(10)]);
var inst_23955 = (state_24083[(11)]);
var inst_24024 = (state_24083[(12)]);
var inst_24031__$1 = cljs.core._nth.call(null,inst_24024,inst_24026);
var inst_24032 = cljs.core.async.put_BANG_.call(null,inst_24031__$1,inst_23955,done);
var state_24083__$1 = (function (){var statearr_24089 = state_24083;
(statearr_24089[(10)] = inst_24031__$1);

return statearr_24089;
})();
if(cljs.core.truth_(inst_24032)){
var statearr_24090_24175 = state_24083__$1;
(statearr_24090_24175[(1)] = (30));

} else {
var statearr_24091_24176 = state_24083__$1;
(statearr_24091_24176[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (1))){
var state_24083__$1 = state_24083;
var statearr_24092_24177 = state_24083__$1;
(statearr_24092_24177[(2)] = null);

(statearr_24092_24177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (24))){
var inst_23984 = (state_24083[(7)]);
var inst_24001 = (state_24083[(2)]);
var inst_24002 = cljs.core.next.call(null,inst_23984);
var inst_23964 = inst_24002;
var inst_23965 = null;
var inst_23966 = (0);
var inst_23967 = (0);
var state_24083__$1 = (function (){var statearr_24093 = state_24083;
(statearr_24093[(13)] = inst_24001);

(statearr_24093[(14)] = inst_23965);

(statearr_24093[(15)] = inst_23966);

(statearr_24093[(16)] = inst_23967);

(statearr_24093[(17)] = inst_23964);

return statearr_24093;
})();
var statearr_24094_24178 = state_24083__$1;
(statearr_24094_24178[(2)] = null);

(statearr_24094_24178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (39))){
var state_24083__$1 = state_24083;
var statearr_24098_24179 = state_24083__$1;
(statearr_24098_24179[(2)] = null);

(statearr_24098_24179[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (4))){
var inst_23955 = (state_24083[(11)]);
var inst_23955__$1 = (state_24083[(2)]);
var inst_23956 = (inst_23955__$1 == null);
var state_24083__$1 = (function (){var statearr_24099 = state_24083;
(statearr_24099[(11)] = inst_23955__$1);

return statearr_24099;
})();
if(cljs.core.truth_(inst_23956)){
var statearr_24100_24180 = state_24083__$1;
(statearr_24100_24180[(1)] = (5));

} else {
var statearr_24101_24181 = state_24083__$1;
(statearr_24101_24181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (15))){
var inst_23965 = (state_24083[(14)]);
var inst_23966 = (state_24083[(15)]);
var inst_23967 = (state_24083[(16)]);
var inst_23964 = (state_24083[(17)]);
var inst_23980 = (state_24083[(2)]);
var inst_23981 = (inst_23967 + (1));
var tmp24095 = inst_23965;
var tmp24096 = inst_23966;
var tmp24097 = inst_23964;
var inst_23964__$1 = tmp24097;
var inst_23965__$1 = tmp24095;
var inst_23966__$1 = tmp24096;
var inst_23967__$1 = inst_23981;
var state_24083__$1 = (function (){var statearr_24102 = state_24083;
(statearr_24102[(14)] = inst_23965__$1);

(statearr_24102[(18)] = inst_23980);

(statearr_24102[(15)] = inst_23966__$1);

(statearr_24102[(16)] = inst_23967__$1);

(statearr_24102[(17)] = inst_23964__$1);

return statearr_24102;
})();
var statearr_24103_24182 = state_24083__$1;
(statearr_24103_24182[(2)] = null);

(statearr_24103_24182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (21))){
var inst_24005 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
var statearr_24107_24183 = state_24083__$1;
(statearr_24107_24183[(2)] = inst_24005);

(statearr_24107_24183[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (31))){
var inst_24031 = (state_24083[(10)]);
var inst_24035 = done.call(null,null);
var inst_24036 = cljs.core.async.untap_STAR_.call(null,m,inst_24031);
var state_24083__$1 = (function (){var statearr_24108 = state_24083;
(statearr_24108[(19)] = inst_24035);

return statearr_24108;
})();
var statearr_24109_24184 = state_24083__$1;
(statearr_24109_24184[(2)] = inst_24036);

(statearr_24109_24184[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (32))){
var inst_24023 = (state_24083[(20)]);
var inst_24026 = (state_24083[(9)]);
var inst_24025 = (state_24083[(21)]);
var inst_24024 = (state_24083[(12)]);
var inst_24038 = (state_24083[(2)]);
var inst_24039 = (inst_24026 + (1));
var tmp24104 = inst_24023;
var tmp24105 = inst_24025;
var tmp24106 = inst_24024;
var inst_24023__$1 = tmp24104;
var inst_24024__$1 = tmp24106;
var inst_24025__$1 = tmp24105;
var inst_24026__$1 = inst_24039;
var state_24083__$1 = (function (){var statearr_24110 = state_24083;
(statearr_24110[(20)] = inst_24023__$1);

(statearr_24110[(9)] = inst_24026__$1);

(statearr_24110[(21)] = inst_24025__$1);

(statearr_24110[(12)] = inst_24024__$1);

(statearr_24110[(22)] = inst_24038);

return statearr_24110;
})();
var statearr_24111_24185 = state_24083__$1;
(statearr_24111_24185[(2)] = null);

(statearr_24111_24185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (40))){
var inst_24051 = (state_24083[(23)]);
var inst_24055 = done.call(null,null);
var inst_24056 = cljs.core.async.untap_STAR_.call(null,m,inst_24051);
var state_24083__$1 = (function (){var statearr_24112 = state_24083;
(statearr_24112[(24)] = inst_24055);

return statearr_24112;
})();
var statearr_24113_24186 = state_24083__$1;
(statearr_24113_24186[(2)] = inst_24056);

(statearr_24113_24186[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (33))){
var inst_24042 = (state_24083[(25)]);
var inst_24044 = cljs.core.chunked_seq_QMARK_.call(null,inst_24042);
var state_24083__$1 = state_24083;
if(inst_24044){
var statearr_24114_24187 = state_24083__$1;
(statearr_24114_24187[(1)] = (36));

} else {
var statearr_24115_24188 = state_24083__$1;
(statearr_24115_24188[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (13))){
var inst_23974 = (state_24083[(26)]);
var inst_23977 = cljs.core.async.close_BANG_.call(null,inst_23974);
var state_24083__$1 = state_24083;
var statearr_24116_24189 = state_24083__$1;
(statearr_24116_24189[(2)] = inst_23977);

(statearr_24116_24189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (22))){
var inst_23995 = (state_24083[(8)]);
var inst_23998 = cljs.core.async.close_BANG_.call(null,inst_23995);
var state_24083__$1 = state_24083;
var statearr_24117_24190 = state_24083__$1;
(statearr_24117_24190[(2)] = inst_23998);

(statearr_24117_24190[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (36))){
var inst_24042 = (state_24083[(25)]);
var inst_24046 = cljs.core.chunk_first.call(null,inst_24042);
var inst_24047 = cljs.core.chunk_rest.call(null,inst_24042);
var inst_24048 = cljs.core.count.call(null,inst_24046);
var inst_24023 = inst_24047;
var inst_24024 = inst_24046;
var inst_24025 = inst_24048;
var inst_24026 = (0);
var state_24083__$1 = (function (){var statearr_24118 = state_24083;
(statearr_24118[(20)] = inst_24023);

(statearr_24118[(9)] = inst_24026);

(statearr_24118[(21)] = inst_24025);

(statearr_24118[(12)] = inst_24024);

return statearr_24118;
})();
var statearr_24119_24191 = state_24083__$1;
(statearr_24119_24191[(2)] = null);

(statearr_24119_24191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (41))){
var inst_24042 = (state_24083[(25)]);
var inst_24058 = (state_24083[(2)]);
var inst_24059 = cljs.core.next.call(null,inst_24042);
var inst_24023 = inst_24059;
var inst_24024 = null;
var inst_24025 = (0);
var inst_24026 = (0);
var state_24083__$1 = (function (){var statearr_24120 = state_24083;
(statearr_24120[(20)] = inst_24023);

(statearr_24120[(27)] = inst_24058);

(statearr_24120[(9)] = inst_24026);

(statearr_24120[(21)] = inst_24025);

(statearr_24120[(12)] = inst_24024);

return statearr_24120;
})();
var statearr_24121_24192 = state_24083__$1;
(statearr_24121_24192[(2)] = null);

(statearr_24121_24192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (43))){
var state_24083__$1 = state_24083;
var statearr_24122_24193 = state_24083__$1;
(statearr_24122_24193[(2)] = null);

(statearr_24122_24193[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (29))){
var inst_24067 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
var statearr_24123_24194 = state_24083__$1;
(statearr_24123_24194[(2)] = inst_24067);

(statearr_24123_24194[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (44))){
var inst_24076 = (state_24083[(2)]);
var state_24083__$1 = (function (){var statearr_24124 = state_24083;
(statearr_24124[(28)] = inst_24076);

return statearr_24124;
})();
var statearr_24125_24195 = state_24083__$1;
(statearr_24125_24195[(2)] = null);

(statearr_24125_24195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (6))){
var inst_24015 = (state_24083[(29)]);
var inst_24014 = cljs.core.deref.call(null,cs);
var inst_24015__$1 = cljs.core.keys.call(null,inst_24014);
var inst_24016 = cljs.core.count.call(null,inst_24015__$1);
var inst_24017 = cljs.core.reset_BANG_.call(null,dctr,inst_24016);
var inst_24022 = cljs.core.seq.call(null,inst_24015__$1);
var inst_24023 = inst_24022;
var inst_24024 = null;
var inst_24025 = (0);
var inst_24026 = (0);
var state_24083__$1 = (function (){var statearr_24126 = state_24083;
(statearr_24126[(20)] = inst_24023);

(statearr_24126[(30)] = inst_24017);

(statearr_24126[(9)] = inst_24026);

(statearr_24126[(21)] = inst_24025);

(statearr_24126[(29)] = inst_24015__$1);

(statearr_24126[(12)] = inst_24024);

return statearr_24126;
})();
var statearr_24127_24196 = state_24083__$1;
(statearr_24127_24196[(2)] = null);

(statearr_24127_24196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (28))){
var inst_24023 = (state_24083[(20)]);
var inst_24042 = (state_24083[(25)]);
var inst_24042__$1 = cljs.core.seq.call(null,inst_24023);
var state_24083__$1 = (function (){var statearr_24128 = state_24083;
(statearr_24128[(25)] = inst_24042__$1);

return statearr_24128;
})();
if(inst_24042__$1){
var statearr_24129_24197 = state_24083__$1;
(statearr_24129_24197[(1)] = (33));

} else {
var statearr_24130_24198 = state_24083__$1;
(statearr_24130_24198[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (25))){
var inst_24026 = (state_24083[(9)]);
var inst_24025 = (state_24083[(21)]);
var inst_24028 = (inst_24026 < inst_24025);
var inst_24029 = inst_24028;
var state_24083__$1 = state_24083;
if(cljs.core.truth_(inst_24029)){
var statearr_24131_24199 = state_24083__$1;
(statearr_24131_24199[(1)] = (27));

} else {
var statearr_24132_24200 = state_24083__$1;
(statearr_24132_24200[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (34))){
var state_24083__$1 = state_24083;
var statearr_24133_24201 = state_24083__$1;
(statearr_24133_24201[(2)] = null);

(statearr_24133_24201[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (17))){
var state_24083__$1 = state_24083;
var statearr_24134_24202 = state_24083__$1;
(statearr_24134_24202[(2)] = null);

(statearr_24134_24202[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (3))){
var inst_24081 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24083__$1,inst_24081);
} else {
if((state_val_24084 === (12))){
var inst_24010 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
var statearr_24135_24203 = state_24083__$1;
(statearr_24135_24203[(2)] = inst_24010);

(statearr_24135_24203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (2))){
var state_24083__$1 = state_24083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24083__$1,(4),ch);
} else {
if((state_val_24084 === (23))){
var state_24083__$1 = state_24083;
var statearr_24136_24204 = state_24083__$1;
(statearr_24136_24204[(2)] = null);

(statearr_24136_24204[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (35))){
var inst_24065 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
var statearr_24137_24205 = state_24083__$1;
(statearr_24137_24205[(2)] = inst_24065);

(statearr_24137_24205[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (19))){
var inst_23984 = (state_24083[(7)]);
var inst_23988 = cljs.core.chunk_first.call(null,inst_23984);
var inst_23989 = cljs.core.chunk_rest.call(null,inst_23984);
var inst_23990 = cljs.core.count.call(null,inst_23988);
var inst_23964 = inst_23989;
var inst_23965 = inst_23988;
var inst_23966 = inst_23990;
var inst_23967 = (0);
var state_24083__$1 = (function (){var statearr_24138 = state_24083;
(statearr_24138[(14)] = inst_23965);

(statearr_24138[(15)] = inst_23966);

(statearr_24138[(16)] = inst_23967);

(statearr_24138[(17)] = inst_23964);

return statearr_24138;
})();
var statearr_24139_24206 = state_24083__$1;
(statearr_24139_24206[(2)] = null);

(statearr_24139_24206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (11))){
var inst_23984 = (state_24083[(7)]);
var inst_23964 = (state_24083[(17)]);
var inst_23984__$1 = cljs.core.seq.call(null,inst_23964);
var state_24083__$1 = (function (){var statearr_24140 = state_24083;
(statearr_24140[(7)] = inst_23984__$1);

return statearr_24140;
})();
if(inst_23984__$1){
var statearr_24141_24207 = state_24083__$1;
(statearr_24141_24207[(1)] = (16));

} else {
var statearr_24142_24208 = state_24083__$1;
(statearr_24142_24208[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (9))){
var inst_24012 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
var statearr_24143_24209 = state_24083__$1;
(statearr_24143_24209[(2)] = inst_24012);

(statearr_24143_24209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (5))){
var inst_23962 = cljs.core.deref.call(null,cs);
var inst_23963 = cljs.core.seq.call(null,inst_23962);
var inst_23964 = inst_23963;
var inst_23965 = null;
var inst_23966 = (0);
var inst_23967 = (0);
var state_24083__$1 = (function (){var statearr_24144 = state_24083;
(statearr_24144[(14)] = inst_23965);

(statearr_24144[(15)] = inst_23966);

(statearr_24144[(16)] = inst_23967);

(statearr_24144[(17)] = inst_23964);

return statearr_24144;
})();
var statearr_24145_24210 = state_24083__$1;
(statearr_24145_24210[(2)] = null);

(statearr_24145_24210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (14))){
var state_24083__$1 = state_24083;
var statearr_24146_24211 = state_24083__$1;
(statearr_24146_24211[(2)] = null);

(statearr_24146_24211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (45))){
var inst_24073 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
var statearr_24147_24212 = state_24083__$1;
(statearr_24147_24212[(2)] = inst_24073);

(statearr_24147_24212[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (26))){
var inst_24015 = (state_24083[(29)]);
var inst_24069 = (state_24083[(2)]);
var inst_24070 = cljs.core.seq.call(null,inst_24015);
var state_24083__$1 = (function (){var statearr_24148 = state_24083;
(statearr_24148[(31)] = inst_24069);

return statearr_24148;
})();
if(inst_24070){
var statearr_24149_24213 = state_24083__$1;
(statearr_24149_24213[(1)] = (42));

} else {
var statearr_24150_24214 = state_24083__$1;
(statearr_24150_24214[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (16))){
var inst_23984 = (state_24083[(7)]);
var inst_23986 = cljs.core.chunked_seq_QMARK_.call(null,inst_23984);
var state_24083__$1 = state_24083;
if(inst_23986){
var statearr_24151_24215 = state_24083__$1;
(statearr_24151_24215[(1)] = (19));

} else {
var statearr_24152_24216 = state_24083__$1;
(statearr_24152_24216[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (38))){
var inst_24062 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
var statearr_24153_24217 = state_24083__$1;
(statearr_24153_24217[(2)] = inst_24062);

(statearr_24153_24217[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (30))){
var state_24083__$1 = state_24083;
var statearr_24154_24218 = state_24083__$1;
(statearr_24154_24218[(2)] = null);

(statearr_24154_24218[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (10))){
var inst_23965 = (state_24083[(14)]);
var inst_23967 = (state_24083[(16)]);
var inst_23973 = cljs.core._nth.call(null,inst_23965,inst_23967);
var inst_23974 = cljs.core.nth.call(null,inst_23973,(0),null);
var inst_23975 = cljs.core.nth.call(null,inst_23973,(1),null);
var state_24083__$1 = (function (){var statearr_24155 = state_24083;
(statearr_24155[(26)] = inst_23974);

return statearr_24155;
})();
if(cljs.core.truth_(inst_23975)){
var statearr_24156_24219 = state_24083__$1;
(statearr_24156_24219[(1)] = (13));

} else {
var statearr_24157_24220 = state_24083__$1;
(statearr_24157_24220[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (18))){
var inst_24008 = (state_24083[(2)]);
var state_24083__$1 = state_24083;
var statearr_24158_24221 = state_24083__$1;
(statearr_24158_24221[(2)] = inst_24008);

(statearr_24158_24221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (42))){
var state_24083__$1 = state_24083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24083__$1,(45),dchan);
} else {
if((state_val_24084 === (37))){
var inst_24051 = (state_24083[(23)]);
var inst_23955 = (state_24083[(11)]);
var inst_24042 = (state_24083[(25)]);
var inst_24051__$1 = cljs.core.first.call(null,inst_24042);
var inst_24052 = cljs.core.async.put_BANG_.call(null,inst_24051__$1,inst_23955,done);
var state_24083__$1 = (function (){var statearr_24159 = state_24083;
(statearr_24159[(23)] = inst_24051__$1);

return statearr_24159;
})();
if(cljs.core.truth_(inst_24052)){
var statearr_24160_24222 = state_24083__$1;
(statearr_24160_24222[(1)] = (39));

} else {
var statearr_24161_24223 = state_24083__$1;
(statearr_24161_24223[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24084 === (8))){
var inst_23966 = (state_24083[(15)]);
var inst_23967 = (state_24083[(16)]);
var inst_23969 = (inst_23967 < inst_23966);
var inst_23970 = inst_23969;
var state_24083__$1 = state_24083;
if(cljs.core.truth_(inst_23970)){
var statearr_24162_24224 = state_24083__$1;
(statearr_24162_24224[(1)] = (10));

} else {
var statearr_24163_24225 = state_24083__$1;
(statearr_24163_24225[(1)] = (11));

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
});})(c__15666__auto___24171,cs,m,dchan,dctr,done))
;
return ((function (switch__15601__auto__,c__15666__auto___24171,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15602__auto__ = null;
var cljs$core$async$mult_$_state_machine__15602__auto____0 = (function (){
var statearr_24167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24167[(0)] = cljs$core$async$mult_$_state_machine__15602__auto__);

(statearr_24167[(1)] = (1));

return statearr_24167;
});
var cljs$core$async$mult_$_state_machine__15602__auto____1 = (function (state_24083){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_24083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e24168){if((e24168 instanceof Object)){
var ex__15605__auto__ = e24168;
var statearr_24169_24226 = state_24083;
(statearr_24169_24226[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24227 = state_24083;
state_24083 = G__24227;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15602__auto__ = function(state_24083){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15602__auto____1.call(this,state_24083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15602__auto____0;
cljs$core$async$mult_$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15602__auto____1;
return cljs$core$async$mult_$_state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto___24171,cs,m,dchan,dctr,done))
})();
var state__15668__auto__ = (function (){var statearr_24170 = f__15667__auto__.call(null);
(statearr_24170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto___24171);

return statearr_24170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto___24171,cs,m,dchan,dctr,done))
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
var args24228 = [];
var len__5619__auto___24231 = arguments.length;
var i__5620__auto___24232 = (0);
while(true){
if((i__5620__auto___24232 < len__5619__auto___24231)){
args24228.push((arguments[i__5620__auto___24232]));

var G__24233 = (i__5620__auto___24232 + (1));
i__5620__auto___24232 = G__24233;
continue;
} else {
}
break;
}

var G__24230 = args24228.length;
switch (G__24230) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24228.length)].join('')));

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
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,m,ch);
} else {
var m__5217__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,m,ch);
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
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,m,ch);
} else {
var m__5217__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,m,ch);
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
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,m);
} else {
var m__5217__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,m);
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
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,m,state_map);
} else {
var m__5217__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,m,state_map);
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
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,m,mode);
} else {
var m__5217__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5626__auto__ = [];
var len__5619__auto___24245 = arguments.length;
var i__5620__auto___24246 = (0);
while(true){
if((i__5620__auto___24246 < len__5619__auto___24245)){
args__5626__auto__.push((arguments[i__5620__auto___24246]));

var G__24247 = (i__5620__auto___24246 + (1));
i__5620__auto___24246 = G__24247;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((3) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5627__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24239){
var map__24240 = p__24239;
var map__24240__$1 = ((((!((map__24240 == null)))?((((map__24240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24240):map__24240);
var opts = map__24240__$1;
var statearr_24242_24248 = state;
(statearr_24242_24248[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__24240,map__24240__$1,opts){
return (function (val){
var statearr_24243_24249 = state;
(statearr_24243_24249[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24240,map__24240__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_24244_24250 = state;
(statearr_24244_24250[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24235){
var G__24236 = cljs.core.first.call(null,seq24235);
var seq24235__$1 = cljs.core.next.call(null,seq24235);
var G__24237 = cljs.core.first.call(null,seq24235__$1);
var seq24235__$2 = cljs.core.next.call(null,seq24235__$1);
var G__24238 = cljs.core.first.call(null,seq24235__$2);
var seq24235__$3 = cljs.core.next.call(null,seq24235__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24236,G__24237,G__24238,seq24235__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24414 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24415){
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
this.meta24415 = meta24415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24416,meta24415__$1){
var self__ = this;
var _24416__$1 = this;
return (new cljs.core.async.t_cljs$core$async24414(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24415__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24416){
var self__ = this;
var _24416__$1 = this;
return self__.meta24415;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24414.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24414.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24415","meta24415",65737761,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24414";

cljs.core.async.t_cljs$core$async24414.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async24414");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24414 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24414(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24415){
return (new cljs.core.async.t_cljs$core$async24414(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24415));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24414(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15666__auto___24577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto___24577,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto___24577,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24514){
var state_val_24515 = (state_24514[(1)]);
if((state_val_24515 === (7))){
var inst_24432 = (state_24514[(2)]);
var state_24514__$1 = state_24514;
var statearr_24516_24578 = state_24514__$1;
(statearr_24516_24578[(2)] = inst_24432);

(statearr_24516_24578[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (20))){
var inst_24444 = (state_24514[(7)]);
var state_24514__$1 = state_24514;
var statearr_24517_24579 = state_24514__$1;
(statearr_24517_24579[(2)] = inst_24444);

(statearr_24517_24579[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (27))){
var state_24514__$1 = state_24514;
var statearr_24518_24580 = state_24514__$1;
(statearr_24518_24580[(2)] = null);

(statearr_24518_24580[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (1))){
var inst_24420 = (state_24514[(8)]);
var inst_24420__$1 = calc_state.call(null);
var inst_24422 = (inst_24420__$1 == null);
var inst_24423 = cljs.core.not.call(null,inst_24422);
var state_24514__$1 = (function (){var statearr_24519 = state_24514;
(statearr_24519[(8)] = inst_24420__$1);

return statearr_24519;
})();
if(inst_24423){
var statearr_24520_24581 = state_24514__$1;
(statearr_24520_24581[(1)] = (2));

} else {
var statearr_24521_24582 = state_24514__$1;
(statearr_24521_24582[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (24))){
var inst_24474 = (state_24514[(9)]);
var inst_24467 = (state_24514[(10)]);
var inst_24488 = (state_24514[(11)]);
var inst_24488__$1 = inst_24467.call(null,inst_24474);
var state_24514__$1 = (function (){var statearr_24522 = state_24514;
(statearr_24522[(11)] = inst_24488__$1);

return statearr_24522;
})();
if(cljs.core.truth_(inst_24488__$1)){
var statearr_24523_24583 = state_24514__$1;
(statearr_24523_24583[(1)] = (29));

} else {
var statearr_24524_24584 = state_24514__$1;
(statearr_24524_24584[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (4))){
var inst_24435 = (state_24514[(2)]);
var state_24514__$1 = state_24514;
if(cljs.core.truth_(inst_24435)){
var statearr_24525_24585 = state_24514__$1;
(statearr_24525_24585[(1)] = (8));

} else {
var statearr_24526_24586 = state_24514__$1;
(statearr_24526_24586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (15))){
var inst_24461 = (state_24514[(2)]);
var state_24514__$1 = state_24514;
if(cljs.core.truth_(inst_24461)){
var statearr_24527_24587 = state_24514__$1;
(statearr_24527_24587[(1)] = (19));

} else {
var statearr_24528_24588 = state_24514__$1;
(statearr_24528_24588[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (21))){
var inst_24466 = (state_24514[(12)]);
var inst_24466__$1 = (state_24514[(2)]);
var inst_24467 = cljs.core.get.call(null,inst_24466__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24468 = cljs.core.get.call(null,inst_24466__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24469 = cljs.core.get.call(null,inst_24466__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24514__$1 = (function (){var statearr_24529 = state_24514;
(statearr_24529[(12)] = inst_24466__$1);

(statearr_24529[(13)] = inst_24468);

(statearr_24529[(10)] = inst_24467);

return statearr_24529;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24514__$1,(22),inst_24469);
} else {
if((state_val_24515 === (31))){
var inst_24496 = (state_24514[(2)]);
var state_24514__$1 = state_24514;
if(cljs.core.truth_(inst_24496)){
var statearr_24530_24589 = state_24514__$1;
(statearr_24530_24589[(1)] = (32));

} else {
var statearr_24531_24590 = state_24514__$1;
(statearr_24531_24590[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (32))){
var inst_24473 = (state_24514[(14)]);
var state_24514__$1 = state_24514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24514__$1,(35),out,inst_24473);
} else {
if((state_val_24515 === (33))){
var inst_24466 = (state_24514[(12)]);
var inst_24444 = inst_24466;
var state_24514__$1 = (function (){var statearr_24532 = state_24514;
(statearr_24532[(7)] = inst_24444);

return statearr_24532;
})();
var statearr_24533_24591 = state_24514__$1;
(statearr_24533_24591[(2)] = null);

(statearr_24533_24591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (13))){
var inst_24444 = (state_24514[(7)]);
var inst_24451 = inst_24444.cljs$lang$protocol_mask$partition0$;
var inst_24452 = (inst_24451 & (64));
var inst_24453 = inst_24444.cljs$core$ISeq$;
var inst_24454 = (inst_24452) || (inst_24453);
var state_24514__$1 = state_24514;
if(cljs.core.truth_(inst_24454)){
var statearr_24534_24592 = state_24514__$1;
(statearr_24534_24592[(1)] = (16));

} else {
var statearr_24535_24593 = state_24514__$1;
(statearr_24535_24593[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (22))){
var inst_24474 = (state_24514[(9)]);
var inst_24473 = (state_24514[(14)]);
var inst_24472 = (state_24514[(2)]);
var inst_24473__$1 = cljs.core.nth.call(null,inst_24472,(0),null);
var inst_24474__$1 = cljs.core.nth.call(null,inst_24472,(1),null);
var inst_24475 = (inst_24473__$1 == null);
var inst_24476 = cljs.core._EQ_.call(null,inst_24474__$1,change);
var inst_24477 = (inst_24475) || (inst_24476);
var state_24514__$1 = (function (){var statearr_24536 = state_24514;
(statearr_24536[(9)] = inst_24474__$1);

(statearr_24536[(14)] = inst_24473__$1);

return statearr_24536;
})();
if(cljs.core.truth_(inst_24477)){
var statearr_24537_24594 = state_24514__$1;
(statearr_24537_24594[(1)] = (23));

} else {
var statearr_24538_24595 = state_24514__$1;
(statearr_24538_24595[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (36))){
var inst_24466 = (state_24514[(12)]);
var inst_24444 = inst_24466;
var state_24514__$1 = (function (){var statearr_24539 = state_24514;
(statearr_24539[(7)] = inst_24444);

return statearr_24539;
})();
var statearr_24540_24596 = state_24514__$1;
(statearr_24540_24596[(2)] = null);

(statearr_24540_24596[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (29))){
var inst_24488 = (state_24514[(11)]);
var state_24514__$1 = state_24514;
var statearr_24541_24597 = state_24514__$1;
(statearr_24541_24597[(2)] = inst_24488);

(statearr_24541_24597[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (6))){
var state_24514__$1 = state_24514;
var statearr_24542_24598 = state_24514__$1;
(statearr_24542_24598[(2)] = false);

(statearr_24542_24598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (28))){
var inst_24484 = (state_24514[(2)]);
var inst_24485 = calc_state.call(null);
var inst_24444 = inst_24485;
var state_24514__$1 = (function (){var statearr_24543 = state_24514;
(statearr_24543[(15)] = inst_24484);

(statearr_24543[(7)] = inst_24444);

return statearr_24543;
})();
var statearr_24544_24599 = state_24514__$1;
(statearr_24544_24599[(2)] = null);

(statearr_24544_24599[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (25))){
var inst_24510 = (state_24514[(2)]);
var state_24514__$1 = state_24514;
var statearr_24545_24600 = state_24514__$1;
(statearr_24545_24600[(2)] = inst_24510);

(statearr_24545_24600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (34))){
var inst_24508 = (state_24514[(2)]);
var state_24514__$1 = state_24514;
var statearr_24546_24601 = state_24514__$1;
(statearr_24546_24601[(2)] = inst_24508);

(statearr_24546_24601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (17))){
var state_24514__$1 = state_24514;
var statearr_24547_24602 = state_24514__$1;
(statearr_24547_24602[(2)] = false);

(statearr_24547_24602[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (3))){
var state_24514__$1 = state_24514;
var statearr_24548_24603 = state_24514__$1;
(statearr_24548_24603[(2)] = false);

(statearr_24548_24603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (12))){
var inst_24512 = (state_24514[(2)]);
var state_24514__$1 = state_24514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24514__$1,inst_24512);
} else {
if((state_val_24515 === (2))){
var inst_24420 = (state_24514[(8)]);
var inst_24425 = inst_24420.cljs$lang$protocol_mask$partition0$;
var inst_24426 = (inst_24425 & (64));
var inst_24427 = inst_24420.cljs$core$ISeq$;
var inst_24428 = (inst_24426) || (inst_24427);
var state_24514__$1 = state_24514;
if(cljs.core.truth_(inst_24428)){
var statearr_24549_24604 = state_24514__$1;
(statearr_24549_24604[(1)] = (5));

} else {
var statearr_24550_24605 = state_24514__$1;
(statearr_24550_24605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (23))){
var inst_24473 = (state_24514[(14)]);
var inst_24479 = (inst_24473 == null);
var state_24514__$1 = state_24514;
if(cljs.core.truth_(inst_24479)){
var statearr_24551_24606 = state_24514__$1;
(statearr_24551_24606[(1)] = (26));

} else {
var statearr_24552_24607 = state_24514__$1;
(statearr_24552_24607[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (35))){
var inst_24499 = (state_24514[(2)]);
var state_24514__$1 = state_24514;
if(cljs.core.truth_(inst_24499)){
var statearr_24553_24608 = state_24514__$1;
(statearr_24553_24608[(1)] = (36));

} else {
var statearr_24554_24609 = state_24514__$1;
(statearr_24554_24609[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (19))){
var inst_24444 = (state_24514[(7)]);
var inst_24463 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24444);
var state_24514__$1 = state_24514;
var statearr_24555_24610 = state_24514__$1;
(statearr_24555_24610[(2)] = inst_24463);

(statearr_24555_24610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (11))){
var inst_24444 = (state_24514[(7)]);
var inst_24448 = (inst_24444 == null);
var inst_24449 = cljs.core.not.call(null,inst_24448);
var state_24514__$1 = state_24514;
if(inst_24449){
var statearr_24556_24611 = state_24514__$1;
(statearr_24556_24611[(1)] = (13));

} else {
var statearr_24557_24612 = state_24514__$1;
(statearr_24557_24612[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (9))){
var inst_24420 = (state_24514[(8)]);
var state_24514__$1 = state_24514;
var statearr_24558_24613 = state_24514__$1;
(statearr_24558_24613[(2)] = inst_24420);

(statearr_24558_24613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (5))){
var state_24514__$1 = state_24514;
var statearr_24559_24614 = state_24514__$1;
(statearr_24559_24614[(2)] = true);

(statearr_24559_24614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (14))){
var state_24514__$1 = state_24514;
var statearr_24560_24615 = state_24514__$1;
(statearr_24560_24615[(2)] = false);

(statearr_24560_24615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (26))){
var inst_24474 = (state_24514[(9)]);
var inst_24481 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24474);
var state_24514__$1 = state_24514;
var statearr_24561_24616 = state_24514__$1;
(statearr_24561_24616[(2)] = inst_24481);

(statearr_24561_24616[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (16))){
var state_24514__$1 = state_24514;
var statearr_24562_24617 = state_24514__$1;
(statearr_24562_24617[(2)] = true);

(statearr_24562_24617[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (38))){
var inst_24504 = (state_24514[(2)]);
var state_24514__$1 = state_24514;
var statearr_24563_24618 = state_24514__$1;
(statearr_24563_24618[(2)] = inst_24504);

(statearr_24563_24618[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (30))){
var inst_24474 = (state_24514[(9)]);
var inst_24468 = (state_24514[(13)]);
var inst_24467 = (state_24514[(10)]);
var inst_24491 = cljs.core.empty_QMARK_.call(null,inst_24467);
var inst_24492 = inst_24468.call(null,inst_24474);
var inst_24493 = cljs.core.not.call(null,inst_24492);
var inst_24494 = (inst_24491) && (inst_24493);
var state_24514__$1 = state_24514;
var statearr_24564_24619 = state_24514__$1;
(statearr_24564_24619[(2)] = inst_24494);

(statearr_24564_24619[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (10))){
var inst_24420 = (state_24514[(8)]);
var inst_24440 = (state_24514[(2)]);
var inst_24441 = cljs.core.get.call(null,inst_24440,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24442 = cljs.core.get.call(null,inst_24440,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24443 = cljs.core.get.call(null,inst_24440,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24444 = inst_24420;
var state_24514__$1 = (function (){var statearr_24565 = state_24514;
(statearr_24565[(16)] = inst_24441);

(statearr_24565[(17)] = inst_24443);

(statearr_24565[(7)] = inst_24444);

(statearr_24565[(18)] = inst_24442);

return statearr_24565;
})();
var statearr_24566_24620 = state_24514__$1;
(statearr_24566_24620[(2)] = null);

(statearr_24566_24620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (18))){
var inst_24458 = (state_24514[(2)]);
var state_24514__$1 = state_24514;
var statearr_24567_24621 = state_24514__$1;
(statearr_24567_24621[(2)] = inst_24458);

(statearr_24567_24621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (37))){
var state_24514__$1 = state_24514;
var statearr_24568_24622 = state_24514__$1;
(statearr_24568_24622[(2)] = null);

(statearr_24568_24622[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (8))){
var inst_24420 = (state_24514[(8)]);
var inst_24437 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24420);
var state_24514__$1 = state_24514;
var statearr_24569_24623 = state_24514__$1;
(statearr_24569_24623[(2)] = inst_24437);

(statearr_24569_24623[(1)] = (10));


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
});})(c__15666__auto___24577,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15601__auto__,c__15666__auto___24577,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15602__auto__ = null;
var cljs$core$async$mix_$_state_machine__15602__auto____0 = (function (){
var statearr_24573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24573[(0)] = cljs$core$async$mix_$_state_machine__15602__auto__);

(statearr_24573[(1)] = (1));

return statearr_24573;
});
var cljs$core$async$mix_$_state_machine__15602__auto____1 = (function (state_24514){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_24514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e24574){if((e24574 instanceof Object)){
var ex__15605__auto__ = e24574;
var statearr_24575_24624 = state_24514;
(statearr_24575_24624[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24625 = state_24514;
state_24514 = G__24625;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15602__auto__ = function(state_24514){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15602__auto____1.call(this,state_24514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15602__auto____0;
cljs$core$async$mix_$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15602__auto____1;
return cljs$core$async$mix_$_state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto___24577,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15668__auto__ = (function (){var statearr_24576 = f__15667__auto__.call(null);
(statearr_24576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto___24577);

return statearr_24576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto___24577,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__5216__auto__ = (((p == null))?null:p);
var m__5217__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5217__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__5216__auto__ = (((p == null))?null:p);
var m__5217__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,p,v,ch);
} else {
var m__5217__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24626 = [];
var len__5619__auto___24629 = arguments.length;
var i__5620__auto___24630 = (0);
while(true){
if((i__5620__auto___24630 < len__5619__auto___24629)){
args24626.push((arguments[i__5620__auto___24630]));

var G__24631 = (i__5620__auto___24630 + (1));
i__5620__auto___24630 = G__24631;
continue;
} else {
}
break;
}

var G__24628 = args24626.length;
switch (G__24628) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24626.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5216__auto__ = (((p == null))?null:p);
var m__5217__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,p);
} else {
var m__5217__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,p);
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
var x__5216__auto__ = (((p == null))?null:p);
var m__5217__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,p,v);
} else {
var m__5217__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,p,v);
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
var args24634 = [];
var len__5619__auto___24759 = arguments.length;
var i__5620__auto___24760 = (0);
while(true){
if((i__5620__auto___24760 < len__5619__auto___24759)){
args24634.push((arguments[i__5620__auto___24760]));

var G__24761 = (i__5620__auto___24760 + (1));
i__5620__auto___24760 = G__24761;
continue;
} else {
}
break;
}

var G__24636 = args24634.length;
switch (G__24636) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24634.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4561__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4561__auto__,mults){
return (function (p1__24633_SHARP_){
if(cljs.core.truth_(p1__24633_SHARP_.call(null,topic))){
return p1__24633_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24633_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4561__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24637 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24637 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24638){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24638 = meta24638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24639,meta24638__$1){
var self__ = this;
var _24639__$1 = this;
return (new cljs.core.async.t_cljs$core$async24637(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24638__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24639){
var self__ = this;
var _24639__$1 = this;
return self__.meta24638;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24637.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24637.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24638","meta24638",-1398596974,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24637";

cljs.core.async.t_cljs$core$async24637.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async24637");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24637 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24637(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24638){
return (new cljs.core.async.t_cljs$core$async24637(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24638));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24637(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15666__auto___24763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto___24763,mults,ensure_mult,p){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto___24763,mults,ensure_mult,p){
return (function (state_24711){
var state_val_24712 = (state_24711[(1)]);
if((state_val_24712 === (7))){
var inst_24707 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
var statearr_24713_24764 = state_24711__$1;
(statearr_24713_24764[(2)] = inst_24707);

(statearr_24713_24764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (20))){
var state_24711__$1 = state_24711;
var statearr_24714_24765 = state_24711__$1;
(statearr_24714_24765[(2)] = null);

(statearr_24714_24765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (1))){
var state_24711__$1 = state_24711;
var statearr_24715_24766 = state_24711__$1;
(statearr_24715_24766[(2)] = null);

(statearr_24715_24766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (24))){
var inst_24690 = (state_24711[(7)]);
var inst_24699 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24690);
var state_24711__$1 = state_24711;
var statearr_24716_24767 = state_24711__$1;
(statearr_24716_24767[(2)] = inst_24699);

(statearr_24716_24767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (4))){
var inst_24642 = (state_24711[(8)]);
var inst_24642__$1 = (state_24711[(2)]);
var inst_24643 = (inst_24642__$1 == null);
var state_24711__$1 = (function (){var statearr_24717 = state_24711;
(statearr_24717[(8)] = inst_24642__$1);

return statearr_24717;
})();
if(cljs.core.truth_(inst_24643)){
var statearr_24718_24768 = state_24711__$1;
(statearr_24718_24768[(1)] = (5));

} else {
var statearr_24719_24769 = state_24711__$1;
(statearr_24719_24769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (15))){
var inst_24684 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
var statearr_24720_24770 = state_24711__$1;
(statearr_24720_24770[(2)] = inst_24684);

(statearr_24720_24770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (21))){
var inst_24704 = (state_24711[(2)]);
var state_24711__$1 = (function (){var statearr_24721 = state_24711;
(statearr_24721[(9)] = inst_24704);

return statearr_24721;
})();
var statearr_24722_24771 = state_24711__$1;
(statearr_24722_24771[(2)] = null);

(statearr_24722_24771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (13))){
var inst_24666 = (state_24711[(10)]);
var inst_24668 = cljs.core.chunked_seq_QMARK_.call(null,inst_24666);
var state_24711__$1 = state_24711;
if(inst_24668){
var statearr_24723_24772 = state_24711__$1;
(statearr_24723_24772[(1)] = (16));

} else {
var statearr_24724_24773 = state_24711__$1;
(statearr_24724_24773[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (22))){
var inst_24696 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
if(cljs.core.truth_(inst_24696)){
var statearr_24725_24774 = state_24711__$1;
(statearr_24725_24774[(1)] = (23));

} else {
var statearr_24726_24775 = state_24711__$1;
(statearr_24726_24775[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (6))){
var inst_24690 = (state_24711[(7)]);
var inst_24692 = (state_24711[(11)]);
var inst_24642 = (state_24711[(8)]);
var inst_24690__$1 = topic_fn.call(null,inst_24642);
var inst_24691 = cljs.core.deref.call(null,mults);
var inst_24692__$1 = cljs.core.get.call(null,inst_24691,inst_24690__$1);
var state_24711__$1 = (function (){var statearr_24727 = state_24711;
(statearr_24727[(7)] = inst_24690__$1);

(statearr_24727[(11)] = inst_24692__$1);

return statearr_24727;
})();
if(cljs.core.truth_(inst_24692__$1)){
var statearr_24728_24776 = state_24711__$1;
(statearr_24728_24776[(1)] = (19));

} else {
var statearr_24729_24777 = state_24711__$1;
(statearr_24729_24777[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (25))){
var inst_24701 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
var statearr_24730_24778 = state_24711__$1;
(statearr_24730_24778[(2)] = inst_24701);

(statearr_24730_24778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (17))){
var inst_24666 = (state_24711[(10)]);
var inst_24675 = cljs.core.first.call(null,inst_24666);
var inst_24676 = cljs.core.async.muxch_STAR_.call(null,inst_24675);
var inst_24677 = cljs.core.async.close_BANG_.call(null,inst_24676);
var inst_24678 = cljs.core.next.call(null,inst_24666);
var inst_24652 = inst_24678;
var inst_24653 = null;
var inst_24654 = (0);
var inst_24655 = (0);
var state_24711__$1 = (function (){var statearr_24731 = state_24711;
(statearr_24731[(12)] = inst_24654);

(statearr_24731[(13)] = inst_24653);

(statearr_24731[(14)] = inst_24677);

(statearr_24731[(15)] = inst_24655);

(statearr_24731[(16)] = inst_24652);

return statearr_24731;
})();
var statearr_24732_24779 = state_24711__$1;
(statearr_24732_24779[(2)] = null);

(statearr_24732_24779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (3))){
var inst_24709 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24711__$1,inst_24709);
} else {
if((state_val_24712 === (12))){
var inst_24686 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
var statearr_24733_24780 = state_24711__$1;
(statearr_24733_24780[(2)] = inst_24686);

(statearr_24733_24780[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (2))){
var state_24711__$1 = state_24711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24711__$1,(4),ch);
} else {
if((state_val_24712 === (23))){
var state_24711__$1 = state_24711;
var statearr_24734_24781 = state_24711__$1;
(statearr_24734_24781[(2)] = null);

(statearr_24734_24781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (19))){
var inst_24692 = (state_24711[(11)]);
var inst_24642 = (state_24711[(8)]);
var inst_24694 = cljs.core.async.muxch_STAR_.call(null,inst_24692);
var state_24711__$1 = state_24711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24711__$1,(22),inst_24694,inst_24642);
} else {
if((state_val_24712 === (11))){
var inst_24652 = (state_24711[(16)]);
var inst_24666 = (state_24711[(10)]);
var inst_24666__$1 = cljs.core.seq.call(null,inst_24652);
var state_24711__$1 = (function (){var statearr_24735 = state_24711;
(statearr_24735[(10)] = inst_24666__$1);

return statearr_24735;
})();
if(inst_24666__$1){
var statearr_24736_24782 = state_24711__$1;
(statearr_24736_24782[(1)] = (13));

} else {
var statearr_24737_24783 = state_24711__$1;
(statearr_24737_24783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (9))){
var inst_24688 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
var statearr_24738_24784 = state_24711__$1;
(statearr_24738_24784[(2)] = inst_24688);

(statearr_24738_24784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (5))){
var inst_24649 = cljs.core.deref.call(null,mults);
var inst_24650 = cljs.core.vals.call(null,inst_24649);
var inst_24651 = cljs.core.seq.call(null,inst_24650);
var inst_24652 = inst_24651;
var inst_24653 = null;
var inst_24654 = (0);
var inst_24655 = (0);
var state_24711__$1 = (function (){var statearr_24739 = state_24711;
(statearr_24739[(12)] = inst_24654);

(statearr_24739[(13)] = inst_24653);

(statearr_24739[(15)] = inst_24655);

(statearr_24739[(16)] = inst_24652);

return statearr_24739;
})();
var statearr_24740_24785 = state_24711__$1;
(statearr_24740_24785[(2)] = null);

(statearr_24740_24785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (14))){
var state_24711__$1 = state_24711;
var statearr_24744_24786 = state_24711__$1;
(statearr_24744_24786[(2)] = null);

(statearr_24744_24786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (16))){
var inst_24666 = (state_24711[(10)]);
var inst_24670 = cljs.core.chunk_first.call(null,inst_24666);
var inst_24671 = cljs.core.chunk_rest.call(null,inst_24666);
var inst_24672 = cljs.core.count.call(null,inst_24670);
var inst_24652 = inst_24671;
var inst_24653 = inst_24670;
var inst_24654 = inst_24672;
var inst_24655 = (0);
var state_24711__$1 = (function (){var statearr_24745 = state_24711;
(statearr_24745[(12)] = inst_24654);

(statearr_24745[(13)] = inst_24653);

(statearr_24745[(15)] = inst_24655);

(statearr_24745[(16)] = inst_24652);

return statearr_24745;
})();
var statearr_24746_24787 = state_24711__$1;
(statearr_24746_24787[(2)] = null);

(statearr_24746_24787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (10))){
var inst_24654 = (state_24711[(12)]);
var inst_24653 = (state_24711[(13)]);
var inst_24655 = (state_24711[(15)]);
var inst_24652 = (state_24711[(16)]);
var inst_24660 = cljs.core._nth.call(null,inst_24653,inst_24655);
var inst_24661 = cljs.core.async.muxch_STAR_.call(null,inst_24660);
var inst_24662 = cljs.core.async.close_BANG_.call(null,inst_24661);
var inst_24663 = (inst_24655 + (1));
var tmp24741 = inst_24654;
var tmp24742 = inst_24653;
var tmp24743 = inst_24652;
var inst_24652__$1 = tmp24743;
var inst_24653__$1 = tmp24742;
var inst_24654__$1 = tmp24741;
var inst_24655__$1 = inst_24663;
var state_24711__$1 = (function (){var statearr_24747 = state_24711;
(statearr_24747[(12)] = inst_24654__$1);

(statearr_24747[(13)] = inst_24653__$1);

(statearr_24747[(15)] = inst_24655__$1);

(statearr_24747[(17)] = inst_24662);

(statearr_24747[(16)] = inst_24652__$1);

return statearr_24747;
})();
var statearr_24748_24788 = state_24711__$1;
(statearr_24748_24788[(2)] = null);

(statearr_24748_24788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (18))){
var inst_24681 = (state_24711[(2)]);
var state_24711__$1 = state_24711;
var statearr_24749_24789 = state_24711__$1;
(statearr_24749_24789[(2)] = inst_24681);

(statearr_24749_24789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24712 === (8))){
var inst_24654 = (state_24711[(12)]);
var inst_24655 = (state_24711[(15)]);
var inst_24657 = (inst_24655 < inst_24654);
var inst_24658 = inst_24657;
var state_24711__$1 = state_24711;
if(cljs.core.truth_(inst_24658)){
var statearr_24750_24790 = state_24711__$1;
(statearr_24750_24790[(1)] = (10));

} else {
var statearr_24751_24791 = state_24711__$1;
(statearr_24751_24791[(1)] = (11));

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
});})(c__15666__auto___24763,mults,ensure_mult,p))
;
return ((function (switch__15601__auto__,c__15666__auto___24763,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15602__auto__ = null;
var cljs$core$async$state_machine__15602__auto____0 = (function (){
var statearr_24755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24755[(0)] = cljs$core$async$state_machine__15602__auto__);

(statearr_24755[(1)] = (1));

return statearr_24755;
});
var cljs$core$async$state_machine__15602__auto____1 = (function (state_24711){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_24711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e24756){if((e24756 instanceof Object)){
var ex__15605__auto__ = e24756;
var statearr_24757_24792 = state_24711;
(statearr_24757_24792[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24793 = state_24711;
state_24711 = G__24793;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$state_machine__15602__auto__ = function(state_24711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15602__auto____1.call(this,state_24711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15602__auto____0;
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15602__auto____1;
return cljs$core$async$state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto___24763,mults,ensure_mult,p))
})();
var state__15668__auto__ = (function (){var statearr_24758 = f__15667__auto__.call(null);
(statearr_24758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto___24763);

return statearr_24758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto___24763,mults,ensure_mult,p))
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
var args24794 = [];
var len__5619__auto___24797 = arguments.length;
var i__5620__auto___24798 = (0);
while(true){
if((i__5620__auto___24798 < len__5619__auto___24797)){
args24794.push((arguments[i__5620__auto___24798]));

var G__24799 = (i__5620__auto___24798 + (1));
i__5620__auto___24798 = G__24799;
continue;
} else {
}
break;
}

var G__24796 = args24794.length;
switch (G__24796) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24794.length)].join('')));

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
var args24801 = [];
var len__5619__auto___24804 = arguments.length;
var i__5620__auto___24805 = (0);
while(true){
if((i__5620__auto___24805 < len__5619__auto___24804)){
args24801.push((arguments[i__5620__auto___24805]));

var G__24806 = (i__5620__auto___24805 + (1));
i__5620__auto___24805 = G__24806;
continue;
} else {
}
break;
}

var G__24803 = args24801.length;
switch (G__24803) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24801.length)].join('')));

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
var args24808 = [];
var len__5619__auto___24879 = arguments.length;
var i__5620__auto___24880 = (0);
while(true){
if((i__5620__auto___24880 < len__5619__auto___24879)){
args24808.push((arguments[i__5620__auto___24880]));

var G__24881 = (i__5620__auto___24880 + (1));
i__5620__auto___24880 = G__24881;
continue;
} else {
}
break;
}

var G__24810 = args24808.length;
switch (G__24810) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24808.length)].join('')));

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
var c__15666__auto___24883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto___24883,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto___24883,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24849){
var state_val_24850 = (state_24849[(1)]);
if((state_val_24850 === (7))){
var state_24849__$1 = state_24849;
var statearr_24851_24884 = state_24849__$1;
(statearr_24851_24884[(2)] = null);

(statearr_24851_24884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (1))){
var state_24849__$1 = state_24849;
var statearr_24852_24885 = state_24849__$1;
(statearr_24852_24885[(2)] = null);

(statearr_24852_24885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (4))){
var inst_24813 = (state_24849[(7)]);
var inst_24815 = (inst_24813 < cnt);
var state_24849__$1 = state_24849;
if(cljs.core.truth_(inst_24815)){
var statearr_24853_24886 = state_24849__$1;
(statearr_24853_24886[(1)] = (6));

} else {
var statearr_24854_24887 = state_24849__$1;
(statearr_24854_24887[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (15))){
var inst_24845 = (state_24849[(2)]);
var state_24849__$1 = state_24849;
var statearr_24855_24888 = state_24849__$1;
(statearr_24855_24888[(2)] = inst_24845);

(statearr_24855_24888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (13))){
var inst_24838 = cljs.core.async.close_BANG_.call(null,out);
var state_24849__$1 = state_24849;
var statearr_24856_24889 = state_24849__$1;
(statearr_24856_24889[(2)] = inst_24838);

(statearr_24856_24889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (6))){
var state_24849__$1 = state_24849;
var statearr_24857_24890 = state_24849__$1;
(statearr_24857_24890[(2)] = null);

(statearr_24857_24890[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (3))){
var inst_24847 = (state_24849[(2)]);
var state_24849__$1 = state_24849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24849__$1,inst_24847);
} else {
if((state_val_24850 === (12))){
var inst_24835 = (state_24849[(8)]);
var inst_24835__$1 = (state_24849[(2)]);
var inst_24836 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24835__$1);
var state_24849__$1 = (function (){var statearr_24858 = state_24849;
(statearr_24858[(8)] = inst_24835__$1);

return statearr_24858;
})();
if(cljs.core.truth_(inst_24836)){
var statearr_24859_24891 = state_24849__$1;
(statearr_24859_24891[(1)] = (13));

} else {
var statearr_24860_24892 = state_24849__$1;
(statearr_24860_24892[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (2))){
var inst_24812 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24813 = (0);
var state_24849__$1 = (function (){var statearr_24861 = state_24849;
(statearr_24861[(9)] = inst_24812);

(statearr_24861[(7)] = inst_24813);

return statearr_24861;
})();
var statearr_24862_24893 = state_24849__$1;
(statearr_24862_24893[(2)] = null);

(statearr_24862_24893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (11))){
var inst_24813 = (state_24849[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24849,(10),Object,null,(9));
var inst_24822 = chs__$1.call(null,inst_24813);
var inst_24823 = done.call(null,inst_24813);
var inst_24824 = cljs.core.async.take_BANG_.call(null,inst_24822,inst_24823);
var state_24849__$1 = state_24849;
var statearr_24863_24894 = state_24849__$1;
(statearr_24863_24894[(2)] = inst_24824);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24849__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (9))){
var inst_24813 = (state_24849[(7)]);
var inst_24826 = (state_24849[(2)]);
var inst_24827 = (inst_24813 + (1));
var inst_24813__$1 = inst_24827;
var state_24849__$1 = (function (){var statearr_24864 = state_24849;
(statearr_24864[(7)] = inst_24813__$1);

(statearr_24864[(10)] = inst_24826);

return statearr_24864;
})();
var statearr_24865_24895 = state_24849__$1;
(statearr_24865_24895[(2)] = null);

(statearr_24865_24895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (5))){
var inst_24833 = (state_24849[(2)]);
var state_24849__$1 = (function (){var statearr_24866 = state_24849;
(statearr_24866[(11)] = inst_24833);

return statearr_24866;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24849__$1,(12),dchan);
} else {
if((state_val_24850 === (14))){
var inst_24835 = (state_24849[(8)]);
var inst_24840 = cljs.core.apply.call(null,f,inst_24835);
var state_24849__$1 = state_24849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24849__$1,(16),out,inst_24840);
} else {
if((state_val_24850 === (16))){
var inst_24842 = (state_24849[(2)]);
var state_24849__$1 = (function (){var statearr_24867 = state_24849;
(statearr_24867[(12)] = inst_24842);

return statearr_24867;
})();
var statearr_24868_24896 = state_24849__$1;
(statearr_24868_24896[(2)] = null);

(statearr_24868_24896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (10))){
var inst_24817 = (state_24849[(2)]);
var inst_24818 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24849__$1 = (function (){var statearr_24869 = state_24849;
(statearr_24869[(13)] = inst_24817);

return statearr_24869;
})();
var statearr_24870_24897 = state_24849__$1;
(statearr_24870_24897[(2)] = inst_24818);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24849__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24850 === (8))){
var inst_24831 = (state_24849[(2)]);
var state_24849__$1 = state_24849;
var statearr_24871_24898 = state_24849__$1;
(statearr_24871_24898[(2)] = inst_24831);

(statearr_24871_24898[(1)] = (5));


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
});})(c__15666__auto___24883,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15601__auto__,c__15666__auto___24883,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15602__auto__ = null;
var cljs$core$async$state_machine__15602__auto____0 = (function (){
var statearr_24875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24875[(0)] = cljs$core$async$state_machine__15602__auto__);

(statearr_24875[(1)] = (1));

return statearr_24875;
});
var cljs$core$async$state_machine__15602__auto____1 = (function (state_24849){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_24849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e24876){if((e24876 instanceof Object)){
var ex__15605__auto__ = e24876;
var statearr_24877_24899 = state_24849;
(statearr_24877_24899[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24900 = state_24849;
state_24849 = G__24900;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$state_machine__15602__auto__ = function(state_24849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15602__auto____1.call(this,state_24849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15602__auto____0;
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15602__auto____1;
return cljs$core$async$state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto___24883,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15668__auto__ = (function (){var statearr_24878 = f__15667__auto__.call(null);
(statearr_24878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto___24883);

return statearr_24878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto___24883,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24902 = [];
var len__5619__auto___24958 = arguments.length;
var i__5620__auto___24959 = (0);
while(true){
if((i__5620__auto___24959 < len__5619__auto___24958)){
args24902.push((arguments[i__5620__auto___24959]));

var G__24960 = (i__5620__auto___24959 + (1));
i__5620__auto___24959 = G__24960;
continue;
} else {
}
break;
}

var G__24904 = args24902.length;
switch (G__24904) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24902.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15666__auto___24962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto___24962,out){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto___24962,out){
return (function (state_24934){
var state_val_24935 = (state_24934[(1)]);
if((state_val_24935 === (7))){
var inst_24914 = (state_24934[(7)]);
var inst_24913 = (state_24934[(8)]);
var inst_24913__$1 = (state_24934[(2)]);
var inst_24914__$1 = cljs.core.nth.call(null,inst_24913__$1,(0),null);
var inst_24915 = cljs.core.nth.call(null,inst_24913__$1,(1),null);
var inst_24916 = (inst_24914__$1 == null);
var state_24934__$1 = (function (){var statearr_24936 = state_24934;
(statearr_24936[(9)] = inst_24915);

(statearr_24936[(7)] = inst_24914__$1);

(statearr_24936[(8)] = inst_24913__$1);

return statearr_24936;
})();
if(cljs.core.truth_(inst_24916)){
var statearr_24937_24963 = state_24934__$1;
(statearr_24937_24963[(1)] = (8));

} else {
var statearr_24938_24964 = state_24934__$1;
(statearr_24938_24964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24935 === (1))){
var inst_24905 = cljs.core.vec.call(null,chs);
var inst_24906 = inst_24905;
var state_24934__$1 = (function (){var statearr_24939 = state_24934;
(statearr_24939[(10)] = inst_24906);

return statearr_24939;
})();
var statearr_24940_24965 = state_24934__$1;
(statearr_24940_24965[(2)] = null);

(statearr_24940_24965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24935 === (4))){
var inst_24906 = (state_24934[(10)]);
var state_24934__$1 = state_24934;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24934__$1,(7),inst_24906);
} else {
if((state_val_24935 === (6))){
var inst_24930 = (state_24934[(2)]);
var state_24934__$1 = state_24934;
var statearr_24941_24966 = state_24934__$1;
(statearr_24941_24966[(2)] = inst_24930);

(statearr_24941_24966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24935 === (3))){
var inst_24932 = (state_24934[(2)]);
var state_24934__$1 = state_24934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24934__$1,inst_24932);
} else {
if((state_val_24935 === (2))){
var inst_24906 = (state_24934[(10)]);
var inst_24908 = cljs.core.count.call(null,inst_24906);
var inst_24909 = (inst_24908 > (0));
var state_24934__$1 = state_24934;
if(cljs.core.truth_(inst_24909)){
var statearr_24943_24967 = state_24934__$1;
(statearr_24943_24967[(1)] = (4));

} else {
var statearr_24944_24968 = state_24934__$1;
(statearr_24944_24968[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24935 === (11))){
var inst_24906 = (state_24934[(10)]);
var inst_24923 = (state_24934[(2)]);
var tmp24942 = inst_24906;
var inst_24906__$1 = tmp24942;
var state_24934__$1 = (function (){var statearr_24945 = state_24934;
(statearr_24945[(11)] = inst_24923);

(statearr_24945[(10)] = inst_24906__$1);

return statearr_24945;
})();
var statearr_24946_24969 = state_24934__$1;
(statearr_24946_24969[(2)] = null);

(statearr_24946_24969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24935 === (9))){
var inst_24914 = (state_24934[(7)]);
var state_24934__$1 = state_24934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24934__$1,(11),out,inst_24914);
} else {
if((state_val_24935 === (5))){
var inst_24928 = cljs.core.async.close_BANG_.call(null,out);
var state_24934__$1 = state_24934;
var statearr_24947_24970 = state_24934__$1;
(statearr_24947_24970[(2)] = inst_24928);

(statearr_24947_24970[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24935 === (10))){
var inst_24926 = (state_24934[(2)]);
var state_24934__$1 = state_24934;
var statearr_24948_24971 = state_24934__$1;
(statearr_24948_24971[(2)] = inst_24926);

(statearr_24948_24971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24935 === (8))){
var inst_24906 = (state_24934[(10)]);
var inst_24915 = (state_24934[(9)]);
var inst_24914 = (state_24934[(7)]);
var inst_24913 = (state_24934[(8)]);
var inst_24918 = (function (){var cs = inst_24906;
var vec__24911 = inst_24913;
var v = inst_24914;
var c = inst_24915;
return ((function (cs,vec__24911,v,c,inst_24906,inst_24915,inst_24914,inst_24913,state_val_24935,c__15666__auto___24962,out){
return (function (p1__24901_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24901_SHARP_);
});
;})(cs,vec__24911,v,c,inst_24906,inst_24915,inst_24914,inst_24913,state_val_24935,c__15666__auto___24962,out))
})();
var inst_24919 = cljs.core.filterv.call(null,inst_24918,inst_24906);
var inst_24906__$1 = inst_24919;
var state_24934__$1 = (function (){var statearr_24949 = state_24934;
(statearr_24949[(10)] = inst_24906__$1);

return statearr_24949;
})();
var statearr_24950_24972 = state_24934__$1;
(statearr_24950_24972[(2)] = null);

(statearr_24950_24972[(1)] = (2));


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
});})(c__15666__auto___24962,out))
;
return ((function (switch__15601__auto__,c__15666__auto___24962,out){
return (function() {
var cljs$core$async$state_machine__15602__auto__ = null;
var cljs$core$async$state_machine__15602__auto____0 = (function (){
var statearr_24954 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24954[(0)] = cljs$core$async$state_machine__15602__auto__);

(statearr_24954[(1)] = (1));

return statearr_24954;
});
var cljs$core$async$state_machine__15602__auto____1 = (function (state_24934){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_24934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e24955){if((e24955 instanceof Object)){
var ex__15605__auto__ = e24955;
var statearr_24956_24973 = state_24934;
(statearr_24956_24973[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24974 = state_24934;
state_24934 = G__24974;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$state_machine__15602__auto__ = function(state_24934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15602__auto____1.call(this,state_24934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15602__auto____0;
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15602__auto____1;
return cljs$core$async$state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto___24962,out))
})();
var state__15668__auto__ = (function (){var statearr_24957 = f__15667__auto__.call(null);
(statearr_24957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto___24962);

return statearr_24957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto___24962,out))
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
var args24975 = [];
var len__5619__auto___25024 = arguments.length;
var i__5620__auto___25025 = (0);
while(true){
if((i__5620__auto___25025 < len__5619__auto___25024)){
args24975.push((arguments[i__5620__auto___25025]));

var G__25026 = (i__5620__auto___25025 + (1));
i__5620__auto___25025 = G__25026;
continue;
} else {
}
break;
}

var G__24977 = args24975.length;
switch (G__24977) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24975.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15666__auto___25028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto___25028,out){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto___25028,out){
return (function (state_25001){
var state_val_25002 = (state_25001[(1)]);
if((state_val_25002 === (7))){
var inst_24983 = (state_25001[(7)]);
var inst_24983__$1 = (state_25001[(2)]);
var inst_24984 = (inst_24983__$1 == null);
var inst_24985 = cljs.core.not.call(null,inst_24984);
var state_25001__$1 = (function (){var statearr_25003 = state_25001;
(statearr_25003[(7)] = inst_24983__$1);

return statearr_25003;
})();
if(inst_24985){
var statearr_25004_25029 = state_25001__$1;
(statearr_25004_25029[(1)] = (8));

} else {
var statearr_25005_25030 = state_25001__$1;
(statearr_25005_25030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (1))){
var inst_24978 = (0);
var state_25001__$1 = (function (){var statearr_25006 = state_25001;
(statearr_25006[(8)] = inst_24978);

return statearr_25006;
})();
var statearr_25007_25031 = state_25001__$1;
(statearr_25007_25031[(2)] = null);

(statearr_25007_25031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (4))){
var state_25001__$1 = state_25001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25001__$1,(7),ch);
} else {
if((state_val_25002 === (6))){
var inst_24996 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25008_25032 = state_25001__$1;
(statearr_25008_25032[(2)] = inst_24996);

(statearr_25008_25032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (3))){
var inst_24998 = (state_25001[(2)]);
var inst_24999 = cljs.core.async.close_BANG_.call(null,out);
var state_25001__$1 = (function (){var statearr_25009 = state_25001;
(statearr_25009[(9)] = inst_24998);

return statearr_25009;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25001__$1,inst_24999);
} else {
if((state_val_25002 === (2))){
var inst_24978 = (state_25001[(8)]);
var inst_24980 = (inst_24978 < n);
var state_25001__$1 = state_25001;
if(cljs.core.truth_(inst_24980)){
var statearr_25010_25033 = state_25001__$1;
(statearr_25010_25033[(1)] = (4));

} else {
var statearr_25011_25034 = state_25001__$1;
(statearr_25011_25034[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (11))){
var inst_24978 = (state_25001[(8)]);
var inst_24988 = (state_25001[(2)]);
var inst_24989 = (inst_24978 + (1));
var inst_24978__$1 = inst_24989;
var state_25001__$1 = (function (){var statearr_25012 = state_25001;
(statearr_25012[(10)] = inst_24988);

(statearr_25012[(8)] = inst_24978__$1);

return statearr_25012;
})();
var statearr_25013_25035 = state_25001__$1;
(statearr_25013_25035[(2)] = null);

(statearr_25013_25035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (9))){
var state_25001__$1 = state_25001;
var statearr_25014_25036 = state_25001__$1;
(statearr_25014_25036[(2)] = null);

(statearr_25014_25036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (5))){
var state_25001__$1 = state_25001;
var statearr_25015_25037 = state_25001__$1;
(statearr_25015_25037[(2)] = null);

(statearr_25015_25037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (10))){
var inst_24993 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25016_25038 = state_25001__$1;
(statearr_25016_25038[(2)] = inst_24993);

(statearr_25016_25038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (8))){
var inst_24983 = (state_25001[(7)]);
var state_25001__$1 = state_25001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25001__$1,(11),out,inst_24983);
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
});})(c__15666__auto___25028,out))
;
return ((function (switch__15601__auto__,c__15666__auto___25028,out){
return (function() {
var cljs$core$async$state_machine__15602__auto__ = null;
var cljs$core$async$state_machine__15602__auto____0 = (function (){
var statearr_25020 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25020[(0)] = cljs$core$async$state_machine__15602__auto__);

(statearr_25020[(1)] = (1));

return statearr_25020;
});
var cljs$core$async$state_machine__15602__auto____1 = (function (state_25001){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_25001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e25021){if((e25021 instanceof Object)){
var ex__15605__auto__ = e25021;
var statearr_25022_25039 = state_25001;
(statearr_25022_25039[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25040 = state_25001;
state_25001 = G__25040;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$state_machine__15602__auto__ = function(state_25001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15602__auto____1.call(this,state_25001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15602__auto____0;
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15602__auto____1;
return cljs$core$async$state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto___25028,out))
})();
var state__15668__auto__ = (function (){var statearr_25023 = f__15667__auto__.call(null);
(statearr_25023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto___25028);

return statearr_25023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto___25028,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25048 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25048 = (function (map_LT_,f,ch,meta25049){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25049 = meta25049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25050,meta25049__$1){
var self__ = this;
var _25050__$1 = this;
return (new cljs.core.async.t_cljs$core$async25048(self__.map_LT_,self__.f,self__.ch,meta25049__$1));
});

cljs.core.async.t_cljs$core$async25048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25050){
var self__ = this;
var _25050__$1 = this;
return self__.meta25049;
});

cljs.core.async.t_cljs$core$async25048.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25048.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25048.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25048.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25048.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25051 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25051 = (function (map_LT_,f,ch,meta25049,_,fn1,meta25052){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25049 = meta25049;
this._ = _;
this.fn1 = fn1;
this.meta25052 = meta25052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25053,meta25052__$1){
var self__ = this;
var _25053__$1 = this;
return (new cljs.core.async.t_cljs$core$async25051(self__.map_LT_,self__.f,self__.ch,self__.meta25049,self__._,self__.fn1,meta25052__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25053){
var self__ = this;
var _25053__$1 = this;
return self__.meta25052;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25051.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25051.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25051.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25041_SHARP_){
return f1.call(null,(((p1__25041_SHARP_ == null))?null:self__.f.call(null,p1__25041_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25051.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25049","meta25049",-2069332092,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25048","cljs.core.async/t_cljs$core$async25048",322686991,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25052","meta25052",1905671758,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25051";

cljs.core.async.t_cljs$core$async25051.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async25051");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25051 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25051(map_LT___$1,f__$1,ch__$1,meta25049__$1,___$2,fn1__$1,meta25052){
return (new cljs.core.async.t_cljs$core$async25051(map_LT___$1,f__$1,ch__$1,meta25049__$1,___$2,fn1__$1,meta25052));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25051(self__.map_LT_,self__.f,self__.ch,self__.meta25049,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4549__auto__ = ret;
if(cljs.core.truth_(and__4549__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4549__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25048.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25048.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25049","meta25049",-2069332092,null)], null);
});

cljs.core.async.t_cljs$core$async25048.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25048";

cljs.core.async.t_cljs$core$async25048.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async25048");
});

cljs.core.async.__GT_t_cljs$core$async25048 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25048(map_LT___$1,f__$1,ch__$1,meta25049){
return (new cljs.core.async.t_cljs$core$async25048(map_LT___$1,f__$1,ch__$1,meta25049));
});

}

return (new cljs.core.async.t_cljs$core$async25048(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25057 = (function (map_GT_,f,ch,meta25058){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25058 = meta25058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25059,meta25058__$1){
var self__ = this;
var _25059__$1 = this;
return (new cljs.core.async.t_cljs$core$async25057(self__.map_GT_,self__.f,self__.ch,meta25058__$1));
});

cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25059){
var self__ = this;
var _25059__$1 = this;
return self__.meta25058;
});

cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25057.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25058","meta25058",-1812985915,null)], null);
});

cljs.core.async.t_cljs$core$async25057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25057";

cljs.core.async.t_cljs$core$async25057.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async25057");
});

cljs.core.async.__GT_t_cljs$core$async25057 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25057(map_GT___$1,f__$1,ch__$1,meta25058){
return (new cljs.core.async.t_cljs$core$async25057(map_GT___$1,f__$1,ch__$1,meta25058));
});

}

return (new cljs.core.async.t_cljs$core$async25057(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25063 = (function (filter_GT_,p,ch,meta25064){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25064 = meta25064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25065,meta25064__$1){
var self__ = this;
var _25065__$1 = this;
return (new cljs.core.async.t_cljs$core$async25063(self__.filter_GT_,self__.p,self__.ch,meta25064__$1));
});

cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25065){
var self__ = this;
var _25065__$1 = this;
return self__.meta25064;
});

cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25064","meta25064",1650142104,null)], null);
});

cljs.core.async.t_cljs$core$async25063.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25063";

cljs.core.async.t_cljs$core$async25063.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async25063");
});

cljs.core.async.__GT_t_cljs$core$async25063 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25063(filter_GT___$1,p__$1,ch__$1,meta25064){
return (new cljs.core.async.t_cljs$core$async25063(filter_GT___$1,p__$1,ch__$1,meta25064));
});

}

return (new cljs.core.async.t_cljs$core$async25063(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args25066 = [];
var len__5619__auto___25110 = arguments.length;
var i__5620__auto___25111 = (0);
while(true){
if((i__5620__auto___25111 < len__5619__auto___25110)){
args25066.push((arguments[i__5620__auto___25111]));

var G__25112 = (i__5620__auto___25111 + (1));
i__5620__auto___25111 = G__25112;
continue;
} else {
}
break;
}

var G__25068 = args25066.length;
switch (G__25068) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25066.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15666__auto___25114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto___25114,out){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto___25114,out){
return (function (state_25089){
var state_val_25090 = (state_25089[(1)]);
if((state_val_25090 === (7))){
var inst_25085 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
var statearr_25091_25115 = state_25089__$1;
(statearr_25091_25115[(2)] = inst_25085);

(statearr_25091_25115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (1))){
var state_25089__$1 = state_25089;
var statearr_25092_25116 = state_25089__$1;
(statearr_25092_25116[(2)] = null);

(statearr_25092_25116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (4))){
var inst_25071 = (state_25089[(7)]);
var inst_25071__$1 = (state_25089[(2)]);
var inst_25072 = (inst_25071__$1 == null);
var state_25089__$1 = (function (){var statearr_25093 = state_25089;
(statearr_25093[(7)] = inst_25071__$1);

return statearr_25093;
})();
if(cljs.core.truth_(inst_25072)){
var statearr_25094_25117 = state_25089__$1;
(statearr_25094_25117[(1)] = (5));

} else {
var statearr_25095_25118 = state_25089__$1;
(statearr_25095_25118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (6))){
var inst_25071 = (state_25089[(7)]);
var inst_25076 = p.call(null,inst_25071);
var state_25089__$1 = state_25089;
if(cljs.core.truth_(inst_25076)){
var statearr_25096_25119 = state_25089__$1;
(statearr_25096_25119[(1)] = (8));

} else {
var statearr_25097_25120 = state_25089__$1;
(statearr_25097_25120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (3))){
var inst_25087 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25089__$1,inst_25087);
} else {
if((state_val_25090 === (2))){
var state_25089__$1 = state_25089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25089__$1,(4),ch);
} else {
if((state_val_25090 === (11))){
var inst_25079 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
var statearr_25098_25121 = state_25089__$1;
(statearr_25098_25121[(2)] = inst_25079);

(statearr_25098_25121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (9))){
var state_25089__$1 = state_25089;
var statearr_25099_25122 = state_25089__$1;
(statearr_25099_25122[(2)] = null);

(statearr_25099_25122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (5))){
var inst_25074 = cljs.core.async.close_BANG_.call(null,out);
var state_25089__$1 = state_25089;
var statearr_25100_25123 = state_25089__$1;
(statearr_25100_25123[(2)] = inst_25074);

(statearr_25100_25123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (10))){
var inst_25082 = (state_25089[(2)]);
var state_25089__$1 = (function (){var statearr_25101 = state_25089;
(statearr_25101[(8)] = inst_25082);

return statearr_25101;
})();
var statearr_25102_25124 = state_25089__$1;
(statearr_25102_25124[(2)] = null);

(statearr_25102_25124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (8))){
var inst_25071 = (state_25089[(7)]);
var state_25089__$1 = state_25089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25089__$1,(11),out,inst_25071);
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
});})(c__15666__auto___25114,out))
;
return ((function (switch__15601__auto__,c__15666__auto___25114,out){
return (function() {
var cljs$core$async$state_machine__15602__auto__ = null;
var cljs$core$async$state_machine__15602__auto____0 = (function (){
var statearr_25106 = [null,null,null,null,null,null,null,null,null];
(statearr_25106[(0)] = cljs$core$async$state_machine__15602__auto__);

(statearr_25106[(1)] = (1));

return statearr_25106;
});
var cljs$core$async$state_machine__15602__auto____1 = (function (state_25089){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_25089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e25107){if((e25107 instanceof Object)){
var ex__15605__auto__ = e25107;
var statearr_25108_25125 = state_25089;
(statearr_25108_25125[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25126 = state_25089;
state_25089 = G__25126;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$state_machine__15602__auto__ = function(state_25089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15602__auto____1.call(this,state_25089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15602__auto____0;
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15602__auto____1;
return cljs$core$async$state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto___25114,out))
})();
var state__15668__auto__ = (function (){var statearr_25109 = f__15667__auto__.call(null);
(statearr_25109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto___25114);

return statearr_25109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto___25114,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25127 = [];
var len__5619__auto___25130 = arguments.length;
var i__5620__auto___25131 = (0);
while(true){
if((i__5620__auto___25131 < len__5619__auto___25130)){
args25127.push((arguments[i__5620__auto___25131]));

var G__25132 = (i__5620__auto___25131 + (1));
i__5620__auto___25131 = G__25132;
continue;
} else {
}
break;
}

var G__25129 = args25127.length;
switch (G__25129) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25127.length)].join('')));

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
var c__15666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto__){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto__){
return (function (state_25299){
var state_val_25300 = (state_25299[(1)]);
if((state_val_25300 === (7))){
var inst_25295 = (state_25299[(2)]);
var state_25299__$1 = state_25299;
var statearr_25301_25342 = state_25299__$1;
(statearr_25301_25342[(2)] = inst_25295);

(statearr_25301_25342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (20))){
var inst_25265 = (state_25299[(7)]);
var inst_25276 = (state_25299[(2)]);
var inst_25277 = cljs.core.next.call(null,inst_25265);
var inst_25251 = inst_25277;
var inst_25252 = null;
var inst_25253 = (0);
var inst_25254 = (0);
var state_25299__$1 = (function (){var statearr_25302 = state_25299;
(statearr_25302[(8)] = inst_25276);

(statearr_25302[(9)] = inst_25254);

(statearr_25302[(10)] = inst_25252);

(statearr_25302[(11)] = inst_25251);

(statearr_25302[(12)] = inst_25253);

return statearr_25302;
})();
var statearr_25303_25343 = state_25299__$1;
(statearr_25303_25343[(2)] = null);

(statearr_25303_25343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (1))){
var state_25299__$1 = state_25299;
var statearr_25304_25344 = state_25299__$1;
(statearr_25304_25344[(2)] = null);

(statearr_25304_25344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (4))){
var inst_25240 = (state_25299[(13)]);
var inst_25240__$1 = (state_25299[(2)]);
var inst_25241 = (inst_25240__$1 == null);
var state_25299__$1 = (function (){var statearr_25305 = state_25299;
(statearr_25305[(13)] = inst_25240__$1);

return statearr_25305;
})();
if(cljs.core.truth_(inst_25241)){
var statearr_25306_25345 = state_25299__$1;
(statearr_25306_25345[(1)] = (5));

} else {
var statearr_25307_25346 = state_25299__$1;
(statearr_25307_25346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (15))){
var state_25299__$1 = state_25299;
var statearr_25311_25347 = state_25299__$1;
(statearr_25311_25347[(2)] = null);

(statearr_25311_25347[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (21))){
var state_25299__$1 = state_25299;
var statearr_25312_25348 = state_25299__$1;
(statearr_25312_25348[(2)] = null);

(statearr_25312_25348[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (13))){
var inst_25254 = (state_25299[(9)]);
var inst_25252 = (state_25299[(10)]);
var inst_25251 = (state_25299[(11)]);
var inst_25253 = (state_25299[(12)]);
var inst_25261 = (state_25299[(2)]);
var inst_25262 = (inst_25254 + (1));
var tmp25308 = inst_25252;
var tmp25309 = inst_25251;
var tmp25310 = inst_25253;
var inst_25251__$1 = tmp25309;
var inst_25252__$1 = tmp25308;
var inst_25253__$1 = tmp25310;
var inst_25254__$1 = inst_25262;
var state_25299__$1 = (function (){var statearr_25313 = state_25299;
(statearr_25313[(14)] = inst_25261);

(statearr_25313[(9)] = inst_25254__$1);

(statearr_25313[(10)] = inst_25252__$1);

(statearr_25313[(11)] = inst_25251__$1);

(statearr_25313[(12)] = inst_25253__$1);

return statearr_25313;
})();
var statearr_25314_25349 = state_25299__$1;
(statearr_25314_25349[(2)] = null);

(statearr_25314_25349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (22))){
var state_25299__$1 = state_25299;
var statearr_25315_25350 = state_25299__$1;
(statearr_25315_25350[(2)] = null);

(statearr_25315_25350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (6))){
var inst_25240 = (state_25299[(13)]);
var inst_25249 = f.call(null,inst_25240);
var inst_25250 = cljs.core.seq.call(null,inst_25249);
var inst_25251 = inst_25250;
var inst_25252 = null;
var inst_25253 = (0);
var inst_25254 = (0);
var state_25299__$1 = (function (){var statearr_25316 = state_25299;
(statearr_25316[(9)] = inst_25254);

(statearr_25316[(10)] = inst_25252);

(statearr_25316[(11)] = inst_25251);

(statearr_25316[(12)] = inst_25253);

return statearr_25316;
})();
var statearr_25317_25351 = state_25299__$1;
(statearr_25317_25351[(2)] = null);

(statearr_25317_25351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (17))){
var inst_25265 = (state_25299[(7)]);
var inst_25269 = cljs.core.chunk_first.call(null,inst_25265);
var inst_25270 = cljs.core.chunk_rest.call(null,inst_25265);
var inst_25271 = cljs.core.count.call(null,inst_25269);
var inst_25251 = inst_25270;
var inst_25252 = inst_25269;
var inst_25253 = inst_25271;
var inst_25254 = (0);
var state_25299__$1 = (function (){var statearr_25318 = state_25299;
(statearr_25318[(9)] = inst_25254);

(statearr_25318[(10)] = inst_25252);

(statearr_25318[(11)] = inst_25251);

(statearr_25318[(12)] = inst_25253);

return statearr_25318;
})();
var statearr_25319_25352 = state_25299__$1;
(statearr_25319_25352[(2)] = null);

(statearr_25319_25352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (3))){
var inst_25297 = (state_25299[(2)]);
var state_25299__$1 = state_25299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25299__$1,inst_25297);
} else {
if((state_val_25300 === (12))){
var inst_25285 = (state_25299[(2)]);
var state_25299__$1 = state_25299;
var statearr_25320_25353 = state_25299__$1;
(statearr_25320_25353[(2)] = inst_25285);

(statearr_25320_25353[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (2))){
var state_25299__$1 = state_25299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25299__$1,(4),in$);
} else {
if((state_val_25300 === (23))){
var inst_25293 = (state_25299[(2)]);
var state_25299__$1 = state_25299;
var statearr_25321_25354 = state_25299__$1;
(statearr_25321_25354[(2)] = inst_25293);

(statearr_25321_25354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (19))){
var inst_25280 = (state_25299[(2)]);
var state_25299__$1 = state_25299;
var statearr_25322_25355 = state_25299__$1;
(statearr_25322_25355[(2)] = inst_25280);

(statearr_25322_25355[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (11))){
var inst_25265 = (state_25299[(7)]);
var inst_25251 = (state_25299[(11)]);
var inst_25265__$1 = cljs.core.seq.call(null,inst_25251);
var state_25299__$1 = (function (){var statearr_25323 = state_25299;
(statearr_25323[(7)] = inst_25265__$1);

return statearr_25323;
})();
if(inst_25265__$1){
var statearr_25324_25356 = state_25299__$1;
(statearr_25324_25356[(1)] = (14));

} else {
var statearr_25325_25357 = state_25299__$1;
(statearr_25325_25357[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (9))){
var inst_25287 = (state_25299[(2)]);
var inst_25288 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25299__$1 = (function (){var statearr_25326 = state_25299;
(statearr_25326[(15)] = inst_25287);

return statearr_25326;
})();
if(cljs.core.truth_(inst_25288)){
var statearr_25327_25358 = state_25299__$1;
(statearr_25327_25358[(1)] = (21));

} else {
var statearr_25328_25359 = state_25299__$1;
(statearr_25328_25359[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (5))){
var inst_25243 = cljs.core.async.close_BANG_.call(null,out);
var state_25299__$1 = state_25299;
var statearr_25329_25360 = state_25299__$1;
(statearr_25329_25360[(2)] = inst_25243);

(statearr_25329_25360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (14))){
var inst_25265 = (state_25299[(7)]);
var inst_25267 = cljs.core.chunked_seq_QMARK_.call(null,inst_25265);
var state_25299__$1 = state_25299;
if(inst_25267){
var statearr_25330_25361 = state_25299__$1;
(statearr_25330_25361[(1)] = (17));

} else {
var statearr_25331_25362 = state_25299__$1;
(statearr_25331_25362[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (16))){
var inst_25283 = (state_25299[(2)]);
var state_25299__$1 = state_25299;
var statearr_25332_25363 = state_25299__$1;
(statearr_25332_25363[(2)] = inst_25283);

(statearr_25332_25363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (10))){
var inst_25254 = (state_25299[(9)]);
var inst_25252 = (state_25299[(10)]);
var inst_25259 = cljs.core._nth.call(null,inst_25252,inst_25254);
var state_25299__$1 = state_25299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25299__$1,(13),out,inst_25259);
} else {
if((state_val_25300 === (18))){
var inst_25265 = (state_25299[(7)]);
var inst_25274 = cljs.core.first.call(null,inst_25265);
var state_25299__$1 = state_25299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25299__$1,(20),out,inst_25274);
} else {
if((state_val_25300 === (8))){
var inst_25254 = (state_25299[(9)]);
var inst_25253 = (state_25299[(12)]);
var inst_25256 = (inst_25254 < inst_25253);
var inst_25257 = inst_25256;
var state_25299__$1 = state_25299;
if(cljs.core.truth_(inst_25257)){
var statearr_25333_25364 = state_25299__$1;
(statearr_25333_25364[(1)] = (10));

} else {
var statearr_25334_25365 = state_25299__$1;
(statearr_25334_25365[(1)] = (11));

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
});})(c__15666__auto__))
;
return ((function (switch__15601__auto__,c__15666__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15602__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15602__auto____0 = (function (){
var statearr_25338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25338[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15602__auto__);

(statearr_25338[(1)] = (1));

return statearr_25338;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15602__auto____1 = (function (state_25299){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_25299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e25339){if((e25339 instanceof Object)){
var ex__15605__auto__ = e25339;
var statearr_25340_25366 = state_25299;
(statearr_25340_25366[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25367 = state_25299;
state_25299 = G__25367;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15602__auto__ = function(state_25299){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15602__auto____1.call(this,state_25299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15602__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15602__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto__))
})();
var state__15668__auto__ = (function (){var statearr_25341 = f__15667__auto__.call(null);
(statearr_25341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto__);

return statearr_25341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto__))
);

return c__15666__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25368 = [];
var len__5619__auto___25371 = arguments.length;
var i__5620__auto___25372 = (0);
while(true){
if((i__5620__auto___25372 < len__5619__auto___25371)){
args25368.push((arguments[i__5620__auto___25372]));

var G__25373 = (i__5620__auto___25372 + (1));
i__5620__auto___25372 = G__25373;
continue;
} else {
}
break;
}

var G__25370 = args25368.length;
switch (G__25370) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25368.length)].join('')));

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
var args25375 = [];
var len__5619__auto___25378 = arguments.length;
var i__5620__auto___25379 = (0);
while(true){
if((i__5620__auto___25379 < len__5619__auto___25378)){
args25375.push((arguments[i__5620__auto___25379]));

var G__25380 = (i__5620__auto___25379 + (1));
i__5620__auto___25379 = G__25380;
continue;
} else {
}
break;
}

var G__25377 = args25375.length;
switch (G__25377) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25375.length)].join('')));

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
var args25382 = [];
var len__5619__auto___25433 = arguments.length;
var i__5620__auto___25434 = (0);
while(true){
if((i__5620__auto___25434 < len__5619__auto___25433)){
args25382.push((arguments[i__5620__auto___25434]));

var G__25435 = (i__5620__auto___25434 + (1));
i__5620__auto___25434 = G__25435;
continue;
} else {
}
break;
}

var G__25384 = args25382.length;
switch (G__25384) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25382.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15666__auto___25437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto___25437,out){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto___25437,out){
return (function (state_25408){
var state_val_25409 = (state_25408[(1)]);
if((state_val_25409 === (7))){
var inst_25403 = (state_25408[(2)]);
var state_25408__$1 = state_25408;
var statearr_25410_25438 = state_25408__$1;
(statearr_25410_25438[(2)] = inst_25403);

(statearr_25410_25438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25409 === (1))){
var inst_25385 = null;
var state_25408__$1 = (function (){var statearr_25411 = state_25408;
(statearr_25411[(7)] = inst_25385);

return statearr_25411;
})();
var statearr_25412_25439 = state_25408__$1;
(statearr_25412_25439[(2)] = null);

(statearr_25412_25439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25409 === (4))){
var inst_25388 = (state_25408[(8)]);
var inst_25388__$1 = (state_25408[(2)]);
var inst_25389 = (inst_25388__$1 == null);
var inst_25390 = cljs.core.not.call(null,inst_25389);
var state_25408__$1 = (function (){var statearr_25413 = state_25408;
(statearr_25413[(8)] = inst_25388__$1);

return statearr_25413;
})();
if(inst_25390){
var statearr_25414_25440 = state_25408__$1;
(statearr_25414_25440[(1)] = (5));

} else {
var statearr_25415_25441 = state_25408__$1;
(statearr_25415_25441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25409 === (6))){
var state_25408__$1 = state_25408;
var statearr_25416_25442 = state_25408__$1;
(statearr_25416_25442[(2)] = null);

(statearr_25416_25442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25409 === (3))){
var inst_25405 = (state_25408[(2)]);
var inst_25406 = cljs.core.async.close_BANG_.call(null,out);
var state_25408__$1 = (function (){var statearr_25417 = state_25408;
(statearr_25417[(9)] = inst_25405);

return statearr_25417;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25408__$1,inst_25406);
} else {
if((state_val_25409 === (2))){
var state_25408__$1 = state_25408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25408__$1,(4),ch);
} else {
if((state_val_25409 === (11))){
var inst_25388 = (state_25408[(8)]);
var inst_25397 = (state_25408[(2)]);
var inst_25385 = inst_25388;
var state_25408__$1 = (function (){var statearr_25418 = state_25408;
(statearr_25418[(7)] = inst_25385);

(statearr_25418[(10)] = inst_25397);

return statearr_25418;
})();
var statearr_25419_25443 = state_25408__$1;
(statearr_25419_25443[(2)] = null);

(statearr_25419_25443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25409 === (9))){
var inst_25388 = (state_25408[(8)]);
var state_25408__$1 = state_25408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25408__$1,(11),out,inst_25388);
} else {
if((state_val_25409 === (5))){
var inst_25385 = (state_25408[(7)]);
var inst_25388 = (state_25408[(8)]);
var inst_25392 = cljs.core._EQ_.call(null,inst_25388,inst_25385);
var state_25408__$1 = state_25408;
if(inst_25392){
var statearr_25421_25444 = state_25408__$1;
(statearr_25421_25444[(1)] = (8));

} else {
var statearr_25422_25445 = state_25408__$1;
(statearr_25422_25445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25409 === (10))){
var inst_25400 = (state_25408[(2)]);
var state_25408__$1 = state_25408;
var statearr_25423_25446 = state_25408__$1;
(statearr_25423_25446[(2)] = inst_25400);

(statearr_25423_25446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25409 === (8))){
var inst_25385 = (state_25408[(7)]);
var tmp25420 = inst_25385;
var inst_25385__$1 = tmp25420;
var state_25408__$1 = (function (){var statearr_25424 = state_25408;
(statearr_25424[(7)] = inst_25385__$1);

return statearr_25424;
})();
var statearr_25425_25447 = state_25408__$1;
(statearr_25425_25447[(2)] = null);

(statearr_25425_25447[(1)] = (2));


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
});})(c__15666__auto___25437,out))
;
return ((function (switch__15601__auto__,c__15666__auto___25437,out){
return (function() {
var cljs$core$async$state_machine__15602__auto__ = null;
var cljs$core$async$state_machine__15602__auto____0 = (function (){
var statearr_25429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25429[(0)] = cljs$core$async$state_machine__15602__auto__);

(statearr_25429[(1)] = (1));

return statearr_25429;
});
var cljs$core$async$state_machine__15602__auto____1 = (function (state_25408){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_25408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e25430){if((e25430 instanceof Object)){
var ex__15605__auto__ = e25430;
var statearr_25431_25448 = state_25408;
(statearr_25431_25448[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25449 = state_25408;
state_25408 = G__25449;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$state_machine__15602__auto__ = function(state_25408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15602__auto____1.call(this,state_25408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15602__auto____0;
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15602__auto____1;
return cljs$core$async$state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto___25437,out))
})();
var state__15668__auto__ = (function (){var statearr_25432 = f__15667__auto__.call(null);
(statearr_25432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto___25437);

return statearr_25432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto___25437,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25450 = [];
var len__5619__auto___25520 = arguments.length;
var i__5620__auto___25521 = (0);
while(true){
if((i__5620__auto___25521 < len__5619__auto___25520)){
args25450.push((arguments[i__5620__auto___25521]));

var G__25522 = (i__5620__auto___25521 + (1));
i__5620__auto___25521 = G__25522;
continue;
} else {
}
break;
}

var G__25452 = args25450.length;
switch (G__25452) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25450.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15666__auto___25524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto___25524,out){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto___25524,out){
return (function (state_25490){
var state_val_25491 = (state_25490[(1)]);
if((state_val_25491 === (7))){
var inst_25486 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
var statearr_25492_25525 = state_25490__$1;
(statearr_25492_25525[(2)] = inst_25486);

(statearr_25492_25525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (1))){
var inst_25453 = (new Array(n));
var inst_25454 = inst_25453;
var inst_25455 = (0);
var state_25490__$1 = (function (){var statearr_25493 = state_25490;
(statearr_25493[(7)] = inst_25454);

(statearr_25493[(8)] = inst_25455);

return statearr_25493;
})();
var statearr_25494_25526 = state_25490__$1;
(statearr_25494_25526[(2)] = null);

(statearr_25494_25526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (4))){
var inst_25458 = (state_25490[(9)]);
var inst_25458__$1 = (state_25490[(2)]);
var inst_25459 = (inst_25458__$1 == null);
var inst_25460 = cljs.core.not.call(null,inst_25459);
var state_25490__$1 = (function (){var statearr_25495 = state_25490;
(statearr_25495[(9)] = inst_25458__$1);

return statearr_25495;
})();
if(inst_25460){
var statearr_25496_25527 = state_25490__$1;
(statearr_25496_25527[(1)] = (5));

} else {
var statearr_25497_25528 = state_25490__$1;
(statearr_25497_25528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (15))){
var inst_25480 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
var statearr_25498_25529 = state_25490__$1;
(statearr_25498_25529[(2)] = inst_25480);

(statearr_25498_25529[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (13))){
var state_25490__$1 = state_25490;
var statearr_25499_25530 = state_25490__$1;
(statearr_25499_25530[(2)] = null);

(statearr_25499_25530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (6))){
var inst_25455 = (state_25490[(8)]);
var inst_25476 = (inst_25455 > (0));
var state_25490__$1 = state_25490;
if(cljs.core.truth_(inst_25476)){
var statearr_25500_25531 = state_25490__$1;
(statearr_25500_25531[(1)] = (12));

} else {
var statearr_25501_25532 = state_25490__$1;
(statearr_25501_25532[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (3))){
var inst_25488 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25490__$1,inst_25488);
} else {
if((state_val_25491 === (12))){
var inst_25454 = (state_25490[(7)]);
var inst_25478 = cljs.core.vec.call(null,inst_25454);
var state_25490__$1 = state_25490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25490__$1,(15),out,inst_25478);
} else {
if((state_val_25491 === (2))){
var state_25490__$1 = state_25490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25490__$1,(4),ch);
} else {
if((state_val_25491 === (11))){
var inst_25470 = (state_25490[(2)]);
var inst_25471 = (new Array(n));
var inst_25454 = inst_25471;
var inst_25455 = (0);
var state_25490__$1 = (function (){var statearr_25502 = state_25490;
(statearr_25502[(10)] = inst_25470);

(statearr_25502[(7)] = inst_25454);

(statearr_25502[(8)] = inst_25455);

return statearr_25502;
})();
var statearr_25503_25533 = state_25490__$1;
(statearr_25503_25533[(2)] = null);

(statearr_25503_25533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (9))){
var inst_25454 = (state_25490[(7)]);
var inst_25468 = cljs.core.vec.call(null,inst_25454);
var state_25490__$1 = state_25490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25490__$1,(11),out,inst_25468);
} else {
if((state_val_25491 === (5))){
var inst_25458 = (state_25490[(9)]);
var inst_25463 = (state_25490[(11)]);
var inst_25454 = (state_25490[(7)]);
var inst_25455 = (state_25490[(8)]);
var inst_25462 = (inst_25454[inst_25455] = inst_25458);
var inst_25463__$1 = (inst_25455 + (1));
var inst_25464 = (inst_25463__$1 < n);
var state_25490__$1 = (function (){var statearr_25504 = state_25490;
(statearr_25504[(11)] = inst_25463__$1);

(statearr_25504[(12)] = inst_25462);

return statearr_25504;
})();
if(cljs.core.truth_(inst_25464)){
var statearr_25505_25534 = state_25490__$1;
(statearr_25505_25534[(1)] = (8));

} else {
var statearr_25506_25535 = state_25490__$1;
(statearr_25506_25535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (14))){
var inst_25483 = (state_25490[(2)]);
var inst_25484 = cljs.core.async.close_BANG_.call(null,out);
var state_25490__$1 = (function (){var statearr_25508 = state_25490;
(statearr_25508[(13)] = inst_25483);

return statearr_25508;
})();
var statearr_25509_25536 = state_25490__$1;
(statearr_25509_25536[(2)] = inst_25484);

(statearr_25509_25536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (10))){
var inst_25474 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
var statearr_25510_25537 = state_25490__$1;
(statearr_25510_25537[(2)] = inst_25474);

(statearr_25510_25537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (8))){
var inst_25463 = (state_25490[(11)]);
var inst_25454 = (state_25490[(7)]);
var tmp25507 = inst_25454;
var inst_25454__$1 = tmp25507;
var inst_25455 = inst_25463;
var state_25490__$1 = (function (){var statearr_25511 = state_25490;
(statearr_25511[(7)] = inst_25454__$1);

(statearr_25511[(8)] = inst_25455);

return statearr_25511;
})();
var statearr_25512_25538 = state_25490__$1;
(statearr_25512_25538[(2)] = null);

(statearr_25512_25538[(1)] = (2));


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
});})(c__15666__auto___25524,out))
;
return ((function (switch__15601__auto__,c__15666__auto___25524,out){
return (function() {
var cljs$core$async$state_machine__15602__auto__ = null;
var cljs$core$async$state_machine__15602__auto____0 = (function (){
var statearr_25516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25516[(0)] = cljs$core$async$state_machine__15602__auto__);

(statearr_25516[(1)] = (1));

return statearr_25516;
});
var cljs$core$async$state_machine__15602__auto____1 = (function (state_25490){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_25490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e25517){if((e25517 instanceof Object)){
var ex__15605__auto__ = e25517;
var statearr_25518_25539 = state_25490;
(statearr_25518_25539[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25540 = state_25490;
state_25490 = G__25540;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$state_machine__15602__auto__ = function(state_25490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15602__auto____1.call(this,state_25490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15602__auto____0;
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15602__auto____1;
return cljs$core$async$state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto___25524,out))
})();
var state__15668__auto__ = (function (){var statearr_25519 = f__15667__auto__.call(null);
(statearr_25519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto___25524);

return statearr_25519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto___25524,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25541 = [];
var len__5619__auto___25615 = arguments.length;
var i__5620__auto___25616 = (0);
while(true){
if((i__5620__auto___25616 < len__5619__auto___25615)){
args25541.push((arguments[i__5620__auto___25616]));

var G__25617 = (i__5620__auto___25616 + (1));
i__5620__auto___25616 = G__25617;
continue;
} else {
}
break;
}

var G__25543 = args25541.length;
switch (G__25543) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25541.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15666__auto___25619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15666__auto___25619,out){
return (function (){
var f__15667__auto__ = (function (){var switch__15601__auto__ = ((function (c__15666__auto___25619,out){
return (function (state_25585){
var state_val_25586 = (state_25585[(1)]);
if((state_val_25586 === (7))){
var inst_25581 = (state_25585[(2)]);
var state_25585__$1 = state_25585;
var statearr_25587_25620 = state_25585__$1;
(statearr_25587_25620[(2)] = inst_25581);

(statearr_25587_25620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (1))){
var inst_25544 = [];
var inst_25545 = inst_25544;
var inst_25546 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25585__$1 = (function (){var statearr_25588 = state_25585;
(statearr_25588[(7)] = inst_25546);

(statearr_25588[(8)] = inst_25545);

return statearr_25588;
})();
var statearr_25589_25621 = state_25585__$1;
(statearr_25589_25621[(2)] = null);

(statearr_25589_25621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (4))){
var inst_25549 = (state_25585[(9)]);
var inst_25549__$1 = (state_25585[(2)]);
var inst_25550 = (inst_25549__$1 == null);
var inst_25551 = cljs.core.not.call(null,inst_25550);
var state_25585__$1 = (function (){var statearr_25590 = state_25585;
(statearr_25590[(9)] = inst_25549__$1);

return statearr_25590;
})();
if(inst_25551){
var statearr_25591_25622 = state_25585__$1;
(statearr_25591_25622[(1)] = (5));

} else {
var statearr_25592_25623 = state_25585__$1;
(statearr_25592_25623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (15))){
var inst_25575 = (state_25585[(2)]);
var state_25585__$1 = state_25585;
var statearr_25593_25624 = state_25585__$1;
(statearr_25593_25624[(2)] = inst_25575);

(statearr_25593_25624[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (13))){
var state_25585__$1 = state_25585;
var statearr_25594_25625 = state_25585__$1;
(statearr_25594_25625[(2)] = null);

(statearr_25594_25625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (6))){
var inst_25545 = (state_25585[(8)]);
var inst_25570 = inst_25545.length;
var inst_25571 = (inst_25570 > (0));
var state_25585__$1 = state_25585;
if(cljs.core.truth_(inst_25571)){
var statearr_25595_25626 = state_25585__$1;
(statearr_25595_25626[(1)] = (12));

} else {
var statearr_25596_25627 = state_25585__$1;
(statearr_25596_25627[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (3))){
var inst_25583 = (state_25585[(2)]);
var state_25585__$1 = state_25585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25585__$1,inst_25583);
} else {
if((state_val_25586 === (12))){
var inst_25545 = (state_25585[(8)]);
var inst_25573 = cljs.core.vec.call(null,inst_25545);
var state_25585__$1 = state_25585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25585__$1,(15),out,inst_25573);
} else {
if((state_val_25586 === (2))){
var state_25585__$1 = state_25585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25585__$1,(4),ch);
} else {
if((state_val_25586 === (11))){
var inst_25549 = (state_25585[(9)]);
var inst_25553 = (state_25585[(10)]);
var inst_25563 = (state_25585[(2)]);
var inst_25564 = [];
var inst_25565 = inst_25564.push(inst_25549);
var inst_25545 = inst_25564;
var inst_25546 = inst_25553;
var state_25585__$1 = (function (){var statearr_25597 = state_25585;
(statearr_25597[(7)] = inst_25546);

(statearr_25597[(8)] = inst_25545);

(statearr_25597[(11)] = inst_25565);

(statearr_25597[(12)] = inst_25563);

return statearr_25597;
})();
var statearr_25598_25628 = state_25585__$1;
(statearr_25598_25628[(2)] = null);

(statearr_25598_25628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (9))){
var inst_25545 = (state_25585[(8)]);
var inst_25561 = cljs.core.vec.call(null,inst_25545);
var state_25585__$1 = state_25585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25585__$1,(11),out,inst_25561);
} else {
if((state_val_25586 === (5))){
var inst_25546 = (state_25585[(7)]);
var inst_25549 = (state_25585[(9)]);
var inst_25553 = (state_25585[(10)]);
var inst_25553__$1 = f.call(null,inst_25549);
var inst_25554 = cljs.core._EQ_.call(null,inst_25553__$1,inst_25546);
var inst_25555 = cljs.core.keyword_identical_QMARK_.call(null,inst_25546,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25556 = (inst_25554) || (inst_25555);
var state_25585__$1 = (function (){var statearr_25599 = state_25585;
(statearr_25599[(10)] = inst_25553__$1);

return statearr_25599;
})();
if(cljs.core.truth_(inst_25556)){
var statearr_25600_25629 = state_25585__$1;
(statearr_25600_25629[(1)] = (8));

} else {
var statearr_25601_25630 = state_25585__$1;
(statearr_25601_25630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (14))){
var inst_25578 = (state_25585[(2)]);
var inst_25579 = cljs.core.async.close_BANG_.call(null,out);
var state_25585__$1 = (function (){var statearr_25603 = state_25585;
(statearr_25603[(13)] = inst_25578);

return statearr_25603;
})();
var statearr_25604_25631 = state_25585__$1;
(statearr_25604_25631[(2)] = inst_25579);

(statearr_25604_25631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (10))){
var inst_25568 = (state_25585[(2)]);
var state_25585__$1 = state_25585;
var statearr_25605_25632 = state_25585__$1;
(statearr_25605_25632[(2)] = inst_25568);

(statearr_25605_25632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25586 === (8))){
var inst_25545 = (state_25585[(8)]);
var inst_25549 = (state_25585[(9)]);
var inst_25553 = (state_25585[(10)]);
var inst_25558 = inst_25545.push(inst_25549);
var tmp25602 = inst_25545;
var inst_25545__$1 = tmp25602;
var inst_25546 = inst_25553;
var state_25585__$1 = (function (){var statearr_25606 = state_25585;
(statearr_25606[(7)] = inst_25546);

(statearr_25606[(8)] = inst_25545__$1);

(statearr_25606[(14)] = inst_25558);

return statearr_25606;
})();
var statearr_25607_25633 = state_25585__$1;
(statearr_25607_25633[(2)] = null);

(statearr_25607_25633[(1)] = (2));


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
});})(c__15666__auto___25619,out))
;
return ((function (switch__15601__auto__,c__15666__auto___25619,out){
return (function() {
var cljs$core$async$state_machine__15602__auto__ = null;
var cljs$core$async$state_machine__15602__auto____0 = (function (){
var statearr_25611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25611[(0)] = cljs$core$async$state_machine__15602__auto__);

(statearr_25611[(1)] = (1));

return statearr_25611;
});
var cljs$core$async$state_machine__15602__auto____1 = (function (state_25585){
while(true){
var ret_value__15603__auto__ = (function (){try{while(true){
var result__15604__auto__ = switch__15601__auto__.call(null,state_25585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15604__auto__;
}
break;
}
}catch (e25612){if((e25612 instanceof Object)){
var ex__15605__auto__ = e25612;
var statearr_25613_25634 = state_25585;
(statearr_25613_25634[(5)] = ex__15605__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15603__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25635 = state_25585;
state_25585 = G__25635;
continue;
} else {
return ret_value__15603__auto__;
}
break;
}
});
cljs$core$async$state_machine__15602__auto__ = function(state_25585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15602__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15602__auto____1.call(this,state_25585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15602__auto____0;
cljs$core$async$state_machine__15602__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15602__auto____1;
return cljs$core$async$state_machine__15602__auto__;
})()
;})(switch__15601__auto__,c__15666__auto___25619,out))
})();
var state__15668__auto__ = (function (){var statearr_25614 = f__15667__auto__.call(null);
(statearr_25614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15666__auto___25619);

return statearr_25614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15668__auto__);
});})(c__15666__auto___25619,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
