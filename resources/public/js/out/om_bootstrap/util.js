// Compiled by ClojureScript 1.7.122 {}
goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.core');
goog.require('schema.core');
/**
 * Returns a map that consists of the rest of the maps conj-ed onto
 *   the first.  If a key occurs in more than one map, the mapping(s)
 *   from the latter (left-to-right) will be combined with the mapping in
 *   the result by looking up the proper merge function and in the
 *   supplied map of key -> merge-fn and using that for the big merge. If
 *   a key doesn't have a merge function, the right value wins (as with
 *   merge).
 */
om_bootstrap.util.merge_with_fns = (function om_bootstrap$util$merge_with_fns(k__GT_fn,maps){
var merge_entry = (function om_bootstrap$util$merge_with_fns_$_merge_entry(m,e){
var k = cljs.core.key.call(null,e);
var v = cljs.core.val.call(null,e);
var temp__4423__auto__ = (function (){var and__19189__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__19189__auto__){
return k__GT_fn.call(null,k);
} else {
return and__19189__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function om_bootstrap$util$merge_with_fns_$_merge(m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__19201__auto__ = m1;
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___33495 = schema.utils.use_fn_validation;
var output_schema33490_33496 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema33491_33497 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker33492_33498 = schema.core.checker.call(null,input_schema33491_33497);
var output_checker33493_33499 = schema.core.checker.call(null,output_schema33490_33496);
/**
 * Inputs: [x :- s/Any]
 *   Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___33495,output_schema33490_33496,input_schema33491_33497,input_checker33492_33498,output_checker33493_33499){
return (function om_bootstrap$util$collectify(G__33494){
var validate__20540__auto__ = ufv___33495.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33500 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33494], null);
var temp__4425__auto___33501 = input_checker33492_33498.call(null,args__20541__auto___33500);
if(cljs.core.truth_(temp__4425__auto___33501)){
var error__20542__auto___33502 = temp__4425__auto___33501;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33502)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33491_33497,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33500,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33502], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var x = G__33494;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33503 = output_checker33493_33499.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33503)){
var error__20542__auto___33504 = temp__4425__auto___33503;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33504)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33490_33496,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33504], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33495,output_schema33490_33496,input_schema33491_33497,input_checker33492_33498,output_checker33493_33499))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema33490_33496,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33491_33497], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 *   the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___33510 = schema.utils.use_fn_validation;
var output_schema33505_33511 = schema.core.Bool;
var input_schema33506_33512 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33507_33513 = schema.core.checker.call(null,input_schema33506_33512);
var output_checker33508_33514 = schema.core.checker.call(null,output_schema33505_33511);
/**
 * Inputs: [x]
 *   Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___33510,output_schema33505_33511,input_schema33506_33512,input_checker33507_33513,output_checker33508_33514){
return (function om_bootstrap$util$om_component_QMARK_(G__33509){
var validate__20540__auto__ = ufv___33510.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33515 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33509], null);
var temp__4425__auto___33516 = input_checker33507_33513.call(null,args__20541__auto___33515);
if(cljs.core.truth_(temp__4425__auto___33516)){
var error__20542__auto___33517 = temp__4425__auto___33516;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33517)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33506_33512,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33515,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33517], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var x = G__33509;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33518 = output_checker33508_33514.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33518)){
var error__20542__auto___33519 = temp__4425__auto___33518;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33519)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33505_33511,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33519], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33510,output_schema33505_33511,input_schema33506_33512,input_checker33507_33513,output_checker33508_33514))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema33505_33511,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33506_33512], null)));
var ufv___33525 = schema.utils.use_fn_validation;
var output_schema33520_33526 = schema.core.Bool;
var input_schema33521_33527 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33522_33528 = schema.core.checker.call(null,input_schema33521_33527);
var output_checker33523_33529 = schema.core.checker.call(null,output_schema33520_33526);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   TODO: Once Om updates its externs to include this file, we can
 *   remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___33525,output_schema33520_33526,input_schema33521_33527,input_checker33522_33528,output_checker33523_33529){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__33524){
var validate__20540__auto__ = ufv___33525.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33530 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33524], null);
var temp__4425__auto___33531 = input_checker33522_33528.call(null,args__20541__auto___33530);
if(cljs.core.truth_(temp__4425__auto___33531)){
var error__20542__auto___33532 = temp__4425__auto___33531;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__20542__auto___33532)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33521_33527,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33530,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33532], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var child = G__33524;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33533 = output_checker33523_33529.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33533)){
var error__20542__auto___33534 = temp__4425__auto___33533;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__20542__auto___33534)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33520_33526,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33534], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33525,output_schema33520_33526,input_schema33521_33527,input_checker33522_33528,output_checker33523_33529))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema33520_33526,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33521_33527], null)));
var ufv___33540 = schema.utils.use_fn_validation;
var output_schema33535_33541 = schema.core.Bool;
var input_schema33536_33542 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33537_33543 = schema.core.checker.call(null,input_schema33536_33542);
var output_checker33538_33544 = schema.core.checker.call(null,output_schema33535_33541);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied argument is a valid React component,
 *   false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___33540,output_schema33535_33541,input_schema33536_33542,input_checker33537_33543,output_checker33538_33544){
return (function om_bootstrap$util$valid_component_QMARK_(G__33539){
var validate__20540__auto__ = ufv___33540.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33545 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33539], null);
var temp__4425__auto___33546 = input_checker33537_33543.call(null,args__20541__auto___33545);
if(cljs.core.truth_(temp__4425__auto___33546)){
var error__20542__auto___33547 = temp__4425__auto___33546;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__20542__auto___33547)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33536_33542,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33545,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33547], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var child = G__33539;
while(true){
var or__19201__auto__ = typeof child === 'string';
if(or__19201__auto__){
return or__19201__auto__;
} else {
var or__19201__auto____$1 = typeof child === 'number';
if(or__19201__auto____$1){
return or__19201__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33548 = output_checker33538_33544.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33548)){
var error__20542__auto___33549 = temp__4425__auto___33548;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__20542__auto___33549)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33535_33541,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33549], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33540,output_schema33535_33541,input_schema33536_33542,input_checker33537_33543,output_checker33538_33544))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema33535_33541,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33536_33542], null)));
var ufv___33555 = schema.utils.use_fn_validation;
var output_schema33550_33556 = schema.core.Bool;
var input_schema33551_33557 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33552_33558 = schema.core.checker.call(null,input_schema33551_33557);
var output_checker33553_33559 = schema.core.checker.call(null,output_schema33550_33556);
/**
 * Inputs: [children]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied sequence contains some valid React component,
 *   false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___33555,output_schema33550_33556,input_schema33551_33557,input_checker33552_33558,output_checker33553_33559){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__33554){
var validate__20540__auto__ = ufv___33555.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33554], null);
var temp__4425__auto___33561 = input_checker33552_33558.call(null,args__20541__auto___33560);
if(cljs.core.truth_(temp__4425__auto___33561)){
var error__20542__auto___33562 = temp__4425__auto___33561;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__20542__auto___33562)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33551_33557,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33560,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33562], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var children = G__33554;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33563 = output_checker33553_33559.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33563)){
var error__20542__auto___33564 = temp__4425__auto___33563;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__20542__auto___33564)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33550_33556,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33564], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33555,output_schema33550_33556,input_schema33551_33557,input_checker33552_33558,output_checker33553_33559))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema33550_33556,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33551_33557], null)));
/**
 * Generates a new function that calls each supplied side-effecting
 *   function.
 */
om_bootstrap.util.chain_fns = (function om_bootstrap$util$chain_fns(l,r){
if(cljs.core.truth_((function (){var and__19189__auto__ = l;
if(cljs.core.truth_(and__19189__auto__)){
return r;
} else {
return and__19189__auto__;
}
})())){
return (function() { 
var G__33565__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__33565 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33566__i = 0, G__33566__a = new Array(arguments.length -  0);
while (G__33566__i < G__33566__a.length) {G__33566__a[G__33566__i] = arguments[G__33566__i + 0]; ++G__33566__i;}
  args = new cljs.core.IndexedSeq(G__33566__a,0);
} 
return G__33565__delegate.call(this,args);};
G__33565.cljs$lang$maxFixedArity = 0;
G__33565.cljs$lang$applyTo = (function (arglist__33567){
var args = cljs.core.seq(arglist__33567);
return G__33565__delegate(args);
});
G__33565.cljs$core$IFn$_invoke$arity$variadic = G__33565__delegate;
return G__33565;
})()
;
} else {
var or__19201__auto__ = l;
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return r;
}
}
});
/**
 * Map of React keyword to a custom function for its merge. Tries to
 *   do a decent job with event handlers as well; currently only
 *   handles :on-select :on-click, :on-blur, kebab-cased as om-tools
 *   prefers.
 */
om_bootstrap.util.react_merges = (function (){var merge_class = (function (l,r){
return [cljs.core.str(l),cljs.core.str(" "),cljs.core.str(r)].join('');
});
var orig_fn = ((function (merge_class){
return (function (l,r){
var or__19201__auto__ = l;
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return r;
}
});})(merge_class))
;
var empty_fn = ((function (merge_class,orig_fn){
return (function (_,___$1){
return null;
});})(merge_class,orig_fn))
;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"class","class",-2030961996)],[empty_fn,empty_fn,orig_fn,om_bootstrap.util.chain_fns,om_bootstrap.util.chain_fns,merge_class,cljs.core.merge,om_bootstrap.util.chain_fns,merge_class]);
})();
/**
 * Merges two maps that represent React properties. Merges occur
 *   according to the functions defined in `react-merges`.
 */
