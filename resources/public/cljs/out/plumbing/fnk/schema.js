// Compiled by ClojureScript 1.9.227 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__30789__30790__auto__){
if(!((p1__30789__30790__auto__ == null))){
if((false) || (p1__30789__30790__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__30789__30790__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__30789__30790__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__30789__30790__auto__);
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
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__31694_SHARP_){
return (cljs.core.val.call(null,p1__31694_SHARP_) > (1));
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

var vec__31698 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__31698,(0),null);
var v = cljs.core.nth.call(null,vec__31698,(1),null);
var p = vec__31698;
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
var ufv___31706 = schema.utils.use_fn_validation;
var output_schema31701_31707 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema31702_31708 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker31703_31709 = schema.core.checker.call(null,input_schema31702_31708);
var output_checker31704_31710 = schema.core.checker.call(null,output_schema31701_31707);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___31706,output_schema31701_31707,input_schema31702_31708,input_checker31703_31709,output_checker31704_31710){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__31705){
var validate__30032__auto__ = ufv___31706.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___31711 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31705], null);
var temp__4657__auto___31712 = input_checker31703_31709.call(null,args__30033__auto___31711);
if(cljs.core.truth_(temp__4657__auto___31712)){
var error__30034__auto___31713 = temp__4657__auto___31712;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__30034__auto___31713)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31702_31708,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___31711,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___31713], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var k = G__31705;
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
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___31714 = output_checker31704_31710.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___31714)){
var error__30034__auto___31715 = temp__4657__auto___31714;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__30034__auto___31715)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31701_31707,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___31715], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___31706,output_schema31701_31707,input_schema31702_31708,input_checker31703_31709,output_checker31704_31710))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema31701_31707,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31702_31708], null)));
var ufv___31721 = schema.utils.use_fn_validation;
var output_schema31716_31722 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema31717_31723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker31718_31724 = schema.core.checker.call(null,input_schema31717_31723);
var output_checker31719_31725 = schema.core.checker.call(null,output_schema31716_31722);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___31721,output_schema31716_31722,input_schema31717_31723,input_checker31718_31724,output_checker31719_31725){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__31720){
var validate__30032__auto__ = ufv___31721.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___31726 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31720], null);
var temp__4657__auto___31727 = input_checker31718_31724.call(null,args__30033__auto___31726);
if(cljs.core.truth_(temp__4657__auto___31727)){
var error__30034__auto___31728 = temp__4657__auto___31727;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__30034__auto___31728)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31717_31723,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___31726,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___31728], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var s = G__31720;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___31729 = output_checker31719_31725.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___31729)){
var error__30034__auto___31730 = temp__4657__auto___31729;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__30034__auto___31730)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31716_31722,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___31730], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___31721,output_schema31716_31722,input_schema31717_31723,input_checker31718_31724,output_checker31719_31725))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema31716_31722,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31717_31723], null)));
var ufv___31736 = schema.utils.use_fn_validation;
var output_schema31731_31737 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema31732_31738 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker31733_31739 = schema.core.checker.call(null,input_schema31732_31738);
var output_checker31734_31740 = schema.core.checker.call(null,output_schema31731_31737);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___31736,output_schema31731_31737,input_schema31732_31738,input_checker31733_31739,output_checker31734_31740){
return (function plumbing$fnk$schema$split_schema_keys(G__31735){
var validate__30032__auto__ = ufv___31736.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___31741 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31735], null);
var temp__4657__auto___31742 = input_checker31733_31739.call(null,args__30033__auto___31741);
if(cljs.core.truth_(temp__4657__auto___31742)){
var error__30034__auto___31743 = temp__4657__auto___31742;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__30034__auto___31743)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31732_31738,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___31741,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___31743], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var s = G__31735;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___31744 = output_checker31734_31740.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___31744)){
var error__30034__auto___31745 = temp__4657__auto___31744;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__30034__auto___31745)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31731_31737,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___31745], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___31736,output_schema31731_31737,input_schema31732_31738,input_checker31733_31739,output_checker31734_31740))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema31731_31737,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31732_31738], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__25833__auto__ = [];
var len__25826__auto___31757 = arguments.length;
var i__25827__auto___31758 = (0);
while(true){
if((i__25827__auto___31758 < len__25826__auto___31757)){
args__25833__auto__.push((arguments[i__25827__auto___31758]));

var G__31759 = (i__25827__auto___31758 + (1));
i__25827__auto___31758 = G__31759;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__31750){
var vec__31751 = p__31750;
var k = cljs.core.nth.call(null,vec__31751,(0),null);
var v = cljs.core.nth.call(null,vec__31751,(1),null);
var pk = key_project.call(null,k);
var temp__4655__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__31754 = temp__4655__auto__;
var ok = cljs.core.nth.call(null,vec__31754,(0),null);
var ov = cljs.core.nth.call(null,vec__31754,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq31746){
var G__31747 = cljs.core.first.call(null,seq31746);
var seq31746__$1 = cljs.core.next.call(null,seq31746);
var G__31748 = cljs.core.first.call(null,seq31746__$1);
var seq31746__$2 = cljs.core.next.call(null,seq31746__$1);
var G__31749 = cljs.core.first.call(null,seq31746__$2);
var seq31746__$3 = cljs.core.next.call(null,seq31746__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__31747,G__31748,G__31749,seq31746__$3);
});

var ufv___31767 = schema.utils.use_fn_validation;
var output_schema31761_31768 = plumbing.fnk.schema.InputSchema;
var input_schema31762_31769 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker31763_31770 = schema.core.checker.call(null,input_schema31762_31769);
var output_checker31764_31771 = schema.core.checker.call(null,output_schema31761_31768);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___31767,output_schema31761_31768,input_schema31762_31769,input_checker31763_31770,output_checker31764_31771){
return (function plumbing$fnk$schema$union_input_schemata(G__31765,G__31766){
var validate__30032__auto__ = ufv___31767.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___31772 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31765,G__31766], null);
var temp__4657__auto___31773 = input_checker31763_31770.call(null,args__30033__auto___31772);
if(cljs.core.truth_(temp__4657__auto___31773)){
var error__30034__auto___31774 = temp__4657__auto___31773;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__30034__auto___31774)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31762_31769,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___31772,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___31774], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var i1 = G__31765;
var i2 = G__31766;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__30032__auto__,ufv___31767,output_schema31761_31768,input_schema31762_31769,input_checker31763_31770,output_checker31764_31771){
return (function (p1__31760_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__31760_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__31760_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__30032__auto__,ufv___31767,output_schema31761_31768,input_schema31762_31769,input_checker31763_31770,output_checker31764_31771))
,((function (validate__30032__auto__,ufv___31767,output_schema31761_31768,input_schema31762_31769,input_checker31763_31770,output_checker31764_31771){
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
});})(validate__30032__auto__,ufv___31767,output_schema31761_31768,input_schema31762_31769,input_checker31763_31770,output_checker31764_31771))
,((function (validate__30032__auto__,ufv___31767,output_schema31761_31768,input_schema31762_31769,input_checker31763_31770,output_checker31764_31771){
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
});})(validate__30032__auto__,ufv___31767,output_schema31761_31768,input_schema31762_31769,input_checker31763_31770,output_checker31764_31771))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___31775 = output_checker31764_31771.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___31775)){
var error__30034__auto___31776 = temp__4657__auto___31775;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__30034__auto___31776)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31761_31768,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___31776], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___31767,output_schema31761_31768,input_schema31762_31769,input_checker31763_31770,output_checker31764_31771))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema31761_31768,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31762_31769], null)));
var ufv___31782 = schema.utils.use_fn_validation;
var output_schema31777_31783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema31778_31784 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker31779_31785 = schema.core.checker.call(null,input_schema31778_31784);
var output_checker31780_31786 = schema.core.checker.call(null,output_schema31777_31783);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___31782,output_schema31777_31783,input_schema31778_31784,input_checker31779_31785,output_checker31780_31786){
return (function plumbing$fnk$schema$required_toplevel_keys(G__31781){
var validate__30032__auto__ = ufv___31782.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___31787 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31781], null);
var temp__4657__auto___31788 = input_checker31779_31785.call(null,args__30033__auto___31787);
if(cljs.core.truth_(temp__4657__auto___31788)){
var error__30034__auto___31789 = temp__4657__auto___31788;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__30034__auto___31789)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31778_31784,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___31787,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___31789], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var input_schema = G__31781;
while(true){
return cljs.core.keep.call(null,((function (validate__30032__auto__,ufv___31782,output_schema31777_31783,input_schema31778_31784,input_checker31779_31785,output_checker31780_31786){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__30032__auto__,ufv___31782,output_schema31777_31783,input_schema31778_31784,input_checker31779_31785,output_checker31780_31786))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___31790 = output_checker31780_31786.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___31790)){
var error__30034__auto___31791 = temp__4657__auto___31790;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__30034__auto___31791)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31777_31783,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___31791], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___31782,output_schema31777_31783,input_schema31778_31784,input_checker31779_31785,output_checker31780_31786))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema31777_31783,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31778_31784], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__31808(s__31809){
return (new cljs.core.LazySeq(null,(function (){
var s__31809__$1 = s__31809;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31809__$1);
if(temp__4657__auto__){
var s__31809__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31809__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__31809__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__31811 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__31810 = (0);
while(true){
if((i__31810 < size__25530__auto__)){
var vec__31818 = cljs.core._nth.call(null,c__25529__auto__,i__31810);
var k = cljs.core.nth.call(null,vec__31818,(0),null);
var v = cljs.core.nth.call(null,vec__31818,(1),null);
cljs.core.chunk_append.call(null,b__31811,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__31824 = (i__31810 + (1));
i__31810 = G__31824;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31811),plumbing$fnk$schema$guess_expr_output_schema_$_iter__31808.call(null,cljs.core.chunk_rest.call(null,s__31809__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31811),null);
}
} else {
var vec__31821 = cljs.core.first.call(null,s__31809__$2);
var k = cljs.core.nth.call(null,vec__31821,(0),null);
var v = cljs.core.nth.call(null,vec__31821,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__31808.call(null,cljs.core.rest.call(null,s__31809__$2)));
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
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__31841(s__31842){
return (new cljs.core.LazySeq(null,(function (){
var s__31842__$1 = s__31842;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31842__$1);
if(temp__4657__auto__){
var s__31842__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31842__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__31842__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__31844 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__31843 = (0);
while(true){
if((i__31843 < size__25530__auto__)){
var vec__31851 = cljs.core._nth.call(null,c__25529__auto__,i__31843);
var k = cljs.core.nth.call(null,vec__31851,(0),null);
var v = cljs.core.nth.call(null,vec__31851,(1),null);
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
cljs.core.chunk_append.call(null,b__31844,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__31857 = (i__31843 + (1));
i__31843 = G__31857;
continue;
} else {
var G__31858 = (i__31843 + (1));
i__31843 = G__31858;
continue;
}
} else {
var G__31859 = (i__31843 + (1));
i__31843 = G__31859;
continue;
}
} else {
var G__31860 = (i__31843 + (1));
i__31843 = G__31860;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31844),plumbing$fnk$schema$schema_diff_$_iter__31841.call(null,cljs.core.chunk_rest.call(null,s__31842__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31844),null);
}
} else {
var vec__31854 = cljs.core.first.call(null,s__31842__$2);
var k = cljs.core.nth.call(null,vec__31854,(0),null);
var v = cljs.core.nth.call(null,vec__31854,(1),null);
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
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__31841.call(null,cljs.core.rest.call(null,s__31842__$2)));
} else {
var G__31861 = cljs.core.rest.call(null,s__31842__$2);
s__31842__$1 = G__31861;
continue;
}
} else {
var G__31862 = cljs.core.rest.call(null,s__31842__$2);
s__31842__$1 = G__31862;
continue;
}
} else {
var G__31863 = cljs.core.rest.call(null,s__31842__$2);
s__31842__$1 = G__31863;
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
var ufv___31910 = schema.utils.use_fn_validation;
var output_schema31864_31911 = schema.core.Any;
var input_schema31865_31912 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker31866_31913 = schema.core.checker.call(null,input_schema31865_31912);
var output_checker31867_31914 = schema.core.checker.call(null,output_schema31864_31911);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___31910,output_schema31864_31911,input_schema31865_31912,input_checker31866_31913,output_checker31867_31914){
return (function plumbing$fnk$schema$compose_schemata(G__31868,G__31869){
var validate__30032__auto__ = true;
if(validate__30032__auto__){
var args__30033__auto___31915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31868,G__31869], null);
var temp__4657__auto___31916 = input_checker31866_31913.call(null,args__30033__auto___31915);
if(cljs.core.truth_(temp__4657__auto___31916)){
var error__30034__auto___31917 = temp__4657__auto___31916;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__30034__auto___31917)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31865_31912,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___31915,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___31917], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var G__31896 = G__31868;
var vec__31898 = G__31896;
var i2 = cljs.core.nth.call(null,vec__31898,(0),null);
var o2 = cljs.core.nth.call(null,vec__31898,(1),null);
var G__31897 = G__31869;
var vec__31901 = G__31897;
var i1 = cljs.core.nth.call(null,vec__31901,(0),null);
var o1 = cljs.core.nth.call(null,vec__31901,(1),null);
var G__31896__$1 = G__31896;
var G__31897__$1 = G__31897;
while(true){
var vec__31904 = G__31896__$1;
var i2__$1 = cljs.core.nth.call(null,vec__31904,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__31904,(1),null);
var vec__31907 = G__31897__$1;
var i1__$1 = cljs.core.nth.call(null,vec__31907,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__31907,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__30032__auto__){
var temp__4657__auto___31918 = output_checker31867_31914.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___31918)){
var error__30034__auto___31919 = temp__4657__auto___31918;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__30034__auto___31919)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31864_31911,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___31919], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___31910,output_schema31864_31911,input_schema31865_31912,input_checker31866_31913,output_checker31867_31914))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema31864_31911,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31865_31912], null)));
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
var ufv___32062 = schema.utils.use_fn_validation;
var output_schema31920_32063 = schema.core.Any;
var input_schema31921_32064 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker31922_32065 = schema.core.checker.call(null,input_schema31921_32064);
var output_checker31923_32066 = schema.core.checker.call(null,output_schema31920_32063);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___32062,output_schema31920_32063,input_schema31921_32064,input_checker31922_32065,output_checker31923_32066){
return (function plumbing$fnk$schema$split_schema(G__31924,G__31925){
var validate__30032__auto__ = ufv___32062.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___32067 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31924,G__31925], null);
var temp__4657__auto___32068 = input_checker31922_32065.call(null,args__30033__auto___32067);
if(cljs.core.truth_(temp__4657__auto___32068)){
var error__30034__auto___32069 = temp__4657__auto___32068;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__30034__auto___32069)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31921_32064,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___32067,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___32069], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var s = G__31924;
var ks = G__31925;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__25531__auto__ = ((function (ks__$1,validate__30032__auto__,ufv___32062,output_schema31920_32063,input_schema31921_32064,input_checker31922_32065,output_checker31923_32066){
return (function plumbing$fnk$schema$split_schema_$_iter__31994(s__31995){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__30032__auto__,ufv___32062,output_schema31920_32063,input_schema31921_32064,input_checker31922_32065,output_checker31923_32066){
return (function (){
var s__31995__$1 = s__31995;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31995__$1);
if(temp__4657__auto__){
var s__31995__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31995__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__31995__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__31997 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__31996 = (0);
while(true){
if((i__31996 < size__25530__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__25529__auto__,i__31996);
cljs.core.chunk_append.call(null,b__31997,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = ((function (i__31996,in_QMARK_,c__25529__auto__,size__25530__auto__,b__31997,s__31995__$2,temp__4657__auto__,ks__$1,validate__30032__auto__,ufv___32062,output_schema31920_32063,input_schema31921_32064,input_checker31922_32065,output_checker31923_32066){
return (function plumbing$fnk$schema$split_schema_$_iter__31994_$_iter__32030(s__32031){
return (new cljs.core.LazySeq(null,((function (i__31996,in_QMARK_,c__25529__auto__,size__25530__auto__,b__31997,s__31995__$2,temp__4657__auto__,ks__$1,validate__30032__auto__,ufv___32062,output_schema31920_32063,input_schema31921_32064,input_checker31922_32065,output_checker31923_32066){
return (function (){
var s__32031__$1 = s__32031;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__32031__$1);
if(temp__4657__auto____$1){
var s__32031__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32031__$2)){
var c__25529__auto____$1 = cljs.core.chunk_first.call(null,s__32031__$2);
var size__25530__auto____$1 = cljs.core.count.call(null,c__25529__auto____$1);
var b__32033 = cljs.core.chunk_buffer.call(null,size__25530__auto____$1);
if((function (){var i__32032 = (0);
while(true){
if((i__32032 < size__25530__auto____$1)){
var vec__32040 = cljs.core._nth.call(null,c__25529__auto____$1,i__32032);
var k = cljs.core.nth.call(null,vec__32040,(0),null);
var v = cljs.core.nth.call(null,vec__32040,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24739__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__32033,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__32070 = (i__32032 + (1));
i__32032 = G__32070;
continue;
} else {
var G__32071 = (i__32032 + (1));
i__32032 = G__32071;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32033),plumbing$fnk$schema$split_schema_$_iter__31994_$_iter__32030.call(null,cljs.core.chunk_rest.call(null,s__32031__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32033),null);
}
} else {
var vec__32043 = cljs.core.first.call(null,s__32031__$2);
var k = cljs.core.nth.call(null,vec__32043,(0),null);
var v = cljs.core.nth.call(null,vec__32043,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24739__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__31994_$_iter__32030.call(null,cljs.core.rest.call(null,s__32031__$2)));
} else {
var G__32072 = cljs.core.rest.call(null,s__32031__$2);
s__32031__$1 = G__32072;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__31996,in_QMARK_,c__25529__auto__,size__25530__auto__,b__31997,s__31995__$2,temp__4657__auto__,ks__$1,validate__30032__auto__,ufv___32062,output_schema31920_32063,input_schema31921_32064,input_checker31922_32065,output_checker31923_32066))
,null,null));
});})(i__31996,in_QMARK_,c__25529__auto__,size__25530__auto__,b__31997,s__31995__$2,temp__4657__auto__,ks__$1,validate__30032__auto__,ufv___32062,output_schema31920_32063,input_schema31921_32064,input_checker31922_32065,output_checker31923_32066))
;
return iter__25531__auto__.call(null,s);
})()));

var G__32073 = (i__31996 + (1));
i__31996 = G__32073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31997),plumbing$fnk$schema$split_schema_$_iter__31994.call(null,cljs.core.chunk_rest.call(null,s__31995__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31997),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__31995__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = ((function (in_QMARK_,s__31995__$2,temp__4657__auto__,ks__$1,validate__30032__auto__,ufv___32062,output_schema31920_32063,input_schema31921_32064,input_checker31922_32065,output_checker31923_32066){
return (function plumbing$fnk$schema$split_schema_$_iter__31994_$_iter__32046(s__32047){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__31995__$2,temp__4657__auto__,ks__$1,validate__30032__auto__,ufv___32062,output_schema31920_32063,input_schema31921_32064,input_checker31922_32065,output_checker31923_32066){
return (function (){
var s__32047__$1 = s__32047;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__32047__$1);
if(temp__4657__auto____$1){
var s__32047__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32047__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__32047__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__32049 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__32048 = (0);
while(true){
if((i__32048 < size__25530__auto__)){
var vec__32056 = cljs.core._nth.call(null,c__25529__auto__,i__32048);
var k = cljs.core.nth.call(null,vec__32056,(0),null);
var v = cljs.core.nth.call(null,vec__32056,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24739__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__32049,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__32074 = (i__32048 + (1));
i__32048 = G__32074;
continue;
} else {
var G__32075 = (i__32048 + (1));
i__32048 = G__32075;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32049),plumbing$fnk$schema$split_schema_$_iter__31994_$_iter__32046.call(null,cljs.core.chunk_rest.call(null,s__32047__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32049),null);
}
} else {
var vec__32059 = cljs.core.first.call(null,s__32047__$2);
var k = cljs.core.nth.call(null,vec__32059,(0),null);
var v = cljs.core.nth.call(null,vec__32059,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24739__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__31994_$_iter__32046.call(null,cljs.core.rest.call(null,s__32047__$2)));
} else {
var G__32076 = cljs.core.rest.call(null,s__32047__$2);
s__32047__$1 = G__32076;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__31995__$2,temp__4657__auto__,ks__$1,validate__30032__auto__,ufv___32062,output_schema31920_32063,input_schema31921_32064,input_checker31922_32065,output_checker31923_32066))
,null,null));
});})(in_QMARK_,s__31995__$2,temp__4657__auto__,ks__$1,validate__30032__auto__,ufv___32062,output_schema31920_32063,input_schema31921_32064,input_checker31922_32065,output_checker31923_32066))
;
return iter__25531__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__31994.call(null,cljs.core.rest.call(null,s__31995__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__30032__auto__,ufv___32062,output_schema31920_32063,input_schema31921_32064,input_checker31922_32065,output_checker31923_32066))
,null,null));
});})(ks__$1,validate__30032__auto__,ufv___32062,output_schema31920_32063,input_schema31921_32064,input_checker31922_32065,output_checker31923_32066))
;
return iter__25531__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___32077 = output_checker31923_32066.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___32077)){
var error__30034__auto___32078 = temp__4657__auto___32077;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__30034__auto___32078)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31920_32063,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___32078], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___32062,output_schema31920_32063,input_schema31921_32064,input_checker31922_32065,output_checker31923_32066))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema31920_32063,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31921_32064], null)));
var ufv___32149 = schema.utils.use_fn_validation;
var output_schema32079_32150 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema32080_32151 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker32081_32152 = schema.core.checker.call(null,input_schema32080_32151);
var output_checker32082_32153 = schema.core.checker.call(null,output_schema32079_32150);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___32149,output_schema32079_32150,input_schema32080_32151,input_checker32081_32152,output_checker32082_32153){
return (function plumbing$fnk$schema$sequence_schemata(G__32083,G__32084){
var validate__30032__auto__ = ufv___32149.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___32154 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32083,G__32084], null);
var temp__4657__auto___32155 = input_checker32081_32152.call(null,args__30033__auto___32154);
if(cljs.core.truth_(temp__4657__auto___32155)){
var error__30034__auto___32156 = temp__4657__auto___32155;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__30034__auto___32156)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32080_32151,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___32154,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___32156], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var G__32126 = G__32083;
var vec__32128 = G__32126;
var i1 = cljs.core.nth.call(null,vec__32128,(0),null);
var o1 = cljs.core.nth.call(null,vec__32128,(1),null);
var G__32127 = G__32084;
var vec__32131 = G__32127;
var k = cljs.core.nth.call(null,vec__32131,(0),null);
var vec__32134 = cljs.core.nth.call(null,vec__32131,(1),null);
var i2 = cljs.core.nth.call(null,vec__32134,(0),null);
var o2 = cljs.core.nth.call(null,vec__32134,(1),null);
var G__32126__$1 = G__32126;
var G__32127__$1 = G__32127;
while(true){
var vec__32137 = G__32126__$1;
var i1__$1 = cljs.core.nth.call(null,vec__32137,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__32137,(1),null);
var vec__32140 = G__32127__$1;
var k__$1 = cljs.core.nth.call(null,vec__32140,(0),null);
var vec__32143 = cljs.core.nth.call(null,vec__32140,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__32143,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__32143,(1),null);
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

var vec__32146 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__32146,(0),null);
var unused = cljs.core.nth.call(null,vec__32146,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___32157 = output_checker32082_32153.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___32157)){
var error__30034__auto___32158 = temp__4657__auto___32157;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__30034__auto___32158)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32079_32150,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___32158], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___32149,output_schema32079_32150,input_schema32080_32151,input_checker32081_32152,output_checker32082_32153))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema32079_32150,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32080_32151], null)));

//# sourceMappingURL=schema.js.map?rel=1478445826019