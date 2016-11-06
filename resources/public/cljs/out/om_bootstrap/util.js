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
var ufv___81022 = schema.utils.use_fn_validation;
var output_schema81017_81023 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema81018_81024 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker81019_81025 = schema.core.checker.call(null,input_schema81018_81024);
var output_checker81020_81026 = schema.core.checker.call(null,output_schema81017_81023);
/**
 * Inputs: [x :- s/Any]
 *   Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___81022,output_schema81017_81023,input_schema81018_81024,input_checker81019_81025,output_checker81020_81026){
return (function om_bootstrap$util$collectify(G__81021){
var validate__38286__auto__ = ufv___81022.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___81027 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__81021], null);
var temp__4657__auto___81028 = input_checker81019_81025.call(null,args__38287__auto___81027);
if(cljs.core.truth_(temp__4657__auto___81028)){
var error__38288__auto___81029 = temp__4657__auto___81028;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__38288__auto___81029)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema81018_81024,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___81027,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81029], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var x = G__81021;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___81030 = output_checker81020_81026.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___81030)){
var error__38288__auto___81031 = temp__4657__auto___81030;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__38288__auto___81031)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema81017_81023,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81031], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___81022,output_schema81017_81023,input_schema81018_81024,input_checker81019_81025,output_checker81020_81026))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema81017_81023,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema81018_81024], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 *   the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___81037 = schema.utils.use_fn_validation;
var output_schema81032_81038 = schema.core.Bool;
var input_schema81033_81039 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker81034_81040 = schema.core.checker.call(null,input_schema81033_81039);
var output_checker81035_81041 = schema.core.checker.call(null,output_schema81032_81038);
/**
 * Inputs: [x]
 *   Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___81037,output_schema81032_81038,input_schema81033_81039,input_checker81034_81040,output_checker81035_81041){
return (function om_bootstrap$util$om_component_QMARK_(G__81036){
var validate__38286__auto__ = ufv___81037.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___81042 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__81036], null);
var temp__4657__auto___81043 = input_checker81034_81040.call(null,args__38287__auto___81042);
if(cljs.core.truth_(temp__4657__auto___81043)){
var error__38288__auto___81044 = temp__4657__auto___81043;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___81044)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema81033_81039,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___81042,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81044], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var x = G__81036;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___81045 = output_checker81035_81041.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___81045)){
var error__38288__auto___81046 = temp__4657__auto___81045;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___81046)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema81032_81038,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81046], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___81037,output_schema81032_81038,input_schema81033_81039,input_checker81034_81040,output_checker81035_81041))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema81032_81038,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema81033_81039], null)));
var ufv___81052 = schema.utils.use_fn_validation;
var output_schema81047_81053 = schema.core.Bool;
var input_schema81048_81054 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker81049_81055 = schema.core.checker.call(null,input_schema81048_81054);
var output_checker81050_81056 = schema.core.checker.call(null,output_schema81047_81053);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   TODO: Once Om updates its externs to include this file, we can
 *   remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___81052,output_schema81047_81053,input_schema81048_81054,input_checker81049_81055,output_checker81050_81056){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__81051){
var validate__38286__auto__ = ufv___81052.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___81057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__81051], null);
var temp__4657__auto___81058 = input_checker81049_81055.call(null,args__38287__auto___81057);
if(cljs.core.truth_(temp__4657__auto___81058)){
var error__38288__auto___81059 = temp__4657__auto___81058;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__38288__auto___81059)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema81048_81054,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___81057,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81059], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var child = G__81051;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___81060 = output_checker81050_81056.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___81060)){
var error__38288__auto___81061 = temp__4657__auto___81060;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__38288__auto___81061)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema81047_81053,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81061], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___81052,output_schema81047_81053,input_schema81048_81054,input_checker81049_81055,output_checker81050_81056))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema81047_81053,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema81048_81054], null)));
var ufv___81067 = schema.utils.use_fn_validation;
var output_schema81062_81068 = schema.core.Bool;
var input_schema81063_81069 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker81064_81070 = schema.core.checker.call(null,input_schema81063_81069);
var output_checker81065_81071 = schema.core.checker.call(null,output_schema81062_81068);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied argument is a valid React component,
 *   false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___81067,output_schema81062_81068,input_schema81063_81069,input_checker81064_81070,output_checker81065_81071){
return (function om_bootstrap$util$valid_component_QMARK_(G__81066){
var validate__38286__auto__ = ufv___81067.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___81072 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__81066], null);
var temp__4657__auto___81073 = input_checker81064_81070.call(null,args__38287__auto___81072);
if(cljs.core.truth_(temp__4657__auto___81073)){
var error__38288__auto___81074 = temp__4657__auto___81073;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__38288__auto___81074)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema81063_81069,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___81072,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81074], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var child = G__81066;
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
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___81075 = output_checker81065_81071.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___81075)){
var error__38288__auto___81076 = temp__4657__auto___81075;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__38288__auto___81076)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema81062_81068,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81076], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___81067,output_schema81062_81068,input_schema81063_81069,input_checker81064_81070,output_checker81065_81071))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema81062_81068,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema81063_81069], null)));
var ufv___81082 = schema.utils.use_fn_validation;
var output_schema81077_81083 = schema.core.Bool;
var input_schema81078_81084 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker81079_81085 = schema.core.checker.call(null,input_schema81078_81084);
var output_checker81080_81086 = schema.core.checker.call(null,output_schema81077_81083);
/**
 * Inputs: [children]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied sequence contains some valid React component,
 *   false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___81082,output_schema81077_81083,input_schema81078_81084,input_checker81079_81085,output_checker81080_81086){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__81081){
var validate__38286__auto__ = ufv___81082.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___81087 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__81081], null);
var temp__4657__auto___81088 = input_checker81079_81085.call(null,args__38287__auto___81087);
if(cljs.core.truth_(temp__4657__auto___81088)){
var error__38288__auto___81089 = temp__4657__auto___81088;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__38288__auto___81089)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema81078_81084,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___81087,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81089], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var children = G__81081;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___81090 = output_checker81080_81086.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___81090)){
var error__38288__auto___81091 = temp__4657__auto___81090;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__38288__auto___81091)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema81077_81083,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81091], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___81082,output_schema81077_81083,input_schema81078_81084,input_checker81079_81085,output_checker81080_81086))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema81077_81083,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema81078_81084], null)));
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
var G__81092__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__81092 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81093__i = 0, G__81093__a = new Array(arguments.length -  0);
while (G__81093__i < G__81093__a.length) {G__81093__a[G__81093__i] = arguments[G__81093__i + 0]; ++G__81093__i;}
  args = new cljs.core.IndexedSeq(G__81093__a,0);
} 
return G__81092__delegate.call(this,args);};
G__81092.cljs$lang$maxFixedArity = 0;
G__81092.cljs$lang$applyTo = (function (arglist__81094){
var args = cljs.core.seq(arglist__81094);
return G__81092__delegate(args);
});
G__81092.cljs$core$IFn$_invoke$arity$variadic = G__81092__delegate;
return G__81092;
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
var len__25826__auto___81096 = arguments.length;
var i__25827__auto___81097 = (0);
while(true){
if((i__25827__auto___81097 < len__25826__auto___81096)){
args__25833__auto__.push((arguments[i__25827__auto___81097]));

var G__81098 = (i__25827__auto___81097 + (1));
i__25827__auto___81097 = G__81098;
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

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq81095){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq81095));
});

/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = {};
var seq__81107_81111 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__81108_81112 = null;
var count__81109_81113 = (0);
var i__81110_81114 = (0);
while(true){
if((i__81110_81114 < count__81109_81113)){
var k_81115 = cljs.core._nth.call(null,chunk__81108_81112,i__81110_81114);
if(cljs.core.truth_(arr.hasOwnProperty(k_81115))){
(ret[k_81115] = (arr[k_81115]));
} else {
}

var G__81116 = seq__81107_81111;
var G__81117 = chunk__81108_81112;
var G__81118 = count__81109_81113;
var G__81119 = (i__81110_81114 + (1));
seq__81107_81111 = G__81116;
chunk__81108_81112 = G__81117;
count__81109_81113 = G__81118;
i__81110_81114 = G__81119;
continue;
} else {
var temp__4657__auto___81120 = cljs.core.seq.call(null,seq__81107_81111);
if(temp__4657__auto___81120){
var seq__81107_81121__$1 = temp__4657__auto___81120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81107_81121__$1)){
var c__25562__auto___81122 = cljs.core.chunk_first.call(null,seq__81107_81121__$1);
var G__81123 = cljs.core.chunk_rest.call(null,seq__81107_81121__$1);
var G__81124 = c__25562__auto___81122;
var G__81125 = cljs.core.count.call(null,c__25562__auto___81122);
var G__81126 = (0);
seq__81107_81111 = G__81123;
chunk__81108_81112 = G__81124;
count__81109_81113 = G__81125;
i__81110_81114 = G__81126;
continue;
} else {
var k_81127 = cljs.core.first.call(null,seq__81107_81121__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_81127))){
(ret[k_81127] = (arr[k_81127]));
} else {
}

var G__81128 = cljs.core.next.call(null,seq__81107_81121__$1);
var G__81129 = null;
var G__81130 = (0);
var G__81131 = (0);
seq__81107_81111 = G__81128;
chunk__81108_81112 = G__81129;
count__81109_81113 = G__81130;
i__81110_81114 = G__81131;
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
var args81132 = [];
var len__25826__auto___81135 = arguments.length;
var i__25827__auto___81136 = (0);
while(true){
if((i__25827__auto___81136 < len__25826__auto___81135)){
args81132.push((arguments[i__25827__auto___81136]));

var G__81137 = (i__25827__auto___81136 + (1));
i__25827__auto___81136 = G__81137;
continue;
} else {
}
break;
}

var G__81134 = args81132.length;
switch (G__81134) {
case 1:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81132.length)].join('')));

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
var args81139 = [];
var len__25826__auto___81142 = arguments.length;
var i__25827__auto___81143 = (0);
while(true){
if((i__25827__auto___81143 < len__25826__auto___81142)){
args81139.push((arguments[i__25827__auto___81143]));

var G__81144 = (i__25827__auto___81143 + (1));
i__25827__auto___81143 = G__81144;
continue;
} else {
}
break;
}

var G__81141 = args81139.length;
switch (G__81141) {
case 1:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81139.length)].join('')));

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


//# sourceMappingURL=util.js.map?rel=1478402664322