om_bootstrap.util.merge_props = (function om_bootstrap$util$merge_props(var_args){
var args__20266__auto__ = [];
var len__20259__auto___33569 = arguments.length;
var i__20260__auto___33570 = (0);
while(true){
if((i__20260__auto___33570 < len__20259__auto___33569)){
args__20266__auto__.push((arguments[i__20260__auto___33570]));

var G__33571 = (i__20260__auto___33570 + (1));
i__20260__auto___33570 = G__33571;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((0) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((0)),(0))):null);
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__20267__auto__);
});

om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (prop_maps){
var react_merge = (function om_bootstrap$util$react_merge(xs){
return om_bootstrap.util.merge_with_fns.call(null,om_bootstrap.util.react_merges,xs);
});
var normalize_class = (function om_bootstrap$util$normalize_class(m){
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996))){
return react_merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m)], null)], null));
} else {
return m;
}
});
var ret = react_merge.call(null,cljs.core.map.call(null,normalize_class,prop_maps));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ret))){
return cljs.core.dissoc.call(null,ret,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return ret;
}
});

om_bootstrap.util.merge_props.cljs$lang$maxFixedArity = (0);

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq33568){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33568));
});
/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = {};
var seq__33580_33584 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__33581_33585 = null;
var count__33582_33586 = (0);
var i__33583_33587 = (0);
while(true){
if((i__33583_33587 < count__33582_33586)){
var k_33588 = cljs.core._nth.call(null,chunk__33581_33585,i__33583_33587);
if(cljs.core.truth_(arr.hasOwnProperty(k_33588))){
(ret[k_33588] = (arr[k_33588]));
} else {
}

var G__33589 = seq__33580_33584;
var G__33590 = chunk__33581_33585;
var G__33591 = count__33582_33586;
var G__33592 = (i__33583_33587 + (1));
seq__33580_33584 = G__33589;
chunk__33581_33585 = G__33590;
count__33582_33586 = G__33591;
i__33583_33587 = G__33592;
continue;
} else {
var temp__4425__auto___33593 = cljs.core.seq.call(null,seq__33580_33584);
if(temp__4425__auto___33593){
var seq__33580_33594__$1 = temp__4425__auto___33593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33580_33594__$1)){
var c__20004__auto___33595 = cljs.core.chunk_first.call(null,seq__33580_33594__$1);
var G__33596 = cljs.core.chunk_rest.call(null,seq__33580_33594__$1);
var G__33597 = c__20004__auto___33595;
var G__33598 = cljs.core.count.call(null,c__20004__auto___33595);
var G__33599 = (0);
seq__33580_33584 = G__33596;
chunk__33581_33585 = G__33597;
count__33582_33586 = G__33598;
i__33583_33587 = G__33599;
continue;
} else {
var k_33600 = cljs.core.first.call(null,seq__33580_33594__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_33600))){
(ret[k_33600] = (arr[k_33600]));
} else {
}

