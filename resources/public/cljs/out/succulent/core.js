// Compiled by ClojureScript 1.9.227 {}
goog.provide('succulent.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('quil.core');
goog.require('quil.middleware');
succulent.core.bool_QMARK_ = (function succulent$core$bool_QMARK_(x){
return (x === true) || (x === false);
});
succulent.core.int__GT_bool = (function succulent$core$int__GT_bool(i){
if(!(typeof i === 'number')){
return null;
} else {
if((i === (0))){
return false;
} else {
if((i > (0))){
return true;
} else {
return null;

}
}
}
});
succulent.core.bool__GT_int = (function succulent$core$bool__GT_int(b){
if(cljs.core.not.call(null,succulent.core.bool_QMARK_.call(null,b))){
return null;
} else {
if(b === true){
return (1);
} else {
if(b === false){
return (0);
} else {
return null;

}
}
}
});
/**
 * Returns true if the given value represents a printable ASCII character.
 */
succulent.core.ascii_QMARK_ = (function succulent$core$ascii_QMARK_(val){
return (((31) < val)) && ((val < (127)));
});
/**
 * Returns the ASCII character corresponding to the low order byte of the given
 * value if it is a printable ASCII character, or a period otherwise.
 */
succulent.core.ascii = (function succulent$core$ascii(val){
var modval = cljs.core.mod.call(null,val,(256));
if(cljs.core.truth_(succulent.core.ascii_QMARK_.call(null,modval))){
return [cljs.core.str(cljs.core.char$.call(null,modval))].join('');
} else {
return [cljs.core.str(cljs.core.char$.call(null,(129)))].join('');
}
});
succulent.core.attach_tag = (function succulent$core$attach_tag(k){
var numeric_vals = cljs.core.sorted_set.call(null,(48),(49),(50),(51),(52),(53),(54),(55),(56),(57));
var arithmetic_ops = cljs.core.sorted_set.call(null,(43),(47),(42),(94));
var equals_sign = cljs.core.sorted_set.call(null,(61));
var minus_sign = cljs.core.sorted_set.call(null,(45));
if(cljs.core.contains_QMARK_.call(null,numeric_vals,k)){
return new cljs.core.Keyword(null,"number","number",1570378438);
} else {
if(cljs.core.contains_QMARK_.call(null,arithmetic_ops,k)){
return new cljs.core.Keyword(null,"operator","operator",-1860875338);
} else {
if(cljs.core.contains_QMARK_.call(null,equals_sign,k)){
return new cljs.core.Keyword(null,"equals","equals",-463033970);
} else {
if(cljs.core.contains_QMARK_.call(null,minus_sign,k)){
return new cljs.core.Keyword(null,"polymorphic","polymorphic",317992566);
} else {
return new cljs.core.Keyword(null,"invalid","invalid",412869516);

}
}
}
}
});
succulent.core.lookup_table = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0),(0),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0),(0),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0),(0),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0),(0),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0),(0),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0),(0),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0),(0),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0),(0),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0),(0),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null)], null)], null);
succulent.core.db = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"refs","refs",-1560051448),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),new cljs.core.Keyword(null,"front-ptr","front-ptr",-1632799867),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"front-ptr","front-ptr",-1632799867)], null),new cljs.core.Keyword(null,"rear-ptr","rear-ptr",-1506167682),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"rear-ptr","rear-ptr",-1506167682)], null),new cljs.core.Keyword(null,"queue-val","queue-val",-1455290012),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"val","val",128701612)], null),new cljs.core.Keyword(null,"queue-state","queue-state",244359187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"atom2action","atom2action",585591165),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atom2action","atom2action",585591165)], null)], null),new cljs.core.Keyword(null,"atom2action","atom2action",585591165),new cljs.core.PersistentArrayMap(null, 4, ["+",cljs.core._PLUS_,"/",cljs.core._SLASH_,"-",cljs.core._,"*",cljs.core._STAR_], null),new cljs.core.Keyword(null,"patterns","patterns",1164082024),new cljs.core.PersistentArrayMap(null, 1, ["component",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"sign-bit","sign-bit",-1815857882),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"locked?","locked?",995448757),null,new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null)], null),new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r1","r1",690974900),(0),new cljs.core.Keyword(null,"r2","r2",252844174),(0),new cljs.core.Keyword(null,"r3","r3",-2027148174),(0),new cljs.core.Keyword(null,"r4","r4",1134323163),(0)], null),new cljs.core.Keyword(null,"app-state","app-state",-1509963278),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0)], null)], null)], null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Empty!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Empty!"], null)], null)], null),new cljs.core.Keyword(null,"front-ptr","front-ptr",-1632799867),(0),new cljs.core.Keyword(null,"rear-ptr","rear-ptr",-1506167682),(1),new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)], null));
succulent.core.atom2action = (function succulent$core$atom2action(at){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atom2action","atom2action",585591165),at], null));
});
succulent.core.defabstract = (function succulent$core$defabstract(var_args){
var args__7486__auto__ = [];
var len__7479__auto___11803 = arguments.length;
var i__7480__auto___11804 = (0);
while(true){
if((i__7480__auto___11804 < len__7479__auto___11803)){
args__7486__auto__.push((arguments[i__7480__auto___11804]));

var G__11805 = (i__7480__auto___11804 + (1));
i__7480__auto___11804 = G__11805;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return succulent.core.defabstract.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

succulent.core.defabstract.cljs$core$IFn$_invoke$arity$variadic = (function (p__11800){
var map__11801 = p__11800;
var map__11801__$1 = ((((!((map__11801 == null)))?((((map__11801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11801):map__11801);
var k = cljs.core.get.call(null,map__11801__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var props = cljs.core.get.call(null,map__11801__$1,new cljs.core.Keyword(null,"props","props",453281727));
var constraints = cljs.core.get.call(null,map__11801__$1,new cljs.core.Keyword(null,"constraints","constraints",422775616));
if(!(cljs.core.vector_QMARK_.call(null,props))){
return [cljs.core.str("Not a vector: "),cljs.core.str(props)].join('');
} else {
if(!(cljs.core.vector_QMARK_.call(null,constraints))){
return [cljs.core.str("Not a vector: "),cljs.core.str(constraints)].join('');
} else {
return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patterns","patterns",1164082024)], null),cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,props),new cljs.core.Keyword(null,"constraints","constraints",422775616),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [constraints], null)], null)], true, false));

}
}
});

succulent.core.defabstract.cljs$lang$maxFixedArity = (0);

succulent.core.defabstract.cljs$lang$applyTo = (function (seq11799){
return succulent.core.defabstract.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11799));
});

succulent.core.has_all_QMARK_ = (function succulent$core$has_all_QMARK_(var_args){
var args__7486__auto__ = [];
var len__7479__auto___11810 = arguments.length;
var i__7480__auto___11811 = (0);
while(true){
if((i__7480__auto___11811 < len__7479__auto___11810)){
args__7486__auto__.push((arguments[i__7480__auto___11811]));

var G__11812 = (i__7480__auto___11811 + (1));
i__7480__auto___11811 = G__11812;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return succulent.core.has_all_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

succulent.core.has_all_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__11807){
var map__11808 = p__11807;
var map__11808__$1 = ((((!((map__11808 == null)))?((((map__11808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11808):map__11808);
var props = cljs.core.get.call(null,map__11808__$1,new cljs.core.Keyword(null,"props","props",453281727));
var object = cljs.core.get.call(null,map__11808__$1,new cljs.core.Keyword(null,"object","object",1474613949));
if(!(cljs.core.map_QMARK_.call(null,object))){
return [cljs.core.str("Not a map:"),cljs.core.str(object)].join('');
} else {
if(!(cljs.core.set_QMARK_.call(null,props))){
return [cljs.core.str("Not a set: "),cljs.core.str(props)].join('');
} else {
if(cljs.core.truth_(clojure.set.superset_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,object)),props))){
return true;
} else {
return false;

}
}
}
});

succulent.core.has_all_QMARK_.cljs$lang$maxFixedArity = (0);

succulent.core.has_all_QMARK_.cljs$lang$applyTo = (function (seq11806){
return succulent.core.has_all_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11806));
});

succulent.core.fulfills_QMARK_ = (function succulent$core$fulfills_QMARK_(instance,pattern_name){
var constraints = cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern_name,new cljs.core.Keyword(null,"constraints","constraints",422775616)], null));
return cljs.core.map.call(null,((function (constraints){
return (function (p1__11813_SHARP_){
return cljs.core.apply.call(null,p1__11813_SHARP_,instance);
});})(constraints))
,constraints);
});
/**
 * Charlength string keys => numeric vals
 */
succulent.core.asciitable = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.map.call(null,cljs.core.juxt.call(null,succulent.core.ascii,cljs.core.juxt.call(null,cljs.core.identity,succulent.core.attach_tag)),cljs.core.range.call(null,(0),(130))));
succulent.core.charCode = (function succulent$core$charCode(e){

return cljs.core.first.call(null,cljs.core.get_in.call(null,succulent.core.asciitable,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
succulent.core.inspect_tag = (function succulent$core$inspect_tag(e){
return cljs.core.second.call(null,cljs.core.get_in.call(null,succulent.core.asciitable,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
succulent.core.refpath = (function succulent$core$refpath(var_args){
var args11814 = [];
var len__7479__auto___11817 = arguments.length;
var i__7480__auto___11818 = (0);
while(true){
if((i__7480__auto___11818 < len__7479__auto___11817)){
args11814.push((arguments[i__7480__auto___11818]));

var G__11819 = (i__7480__auto___11818 + (1));
i__7480__auto___11818 = G__11819;
continue;
} else {
}
break;
}

var G__11816 = args11814.length;
switch (G__11816) {
case 1:
return succulent.core.refpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return succulent.core.refpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11814.length)].join('')));

}
});

succulent.core.refpath.cljs$core$IFn$_invoke$arity$1 = (function (t){
if(cljs.core.contains_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refs","refs",-1560051448)], null)))),t)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refs","refs",-1560051448),t], null));
} else {
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);
}
});

succulent.core.refpath.cljs$core$IFn$_invoke$arity$2 = (function (t,param){
return cljs.core.conj.call(null,succulent.core.refpath.call(null,t),param);
});

succulent.core.refpath.cljs$lang$maxFixedArity = 2;

succulent.core.goto$ = (function succulent$core$goto(path){
if(((path instanceof cljs.core.Keyword)) && (cljs.core.contains_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refs","refs",-1560051448)], null)))),path))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),succulent.core.refpath.call(null,path));
} else {
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),path);
}
});
succulent.core.ask = (function succulent$core$ask(component,property){
var sign_bit = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","-"], null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),cljs.core.conj.call(null,succulent.core.refpath.call(null,component),new cljs.core.Keyword(null,"sign-bit","sign-bit",-1815857882))));
if(cljs.core._EQ_.call(null,property,new cljs.core.Keyword(null,"val","val",128701612))){
return [cljs.core.str(sign_bit),cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),cljs.core.conj.call(null,succulent.core.refpath.call(null,component),new cljs.core.Keyword(null,"val","val",128701612))))].join('');
} else {
if(cljs.core._EQ_.call(null,property,new cljs.core.Keyword(null,"state","state",-1988618099))){
return cljs.core.apply.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),cljs.core.conj.call(null,succulent.core.refpath.call(null,component),new cljs.core.Keyword(null,"state","state",-1988618099))),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),cljs.core.conj.call(null,succulent.core.refpath.call(null,component),property));

}
}
});
succulent.core.querytarget = (function succulent$core$querytarget(component,property){
return cljs.core.conj.call(null,succulent.core.refpath.call(null,component),property);
});
succulent.core.load_inst = (function succulent$core$load_inst(subroutine){
cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"val","val",128701612)], null),cljs.core.into.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"val","val",128701612)], null)),subroutine));

cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"rear-ptr","rear-ptr",-1506167682)], null),cljs.core._PLUS_,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,subroutine)));

return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"state","state",-1988618099)], null),(2));
});
succulent.core.process_queue = (function succulent$core$process_queue(){
var next_instruction = cljs.core.nth.call(null,succulent.core.goto$.call(null,new cljs.core.Keyword(null,"queue-val","queue-val",-1455290012)),succulent.core.goto$.call(null,new cljs.core.Keyword(null,"front-ptr","front-ptr",-1632799867)));
var f = cljs.core.first.call(null,next_instruction);
var args = cljs.core.second.call(null,next_instruction);
var has_next_QMARK_ = succulent.core.int__GT_bool.call(null,succulent.core.goto$.call(null,new cljs.core.Keyword(null,"queue-state","queue-state",244359187)));
if(cljs.core.truth_(has_next_QMARK_)){
cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,succulent.core.refpath.call(null,new cljs.core.Keyword(null,"front-ptr","front-ptr",-1632799867)),cljs.core.inc);

cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc_in,succulent.core.refpath.call(null,new cljs.core.Keyword(null,"queue-state","queue-state",244359187)),((cljs.core._EQ_.call(null,succulent.core.goto$.call(null,new cljs.core.Keyword(null,"front-ptr","front-ptr",-1632799867)),succulent.core.goto$.call(null,new cljs.core.Keyword(null,"rear-ptr","rear-ptr",-1506167682))))?(0):(1)));

return new cljs.core.Keyword(null,"busy","busy",-328286801);
} else {
return new cljs.core.Keyword(null,"update-complete","update-complete",821709453);
}
});
succulent.core.thread_update = (function succulent$core$thread_update(){
var msg = new cljs.core.Keyword(null,"busy","busy",-328286801);
while(true){
if(cljs.core._EQ_.call(null,msg,new cljs.core.Keyword(null,"update-complete","update-complete",821709453))){
return "Ready to do more stuff";
} else {
var G__11821 = succulent.core.process_queue.call(null);
msg = G__11821;
continue;
}
break;
}
});
succulent.core.in_refs_QMARK_ = (function succulent$core$in_refs_QMARK_(k){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refs","refs",-1560051448)], null)),k);
});
succulent.core.executable_QMARK_ = (function succulent$core$executable_QMARK_(k){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atom2action","atom2action",585591165)], null)),k);
});
succulent.core.component_QMARK_ = (function succulent$core$component_QMARK_(k){
if(cljs.core.coll_QMARK_.call(null,k)){
return false;
} else {
return null;
}
});
succulent.core.make_executable = (function succulent$core$make_executable(k,f){
return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atom2action","atom2action",585591165)], null),cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([k,f], true, false));
});
succulent.core.reset_db = (function succulent$core$reset_db(){
return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refs","refs",-1560051448),cljs.core.PersistentArrayMap.EMPTY], null)));
});
succulent.core.pseudo_ns = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"square","square",812434677),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__11822_SHARP_){
return (p1__11822_SHARP_ * p1__11822_SHARP_);
}),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438)], null),new cljs.core.Keyword(null,"callstack","callstack",306691288),cljs.core.List.EMPTY], null)], null));
succulent.core.kidsum = (function succulent$core$kidsum(parent){
return cljs.core.count.call(null,cljs.core.keys.call(null,cljs.core.get_in.call(null,succulent.core.goto$.call(null,parent),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null))));
});
succulent.core.kidx = (function succulent$core$kidx(parent,i){
if((i > succulent.core.kidsum.call(null,parent))){
return null;
} else {
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get_in.call(null,succulent.core.goto$.call(null,parent),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null)),i),new cljs.core.Keyword(null,"idx","idx",1053688473));
}
});
succulent.core.straw_poll = (function succulent$core$straw_poll(var_args){
var args11827 = [];
var len__7479__auto___11830 = arguments.length;
var i__7480__auto___11831 = (0);
while(true){
if((i__7480__auto___11831 < len__7479__auto___11830)){
args11827.push((arguments[i__7480__auto___11831]));

var G__11832 = (i__7480__auto___11831 + (1));
i__7480__auto___11831 = G__11832;
continue;
} else {
}
break;
}

var G__11829 = args11827.length;
switch (G__11829) {
case 1:
return succulent.core.straw_poll.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return succulent.core.straw_poll.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11827.length)].join('')));

}
});

succulent.core.straw_poll.cljs$core$IFn$_invoke$arity$1 = (function (attr){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__11823_SHARP_){
return cljs.core.get_in.call(null,p1__11823_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null));
}),(function (p1__11824_SHARP_){
return cljs.core.get_in.call(null,p1__11824_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
})),cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.Keyword(null,"children","children",-940561982)], null)))));
});

succulent.core.straw_poll.cljs$core$IFn$_invoke$arity$2 = (function (attr,coll){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__11825_SHARP_){
return cljs.core.get_in.call(null,p1__11825_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null));
}),(function (p1__11826_SHARP_){
return cljs.core.get_in.call(null,p1__11826_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
})),cljs.core.map.call(null,succulent.core.goto$,coll)));
});

succulent.core.straw_poll.cljs$lang$maxFixedArity = 2;

