// Compiled by ClojureScript 1.9.293 {}
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
var args__7658__auto__ = [];
var len__7651__auto___52757 = arguments.length;
var i__7652__auto___52758 = (0);
while(true){
if((i__7652__auto___52758 < len__7651__auto___52757)){
args__7658__auto__.push((arguments[i__7652__auto___52758]));

var G__52759 = (i__7652__auto___52758 + (1));
i__7652__auto___52758 = G__52759;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__7380__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})());
var G__52760 = threaded;
var G__52761 = cljs.core.next.call(null,forms__$1);
x__$1 = G__52760;
forms__$1 = G__52761;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq52753){
var G__52754 = cljs.core.first.call(null,seq52753);
var seq52753__$1 = cljs.core.next.call(null,seq52753);
var G__52755 = cljs.core.first.call(null,seq52753__$1);
var seq52753__$2 = cljs.core.next.call(null,seq52753__$1);
var G__52756 = cljs.core.first.call(null,seq52753__$2);
var seq52753__$3 = cljs.core.next.call(null,seq52753__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__52754,G__52755,G__52756,seq52753__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___52766 = arguments.length;
var i__7652__auto___52767 = (0);
while(true){
if((i__7652__auto___52767 < len__7651__auto___52766)){
args__7658__auto__.push((arguments[i__7652__auto___52767]));

var G__52768 = (i__7652__auto___52767 + (1));
i__7652__auto___52767 = G__52768;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__7380__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__7380__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})());
var G__52769 = threaded;
var G__52770 = cljs.core.next.call(null,forms__$1);
x__$1 = G__52769;
forms__$1 = G__52770;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq52762){
var G__52763 = cljs.core.first.call(null,seq52762);
var seq52762__$1 = cljs.core.next.call(null,seq52762);
var G__52764 = cljs.core.first.call(null,seq52762__$1);
var seq52762__$2 = cljs.core.next.call(null,seq52762__$1);
var G__52765 = cljs.core.first.call(null,seq52762__$2);
var seq52762__$3 = cljs.core.next.call(null,seq52762__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__52763,G__52764,G__52765,seq52762__$3);
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
var args52771 = [];
var len__7651__auto___52779 = arguments.length;
var i__7652__auto___52780 = (0);
while(true){
if((i__7652__auto___52780 < len__7651__auto___52779)){
args52771.push((arguments[i__7652__auto___52780]));

var G__52781 = (i__7652__auto___52780 + (1));
i__7652__auto___52780 = G__52781;
continue;
} else {
}
break;
}

var G__52778 = args52771.length;
switch (G__52778) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args52771.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq52772){
var G__52773 = cljs.core.first.call(null,seq52772);
var seq52772__$1 = cljs.core.next.call(null,seq52772);
var G__52774 = cljs.core.first.call(null,seq52772__$1);
var seq52772__$2 = cljs.core.next.call(null,seq52772__$1);
var G__52775 = cljs.core.first.call(null,seq52772__$2);
var seq52772__$3 = cljs.core.next.call(null,seq52772__$2);
var G__52776 = cljs.core.first.call(null,seq52772__$3);
var seq52772__$4 = cljs.core.next.call(null,seq52772__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__52773,G__52774,G__52775,G__52776,seq52772__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__7658__auto__ = [];
var len__7651__auto___52786 = arguments.length;
var i__7652__auto___52787 = (0);
while(true){
if((i__7652__auto___52787 < len__7651__auto___52786)){
args__7658__auto__.push((arguments[i__7652__auto___52787]));

var G__52788 = (i__7652__auto___52787 + (1));
i__7652__auto___52787 = G__52788;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq52783){
var G__52784 = cljs.core.first.call(null,seq52783);
var seq52783__$1 = cljs.core.next.call(null,seq52783);
var G__52785 = cljs.core.first.call(null,seq52783__$1);
var seq52783__$2 = cljs.core.next.call(null,seq52783__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__52784,G__52785,seq52783__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__7658__auto__ = [];
var len__7651__auto___52792 = arguments.length;
var i__7652__auto___52793 = (0);
while(true){
if((i__7652__auto___52793 < len__7651__auto___52792)){
args__7658__auto__.push((arguments[i__7652__auto___52793]));

var G__52794 = (i__7652__auto___52793 + (1));
i__7652__auto___52793 = G__52794;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__7380__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__7380__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$2);
})(),x__7380__auto____$1);
})(),x__7380__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq52789){
var G__52790 = cljs.core.first.call(null,seq52789);
var seq52789__$1 = cljs.core.next.call(null,seq52789);
var G__52791 = cljs.core.first.call(null,seq52789__$1);
var seq52789__$2 = cljs.core.next.call(null,seq52789__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__52790,G__52791,seq52789__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__7658__auto__ = [];
var len__7651__auto___52799 = arguments.length;
var i__7652__auto___52800 = (0);
while(true){
if((i__7652__auto___52800 < len__7651__auto___52799)){
args__7658__auto__.push((arguments[i__7652__auto___52800]));

var G__52801 = (i__7652__auto___52800 + (1));
i__7652__auto___52800 = G__52801;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__52795_SHARP_){
return cljs.core._conj.call(null,(function (){var x__7380__auto__ = cljs.core.vary_meta.call(null,p1__52795_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq52796){
var G__52797 = cljs.core.first.call(null,seq52796);
var seq52796__$1 = cljs.core.next.call(null,seq52796);
var G__52798 = cljs.core.first.call(null,seq52796__$1);
var seq52796__$2 = cljs.core.next.call(null,seq52796__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__52797,G__52798,seq52796__$2);
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
var args__7658__auto__ = [];
var len__7651__auto___52806 = arguments.length;
var i__7652__auto___52807 = (0);
while(true){
if((i__7652__auto___52807 < len__7651__auto___52806)){
args__7658__auto__.push((arguments[i__7652__auto___52807]));

var G__52808 = (i__7652__auto___52807 + (1));
i__7652__auto___52807 = G__52808;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__7380__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq52802){
var G__52803 = cljs.core.first.call(null,seq52802);
var seq52802__$1 = cljs.core.next.call(null,seq52802);
var G__52804 = cljs.core.first.call(null,seq52802__$1);
var seq52802__$2 = cljs.core.next.call(null,seq52802__$1);
var G__52805 = cljs.core.first.call(null,seq52802__$2);
var seq52802__$3 = cljs.core.next.call(null,seq52802__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__52803,G__52804,G__52805,seq52802__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__52809 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__52810 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__52809;
s = G__52810;
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
return (function (p__52815){
var vec__52816 = p__52815;
var t = cljs.core.nth.call(null,vec__52816,(0),null);
var fs = cljs.core.nth.call(null,vec__52816,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__7380__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
var args__7658__auto__ = [];
var len__7651__auto___52823 = arguments.length;
var i__7652__auto___52824 = (0);
while(true){
if((i__7652__auto___52824 < len__7651__auto___52823)){
args__7658__auto__.push((arguments[i__7652__auto___52824]));

var G__52825 = (i__7652__auto___52824 + (1));
i__7652__auto___52824 = G__52825;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq52819){
var G__52820 = cljs.core.first.call(null,seq52819);
var seq52819__$1 = cljs.core.next.call(null,seq52819);
var G__52821 = cljs.core.first.call(null,seq52819__$1);
var seq52819__$2 = cljs.core.next.call(null,seq52819__$1);
var G__52822 = cljs.core.first.call(null,seq52819__$2);
var seq52819__$3 = cljs.core.next.call(null,seq52819__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__52820,G__52821,G__52822,seq52819__$3);
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
var G__52826 = cljs.core.next.call(null,params__$1);
var G__52827 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__52828 = lets;
params__$1 = G__52826;
new_params = G__52827;
lets = G__52828;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__52829 = cljs.core.next.call(null,params__$1);
var G__52830 = cljs.core.conj.call(null,new_params,gparam);
var G__52831 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__52829;
new_params = G__52830;
lets = G__52831;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
var args__7658__auto__ = [];
var len__7651__auto___52838 = arguments.length;
var i__7652__auto___52839 = (0);
while(true){
if((i__7652__auto___52839 < len__7651__auto___52838)){
args__7658__auto__.push((arguments[i__7652__auto___52839]));

var G__52840 = (i__7652__auto___52839 + (1));
i__7652__auto___52839 = G__52840;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__7380__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first.call(null,sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__52835 = sig;
var seq__52836 = cljs.core.seq.call(null,vec__52835);
var first__52837 = cljs.core.first.call(null,seq__52836);
var seq__52836__$1 = cljs.core.next.call(null,seq__52836);
var params = first__52837;
var body = seq__52836__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__6543__auto__ = conds;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__7380__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.map.call(null,((function (vec__52835,seq__52836,first__52837,seq__52836__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__7380__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});})(vec__52835,seq__52836,first__52837,seq__52836__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__52835,seq__52836,first__52837,seq__52836__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__7380__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});})(vec__52835,seq__52836,first__52837,seq__52836__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq52832){
var G__52833 = cljs.core.first.call(null,seq52832);
var seq52832__$1 = cljs.core.next.call(null,seq52832);
var G__52834 = cljs.core.first.call(null,seq52832__$1);
var seq52832__$2 = cljs.core.next.call(null,seq52832__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__52833,G__52834,seq52832__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___52845 = arguments.length;
var i__7652__auto___52846 = (0);
while(true){
if((i__7652__auto___52846 < len__7651__auto___52845)){
args__7658__auto__.push((arguments[i__7652__auto___52846]));

var G__52847 = (i__7652__auto___52846 + (1));
i__7652__auto___52846 = G__52847;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq52841){
var G__52842 = cljs.core.first.call(null,seq52841);
var seq52841__$1 = cljs.core.next.call(null,seq52841);
var G__52843 = cljs.core.first.call(null,seq52841__$1);
var seq52841__$2 = cljs.core.next.call(null,seq52841__$1);
var G__52844 = cljs.core.first.call(null,seq52841__$2);
var seq52841__$3 = cljs.core.next.call(null,seq52841__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__52842,G__52843,G__52844,seq52841__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args52849 = [];
var len__7651__auto___52858 = arguments.length;
var i__7652__auto___52859 = (0);
while(true){
if((i__7652__auto___52859 < len__7651__auto___52858)){
args52849.push((arguments[i__7652__auto___52859]));

var G__52860 = (i__7652__auto___52859 + (1));
i__7652__auto___52859 = G__52860;
continue;
} else {
}
break;
}

var G__52857 = args52849.length;
switch (G__52857) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args52849.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7670__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__7380__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__52848__auto__","temp__52848__auto__",-599856775,null)),(function (){var x__7380__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__52848__auto__","temp__52848__auto__",-599856775,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__52848__auto__","temp__52848__auto__",-599856775,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq52850){
var G__52851 = cljs.core.first.call(null,seq52850);
var seq52850__$1 = cljs.core.next.call(null,seq52850);
var G__52852 = cljs.core.first.call(null,seq52850__$1);
var seq52850__$2 = cljs.core.next.call(null,seq52850__$1);
var G__52853 = cljs.core.first.call(null,seq52850__$2);
var seq52850__$3 = cljs.core.next.call(null,seq52850__$2);
var G__52854 = cljs.core.first.call(null,seq52850__$3);
var seq52850__$4 = cljs.core.next.call(null,seq52850__$3);
var G__52855 = cljs.core.first.call(null,seq52850__$4);
var seq52850__$5 = cljs.core.next.call(null,seq52850__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__52851,G__52852,G__52853,G__52854,G__52855,seq52850__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args52862 = [];
var len__7651__auto___52865 = arguments.length;
var i__7652__auto___52866 = (0);
while(true){
if((i__7652__auto___52866 < len__7651__auto___52865)){
args52862.push((arguments[i__7652__auto___52866]));

var G__52867 = (i__7652__auto___52866 + (1));
i__7652__auto___52866 = G__52867;
continue;
} else {
}
break;
}

var G__52864 = args52862.length;
switch (G__52864) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args52862.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__7380__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__7380__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
var args__7658__auto__ = [];
var len__7651__auto___52874 = arguments.length;
var i__7652__auto___52875 = (0);
while(true){
if((i__7652__auto___52875 < len__7651__auto___52874)){
args__7658__auto__.push((arguments[i__7652__auto___52875]));

var G__52876 = (i__7652__auto___52875 + (1));
i__7652__auto___52875 = G__52876;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__52869_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__52869_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq52870){
var G__52871 = cljs.core.first.call(null,seq52870);
var seq52870__$1 = cljs.core.next.call(null,seq52870);
var G__52872 = cljs.core.first.call(null,seq52870__$1);
var seq52870__$2 = cljs.core.next.call(null,seq52870__$1);
var G__52873 = cljs.core.first.call(null,seq52870__$2);
var seq52870__$3 = cljs.core.next.call(null,seq52870__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__52871,G__52872,G__52873,seq52870__$3);
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
var args__7658__auto__ = [];
var len__7651__auto___52881 = arguments.length;
var i__7652__auto___52882 = (0);
while(true){
if((i__7652__auto___52882 < len__7651__auto___52881)){
args__7658__auto__.push((arguments[i__7652__auto___52882]));

var G__52883 = (i__7652__auto___52882 + (1));
i__7652__auto___52882 = G__52883;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq52877){
var G__52878 = cljs.core.first.call(null,seq52877);
var seq52877__$1 = cljs.core.next.call(null,seq52877);
var G__52879 = cljs.core.first.call(null,seq52877__$1);
var seq52877__$2 = cljs.core.next.call(null,seq52877__$1);
var G__52880 = cljs.core.first.call(null,seq52877__$2);
var seq52877__$3 = cljs.core.next.call(null,seq52877__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__52878,G__52879,G__52880,seq52877__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__7658__auto__ = [];
var len__7651__auto___52888 = arguments.length;
var i__7652__auto___52889 = (0);
while(true){
if((i__7652__auto___52889 < len__7651__auto___52888)){
args__7658__auto__.push((arguments[i__7652__auto___52889]));

var G__52890 = (i__7652__auto___52889 + (1));
i__7652__auto___52889 = G__52890;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__7380__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq52884){
var G__52885 = cljs.core.first.call(null,seq52884);
var seq52884__$1 = cljs.core.next.call(null,seq52884);
var G__52886 = cljs.core.first.call(null,seq52884__$1);
var seq52884__$2 = cljs.core.next.call(null,seq52884__$1);
var G__52887 = cljs.core.first.call(null,seq52884__$2);
var seq52884__$3 = cljs.core.next.call(null,seq52884__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__52885,G__52886,G__52887,seq52884__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__7658__auto__ = [];
var len__7651__auto___52899 = arguments.length;
var i__7652__auto___52900 = (0);
while(true){
if((i__7652__auto___52900 < len__7651__auto___52899)){
args__7658__auto__.push((arguments[i__7652__auto___52900]));

var G__52901 = (i__7652__auto___52900 + (1));
i__7652__auto___52900 = G__52901;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
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


var vec__52896 = bindings;
var x = cljs.core.nth.call(null,vec__52896,(0),null);
var xs = cljs.core.nth.call(null,vec__52896,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__52891__auto__","xs__52891__auto__",-605104873,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7380__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__52891__auto__","xs__52891__auto__",-605104873,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq52892){
var G__52893 = cljs.core.first.call(null,seq52892);
var seq52892__$1 = cljs.core.next.call(null,seq52892);
var G__52894 = cljs.core.first.call(null,seq52892__$1);
var seq52892__$2 = cljs.core.next.call(null,seq52892__$1);
var G__52895 = cljs.core.first.call(null,seq52892__$2);
var seq52892__$3 = cljs.core.next.call(null,seq52892__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__52893,G__52894,G__52895,seq52892__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__7658__auto__ = [];
var len__7651__auto___52907 = arguments.length;
var i__7652__auto___52908 = (0);
while(true){
if((i__7652__auto___52908 < len__7651__auto___52907)){
args__7658__auto__.push((arguments[i__7652__auto___52908]));

var G__52909 = (i__7652__auto___52908 + (1));
i__7652__auto___52908 = G__52909;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__52902__auto__","temp__52902__auto__",910757218,null)),(function (){var x__7380__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__52902__auto__","temp__52902__auto__",910757218,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__52902__auto__","temp__52902__auto__",910757218,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq52903){
var G__52904 = cljs.core.first.call(null,seq52903);
var seq52903__$1 = cljs.core.next.call(null,seq52903);
var G__52905 = cljs.core.first.call(null,seq52903__$1);
var seq52903__$2 = cljs.core.next.call(null,seq52903__$1);
var G__52906 = cljs.core.first.call(null,seq52903__$2);
var seq52903__$3 = cljs.core.next.call(null,seq52903__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__52904,G__52905,G__52906,seq52903__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__7658__auto__ = [];
var len__7651__auto___52914 = arguments.length;
var i__7652__auto___52915 = (0);
while(true){
if((i__7652__auto___52915 < len__7651__auto___52914)){
args__7658__auto__.push((arguments[i__7652__auto___52915]));

var G__52916 = (i__7652__auto___52915 + (1));
i__7652__auto___52915 = G__52916;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__7380__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),null),x__7380__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq52910){
var G__52911 = cljs.core.first.call(null,seq52910);
var seq52910__$1 = cljs.core.next.call(null,seq52910);
var G__52912 = cljs.core.first.call(null,seq52910__$1);
var seq52910__$2 = cljs.core.next.call(null,seq52910__$1);
var G__52913 = cljs.core.first.call(null,seq52910__$2);
var seq52910__$3 = cljs.core.next.call(null,seq52910__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__52911,G__52912,G__52913,seq52910__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__7658__auto__ = [];
var len__7651__auto___52921 = arguments.length;
var i__7652__auto___52922 = (0);
while(true){
if((i__7652__auto___52922 < len__7651__auto___52921)){
args__7658__auto__.push((arguments[i__7652__auto___52922]));

var G__52923 = (i__7652__auto___52922 + (1));
i__7652__auto___52922 = G__52923;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__7380__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body,(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq52917){
var G__52918 = cljs.core.first.call(null,seq52917);
var seq52917__$1 = cljs.core.next.call(null,seq52917);
var G__52919 = cljs.core.first.call(null,seq52917__$1);
var seq52917__$2 = cljs.core.next.call(null,seq52917__$1);
var G__52920 = cljs.core.first.call(null,seq52917__$2);
var seq52917__$3 = cljs.core.next.call(null,seq52917__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__52918,G__52919,G__52920,seq52917__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___52932 = arguments.length;
var i__7652__auto___52933 = (0);
while(true){
if((i__7652__auto___52933 < len__7651__auto___52932)){
args__7658__auto__.push((arguments[i__7652__auto___52933]));

var G__52934 = (i__7652__auto___52933 + (1));
i__7652__auto___52933 = G__52934;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__52928){
var vec__52929 = p__52928;
var test = cljs.core.nth.call(null,vec__52929,(0),null);
var step = cljs.core.nth.call(null,vec__52929,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__7380__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq52924){
var G__52925 = cljs.core.first.call(null,seq52924);
var seq52924__$1 = cljs.core.next.call(null,seq52924);
var G__52926 = cljs.core.first.call(null,seq52924__$1);
var seq52924__$2 = cljs.core.next.call(null,seq52924__$1);
var G__52927 = cljs.core.first.call(null,seq52924__$2);
var seq52924__$3 = cljs.core.next.call(null,seq52924__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__52925,G__52926,G__52927,seq52924__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___52943 = arguments.length;
var i__7652__auto___52944 = (0);
while(true){
if((i__7652__auto___52944 < len__7651__auto___52943)){
args__7658__auto__.push((arguments[i__7652__auto___52944]));

var G__52945 = (i__7652__auto___52944 + (1));
i__7652__auto___52944 = G__52945;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__52939){
var vec__52940 = p__52939;
var test = cljs.core.nth.call(null,vec__52940,(0),null);
var step = cljs.core.nth.call(null,vec__52940,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__7380__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq52935){
var G__52936 = cljs.core.first.call(null,seq52935);
var seq52935__$1 = cljs.core.next.call(null,seq52935);
var G__52937 = cljs.core.first.call(null,seq52935__$1);
var seq52935__$2 = cljs.core.next.call(null,seq52935__$1);
var G__52938 = cljs.core.first.call(null,seq52935__$2);
var seq52935__$3 = cljs.core.next.call(null,seq52935__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__52936,G__52937,G__52938,seq52935__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___52951 = arguments.length;
var i__7652__auto___52952 = (0);
while(true){
if((i__7652__auto___52952 < len__7651__auto___52951)){
args__7658__auto__.push((arguments[i__7652__auto___52952]));

var G__52953 = (i__7652__auto___52952 + (1));
i__7652__auto___52952 = G__52953;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((4) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7659__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq52946){
var G__52947 = cljs.core.first.call(null,seq52946);
var seq52946__$1 = cljs.core.next.call(null,seq52946);
var G__52948 = cljs.core.first.call(null,seq52946__$1);
var seq52946__$2 = cljs.core.next.call(null,seq52946__$1);
var G__52949 = cljs.core.first.call(null,seq52946__$2);
var seq52946__$3 = cljs.core.next.call(null,seq52946__$2);
var G__52950 = cljs.core.first.call(null,seq52946__$3);
var seq52946__$4 = cljs.core.next.call(null,seq52946__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__52947,G__52948,G__52949,G__52950,seq52946__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___52958 = arguments.length;
var i__7652__auto___52959 = (0);
while(true){
if((i__7652__auto___52959 < len__7651__auto___52958)){
args__7658__auto__.push((arguments[i__7652__auto___52959]));

var G__52960 = (i__7652__auto___52959 + (1));
i__7652__auto___52959 = G__52960;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__7380__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__7380__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq52954){
var G__52955 = cljs.core.first.call(null,seq52954);
var seq52954__$1 = cljs.core.next.call(null,seq52954);
var G__52956 = cljs.core.first.call(null,seq52954__$1);
var seq52954__$2 = cljs.core.next.call(null,seq52954__$1);
var G__52957 = cljs.core.first.call(null,seq52954__$2);
var seq52954__$3 = cljs.core.next.call(null,seq52954__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__52955,G__52956,G__52957,seq52954__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___52965 = arguments.length;
var i__7652__auto___52966 = (0);
while(true){
if((i__7652__auto___52966 < len__7651__auto___52965)){
args__7658__auto__.push((arguments[i__7652__auto___52966]));

var G__52967 = (i__7652__auto___52966 + (1));
i__7652__auto___52966 = G__52967;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__7380__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__7380__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq52961){
var G__52962 = cljs.core.first.call(null,seq52961);
var seq52961__$1 = cljs.core.next.call(null,seq52961);
var G__52963 = cljs.core.first.call(null,seq52961__$1);
var seq52961__$2 = cljs.core.next.call(null,seq52961__$1);
var G__52964 = cljs.core.first.call(null,seq52961__$2);
var seq52961__$3 = cljs.core.next.call(null,seq52961__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__52962,G__52963,G__52964,seq52961__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args52969 = [];
var len__7651__auto___52978 = arguments.length;
var i__7652__auto___52979 = (0);
while(true){
if((i__7652__auto___52979 < len__7651__auto___52978)){
args52969.push((arguments[i__7652__auto___52979]));

var G__52980 = (i__7652__auto___52979 + (1));
i__7652__auto___52979 = G__52980;
continue;
} else {
}
break;
}

var G__52977 = args52969.length;
switch (G__52977) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args52969.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7670__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__7380__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__52968__auto__","temp__52968__auto__",-806226631,null)),(function (){var x__7380__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__52968__auto__","temp__52968__auto__",-806226631,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__52968__auto__","temp__52968__auto__",-806226631,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq52970){
var G__52971 = cljs.core.first.call(null,seq52970);
var seq52970__$1 = cljs.core.next.call(null,seq52970);
var G__52972 = cljs.core.first.call(null,seq52970__$1);
var seq52970__$2 = cljs.core.next.call(null,seq52970__$1);
var G__52973 = cljs.core.first.call(null,seq52970__$2);
var seq52970__$3 = cljs.core.next.call(null,seq52970__$2);
var G__52974 = cljs.core.first.call(null,seq52970__$3);
var seq52970__$4 = cljs.core.next.call(null,seq52970__$3);
var G__52975 = cljs.core.first.call(null,seq52970__$4);
var seq52970__$5 = cljs.core.next.call(null,seq52970__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__52971,G__52972,G__52973,G__52974,G__52975,seq52970__$5);
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
var args__7658__auto__ = [];
var len__7651__auto___52987 = arguments.length;
var i__7652__auto___52988 = (0);
while(true){
if((i__7652__auto___52988 < len__7651__auto___52987)){
args__7658__auto__.push((arguments[i__7652__auto___52988]));

var G__52989 = (i__7652__auto___52988 + (1));
i__7652__auto___52988 = G__52989;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__52982__auto__","temp__52982__auto__",987936147,null)),(function (){var x__7380__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__52982__auto__","temp__52982__auto__",987936147,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__52982__auto__","temp__52982__auto__",987936147,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq52983){
var G__52984 = cljs.core.first.call(null,seq52983);
var seq52983__$1 = cljs.core.next.call(null,seq52983);
var G__52985 = cljs.core.first.call(null,seq52983__$1);
var seq52983__$2 = cljs.core.next.call(null,seq52983__$1);
var G__52986 = cljs.core.first.call(null,seq52983__$2);
var seq52983__$3 = cljs.core.next.call(null,seq52983__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__52984,G__52985,G__52986,seq52983__$3);
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

var argdecls = cljs.core.map.call(null,(function (p1__52990_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__52990_SHARP_)){
return cljs.core.first.call(null,p1__52990_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__52990_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__52990_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__52991_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__52991_SHARP_);
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
var G__52992 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__52993 = cljs.core.next.call(null,fdecls);
ret = G__52992;
fdecls = G__52993;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__7380__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__7380__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
var G__53003 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__53004 = n;
var G__53005 = cljs.core.nnext.call(null,bs);
var G__53006 = true;
ret = G__53003;
n = G__53004;
bs = G__53005;
seen_rest_QMARK_ = G__53006;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__53007 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__7380__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__7380__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__7380__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__7380__auto____$1);
})(),x__7380__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__53008 = (n + (1));
var G__53009 = cljs.core.next.call(null,bs);
var G__53010 = seen_rest_QMARK_;
ret = G__53007;
n = G__53008;
bs = G__53009;
seen_rest_QMARK_ = G__53010;
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
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__7380__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__7380__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__52994_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__6543__auto__ = mkns;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core.namespace.call(null,p1__52994_SHARP_);
}
})(),cljs.core.name.call(null,p1__52994_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__52995_SHARP_){
return cljs.core._conj.call(null,(function (){var x__7380__auto__ = cljs.core.symbol.call(null,(function (){var or__6543__auto__ = mkns;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core.namespace.call(null,p1__52995_SHARP_);
}
})(),cljs.core.name.call(null,p1__52995_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
return (function (p1__52996_SHARP_,p2__52997_SHARP_){
return cljs.core.assoc.call(null,p1__52996_SHARP_,p2__52997_SHARP_,cljs.core.val.call(null,entry).call(null,p2__52997_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$)))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__7380__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$2);
})(),x__7380__auto____$1);
})(),x__7380__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__7380__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__53011 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__53012 = cljs.core.next.call(null,bes);
ret = G__53011;
bes = G__53012;
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
return (function (p1__52998_SHARP_){
return (cljs.core.first.call(null,p1__52998_SHARP_) instanceof cljs.core.Keyword);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__7380__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__7380__auto__ = [cljs.core.str("/** @define {"),cljs.core.str(type),cljs.core.str("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__7380__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
var args__7658__auto__ = [];
var len__7651__auto___53017 = arguments.length;
var i__7652__auto___53018 = (0);
while(true){
if((i__7652__auto___53018 < len__7651__auto___53017)){
args__7658__auto__.push((arguments[i__7652__auto___53018]));

var G__53019 = (i__7652__auto___53018 + (1));
i__7652__auto___53018 = G__53019;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
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


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__7380__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq53013){
var G__53014 = cljs.core.first.call(null,seq53013);
var seq53013__$1 = cljs.core.next.call(null,seq53013);
var G__53015 = cljs.core.first.call(null,seq53013__$1);
var seq53013__$2 = cljs.core.next.call(null,seq53013__$1);
var G__53016 = cljs.core.first.call(null,seq53013__$2);
var seq53013__$3 = cljs.core.next.call(null,seq53013__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__53014,G__53015,G__53016,seq53013__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__7658__auto__ = [];
var len__7651__auto___53028 = arguments.length;
var i__7652__auto___53029 = (0);
while(true){
if((i__7652__auto___53029 < len__7651__auto___53028)){
args__7658__auto__.push((arguments[i__7652__auto___53029]));

var G__53030 = (i__7652__auto___53029 + (1));
i__7652__auto___53029 = G__53030;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__7380__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
return (function (ret,p__53024){
var vec__53025 = p__53024;
var b = cljs.core.nth.call(null,vec__53025,(0),null);
var v = cljs.core.nth.call(null,vec__53025,(1),null);
var g = cljs.core.nth.call(null,vec__53025,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq53020){
var G__53021 = cljs.core.first.call(null,seq53020);
var seq53020__$1 = cljs.core.next.call(null,seq53020);
var G__53022 = cljs.core.first.call(null,seq53020__$1);
var seq53020__$2 = cljs.core.next.call(null,seq53020__$1);
var G__53023 = cljs.core.first.call(null,seq53020__$2);
var seq53020__$3 = cljs.core.next.call(null,seq53020__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__53021,G__53022,G__53023,seq53020__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__53031_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__53031_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__53032){
var vec__53033 = p__53032;
var p = cljs.core.nth.call(null,vec__53033,(0),null);
var b = cljs.core.nth.call(null,vec__53033,(1),null);
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
var args__7658__auto__ = [];
var len__7651__auto___53039 = arguments.length;
var i__7652__auto___53040 = (0);
while(true){
if((i__7652__auto___53040 < len__7651__auto___53039)){
args__7658__auto__.push((arguments[i__7652__auto___53040]));

var G__53041 = (i__7652__auto___53040 + (1));
i__7652__auto___53040 = G__53041;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq53036){
var G__53037 = cljs.core.first.call(null,seq53036);
var seq53036__$1 = cljs.core.next.call(null,seq53036);
var G__53038 = cljs.core.first.call(null,seq53036__$1);
var seq53036__$2 = cljs.core.next.call(null,seq53036__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__53037,G__53038,seq53036__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__6531__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__6531__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__6531__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args53045 = [];
var len__7651__auto___53052 = arguments.length;
var i__7652__auto___53053 = (0);
while(true){
if((i__7652__auto___53053 < len__7651__auto___53052)){
args53045.push((arguments[i__7652__auto___53053]));

var G__53054 = (i__7652__auto___53053 + (1));
i__7652__auto___53053 = G__53054;
continue;
} else {
}
break;
}

var G__53051 = args53045.length;
switch (G__53051) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53045.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7670__auto__);

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
return (function (p1__53042_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__53042_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__53043_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__53043_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__7380__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__53044__auto__","and__53044__auto__",250675892,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__53044__auto__","and__53044__auto__",250675892,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__53044__auto__","and__53044__auto__",250675892,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq53046){
var G__53047 = cljs.core.first.call(null,seq53046);
var seq53046__$1 = cljs.core.next.call(null,seq53046);
var G__53048 = cljs.core.first.call(null,seq53046__$1);
var seq53046__$2 = cljs.core.next.call(null,seq53046__$1);
var G__53049 = cljs.core.first.call(null,seq53046__$2);
var seq53046__$3 = cljs.core.next.call(null,seq53046__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__53047,G__53048,G__53049,seq53046__$3);
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
var args53059 = [];
var len__7651__auto___53066 = arguments.length;
var i__7652__auto___53067 = (0);
while(true){
if((i__7652__auto___53067 < len__7651__auto___53066)){
args53059.push((arguments[i__7652__auto___53067]));

var G__53068 = (i__7652__auto___53067 + (1));
i__7652__auto___53067 = G__53068;
continue;
} else {
}
break;
}

var G__53065 = args53059.length;
switch (G__53065) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53059.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7670__auto__);

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
return (function (p1__53056_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__53056_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__53057_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__53057_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__7380__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__53058__auto__","or__53058__auto__",-676762679,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__53058__auto__","or__53058__auto__",-676762679,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__53058__auto__","or__53058__auto__",-676762679,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq53060){
var G__53061 = cljs.core.first.call(null,seq53060);
var seq53060__$1 = cljs.core.next.call(null,seq53060);
var G__53062 = cljs.core.first.call(null,seq53060__$1);
var seq53060__$2 = cljs.core.next.call(null,seq53060__$1);
var G__53063 = cljs.core.first.call(null,seq53060__$2);
var seq53060__$3 = cljs.core.next.call(null,seq53060__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__53061,G__53062,G__53063,seq53060__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__7380__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__7380__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__53074 = clojure.string.split.call(null,comment,/\n/);
var seq__53075 = cljs.core.seq.call(null,vec__53074);
var first__53076 = cljs.core.first.call(null,seq__53075);
var seq__53075__$1 = cljs.core.next.call(null,seq__53075);
var x = first__53076;
var ys = seq__53075__$1;
return cljs.core._conj.call(null,(function (){var x__7380__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__53074,seq__53075,first__53076,seq__53075__$1,x,ys){
return (function (p1__53070_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__53070_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__53074,seq__53075,first__53076,seq__53075__$1,x,ys))
,ys))),cljs.core.str(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str("~{} = /** @type {"),cljs.core.str(t),cljs.core.str("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__7380__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$2);
})(),x__7380__auto____$1);
})(),x__7380__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__7380__auto__ = [cljs.core.str("/**"),cljs.core.str(comment),cljs.core.str("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__53077__auto__","c__53077__auto__",1440076945,null)),(function (){var x__7380__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__53078__auto__","x__53078__auto__",-701019440,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__53078__auto__","x__53078__auto__",-701019440,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__53077__auto__","c__53077__auto__",1440076945,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args53079 = [];
var len__7651__auto___53087 = arguments.length;
var i__7652__auto___53088 = (0);
while(true){
if((i__7652__auto___53088 < len__7651__auto___53087)){
args53079.push((arguments[i__7652__auto___53088]));

var G__53089 = (i__7652__auto___53088 + (1));
i__7652__auto___53088 = G__53089;
continue;
} else {
}
break;
}

var G__53086 = args53079.length;
switch (G__53086) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53079.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__7380__auto__ = [cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq53080){
var G__53081 = cljs.core.first.call(null,seq53080);
var seq53080__$1 = cljs.core.next.call(null,seq53080);
var G__53082 = cljs.core.first.call(null,seq53080__$1);
var seq53080__$2 = cljs.core.next.call(null,seq53080__$1);
var G__53083 = cljs.core.first.call(null,seq53080__$2);
var seq53080__$3 = cljs.core.next.call(null,seq53080__$2);
var G__53084 = cljs.core.first.call(null,seq53080__$3);
var seq53080__$4 = cljs.core.next.call(null,seq53080__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__53081,G__53082,G__53083,G__53084,seq53080__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args53091 = [];
var len__7651__auto___53100 = arguments.length;
var i__7652__auto___53101 = (0);
while(true){
if((i__7652__auto___53101 < len__7651__auto___53100)){
args53091.push((arguments[i__7652__auto___53101]));

var G__53102 = (i__7652__auto___53101 + (1));
i__7652__auto___53101 = G__53102;
continue;
} else {
}
break;
}

var G__53099 = args53091.length;
switch (G__53099) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53091.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7670__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$2);
})(),x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__7380__auto__ = [cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq53092){
var G__53093 = cljs.core.first.call(null,seq53092);
var seq53092__$1 = cljs.core.next.call(null,seq53092);
var G__53094 = cljs.core.first.call(null,seq53092__$1);
var seq53092__$2 = cljs.core.next.call(null,seq53092__$1);
var G__53095 = cljs.core.first.call(null,seq53092__$2);
var seq53092__$3 = cljs.core.next.call(null,seq53092__$2);
var G__53096 = cljs.core.first.call(null,seq53092__$3);
var seq53092__$4 = cljs.core.next.call(null,seq53092__$3);
var G__53097 = cljs.core.first.call(null,seq53092__$4);
var seq53092__$5 = cljs.core.next.call(null,seq53092__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__53093,G__53094,G__53095,G__53096,G__53097,seq53092__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args53104 = [];
var len__7651__auto___53112 = arguments.length;
var i__7652__auto___53113 = (0);
while(true){
if((i__7652__auto___53113 < len__7651__auto___53112)){
args53104.push((arguments[i__7652__auto___53113]));

var G__53114 = (i__7652__auto___53113 + (1));
i__7652__auto___53113 = G__53114;
continue;
} else {
}
break;
}

var G__53111 = args53104.length;
switch (G__53111) {
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
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53104.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq53105){
var G__53106 = cljs.core.first.call(null,seq53105);
var seq53105__$1 = cljs.core.next.call(null,seq53105);
var G__53107 = cljs.core.first.call(null,seq53105__$1);
var seq53105__$2 = cljs.core.next.call(null,seq53105__$1);
var G__53108 = cljs.core.first.call(null,seq53105__$2);
var seq53105__$3 = cljs.core.next.call(null,seq53105__$2);
var G__53109 = cljs.core.first.call(null,seq53105__$3);
var seq53105__$4 = cljs.core.next.call(null,seq53105__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__53106,G__53107,G__53108,G__53109,seq53105__$4);
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
var args__7658__auto__ = [];
var len__7651__auto___53119 = arguments.length;
var i__7652__auto___53120 = (0);
while(true){
if((i__7652__auto___53120 < len__7651__auto___53119)){
args__7658__auto__.push((arguments[i__7652__auto___53120]));

var G__53121 = (i__7652__auto___53120 + (1));
i__7652__auto___53120 = G__53121;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq53116){
var G__53117 = cljs.core.first.call(null,seq53116);
var seq53116__$1 = cljs.core.next.call(null,seq53116);
var G__53118 = cljs.core.first.call(null,seq53116__$1);
var seq53116__$2 = cljs.core.next.call(null,seq53116__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__53117,G__53118,seq53116__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__7658__auto__ = [];
var len__7651__auto___53125 = arguments.length;
var i__7652__auto___53126 = (0);
while(true){
if((i__7652__auto___53126 < len__7651__auto___53125)){
args__7658__auto__.push((arguments[i__7652__auto___53126]));

var G__53127 = (i__7652__auto___53126 + (1));
i__7652__auto___53126 = G__53127;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq53122){
var G__53123 = cljs.core.first.call(null,seq53122);
var seq53122__$1 = cljs.core.next.call(null,seq53122);
var G__53124 = cljs.core.first.call(null,seq53122__$1);
var seq53122__$2 = cljs.core.next.call(null,seq53122__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__53123,G__53124,seq53122__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__7658__auto__ = [];
var len__7651__auto___53131 = arguments.length;
var i__7652__auto___53132 = (0);
while(true){
if((i__7652__auto___53132 < len__7651__auto___53131)){
args__7658__auto__.push((arguments[i__7652__auto___53132]));

var G__53133 = (i__7652__auto___53132 + (1));
i__7652__auto___53132 = G__53133;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq53128){
var G__53129 = cljs.core.first.call(null,seq53128);
var seq53128__$1 = cljs.core.next.call(null,seq53128);
var G__53130 = cljs.core.first.call(null,seq53128__$1);
var seq53128__$2 = cljs.core.next.call(null,seq53128__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__53129,G__53130,seq53128__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__7658__auto__ = [];
var len__7651__auto___53137 = arguments.length;
var i__7652__auto___53138 = (0);
while(true){
if((i__7652__auto___53138 < len__7651__auto___53137)){
args__7658__auto__.push((arguments[i__7652__auto___53138]));

var G__53139 = (i__7652__auto___53138 + (1));
i__7652__auto___53138 = G__53139;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq53134){
var G__53135 = cljs.core.first.call(null,seq53134);
var seq53134__$1 = cljs.core.next.call(null,seq53134);
var G__53136 = cljs.core.first.call(null,seq53134__$1);
var seq53134__$2 = cljs.core.next.call(null,seq53134__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__53135,G__53136,seq53134__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__7658__auto__ = [];
var len__7651__auto___53143 = arguments.length;
var i__7652__auto___53144 = (0);
while(true){
if((i__7652__auto___53144 < len__7651__auto___53143)){
args__7658__auto__.push((arguments[i__7652__auto___53144]));

var G__53145 = (i__7652__auto___53144 + (1));
i__7652__auto___53144 = G__53145;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq53140){
var G__53141 = cljs.core.first.call(null,seq53140);
var seq53140__$1 = cljs.core.next.call(null,seq53140);
var G__53142 = cljs.core.first.call(null,seq53140__$1);
var seq53140__$2 = cljs.core.next.call(null,seq53140__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__53141,G__53142,seq53140__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mod","cljs.core$macros/mod",2132457375,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__7658__auto__ = [];
var len__7651__auto___53149 = arguments.length;
var i__7652__auto___53150 = (0);
while(true){
if((i__7652__auto___53150 < len__7651__auto___53149)){
args__7658__auto__.push((arguments[i__7652__auto___53150]));

var G__53151 = (i__7652__auto___53150 + (1));
i__7652__auto___53150 = G__53151;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq53146){
var G__53147 = cljs.core.first.call(null,seq53146);
var seq53146__$1 = cljs.core.next.call(null,seq53146);
var G__53148 = cljs.core.first.call(null,seq53146__$1);
var seq53146__$2 = cljs.core.next.call(null,seq53146__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__53147,G__53148,seq53146__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__7658__auto__ = [];
var len__7651__auto___53155 = arguments.length;
var i__7652__auto___53156 = (0);
while(true){
if((i__7652__auto___53156 < len__7651__auto___53155)){
args__7658__auto__.push((arguments[i__7652__auto___53156]));

var G__53157 = (i__7652__auto___53156 + (1));
i__7652__auto___53156 = G__53157;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq53152){
var G__53153 = cljs.core.first.call(null,seq53152);
var seq53152__$1 = cljs.core.next.call(null,seq53152);
var G__53154 = cljs.core.first.call(null,seq53152__$1);
var seq53152__$2 = cljs.core.next.call(null,seq53152__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__53153,G__53154,seq53152__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args53158 = [];
var len__7651__auto___53166 = arguments.length;
var i__7652__auto___53167 = (0);
while(true){
if((i__7652__auto___53167 < len__7651__auto___53166)){
args53158.push((arguments[i__7652__auto___53167]));

var G__53168 = (i__7652__auto___53167 + (1));
i__7652__auto___53167 = G__53168;
continue;
} else {
}
break;
}

var G__53165 = args53158.length;
switch (G__53165) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53158.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq53159){
var G__53160 = cljs.core.first.call(null,seq53159);
var seq53159__$1 = cljs.core.next.call(null,seq53159);
var G__53161 = cljs.core.first.call(null,seq53159__$1);
var seq53159__$2 = cljs.core.next.call(null,seq53159__$1);
var G__53162 = cljs.core.first.call(null,seq53159__$2);
var seq53159__$3 = cljs.core.next.call(null,seq53159__$2);
var G__53163 = cljs.core.first.call(null,seq53159__$3);
var seq53159__$4 = cljs.core.next.call(null,seq53159__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__53160,G__53161,G__53162,G__53163,seq53159__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args53170 = [];
var len__7651__auto___53178 = arguments.length;
var i__7652__auto___53179 = (0);
while(true){
if((i__7652__auto___53179 < len__7651__auto___53178)){
args53170.push((arguments[i__7652__auto___53179]));

var G__53180 = (i__7652__auto___53179 + (1));
i__7652__auto___53179 = G__53180;
continue;
} else {
}
break;
}

var G__53177 = args53170.length;
switch (G__53177) {
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
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53170.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq53171){
var G__53172 = cljs.core.first.call(null,seq53171);
var seq53171__$1 = cljs.core.next.call(null,seq53171);
var G__53173 = cljs.core.first.call(null,seq53171__$1);
var seq53171__$2 = cljs.core.next.call(null,seq53171__$1);
var G__53174 = cljs.core.first.call(null,seq53171__$2);
var seq53171__$3 = cljs.core.next.call(null,seq53171__$2);
var G__53175 = cljs.core.first.call(null,seq53171__$3);
var seq53171__$4 = cljs.core.next.call(null,seq53171__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53172,G__53173,G__53174,G__53175,seq53171__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args53182 = [];
var len__7651__auto___53190 = arguments.length;
var i__7652__auto___53191 = (0);
while(true){
if((i__7652__auto___53191 < len__7651__auto___53190)){
args53182.push((arguments[i__7652__auto___53191]));

var G__53192 = (i__7652__auto___53191 + (1));
i__7652__auto___53191 = G__53192;
continue;
} else {
}
break;
}

var G__53189 = args53182.length;
switch (G__53189) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53182.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq53183){
var G__53184 = cljs.core.first.call(null,seq53183);
var seq53183__$1 = cljs.core.next.call(null,seq53183);
var G__53185 = cljs.core.first.call(null,seq53183__$1);
var seq53183__$2 = cljs.core.next.call(null,seq53183__$1);
var G__53186 = cljs.core.first.call(null,seq53183__$2);
var seq53183__$3 = cljs.core.next.call(null,seq53183__$2);
var G__53187 = cljs.core.first.call(null,seq53183__$3);
var seq53183__$4 = cljs.core.next.call(null,seq53183__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__53184,G__53185,G__53186,G__53187,seq53183__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args53194 = [];
var len__7651__auto___53202 = arguments.length;
var i__7652__auto___53203 = (0);
while(true){
if((i__7652__auto___53203 < len__7651__auto___53202)){
args53194.push((arguments[i__7652__auto___53203]));

var G__53204 = (i__7652__auto___53203 + (1));
i__7652__auto___53203 = G__53204;
continue;
} else {
}
break;
}

var G__53201 = args53194.length;
switch (G__53201) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53194.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq53195){
var G__53196 = cljs.core.first.call(null,seq53195);
var seq53195__$1 = cljs.core.next.call(null,seq53195);
var G__53197 = cljs.core.first.call(null,seq53195__$1);
var seq53195__$2 = cljs.core.next.call(null,seq53195__$1);
var G__53198 = cljs.core.first.call(null,seq53195__$2);
var seq53195__$3 = cljs.core.next.call(null,seq53195__$2);
var G__53199 = cljs.core.first.call(null,seq53195__$3);
var seq53195__$4 = cljs.core.next.call(null,seq53195__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__53196,G__53197,G__53198,G__53199,seq53195__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args53206 = [];
var len__7651__auto___53214 = arguments.length;
var i__7652__auto___53215 = (0);
while(true){
if((i__7652__auto___53215 < len__7651__auto___53214)){
args53206.push((arguments[i__7652__auto___53215]));

var G__53216 = (i__7652__auto___53215 + (1));
i__7652__auto___53215 = G__53216;
continue;
} else {
}
break;
}

var G__53213 = args53206.length;
switch (G__53213) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53206.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq53207){
var G__53208 = cljs.core.first.call(null,seq53207);
var seq53207__$1 = cljs.core.next.call(null,seq53207);
var G__53209 = cljs.core.first.call(null,seq53207__$1);
var seq53207__$2 = cljs.core.next.call(null,seq53207__$1);
var G__53210 = cljs.core.first.call(null,seq53207__$2);
var seq53207__$3 = cljs.core.next.call(null,seq53207__$2);
var G__53211 = cljs.core.first.call(null,seq53207__$3);
var seq53207__$4 = cljs.core.next.call(null,seq53207__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__53208,G__53209,G__53210,G__53211,seq53207__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args53218 = [];
var len__7651__auto___53226 = arguments.length;
var i__7652__auto___53227 = (0);
while(true){
if((i__7652__auto___53227 < len__7651__auto___53226)){
args53218.push((arguments[i__7652__auto___53227]));

var G__53228 = (i__7652__auto___53227 + (1));
i__7652__auto___53227 = G__53228;
continue;
} else {
}
break;
}

var G__53225 = args53218.length;
switch (G__53225) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53218.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq53219){
var G__53220 = cljs.core.first.call(null,seq53219);
var seq53219__$1 = cljs.core.next.call(null,seq53219);
var G__53221 = cljs.core.first.call(null,seq53219__$1);
var seq53219__$2 = cljs.core.next.call(null,seq53219__$1);
var G__53222 = cljs.core.first.call(null,seq53219__$2);
var seq53219__$3 = cljs.core.next.call(null,seq53219__$2);
var G__53223 = cljs.core.first.call(null,seq53219__$3);
var seq53219__$4 = cljs.core.next.call(null,seq53219__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__53220,G__53221,G__53222,G__53223,seq53219__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args53230 = [];
var len__7651__auto___53238 = arguments.length;
var i__7652__auto___53239 = (0);
while(true){
if((i__7652__auto___53239 < len__7651__auto___53238)){
args53230.push((arguments[i__7652__auto___53239]));

var G__53240 = (i__7652__auto___53239 + (1));
i__7652__auto___53239 = G__53240;
continue;
} else {
}
break;
}

var G__53237 = args53230.length;
switch (G__53237) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53230.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq53231){
var G__53232 = cljs.core.first.call(null,seq53231);
var seq53231__$1 = cljs.core.next.call(null,seq53231);
var G__53233 = cljs.core.first.call(null,seq53231__$1);
var seq53231__$2 = cljs.core.next.call(null,seq53231__$1);
var G__53234 = cljs.core.first.call(null,seq53231__$2);
var seq53231__$3 = cljs.core.next.call(null,seq53231__$2);
var G__53235 = cljs.core.first.call(null,seq53231__$3);
var seq53231__$4 = cljs.core.next.call(null,seq53231__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__53232,G__53233,G__53234,G__53235,seq53231__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args53242 = [];
var len__7651__auto___53250 = arguments.length;
var i__7652__auto___53251 = (0);
while(true){
if((i__7652__auto___53251 < len__7651__auto___53250)){
args53242.push((arguments[i__7652__auto___53251]));

var G__53252 = (i__7652__auto___53251 + (1));
i__7652__auto___53251 = G__53252;
continue;
} else {
}
break;
}

var G__53249 = args53242.length;
switch (G__53249) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53242.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq53243){
var G__53244 = cljs.core.first.call(null,seq53243);
var seq53243__$1 = cljs.core.next.call(null,seq53243);
var G__53245 = cljs.core.first.call(null,seq53243__$1);
var seq53243__$2 = cljs.core.next.call(null,seq53243__$1);
var G__53246 = cljs.core.first.call(null,seq53243__$2);
var seq53243__$3 = cljs.core.next.call(null,seq53243__$2);
var G__53247 = cljs.core.first.call(null,seq53243__$3);
var seq53243__$4 = cljs.core.next.call(null,seq53243__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__53244,G__53245,G__53246,G__53247,seq53243__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args53254 = [];
var len__7651__auto___53262 = arguments.length;
var i__7652__auto___53263 = (0);
while(true){
if((i__7652__auto___53263 < len__7651__auto___53262)){
args53254.push((arguments[i__7652__auto___53263]));

var G__53264 = (i__7652__auto___53263 + (1));
i__7652__auto___53263 = G__53264;
continue;
} else {
}
break;
}

var G__53261 = args53254.length;
switch (G__53261) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53254.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq53255){
var G__53256 = cljs.core.first.call(null,seq53255);
var seq53255__$1 = cljs.core.next.call(null,seq53255);
var G__53257 = cljs.core.first.call(null,seq53255__$1);
var seq53255__$2 = cljs.core.next.call(null,seq53255__$1);
var G__53258 = cljs.core.first.call(null,seq53255__$2);
var seq53255__$3 = cljs.core.next.call(null,seq53255__$2);
var G__53259 = cljs.core.first.call(null,seq53255__$3);
var seq53255__$4 = cljs.core.next.call(null,seq53255__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__53256,G__53257,G__53258,G__53259,seq53255__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args53268 = [];
var len__7651__auto___53276 = arguments.length;
var i__7652__auto___53277 = (0);
while(true){
if((i__7652__auto___53277 < len__7651__auto___53276)){
args53268.push((arguments[i__7652__auto___53277]));

var G__53278 = (i__7652__auto___53277 + (1));
i__7652__auto___53277 = G__53278;
continue;
} else {
}
break;
}

var G__53275 = args53268.length;
switch (G__53275) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53268.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__53266__auto__","x__53266__auto__",-1265579267,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__53267__auto__","y__53267__auto__",490921704,null)),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__53266__auto__","x__53266__auto__",-1265579267,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__53267__auto__","y__53267__auto__",490921704,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__53266__auto__","x__53266__auto__",-1265579267,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__53267__auto__","y__53267__auto__",490921704,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq53269){
var G__53270 = cljs.core.first.call(null,seq53269);
var seq53269__$1 = cljs.core.next.call(null,seq53269);
var G__53271 = cljs.core.first.call(null,seq53269__$1);
var seq53269__$2 = cljs.core.next.call(null,seq53269__$1);
var G__53272 = cljs.core.first.call(null,seq53269__$2);
var seq53269__$3 = cljs.core.next.call(null,seq53269__$2);
var G__53273 = cljs.core.first.call(null,seq53269__$3);
var seq53269__$4 = cljs.core.next.call(null,seq53269__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__53270,G__53271,G__53272,G__53273,seq53269__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args53282 = [];
var len__7651__auto___53290 = arguments.length;
var i__7652__auto___53291 = (0);
while(true){
if((i__7652__auto___53291 < len__7651__auto___53290)){
args53282.push((arguments[i__7652__auto___53291]));

var G__53292 = (i__7652__auto___53291 + (1));
i__7652__auto___53291 = G__53292;
continue;
} else {
}
break;
}

var G__53289 = args53282.length;
switch (G__53289) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53282.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__53280__auto__","x__53280__auto__",-69996237,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__53281__auto__","y__53281__auto__",628877512,null)),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__53280__auto__","x__53280__auto__",-69996237,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__53281__auto__","y__53281__auto__",628877512,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__53280__auto__","x__53280__auto__",-69996237,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__53281__auto__","y__53281__auto__",628877512,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq53283){
var G__53284 = cljs.core.first.call(null,seq53283);
var seq53283__$1 = cljs.core.next.call(null,seq53283);
var G__53285 = cljs.core.first.call(null,seq53283__$1);
var seq53283__$2 = cljs.core.next.call(null,seq53283__$1);
var G__53286 = cljs.core.first.call(null,seq53283__$2);
var seq53283__$3 = cljs.core.next.call(null,seq53283__$2);
var G__53287 = cljs.core.first.call(null,seq53283__$3);
var seq53283__$4 = cljs.core.next.call(null,seq53283__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__53284,G__53285,G__53286,G__53287,seq53283__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args53294 = [];
var len__7651__auto___53302 = arguments.length;
var i__7652__auto___53303 = (0);
while(true){
if((i__7652__auto___53303 < len__7651__auto___53302)){
args53294.push((arguments[i__7652__auto___53303]));

var G__53304 = (i__7652__auto___53303 + (1));
i__7652__auto___53303 = G__53304;
continue;
} else {
}
break;
}

var G__53301 = args53294.length;
switch (G__53301) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53294.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq53295){
var G__53296 = cljs.core.first.call(null,seq53295);
var seq53295__$1 = cljs.core.next.call(null,seq53295);
var G__53297 = cljs.core.first.call(null,seq53295__$1);
var seq53295__$2 = cljs.core.next.call(null,seq53295__$1);
var G__53298 = cljs.core.first.call(null,seq53295__$2);
var seq53295__$3 = cljs.core.next.call(null,seq53295__$2);
var G__53299 = cljs.core.first.call(null,seq53295__$3);
var seq53295__$4 = cljs.core.next.call(null,seq53295__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__53296,G__53297,G__53298,G__53299,seq53295__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args53306 = [];
var len__7651__auto___53314 = arguments.length;
var i__7652__auto___53315 = (0);
while(true){
if((i__7652__auto___53315 < len__7651__auto___53314)){
args53306.push((arguments[i__7652__auto___53315]));

var G__53316 = (i__7652__auto___53315 + (1));
i__7652__auto___53315 = G__53316;
continue;
} else {
}
break;
}

var G__53313 = args53306.length;
switch (G__53313) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53306.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq53307){
var G__53308 = cljs.core.first.call(null,seq53307);
var seq53307__$1 = cljs.core.next.call(null,seq53307);
var G__53309 = cljs.core.first.call(null,seq53307__$1);
var seq53307__$2 = cljs.core.next.call(null,seq53307__$1);
var G__53310 = cljs.core.first.call(null,seq53307__$2);
var seq53307__$3 = cljs.core.next.call(null,seq53307__$2);
var G__53311 = cljs.core.first.call(null,seq53307__$3);
var seq53307__$4 = cljs.core.next.call(null,seq53307__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__53308,G__53309,G__53310,G__53311,seq53307__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args53318 = [];
var len__7651__auto___53326 = arguments.length;
var i__7652__auto___53327 = (0);
while(true){
if((i__7652__auto___53327 < len__7651__auto___53326)){
args53318.push((arguments[i__7652__auto___53327]));

var G__53328 = (i__7652__auto___53327 + (1));
i__7652__auto___53327 = G__53328;
continue;
} else {
}
break;
}

var G__53325 = args53318.length;
switch (G__53325) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53318.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq53319){
var G__53320 = cljs.core.first.call(null,seq53319);
var seq53319__$1 = cljs.core.next.call(null,seq53319);
var G__53321 = cljs.core.first.call(null,seq53319__$1);
var seq53319__$2 = cljs.core.next.call(null,seq53319__$1);
var G__53322 = cljs.core.first.call(null,seq53319__$2);
var seq53319__$3 = cljs.core.next.call(null,seq53319__$2);
var G__53323 = cljs.core.first.call(null,seq53319__$3);
var seq53319__$4 = cljs.core.next.call(null,seq53319__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__53320,G__53321,G__53322,G__53323,seq53319__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args53330 = [];
var len__7651__auto___53338 = arguments.length;
var i__7652__auto___53339 = (0);
while(true){
if((i__7652__auto___53339 < len__7651__auto___53338)){
args53330.push((arguments[i__7652__auto___53339]));

var G__53340 = (i__7652__auto___53339 + (1));
i__7652__auto___53339 = G__53340;
continue;
} else {
}
break;
}

var G__53337 = args53330.length;
switch (G__53337) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53330.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq53331){
var G__53332 = cljs.core.first.call(null,seq53331);
var seq53331__$1 = cljs.core.next.call(null,seq53331);
var G__53333 = cljs.core.first.call(null,seq53331__$1);
var seq53331__$2 = cljs.core.next.call(null,seq53331__$1);
var G__53334 = cljs.core.first.call(null,seq53331__$2);
var seq53331__$3 = cljs.core.next.call(null,seq53331__$2);
var G__53335 = cljs.core.first.call(null,seq53331__$3);
var seq53331__$4 = cljs.core.next.call(null,seq53331__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__53332,G__53333,G__53334,G__53335,seq53331__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args53342 = [];
var len__7651__auto___53350 = arguments.length;
var i__7652__auto___53351 = (0);
while(true){
if((i__7652__auto___53351 < len__7651__auto___53350)){
args53342.push((arguments[i__7652__auto___53351]));

var G__53352 = (i__7652__auto___53351 + (1));
i__7652__auto___53351 = G__53352;
continue;
} else {
}
break;
}

var G__53349 = args53342.length;
switch (G__53349) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53342.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq53343){
var G__53344 = cljs.core.first.call(null,seq53343);
var seq53343__$1 = cljs.core.next.call(null,seq53343);
var G__53345 = cljs.core.first.call(null,seq53343__$1);
var seq53343__$2 = cljs.core.next.call(null,seq53343__$1);
var G__53346 = cljs.core.first.call(null,seq53343__$2);
var seq53343__$3 = cljs.core.next.call(null,seq53343__$2);
var G__53347 = cljs.core.first.call(null,seq53343__$3);
var seq53343__$4 = cljs.core.next.call(null,seq53343__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__53344,G__53345,G__53346,G__53347,seq53343__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__7380__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__53354__auto__","h__53354__auto__",1245447621,null)),(function (){var x__7380__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__53354__auto__","h__53354__auto__",1245447621,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__53354__auto__","h__53354__auto__",1245447621,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__53354__auto__","h__53354__auto__",1245447621,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__53354__auto__","h__53354__auto__",1245447621,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__53354__auto__","h__53354__auto__",1245447621,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__7380__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__53355__auto__","x__53355__auto__",433323250,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__53355__auto__","x__53355__auto__",433323250,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__7658__auto__ = [];
var len__7651__auto___53363 = arguments.length;
var i__7652__auto___53364 = (0);
while(true){
if((i__7652__auto___53364 < len__7651__auto___53363)){
args__7658__auto__.push((arguments[i__7652__auto___53364]));

var G__53365 = (i__7652__auto___53364 + (1));
i__7652__auto___53364 = G__53365;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((6) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__7659__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq53356){
var G__53357 = cljs.core.first.call(null,seq53356);
var seq53356__$1 = cljs.core.next.call(null,seq53356);
var G__53358 = cljs.core.first.call(null,seq53356__$1);
var seq53356__$2 = cljs.core.next.call(null,seq53356__$1);
var G__53359 = cljs.core.first.call(null,seq53356__$2);
var seq53356__$3 = cljs.core.next.call(null,seq53356__$2);
var G__53360 = cljs.core.first.call(null,seq53356__$3);
var seq53356__$4 = cljs.core.next.call(null,seq53356__$3);
var G__53361 = cljs.core.first.call(null,seq53356__$4);
var seq53356__$5 = cljs.core.next.call(null,seq53356__$4);
var G__53362 = cljs.core.first.call(null,seq53356__$5);
var seq53356__$6 = cljs.core.next.call(null,seq53356__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__53357,G__53358,G__53359,G__53360,G__53361,G__53362,seq53356__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = clojure.walk.postwalk.call(null,(function (p1__53366_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__53366_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__53366_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__53366_SHARP_));
} else {
return p1__53366_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__53367,fkv){
var vec__53371 = p__53367;
var f1 = cljs.core.nth.call(null,vec__53371,(0),null);
var k = cljs.core.nth.call(null,vec__53371,(1),null);
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
var args__7658__auto__ = [];
var len__7651__auto___53377 = arguments.length;
var i__7652__auto___53378 = (0);
while(true){
if((i__7652__auto___53378 < len__7651__auto___53377)){
args__7658__auto__.push((arguments[i__7652__auto___53378]));

var G__53379 = (i__7652__auto___53378 + (1));
i__7652__auto___53378 = G__53379;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str("t_"),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__7380__auto__ = cljs.core.symbol.call(null,[cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__7380__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__7380__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__7380__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),locals,(function (){var x__7380__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__7380__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),locals,(function (){var x__7380__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq53374){
var G__53375 = cljs.core.first.call(null,seq53374);
var seq53374__$1 = cljs.core.next.call(null,seq53374);
var G__53376 = cljs.core.first.call(null,seq53374__$1);
var seq53374__$2 = cljs.core.next.call(null,seq53374__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__53375,G__53376,seq53374__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___53384 = arguments.length;
var i__7652__auto___53385 = (0);
while(true){
if((i__7652__auto___53385 < len__7651__auto___53384)){
args__7658__auto__.push((arguments[i__7652__auto___53385]));

var G__53386 = (i__7652__auto___53385 + (1));
i__7652__auto___53385 = G__53386;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq53380){
var G__53381 = cljs.core.first.call(null,seq53380);
var seq53380__$1 = cljs.core.next.call(null,seq53380);
var G__53382 = cljs.core.first.call(null,seq53380__$1);
var seq53380__$2 = cljs.core.next.call(null,seq53380__$1);
var G__53383 = cljs.core.first.call(null,seq53380__$2);
var seq53380__$3 = cljs.core.next.call(null,seq53380__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__53381,G__53382,G__53383,seq53380__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__7658__auto__ = [];
var len__7651__auto___53391 = arguments.length;
var i__7652__auto___53392 = (0);
while(true){
if((i__7652__auto___53392 < len__7651__auto___53391)){
args__7658__auto__.push((arguments[i__7652__auto___53392]));

var G__53393 = (i__7652__auto___53392 + (1));
i__7652__auto___53392 = G__53393;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__7380__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq53387){
var G__53388 = cljs.core.first.call(null,seq53387);
var seq53387__$1 = cljs.core.next.call(null,seq53387);
var G__53389 = cljs.core.first.call(null,seq53387__$1);
var seq53387__$2 = cljs.core.next.call(null,seq53387__$1);
var G__53390 = cljs.core.first.call(null,seq53387__$2);
var seq53387__$3 = cljs.core.next.call(null,seq53387__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__53388,G__53389,G__53390,seq53387__$3);
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
var args__7658__auto__ = [];
var len__7651__auto___53398 = arguments.length;
var i__7652__auto___53399 = (0);
while(true){
if((i__7652__auto___53399 < len__7651__auto___53398)){
args__7658__auto__.push((arguments[i__7652__auto___53399]));

var G__53400 = (i__7652__auto___53399 + (1));
i__7652__auto___53399 = G__53400;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq53394){
var G__53395 = cljs.core.first.call(null,seq53394);
var seq53394__$1 = cljs.core.next.call(null,seq53394);
var G__53396 = cljs.core.first.call(null,seq53394__$1);
var seq53394__$2 = cljs.core.next.call(null,seq53394__$1);
var G__53397 = cljs.core.first.call(null,seq53394__$2);
var seq53394__$3 = cljs.core.next.call(null,seq53394__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__53395,G__53396,G__53397,seq53394__$3);
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

if(cljs.core.truth_((function (){var and__6531__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__6531__auto__)){
var and__6531__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__6531__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__6531__auto____$1;
}
} else {
return and__6531__auto__;
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
var G__53401 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__53402 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__53401;
s = G__53402;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__53403){
var vec__53411 = p__53403;
var p = cljs.core.nth.call(null,vec__53411,(0),null);
var sigs = cljs.core.nth.call(null,vec__53411,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__7380__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__53411,p,sigs){
return (function (p__53414){
var vec__53415 = p__53414;
var seq__53416 = cljs.core.seq.call(null,vec__53415);
var first__53417 = cljs.core.first.call(null,seq__53416);
var seq__53416__$1 = cljs.core.next.call(null,seq__53416);
var f = first__53417;
var meths = seq__53416__$1;
var form = vec__53415;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__7380__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});})(psym,pfn_prefix,vec__53411,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__7471__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7472__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7473__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7474__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7475__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__7471__auto__,prefer_table__7472__auto__,method_cache__7473__auto__,cached_hierarchy__7474__auto__,hierarchy__7475__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__7471__auto__,prefer_table__7472__auto__,method_cache__7473__auto__,cached_hierarchy__7474__auto__,hierarchy__7475__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7475__auto__,method_table__7471__auto__,prefer_table__7472__auto__,method_cache__7473__auto__,cached_hierarchy__7474__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__7380__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__7380__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__7380__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__53418){
var vec__53425 = p__53418;
var seq__53426 = cljs.core.seq.call(null,vec__53425);
var first__53427 = cljs.core.first.call(null,seq__53426);
var seq__53426__$1 = cljs.core.next.call(null,seq__53426);
var vec__53428 = first__53427;
var seq__53429 = cljs.core.seq.call(null,vec__53428);
var first__53430 = cljs.core.first.call(null,seq__53429);
var seq__53429__$1 = cljs.core.next.call(null,seq__53429);
var this$ = first__53430;
var args = seq__53429__$1;
var sig = vec__53428;
var body = seq__53426__$1;
var x__7380__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__53431){
var vec__53438 = p__53431;
var seq__53439 = cljs.core.seq.call(null,vec__53438);
var first__53440 = cljs.core.first.call(null,seq__53439);
var seq__53439__$1 = cljs.core.next.call(null,seq__53439);
var vec__53441 = first__53440;
var seq__53442 = cljs.core.seq.call(null,vec__53441);
var first__53443 = cljs.core.first.call(null,seq__53442);
var seq__53442__$1 = cljs.core.next.call(null,seq__53442);
var this$ = first__53443;
var args = seq__53442__$1;
var sig = vec__53441;
var body = seq__53439__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__7380__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__53444){
var vec__53451 = p__53444;
var seq__53452 = cljs.core.seq.call(null,vec__53451);
var first__53453 = cljs.core.first.call(null,seq__53452);
var seq__53452__$1 = cljs.core.next.call(null,seq__53452);
var vec__53454 = first__53453;
var seq__53455 = cljs.core.seq.call(null,vec__53454);
var first__53456 = cljs.core.first.call(null,seq__53455);
var seq__53455__$1 = cljs.core.next.call(null,seq__53455);
var this$ = first__53456;
var args = seq__53455__$1;
var sig = vec__53454;
var body = seq__53452__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__7380__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__53457){
var vec__53464 = p__53457;
var seq__53465 = cljs.core.seq.call(null,vec__53464);
var first__53466 = cljs.core.first.call(null,seq__53465);
var seq__53465__$1 = cljs.core.next.call(null,seq__53465);
var vec__53467 = first__53466;
var seq__53468 = cljs.core.seq.call(null,vec__53467);
var first__53469 = cljs.core.first.call(null,seq__53468);
var seq__53468__$1 = cljs.core.next.call(null,seq__53468);
var this$ = first__53469;
var args = seq__53468__$1;
var sig = vec__53467;
var body = seq__53465__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__7380__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__53478){
var vec__53479 = p__53478;
var seq__53480 = cljs.core.seq.call(null,vec__53479);
var first__53481 = cljs.core.first.call(null,seq__53480);
var seq__53480__$1 = cljs.core.next.call(null,seq__53480);
var f = first__53481;
var meths = seq__53480__$1;
var form = vec__53479;
var vec__53482 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__53482,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__53482,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__53482,f__$1,meths__$1,vec__53479,seq__53480,first__53481,seq__53480__$1,f,meths,form){
return (function (p1__53470_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__53470_SHARP_);
});})(vec__53482,f__$1,meths__$1,vec__53479,seq__53480,first__53481,seq__53480__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__53486){
var vec__53490 = p__53486;
var seq__53491 = cljs.core.seq.call(null,vec__53490);
var first__53492 = cljs.core.first.call(null,seq__53491);
var seq__53491__$1 = cljs.core.next.call(null,seq__53491);
var f = first__53492;
var meths = seq__53491__$1;
var form = vec__53490;
return cljs.core.map.call(null,((function (vec__53490,seq__53491,first__53492,seq__53491__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});})(vec__53490,seq__53491,first__53492,seq__53491__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__53490,seq__53491,first__53492,seq__53491__$1,f,meths,form){
return (function (p1__53485_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__53485_SHARP_);
});})(vec__53490,seq__53491,first__53492,seq__53491__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__53494){
var vec__53498 = p__53494;
var seq__53499 = cljs.core.seq.call(null,vec__53498);
var first__53500 = cljs.core.first.call(null,seq__53499);
var seq__53499__$1 = cljs.core.next.call(null,seq__53499);
var f = first__53500;
var meths = seq__53499__$1;
var form = vec__53498;
var meths__$1 = cljs.core.map.call(null,((function (vec__53498,seq__53499,first__53500,seq__53499__$1,f,meths,form){
return (function (p1__53493_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__53493_SHARP_);
});})(vec__53498,seq__53499,first__53500,seq__53499__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__7380__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__7380__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__7380__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__7380__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__53501){
var vec__53509 = p__53501;
var seq__53510 = cljs.core.seq.call(null,vec__53509);
var first__53511 = cljs.core.first.call(null,seq__53510);
var seq__53510__$1 = cljs.core.next.call(null,seq__53510);
var f = first__53511;
var meths = seq__53510__$1;
var form = vec__53509;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__53509,seq__53510,first__53511,seq__53510__$1,f,meths,form){
return (function (p__53512){
var vec__53513 = p__53512;
var seq__53514 = cljs.core.seq.call(null,vec__53513);
var first__53515 = cljs.core.first.call(null,seq__53514);
var seq__53514__$1 = cljs.core.next.call(null,seq__53514);
var sig = first__53515;
var body = seq__53514__$1;
var meth = vec__53513;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});})(pf,vec__53509,seq__53510,first__53511,seq__53510__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__53516){
var vec__53520 = p__53516;
var p = cljs.core.nth.call(null,vec__53520,(0),null);
var sigs = cljs.core.nth.call(null,vec__53520,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__53520,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__53520,p,sigs))
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
var vec__53526 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__53526,(0),null);
var sigs = cljs.core.nth.call(null,vec__53526,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_53529 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_53529))){
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

var G__53530 = cljs.core.next.call(null,sigs__$1);
var G__53531 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__53530;
seen = G__53531;
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

var seen_53538 = cljs.core.PersistentHashSet.EMPTY;
var methods_53539__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_53539__$1)){
var vec__53535_53540 = cljs.core.first.call(null,methods_53539__$1);
var fname_53541 = cljs.core.nth.call(null,vec__53535_53540,(0),null);
var method_53542 = vec__53535_53540;
if(cljs.core.contains_QMARK_.call(null,seen_53538,fname_53541)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_53541], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_53542);

var G__53543 = cljs.core.conj.call(null,seen_53538,fname_53541);
var G__53544 = cljs.core.next.call(null,methods_53539__$1);
seen_53538 = G__53543;
methods_53539__$1 = G__53544;
continue;
} else {
}
break;
}

var G__53545 = cljs.core.conj.call(null,protos,proto);
var G__53546 = impls__$2;
protos = G__53545;
impls__$1 = G__53546;
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
var args__7658__auto__ = [];
var len__7651__auto___53555 = arguments.length;
var i__7652__auto___53556 = (0);
while(true){
if((i__7652__auto___53556 < len__7651__auto___53555)){
args__7658__auto__.push((arguments[i__7652__auto___53556]));

var G__53557 = (i__7652__auto___53556 + (1));
i__7652__auto___53556 = G__53557;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__53552 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__53552,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__53552,(1),null);
if(cljs.core.truth_((function (){var and__6531__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__6531__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__6531__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__53552,type,assign_impls){
return (function (p1__53547_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__53547_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__53552,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq53548){
var G__53549 = cljs.core.first.call(null,seq53548);
var seq53548__$1 = cljs.core.next.call(null,seq53548);
var G__53550 = cljs.core.first.call(null,seq53548__$1);
var seq53548__$2 = cljs.core.next.call(null,seq53548__$1);
var G__53551 = cljs.core.first.call(null,seq53548__$2);
var seq53548__$3 = cljs.core.next.call(null,seq53548__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__53549,G__53550,G__53551,seq53548__$3);
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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__53559){
var vec__53563 = p__53559;
var f = cljs.core.nth.call(null,vec__53563,(0),null);
var sigs = cljs.core.nth.call(null,vec__53563,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__53563,f,sigs){
return (function (p1__53558_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__53558_SHARP_),cljs.core.nnext.call(null,p1__53558_SHARP_));
});})(vec__53563,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args53566 = [];
var len__7651__auto___53569 = arguments.length;
var i__7652__auto___53570 = (0);
while(true){
if((i__7652__auto___53570 < len__7651__auto___53569)){
args53566.push((arguments[i__7652__auto___53570]));

var G__53571 = (i__7652__auto___53570 + (1));
i__7652__auto___53570 = G__53571;
continue;
} else {
}
break;
}

var G__53568 = args53566.length;
switch (G__53568) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53566.length)].join('')));

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
var G__53573 = ret__$1;
var G__53574 = specs__$2;
ret = G__53573;
specs__$1 = G__53574;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__53575_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__53575_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__7380__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__7380__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
var args__7658__auto__ = [];
var len__7651__auto___53587 = arguments.length;
var i__7652__auto___53588 = (0);
while(true){
if((i__7652__auto___53588 < len__7651__auto___53587)){
args__7658__auto__.push((arguments[i__7652__auto___53588]));

var G__53589 = (i__7652__auto___53588 + (1));
i__7652__auto___53588 = G__53589;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((4) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7659__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__53584 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__53584,(0),null);
var pmasks = cljs.core.nth.call(null,vec__53584,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__7380__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__7380__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__7380__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__7380__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__7380__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__7380__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53576__auto__","this__53576__auto__",702086697,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__53577__auto__","writer__53577__auto__",-1940244944,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__53578__auto__","opt__53578__auto__",-374074842,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__53577__auto__","writer__53577__auto__",-1940244944,null)),(function (){var x__7380__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq53579){
var G__53580 = cljs.core.first.call(null,seq53579);
var seq53579__$1 = cljs.core.next.call(null,seq53579);
var G__53581 = cljs.core.first.call(null,seq53579__$1);
var seq53579__$2 = cljs.core.next.call(null,seq53579__$1);
var G__53582 = cljs.core.first.call(null,seq53579__$2);
var seq53579__$3 = cljs.core.next.call(null,seq53579__$2);
var G__53583 = cljs.core.first.call(null,seq53579__$3);
var seq53579__$4 = cljs.core.next.call(null,seq53579__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__53580,G__53581,G__53582,G__53583,seq53579__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__53590_SHARP_){
return cljs.core.with_meta.call(null,p1__53590_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53591__auto__","this__53591__auto__",776858514,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__7380__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53592__auto__","this__53592__auto__",449507146,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53592__auto__","this__53592__auto__",449507146,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53593__auto__","this__53593__auto__",1184285160,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__53594__auto__","other__53594__auto__",-1598014380,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__53594__auto__","other__53594__auto__",-1598014380,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53593__auto__","this__53593__auto__",1184285160,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__53594__auto__","other__53594__auto__",-1598014380,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53593__auto__","this__53593__auto__",1184285160,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__53594__auto__","other__53594__auto__",-1598014380,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53595__auto__","this__53595__auto__",-2105293467,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53596__auto__","this__53596__auto__",385074074,null)),(function (){var x__7380__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__7380__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53597__auto__","this__53597__auto__",-1477691734,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__53598__auto__","k__53598__auto__",-1111281981,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53597__auto__","this__53597__auto__",-1477691734,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__53598__auto__","k__53598__auto__",-1111281981,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53599__auto__","this__53599__auto__",-1675520043,null)),(function (){var x__7380__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__53600__auto__","else__53600__auto__",268699388,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__7380__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__7380__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__53600__auto__","else__53600__auto__",268699388,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53601__auto__","this__53601__auto__",1140152218,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__7380__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53602__auto__","this__53602__auto__",2015320482,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__53603__auto__","entry__53603__auto__",-1039739468,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__53603__auto__","entry__53603__auto__",-1039739468,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53602__auto__","this__53602__auto__",2015320482,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__53603__auto__","entry__53603__auto__",-1039739468,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__53603__auto__","entry__53603__auto__",-1039739468,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53602__auto__","this__53602__auto__",2015320482,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__53603__auto__","entry__53603__auto__",-1039739468,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53604__auto__","this__53604__auto__",-1092724463,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__53605__auto__","k__53605__auto__",2038052919,null)),(function (){var x__7380__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__53605__auto__","k__53605__auto__",2038052919,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__7380__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__53605__auto__","k__53605__auto__",2038052919,null)),(function (){var x__7380__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53606__auto__","this__53606__auto__",1420615573,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__53607__auto__","k__53607__auto__",557406727,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__7380__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__53607__auto__","k__53607__auto__",557406727,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__7380__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53606__auto__","this__53606__auto__",1420615573,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__53607__auto__","k__53607__auto__",557406727,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__7380__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__53607__auto__","k__53607__auto__",557406727,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53609__auto__","this__53609__auto__",-683281494,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__53608_SHARP_){
return cljs.core._conj.call(null,(function (){var x__7380__auto__ = cljs.core.keyword.call(null,p1__53608_SHARP_);
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = p1__53608_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__7380__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53611__auto__","this__53611__auto__",-2039486531,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__53612__auto__","writer__53612__auto__",-1674784718,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__53613__auto__","opts__53613__auto__",1311806530,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__53614__auto__","pr-pair__53614__auto__",1484644212,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__53615__auto__","keyval__53615__auto__",-1277993908,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__53612__auto__","writer__53612__auto__",-1674784718,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__53613__auto__","opts__53613__auto__",1311806530,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__53615__auto__","keyval__53615__auto__",-1277993908,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__53612__auto__","writer__53612__auto__",-1674784718,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__53614__auto__","pr-pair__53614__auto__",1484644212,null)),(function (){var x__7380__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__53613__auto__","opts__53613__auto__",1311806530,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__53610_SHARP_){
return cljs.core._conj.call(null,(function (){var x__7380__auto__ = cljs.core.keyword.call(null,p1__53610_SHARP_);
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = p1__53610_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())))], null));
var vec__53619 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__53619,(0),null);
var pmasks = cljs.core.nth.call(null,vec__53619,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__7380__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__7380__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__7380__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__7380__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__7380__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
var args__7658__auto__ = [];
var len__7651__auto___53629 = arguments.length;
var i__7652__auto___53630 = (0);
while(true){
if((i__7652__auto___53630 < len__7651__auto___53629)){
args__7658__auto__.push((arguments[i__7652__auto___53630]));

var G__53631 = (i__7652__auto___53630 + (1));
i__7652__auto___53630 = G__53631;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((4) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7659__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__7380__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__7380__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__7380__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53622__auto__","this__53622__auto__",-1462144001,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7380__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__7380__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__53622__auto__","this__53622__auto__",-1462144001,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__53623__auto__","writer__53623__auto__",-656167957,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__53623__auto__","writer__53623__auto__",-656167957,null)),(function (){var x__7380__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq53624){
var G__53625 = cljs.core.first.call(null,seq53624);
var seq53624__$1 = cljs.core.next.call(null,seq53624);
var G__53626 = cljs.core.first.call(null,seq53624__$1);
var seq53624__$2 = cljs.core.next.call(null,seq53624__$1);
var G__53627 = cljs.core.first.call(null,seq53624__$2);
var seq53624__$3 = cljs.core.next.call(null,seq53624__$2);
var G__53628 = cljs.core.first.call(null,seq53624__$3);
var seq53624__$4 = cljs.core.next.call(null,seq53624__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__53625,G__53626,G__53627,G__53628,seq53624__$4);
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
var args__7658__auto__ = [];
var len__7651__auto___53659 = arguments.length;
var i__7652__auto___53660 = (0);
while(true){
if((i__7652__auto___53660 < len__7651__auto___53659)){
args__7658__auto__.push((arguments[i__7652__auto___53660]));

var G__53661 = (i__7652__auto___53660 + (1));
i__7652__auto___53660 = G__53661;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__53638 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__53638,(0),null);
var methods$ = cljs.core.nth.call(null,vec__53638,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__53638,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__53638,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__53641 = cljs.core.seq.call(null,methods$);
var chunk__53642 = null;
var count__53643 = (0);
var i__53644 = (0);
while(true){
if((i__53644 < count__53643)){
var vec__53645 = cljs.core._nth.call(null,chunk__53642,i__53644);
var seq__53646 = cljs.core.seq.call(null,vec__53645);
var first__53647 = cljs.core.first.call(null,seq__53646);
var seq__53646__$1 = cljs.core.next.call(null,seq__53646);
var mname = first__53647;
var arities = seq__53646__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__53662 = seq__53641;
var G__53663 = chunk__53642;
var G__53664 = count__53643;
var G__53665 = (i__53644 + (1));
seq__53641 = G__53662;
chunk__53642 = G__53663;
count__53643 = G__53664;
i__53644 = G__53665;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53641);
if(temp__4657__auto__){
var seq__53641__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53641__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__53641__$1);
var G__53666 = cljs.core.chunk_rest.call(null,seq__53641__$1);
var G__53667 = c__7357__auto__;
var G__53668 = cljs.core.count.call(null,c__7357__auto__);
var G__53669 = (0);
seq__53641 = G__53666;
chunk__53642 = G__53667;
count__53643 = G__53668;
i__53644 = G__53669;
continue;
} else {
var vec__53648 = cljs.core.first.call(null,seq__53641__$1);
var seq__53649 = cljs.core.seq.call(null,vec__53648);
var first__53650 = cljs.core.first.call(null,seq__53649);
var seq__53649__$1 = cljs.core.next.call(null,seq__53649);
var mname = first__53650;
var arities = seq__53649__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__53670 = cljs.core.next.call(null,seq__53641__$1);
var G__53671 = null;
var G__53672 = (0);
var G__53673 = (0);
seq__53641 = G__53670;
chunk__53642 = G__53671;
count__53643 = G__53672;
i__53644 = G__53673;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__53638,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__53638,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((cljs.core.map_QMARK_.call(null,arg)) && (cljs.core.some_QMARK_.call(null,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg)))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.call(null);

}
}
});})(p,vec__53638,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__7380__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__53632__auto__","x__53632__auto__",-1317126129,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__7380__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7380__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__53633__auto__","m__53633__auto__",-1727810086,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__7380__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__53632__auto__","x__53632__auto__",-1317126129,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__53633__auto__","m__53633__auto__",-1727810086,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__53633__auto__","m__53633__auto__",-1727810086,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__53633__auto__","m__53633__auto__",-1727810086,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__7380__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__53633__auto__","m__53633__auto__",-1727810086,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__53633__auto__","m__53633__auto__",-1727810086,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__7380__auto__ = [cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});})(p,vec__53638,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__53638,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__53651){
var vec__53652 = p__53651;
var seq__53653 = cljs.core.seq.call(null,vec__53652);
var first__53654 = cljs.core.first.call(null,seq__53653);
var seq__53653__$1 = cljs.core.next.call(null,seq__53653);
var fname = first__53654;
var sigs = seq__53653__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__53638,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__53638,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__53655){
var vec__53656 = p__53655;
var seq__53657 = cljs.core.seq.call(null,vec__53656);
var first__53658 = cljs.core.first.call(null,seq__53657);
var seq__53657__$1 = cljs.core.next.call(null,seq__53657);
var fname = first__53658;
var sigs = seq__53657__$1;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__7380__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__53656,seq__53657,first__53658,seq__53657__$1,fname,sigs,p,vec__53638,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__53656,seq__53657,first__53658,seq__53657__$1,fname,sigs,p,vec__53638,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__53638,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__7380__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq53634){
var G__53635 = cljs.core.first.call(null,seq53634);
var seq53634__$1 = cljs.core.next.call(null,seq53634);
var G__53636 = cljs.core.first.call(null,seq53634__$1);
var seq53634__$2 = cljs.core.next.call(null,seq53634__$1);
var G__53637 = cljs.core.first.call(null,seq53634__$2);
var seq53634__$3 = cljs.core.next.call(null,seq53634__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__53635,G__53636,G__53637,seq53634__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__53677 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__53677,(0),null);
var bit = cljs.core.nth.call(null,vec__53677,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__7380__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__7380__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
var vec__53683 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__53683,(0),null);
var bit = cljs.core.nth.call(null,vec__53683,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__7380__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__7380__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__7380__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__7380__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__7380__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__7380__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__7380__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
var args__7658__auto__ = [];
var len__7651__auto___53689 = arguments.length;
var i__7652__auto___53690 = (0);
while(true){
if((i__7652__auto___53690 < len__7651__auto___53689)){
args__7658__auto__.push((arguments[i__7652__auto___53690]));

var G__53691 = (i__7652__auto___53690 + (1));
i__7652__auto___53690 = G__53691;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq53686){
var G__53687 = cljs.core.first.call(null,seq53686);
var seq53686__$1 = cljs.core.next.call(null,seq53686);
var G__53688 = cljs.core.first.call(null,seq53686__$1);
var seq53686__$2 = cljs.core.next.call(null,seq53686__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__53687,G__53688,seq53686__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__7658__auto__ = [];
var len__7651__auto___53695 = arguments.length;
var i__7652__auto___53696 = (0);
while(true){
if((i__7652__auto___53696 < len__7651__auto___53695)){
args__7658__auto__.push((arguments[i__7652__auto___53696]));

var G__53697 = (i__7652__auto___53696 + (1));
i__7652__auto___53696 = G__53697;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq53692){
var G__53693 = cljs.core.first.call(null,seq53692);
var seq53692__$1 = cljs.core.next.call(null,seq53692);
var G__53694 = cljs.core.first.call(null,seq53692__$1);
var seq53692__$2 = cljs.core.next.call(null,seq53692__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__53693,G__53694,seq53692__$2);
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
var args__7658__auto__ = [];
var len__7651__auto___53706 = arguments.length;
var i__7652__auto___53707 = (0);
while(true){
if((i__7652__auto___53707 < len__7651__auto___53706)){
args__7658__auto__.push((arguments[i__7652__auto___53707]));

var G__53708 = (i__7652__auto___53707 + (1));
i__7652__auto___53707 = G__53708;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__53702){
var vec__53703 = p__53702;
var k = cljs.core.nth.call(null,vec__53703,(0),null);
var v = cljs.core.nth.call(null,vec__53703,(1),null);
return cljs.core._conj.call(null,(function (){var x__7380__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq53698){
var G__53699 = cljs.core.first.call(null,seq53698);
var seq53698__$1 = cljs.core.next.call(null,seq53698);
var G__53700 = cljs.core.first.call(null,seq53698__$1);
var seq53698__$2 = cljs.core.next.call(null,seq53698__$1);
var G__53701 = cljs.core.first.call(null,seq53698__$2);
var seq53698__$3 = cljs.core.next.call(null,seq53698__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__53699,G__53700,G__53701,seq53698__$3);
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
var args__7658__auto__ = [];
var len__7651__auto___53713 = arguments.length;
var i__7652__auto___53714 = (0);
while(true){
if((i__7652__auto___53714 < len__7651__auto___53713)){
args__7658__auto__.push((arguments[i__7652__auto___53714]));

var G__53715 = (i__7652__auto___53714 + (1));
i__7652__auto___53714 = G__53715;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__7380__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq53709){
var G__53710 = cljs.core.first.call(null,seq53709);
var seq53709__$1 = cljs.core.next.call(null,seq53709);
var G__53711 = cljs.core.first.call(null,seq53709__$1);
var seq53709__$2 = cljs.core.next.call(null,seq53709__$1);
var G__53712 = cljs.core.first.call(null,seq53709__$2);
var seq53709__$3 = cljs.core.next.call(null,seq53709__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__53710,G__53711,G__53712,seq53709__$3);
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
var args__7658__auto__ = [];
var len__7651__auto___53734 = arguments.length;
var i__7652__auto___53735 = (0);
while(true){
if((i__7652__auto___53735 < len__7651__auto___53734)){
args__7658__auto__.push((arguments[i__7652__auto___53735]));

var G__53736 = (i__7652__auto___53735 + (1));
i__7652__auto___53735 = G__53736;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((4) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7659__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__53728 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__53731 = cljs.core.nth.call(null,vec__53728,(0),null);
var a = cljs.core.nth.call(null,vec__53731,(0),null);
var b = cljs.core.nth.call(null,vec__53731,(1),null);
var c = cljs.core.nth.call(null,vec__53731,(2),null);
var clause = vec__53731;
var more = cljs.core.nth.call(null,vec__53728,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__7380__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__53716__auto__","p__53716__auto__",-966131036,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__53716__auto__","p__53716__auto__",-966131036,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq53717){
var G__53718 = cljs.core.first.call(null,seq53717);
var seq53717__$1 = cljs.core.next.call(null,seq53717);
var G__53719 = cljs.core.first.call(null,seq53717__$1);
var seq53717__$2 = cljs.core.next.call(null,seq53717__$1);
var G__53720 = cljs.core.first.call(null,seq53717__$2);
var seq53717__$3 = cljs.core.next.call(null,seq53717__$2);
var G__53721 = cljs.core.first.call(null,seq53717__$3);
var seq53717__$4 = cljs.core.next.call(null,seq53717__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__53718,G__53719,G__53720,G__53721,seq53717__$4);
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
var m = (function (){var and__6531__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__6531__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__6531__auto__;
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
var args__7658__auto__ = [];
var len__7651__auto___53757 = arguments.length;
var i__7652__auto___53758 = (0);
while(true){
if((i__7652__auto___53758 < len__7651__auto___53757)){
args__7658__auto__.push((arguments[i__7652__auto___53758]));

var G__53759 = (i__7652__auto___53758 + (1));
i__7652__auto___53758 = G__53759;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__7380__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__53745){
var vec__53746 = p__53745;
var test = cljs.core.nth.call(null,vec__53746,(0),null);
var expr = cljs.core.nth.call(null,vec__53746,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__53746,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__7380__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__53746,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__7380__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
return (function (p1__53737_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__53737_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__53738_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__53738_SHARP_)){
return cljs.core.vec.call(null,p1__53738_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53738_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__7380__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__53740_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__53740_SHARP_)){
return cljs.core.vec.call(null,p1__53740_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53740_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__53739_SHARP_){
return [cljs.core.str(p1__53739_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__7380__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__7380__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__7380__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__53753){
var vec__53754 = p__53753;
var m = cljs.core.nth.call(null,vec__53754,(0),null);
var c = cljs.core.nth.call(null,vec__53754,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__7380__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__7380__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq53741){
var G__53742 = cljs.core.first.call(null,seq53741);
var seq53741__$1 = cljs.core.next.call(null,seq53741);
var G__53743 = cljs.core.first.call(null,seq53741__$1);
var seq53741__$2 = cljs.core.next.call(null,seq53741__$1);
var G__53744 = cljs.core.first.call(null,seq53741__$2);
var seq53741__$3 = cljs.core.next.call(null,seq53741__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__53742,G__53743,G__53744,seq53741__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args53760 = [];
var len__7651__auto___53763 = arguments.length;
var i__7652__auto___53764 = (0);
while(true){
if((i__7652__auto___53764 < len__7651__auto___53763)){
args53760.push((arguments[i__7652__auto___53764]));

var G__53765 = (i__7652__auto___53764 + (1));
i__7652__auto___53764 = G__53765;
continue;
} else {
}
break;
}

var G__53762 = args53760.length;
switch (G__53762) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args53760.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__7380__auto__ = [cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__7380__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__7380__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
return cljs.core.reduce.call(null,(function (groups,p__53853){
var vec__53854 = p__53853;
var k = cljs.core.nth.call(null,vec__53854,(0),null);
var v = cljs.core.nth.call(null,vec__53854,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__53934__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__53934 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__53935__i = 0, G__53935__a = new Array(arguments.length -  0);
while (G__53935__i < G__53935__a.length) {G__53935__a[G__53935__i] = arguments[G__53935__i + 0]; ++G__53935__i;}
  msg = new cljs.core.IndexedSeq(G__53935__a,0);
} 
return G__53934__delegate.call(this,msg);};
G__53934.cljs$lang$maxFixedArity = 0;
G__53934.cljs$lang$applyTo = (function (arglist__53936){
var msg = cljs.core.seq(arglist__53936);
return G__53934__delegate(msg);
});
G__53934.cljs$core$IFn$_invoke$arity$variadic = G__53934__delegate;
return G__53934;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__53857){
var vec__53896 = p__53857;
var seq__53897 = cljs.core.seq.call(null,vec__53896);
var first__53898 = cljs.core.first.call(null,seq__53897);
var seq__53897__$1 = cljs.core.next.call(null,seq__53897);
var vec__53899 = first__53898;
var seq__53900 = cljs.core.seq.call(null,vec__53899);
var first__53901 = cljs.core.first.call(null,seq__53900);
var seq__53900__$1 = cljs.core.next.call(null,seq__53900);
var bind = first__53901;
var first__53901__$1 = cljs.core.first.call(null,seq__53900__$1);
var seq__53900__$2 = cljs.core.next.call(null,seq__53900__$1);
var expr = first__53901__$1;
var mod_pairs = seq__53900__$2;
var vec__53902 = seq__53897__$1;
var vec__53905 = cljs.core.nth.call(null,vec__53902,(0),null);
var _ = cljs.core.nth.call(null,vec__53905,(0),null);
var next_expr = cljs.core.nth.call(null,vec__53905,(1),null);
var next_groups = vec__53902;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__53896,seq__53897,first__53898,seq__53897__$1,vec__53899,seq__53900,first__53901,seq__53900__$1,bind,first__53901__$1,seq__53900__$2,expr,mod_pairs,vec__53902,vec__53905,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__53908){
var vec__53915 = p__53908;
var seq__53916 = cljs.core.seq.call(null,vec__53915);
var first__53917 = cljs.core.first.call(null,seq__53916);
var seq__53916__$1 = cljs.core.next.call(null,seq__53916);
var vec__53918 = first__53917;
var k = cljs.core.nth.call(null,vec__53918,(0),null);
var v = cljs.core.nth.call(null,vec__53918,(1),null);
var pair = vec__53918;
var etc = seq__53916__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__7380__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__53767__auto__","iterys__53767__auto__",1961671700,null)),(function (){var x__7380__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__53768__auto__","fs__53768__auto__",-208808166,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__53767__auto__","iterys__53767__auto__",1961671700,null)),(function (){var x__7380__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__53768__auto__","fs__53768__auto__",-208808166,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__53768__auto__","fs__53768__auto__",-208808166,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__7380__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__53896,seq__53897,first__53898,seq__53897__$1,vec__53899,seq__53900,first__53901,seq__53900__$1,bind,first__53901__$1,seq__53900__$2,expr,mod_pairs,vec__53902,vec__53905,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__53896,seq__53897,first__53898,seq__53897__$1,vec__53899,seq__53900,first__53901,seq__53900__$1,bind,first__53901__$1,seq__53900__$2,expr,mod_pairs,vec__53902,vec__53905,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__53921){
var vec__53928 = p__53921;
var seq__53929 = cljs.core.seq.call(null,vec__53928);
var first__53930 = cljs.core.first.call(null,seq__53929);
var seq__53929__$1 = cljs.core.next.call(null,seq__53929);
var vec__53931 = first__53930;
var k = cljs.core.nth.call(null,vec__53931,(0),null);
var v = cljs.core.nth.call(null,vec__53931,(1),null);
var pair = vec__53931;
var etc = seq__53929__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__7380__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__7380__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__7380__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__7380__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__53896,seq__53897,first__53898,seq__53897__$1,vec__53899,seq__53900,first__53901,seq__53900__$1,bind,first__53901__$1,seq__53900__$2,expr,mod_pairs,vec__53902,vec__53905,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__53769__auto__","c__53769__auto__",1102535248,null)),(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/kevinzeidler/rhizome/reg2/resources/public/cljs/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2326),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2326),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__53770__auto__","size__53770__auto__",126784470,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__53769__auto__","c__53769__auto__",1102535248,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__53770__auto__","size__53770__auto__",126784470,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__7380__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__53770__auto__","size__53770__auto__",126784470,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__53769__auto__","c__53769__auto__",1102535248,null)),(function (){var x__7380__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__7380__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__7380__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__7380__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__53771__auto__","iter__53771__auto__",1338940066,null)),(function (){var x__7380__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__53771__auto__","iter__53771__auto__",1338940066,null)),(function (){var x__7380__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__7658__auto__ = [];
var len__7651__auto___53942 = arguments.length;
var i__7652__auto___53943 = (0);
while(true){
if((i__7652__auto___53943 < len__7651__auto___53942)){
args__7658__auto__.push((arguments[i__7652__auto___53943]));

var G__53944 = (i__7652__auto___53943 + (1));
i__7652__auto___53943 = G__53944;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
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
var G__53945__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__53945 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__53946__i = 0, G__53946__a = new Array(arguments.length -  0);
while (G__53946__i < G__53946__a.length) {G__53946__a[G__53946__i] = arguments[G__53946__i + 0]; ++G__53946__i;}
  msg = new cljs.core.IndexedSeq(G__53946__a,0);
} 
return G__53945__delegate.call(this,msg);};
G__53945.cljs$lang$maxFixedArity = 0;
G__53945.cljs$lang$applyTo = (function (arglist__53947){
var msg = cljs.core.seq(arglist__53947);
return G__53945__delegate(msg);
});
G__53945.cljs$core$IFn$_invoke$arity$variadic = G__53945__delegate;
return G__53945;
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
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__7380__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__7380__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__7380__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__7380__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__7380__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7380__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7380__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__7380__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__7380__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__7380__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7380__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__7380__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__53937__auto__","c__53937__auto__",511783322,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__7380__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__7380__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__53937__auto__","c__53937__auto__",511783322,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__53937__auto__","c__53937__auto__",511783322,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__7380__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq53938){
var G__53939 = cljs.core.first.call(null,seq53938);
var seq53938__$1 = cljs.core.next.call(null,seq53938);
var G__53940 = cljs.core.first.call(null,seq53938__$1);
var seq53938__$2 = cljs.core.next.call(null,seq53938__$1);
var G__53941 = cljs.core.first.call(null,seq53938__$2);
var seq53938__$3 = cljs.core.next.call(null,seq53938__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__53939,G__53940,G__53941,seq53938__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__7658__auto__ = [];
var len__7651__auto___53951 = arguments.length;
var i__7652__auto___53952 = (0);
while(true){
if((i__7652__auto___53952 < len__7651__auto___53951)){
args__7658__auto__.push((arguments[i__7652__auto___53952]));

var G__53953 = (i__7652__auto___53952 + (1));
i__7652__auto___53952 = G__53953;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq53948){
var G__53949 = cljs.core.first.call(null,seq53948);
var seq53948__$1 = cljs.core.next.call(null,seq53948);
var G__53950 = cljs.core.first.call(null,seq53948__$1);
var seq53948__$2 = cljs.core.next.call(null,seq53948__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__53949,G__53950,seq53948__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args53957 = [];
var len__7651__auto___53965 = arguments.length;
var i__7652__auto___53966 = (0);
while(true){
if((i__7652__auto___53966 < len__7651__auto___53965)){
args53957.push((arguments[i__7652__auto___53966]));

var G__53967 = (i__7652__auto___53966 + (1));
i__7652__auto___53966 = G__53967;
continue;
} else {
}
break;
}

var G__53964 = args53957.length;
switch (G__53964) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53957.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7670__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__7380__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__7380__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__53954__auto__","dims__53954__auto__",1235791257,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__53955__auto__","dimarray__53955__auto__",-307076439,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__7380__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__53956__auto__","i__53956__auto__",709220353,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__53955__auto__","dimarray__53955__auto__",-307076439,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__53955__auto__","dimarray__53955__auto__",-307076439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__53956__auto__","i__53956__auto__",709220353,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__53954__auto__","dims__53954__auto__",1235791257,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__53955__auto__","dimarray__53955__auto__",-307076439,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq53958){
var G__53959 = cljs.core.first.call(null,seq53958);
var seq53958__$1 = cljs.core.next.call(null,seq53958);
var G__53960 = cljs.core.first.call(null,seq53958__$1);
var seq53958__$2 = cljs.core.next.call(null,seq53958__$1);
var G__53961 = cljs.core.first.call(null,seq53958__$2);
var seq53958__$3 = cljs.core.next.call(null,seq53958__$2);
var G__53962 = cljs.core.first.call(null,seq53958__$3);
var seq53958__$4 = cljs.core.next.call(null,seq53958__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__53959,G__53960,G__53961,G__53962,seq53958__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args53970 = [];
var len__7651__auto___53977 = arguments.length;
var i__7652__auto___53978 = (0);
while(true){
if((i__7652__auto___53978 < len__7651__auto___53977)){
args53970.push((arguments[i__7652__auto___53978]));

var G__53979 = (i__7652__auto___53978 + (1));
i__7652__auto___53978 = G__53979;
continue;
} else {
}
break;
}

var G__53976 = args53970.length;
switch (G__53976) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53970.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7670__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,_AMPERSAND_env,x)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__53969__auto__","x__53969__auto__",-496326387,null)),(function (){var x__7380__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__53969__auto__","x__53969__auto__",-496326387,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq53971){
var G__53972 = cljs.core.first.call(null,seq53971);
var seq53971__$1 = cljs.core.next.call(null,seq53971);
var G__53973 = cljs.core.first.call(null,seq53971__$1);
var seq53971__$2 = cljs.core.next.call(null,seq53971__$1);
var G__53974 = cljs.core.first.call(null,seq53971__$2);
var seq53971__$3 = cljs.core.next.call(null,seq53971__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__53972,G__53973,G__53974,seq53971__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args53981 = [];
var len__7651__auto___53987 = arguments.length;
var i__7652__auto___53988 = (0);
while(true){
if((i__7652__auto___53988 < len__7651__auto___53987)){
args53981.push((arguments[i__7652__auto___53988]));

var G__53989 = (i__7652__auto___53988 + (1));
i__7652__auto___53988 = G__53989;
continue;
} else {
}
break;
}

var G__53986 = args53981.length;
switch (G__53986) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53981.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7670__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7380__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq53982){
var G__53983 = cljs.core.first.call(null,seq53982);
var seq53982__$1 = cljs.core.next.call(null,seq53982);
var G__53984 = cljs.core.first.call(null,seq53982__$1);
var seq53982__$2 = cljs.core.next.call(null,seq53982__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__53983,G__53984,seq53982__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args53993 = [];
var len__7651__auto___53999 = arguments.length;
var i__7652__auto___54000 = (0);
while(true){
if((i__7652__auto___54000 < len__7651__auto___53999)){
args53993.push((arguments[i__7652__auto___54000]));

var G__54001 = (i__7652__auto___54000 + (1));
i__7652__auto___54000 = G__54001;
continue;
} else {
}
break;
}

var G__53998 = args53993.length;
switch (G__53998) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args53993.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7670__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__53991_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__53991_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__53992_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__53992_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7380__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq53994){
var G__53995 = cljs.core.first.call(null,seq53994);
var seq53994__$1 = cljs.core.next.call(null,seq53994);
var G__53996 = cljs.core.first.call(null,seq53994__$1);
var seq53994__$2 = cljs.core.next.call(null,seq53994__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__53995,G__53996,seq53994__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args54003 = [];
var len__7651__auto___54009 = arguments.length;
var i__7652__auto___54010 = (0);
while(true){
if((i__7652__auto___54010 < len__7651__auto___54009)){
args54003.push((arguments[i__7652__auto___54010]));

var G__54011 = (i__7652__auto___54010 + (1));
i__7652__auto___54010 = G__54011;
continue;
} else {
}
break;
}

var G__54008 = args54003.length;
switch (G__54008) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args54003.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7670__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq54004){
var G__54005 = cljs.core.first.call(null,seq54004);
var seq54004__$1 = cljs.core.next.call(null,seq54004);
var G__54006 = cljs.core.first.call(null,seq54004__$1);
var seq54004__$2 = cljs.core.next.call(null,seq54004__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__54005,G__54006,seq54004__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args54015 = [];
var len__7651__auto___54021 = arguments.length;
var i__7652__auto___54022 = (0);
while(true){
if((i__7652__auto___54022 < len__7651__auto___54021)){
args54015.push((arguments[i__7652__auto___54022]));

var G__54023 = (i__7652__auto___54022 + (1));
i__7652__auto___54022 = G__54023;
continue;
} else {
}
break;
}

var G__54020 = args54015.length;
switch (G__54020) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7670__auto__ = (new cljs.core.IndexedSeq(args54015.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7670__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__54013_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__54013_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__54014_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__54014_SHARP_);
}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__7380__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq54016){
var G__54017 = cljs.core.first.call(null,seq54016);
var seq54016__$1 = cljs.core.next.call(null,seq54016);
var G__54018 = cljs.core.first.call(null,seq54016__$1);
var seq54016__$2 = cljs.core.next.call(null,seq54016__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__54017,G__54018,seq54016__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__7658__auto__ = [];
var len__7651__auto___54040 = arguments.length;
var i__7652__auto___54041 = (0);
while(true){
if((i__7652__auto___54041 < len__7651__auto___54040)){
args__7658__auto__.push((arguments[i__7652__auto___54041]));

var G__54042 = (i__7652__auto___54041 + (1));
i__7652__auto___54041 = G__54042;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__54028){
var vec__54029 = p__54028;
var k = cljs.core.nth.call(null,vec__54029,(0),null);
var _ = cljs.core.nth.call(null,vec__54029,(1),null);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__7380__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__54032){
var vec__54033 = p__54032;
var k = cljs.core.nth.call(null,vec__54033,(0),null);
var v = cljs.core.nth.call(null,vec__54033,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__7380__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__54036){
var vec__54037 = p__54036;
var k = cljs.core.nth.call(null,vec__54037,(0),null);
var v = cljs.core.nth.call(null,vec__54037,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__7380__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__7380__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq54025){
var G__54026 = cljs.core.first.call(null,seq54025);
var seq54025__$1 = cljs.core.next.call(null,seq54025);
var G__54027 = cljs.core.first.call(null,seq54025__$1);
var seq54025__$2 = cljs.core.next.call(null,seq54025__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__54026,G__54027,seq54025__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__54043__auto__","a__54043__auto__",-175288393,null)),(function (){var x__7380__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__54043__auto__","a__54043__auto__",-175288393,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__7380__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__54043__auto__","a__54043__auto__",-175288393,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__7380__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__7380__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__54044__auto__","a__54044__auto__",-425358330,null)),(function (){var x__7380__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__7380__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__7380__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__54044__auto__","a__54044__auto__",-425358330,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__7380__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
var args__7658__auto__ = [];
var len__7651__auto___54050 = arguments.length;
var i__7652__auto___54051 = (0);
while(true){
if((i__7652__auto___54051 < len__7651__auto___54050)){
args__7658__auto__.push((arguments[i__7652__auto___54051]));

var G__54052 = (i__7652__auto___54051 + (1));
i__7652__auto___54051 = G__54052;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__54045__auto__","n__54045__auto__",535388975,null)),(function (){var x__7380__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__7380__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__54045__auto__","n__54045__auto__",535388975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body,(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__7380__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq54046){
var G__54047 = cljs.core.first.call(null,seq54046);
var seq54046__$1 = cljs.core.next.call(null,seq54046);
var G__54048 = cljs.core.first.call(null,seq54046__$1);
var seq54046__$2 = cljs.core.next.call(null,seq54046__$1);
var G__54049 = cljs.core.first.call(null,seq54046__$2);
var seq54046__$3 = cljs.core.next.call(null,seq54046__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__54047,G__54048,G__54049,seq54046__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__7658__auto__ = [];
var len__7651__auto___54056 = arguments.length;
var i__7652__auto___54057 = (0);
while(true){
if((i__7652__auto___54057 < len__7651__auto___54056)){
args__7658__auto__.push((arguments[i__7652__auto___54057]));

var G__54058 = (i__7652__auto___54057 + (1));
i__7652__auto___54057 = G__54058;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__54053_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__54053_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq54054){
var G__54055 = cljs.core.first.call(null,seq54054);
var seq54054__$1 = cljs.core.next.call(null,seq54054);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__54055,seq54054__$1);
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
var args__7658__auto__ = [];
var len__7651__auto___54068 = arguments.length;
var i__7652__auto___54069 = (0);
while(true){
if((i__7652__auto___54069 < len__7651__auto___54068)){
args__7658__auto__.push((arguments[i__7652__auto___54069]));

var G__54070 = (i__7652__auto___54069 + (1));
i__7652__auto___54069 = G__54070;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__54059__auto__","method-table__54059__auto__",167696788,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__7380__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__54060__auto__","prefer-table__54060__auto__",-610228833,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__7380__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__54061__auto__","method-cache__54061__auto__",-1380827748,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__7380__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__54062__auto__","cached-hierarchy__54062__auto__",1254451324,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__7380__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__54063__auto__","hierarchy__54063__auto__",1788422091,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__7380__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__7380__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__54063__auto__","hierarchy__54063__auto__",1788422091,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__54059__auto__","method-table__54059__auto__",167696788,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__54060__auto__","prefer-table__54060__auto__",-610228833,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__54061__auto__","method-cache__54061__auto__",-1380827748,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__54062__auto__","cached-hierarchy__54062__auto__",1254451324,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq54064){
var G__54065 = cljs.core.first.call(null,seq54064);
var seq54064__$1 = cljs.core.next.call(null,seq54064);
var G__54066 = cljs.core.first.call(null,seq54064__$1);
var seq54064__$2 = cljs.core.next.call(null,seq54064__$1);
var G__54067 = cljs.core.first.call(null,seq54064__$2);
var seq54064__$3 = cljs.core.next.call(null,seq54064__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__54065,G__54066,G__54067,seq54064__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__7658__auto__ = [];
var len__7651__auto___54076 = arguments.length;
var i__7652__auto___54077 = (0);
while(true){
if((i__7652__auto___54077 < len__7651__auto___54076)){
args__7658__auto__.push((arguments[i__7652__auto___54077]));

var G__54078 = (i__7652__auto___54077 + (1));
i__7652__auto___54077 = G__54078;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((4) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7659__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq54071){
var G__54072 = cljs.core.first.call(null,seq54071);
var seq54071__$1 = cljs.core.next.call(null,seq54071);
var G__54073 = cljs.core.first.call(null,seq54071__$1);
var seq54071__$2 = cljs.core.next.call(null,seq54071__$1);
var G__54074 = cljs.core.first.call(null,seq54071__$2);
var seq54071__$3 = cljs.core.next.call(null,seq54071__$2);
var G__54075 = cljs.core.first.call(null,seq54071__$3);
var seq54071__$4 = cljs.core.next.call(null,seq54071__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__54072,G__54073,G__54074,G__54075,seq54071__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__54079__auto__","start__54079__auto__",-1923791591,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__54080__auto__","ret__54080__auto__",1294479281,null)),(function (){var x__7380__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__54079__auto__","start__54079__auto__",-1923791591,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__54080__auto__","ret__54080__auto__",1294479281,null)))));
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
var args__7658__auto__ = [];
var len__7651__auto___54095 = arguments.length;
var i__7652__auto___54096 = (0);
while(true){
if((i__7652__auto___54096 < len__7651__auto___54095)){
args__7658__auto__.push((arguments[i__7652__auto___54096]));

var G__54097 = (i__7652__auto___54096 + (1));
i__7652__auto___54096 = G__54097;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((5) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7659__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__54092){
var map__54093 = p__54092;
var map__54093__$1 = ((((!((map__54093 == null)))?((((map__54093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54093):map__54093);
var print_fn = cljs.core.get.call(null,map__54093__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__54081__auto__","start__54081__auto__",-1435113549,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__54082__auto__","ret__54082__auto__",-1470623869,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___54083__auto__","___54083__auto__",422106178,null)),(function (){var x__7380__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__54084__auto__","end__54084__auto__",2133749530,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__54085__auto__","elapsed__54085__auto__",370474773,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__54084__auto__","end__54084__auto__",2133749530,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__54081__auto__","start__54081__auto__",-1435113549,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__7380__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__7380__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__7380__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__54085__auto__","elapsed__54085__auto__",370474773,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq54086){
var G__54087 = cljs.core.first.call(null,seq54086);
var seq54086__$1 = cljs.core.next.call(null,seq54086);
var G__54088 = cljs.core.first.call(null,seq54086__$1);
var seq54086__$2 = cljs.core.next.call(null,seq54086__$1);
var G__54089 = cljs.core.first.call(null,seq54086__$2);
var seq54086__$3 = cljs.core.next.call(null,seq54086__$2);
var G__54090 = cljs.core.first.call(null,seq54086__$3);
var seq54086__$4 = cljs.core.next.call(null,seq54086__$3);
var G__54091 = cljs.core.first.call(null,seq54086__$4);
var seq54086__$5 = cljs.core.next.call(null,seq54086__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__54087,G__54088,G__54089,G__54090,G__54091,seq54086__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args54098 = [];
var len__7651__auto___54101 = arguments.length;
var i__7652__auto___54102 = (0);
while(true){
if((i__7652__auto___54102 < len__7651__auto___54101)){
args54098.push((arguments[i__7652__auto___54102]));

var G__54103 = (i__7652__auto___54102 + (1));
i__7652__auto___54102 = G__54103;
continue;
} else {
}
break;
}

var G__54100 = args54098.length;
switch (G__54100) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54098.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__7380__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__7380__auto__ = prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__7658__auto__ = [];
var len__7651__auto___54110 = arguments.length;
var i__7652__auto___54111 = (0);
while(true){
if((i__7652__auto___54111 < len__7651__auto___54110)){
args__7658__auto__.push((arguments[i__7652__auto___54111]));

var G__54112 = (i__7652__auto___54111 + (1));
i__7652__auto___54111 = G__54112;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__54105__auto__","sb__54105__auto__",-625921903,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__54106__auto__","x__54106__auto__",-2056141929,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__54105__auto__","sb__54105__auto__",-625921903,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__54106__auto__","x__54106__auto__",-2056141929,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__54105__auto__","sb__54105__auto__",-625921903,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq54107){
var G__54108 = cljs.core.first.call(null,seq54107);
var seq54107__$1 = cljs.core.next.call(null,seq54107);
var G__54109 = cljs.core.first.call(null,seq54107__$1);
var seq54107__$2 = cljs.core.next.call(null,seq54107__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__54108,G__54109,seq54107__$2);
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
var args__7658__auto__ = [];
var len__7651__auto___54117 = arguments.length;
var i__7652__auto___54118 = (0);
while(true){
if((i__7652__auto___54118 < len__7651__auto___54117)){
args__7658__auto__.push((arguments[i__7652__auto___54118]));

var G__54119 = (i__7652__auto___54118 + (1));
i__7652__auto___54118 = G__54119;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__54113_SHARP_){
return cljs.core._conj.call(null,(function (){var x__7380__auto__ = p1__54113_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq54114){
var G__54115 = cljs.core.first.call(null,seq54114);
var seq54114__$1 = cljs.core.next.call(null,seq54114);
var G__54116 = cljs.core.first.call(null,seq54114__$1);
var seq54114__$2 = cljs.core.next.call(null,seq54114__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__54115,G__54116,seq54114__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7380__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__7380__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__54120__auto__","this__54120__auto__",1625068213,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__54120__auto__","this__54120__auto__",1625068213,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__54121){
var vec__54133 = p__54121;
var quote = cljs.core.nth.call(null,vec__54133,(0),null);
var ns = cljs.core.nth.call(null,vec__54133,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__7380__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__54133,quote,ns){
return (function (p__54140){
var vec__54141 = p__54140;
var sym = cljs.core.nth.call(null,vec__54141,(0),null);
var _ = cljs.core.nth.call(null,vec__54141,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__7380__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__7380__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
});})(vec__54133,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__54144,p__54145){
var vec__54152 = p__54144;
var quote0 = cljs.core.nth.call(null,vec__54152,(0),null);
var ns = cljs.core.nth.call(null,vec__54152,(1),null);
var vec__54155 = p__54145;
var quote1 = cljs.core.nth.call(null,vec__54155,(0),null);
var sym = cljs.core.nth.call(null,vec__54155,(1),null);
if((cljs.core._EQ_.call(null,quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__7380__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.compiler.munge.call(null,[cljs.core.str(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__7658__auto__ = [];
var len__7651__auto___54163 = arguments.length;
var i__7652__auto___54164 = (0);
while(true){
if((i__7652__auto___54164 < len__7651__auto___54163)){
args__7658__auto__.push((arguments[i__7652__auto___54164]));

var G__54165 = (i__7652__auto___54164 + (1));
i__7652__auto___54164 = G__54165;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((4) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7659__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__7380__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__7380__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq54158){
var G__54159 = cljs.core.first.call(null,seq54158);
var seq54158__$1 = cljs.core.next.call(null,seq54158);
var G__54160 = cljs.core.first.call(null,seq54158__$1);
var seq54158__$2 = cljs.core.next.call(null,seq54158__$1);
var G__54161 = cljs.core.first.call(null,seq54158__$2);
var seq54158__$3 = cljs.core.next.call(null,seq54158__$2);
var G__54162 = cljs.core.first.call(null,seq54158__$3);
var seq54158__$4 = cljs.core.next.call(null,seq54158__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54159,G__54160,G__54161,G__54162,seq54158__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__7658__auto__ = [];
var len__7651__auto___54170 = arguments.length;
var i__7652__auto___54171 = (0);
while(true){
if((i__7652__auto___54171 < len__7651__auto___54170)){
args__7658__auto__.push((arguments[i__7652__auto___54171]));

var G__54172 = (i__7652__auto___54171 + (1));
i__7652__auto___54171 = G__54172;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq54166){
var G__54167 = cljs.core.first.call(null,seq54166);
var seq54166__$1 = cljs.core.next.call(null,seq54166);
var G__54168 = cljs.core.first.call(null,seq54166__$1);
var seq54166__$2 = cljs.core.next.call(null,seq54166__$1);
var G__54169 = cljs.core.first.call(null,seq54166__$2);
var seq54166__$3 = cljs.core.next.call(null,seq54166__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__54167,G__54168,G__54169,seq54166__$3);
});


cljs.core$macros.locking.cljs$lang$macro = true;
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace..
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure/string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__7658__auto__ = [];
var len__7651__auto___54176 = arguments.length;
var i__7652__auto___54177 = (0);
while(true){
if((i__7652__auto___54177 < len__7651__auto___54176)){
args__7658__auto__.push((arguments[i__7652__auto___54177]));

var G__54178 = (i__7652__auto___54177 + (1));
i__7652__auto___54177 = G__54178;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__7380__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq54173){
var G__54174 = cljs.core.first.call(null,seq54173);
var seq54173__$1 = cljs.core.next.call(null,seq54173);
var G__54175 = cljs.core.first.call(null,seq54173__$1);
var seq54173__$2 = cljs.core.next.call(null,seq54173__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__54174,G__54175,seq54173__$2);
});


cljs.core$macros.require.cljs$lang$macro = true;
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__7658__auto__ = [];
var len__7651__auto___54182 = arguments.length;
var i__7652__auto___54183 = (0);
while(true){
if((i__7652__auto___54183 < len__7651__auto___54182)){
args__7658__auto__.push((arguments[i__7652__auto___54183]));

var G__54184 = (i__7652__auto___54183 + (1));
i__7652__auto___54183 = G__54184;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__7380__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq54179){
var G__54180 = cljs.core.first.call(null,seq54179);
var seq54179__$1 = cljs.core.next.call(null,seq54179);
var G__54181 = cljs.core.first.call(null,seq54179__$1);
var seq54179__$2 = cljs.core.next.call(null,seq54179__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__54180,G__54181,seq54179__$2);
});


cljs.core$macros.require_macros.cljs$lang$macro = true;
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__7658__auto__ = [];
var len__7651__auto___54188 = arguments.length;
var i__7652__auto___54189 = (0);
while(true){
if((i__7652__auto___54189 < len__7651__auto___54188)){
args__7658__auto__.push((arguments[i__7652__auto___54189]));

var G__54190 = (i__7652__auto___54189 + (1));
i__7652__auto___54189 = G__54190;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__7380__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq54185){
var G__54186 = cljs.core.first.call(null,seq54185);
var seq54185__$1 = cljs.core.next.call(null,seq54185);
var G__54187 = cljs.core.first.call(null,seq54185__$1);
var seq54185__$2 = cljs.core.next.call(null,seq54185__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__54186,G__54187,seq54185__$2);
});


cljs.core$macros.use.cljs$lang$macro = true;
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__7658__auto__ = [];
var len__7651__auto___54194 = arguments.length;
var i__7652__auto___54195 = (0);
while(true){
if((i__7652__auto___54195 < len__7651__auto___54194)){
args__7658__auto__.push((arguments[i__7652__auto___54195]));

var G__54196 = (i__7652__auto___54195 + (1));
i__7652__auto___54195 = G__54196;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__7380__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq54191){
var G__54192 = cljs.core.first.call(null,seq54191);
var seq54191__$1 = cljs.core.next.call(null,seq54191);
var G__54193 = cljs.core.first.call(null,seq54191__$1);
var seq54191__$2 = cljs.core.next.call(null,seq54191__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__54192,G__54193,seq54191__$2);
});


cljs.core$macros.use_macros.cljs$lang$macro = true;
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__7658__auto__ = [];
var len__7651__auto___54200 = arguments.length;
var i__7652__auto___54201 = (0);
while(true){
if((i__7652__auto___54201 < len__7651__auto___54200)){
args__7658__auto__.push((arguments[i__7652__auto___54201]));

var G__54202 = (i__7652__auto___54201 + (1));
i__7652__auto___54201 = G__54202;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__7380__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq54197){
var G__54198 = cljs.core.first.call(null,seq54197);
var seq54197__$1 = cljs.core.next.call(null,seq54197);
var G__54199 = cljs.core.first.call(null,seq54197__$1);
var seq54197__$2 = cljs.core.next.call(null,seq54197__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__54198,G__54199,seq54197__$2);
});


cljs.core$macros.import$.cljs$lang$macro = true;
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__7658__auto__ = [];
var len__7651__auto___54206 = arguments.length;
var i__7652__auto___54207 = (0);
while(true){
if((i__7652__auto___54207 < len__7651__auto___54206)){
args__7658__auto__.push((arguments[i__7652__auto___54207]));

var G__54208 = (i__7652__auto___54207 + (1));
i__7652__auto___54207 = G__54208;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__7380__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq54203){
var G__54204 = cljs.core.first.call(null,seq54203);
var seq54203__$1 = cljs.core.next.call(null,seq54203);
var G__54205 = cljs.core.first.call(null,seq54203__$1);
var seq54203__$2 = cljs.core.next.call(null,seq54203__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__54204,G__54205,seq54203__$2);
});


cljs.core$macros.refer_clojure.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__7380__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7380__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
return form;
}
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
if(cljs.core.seq_QMARK_.call(null,form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__54209 = form_SINGLEQUOTE_;
var G__54210 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__54209;
form_SINGLEQUOTE_ = G__54210;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7380__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
}
break;
}
} else {
return form;
}
});

cljs.core$macros.macroexpand.cljs$lang$macro = true;
cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__6531__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__6531__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__6531__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args54211 = [];
var len__7651__auto___54218 = arguments.length;
var i__7652__auto___54219 = (0);
while(true){
if((i__7652__auto___54219 < len__7651__auto___54218)){
args54211.push((arguments[i__7652__auto___54219]));

var G__54220 = (i__7652__auto___54219 + (1));
i__7652__auto___54219 = G__54220;
continue;
} else {
}
break;
}

var G__54213 = args54211.length;
switch (G__54213) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54211.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__54214,solo){
var vec__54215 = p__54214;
var seq__54216 = cljs.core.seq.call(null,vec__54215);
var first__54217 = cljs.core.first.call(null,seq__54216);
var seq__54216__$1 = cljs.core.next.call(null,seq__54216);
var arglist = first__54217;
var body = seq__54216__$1;
var method = vec__54215;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__54215,seq__54216,first__54217,seq__54216__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__54215,seq__54216,first__54217,seq__54216__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__54215,seq__54216,first__54217,seq__54216__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__54215,seq__54216,first__54217,seq__54216__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__54215,seq__54216,first__54217,seq__54216__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/kevinzeidler/rhizome/reg2/resources/public/cljs/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2877),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2877),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/kevinzeidler/rhizome/reg2/resources/public/cljs/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
});})(sig,restarg,vec__54215,seq__54216,first__54217,seq__54216__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__54215,seq__54216,first__54217,seq__54216__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),params,(function (){var x__7380__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7380__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
}
});})(sig,restarg,vec__54215,seq__54216,first__54217,seq__54216__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())))):null),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__54222__auto__","len__54222__auto__",-937599459,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__54223__auto__","i__54223__auto__",24949049,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__54223__auto__","i__54223__auto__",24949049,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__54222__auto__","len__54222__auto__",-937599459,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__7380__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__54223__auto__","i__54223__auto__",24949049,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__54223__auto__","i__54223__auto__",24949049,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__54226,emit_var_QMARK_){
var vec__54233 = p__54226;
var vec__54236 = cljs.core.nth.call(null,vec__54233,(0),null);
var seq__54237 = cljs.core.seq.call(null,vec__54236);
var first__54238 = cljs.core.first.call(null,seq__54237);
var seq__54237__$1 = cljs.core.next.call(null,seq__54237);
var arglist = first__54238;
var body = seq__54237__$1;
var method = vec__54236;
var fdecl = vec__54233;
var dest_args = ((function (vec__54233,vec__54236,seq__54237,first__54238,seq__54237__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__54233,vec__54236,seq__54237,first__54238,seq__54237__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});})(vec__54233,vec__54236,seq__54237,first__54238,seq__54237__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__54233,vec__54236,seq__54237,first__54238,seq__54237__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__7380__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__54224__auto__","args__54224__auto__",1543010532,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__54224__auto__","args__54224__auto__",1543010532,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__54225__auto__","argseq__54225__auto__",1020055755,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__7380__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__54224__auto__","args__54224__auto__",1543010532,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/kevinzeidler/rhizome/reg2/resources/public/cljs/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2925),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2925),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__54224__auto__","args__54224__auto__",1543010532,null)),(function (){var x__7380__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__54225__auto__","argseq__54225__auto__",1020055755,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__7380__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__54263){
var vec__54267 = p__54263;
var seq__54268 = cljs.core.seq.call(null,vec__54267);
var first__54269 = cljs.core.first.call(null,seq__54268);
var seq__54268__$1 = cljs.core.next.call(null,seq__54268);
var sig = first__54269;
var body = seq__54268__$1;
var method = vec__54267;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__54239_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__54239_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7380__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__7380__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__7380__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__54240_SHARP_){
return fixed_arity.call(null,rname,p1__54240_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__7380__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__7380__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__54241__auto__","argseq__54241__auto__",-577059844,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/kevinzeidler/rhizome/reg2/resources/public/cljs/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2983),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2983),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__7380__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__54241__auto__","argseq__54241__auto__",-577059844,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__7380__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__7380__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__7380__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__7380__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__7380__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__7380__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__7380__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__54270__i = 0, G__54270__a = new Array(arguments.length -  3);
while (G__54270__i < G__54270__a.length) {G__54270__a[G__54270__i] = arguments[G__54270__i + 3]; ++G__54270__i;}
  fdecl = new cljs.core.IndexedSeq(G__54270__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__54271){
var _AMPERSAND_form = cljs.core.first(arglist__54271);
arglist__54271 = cljs.core.next(arglist__54271);
var _AMPERSAND_env = cljs.core.first(arglist__54271);
arglist__54271 = cljs.core.next(arglist__54271);
var name = cljs.core.first(arglist__54271);
var fdecl = cljs.core.rest(arglist__54271);
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
var args__7658__auto__ = [];
var len__7651__auto___54276 = arguments.length;
var i__7652__auto___54277 = (0);
while(true){
if((i__7652__auto___54277 < len__7651__auto___54276)){
args__7658__auto__.push((arguments[i__7652__auto___54277]));

var G__54278 = (i__7652__auto___54277 + (1));
i__7652__auto___54277 = G__54278;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((3) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7659__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__7380__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__54279 = cljs.core.cons.call(null,f,p);
var G__54280 = cljs.core.next.call(null,args__$1);
p = G__54279;
args__$1 = G__54280;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__54281 = cljs.core.cons.call(null,f,p);
var G__54282 = cljs.core.next.call(null,args__$1);
p = G__54281;
args__$1 = G__54282;
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
var G__54283 = cljs.core.next.call(null,fd);
fd = G__54283;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__54284 = cljs.core.next.call(null,fd);
fd = G__54284;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__7380__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
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
var G__54285 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__54286 = cljs.core.next.call(null,ds);
acc = G__54285;
ds = G__54286;
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
var G__54287 = cljs.core.next.call(null,p);
var G__54288 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__54287;
d = G__54288;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj.call(null,(function (){var x__7380__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__7380__auto____$1 = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__7380__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$1);
})(),x__7380__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq54272){
var G__54273 = cljs.core.first.call(null,seq54272);
var seq54272__$1 = cljs.core.next.call(null,seq54272);
var G__54274 = cljs.core.first.call(null,seq54272__$1);
var seq54272__$2 = cljs.core.next.call(null,seq54272__$1);
var G__54275 = cljs.core.first.call(null,seq54272__$2);
var seq54272__$3 = cljs.core.next.call(null,seq54272__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__54273,G__54274,G__54275,seq54272__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map?rel=1479783807246