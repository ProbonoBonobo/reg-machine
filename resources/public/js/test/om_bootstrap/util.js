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
var temp__4423__auto__ = (function (){var and__4549__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__4549__auto__){
return k__GT_fn.call(null,k);
} else {
return and__4549__auto__;
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
return cljs.core.reduce.call(null,merge_entry,(function (){var or__4561__auto__ = m1;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___22735 = schema.utils.use_fn_validation;
var output_schema22730_22736 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema22731_22737 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker22732_22738 = schema.core.checker.call(null,input_schema22731_22737);
var output_checker22733_22739 = schema.core.checker.call(null,output_schema22730_22736);
/**
 * Inputs: [x :- s/Any]
 *   Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___22735,output_schema22730_22736,input_schema22731_22737,input_checker22732_22738,output_checker22733_22739){
return (function om_bootstrap$util$collectify(G__22734){
var validate__10213__auto__ = ufv___22735.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22740 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22734], null);
var temp__4425__auto___22741 = input_checker22732_22738.call(null,args__10214__auto___22740);
if(cljs.core.truth_(temp__4425__auto___22741)){
var error__10215__auto___22742 = temp__4425__auto___22741;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22742)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22731_22737,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22740,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22742], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var x = G__22734;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22743 = output_checker22733_22739.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22743)){
var error__10215__auto___22744 = temp__4425__auto___22743;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22744)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22730_22736,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22744], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22735,output_schema22730_22736,input_schema22731_22737,input_checker22732_22738,output_checker22733_22739))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema22730_22736,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22731_22737], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 *   the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___22750 = schema.utils.use_fn_validation;
var output_schema22745_22751 = schema.core.Bool;
var input_schema22746_22752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker22747_22753 = schema.core.checker.call(null,input_schema22746_22752);
var output_checker22748_22754 = schema.core.checker.call(null,output_schema22745_22751);
/**
 * Inputs: [x]
 *   Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___22750,output_schema22745_22751,input_schema22746_22752,input_checker22747_22753,output_checker22748_22754){
return (function om_bootstrap$util$om_component_QMARK_(G__22749){
var validate__10213__auto__ = ufv___22750.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22755 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22749], null);
var temp__4425__auto___22756 = input_checker22747_22753.call(null,args__10214__auto___22755);
if(cljs.core.truth_(temp__4425__auto___22756)){
var error__10215__auto___22757 = temp__4425__auto___22756;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22757)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22746_22752,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22755,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22757], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var x = G__22749;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22758 = output_checker22748_22754.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22758)){
var error__10215__auto___22759 = temp__4425__auto___22758;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22759)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22745_22751,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22759], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22750,output_schema22745_22751,input_schema22746_22752,input_checker22747_22753,output_checker22748_22754))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema22745_22751,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22746_22752], null)));
var ufv___22765 = schema.utils.use_fn_validation;
var output_schema22760_22766 = schema.core.Bool;
var input_schema22761_22767 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker22762_22768 = schema.core.checker.call(null,input_schema22761_22767);
var output_checker22763_22769 = schema.core.checker.call(null,output_schema22760_22766);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   TODO: Once Om updates its externs to include this file, we can
 *   remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___22765,output_schema22760_22766,input_schema22761_22767,input_checker22762_22768,output_checker22763_22769){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__22764){
var validate__10213__auto__ = ufv___22765.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22770 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22764], null);
var temp__4425__auto___22771 = input_checker22762_22768.call(null,args__10214__auto___22770);
if(cljs.core.truth_(temp__4425__auto___22771)){
var error__10215__auto___22772 = temp__4425__auto___22771;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__10215__auto___22772)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22761_22767,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22770,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22772], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var child = G__22764;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22773 = output_checker22763_22769.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22773)){
var error__10215__auto___22774 = temp__4425__auto___22773;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__10215__auto___22774)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22760_22766,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22774], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22765,output_schema22760_22766,input_schema22761_22767,input_checker22762_22768,output_checker22763_22769))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema22760_22766,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22761_22767], null)));
var ufv___22780 = schema.utils.use_fn_validation;
var output_schema22775_22781 = schema.core.Bool;
var input_schema22776_22782 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker22777_22783 = schema.core.checker.call(null,input_schema22776_22782);
var output_checker22778_22784 = schema.core.checker.call(null,output_schema22775_22781);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied argument is a valid React component,
 *   false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___22780,output_schema22775_22781,input_schema22776_22782,input_checker22777_22783,output_checker22778_22784){
return (function om_bootstrap$util$valid_component_QMARK_(G__22779){
var validate__10213__auto__ = ufv___22780.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22785 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22779], null);
var temp__4425__auto___22786 = input_checker22777_22783.call(null,args__10214__auto___22785);
if(cljs.core.truth_(temp__4425__auto___22786)){
var error__10215__auto___22787 = temp__4425__auto___22786;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__10215__auto___22787)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22776_22782,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22785,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22787], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var child = G__22779;
while(true){
var or__4561__auto__ = typeof child === 'string';
if(or__4561__auto__){
return or__4561__auto__;
} else {
var or__4561__auto____$1 = typeof child === 'number';
if(or__4561__auto____$1){
return or__4561__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22788 = output_checker22778_22784.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22788)){
var error__10215__auto___22789 = temp__4425__auto___22788;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__10215__auto___22789)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22775_22781,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22789], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22780,output_schema22775_22781,input_schema22776_22782,input_checker22777_22783,output_checker22778_22784))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema22775_22781,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22776_22782], null)));
var ufv___22795 = schema.utils.use_fn_validation;
var output_schema22790_22796 = schema.core.Bool;
var input_schema22791_22797 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker22792_22798 = schema.core.checker.call(null,input_schema22791_22797);
var output_checker22793_22799 = schema.core.checker.call(null,output_schema22790_22796);
/**
 * Inputs: [children]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied sequence contains some valid React component,
 *   false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___22795,output_schema22790_22796,input_schema22791_22797,input_checker22792_22798,output_checker22793_22799){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__22794){
var validate__10213__auto__ = ufv___22795.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22800 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22794], null);
var temp__4425__auto___22801 = input_checker22792_22798.call(null,args__10214__auto___22800);
if(cljs.core.truth_(temp__4425__auto___22801)){
var error__10215__auto___22802 = temp__4425__auto___22801;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__10215__auto___22802)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22791_22797,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22800,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22802], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var children = G__22794;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22803 = output_checker22793_22799.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22803)){
var error__10215__auto___22804 = temp__4425__auto___22803;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__10215__auto___22804)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22790_22796,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22804], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22795,output_schema22790_22796,input_schema22791_22797,input_checker22792_22798,output_checker22793_22799))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema22790_22796,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22791_22797], null)));
/**
 * Generates a new function that calls each supplied side-effecting
 *   function.
 */
om_bootstrap.util.chain_fns = (function om_bootstrap$util$chain_fns(l,r){
if(cljs.core.truth_((function (){var and__4549__auto__ = l;
if(cljs.core.truth_(and__4549__auto__)){
return r;
} else {
return and__4549__auto__;
}
})())){
return (function() { 
var G__22805__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__22805 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22806__i = 0, G__22806__a = new Array(arguments.length -  0);
while (G__22806__i < G__22806__a.length) {G__22806__a[G__22806__i] = arguments[G__22806__i + 0]; ++G__22806__i;}
  args = new cljs.core.IndexedSeq(G__22806__a,0);
} 
return G__22805__delegate.call(this,args);};
G__22805.cljs$lang$maxFixedArity = 0;
G__22805.cljs$lang$applyTo = (function (arglist__22807){
var args = cljs.core.seq(arglist__22807);
return G__22805__delegate(args);
});
G__22805.cljs$core$IFn$_invoke$arity$variadic = G__22805__delegate;
return G__22805;
})()
;
} else {
var or__4561__auto__ = l;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
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
var or__4561__auto__ = l;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
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
var args__5626__auto__ = [];
var len__5619__auto___22809 = arguments.length;
var i__5620__auto___22810 = (0);
while(true){
if((i__5620__auto___22810 < len__5619__auto___22809)){
args__5626__auto__.push((arguments[i__5620__auto___22810]));

var G__22811 = (i__5620__auto___22810 + (1));
i__5620__auto___22810 = G__22811;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((0) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((0)),(0))):null);
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__5627__auto__);
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

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq22808){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22808));
});
/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = {};
var seq__22820_22824 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__22821_22825 = null;
var count__22822_22826 = (0);
var i__22823_22827 = (0);
while(true){
if((i__22823_22827 < count__22822_22826)){
var k_22828 = cljs.core._nth.call(null,chunk__22821_22825,i__22823_22827);
if(cljs.core.truth_(arr.hasOwnProperty(k_22828))){
(ret[k_22828] = (arr[k_22828]));
} else {
}

var G__22829 = seq__22820_22824;
var G__22830 = chunk__22821_22825;
var G__22831 = count__22822_22826;
var G__22832 = (i__22823_22827 + (1));
seq__22820_22824 = G__22829;
chunk__22821_22825 = G__22830;
count__22822_22826 = G__22831;
i__22823_22827 = G__22832;
continue;
} else {
var temp__4425__auto___22833 = cljs.core.seq.call(null,seq__22820_22824);
if(temp__4425__auto___22833){
var seq__22820_22834__$1 = temp__4425__auto___22833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22820_22834__$1)){
var c__5364__auto___22835 = cljs.core.chunk_first.call(null,seq__22820_22834__$1);
var G__22836 = cljs.core.chunk_rest.call(null,seq__22820_22834__$1);
var G__22837 = c__5364__auto___22835;
var G__22838 = cljs.core.count.call(null,c__5364__auto___22835);
var G__22839 = (0);
seq__22820_22824 = G__22836;
chunk__22821_22825 = G__22837;
count__22822_22826 = G__22838;
i__22823_22827 = G__22839;
continue;
} else {
var k_22840 = cljs.core.first.call(null,seq__22820_22834__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_22840))){
(ret[k_22840] = (arr[k_22840]));
} else {
}

var G__22841 = cljs.core.next.call(null,seq__22820_22834__$1);
var G__22842 = null;
var G__22843 = (0);
var G__22844 = (0);
seq__22820_22824 = G__22841;
chunk__22821_22825 = G__22842;
count__22822_22826 = G__22843;
i__22823_22827 = G__22844;
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
var args22845 = [];
var len__5619__auto___22848 = arguments.length;
var i__5620__auto___22849 = (0);
while(true){
if((i__5620__auto___22849 < len__5619__auto___22848)){
args22845.push((arguments[i__5620__auto___22849]));

var G__22850 = (i__5620__auto___22849 + (1));
i__5620__auto___22849 = G__22850;
continue;
} else {
}
break;
}

var G__22847 = args22845.length;
switch (G__22847) {
case 1:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22845.length)].join('')));

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
var args22852 = [];
var len__5619__auto___22855 = arguments.length;
var i__5620__auto___22856 = (0);
while(true){
if((i__5620__auto___22856 < len__5619__auto___22855)){
args22852.push((arguments[i__5620__auto___22856]));

var G__22857 = (i__5620__auto___22856 + (1));
i__5620__auto___22856 = G__22857;
continue;
} else {
}
break;
}

var G__22854 = args22852.length;
switch (G__22854) {
case 1:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22852.length)].join('')));

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
