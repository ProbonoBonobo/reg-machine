// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72549 = arguments.length;
var i__26008__auto___72550 = (0);
while(true){
if((i__26008__auto___72550 < len__26007__auto___72549)){
args__26014__auto__.push((arguments[i__26008__auto___72550]));

var G__72551 = (i__26008__auto___72550 + (1));
i__26008__auto___72550 = G__72551;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq72548){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72548));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72553 = arguments.length;
var i__26008__auto___72554 = (0);
while(true){
if((i__26008__auto___72554 < len__26007__auto___72553)){
args__26014__auto__.push((arguments[i__26008__auto___72554]));

var G__72555 = (i__26008__auto___72554 + (1));
i__26008__auto___72554 = G__72555;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq72552){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72552));
});

var g_QMARK__72556 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_72557 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__72556){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__72556))
,null));
var mkg_72558 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__72556,g_72557){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__72556,g_72557))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__72556,g_72557,mkg_72558){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__72556).call(null,x);
});})(g_QMARK__72556,g_72557,mkg_72558))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__72556,g_72557,mkg_72558){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_72558).call(null,gfn);
});})(g_QMARK__72556,g_72557,mkg_72558))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__72556,g_72557,mkg_72558){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_72557).call(null,generator);
});})(g_QMARK__72556,g_72557,mkg_72558))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__33040__auto___72577 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__33040__auto___72577){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72578 = arguments.length;
var i__26008__auto___72579 = (0);
while(true){
if((i__26008__auto___72579 < len__26007__auto___72578)){
args__26014__auto__.push((arguments[i__26008__auto___72579]));

var G__72580 = (i__26008__auto___72579 + (1));
i__26008__auto___72579 = G__72580;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72577))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72577){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72577),args);
});})(g__33040__auto___72577))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__33040__auto___72577){
return (function (seq72559){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72559));
});})(g__33040__auto___72577))
;


var g__33040__auto___72581 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__33040__auto___72581){
return (function cljs$spec$impl$gen$list(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72582 = arguments.length;
var i__26008__auto___72583 = (0);
while(true){
if((i__26008__auto___72583 < len__26007__auto___72582)){
args__26014__auto__.push((arguments[i__26008__auto___72583]));

var G__72584 = (i__26008__auto___72583 + (1));
i__26008__auto___72583 = G__72584;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72581))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72581){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72581),args);
});})(g__33040__auto___72581))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__33040__auto___72581){
return (function (seq72560){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72560));
});})(g__33040__auto___72581))
;


var g__33040__auto___72585 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__33040__auto___72585){
return (function cljs$spec$impl$gen$map(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72586 = arguments.length;
var i__26008__auto___72587 = (0);
while(true){
if((i__26008__auto___72587 < len__26007__auto___72586)){
args__26014__auto__.push((arguments[i__26008__auto___72587]));

var G__72588 = (i__26008__auto___72587 + (1));
i__26008__auto___72587 = G__72588;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72585))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72585){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72585),args);
});})(g__33040__auto___72585))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__33040__auto___72585){
return (function (seq72561){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72561));
});})(g__33040__auto___72585))
;


var g__33040__auto___72589 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__33040__auto___72589){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72590 = arguments.length;
var i__26008__auto___72591 = (0);
while(true){
if((i__26008__auto___72591 < len__26007__auto___72590)){
args__26014__auto__.push((arguments[i__26008__auto___72591]));

var G__72592 = (i__26008__auto___72591 + (1));
i__26008__auto___72591 = G__72592;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72589))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72589){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72589),args);
});})(g__33040__auto___72589))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__33040__auto___72589){
return (function (seq72562){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72562));
});})(g__33040__auto___72589))
;


var g__33040__auto___72593 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__33040__auto___72593){
return (function cljs$spec$impl$gen$set(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72594 = arguments.length;
var i__26008__auto___72595 = (0);
while(true){
if((i__26008__auto___72595 < len__26007__auto___72594)){
args__26014__auto__.push((arguments[i__26008__auto___72595]));

var G__72596 = (i__26008__auto___72595 + (1));
i__26008__auto___72595 = G__72596;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72593))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72593){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72593),args);
});})(g__33040__auto___72593))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__33040__auto___72593){
return (function (seq72563){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72563));
});})(g__33040__auto___72593))
;