var G__33601 = cljs.core.next.call(null,seq__33580_33594__$1);
var G__33602 = null;
var G__33603 = (0);
var G__33604 = (0);
seq__33580_33584 = G__33601;
chunk__33581_33585 = G__33602;
count__33582_33586 = G__33603;
i__33583_33587 = G__33604;
continue;
}
} else {
}
}
break;
}

return ret;
});
om_bootstrap.util.create_element = (function om_bootstrap$util$create_element(var_args){
var args33605 = [];
var len__20259__auto___33608 = arguments.length;
var i__20260__auto___33609 = (0);
while(true){
if((i__20260__auto___33609 < len__20259__auto___33608)){
args33605.push((arguments[i__20260__auto___33609]));

var G__33610 = (i__20260__auto___33609 + (1));
i__20260__auto___33609 = G__33610;
continue;
} else {
}
break;
}

var G__33607 = args33605.length;
switch (G__33607) {
case 1:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33605.length)].join('')));

}
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.create_element.call(null,child,null);
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2 = (function (child,props){
return React.createElement(child.type,props);
});

om_bootstrap.util.create_element.cljs$lang$maxFixedArity = 2;
/**
 * Merges the supplied extra properties into the underlying Om cursor
 *   and calls the constructor to clone the React component.
 * 
 *   Requires that the supplied child has an Om cursor attached to it! 
 */