succulent.core.get_color = (function succulent$core$get_color(ref){
var frequency = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"red","red",-969428204)], null);
if(typeof ref === 'number'){
return frequency.call(null,ref);
} else {
if(cljs.core.truth_(succulent.core.in_refs_QMARK_.call(null,ref))){
return frequency.call(null,succulent.core.ask.call(null,ref,new cljs.core.Keyword(null,"state","state",-1988618099)));
} else {
if(cljs.core.truth_(succulent.core.component_QMARK_.call(null,ref))){
return frequency.call(null,cljs.core.get_in.call(null,ref,new cljs.core.Keyword(null,"state","state",-1988618099)));
} else {
return [cljs.core.str("Can't determine a color from argument: '"),cljs.core.str(ref),cljs.core.str("'")].join('');

}
}
}
});
succulent.core.green_QMARK_ = (function succulent$core$green_QMARK_(component){
return cljs.core._EQ_.call(null,succulent.core.get_color.call(null,component),new cljs.core.Keyword(null,"green","green",-945526839));
});
succulent.core.yellow_QMARK_ = (function succulent$core$yellow_QMARK_(component){
return cljs.core._EQ_.call(null,succulent.core.get_color.call(null,component),new cljs.core.Keyword(null,"yellow","yellow",-881035449));
});
succulent.core.red_QMARK_ = (function succulent$core$red_QMARK_(component){
return cljs.core._EQ_.call(null,succulent.core.get_color.call(null,component),new cljs.core.Keyword(null,"red","red",-969428204));
});
succulent.core.active_register = (function succulent$core$active_register(){
var ord = (0);
var idx = succulent.core.kidx.call(null,new cljs.core.Keyword(null,"registers","registers",81921893),ord);
while(true){
if(cljs.core.not.call(null,succulent.core.red_QMARK_.call(null,succulent.core.ask.call(null,idx,new cljs.core.Keyword(null,"state","state",-1988618099))))){
return idx;
} else {
var G__11834 = (ord + (1));
var G__11835 = succulent.core.kidx.call(null,new cljs.core.Keyword(null,"registers","registers",81921893),ord);
ord = G__11834;
idx = G__11835;
continue;
}
break;
}
});
succulent.core.next_register = (function succulent$core$next_register(){
var curr = succulent.core.active_register.call(null);
if(cljs.core._EQ_.call(null,curr,new cljs.core.Keyword(null,"r1","r1",690974900))){
return new cljs.core.Keyword(null,"op","op",-1882987955);
} else {
if(cljs.core._EQ_.call(null,curr,new cljs.core.Keyword(null,"op","op",-1882987955))){
return new cljs.core.Keyword(null,"r2","r2",252844174);
} else {
if(cljs.core._EQ_.call(null,curr,new cljs.core.Keyword(null,"r2","r2",252844174))){
return new cljs.core.Keyword(null,"r3","r3",-2027148174);
} else {
if(cljs.core._EQ_.call(null,curr,new cljs.core.Keyword(null,"r3","r3",-2027148174))){
return new cljs.core.Keyword(null,"r1","r1",690974900);
} else {
return [cljs.core.str("Active register has an invalid address: "),cljs.core.str(curr)].join('');

}
}
}
}
});
succulent.core.car = (function succulent$core$car(seq){
return cljs.core.first.call(null,seq);
});
succulent.core.cdr = (function succulent$core$cdr(seq){
return cljs.core.rest.call(null,seq);
});
succulent.core.cadr = (function succulent$core$cadr(seq){
return cljs.core.first.call(null,cljs.core.rest.call(null,seq));
});
succulent.core.cadar = (function succulent$core$cadar(seq){
return cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.first.call(null,seq)));
});
succulent.core.caadr = (function succulent$core$caadr(seq){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,seq)));
});
succulent.core.cadadr = (function succulent$core$cadadr(seq){
return cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,seq))));
});
succulent.core.cadaddr = (function succulent$core$cadaddr(seq){
return cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,seq)))));
});
succulent.core.cadadadr = (function succulent$core$cadadadr(seq){
return cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,seq))))));
});
succulent.core.make_root_component = (function succulent$core$make_root_component(var_args){
var args11836 = [];
var len__7479__auto___11839 = arguments.length;
var i__7480__auto___11840 = (0);
while(true){
if((i__7480__auto___11840 < len__7479__auto___11839)){
args11836.push((arguments[i__7480__auto___11840]));

var G__11841 = (i__7480__auto___11840 + (1));
i__7480__auto___11840 = G__11841;
continue;
} else {
}
break;
}

var G__11838 = args11836.length;
switch (G__11838) {
case 1:
return succulent.core.make_root_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return succulent.core.make_root_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11836.length)].join('')));

}
});

succulent.core.make_root_component.cljs$core$IFn$_invoke$arity$1 = (function (k){
if(cljs.core.not.call(null,succulent.core.in_refs_QMARK_.call(null,k))){
cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc,k,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"idx","idx",1053688473),k,new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"val","val",128701612),"",new cljs.core.Keyword(null,"locked?","locked?",995448757),(0),new cljs.core.Keyword(null,"sign-bit","sign-bit",-1815857882),(0),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY], null));

return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refs","refs",-1560051448)], null),cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([k,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)], true, false));
} else {
return "Not overwriting the existing root component";
}
});

succulent.core.make_root_component.cljs$core$IFn$_invoke$arity$2 = (function (k,v){
if(cljs.core.not.call(null,succulent.core.in_refs_QMARK_.call(null,k))){
cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc,k,v);

cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refs","refs",-1560051448)], null),cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([k,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)], true, false));
} else {
}

return "Not overwriting the existing root component";
});

succulent.core.make_root_component.cljs$lang$maxFixedArity = 2;

succulent.core.get_state = (function succulent$core$get_state(component){
if(cljs.core.empty_QMARK_.call(null,succulent.core.ask.call(null,component,new cljs.core.Keyword(null,"val","val",128701612)))){
return (0);
} else {
if(cljs.core.truth_(succulent.core.ask.call(null,component,new cljs.core.Keyword(null,"locked?","locked?",995448757)))){
return (2);
} else {
return (1);

}
}
});
succulent.core.make_assignment = (function succulent$core$make_assignment(i,registry){
var slot = cljs.core.nth.call(null,registry,i);
var can_assign_QMARK_ = (((0) & (1 << slot)) != 0);
if(can_assign_QMARK_){
return (slot ^ (1 << (0)));
} else {
return slot;
}
});
succulent.core.assign_register = (function succulent$core$assign_register(i,owner){
return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-state","app-state",-1509963278),new cljs.core.Keyword(null,"rows","rows",850049680)], null),cljs.core.partial.call(null,succulent.core.make_assignment,i));
});
succulent.core.register_component = (function succulent$core$register_component(component,index){
var slot = cljs.core.nth.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-state","app-state",-1509963278),new cljs.core.Keyword(null,"rows","rows",850049680)], null)),index);
var owner = cljs.core.nth.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-state","app-state",-1509963278),new cljs.core.Keyword(null,"cols","cols",-1914801295)], null)),index);
if(!((slot === (0)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,[cljs.core.str("Already in use: Slot "),cljs.core.str(index)].join('')], null);
} else {
if(!((owner == null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,[cljs.core.str("Already assigned: Slot "),cljs.core.str(index)].join('')], null);
} else {
return succulent.core.assign_register.call(null,index,component);

}
}
});
succulent.core.make_nested_component = (function succulent$core$make_nested_component(parent,k){
var root = cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent], null));
var siblings = cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,new cljs.core.Keyword(null,"children","children",-940561982)], null)));
var next_index = cljs.core.count.call(null,siblings);
if(cljs.core.not.call(null,succulent.core.in_refs_QMARK_.call(null,k))){
cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.conj,cljs.core.PersistentArrayMap.fromArray([next_index,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"idx","idx",1053688473),k,new cljs.core.Keyword(null,"state","state",-1988618099),((function (root,siblings,next_index){
return (function (){
return succulent.core.get_state.call(null,k);
});})(root,siblings,next_index))
,new cljs.core.Keyword(null,"val","val",128701612),"",new cljs.core.Keyword(null,"locked?","locked?",995448757),(0),new cljs.core.Keyword(null,"sign-bit","sign-bit",-1815857882),(0),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY], null)], true, false));