var g__33040__auto___72597 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__33040__auto___72597){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72598 = arguments.length;
var i__26008__auto___72599 = (0);
while(true){
if((i__26008__auto___72599 < len__26007__auto___72598)){
args__26014__auto__.push((arguments[i__26008__auto___72599]));

var G__72600 = (i__26008__auto___72599 + (1));
i__26008__auto___72599 = G__72600;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72597))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72597){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72597),args);
});})(g__33040__auto___72597))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__33040__auto___72597){
return (function (seq72564){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72564));
});})(g__33040__auto___72597))
;


var g__33040__auto___72601 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__33040__auto___72601){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72602 = arguments.length;
var i__26008__auto___72603 = (0);
while(true){
if((i__26008__auto___72603 < len__26007__auto___72602)){
args__26014__auto__.push((arguments[i__26008__auto___72603]));

var G__72604 = (i__26008__auto___72603 + (1));
i__26008__auto___72603 = G__72604;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72601))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72601){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72601),args);
});})(g__33040__auto___72601))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__33040__auto___72601){
return (function (seq72565){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72565));
});})(g__33040__auto___72601))
;


var g__33040__auto___72605 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__33040__auto___72605){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72606 = arguments.length;
var i__26008__auto___72607 = (0);
while(true){
if((i__26008__auto___72607 < len__26007__auto___72606)){
args__26014__auto__.push((arguments[i__26008__auto___72607]));

var G__72608 = (i__26008__auto___72607 + (1));
i__26008__auto___72607 = G__72608;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72605))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72605){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72605),args);
});})(g__33040__auto___72605))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__33040__auto___72605){
return (function (seq72566){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72566));
});})(g__33040__auto___72605))
;


var g__33040__auto___72609 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__33040__auto___72609){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72610 = arguments.length;
var i__26008__auto___72611 = (0);
while(true){
if((i__26008__auto___72611 < len__26007__auto___72610)){
args__26014__auto__.push((arguments[i__26008__auto___72611]));

var G__72612 = (i__26008__auto___72611 + (1));
i__26008__auto___72611 = G__72612;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72609))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72609){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72609),args);
});})(g__33040__auto___72609))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__33040__auto___72609){
return (function (seq72567){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72567));
});})(g__33040__auto___72609))
;


var g__33040__auto___72613 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__33040__auto___72613){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72614 = arguments.length;
var i__26008__auto___72615 = (0);
while(true){
if((i__26008__auto___72615 < len__26007__auto___72614)){
args__26014__auto__.push((arguments[i__26008__auto___72615]));

var G__72616 = (i__26008__auto___72615 + (1));
i__26008__auto___72615 = G__72616;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72613))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72613){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72613),args);
});})(g__33040__auto___72613))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__33040__auto___72613){
return (function (seq72568){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72568));
});})(g__33040__auto___72613))
;


var g__33040__auto___72617 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__33040__auto___72617){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72618 = arguments.length;
var i__26008__auto___72619 = (0);
while(true){
if((i__26008__auto___72619 < len__26007__auto___72618)){
args__26014__auto__.push((arguments[i__26008__auto___72619]));

var G__72620 = (i__26008__auto___72619 + (1));
i__26008__auto___72619 = G__72620;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72617))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72617){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72617),args);
});})(g__33040__auto___72617))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__33040__auto___72617){
return (function (seq72569){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72569));
});})(g__33040__auto___72617))
;


var g__33040__auto___72621 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__33040__auto___72621){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72622 = arguments.length;
var i__26008__auto___72623 = (0);
while(true){
if((i__26008__auto___72623 < len__26007__auto___72622)){
args__26014__auto__.push((arguments[i__26008__auto___72623]));

var G__72624 = (i__26008__auto___72623 + (1));
i__26008__auto___72623 = G__72624;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72621))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72621){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72621),args);
});})(g__33040__auto___72621))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__33040__auto___72621){
return (function (seq72570){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72570));
});})(g__33040__auto___72621))
;


