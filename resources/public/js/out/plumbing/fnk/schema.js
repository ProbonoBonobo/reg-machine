// Compiled by ClojureScript 1.7.122 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__24783__24784__auto__){
if(!((p1__24783__24784__auto__ == null))){
if((false) || (p1__24783__24784__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__24783__24784__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__24783__24784__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__24783__24784__auto__);
}
})], null));
plumbing.fnk.schema.InputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__33722_SHARP_){
return (cljs.core.val.call(null,p1__33722_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__33724 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__33724,(0),null);
var v = cljs.core.nth.call(null,vec__33724,(1),null);
var p = vec__33724;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___33730 = schema.utils.use_fn_validation;
var output_schema33725_33731 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema33726_33732 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33727_33733 = schema.core.checker.call(null,input_schema33726_33732);
var output_checker33728_33734 = schema.core.checker.call(null,output_schema33725_33731);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___33730,output_schema33725_33731,input_schema33726_33732,input_checker33727_33733,output_checker33728_33734){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__33729){
var validate__20540__auto__ = ufv___33730.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33735 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33729], null);
var temp__4425__auto___33736 = input_checker33727_33733.call(null,args__20541__auto___33735);
if(cljs.core.truth_(temp__4425__auto___33736)){
var error__20542__auto___33737 = temp__4425__auto___33736;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__20542__auto___33737)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33726_33732,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33735,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33737], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var k = G__33729;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33738 = output_checker33728_33734.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33738)){
var error__20542__auto___33739 = temp__4425__auto___33738;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__20542__auto___33739)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33725_33731,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33739], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33730,output_schema33725_33731,input_schema33726_33732,input_checker33727_33733,output_checker33728_33734))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema33725_33731,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33726_33732], null)));
var ufv___33745 = schema.utils.use_fn_validation;
var output_schema33740_33746 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema33741_33747 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33742_33748 = schema.core.checker.call(null,input_schema33741_33747);
var output_checker33743_33749 = schema.core.checker.call(null,output_schema33740_33746);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___33745,output_schema33740_33746,input_schema33741_33747,input_checker33742_33748,output_checker33743_33749){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__33744){
var validate__20540__auto__ = ufv___33745.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33750 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33744], null);
var temp__4425__auto___33751 = input_checker33742_33748.call(null,args__20541__auto___33750);
if(cljs.core.truth_(temp__4425__auto___33751)){
var error__20542__auto___33752 = temp__4425__auto___33751;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__20542__auto___33752)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33741_33747,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33750,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33752], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var s = G__33744;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33753 = output_checker33743_33749.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33753)){
var error__20542__auto___33754 = temp__4425__auto___33753;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__20542__auto___33754)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33740_33746,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33754], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33745,output_schema33740_33746,input_schema33741_33747,input_checker33742_33748,output_checker33743_33749))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema33740_33746,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33741_33747], null)));
var ufv___33760 = schema.utils.use_fn_validation;
var output_schema33755_33761 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema33756_33762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker33757_33763 = schema.core.checker.call(null,input_schema33756_33762);
var output_checker33758_33764 = schema.core.checker.call(null,output_schema33755_33761);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___33760,output_schema33755_33761,input_schema33756_33762,input_checker33757_33763,output_checker33758_33764){
return (function plumbing$fnk$schema$split_schema_keys(G__33759){
var validate__20540__auto__ = ufv___33760.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33759], null);
var temp__4425__auto___33766 = input_checker33757_33763.call(null,args__20541__auto___33765);
if(cljs.core.truth_(temp__4425__auto___33766)){
var error__20542__auto___33767 = temp__4425__auto___33766;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__20542__auto___33767)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33756_33762,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33765,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33767], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var s = G__33759;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33768 = output_checker33758_33764.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33768)){
var error__20542__auto___33769 = temp__4425__auto___33768;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__20542__auto___33769)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33755_33761,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33769], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33760,output_schema33755_33761,input_schema33756_33762,input_checker33757_33763,output_checker33758_33764))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema33755_33761,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33756_33762], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__20266__auto__ = [];
var len__20259__auto___33777 = arguments.length;
var i__20260__auto___33778 = (0);
while(true){
if((i__20260__auto___33778 < len__20259__auto___33777)){
args__20266__auto__.push((arguments[i__20260__auto___33778]));

var G__33779 = (i__20260__auto___33778 + (1));
i__20260__auto___33778 = G__33779;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((3) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20267__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__33774){
var vec__33775 = p__33774;
var k = cljs.core.nth.call(null,vec__33775,(0),null);
var v = cljs.core.nth.call(null,vec__33775,(1),null);
var pk = key_project.call(null,k);
var temp__4423__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__33776 = temp__4423__auto__;
var ok = cljs.core.nth.call(null,vec__33776,(0),null);
var ov = cljs.core.nth.call(null,vec__33776,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq33770){
var G__33771 = cljs.core.first.call(null,seq33770);
var seq33770__$1 = cljs.core.next.call(null,seq33770);
var G__33772 = cljs.core.first.call(null,seq33770__$1);
var seq33770__$2 = cljs.core.next.call(null,seq33770__$1);
var G__33773 = cljs.core.first.call(null,seq33770__$2);
var seq33770__$3 = cljs.core.next.call(null,seq33770__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__33771,G__33772,G__33773,seq33770__$3);
});
var ufv___33787 = schema.utils.use_fn_validation;
var output_schema33781_33788 = plumbing.fnk.schema.InputSchema;
var input_schema33782_33789 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker33783_33790 = schema.core.checker.call(null,input_schema33782_33789);
var output_checker33784_33791 = schema.core.checker.call(null,output_schema33781_33788);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___33787,output_schema33781_33788,input_schema33782_33789,input_checker33783_33790,output_checker33784_33791){
return (function plumbing$fnk$schema$union_input_schemata(G__33785,G__33786){
var validate__20540__auto__ = ufv___33787.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33792 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33785,G__33786], null);
var temp__4425__auto___33793 = input_checker33783_33790.call(null,args__20541__auto___33792);
if(cljs.core.truth_(temp__4425__auto___33793)){
var error__20542__auto___33794 = temp__4425__auto___33793;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__20542__auto___33794)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33782_33789,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33792,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33794], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var i1 = G__33785;
var i2 = G__33786;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__20540__auto__,ufv___33787,output_schema33781_33788,input_schema33782_33789,input_checker33783_33790,output_checker33784_33791){
return (function (p1__33780_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__33780_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__33780_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__20540__auto__,ufv___33787,output_schema33781_33788,input_schema33782_33789,input_checker33783_33790,output_checker33784_33791))
,((function (validate__20540__auto__,ufv___33787,output_schema33781_33788,input_schema33782_33789,input_checker33783_33790,output_checker33784_33791){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k1))){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__20540__auto__,ufv___33787,output_schema33781_33788,input_schema33782_33789,input_checker33783_33790,output_checker33784_33791))
,((function (validate__20540__auto__,ufv___33787,output_schema33781_33788,input_schema33782_33789,input_checker33783_33790,output_checker33784_33791){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__19189__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__19189__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__19189__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__20540__auto__,ufv___33787,output_schema33781_33788,input_schema33782_33789,input_checker33783_33790,output_checker33784_33791))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33795 = output_checker33784_33791.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33795)){
var error__20542__auto___33796 = temp__4425__auto___33795;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__20542__auto___33796)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33781_33788,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33796], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33787,output_schema33781_33788,input_schema33782_33789,input_checker33783_33790,output_checker33784_33791))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema33781_33788,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33782_33789], null)));
var ufv___33802 = schema.utils.use_fn_validation;
var output_schema33797_33803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema33798_33804 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker33799_33805 = schema.core.checker.call(null,input_schema33798_33804);
var output_checker33800_33806 = schema.core.checker.call(null,output_schema33797_33803);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___33802,output_schema33797_33803,input_schema33798_33804,input_checker33799_33805,output_checker33800_33806){
return (function plumbing$fnk$schema$required_toplevel_keys(G__33801){
var validate__20540__auto__ = ufv___33802.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33807 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33801], null);
var temp__4425__auto___33808 = input_checker33799_33805.call(null,args__20541__auto___33807);
if(cljs.core.truth_(temp__4425__auto___33808)){
var error__20542__auto___33809 = temp__4425__auto___33808;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__20542__auto___33809)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33798_33804,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33807,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33809], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var input_schema = G__33801;
while(true){
return cljs.core.keep.call(null,((function (validate__20540__auto__,ufv___33802,output_schema33797_33803,input_schema33798_33804,input_checker33799_33805,output_checker33800_33806){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__20540__auto__,ufv___33802,output_schema33797_33803,input_schema33798_33804,input_checker33799_33805,output_checker33800_33806))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33810 = output_checker33800_33806.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33810)){
var error__20542__auto___33811 = temp__4425__auto___33810;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__20542__auto___33811)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33797_33803,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33811], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33802,output_schema33797_33803,input_schema33798_33804,input_checker33799_33805,output_checker33800_33806))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema33797_33803,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33798_33804], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19973__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__33820(s__33821){
return (new cljs.core.LazySeq(null,(function (){
var s__33821__$1 = s__33821;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33821__$1);
if(temp__4425__auto__){
var s__33821__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33821__$2)){
var c__19971__auto__ = cljs.core.chunk_first.call(null,s__33821__$2);
var size__19972__auto__ = cljs.core.count.call(null,c__19971__auto__);
var b__33823 = cljs.core.chunk_buffer.call(null,size__19972__auto__);
if((function (){var i__33822 = (0);
while(true){
if((i__33822 < size__19972__auto__)){
var vec__33826 = cljs.core._nth.call(null,c__19971__auto__,i__33822);
var k = cljs.core.nth.call(null,vec__33826,(0),null);
var v = cljs.core.nth.call(null,vec__33826,(1),null);
cljs.core.chunk_append.call(null,b__33823,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__33828 = (i__33822 + (1));
i__33822 = G__33828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33823),plumbing$fnk$schema$guess_expr_output_schema_$_iter__33820.call(null,cljs.core.chunk_rest.call(null,s__33821__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33823),null);
}
} else {
var vec__33827 = cljs.core.first.call(null,s__33821__$2);
var k = cljs.core.nth.call(null,vec__33827,(0),null);
var v = cljs.core.nth.call(null,vec__33827,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__33820.call(null,cljs.core.rest.call(null,s__33821__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19973__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19973__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__33837(s__33838){
return (new cljs.core.LazySeq(null,(function (){
var s__33838__$1 = s__33838;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33838__$1);
if(temp__4425__auto__){
var s__33838__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33838__$2)){
var c__19971__auto__ = cljs.core.chunk_first.call(null,s__33838__$2);
var size__19972__auto__ = cljs.core.count.call(null,c__19971__auto__);
var b__33840 = cljs.core.chunk_buffer.call(null,size__19972__auto__);
if((function (){var i__33839 = (0);
while(true){
if((i__33839 < size__19972__auto__)){
var vec__33843 = cljs.core._nth.call(null,c__19971__auto__,i__33839);
var k = cljs.core.nth.call(null,vec__33843,(0),null);
var v = cljs.core.nth.call(null,vec__33843,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__19201__auto__ = required_QMARK_;
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__33840,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__33845 = (i__33839 + (1));
i__33839 = G__33845;
continue;
} else {
var G__33846 = (i__33839 + (1));
i__33839 = G__33846;
continue;
}
} else {
var G__33847 = (i__33839 + (1));
i__33839 = G__33847;
continue;
}
} else {
var G__33848 = (i__33839 + (1));
i__33839 = G__33848;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33840),plumbing$fnk$schema$schema_diff_$_iter__33837.call(null,cljs.core.chunk_rest.call(null,s__33838__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33840),null);
}
} else {
var vec__33844 = cljs.core.first.call(null,s__33838__$2);
var k = cljs.core.nth.call(null,vec__33844,(0),null);
var v = cljs.core.nth.call(null,vec__33844,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__19201__auto__ = required_QMARK_;
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__33837.call(null,cljs.core.rest.call(null,s__33838__$2)));
} else {
var G__33849 = cljs.core.rest.call(null,s__33838__$2);
s__33838__$1 = G__33849;
continue;
}
} else {
var G__33850 = cljs.core.rest.call(null,s__33838__$2);
s__33838__$1 = G__33850;
continue;
}
} else {
var G__33851 = cljs.core.rest.call(null,s__33838__$2);
s__33838__$1 = G__33851;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19973__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___33874 = schema.utils.use_fn_validation;
var output_schema33852_33875 = schema.core.Any;
var input_schema33853_33876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker33854_33877 = schema.core.checker.call(null,input_schema33853_33876);
var output_checker33855_33878 = schema.core.checker.call(null,output_schema33852_33875);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___33874,output_schema33852_33875,input_schema33853_33876,input_checker33854_33877,output_checker33855_33878){
return (function plumbing$fnk$schema$compose_schemata(G__33856,G__33857){
var validate__20540__auto__ = true;
if(validate__20540__auto__){
var args__20541__auto___33879 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33856,G__33857], null);
var temp__4425__auto___33880 = input_checker33854_33877.call(null,args__20541__auto___33879);
if(cljs.core.truth_(temp__4425__auto___33880)){
var error__20542__auto___33881 = temp__4425__auto___33880;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__20542__auto___33881)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33853_33876,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33879,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33881], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var G__33868 = G__33856;
var vec__33870 = G__33868;
var i2 = cljs.core.nth.call(null,vec__33870,(0),null);
var o2 = cljs.core.nth.call(null,vec__33870,(1),null);
var G__33869 = G__33857;
var vec__33871 = G__33869;
var i1 = cljs.core.nth.call(null,vec__33871,(0),null);
var o1 = cljs.core.nth.call(null,vec__33871,(1),null);
var G__33868__$1 = G__33868;
var G__33869__$1 = G__33869;
while(true){
var vec__33872 = G__33868__$1;
var i2__$1 = cljs.core.nth.call(null,vec__33872,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__33872,(1),null);
var vec__33873 = G__33869__$1;
var i1__$1 = cljs.core.nth.call(null,vec__33873,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__33873,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__20540__auto__){
var temp__4425__auto___33882 = output_checker33855_33878.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33882)){
var error__20542__auto___33883 = temp__4425__auto___33882;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__20542__auto___33883)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33852_33875,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33883], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33874,output_schema33852_33875,input_schema33853_33876,input_checker33854_33877,output_checker33855_33878))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema33852_33875,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33853_33876], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___33962 = schema.utils.use_fn_validation;
var output_schema33884_33963 = schema.core.Any;
var input_schema33885_33964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker33886_33965 = schema.core.checker.call(null,input_schema33885_33964);
var output_checker33887_33966 = schema.core.checker.call(null,output_schema33884_33963);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___33962,output_schema33884_33963,input_schema33885_33964,input_checker33886_33965,output_checker33887_33966){
return (function plumbing$fnk$schema$split_schema(G__33888,G__33889){
var validate__20540__auto__ = ufv___33962.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33967 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33888,G__33889], null);
var temp__4425__auto___33968 = input_checker33886_33965.call(null,args__20541__auto___33967);
if(cljs.core.truth_(temp__4425__auto___33968)){
var error__20542__auto___33969 = temp__4425__auto___33968;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__20542__auto___33969)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33885_33964,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33967,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33969], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var s = G__33888;
var ks = G__33889;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__19973__auto__ = ((function (ks__$1,validate__20540__auto__,ufv___33962,output_schema33884_33963,input_schema33885_33964,input_checker33886_33965,output_checker33887_33966){
return (function plumbing$fnk$schema$split_schema_$_iter__33926(s__33927){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__20540__auto__,ufv___33962,output_schema33884_33963,input_schema33885_33964,input_checker33886_33965,output_checker33887_33966){
return (function (){
var s__33927__$1 = s__33927;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33927__$1);
if(temp__4425__auto__){
var s__33927__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33927__$2)){
var c__19971__auto__ = cljs.core.chunk_first.call(null,s__33927__$2);
var size__19972__auto__ = cljs.core.count.call(null,c__19971__auto__);
var b__33929 = cljs.core.chunk_buffer.call(null,size__19972__auto__);
if((function (){var i__33928 = (0);
while(true){
if((i__33928 < size__19972__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__19971__auto__,i__33928);
cljs.core.chunk_append.call(null,b__33929,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19973__auto__ = ((function (i__33928,in_QMARK_,c__19971__auto__,size__19972__auto__,b__33929,s__33927__$2,temp__4425__auto__,ks__$1,validate__20540__auto__,ufv___33962,output_schema33884_33963,input_schema33885_33964,input_checker33886_33965,output_checker33887_33966){
return (function plumbing$fnk$schema$split_schema_$_iter__33926_$_iter__33946(s__33947){
return (new cljs.core.LazySeq(null,((function (i__33928,in_QMARK_,c__19971__auto__,size__19972__auto__,b__33929,s__33927__$2,temp__4425__auto__,ks__$1,validate__20540__auto__,ufv___33962,output_schema33884_33963,input_schema33885_33964,input_checker33886_33965,output_checker33887_33966){
return (function (){
var s__33947__$1 = s__33947;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__33947__$1);
if(temp__4425__auto____$1){
var s__33947__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33947__$2)){
var c__19971__auto____$1 = cljs.core.chunk_first.call(null,s__33947__$2);
var size__19972__auto____$1 = cljs.core.count.call(null,c__19971__auto____$1);
var b__33949 = cljs.core.chunk_buffer.call(null,size__19972__auto____$1);
if((function (){var i__33948 = (0);
while(true){
if((i__33948 < size__19972__auto____$1)){
var vec__33952 = cljs.core._nth.call(null,c__19971__auto____$1,i__33948);
var k = cljs.core.nth.call(null,vec__33952,(0),null);
var v = cljs.core.nth.call(null,vec__33952,(1),null);
if(cljs.core.truth_((function (){var and__19189__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__19189__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__19189__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__33949,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__33970 = (i__33948 + (1));
i__33948 = G__33970;
continue;
} else {
var G__33971 = (i__33948 + (1));
i__33948 = G__33971;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33949),plumbing$fnk$schema$split_schema_$_iter__33926_$_iter__33946.call(null,cljs.core.chunk_rest.call(null,s__33947__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33949),null);
}
} else {
var vec__33953 = cljs.core.first.call(null,s__33947__$2);
var k = cljs.core.nth.call(null,vec__33953,(0),null);
var v = cljs.core.nth.call(null,vec__33953,(1),null);
if(cljs.core.truth_((function (){var and__19189__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__19189__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__19189__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__33926_$_iter__33946.call(null,cljs.core.rest.call(null,s__33947__$2)));
} else {
var G__33972 = cljs.core.rest.call(null,s__33947__$2);
s__33947__$1 = G__33972;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__33928,in_QMARK_,c__19971__auto__,size__19972__auto__,b__33929,s__33927__$2,temp__4425__auto__,ks__$1,validate__20540__auto__,ufv___33962,output_schema33884_33963,input_schema33885_33964,input_checker33886_33965,output_checker33887_33966))
,null,null));
});})(i__33928,in_QMARK_,c__19971__auto__,size__19972__auto__,b__33929,s__33927__$2,temp__4425__auto__,ks__$1,validate__20540__auto__,ufv___33962,output_schema33884_33963,input_schema33885_33964,input_checker33886_33965,output_checker33887_33966))
;
return iter__19973__auto__.call(null,s);
})()));

var G__33973 = (i__33928 + (1));
i__33928 = G__33973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33929),plumbing$fnk$schema$split_schema_$_iter__33926.call(null,cljs.core.chunk_rest.call(null,s__33927__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33929),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__33927__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19973__auto__ = ((function (in_QMARK_,s__33927__$2,temp__4425__auto__,ks__$1,validate__20540__auto__,ufv___33962,output_schema33884_33963,input_schema33885_33964,input_checker33886_33965,output_checker33887_33966){
return (function plumbing$fnk$schema$split_schema_$_iter__33926_$_iter__33954(s__33955){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__33927__$2,temp__4425__auto__,ks__$1,validate__20540__auto__,ufv___33962,output_schema33884_33963,input_schema33885_33964,input_checker33886_33965,output_checker33887_33966){
return (function (){
var s__33955__$1 = s__33955;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__33955__$1);
if(temp__4425__auto____$1){
var s__33955__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33955__$2)){
var c__19971__auto__ = cljs.core.chunk_first.call(null,s__33955__$2);
var size__19972__auto__ = cljs.core.count.call(null,c__19971__auto__);
var b__33957 = cljs.core.chunk_buffer.call(null,size__19972__auto__);
if((function (){var i__33956 = (0);
while(true){
if((i__33956 < size__19972__auto__)){
var vec__33960 = cljs.core._nth.call(null,c__19971__auto__,i__33956);
var k = cljs.core.nth.call(null,vec__33960,(0),null);
var v = cljs.core.nth.call(null,vec__33960,(1),null);
if(cljs.core.truth_((function (){var and__19189__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__19189__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__19189__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__33957,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__33974 = (i__33956 + (1));
i__33956 = G__33974;
continue;
} else {
var G__33975 = (i__33956 + (1));
i__33956 = G__33975;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33957),plumbing$fnk$schema$split_schema_$_iter__33926_$_iter__33954.call(null,cljs.core.chunk_rest.call(null,s__33955__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33957),null);
}
} else {
var vec__33961 = cljs.core.first.call(null,s__33955__$2);
var k = cljs.core.nth.call(null,vec__33961,(0),null);
var v = cljs.core.nth.call(null,vec__33961,(1),null);
if(cljs.core.truth_((function (){var and__19189__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__19189__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__19189__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__33926_$_iter__33954.call(null,cljs.core.rest.call(null,s__33955__$2)));
} else {
var G__33976 = cljs.core.rest.call(null,s__33955__$2);
s__33955__$1 = G__33976;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__33927__$2,temp__4425__auto__,ks__$1,validate__20540__auto__,ufv___33962,output_schema33884_33963,input_schema33885_33964,input_checker33886_33965,output_checker33887_33966))
,null,null));
});})(in_QMARK_,s__33927__$2,temp__4425__auto__,ks__$1,validate__20540__auto__,ufv___33962,output_schema33884_33963,input_schema33885_33964,input_checker33886_33965,output_checker33887_33966))
;
return iter__19973__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__33926.call(null,cljs.core.rest.call(null,s__33927__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__20540__auto__,ufv___33962,output_schema33884_33963,input_schema33885_33964,input_checker33886_33965,output_checker33887_33966))
,null,null));
});})(ks__$1,validate__20540__auto__,ufv___33962,output_schema33884_33963,input_schema33885_33964,input_checker33886_33965,output_checker33887_33966))
;
return iter__19973__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33977 = output_checker33887_33966.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33977)){
var error__20542__auto___33978 = temp__4425__auto___33977;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__20542__auto___33978)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33884_33963,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33978], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33962,output_schema33884_33963,input_schema33885_33964,input_checker33886_33965,output_checker33887_33966))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema33884_33963,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33885_33964], null)));
var ufv___34009 = schema.utils.use_fn_validation;
var output_schema33979_34010 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema33980_34011 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker33981_34012 = schema.core.checker.call(null,input_schema33980_34011);
var output_checker33982_34013 = schema.core.checker.call(null,output_schema33979_34010);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___34009,output_schema33979_34010,input_schema33980_34011,input_checker33981_34012,output_checker33982_34013){
return (function plumbing$fnk$schema$sequence_schemata(G__33983,G__33984){
var validate__20540__auto__ = ufv___34009.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___34014 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33983,G__33984], null);
var temp__4425__auto___34015 = input_checker33981_34012.call(null,args__20541__auto___34014);
if(cljs.core.truth_(temp__4425__auto___34015)){
var error__20542__auto___34016 = temp__4425__auto___34015;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__20542__auto___34016)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33980_34011,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___34014,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___34016], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var G__34000 = G__33983;
var vec__34002 = G__34000;
var i1 = cljs.core.nth.call(null,vec__34002,(0),null);
var o1 = cljs.core.nth.call(null,vec__34002,(1),null);
var G__34001 = G__33984;
var vec__34003 = G__34001;
var k = cljs.core.nth.call(null,vec__34003,(0),null);
var vec__34004 = cljs.core.nth.call(null,vec__34003,(1),null);
var i2 = cljs.core.nth.call(null,vec__34004,(0),null);
var o2 = cljs.core.nth.call(null,vec__34004,(1),null);
var G__34000__$1 = G__34000;
var G__34001__$1 = G__34001;
while(true){
var vec__34005 = G__34000__$1;
var i1__$1 = cljs.core.nth.call(null,vec__34005,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__34005,(1),null);
var vec__34006 = G__34001__$1;
var k__$1 = cljs.core.nth.call(null,vec__34006,(0),null);
var vec__34007 = cljs.core.nth.call(null,vec__34006,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__34007,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__34007,(1),null);
if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__34008 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__34008,(0),null);
var unused = cljs.core.nth.call(null,vec__34008,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___34017 = output_checker33982_34013.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___34017)){
var error__20542__auto___34018 = temp__4425__auto___34017;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__20542__auto___34018)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33979_34010,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___34018], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___34009,output_schema33979_34010,input_schema33980_34011,input_checker33981_34012,output_checker33982_34013))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema33979_34010,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33980_34011], null)));

//# sourceMappingURL=schema.js.map?rel=1444632656944