return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refs","refs",-1560051448)], null),cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([k,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,new cljs.core.Keyword(null,"children","children",-940561982),next_index], null))], true, false));
} else {
return "Not overwriting the existing component";
}
});
succulent.core.compatible_QMARK_ = (function succulent$core$compatible_QMARK_(e){
var tag = succulent.core.inspect_tag.call(null,e);
var curr = succulent.core.active_register.call(null);
var focus = succulent.core.goto$.call(null,curr);
var state = cljs.core.get.call(null,focus,new cljs.core.Keyword(null,"state","state",-1988618099));
if((cljs.core._EQ_.call(null,curr,new cljs.core.Keyword(null,"r1","r1",690974900))) || (cljs.core._EQ_.call(null,curr,new cljs.core.Keyword(null,"r2","r2",252844174)))){
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"number","number",1570378438))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,curr], null);
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"invalid","invalid",412869516))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"null","null",-180137709)], null);
} else {
if((cljs.core._EQ_.call(null,state,(0))) && (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"operator","operator",-1860875338)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"null","null",-180137709)], null);
} else {
if((cljs.core._EQ_.call(null,state,(0))) && (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"polymorphic","polymorphic",317992566)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,curr], null);
} else {
if((cljs.core._EQ_.call(null,curr,new cljs.core.Keyword(null,"r2","r2",252844174))) && (cljs.core._EQ_.call(null,state,(1))) && (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"equals","equals",-463033970)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.Keyword(null,"evaluate","evaluate",1525218437)], null);
} else {
if((cljs.core._EQ_.call(null,curr,new cljs.core.Keyword(null,"r2","r2",252844174))) && (cljs.core._EQ_.call(null,state,(1))) && (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"operator","operator",-1860875338)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.Keyword(null,"evaluate","evaluate",1525218437)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.Keyword(null,"sigswitch","sigswitch",1559108600)], null);

}
}
}
}
}
}
} else {
if((cljs.core._EQ_.call(null,state,(0))) && (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"polymorphic","polymorphic",317992566)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,curr], null);
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"operator","operator",-1860875338))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,curr], null);
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"invalid","invalid",412869516))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"null","null",-180137709)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.Keyword(null,"sigswitch","sigswitch",1559108600)], null);

}
}
}
}
});
succulent.core.pass_QMARK_ = (function succulent$core$pass_QMARK_(component,arg){
if(cljs.core._EQ_.call(null,arg,new cljs.core.Keyword(null,"t1","t1",24972444))){
return succulent.core.bool__GT_int.call(null,(cljs.core.count.call(null,cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612)], null))) > (0)));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Keyword(null,"t4","t4",820410950))){
return ((2) * component.call(null,new cljs.core.Keyword(null,"locked?","locked?",995448757)));
} else {
return "?";

}
}
});
succulent.core.syncstat = (function succulent$core$syncstat(thread){
var threadstate = succulent.core.goto$.call(null,thread);
var prev = threadstate.call(null,new cljs.core.Keyword(null,"state","state",-1988618099));
var preimage = (succulent.core.pass_QMARK_.call(null,threadstate,new cljs.core.Keyword(null,"t1","t1",24972444)) + succulent.core.pass_QMARK_.call(null,threadstate,new cljs.core.Keyword(null,"t4","t4",820410950)));
var T = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(-1),(2)], null);
var current_state = T.call(null,preimage);
cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc_in,succulent.core.refpath.call(null,thread,new cljs.core.Keyword(null,"state","state",-1988618099)),current_state);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"register","register",1968522516),thread,new cljs.core.Keyword(null,"updated?","updated?",-114940638),(succulent.core.bool__GT_int.call(null,cljs.core._EQ_.call(null,prev,current_state)) ^ (1 << (0))),new cljs.core.Keyword(null,"state","state",-1988618099),current_state,new cljs.core.Keyword(null,"val","val",128701612),succulent.core.ask.call(null,thread,new cljs.core.Keyword(null,"val","val",128701612))], null);
});
succulent.core.clear = (function succulent$core$clear(var_args){
var args11847 = [];
var len__7479__auto___11850 = arguments.length;
var i__7480__auto___11851 = (0);
while(true){
if((i__7480__auto___11851 < len__7479__auto___11850)){
args11847.push((arguments[i__7480__auto___11851]));

var G__11852 = (i__7480__auto___11851 + (1));
i__7480__auto___11851 = G__11852;
continue;
} else {
}
break;
}

var G__11849 = args11847.length;
switch (G__11849) {
case 0:
return succulent.core.clear.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return succulent.core.clear.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11847.length)].join('')));

}
});

succulent.core.clear.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.map.call(null,succulent.core.clear,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r3","r3",-2027148174)], null));
});

succulent.core.clear.cljs$core$IFn$_invoke$arity$1 = (function (targ){
var exiting_value = succulent.core.goto$.call(null,targ);
var v = cljs.core.get_in.call(null,exiting_value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612)], null));
var i = succulent.core.kidsum.call(null,targ);
return cljs.core.map.call(null,cljs.core.juxt.call(null,((function (exiting_value,v,i){
return (function (p1__11843_SHARP_){
return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,succulent.core.refpath.call(null,p1__11843_SHARP_,new cljs.core.Keyword(null,"children","children",-940561982)),cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([i,v], true, false));
});})(exiting_value,v,i))
,((function (exiting_value,v,i){
return (function (p1__11844_SHARP_){
return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc_in,succulent.core.refpath.call(null,p1__11844_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099)),(0));
});})(exiting_value,v,i))
,((function (exiting_value,v,i){
return (function (p1__11845_SHARP_){
return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc_in,succulent.core.refpath.call(null,p1__11845_SHARP_,new cljs.core.Keyword(null,"val","val",128701612)),"");
});})(exiting_value,v,i))
,((function (exiting_value,v,i){
return (function (p1__11846_SHARP_){
return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc_in,succulent.core.refpath.call(null,p1__11846_SHARP_,new cljs.core.Keyword(null,"locked?","locked?",995448757)),(0));
});})(exiting_value,v,i))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targ], null));
});

succulent.core.clear.cljs$lang$maxFixedArity = 1;

succulent.core.partial_flush = (function succulent$core$partial_flush(coll){
var seq__11862 = cljs.core.seq.call(null,coll);
var chunk__11865 = null;
var count__11866 = (0);
var i__11867 = (0);
while(true){
if((i__11867 < count__11866)){
var regs = cljs.core._nth.call(null,chunk__11865,i__11867);
var cleared_reg = succulent.core.clear.call(null,regs);
cljs.core.println.call(null,"Flushed ",coll,". Value now: ",cleared_reg);

var G__11870 = seq__11862;
var G__11871 = chunk__11865;
var G__11872 = count__11866;
var G__11873 = (i__11867 + (1));
seq__11862 = G__11870;
chunk__11865 = G__11871;
count__11866 = G__11872;
i__11867 = G__11873;
continue;

} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11862);
if(temp__4657__auto__){
var seq__11862__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11862__$1)){
var c__7215__auto__ = cljs.core.chunk_first.call(null,seq__11862__$1);
var G__11874 = cljs.core.chunk_rest.call(null,seq__11862__$1);
var G__11875 = c__7215__auto__;
var G__11876 = cljs.core.count.call(null,c__7215__auto__);
var G__11877 = (0);
seq__11862 = G__11874;
chunk__11865 = G__11875;
count__11866 = G__11876;
i__11867 = G__11877;
continue;
} else {
var regs = cljs.core.first.call(null,seq__11862__$1);
var cleared_reg = succulent.core.clear.call(null,regs);
cljs.core.println.call(null,"Flushed ",coll,". Value now: ",cleared_reg);

var G__11878 = cljs.core.next.call(null,seq__11862__$1);
var G__11879 = null;
var G__11880 = (0);
var G__11881 = (0);
seq__11862 = G__11878;
chunk__11865 = G__11879;
count__11866 = G__11880;
i__11867 = G__11881;
continue;

}
} else {
return null;
}
}
break;
}
});
succulent.core.lock = (function succulent$core$lock(r){
cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,succulent.core.refpath.call(null,r,new cljs.core.Keyword(null,"locked?","locked?",995448757)),cljs.core.bit_or,(1));

return succulent.core.syncstat.call(null,r);
});
succulent.core.put = (function succulent$core$put(val,reg){
if(typeof val === 'string'){
return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,succulent.core.refpath.call(null,reg,new cljs.core.Keyword(null,"val","val",128701612)),cljs.core.str,val);
} else {
if(typeof val === 'number'){
return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc_in,succulent.core.refpath.call(null,reg,new cljs.core.Keyword(null,"val","val",128701612)),val);
} else {
return [cljs.core.str("Unknown type: "),cljs.core.str(val)].join('');

}
}
});
succulent.core.sendkey = (function succulent$core$sendkey(e){
cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc_in,succulent.core.querytarget.call(null,new cljs.core.Keyword(null,"charstring","charstring",-2141421260),new cljs.core.Keyword(null,"val","val",128701612)),[cljs.core.str(e)].join(''));

cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc_in,succulent.core.querytarget.call(null,new cljs.core.Keyword(null,"charcode","charcode",-963519952),new cljs.core.Keyword(null,"val","val",128701612)),succulent.core.charCode.call(null,e));

cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc_in,succulent.core.querytarget.call(null,new cljs.core.Keyword(null,"data-caption","data-caption",-144998102),new cljs.core.Keyword(null,"val","val",128701612)),succulent.core.inspect_tag.call(null,e));

cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc_in,succulent.core.querytarget.call(null,new cljs.core.Keyword(null,"destination","destination",-253872483),new cljs.core.Keyword(null,"val","val",128701612)),succulent.core.compatible_QMARK_.call(null,e));