var g__33040__auto___72625 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__33040__auto___72625){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72626 = arguments.length;
var i__26008__auto___72627 = (0);
while(true){
if((i__26008__auto___72627 < len__26007__auto___72626)){
args__26014__auto__.push((arguments[i__26008__auto___72627]));

var G__72628 = (i__26008__auto___72627 + (1));
i__26008__auto___72627 = G__72628;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72625))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72625){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72625),args);
});})(g__33040__auto___72625))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__33040__auto___72625){
return (function (seq72571){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72571));
});})(g__33040__auto___72625))
;


var g__33040__auto___72629 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__33040__auto___72629){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72630 = arguments.length;
var i__26008__auto___72631 = (0);
while(true){
if((i__26008__auto___72631 < len__26007__auto___72630)){
args__26014__auto__.push((arguments[i__26008__auto___72631]));

var G__72632 = (i__26008__auto___72631 + (1));
i__26008__auto___72631 = G__72632;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72629))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72629){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72629),args);
});})(g__33040__auto___72629))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__33040__auto___72629){
return (function (seq72572){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72572));
});})(g__33040__auto___72629))
;


var g__33040__auto___72633 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__33040__auto___72633){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72634 = arguments.length;
var i__26008__auto___72635 = (0);
while(true){
if((i__26008__auto___72635 < len__26007__auto___72634)){
args__26014__auto__.push((arguments[i__26008__auto___72635]));

var G__72636 = (i__26008__auto___72635 + (1));
i__26008__auto___72635 = G__72636;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72633))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72633){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72633),args);
});})(g__33040__auto___72633))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__33040__auto___72633){
return (function (seq72573){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72573));
});})(g__33040__auto___72633))
;


var g__33040__auto___72637 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__33040__auto___72637){
return (function cljs$spec$impl$gen$return(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72638 = arguments.length;
var i__26008__auto___72639 = (0);
while(true){
if((i__26008__auto___72639 < len__26007__auto___72638)){
args__26014__auto__.push((arguments[i__26008__auto___72639]));

var G__72640 = (i__26008__auto___72639 + (1));
i__26008__auto___72639 = G__72640;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72637))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72637){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72637),args);
});})(g__33040__auto___72637))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__33040__auto___72637){
return (function (seq72574){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72574));
});})(g__33040__auto___72637))
;


var g__33040__auto___72641 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__33040__auto___72641){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72642 = arguments.length;
var i__26008__auto___72643 = (0);
while(true){
if((i__26008__auto___72643 < len__26007__auto___72642)){
args__26014__auto__.push((arguments[i__26008__auto___72643]));

var G__72644 = (i__26008__auto___72643 + (1));
i__26008__auto___72643 = G__72644;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72641))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72641){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72641),args);
});})(g__33040__auto___72641))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__33040__auto___72641){
return (function (seq72575){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72575));
});})(g__33040__auto___72641))
;


var g__33040__auto___72645 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__33040__auto___72645){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72646 = arguments.length;
var i__26008__auto___72647 = (0);
while(true){
if((i__26008__auto___72647 < len__26007__auto___72646)){
args__26014__auto__.push((arguments[i__26008__auto___72647]));

var G__72648 = (i__26008__auto___72647 + (1));
i__26008__auto___72647 = G__72648;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33040__auto___72645))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33040__auto___72645){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33040__auto___72645),args);
});})(g__33040__auto___72645))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__33040__auto___72645){
return (function (seq72576){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72576));
});})(g__33040__auto___72645))
;

var g__33053__auto___72670 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__33053__auto___72670){
return (function cljs$spec$impl$gen$any(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72671 = arguments.length;
var i__26008__auto___72672 = (0);
while(true){
if((i__26008__auto___72672 < len__26007__auto___72671)){
args__26014__auto__.push((arguments[i__26008__auto___72672]));

var G__72673 = (i__26008__auto___72672 + (1));
i__26008__auto___72672 = G__72673;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72670))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72670){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72670);
});})(g__33053__auto___72670))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__33053__auto___72670){
return (function (seq72649){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72649));
});})(g__33053__auto___72670))
;


