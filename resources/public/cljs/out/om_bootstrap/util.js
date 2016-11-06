// Compiled by ClojureScript 1.9.227 {}
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
var temp__4655__auto__ = (function (){var and__24739__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__24739__auto__){
return k__GT_fn.call(null,k);
} else {
return and__24739__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function om_bootstrap$util$merge_with_fns_$_merge(m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__24751__auto__ = m1;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___66662 = schema.utils.use_fn_validation;
var output_schema66657_66663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema66658_66664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker66659_66665 = schema.core.checker.call(null,input_schema66658_66664);
var output_checker66660_66666 = schema.core.checker.call(null,output_schema66657_66663);
/**
 * Inputs: [x :- s/Any]
 *   Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___66662,output_schema66657_66663,input_schema66658_66664,input_checker66659_66665,output_checker66660_66666){
return (function om_bootstrap$util$collectify(G__66661){
var validate__30368__auto__ = ufv___66662.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___66667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__66661], null);
var temp__4657__auto___66668 = input_checker66659_66665.call(null,args__30369__auto___66667);
if(cljs.core.truth_(temp__4657__auto___66668)){
var error__30370__auto___66669 = temp__4657__auto___66668;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__30370__auto___66669)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema66658_66664,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___66667,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66669], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var x = G__66661;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___66670 = output_checker66660_66666.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___66670)){
var error__30370__auto___66671 = temp__4657__auto___66670;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__30370__auto___66671)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema66657_66663,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66671], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___66662,output_schema66657_66663,input_schema66658_66664,input_checker66659_66665,output_checker66660_66666))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema66657_66663,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema66658_66664], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 *   the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___66677 = schema.utils.use_fn_validation;
var output_schema66672_66678 = schema.core.Bool;
var input_schema66673_66679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker66674_66680 = schema.core.checker.call(null,input_schema66673_66679);
var output_checker66675_66681 = schema.core.checker.call(null,output_schema66672_66678);
/**
 * Inputs: [x]
 *   Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___66677,output_schema66672_66678,input_schema66673_66679,input_checker66674_66680,output_checker66675_66681){
return (function om_bootstrap$util$om_component_QMARK_(G__66676){
var validate__30368__auto__ = ufv___66677.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___66682 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__66676], null);
var temp__4657__auto___66683 = input_checker66674_66680.call(null,args__30369__auto___66682);
if(cljs.core.truth_(temp__4657__auto___66683)){
var error__30370__auto___66684 = temp__4657__auto___66683;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___66684)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema66673_66679,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___66682,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66684], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var x = G__66676;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___66685 = output_checker66675_66681.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___66685)){
var error__30370__auto___66686 = temp__4657__auto___66685;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___66686)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema66672_66678,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66686], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___66677,output_schema66672_66678,input_schema66673_66679,input_checker66674_66680,output_checker66675_66681))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema66672_66678,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema66673_66679], null)));
var ufv___66692 = schema.utils.use_fn_validation;
var output_schema66687_66693 = schema.core.Bool;
var input_schema66688_66694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker66689_66695 = schema.core.checker.call(null,input_schema66688_66694);
var output_checker66690_66696 = schema.core.checker.call(null,output_schema66687_66693);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   TODO: Once Om updates its externs to include this file, we can
 *   remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___66692,output_schema66687_66693,input_schema66688_66694,input_checker66689_66695,output_checker66690_66696){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__66691){
var validate__30368__auto__ = ufv___66692.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___66697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__66691], null);
var temp__4657__auto___66698 = input_checker66689_66695.call(null,args__30369__auto___66697);
if(cljs.core.truth_(temp__4657__auto___66698)){
var error__30370__auto___66699 = temp__4657__auto___66698;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__30370__auto___66699)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema66688_66694,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___66697,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66699], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var child = G__66691;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___66700 = output_checker66690_66696.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___66700)){
var error__30370__auto___66701 = temp__4657__auto___66700;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__30370__auto___66701)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema66687_66693,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66701], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___66692,output_schema66687_66693,input_schema66688_66694,input_checker66689_66695,output_checker66690_66696))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema66687_66693,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema66688_66694], null)));
var ufv___66707 = schema.utils.use_fn_validation;
var output_schema66702_66708 = schema.core.Bool;
var input_schema66703_66709 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker66704_66710 = schema.core.checker.call(null,input_schema66703_66709);
var output_checker66705_66711 = schema.core.checker.call(null,output_schema66702_66708);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied argument is a valid React component,
 *   false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___66707,output_schema66702_66708,input_schema66703_66709,input_checker66704_66710,output_checker66705_66711){
return (function om_bootstrap$util$valid_component_QMARK_(G__66706){
var validate__30368__auto__ = ufv___66707.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___66712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__66706], null);
var temp__4657__auto___66713 = input_checker66704_66710.call(null,args__30369__auto___66712);
if(cljs.core.truth_(temp__4657__auto___66713)){
var error__30370__auto___66714 = temp__4657__auto___66713;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__30370__auto___66714)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema66703_66709,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___66712,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66714], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var child = G__66706;
while(true){
var or__24751__auto__ = typeof child === 'string';
if(or__24751__auto__){
return or__24751__auto__;
} else {
var or__24751__auto____$1 = typeof child === 'number';
if(or__24751__auto____$1){
return or__24751__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___66715 = output_checker66705_66711.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___66715)){
var error__30370__auto___66716 = temp__4657__auto___66715;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__30370__auto___66716)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema66702_66708,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66716], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___66707,output_schema66702_66708,input_schema66703_66709,input_checker66704_66710,output_checker66705_66711))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema66702_66708,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema66703_66709], null)));
var ufv___66722 = schema.utils.use_fn_validation;
var output_schema66717_66723 = schema.core.Bool;
var input_schema66718_66724 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker66719_66725 = schema.core.checker.call(null,input_schema66718_66724);
var output_checker66720_66726 = schema.core.checker.call(null,output_schema66717_66723);
/**
 * Inputs: [children]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied sequence contains some valid React component,
 *   false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___66722,output_schema66717_66723,input_schema66718_66724,input_checker66719_66725,output_checker66720_66726){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__66721){
var validate__30368__auto__ = ufv___66722.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___66727 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__66721], null);
var temp__4657__auto___66728 = input_checker66719_66725.call(null,args__30369__auto___66727);
if(cljs.core.truth_(temp__4657__auto___66728)){
var error__30370__auto___66729 = temp__4657__auto___66728;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__30370__auto___66729)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema66718_66724,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___66727,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66729], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var children = G__66721;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___66730 = output_checker66720_66726.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___66730)){
var error__30370__auto___66731 = temp__4657__auto___66730;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__30370__auto___66731)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema66717_66723,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66731], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___66722,output_schema66717_66723,input_schema66718_66724,input_checker66719_66725,output_checker66720_66726))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema66717_66723,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema66718_66724], null)));
/**
 * Generates a new function that calls each supplied side-effecting
 *   function.
 */
om_bootstrap.util.chain_fns = (function om_bootstrap$util$chain_fns(l,r){
if(cljs.core.truth_((function (){var and__24739__auto__ = l;
if(cljs.core.truth_(and__24739__auto__)){
return r;
} else {
return and__24739__auto__;
}
})())){
return (function() { 
var G__66732__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__66732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66733__i = 0, G__66733__a = new Array(arguments.length -  0);
while (G__66733__i < G__66733__a.length) {G__66733__a[G__66733__i] = arguments[G__66733__i + 0]; ++G__66733__i;}
  args = new cljs.core.IndexedSeq(G__66733__a,0);
} 
return G__66732__delegate.call(this,args);};
G__66732.cljs$lang$maxFixedArity = 0;
G__66732.cljs$lang$applyTo = (function (arglist__66734){
var args = cljs.core.seq(arglist__66734);
return G__66732__delegate(args);
});
G__66732.cljs$core$IFn$_invoke$arity$variadic = G__66732__delegate;
return G__66732;
})()
;
} else {
var or__24751__auto__ = l;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
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
var or__24751__auto__ = l;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
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
var args__25833__auto__ = [];
var len__25826__auto___66736 = arguments.length;
var i__25827__auto___66737 = (0);
while(true){
if((i__25827__auto___66737 < len__25826__auto___66736)){
args__25833__auto__.push((arguments[i__25827__auto___66737]));

var G__66738 = (i__25827__auto___66737 + (1));
i__25827__auto___66737 = G__66738;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
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

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq66735){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66735));
});

/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = {};
var seq__66747_66751 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__66748_66752 = null;
var count__66749_66753 = (0);
var i__66750_66754 = (0);
while(true){
if((i__66750_66754 < count__66749_66753)){
var k_66755 = cljs.core._nth.call(null,chunk__66748_66752,i__66750_66754);
if(cljs.core.truth_(arr.hasOwnProperty(k_66755))){
(ret[k_66755] = (arr[k_66755]));
} else {
}

var G__66756 = seq__66747_66751;
var G__66757 = chunk__66748_66752;
var G__66758 = count__66749_66753;
var G__66759 = (i__66750_66754 + (1));
seq__66747_66751 = G__66756;
chunk__66748_66752 = G__66757;
count__66749_66753 = G__66758;
i__66750_66754 = G__66759;
continue;
} else {
var temp__4657__auto___66760 = cljs.core.seq.call(null,seq__66747_66751);
if(temp__4657__auto___66760){
var seq__66747_66761__$1 = temp__4657__auto___66760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66747_66761__$1)){
var c__25562__auto___66762 = cljs.core.chunk_first.call(null,seq__66747_66761__$1);
var G__66763 = cljs.core.chunk_rest.call(null,seq__66747_66761__$1);
var G__66764 = c__25562__auto___66762;
var G__66765 = cljs.core.count.call(null,c__25562__auto___66762);
var G__66766 = (0);
seq__66747_66751 = G__66763;
chunk__66748_66752 = G__66764;
count__66749_66753 = G__66765;
i__66750_66754 = G__66766;
continue;
} else {
var k_66767 = cljs.core.first.call(null,seq__66747_66761__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_66767))){
(ret[k_66767] = (arr[k_66767]));
} else {
}

var G__66768 = cljs.core.next.call(null,seq__66747_66761__$1);
var G__66769 = null;
var G__66770 = (0);
var G__66771 = (0);
seq__66747_66751 = G__66768;
chunk__66748_66752 = G__66769;
count__66749_66753 = G__66770;
i__66750_66754 = G__66771;
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
var args66772 = [];
var len__25826__auto___66775 = arguments.length;
var i__25827__auto___66776 = (0);
while(true){
if((i__25827__auto___66776 < len__25826__auto___66775)){
args66772.push((arguments[i__25827__auto___66776]));

var G__66777 = (i__25827__auto___66776 + (1));
i__25827__auto___66776 = G__66777;
continue;
} else {
}
break;
}

var G__66774 = args66772.length;
switch (G__66774) {
case 1:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66772.length)].join('')));

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
var props = ({});
var cloned_child = goog.object.clone(child);
goog.object.extend(props,child.props,({"__om_cursor": ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props))}));

goog.object.extend(cloned_child,({"props": props}));

return cloned_child;
});
/**
 * This function is called if the React component child was NOT
 *   generated by Om. Merges the supplied properties into the -props
 *   field of the supplied React component and creates a shallow copy.
 */
om_bootstrap.util.clone_basic_react = (function om_bootstrap$util$clone_basic_react(child,extra_props){
var props = cljs.core.js__GT_clj.call(null,child.props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4657__auto__)){
var children = temp__4657__auto__;
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
var args66779 = [];
var len__25826__auto___66782 = arguments.length;
var i__25827__auto___66783 = (0);
while(true){
if((i__25827__auto___66783 < len__25826__auto___66782)){
args66779.push((arguments[i__25827__auto___66783]));

var G__66784 = (i__25827__auto___66783 + (1));
i__25827__auto___66783 = G__66784;
continue;
} else {
}
break;
}

var G__66781 = args66779.length;
switch (G__66781) {
case 1:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66779.length)].join('')));

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


//# sourceMappingURL=util.js.map?rel=1478399640613