return succulent.core.put.call(null,e,succulent.core.active_register.call(null));
});
succulent.core.probe = (function succulent$core$probe(repr,index,chr){
if((typeof repr === 'string') && (!(cljs.core.empty_QMARK_.call(null,repr)))){
return cljs.core._EQ_.call(null,cljs.core.nth.call(null,repr,index),chr);
} else {
return false;
}
});
succulent.core.str__GT_int = (function succulent$core$str__GT_int(v){
var is_neg_QMARK_ = succulent.core.probe.call(null,v,(0),"-");
var absolute_val = cljs.core.first.call(null,cljs.core.map.call(null,succulent.core.read_string,cljs.core.re_seq.call(null,/[\d.]+/,v)));
if(cljs.core.not.call(null,is_neg_QMARK_)){
return absolute_val;
} else {
return ((-1) * absolute_val);
}
});
succulent.core.carry = (function succulent$core$carry(val,curr,next){
succulent.core.lock.call(null,curr);

return succulent.core.handle.call(null,val);
});
succulent.core.copy = (function succulent$core$copy(reg1,reg2){
var val = succulent.core.ask.call(null,reg1,new cljs.core.Keyword(null,"val","val",128701612));
var destination = succulent.core.refpath.call(null,reg2,new cljs.core.Keyword(null,"val","val",128701612));
return succulent.core.put.call(null,val,reg2);
});
succulent.core.sign_bit = (function succulent$core$sign_bit(reg){
return succulent.core.ask.call(null,reg,new cljs.core.Keyword(null,"sign-bit","sign-bit",-1815857882));
});
succulent.core.evaluate = (function succulent$core$evaluate(){
var x = succulent.core.str__GT_int.call(null,succulent.core.ask.call(null,new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"val","val",128701612)));
var y = succulent.core.str__GT_int.call(null,succulent.core.ask.call(null,new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"val","val",128701612)));
var op = succulent.core.atom2action.call(null,succulent.core.ask.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"val","val",128701612)));
return [cljs.core.str(cljs.core.apply.call(null,op,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))].join('');
});
succulent.core.flip_BANG_ = (function succulent$core$flip_BANG_(reg,bit){
return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,succulent.core.refpath.call(null,reg,bit),cljs.core.bit_xor,(1));
});
succulent.core.clr_BANG_ = (function succulent$core$clr_BANG_(reg){
return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc_in,succulent.core.refpath.call(null,reg),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"idx","idx",1053688473),reg,new cljs.core.Keyword(null,"state","state",-1988618099),(function (){
return succulent.core.get_state.call(null,reg);
}),new cljs.core.Keyword(null,"val","val",128701612),"",new cljs.core.Keyword(null,"locked?","locked?",995448757),(0),new cljs.core.Keyword(null,"sign-bit","sign-bit",-1815857882),(0),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY], null));
});
succulent.core.get_opcode = (function succulent$core$get_opcode(){
if(cljs.core.truth_(succulent.core.green_QMARK_.call(null,new cljs.core.Keyword(null,"r1","r1",690974900)))){
} else {
if(cljs.core.truth_((function (){var or__6404__auto__ = succulent.core.yellow_QMARK_.call(null,new cljs.core.Keyword(null,"r1","r1",690974900));
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return succulent.core.green_QMARK_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));
}
})())){
} else {
if(cljs.core.truth_(succulent.core.yellow_QMARK_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955)))){
} else {
if(cljs.core.truth_((function (){var and__6392__auto__ = succulent.core.red_QMARK_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));
if(cljs.core.truth_(and__6392__auto__)){
return succulent.core.green_QMARK_.call(null,new cljs.core.Keyword(null,"r2","r2",252844174));
} else {
return and__6392__auto__;
}
})())){
} else {
if(cljs.core.truth_(succulent.core.yellow_QMARK_.call(null,new cljs.core.Keyword(null,"r2","r2",252844174)))){
} else {
if(cljs.core.truth_(succulent.core.yellow_QMARK_.call(null,new cljs.core.Keyword(null,"r3","r3",-2027148174)))){
} else {
}
}
}
}
}
}


return (7);
});
succulent.core.stat_BANG_ = (function succulent$core$stat_BANG_(reg,val){
return cljs.core.PersistentVector.EMPTY;
});
succulent.core.L1dispatch = (function succulent$core$L1dispatch(opcode){
var IR = cljs.core.seq.call(null,cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x,tag){
return "Not initialized";
}),(function (x,tag){
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"number","number",1570378438))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"r1","r1",690974900)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),(1)], null)], null)], null);
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"polymorphic","polymorphic",317992566))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"r1","r1",690974900)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.flip_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"sign-bit","sign-bit",-1815857882)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"r1","r1",690974900)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),(0)], null)], null)], null);

}
}
}),(function (x,tag){
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"number","number",1570378438))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"r1","r1",690974900)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),(1)], null)], null)], null);
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"polymorphic","polymorphic",317992566))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"op","op",-1882987955)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),(1)], null)], null)], null);
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"operator","operator",-1860875338))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"op","op",-1882987955)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),(1)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"r1","r1",690974900)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),(1)], null)], null)], null);

}
}
}
}),(function (x,tag){
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"number","number",1570378438))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"r2","r2",252844174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",252844174),(1)], null)], null)], null);
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"polymorphic","polymorphic",317992566))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"r2","r2",252844174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",252844174),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.flip_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"sign-bit","sign-bit",-1815857882)], null)], null)], null);
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"operator","operator",-1860875338))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"op","op",-1882987955)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),(1)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"op","op",-1882987955)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),(1)], null)], null)], null);

}
}
}
}),(function (x,tag){
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"number","number",1570378438))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"r2","r2",252844174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",252844174),(1)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"op","op",-1882987955)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",252844174),(0)], null)], null)], null);

}
}),(function (x,tag){
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"number","number",1570378438))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"r2","r2",252844174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",252844174),(1)], null)], null)], null);
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"polymorphic","polymorphic",317992566))){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,succulent.core.evaluate.call(null),new cljs.core.Keyword(null,"r3","r3",-2027148174)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",252844174),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r3","r3",-2027148174),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.clr_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.copy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r1","r1",690974900)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.clr_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"op","op",-1882987955)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.clr_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",252844174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.clr_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r3","r3",-2027148174)], null)], null)], null);
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"operator","operator",-1860875338))){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.evaluate.call(null),new cljs.core.Keyword(null,"r3","r3",-2027148174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",252844174),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r3","r3",-2027148174),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.clr_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.copy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r1","r1",690974900)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.clr_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"op","op",-1882987955)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.clr_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",252844174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.clr_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r3","r3",-2027148174)], null)], null)], null);
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"equals","equals",-463033970))){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.evaluate.call(null),new cljs.core.Keyword(null,"r3","r3",-2027148174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",252844174),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r3","r3",-2027148174),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.clr_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.clr_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",252844174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.clr_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"r2","r2",252844174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r2","r2",252844174),(1)], null)], null)], null);

}
}
}
}
}),(function (x,tag){
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"number","number",1570378438))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.clr_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r3","r3",-2027148174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"r1","r1",690974900)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.Keyword(null,"r1","r1",690974900),(1)], null)], null);
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"polymorphic","polymorphic",317992566))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.copy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r1","r1",690974900)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.clr_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r3","r3",-2027148174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"op","op",-1882987955)], null)], null)], null);
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"operator","operator",-1860875338))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.copy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r1","r1",690974900)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.clr_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r3","r3",-2027148174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"op","op",-1882987955)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"r3","r3",-2027148174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.stat_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r3","r3",-2027148174),(1)], null)], null)], null);

}
}
}
}),(function (x,tag){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.put,"help",new cljs.core.Keyword(null,"r3","r3",-2027148174)], null);
})], null)));
return cljs.core.nth.call(null,IR,opcode);
});
succulent.core.L2dispatch = (function succulent$core$L2dispatch(k,tag){
var instruction_set = succulent.core.L1dispatch.call(null,succulent.core.get_opcode.call(null));
succulent.core.load_inst.call(null,cljs.core.apply.call(null,instruction_set,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tag], null)));

return succulent.core.thread_update.call(null);
});
succulent.core.p = (function succulent$core$p(chr){
return succulent.core.L2dispatch.call(null,chr,cljs.core.second.call(null,succulent.core.asciitable.call(null,chr)));
});
succulent.core.douche = (function succulent$core$douche(reg){
var k = (((reg instanceof cljs.core.Keyword))?succulent.core.goto$.call(null,reg):reg);
return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893),k,new cljs.core.Keyword(null,"val","val",128701612)], null),cljs.core.apply.call(null,cljs.core.cons,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893),k,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"asc","asc",356854569)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893),k,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"desc","desc",2093485764)], null))], null)));
});
succulent.core.opcode = (function succulent$core$opcode(var_args){
var args11882 = [];
var len__7479__auto___11885 = arguments.length;
var i__7480__auto___11886 = (0);
while(true){
if((i__7480__auto___11886 < len__7479__auto___11885)){
args11882.push((arguments[i__7480__auto___11886]));

var G__11887 = (i__7480__auto___11886 + (1));
i__7480__auto___11886 = G__11887;
continue;
} else {
}
break;
}

var G__11884 = args11882.length;
switch (G__11884) {
case 0:
return succulent.core.opcode.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return succulent.core.opcode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11882.length)].join('')));

}
});