var g__33053__auto___72674 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__33053__auto___72674){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72675 = arguments.length;
var i__26008__auto___72676 = (0);
while(true){
if((i__26008__auto___72676 < len__26007__auto___72675)){
args__26014__auto__.push((arguments[i__26008__auto___72676]));

var G__72677 = (i__26008__auto___72676 + (1));
i__26008__auto___72676 = G__72677;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72674))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72674){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72674);
});})(g__33053__auto___72674))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__33053__auto___72674){
return (function (seq72650){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72650));
});})(g__33053__auto___72674))
;


var g__33053__auto___72678 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__33053__auto___72678){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72679 = arguments.length;
var i__26008__auto___72680 = (0);
while(true){
if((i__26008__auto___72680 < len__26007__auto___72679)){
args__26014__auto__.push((arguments[i__26008__auto___72680]));

var G__72681 = (i__26008__auto___72680 + (1));
i__26008__auto___72680 = G__72681;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72678))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72678){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72678);
});})(g__33053__auto___72678))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__33053__auto___72678){
return (function (seq72651){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72651));
});})(g__33053__auto___72678))
;


var g__33053__auto___72682 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__33053__auto___72682){
return (function cljs$spec$impl$gen$char(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72683 = arguments.length;
var i__26008__auto___72684 = (0);
while(true){
if((i__26008__auto___72684 < len__26007__auto___72683)){
args__26014__auto__.push((arguments[i__26008__auto___72684]));

var G__72685 = (i__26008__auto___72684 + (1));
i__26008__auto___72684 = G__72685;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72682))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72682){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72682);
});})(g__33053__auto___72682))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__33053__auto___72682){
return (function (seq72652){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72652));
});})(g__33053__auto___72682))
;


var g__33053__auto___72686 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__33053__auto___72686){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72687 = arguments.length;
var i__26008__auto___72688 = (0);
while(true){
if((i__26008__auto___72688 < len__26007__auto___72687)){
args__26014__auto__.push((arguments[i__26008__auto___72688]));

var G__72689 = (i__26008__auto___72688 + (1));
i__26008__auto___72688 = G__72689;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72686))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72686){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72686);
});})(g__33053__auto___72686))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__33053__auto___72686){
return (function (seq72653){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72653));
});})(g__33053__auto___72686))
;


var g__33053__auto___72690 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__33053__auto___72690){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72691 = arguments.length;
var i__26008__auto___72692 = (0);
while(true){
if((i__26008__auto___72692 < len__26007__auto___72691)){
args__26014__auto__.push((arguments[i__26008__auto___72692]));

var G__72693 = (i__26008__auto___72692 + (1));
i__26008__auto___72692 = G__72693;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72690))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72690){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72690);
});})(g__33053__auto___72690))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__33053__auto___72690){
return (function (seq72654){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72654));
});})(g__33053__auto___72690))
;


var g__33053__auto___72694 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__33053__auto___72694){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72695 = arguments.length;
var i__26008__auto___72696 = (0);
while(true){
if((i__26008__auto___72696 < len__26007__auto___72695)){
args__26014__auto__.push((arguments[i__26008__auto___72696]));

var G__72697 = (i__26008__auto___72696 + (1));
i__26008__auto___72696 = G__72697;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72694))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72694){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72694);
});})(g__33053__auto___72694))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__33053__auto___72694){
return (function (seq72655){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72655));
});})(g__33053__auto___72694))
;


var g__33053__auto___72698 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__33053__auto___72698){
return (function cljs$spec$impl$gen$double(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72699 = arguments.length;
var i__26008__auto___72700 = (0);
while(true){
if((i__26008__auto___72700 < len__26007__auto___72699)){
args__26014__auto__.push((arguments[i__26008__auto___72700]));

var G__72701 = (i__26008__auto___72700 + (1));
i__26008__auto___72700 = G__72701;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72698))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72698){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72698);
});})(g__33053__auto___72698))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__33053__auto___72698){
return (function (seq72656){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72656));
});})(g__33053__auto___72698))
;


