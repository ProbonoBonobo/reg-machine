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
var ufv___47152 = schema.utils.use_fn_validation;
var output_schema47147_47153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema47148_47154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker47149_47155 = schema.core.checker.call(null,input_schema47148_47154);
var output_checker47150_47156 = schema.core.checker.call(null,output_schema47147_47153);
/**
 * Inputs: [x :- s/Any]
 *   Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___47152,output_schema47147_47153,input_schema47148_47154,input_checker47149_47155,output_checker47150_47156){
return (function om_bootstrap$util$collectify(G__47151){
var validate__30032__auto__ = ufv___47152.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___47157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47151], null);
var temp__4657__auto___47158 = input_checker47149_47155.call(null,args__30033__auto___47157);
if(cljs.core.truth_(temp__4657__auto___47158)){
var error__30034__auto___47159 = temp__4657__auto___47158;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__30034__auto___47159)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47148_47154,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___47157,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47159], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var x = G__47151;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___47160 = output_checker47150_47156.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___47160)){
var error__30034__auto___47161 = temp__4657__auto___47160;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__30034__auto___47161)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47147_47153,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47161], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___47152,output_schema47147_47153,input_schema47148_47154,input_checker47149_47155,output_checker47150_47156))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema47147_47153,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47148_47154], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 *   the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___47167 = schema.utils.use_fn_validation;
var output_schema47162_47168 = schema.core.Bool;
var input_schema47163_47169 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker47164_47170 = schema.core.checker.call(null,input_schema47163_47169);
var output_checker47165_47171 = schema.core.checker.call(null,output_schema47162_47168);
/**
 * Inputs: [x]
 *   Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___47167,output_schema47162_47168,input_schema47163_47169,input_checker47164_47170,output_checker47165_47171){
return (function om_bootstrap$util$om_component_QMARK_(G__47166){
var validate__30032__auto__ = ufv___47167.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___47172 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47166], null);
var temp__4657__auto___47173 = input_checker47164_47170.call(null,args__30033__auto___47172);
if(cljs.core.truth_(temp__4657__auto___47173)){
var error__30034__auto___47174 = temp__4657__auto___47173;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___47174)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47163_47169,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___47172,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47174], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var x = G__47166;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___47175 = output_checker47165_47171.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___47175)){
var error__30034__auto___47176 = temp__4657__auto___47175;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___47176)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47162_47168,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47176], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___47167,output_schema47162_47168,input_schema47163_47169,input_checker47164_47170,output_checker47165_47171))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema47162_47168,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47163_47169], null)));
var ufv___47182 = schema.utils.use_fn_validation;
var output_schema47177_47183 = schema.core.Bool;
var input_schema47178_47184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker47179_47185 = schema.core.checker.call(null,input_schema47178_47184);
var output_checker47180_47186 = schema.core.checker.call(null,output_schema47177_47183);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   TODO: Once Om updates its externs to include this file, we can
 *   remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___47182,output_schema47177_47183,input_schema47178_47184,input_checker47179_47185,output_checker47180_47186){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__47181){
var validate__30032__auto__ = ufv___47182.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___47187 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47181], null);
var temp__4657__auto___47188 = input_checker47179_47185.call(null,args__30033__auto___47187);
if(cljs.core.truth_(temp__4657__auto___47188)){
var error__30034__auto___47189 = temp__4657__auto___47188;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__30034__auto___47189)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47178_47184,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___47187,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47189], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var child = G__47181;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___47190 = output_checker47180_47186.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___47190)){
var error__30034__auto___47191 = temp__4657__auto___47190;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__30034__auto___47191)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47177_47183,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47191], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___47182,output_schema47177_47183,input_schema47178_47184,input_checker47179_47185,output_checker47180_47186))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema47177_47183,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47178_47184], null)));
var ufv___47197 = schema.utils.use_fn_validation;
var output_schema47192_47198 = schema.core.Bool;
var input_schema47193_47199 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker47194_47200 = schema.core.checker.call(null,input_schema47193_47199);
var output_checker47195_47201 = schema.core.checker.call(null,output_schema47192_47198);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied argument is a valid React component,
 *   false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___47197,output_schema47192_47198,input_schema47193_47199,input_checker47194_47200,output_checker47195_47201){
return (function om_bootstrap$util$valid_component_QMARK_(G__47196){
var validate__30032__auto__ = ufv___47197.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___47202 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47196], null);
var temp__4657__auto___47203 = input_checker47194_47200.call(null,args__30033__auto___47202);
if(cljs.core.truth_(temp__4657__auto___47203)){
var error__30034__auto___47204 = temp__4657__auto___47203;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__30034__auto___47204)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47193_47199,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___47202,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47204], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var child = G__47196;
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
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___47205 = output_checker47195_47201.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___47205)){
var error__30034__auto___47206 = temp__4657__auto___47205;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__30034__auto___47206)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47192_47198,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47206], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___47197,output_schema47192_47198,input_schema47193_47199,input_checker47194_47200,output_checker47195_47201))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema47192_47198,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47193_47199], null)));
var ufv___47212 = schema.utils.use_fn_validation;
var output_schema47207_47213 = schema.core.Bool;
var input_schema47208_47214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker47209_47215 = schema.core.checker.call(null,input_schema47208_47214);
var output_checker47210_47216 = schema.core.checker.call(null,output_schema47207_47213);
/**
 * Inputs: [children]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied sequence contains some valid React component,
 *   false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___47212,output_schema47207_47213,input_schema47208_47214,input_checker47209_47215,output_checker47210_47216){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__47211){
var validate__30032__auto__ = ufv___47212.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___47217 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47211], null);
var temp__4657__auto___47218 = input_checker47209_47215.call(null,args__30033__auto___47217);
if(cljs.core.truth_(temp__4657__auto___47218)){
var error__30034__auto___47219 = temp__4657__auto___47218;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__30034__auto___47219)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47208_47214,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___47217,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47219], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var children = G__47211;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___47220 = output_checker47210_47216.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___47220)){
var error__30034__auto___47221 = temp__4657__auto___47220;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__30034__auto___47221)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47207_47213,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47221], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___47212,output_schema47207_47213,input_schema47208_47214,input_checker47209_47215,output_checker47210_47216))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema47207_47213,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47208_47214], null)));
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
var G__47222__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__47222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47223__i = 0, G__47223__a = new Array(arguments.length -  0);
while (G__47223__i < G__47223__a.length) {G__47223__a[G__47223__i] = arguments[G__47223__i + 0]; ++G__47223__i;}
  args = new cljs.core.IndexedSeq(G__47223__a,0);
} 
return G__47222__delegate.call(this,args);};
G__47222.cljs$lang$maxFixedArity = 0;
G__47222.cljs$lang$applyTo = (function (arglist__47224){
var args = cljs.core.seq(arglist__47224);
return G__47222__delegate(args);
});
G__47222.cljs$core$IFn$_invoke$arity$variadic = G__47222__delegate;
return G__47222;
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
var len__25826__auto___47226 = arguments.length;
var i__25827__auto___47227 = (0);
while(true){
if((i__25827__auto___47227 < len__25826__auto___47226)){
args__25833__auto__.push((arguments[i__25827__auto___47227]));

var G__47228 = (i__25827__auto___47227 + (1));
i__25827__auto___47227 = G__47228;
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

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq47225){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47225));
});

/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = {};
var seq__47237_47241 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__47238_47242 = null;
var count__47239_47243 = (0);
var i__47240_47244 = (0);
while(true){
if((i__47240_47244 < count__47239_47243)){
var k_47245 = cljs.core._nth.call(null,chunk__47238_47242,i__47240_47244);
if(cljs.core.truth_(arr.hasOwnProperty(k_47245))){
(ret[k_47245] = (arr[k_47245]));
} else {
}

var G__47246 = seq__47237_47241;
var G__47247 = chunk__47238_47242;
var G__47248 = count__47239_47243;
var G__47249 = (i__47240_47244 + (1));
seq__47237_47241 = G__47246;
chunk__47238_47242 = G__47247;
count__47239_47243 = G__47248;
i__47240_47244 = G__47249;
continue;
} else {
var temp__4657__auto___47250 = cljs.core.seq.call(null,seq__47237_47241);
if(temp__4657__auto___47250){
var seq__47237_47251__$1 = temp__4657__auto___47250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47237_47251__$1)){
var c__25562__auto___47252 = cljs.core.chunk_first.call(null,seq__47237_47251__$1);
var G__47253 = cljs.core.chunk_rest.call(null,seq__47237_47251__$1);
var G__47254 = c__25562__auto___47252;
var G__47255 = cljs.core.count.call(null,c__25562__auto___47252);
var G__47256 = (0);
seq__47237_47241 = G__47253;
chunk__47238_47242 = G__47254;
count__47239_47243 = G__47255;
i__47240_47244 = G__47256;
continue;
} else {
var k_47257 = cljs.core.first.call(null,seq__47237_47251__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_47257))){
(ret[k_47257] = (arr[k_47257]));
} else {
}

var G__47258 = cljs.core.next.call(null,seq__47237_47251__$1);
var G__47259 = null;
var G__47260 = (0);
var G__47261 = (0);
seq__47237_47241 = G__47258;
chunk__47238_47242 = G__47259;
count__47239_47243 = G__47260;
i__47240_47244 = G__47261;
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
var args47262 = [];
var len__25826__auto___47265 = arguments.length;
var i__25827__auto___47266 = (0);
while(true){
if((i__25827__auto___47266 < len__25826__auto___47265)){
args47262.push((arguments[i__25827__auto___47266]));

var G__47267 = (i__25827__auto___47266 + (1));
i__25827__auto___47266 = G__47267;
continue;
} else {
}
break;
}

var G__47264 = args47262.length;
switch (G__47264) {
case 1:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47262.length)].join('')));

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
var args47269 = [];
var len__25826__auto___47272 = arguments.length;
var i__25827__auto___47273 = (0);
while(true){
if((i__25827__auto___47273 < len__25826__auto___47272)){
args47269.push((arguments[i__25827__auto___47273]));

var G__47274 = (i__25827__auto___47273 + (1));
i__25827__auto___47273 = G__47274;
continue;
} else {
}
break;
}

var G__47271 = args47269.length;
switch (G__47271) {
case 1:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47269.length)].join('')));

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


//# sourceMappingURL=util.js.map?rel=1478445847852