succulent.core.opcode.cljs$core$IFn$_invoke$arity$0 = (function (){
var current_reg = succulent.core.active_register.call(null);
var bit0 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r1","r1",690974900),(0),new cljs.core.Keyword(null,"op","op",-1882987955),(1),new cljs.core.Keyword(null,"r2","r2",252844174),(0),new cljs.core.Keyword(null,"r3","r3",-2027148174),(1)], null).call(null,cljs.core.get.call(null,succulent.core.active_register.call(null),new cljs.core.Keyword(null,"key","key",-1516042587)));
var bit1 = new cljs.core.PersistentArrayMap(null, 2, [true,(0),false,(1)], null).call(null,cljs.core.get.call(null,succulent.core.active_register.call(null),new cljs.core.Keyword(null,"empty?","empty?",-1564122972)));
var bit2 = new cljs.core.PersistentArrayMap(null, 2, [true,(1),false,(0)], null).call(null,cljs.core.get.call(null,succulent.core.active_register.call(null),new cljs.core.Keyword(null,"locked?","locked?",995448757)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((bit0 + (bit1 * (2))) + (bit2 * (4))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bit0,bit1,bit2], null)], null);
});

succulent.core.opcode.cljs$core$IFn$_invoke$arity$1 = (function (key){
var current_state = succulent.core.opcode.call(null);
var action_tag = cljs.core.get.call(null,key,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var active_thread = new cljs.core.PersistentArrayMap(null, 2, [(0),new cljs.core.Keyword(null,"semB","semB",760923251),(1),new cljs.core.Keyword(null,"semA","semA",-106696645)], null).call(null,succulent.core.caadr.call(null,current_state));
var status_light = new cljs.core.PersistentArrayMap(null, 2, [true,new cljs.core.Keyword(null,"red","red",-969428204),false,new cljs.core.Keyword(null,"green","green",-945526839)], null).call(null,succulent.core.cadadr.call(null,current_state));
if(cljs.core._EQ_.call(null,active_thread,new cljs.core.Keyword(null,"semA","semA",-106696645))){
if(cljs.core.truth_(succulent.core.red_QMARK_.call(null,status_light))){
if(cljs.core._EQ_.call(null,action_tag,new cljs.core.Keyword(null,"number","number",1570378438))){
return "lock the register";
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});

succulent.core.opcode.cljs$lang$maxFixedArity = 1;

succulent.core.exp = (function succulent$core$exp(x,n){
return cljs.core.reduce.call(null,cljs.core._STAR_,cljs.core.repeat.call(null,n,x));
});
succulent.core.Errour = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maknam","maknam",731580526),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("there is no error")].join(''),[cljs.core.str("not a string")].join(''),[cljs.core.str("can't make keyword from arg")].join(''),[cljs.core.str("not a unique identifier")].join('')], null)], null));
succulent.core.input_to_maknam_is_a_string_QMARK_ = (function succulent$core$input_to_maknam_is_a_string_QMARK_(v){
if(typeof v === 'string'){
return (1);
} else {
return (0);
}
});
succulent.core.input_to_maknam_is_keywordizable_QMARK_ = (function succulent$core$input_to_maknam_is_keywordizable_QMARK_(v){
if((cljs.core.keyword.call(null,v) instanceof cljs.core.Keyword)){
return (1);
} else {
return (0);
}
});
succulent.core.input_to_maknam_is_unique_QMARK_ = (function succulent$core$input_to_maknam_is_unique_QMARK_(v){
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.pseudo_ns),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,v)], null)))){
return (0);
} else {
return (1);
}
});
succulent.core.response_ok_QMARK_ = (function succulent$core$response_ok_QMARK_(res,bytelength){
return cljs.core._EQ_.call(null,res,succulent.core.exp.call(null,bytelength,(2)));
});
succulent.core.make_response_code = (function succulent$core$make_response_code(bits){
var response = ((1) << cljs.core.count.call(null,cljs.core.take_while.call(null,(function (p1__11889_SHARP_){
return cljs.core._EQ_.call(null,(1),cljs.core.apply.call(null,cljs.core.first.call(null,p1__11889_SHARP_),cljs.core.second.call(null,p1__11889_SHARP_)));
}),bits)));
if(cljs.core.truth_(succulent.core.response_ok_QMARK_.call(null,response,cljs.core.count.call(null,bits)))){
return (0);
} else {
return response;
}
});
succulent.core.IR = (function succulent$core$IR(opcode){
var instructions = new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.make_root_component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.make_nested_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.Keyword(null,"r1","r1",690974900)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.make_nested_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.Keyword(null,"op","op",-1882987955)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.make_nested_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.Keyword(null,"r2","r2",252844174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.make_nested_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.Keyword(null,"r3","r3",-2027148174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.make_root_component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.make_nested_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"charstring","charstring",-2141421260)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.make_nested_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"charcode","charcode",-963519952)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.make_nested_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"data-caption","data-caption",-144998102)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.make_nested_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"destination","destination",-253872483)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.make_root_component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphores","semaphores",868719096)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.make_nested_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphores","semaphores",868719096),new cljs.core.Keyword(null,"A","A",-1688942394)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.make_nested_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphores","semaphores",868719096),new cljs.core.Keyword(null,"B","B",-1422503380)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Empty!"], null)], null)], null)], null);
return succulent.core.load_inst.call(null,cljs.core.get.call(null,instructions,opcode));
});
succulent.core.IR.call(null,(0));
succulent.core.thread_update.call(null);
succulent.core.reset_db_BANG_ = (function succulent$core$reset_db_BANG_(){
cljs.core.reset_BANG_.call(null,succulent.core.db,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"refs","refs",-1560051448),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),new cljs.core.Keyword(null,"front-ptr","front-ptr",-1632799867),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"front-ptr","front-ptr",-1632799867)], null),new cljs.core.Keyword(null,"rear-ptr","rear-ptr",-1506167682),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"rear-ptr","rear-ptr",-1506167682)], null),new cljs.core.Keyword(null,"queue-val","queue-val",-1455290012),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"val","val",128701612)], null),new cljs.core.Keyword(null,"queue-state","queue-state",244359187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"atom2action","atom2action",585591165),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atom2action","atom2action",585591165)], null)], null),new cljs.core.Keyword(null,"atom2action","atom2action",585591165),new cljs.core.PersistentArrayMap(null, 4, ["+",cljs.core._PLUS_,"/",cljs.core._SLASH_,"-",cljs.core._,"*",cljs.core._STAR_], null),new cljs.core.Keyword(null,"patterns","patterns",1164082024),new cljs.core.PersistentArrayMap(null, 1, ["component",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"sign-bit","sign-bit",-1815857882),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"locked?","locked?",995448757),null,new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null)], null),new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null),new cljs.core.Keyword(null,"app-state","app-state",-1509963278),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Empty!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Empty!"], null)], null)], null),new cljs.core.Keyword(null,"front-ptr","front-ptr",-1632799867),(0),new cljs.core.Keyword(null,"rear-ptr","rear-ptr",-1506167682),(1),new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)], null));

succulent.core.IR.call(null,(0));

return succulent.core.thread_update.call(null);
});
succulent.core.stream_str = (function succulent$core$stream_str(expr){
var seq__11898 = cljs.core.seq.call(null,cljs.core.seq.call(null,clojure.string.split.call(null,expr,(new RegExp("")))));
var chunk__11901 = null;
var count__11902 = (0);
var i__11903 = (0);
while(true){
if((i__11903 < count__11902)){
var chars = cljs.core._nth.call(null,chunk__11901,i__11903);
var chr = succulent.core.handle.call(null,[cljs.core.str(chars)].join(''));
cljs.core.println.call(null,chr);

var G__11906 = seq__11898;
var G__11907 = chunk__11901;
var G__11908 = count__11902;
var G__11909 = (i__11903 + (1));
seq__11898 = G__11906;
chunk__11901 = G__11907;
count__11902 = G__11908;
i__11903 = G__11909;
continue;

} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11898);
if(temp__4657__auto__){
var seq__11898__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11898__$1)){
var c__7215__auto__ = cljs.core.chunk_first.call(null,seq__11898__$1);
var G__11910 = cljs.core.chunk_rest.call(null,seq__11898__$1);
var G__11911 = c__7215__auto__;
var G__11912 = cljs.core.count.call(null,c__7215__auto__);
var G__11913 = (0);
seq__11898 = G__11910;
chunk__11901 = G__11911;
count__11902 = G__11912;
i__11903 = G__11913;
continue;
} else {
var chars = cljs.core.first.call(null,seq__11898__$1);
var chr = succulent.core.handle.call(null,[cljs.core.str(chars)].join(''));
cljs.core.println.call(null,chr);

var G__11914 = cljs.core.next.call(null,seq__11898__$1);
var G__11915 = null;
var G__11916 = (0);
var G__11917 = (0);
seq__11898 = G__11914;
chunk__11901 = G__11915;
count__11902 = G__11916;
i__11903 = G__11917;
continue;

}
} else {
return null;
}
}
break;
}
});
succulent.core.msd = (function succulent$core$msd(bin){
if((bin < (1))){
return (0);
} else {
return (succulent$core$msd.call(null,(bin * 0.1)) + (1));
}
});
succulent.core.get_type = (function succulent$core$get_type(v){
if(typeof v === 'number'){
return new cljs.core.Keyword(null,"number","number",1570378438);
} else {
if(typeof v === 'string'){
return new cljs.core.Keyword(null,"string","string",-1989541586);
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.list_QMARK_.call(null,v)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.set_QMARK_.call(null,v)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(cljs.core.fn_QMARK_.call(null,v)){
return new cljs.core.Keyword(null,"function","function",-2127255473);
} else {
return new cljs.core.Keyword(null,"unknown-type","unknown-type",-46137531);

}
}
}
}
}
}
}
});
succulent.core.print_db = (function succulent$core$print_db(){
cljs.core.prn.call(null,[cljs.core.str("   R1:   {state: "),cljs.core.str(succulent.core.ask.call(null,new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"state","state",-1988618099))),cljs.core.str(" value: "),cljs.core.str(succulent.core.ask.call(null,new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"val","val",128701612))),cljs.core.str(" locked?: "),cljs.core.str(succulent.core.ask.call(null,new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"locked?","locked?",995448757))),cljs.core.str("   }")].join(''));