var g__33053__auto___72702 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__33053__auto___72702){
return (function cljs$spec$impl$gen$int(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72703 = arguments.length;
var i__26008__auto___72704 = (0);
while(true){
if((i__26008__auto___72704 < len__26007__auto___72703)){
args__26014__auto__.push((arguments[i__26008__auto___72704]));

var G__72705 = (i__26008__auto___72704 + (1));
i__26008__auto___72704 = G__72705;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72702))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72702){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72702);
});})(g__33053__auto___72702))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__33053__auto___72702){
return (function (seq72657){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72657));
});})(g__33053__auto___72702))
;


var g__33053__auto___72706 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__33053__auto___72706){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72707 = arguments.length;
var i__26008__auto___72708 = (0);
while(true){
if((i__26008__auto___72708 < len__26007__auto___72707)){
args__26014__auto__.push((arguments[i__26008__auto___72708]));

var G__72709 = (i__26008__auto___72708 + (1));
i__26008__auto___72708 = G__72709;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72706))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72706){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72706);
});})(g__33053__auto___72706))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__33053__auto___72706){
return (function (seq72658){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72658));
});})(g__33053__auto___72706))
;


var g__33053__auto___72710 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__33053__auto___72710){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72711 = arguments.length;
var i__26008__auto___72712 = (0);
while(true){
if((i__26008__auto___72712 < len__26007__auto___72711)){
args__26014__auto__.push((arguments[i__26008__auto___72712]));

var G__72713 = (i__26008__auto___72712 + (1));
i__26008__auto___72712 = G__72713;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72710))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72710){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72710);
});})(g__33053__auto___72710))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__33053__auto___72710){
return (function (seq72659){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72659));
});})(g__33053__auto___72710))
;


var g__33053__auto___72714 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__33053__auto___72714){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72715 = arguments.length;
var i__26008__auto___72716 = (0);
while(true){
if((i__26008__auto___72716 < len__26007__auto___72715)){
args__26014__auto__.push((arguments[i__26008__auto___72716]));

var G__72717 = (i__26008__auto___72716 + (1));
i__26008__auto___72716 = G__72717;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72714))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72714){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72714);
});})(g__33053__auto___72714))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__33053__auto___72714){
return (function (seq72660){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72660));
});})(g__33053__auto___72714))
;


var g__33053__auto___72718 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__33053__auto___72718){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72719 = arguments.length;
var i__26008__auto___72720 = (0);
while(true){
if((i__26008__auto___72720 < len__26007__auto___72719)){
args__26014__auto__.push((arguments[i__26008__auto___72720]));

var G__72721 = (i__26008__auto___72720 + (1));
i__26008__auto___72720 = G__72721;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72718))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72718){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72718);
});})(g__33053__auto___72718))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__33053__auto___72718){
return (function (seq72661){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72661));
});})(g__33053__auto___72718))
;


var g__33053__auto___72722 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__33053__auto___72722){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72723 = arguments.length;
var i__26008__auto___72724 = (0);
while(true){
if((i__26008__auto___72724 < len__26007__auto___72723)){
args__26014__auto__.push((arguments[i__26008__auto___72724]));

var G__72725 = (i__26008__auto___72724 + (1));
i__26008__auto___72724 = G__72725;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72722))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72722){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72722);
});})(g__33053__auto___72722))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__33053__auto___72722){
return (function (seq72662){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72662));
});})(g__33053__auto___72722))
;


var g__33053__auto___72726 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__33053__auto___72726){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72727 = arguments.length;
var i__26008__auto___72728 = (0);
while(true){
if((i__26008__auto___72728 < len__26007__auto___72727)){
args__26014__auto__.push((arguments[i__26008__auto___72728]));

var G__72729 = (i__26008__auto___72728 + (1));
i__26008__auto___72728 = G__72729;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72726))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72726){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72726);
});})(g__33053__auto___72726))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__33053__auto___72726){
return (function (seq72663){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72663));
});})(g__33053__auto___72726))
;