om_bootstrap.util.clone_om = (function om_bootstrap$util$clone_om(child,extra_props){
var om_props = om_bootstrap.util.get_props.call(null,child);
var props = {};
var cloned_child = goog.object.clone(child);
goog.object.extend(props,child.props,{"__om_cursor": ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props))});

goog.object.extend(cloned_child,{"props": props});

return cloned_child;
});
/**
 * This function is called if the React component child was NOT
 *   generated by Om. Merges the supplied properties into the -props
 *   field of the supplied React component and creates a shallow copy.
 */
om_bootstrap.util.clone_basic_react = (function om_bootstrap$util$clone_basic_react(child,extra_props){
var props = cljs.core.js__GT_clj.call(null,child.props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4425__auto__)){
var children = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
return null;
}
})());
return om_bootstrap.util.create_element.call(null,child,cljs.core.clj__GT_js.call(null,new_props));
});
/**
 * Returns a shallow copy of the supplied component (child); the copy
 *   will have any props provided by extra-props merged in. Props are
 *   merged in the same manner as merge-props, so props like :class will
 *   be merged intelligently.
 * 
 *   extra-props can be a function of the old props that returns new
 *   props, OR it can be a map of props.
 * 
 *   If the supplied child is an Om component, any supplied extra
 *   properties will be merged into the underlying cursor and accessible
 *   in the Om constructor.
 */
om_bootstrap.util.clone_with_props = (function om_bootstrap$util$clone_with_props(var_args){
var args33612 = [];
var len__20259__auto___33615 = arguments.length;
var i__20260__auto___33616 = (0);
while(true){
if((i__20260__auto___33616 < len__20259__auto___33615)){
args33612.push((arguments[i__20260__auto___33616]));

var G__33617 = (i__20260__auto___33616 + (1));
i__20260__auto___33616 = G__33617;
continue;
} else {
}
break;
}

var G__33614 = args33612.length;
switch (G__33614) {
case 1:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33612.length)].join('')));

}
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.clone_with_props.call(null,child,cljs.core.PersistentArrayMap.EMPTY);
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2 = (function (child,extra_props){
if(cljs.core.not.call(null,om_bootstrap.util.strict_valid_component_QMARK_.call(null,child))){
return child;
} else {
if(cljs.core.truth_(om_bootstrap.util.om_component_QMARK_.call(null,child))){
return om_bootstrap.util.clone_om.call(null,child,extra_props);
} else {
if((cljs.core.map_QMARK_.call(null,extra_props)) && (cljs.core.empty_QMARK_.call(null,extra_props))){
return om_bootstrap.util.create_element.call(null,child,child.props);
} else {
return om_bootstrap.util.clone_basic_react.call(null,child,extra_props);

}
}
}
});

om_bootstrap.util.clone_with_props.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=util.js.map?rel=1444632656535