cljs.core.prn.call(null,[cljs.core.str("   OP:   {state: "),cljs.core.str(succulent.core.ask.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"state","state",-1988618099))),cljs.core.str(" value: "),cljs.core.str(succulent.core.ask.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"val","val",128701612))),cljs.core.str(" locked?: "),cljs.core.str(succulent.core.ask.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"locked?","locked?",995448757))),cljs.core.str("   }")].join(''));

cljs.core.prn.call(null,[cljs.core.str("   R2:   {state: "),cljs.core.str(succulent.core.ask.call(null,new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"state","state",-1988618099))),cljs.core.str(" value: "),cljs.core.str(succulent.core.ask.call(null,new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"val","val",128701612))),cljs.core.str(" locked?: "),cljs.core.str(succulent.core.ask.call(null,new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"locked?","locked?",995448757))),cljs.core.str("   }")].join(''));

return cljs.core.prn.call(null,[cljs.core.str("   R3:   {state: "),cljs.core.str(succulent.core.ask.call(null,new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"state","state",-1988618099))),cljs.core.str(" value: "),cljs.core.str(succulent.core.ask.call(null,new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"val","val",128701612))),cljs.core.str(" locked?: "),cljs.core.str(succulent.core.ask.call(null,new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"locked?","locked?",995448757))),cljs.core.str("   }")].join(''));
});
succulent.core.quil_setup = (function succulent$core$quil_setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
succulent.core.x_scalar = 22.2222;
succulent.core.y_scalar = 22.2727;
succulent.core.quil_update_state = (function succulent$core$quil_update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
succulent.core.op_sentinel_x = ((15) * succulent.core.x_scalar);
succulent.core.op_sentinel_y = (7.33 * succulent.core.y_scalar);
succulent.core.targ_x = ((15) * succulent.core.x_scalar);
succulent.core.targ_y = (11.75 * succulent.core.y_scalar);
succulent.core.line = (function succulent$core$line(line_num){
var line_height = 0.55;
return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2.5 * succulent.core.x_scalar),((6.75 + (line_num * line_height)) * succulent.core.y_scalar)], null)));
});
succulent.core.translate_target = (function succulent$core$translate_target(){
var index = cljs.core.mod.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreB","semaphoreB",-399834027),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),(3));
return cljs.core.get.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","r2","r3"], null),index);
});
succulent.core.draw_rectangle = (function succulent$core$draw_rectangle(x1,y1,x2,y2){
return cljs.core.comp.call(null,quil.core.rect.call(null,(x1 * succulent.core.x_scalar),(y1 * succulent.core.y_scalar),(x2 * succulent.core.x_scalar),(y2 * succulent.core.y_scalar)));
});
succulent.core.draw_triangle = (function succulent$core$draw_triangle(ordinality){
var x_coords = cljs.core.map.call(null,(function (x){
return (x + (ordinality * (3)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2.25,2.5,(2)], null));
var y_coords = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),4.5,4.5], null);
return cljs.core.comp.call(null,quil.core.triangle.call(null,(cljs.core.nth.call(null,x_coords,(0)) * succulent.core.x_scalar),(cljs.core.nth.call(null,y_coords,(0)) * succulent.core.y_scalar),(cljs.core.nth.call(null,x_coords,(1)) * succulent.core.x_scalar),(cljs.core.nth.call(null,y_coords,(1)) * succulent.core.y_scalar),(cljs.core.nth.call(null,x_coords,(2)) * succulent.core.x_scalar),(cljs.core.nth.call(null,y_coords,(2)) * succulent.core.y_scalar)));
});
succulent.core.draw_circle = (function succulent$core$draw_circle(cx,cy,r){
return cljs.core.comp.call(null,quil.core.ellipse.call(null,(cx * succulent.core.x_scalar),(cy * succulent.core.y_scalar),(r * ((succulent.core.x_scalar + succulent.core.y_scalar) / (2))),(r * ((succulent.core.x_scalar + succulent.core.y_scalar) / (2)))));
});
succulent.core.quil_draw_state = (function succulent$core$quil_draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var meta_bounding_box = quil.core.rect.call(null,(0.25 * succulent.core.x_scalar),(4.5 * succulent.core.y_scalar),(35.5 * succulent.core.x_scalar),(10.5 * succulent.core.y_scalar));
var input_bounding_box = quil.core.rect.call(null,((19) * succulent.core.x_scalar),((16) * succulent.core.y_scalar),((7) * succulent.core.x_scalar),((5) * succulent.core.y_scalar));
var output_bounding_box = quil.core.rect.call(null,((28) * succulent.core.x_scalar),((16) * succulent.core.y_scalar),((7) * succulent.core.x_scalar),((5) * succulent.core.y_scalar));
var acu_bounding_box = quil.core.rect.call(null,((19) * succulent.core.x_scalar),((5) * succulent.core.y_scalar),((16) * succulent.core.x_scalar),(9.5 * succulent.core.y_scalar));
var accumulator_box = quil.core.rect.call(null,((20) * succulent.core.x_scalar),((9) * succulent.core.y_scalar),((14) * succulent.core.x_scalar),((5) * succulent.core.y_scalar));
var cpu_bounding_box = quil.core.rect.call(null,((1) * succulent.core.x_scalar),((5) * succulent.core.y_scalar),((16) * succulent.core.x_scalar),(9.5 * succulent.core.y_scalar));
var op_box = quil.core.rect.call(null,((20) * succulent.core.x_scalar),(6.5 * succulent.core.y_scalar),((14) * succulent.core.x_scalar),(1.75 * succulent.core.y_scalar));
var instruction1 = quil.core.rect.call(null,(0.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction2 = quil.core.rect.call(null,(3.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction3 = quil.core.rect.call(null,(6.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction4 = quil.core.rect.call(null,(9.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction5 = quil.core.rect.call(null,(12.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction6 = quil.core.rect.call(null,(15.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction7 = quil.core.rect.call(null,(18.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction8 = quil.core.rect.call(null,(21.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction9 = quil.core.rect.call(null,(24.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction10 = quil.core.rect.call(null,(27.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction11 = quil.core.rect.call(null,(30.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var code = cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null));
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200)], null));

quil.core.rect.call(null,((19) * succulent.core.x_scalar),((16) * succulent.core.y_scalar),((7) * succulent.core.x_scalar),((5) * succulent.core.y_scalar));

quil.core.rect.call(null,((28) * succulent.core.x_scalar),((16) * succulent.core.y_scalar),((7) * succulent.core.x_scalar),((5) * succulent.core.y_scalar));

quil.core.rect.call(null,((19) * succulent.core.x_scalar),((5) * succulent.core.y_scalar),((16) * succulent.core.x_scalar),(9.5 * succulent.core.y_scalar));

quil.core.rect.call(null,((20) * succulent.core.x_scalar),((9) * succulent.core.y_scalar),((14) * succulent.core.x_scalar),((5) * succulent.core.y_scalar));

quil.core.rect.call(null,((1) * succulent.core.x_scalar),((5) * succulent.core.y_scalar),((16) * succulent.core.x_scalar),(9.5 * succulent.core.y_scalar));

quil.core.rect.call(null,((20) * succulent.core.x_scalar),(6.5 * succulent.core.y_scalar),((14) * succulent.core.x_scalar),(1.75 * succulent.core.y_scalar));

quil.core.rect.call(null,((10) * succulent.core.x_scalar),(8.33 * succulent.core.y_scalar),((4) * succulent.core.x_scalar),(2.41 * succulent.core.y_scalar));

quil.core.rect.call(null,((2) * succulent.core.x_scalar),(6.5 * succulent.core.y_scalar),((7) * succulent.core.x_scalar),(7.5 * succulent.core.y_scalar));

cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(63),(2),(0)], null));

quil.core.line.call(null,((12) * succulent.core.x_scalar),succulent.core.op_sentinel_y,succulent.core.op_sentinel_x,succulent.core.op_sentinel_y);

quil.core.line.call(null,((12) * succulent.core.x_scalar),succulent.core.op_sentinel_y,((12) * succulent.core.x_scalar),(8.33 * succulent.core.y_scalar));

quil.core.line.call(null,((12) * succulent.core.x_scalar),succulent.core.targ_y,succulent.core.targ_x,succulent.core.targ_y);

quil.core.line.call(null,((12) * succulent.core.x_scalar),succulent.core.targ_y,((12) * succulent.core.x_scalar),(10.75 * succulent.core.y_scalar));

if(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreA","semaphoreA",-948329321),new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"curr","curr",-1092372808)], null)))){
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(340),(240)], null));
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(250),(340)], null));
}

quil.core.ellipse.call(null,succulent.core.op_sentinel_x,succulent.core.op_sentinel_y,((2) * succulent.core.x_scalar),((2) * succulent.core.y_scalar));

if(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),succulent.core.resolve.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreB","semaphoreB",-399834027),new cljs.core.Keyword(null,"row","row",-570139521)], null))))){
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(340),(240)], null));
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(250),(340)], null));
}

quil.core.ellipse.call(null,succulent.core.targ_x,succulent.core.targ_y,((2) * succulent.core.x_scalar),((2) * succulent.core.y_scalar));

cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(63),(2),(0)], null));