var g__33053__auto___72730 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__33053__auto___72730){
return (function cljs$spec$impl$gen$string(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72731 = arguments.length;
var i__26008__auto___72732 = (0);
while(true){
if((i__26008__auto___72732 < len__26007__auto___72731)){
args__26014__auto__.push((arguments[i__26008__auto___72732]));

var G__72733 = (i__26008__auto___72732 + (1));
i__26008__auto___72732 = G__72733;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72730))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72730){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72730);
});})(g__33053__auto___72730))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__33053__auto___72730){
return (function (seq72664){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72664));
});})(g__33053__auto___72730))
;


var g__33053__auto___72734 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__33053__auto___72734){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72735 = arguments.length;
var i__26008__auto___72736 = (0);
while(true){
if((i__26008__auto___72736 < len__26007__auto___72735)){
args__26014__auto__.push((arguments[i__26008__auto___72736]));

var G__72737 = (i__26008__auto___72736 + (1));
i__26008__auto___72736 = G__72737;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72734))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72734){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72734);
});})(g__33053__auto___72734))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__33053__auto___72734){
return (function (seq72665){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72665));
});})(g__33053__auto___72734))
;


var g__33053__auto___72738 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__33053__auto___72738){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72739 = arguments.length;
var i__26008__auto___72740 = (0);
while(true){
if((i__26008__auto___72740 < len__26007__auto___72739)){
args__26014__auto__.push((arguments[i__26008__auto___72740]));

var G__72741 = (i__26008__auto___72740 + (1));
i__26008__auto___72740 = G__72741;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72738))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72738){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72738);
});})(g__33053__auto___72738))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__33053__auto___72738){
return (function (seq72666){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72666));
});})(g__33053__auto___72738))
;


var g__33053__auto___72742 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__33053__auto___72742){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72743 = arguments.length;
var i__26008__auto___72744 = (0);
while(true){
if((i__26008__auto___72744 < len__26007__auto___72743)){
args__26014__auto__.push((arguments[i__26008__auto___72744]));

var G__72745 = (i__26008__auto___72744 + (1));
i__26008__auto___72744 = G__72745;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72742))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72742){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72742);
});})(g__33053__auto___72742))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__33053__auto___72742){
return (function (seq72667){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72667));
});})(g__33053__auto___72742))
;


var g__33053__auto___72746 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__33053__auto___72746){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72747 = arguments.length;
var i__26008__auto___72748 = (0);
while(true){
if((i__26008__auto___72748 < len__26007__auto___72747)){
args__26014__auto__.push((arguments[i__26008__auto___72748]));

var G__72749 = (i__26008__auto___72748 + (1));
i__26008__auto___72748 = G__72749;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72746))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72746){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72746);
});})(g__33053__auto___72746))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__33053__auto___72746){
return (function (seq72668){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72668));
});})(g__33053__auto___72746))
;


var g__33053__auto___72750 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__33053__auto___72750){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72751 = arguments.length;
var i__26008__auto___72752 = (0);
while(true){
if((i__26008__auto___72752 < len__26007__auto___72751)){
args__26014__auto__.push((arguments[i__26008__auto___72752]));

var G__72753 = (i__26008__auto___72752 + (1));
i__26008__auto___72752 = G__72753;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});})(g__33053__auto___72750))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33053__auto___72750){
return (function (args){
return cljs.core.deref.call(null,g__33053__auto___72750);
});})(g__33053__auto___72750))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__33053__auto___72750){
return (function (seq72669){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72669));
});})(g__33053__auto___72750))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26014__auto__ = [];
var len__26007__auto___72756 = arguments.length;
var i__26008__auto___72757 = (0);
while(true){
if((i__26008__auto___72757 < len__26007__auto___72756)){
args__26014__auto__.push((arguments[i__26008__auto___72757]));

var G__72758 = (i__26008__auto___72757 + (1));
i__26008__auto___72757 = G__72758;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__72754_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__72754_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq72755){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72755));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__72759_SHARP_){
return (new Date(p1__72759_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1479784478986