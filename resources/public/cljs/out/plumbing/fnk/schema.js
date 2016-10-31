// Compiled by ClojureScript 1.9.227 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__38992__38993__auto__){
if(!((p1__38992__38993__auto__ == null))){
if((false) || (p1__38992__38993__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__38992__38993__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__38992__38993__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__38992__38993__auto__);
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
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__43950_SHARP_){
return (cljs.core.val.call(null,p1__43950_SHARP_) > (1));
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

var vec__43954 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__43954,(0),null);
var v = cljs.core.nth.call(null,vec__43954,(1),null);
var p = vec__43954;
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
var ufv___43962 = schema.utils.use_fn_validation;
var output_schema43957_43963 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema43958_43964 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker43959_43965 = schema.core.checker.call(null,input_schema43958_43964);
var output_checker43960_43966 = schema.core.checker.call(null,output_schema43957_43963);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___43962,output_schema43957_43963,input_schema43958_43964,input_checker43959_43965,output_checker43960_43966){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__43961){
var validate__37921__auto__ = ufv___43962.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___43967 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43961], null);
var temp__4657__auto___43968 = input_checker43959_43965.call(null,args__37922__auto___43967);
if(cljs.core.truth_(temp__4657__auto___43968)){
var error__37923__auto___43969 = temp__4657__auto___43968;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__37923__auto___43969)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43958_43964,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___43967,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___43969], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var k = G__43961;
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
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___43970 = output_checker43960_43966.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___43970)){
var error__37923__auto___43971 = temp__4657__auto___43970;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__37923__auto___43971)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43957_43963,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___43971], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___43962,output_schema43957_43963,input_schema43958_43964,input_checker43959_43965,output_checker43960_43966))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema43957_43963,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43958_43964], null)));
var ufv___43977 = schema.utils.use_fn_validation;
var output_schema43972_43978 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema43973_43979 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker43974_43980 = schema.core.checker.call(null,input_schema43973_43979);
var output_checker43975_43981 = schema.core.checker.call(null,output_schema43972_43978);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___43977,output_schema43972_43978,input_schema43973_43979,input_checker43974_43980,output_checker43975_43981){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__43976){
var validate__37921__auto__ = ufv___43977.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___43982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43976], null);
var temp__4657__auto___43983 = input_checker43974_43980.call(null,args__37922__auto___43982);
if(cljs.core.truth_(temp__4657__auto___43983)){
var error__37923__auto___43984 = temp__4657__auto___43983;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__37923__auto___43984)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43973_43979,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___43982,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___43984], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var s = G__43976;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___43985 = output_checker43975_43981.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___43985)){
var error__37923__auto___43986 = temp__4657__auto___43985;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__37923__auto___43986)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43972_43978,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___43986], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___43977,output_schema43972_43978,input_schema43973_43979,input_checker43974_43980,output_checker43975_43981))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema43972_43978,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43973_43979], null)));
var ufv___43992 = schema.utils.use_fn_validation;
var output_schema43987_43993 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema43988_43994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker43989_43995 = schema.core.checker.call(null,input_schema43988_43994);
var output_checker43990_43996 = schema.core.checker.call(null,output_schema43987_43993);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___43992,output_schema43987_43993,input_schema43988_43994,input_checker43989_43995,output_checker43990_43996){
return (function plumbing$fnk$schema$split_schema_keys(G__43991){
var validate__37921__auto__ = ufv___43992.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___43997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43991], null);
var temp__4657__auto___43998 = input_checker43989_43995.call(null,args__37922__auto___43997);
if(cljs.core.truth_(temp__4657__auto___43998)){
var error__37923__auto___43999 = temp__4657__auto___43998;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__37923__auto___43999)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43988_43994,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___43997,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___43999], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var s = G__43991;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___44000 = output_checker43990_43996.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___44000)){
var error__37923__auto___44001 = temp__4657__auto___44000;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__37923__auto___44001)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43987_43993,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___44001], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___43992,output_schema43987_43993,input_schema43988_43994,input_checker43989_43995,output_checker43990_43996))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema43987_43993,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43988_43994], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__25833__auto__ = [];
var len__25826__auto___44013 = arguments.length;
var i__25827__auto___44014 = (0);
while(true){
if((i__25827__auto___44014 < len__25826__auto___44013)){
args__25833__auto__.push((arguments[i__25827__auto___44014]));

var G__44015 = (i__25827__auto___44014 + (1));
i__25827__auto___44014 = G__44015;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__44006){
var vec__44007 = p__44006;
var k = cljs.core.nth.call(null,vec__44007,(0),null);
var v = cljs.core.nth.call(null,vec__44007,(1),null);
var pk = key_project.call(null,k);
var temp__4655__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__44010 = temp__4655__auto__;
var ok = cljs.core.nth.call(null,vec__44010,(0),null);
var ov = cljs.core.nth.call(null,vec__44010,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq44002){
var G__44003 = cljs.core.first.call(null,seq44002);
var seq44002__$1 = cljs.core.next.call(null,seq44002);
var G__44004 = cljs.core.first.call(null,seq44002__$1);
var seq44002__$2 = cljs.core.next.call(null,seq44002__$1);
var G__44005 = cljs.core.first.call(null,seq44002__$2);
var seq44002__$3 = cljs.core.next.call(null,seq44002__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__44003,G__44004,G__44005,seq44002__$3);
});

var ufv___44023 = schema.utils.use_fn_validation;
var output_schema44017_44024 = plumbing.fnk.schema.InputSchema;
var input_schema44018_44025 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker44019_44026 = schema.core.checker.call(null,input_schema44018_44025);
var output_checker44020_44027 = schema.core.checker.call(null,output_schema44017_44024);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___44023,output_schema44017_44024,input_schema44018_44025,input_checker44019_44026,output_checker44020_44027){
return (function plumbing$fnk$schema$union_input_schemata(G__44021,G__44022){
var validate__37921__auto__ = ufv___44023.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___44028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44021,G__44022], null);
var temp__4657__auto___44029 = input_checker44019_44026.call(null,args__37922__auto___44028);
if(cljs.core.truth_(temp__4657__auto___44029)){
var error__37923__auto___44030 = temp__4657__auto___44029;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__37923__auto___44030)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44018_44025,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___44028,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___44030], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var i1 = G__44021;
var i2 = G__44022;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__37921__auto__,ufv___44023,output_schema44017_44024,input_schema44018_44025,input_checker44019_44026,output_checker44020_44027){
return (function (p1__44016_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__44016_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__44016_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__37921__auto__,ufv___44023,output_schema44017_44024,input_schema44018_44025,input_checker44019_44026,output_checker44020_44027))
,((function (validate__37921__auto__,ufv___44023,output_schema44017_44024,input_schema44018_44025,input_checker44019_44026,output_checker44020_44027){
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
});})(validate__37921__auto__,ufv___44023,output_schema44017_44024,input_schema44018_44025,input_checker44019_44026,output_checker44020_44027))
,((function (validate__37921__auto__,ufv___44023,output_schema44017_44024,input_schema44018_44025,input_checker44019_44026,output_checker44020_44027){
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
});})(validate__37921__auto__,ufv___44023,output_schema44017_44024,input_schema44018_44025,input_checker44019_44026,output_checker44020_44027))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___44031 = output_checker44020_44027.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___44031)){
var error__37923__auto___44032 = temp__4657__auto___44031;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__37923__auto___44032)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44017_44024,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___44032], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___44023,output_schema44017_44024,input_schema44018_44025,input_checker44019_44026,output_checker44020_44027))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema44017_44024,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44018_44025], null)));
var ufv___44038 = schema.utils.use_fn_validation;
var output_schema44033_44039 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema44034_44040 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker44035_44041 = schema.core.checker.call(null,input_schema44034_44040);
var output_checker44036_44042 = schema.core.checker.call(null,output_schema44033_44039);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___44038,output_schema44033_44039,input_schema44034_44040,input_checker44035_44041,output_checker44036_44042){
return (function plumbing$fnk$schema$required_toplevel_keys(G__44037){
var validate__37921__auto__ = ufv___44038.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___44043 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44037], null);
var temp__4657__auto___44044 = input_checker44035_44041.call(null,args__37922__auto___44043);
if(cljs.core.truth_(temp__4657__auto___44044)){
var error__37923__auto___44045 = temp__4657__auto___44044;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__37923__auto___44045)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44034_44040,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___44043,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___44045], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var input_schema = G__44037;
while(true){
return cljs.core.keep.call(null,((function (validate__37921__auto__,ufv___44038,output_schema44033_44039,input_schema44034_44040,input_checker44035_44041,output_checker44036_44042){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__37921__auto__,ufv___44038,output_schema44033_44039,input_schema44034_44040,input_checker44035_44041,output_checker44036_44042))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___44046 = output_checker44036_44042.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___44046)){
var error__37923__auto___44047 = temp__4657__auto___44046;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__37923__auto___44047)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44033_44039,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___44047], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___44038,output_schema44033_44039,input_schema44034_44040,input_checker44035_44041,output_checker44036_44042))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema44033_44039,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44034_44040], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__44064(s__44065){
return (new cljs.core.LazySeq(null,(function (){
var s__44065__$1 = s__44065;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44065__$1);
if(temp__4657__auto__){
var s__44065__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44065__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__44065__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__44067 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__44066 = (0);
while(true){
if((i__44066 < size__25530__auto__)){
var vec__44074 = cljs.core._nth.call(null,c__25529__auto__,i__44066);
var k = cljs.core.nth.call(null,vec__44074,(0),null);
var v = cljs.core.nth.call(null,vec__44074,(1),null);
cljs.core.chunk_append.call(null,b__44067,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__44080 = (i__44066 + (1));
i__44066 = G__44080;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44067),plumbing$fnk$schema$guess_expr_output_schema_$_iter__44064.call(null,cljs.core.chunk_rest.call(null,s__44065__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44067),null);
}
} else {
var vec__44077 = cljs.core.first.call(null,s__44065__$2);
var k = cljs.core.nth.call(null,vec__44077,(0),null);
var v = cljs.core.nth.call(null,vec__44077,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__44064.call(null,cljs.core.rest.call(null,s__44065__$2)));
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
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__44097(s__44098){
return (new cljs.core.LazySeq(null,(function (){
var s__44098__$1 = s__44098;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44098__$1);
if(temp__4657__auto__){
var s__44098__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44098__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__44098__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__44100 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__44099 = (0);
while(true){
if((i__44099 < size__25530__auto__)){
var vec__44107 = cljs.core._nth.call(null,c__25529__auto__,i__44099);
var k = cljs.core.nth.call(null,vec__44107,(0),null);
var v = cljs.core.nth.call(null,vec__44107,(1),null);
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
cljs.core.chunk_append.call(null,b__44100,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__44113 = (i__44099 + (1));
i__44099 = G__44113;
continue;
} else {
var G__44114 = (i__44099 + (1));
i__44099 = G__44114;
continue;
}
} else {
var G__44115 = (i__44099 + (1));
i__44099 = G__44115;
continue;
}
} else {
var G__44116 = (i__44099 + (1));
i__44099 = G__44116;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44100),plumbing$fnk$schema$schema_diff_$_iter__44097.call(null,cljs.core.chunk_rest.call(null,s__44098__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44100),null);
}
} else {
var vec__44110 = cljs.core.first.call(null,s__44098__$2);
var k = cljs.core.nth.call(null,vec__44110,(0),null);
var v = cljs.core.nth.call(null,vec__44110,(1),null);
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
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__44097.call(null,cljs.core.rest.call(null,s__44098__$2)));
} else {
var G__44117 = cljs.core.rest.call(null,s__44098__$2);
s__44098__$1 = G__44117;
continue;
}
} else {
var G__44118 = cljs.core.rest.call(null,s__44098__$2);
s__44098__$1 = G__44118;
continue;
}
} else {
var G__44119 = cljs.core.rest.call(null,s__44098__$2);
s__44098__$1 = G__44119;
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
var ufv___44166 = schema.utils.use_fn_validation;
var output_schema44120_44167 = schema.core.Any;
var input_schema44121_44168 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker44122_44169 = schema.core.checker.call(null,input_schema44121_44168);
var output_checker44123_44170 = schema.core.checker.call(null,output_schema44120_44167);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___44166,output_schema44120_44167,input_schema44121_44168,input_checker44122_44169,output_checker44123_44170){
return (function plumbing$fnk$schema$compose_schemata(G__44124,G__44125){
var validate__37921__auto__ = true;
if(validate__37921__auto__){
var args__37922__auto___44171 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44124,G__44125], null);
var temp__4657__auto___44172 = input_checker44122_44169.call(null,args__37922__auto___44171);
if(cljs.core.truth_(temp__4657__auto___44172)){
var error__37923__auto___44173 = temp__4657__auto___44172;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__37923__auto___44173)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44121_44168,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___44171,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___44173], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var G__44152 = G__44124;
var vec__44154 = G__44152;
var i2 = cljs.core.nth.call(null,vec__44154,(0),null);
var o2 = cljs.core.nth.call(null,vec__44154,(1),null);
var G__44153 = G__44125;
var vec__44157 = G__44153;
var i1 = cljs.core.nth.call(null,vec__44157,(0),null);
var o1 = cljs.core.nth.call(null,vec__44157,(1),null);
var G__44152__$1 = G__44152;
var G__44153__$1 = G__44153;
while(true){
var vec__44160 = G__44152__$1;
var i2__$1 = cljs.core.nth.call(null,vec__44160,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__44160,(1),null);
var vec__44163 = G__44153__$1;
var i1__$1 = cljs.core.nth.call(null,vec__44163,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__44163,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__37921__auto__){
var temp__4657__auto___44174 = output_checker44123_44170.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___44174)){
var error__37923__auto___44175 = temp__4657__auto___44174;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__37923__auto___44175)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44120_44167,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___44175], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___44166,output_schema44120_44167,input_schema44121_44168,input_checker44122_44169,output_checker44123_44170))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema44120_44167,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44121_44168], null)));
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
var ufv___44318 = schema.utils.use_fn_validation;
var output_schema44176_44319 = schema.core.Any;
var input_schema44177_44320 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker44178_44321 = schema.core.checker.call(null,input_schema44177_44320);
var output_checker44179_44322 = schema.core.checker.call(null,output_schema44176_44319);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___44318,output_schema44176_44319,input_schema44177_44320,input_checker44178_44321,output_checker44179_44322){
return (function plumbing$fnk$schema$split_schema(G__44180,G__44181){
var validate__37921__auto__ = ufv___44318.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___44323 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44180,G__44181], null);
var temp__4657__auto___44324 = input_checker44178_44321.call(null,args__37922__auto___44323);
if(cljs.core.truth_(temp__4657__auto___44324)){
var error__37923__auto___44325 = temp__4657__auto___44324;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__37923__auto___44325)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44177_44320,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___44323,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___44325], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var s = G__44180;
var ks = G__44181;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__25531__auto__ = ((function (ks__$1,validate__37921__auto__,ufv___44318,output_schema44176_44319,input_schema44177_44320,input_checker44178_44321,output_checker44179_44322){
return (function plumbing$fnk$schema$split_schema_$_iter__44250(s__44251){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__37921__auto__,ufv___44318,output_schema44176_44319,input_schema44177_44320,input_checker44178_44321,output_checker44179_44322){
return (function (){
var s__44251__$1 = s__44251;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44251__$1);
if(temp__4657__auto__){
var s__44251__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44251__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__44251__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__44253 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__44252 = (0);
while(true){
if((i__44252 < size__25530__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__25529__auto__,i__44252);
cljs.core.chunk_append.call(null,b__44253,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = ((function (i__44252,in_QMARK_,c__25529__auto__,size__25530__auto__,b__44253,s__44251__$2,temp__4657__auto__,ks__$1,validate__37921__auto__,ufv___44318,output_schema44176_44319,input_schema44177_44320,input_checker44178_44321,output_checker44179_44322){
return (function plumbing$fnk$schema$split_schema_$_iter__44250_$_iter__44286(s__44287){
return (new cljs.core.LazySeq(null,((function (i__44252,in_QMARK_,c__25529__auto__,size__25530__auto__,b__44253,s__44251__$2,temp__4657__auto__,ks__$1,validate__37921__auto__,ufv___44318,output_schema44176_44319,input_schema44177_44320,input_checker44178_44321,output_checker44179_44322){
return (function (){
var s__44287__$1 = s__44287;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__44287__$1);
if(temp__4657__auto____$1){
var s__44287__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44287__$2)){
var c__25529__auto____$1 = cljs.core.chunk_first.call(null,s__44287__$2);
var size__25530__auto____$1 = cljs.core.count.call(null,c__25529__auto____$1);
var b__44289 = cljs.core.chunk_buffer.call(null,size__25530__auto____$1);
if((function (){var i__44288 = (0);
while(true){
if((i__44288 < size__25530__auto____$1)){
var vec__44296 = cljs.core._nth.call(null,c__25529__auto____$1,i__44288);
var k = cljs.core.nth.call(null,vec__44296,(0),null);
var v = cljs.core.nth.call(null,vec__44296,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24739__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__44289,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__44326 = (i__44288 + (1));
i__44288 = G__44326;
continue;
} else {
var G__44327 = (i__44288 + (1));
i__44288 = G__44327;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44289),plumbing$fnk$schema$split_schema_$_iter__44250_$_iter__44286.call(null,cljs.core.chunk_rest.call(null,s__44287__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44289),null);
}
} else {
var vec__44299 = cljs.core.first.call(null,s__44287__$2);
var k = cljs.core.nth.call(null,vec__44299,(0),null);
var v = cljs.core.nth.call(null,vec__44299,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24739__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__44250_$_iter__44286.call(null,cljs.core.rest.call(null,s__44287__$2)));
} else {
var G__44328 = cljs.core.rest.call(null,s__44287__$2);
s__44287__$1 = G__44328;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__44252,in_QMARK_,c__25529__auto__,size__25530__auto__,b__44253,s__44251__$2,temp__4657__auto__,ks__$1,validate__37921__auto__,ufv___44318,output_schema44176_44319,input_schema44177_44320,input_checker44178_44321,output_checker44179_44322))
,null,null));
});})(i__44252,in_QMARK_,c__25529__auto__,size__25530__auto__,b__44253,s__44251__$2,temp__4657__auto__,ks__$1,validate__37921__auto__,ufv___44318,output_schema44176_44319,input_schema44177_44320,input_checker44178_44321,output_checker44179_44322))
;
return iter__25531__auto__.call(null,s);
})()));

var G__44329 = (i__44252 + (1));
i__44252 = G__44329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44253),plumbing$fnk$schema$split_schema_$_iter__44250.call(null,cljs.core.chunk_rest.call(null,s__44251__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44253),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__44251__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = ((function (in_QMARK_,s__44251__$2,temp__4657__auto__,ks__$1,validate__37921__auto__,ufv___44318,output_schema44176_44319,input_schema44177_44320,input_checker44178_44321,output_checker44179_44322){
return (function plumbing$fnk$schema$split_schema_$_iter__44250_$_iter__44302(s__44303){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__44251__$2,temp__4657__auto__,ks__$1,validate__37921__auto__,ufv___44318,output_schema44176_44319,input_schema44177_44320,input_checker44178_44321,output_checker44179_44322){
return (function (){
var s__44303__$1 = s__44303;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__44303__$1);
if(temp__4657__auto____$1){
var s__44303__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44303__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__44303__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__44305 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__44304 = (0);
while(true){
if((i__44304 < size__25530__auto__)){
var vec__44312 = cljs.core._nth.call(null,c__25529__auto__,i__44304);
var k = cljs.core.nth.call(null,vec__44312,(0),null);
var v = cljs.core.nth.call(null,vec__44312,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24739__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__44305,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__44330 = (i__44304 + (1));
i__44304 = G__44330;
continue;
} else {
var G__44331 = (i__44304 + (1));
i__44304 = G__44331;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44305),plumbing$fnk$schema$split_schema_$_iter__44250_$_iter__44302.call(null,cljs.core.chunk_rest.call(null,s__44303__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44305),null);
}
} else {
var vec__44315 = cljs.core.first.call(null,s__44303__$2);
var k = cljs.core.nth.call(null,vec__44315,(0),null);
var v = cljs.core.nth.call(null,vec__44315,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24739__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__44250_$_iter__44302.call(null,cljs.core.rest.call(null,s__44303__$2)));
} else {
var G__44332 = cljs.core.rest.call(null,s__44303__$2);
s__44303__$1 = G__44332;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__44251__$2,temp__4657__auto__,ks__$1,validate__37921__auto__,ufv___44318,output_schema44176_44319,input_schema44177_44320,input_checker44178_44321,output_checker44179_44322))
,null,null));
});})(in_QMARK_,s__44251__$2,temp__4657__auto__,ks__$1,validate__37921__auto__,ufv___44318,output_schema44176_44319,input_schema44177_44320,input_checker44178_44321,output_checker44179_44322))
;
return iter__25531__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__44250.call(null,cljs.core.rest.call(null,s__44251__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__37921__auto__,ufv___44318,output_schema44176_44319,input_schema44177_44320,input_checker44178_44321,output_checker44179_44322))
,null,null));
});})(ks__$1,validate__37921__auto__,ufv___44318,output_schema44176_44319,input_schema44177_44320,input_checker44178_44321,output_checker44179_44322))
;
return iter__25531__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___44333 = output_checker44179_44322.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___44333)){
var error__37923__auto___44334 = temp__4657__auto___44333;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__37923__auto___44334)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44176_44319,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___44334], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___44318,output_schema44176_44319,input_schema44177_44320,input_checker44178_44321,output_checker44179_44322))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema44176_44319,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44177_44320], null)));
var ufv___44405 = schema.utils.use_fn_validation;
var output_schema44335_44406 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema44336_44407 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker44337_44408 = schema.core.checker.call(null,input_schema44336_44407);
var output_checker44338_44409 = schema.core.checker.call(null,output_schema44335_44406);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___44405,output_schema44335_44406,input_schema44336_44407,input_checker44337_44408,output_checker44338_44409){
return (function plumbing$fnk$schema$sequence_schemata(G__44339,G__44340){
var validate__37921__auto__ = ufv___44405.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___44410 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44339,G__44340], null);
var temp__4657__auto___44411 = input_checker44337_44408.call(null,args__37922__auto___44410);
if(cljs.core.truth_(temp__4657__auto___44411)){
var error__37923__auto___44412 = temp__4657__auto___44411;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__37923__auto___44412)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44336_44407,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___44410,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___44412], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var G__44382 = G__44339;
var vec__44384 = G__44382;
var i1 = cljs.core.nth.call(null,vec__44384,(0),null);
var o1 = cljs.core.nth.call(null,vec__44384,(1),null);
var G__44383 = G__44340;
var vec__44387 = G__44383;
var k = cljs.core.nth.call(null,vec__44387,(0),null);
var vec__44390 = cljs.core.nth.call(null,vec__44387,(1),null);
var i2 = cljs.core.nth.call(null,vec__44390,(0),null);
var o2 = cljs.core.nth.call(null,vec__44390,(1),null);
var G__44382__$1 = G__44382;
var G__44383__$1 = G__44383;
while(true){
var vec__44393 = G__44382__$1;
var i1__$1 = cljs.core.nth.call(null,vec__44393,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__44393,(1),null);
var vec__44396 = G__44383__$1;
var k__$1 = cljs.core.nth.call(null,vec__44396,(0),null);
var vec__44399 = cljs.core.nth.call(null,vec__44396,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__44399,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__44399,(1),null);
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

var vec__44402 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__44402,(0),null);
var unused = cljs.core.nth.call(null,vec__44402,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___44413 = output_checker44338_44409.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___44413)){
var error__37923__auto___44414 = temp__4657__auto___44413;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__37923__auto___44414)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44335_44406,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___44414], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___44405,output_schema44335_44406,input_schema44336_44407,input_checker44337_44408,output_checker44338_44409))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema44335_44406,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44336_44407], null)));

//# sourceMappingURL=schema.js.map?rel=1477762287510