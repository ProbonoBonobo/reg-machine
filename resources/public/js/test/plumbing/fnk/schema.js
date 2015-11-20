// Compiled by ClojureScript 1.7.122 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__11140__11141__auto__){
if(!((p1__11140__11141__auto__ == null))){
if((false) || (p1__11140__11141__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__11140__11141__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__11140__11141__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__11140__11141__auto__);
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
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__25796_SHARP_){
return (cljs.core.val.call(null,p1__25796_SHARP_) > (1));
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

var vec__25798 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__25798,(0),null);
var v = cljs.core.nth.call(null,vec__25798,(1),null);
var p = vec__25798;
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
var ufv___25804 = schema.utils.use_fn_validation;
var output_schema25799_25805 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema25800_25806 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker25801_25807 = schema.core.checker.call(null,input_schema25800_25806);
var output_checker25802_25808 = schema.core.checker.call(null,output_schema25799_25805);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___25804,output_schema25799_25805,input_schema25800_25806,input_checker25801_25807,output_checker25802_25808){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__25803){
var validate__10213__auto__ = ufv___25804.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___25809 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25803], null);
var temp__4425__auto___25810 = input_checker25801_25807.call(null,args__10214__auto___25809);
if(cljs.core.truth_(temp__4425__auto___25810)){
var error__10215__auto___25811 = temp__4425__auto___25810;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__10215__auto___25811)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25800_25806,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___25809,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___25811], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var k = G__25803;
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
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___25812 = output_checker25802_25808.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___25812)){
var error__10215__auto___25813 = temp__4425__auto___25812;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__10215__auto___25813)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25799_25805,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___25813], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___25804,output_schema25799_25805,input_schema25800_25806,input_checker25801_25807,output_checker25802_25808))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema25799_25805,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25800_25806], null)));
var ufv___25819 = schema.utils.use_fn_validation;
var output_schema25814_25820 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema25815_25821 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker25816_25822 = schema.core.checker.call(null,input_schema25815_25821);
var output_checker25817_25823 = schema.core.checker.call(null,output_schema25814_25820);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___25819,output_schema25814_25820,input_schema25815_25821,input_checker25816_25822,output_checker25817_25823){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__25818){
var validate__10213__auto__ = ufv___25819.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___25824 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25818], null);
var temp__4425__auto___25825 = input_checker25816_25822.call(null,args__10214__auto___25824);
if(cljs.core.truth_(temp__4425__auto___25825)){
var error__10215__auto___25826 = temp__4425__auto___25825;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__10215__auto___25826)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25815_25821,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___25824,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___25826], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var s = G__25818;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___25827 = output_checker25817_25823.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___25827)){
var error__10215__auto___25828 = temp__4425__auto___25827;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__10215__auto___25828)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25814_25820,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___25828], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___25819,output_schema25814_25820,input_schema25815_25821,input_checker25816_25822,output_checker25817_25823))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema25814_25820,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25815_25821], null)));
var ufv___25834 = schema.utils.use_fn_validation;
var output_schema25829_25835 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema25830_25836 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker25831_25837 = schema.core.checker.call(null,input_schema25830_25836);
var output_checker25832_25838 = schema.core.checker.call(null,output_schema25829_25835);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___25834,output_schema25829_25835,input_schema25830_25836,input_checker25831_25837,output_checker25832_25838){
return (function plumbing$fnk$schema$split_schema_keys(G__25833){
var validate__10213__auto__ = ufv___25834.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___25839 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25833], null);
var temp__4425__auto___25840 = input_checker25831_25837.call(null,args__10214__auto___25839);
if(cljs.core.truth_(temp__4425__auto___25840)){
var error__10215__auto___25841 = temp__4425__auto___25840;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__10215__auto___25841)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25830_25836,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___25839,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___25841], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var s = G__25833;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___25842 = output_checker25832_25838.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___25842)){
var error__10215__auto___25843 = temp__4425__auto___25842;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__10215__auto___25843)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25829_25835,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___25843], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___25834,output_schema25829_25835,input_schema25830_25836,input_checker25831_25837,output_checker25832_25838))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema25829_25835,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25830_25836], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__5626__auto__ = [];
var len__5619__auto___25851 = arguments.length;
var i__5620__auto___25852 = (0);
while(true){
if((i__5620__auto___25852 < len__5619__auto___25851)){
args__5626__auto__.push((arguments[i__5620__auto___25852]));

var G__25853 = (i__5620__auto___25852 + (1));
i__5620__auto___25852 = G__25853;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((3) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5627__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__25848){
var vec__25849 = p__25848;
var k = cljs.core.nth.call(null,vec__25849,(0),null);
var v = cljs.core.nth.call(null,vec__25849,(1),null);
var pk = key_project.call(null,k);
var temp__4423__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__25850 = temp__4423__auto__;
var ok = cljs.core.nth.call(null,vec__25850,(0),null);
var ov = cljs.core.nth.call(null,vec__25850,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq25844){
var G__25845 = cljs.core.first.call(null,seq25844);
var seq25844__$1 = cljs.core.next.call(null,seq25844);
var G__25846 = cljs.core.first.call(null,seq25844__$1);
var seq25844__$2 = cljs.core.next.call(null,seq25844__$1);
var G__25847 = cljs.core.first.call(null,seq25844__$2);
var seq25844__$3 = cljs.core.next.call(null,seq25844__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__25845,G__25846,G__25847,seq25844__$3);
});
var ufv___25861 = schema.utils.use_fn_validation;
var output_schema25855_25862 = plumbing.fnk.schema.InputSchema;
var input_schema25856_25863 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker25857_25864 = schema.core.checker.call(null,input_schema25856_25863);
var output_checker25858_25865 = schema.core.checker.call(null,output_schema25855_25862);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___25861,output_schema25855_25862,input_schema25856_25863,input_checker25857_25864,output_checker25858_25865){
return (function plumbing$fnk$schema$union_input_schemata(G__25859,G__25860){
var validate__10213__auto__ = ufv___25861.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___25866 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25859,G__25860], null);
var temp__4425__auto___25867 = input_checker25857_25864.call(null,args__10214__auto___25866);
if(cljs.core.truth_(temp__4425__auto___25867)){
var error__10215__auto___25868 = temp__4425__auto___25867;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__10215__auto___25868)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25856_25863,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___25866,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___25868], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var i1 = G__25859;
var i2 = G__25860;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__10213__auto__,ufv___25861,output_schema25855_25862,input_schema25856_25863,input_checker25857_25864,output_checker25858_25865){
return (function (p1__25854_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__25854_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__25854_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__10213__auto__,ufv___25861,output_schema25855_25862,input_schema25856_25863,input_checker25857_25864,output_checker25858_25865))
,((function (validate__10213__auto__,ufv___25861,output_schema25855_25862,input_schema25856_25863,input_checker25857_25864,output_checker25858_25865){
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
});})(validate__10213__auto__,ufv___25861,output_schema25855_25862,input_schema25856_25863,input_checker25857_25864,output_checker25858_25865))
,((function (validate__10213__auto__,ufv___25861,output_schema25855_25862,input_schema25856_25863,input_checker25857_25864,output_checker25858_25865){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__4549__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__4549__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__4549__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__10213__auto__,ufv___25861,output_schema25855_25862,input_schema25856_25863,input_checker25857_25864,output_checker25858_25865))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___25869 = output_checker25858_25865.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___25869)){
var error__10215__auto___25870 = temp__4425__auto___25869;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__10215__auto___25870)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25855_25862,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___25870], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___25861,output_schema25855_25862,input_schema25856_25863,input_checker25857_25864,output_checker25858_25865))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema25855_25862,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25856_25863], null)));
var ufv___25876 = schema.utils.use_fn_validation;
var output_schema25871_25877 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema25872_25878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker25873_25879 = schema.core.checker.call(null,input_schema25872_25878);
var output_checker25874_25880 = schema.core.checker.call(null,output_schema25871_25877);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___25876,output_schema25871_25877,input_schema25872_25878,input_checker25873_25879,output_checker25874_25880){
return (function plumbing$fnk$schema$required_toplevel_keys(G__25875){
var validate__10213__auto__ = ufv___25876.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___25881 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25875], null);
var temp__4425__auto___25882 = input_checker25873_25879.call(null,args__10214__auto___25881);
if(cljs.core.truth_(temp__4425__auto___25882)){
var error__10215__auto___25883 = temp__4425__auto___25882;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__10215__auto___25883)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25872_25878,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___25881,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___25883], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var input_schema = G__25875;
while(true){
return cljs.core.keep.call(null,((function (validate__10213__auto__,ufv___25876,output_schema25871_25877,input_schema25872_25878,input_checker25873_25879,output_checker25874_25880){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__10213__auto__,ufv___25876,output_schema25871_25877,input_schema25872_25878,input_checker25873_25879,output_checker25874_25880))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___25884 = output_checker25874_25880.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___25884)){
var error__10215__auto___25885 = temp__4425__auto___25884;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__10215__auto___25885)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25871_25877,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___25885], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___25876,output_schema25871_25877,input_schema25872_25878,input_checker25873_25879,output_checker25874_25880))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema25871_25877,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25872_25878], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5333__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__25894(s__25895){
return (new cljs.core.LazySeq(null,(function (){
var s__25895__$1 = s__25895;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25895__$1);
if(temp__4425__auto__){
var s__25895__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25895__$2)){
var c__5331__auto__ = cljs.core.chunk_first.call(null,s__25895__$2);
var size__5332__auto__ = cljs.core.count.call(null,c__5331__auto__);
var b__25897 = cljs.core.chunk_buffer.call(null,size__5332__auto__);
if((function (){var i__25896 = (0);
while(true){
if((i__25896 < size__5332__auto__)){
var vec__25900 = cljs.core._nth.call(null,c__5331__auto__,i__25896);
var k = cljs.core.nth.call(null,vec__25900,(0),null);
var v = cljs.core.nth.call(null,vec__25900,(1),null);
cljs.core.chunk_append.call(null,b__25897,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__25902 = (i__25896 + (1));
i__25896 = G__25902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25897),plumbing$fnk$schema$guess_expr_output_schema_$_iter__25894.call(null,cljs.core.chunk_rest.call(null,s__25895__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25897),null);
}
} else {
var vec__25901 = cljs.core.first.call(null,s__25895__$2);
var k = cljs.core.nth.call(null,vec__25901,(0),null);
var v = cljs.core.nth.call(null,vec__25901,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__25894.call(null,cljs.core.rest.call(null,s__25895__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5333__auto__.call(null,expr);
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
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5333__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__25911(s__25912){
return (new cljs.core.LazySeq(null,(function (){
var s__25912__$1 = s__25912;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25912__$1);
if(temp__4425__auto__){
var s__25912__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25912__$2)){
var c__5331__auto__ = cljs.core.chunk_first.call(null,s__25912__$2);
var size__5332__auto__ = cljs.core.count.call(null,c__5331__auto__);
var b__25914 = cljs.core.chunk_buffer.call(null,size__5332__auto__);
if((function (){var i__25913 = (0);
while(true){
if((i__25913 < size__5332__auto__)){
var vec__25917 = cljs.core._nth.call(null,c__5331__auto__,i__25913);
var k = cljs.core.nth.call(null,vec__25917,(0),null);
var v = cljs.core.nth.call(null,vec__25917,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__4561__auto__ = required_QMARK_;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__25914,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__25919 = (i__25913 + (1));
i__25913 = G__25919;
continue;
} else {
var G__25920 = (i__25913 + (1));
i__25913 = G__25920;
continue;
}
} else {
var G__25921 = (i__25913 + (1));
i__25913 = G__25921;
continue;
}
} else {
var G__25922 = (i__25913 + (1));
i__25913 = G__25922;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25914),plumbing$fnk$schema$schema_diff_$_iter__25911.call(null,cljs.core.chunk_rest.call(null,s__25912__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25914),null);
}
} else {
var vec__25918 = cljs.core.first.call(null,s__25912__$2);
var k = cljs.core.nth.call(null,vec__25918,(0),null);
var v = cljs.core.nth.call(null,vec__25918,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__4561__auto__ = required_QMARK_;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__25911.call(null,cljs.core.rest.call(null,s__25912__$2)));
} else {
var G__25923 = cljs.core.rest.call(null,s__25912__$2);
s__25912__$1 = G__25923;
continue;
}
} else {
var G__25924 = cljs.core.rest.call(null,s__25912__$2);
s__25912__$1 = G__25924;
continue;
}
} else {
var G__25925 = cljs.core.rest.call(null,s__25912__$2);
s__25912__$1 = G__25925;
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
return iter__5333__auto__.call(null,input_schema);
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
var ufv___25948 = schema.utils.use_fn_validation;
var output_schema25926_25949 = schema.core.Any;
var input_schema25927_25950 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker25928_25951 = schema.core.checker.call(null,input_schema25927_25950);
var output_checker25929_25952 = schema.core.checker.call(null,output_schema25926_25949);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___25948,output_schema25926_25949,input_schema25927_25950,input_checker25928_25951,output_checker25929_25952){
return (function plumbing$fnk$schema$compose_schemata(G__25930,G__25931){
var validate__10213__auto__ = true;
if(validate__10213__auto__){
var args__10214__auto___25953 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25930,G__25931], null);
var temp__4425__auto___25954 = input_checker25928_25951.call(null,args__10214__auto___25953);
if(cljs.core.truth_(temp__4425__auto___25954)){
var error__10215__auto___25955 = temp__4425__auto___25954;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__10215__auto___25955)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25927_25950,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___25953,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___25955], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var G__25942 = G__25930;
var vec__25944 = G__25942;
var i2 = cljs.core.nth.call(null,vec__25944,(0),null);
var o2 = cljs.core.nth.call(null,vec__25944,(1),null);
var G__25943 = G__25931;
var vec__25945 = G__25943;
var i1 = cljs.core.nth.call(null,vec__25945,(0),null);
var o1 = cljs.core.nth.call(null,vec__25945,(1),null);
var G__25942__$1 = G__25942;
var G__25943__$1 = G__25943;
while(true){
var vec__25946 = G__25942__$1;
var i2__$1 = cljs.core.nth.call(null,vec__25946,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__25946,(1),null);
var vec__25947 = G__25943__$1;
var i1__$1 = cljs.core.nth.call(null,vec__25947,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__25947,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__10213__auto__){
var temp__4425__auto___25956 = output_checker25929_25952.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___25956)){
var error__10215__auto___25957 = temp__4425__auto___25956;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__10215__auto___25957)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25926_25949,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___25957], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___25948,output_schema25926_25949,input_schema25927_25950,input_checker25928_25951,output_checker25929_25952))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema25926_25949,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25927_25950], null)));
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
var ufv___26036 = schema.utils.use_fn_validation;
var output_schema25958_26037 = schema.core.Any;
var input_schema25959_26038 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker25960_26039 = schema.core.checker.call(null,input_schema25959_26038);
var output_checker25961_26040 = schema.core.checker.call(null,output_schema25958_26037);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___26036,output_schema25958_26037,input_schema25959_26038,input_checker25960_26039,output_checker25961_26040){
return (function plumbing$fnk$schema$split_schema(G__25962,G__25963){
var validate__10213__auto__ = ufv___26036.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___26041 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25962,G__25963], null);
var temp__4425__auto___26042 = input_checker25960_26039.call(null,args__10214__auto___26041);
if(cljs.core.truth_(temp__4425__auto___26042)){
var error__10215__auto___26043 = temp__4425__auto___26042;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__10215__auto___26043)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25959_26038,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___26041,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___26043], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var s = G__25962;
var ks = G__25963;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__5333__auto__ = ((function (ks__$1,validate__10213__auto__,ufv___26036,output_schema25958_26037,input_schema25959_26038,input_checker25960_26039,output_checker25961_26040){
return (function plumbing$fnk$schema$split_schema_$_iter__26000(s__26001){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10213__auto__,ufv___26036,output_schema25958_26037,input_schema25959_26038,input_checker25960_26039,output_checker25961_26040){
return (function (){
var s__26001__$1 = s__26001;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26001__$1);
if(temp__4425__auto__){
var s__26001__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26001__$2)){
var c__5331__auto__ = cljs.core.chunk_first.call(null,s__26001__$2);
var size__5332__auto__ = cljs.core.count.call(null,c__5331__auto__);
var b__26003 = cljs.core.chunk_buffer.call(null,size__5332__auto__);
if((function (){var i__26002 = (0);
while(true){
if((i__26002 < size__5332__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__5331__auto__,i__26002);
cljs.core.chunk_append.call(null,b__26003,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5333__auto__ = ((function (i__26002,in_QMARK_,c__5331__auto__,size__5332__auto__,b__26003,s__26001__$2,temp__4425__auto__,ks__$1,validate__10213__auto__,ufv___26036,output_schema25958_26037,input_schema25959_26038,input_checker25960_26039,output_checker25961_26040){
return (function plumbing$fnk$schema$split_schema_$_iter__26000_$_iter__26020(s__26021){
return (new cljs.core.LazySeq(null,((function (i__26002,in_QMARK_,c__5331__auto__,size__5332__auto__,b__26003,s__26001__$2,temp__4425__auto__,ks__$1,validate__10213__auto__,ufv___26036,output_schema25958_26037,input_schema25959_26038,input_checker25960_26039,output_checker25961_26040){
return (function (){
var s__26021__$1 = s__26021;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__26021__$1);
if(temp__4425__auto____$1){
var s__26021__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26021__$2)){
var c__5331__auto____$1 = cljs.core.chunk_first.call(null,s__26021__$2);
var size__5332__auto____$1 = cljs.core.count.call(null,c__5331__auto____$1);
var b__26023 = cljs.core.chunk_buffer.call(null,size__5332__auto____$1);
if((function (){var i__26022 = (0);
while(true){
if((i__26022 < size__5332__auto____$1)){
var vec__26026 = cljs.core._nth.call(null,c__5331__auto____$1,i__26022);
var k = cljs.core.nth.call(null,vec__26026,(0),null);
var v = cljs.core.nth.call(null,vec__26026,(1),null);
if(cljs.core.truth_((function (){var and__4549__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__4549__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__4549__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__26023,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__26044 = (i__26022 + (1));
i__26022 = G__26044;
continue;
} else {
var G__26045 = (i__26022 + (1));
i__26022 = G__26045;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26023),plumbing$fnk$schema$split_schema_$_iter__26000_$_iter__26020.call(null,cljs.core.chunk_rest.call(null,s__26021__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26023),null);
}
} else {
var vec__26027 = cljs.core.first.call(null,s__26021__$2);
var k = cljs.core.nth.call(null,vec__26027,(0),null);
var v = cljs.core.nth.call(null,vec__26027,(1),null);
if(cljs.core.truth_((function (){var and__4549__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__4549__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__4549__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__26000_$_iter__26020.call(null,cljs.core.rest.call(null,s__26021__$2)));
} else {
var G__26046 = cljs.core.rest.call(null,s__26021__$2);
s__26021__$1 = G__26046;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__26002,in_QMARK_,c__5331__auto__,size__5332__auto__,b__26003,s__26001__$2,temp__4425__auto__,ks__$1,validate__10213__auto__,ufv___26036,output_schema25958_26037,input_schema25959_26038,input_checker25960_26039,output_checker25961_26040))
,null,null));
});})(i__26002,in_QMARK_,c__5331__auto__,size__5332__auto__,b__26003,s__26001__$2,temp__4425__auto__,ks__$1,validate__10213__auto__,ufv___26036,output_schema25958_26037,input_schema25959_26038,input_checker25960_26039,output_checker25961_26040))
;
return iter__5333__auto__.call(null,s);
})()));

var G__26047 = (i__26002 + (1));
i__26002 = G__26047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26003),plumbing$fnk$schema$split_schema_$_iter__26000.call(null,cljs.core.chunk_rest.call(null,s__26001__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26003),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__26001__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5333__auto__ = ((function (in_QMARK_,s__26001__$2,temp__4425__auto__,ks__$1,validate__10213__auto__,ufv___26036,output_schema25958_26037,input_schema25959_26038,input_checker25960_26039,output_checker25961_26040){
return (function plumbing$fnk$schema$split_schema_$_iter__26000_$_iter__26028(s__26029){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__26001__$2,temp__4425__auto__,ks__$1,validate__10213__auto__,ufv___26036,output_schema25958_26037,input_schema25959_26038,input_checker25960_26039,output_checker25961_26040){
return (function (){
var s__26029__$1 = s__26029;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__26029__$1);
if(temp__4425__auto____$1){
var s__26029__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26029__$2)){
var c__5331__auto__ = cljs.core.chunk_first.call(null,s__26029__$2);
var size__5332__auto__ = cljs.core.count.call(null,c__5331__auto__);
var b__26031 = cljs.core.chunk_buffer.call(null,size__5332__auto__);
if((function (){var i__26030 = (0);
while(true){
if((i__26030 < size__5332__auto__)){
var vec__26034 = cljs.core._nth.call(null,c__5331__auto__,i__26030);
var k = cljs.core.nth.call(null,vec__26034,(0),null);
var v = cljs.core.nth.call(null,vec__26034,(1),null);
if(cljs.core.truth_((function (){var and__4549__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__4549__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__4549__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__26031,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__26048 = (i__26030 + (1));
i__26030 = G__26048;
continue;
} else {
var G__26049 = (i__26030 + (1));
i__26030 = G__26049;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26031),plumbing$fnk$schema$split_schema_$_iter__26000_$_iter__26028.call(null,cljs.core.chunk_rest.call(null,s__26029__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26031),null);
}
} else {
var vec__26035 = cljs.core.first.call(null,s__26029__$2);
var k = cljs.core.nth.call(null,vec__26035,(0),null);
var v = cljs.core.nth.call(null,vec__26035,(1),null);
if(cljs.core.truth_((function (){var and__4549__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__4549__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__4549__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__26000_$_iter__26028.call(null,cljs.core.rest.call(null,s__26029__$2)));
} else {
var G__26050 = cljs.core.rest.call(null,s__26029__$2);
s__26029__$1 = G__26050;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__26001__$2,temp__4425__auto__,ks__$1,validate__10213__auto__,ufv___26036,output_schema25958_26037,input_schema25959_26038,input_checker25960_26039,output_checker25961_26040))
,null,null));
});})(in_QMARK_,s__26001__$2,temp__4425__auto__,ks__$1,validate__10213__auto__,ufv___26036,output_schema25958_26037,input_schema25959_26038,input_checker25960_26039,output_checker25961_26040))
;
return iter__5333__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__26000.call(null,cljs.core.rest.call(null,s__26001__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__10213__auto__,ufv___26036,output_schema25958_26037,input_schema25959_26038,input_checker25960_26039,output_checker25961_26040))
,null,null));
});})(ks__$1,validate__10213__auto__,ufv___26036,output_schema25958_26037,input_schema25959_26038,input_checker25960_26039,output_checker25961_26040))
;
return iter__5333__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___26051 = output_checker25961_26040.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___26051)){
var error__10215__auto___26052 = temp__4425__auto___26051;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__10215__auto___26052)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25958_26037,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___26052], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___26036,output_schema25958_26037,input_schema25959_26038,input_checker25960_26039,output_checker25961_26040))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema25958_26037,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25959_26038], null)));
var ufv___26083 = schema.utils.use_fn_validation;
var output_schema26053_26084 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema26054_26085 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker26055_26086 = schema.core.checker.call(null,input_schema26054_26085);
var output_checker26056_26087 = schema.core.checker.call(null,output_schema26053_26084);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___26083,output_schema26053_26084,input_schema26054_26085,input_checker26055_26086,output_checker26056_26087){
return (function plumbing$fnk$schema$sequence_schemata(G__26057,G__26058){
var validate__10213__auto__ = ufv___26083.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___26088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26057,G__26058], null);
var temp__4425__auto___26089 = input_checker26055_26086.call(null,args__10214__auto___26088);
if(cljs.core.truth_(temp__4425__auto___26089)){
var error__10215__auto___26090 = temp__4425__auto___26089;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__10215__auto___26090)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26054_26085,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___26088,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___26090], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var G__26074 = G__26057;
var vec__26076 = G__26074;
var i1 = cljs.core.nth.call(null,vec__26076,(0),null);
var o1 = cljs.core.nth.call(null,vec__26076,(1),null);
var G__26075 = G__26058;
var vec__26077 = G__26075;
var k = cljs.core.nth.call(null,vec__26077,(0),null);
var vec__26078 = cljs.core.nth.call(null,vec__26077,(1),null);
var i2 = cljs.core.nth.call(null,vec__26078,(0),null);
var o2 = cljs.core.nth.call(null,vec__26078,(1),null);
var G__26074__$1 = G__26074;
var G__26075__$1 = G__26075;
while(true){
var vec__26079 = G__26074__$1;
var i1__$1 = cljs.core.nth.call(null,vec__26079,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__26079,(1),null);
var vec__26080 = G__26075__$1;
var k__$1 = cljs.core.nth.call(null,vec__26080,(0),null);
var vec__26081 = cljs.core.nth.call(null,vec__26080,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__26081,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__26081,(1),null);
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

var vec__26082 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__26082,(0),null);
var unused = cljs.core.nth.call(null,vec__26082,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___26091 = output_checker26056_26087.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___26091)){
var error__10215__auto___26092 = temp__4425__auto___26091;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__10215__auto___26092)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26053_26084,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___26092], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___26083,output_schema26053_26084,input_schema26054_26085,input_checker26055_26086,output_checker26056_26087))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema26053_26084,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26054_26085], null)));
