// Compiled by ClojureScript 1.9.227 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36556 = arguments.length;
var i__25827__auto___36557 = (0);
while(true){
if((i__25827__auto___36557 < len__25826__auto___36556)){
args__25833__auto__.push((arguments[i__25827__auto___36557]));

var G__36558 = (i__25827__auto___36557 + (1));
i__25827__auto___36557 = G__36558;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__25585__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})());
var G__36559 = threaded;
var G__36560 = cljs.core.next.call(null,forms__$1);
x__$1 = G__36559;
forms__$1 = G__36560;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq36552){
var G__36553 = cljs.core.first.call(null,seq36552);
var seq36552__$1 = cljs.core.next.call(null,seq36552);
var G__36554 = cljs.core.first.call(null,seq36552__$1);
var seq36552__$2 = cljs.core.next.call(null,seq36552__$1);
var G__36555 = cljs.core.first.call(null,seq36552__$2);
var seq36552__$3 = cljs.core.next.call(null,seq36552__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__36553,G__36554,G__36555,seq36552__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36565 = arguments.length;
var i__25827__auto___36566 = (0);
while(true){
if((i__25827__auto___36566 < len__25826__auto___36565)){
args__25833__auto__.push((arguments[i__25827__auto___36566]));

var G__36567 = (i__25827__auto___36566 + (1));
i__25827__auto___36566 = G__36567;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__25585__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__25585__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})());
var G__36568 = threaded;
var G__36569 = cljs.core.next.call(null,forms__$1);
x__$1 = G__36568;
forms__$1 = G__36569;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq36561){
var G__36562 = cljs.core.first.call(null,seq36561);
var seq36561__$1 = cljs.core.next.call(null,seq36561);
var G__36563 = cljs.core.first.call(null,seq36561__$1);
var seq36561__$2 = cljs.core.next.call(null,seq36561__$1);
var G__36564 = cljs.core.first.call(null,seq36561__$2);
var seq36561__$3 = cljs.core.next.call(null,seq36561__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__36562,G__36563,G__36564,seq36561__$3);
});


cljs.core$macros.__GT__GT_.cljs$lang$macro = true;
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var args36570 = [];
var len__25826__auto___36578 = arguments.length;
var i__25827__auto___36579 = (0);
while(true){
if((i__25827__auto___36579 < len__25826__auto___36578)){
args36570.push((arguments[i__25827__auto___36579]));

var G__36580 = (i__25827__auto___36579 + (1));
i__25827__auto___36579 = G__36580;
continue;
} else {
}
break;
}

var G__36577 = args36570.length;
switch (G__36577) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args36570.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq36571){
var G__36572 = cljs.core.first.call(null,seq36571);
var seq36571__$1 = cljs.core.next.call(null,seq36571);
var G__36573 = cljs.core.first.call(null,seq36571__$1);
var seq36571__$2 = cljs.core.next.call(null,seq36571__$1);
var G__36574 = cljs.core.first.call(null,seq36571__$2);
var seq36571__$3 = cljs.core.next.call(null,seq36571__$2);
var G__36575 = cljs.core.first.call(null,seq36571__$3);
var seq36571__$4 = cljs.core.next.call(null,seq36571__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__36572,G__36573,G__36574,G__36575,seq36571__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36585 = arguments.length;
var i__25827__auto___36586 = (0);
while(true){
if((i__25827__auto___36586 < len__25826__auto___36585)){
args__25833__auto__.push((arguments[i__25827__auto___36586]));

var G__36587 = (i__25827__auto___36586 + (1));
i__25827__auto___36586 = G__36587;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq36582){
var G__36583 = cljs.core.first.call(null,seq36582);
var seq36582__$1 = cljs.core.next.call(null,seq36582);
var G__36584 = cljs.core.first.call(null,seq36582__$1);
var seq36582__$2 = cljs.core.next.call(null,seq36582__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__36583,G__36584,seq36582__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36591 = arguments.length;
var i__25827__auto___36592 = (0);
while(true){
if((i__25827__auto___36592 < len__25826__auto___36591)){
args__25833__auto__.push((arguments[i__25827__auto___36592]));

var G__36593 = (i__25827__auto___36592 + (1));
i__25827__auto___36592 = G__36593;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__25585__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$2);
})(),x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq36588){
var G__36589 = cljs.core.first.call(null,seq36588);
var seq36588__$1 = cljs.core.next.call(null,seq36588);
var G__36590 = cljs.core.first.call(null,seq36588__$1);
var seq36588__$2 = cljs.core.next.call(null,seq36588__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__36589,G__36590,seq36588__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36598 = arguments.length;
var i__25827__auto___36599 = (0);
while(true){
if((i__25827__auto___36599 < len__25826__auto___36598)){
args__25833__auto__.push((arguments[i__25827__auto___36599]));

var G__36600 = (i__25827__auto___36599 + (1));
i__25827__auto___36599 = G__36600;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__36594_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.vary_meta.call(null,p1__36594_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq36595){
var G__36596 = cljs.core.first.call(null,seq36595);
var seq36595__$1 = cljs.core.next.call(null,seq36595);
var G__36597 = cljs.core.first.call(null,seq36595__$1);
var seq36595__$2 = cljs.core.next.call(null,seq36595__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__36596,G__36597,seq36595__$2);
});


cljs.core$macros.declare.cljs$lang$macro = true;
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36605 = arguments.length;
var i__25827__auto___36606 = (0);
while(true){
if((i__25827__auto___36606 < len__25826__auto___36605)){
args__25833__auto__.push((arguments[i__25827__auto___36606]));

var G__36607 = (i__25827__auto___36606 + (1));
i__25827__auto___36606 = G__36607;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__25585__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq36601){
var G__36602 = cljs.core.first.call(null,seq36601);
var seq36601__$1 = cljs.core.next.call(null,seq36601);
var G__36603 = cljs.core.first.call(null,seq36601__$1);
var seq36601__$2 = cljs.core.next.call(null,seq36601__$1);
var G__36604 = cljs.core.first.call(null,seq36601__$2);
var seq36601__$3 = cljs.core.next.call(null,seq36601__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__36602,G__36603,G__36604,seq36601__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__36608 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__36609 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__36608;
s = G__36609;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,((function (impls){
return (function (p__36614){
var vec__36615 = p__36614;
var t = cljs.core.nth.call(null,vec__36615,(0),null);
var fs = cljs.core.nth.call(null,vec__36615,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__25585__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),fs)));
});})(impls))
,impls))));
});
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36622 = arguments.length;
var i__25827__auto___36623 = (0);
while(true){
if((i__25827__auto___36623 < len__25826__auto___36622)){
args__25833__auto__.push((arguments[i__25827__auto___36623]));

var G__36624 = (i__25827__auto___36623 + (1));
i__25827__auto___36623 = G__36624;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq36618){
var G__36619 = cljs.core.first.call(null,seq36618);
var seq36618__$1 = cljs.core.next.call(null,seq36618);
var G__36620 = cljs.core.first.call(null,seq36618__$1);
var seq36618__$2 = cljs.core.next.call(null,seq36618__$1);
var G__36621 = cljs.core.first.call(null,seq36618__$2);
var seq36618__$3 = cljs.core.next.call(null,seq36618__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__36619,G__36620,G__36621,seq36618__$3);
});


