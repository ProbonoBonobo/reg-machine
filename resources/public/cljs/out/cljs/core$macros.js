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
var len__25826__auto___50946 = arguments.length;
var i__25827__auto___50947 = (0);
while(true){
if((i__25827__auto___50947 < len__25826__auto___50946)){
args__25833__auto__.push((arguments[i__25827__auto___50947]));

var G__50948 = (i__25827__auto___50947 + (1));
i__25827__auto___50947 = G__50948;
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
var G__50949 = threaded;
var G__50950 = cljs.core.next.call(null,forms__$1);
x__$1 = G__50949;
forms__$1 = G__50950;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq50942){
var G__50943 = cljs.core.first.call(null,seq50942);
var seq50942__$1 = cljs.core.next.call(null,seq50942);
var G__50944 = cljs.core.first.call(null,seq50942__$1);
var seq50942__$2 = cljs.core.next.call(null,seq50942__$1);
var G__50945 = cljs.core.first.call(null,seq50942__$2);
var seq50942__$3 = cljs.core.next.call(null,seq50942__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__50943,G__50944,G__50945,seq50942__$3);
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
var len__25826__auto___50955 = arguments.length;
var i__25827__auto___50956 = (0);
while(true){
if((i__25827__auto___50956 < len__25826__auto___50955)){
args__25833__auto__.push((arguments[i__25827__auto___50956]));

var G__50957 = (i__25827__auto___50956 + (1));
i__25827__auto___50956 = G__50957;
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
var G__50958 = threaded;
var G__50959 = cljs.core.next.call(null,forms__$1);
x__$1 = G__50958;
forms__$1 = G__50959;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq50951){
var G__50952 = cljs.core.first.call(null,seq50951);
var seq50951__$1 = cljs.core.next.call(null,seq50951);
var G__50953 = cljs.core.first.call(null,seq50951__$1);
var seq50951__$2 = cljs.core.next.call(null,seq50951__$1);
var G__50954 = cljs.core.first.call(null,seq50951__$2);
var seq50951__$3 = cljs.core.next.call(null,seq50951__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__50952,G__50953,G__50954,seq50951__$3);
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
var args50960 = [];
var len__25826__auto___50968 = arguments.length;
var i__25827__auto___50969 = (0);
while(true){
if((i__25827__auto___50969 < len__25826__auto___50968)){
args50960.push((arguments[i__25827__auto___50969]));

var G__50970 = (i__25827__auto___50969 + (1));
i__25827__auto___50969 = G__50970;
continue;
} else {
}
break;
}

var G__50967 = args50960.length;
switch (G__50967) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args50960.slice((4)),(0),null));
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

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq50961){
var G__50962 = cljs.core.first.call(null,seq50961);
var seq50961__$1 = cljs.core.next.call(null,seq50961);
var G__50963 = cljs.core.first.call(null,seq50961__$1);
var seq50961__$2 = cljs.core.next.call(null,seq50961__$1);
var G__50964 = cljs.core.first.call(null,seq50961__$2);
var seq50961__$3 = cljs.core.next.call(null,seq50961__$2);
var G__50965 = cljs.core.first.call(null,seq50961__$3);
var seq50961__$4 = cljs.core.next.call(null,seq50961__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__50962,G__50963,G__50964,G__50965,seq50961__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50975 = arguments.length;
var i__25827__auto___50976 = (0);
while(true){
if((i__25827__auto___50976 < len__25826__auto___50975)){
args__25833__auto__.push((arguments[i__25827__auto___50976]));

var G__50977 = (i__25827__auto___50976 + (1));
i__25827__auto___50976 = G__50977;
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

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq50972){
var G__50973 = cljs.core.first.call(null,seq50972);
var seq50972__$1 = cljs.core.next.call(null,seq50972);
var G__50974 = cljs.core.first.call(null,seq50972__$1);
var seq50972__$2 = cljs.core.next.call(null,seq50972__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__50973,G__50974,seq50972__$2);
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
var len__25826__auto___50981 = arguments.length;
var i__25827__auto___50982 = (0);
while(true){
if((i__25827__auto___50982 < len__25826__auto___50981)){
args__25833__auto__.push((arguments[i__25827__auto___50982]));

var G__50983 = (i__25827__auto___50982 + (1));
i__25827__auto___50982 = G__50983;
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

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq50978){
var G__50979 = cljs.core.first.call(null,seq50978);
var seq50978__$1 = cljs.core.next.call(null,seq50978);
var G__50980 = cljs.core.first.call(null,seq50978__$1);
var seq50978__$2 = cljs.core.next.call(null,seq50978__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__50979,G__50980,seq50978__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50988 = arguments.length;
var i__25827__auto___50989 = (0);
while(true){
if((i__25827__auto___50989 < len__25826__auto___50988)){
args__25833__auto__.push((arguments[i__25827__auto___50989]));

var G__50990 = (i__25827__auto___50989 + (1));
i__25827__auto___50989 = G__50990;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__50984_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.vary_meta.call(null,p1__50984_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq50985){
var G__50986 = cljs.core.first.call(null,seq50985);
var seq50985__$1 = cljs.core.next.call(null,seq50985);
var G__50987 = cljs.core.first.call(null,seq50985__$1);
var seq50985__$2 = cljs.core.next.call(null,seq50985__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__50986,G__50987,seq50985__$2);
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
var len__25826__auto___50995 = arguments.length;
var i__25827__auto___50996 = (0);
while(true){
if((i__25827__auto___50996 < len__25826__auto___50995)){
args__25833__auto__.push((arguments[i__25827__auto___50996]));

var G__50997 = (i__25827__auto___50996 + (1));
i__25827__auto___50996 = G__50997;
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

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq50991){
var G__50992 = cljs.core.first.call(null,seq50991);
var seq50991__$1 = cljs.core.next.call(null,seq50991);
var G__50993 = cljs.core.first.call(null,seq50991__$1);
var seq50991__$2 = cljs.core.next.call(null,seq50991__$1);
var G__50994 = cljs.core.first.call(null,seq50991__$2);
var seq50991__$3 = cljs.core.next.call(null,seq50991__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__50992,G__50993,G__50994,seq50991__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__50998 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__50999 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__50998;
s = G__50999;
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
return (function (p__51004){
var vec__51005 = p__51004;
var t = cljs.core.nth.call(null,vec__51005,(0),null);
var fs = cljs.core.nth.call(null,vec__51005,(1),null);
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
var len__25826__auto___51012 = arguments.length;
var i__25827__auto___51013 = (0);
while(true){
if((i__25827__auto___51013 < len__25826__auto___51012)){
args__25833__auto__.push((arguments[i__25827__auto___51013]));

var G__51014 = (i__25827__auto___51013 + (1));
i__25827__auto___51013 = G__51014;
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

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq51008){
var G__51009 = cljs.core.first.call(null,seq51008);
var seq51008__$1 = cljs.core.next.call(null,seq51008);
var G__51010 = cljs.core.first.call(null,seq51008__$1);
var seq51008__$2 = cljs.core.next.call(null,seq51008__$1);
var G__51011 = cljs.core.first.call(null,seq51008__$2);
var seq51008__$3 = cljs.core.next.call(null,seq51008__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__51009,G__51010,G__51011,seq51008__$3);
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
var G__51015 = cljs.core.next.call(null,params__$1);
var G__51016 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__51017 = lets;
params__$1 = G__51015;
new_params = G__51016;
lets = G__51017;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__51018 = cljs.core.next.call(null,params__$1);
var G__51019 = cljs.core.conj.call(null,new_params,gparam);
var G__51020 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__51018;
new_params = G__51019;
lets = G__51020;
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
var len__25826__auto___51027 = arguments.length;
var i__25827__auto___51028 = (0);
while(true){
if((i__25827__auto___51028 < len__25826__auto___51027)){
args__25833__auto__.push((arguments[i__25827__auto___51028]));

var G__51029 = (i__25827__auto___51028 + (1));
i__25827__auto___51028 = G__51029;
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

var vec__51024 = sig;
var seq__51025 = cljs.core.seq.call(null,vec__51024);
var first__51026 = cljs.core.first.call(null,seq__51025);
var seq__51025__$1 = cljs.core.next.call(null,seq__51025);
var params = first__51026;
var body = seq__51025__$1;
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
})(),cljs.core.map.call(null,((function (vec__51024,seq__51025,first__51026,seq__51025__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__25585__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(vec__51024,seq__51025,first__51026,seq__51025__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__51024,seq__51025,first__51026,seq__51025__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__25585__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(vec__51024,seq__51025,first__51026,seq__51025__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq51021){
var G__51022 = cljs.core.first.call(null,seq51021);
var seq51021__$1 = cljs.core.next.call(null,seq51021);
var G__51023 = cljs.core.first.call(null,seq51021__$1);
var seq51021__$2 = cljs.core.next.call(null,seq51021__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__51022,G__51023,seq51021__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___51034 = arguments.length;
var i__25827__auto___51035 = (0);
while(true){
if((i__25827__auto___51035 < len__25826__auto___51034)){
args__25833__auto__.push((arguments[i__25827__auto___51035]));

var G__51036 = (i__25827__auto___51035 + (1));
i__25827__auto___51035 = G__51036;
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

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq51030){
var G__51031 = cljs.core.first.call(null,seq51030);
var seq51030__$1 = cljs.core.next.call(null,seq51030);
var G__51032 = cljs.core.first.call(null,seq51030__$1);
var seq51030__$2 = cljs.core.next.call(null,seq51030__$1);
var G__51033 = cljs.core.first.call(null,seq51030__$2);
var seq51030__$3 = cljs.core.next.call(null,seq51030__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__51031,G__51032,G__51033,seq51030__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args51038 = [];
var len__25826__auto___51047 = arguments.length;
var i__25827__auto___51048 = (0);
while(true){
if((i__25827__auto___51048 < len__25826__auto___51047)){
args51038.push((arguments[i__25827__auto___51048]));

var G__51049 = (i__25827__auto___51048 + (1));
i__25827__auto___51048 = G__51049;
continue;
} else {
}
break;
}

var G__51046 = args51038.length;
switch (G__51046) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51038.slice((5)),(0),null));
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__51037__auto__","temp__51037__auto__",1725253927,null)),(function (){var x__25585__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__51037__auto__","temp__51037__auto__",1725253927,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__51037__auto__","temp__51037__auto__",1725253927,null))))));
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

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq51039){
var G__51040 = cljs.core.first.call(null,seq51039);
var seq51039__$1 = cljs.core.next.call(null,seq51039);
var G__51041 = cljs.core.first.call(null,seq51039__$1);
var seq51039__$2 = cljs.core.next.call(null,seq51039__$1);
var G__51042 = cljs.core.first.call(null,seq51039__$2);
var seq51039__$3 = cljs.core.next.call(null,seq51039__$2);
var G__51043 = cljs.core.first.call(null,seq51039__$3);
var seq51039__$4 = cljs.core.next.call(null,seq51039__$3);
var G__51044 = cljs.core.first.call(null,seq51039__$4);
var seq51039__$5 = cljs.core.next.call(null,seq51039__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__51040,G__51041,G__51042,G__51043,G__51044,seq51039__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args51051 = [];
var len__25826__auto___51054 = arguments.length;
var i__25827__auto___51055 = (0);
while(true){
if((i__25827__auto___51055 < len__25826__auto___51054)){
args51051.push((arguments[i__25827__auto___51055]));

var G__51056 = (i__25827__auto___51055 + (1));
i__25827__auto___51055 = G__51056;
continue;
} else {
}
break;
}

var G__51053 = args51051.length;
switch (G__51053) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args51051.length - (2)))].join('')));

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
var len__25826__auto___51063 = arguments.length;
var i__25827__auto___51064 = (0);
while(true){
if((i__25827__auto___51064 < len__25826__auto___51063)){
args__25833__auto__.push((arguments[i__25827__auto___51064]));

var G__51065 = (i__25827__auto___51064 + (1));
i__25827__auto___51064 = G__51065;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__51058_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__51058_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq51059){
var G__51060 = cljs.core.first.call(null,seq51059);
var seq51059__$1 = cljs.core.next.call(null,seq51059);
var G__51061 = cljs.core.first.call(null,seq51059__$1);
var seq51059__$2 = cljs.core.next.call(null,seq51059__$1);
var G__51062 = cljs.core.first.call(null,seq51059__$2);
var seq51059__$3 = cljs.core.next.call(null,seq51059__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__51060,G__51061,G__51062,seq51059__$3);
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
var len__25826__auto___51070 = arguments.length;
var i__25827__auto___51071 = (0);
while(true){
if((i__25827__auto___51071 < len__25826__auto___51070)){
args__25833__auto__.push((arguments[i__25827__auto___51071]));

var G__51072 = (i__25827__auto___51071 + (1));
i__25827__auto___51071 = G__51072;
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

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq51066){
var G__51067 = cljs.core.first.call(null,seq51066);
var seq51066__$1 = cljs.core.next.call(null,seq51066);
var G__51068 = cljs.core.first.call(null,seq51066__$1);
var seq51066__$2 = cljs.core.next.call(null,seq51066__$1);
var G__51069 = cljs.core.first.call(null,seq51066__$2);
var seq51066__$3 = cljs.core.next.call(null,seq51066__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__51067,G__51068,G__51069,seq51066__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__25833__auto__ = [];
var len__25826__auto___51077 = arguments.length;
var i__25827__auto___51078 = (0);
while(true){
if((i__25827__auto___51078 < len__25826__auto___51077)){
args__25833__auto__.push((arguments[i__25827__auto___51078]));

var G__51079 = (i__25827__auto___51078 + (1));
i__25827__auto___51078 = G__51079;
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

cljs.core$macros.when.cljs$lang$applyTo = (function (seq51073){
var G__51074 = cljs.core.first.call(null,seq51073);
var seq51073__$1 = cljs.core.next.call(null,seq51073);
var G__51075 = cljs.core.first.call(null,seq51073__$1);
var seq51073__$2 = cljs.core.next.call(null,seq51073__$1);
var G__51076 = cljs.core.first.call(null,seq51073__$2);
var seq51073__$3 = cljs.core.next.call(null,seq51073__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__51074,G__51075,G__51076,seq51073__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__25833__auto__ = [];
var len__25826__auto___51088 = arguments.length;
var i__25827__auto___51089 = (0);
while(true){
if((i__25827__auto___51089 < len__25826__auto___51088)){
args__25833__auto__.push((arguments[i__25827__auto___51089]));

var G__51090 = (i__25827__auto___51089 + (1));
i__25827__auto___51089 = G__51090;
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


var vec__51085 = bindings;
var x = cljs.core.nth.call(null,vec__51085,(0),null);
var xs = cljs.core.nth.call(null,vec__51085,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__51080__auto__","xs__51080__auto__",-1590040430,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25585__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__51080__auto__","xs__51080__auto__",-1590040430,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq51081){
var G__51082 = cljs.core.first.call(null,seq51081);
var seq51081__$1 = cljs.core.next.call(null,seq51081);
var G__51083 = cljs.core.first.call(null,seq51081__$1);
var seq51081__$2 = cljs.core.next.call(null,seq51081__$1);
var G__51084 = cljs.core.first.call(null,seq51081__$2);
var seq51081__$3 = cljs.core.next.call(null,seq51081__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__51082,G__51083,G__51084,seq51081__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__25833__auto__ = [];
var len__25826__auto___51096 = arguments.length;
var i__25827__auto___51097 = (0);
while(true){
if((i__25827__auto___51097 < len__25826__auto___51096)){
args__25833__auto__.push((arguments[i__25827__auto___51097]));

var G__51098 = (i__25827__auto___51097 + (1));
i__25827__auto___51097 = G__51098;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__51091__auto__","temp__51091__auto__",872462070,null)),(function (){var x__25585__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__51091__auto__","temp__51091__auto__",872462070,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__51091__auto__","temp__51091__auto__",872462070,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq51092){
var G__51093 = cljs.core.first.call(null,seq51092);
var seq51092__$1 = cljs.core.next.call(null,seq51092);
var G__51094 = cljs.core.first.call(null,seq51092__$1);
var seq51092__$2 = cljs.core.next.call(null,seq51092__$1);
var G__51095 = cljs.core.first.call(null,seq51092__$2);
var seq51092__$3 = cljs.core.next.call(null,seq51092__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__51093,G__51094,G__51095,seq51092__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__25833__auto__ = [];
var len__25826__auto___51103 = arguments.length;
var i__25827__auto___51104 = (0);
while(true){
if((i__25827__auto___51104 < len__25826__auto___51103)){
args__25833__auto__.push((arguments[i__25827__auto___51104]));

var G__51105 = (i__25827__auto___51104 + (1));
i__25827__auto___51104 = G__51105;
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

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq51099){
var G__51100 = cljs.core.first.call(null,seq51099);
var seq51099__$1 = cljs.core.next.call(null,seq51099);
var G__51101 = cljs.core.first.call(null,seq51099__$1);
var seq51099__$2 = cljs.core.next.call(null,seq51099__$1);
var G__51102 = cljs.core.first.call(null,seq51099__$2);
var seq51099__$3 = cljs.core.next.call(null,seq51099__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__51100,G__51101,G__51102,seq51099__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__25833__auto__ = [];
var len__25826__auto___51110 = arguments.length;
var i__25827__auto___51111 = (0);
while(true){
if((i__25827__auto___51111 < len__25826__auto___51110)){
args__25833__auto__.push((arguments[i__25827__auto___51111]));

var G__51112 = (i__25827__auto___51111 + (1));
i__25827__auto___51111 = G__51112;
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

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq51106){
var G__51107 = cljs.core.first.call(null,seq51106);
var seq51106__$1 = cljs.core.next.call(null,seq51106);
var G__51108 = cljs.core.first.call(null,seq51106__$1);
var seq51106__$2 = cljs.core.next.call(null,seq51106__$1);
var G__51109 = cljs.core.first.call(null,seq51106__$2);
var seq51106__$3 = cljs.core.next.call(null,seq51106__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__51107,G__51108,G__51109,seq51106__$3);
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
var len__25826__auto___51121 = arguments.length;
var i__25827__auto___51122 = (0);
while(true){
if((i__25827__auto___51122 < len__25826__auto___51121)){
args__25833__auto__.push((arguments[i__25827__auto___51122]));

var G__51123 = (i__25827__auto___51122 + (1));
i__25827__auto___51122 = G__51123;
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
return (function (p__51117){
var vec__51118 = p__51117;
var test = cljs.core.nth.call(null,vec__51118,(0),null);
var step = cljs.core.nth.call(null,vec__51118,(1),null);
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

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq51113){
var G__51114 = cljs.core.first.call(null,seq51113);
var seq51113__$1 = cljs.core.next.call(null,seq51113);
var G__51115 = cljs.core.first.call(null,seq51113__$1);
var seq51113__$2 = cljs.core.next.call(null,seq51113__$1);
var G__51116 = cljs.core.first.call(null,seq51113__$2);
var seq51113__$3 = cljs.core.next.call(null,seq51113__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__51114,G__51115,G__51116,seq51113__$3);
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
var len__25826__auto___51132 = arguments.length;
var i__25827__auto___51133 = (0);
while(true){
if((i__25827__auto___51133 < len__25826__auto___51132)){
args__25833__auto__.push((arguments[i__25827__auto___51133]));

var G__51134 = (i__25827__auto___51133 + (1));
i__25827__auto___51133 = G__51134;
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
return (function (p__51128){
var vec__51129 = p__51128;
var test = cljs.core.nth.call(null,vec__51129,(0),null);
var step = cljs.core.nth.call(null,vec__51129,(1),null);
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

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq51124){
var G__51125 = cljs.core.first.call(null,seq51124);
var seq51124__$1 = cljs.core.next.call(null,seq51124);
var G__51126 = cljs.core.first.call(null,seq51124__$1);
var seq51124__$2 = cljs.core.next.call(null,seq51124__$1);
var G__51127 = cljs.core.first.call(null,seq51124__$2);
var seq51124__$3 = cljs.core.next.call(null,seq51124__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__51125,G__51126,G__51127,seq51124__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___51140 = arguments.length;
var i__25827__auto___51141 = (0);
while(true){
if((i__25827__auto___51141 < len__25826__auto___51140)){
args__25833__auto__.push((arguments[i__25827__auto___51141]));

var G__51142 = (i__25827__auto___51141 + (1));
i__25827__auto___51141 = G__51142;
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

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq51135){
var G__51136 = cljs.core.first.call(null,seq51135);
var seq51135__$1 = cljs.core.next.call(null,seq51135);
var G__51137 = cljs.core.first.call(null,seq51135__$1);
var seq51135__$2 = cljs.core.next.call(null,seq51135__$1);
var G__51138 = cljs.core.first.call(null,seq51135__$2);
var seq51135__$3 = cljs.core.next.call(null,seq51135__$2);
var G__51139 = cljs.core.first.call(null,seq51135__$3);
var seq51135__$4 = cljs.core.next.call(null,seq51135__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__51136,G__51137,G__51138,G__51139,seq51135__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___51147 = arguments.length;
var i__25827__auto___51148 = (0);
while(true){
if((i__25827__auto___51148 < len__25826__auto___51147)){
args__25833__auto__.push((arguments[i__25827__auto___51148]));

var G__51149 = (i__25827__auto___51148 + (1));
i__25827__auto___51148 = G__51149;
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

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq51143){
var G__51144 = cljs.core.first.call(null,seq51143);
var seq51143__$1 = cljs.core.next.call(null,seq51143);
var G__51145 = cljs.core.first.call(null,seq51143__$1);
var seq51143__$2 = cljs.core.next.call(null,seq51143__$1);
var G__51146 = cljs.core.first.call(null,seq51143__$2);
var seq51143__$3 = cljs.core.next.call(null,seq51143__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__51144,G__51145,G__51146,seq51143__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___51154 = arguments.length;
var i__25827__auto___51155 = (0);
while(true){
if((i__25827__auto___51155 < len__25826__auto___51154)){
args__25833__auto__.push((arguments[i__25827__auto___51155]));

var G__51156 = (i__25827__auto___51155 + (1));
i__25827__auto___51155 = G__51156;
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

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq51150){
var G__51151 = cljs.core.first.call(null,seq51150);
var seq51150__$1 = cljs.core.next.call(null,seq51150);
var G__51152 = cljs.core.first.call(null,seq51150__$1);
var seq51150__$2 = cljs.core.next.call(null,seq51150__$1);
var G__51153 = cljs.core.first.call(null,seq51150__$2);
var seq51150__$3 = cljs.core.next.call(null,seq51150__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__51151,G__51152,G__51153,seq51150__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args51158 = [];
var len__25826__auto___51167 = arguments.length;
var i__25827__auto___51168 = (0);
while(true){
if((i__25827__auto___51168 < len__25826__auto___51167)){
args51158.push((arguments[i__25827__auto___51168]));

var G__51169 = (i__25827__auto___51168 + (1));
i__25827__auto___51168 = G__51169;
continue;
} else {
}
break;
}

var G__51166 = args51158.length;
switch (G__51166) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51158.slice((5)),(0),null));
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__51157__auto__","temp__51157__auto__",-1990867640,null)),(function (){var x__25585__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__51157__auto__","temp__51157__auto__",-1990867640,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__51157__auto__","temp__51157__auto__",-1990867640,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq51159){
var G__51160 = cljs.core.first.call(null,seq51159);
var seq51159__$1 = cljs.core.next.call(null,seq51159);
var G__51161 = cljs.core.first.call(null,seq51159__$1);
var seq51159__$2 = cljs.core.next.call(null,seq51159__$1);
var G__51162 = cljs.core.first.call(null,seq51159__$2);
var seq51159__$3 = cljs.core.next.call(null,seq51159__$2);
var G__51163 = cljs.core.first.call(null,seq51159__$3);
var seq51159__$4 = cljs.core.next.call(null,seq51159__$3);
var G__51164 = cljs.core.first.call(null,seq51159__$4);
var seq51159__$5 = cljs.core.next.call(null,seq51159__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__51160,G__51161,G__51162,G__51163,G__51164,seq51159__$5);
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
var len__25826__auto___51176 = arguments.length;
var i__25827__auto___51177 = (0);
while(true){
if((i__25827__auto___51177 < len__25826__auto___51176)){
args__25833__auto__.push((arguments[i__25827__auto___51177]));

var G__51178 = (i__25827__auto___51177 + (1));
i__25827__auto___51177 = G__51178;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__51171__auto__","temp__51171__auto__",1749227395,null)),(function (){var x__25585__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__51171__auto__","temp__51171__auto__",1749227395,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__51171__auto__","temp__51171__auto__",1749227395,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq51172){
var G__51173 = cljs.core.first.call(null,seq51172);
var seq51172__$1 = cljs.core.next.call(null,seq51172);
var G__51174 = cljs.core.first.call(null,seq51172__$1);
var seq51172__$2 = cljs.core.next.call(null,seq51172__$1);
var G__51175 = cljs.core.first.call(null,seq51172__$2);
var seq51172__$3 = cljs.core.next.call(null,seq51172__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__51173,G__51174,G__51175,seq51172__$3);
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

var argdecls = cljs.core.map.call(null,(function (p1__51179_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__51179_SHARP_)){
return cljs.core.first.call(null,p1__51179_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__51179_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__51179_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__51180_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__51180_SHARP_);
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
var G__51181 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__51182 = cljs.core.next.call(null,fdecls);
ret = G__51181;
fdecls = G__51182;
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
var G__51192 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__51193 = n;
var G__51194 = cljs.core.nnext.call(null,bs);
var G__51195 = true;
ret = G__51192;
n = G__51193;
bs = G__51194;
seen_rest_QMARK_ = G__51195;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__51196 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__25585__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__25585__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__25585__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__25585__auto____$1);
})(),x__25585__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__51197 = (n + (1));
var G__51198 = cljs.core.next.call(null,bs);
var G__51199 = seen_rest_QMARK_;
ret = G__51196;
n = G__51197;
bs = G__51198;
seen_rest_QMARK_ = G__51199;
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
return (function (p1__51183_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__24751__auto__ = mkns;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.namespace.call(null,p1__51183_SHARP_);
}
})(),cljs.core.name.call(null,p1__51183_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__51184_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.symbol.call(null,(function (){var or__24751__auto__ = mkns;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.namespace.call(null,p1__51184_SHARP_);
}
})(),cljs.core.name.call(null,p1__51184_SHARP_));
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
return (function (p1__51185_SHARP_,p2__51186_SHARP_){
return cljs.core.assoc.call(null,p1__51185_SHARP_,p2__51186_SHARP_,cljs.core.val.call(null,entry).call(null,p2__51186_SHARP_));
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
var G__51200 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__51201 = cljs.core.next.call(null,bes);
ret = G__51200;
bes = G__51201;
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
return (function (p1__51187_SHARP_){
return (cljs.core.first.call(null,p1__51187_SHARP_) instanceof cljs.core.Keyword);
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
var len__25826__auto___51206 = arguments.length;
var i__25827__auto___51207 = (0);
while(true){
if((i__25827__auto___51207 < len__25826__auto___51206)){
args__25833__auto__.push((arguments[i__25827__auto___51207]));

var G__51208 = (i__25827__auto___51207 + (1));
i__25827__auto___51207 = G__51208;
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

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq51202){
var G__51203 = cljs.core.first.call(null,seq51202);
var seq51202__$1 = cljs.core.next.call(null,seq51202);
var G__51204 = cljs.core.first.call(null,seq51202__$1);
var seq51202__$2 = cljs.core.next.call(null,seq51202__$1);
var G__51205 = cljs.core.first.call(null,seq51202__$2);
var seq51202__$3 = cljs.core.next.call(null,seq51202__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__51203,G__51204,G__51205,seq51202__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__25833__auto__ = [];
var len__25826__auto___51217 = arguments.length;
var i__25827__auto___51218 = (0);
while(true){
if((i__25827__auto___51218 < len__25826__auto___51217)){
args__25833__auto__.push((arguments[i__25827__auto___51218]));

var G__51219 = (i__25827__auto___51218 + (1));
i__25827__auto___51218 = G__51219;
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
return (function (ret,p__51213){
var vec__51214 = p__51213;
var b = cljs.core.nth.call(null,vec__51214,(0),null);
var v = cljs.core.nth.call(null,vec__51214,(1),null);
var g = cljs.core.nth.call(null,vec__51214,(2),null);
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

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq51209){
var G__51210 = cljs.core.first.call(null,seq51209);
var seq51209__$1 = cljs.core.next.call(null,seq51209);
var G__51211 = cljs.core.first.call(null,seq51209__$1);
var seq51209__$2 = cljs.core.next.call(null,seq51209__$1);
var G__51212 = cljs.core.first.call(null,seq51209__$2);
var seq51209__$3 = cljs.core.next.call(null,seq51209__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__51210,G__51211,G__51212,seq51209__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__51220_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__51220_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__51221){
var vec__51222 = p__51221;
var p = cljs.core.nth.call(null,vec__51222,(0),null);
var b = cljs.core.nth.call(null,vec__51222,(1),null);
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
var len__25826__auto___51228 = arguments.length;
var i__25827__auto___51229 = (0);
while(true){
if((i__25827__auto___51229 < len__25826__auto___51228)){
args__25833__auto__.push((arguments[i__25827__auto___51229]));

var G__51230 = (i__25827__auto___51229 + (1));
i__25827__auto___51229 = G__51230;
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

cljs.core$macros.str.cljs$lang$applyTo = (function (seq51225){
var G__51226 = cljs.core.first.call(null,seq51225);
var seq51225__$1 = cljs.core.next.call(null,seq51225);
var G__51227 = cljs.core.first.call(null,seq51225__$1);
var seq51225__$2 = cljs.core.next.call(null,seq51225__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__51226,G__51227,seq51225__$2);
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
var args51234 = [];
var len__25826__auto___51241 = arguments.length;
var i__25827__auto___51242 = (0);
while(true){
if((i__25827__auto___51242 < len__25826__auto___51241)){
args51234.push((arguments[i__25827__auto___51242]));

var G__51243 = (i__25827__auto___51242 + (1));
i__25827__auto___51242 = G__51243;
continue;
} else {
}
break;
}

var G__51240 = args51234.length;
switch (G__51240) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51234.slice((3)),(0),null));
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
return (function (p1__51231_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__51231_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__51232_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__51232_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25585__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__51233__auto__","and__51233__auto__",1524957084,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__51233__auto__","and__51233__auto__",1524957084,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__51233__auto__","and__51233__auto__",1524957084,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq51235){
var G__51236 = cljs.core.first.call(null,seq51235);
var seq51235__$1 = cljs.core.next.call(null,seq51235);
var G__51237 = cljs.core.first.call(null,seq51235__$1);
var seq51235__$2 = cljs.core.next.call(null,seq51235__$1);
var G__51238 = cljs.core.first.call(null,seq51235__$2);
var seq51235__$3 = cljs.core.next.call(null,seq51235__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__51236,G__51237,G__51238,seq51235__$3);
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
var args51248 = [];
var len__25826__auto___51255 = arguments.length;
var i__25827__auto___51256 = (0);
while(true){
if((i__25827__auto___51256 < len__25826__auto___51255)){
args51248.push((arguments[i__25827__auto___51256]));

var G__51257 = (i__25827__auto___51256 + (1));
i__25827__auto___51256 = G__51257;
continue;
} else {
}
break;
}

var G__51254 = args51248.length;
switch (G__51254) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51248.slice((3)),(0),null));
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
return (function (p1__51245_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__51245_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__51246_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__51246_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25585__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__51247__auto__","or__51247__auto__",-2116243346,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__51247__auto__","or__51247__auto__",-2116243346,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__51247__auto__","or__51247__auto__",-2116243346,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq51249){
var G__51250 = cljs.core.first.call(null,seq51249);
var seq51249__$1 = cljs.core.next.call(null,seq51249);
var G__51251 = cljs.core.first.call(null,seq51249__$1);
var seq51249__$2 = cljs.core.next.call(null,seq51249__$1);
var G__51252 = cljs.core.first.call(null,seq51249__$2);
var seq51249__$3 = cljs.core.next.call(null,seq51249__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__51250,G__51251,G__51252,seq51249__$3);
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
var vec__51263 = clojure.string.split.call(null,comment,/\n/);
var seq__51264 = cljs.core.seq.call(null,vec__51263);
var first__51265 = cljs.core.first.call(null,seq__51264);
var seq__51264__$1 = cljs.core.next.call(null,seq__51264);
var x = first__51265;
var ys = seq__51264__$1;
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__51263,seq__51264,first__51265,seq__51264__$1,x,ys){
return (function (p1__51259_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__51259_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__51263,seq__51264,first__51265,seq__51264__$1,x,ys))
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
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__51266__auto__","c__51266__auto__",963861217,null)),(function (){var x__25585__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51267__auto__","x__51267__auto__",1172303853,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51267__auto__","x__51267__auto__",1172303853,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__51266__auto__","c__51266__auto__",963861217,null)))));
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
var args51268 = [];
var len__25826__auto___51276 = arguments.length;
var i__25827__auto___51277 = (0);
while(true){
if((i__25827__auto___51277 < len__25826__auto___51276)){
args51268.push((arguments[i__25827__auto___51277]));

var G__51278 = (i__25827__auto___51277 + (1));
i__25827__auto___51277 = G__51278;
continue;
} else {
}
break;
}

var G__51275 = args51268.length;
switch (G__51275) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51268.slice((4)),(0),null));
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

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq51269){
var G__51270 = cljs.core.first.call(null,seq51269);
var seq51269__$1 = cljs.core.next.call(null,seq51269);
var G__51271 = cljs.core.first.call(null,seq51269__$1);
var seq51269__$2 = cljs.core.next.call(null,seq51269__$1);
var G__51272 = cljs.core.first.call(null,seq51269__$2);
var seq51269__$3 = cljs.core.next.call(null,seq51269__$2);
var G__51273 = cljs.core.first.call(null,seq51269__$3);
var seq51269__$4 = cljs.core.next.call(null,seq51269__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__51270,G__51271,G__51272,G__51273,seq51269__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args51280 = [];
var len__25826__auto___51289 = arguments.length;
var i__25827__auto___51290 = (0);
while(true){
if((i__25827__auto___51290 < len__25826__auto___51289)){
args51280.push((arguments[i__25827__auto___51290]));

var G__51291 = (i__25827__auto___51290 + (1));
i__25827__auto___51290 = G__51291;
continue;
} else {
}
break;
}

var G__51288 = args51280.length;
switch (G__51288) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51280.slice((5)),(0),null));
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

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq51281){
var G__51282 = cljs.core.first.call(null,seq51281);
var seq51281__$1 = cljs.core.next.call(null,seq51281);
var G__51283 = cljs.core.first.call(null,seq51281__$1);
var seq51281__$2 = cljs.core.next.call(null,seq51281__$1);
var G__51284 = cljs.core.first.call(null,seq51281__$2);
var seq51281__$3 = cljs.core.next.call(null,seq51281__$2);
var G__51285 = cljs.core.first.call(null,seq51281__$3);
var seq51281__$4 = cljs.core.next.call(null,seq51281__$3);
var G__51286 = cljs.core.first.call(null,seq51281__$4);
var seq51281__$5 = cljs.core.next.call(null,seq51281__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__51282,G__51283,G__51284,G__51285,G__51286,seq51281__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args51293 = [];
var len__25826__auto___51301 = arguments.length;
var i__25827__auto___51302 = (0);
while(true){
if((i__25827__auto___51302 < len__25826__auto___51301)){
args51293.push((arguments[i__25827__auto___51302]));

var G__51303 = (i__25827__auto___51302 + (1));
i__25827__auto___51302 = G__51303;
continue;
} else {
}
break;
}

var G__51300 = args51293.length;
switch (G__51300) {
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
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51293.slice((4)),(0),null));
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

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq51294){
var G__51295 = cljs.core.first.call(null,seq51294);
var seq51294__$1 = cljs.core.next.call(null,seq51294);
var G__51296 = cljs.core.first.call(null,seq51294__$1);
var seq51294__$2 = cljs.core.next.call(null,seq51294__$1);
var G__51297 = cljs.core.first.call(null,seq51294__$2);
var seq51294__$3 = cljs.core.next.call(null,seq51294__$2);
var G__51298 = cljs.core.first.call(null,seq51294__$3);
var seq51294__$4 = cljs.core.next.call(null,seq51294__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__51295,G__51296,G__51297,G__51298,seq51294__$4);
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
var len__25826__auto___51308 = arguments.length;
var i__25827__auto___51309 = (0);
while(true){
if((i__25827__auto___51309 < len__25826__auto___51308)){
args__25833__auto__.push((arguments[i__25827__auto___51309]));

var G__51310 = (i__25827__auto___51309 + (1));
i__25827__auto___51309 = G__51310;
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

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq51305){
var G__51306 = cljs.core.first.call(null,seq51305);
var seq51305__$1 = cljs.core.next.call(null,seq51305);
var G__51307 = cljs.core.first.call(null,seq51305__$1);
var seq51305__$2 = cljs.core.next.call(null,seq51305__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__51306,G__51307,seq51305__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__25833__auto__ = [];
var len__25826__auto___51314 = arguments.length;
var i__25827__auto___51315 = (0);
while(true){
if((i__25827__auto___51315 < len__25826__auto___51314)){
args__25833__auto__.push((arguments[i__25827__auto___51315]));

var G__51316 = (i__25827__auto___51315 + (1));
i__25827__auto___51315 = G__51316;
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

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq51311){
var G__51312 = cljs.core.first.call(null,seq51311);
var seq51311__$1 = cljs.core.next.call(null,seq51311);
var G__51313 = cljs.core.first.call(null,seq51311__$1);
var seq51311__$2 = cljs.core.next.call(null,seq51311__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__51312,G__51313,seq51311__$2);
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
var len__25826__auto___51320 = arguments.length;
var i__25827__auto___51321 = (0);
while(true){
if((i__25827__auto___51321 < len__25826__auto___51320)){
args__25833__auto__.push((arguments[i__25827__auto___51321]));

var G__51322 = (i__25827__auto___51321 + (1));
i__25827__auto___51321 = G__51322;
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

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq51317){
var G__51318 = cljs.core.first.call(null,seq51317);
var seq51317__$1 = cljs.core.next.call(null,seq51317);
var G__51319 = cljs.core.first.call(null,seq51317__$1);
var seq51317__$2 = cljs.core.next.call(null,seq51317__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__51318,G__51319,seq51317__$2);
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
var len__25826__auto___51326 = arguments.length;
var i__25827__auto___51327 = (0);
while(true){
if((i__25827__auto___51327 < len__25826__auto___51326)){
args__25833__auto__.push((arguments[i__25827__auto___51327]));

var G__51328 = (i__25827__auto___51327 + (1));
i__25827__auto___51327 = G__51328;
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

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq51323){
var G__51324 = cljs.core.first.call(null,seq51323);
var seq51323__$1 = cljs.core.next.call(null,seq51323);
var G__51325 = cljs.core.first.call(null,seq51323__$1);
var seq51323__$2 = cljs.core.next.call(null,seq51323__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__51324,G__51325,seq51323__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__25833__auto__ = [];
var len__25826__auto___51332 = arguments.length;
var i__25827__auto___51333 = (0);
while(true){
if((i__25827__auto___51333 < len__25826__auto___51332)){
args__25833__auto__.push((arguments[i__25827__auto___51333]));

var G__51334 = (i__25827__auto___51333 + (1));
i__25827__auto___51333 = G__51334;
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

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq51329){
var G__51330 = cljs.core.first.call(null,seq51329);
var seq51329__$1 = cljs.core.next.call(null,seq51329);
var G__51331 = cljs.core.first.call(null,seq51329__$1);
var seq51329__$2 = cljs.core.next.call(null,seq51329__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__51330,G__51331,seq51329__$2);
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
var len__25826__auto___51338 = arguments.length;
var i__25827__auto___51339 = (0);
while(true){
if((i__25827__auto___51339 < len__25826__auto___51338)){
args__25833__auto__.push((arguments[i__25827__auto___51339]));

var G__51340 = (i__25827__auto___51339 + (1));
i__25827__auto___51339 = G__51340;
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

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq51335){
var G__51336 = cljs.core.first.call(null,seq51335);
var seq51335__$1 = cljs.core.next.call(null,seq51335);
var G__51337 = cljs.core.first.call(null,seq51335__$1);
var seq51335__$2 = cljs.core.next.call(null,seq51335__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__51336,G__51337,seq51335__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__25833__auto__ = [];
var len__25826__auto___51344 = arguments.length;
var i__25827__auto___51345 = (0);
while(true){
if((i__25827__auto___51345 < len__25826__auto___51344)){
args__25833__auto__.push((arguments[i__25827__auto___51345]));

var G__51346 = (i__25827__auto___51345 + (1));
i__25827__auto___51345 = G__51346;
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

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq51341){
var G__51342 = cljs.core.first.call(null,seq51341);
var seq51341__$1 = cljs.core.next.call(null,seq51341);
var G__51343 = cljs.core.first.call(null,seq51341__$1);
var seq51341__$2 = cljs.core.next.call(null,seq51341__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__51342,G__51343,seq51341__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args51347 = [];
var len__25826__auto___51355 = arguments.length;
var i__25827__auto___51356 = (0);
while(true){
if((i__25827__auto___51356 < len__25826__auto___51355)){
args51347.push((arguments[i__25827__auto___51356]));

var G__51357 = (i__25827__auto___51356 + (1));
i__25827__auto___51356 = G__51357;
continue;
} else {
}
break;
}

var G__51354 = args51347.length;
switch (G__51354) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51347.slice((4)),(0),null));
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

cljs.core$macros._.cljs$lang$applyTo = (function (seq51348){
var G__51349 = cljs.core.first.call(null,seq51348);
var seq51348__$1 = cljs.core.next.call(null,seq51348);
var G__51350 = cljs.core.first.call(null,seq51348__$1);
var seq51348__$2 = cljs.core.next.call(null,seq51348__$1);
var G__51351 = cljs.core.first.call(null,seq51348__$2);
var seq51348__$3 = cljs.core.next.call(null,seq51348__$2);
var G__51352 = cljs.core.first.call(null,seq51348__$3);
var seq51348__$4 = cljs.core.next.call(null,seq51348__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__51349,G__51350,G__51351,G__51352,seq51348__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args51359 = [];
var len__25826__auto___51367 = arguments.length;
var i__25827__auto___51368 = (0);
while(true){
if((i__25827__auto___51368 < len__25826__auto___51367)){
args51359.push((arguments[i__25827__auto___51368]));

var G__51369 = (i__25827__auto___51368 + (1));
i__25827__auto___51368 = G__51369;
continue;
} else {
}
break;
}

var G__51366 = args51359.length;
switch (G__51366) {
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
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51359.slice((4)),(0),null));
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

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq51360){
var G__51361 = cljs.core.first.call(null,seq51360);
var seq51360__$1 = cljs.core.next.call(null,seq51360);
var G__51362 = cljs.core.first.call(null,seq51360__$1);
var seq51360__$2 = cljs.core.next.call(null,seq51360__$1);
var G__51363 = cljs.core.first.call(null,seq51360__$2);
var seq51360__$3 = cljs.core.next.call(null,seq51360__$2);
var G__51364 = cljs.core.first.call(null,seq51360__$3);
var seq51360__$4 = cljs.core.next.call(null,seq51360__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__51361,G__51362,G__51363,G__51364,seq51360__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args51371 = [];
var len__25826__auto___51379 = arguments.length;
var i__25827__auto___51380 = (0);
while(true){
if((i__25827__auto___51380 < len__25826__auto___51379)){
args51371.push((arguments[i__25827__auto___51380]));

var G__51381 = (i__25827__auto___51380 + (1));
i__25827__auto___51380 = G__51381;
continue;
} else {
}
break;
}

var G__51378 = args51371.length;
switch (G__51378) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51371.slice((4)),(0),null));
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

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq51372){
var G__51373 = cljs.core.first.call(null,seq51372);
var seq51372__$1 = cljs.core.next.call(null,seq51372);
var G__51374 = cljs.core.first.call(null,seq51372__$1);
var seq51372__$2 = cljs.core.next.call(null,seq51372__$1);
var G__51375 = cljs.core.first.call(null,seq51372__$2);
var seq51372__$3 = cljs.core.next.call(null,seq51372__$2);
var G__51376 = cljs.core.first.call(null,seq51372__$3);
var seq51372__$4 = cljs.core.next.call(null,seq51372__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__51373,G__51374,G__51375,G__51376,seq51372__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args51383 = [];
var len__25826__auto___51391 = arguments.length;
var i__25827__auto___51392 = (0);
while(true){
if((i__25827__auto___51392 < len__25826__auto___51391)){
args51383.push((arguments[i__25827__auto___51392]));

var G__51393 = (i__25827__auto___51392 + (1));
i__25827__auto___51392 = G__51393;
continue;
} else {
}
break;
}

var G__51390 = args51383.length;
switch (G__51390) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51383.slice((4)),(0),null));
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

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq51384){
var G__51385 = cljs.core.first.call(null,seq51384);
var seq51384__$1 = cljs.core.next.call(null,seq51384);
var G__51386 = cljs.core.first.call(null,seq51384__$1);
var seq51384__$2 = cljs.core.next.call(null,seq51384__$1);
var G__51387 = cljs.core.first.call(null,seq51384__$2);
var seq51384__$3 = cljs.core.next.call(null,seq51384__$2);
var G__51388 = cljs.core.first.call(null,seq51384__$3);
var seq51384__$4 = cljs.core.next.call(null,seq51384__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__51385,G__51386,G__51387,G__51388,seq51384__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args51395 = [];
var len__25826__auto___51403 = arguments.length;
var i__25827__auto___51404 = (0);
while(true){
if((i__25827__auto___51404 < len__25826__auto___51403)){
args51395.push((arguments[i__25827__auto___51404]));

var G__51405 = (i__25827__auto___51404 + (1));
i__25827__auto___51404 = G__51405;
continue;
} else {
}
break;
}

var G__51402 = args51395.length;
switch (G__51402) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51395.slice((4)),(0),null));
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

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq51396){
var G__51397 = cljs.core.first.call(null,seq51396);
var seq51396__$1 = cljs.core.next.call(null,seq51396);
var G__51398 = cljs.core.first.call(null,seq51396__$1);
var seq51396__$2 = cljs.core.next.call(null,seq51396__$1);
var G__51399 = cljs.core.first.call(null,seq51396__$2);
var seq51396__$3 = cljs.core.next.call(null,seq51396__$2);
var G__51400 = cljs.core.first.call(null,seq51396__$3);
var seq51396__$4 = cljs.core.next.call(null,seq51396__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__51397,G__51398,G__51399,G__51400,seq51396__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args51407 = [];
var len__25826__auto___51415 = arguments.length;
var i__25827__auto___51416 = (0);
while(true){
if((i__25827__auto___51416 < len__25826__auto___51415)){
args51407.push((arguments[i__25827__auto___51416]));

var G__51417 = (i__25827__auto___51416 + (1));
i__25827__auto___51416 = G__51417;
continue;
} else {
}
break;
}

var G__51414 = args51407.length;
switch (G__51414) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51407.slice((4)),(0),null));
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

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq51408){
var G__51409 = cljs.core.first.call(null,seq51408);
var seq51408__$1 = cljs.core.next.call(null,seq51408);
var G__51410 = cljs.core.first.call(null,seq51408__$1);
var seq51408__$2 = cljs.core.next.call(null,seq51408__$1);
var G__51411 = cljs.core.first.call(null,seq51408__$2);
var seq51408__$3 = cljs.core.next.call(null,seq51408__$2);
var G__51412 = cljs.core.first.call(null,seq51408__$3);
var seq51408__$4 = cljs.core.next.call(null,seq51408__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__51409,G__51410,G__51411,G__51412,seq51408__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args51419 = [];
var len__25826__auto___51427 = arguments.length;
var i__25827__auto___51428 = (0);
while(true){
if((i__25827__auto___51428 < len__25826__auto___51427)){
args51419.push((arguments[i__25827__auto___51428]));

var G__51429 = (i__25827__auto___51428 + (1));
i__25827__auto___51428 = G__51429;
continue;
} else {
}
break;
}

var G__51426 = args51419.length;
switch (G__51426) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51419.slice((4)),(0),null));
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

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq51420){
var G__51421 = cljs.core.first.call(null,seq51420);
var seq51420__$1 = cljs.core.next.call(null,seq51420);
var G__51422 = cljs.core.first.call(null,seq51420__$1);
var seq51420__$2 = cljs.core.next.call(null,seq51420__$1);
var G__51423 = cljs.core.first.call(null,seq51420__$2);
var seq51420__$3 = cljs.core.next.call(null,seq51420__$2);
var G__51424 = cljs.core.first.call(null,seq51420__$3);
var seq51420__$4 = cljs.core.next.call(null,seq51420__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__51421,G__51422,G__51423,G__51424,seq51420__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args51431 = [];
var len__25826__auto___51439 = arguments.length;
var i__25827__auto___51440 = (0);
while(true){
if((i__25827__auto___51440 < len__25826__auto___51439)){
args51431.push((arguments[i__25827__auto___51440]));

var G__51441 = (i__25827__auto___51440 + (1));
i__25827__auto___51440 = G__51441;
continue;
} else {
}
break;
}

var G__51438 = args51431.length;
switch (G__51438) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51431.slice((4)),(0),null));
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

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq51432){
var G__51433 = cljs.core.first.call(null,seq51432);
var seq51432__$1 = cljs.core.next.call(null,seq51432);
var G__51434 = cljs.core.first.call(null,seq51432__$1);
var seq51432__$2 = cljs.core.next.call(null,seq51432__$1);
var G__51435 = cljs.core.first.call(null,seq51432__$2);
var seq51432__$3 = cljs.core.next.call(null,seq51432__$2);
var G__51436 = cljs.core.first.call(null,seq51432__$3);
var seq51432__$4 = cljs.core.next.call(null,seq51432__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__51433,G__51434,G__51435,G__51436,seq51432__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args51443 = [];
var len__25826__auto___51451 = arguments.length;
var i__25827__auto___51452 = (0);
while(true){
if((i__25827__auto___51452 < len__25826__auto___51451)){
args51443.push((arguments[i__25827__auto___51452]));

var G__51453 = (i__25827__auto___51452 + (1));
i__25827__auto___51452 = G__51453;
continue;
} else {
}
break;
}

var G__51450 = args51443.length;
switch (G__51450) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51443.slice((4)),(0),null));
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

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq51444){
var G__51445 = cljs.core.first.call(null,seq51444);
var seq51444__$1 = cljs.core.next.call(null,seq51444);
var G__51446 = cljs.core.first.call(null,seq51444__$1);
var seq51444__$2 = cljs.core.next.call(null,seq51444__$1);
var G__51447 = cljs.core.first.call(null,seq51444__$2);
var seq51444__$3 = cljs.core.next.call(null,seq51444__$2);
var G__51448 = cljs.core.first.call(null,seq51444__$3);
var seq51444__$4 = cljs.core.next.call(null,seq51444__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__51445,G__51446,G__51447,G__51448,seq51444__$4);
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
var args51457 = [];
var len__25826__auto___51465 = arguments.length;
var i__25827__auto___51466 = (0);
while(true){
if((i__25827__auto___51466 < len__25826__auto___51465)){
args51457.push((arguments[i__25827__auto___51466]));

var G__51467 = (i__25827__auto___51466 + (1));
i__25827__auto___51466 = G__51467;
continue;
} else {
}
break;
}

var G__51464 = args51457.length;
switch (G__51464) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51457.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51455__auto__","x__51455__auto__",1850740559,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__51456__auto__","y__51456__auto__",1720550085,null)),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51455__auto__","x__51455__auto__",1850740559,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__51456__auto__","y__51456__auto__",1720550085,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51455__auto__","x__51455__auto__",1850740559,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__51456__auto__","y__51456__auto__",1720550085,null)))));
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

cljs.core$macros.max.cljs$lang$applyTo = (function (seq51458){
var G__51459 = cljs.core.first.call(null,seq51458);
var seq51458__$1 = cljs.core.next.call(null,seq51458);
var G__51460 = cljs.core.first.call(null,seq51458__$1);
var seq51458__$2 = cljs.core.next.call(null,seq51458__$1);
var G__51461 = cljs.core.first.call(null,seq51458__$2);
var seq51458__$3 = cljs.core.next.call(null,seq51458__$2);
var G__51462 = cljs.core.first.call(null,seq51458__$3);
var seq51458__$4 = cljs.core.next.call(null,seq51458__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__51459,G__51460,G__51461,G__51462,seq51458__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args51471 = [];
var len__25826__auto___51479 = arguments.length;
var i__25827__auto___51480 = (0);
while(true){
if((i__25827__auto___51480 < len__25826__auto___51479)){
args51471.push((arguments[i__25827__auto___51480]));

var G__51481 = (i__25827__auto___51480 + (1));
i__25827__auto___51480 = G__51481;
continue;
} else {
}
break;
}

var G__51478 = args51471.length;
switch (G__51478) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51471.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25845__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51469__auto__","x__51469__auto__",-825859214,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__51470__auto__","y__51470__auto__",-1282595662,null)),(function (){var x__25585__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51469__auto__","x__51469__auto__",-825859214,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__51470__auto__","y__51470__auto__",-1282595662,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51469__auto__","x__51469__auto__",-825859214,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__51470__auto__","y__51470__auto__",-1282595662,null)))));
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

cljs.core$macros.min.cljs$lang$applyTo = (function (seq51472){
var G__51473 = cljs.core.first.call(null,seq51472);
var seq51472__$1 = cljs.core.next.call(null,seq51472);
var G__51474 = cljs.core.first.call(null,seq51472__$1);
var seq51472__$2 = cljs.core.next.call(null,seq51472__$1);
var G__51475 = cljs.core.first.call(null,seq51472__$2);
var seq51472__$3 = cljs.core.next.call(null,seq51472__$2);
var G__51476 = cljs.core.first.call(null,seq51472__$3);
var seq51472__$4 = cljs.core.next.call(null,seq51472__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__51473,G__51474,G__51475,G__51476,seq51472__$4);
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
var args51483 = [];
var len__25826__auto___51491 = arguments.length;
var i__25827__auto___51492 = (0);
while(true){
if((i__25827__auto___51492 < len__25826__auto___51491)){
args51483.push((arguments[i__25827__auto___51492]));

var G__51493 = (i__25827__auto___51492 + (1));
i__25827__auto___51492 = G__51493;
continue;
} else {
}
break;
}

var G__51490 = args51483.length;
switch (G__51490) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51483.slice((4)),(0),null));
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

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq51484){
var G__51485 = cljs.core.first.call(null,seq51484);
var seq51484__$1 = cljs.core.next.call(null,seq51484);
var G__51486 = cljs.core.first.call(null,seq51484__$1);
var seq51484__$2 = cljs.core.next.call(null,seq51484__$1);
var G__51487 = cljs.core.first.call(null,seq51484__$2);
var seq51484__$3 = cljs.core.next.call(null,seq51484__$2);
var G__51488 = cljs.core.first.call(null,seq51484__$3);
var seq51484__$4 = cljs.core.next.call(null,seq51484__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__51485,G__51486,G__51487,G__51488,seq51484__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args51495 = [];
var len__25826__auto___51503 = arguments.length;
var i__25827__auto___51504 = (0);
while(true){
if((i__25827__auto___51504 < len__25826__auto___51503)){
args51495.push((arguments[i__25827__auto___51504]));

var G__51505 = (i__25827__auto___51504 + (1));
i__25827__auto___51504 = G__51505;
continue;
} else {
}
break;
}

var G__51502 = args51495.length;
switch (G__51502) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51495.slice((4)),(0),null));
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

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq51496){
var G__51497 = cljs.core.first.call(null,seq51496);
var seq51496__$1 = cljs.core.next.call(null,seq51496);
var G__51498 = cljs.core.first.call(null,seq51496__$1);
var seq51496__$2 = cljs.core.next.call(null,seq51496__$1);
var G__51499 = cljs.core.first.call(null,seq51496__$2);
var seq51496__$3 = cljs.core.next.call(null,seq51496__$2);
var G__51500 = cljs.core.first.call(null,seq51496__$3);
var seq51496__$4 = cljs.core.next.call(null,seq51496__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__51497,G__51498,G__51499,G__51500,seq51496__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args51507 = [];
var len__25826__auto___51515 = arguments.length;
var i__25827__auto___51516 = (0);
while(true){
if((i__25827__auto___51516 < len__25826__auto___51515)){
args51507.push((arguments[i__25827__auto___51516]));

var G__51517 = (i__25827__auto___51516 + (1));
i__25827__auto___51516 = G__51517;
continue;
} else {
}
break;
}

var G__51514 = args51507.length;
switch (G__51514) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51507.slice((4)),(0),null));
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

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq51508){
var G__51509 = cljs.core.first.call(null,seq51508);
var seq51508__$1 = cljs.core.next.call(null,seq51508);
var G__51510 = cljs.core.first.call(null,seq51508__$1);
var seq51508__$2 = cljs.core.next.call(null,seq51508__$1);
var G__51511 = cljs.core.first.call(null,seq51508__$2);
var seq51508__$3 = cljs.core.next.call(null,seq51508__$2);
var G__51512 = cljs.core.first.call(null,seq51508__$3);
var seq51508__$4 = cljs.core.next.call(null,seq51508__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__51509,G__51510,G__51511,G__51512,seq51508__$4);
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
var args51519 = [];
var len__25826__auto___51527 = arguments.length;
var i__25827__auto___51528 = (0);
while(true){
if((i__25827__auto___51528 < len__25826__auto___51527)){
args51519.push((arguments[i__25827__auto___51528]));

var G__51529 = (i__25827__auto___51528 + (1));
i__25827__auto___51528 = G__51529;
continue;
} else {
}
break;
}

var G__51526 = args51519.length;
switch (G__51526) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51519.slice((4)),(0),null));
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

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq51520){
var G__51521 = cljs.core.first.call(null,seq51520);
var seq51520__$1 = cljs.core.next.call(null,seq51520);
var G__51522 = cljs.core.first.call(null,seq51520__$1);
var seq51520__$2 = cljs.core.next.call(null,seq51520__$1);
var G__51523 = cljs.core.first.call(null,seq51520__$2);
var seq51520__$3 = cljs.core.next.call(null,seq51520__$2);
var G__51524 = cljs.core.first.call(null,seq51520__$3);
var seq51520__$4 = cljs.core.next.call(null,seq51520__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__51521,G__51522,G__51523,G__51524,seq51520__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args51531 = [];
var len__25826__auto___51539 = arguments.length;
var i__25827__auto___51540 = (0);
while(true){
if((i__25827__auto___51540 < len__25826__auto___51539)){
args51531.push((arguments[i__25827__auto___51540]));

var G__51541 = (i__25827__auto___51540 + (1));
i__25827__auto___51540 = G__51541;
continue;
} else {
}
break;
}

var G__51538 = args51531.length;
switch (G__51538) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args51531.slice((4)),(0),null));
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

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq51532){
var G__51533 = cljs.core.first.call(null,seq51532);
var seq51532__$1 = cljs.core.next.call(null,seq51532);
var G__51534 = cljs.core.first.call(null,seq51532__$1);
var seq51532__$2 = cljs.core.next.call(null,seq51532__$1);
var G__51535 = cljs.core.first.call(null,seq51532__$2);
var seq51532__$3 = cljs.core.next.call(null,seq51532__$2);
var G__51536 = cljs.core.first.call(null,seq51532__$3);
var seq51532__$4 = cljs.core.next.call(null,seq51532__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__51533,G__51534,G__51535,G__51536,seq51532__$4);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__51543__auto__","h__51543__auto__",1341874449,null)),(function (){var x__25585__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__51543__auto__","h__51543__auto__",1341874449,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__51543__auto__","h__51543__auto__",1341874449,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__51543__auto__","h__51543__auto__",1341874449,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__51543__auto__","h__51543__auto__",1341874449,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__51543__auto__","h__51543__auto__",1341874449,null)))));
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
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51544__auto__","x__51544__auto__",2128686524,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51544__auto__","x__51544__auto__",2128686524,null)))));
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
var len__25826__auto___51552 = arguments.length;
var i__25827__auto___51553 = (0);
while(true){
if((i__25827__auto___51553 < len__25826__auto___51552)){
args__25833__auto__.push((arguments[i__25827__auto___51553]));

var G__51554 = (i__25827__auto___51553 + (1));
i__25827__auto___51553 = G__51554;
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

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq51545){
var G__51546 = cljs.core.first.call(null,seq51545);
var seq51545__$1 = cljs.core.next.call(null,seq51545);
var G__51547 = cljs.core.first.call(null,seq51545__$1);
var seq51545__$2 = cljs.core.next.call(null,seq51545__$1);
var G__51548 = cljs.core.first.call(null,seq51545__$2);
var seq51545__$3 = cljs.core.next.call(null,seq51545__$2);
var G__51549 = cljs.core.first.call(null,seq51545__$3);
var seq51545__$4 = cljs.core.next.call(null,seq51545__$3);
var G__51550 = cljs.core.first.call(null,seq51545__$4);
var seq51545__$5 = cljs.core.next.call(null,seq51545__$4);
var G__51551 = cljs.core.first.call(null,seq51545__$5);
var seq51545__$6 = cljs.core.next.call(null,seq51545__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__51546,G__51547,G__51548,G__51549,G__51550,G__51551,seq51545__$6);
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
})(),(function (){var x__25585__auto__ = clojure.walk.postwalk.call(null,(function (p1__51555_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__51555_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__51555_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__51555_SHARP_));
} else {
return p1__51555_SHARP_;
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
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__51556,fkv){
var vec__51560 = p__51556;
var f1 = cljs.core.nth.call(null,vec__51560,(0),null);
var k = cljs.core.nth.call(null,vec__51560,(1),null);
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
var len__25826__auto___51566 = arguments.length;
var i__25827__auto___51567 = (0);
while(true){
if((i__25827__auto___51567 < len__25826__auto___51566)){
args__25833__auto__.push((arguments[i__25827__auto___51567]));

var G__51568 = (i__25827__auto___51567 + (1));
i__25827__auto___51567 = G__51568;
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

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq51563){
var G__51564 = cljs.core.first.call(null,seq51563);
var seq51563__$1 = cljs.core.next.call(null,seq51563);
var G__51565 = cljs.core.first.call(null,seq51563__$1);
var seq51563__$2 = cljs.core.next.call(null,seq51563__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__51564,G__51565,seq51563__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___51573 = arguments.length;
var i__25827__auto___51574 = (0);
while(true){
if((i__25827__auto___51574 < len__25826__auto___51573)){
args__25833__auto__.push((arguments[i__25827__auto___51574]));

var G__51575 = (i__25827__auto___51574 + (1));
i__25827__auto___51574 = G__51575;
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

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq51569){
var G__51570 = cljs.core.first.call(null,seq51569);
var seq51569__$1 = cljs.core.next.call(null,seq51569);
var G__51571 = cljs.core.first.call(null,seq51569__$1);
var seq51569__$2 = cljs.core.next.call(null,seq51569__$1);
var G__51572 = cljs.core.first.call(null,seq51569__$2);
var seq51569__$3 = cljs.core.next.call(null,seq51569__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51570,G__51571,G__51572,seq51569__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__25833__auto__ = [];
var len__25826__auto___51580 = arguments.length;
var i__25827__auto___51581 = (0);
while(true){
if((i__25827__auto___51581 < len__25826__auto___51580)){
args__25833__auto__.push((arguments[i__25827__auto___51581]));

var G__51582 = (i__25827__auto___51581 + (1));
i__25827__auto___51581 = G__51582;
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

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq51576){
var G__51577 = cljs.core.first.call(null,seq51576);
var seq51576__$1 = cljs.core.next.call(null,seq51576);
var G__51578 = cljs.core.first.call(null,seq51576__$1);
var seq51576__$2 = cljs.core.next.call(null,seq51576__$1);
var G__51579 = cljs.core.first.call(null,seq51576__$2);
var seq51576__$3 = cljs.core.next.call(null,seq51576__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__51577,G__51578,G__51579,seq51576__$3);
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
var len__25826__auto___51587 = arguments.length;
var i__25827__auto___51588 = (0);
while(true){
if((i__25827__auto___51588 < len__25826__auto___51587)){
args__25833__auto__.push((arguments[i__25827__auto___51588]));

var G__51589 = (i__25827__auto___51588 + (1));
i__25827__auto___51588 = G__51589;
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

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq51583){
var G__51584 = cljs.core.first.call(null,seq51583);
var seq51583__$1 = cljs.core.next.call(null,seq51583);
var G__51585 = cljs.core.first.call(null,seq51583__$1);
var seq51583__$2 = cljs.core.next.call(null,seq51583__$1);
var G__51586 = cljs.core.first.call(null,seq51583__$2);
var seq51583__$3 = cljs.core.next.call(null,seq51583__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__51584,G__51585,G__51586,seq51583__$3);
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
var G__51590 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__51591 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__51590;
s = G__51591;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__51592){
var vec__51600 = p__51592;
var p = cljs.core.nth.call(null,vec__51600,(0),null);
var sigs = cljs.core.nth.call(null,vec__51600,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25585__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__51600,p,sigs){
return (function (p__51603){
var vec__51604 = p__51603;
var seq__51605 = cljs.core.seq.call(null,vec__51604);
var first__51606 = cljs.core.first.call(null,seq__51605);
var seq__51605__$1 = cljs.core.next.call(null,seq__51605);
var f = first__51606;
var meths = seq__51605__$1;
var form = vec__51604;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25585__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(psym,pfn_prefix,vec__51600,p,sigs))
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
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__51607){
var vec__51614 = p__51607;
var seq__51615 = cljs.core.seq.call(null,vec__51614);
var first__51616 = cljs.core.first.call(null,seq__51615);
var seq__51615__$1 = cljs.core.next.call(null,seq__51615);
var vec__51617 = first__51616;
var seq__51618 = cljs.core.seq.call(null,vec__51617);
var first__51619 = cljs.core.first.call(null,seq__51618);
var seq__51618__$1 = cljs.core.next.call(null,seq__51618);
var this$ = first__51619;
var args = seq__51618__$1;
var sig = vec__51617;
var body = seq__51615__$1;
var x__25585__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto____$1);
})(),x__25585__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__51620){
var vec__51627 = p__51620;
var seq__51628 = cljs.core.seq.call(null,vec__51627);
var first__51629 = cljs.core.first.call(null,seq__51628);
var seq__51628__$1 = cljs.core.next.call(null,seq__51628);
var vec__51630 = first__51629;
var seq__51631 = cljs.core.seq.call(null,vec__51630);
var first__51632 = cljs.core.first.call(null,seq__51631);
var seq__51631__$1 = cljs.core.next.call(null,seq__51631);
var this$ = first__51632;
var args = seq__51631__$1;
var sig = vec__51630;
var body = seq__51628__$1;
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
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__51633){
var vec__51640 = p__51633;
var seq__51641 = cljs.core.seq.call(null,vec__51640);
var first__51642 = cljs.core.first.call(null,seq__51641);
var seq__51641__$1 = cljs.core.next.call(null,seq__51641);
var vec__51643 = first__51642;
var seq__51644 = cljs.core.seq.call(null,vec__51643);
var first__51645 = cljs.core.first.call(null,seq__51644);
var seq__51644__$1 = cljs.core.next.call(null,seq__51644);
var this$ = first__51645;
var args = seq__51644__$1;
var sig = vec__51643;
var body = seq__51641__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__25585__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__51646){
var vec__51653 = p__51646;
var seq__51654 = cljs.core.seq.call(null,vec__51653);
var first__51655 = cljs.core.first.call(null,seq__51654);
var seq__51654__$1 = cljs.core.next.call(null,seq__51654);
var vec__51656 = first__51655;
var seq__51657 = cljs.core.seq.call(null,vec__51656);
var first__51658 = cljs.core.first.call(null,seq__51657);
var seq__51657__$1 = cljs.core.next.call(null,seq__51657);
var this$ = first__51658;
var args = seq__51657__$1;
var sig = vec__51656;
var body = seq__51654__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__25585__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__51667){
var vec__51668 = p__51667;
var seq__51669 = cljs.core.seq.call(null,vec__51668);
var first__51670 = cljs.core.first.call(null,seq__51669);
var seq__51669__$1 = cljs.core.next.call(null,seq__51669);
var f = first__51670;
var meths = seq__51669__$1;
var form = vec__51668;
var vec__51671 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__51671,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__51671,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__51671,f__$1,meths__$1,vec__51668,seq__51669,first__51670,seq__51669__$1,f,meths,form){
return (function (p1__51659_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__51659_SHARP_);
});})(vec__51671,f__$1,meths__$1,vec__51668,seq__51669,first__51670,seq__51669__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__51675){
var vec__51679 = p__51675;
var seq__51680 = cljs.core.seq.call(null,vec__51679);
var first__51681 = cljs.core.first.call(null,seq__51680);
var seq__51680__$1 = cljs.core.next.call(null,seq__51680);
var f = first__51681;
var meths = seq__51680__$1;
var form = vec__51679;
return cljs.core.map.call(null,((function (vec__51679,seq__51680,first__51681,seq__51680__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(vec__51679,seq__51680,first__51681,seq__51680__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__51679,seq__51680,first__51681,seq__51680__$1,f,meths,form){
return (function (p1__51674_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__51674_SHARP_);
});})(vec__51679,seq__51680,first__51681,seq__51680__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__51683){
var vec__51687 = p__51683;
var seq__51688 = cljs.core.seq.call(null,vec__51687);
var first__51689 = cljs.core.first.call(null,seq__51688);
var seq__51688__$1 = cljs.core.next.call(null,seq__51688);
var f = first__51689;
var meths = seq__51688__$1;
var form = vec__51687;
var meths__$1 = cljs.core.map.call(null,((function (vec__51687,seq__51688,first__51689,seq__51688__$1,f,meths,form){
return (function (p1__51682_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__51682_SHARP_);
});})(vec__51687,seq__51688,first__51689,seq__51688__$1,f,meths,form))
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
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__51690){
var vec__51698 = p__51690;
var seq__51699 = cljs.core.seq.call(null,vec__51698);
var first__51700 = cljs.core.first.call(null,seq__51699);
var seq__51699__$1 = cljs.core.next.call(null,seq__51699);
var f = first__51700;
var meths = seq__51699__$1;
var form = vec__51698;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__51698,seq__51699,first__51700,seq__51699__$1,f,meths,form){
return (function (p__51701){
var vec__51702 = p__51701;
var seq__51703 = cljs.core.seq.call(null,vec__51702);
var first__51704 = cljs.core.first.call(null,seq__51703);
var seq__51703__$1 = cljs.core.next.call(null,seq__51703);
var sig = first__51704;
var body = seq__51703__$1;
var meth = vec__51702;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(pf,vec__51698,seq__51699,first__51700,seq__51699__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__51705){
var vec__51709 = p__51705;
var p = cljs.core.nth.call(null,vec__51709,(0),null);
var sigs = cljs.core.nth.call(null,vec__51709,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25585__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__51709,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__51709,p,sigs))
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
var vec__51715 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__51715,(0),null);
var sigs = cljs.core.nth.call(null,vec__51715,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_51718 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_51718))){
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

var G__51719 = cljs.core.next.call(null,sigs__$1);
var G__51720 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__51719;
seen = G__51720;
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

var seen_51727 = cljs.core.PersistentHashSet.EMPTY;
var methods_51728__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_51728__$1)){
var vec__51724_51729 = cljs.core.first.call(null,methods_51728__$1);
var fname_51730 = cljs.core.nth.call(null,vec__51724_51729,(0),null);
var method_51731 = vec__51724_51729;
if(cljs.core.contains_QMARK_.call(null,seen_51727,fname_51730)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_51730], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_51731);

var G__51732 = cljs.core.conj.call(null,seen_51727,fname_51730);
var G__51733 = cljs.core.next.call(null,methods_51728__$1);
seen_51727 = G__51732;
methods_51728__$1 = G__51733;
continue;
} else {
}
break;
}

var G__51734 = cljs.core.conj.call(null,protos,proto);
var G__51735 = impls__$2;
protos = G__51734;
impls__$1 = G__51735;
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
var len__25826__auto___51744 = arguments.length;
var i__25827__auto___51745 = (0);
while(true){
if((i__25827__auto___51745 < len__25826__auto___51744)){
args__25833__auto__.push((arguments[i__25827__auto___51745]));

var G__51746 = (i__25827__auto___51745 + (1));
i__25827__auto___51745 = G__51746;
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
var vec__51741 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__51741,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__51741,(1),null);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__51741,type,assign_impls){
return (function (p1__51736_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__51736_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__51741,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq51737){
var G__51738 = cljs.core.first.call(null,seq51737);
var seq51737__$1 = cljs.core.next.call(null,seq51737);
var G__51739 = cljs.core.first.call(null,seq51737__$1);
var seq51737__$2 = cljs.core.next.call(null,seq51737__$1);
var G__51740 = cljs.core.first.call(null,seq51737__$2);
var seq51737__$3 = cljs.core.next.call(null,seq51737__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__51738,G__51739,G__51740,seq51737__$3);
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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__51748){
var vec__51752 = p__51748;
var f = cljs.core.nth.call(null,vec__51752,(0),null);
var sigs = cljs.core.nth.call(null,vec__51752,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__51752,f,sigs){
return (function (p1__51747_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__51747_SHARP_),cljs.core.nnext.call(null,p1__51747_SHARP_));
});})(vec__51752,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args51755 = [];
var len__25826__auto___51758 = arguments.length;
var i__25827__auto___51759 = (0);
while(true){
if((i__25827__auto___51759 < len__25826__auto___51758)){
args51755.push((arguments[i__25827__auto___51759]));

var G__51760 = (i__25827__auto___51759 + (1));
i__25827__auto___51759 = G__51760;
continue;
} else {
}
break;
}

var G__51757 = args51755.length;
switch (G__51757) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51755.length)].join('')));

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
var G__51762 = ret__$1;
var G__51763 = specs__$2;
ret = G__51762;
specs__$1 = G__51763;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__51764_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__51764_SHARP_));
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
var len__25826__auto___51776 = arguments.length;
var i__25827__auto___51777 = (0);
while(true){
if((i__25827__auto___51777 < len__25826__auto___51776)){
args__25833__auto__.push((arguments[i__25827__auto___51777]));

var G__51778 = (i__25827__auto___51777 + (1));
i__25827__auto___51777 = G__51778;
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
var vec__51773 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__51773,(0),null);
var pmasks = cljs.core.nth.call(null,vec__51773,(1),null);
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
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51765__auto__","this__51765__auto__",2108848348,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__51766__auto__","writer__51766__auto__",-1306584302,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__51767__auto__","opt__51767__auto__",393083509,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__51766__auto__","writer__51766__auto__",-1306584302,null)),(function (){var x__25585__auto__ = [cljs.core.str(r)].join('');
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

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq51768){
var G__51769 = cljs.core.first.call(null,seq51768);
var seq51768__$1 = cljs.core.next.call(null,seq51768);
var G__51770 = cljs.core.first.call(null,seq51768__$1);
var seq51768__$2 = cljs.core.next.call(null,seq51768__$1);
var G__51771 = cljs.core.first.call(null,seq51768__$2);
var seq51768__$3 = cljs.core.next.call(null,seq51768__$2);
var G__51772 = cljs.core.first.call(null,seq51768__$3);
var seq51768__$4 = cljs.core.next.call(null,seq51768__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__51769,G__51770,G__51771,G__51772,seq51768__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__51779_SHARP_){
return cljs.core.with_meta.call(null,p1__51779_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51780__auto__","this__51780__auto__",-1972331123,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25585__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51781__auto__","this__51781__auto__",-1002381166,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51781__auto__","this__51781__auto__",-1002381166,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51782__auto__","this__51782__auto__",339016169,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__51783__auto__","other__51783__auto__",438420934,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__51783__auto__","other__51783__auto__",438420934,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51782__auto__","this__51782__auto__",339016169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__51783__auto__","other__51783__auto__",438420934,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51782__auto__","this__51782__auto__",339016169,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__51783__auto__","other__51783__auto__",438420934,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51784__auto__","this__51784__auto__",22465715,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51785__auto__","this__51785__auto__",1613256371,null)),(function (){var x__25585__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25585__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51786__auto__","this__51786__auto__",-1066922262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51787__auto__","k__51787__auto__",928260544,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51786__auto__","this__51786__auto__",-1066922262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51787__auto__","k__51787__auto__",928260544,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51788__auto__","this__51788__auto__",2060604111,null)),(function (){var x__25585__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__51789__auto__","else__51789__auto__",1906994617,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__25585__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__25585__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__51789__auto__","else__51789__auto__",1906994617,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51790__auto__","this__51790__auto__",139377060,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__25585__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51791__auto__","this__51791__auto__",-1231423758,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__51792__auto__","entry__51792__auto__",-369480863,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__51792__auto__","entry__51792__auto__",-369480863,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51791__auto__","this__51791__auto__",-1231423758,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__51792__auto__","entry__51792__auto__",-369480863,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__51792__auto__","entry__51792__auto__",-369480863,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51791__auto__","this__51791__auto__",-1231423758,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__51792__auto__","entry__51792__auto__",-369480863,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51793__auto__","this__51793__auto__",668187351,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51794__auto__","k__51794__auto__",748049492,null)),(function (){var x__25585__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51794__auto__","k__51794__auto__",748049492,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25585__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51794__auto__","k__51794__auto__",748049492,null)),(function (){var x__25585__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51795__auto__","this__51795__auto__",635605479,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51796__auto__","k__51796__auto__",-1009074749,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__25585__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51796__auto__","k__51796__auto__",-1009074749,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__25585__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51795__auto__","this__51795__auto__",635605479,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51796__auto__","k__51796__auto__",-1009074749,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25585__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__51796__auto__","k__51796__auto__",-1009074749,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51798__auto__","this__51798__auto__",-1998302538,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__51797_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.keyword.call(null,p1__51797_SHARP_);
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = p1__51797_SHARP_;
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
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51800__auto__","this__51800__auto__",-1529205100,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__51801__auto__","writer__51801__auto__",-1136731626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__51802__auto__","opts__51802__auto__",-2098473570,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__51803__auto__","pr-pair__51803__auto__",-1449382749,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__51804__auto__","keyval__51804__auto__",-1066709852,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__51801__auto__","writer__51801__auto__",-1136731626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__51802__auto__","opts__51802__auto__",-2098473570,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__51804__auto__","keyval__51804__auto__",-1066709852,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__51801__auto__","writer__51801__auto__",-1136731626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__51803__auto__","pr-pair__51803__auto__",-1449382749,null)),(function (){var x__25585__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__51802__auto__","opts__51802__auto__",-2098473570,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__51799_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = cljs.core.keyword.call(null,p1__51799_SHARP_);
return cljs.core._conj.call(null,(function (){var x__25585__auto____$1 = p1__51799_SHARP_;
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
var vec__51808 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__51808,(0),null);
var pmasks = cljs.core.nth.call(null,vec__51808,(1),null);
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
var len__25826__auto___51818 = arguments.length;
var i__25827__auto___51819 = (0);
while(true){
if((i__25827__auto___51819 < len__25826__auto___51818)){
args__25833__auto__.push((arguments[i__25827__auto___51819]));

var G__51820 = (i__25827__auto___51819 + (1));
i__25827__auto___51819 = G__51820;
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
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51811__auto__","this__51811__auto__",205229798,null))))));
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
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__51811__auto__","this__51811__auto__",205229798,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__51812__auto__","writer__51812__auto__",1465298379,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__51812__auto__","writer__51812__auto__",1465298379,null)),(function (){var x__25585__auto__ = [cljs.core.str(r)].join('');
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

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq51813){
var G__51814 = cljs.core.first.call(null,seq51813);
var seq51813__$1 = cljs.core.next.call(null,seq51813);
var G__51815 = cljs.core.first.call(null,seq51813__$1);
var seq51813__$2 = cljs.core.next.call(null,seq51813__$1);
var G__51816 = cljs.core.first.call(null,seq51813__$2);
var seq51813__$3 = cljs.core.next.call(null,seq51813__$2);
var G__51817 = cljs.core.first.call(null,seq51813__$3);
var seq51813__$4 = cljs.core.next.call(null,seq51813__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__51814,G__51815,G__51816,G__51817,seq51813__$4);
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
var len__25826__auto___51848 = arguments.length;
var i__25827__auto___51849 = (0);
while(true){
if((i__25827__auto___51849 < len__25826__auto___51848)){
args__25833__auto__.push((arguments[i__25827__auto___51849]));

var G__51850 = (i__25827__auto___51849 + (1));
i__25827__auto___51849 = G__51850;
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
var vec__51827 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__51827,(0),null);
var methods$ = cljs.core.nth.call(null,vec__51827,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__51827,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__51827,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__51830 = cljs.core.seq.call(null,methods$);
var chunk__51831 = null;
var count__51832 = (0);
var i__51833 = (0);
while(true){
if((i__51833 < count__51832)){
var vec__51834 = cljs.core._nth.call(null,chunk__51831,i__51833);
var seq__51835 = cljs.core.seq.call(null,vec__51834);
var first__51836 = cljs.core.first.call(null,seq__51835);
var seq__51835__$1 = cljs.core.next.call(null,seq__51835);
var mname = first__51836;
var arities = seq__51835__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__51851 = seq__51830;
var G__51852 = chunk__51831;
var G__51853 = count__51832;
var G__51854 = (i__51833 + (1));
seq__51830 = G__51851;
chunk__51831 = G__51852;
count__51832 = G__51853;
i__51833 = G__51854;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51830);
if(temp__4657__auto__){
var seq__51830__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51830__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__51830__$1);
var G__51855 = cljs.core.chunk_rest.call(null,seq__51830__$1);
var G__51856 = c__25562__auto__;
var G__51857 = cljs.core.count.call(null,c__25562__auto__);
var G__51858 = (0);
seq__51830 = G__51855;
chunk__51831 = G__51856;
count__51832 = G__51857;
i__51833 = G__51858;
continue;
} else {
var vec__51837 = cljs.core.first.call(null,seq__51830__$1);
var seq__51838 = cljs.core.seq.call(null,vec__51837);
var first__51839 = cljs.core.first.call(null,seq__51838);
var seq__51838__$1 = cljs.core.next.call(null,seq__51838);
var mname = first__51839;
var arities = seq__51838__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__51859 = cljs.core.next.call(null,seq__51830__$1);
var G__51860 = null;
var G__51861 = (0);
var G__51862 = (0);
seq__51830 = G__51859;
chunk__51831 = G__51860;
count__51832 = G__51861;
i__51833 = G__51862;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__51827,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
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
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51821__auto__","x__51821__auto__",-1904187374,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25585__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25585__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__51822__auto__","m__51822__auto__",1190709837,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25585__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__51821__auto__","x__51821__auto__",-1904187374,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__51822__auto__","m__51822__auto__",1190709837,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__51822__auto__","m__51822__auto__",1190709837,null)),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__51822__auto__","m__51822__auto__",1190709837,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25585__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__51822__auto__","m__51822__auto__",1190709837,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__51822__auto__","m__51822__auto__",1190709837,null)),sig)));
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
});})(p,vec__51827,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__51827,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__51840){
var vec__51841 = p__51840;
var seq__51842 = cljs.core.seq.call(null,vec__51841);
var first__51843 = cljs.core.first.call(null,seq__51842);
var seq__51842__$1 = cljs.core.next.call(null,seq__51842);
var fname = first__51843;
var sigs = seq__51842__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__51827,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__51827,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__51844){
var vec__51845 = p__51844;
var seq__51846 = cljs.core.seq.call(null,vec__51845);
var first__51847 = cljs.core.first.call(null,seq__51846);
var seq__51846__$1 = cljs.core.next.call(null,seq__51846);
var fname = first__51847;
var sigs = seq__51846__$1;
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
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__51845,seq__51846,first__51847,seq__51846__$1,fname,sigs,p,vec__51827,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__51845,seq__51846,first__51847,seq__51846__$1,fname,sigs,p,vec__51827,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__51827,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
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

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq51823){
var G__51824 = cljs.core.first.call(null,seq51823);
var seq51823__$1 = cljs.core.next.call(null,seq51823);
var G__51825 = cljs.core.first.call(null,seq51823__$1);
var seq51823__$2 = cljs.core.next.call(null,seq51823__$1);
var G__51826 = cljs.core.first.call(null,seq51823__$2);
var seq51823__$3 = cljs.core.next.call(null,seq51823__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__51824,G__51825,G__51826,seq51823__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__51866 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__51866,(0),null);
var bit = cljs.core.nth.call(null,vec__51866,(1),null);
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
var vec__51872 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__51872,(0),null);
var bit = cljs.core.nth.call(null,vec__51872,(1),null);
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
var len__25826__auto___51878 = arguments.length;
var i__25827__auto___51879 = (0);
while(true){
if((i__25827__auto___51879 < len__25826__auto___51878)){
args__25833__auto__.push((arguments[i__25827__auto___51879]));

var G__51880 = (i__25827__auto___51879 + (1));
i__25827__auto___51879 = G__51880;
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

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq51875){
var G__51876 = cljs.core.first.call(null,seq51875);
var seq51875__$1 = cljs.core.next.call(null,seq51875);
var G__51877 = cljs.core.first.call(null,seq51875__$1);
var seq51875__$2 = cljs.core.next.call(null,seq51875__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__51876,G__51877,seq51875__$2);
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
var len__25826__auto___51884 = arguments.length;
var i__25827__auto___51885 = (0);
while(true){
if((i__25827__auto___51885 < len__25826__auto___51884)){
args__25833__auto__.push((arguments[i__25827__auto___51885]));

var G__51886 = (i__25827__auto___51885 + (1));
i__25827__auto___51885 = G__51886;
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

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq51881){
var G__51882 = cljs.core.first.call(null,seq51881);
var seq51881__$1 = cljs.core.next.call(null,seq51881);
var G__51883 = cljs.core.first.call(null,seq51881__$1);
var seq51881__$2 = cljs.core.next.call(null,seq51881__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__51882,G__51883,seq51881__$2);
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
var len__25826__auto___51895 = arguments.length;
var i__25827__auto___51896 = (0);
while(true){
if((i__25827__auto___51896 < len__25826__auto___51895)){
args__25833__auto__.push((arguments[i__25827__auto___51896]));

var G__51897 = (i__25827__auto___51896 + (1));
i__25827__auto___51896 = G__51897;
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
return (function (p__51891){
var vec__51892 = p__51891;
var k = cljs.core.nth.call(null,vec__51892,(0),null);
var v = cljs.core.nth.call(null,vec__51892,(1),null);
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

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq51887){
var G__51888 = cljs.core.first.call(null,seq51887);
var seq51887__$1 = cljs.core.next.call(null,seq51887);
var G__51889 = cljs.core.first.call(null,seq51887__$1);
var seq51887__$2 = cljs.core.next.call(null,seq51887__$1);
var G__51890 = cljs.core.first.call(null,seq51887__$2);
var seq51887__$3 = cljs.core.next.call(null,seq51887__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__51888,G__51889,G__51890,seq51887__$3);
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
var len__25826__auto___51902 = arguments.length;
var i__25827__auto___51903 = (0);
while(true){
if((i__25827__auto___51903 < len__25826__auto___51902)){
args__25833__auto__.push((arguments[i__25827__auto___51903]));

var G__51904 = (i__25827__auto___51903 + (1));
i__25827__auto___51903 = G__51904;
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

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq51898){
var G__51899 = cljs.core.first.call(null,seq51898);
var seq51898__$1 = cljs.core.next.call(null,seq51898);
var G__51900 = cljs.core.first.call(null,seq51898__$1);
var seq51898__$2 = cljs.core.next.call(null,seq51898__$1);
var G__51901 = cljs.core.first.call(null,seq51898__$2);
var seq51898__$3 = cljs.core.next.call(null,seq51898__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__51899,G__51900,G__51901,seq51898__$3);
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
var len__25826__auto___51923 = arguments.length;
var i__25827__auto___51924 = (0);
while(true){
if((i__25827__auto___51924 < len__25826__auto___51923)){
args__25833__auto__.push((arguments[i__25827__auto___51924]));

var G__51925 = (i__25827__auto___51924 + (1));
i__25827__auto___51924 = G__51925;
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
var vec__51917 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__51920 = cljs.core.nth.call(null,vec__51917,(0),null);
var a = cljs.core.nth.call(null,vec__51920,(0),null);
var b = cljs.core.nth.call(null,vec__51920,(1),null);
var c = cljs.core.nth.call(null,vec__51920,(2),null);
var clause = vec__51920;
var more = cljs.core.nth.call(null,vec__51917,(1),null);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__51905__auto__","p__51905__auto__",-2037970152,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = pred__$1;
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
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__51905__auto__","p__51905__auto__",-2037970152,null)))));
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

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq51906){
var G__51907 = cljs.core.first.call(null,seq51906);
var seq51906__$1 = cljs.core.next.call(null,seq51906);
var G__51908 = cljs.core.first.call(null,seq51906__$1);
var seq51906__$2 = cljs.core.next.call(null,seq51906__$1);
var G__51909 = cljs.core.first.call(null,seq51906__$2);
var seq51906__$3 = cljs.core.next.call(null,seq51906__$2);
var G__51910 = cljs.core.first.call(null,seq51906__$3);
var seq51906__$4 = cljs.core.next.call(null,seq51906__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__51907,G__51908,G__51909,G__51910,seq51906__$4);
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
var len__25826__auto___51946 = arguments.length;
var i__25827__auto___51947 = (0);
while(true){
if((i__25827__auto___51947 < len__25826__auto___51946)){
args__25833__auto__.push((arguments[i__25827__auto___51947]));

var G__51948 = (i__25827__auto___51947 + (1));
i__25827__auto___51947 = G__51948;
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
return (function (m,p__51934){
var vec__51935 = p__51934;
var test = cljs.core.nth.call(null,vec__51935,(0),null);
var expr = cljs.core.nth.call(null,vec__51935,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__51935,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__25585__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__51935,test,expr,default$,env))
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
return (function (p1__51926_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__51926_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__51927_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__51927_SHARP_)){
return cljs.core.vec.call(null,p1__51927_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51927_SHARP_], null);
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
return (function (p1__51929_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__51929_SHARP_)){
return cljs.core.vec.call(null,p1__51929_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51929_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__51928_SHARP_){
return [cljs.core.str(p1__51928_SHARP_)].join('').substring((1));
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
return (function (p__51942){
var vec__51943 = p__51942;
var m = cljs.core.nth.call(null,vec__51943,(0),null);
var c = cljs.core.nth.call(null,vec__51943,(1),null);
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

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq51930){
var G__51931 = cljs.core.first.call(null,seq51930);
var seq51930__$1 = cljs.core.next.call(null,seq51930);
var G__51932 = cljs.core.first.call(null,seq51930__$1);
var seq51930__$2 = cljs.core.next.call(null,seq51930__$1);
var G__51933 = cljs.core.first.call(null,seq51930__$2);
var seq51930__$3 = cljs.core.next.call(null,seq51930__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__51931,G__51932,G__51933,seq51930__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args51949 = [];
var len__25826__auto___51952 = arguments.length;
var i__25827__auto___51953 = (0);
while(true){
if((i__25827__auto___51953 < len__25826__auto___51952)){
args51949.push((arguments[i__25827__auto___51953]));

var G__51954 = (i__25827__auto___51953 + (1));
i__25827__auto___51953 = G__51954;
continue;
} else {
}
break;
}

var G__51951 = args51949.length;
switch (G__51951) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args51949.length - (2)))].join('')));

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
return cljs.core.reduce.call(null,(function (groups,p__52042){
var vec__52043 = p__52042;
var k = cljs.core.nth.call(null,vec__52043,(0),null);
var v = cljs.core.nth.call(null,vec__52043,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__52123__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__52123 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__52124__i = 0, G__52124__a = new Array(arguments.length -  0);
while (G__52124__i < G__52124__a.length) {G__52124__a[G__52124__i] = arguments[G__52124__i + 0]; ++G__52124__i;}
  msg = new cljs.core.IndexedSeq(G__52124__a,0);
} 
return G__52123__delegate.call(this,msg);};
G__52123.cljs$lang$maxFixedArity = 0;
G__52123.cljs$lang$applyTo = (function (arglist__52125){
var msg = cljs.core.seq(arglist__52125);
return G__52123__delegate(msg);
});
G__52123.cljs$core$IFn$_invoke$arity$variadic = G__52123__delegate;
return G__52123;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__52046){
var vec__52085 = p__52046;
var seq__52086 = cljs.core.seq.call(null,vec__52085);
var first__52087 = cljs.core.first.call(null,seq__52086);
var seq__52086__$1 = cljs.core.next.call(null,seq__52086);
var vec__52088 = first__52087;
var seq__52089 = cljs.core.seq.call(null,vec__52088);
var first__52090 = cljs.core.first.call(null,seq__52089);
var seq__52089__$1 = cljs.core.next.call(null,seq__52089);
var bind = first__52090;
var first__52090__$1 = cljs.core.first.call(null,seq__52089__$1);
var seq__52089__$2 = cljs.core.next.call(null,seq__52089__$1);
var expr = first__52090__$1;
var mod_pairs = seq__52089__$2;
var vec__52091 = seq__52086__$1;
var vec__52094 = cljs.core.nth.call(null,vec__52091,(0),null);
var _ = cljs.core.nth.call(null,vec__52094,(0),null);
var next_expr = cljs.core.nth.call(null,vec__52094,(1),null);
var next_groups = vec__52091;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__52085,seq__52086,first__52087,seq__52086__$1,vec__52088,seq__52089,first__52090,seq__52089__$1,bind,first__52090__$1,seq__52089__$2,expr,mod_pairs,vec__52091,vec__52094,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__52097){
var vec__52104 = p__52097;
var seq__52105 = cljs.core.seq.call(null,vec__52104);
var first__52106 = cljs.core.first.call(null,seq__52105);
var seq__52105__$1 = cljs.core.next.call(null,seq__52105);
var vec__52107 = first__52106;
var k = cljs.core.nth.call(null,vec__52107,(0),null);
var v = cljs.core.nth.call(null,vec__52107,(1),null);
var pair = vec__52107;
var etc = seq__52105__$1;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__51956__auto__","iterys__51956__auto__",1185403907,null)),(function (){var x__25585__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__51957__auto__","fs__51957__auto__",-1760902458,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__51956__auto__","iterys__51956__auto__",1185403907,null)),(function (){var x__25585__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__51957__auto__","fs__51957__auto__",-1760902458,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__51957__auto__","fs__51957__auto__",-1760902458,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = giter;
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
});})(giter,gxs,vec__52085,seq__52086,first__52087,seq__52086__$1,vec__52088,seq__52089,first__52090,seq__52089__$1,bind,first__52090__$1,seq__52089__$2,expr,mod_pairs,vec__52091,vec__52094,_,next_expr,next_groups,to_groups,err))
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
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__52085,seq__52086,first__52087,seq__52086__$1,vec__52088,seq__52089,first__52090,seq__52089__$1,bind,first__52090__$1,seq__52089__$2,expr,mod_pairs,vec__52091,vec__52094,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__52110){
var vec__52117 = p__52110;
var seq__52118 = cljs.core.seq.call(null,vec__52117);
var first__52119 = cljs.core.first.call(null,seq__52118);
var seq__52118__$1 = cljs.core.next.call(null,seq__52118);
var vec__52120 = first__52119;
var k = cljs.core.nth.call(null,vec__52120,(0),null);
var v = cljs.core.nth.call(null,vec__52120,(1),null);
var pair = vec__52120;
var etc = seq__52118__$1;
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
});})(gi,gb,giter,gxs,do_mod,vec__52085,seq__52086,first__52087,seq__52086__$1,vec__52088,seq__52089,first__52090,seq__52089__$1,bind,first__52090__$1,seq__52089__$2,expr,mod_pairs,vec__52091,vec__52094,_,next_expr,next_groups,to_groups,err))
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
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__51958__auto__","c__51958__auto__",-450888034,null)),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__25585__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/kevinzeidler/rhizome/reg2/resources/public/cljs/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2314),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2314),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__51959__auto__","size__51959__auto__",-687335070,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__51958__auto__","c__51958__auto__",-450888034,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__51959__auto__","size__51959__auto__",-687335070,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25585__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__51959__auto__","size__51959__auto__",-687335070,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__51958__auto__","c__51958__auto__",-450888034,null)),(function (){var x__25585__auto__ = gi;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__51960__auto__","iter__51960__auto__",1875637201,null)),(function (){var x__25585__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__51960__auto__","iter__51960__auto__",1875637201,null)),(function (){var x__25585__auto__ = cljs.core.second.call(null,seq_exprs);
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
var len__25826__auto___52131 = arguments.length;
var i__25827__auto___52132 = (0);
while(true){
if((i__25827__auto___52132 < len__25826__auto___52131)){
args__25833__auto__.push((arguments[i__25827__auto___52132]));

var G__52133 = (i__25827__auto___52132 + (1));
i__25827__auto___52132 = G__52133;
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
var G__52134__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__52134 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__52135__i = 0, G__52135__a = new Array(arguments.length -  0);
while (G__52135__i < G__52135__a.length) {G__52135__a[G__52135__i] = arguments[G__52135__i + 0]; ++G__52135__i;}
  msg = new cljs.core.IndexedSeq(G__52135__a,0);
} 
return G__52134__delegate.call(this,msg);};
G__52134.cljs$lang$maxFixedArity = 0;
G__52134.cljs$lang$applyTo = (function (arglist__52136){
var msg = cljs.core.seq(arglist__52136);
return G__52134__delegate(msg);
});
G__52134.cljs$core$IFn$_invoke$arity$variadic = G__52134__delegate;
return G__52134;
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
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__52126__auto__","c__52126__auto__",-1030452145,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__25585__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__25585__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__52126__auto__","c__52126__auto__",-1030452145,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__52126__auto__","c__52126__auto__",-1030452145,null)))));
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

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq52127){
var G__52128 = cljs.core.first.call(null,seq52127);
var seq52127__$1 = cljs.core.next.call(null,seq52127);
var G__52129 = cljs.core.first.call(null,seq52127__$1);
var seq52127__$2 = cljs.core.next.call(null,seq52127__$1);
var G__52130 = cljs.core.first.call(null,seq52127__$2);
var seq52127__$3 = cljs.core.next.call(null,seq52127__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__52128,G__52129,G__52130,seq52127__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__25833__auto__ = [];
var len__25826__auto___52140 = arguments.length;
var i__25827__auto___52141 = (0);
while(true){
if((i__25827__auto___52141 < len__25826__auto___52140)){
args__25833__auto__.push((arguments[i__25827__auto___52141]));

var G__52142 = (i__25827__auto___52141 + (1));
i__25827__auto___52141 = G__52142;
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

cljs.core$macros.array.cljs$lang$applyTo = (function (seq52137){
var G__52138 = cljs.core.first.call(null,seq52137);
var seq52137__$1 = cljs.core.next.call(null,seq52137);
var G__52139 = cljs.core.first.call(null,seq52137__$1);
var seq52137__$2 = cljs.core.next.call(null,seq52137__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__52138,G__52139,seq52137__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args52146 = [];
var len__25826__auto___52154 = arguments.length;
var i__25827__auto___52155 = (0);
while(true){
if((i__25827__auto___52155 < len__25826__auto___52154)){
args52146.push((arguments[i__25827__auto___52155]));

var G__52156 = (i__25827__auto___52155 + (1));
i__25827__auto___52155 = G__52156;
continue;
} else {
}
break;
}

var G__52153 = args52146.length;
switch (G__52153) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args52146.slice((4)),(0),null));
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
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__52143__auto__","dims__52143__auto__",-2006146815,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__52144__auto__","dimarray__52144__auto__",-699090552,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__25585__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__52145__auto__","i__52145__auto__",-1498577304,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__52144__auto__","dimarray__52144__auto__",-699090552,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__52144__auto__","dimarray__52144__auto__",-699090552,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__52145__auto__","i__52145__auto__",-1498577304,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__52143__auto__","dims__52143__auto__",-2006146815,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__52144__auto__","dimarray__52144__auto__",-699090552,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq52147){
var G__52148 = cljs.core.first.call(null,seq52147);
var seq52147__$1 = cljs.core.next.call(null,seq52147);
var G__52149 = cljs.core.first.call(null,seq52147__$1);
var seq52147__$2 = cljs.core.next.call(null,seq52147__$1);
var G__52150 = cljs.core.first.call(null,seq52147__$2);
var seq52147__$3 = cljs.core.next.call(null,seq52147__$2);
var G__52151 = cljs.core.first.call(null,seq52147__$3);
var seq52147__$4 = cljs.core.next.call(null,seq52147__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__52148,G__52149,G__52150,G__52151,seq52147__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args52159 = [];
var len__25826__auto___52166 = arguments.length;
var i__25827__auto___52167 = (0);
while(true){
if((i__25827__auto___52167 < len__25826__auto___52166)){
args52159.push((arguments[i__25827__auto___52167]));

var G__52168 = (i__25827__auto___52167 + (1));
i__25827__auto___52167 = G__52168;
continue;
} else {
}
break;
}

var G__52165 = args52159.length;
switch (G__52165) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args52159.slice((3)),(0),null));
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__52158__auto__","x__52158__auto__",971889970,null)),(function (){var x__25585__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__52158__auto__","x__52158__auto__",971889970,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq52160){
var G__52161 = cljs.core.first.call(null,seq52160);
var seq52160__$1 = cljs.core.next.call(null,seq52160);
var G__52162 = cljs.core.first.call(null,seq52160__$1);
var seq52160__$2 = cljs.core.next.call(null,seq52160__$1);
var G__52163 = cljs.core.first.call(null,seq52160__$2);
var seq52160__$3 = cljs.core.next.call(null,seq52160__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__52161,G__52162,G__52163,seq52160__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args52170 = [];
var len__25826__auto___52176 = arguments.length;
var i__25827__auto___52177 = (0);
while(true){
if((i__25827__auto___52177 < len__25826__auto___52176)){
args52170.push((arguments[i__25827__auto___52177]));

var G__52178 = (i__25827__auto___52177 + (1));
i__25827__auto___52177 = G__52178;
continue;
} else {
}
break;
}

var G__52175 = args52170.length;
switch (G__52175) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args52170.slice((2)),(0),null));
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

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq52171){
var G__52172 = cljs.core.first.call(null,seq52171);
var seq52171__$1 = cljs.core.next.call(null,seq52171);
var G__52173 = cljs.core.first.call(null,seq52171__$1);
var seq52171__$2 = cljs.core.next.call(null,seq52171__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__52172,G__52173,seq52171__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args52182 = [];
var len__25826__auto___52188 = arguments.length;
var i__25827__auto___52189 = (0);
while(true){
if((i__25827__auto___52189 < len__25826__auto___52188)){
args52182.push((arguments[i__25827__auto___52189]));

var G__52190 = (i__25827__auto___52189 + (1));
i__25827__auto___52189 = G__52190;
continue;
} else {
}
break;
}

var G__52187 = args52182.length;
switch (G__52187) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args52182.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25845__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__52180_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__52180_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__52181_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__52181_SHARP_);
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

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq52183){
var G__52184 = cljs.core.first.call(null,seq52183);
var seq52183__$1 = cljs.core.next.call(null,seq52183);
var G__52185 = cljs.core.first.call(null,seq52183__$1);
var seq52183__$2 = cljs.core.next.call(null,seq52183__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__52184,G__52185,seq52183__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args52192 = [];
var len__25826__auto___52198 = arguments.length;
var i__25827__auto___52199 = (0);
while(true){
if((i__25827__auto___52199 < len__25826__auto___52198)){
args52192.push((arguments[i__25827__auto___52199]));

var G__52200 = (i__25827__auto___52199 + (1));
i__25827__auto___52199 = G__52200;
continue;
} else {
}
break;
}

var G__52197 = args52192.length;
switch (G__52197) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args52192.slice((2)),(0),null));
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

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq52193){
var G__52194 = cljs.core.first.call(null,seq52193);
var seq52193__$1 = cljs.core.next.call(null,seq52193);
var G__52195 = cljs.core.first.call(null,seq52193__$1);
var seq52193__$2 = cljs.core.next.call(null,seq52193__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__52194,G__52195,seq52193__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args52204 = [];
var len__25826__auto___52210 = arguments.length;
var i__25827__auto___52211 = (0);
while(true){
if((i__25827__auto___52211 < len__25826__auto___52210)){
args52204.push((arguments[i__25827__auto___52211]));

var G__52212 = (i__25827__auto___52211 + (1));
i__25827__auto___52211 = G__52212;
continue;
} else {
}
break;
}

var G__52209 = args52204.length;
switch (G__52209) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args52204.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25845__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__52202_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__52202_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__52203_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__52203_SHARP_);
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

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq52205){
var G__52206 = cljs.core.first.call(null,seq52205);
var seq52205__$1 = cljs.core.next.call(null,seq52205);
var G__52207 = cljs.core.first.call(null,seq52205__$1);
var seq52205__$2 = cljs.core.next.call(null,seq52205__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__52206,G__52207,seq52205__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__25833__auto__ = [];
var len__25826__auto___52229 = arguments.length;
var i__25827__auto___52230 = (0);
while(true){
if((i__25827__auto___52230 < len__25826__auto___52229)){
args__25833__auto__.push((arguments[i__25827__auto___52230]));

var G__52231 = (i__25827__auto___52230 + (1));
i__25827__auto___52230 = G__52231;
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
return (function (p__52217){
var vec__52218 = p__52217;
var k = cljs.core.nth.call(null,vec__52218,(0),null);
var _ = cljs.core.nth.call(null,vec__52218,(1),null);
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
return (function (p__52221){
var vec__52222 = p__52221;
var k = cljs.core.nth.call(null,vec__52222,(0),null);
var v = cljs.core.nth.call(null,vec__52222,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25585__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__52225){
var vec__52226 = p__52225;
var k = cljs.core.nth.call(null,vec__52226,(0),null);
var v = cljs.core.nth.call(null,vec__52226,(1),null);
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

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq52214){
var G__52215 = cljs.core.first.call(null,seq52214);
var seq52214__$1 = cljs.core.next.call(null,seq52214);
var G__52216 = cljs.core.first.call(null,seq52214__$1);
var seq52214__$2 = cljs.core.next.call(null,seq52214__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__52215,G__52216,seq52214__$2);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__52232__auto__","a__52232__auto__",-520812694,null)),(function (){var x__25585__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__52232__auto__","a__52232__auto__",-520812694,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25585__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__52232__auto__","a__52232__auto__",-520812694,null)))));
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__52233__auto__","a__52233__auto__",1569932871,null)),(function (){var x__25585__auto__ = a;
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
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__52233__auto__","a__52233__auto__",1569932871,null)))));
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
var len__25826__auto___52239 = arguments.length;
var i__25827__auto___52240 = (0);
while(true){
if((i__25827__auto___52240 < len__25826__auto___52239)){
args__25833__auto__.push((arguments[i__25827__auto___52240]));

var G__52241 = (i__25827__auto___52240 + (1));
i__25827__auto___52240 = G__52241;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__52234__auto__","n__52234__auto__",763873683,null)),(function (){var x__25585__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25585__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__52234__auto__","n__52234__auto__",763873683,null)))));
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

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq52235){
var G__52236 = cljs.core.first.call(null,seq52235);
var seq52235__$1 = cljs.core.next.call(null,seq52235);
var G__52237 = cljs.core.first.call(null,seq52235__$1);
var seq52235__$2 = cljs.core.next.call(null,seq52235__$1);
var G__52238 = cljs.core.first.call(null,seq52235__$2);
var seq52235__$3 = cljs.core.next.call(null,seq52235__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__52236,G__52237,G__52238,seq52235__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__25833__auto__ = [];
var len__25826__auto___52245 = arguments.length;
var i__25827__auto___52246 = (0);
while(true){
if((i__25827__auto___52246 < len__25826__auto___52245)){
args__25833__auto__.push((arguments[i__25827__auto___52246]));

var G__52247 = (i__25827__auto___52246 + (1));
i__25827__auto___52246 = G__52247;
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
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__52242_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__52242_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq52243){
var G__52244 = cljs.core.first.call(null,seq52243);
var seq52243__$1 = cljs.core.next.call(null,seq52243);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__52244,seq52243__$1);
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
var len__25826__auto___52257 = arguments.length;
var i__25827__auto___52258 = (0);
while(true){
if((i__25827__auto___52258 < len__25826__auto___52257)){
args__25833__auto__.push((arguments[i__25827__auto___52258]));

var G__52259 = (i__25827__auto___52258 + (1));
i__25827__auto___52258 = G__52259;
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
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__52248__auto__","method-table__52248__auto__",929875055,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25585__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__52249__auto__","prefer-table__52249__auto__",-1156214394,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25585__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__52250__auto__","method-cache__52250__auto__",-1819435954,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25585__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__52251__auto__","cached-hierarchy__52251__auto__",1888550441,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25585__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__52252__auto__","hierarchy__52252__auto__",-917237686,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__25585__auto__ = options__$4;
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
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__52252__auto__","hierarchy__52252__auto__",-917237686,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__52248__auto__","method-table__52248__auto__",929875055,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__52249__auto__","prefer-table__52249__auto__",-1156214394,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__52250__auto__","method-cache__52250__auto__",-1819435954,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__52251__auto__","cached-hierarchy__52251__auto__",1888550441,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq52253){
var G__52254 = cljs.core.first.call(null,seq52253);
var seq52253__$1 = cljs.core.next.call(null,seq52253);
var G__52255 = cljs.core.first.call(null,seq52253__$1);
var seq52253__$2 = cljs.core.next.call(null,seq52253__$1);
var G__52256 = cljs.core.first.call(null,seq52253__$2);
var seq52253__$3 = cljs.core.next.call(null,seq52253__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__52254,G__52255,G__52256,seq52253__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__25833__auto__ = [];
var len__25826__auto___52265 = arguments.length;
var i__25827__auto___52266 = (0);
while(true){
if((i__25827__auto___52266 < len__25826__auto___52265)){
args__25833__auto__.push((arguments[i__25827__auto___52266]));

var G__52267 = (i__25827__auto___52266 + (1));
i__25827__auto___52266 = G__52267;
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

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq52260){
var G__52261 = cljs.core.first.call(null,seq52260);
var seq52260__$1 = cljs.core.next.call(null,seq52260);
var G__52262 = cljs.core.first.call(null,seq52260__$1);
var seq52260__$2 = cljs.core.next.call(null,seq52260__$1);
var G__52263 = cljs.core.first.call(null,seq52260__$2);
var seq52260__$3 = cljs.core.next.call(null,seq52260__$2);
var G__52264 = cljs.core.first.call(null,seq52260__$3);
var seq52260__$4 = cljs.core.next.call(null,seq52260__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__52261,G__52262,G__52263,G__52264,seq52260__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__52268__auto__","start__52268__auto__",-818547690,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__52269__auto__","ret__52269__auto__",-1914487923,null)),(function (){var x__25585__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__52268__auto__","start__52268__auto__",-818547690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__52269__auto__","ret__52269__auto__",-1914487923,null)))));
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
var len__25826__auto___52284 = arguments.length;
var i__25827__auto___52285 = (0);
while(true){
if((i__25827__auto___52285 < len__25826__auto___52284)){
args__25833__auto__.push((arguments[i__25827__auto___52285]));

var G__52286 = (i__25827__auto___52285 + (1));
i__25827__auto___52285 = G__52286;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((5) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__25834__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__52281){
var map__52282 = p__52281;
var map__52282__$1 = ((((!((map__52282 == null)))?((((map__52282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52282):map__52282);
var print_fn = cljs.core.get.call(null,map__52282__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__52270__auto__","start__52270__auto__",-197979256,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__52271__auto__","ret__52271__auto__",-21462886,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___52272__auto__","___52272__auto__",2129083067,null)),(function (){var x__25585__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__52273__auto__","end__52273__auto__",1678938039,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__52274__auto__","elapsed__52274__auto__",1137315444,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__52273__auto__","end__52273__auto__",1678938039,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__52270__auto__","start__52270__auto__",-197979256,null)))));
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
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__52274__auto__","elapsed__52274__auto__",1137315444,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq52275){
var G__52276 = cljs.core.first.call(null,seq52275);
var seq52275__$1 = cljs.core.next.call(null,seq52275);
var G__52277 = cljs.core.first.call(null,seq52275__$1);
var seq52275__$2 = cljs.core.next.call(null,seq52275__$1);
var G__52278 = cljs.core.first.call(null,seq52275__$2);
var seq52275__$3 = cljs.core.next.call(null,seq52275__$2);
var G__52279 = cljs.core.first.call(null,seq52275__$3);
var seq52275__$4 = cljs.core.next.call(null,seq52275__$3);
var G__52280 = cljs.core.first.call(null,seq52275__$4);
var seq52275__$5 = cljs.core.next.call(null,seq52275__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__52276,G__52277,G__52278,G__52279,G__52280,seq52275__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args52287 = [];
var len__25826__auto___52290 = arguments.length;
var i__25827__auto___52291 = (0);
while(true){
if((i__25827__auto___52291 < len__25826__auto___52290)){
args52287.push((arguments[i__25827__auto___52291]));

var G__52292 = (i__25827__auto___52291 + (1));
i__25827__auto___52291 = G__52292;
continue;
} else {
}
break;
}

var G__52289 = args52287.length;
switch (G__52289) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52287.length)].join('')));

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
var len__25826__auto___52299 = arguments.length;
var i__25827__auto___52300 = (0);
while(true){
if((i__25827__auto___52300 < len__25826__auto___52299)){
args__25833__auto__.push((arguments[i__25827__auto___52300]));

var G__52301 = (i__25827__auto___52300 + (1));
i__25827__auto___52300 = G__52301;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__52294__auto__","sb__52294__auto__",-1082111429,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__52295__auto__","x__52295__auto__",1851497250,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__52294__auto__","sb__52294__auto__",-1082111429,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__52295__auto__","x__52295__auto__",1851497250,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__52294__auto__","sb__52294__auto__",-1082111429,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq52296){
var G__52297 = cljs.core.first.call(null,seq52296);
var seq52296__$1 = cljs.core.next.call(null,seq52296);
var G__52298 = cljs.core.first.call(null,seq52296__$1);
var seq52296__$2 = cljs.core.next.call(null,seq52296__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__52297,G__52298,seq52296__$2);
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
var len__25826__auto___52306 = arguments.length;
var i__25827__auto___52307 = (0);
while(true){
if((i__25827__auto___52307 < len__25826__auto___52306)){
args__25833__auto__.push((arguments[i__25827__auto___52307]));

var G__52308 = (i__25827__auto___52307 + (1));
i__25827__auto___52307 = G__52308;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__52302_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = p1__52302_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq52303){
var G__52304 = cljs.core.first.call(null,seq52303);
var seq52303__$1 = cljs.core.next.call(null,seq52303);
var G__52305 = cljs.core.first.call(null,seq52303__$1);
var seq52303__$2 = cljs.core.next.call(null,seq52303__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__52304,G__52305,seq52303__$2);
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
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__52309__auto__","this__52309__auto__",1906528833,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__52309__auto__","this__52309__auto__",1906528833,null)))));
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
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__52310){
var vec__52322 = p__52310;
var quote = cljs.core.nth.call(null,vec__52322,(0),null);
var ns = cljs.core.nth.call(null,vec__52322,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__25585__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__52322,quote,ns){
return (function (p__52329){
var vec__52330 = p__52329;
var sym = cljs.core.nth.call(null,vec__52330,(0),null);
var _ = cljs.core.nth.call(null,vec__52330,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__25585__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__25585__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
});})(vec__52322,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__52333,p__52334){
var vec__52341 = p__52333;
var quote0 = cljs.core.nth.call(null,vec__52341,(0),null);
var ns = cljs.core.nth.call(null,vec__52341,(1),null);
var vec__52344 = p__52334;
var quote1 = cljs.core.nth.call(null,vec__52344,(0),null);
var sym = cljs.core.nth.call(null,vec__52344,(1),null);
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
var len__25826__auto___52352 = arguments.length;
var i__25827__auto___52353 = (0);
while(true){
if((i__25827__auto___52353 < len__25826__auto___52352)){
args__25833__auto__.push((arguments[i__25827__auto___52353]));

var G__52354 = (i__25827__auto___52353 + (1));
i__25827__auto___52353 = G__52354;
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

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq52347){
var G__52348 = cljs.core.first.call(null,seq52347);
var seq52347__$1 = cljs.core.next.call(null,seq52347);
var G__52349 = cljs.core.first.call(null,seq52347__$1);
var seq52347__$2 = cljs.core.next.call(null,seq52347__$1);
var G__52350 = cljs.core.first.call(null,seq52347__$2);
var seq52347__$3 = cljs.core.next.call(null,seq52347__$2);
var G__52351 = cljs.core.first.call(null,seq52347__$3);
var seq52347__$4 = cljs.core.next.call(null,seq52347__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52348,G__52349,G__52350,G__52351,seq52347__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__25833__auto__ = [];
var len__25826__auto___52359 = arguments.length;
var i__25827__auto___52360 = (0);
while(true){
if((i__25827__auto___52360 < len__25826__auto___52359)){
args__25833__auto__.push((arguments[i__25827__auto___52360]));

var G__52361 = (i__25827__auto___52360 + (1));
i__25827__auto___52360 = G__52361;
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

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq52355){
var G__52356 = cljs.core.first.call(null,seq52355);
var seq52355__$1 = cljs.core.next.call(null,seq52355);
var G__52357 = cljs.core.first.call(null,seq52355__$1);
var seq52355__$2 = cljs.core.next.call(null,seq52355__$1);
var G__52358 = cljs.core.first.call(null,seq52355__$2);
var seq52355__$3 = cljs.core.next.call(null,seq52355__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__52356,G__52357,G__52358,seq52355__$3);
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
var G__52362 = form_SINGLEQUOTE_;
var G__52363 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__52362;
form_SINGLEQUOTE_ = G__52363;
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
var args52364 = [];
var len__25826__auto___52371 = arguments.length;
var i__25827__auto___52372 = (0);
while(true){
if((i__25827__auto___52372 < len__25826__auto___52371)){
args52364.push((arguments[i__25827__auto___52372]));

var G__52373 = (i__25827__auto___52372 + (1));
i__25827__auto___52372 = G__52373;
continue;
} else {
}
break;
}

var G__52366 = args52364.length;
switch (G__52366) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52364.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__52367,solo){
var vec__52368 = p__52367;
var seq__52369 = cljs.core.seq.call(null,vec__52368);
var first__52370 = cljs.core.first.call(null,seq__52369);
var seq__52369__$1 = cljs.core.next.call(null,seq__52369);
var arglist = first__52370;
var body = seq__52369__$1;
var method = vec__52368;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__52368,seq__52369,first__52370,seq__52369__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__52368,seq__52369,first__52370,seq__52369__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__52368,seq__52369,first__52370,seq__52369__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__52368,seq__52369,first__52370,seq__52369__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__52368,seq__52369,first__52370,seq__52369__$1,arglist,body,method){
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
});})(sig,restarg,vec__52368,seq__52369,first__52370,seq__52369__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__52368,seq__52369,first__52370,seq__52369__$1,arglist,body,method){
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
});})(sig,restarg,vec__52368,seq__52369,first__52370,seq__52369__$1,arglist,body,method))
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__52375__auto__","len__52375__auto__",408384431,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__52376__auto__","i__52376__auto__",1731719323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__52376__auto__","i__52376__auto__",1731719323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__52375__auto__","len__52375__auto__",408384431,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__25585__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__52376__auto__","i__52376__auto__",1731719323,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__52376__auto__","i__52376__auto__",1731719323,null)))));
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
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__52379,emit_var_QMARK_){
var vec__52386 = p__52379;
var vec__52389 = cljs.core.nth.call(null,vec__52386,(0),null);
var seq__52390 = cljs.core.seq.call(null,vec__52389);
var first__52391 = cljs.core.first.call(null,seq__52390);
var seq__52390__$1 = cljs.core.next.call(null,seq__52390);
var arglist = first__52391;
var body = seq__52390__$1;
var method = vec__52389;
var fdecl = vec__52386;
var dest_args = ((function (vec__52386,vec__52389,seq__52390,first__52391,seq__52390__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__52386,vec__52389,seq__52390,first__52391,seq__52390__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
});})(vec__52386,vec__52389,seq__52390,first__52391,seq__52390__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__52386,vec__52389,seq__52390,first__52391,seq__52390__$1,arglist,body,method,fdecl))
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
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__52377__auto__","args__52377__auto__",1337684627,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__52377__auto__","args__52377__auto__",1337684627,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__52378__auto__","argseq__52378__auto__",1661799199,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25585__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__52377__auto__","args__52377__auto__",1337684627,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/kevinzeidler/rhizome/reg2/resources/public/cljs/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2812),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2812),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__52377__auto__","args__52377__auto__",1337684627,null)),(function (){var x__25585__auto__ = c_1;
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
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__52378__auto__","argseq__52378__auto__",1661799199,null)))));
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
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__52416){
var vec__52420 = p__52416;
var seq__52421 = cljs.core.seq.call(null,vec__52420);
var first__52422 = cljs.core.first.call(null,seq__52421);
var seq__52421__$1 = cljs.core.next.call(null,seq__52421);
var sig = first__52422;
var body = seq__52421__$1;
var method = vec__52420;
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
return (function (p1__52392_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__52392_SHARP_);
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
return (function (p1__52393_SHARP_){
return fixed_arity.call(null,rname,p1__52393_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__25585__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25585__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__52394__auto__","argseq__52394__auto__",1832884405,null)),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25585__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/kevinzeidler/rhizome/reg2/resources/public/cljs/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2870),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2870),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
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
})(),(function (){var x__25585__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__52394__auto__","argseq__52394__auto__",1832884405,null)))));
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
var G__52423__i = 0, G__52423__a = new Array(arguments.length -  3);
while (G__52423__i < G__52423__a.length) {G__52423__a[G__52423__i] = arguments[G__52423__i + 3]; ++G__52423__i;}
  fdecl = new cljs.core.IndexedSeq(G__52423__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__52424){
var _AMPERSAND_form = cljs.core.first(arglist__52424);
arglist__52424 = cljs.core.next(arglist__52424);
var _AMPERSAND_env = cljs.core.first(arglist__52424);
arglist__52424 = cljs.core.next(arglist__52424);
var name = cljs.core.first(arglist__52424);
var fdecl = cljs.core.rest(arglist__52424);
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
var len__25826__auto___52429 = arguments.length;
var i__25827__auto___52430 = (0);
while(true){
if((i__25827__auto___52430 < len__25826__auto___52429)){
args__25833__auto__.push((arguments[i__25827__auto___52430]));

var G__52431 = (i__25827__auto___52430 + (1));
i__25827__auto___52430 = G__52431;
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
var G__52432 = cljs.core.cons.call(null,f,p);
var G__52433 = cljs.core.next.call(null,args__$1);
p = G__52432;
args__$1 = G__52433;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__52434 = cljs.core.cons.call(null,f,p);
var G__52435 = cljs.core.next.call(null,args__$1);
p = G__52434;
args__$1 = G__52435;
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
var G__52436 = cljs.core.next.call(null,fd);
fd = G__52436;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__52437 = cljs.core.next.call(null,fd);
fd = G__52437;
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
var G__52438 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__52439 = cljs.core.next.call(null,ds);
acc = G__52438;
ds = G__52439;
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
var G__52440 = cljs.core.next.call(null,p);
var G__52441 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__52440;
d = G__52441;
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

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq52425){
var G__52426 = cljs.core.first.call(null,seq52425);
var seq52425__$1 = cljs.core.next.call(null,seq52425);
var G__52427 = cljs.core.first.call(null,seq52425__$1);
var seq52425__$2 = cljs.core.next.call(null,seq52425__$1);
var G__52428 = cljs.core.first.call(null,seq52425__$2);
var seq52425__$3 = cljs.core.next.call(null,seq52425__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__52426,G__52427,G__52428,seq52425__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map?rel=1478445916396