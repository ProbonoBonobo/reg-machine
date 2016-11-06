// Compiled by ClojureScript 1.9.227 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__31790__31791__auto__){
if(!((p1__31790__31791__auto__ == null))){
if((false) || (p1__31790__31791__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__31790__31791__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__31790__31791__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__31790__31791__auto__);
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
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__55460_SHARP_){
return (cljs.core.val.call(null,p1__55460_SHARP_) > (1));
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

var vec__55464 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__55464,(0),null);
var v = cljs.core.nth.call(null,vec__55464,(1),null);
var p = vec__55464;
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
var ufv___55472 = schema.utils.use_fn_validation;
var output_schema55467_55473 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema55468_55474 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker55469_55475 = schema.core.checker.call(null,input_schema55468_55474);
var output_checker55470_55476 = schema.core.checker.call(null,output_schema55467_55473);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___55472,output_schema55467_55473,input_schema55468_55474,input_checker55469_55475,output_checker55470_55476){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__55471){
var validate__30368__auto__ = ufv___55472.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___55477 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55471], null);
var temp__4657__auto___55478 = input_checker55469_55475.call(null,args__30369__auto___55477);
if(cljs.core.truth_(temp__4657__auto___55478)){
var error__30370__auto___55479 = temp__4657__auto___55478;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__30370__auto___55479)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55468_55474,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___55477,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___55479], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var k = G__55471;
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
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___55480 = output_checker55470_55476.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___55480)){
var error__30370__auto___55481 = temp__4657__auto___55480;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__30370__auto___55481)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55467_55473,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___55481], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___55472,output_schema55467_55473,input_schema55468_55474,input_checker55469_55475,output_checker55470_55476))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema55467_55473,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55468_55474], null)));
var ufv___55487 = schema.utils.use_fn_validation;
var output_schema55482_55488 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema55483_55489 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker55484_55490 = schema.core.checker.call(null,input_schema55483_55489);
var output_checker55485_55491 = schema.core.checker.call(null,output_schema55482_55488);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___55487,output_schema55482_55488,input_schema55483_55489,input_checker55484_55490,output_checker55485_55491){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__55486){
var validate__30368__auto__ = ufv___55487.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___55492 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55486], null);
var temp__4657__auto___55493 = input_checker55484_55490.call(null,args__30369__auto___55492);
if(cljs.core.truth_(temp__4657__auto___55493)){
var error__30370__auto___55494 = temp__4657__auto___55493;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__30370__auto___55494)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55483_55489,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___55492,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___55494], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var s = G__55486;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___55495 = output_checker55485_55491.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___55495)){
var error__30370__auto___55496 = temp__4657__auto___55495;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__30370__auto___55496)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55482_55488,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___55496], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___55487,output_schema55482_55488,input_schema55483_55489,input_checker55484_55490,output_checker55485_55491))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema55482_55488,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55483_55489], null)));
var ufv___55502 = schema.utils.use_fn_validation;
var output_schema55497_55503 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema55498_55504 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker55499_55505 = schema.core.checker.call(null,input_schema55498_55504);
var output_checker55500_55506 = schema.core.checker.call(null,output_schema55497_55503);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___55502,output_schema55497_55503,input_schema55498_55504,input_checker55499_55505,output_checker55500_55506){
return (function plumbing$fnk$schema$split_schema_keys(G__55501){
var validate__30368__auto__ = ufv___55502.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___55507 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55501], null);
var temp__4657__auto___55508 = input_checker55499_55505.call(null,args__30369__auto___55507);
if(cljs.core.truth_(temp__4657__auto___55508)){
var error__30370__auto___55509 = temp__4657__auto___55508;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__30370__auto___55509)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55498_55504,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___55507,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___55509], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var s = G__55501;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___55510 = output_checker55500_55506.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___55510)){
var error__30370__auto___55511 = temp__4657__auto___55510;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__30370__auto___55511)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55497_55503,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___55511], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___55502,output_schema55497_55503,input_schema55498_55504,input_checker55499_55505,output_checker55500_55506))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema55497_55503,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55498_55504], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__25833__auto__ = [];
var len__25826__auto___55523 = arguments.length;
var i__25827__auto___55524 = (0);
while(true){
if((i__25827__auto___55524 < len__25826__auto___55523)){
args__25833__auto__.push((arguments[i__25827__auto___55524]));

var G__55525 = (i__25827__auto___55524 + (1));
i__25827__auto___55524 = G__55525;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__55516){
var vec__55517 = p__55516;
var k = cljs.core.nth.call(null,vec__55517,(0),null);
var v = cljs.core.nth.call(null,vec__55517,(1),null);
var pk = key_project.call(null,k);
var temp__4655__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__55520 = temp__4655__auto__;
var ok = cljs.core.nth.call(null,vec__55520,(0),null);
var ov = cljs.core.nth.call(null,vec__55520,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq55512){
var G__55513 = cljs.core.first.call(null,seq55512);
var seq55512__$1 = cljs.core.next.call(null,seq55512);
var G__55514 = cljs.core.first.call(null,seq55512__$1);
var seq55512__$2 = cljs.core.next.call(null,seq55512__$1);
var G__55515 = cljs.core.first.call(null,seq55512__$2);
var seq55512__$3 = cljs.core.next.call(null,seq55512__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__55513,G__55514,G__55515,seq55512__$3);
});

var ufv___55533 = schema.utils.use_fn_validation;
var output_schema55527_55534 = plumbing.fnk.schema.InputSchema;
var input_schema55528_55535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker55529_55536 = schema.core.checker.call(null,input_schema55528_55535);
var output_checker55530_55537 = schema.core.checker.call(null,output_schema55527_55534);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___55533,output_schema55527_55534,input_schema55528_55535,input_checker55529_55536,output_checker55530_55537){
return (function plumbing$fnk$schema$union_input_schemata(G__55531,G__55532){
var validate__30368__auto__ = ufv___55533.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___55538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55531,G__55532], null);
var temp__4657__auto___55539 = input_checker55529_55536.call(null,args__30369__auto___55538);
if(cljs.core.truth_(temp__4657__auto___55539)){
var error__30370__auto___55540 = temp__4657__auto___55539;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__30370__auto___55540)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55528_55535,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___55538,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___55540], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var i1 = G__55531;
var i2 = G__55532;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__30368__auto__,ufv___55533,output_schema55527_55534,input_schema55528_55535,input_checker55529_55536,output_checker55530_55537){
return (function (p1__55526_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__55526_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__55526_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__30368__auto__,ufv___55533,output_schema55527_55534,input_schema55528_55535,input_checker55529_55536,output_checker55530_55537))
,((function (validate__30368__auto__,ufv___55533,output_schema55527_55534,input_schema55528_55535,input_checker55529_55536,output_checker55530_55537){
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
throw (new Error("Assert failed: (= k1 k2)"));
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
});})(validate__30368__auto__,ufv___55533,output_schema55527_55534,input_schema55528_55535,input_checker55529_55536,output_checker55530_55537))
,((function (validate__30368__auto__,ufv___55533,output_schema55527_55534,input_schema55528_55535,input_checker55529_55536,output_checker55530_55537){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__24739__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__24739__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__24739__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__30368__auto__,ufv___55533,output_schema55527_55534,input_schema55528_55535,input_checker55529_55536,output_checker55530_55537))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___55541 = output_checker55530_55537.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___55541)){
var error__30370__auto___55542 = temp__4657__auto___55541;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__30370__auto___55542)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55527_55534,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___55542], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___55533,output_schema55527_55534,input_schema55528_55535,input_checker55529_55536,output_checker55530_55537))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema55527_55534,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55528_55535], null)));
var ufv___55548 = schema.utils.use_fn_validation;
var output_schema55543_55549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema55544_55550 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker55545_55551 = schema.core.checker.call(null,input_schema55544_55550);
var output_checker55546_55552 = schema.core.checker.call(null,output_schema55543_55549);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___55548,output_schema55543_55549,input_schema55544_55550,input_checker55545_55551,output_checker55546_55552){
return (function plumbing$fnk$schema$required_toplevel_keys(G__55547){
var validate__30368__auto__ = ufv___55548.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___55553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55547], null);
var temp__4657__auto___55554 = input_checker55545_55551.call(null,args__30369__auto___55553);
if(cljs.core.truth_(temp__4657__auto___55554)){
var error__30370__auto___55555 = temp__4657__auto___55554;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__30370__auto___55555)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55544_55550,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___55553,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___55555], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var input_schema = G__55547;
while(true){
return cljs.core.keep.call(null,((function (validate__30368__auto__,ufv___55548,output_schema55543_55549,input_schema55544_55550,input_checker55545_55551,output_checker55546_55552){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__30368__auto__,ufv___55548,output_schema55543_55549,input_schema55544_55550,input_checker55545_55551,output_checker55546_55552))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___55556 = output_checker55546_55552.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___55556)){
var error__30370__auto___55557 = temp__4657__auto___55556;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__30370__auto___55557)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55543_55549,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___55557], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___55548,output_schema55543_55549,input_schema55544_55550,input_checker55545_55551,output_checker55546_55552))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema55543_55549,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55544_55550], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__55574(s__55575){
return (new cljs.core.LazySeq(null,(function (){
var s__55575__$1 = s__55575;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55575__$1);
if(temp__4657__auto__){
var s__55575__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55575__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__55575__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__55577 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__55576 = (0);
while(true){
if((i__55576 < size__25530__auto__)){
var vec__55584 = cljs.core._nth.call(null,c__25529__auto__,i__55576);
var k = cljs.core.nth.call(null,vec__55584,(0),null);
var v = cljs.core.nth.call(null,vec__55584,(1),null);
cljs.core.chunk_append.call(null,b__55577,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__55590 = (i__55576 + (1));
i__55576 = G__55590;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55577),plumbing$fnk$schema$guess_expr_output_schema_$_iter__55574.call(null,cljs.core.chunk_rest.call(null,s__55575__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55577),null);
}
} else {
var vec__55587 = cljs.core.first.call(null,s__55575__$2);
var k = cljs.core.nth.call(null,vec__55587,(0),null);
var v = cljs.core.nth.call(null,vec__55587,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__55574.call(null,cljs.core.rest.call(null,s__55575__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25531__auto__.call(null,expr);
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
return cljs.core._conj.call(null,(function (){var x__25585__auto__ = schema.core.explain.call(null,output_schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25585__auto__);
})(),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__55607(s__55608){
return (new cljs.core.LazySeq(null,(function (){
var s__55608__$1 = s__55608;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55608__$1);
if(temp__4657__auto__){
var s__55608__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55608__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__55608__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__55610 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__55609 = (0);
while(true){
if((i__55609 < size__25530__auto__)){
var vec__55617 = cljs.core._nth.call(null,c__25529__auto__,i__55609);
var k = cljs.core.nth.call(null,vec__55617,(0),null);
var v = cljs.core.nth.call(null,vec__55617,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__24751__auto__ = required_QMARK_;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__55610,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__55623 = (i__55609 + (1));
i__55609 = G__55623;
continue;
} else {
var G__55624 = (i__55609 + (1));
i__55609 = G__55624;
continue;
}
} else {
var G__55625 = (i__55609 + (1));
i__55609 = G__55625;
continue;
}
} else {
var G__55626 = (i__55609 + (1));
i__55609 = G__55626;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55610),plumbing$fnk$schema$schema_diff_$_iter__55607.call(null,cljs.core.chunk_rest.call(null,s__55608__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55610),null);
}
} else {
var vec__55620 = cljs.core.first.call(null,s__55608__$2);
var k = cljs.core.nth.call(null,vec__55620,(0),null);
var v = cljs.core.nth.call(null,vec__55620,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__24751__auto__ = required_QMARK_;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__55607.call(null,cljs.core.rest.call(null,s__55608__$2)));
} else {
var G__55627 = cljs.core.rest.call(null,s__55608__$2);
s__55608__$1 = G__55627;
continue;
}
} else {
var G__55628 = cljs.core.rest.call(null,s__55608__$2);
s__55608__$1 = G__55628;
continue;
}
} else {
var G__55629 = cljs.core.rest.call(null,s__55608__$2);
s__55608__$1 = G__55629;
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
return iter__25531__auto__.call(null,input_schema);
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
var ufv___55676 = schema.utils.use_fn_validation;
var output_schema55630_55677 = schema.core.Any;
var input_schema55631_55678 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker55632_55679 = schema.core.checker.call(null,input_schema55631_55678);
var output_checker55633_55680 = schema.core.checker.call(null,output_schema55630_55677);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___55676,output_schema55630_55677,input_schema55631_55678,input_checker55632_55679,output_checker55633_55680){
return (function plumbing$fnk$schema$compose_schemata(G__55634,G__55635){
var validate__30368__auto__ = true;
if(validate__30368__auto__){
var args__30369__auto___55681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55634,G__55635], null);
var temp__4657__auto___55682 = input_checker55632_55679.call(null,args__30369__auto___55681);
if(cljs.core.truth_(temp__4657__auto___55682)){
var error__30370__auto___55683 = temp__4657__auto___55682;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__30370__auto___55683)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55631_55678,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___55681,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___55683], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var G__55662 = G__55634;
var vec__55664 = G__55662;
var i2 = cljs.core.nth.call(null,vec__55664,(0),null);
var o2 = cljs.core.nth.call(null,vec__55664,(1),null);
var G__55663 = G__55635;
var vec__55667 = G__55663;
var i1 = cljs.core.nth.call(null,vec__55667,(0),null);
var o1 = cljs.core.nth.call(null,vec__55667,(1),null);
var G__55662__$1 = G__55662;
var G__55663__$1 = G__55663;
while(true){
var vec__55670 = G__55662__$1;
var i2__$1 = cljs.core.nth.call(null,vec__55670,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__55670,(1),null);
var vec__55673 = G__55663__$1;
var i1__$1 = cljs.core.nth.call(null,vec__55673,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__55673,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__30368__auto__){
var temp__4657__auto___55684 = output_checker55633_55680.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___55684)){
var error__30370__auto___55685 = temp__4657__auto___55684;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__30370__auto___55685)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55630_55677,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___55685], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___55676,output_schema55630_55677,input_schema55631_55678,input_checker55632_55679,output_checker55633_55680))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema55630_55677,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55631_55678], null)));
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
var ufv___55828 = schema.utils.use_fn_validation;
var output_schema55686_55829 = schema.core.Any;
var input_schema55687_55830 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker55688_55831 = schema.core.checker.call(null,input_schema55687_55830);
var output_checker55689_55832 = schema.core.checker.call(null,output_schema55686_55829);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___55828,output_schema55686_55829,input_schema55687_55830,input_checker55688_55831,output_checker55689_55832){
return (function plumbing$fnk$schema$split_schema(G__55690,G__55691){
var validate__30368__auto__ = ufv___55828.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___55833 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55690,G__55691], null);
var temp__4657__auto___55834 = input_checker55688_55831.call(null,args__30369__auto___55833);
if(cljs.core.truth_(temp__4657__auto___55834)){
var error__30370__auto___55835 = temp__4657__auto___55834;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__30370__auto___55835)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55687_55830,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___55833,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___55835], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var s = G__55690;
var ks = G__55691;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__25531__auto__ = ((function (ks__$1,validate__30368__auto__,ufv___55828,output_schema55686_55829,input_schema55687_55830,input_checker55688_55831,output_checker55689_55832){
return (function plumbing$fnk$schema$split_schema_$_iter__55760(s__55761){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__30368__auto__,ufv___55828,output_schema55686_55829,input_schema55687_55830,input_checker55688_55831,output_checker55689_55832){
return (function (){
var s__55761__$1 = s__55761;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55761__$1);
if(temp__4657__auto__){
var s__55761__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55761__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__55761__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__55763 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__55762 = (0);
while(true){
if((i__55762 < size__25530__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__25529__auto__,i__55762);
cljs.core.chunk_append.call(null,b__55763,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = ((function (i__55762,in_QMARK_,c__25529__auto__,size__25530__auto__,b__55763,s__55761__$2,temp__4657__auto__,ks__$1,validate__30368__auto__,ufv___55828,output_schema55686_55829,input_schema55687_55830,input_checker55688_55831,output_checker55689_55832){
return (function plumbing$fnk$schema$split_schema_$_iter__55760_$_iter__55796(s__55797){
return (new cljs.core.LazySeq(null,((function (i__55762,in_QMARK_,c__25529__auto__,size__25530__auto__,b__55763,s__55761__$2,temp__4657__auto__,ks__$1,validate__30368__auto__,ufv___55828,output_schema55686_55829,input_schema55687_55830,input_checker55688_55831,output_checker55689_55832){
return (function (){
var s__55797__$1 = s__55797;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__55797__$1);
if(temp__4657__auto____$1){
var s__55797__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55797__$2)){
var c__25529__auto____$1 = cljs.core.chunk_first.call(null,s__55797__$2);
var size__25530__auto____$1 = cljs.core.count.call(null,c__25529__auto____$1);
var b__55799 = cljs.core.chunk_buffer.call(null,size__25530__auto____$1);
if((function (){var i__55798 = (0);
while(true){
if((i__55798 < size__25530__auto____$1)){
var vec__55806 = cljs.core._nth.call(null,c__25529__auto____$1,i__55798);
var k = cljs.core.nth.call(null,vec__55806,(0),null);
var v = cljs.core.nth.call(null,vec__55806,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24739__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__55799,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__55836 = (i__55798 + (1));
i__55798 = G__55836;
continue;
} else {
var G__55837 = (i__55798 + (1));
i__55798 = G__55837;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55799),plumbing$fnk$schema$split_schema_$_iter__55760_$_iter__55796.call(null,cljs.core.chunk_rest.call(null,s__55797__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55799),null);
}
} else {
var vec__55809 = cljs.core.first.call(null,s__55797__$2);
var k = cljs.core.nth.call(null,vec__55809,(0),null);
var v = cljs.core.nth.call(null,vec__55809,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24739__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__55760_$_iter__55796.call(null,cljs.core.rest.call(null,s__55797__$2)));
} else {
var G__55838 = cljs.core.rest.call(null,s__55797__$2);
s__55797__$1 = G__55838;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__55762,in_QMARK_,c__25529__auto__,size__25530__auto__,b__55763,s__55761__$2,temp__4657__auto__,ks__$1,validate__30368__auto__,ufv___55828,output_schema55686_55829,input_schema55687_55830,input_checker55688_55831,output_checker55689_55832))
,null,null));
});})(i__55762,in_QMARK_,c__25529__auto__,size__25530__auto__,b__55763,s__55761__$2,temp__4657__auto__,ks__$1,validate__30368__auto__,ufv___55828,output_schema55686_55829,input_schema55687_55830,input_checker55688_55831,output_checker55689_55832))
;
return iter__25531__auto__.call(null,s);
})()));

var G__55839 = (i__55762 + (1));
i__55762 = G__55839;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55763),plumbing$fnk$schema$split_schema_$_iter__55760.call(null,cljs.core.chunk_rest.call(null,s__55761__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55763),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__55761__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = ((function (in_QMARK_,s__55761__$2,temp__4657__auto__,ks__$1,validate__30368__auto__,ufv___55828,output_schema55686_55829,input_schema55687_55830,input_checker55688_55831,output_checker55689_55832){
return (function plumbing$fnk$schema$split_schema_$_iter__55760_$_iter__55812(s__55813){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__55761__$2,temp__4657__auto__,ks__$1,validate__30368__auto__,ufv___55828,output_schema55686_55829,input_schema55687_55830,input_checker55688_55831,output_checker55689_55832){
return (function (){
var s__55813__$1 = s__55813;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__55813__$1);
if(temp__4657__auto____$1){
var s__55813__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55813__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__55813__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__55815 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__55814 = (0);
while(true){
if((i__55814 < size__25530__auto__)){
var vec__55822 = cljs.core._nth.call(null,c__25529__auto__,i__55814);
var k = cljs.core.nth.call(null,vec__55822,(0),null);
var v = cljs.core.nth.call(null,vec__55822,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24739__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__55815,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__55840 = (i__55814 + (1));
i__55814 = G__55840;
continue;
} else {
var G__55841 = (i__55814 + (1));
i__55814 = G__55841;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55815),plumbing$fnk$schema$split_schema_$_iter__55760_$_iter__55812.call(null,cljs.core.chunk_rest.call(null,s__55813__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55815),null);
}
} else {
var vec__55825 = cljs.core.first.call(null,s__55813__$2);
var k = cljs.core.nth.call(null,vec__55825,(0),null);
var v = cljs.core.nth.call(null,vec__55825,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24739__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__55760_$_iter__55812.call(null,cljs.core.rest.call(null,s__55813__$2)));
} else {
var G__55842 = cljs.core.rest.call(null,s__55813__$2);
s__55813__$1 = G__55842;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__55761__$2,temp__4657__auto__,ks__$1,validate__30368__auto__,ufv___55828,output_schema55686_55829,input_schema55687_55830,input_checker55688_55831,output_checker55689_55832))
,null,null));
});})(in_QMARK_,s__55761__$2,temp__4657__auto__,ks__$1,validate__30368__auto__,ufv___55828,output_schema55686_55829,input_schema55687_55830,input_checker55688_55831,output_checker55689_55832))
;
return iter__25531__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__55760.call(null,cljs.core.rest.call(null,s__55761__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__30368__auto__,ufv___55828,output_schema55686_55829,input_schema55687_55830,input_checker55688_55831,output_checker55689_55832))
,null,null));
});})(ks__$1,validate__30368__auto__,ufv___55828,output_schema55686_55829,input_schema55687_55830,input_checker55688_55831,output_checker55689_55832))
;
return iter__25531__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___55843 = output_checker55689_55832.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___55843)){
var error__30370__auto___55844 = temp__4657__auto___55843;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__30370__auto___55844)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55686_55829,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___55844], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___55828,output_schema55686_55829,input_schema55687_55830,input_checker55688_55831,output_checker55689_55832))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema55686_55829,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55687_55830], null)));
var ufv___55915 = schema.utils.use_fn_validation;
var output_schema55845_55916 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema55846_55917 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker55847_55918 = schema.core.checker.call(null,input_schema55846_55917);
var output_checker55848_55919 = schema.core.checker.call(null,output_schema55845_55916);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___55915,output_schema55845_55916,input_schema55846_55917,input_checker55847_55918,output_checker55848_55919){
return (function plumbing$fnk$schema$sequence_schemata(G__55849,G__55850){
var validate__30368__auto__ = ufv___55915.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___55920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55849,G__55850], null);
var temp__4657__auto___55921 = input_checker55847_55918.call(null,args__30369__auto___55920);
if(cljs.core.truth_(temp__4657__auto___55921)){
var error__30370__auto___55922 = temp__4657__auto___55921;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__30370__auto___55922)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55846_55917,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___55920,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___55922], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var G__55892 = G__55849;
var vec__55894 = G__55892;
var i1 = cljs.core.nth.call(null,vec__55894,(0),null);
var o1 = cljs.core.nth.call(null,vec__55894,(1),null);
var G__55893 = G__55850;
var vec__55897 = G__55893;
var k = cljs.core.nth.call(null,vec__55897,(0),null);
var vec__55900 = cljs.core.nth.call(null,vec__55897,(1),null);
var i2 = cljs.core.nth.call(null,vec__55900,(0),null);
var o2 = cljs.core.nth.call(null,vec__55900,(1),null);
var G__55892__$1 = G__55892;
var G__55893__$1 = G__55893;
while(true){
var vec__55903 = G__55892__$1;
var i1__$1 = cljs.core.nth.call(null,vec__55903,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__55903,(1),null);
var vec__55906 = G__55893__$1;
var k__$1 = cljs.core.nth.call(null,vec__55906,(0),null);
var vec__55909 = cljs.core.nth.call(null,vec__55906,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__55909,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__55909,(1),null);
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

var vec__55912 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__55912,(0),null);
var unused = cljs.core.nth.call(null,vec__55912,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___55923 = output_checker55848_55919.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___55923)){
var error__30370__auto___55924 = temp__4657__auto___55923;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__30370__auto___55924)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55845_55916,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___55924], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___55915,output_schema55845_55916,input_schema55846_55917,input_checker55847_55918,output_checker55848_55919))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema55845_55916,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55846_55917], null)));

//# sourceMappingURL=schema.js.map?rel=1478399622510