cljs.core$macros.extend_protocol.cljs$lang$macro = true;
cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__36625 = cljs.core.next.call(null,params__$1);
var G__36626 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__36627 = lets;
params__$1 = G__36625;
new_params = G__36626;
lets = G__36627;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__36628 = cljs.core.next.call(null,params__$1);
var G__36629 = cljs.core.conj.call(null,new_params,gparam);
var G__36630 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__36628;
new_params = G__36629;
lets = G__36630;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
break;
}
}
});
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36637 = arguments.length;
var i__25827__auto___36638 = (0);
while(true){
if((i__25827__auto___36638 < len__25826__auto___36637)){
args__25833__auto__.push((arguments[i__25827__auto___36638]));

var G__36639 = (i__25827__auto___36638 + (1));
i__25827__auto___36638 = G__36639;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__25585__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first.call(null,sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__36634 = sig;
var seq__36635 = cljs.core.seq.call(null,vec__36634);
var first__36636 = cljs.core.first.call(null,seq__36635);
var seq__36635__$1 = cljs.core.next.call(null,seq__36635);
var params = first__36636;
var body = seq__36635__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__24751__auto__ = conds;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__25585__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.map.call(null,((function (vec__36634,seq__36635,first__36636,seq__36635__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__25585__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(vec__36634,seq__36635,first__36636,seq__36635__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__36634,seq__36635,first__36636,seq__36635__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__25585__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(vec__36634,seq__36635,first__36636,seq__36635__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq36631){
var G__36632 = cljs.core.first.call(null,seq36631);
var seq36631__$1 = cljs.core.next.call(null,seq36631);
var G__36633 = cljs.core.first.call(null,seq36631__$1);
var seq36631__$2 = cljs.core.next.call(null,seq36631__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__36632,G__36633,seq36631__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36644 = arguments.length;
var i__25827__auto___36645 = (0);
while(true){
if((i__25827__auto___36645 < len__25826__auto___36644)){
args__25833__auto__.push((arguments[i__25827__auto___36645]));

var G__36646 = (i__25827__auto___36645 + (1));
i__25827__auto___36645 = G__36646;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq36640){
var G__36641 = cljs.core.first.call(null,seq36640);
var seq36640__$1 = cljs.core.next.call(null,seq36640);
var G__36642 = cljs.core.first.call(null,seq36640__$1);
var seq36640__$2 = cljs.core.next.call(null,seq36640__$1);
var G__36643 = cljs.core.first.call(null,seq36640__$2);
var seq36640__$3 = cljs.core.next.call(null,seq36640__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__36641,G__36642,G__36643,seq36640__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args36648 = [];
var len__25826__auto___36657 = arguments.length;
var i__25827__auto___36658 = (0);
while(true){
if((i__25827__auto___36658 < len__25826__auto___36657)){
args36648.push((arguments[i__25827__auto___36658]));

var G__36659 = (i__25827__auto___36658 + (1));
i__25827__auto___36658 = G__36659;
continue;
} else {
}
break;
}

var G__36656 = args36648.length;
switch (G__36656) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args36648.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__25845__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__25585__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36647__auto__","temp__36647__auto__",-635565917,null)),(function (){var x__25585__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36647__auto__","temp__36647__auto__",-635565917,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36647__auto__","temp__36647__auto__",-635565917,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq36649){
var G__36650 = cljs.core.first.call(null,seq36649);
var seq36649__$1 = cljs.core.next.call(null,seq36649);
var G__36651 = cljs.core.first.call(null,seq36649__$1);
var seq36649__$2 = cljs.core.next.call(null,seq36649__$1);
var G__36652 = cljs.core.first.call(null,seq36649__$2);
var seq36649__$3 = cljs.core.next.call(null,seq36649__$2);
var G__36653 = cljs.core.first.call(null,seq36649__$3);
var seq36649__$4 = cljs.core.next.call(null,seq36649__$3);
var G__36654 = cljs.core.first.call(null,seq36649__$4);
var seq36649__$5 = cljs.core.next.call(null,seq36649__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__36650,G__36651,G__36652,G__36653,G__36654,seq36649__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args36661 = [];
var len__25826__auto___36664 = arguments.length;
var i__25827__auto___36665 = (0);
while(true){
if((i__25827__auto___36665 < len__25826__auto___36664)){
args36661.push((arguments[i__25827__auto___36665]));

var G__36666 = (i__25827__auto___36665 + (1));
i__25827__auto___36665 = G__36666;
continue;
} else {
}
break;
}

var G__36663 = args36661.length;
switch (G__36663) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args36661.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25585__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__25585__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;


cljs.core$macros.if_not.cljs$lang$macro = true;
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36673 = arguments.length;
var i__25827__auto___36674 = (0);
while(true){
if((i__25827__auto___36674 < len__25826__auto___36673)){
args__25833__auto__.push((arguments[i__25827__auto___36674]));

var G__36675 = (i__25827__auto___36674 + (1));
i__25827__auto___36674 = G__36675;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__36668_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__36668_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq36669){
var G__36670 = cljs.core.first.call(null,seq36669);
var seq36669__$1 = cljs.core.next.call(null,seq36669);
var G__36671 = cljs.core.first.call(null,seq36669__$1);
var seq36669__$2 = cljs.core.next.call(null,seq36669__$1);
var G__36672 = cljs.core.first.call(null,seq36669__$2);
var seq36669__$3 = cljs.core.next.call(null,seq36669__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__36670,G__36671,G__36672,seq36669__$3);
});


cljs.core$macros.letfn.cljs$lang$macro = true;
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a Java method as
 *   a first-class fn. name may be type-hinted with the method receiver's
 *   type in order to avoid reflective calls.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36680 = arguments.length;
var i__25827__auto___36681 = (0);
while(true){
if((i__25827__auto___36681 < len__25826__auto___36680)){
args__25833__auto__.push((arguments[i__25827__auto___36681]));

var G__36682 = (i__25827__auto___36681 + (1));
i__25827__auto___36681 = G__36682;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq36676){
var G__36677 = cljs.core.first.call(null,seq36676);
var seq36676__$1 = cljs.core.next.call(null,seq36676);
var G__36678 = cljs.core.first.call(null,seq36676__$1);
var seq36676__$2 = cljs.core.next.call(null,seq36676__$1);
var G__36679 = cljs.core.first.call(null,seq36676__$2);
var seq36676__$3 = cljs.core.next.call(null,seq36676__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__36677,G__36678,G__36679,seq36676__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36687 = arguments.length;
var i__25827__auto___36688 = (0);
while(true){
if((i__25827__auto___36688 < len__25826__auto___36687)){
args__25833__auto__.push((arguments[i__25827__auto___36688]));

var G__36689 = (i__25827__auto___36688 + (1));
i__25827__auto___36688 = G__36689;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq36683){
var G__36684 = cljs.core.first.call(null,seq36683);
var seq36683__$1 = cljs.core.next.call(null,seq36683);
var G__36685 = cljs.core.first.call(null,seq36683__$1);
var seq36683__$2 = cljs.core.next.call(null,seq36683__$1);
var G__36686 = cljs.core.first.call(null,seq36683__$2);
var seq36683__$3 = cljs.core.next.call(null,seq36683__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__36684,G__36685,G__36686,seq36683__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36698 = arguments.length;
var i__25827__auto___36699 = (0);
while(true){
if((i__25827__auto___36699 < len__25826__auto___36698)){
args__25833__auto__.push((arguments[i__25827__auto___36699]));

var G__36700 = (i__25827__auto___36699 + (1));
i__25827__auto___36699 = G__36700;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__36695 = bindings;
var x = cljs.core.nth.call(null,vec__36695,(0),null);
var xs = cljs.core.nth.call(null,vec__36695,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__36690__auto__","xs__36690__auto__",-1538944171,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25585__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__36690__auto__","xs__36690__auto__",-1538944171,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq36691){
var G__36692 = cljs.core.first.call(null,seq36691);
var seq36691__$1 = cljs.core.next.call(null,seq36691);
var G__36693 = cljs.core.first.call(null,seq36691__$1);
var seq36691__$2 = cljs.core.next.call(null,seq36691__$1);
var G__36694 = cljs.core.first.call(null,seq36691__$2);
var seq36691__$3 = cljs.core.next.call(null,seq36691__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__36692,G__36693,G__36694,seq36691__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36706 = arguments.length;
var i__25827__auto___36707 = (0);
while(true){
if((i__25827__auto___36707 < len__25826__auto___36706)){
args__25833__auto__.push((arguments[i__25827__auto___36707]));

var G__36708 = (i__25827__auto___36707 + (1));
i__25827__auto___36707 = G__36708;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36701__auto__","temp__36701__auto__",1528089847,null)),(function (){var x__25585__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36701__auto__","temp__36701__auto__",1528089847,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36701__auto__","temp__36701__auto__",1528089847,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq36702){
var G__36703 = cljs.core.first.call(null,seq36702);
var seq36702__$1 = cljs.core.next.call(null,seq36702);
var G__36704 = cljs.core.first.call(null,seq36702__$1);
var seq36702__$2 = cljs.core.next.call(null,seq36702__$1);
var G__36705 = cljs.core.first.call(null,seq36702__$2);
var seq36702__$3 = cljs.core.next.call(null,seq36702__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__36703,G__36704,G__36705,seq36702__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36713 = arguments.length;
var i__25827__auto___36714 = (0);
while(true){
if((i__25827__auto___36714 < len__25826__auto___36713)){
args__25833__auto__.push((arguments[i__25827__auto___36714]));

var G__36715 = (i__25827__auto___36714 + (1));
i__25827__auto___36714 = G__36715;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),null),x__25585__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq36709){
var G__36710 = cljs.core.first.call(null,seq36709);
var seq36709__$1 = cljs.core.next.call(null,seq36709);
var G__36711 = cljs.core.first.call(null,seq36709__$1);
var seq36709__$2 = cljs.core.next.call(null,seq36709__$1);
var G__36712 = cljs.core.first.call(null,seq36709__$2);
var seq36709__$3 = cljs.core.next.call(null,seq36709__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__36710,G__36711,G__36712,seq36709__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36720 = arguments.length;
var i__25827__auto___36721 = (0);
while(true){
if((i__25827__auto___36721 < len__25826__auto___36720)){
args__25833__auto__.push((arguments[i__25827__auto___36721]));

var G__36722 = (i__25827__auto___36721 + (1));
i__25827__auto___36721 = G__36722;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25585__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body,(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq36716){
var G__36717 = cljs.core.first.call(null,seq36716);
var seq36716__$1 = cljs.core.next.call(null,seq36716);
var G__36718 = cljs.core.first.call(null,seq36716__$1);
var seq36716__$2 = cljs.core.next.call(null,seq36716__$1);
var G__36719 = cljs.core.first.call(null,seq36716__$2);
var seq36716__$3 = cljs.core.next.call(null,seq36716__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__36717,G__36718,G__36719,seq36716__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36731 = arguments.length;
var i__25827__auto___36732 = (0);
while(true){
if((i__25827__auto___36732 < len__25826__auto___36731)){
args__25833__auto__.push((arguments[i__25827__auto___36732]));

var G__36733 = (i__25827__auto___36732 + (1));
i__25827__auto___36732 = G__36733;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__36727){
var vec__36728 = p__36727;
var test = cljs.core.nth.call(null,vec__36728,(0),null);
var step = cljs.core.nth.call(null,vec__36728,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__25585__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq36723){
var G__36724 = cljs.core.first.call(null,seq36723);
var seq36723__$1 = cljs.core.next.call(null,seq36723);
var G__36725 = cljs.core.first.call(null,seq36723__$1);
var seq36723__$2 = cljs.core.next.call(null,seq36723__$1);
var G__36726 = cljs.core.first.call(null,seq36723__$2);
var seq36723__$3 = cljs.core.next.call(null,seq36723__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__36724,G__36725,G__36726,seq36723__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36742 = arguments.length;
var i__25827__auto___36743 = (0);
while(true){
if((i__25827__auto___36743 < len__25826__auto___36742)){
args__25833__auto__.push((arguments[i__25827__auto___36743]));

var G__36744 = (i__25827__auto___36743 + (1));
i__25827__auto___36743 = G__36744;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__36738){
var vec__36739 = p__36738;
var test = cljs.core.nth.call(null,vec__36739,(0),null);
var step = cljs.core.nth.call(null,vec__36739,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__25585__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq36734){
var G__36735 = cljs.core.first.call(null,seq36734);
var seq36734__$1 = cljs.core.next.call(null,seq36734);
var G__36736 = cljs.core.first.call(null,seq36734__$1);
var seq36734__$2 = cljs.core.next.call(null,seq36734__$1);
var G__36737 = cljs.core.first.call(null,seq36734__$2);
var seq36734__$3 = cljs.core.next.call(null,seq36734__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__36735,G__36736,G__36737,seq36734__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36750 = arguments.length;
var i__25827__auto___36751 = (0);
while(true){
if((i__25827__auto___36751 < len__25826__auto___36750)){
args__25833__auto__.push((arguments[i__25827__auto___36751]));

var G__36752 = (i__25827__auto___36751 + (1));
i__25827__auto___36751 = G__36752;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((4) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25834__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq36745){
var G__36746 = cljs.core.first.call(null,seq36745);
var seq36745__$1 = cljs.core.next.call(null,seq36745);
var G__36747 = cljs.core.first.call(null,seq36745__$1);
var seq36745__$2 = cljs.core.next.call(null,seq36745__$1);
var G__36748 = cljs.core.first.call(null,seq36745__$2);
var seq36745__$3 = cljs.core.next.call(null,seq36745__$2);
var G__36749 = cljs.core.first.call(null,seq36745__$3);
var seq36745__$4 = cljs.core.next.call(null,seq36745__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__36746,G__36747,G__36748,G__36749,seq36745__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36757 = arguments.length;
var i__25827__auto___36758 = (0);
while(true){
if((i__25827__auto___36758 < len__25826__auto___36757)){
args__25833__auto__.push((arguments[i__25827__auto___36758]));

var G__36759 = (i__25827__auto___36758 + (1));
i__25827__auto___36758 = G__36759;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25585__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__25585__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq36753){
var G__36754 = cljs.core.first.call(null,seq36753);
var seq36753__$1 = cljs.core.next.call(null,seq36753);
var G__36755 = cljs.core.first.call(null,seq36753__$1);
var seq36753__$2 = cljs.core.next.call(null,seq36753__$1);
var G__36756 = cljs.core.first.call(null,seq36753__$2);
var seq36753__$3 = cljs.core.next.call(null,seq36753__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__36754,G__36755,G__36756,seq36753__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36764 = arguments.length;
var i__25827__auto___36765 = (0);
while(true){
if((i__25827__auto___36765 < len__25826__auto___36764)){
args__25833__auto__.push((arguments[i__25827__auto___36765]));

var G__36766 = (i__25827__auto___36765 + (1));
i__25827__auto___36765 = G__36766;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25585__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__25585__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq36760){
var G__36761 = cljs.core.first.call(null,seq36760);
var seq36760__$1 = cljs.core.next.call(null,seq36760);
var G__36762 = cljs.core.first.call(null,seq36760__$1);
var seq36760__$2 = cljs.core.next.call(null,seq36760__$1);
var G__36763 = cljs.core.first.call(null,seq36760__$2);
var seq36760__$3 = cljs.core.next.call(null,seq36760__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__36761,G__36762,G__36763,seq36760__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args36768 = [];
var len__25826__auto___36777 = arguments.length;
var i__25827__auto___36778 = (0);
while(true){
if((i__25827__auto___36778 < len__25826__auto___36777)){
args36768.push((arguments[i__25827__auto___36778]));

var G__36779 = (i__25827__auto___36778 + (1));
i__25827__auto___36778 = G__36779;
continue;
} else {
}
break;
}

var G__36776 = args36768.length;
switch (G__36776) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args36768.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__25845__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__25585__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36767__auto__","temp__36767__auto__",-1088701682,null)),(function (){var x__25585__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36767__auto__","temp__36767__auto__",-1088701682,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36767__auto__","temp__36767__auto__",-1088701682,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq36769){
var G__36770 = cljs.core.first.call(null,seq36769);
var seq36769__$1 = cljs.core.next.call(null,seq36769);
var G__36771 = cljs.core.first.call(null,seq36769__$1);
var seq36769__$2 = cljs.core.next.call(null,seq36769__$1);
var G__36772 = cljs.core.first.call(null,seq36769__$2);
var seq36769__$3 = cljs.core.next.call(null,seq36769__$2);
var G__36773 = cljs.core.first.call(null,seq36769__$3);
var seq36769__$4 = cljs.core.next.call(null,seq36769__$3);
var G__36774 = cljs.core.first.call(null,seq36769__$4);
var seq36769__$5 = cljs.core.next.call(null,seq36769__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__36770,G__36771,G__36772,G__36773,G__36774,seq36769__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_some.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36786 = arguments.length;
var i__25827__auto___36787 = (0);
while(true){
if((i__25827__auto___36787 < len__25826__auto___36786)){
args__25833__auto__.push((arguments[i__25827__auto___36787]));

var G__36788 = (i__25827__auto___36787 + (1));
i__25827__auto___36787 = G__36788;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36781__auto__","temp__36781__auto__",420480223,null)),(function (){var x__25585__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36781__auto__","temp__36781__auto__",420480223,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36781__auto__","temp__36781__auto__",420480223,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq36782){
var G__36783 = cljs.core.first.call(null,seq36782);
var seq36782__$1 = cljs.core.next.call(null,seq36782);
var G__36784 = cljs.core.first.call(null,seq36782__$1);
var seq36782__$2 = cljs.core.next.call(null,seq36782__$1);
var G__36785 = cljs.core.first.call(null,seq36782__$2);
var seq36782__$3 = cljs.core.next.call(null,seq36782__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__36783,G__36784,G__36785,seq36782__$3);
});


cljs.core$macros.when_some.cljs$lang$macro = true;
/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__36789_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__36789_SHARP_)){
return cljs.core.first.call(null,p1__36789_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__36789_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__36789_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__36790_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__36790_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error([cljs.core.str("Parameter declaration \""),cljs.core.str(cljs.core.first.call(null,bad_args)),cljs.core.str("\" should be a vector")].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__36791 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__36792 = cljs.core.next.call(null,fdecls);
ret = G__36791;
fdecls = G__36792;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__25585__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.defonce.cljs$lang$macro = true;
cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var gseq = cljs.core.gensym.call(null,"seq__");
var gfirst = cljs.core.gensym.call(null,"first__");
var has_rest = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.call(null,bvec__$1,gvec,val);
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__25585__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__36802 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__36803 = n;
var G__36804 = cljs.core.nnext.call(null,bs);
var G__36805 = true;
ret = G__36802;
n = G__36803;
bs = G__36804;
seen_rest_QMARK_ = G__36805;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__36806 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__25585__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__25585__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__25585__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__36807 = (n + (1));
var G__36808 = cljs.core.next.call(null,bs);
var G__36809 = seen_rest_QMARK_;
ret = G__36806;
n = G__36807;
bs = G__36808;
seen_rest_QMARK_ = G__36809;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__25585__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__25585__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__36793_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__24751__auto__ = mkns;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.namespace.call(null,p1__36793_SHARP_);
}
})(),cljs.core.name.call(null,p1__36793_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__36794_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.symbol.call(null,(function (){var or__24751__auto__ = mkns;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.namespace.call(null,p1__36794_SHARP_);
}
})(),cljs.core.name.call(null,p1__36794_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"strs")){
return cljs.core.assoc.call(null,transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,b__$1));
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__36795_SHARP_,p2__36796_SHARP_){
return cljs.core.assoc.call(null,p1__36795_SHARP_,p2__36796_SHARP_,cljs.core.val.call(null,entry).call(null,p2__36796_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || (bb.cljs$core$INamed$))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__25585__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$2);
})(),x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__25585__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__36810 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__36811 = cljs.core.next.call(null,bes);
ret = G__36810;
bes = G__36811;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error([cljs.core.str("Unsupported binding form: "),cljs.core.str(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__4655__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__36797_SHARP_){
return (cljs.core.first.call(null,p1__36797_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error([cljs.core.str("Unsupported binding key: "),cljs.core.str(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
/**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.call(null,[cljs.core.str(cljs.core._STAR_ns_STAR_),cljs.core.str("/"),cljs.core.str(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__25585__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25585__auto__ = [cljs.core.str("/** @define {"),cljs.core.str(type),cljs.core.str("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__25585__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.goog_define.cljs$lang$macro = true;
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36816 = arguments.length;
var i__25827__auto___36817 = (0);
while(true){
if((i__25827__auto___36817 < len__25826__auto___36816)){
args__25833__auto__.push((arguments[i__25827__auto___36817]));

var G__36818 = (i__25827__auto___36817 + (1));
i__25827__auto___36817 = G__36818;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__25585__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq36812){
var G__36813 = cljs.core.first.call(null,seq36812);
var seq36812__$1 = cljs.core.next.call(null,seq36812);
var G__36814 = cljs.core.first.call(null,seq36812__$1);
var seq36812__$2 = cljs.core.next.call(null,seq36812__$1);
var G__36815 = cljs.core.first.call(null,seq36812__$2);
var seq36812__$3 = cljs.core.next.call(null,seq36812__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__36813,G__36814,G__36815,seq36812__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36827 = arguments.length;
var i__25827__auto___36828 = (0);
while(true){
if((i__25827__auto___36828 < len__25826__auto___36827)){
args__25833__auto__.push((arguments[i__25827__auto___36828]));

var G__36829 = (i__25827__auto___36828 + (1));
i__25827__auto___36828 = G__36829;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__25585__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__36823){
var vec__36824 = p__36823;
var b = cljs.core.nth.call(null,vec__36824,(0),null);
var v = cljs.core.nth.call(null,vec__36824,(1),null);
var g = cljs.core.nth.call(null,vec__36824,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq36819){
var G__36820 = cljs.core.first.call(null,seq36819);
var seq36819__$1 = cljs.core.next.call(null,seq36819);
var G__36821 = cljs.core.first.call(null,seq36819__$1);
var seq36819__$2 = cljs.core.next.call(null,seq36819__$1);
var G__36822 = cljs.core.first.call(null,seq36819__$2);
var seq36819__$3 = cljs.core.next.call(null,seq36819__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__36820,G__36821,G__36822,seq36819__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__36830_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__36830_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__36831){
var vec__36832 = p__36831;
var p = cljs.core.nth.call(null,vec__36832,(0),null);
var b = cljs.core.nth.call(null,vec__36832,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36838 = arguments.length;
var i__25827__auto___36839 = (0);
while(true){
if((i__25827__auto___36839 < len__25826__auto___36838)){
args__25833__auto__.push((arguments[i__25827__auto___36839]));

var G__36840 = (i__25827__auto___36839 + (1));
i__25827__auto___36839 = G__36840;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq36835){
var G__36836 = cljs.core.first.call(null,seq36835);
var seq36835__$1 = cljs.core.next.call(null,seq36835);
var G__36837 = cljs.core.first.call(null,seq36835__$1);
var seq36835__$2 = cljs.core.next.call(null,seq36835__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__36836,G__36837,seq36835__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__24739__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__24739__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__24739__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args36844 = [];
var len__25826__auto___36851 = arguments.length;
var i__25827__auto___36852 = (0);
while(true){
if((i__25827__auto___36852 < len__25826__auto___36851)){
args36844.push((arguments[i__25827__auto___36852]));

var G__36853 = (i__25827__auto___36852 + (1));
i__25827__auto___36852 = G__36853;
continue;
} else {
}
break;
}

var G__36850 = args36844.length;
switch (G__36850) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args36844.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25845__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__36841_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__36841_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__36842_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__36842_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25585__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__36843__auto__","and__36843__auto__",-1810400761,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__36843__auto__","and__36843__auto__",-1810400761,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__36843__auto__","and__36843__auto__",-1810400761,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq36845){
var G__36846 = cljs.core.first.call(null,seq36845);
var seq36845__$1 = cljs.core.next.call(null,seq36845);
var G__36847 = cljs.core.first.call(null,seq36845__$1);
var seq36845__$2 = cljs.core.next.call(null,seq36845__$1);
var G__36848 = cljs.core.first.call(null,seq36845__$2);
var seq36845__$3 = cljs.core.next.call(null,seq36845__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__36846,G__36847,G__36848,seq36845__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);


cljs.core$macros.and.cljs$lang$macro = true;
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var args36858 = [];
var len__25826__auto___36865 = arguments.length;
var i__25827__auto___36866 = (0);
while(true){
if((i__25827__auto___36866 < len__25826__auto___36865)){
args36858.push((arguments[i__25827__auto___36866]));

var G__36867 = (i__25827__auto___36866 + (1));
i__25827__auto___36866 = G__36867;
continue;
} else {
}
break;
}

var G__36864 = args36858.length;
switch (G__36864) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args36858.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25845__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__36855_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__36855_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__36856_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__36856_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25585__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__36857__auto__","or__36857__auto__",-943807359,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__36857__auto__","or__36857__auto__",-943807359,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__36857__auto__","or__36857__auto__",-943807359,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq36859){
var G__36860 = cljs.core.first.call(null,seq36859);
var seq36859__$1 = cljs.core.next.call(null,seq36859);
var G__36861 = cljs.core.first.call(null,seq36859__$1);
var seq36859__$2 = cljs.core.next.call(null,seq36859__$1);
var G__36862 = cljs.core.first.call(null,seq36859__$2);
var seq36859__$3 = cljs.core.next.call(null,seq36859__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__36860,G__36861,G__36862,seq36859__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__25585__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__36873 = clojure.string.split.call(null,comment,/\n/);
var seq__36874 = cljs.core.seq.call(null,vec__36873);
var first__36875 = cljs.core.first.call(null,seq__36874);
var seq__36874__$1 = cljs.core.next.call(null,seq__36874);
var x = first__36875;
var ys = seq__36874__$1;
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__36873,seq__36874,first__36875,seq__36874__$1,x,ys){
return (function (p1__36869_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__36869_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__36873,seq__36874,first__36875,seq__36874__$1,x,ys))
,ys))),cljs.core.str(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str("~{} = /** @type {"),cljs.core.str(t),cljs.core.str("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$2);
})(),x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = [cljs.core.str("/**"),cljs.core.str(comment),cljs.core.str("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__36876__auto__","c__36876__auto__",1813780262,null)),(function (){var x__25585__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__36877__auto__","x__36877__auto__",2002030038,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__36877__auto__","x__36877__auto__",2002030038,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__36876__auto__","c__36876__auto__",1813780262,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args36878 = [];
var len__25826__auto___36886 = arguments.length;
var i__25827__auto___36887 = (0);
while(true){
if((i__25827__auto___36887 < len__25826__auto___36886)){
args36878.push((arguments[i__25827__auto___36887]));

var G__36888 = (i__25827__auto___36887 + (1));
i__25827__auto___36887 = G__36888;
continue;
} else {
}
break;
}

var G__36885 = args36878.length;
switch (G__36885) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args36878.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25585__auto__ = [cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq36879){
var G__36880 = cljs.core.first.call(null,seq36879);
var seq36879__$1 = cljs.core.next.call(null,seq36879);
var G__36881 = cljs.core.first.call(null,seq36879__$1);
var seq36879__$2 = cljs.core.next.call(null,seq36879__$1);
var G__36882 = cljs.core.first.call(null,seq36879__$2);
var seq36879__$3 = cljs.core.next.call(null,seq36879__$2);
var G__36883 = cljs.core.first.call(null,seq36879__$3);
var seq36879__$4 = cljs.core.next.call(null,seq36879__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__36880,G__36881,G__36882,G__36883,seq36879__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args36890 = [];
var len__25826__auto___36899 = arguments.length;
var i__25827__auto___36900 = (0);
while(true){
if((i__25827__auto___36900 < len__25826__auto___36899)){
args36890.push((arguments[i__25827__auto___36900]));

var G__36901 = (i__25827__auto___36900 + (1));
i__25827__auto___36900 = G__36901;
continue;
} else {
}
break;
}

var G__36898 = args36890.length;
switch (G__36898) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args36890.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__25845__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$2);
})(),x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25585__auto__ = [cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq36891){
var G__36892 = cljs.core.first.call(null,seq36891);
var seq36891__$1 = cljs.core.next.call(null,seq36891);
var G__36893 = cljs.core.first.call(null,seq36891__$1);
var seq36891__$2 = cljs.core.next.call(null,seq36891__$1);
var G__36894 = cljs.core.first.call(null,seq36891__$2);
var seq36891__$3 = cljs.core.next.call(null,seq36891__$2);
var G__36895 = cljs.core.first.call(null,seq36891__$3);
var seq36891__$4 = cljs.core.next.call(null,seq36891__$3);
var G__36896 = cljs.core.first.call(null,seq36891__$4);
var seq36891__$5 = cljs.core.next.call(null,seq36891__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__36892,G__36893,G__36894,G__36895,G__36896,seq36891__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args36903 = [];
var len__25826__auto___36911 = arguments.length;
var i__25827__auto___36912 = (0);
while(true){
if((i__25827__auto___36912 < len__25826__auto___36911)){
args36903.push((arguments[i__25827__auto___36912]));

var G__36913 = (i__25827__auto___36912 + (1));
i__25827__auto___36912 = G__36913;
continue;
} else {
}
break;
}

var G__36910 = args36903.length;
switch (G__36910) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args36903.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq36904){
var G__36905 = cljs.core.first.call(null,seq36904);
var seq36904__$1 = cljs.core.next.call(null,seq36904);
var G__36906 = cljs.core.first.call(null,seq36904__$1);
var seq36904__$2 = cljs.core.next.call(null,seq36904__$1);
var G__36907 = cljs.core.first.call(null,seq36904__$2);
var seq36904__$3 = cljs.core.next.call(null,seq36904__$2);
var G__36908 = cljs.core.first.call(null,seq36904__$3);
var seq36904__$4 = cljs.core.next.call(null,seq36904__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__36905,G__36906,G__36907,G__36908,seq36904__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._PLUS_.cljs$lang$macro = true;
cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.byte$.cljs$lang$macro = true;
cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.short$.cljs$lang$macro = true;
cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.float$.cljs$lang$macro = true;
cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.double$.cljs$lang$macro = true;
cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_byte.cljs$lang$macro = true;
cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_char.cljs$lang$macro = true;
cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_short.cljs$lang$macro = true;
cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_float.cljs$lang$macro = true;
cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_double.cljs$lang$macro = true;
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36918 = arguments.length;
var i__25827__auto___36919 = (0);
while(true){
if((i__25827__auto___36919 < len__25826__auto___36918)){
args__25833__auto__.push((arguments[i__25827__auto___36919]));

var G__36920 = (i__25827__auto___36919 + (1));
i__25827__auto___36919 = G__36920;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq36915){
var G__36916 = cljs.core.first.call(null,seq36915);
var seq36915__$1 = cljs.core.next.call(null,seq36915);
var G__36917 = cljs.core.first.call(null,seq36915__$1);
var seq36915__$2 = cljs.core.next.call(null,seq36915__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__36916,G__36917,seq36915__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36924 = arguments.length;
var i__25827__auto___36925 = (0);
while(true){
if((i__25827__auto___36925 < len__25826__auto___36924)){
args__25833__auto__.push((arguments[i__25827__auto___36925]));

var G__36926 = (i__25827__auto___36925 + (1));
i__25827__auto___36925 = G__36926;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq36921){
var G__36922 = cljs.core.first.call(null,seq36921);
var seq36921__$1 = cljs.core.next.call(null,seq36921);
var G__36923 = cljs.core.first.call(null,seq36921__$1);
var seq36921__$2 = cljs.core.next.call(null,seq36921__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__36922,G__36923,seq36921__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36930 = arguments.length;
var i__25827__auto___36931 = (0);
while(true){
if((i__25827__auto___36931 < len__25826__auto___36930)){
args__25833__auto__.push((arguments[i__25827__auto___36931]));

var G__36932 = (i__25827__auto___36931 + (1));
i__25827__auto___36931 = G__36932;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq36927){
var G__36928 = cljs.core.first.call(null,seq36927);
var seq36927__$1 = cljs.core.next.call(null,seq36927);
var G__36929 = cljs.core.first.call(null,seq36927__$1);
var seq36927__$2 = cljs.core.next.call(null,seq36927__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__36928,G__36929,seq36927__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36936 = arguments.length;
var i__25827__auto___36937 = (0);
while(true){
if((i__25827__auto___36937 < len__25826__auto___36936)){
args__25833__auto__.push((arguments[i__25827__auto___36937]));

var G__36938 = (i__25827__auto___36937 + (1));
i__25827__auto___36937 = G__36938;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq36933){
var G__36934 = cljs.core.first.call(null,seq36933);
var seq36933__$1 = cljs.core.next.call(null,seq36933);
var G__36935 = cljs.core.first.call(null,seq36933__$1);
var seq36933__$2 = cljs.core.next.call(null,seq36933__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__36934,G__36935,seq36933__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36942 = arguments.length;
var i__25827__auto___36943 = (0);
while(true){
if((i__25827__auto___36943 < len__25826__auto___36942)){
args__25833__auto__.push((arguments[i__25827__auto___36943]));

var G__36944 = (i__25827__auto___36943 + (1));
i__25827__auto___36943 = G__36944;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq36939){
var G__36940 = cljs.core.first.call(null,seq36939);
var seq36939__$1 = cljs.core.next.call(null,seq36939);
var G__36941 = cljs.core.first.call(null,seq36939__$1);
var seq36939__$2 = cljs.core.next.call(null,seq36939__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__36940,G__36941,seq36939__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mod","cljs.core$macros/mod",2132457375,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36948 = arguments.length;
var i__25827__auto___36949 = (0);
while(true){
if((i__25827__auto___36949 < len__25826__auto___36948)){
args__25833__auto__.push((arguments[i__25827__auto___36949]));

var G__36950 = (i__25827__auto___36949 + (1));
i__25827__auto___36949 = G__36950;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq36945){
var G__36946 = cljs.core.first.call(null,seq36945);
var seq36945__$1 = cljs.core.next.call(null,seq36945);
var G__36947 = cljs.core.first.call(null,seq36945__$1);
var seq36945__$2 = cljs.core.next.call(null,seq36945__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__36946,G__36947,seq36945__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__25833__auto__ = [];
var len__25826__auto___36954 = arguments.length;
var i__25827__auto___36955 = (0);
while(true){
if((i__25827__auto___36955 < len__25826__auto___36954)){
args__25833__auto__.push((arguments[i__25827__auto___36955]));

var G__36956 = (i__25827__auto___36955 + (1));
i__25827__auto___36955 = G__36956;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq36951){
var G__36952 = cljs.core.first.call(null,seq36951);
var seq36951__$1 = cljs.core.next.call(null,seq36951);
var G__36953 = cljs.core.first.call(null,seq36951__$1);
var seq36951__$2 = cljs.core.next.call(null,seq36951__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__36952,G__36953,seq36951__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args36957 = [];
var len__25826__auto___36965 = arguments.length;
var i__25827__auto___36966 = (0);
while(true){
if((i__25827__auto___36966 < len__25826__auto___36965)){
args36957.push((arguments[i__25827__auto___36966]));

var G__36967 = (i__25827__auto___36966 + (1));
i__25827__auto___36966 = G__36967;
continue;
} else {
}
break;
}

var G__36964 = args36957.length;
switch (G__36964) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args36957.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq36958){
var G__36959 = cljs.core.first.call(null,seq36958);
var seq36958__$1 = cljs.core.next.call(null,seq36958);
var G__36960 = cljs.core.first.call(null,seq36958__$1);
var seq36958__$2 = cljs.core.next.call(null,seq36958__$1);
var G__36961 = cljs.core.first.call(null,seq36958__$2);
var seq36958__$3 = cljs.core.next.call(null,seq36958__$2);
var G__36962 = cljs.core.first.call(null,seq36958__$3);
var seq36958__$4 = cljs.core.next.call(null,seq36958__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__36959,G__36960,G__36961,G__36962,seq36958__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args36969 = [];
var len__25826__auto___36977 = arguments.length;
var i__25827__auto___36978 = (0);
while(true){
if((i__25827__auto___36978 < len__25826__auto___36977)){
args36969.push((arguments[i__25827__auto___36978]));

var G__36979 = (i__25827__auto___36978 + (1));
i__25827__auto___36978 = G__36979;
continue;
} else {
}
break;
}

var G__36976 = args36969.length;
switch (G__36976) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args36969.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq36970){
var G__36971 = cljs.core.first.call(null,seq36970);
var seq36970__$1 = cljs.core.next.call(null,seq36970);
var G__36972 = cljs.core.first.call(null,seq36970__$1);
var seq36970__$2 = cljs.core.next.call(null,seq36970__$1);
var G__36973 = cljs.core.first.call(null,seq36970__$2);
var seq36970__$3 = cljs.core.next.call(null,seq36970__$2);
var G__36974 = cljs.core.first.call(null,seq36970__$3);
var seq36970__$4 = cljs.core.next.call(null,seq36970__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__36971,G__36972,G__36973,G__36974,seq36970__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args36981 = [];
var len__25826__auto___36989 = arguments.length;
var i__25827__auto___36990 = (0);
while(true){
if((i__25827__auto___36990 < len__25826__auto___36989)){
args36981.push((arguments[i__25827__auto___36990]));

var G__36991 = (i__25827__auto___36990 + (1));
i__25827__auto___36990 = G__36991;
continue;
} else {
}
break;
}

var G__36988 = args36981.length;
switch (G__36988) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args36981.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq36982){
var G__36983 = cljs.core.first.call(null,seq36982);
var seq36982__$1 = cljs.core.next.call(null,seq36982);
var G__36984 = cljs.core.first.call(null,seq36982__$1);
var seq36982__$2 = cljs.core.next.call(null,seq36982__$1);
var G__36985 = cljs.core.first.call(null,seq36982__$2);
var seq36982__$3 = cljs.core.next.call(null,seq36982__$2);
var G__36986 = cljs.core.first.call(null,seq36982__$3);
var seq36982__$4 = cljs.core.next.call(null,seq36982__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__36983,G__36984,G__36985,G__36986,seq36982__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args36993 = [];
var len__25826__auto___37001 = arguments.length;
var i__25827__auto___37002 = (0);
while(true){
if((i__25827__auto___37002 < len__25826__auto___37001)){
args36993.push((arguments[i__25827__auto___37002]));

var G__37003 = (i__25827__auto___37002 + (1));
i__25827__auto___37002 = G__37003;
continue;
} else {
}
break;
}

var G__37000 = args36993.length;
switch (G__37000) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args36993.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq36994){
var G__36995 = cljs.core.first.call(null,seq36994);
var seq36994__$1 = cljs.core.next.call(null,seq36994);
var G__36996 = cljs.core.first.call(null,seq36994__$1);
var seq36994__$2 = cljs.core.next.call(null,seq36994__$1);
var G__36997 = cljs.core.first.call(null,seq36994__$2);
var seq36994__$3 = cljs.core.next.call(null,seq36994__$2);
var G__36998 = cljs.core.first.call(null,seq36994__$3);
var seq36994__$4 = cljs.core.next.call(null,seq36994__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__36995,G__36996,G__36997,G__36998,seq36994__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args37005 = [];
var len__25826__auto___37013 = arguments.length;
var i__25827__auto___37014 = (0);
while(true){
if((i__25827__auto___37014 < len__25826__auto___37013)){
args37005.push((arguments[i__25827__auto___37014]));

var G__37015 = (i__25827__auto___37014 + (1));
i__25827__auto___37014 = G__37015;
continue;
} else {
}
break;
}

var G__37012 = args37005.length;
switch (G__37012) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37005.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq37006){
var G__37007 = cljs.core.first.call(null,seq37006);
var seq37006__$1 = cljs.core.next.call(null,seq37006);
var G__37008 = cljs.core.first.call(null,seq37006__$1);
var seq37006__$2 = cljs.core.next.call(null,seq37006__$1);
var G__37009 = cljs.core.first.call(null,seq37006__$2);
var seq37006__$3 = cljs.core.next.call(null,seq37006__$2);
var G__37010 = cljs.core.first.call(null,seq37006__$3);
var seq37006__$4 = cljs.core.next.call(null,seq37006__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__37007,G__37008,G__37009,G__37010,seq37006__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args37017 = [];
var len__25826__auto___37025 = arguments.length;
var i__25827__auto___37026 = (0);
while(true){
if((i__25827__auto___37026 < len__25826__auto___37025)){
args37017.push((arguments[i__25827__auto___37026]));

var G__37027 = (i__25827__auto___37026 + (1));
i__25827__auto___37026 = G__37027;
continue;
} else {
}
break;
}

var G__37024 = args37017.length;
switch (G__37024) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37017.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq37018){
var G__37019 = cljs.core.first.call(null,seq37018);
var seq37018__$1 = cljs.core.next.call(null,seq37018);
var G__37020 = cljs.core.first.call(null,seq37018__$1);
var seq37018__$2 = cljs.core.next.call(null,seq37018__$1);
var G__37021 = cljs.core.first.call(null,seq37018__$2);
var seq37018__$3 = cljs.core.next.call(null,seq37018__$2);
var G__37022 = cljs.core.first.call(null,seq37018__$3);
var seq37018__$4 = cljs.core.next.call(null,seq37018__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__37019,G__37020,G__37021,G__37022,seq37018__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args37029 = [];
var len__25826__auto___37037 = arguments.length;
var i__25827__auto___37038 = (0);
while(true){
if((i__25827__auto___37038 < len__25826__auto___37037)){
args37029.push((arguments[i__25827__auto___37038]));

var G__37039 = (i__25827__auto___37038 + (1));
i__25827__auto___37038 = G__37039;
continue;
} else {
}
break;
}

var G__37036 = args37029.length;
switch (G__37036) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37029.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq37030){
var G__37031 = cljs.core.first.call(null,seq37030);
var seq37030__$1 = cljs.core.next.call(null,seq37030);
var G__37032 = cljs.core.first.call(null,seq37030__$1);
var seq37030__$2 = cljs.core.next.call(null,seq37030__$1);
var G__37033 = cljs.core.first.call(null,seq37030__$2);
var seq37030__$3 = cljs.core.next.call(null,seq37030__$2);
var G__37034 = cljs.core.first.call(null,seq37030__$3);
var seq37030__$4 = cljs.core.next.call(null,seq37030__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__37031,G__37032,G__37033,G__37034,seq37030__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args37041 = [];
var len__25826__auto___37049 = arguments.length;
var i__25827__auto___37050 = (0);
while(true){
if((i__25827__auto___37050 < len__25826__auto___37049)){
args37041.push((arguments[i__25827__auto___37050]));

var G__37051 = (i__25827__auto___37050 + (1));
i__25827__auto___37050 = G__37051;
continue;
} else {
}
break;
}

var G__37048 = args37041.length;
switch (G__37048) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37041.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq37042){
var G__37043 = cljs.core.first.call(null,seq37042);
var seq37042__$1 = cljs.core.next.call(null,seq37042);
var G__37044 = cljs.core.first.call(null,seq37042__$1);
var seq37042__$2 = cljs.core.next.call(null,seq37042__$1);
var G__37045 = cljs.core.first.call(null,seq37042__$2);
var seq37042__$3 = cljs.core.next.call(null,seq37042__$2);
var G__37046 = cljs.core.first.call(null,seq37042__$3);
var seq37042__$4 = cljs.core.next.call(null,seq37042__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__37043,G__37044,G__37045,G__37046,seq37042__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args37053 = [];
var len__25826__auto___37061 = arguments.length;
var i__25827__auto___37062 = (0);
while(true){
if((i__25827__auto___37062 < len__25826__auto___37061)){
args37053.push((arguments[i__25827__auto___37062]));

var G__37063 = (i__25827__auto___37062 + (1));
i__25827__auto___37062 = G__37063;
continue;
} else {
}
break;
}

var G__37060 = args37053.length;
switch (G__37060) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37053.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq37054){
var G__37055 = cljs.core.first.call(null,seq37054);
var seq37054__$1 = cljs.core.next.call(null,seq37054);
var G__37056 = cljs.core.first.call(null,seq37054__$1);
var seq37054__$2 = cljs.core.next.call(null,seq37054__$1);
var G__37057 = cljs.core.first.call(null,seq37054__$2);
var seq37054__$3 = cljs.core.next.call(null,seq37054__$2);
var G__37058 = cljs.core.first.call(null,seq37054__$3);
var seq37054__$4 = cljs.core.next.call(null,seq37054__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__37055,G__37056,G__37057,G__37058,seq37054__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args37067 = [];
var len__25826__auto___37075 = arguments.length;
var i__25827__auto___37076 = (0);
while(true){
if((i__25827__auto___37076 < len__25826__auto___37075)){
args37067.push((arguments[i__25827__auto___37076]));

var G__37077 = (i__25827__auto___37076 + (1));
i__25827__auto___37076 = G__37077;
continue;
} else {
}
break;
}

var G__37074 = args37067.length;
switch (G__37074) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37067.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37065__auto__","x__37065__auto__",-591851784,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__37066__auto__","y__37066__auto__",335786865,null)),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37065__auto__","x__37065__auto__",-591851784,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__37066__auto__","y__37066__auto__",335786865,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37065__auto__","x__37065__auto__",-591851784,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__37066__auto__","y__37066__auto__",335786865,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq37068){
var G__37069 = cljs.core.first.call(null,seq37068);
var seq37068__$1 = cljs.core.next.call(null,seq37068);
var G__37070 = cljs.core.first.call(null,seq37068__$1);
var seq37068__$2 = cljs.core.next.call(null,seq37068__$1);
var G__37071 = cljs.core.first.call(null,seq37068__$2);
var seq37068__$3 = cljs.core.next.call(null,seq37068__$2);
var G__37072 = cljs.core.first.call(null,seq37068__$3);
var seq37068__$4 = cljs.core.next.call(null,seq37068__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__37069,G__37070,G__37071,G__37072,seq37068__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args37081 = [];
var len__25826__auto___37089 = arguments.length;
var i__25827__auto___37090 = (0);
while(true){
if((i__25827__auto___37090 < len__25826__auto___37089)){
args37081.push((arguments[i__25827__auto___37090]));

var G__37091 = (i__25827__auto___37090 + (1));
i__25827__auto___37090 = G__37091;
continue;
} else {
}
break;
}

var G__37088 = args37081.length;
switch (G__37088) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37081.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37079__auto__","x__37079__auto__",1365774128,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__37080__auto__","y__37080__auto__",139857407,null)),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37079__auto__","x__37079__auto__",1365774128,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__37080__auto__","y__37080__auto__",139857407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37079__auto__","x__37079__auto__",1365774128,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__37080__auto__","y__37080__auto__",139857407,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq37082){
var G__37083 = cljs.core.first.call(null,seq37082);
var seq37082__$1 = cljs.core.next.call(null,seq37082);
var G__37084 = cljs.core.first.call(null,seq37082__$1);
var seq37082__$2 = cljs.core.next.call(null,seq37082__$1);
var G__37085 = cljs.core.first.call(null,seq37082__$2);
var seq37082__$3 = cljs.core.next.call(null,seq37082__$2);
var G__37086 = cljs.core.first.call(null,seq37082__$3);
var seq37082__$4 = cljs.core.next.call(null,seq37082__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__37083,G__37084,G__37085,G__37086,seq37082__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args37093 = [];
var len__25826__auto___37101 = arguments.length;
var i__25827__auto___37102 = (0);
while(true){
if((i__25827__auto___37102 < len__25826__auto___37101)){
args37093.push((arguments[i__25827__auto___37102]));

var G__37103 = (i__25827__auto___37102 + (1));
i__25827__auto___37102 = G__37103;
continue;
} else {
}
break;
}

var G__37100 = args37093.length;
switch (G__37100) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37093.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq37094){
var G__37095 = cljs.core.first.call(null,seq37094);
var seq37094__$1 = cljs.core.next.call(null,seq37094);
var G__37096 = cljs.core.first.call(null,seq37094__$1);
var seq37094__$2 = cljs.core.next.call(null,seq37094__$1);
var G__37097 = cljs.core.first.call(null,seq37094__$2);
var seq37094__$3 = cljs.core.next.call(null,seq37094__$2);
var G__37098 = cljs.core.first.call(null,seq37094__$3);
var seq37094__$4 = cljs.core.next.call(null,seq37094__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__37095,G__37096,G__37097,G__37098,seq37094__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args37105 = [];
var len__25826__auto___37113 = arguments.length;
var i__25827__auto___37114 = (0);
while(true){
if((i__25827__auto___37114 < len__25826__auto___37113)){
args37105.push((arguments[i__25827__auto___37114]));

var G__37115 = (i__25827__auto___37114 + (1));
i__25827__auto___37114 = G__37115;
continue;
} else {
}
break;
}

var G__37112 = args37105.length;
switch (G__37112) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37105.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq37106){
var G__37107 = cljs.core.first.call(null,seq37106);
var seq37106__$1 = cljs.core.next.call(null,seq37106);
var G__37108 = cljs.core.first.call(null,seq37106__$1);
var seq37106__$2 = cljs.core.next.call(null,seq37106__$1);
var G__37109 = cljs.core.first.call(null,seq37106__$2);
var seq37106__$3 = cljs.core.next.call(null,seq37106__$2);
var G__37110 = cljs.core.first.call(null,seq37106__$3);
var seq37106__$4 = cljs.core.next.call(null,seq37106__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__37107,G__37108,G__37109,G__37110,seq37106__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args37117 = [];
var len__25826__auto___37125 = arguments.length;
var i__25827__auto___37126 = (0);
while(true){
if((i__25827__auto___37126 < len__25826__auto___37125)){
args37117.push((arguments[i__25827__auto___37126]));

var G__37127 = (i__25827__auto___37126 + (1));
i__25827__auto___37126 = G__37127;
continue;
} else {
}
break;
}

var G__37124 = args37117.length;
switch (G__37124) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37117.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq37118){
var G__37119 = cljs.core.first.call(null,seq37118);
var seq37118__$1 = cljs.core.next.call(null,seq37118);
var G__37120 = cljs.core.first.call(null,seq37118__$1);
var seq37118__$2 = cljs.core.next.call(null,seq37118__$1);
var G__37121 = cljs.core.first.call(null,seq37118__$2);
var seq37118__$3 = cljs.core.next.call(null,seq37118__$2);
var G__37122 = cljs.core.first.call(null,seq37118__$3);
var seq37118__$4 = cljs.core.next.call(null,seq37118__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__37119,G__37120,G__37121,G__37122,seq37118__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args37129 = [];
var len__25826__auto___37137 = arguments.length;
var i__25827__auto___37138 = (0);
while(true){
if((i__25827__auto___37138 < len__25826__auto___37137)){
args37129.push((arguments[i__25827__auto___37138]));

var G__37139 = (i__25827__auto___37138 + (1));
i__25827__auto___37138 = G__37139;
continue;
} else {
}
break;
}

var G__37136 = args37129.length;
switch (G__37136) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37129.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq37130){
var G__37131 = cljs.core.first.call(null,seq37130);
var seq37130__$1 = cljs.core.next.call(null,seq37130);
var G__37132 = cljs.core.first.call(null,seq37130__$1);
var seq37130__$2 = cljs.core.next.call(null,seq37130__$1);
var G__37133 = cljs.core.first.call(null,seq37130__$2);
var seq37130__$3 = cljs.core.next.call(null,seq37130__$2);
var G__37134 = cljs.core.first.call(null,seq37130__$3);
var seq37130__$4 = cljs.core.next.call(null,seq37130__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__37131,G__37132,G__37133,G__37134,seq37130__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args37141 = [];
var len__25826__auto___37149 = arguments.length;
var i__25827__auto___37150 = (0);
while(true){
if((i__25827__auto___37150 < len__25826__auto___37149)){
args37141.push((arguments[i__25827__auto___37150]));

var G__37151 = (i__25827__auto___37150 + (1));
i__25827__auto___37150 = G__37151;
continue;
} else {
}
break;
}

var G__37148 = args37141.length;
switch (G__37148) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37141.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq37142){
var G__37143 = cljs.core.first.call(null,seq37142);
var seq37142__$1 = cljs.core.next.call(null,seq37142);
var G__37144 = cljs.core.first.call(null,seq37142__$1);
var seq37142__$2 = cljs.core.next.call(null,seq37142__$1);
var G__37145 = cljs.core.first.call(null,seq37142__$2);
var seq37142__$3 = cljs.core.next.call(null,seq37142__$2);
var G__37146 = cljs.core.first.call(null,seq37142__$3);
var seq37142__$4 = cljs.core.next.call(null,seq37142__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__37143,G__37144,G__37145,G__37146,seq37142__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__25585__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__37153__auto__","h__37153__auto__",1903090265,null)),(function (){var x__25585__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__37153__auto__","h__37153__auto__",1903090265,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__37153__auto__","h__37153__auto__",1903090265,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__37153__auto__","h__37153__auto__",1903090265,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__37153__auto__","h__37153__auto__",1903090265,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__37153__auto__","h__37153__auto__",1903090265,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__25585__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37154__auto__","x__37154__auto__",1121532971,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37154__auto__","x__37154__auto__",1121532971,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37162 = arguments.length;
var i__25827__auto___37163 = (0);
while(true){
if((i__25827__auto___37163 < len__25826__auto___37162)){
args__25833__auto__.push((arguments[i__25827__auto___37163]));

var G__37164 = (i__25827__auto___37163 + (1));
i__25827__auto___37163 = G__37164;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((6) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__25834__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq37155){
var G__37156 = cljs.core.first.call(null,seq37155);
var seq37155__$1 = cljs.core.next.call(null,seq37155);
var G__37157 = cljs.core.first.call(null,seq37155__$1);
var seq37155__$2 = cljs.core.next.call(null,seq37155__$1);
var G__37158 = cljs.core.first.call(null,seq37155__$2);
var seq37155__$3 = cljs.core.next.call(null,seq37155__$2);
var G__37159 = cljs.core.first.call(null,seq37155__$3);
var seq37155__$4 = cljs.core.next.call(null,seq37155__$3);
var G__37160 = cljs.core.first.call(null,seq37155__$4);
var seq37155__$5 = cljs.core.next.call(null,seq37155__$4);
var G__37161 = cljs.core.first.call(null,seq37155__$5);
var seq37155__$6 = cljs.core.next.call(null,seq37155__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__37156,G__37157,G__37158,G__37159,G__37160,G__37161,seq37155__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = clojure.walk.postwalk.call(null,(function (p1__37165_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__37165_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__37165_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__37165_SHARP_));
} else {
return p1__37165_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__37166,fkv){
var vec__37170 = p__37166;
var f1 = cljs.core.nth.call(null,vec__37170,(0),null);
var k = cljs.core.nth.call(null,vec__37170,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});

cljs.core$macros.rfn.cljs$lang$macro = true;
cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (-seq f)))))
 *   == (\f \o \o))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37176 = arguments.length;
var i__25827__auto___37177 = (0);
while(true){
if((i__25827__auto___37177 < len__25826__auto___37176)){
args__25833__auto__.push((arguments[i__25827__auto___37177]));

var G__37178 = (i__25827__auto___37177 + (1));
i__25827__auto___37177 = G__37178;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str("t_"),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__25585__auto__ = cljs.core.symbol.call(null,[cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__25585__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__25585__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25585__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),locals,(function (){var x__25585__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25585__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),locals,(function (){var x__25585__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq37173){
var G__37174 = cljs.core.first.call(null,seq37173);
var seq37173__$1 = cljs.core.next.call(null,seq37173);
var G__37175 = cljs.core.first.call(null,seq37173__$1);
var seq37173__$2 = cljs.core.next.call(null,seq37173__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__37174,G__37175,seq37173__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37183 = arguments.length;
var i__25827__auto___37184 = (0);
while(true){
if((i__25827__auto___37184 < len__25826__auto___37183)){
args__25833__auto__.push((arguments[i__25827__auto___37184]));

var G__37185 = (i__25827__auto___37184 + (1));
i__25827__auto___37184 = G__37185;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq37179){
var G__37180 = cljs.core.first.call(null,seq37179);
var seq37179__$1 = cljs.core.next.call(null,seq37179);
var G__37181 = cljs.core.first.call(null,seq37179__$1);
var seq37179__$2 = cljs.core.next.call(null,seq37179__$1);
var G__37182 = cljs.core.first.call(null,seq37179__$2);
var seq37179__$3 = cljs.core.next.call(null,seq37179__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37180,G__37181,G__37182,seq37179__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37190 = arguments.length;
var i__25827__auto___37191 = (0);
while(true){
if((i__25827__auto___37191 < len__25826__auto___37190)){
args__25833__auto__.push((arguments[i__25827__auto___37191]));

var G__37192 = (i__25827__auto___37191 + (1));
i__25827__auto___37191 = G__37192;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__25585__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq37186){
var G__37187 = cljs.core.first.call(null,seq37186);
var seq37186__$1 = cljs.core.next.call(null,seq37186);
var G__37188 = cljs.core.first.call(null,seq37186__$1);
var seq37186__$2 = cljs.core.next.call(null,seq37186__$1);
var G__37189 = cljs.core.first.call(null,seq37186__$2);
var seq37186__$3 = cljs.core.next.call(null,seq37186__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__37187,G__37188,G__37189,seq37186__$3);
});


cljs.core$macros.specify.cljs$lang$macro = true;
cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_this.cljs$lang$macro = true;
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37197 = arguments.length;
var i__25827__auto___37198 = (0);
while(true){
if((i__25827__auto___37198 < len__25826__auto___37197)){
args__25833__auto__.push((arguments[i__25827__auto___37198]));

var G__37199 = (i__25827__auto___37198 + (1));
i__25827__auto___37198 = G__37199;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq37193){
var G__37194 = cljs.core.first.call(null,seq37193);
var seq37193__$1 = cljs.core.next.call(null,seq37193);
var G__37195 = cljs.core.first.call(null,seq37193__$1);
var seq37193__$2 = cljs.core.next.call(null,seq37193__$1);
var G__37196 = cljs.core.first.call(null,seq37193__$2);
var seq37193__$3 = cljs.core.next.call(null,seq37193__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__37194,G__37195,G__37196,seq37193__$3);
});


cljs.core$macros.this_as.cljs$lang$macro = true;
cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__4655__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__24739__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__24739__auto__)){
var and__24739__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__24739__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__24739__auto____$1;
}
} else {
return and__24739__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__4655__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__4655__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve: "),cljs.core.str(sym)].join('')),cljs.core.str("\n"),cljs.core.str("ret")].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__37200 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__37201 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__37200;
s = G__37201;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__37202){
var vec__37210 = p__37202;
var p = cljs.core.nth.call(null,vec__37210,(0),null);
var sigs = cljs.core.nth.call(null,vec__37210,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25585__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__37210,p,sigs){
return (function (p__37213){
var vec__37214 = p__37213;
var seq__37215 = cljs.core.seq.call(null,vec__37214);
var first__37216 = cljs.core.first.call(null,seq__37215);
var seq__37215__$1 = cljs.core.next.call(null,seq__37215);
var f = first__37216;
var meths = seq__37215__$1;
var form = vec__37214;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25585__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(psym,pfn_prefix,vec__37210,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__25676__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25677__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25678__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25679__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25680__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__25676__auto__,prefer_table__25677__auto__,method_cache__25678__auto__,cached_hierarchy__25679__auto__,hierarchy__25680__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__25676__auto__,prefer_table__25677__auto__,method_cache__25678__auto__,cached_hierarchy__25679__auto__,hierarchy__25680__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25680__auto__,method_table__25676__auto__,prefer_table__25677__auto__,method_cache__25678__auto__,cached_hierarchy__25679__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__25585__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__25585__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__25585__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__37217){
var vec__37224 = p__37217;
var seq__37225 = cljs.core.seq.call(null,vec__37224);
var first__37226 = cljs.core.first.call(null,seq__37225);
var seq__37225__$1 = cljs.core.next.call(null,seq__37225);
var vec__37227 = first__37226;
var seq__37228 = cljs.core.seq.call(null,vec__37227);
var first__37229 = cljs.core.first.call(null,seq__37228);
var seq__37228__$1 = cljs.core.next.call(null,seq__37228);
var this$ = first__37229;
var args = seq__37228__$1;
var sig = vec__37227;
var body = seq__37225__$1;
var x__25585__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__37230){
var vec__37237 = p__37230;
var seq__37238 = cljs.core.seq.call(null,vec__37237);
var first__37239 = cljs.core.first.call(null,seq__37238);
var seq__37238__$1 = cljs.core.next.call(null,seq__37238);
var vec__37240 = first__37239;
var seq__37241 = cljs.core.seq.call(null,vec__37240);
var first__37242 = cljs.core.first.call(null,seq__37241);
var seq__37241__$1 = cljs.core.next.call(null,seq__37241);
var this$ = first__37242;
var args = seq__37241__$1;
var sig = vec__37240;
var body = seq__37238__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__25585__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__37243){
var vec__37250 = p__37243;
var seq__37251 = cljs.core.seq.call(null,vec__37250);
var first__37252 = cljs.core.first.call(null,seq__37251);
var seq__37251__$1 = cljs.core.next.call(null,seq__37251);
var vec__37253 = first__37252;
var seq__37254 = cljs.core.seq.call(null,vec__37253);
var first__37255 = cljs.core.first.call(null,seq__37254);
var seq__37254__$1 = cljs.core.next.call(null,seq__37254);
var this$ = first__37255;
var args = seq__37254__$1;
var sig = vec__37253;
var body = seq__37251__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__25585__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__37256){
var vec__37263 = p__37256;
var seq__37264 = cljs.core.seq.call(null,vec__37263);
var first__37265 = cljs.core.first.call(null,seq__37264);
var seq__37264__$1 = cljs.core.next.call(null,seq__37264);
var vec__37266 = first__37265;
var seq__37267 = cljs.core.seq.call(null,vec__37266);
var first__37268 = cljs.core.first.call(null,seq__37267);
var seq__37267__$1 = cljs.core.next.call(null,seq__37267);
var this$ = first__37268;
var args = seq__37267__$1;
var sig = vec__37266;
var body = seq__37264__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__25585__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__37277){
var vec__37278 = p__37277;
var seq__37279 = cljs.core.seq.call(null,vec__37278);
var first__37280 = cljs.core.first.call(null,seq__37279);
var seq__37279__$1 = cljs.core.next.call(null,seq__37279);
var f = first__37280;
var meths = seq__37279__$1;
var form = vec__37278;
var vec__37281 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__37281,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__37281,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__37281,f__$1,meths__$1,vec__37278,seq__37279,first__37280,seq__37279__$1,f,meths,form){
return (function (p1__37269_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__37269_SHARP_);
});})(vec__37281,f__$1,meths__$1,vec__37278,seq__37279,first__37280,seq__37279__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__37285){
var vec__37289 = p__37285;
var seq__37290 = cljs.core.seq.call(null,vec__37289);
var first__37291 = cljs.core.first.call(null,seq__37290);
var seq__37290__$1 = cljs.core.next.call(null,seq__37290);
var f = first__37291;
var meths = seq__37290__$1;
var form = vec__37289;
return cljs.core.map.call(null,((function (vec__37289,seq__37290,first__37291,seq__37290__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(vec__37289,seq__37290,first__37291,seq__37290__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__37289,seq__37290,first__37291,seq__37290__$1,f,meths,form){
return (function (p1__37284_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__37284_SHARP_);
});})(vec__37289,seq__37290,first__37291,seq__37290__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__37293){
var vec__37297 = p__37293;
var seq__37298 = cljs.core.seq.call(null,vec__37297);
var first__37299 = cljs.core.first.call(null,seq__37298);
var seq__37298__$1 = cljs.core.next.call(null,seq__37298);
var f = first__37299;
var meths = seq__37298__$1;
var form = vec__37297;
var meths__$1 = cljs.core.map.call(null,((function (vec__37297,seq__37298,first__37299,seq__37298__$1,f,meths,form){
return (function (p1__37292_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__37292_SHARP_);
});})(vec__37297,seq__37298,first__37299,seq__37298__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__25585__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__25585__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__25585__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__25585__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__37300){
var vec__37308 = p__37300;
var seq__37309 = cljs.core.seq.call(null,vec__37308);
var first__37310 = cljs.core.first.call(null,seq__37309);
var seq__37309__$1 = cljs.core.next.call(null,seq__37309);
var f = first__37310;
var meths = seq__37309__$1;
var form = vec__37308;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__37308,seq__37309,first__37310,seq__37309__$1,f,meths,form){
return (function (p__37311){
var vec__37312 = p__37311;
var seq__37313 = cljs.core.seq.call(null,vec__37312);
var first__37314 = cljs.core.first.call(null,seq__37313);
var seq__37313__$1 = cljs.core.next.call(null,seq__37313);
var sig = first__37314;
var body = seq__37313__$1;
var meth = vec__37312;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(pf,vec__37308,seq__37309,first__37310,seq__37309__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__37315){
var vec__37319 = p__37315;
var p = cljs.core.nth.call(null,vec__37319,(0),null);
var sigs = cljs.core.nth.call(null,vec__37319,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__37319,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__37319,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__37325 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__37325,(0),null);
var sigs = cljs.core.nth.call(null,vec__37325,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_37328 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_37328))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([c], true),cljs.core.map.call(null,cljs.core.count,decmeths))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__37329 = cljs.core.next.call(null,sigs__$1);
var G__37330 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__37329;
seen = G__37330;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_37337 = cljs.core.PersistentHashSet.EMPTY;
var methods_37338__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_37338__$1)){
var vec__37334_37339 = cljs.core.first.call(null,methods_37338__$1);
var fname_37340 = cljs.core.nth.call(null,vec__37334_37339,(0),null);
var method_37341 = vec__37334_37339;
if(cljs.core.contains_QMARK_.call(null,seen_37337,fname_37340)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_37340], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_37341);

var G__37342 = cljs.core.conj.call(null,seen_37337,fname_37340);
var G__37343 = cljs.core.next.call(null,methods_37338__$1);
seen_37337 = G__37342;
methods_37338__$1 = G__37343;
continue;
} else {
}
break;
}

var G__37344 = cljs.core.conj.call(null,protos,proto);
var G__37345 = impls__$2;
protos = G__37344;
impls__$1 = G__37345;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y & zs] ...))
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37354 = arguments.length;
var i__25827__auto___37355 = (0);
while(true){
if((i__25827__auto___37355 < len__25826__auto___37354)){
args__25833__auto__.push((arguments[i__25827__auto___37355]));

var G__37356 = (i__25827__auto___37355 + (1));
i__25827__auto___37355 = G__37356;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__37351 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__37351,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__37351,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__24739__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__37351,type,assign_impls){
return (function (p1__37346_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__37346_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__37351,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq37347){
var G__37348 = cljs.core.first.call(null,seq37347);
var seq37347__$1 = cljs.core.next.call(null,seq37347);
var G__37349 = cljs.core.first.call(null,seq37347__$1);
var seq37347__$2 = cljs.core.next.call(null,seq37347__$1);
var G__37350 = cljs.core.first.call(null,seq37347__$2);
var seq37347__$3 = cljs.core.next.call(null,seq37347__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__37348,G__37349,G__37350,seq37347__$3);
});


cljs.core$macros.extend_type.cljs$lang$macro = true;
cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__37358){
var vec__37362 = p__37358;
var f = cljs.core.nth.call(null,vec__37362,(0),null);
var sigs = cljs.core.nth.call(null,vec__37362,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__37362,f,sigs){
return (function (p1__37357_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__37357_SHARP_),cljs.core.nnext.call(null,p1__37357_SHARP_));
});})(vec__37362,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args37365 = [];
var len__25826__auto___37368 = arguments.length;
var i__25827__auto___37369 = (0);
while(true){
if((i__25827__auto___37369 < len__25826__auto___37368)){
args37365.push((arguments[i__25827__auto___37369]));

var G__37370 = (i__25827__auto___37369 + (1));
i__25827__auto___37369 = G__37370;
continue;
} else {
}
break;
}

var G__37367 = args37365.length;
switch (G__37367) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37365.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__37372 = ret__$1;
var G__37373 = specs__$2;
ret = G__37372;
specs__$1 = G__37373;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__37374_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__37374_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__25585__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25585__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str(case$),cljs.core.str(" "),cljs.core.str(name),cljs.core.str(", no fields vector given.")].join('')));
}
});
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37386 = arguments.length;
var i__25827__auto___37387 = (0);
while(true){
if((i__25827__auto___37387 < len__25826__auto___37386)){
args__25833__auto__.push((arguments[i__25827__auto___37387]));

var G__37388 = (i__25827__auto___37387 + (1));
i__25827__auto___37387 = G__37388;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((4) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25834__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__37383 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__37383,(0),null);
var pmasks = cljs.core.nth.call(null,vec__37383,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__25585__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__25585__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__25585__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__25585__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__25585__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__25585__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37375__auto__","this__37375__auto__",235963260,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__37376__auto__","writer__37376__auto__",-1732295451,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__37377__auto__","opt__37377__auto__",-177879547,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__37376__auto__","writer__37376__auto__",-1732295451,null)),(function (){var x__25585__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq37378){
var G__37379 = cljs.core.first.call(null,seq37378);
var seq37378__$1 = cljs.core.next.call(null,seq37378);
var G__37380 = cljs.core.first.call(null,seq37378__$1);
var seq37378__$2 = cljs.core.next.call(null,seq37378__$1);
var G__37381 = cljs.core.first.call(null,seq37378__$2);
var seq37378__$3 = cljs.core.next.call(null,seq37378__$2);
var G__37382 = cljs.core.first.call(null,seq37378__$3);
var seq37378__$4 = cljs.core.next.call(null,seq37378__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__37379,G__37380,G__37381,G__37382,seq37378__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__37389_SHARP_){
return cljs.core.with_meta.call(null,p1__37389_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37390__auto__","this__37390__auto__",1485883041,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25585__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37391__auto__","this__37391__auto__",1222170008,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37391__auto__","this__37391__auto__",1222170008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37392__auto__","this__37392__auto__",-1592185226,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__37393__auto__","other__37393__auto__",-1587664777,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__37393__auto__","other__37393__auto__",-1587664777,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37392__auto__","this__37392__auto__",-1592185226,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__37393__auto__","other__37393__auto__",-1587664777,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37392__auto__","this__37392__auto__",-1592185226,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__37393__auto__","other__37393__auto__",-1587664777,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37394__auto__","this__37394__auto__",-2014905981,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37395__auto__","this__37395__auto__",747050685,null)),(function (){var x__25585__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25585__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37396__auto__","this__37396__auto__",1437170325,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__37397__auto__","k__37397__auto__",878641734,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37396__auto__","this__37396__auto__",1437170325,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__37397__auto__","k__37397__auto__",878641734,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37398__auto__","this__37398__auto__",-1378874179,null)),(function (){var x__25585__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__37399__auto__","else__37399__auto__",1426388567,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__25585__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__25585__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__37399__auto__","else__37399__auto__",1426388567,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37400__auto__","this__37400__auto__",2086524411,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__25585__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37401__auto__","this__37401__auto__",-1851020412,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__37402__auto__","entry__37402__auto__",-932179705,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__37402__auto__","entry__37402__auto__",-932179705,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37401__auto__","this__37401__auto__",-1851020412,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__37402__auto__","entry__37402__auto__",-932179705,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__37402__auto__","entry__37402__auto__",-932179705,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37401__auto__","this__37401__auto__",-1851020412,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__37402__auto__","entry__37402__auto__",-932179705,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37403__auto__","this__37403__auto__",1936721053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__37404__auto__","k__37404__auto__",1765197798,null)),(function (){var x__25585__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__37404__auto__","k__37404__auto__",1765197798,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25585__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__37404__auto__","k__37404__auto__",1765197798,null)),(function (){var x__25585__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37405__auto__","this__37405__auto__",-155720660,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__37406__auto__","k__37406__auto__",1975622686,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__25585__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__37406__auto__","k__37406__auto__",1975622686,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__25585__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37405__auto__","this__37405__auto__",-155720660,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__37406__auto__","k__37406__auto__",1975622686,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25585__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__37406__auto__","k__37406__auto__",1975622686,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37408__auto__","this__37408__auto__",-1735273399,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__37407_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.keyword.call(null,p1__37407_SHARP_);
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = p1__37407_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__25585__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37410__auto__","this__37410__auto__",-1568392758,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__37411__auto__","writer__37411__auto__",2125264979,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__37412__auto__","opts__37412__auto__",-1748607360,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__37413__auto__","pr-pair__37413__auto__",1514186021,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__37414__auto__","keyval__37414__auto__",1802317318,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__37411__auto__","writer__37411__auto__",2125264979,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__37412__auto__","opts__37412__auto__",-1748607360,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__37414__auto__","keyval__37414__auto__",1802317318,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__37411__auto__","writer__37411__auto__",2125264979,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__37413__auto__","pr-pair__37413__auto__",1514186021,null)),(function (){var x__25585__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__37412__auto__","opts__37412__auto__",-1748607360,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__37409_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.keyword.call(null,p1__37409_SHARP_);
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = p1__37409_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())))], null));
var vec__37418 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__37418,(0),null);
var pmasks = cljs.core.nth.call(null,vec__37418,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__25585__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__25585__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__25585__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25585__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__25585__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37428 = arguments.length;
var i__25827__auto___37429 = (0);
while(true){
if((i__25827__auto___37429 < len__25826__auto___37428)){
args__25833__auto__.push((arguments[i__25827__auto___37429]));

var G__37430 = (i__25827__auto___37429 + (1));
i__25827__auto___37429 = G__37430;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((4) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25834__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__25585__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__25585__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__25585__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37421__auto__","this__37421__auto__",-1507973032,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__25585__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__25585__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37421__auto__","this__37421__auto__",-1507973032,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__37422__auto__","writer__37422__auto__",392686173,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__37422__auto__","writer__37422__auto__",392686173,null)),(function (){var x__25585__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq37423){
var G__37424 = cljs.core.first.call(null,seq37423);
var seq37423__$1 = cljs.core.next.call(null,seq37423);
var G__37425 = cljs.core.first.call(null,seq37423__$1);
var seq37423__$2 = cljs.core.next.call(null,seq37423__$1);
var G__37426 = cljs.core.first.call(null,seq37423__$2);
var seq37423__$3 = cljs.core.next.call(null,seq37423__$2);
var G__37427 = cljs.core.first.call(null,seq37423__$3);
var seq37423__$4 = cljs.core.next.call(null,seq37423__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__37424,G__37425,G__37426,G__37427,seq37423__$4);
});


cljs.core$macros.defrecord.cljs$lang$macro = true;
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37458 = arguments.length;
var i__25827__auto___37459 = (0);
while(true){
if((i__25827__auto___37459 < len__25826__auto___37458)){
args__25833__auto__.push((arguments[i__25827__auto___37459]));

var G__37460 = (i__25827__auto___37459 + (1));
i__25827__auto___37459 = G__37460;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__37437 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__37437,(0),null);
var methods$ = cljs.core.nth.call(null,vec__37437,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__37437,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__37437,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__37440 = cljs.core.seq.call(null,methods$);
var chunk__37441 = null;
var count__37442 = (0);
var i__37443 = (0);
while(true){
if((i__37443 < count__37442)){
var vec__37444 = cljs.core._nth.call(null,chunk__37441,i__37443);
var seq__37445 = cljs.core.seq.call(null,vec__37444);
var first__37446 = cljs.core.first.call(null,seq__37445);
var seq__37445__$1 = cljs.core.next.call(null,seq__37445);
var mname = first__37446;
var arities = seq__37445__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__37461 = seq__37440;
var G__37462 = chunk__37441;
var G__37463 = count__37442;
var G__37464 = (i__37443 + (1));
seq__37440 = G__37461;
chunk__37441 = G__37462;
count__37442 = G__37463;
i__37443 = G__37464;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37440);
if(temp__4657__auto__){
var seq__37440__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37440__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__37440__$1);
var G__37465 = cljs.core.chunk_rest.call(null,seq__37440__$1);
var G__37466 = c__25562__auto__;
var G__37467 = cljs.core.count.call(null,c__25562__auto__);
var G__37468 = (0);
seq__37440 = G__37465;
chunk__37441 = G__37466;
count__37442 = G__37467;
i__37443 = G__37468;
continue;
} else {
var vec__37447 = cljs.core.first.call(null,seq__37440__$1);
var seq__37448 = cljs.core.seq.call(null,vec__37447);
var first__37449 = cljs.core.first.call(null,seq__37448);
var seq__37448__$1 = cljs.core.next.call(null,seq__37448);
var mname = first__37449;
var arities = seq__37448__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__37469 = cljs.core.next.call(null,seq__37440__$1);
var G__37470 = null;
var G__37471 = (0);
var G__37472 = (0);
seq__37440 = G__37469;
chunk__37441 = G__37470;
count__37442 = G__37471;
i__37443 = G__37472;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__37437,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = sig;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25585__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37431__auto__","x__37431__auto__",-102734103,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25585__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25585__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__37432__auto__","m__37432__auto__",-1731838370,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25585__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37431__auto__","x__37431__auto__",-102734103,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__37432__auto__","m__37432__auto__",-1731838370,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__37432__auto__","m__37432__auto__",-1731838370,null)),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__37432__auto__","m__37432__auto__",-1731838370,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25585__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__37432__auto__","m__37432__auto__",-1731838370,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__37432__auto__","m__37432__auto__",-1731838370,null)),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__25585__auto__ = [cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(p,vec__37437,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__37437,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__37450){
var vec__37451 = p__37450;
var seq__37452 = cljs.core.seq.call(null,vec__37451);
var first__37453 = cljs.core.first.call(null,seq__37452);
var seq__37452__$1 = cljs.core.next.call(null,seq__37452);
var fname = first__37453;
var sigs = seq__37452__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__37437,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__37437,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__37454){
var vec__37455 = p__37454;
var seq__37456 = cljs.core.seq.call(null,vec__37455);
var first__37457 = cljs.core.first.call(null,seq__37456);
var seq__37456__$1 = cljs.core.next.call(null,seq__37456);
var fname = first__37457;
var sigs = seq__37456__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__25585__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__37455,seq__37456,first__37457,seq__37456__$1,fname,sigs,p,vec__37437,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__37455,seq__37456,first__37457,seq__37456__$1,fname,sigs,p,vec__37437,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__37437,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__25585__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq37433){
var G__37434 = cljs.core.first.call(null,seq37433);
var seq37433__$1 = cljs.core.next.call(null,seq37433);
var G__37435 = cljs.core.first.call(null,seq37433__$1);
var seq37433__$2 = cljs.core.next.call(null,seq37433__$1);
var G__37436 = cljs.core.first.call(null,seq37433__$2);
var seq37433__$3 = cljs.core.next.call(null,seq37433__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__37434,G__37435,G__37436,seq37433__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__37476 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__37476,(0),null);
var bit = cljs.core.nth.call(null,vec__37476,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__25585__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__25585__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;
/**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__37482 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__37482,(0),null);
var bit = cljs.core.nth.call(null,vec__37482,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25585__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__25585__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__25585__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__25585__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__25585__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__25585__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__25585__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
});

cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37488 = arguments.length;
var i__25827__auto___37489 = (0);
while(true){
if((i__25827__auto___37489 < len__25826__auto___37488)){
args__25833__auto__.push((arguments[i__25827__auto___37489]));

var G__37490 = (i__25827__auto___37489 + (1));
i__25827__auto___37489 = G__37490;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq37485){
var G__37486 = cljs.core.first.call(null,seq37485);
var seq37485__$1 = cljs.core.next.call(null,seq37485);
var G__37487 = cljs.core.first.call(null,seq37485__$1);
var seq37485__$2 = cljs.core.next.call(null,seq37485__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__37486,G__37487,seq37485__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37494 = arguments.length;
var i__25827__auto___37495 = (0);
while(true){
if((i__25827__auto___37495 < len__25826__auto___37494)){
args__25833__auto__.push((arguments[i__25827__auto___37495]));

var G__37496 = (i__25827__auto___37495 + (1));
i__25827__auto___37495 = G__37496;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq37491){
var G__37492 = cljs.core.first.call(null,seq37491);
var seq37491__$1 = cljs.core.next.call(null,seq37491);
var G__37493 = cljs.core.first.call(null,seq37491__$1);
var seq37491__$2 = cljs.core.next.call(null,seq37491__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__37492,G__37493,seq37491__$2);
});


cljs.core$macros.delay.cljs$lang$macro = true;
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37505 = arguments.length;
var i__25827__auto___37506 = (0);
while(true){
if((i__25827__auto___37506 < len__25826__auto___37505)){
args__25833__auto__.push((arguments[i__25827__auto___37506]));

var G__37507 = (i__25827__auto___37506 + (1));
i__25827__auto___37506 = G__37507;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__37501){
var vec__37502 = p__37501;
var k = cljs.core.nth.call(null,vec__37502,(0),null);
var v = cljs.core.nth.call(null,vec__37502,(1),null);
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq37497){
var G__37498 = cljs.core.first.call(null,seq37497);
var seq37497__$1 = cljs.core.next.call(null,seq37497);
var G__37499 = cljs.core.first.call(null,seq37497__$1);
var seq37497__$2 = cljs.core.next.call(null,seq37497__$1);
var G__37500 = cljs.core.first.call(null,seq37497__$2);
var seq37497__$3 = cljs.core.next.call(null,seq37497__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__37498,G__37499,G__37500,seq37497__$3);
});


cljs.core$macros.with_redefs.cljs$lang$macro = true;
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37512 = arguments.length;
var i__25827__auto___37513 = (0);
while(true){
if((i__25827__auto___37513 < len__25826__auto___37512)){
args__25833__auto__.push((arguments[i__25827__auto___37513]));

var G__37514 = (i__25827__auto___37513 + (1));
i__25827__auto___37513 = G__37514;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__25585__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq37508){
var G__37509 = cljs.core.first.call(null,seq37508);
var seq37508__$1 = cljs.core.next.call(null,seq37508);
var G__37510 = cljs.core.first.call(null,seq37508__$1);
var seq37508__$2 = cljs.core.next.call(null,seq37508__$1);
var G__37511 = cljs.core.first.call(null,seq37508__$2);
var seq37508__$3 = cljs.core.next.call(null,seq37508__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__37509,G__37510,G__37511,seq37508__$3);
});


cljs.core$macros.binding.cljs$lang$macro = true;
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37533 = arguments.length;
var i__25827__auto___37534 = (0);
while(true){
if((i__25827__auto___37534 < len__25826__auto___37533)){
args__25833__auto__.push((arguments[i__25827__auto___37534]));

var G__37535 = (i__25827__auto___37534 + (1));
i__25827__auto___37534 = G__37535;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((4) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25834__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__37527 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__37530 = cljs.core.nth.call(null,vec__37527,(0),null);
var a = cljs.core.nth.call(null,vec__37530,(0),null);
var b = cljs.core.nth.call(null,vec__37530,(1),null);
var c = cljs.core.nth.call(null,vec__37530,(2),null);
var clause = vec__37530;
var more = cljs.core.nth.call(null,vec__37527,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__25585__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__37515__auto__","p__37515__auto__",-2028609760,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__37515__auto__","p__37515__auto__",-2028609760,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq37516){
var G__37517 = cljs.core.first.call(null,seq37516);
var seq37516__$1 = cljs.core.next.call(null,seq37516);
var G__37518 = cljs.core.first.call(null,seq37516__$1);
var seq37516__$2 = cljs.core.next.call(null,seq37516__$1);
var G__37519 = cljs.core.first.call(null,seq37516__$2);
var seq37516__$3 = cljs.core.next.call(null,seq37516__$2);
var G__37520 = cljs.core.first.call(null,seq37516__$3);
var seq37516__$4 = cljs.core.next.call(null,seq37516__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__37517,G__37518,G__37519,G__37520,seq37516__$4);
});


cljs.core$macros.condp.cljs$lang$macro = true;
cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error([cljs.core.str("Duplicate case test constant '"),cljs.core.str(test),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" on line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__24739__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__24739__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__24739__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37556 = arguments.length;
var i__25827__auto___37557 = (0);
while(true){
if((i__25827__auto___37557 < len__25826__auto___37556)){
args__25833__auto__.push((arguments[i__25827__auto___37557]));

var G__37558 = (i__25827__auto___37557 + (1));
i__25827__auto___37557 = G__37558;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__25585__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__37544){
var vec__37545 = p__37544;
var test = cljs.core.nth.call(null,vec__37545,(0),null);
var expr = cljs.core.nth.call(null,vec__37545,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__37545,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__25585__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__37545,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__25585__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var esym = cljs.core.gensym.call(null);
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (default$,env,pairs,esym,tests){
return (function (p1__37536_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__37536_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__37537_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__37537_SHARP_)){
return cljs.core.vec.call(null,p1__37537_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37537_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__25585__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__37539_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__37539_SHARP_)){
return cljs.core.vec.call(null,p1__37539_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37539_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__37538_SHARP_){
return [cljs.core.str(p1__37538_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__25585__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__25585__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__25585__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__37552){
var vec__37553 = p__37552;
var m = cljs.core.nth.call(null,vec__37553,(0),null);
var c = cljs.core.nth.call(null,vec__37553,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__25585__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__25585__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq37540){
var G__37541 = cljs.core.first.call(null,seq37540);
var seq37540__$1 = cljs.core.next.call(null,seq37540);
var G__37542 = cljs.core.first.call(null,seq37540__$1);
var seq37540__$2 = cljs.core.next.call(null,seq37540__$1);
var G__37543 = cljs.core.first.call(null,seq37540__$2);
var seq37540__$3 = cljs.core.next.call(null,seq37540__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__37541,G__37542,G__37543,seq37540__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args37559 = [];
var len__25826__auto___37562 = arguments.length;
var i__25827__auto___37563 = (0);
while(true){
if((i__25827__auto___37563 < len__25826__auto___37562)){
args37559.push((arguments[i__25827__auto___37563]));

var G__37564 = (i__25827__auto___37563 + (1));
i__25827__auto___37563 = G__37564;
continue;
} else {
}
break;
}

var G__37561 = args37559.length;
switch (G__37561) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args37559.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25585__auto__ = [cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__25585__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__25585__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;


cljs.core$macros.assert.cljs$lang$macro = true;
/**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__37652){
var vec__37653 = p__37652;
var k = cljs.core.nth.call(null,vec__37653,(0),null);
var v = cljs.core.nth.call(null,vec__37653,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__37733__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__37733 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__37734__i = 0, G__37734__a = new Array(arguments.length -  0);
while (G__37734__i < G__37734__a.length) {G__37734__a[G__37734__i] = arguments[G__37734__i + 0]; ++G__37734__i;}
  msg = new cljs.core.IndexedSeq(G__37734__a,0);
} 
return G__37733__delegate.call(this,msg);};
G__37733.cljs$lang$maxFixedArity = 0;
G__37733.cljs$lang$applyTo = (function (arglist__37735){
var msg = cljs.core.seq(arglist__37735);
return G__37733__delegate(msg);
});
G__37733.cljs$core$IFn$_invoke$arity$variadic = G__37733__delegate;
return G__37733;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__37656){
var vec__37695 = p__37656;
var seq__37696 = cljs.core.seq.call(null,vec__37695);
var first__37697 = cljs.core.first.call(null,seq__37696);
var seq__37696__$1 = cljs.core.next.call(null,seq__37696);
var vec__37698 = first__37697;
var seq__37699 = cljs.core.seq.call(null,vec__37698);
var first__37700 = cljs.core.first.call(null,seq__37699);
var seq__37699__$1 = cljs.core.next.call(null,seq__37699);
var bind = first__37700;
var first__37700__$1 = cljs.core.first.call(null,seq__37699__$1);
var seq__37699__$2 = cljs.core.next.call(null,seq__37699__$1);
var expr = first__37700__$1;
var mod_pairs = seq__37699__$2;
var vec__37701 = seq__37696__$1;
var vec__37704 = cljs.core.nth.call(null,vec__37701,(0),null);
var _ = cljs.core.nth.call(null,vec__37704,(0),null);
var next_expr = cljs.core.nth.call(null,vec__37704,(1),null);
var next_groups = vec__37701;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__37695,seq__37696,first__37697,seq__37696__$1,vec__37698,seq__37699,first__37700,seq__37699__$1,bind,first__37700__$1,seq__37699__$2,expr,mod_pairs,vec__37701,vec__37704,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__37707){
var vec__37714 = p__37707;
var seq__37715 = cljs.core.seq.call(null,vec__37714);
var first__37716 = cljs.core.first.call(null,seq__37715);
var seq__37715__$1 = cljs.core.next.call(null,seq__37715);
var vec__37717 = first__37716;
var k = cljs.core.nth.call(null,vec__37717,(0),null);
var v = cljs.core.nth.call(null,vec__37717,(1),null);
var pair = vec__37717;
var etc = seq__37715__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25585__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__37566__auto__","iterys__37566__auto__",-61021325,null)),(function (){var x__25585__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__37567__auto__","fs__37567__auto__",-1385659218,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__37566__auto__","iterys__37566__auto__",-61021325,null)),(function (){var x__25585__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__37567__auto__","fs__37567__auto__",-1385659218,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__37567__auto__","fs__37567__auto__",-1385659218,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__25585__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__37695,seq__37696,first__37697,seq__37696__$1,vec__37698,seq__37699,first__37700,seq__37699__$1,bind,first__37700__$1,seq__37699__$2,expr,mod_pairs,vec__37701,vec__37704,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__37695,seq__37696,first__37697,seq__37696__$1,vec__37698,seq__37699,first__37700,seq__37699__$1,bind,first__37700__$1,seq__37699__$2,expr,mod_pairs,vec__37701,vec__37704,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__37720){
var vec__37727 = p__37720;
var seq__37728 = cljs.core.seq.call(null,vec__37727);
var first__37729 = cljs.core.first.call(null,seq__37728);
var seq__37728__$1 = cljs.core.next.call(null,seq__37728);
var vec__37730 = first__37729;
var k = cljs.core.nth.call(null,vec__37730,(0),null);
var v = cljs.core.nth.call(null,vec__37730,(1),null);
var pair = vec__37730;
var etc = seq__37728__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25585__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__25585__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__25585__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__25585__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__37695,seq__37696,first__37697,seq__37696__$1,vec__37698,seq__37699,first__37700,seq__37699__$1,bind,first__37700__$1,seq__37699__$2,expr,mod_pairs,vec__37701,vec__37704,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__37568__auto__","c__37568__auto__",541712850,null)),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/kevinzeidler/rhizome/reg2/resources/public/cljs/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2314),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2314),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__37569__auto__","size__37569__auto__",-299232564,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__37568__auto__","c__37568__auto__",541712850,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__37569__auto__","size__37569__auto__",-299232564,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25585__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__37569__auto__","size__37569__auto__",-299232564,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__37568__auto__","c__37568__auto__",541712850,null)),(function (){var x__25585__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__25585__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__25585__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__37570__auto__","iter__37570__auto__",-991199587,null)),(function (){var x__25585__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__37570__auto__","iter__37570__auto__",-991199587,null)),(function (){var x__25585__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37741 = arguments.length;
var i__25827__auto___37742 = (0);
while(true){
if((i__25827__auto___37742 < len__25826__auto___37741)){
args__25833__auto__.push((arguments[i__25827__auto___37742]));

var G__37743 = (i__25827__auto___37742 + (1));
i__25827__auto___37742 = G__37743;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__37744__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__37744 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__37745__i = 0, G__37745__a = new Array(arguments.length -  0);
while (G__37745__i < G__37745__a.length) {G__37745__a[G__37745__i] = arguments[G__37745__i + 0]; ++G__37745__i;}
  msg = new cljs.core.IndexedSeq(G__37745__a,0);
} 
return G__37744__delegate.call(this,msg);};
G__37744.cljs$lang$maxFixedArity = 0;
G__37744.cljs$lang$applyTo = (function (arglist__37746){
var msg = cljs.core.seq(arglist__37746);
return G__37744__delegate(msg);
});
G__37744.cljs$core$IFn$_invoke$arity$variadic = G__37744__delegate;
return G__37744;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__25585__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25585__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25585__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25585__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__25585__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25585__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25585__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__25585__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25585__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__25585__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25585__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__25585__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__37736__auto__","c__37736__auto__",1496287480,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__25585__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__25585__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__37736__auto__","c__37736__auto__",1496287480,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__37736__auto__","c__37736__auto__",1496287480,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__25585__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq37737){
var G__37738 = cljs.core.first.call(null,seq37737);
var seq37737__$1 = cljs.core.next.call(null,seq37737);
var G__37739 = cljs.core.first.call(null,seq37737__$1);
var seq37737__$2 = cljs.core.next.call(null,seq37737__$1);
var G__37740 = cljs.core.first.call(null,seq37737__$2);
var seq37737__$3 = cljs.core.next.call(null,seq37737__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__37738,G__37739,G__37740,seq37737__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37750 = arguments.length;
var i__25827__auto___37751 = (0);
while(true){
if((i__25827__auto___37751 < len__25826__auto___37750)){
args__25833__auto__.push((arguments[i__25827__auto___37751]));

var G__37752 = (i__25827__auto___37751 + (1));
i__25827__auto___37751 = G__37752;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq37747){
var G__37748 = cljs.core.first.call(null,seq37747);
var seq37747__$1 = cljs.core.next.call(null,seq37747);
var G__37749 = cljs.core.first.call(null,seq37747__$1);
var seq37747__$2 = cljs.core.next.call(null,seq37747__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__37748,G__37749,seq37747__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args37756 = [];
var len__25826__auto___37764 = arguments.length;
var i__25827__auto___37765 = (0);
while(true){
if((i__25827__auto___37765 < len__25826__auto___37764)){
args37756.push((arguments[i__25827__auto___37765]));

var G__37766 = (i__25827__auto___37765 + (1));
i__25827__auto___37765 = G__37766;
continue;
} else {
}
break;
}

var G__37763 = args37756.length;
switch (G__37763) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37756.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__25585__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__25585__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__37753__auto__","dims__37753__auto__",1053135440,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__37754__auto__","dimarray__37754__auto__",1034601977,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__25585__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__37755__auto__","i__37755__auto__",2118712849,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__37754__auto__","dimarray__37754__auto__",1034601977,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__37754__auto__","dimarray__37754__auto__",1034601977,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__37755__auto__","i__37755__auto__",2118712849,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__37753__auto__","dims__37753__auto__",1053135440,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__37754__auto__","dimarray__37754__auto__",1034601977,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq37757){
var G__37758 = cljs.core.first.call(null,seq37757);
var seq37757__$1 = cljs.core.next.call(null,seq37757);
var G__37759 = cljs.core.first.call(null,seq37757__$1);
var seq37757__$2 = cljs.core.next.call(null,seq37757__$1);
var G__37760 = cljs.core.first.call(null,seq37757__$2);
var seq37757__$3 = cljs.core.next.call(null,seq37757__$2);
var G__37761 = cljs.core.first.call(null,seq37757__$3);
var seq37757__$4 = cljs.core.next.call(null,seq37757__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__37758,G__37759,G__37760,G__37761,seq37757__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args37769 = [];
var len__25826__auto___37776 = arguments.length;
var i__25827__auto___37777 = (0);
while(true){
if((i__25827__auto___37777 < len__25826__auto___37776)){
args37769.push((arguments[i__25827__auto___37777]));

var G__37778 = (i__25827__auto___37777 + (1));
i__25827__auto___37777 = G__37778;
continue;
} else {
}
break;
}

var G__37775 = args37769.length;
switch (G__37775) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37769.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25845__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,_AMPERSAND_env,x)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37768__auto__","x__37768__auto__",-840881160,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37768__auto__","x__37768__auto__",-840881160,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq37770){
var G__37771 = cljs.core.first.call(null,seq37770);
var seq37770__$1 = cljs.core.next.call(null,seq37770);
var G__37772 = cljs.core.first.call(null,seq37770__$1);
var seq37770__$2 = cljs.core.next.call(null,seq37770__$1);
var G__37773 = cljs.core.first.call(null,seq37770__$2);
var seq37770__$3 = cljs.core.next.call(null,seq37770__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__37771,G__37772,G__37773,seq37770__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args37780 = [];
var len__25826__auto___37786 = arguments.length;
var i__25827__auto___37787 = (0);
while(true){
if((i__25827__auto___37787 < len__25826__auto___37786)){
args37780.push((arguments[i__25827__auto___37787]));

var G__37788 = (i__25827__auto___37787 + (1));
i__25827__auto___37787 = G__37788;
continue;
} else {
}
break;
}

var G__37785 = args37780.length;
switch (G__37785) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37780.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25845__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25585__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq37781){
var G__37782 = cljs.core.first.call(null,seq37781);
var seq37781__$1 = cljs.core.next.call(null,seq37781);
var G__37783 = cljs.core.first.call(null,seq37781__$1);
var seq37781__$2 = cljs.core.next.call(null,seq37781__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__37782,G__37783,seq37781__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args37792 = [];
var len__25826__auto___37798 = arguments.length;
var i__25827__auto___37799 = (0);
while(true){
if((i__25827__auto___37799 < len__25826__auto___37798)){
args37792.push((arguments[i__25827__auto___37799]));

var G__37800 = (i__25827__auto___37799 + (1));
i__25827__auto___37799 = G__37800;
continue;
} else {
}
break;
}

var G__37797 = args37792.length;
switch (G__37797) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37792.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25845__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__37790_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__37790_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__37791_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__37791_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25585__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq37793){
var G__37794 = cljs.core.first.call(null,seq37793);
var seq37793__$1 = cljs.core.next.call(null,seq37793);
var G__37795 = cljs.core.first.call(null,seq37793__$1);
var seq37793__$2 = cljs.core.next.call(null,seq37793__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__37794,G__37795,seq37793__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args37802 = [];
var len__25826__auto___37808 = arguments.length;
var i__25827__auto___37809 = (0);
while(true){
if((i__25827__auto___37809 < len__25826__auto___37808)){
args37802.push((arguments[i__25827__auto___37809]));

var G__37810 = (i__25827__auto___37809 + (1));
i__25827__auto___37809 = G__37810;
continue;
} else {
}
break;
}

var G__37807 = args37802.length;
switch (G__37807) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37802.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25845__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq37803){
var G__37804 = cljs.core.first.call(null,seq37803);
var seq37803__$1 = cljs.core.next.call(null,seq37803);
var G__37805 = cljs.core.first.call(null,seq37803__$1);
var seq37803__$2 = cljs.core.next.call(null,seq37803__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__37804,G__37805,seq37803__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args37814 = [];
var len__25826__auto___37820 = arguments.length;
var i__25827__auto___37821 = (0);
while(true){
if((i__25827__auto___37821 < len__25826__auto___37820)){
args37814.push((arguments[i__25827__auto___37821]));

var G__37822 = (i__25827__auto___37821 + (1));
i__25827__auto___37821 = G__37822;
continue;
} else {
}
break;
}

var G__37819 = args37814.length;
switch (G__37819) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args37814.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25845__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__37812_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__37812_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__37813_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__37813_SHARP_);
}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25585__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq37815){
var G__37816 = cljs.core.first.call(null,seq37815);
var seq37815__$1 = cljs.core.next.call(null,seq37815);
var G__37817 = cljs.core.first.call(null,seq37815__$1);
var seq37815__$2 = cljs.core.next.call(null,seq37815__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__37816,G__37817,seq37815__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37839 = arguments.length;
var i__25827__auto___37840 = (0);
while(true){
if((i__25827__auto___37840 < len__25826__auto___37839)){
args__25833__auto__.push((arguments[i__25827__auto___37840]));

var G__37841 = (i__25827__auto___37840 + (1));
i__25827__auto___37840 = G__37841;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__37827){
var vec__37828 = p__37827;
var k = cljs.core.nth.call(null,vec__37828,(0),null);
var _ = cljs.core.nth.call(null,vec__37828,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__25585__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__37831){
var vec__37832 = p__37831;
var k = cljs.core.nth.call(null,vec__37832,(0),null);
var v = cljs.core.nth.call(null,vec__37832,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25585__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__37835){
var vec__37836 = p__37835;
var k = cljs.core.nth.call(null,vec__37836,(0),null);
var v = cljs.core.nth.call(null,vec__37836,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25585__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__25585__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq37824){
var G__37825 = cljs.core.first.call(null,seq37824);
var seq37824__$1 = cljs.core.next.call(null,seq37824);
var G__37826 = cljs.core.first.call(null,seq37824__$1);
var seq37824__$2 = cljs.core.next.call(null,seq37824__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__37825,G__37826,seq37824__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});

cljs.core$macros.alength.cljs$lang$macro = true;
/**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__37842__auto__","a__37842__auto__",-1931151164,null)),(function (){var x__25585__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__37842__auto__","a__37842__auto__",-1931151164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25585__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__37842__auto__","a__37842__auto__",-1931151164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25585__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__25585__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__37843__auto__","a__37843__auto__",1676898860,null)),(function (){var x__25585__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__25585__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25585__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__37843__auto__","a__37843__auto__",1676898860,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__25585__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.areduce.cljs$lang$macro = true;
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37849 = arguments.length;
var i__25827__auto___37850 = (0);
while(true){
if((i__25827__auto___37850 < len__25826__auto___37849)){
args__25833__auto__.push((arguments[i__25827__auto___37850]));

var G__37851 = (i__25827__auto___37850 + (1));
i__25827__auto___37850 = G__37851;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__37844__auto__","n__37844__auto__",457659405,null)),(function (){var x__25585__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25585__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__37844__auto__","n__37844__auto__",457659405,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body,(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__25585__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq37845){
var G__37846 = cljs.core.first.call(null,seq37845);
var seq37845__$1 = cljs.core.next.call(null,seq37845);
var G__37847 = cljs.core.first.call(null,seq37845__$1);
var seq37845__$2 = cljs.core.next.call(null,seq37845__$1);
var G__37848 = cljs.core.first.call(null,seq37845__$2);
var seq37845__$3 = cljs.core.next.call(null,seq37845__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__37846,G__37847,G__37848,seq37845__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37855 = arguments.length;
var i__25827__auto___37856 = (0);
while(true){
if((i__25827__auto___37856 < len__25826__auto___37855)){
args__25833__auto__.push((arguments[i__25827__auto___37856]));

var G__37857 = (i__25827__auto___37856 + (1));
i__25827__auto___37856 = G__37857;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__37852_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__37852_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq37853){
var G__37854 = cljs.core.first.call(null,seq37853);
var seq37853__$1 = cljs.core.next.call(null,seq37853);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__37854,seq37853__$1);
});

/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37867 = arguments.length;
var i__25827__auto___37868 = (0);
while(true){
if((i__25827__auto___37868 < len__25826__auto___37867)){
args__25833__auto__.push((arguments[i__25827__auto___37868]));

var G__37869 = (i__25827__auto___37868 + (1));
i__25827__auto___37868 = G__37869;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__37858__auto__","method-table__37858__auto__",1132564421,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25585__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__37859__auto__","prefer-table__37859__auto__",-1834300329,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25585__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__37860__auto__","method-cache__37860__auto__",1773966234,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25585__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__37861__auto__","cached-hierarchy__37861__auto__",-761116921,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25585__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__37862__auto__","hierarchy__37862__auto__",-898489831,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__25585__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__25585__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__37862__auto__","hierarchy__37862__auto__",-898489831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__37858__auto__","method-table__37858__auto__",1132564421,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__37859__auto__","prefer-table__37859__auto__",-1834300329,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__37860__auto__","method-cache__37860__auto__",1773966234,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__37861__auto__","cached-hierarchy__37861__auto__",-761116921,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq37863){
var G__37864 = cljs.core.first.call(null,seq37863);
var seq37863__$1 = cljs.core.next.call(null,seq37863);
var G__37865 = cljs.core.first.call(null,seq37863__$1);
var seq37863__$2 = cljs.core.next.call(null,seq37863__$1);
var G__37866 = cljs.core.first.call(null,seq37863__$2);
var seq37863__$3 = cljs.core.next.call(null,seq37863__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__37864,G__37865,G__37866,seq37863__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37875 = arguments.length;
var i__25827__auto___37876 = (0);
while(true){
if((i__25827__auto___37876 < len__25826__auto___37875)){
args__25833__auto__.push((arguments[i__25827__auto___37876]));

var G__37877 = (i__25827__auto___37876 + (1));
i__25827__auto___37876 = G__37877;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((4) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25834__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq37870){
var G__37871 = cljs.core.first.call(null,seq37870);
var seq37870__$1 = cljs.core.next.call(null,seq37870);
var G__37872 = cljs.core.first.call(null,seq37870__$1);
var seq37870__$2 = cljs.core.next.call(null,seq37870__$1);
var G__37873 = cljs.core.first.call(null,seq37870__$2);
var seq37870__$3 = cljs.core.next.call(null,seq37870__$2);
var G__37874 = cljs.core.first.call(null,seq37870__$3);
var seq37870__$4 = cljs.core.next.call(null,seq37870__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__37871,G__37872,G__37873,G__37874,seq37870__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__37878__auto__","start__37878__auto__",-725498186,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__37879__auto__","ret__37879__auto__",-1361474672,null)),(function (){var x__25585__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__37878__auto__","start__37878__auto__",-725498186,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__37879__auto__","ret__37879__auto__",-1361474672,null)))));
});

cljs.core$macros.time.cljs$lang$macro = true;
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37894 = arguments.length;
var i__25827__auto___37895 = (0);
while(true){
if((i__25827__auto___37895 < len__25826__auto___37894)){
args__25833__auto__.push((arguments[i__25827__auto___37895]));

var G__37896 = (i__25827__auto___37895 + (1));
i__25827__auto___37895 = G__37896;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((5) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__25834__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__37891){
var map__37892 = p__37891;
var map__37892__$1 = ((((!((map__37892 == null)))?((((map__37892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37892):map__37892);
var print_fn = cljs.core.get.call(null,map__37892__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__37880__auto__","start__37880__auto__",1201843932,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__37881__auto__","ret__37881__auto__",764364902,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___37882__auto__","___37882__auto__",634157626,null)),(function (){var x__25585__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__37883__auto__","end__37883__auto__",89342944,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__37884__auto__","elapsed__37884__auto__",-2122517143,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__37883__auto__","end__37883__auto__",89342944,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__37880__auto__","start__37880__auto__",1201843932,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__25585__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__25585__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__25585__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__37884__auto__","elapsed__37884__auto__",-2122517143,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq37885){
var G__37886 = cljs.core.first.call(null,seq37885);
var seq37885__$1 = cljs.core.next.call(null,seq37885);
var G__37887 = cljs.core.first.call(null,seq37885__$1);
var seq37885__$2 = cljs.core.next.call(null,seq37885__$1);
var G__37888 = cljs.core.first.call(null,seq37885__$2);
var seq37885__$3 = cljs.core.next.call(null,seq37885__$2);
var G__37889 = cljs.core.first.call(null,seq37885__$3);
var seq37885__$4 = cljs.core.next.call(null,seq37885__$3);
var G__37890 = cljs.core.first.call(null,seq37885__$4);
var seq37885__$5 = cljs.core.next.call(null,seq37885__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__37886,G__37887,G__37888,G__37889,G__37890,seq37885__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args37897 = [];
var len__25826__auto___37900 = arguments.length;
var i__25827__auto___37901 = (0);
while(true){
if((i__25827__auto___37901 < len__25826__auto___37900)){
args37897.push((arguments[i__25827__auto___37901]));

var G__37902 = (i__25827__auto___37901 + (1));
i__25827__auto___37901 = G__37902;
continue;
} else {
}
break;
}

var G__37899 = args37897.length;
switch (G__37899) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37897.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__25585__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__25585__auto__ = prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37909 = arguments.length;
var i__25827__auto___37910 = (0);
while(true){
if((i__25827__auto___37910 < len__25826__auto___37909)){
args__25833__auto__.push((arguments[i__25827__auto___37910]));

var G__37911 = (i__25827__auto___37910 + (1));
i__25827__auto___37910 = G__37911;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__37904__auto__","sb__37904__auto__",1465647918,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37905__auto__","x__37905__auto__",-207214920,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__37904__auto__","sb__37904__auto__",1465647918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37905__auto__","x__37905__auto__",-207214920,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__37904__auto__","sb__37904__auto__",1465647918,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq37906){
var G__37907 = cljs.core.first.call(null,seq37906);
var seq37906__$1 = cljs.core.next.call(null,seq37906);
var G__37908 = cljs.core.first.call(null,seq37906__$1);
var seq37906__$2 = cljs.core.next.call(null,seq37906__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__37907,G__37908,seq37906__$2);
});


cljs.core$macros.with_out_str.cljs$lang$macro = true;
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37916 = arguments.length;
var i__25827__auto___37917 = (0);
while(true){
if((i__25827__auto___37917 < len__25826__auto___37916)){
args__25833__auto__.push((arguments[i__25827__auto___37917]));

var G__37918 = (i__25827__auto___37917 + (1));
i__25827__auto___37917 = G__37918;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__37912_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = p1__37912_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq37913){
var G__37914 = cljs.core.first.call(null,seq37913);
var seq37913__$1 = cljs.core.next.call(null,seq37913);
var G__37915 = cljs.core.first.call(null,seq37913__$1);
var seq37913__$2 = cljs.core.next.call(null,seq37913__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__37914,G__37915,seq37913__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25585__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__25585__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37919__auto__","this__37919__auto__",1915663933,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37919__auto__","this__37919__auto__",1915663933,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__37920){
var vec__37932 = p__37920;
var quote = cljs.core.nth.call(null,vec__37932,(0),null);
var ns = cljs.core.nth.call(null,vec__37932,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__25585__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__37932,quote,ns){
return (function (p__37939){
var vec__37940 = p__37939;
var sym = cljs.core.nth.call(null,vec__37940,(0),null);
var _ = cljs.core.nth.call(null,vec__37940,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__25585__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__25585__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
});})(vec__37932,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__37943,p__37944){
var vec__37951 = p__37943;
var quote0 = cljs.core.nth.call(null,vec__37951,(0),null);
var ns = cljs.core.nth.call(null,vec__37951,(1),null);
var vec__37954 = p__37944;
var quote1 = cljs.core.nth.call(null,vec__37954,(0),null);
var sym = cljs.core.nth.call(null,vec__37954,(1),null);
if((cljs.core._EQ_.call(null,quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__25585__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.compiler.munge.call(null,[cljs.core.str(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37962 = arguments.length;
var i__25827__auto___37963 = (0);
while(true){
if((i__25827__auto___37963 < len__25826__auto___37962)){
args__25833__auto__.push((arguments[i__25827__auto___37963]));

var G__37964 = (i__25827__auto___37963 + (1));
i__25827__auto___37963 = G__37964;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((4) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25834__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__25585__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__25585__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq37957){
var G__37958 = cljs.core.first.call(null,seq37957);
var seq37957__$1 = cljs.core.next.call(null,seq37957);
var G__37959 = cljs.core.first.call(null,seq37957__$1);
var seq37957__$2 = cljs.core.next.call(null,seq37957__$1);
var G__37960 = cljs.core.first.call(null,seq37957__$2);
var seq37957__$3 = cljs.core.next.call(null,seq37957__$2);
var G__37961 = cljs.core.first.call(null,seq37957__$3);
var seq37957__$4 = cljs.core.next.call(null,seq37957__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37958,G__37959,G__37960,G__37961,seq37957__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__25833__auto__ = [];
var len__25826__auto___37969 = arguments.length;
var i__25827__auto___37970 = (0);
while(true){
if((i__25827__auto___37970 < len__25826__auto___37969)){
args__25833__auto__.push((arguments[i__25827__auto___37970]));

var G__37971 = (i__25827__auto___37970 + (1));
i__25827__auto___37970 = G__37971;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq37965){
var G__37966 = cljs.core.first.call(null,seq37965);
var seq37965__$1 = cljs.core.next.call(null,seq37965);
var G__37967 = cljs.core.first.call(null,seq37965__$1);
var seq37965__$2 = cljs.core.next.call(null,seq37965__$1);
var G__37968 = cljs.core.first.call(null,seq37965__$2);
var seq37965__$3 = cljs.core.next.call(null,seq37965__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__37966,G__37967,G__37968,seq37965__$3);
});


cljs.core$macros.locking.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__25585__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;
/**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand-1 must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__25585__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.macroexpand_1.cljs$lang$macro = true;
/**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__37972 = form_SINGLEQUOTE_;
var G__37973 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__37972;
form_SINGLEQUOTE_ = G__37973;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__25585__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
break;
}
});

cljs.core$macros.macroexpand.cljs$lang$macro = true;
cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__24739__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__24739__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__24739__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args37974 = [];
var len__25826__auto___37981 = arguments.length;
var i__25827__auto___37982 = (0);
while(true){
if((i__25827__auto___37982 < len__25826__auto___37981)){
args37974.push((arguments[i__25827__auto___37982]));

var G__37983 = (i__25827__auto___37982 + (1));
i__25827__auto___37982 = G__37983;
continue;
} else {
}
break;
}

var G__37976 = args37974.length;
switch (G__37976) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37974.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__37977,solo){
var vec__37978 = p__37977;
var seq__37979 = cljs.core.seq.call(null,vec__37978);
var first__37980 = cljs.core.first.call(null,seq__37979);
var seq__37979__$1 = cljs.core.next.call(null,seq__37979);
var arglist = first__37980;
var body = seq__37979__$1;
var method = vec__37978;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__37978,seq__37979,first__37980,seq__37979__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__37978,seq__37979,first__37980,seq__37979__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__37978,seq__37979,first__37980,seq__37979__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__37978,seq__37979,first__37980,seq__37979__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__37978,seq__37979,first__37980,seq__37979__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/kevinzeidler/rhizome/reg2/resources/public/cljs/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2764),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2764),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/kevinzeidler/rhizome/reg2/resources/public/cljs/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2765),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2765),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
});})(sig,restarg,vec__37978,seq__37979,first__37980,seq__37979__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__37978,seq__37979,first__37980,seq__37979__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),params,(function (){var x__25585__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25585__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
});})(sig,restarg,vec__37978,seq__37979,first__37980,seq__37979__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())))):null),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__37985__auto__","len__37985__auto__",310382957,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__37986__auto__","i__37986__auto__",1711086539,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__37986__auto__","i__37986__auto__",1711086539,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__37985__auto__","len__37985__auto__",310382957,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__25585__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__37986__auto__","i__37986__auto__",1711086539,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__37986__auto__","i__37986__auto__",1711086539,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__37989,emit_var_QMARK_){
var vec__37996 = p__37989;
var vec__37999 = cljs.core.nth.call(null,vec__37996,(0),null);
var seq__38000 = cljs.core.seq.call(null,vec__37999);
var first__38001 = cljs.core.first.call(null,seq__38000);
var seq__38000__$1 = cljs.core.next.call(null,seq__38000);
var arglist = first__38001;
var body = seq__38000__$1;
var method = vec__37999;
var fdecl = vec__37996;
var dest_args = ((function (vec__37996,vec__37999,seq__38000,first__38001,seq__38000__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__37996,vec__37999,seq__38000,first__38001,seq__38000__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(vec__37996,vec__37999,seq__38000,first__38001,seq__38000__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__37996,vec__37999,seq__38000,first__38001,seq__38000__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__25585__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__37987__auto__","args__37987__auto__",-732743028,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__37987__auto__","args__37987__auto__",-732743028,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__37988__auto__","argseq__37988__auto__",1394978159,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25585__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__37987__auto__","args__37987__auto__",-732743028,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/kevinzeidler/rhizome/reg2/resources/public/cljs/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2812),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2812),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__37987__auto__","args__37987__auto__",-732743028,null)),(function (){var x__25585__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__37988__auto__","argseq__37988__auto__",1394978159,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__25585__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__38026){
var vec__38030 = p__38026;
var seq__38031 = cljs.core.seq.call(null,vec__38030);
var first__38032 = cljs.core.first.call(null,seq__38031);
var seq__38031__$1 = cljs.core.next.call(null,seq__38031);
var sig = first__38032;
var body = seq__38031__$1;
var method = vec__38030;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__38002_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__38002_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__25585__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__25585__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__38003_SHARP_){
return fixed_arity.call(null,rname,p1__38003_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__25585__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__38004__auto__","argseq__38004__auto__",605096919,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/kevinzeidler/rhizome/reg2/resources/public/cljs/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2870),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2870),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__25585__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__38004__auto__","argseq__38004__auto__",605096919,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__25585__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__25585__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__25585__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__25585__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__38033__i = 0, G__38033__a = new Array(arguments.length -  3);
while (G__38033__i < G__38033__a.length) {G__38033__a[G__38033__i] = arguments[G__38033__i + 3]; ++G__38033__i;}
  fdecl = new cljs.core.IndexedSeq(G__38033__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__38034){
var _AMPERSAND_form = cljs.core.first(arglist__38034);
arglist__38034 = cljs.core.next(arglist__38034);
var _AMPERSAND_env = cljs.core.first(arglist__38034);
arglist__38034 = cljs.core.next(arglist__38034);
var name = cljs.core.first(arglist__38034);
var fdecl = cljs.core.rest(arglist__38034);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__25833__auto__ = [];
var len__25826__auto___38039 = arguments.length;
var i__25827__auto___38040 = (0);
while(true){
if((i__25827__auto___38040 < len__25826__auto___38039)){
args__25833__auto__.push((arguments[i__25827__auto___38040]));

var G__38041 = (i__25827__auto___38040 + (1));
i__25827__auto___38040 = G__38041;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__25585__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__38042 = cljs.core.cons.call(null,f,p);
var G__38043 = cljs.core.next.call(null,args__$1);
p = G__38042;
args__$1 = G__38043;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__38044 = cljs.core.cons.call(null,f,p);
var G__38045 = cljs.core.next.call(null,args__$1);
p = G__38044;
args__$1 = G__38045;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__38046 = cljs.core.next.call(null,fd);
fd = G__38046;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__38047 = cljs.core.next.call(null,fd);
fd = G__38047;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__25585__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__38048 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__38049 = cljs.core.next.call(null,ds);
acc = G__38048;
ds = G__38049;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__38050 = cljs.core.next.call(null,p);
var G__38051 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__38050;
d = G__38051;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25585__auto____$1 = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__25585__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq38035){
var G__38036 = cljs.core.first.call(null,seq38035);
var seq38035__$1 = cljs.core.next.call(null,seq38035);
var G__38037 = cljs.core.first.call(null,seq38035__$1);
var seq38035__$2 = cljs.core.next.call(null,seq38035__$1);
var G__38038 = cljs.core.first.call(null,seq38035__$2);
var seq38035__$3 = cljs.core.next.call(null,seq38035__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__38036,G__38037,G__38038,seq38035__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map?rel=1478402778337