quil.core.text.call(null,"INPUT ",(19.66 * succulent.core.x_scalar),((17) * succulent.core.y_scalar));

quil.core.text.call(null,[cljs.core.str("keyboard:")].join(''),(20.33 * succulent.core.x_scalar),((18) * succulent.core.y_scalar));

quil.core.text.call(null,[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null)))].join(''),(23.33 * succulent.core.x_scalar),((18) * succulent.core.y_scalar));

quil.core.text.call(null,[cljs.core.str("ascii code:")].join(''),(20.33 * succulent.core.x_scalar),((19) * succulent.core.y_scalar));

quil.core.text.call(null,[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ascii-code","ascii-code",2020922785)], null)))].join(''),(23.33 * succulent.core.x_scalar),((19) * succulent.core.y_scalar));

quil.core.text.call(null,"OUTPUT ",(28.66 * succulent.core.x_scalar),((17) * succulent.core.y_scalar));

quil.core.text.call(null,[cljs.core.str(succulent.core.resolve.call(null,succulent.core.route_to.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910))))].join(''),(29.33 * succulent.core.x_scalar),((18) * succulent.core.y_scalar));

quil.core.text.call(null,"ACCUMULATOR ",((21) * succulent.core.x_scalar),((10) * succulent.core.y_scalar));

quil.core.text.call(null,"r1",((22) * succulent.core.x_scalar),((11) * succulent.core.y_scalar));

quil.core.text.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreB","semaphoreB",-399834027),new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"curr","curr",-1092372808)], null)),((23) * succulent.core.x_scalar),((11) * succulent.core.y_scalar));

quil.core.text.call(null,"r2",((22) * succulent.core.x_scalar),((12) * succulent.core.y_scalar));

quil.core.text.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreB","semaphoreB",-399834027),new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"curr","curr",-1092372808)], null)),((23) * succulent.core.x_scalar),((12) * succulent.core.y_scalar));

quil.core.text.call(null,"r3",((22) * succulent.core.x_scalar),((13) * succulent.core.y_scalar));

quil.core.text.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreB","semaphoreB",-399834027),new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"curr","curr",-1092372808)], null)),((23) * succulent.core.x_scalar),((13) * succulent.core.y_scalar));

quil.core.text.call(null,"ARITHMETIC CONTROL UNIT ",((20) * succulent.core.x_scalar),((6) * succulent.core.y_scalar));

quil.core.text.call(null,"op",((22) * succulent.core.x_scalar),(7.5 * succulent.core.y_scalar));

quil.core.text.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreA","semaphoreA",-948329321),new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"curr","curr",-1092372808)], null)),((23) * succulent.core.x_scalar),(7.5 * succulent.core.y_scalar));

quil.core.text.call(null,"CONTROL UNIT",((2) * succulent.core.x_scalar),((6) * succulent.core.y_scalar));

quil.core.text.call(null,"INSTRUCTION REGISTERS",((1) * succulent.core.x_scalar),(0.85 * succulent.core.y_scalar));

quil.core.text.call(null,"0",((3) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"1",((6) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"2",((9) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"3",((12) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"4",((15) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"5",((18) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"6",((21) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"7",((24) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"8",((27) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"9",(29.75 * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"10",(32.8 * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"OPCODE",(10.5 * succulent.core.x_scalar),((9) * succulent.core.y_scalar));

quil.core.text.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null)),(11.5 * succulent.core.x_scalar),(10.25 * succulent.core.y_scalar));

if(cljs.core._EQ_.call(null,cljs.core.mod.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreB","semaphoreB",-399834027),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),(3)),(0))){
return quil.core.text.call(null,"r1",(14.83 * succulent.core.x_scalar),(11.89 * succulent.core.y_scalar));
} else {
if(cljs.core._EQ_.call(null,cljs.core.mod.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreB","semaphoreB",-399834027),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),(3)),(1))){
return quil.core.text.call(null,"r2",(14.83 * succulent.core.x_scalar),(11.89 * succulent.core.y_scalar));
} else {
return quil.core.text.call(null,"r3",(14.83 * succulent.core.x_scalar),(11.89 * succulent.core.y_scalar));
}
}
});
succulent.core.quil_input_setup = (function succulent$core$quil_input_setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
succulent.core.quil_update_input_state = (function succulent$core$quil_update_input_state(state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255))], null);
});
succulent.core.quil_draw_input_state = (function succulent$core$quil_draw_input_state(input_state){
var input_bounding_box = quil.core.rect.call(null,((19) * succulent.core.x_scalar),((16) * succulent.core.y_scalar),((7) * succulent.core.x_scalar),((5) * succulent.core.y_scalar));
return null;
});
succulent.core.input = (function succulent$core$input(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"succulent",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,succulent.core.quil_update_state))?(function() { 
var G__11918__delegate = function (args){
return cljs.core.apply.call(null,succulent.core.quil_update_state,args);
};
var G__11918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11919__i = 0, G__11919__a = new Array(arguments.length -  0);
while (G__11919__i < G__11919__a.length) {G__11919__a[G__11919__i] = arguments[G__11919__i + 0]; ++G__11919__i;}
  args = new cljs.core.IndexedSeq(G__11919__a,0);
} 
return G__11918__delegate.call(this,args);};
G__11918.cljs$lang$maxFixedArity = 0;
G__11918.cljs$lang$applyTo = (function (arglist__11920){
var args = cljs.core.seq(arglist__11920);
return G__11918__delegate(args);
});
G__11918.cljs$core$IFn$_invoke$arity$variadic = G__11918__delegate;
return G__11918;
})()
:succulent.core.quil_update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,succulent.core.quil_setup))?(function() { 
var G__11921__delegate = function (args){
return cljs.core.apply.call(null,succulent.core.quil_setup,args);
};
var G__11921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11922__i = 0, G__11922__a = new Array(arguments.length -  0);
while (G__11922__i < G__11922__a.length) {G__11922__a[G__11922__i] = arguments[G__11922__i + 0]; ++G__11922__i;}
  args = new cljs.core.IndexedSeq(G__11922__a,0);
} 
return G__11921__delegate.call(this,args);};
G__11921.cljs$lang$maxFixedArity = 0;
G__11921.cljs$lang$applyTo = (function (arglist__11923){
var args = cljs.core.seq(arglist__11923);
return G__11921__delegate(args);
});
G__11921.cljs$core$IFn$_invoke$arity$variadic = G__11921__delegate;
return G__11921;
})()
:succulent.core.quil_setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,succulent.core.quil_draw_state))?(function() { 
var G__11924__delegate = function (args){
return cljs.core.apply.call(null,succulent.core.quil_draw_state,args);
};
var G__11924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11925__i = 0, G__11925__a = new Array(arguments.length -  0);
while (G__11925__i < G__11925__a.length) {G__11925__a[G__11925__i] = arguments[G__11925__i + 0]; ++G__11925__i;}
  args = new cljs.core.IndexedSeq(G__11925__a,0);
} 
return G__11924__delegate.call(this,args);};
G__11924.cljs$lang$maxFixedArity = 0;
G__11924.cljs$lang$applyTo = (function (arglist__11926){
var args = cljs.core.seq(arglist__11926);
return G__11924__delegate(args);
});
G__11924.cljs$core$IFn$_invoke$arity$variadic = G__11924__delegate;
return G__11924;
})()
:succulent.core.quil_draw_state));
});
goog.exportSymbol('succulent.core.input', succulent.core.input);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7563__7564__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7563__7564__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),succulent.core.input,new cljs.core.Keyword(null,"host-id","host-id",742376279),"succulent"], null));
}

//# sourceMappingURL=core.js.map?rel=1479344224461