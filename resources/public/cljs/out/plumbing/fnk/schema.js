// Compiled by ClojureScript 1.9.227 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__39357__39358__auto__){
if(!((p1__39357__39358__auto__ == null))){
if((false) || (p1__39357__39358__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__39357__39358__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__39357__39358__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__39357__39358__auto__);
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
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__69820_SHARP_){
return (cljs.core.val.call(null,p1__69820_SHARP_) > (1));
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

var vec__69824 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__69824,(0),null);
var v = cljs.core.nth.call(null,vec__69824,(1),null);
var p = vec__69824;
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
var ufv___69832 = schema.utils.use_fn_validation;
var output_schema69827_69833 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema69828_69834 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker69829_69835 = schema.core.checker.call(null,input_schema69828_69834);
var output_checker69830_69836 = schema.core.checker.call(null,output_schema69827_69833);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___69832,output_schema69827_69833,input_schema69828_69834,input_checker69829_69835,output_checker69830_69836){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__69831){
var validate__38286__auto__ = ufv___69832.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___69837 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69831], null);
var temp__4657__auto___69838 = input_checker69829_69835.call(null,args__38287__auto___69837);
if(cljs.core.truth_(temp__4657__auto___69838)){
var error__38288__auto___69839 = temp__4657__auto___69838;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__38288__auto___69839)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69828_69834,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___69837,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___69839], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var k = G__69831;
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
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___69840 = output_checker69830_69836.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___69840)){
var error__38288__auto___69841 = temp__4657__auto___69840;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__38288__auto___69841)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69827_69833,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___69841], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___69832,output_schema69827_69833,input_schema69828_69834,input_checker69829_69835,output_checker69830_69836))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema69827_69833,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69828_69834], null)));
var ufv___69847 = schema.utils.use_fn_validation;
var output_schema69842_69848 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema69843_69849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker69844_69850 = schema.core.checker.call(null,input_schema69843_69849);
var output_checker69845_69851 = schema.core.checker.call(null,output_schema69842_69848);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___69847,output_schema69842_69848,input_schema69843_69849,input_checker69844_69850,output_checker69845_69851){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__69846){
var validate__38286__auto__ = ufv___69847.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___69852 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69846], null);
var temp__4657__auto___69853 = input_checker69844_69850.call(null,args__38287__auto___69852);
if(cljs.core.truth_(temp__4657__auto___69853)){
var error__38288__auto___69854 = temp__4657__auto___69853;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__38288__auto___69854)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69843_69849,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___69852,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___69854], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var s = G__69846;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___69855 = output_checker69845_69851.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___69855)){
var error__38288__auto___69856 = temp__4657__auto___69855;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__38288__auto___69856)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69842_69848,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___69856], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___69847,output_schema69842_69848,input_schema69843_69849,input_checker69844_69850,output_checker69845_69851))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema69842_69848,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69843_69849], null)));
var ufv___69862 = schema.utils.use_fn_validation;
var output_schema69857_69863 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema69858_69864 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker69859_69865 = schema.core.checker.call(null,input_schema69858_69864);
var output_checker69860_69866 = schema.core.checker.call(null,output_schema69857_69863);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___69862,output_schema69857_69863,input_schema69858_69864,input_checker69859_69865,output_checker69860_69866){
return (function plumbing$fnk$schema$split_schema_keys(G__69861){
var validate__38286__auto__ = ufv___69862.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___69867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69861], null);
var temp__4657__auto___69868 = input_checker69859_69865.call(null,args__38287__auto___69867);
if(cljs.core.truth_(temp__4657__auto___69868)){
var error__38288__auto___69869 = temp__4657__auto___69868;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__38288__auto___69869)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69858_69864,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___69867,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___69869], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var s = G__69861;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___69870 = output_checker69860_69866.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___69870)){
var error__38288__auto___69871 = temp__4657__auto___69870;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__38288__auto___69871)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69857_69863,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___69871], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___69862,output_schema69857_69863,input_schema69858_69864,input_checker69859_69865,output_checker69860_69866))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema69857_69863,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69858_69864], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__25833__auto__ = [];
var len__25826__auto___69883 = arguments.length;
var i__25827__auto___69884 = (0);
while(true){
if((i__25827__auto___69884 < len__25826__auto___69883)){
args__25833__auto__.push((arguments[i__25827__auto___69884]));

var G__69885 = (i__25827__auto___69884 + (1));
i__25827__auto___69884 = G__69885;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__69876){
var vec__69877 = p__69876;
var k = cljs.core.nth.call(null,vec__69877,(0),null);
var v = cljs.core.nth.call(null,vec__69877,(1),null);
var pk = key_project.call(null,k);
var temp__4655__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__69880 = temp__4655__auto__;
var ok = cljs.core.nth.call(null,vec__69880,(0),null);
var ov = cljs.core.nth.call(null,vec__69880,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq69872){
var G__69873 = cljs.core.first.call(null,seq69872);
var seq69872__$1 = cljs.core.next.call(null,seq69872);
var G__69874 = cljs.core.first.call(null,seq69872__$1);
var seq69872__$2 = cljs.core.next.call(null,seq69872__$1);
var G__69875 = cljs.core.first.call(null,seq69872__$2);
var seq69872__$3 = cljs.core.next.call(null,seq69872__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__69873,G__69874,G__69875,seq69872__$3);
});

var ufv___69893 = schema.utils.use_fn_validation;
var output_schema69887_69894 = plumbing.fnk.schema.InputSchema;
var input_schema69888_69895 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker69889_69896 = schema.core.checker.call(null,input_schema69888_69895);
var output_checker69890_69897 = schema.core.checker.call(null,output_schema69887_69894);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___69893,output_schema69887_69894,input_schema69888_69895,input_checker69889_69896,output_checker69890_69897){
return (function plumbing$fnk$schema$union_input_schemata(G__69891,G__69892){
var validate__38286__auto__ = ufv___69893.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___69898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69891,G__69892], null);
var temp__4657__auto___69899 = input_checker69889_69896.call(null,args__38287__auto___69898);
if(cljs.core.truth_(temp__4657__auto___69899)){
var error__38288__auto___69900 = temp__4657__auto___69899;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__38288__auto___69900)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69888_69895,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___69898,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___69900], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var i1 = G__69891;
var i2 = G__69892;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__38286__auto__,ufv___69893,output_schema69887_69894,input_schema69888_69895,input_checker69889_69896,output_checker69890_69897){
return (function (p1__69886_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__69886_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__69886_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__38286__auto__,ufv___69893,output_schema69887_69894,input_schema69888_69895,input_checker69889_69896,output_checker69890_69897))
,((function (validate__38286__auto__,ufv___69893,output_schema69887_69894,input_schema69888_69895,input_checker69889_69896,output_checker69890_69897){
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
});})(validate__38286__auto__,ufv___69893,output_schema69887_69894,input_schema69888_69895,input_checker69889_69896,output_checker69890_69897))
,((function (validate__38286__auto__,ufv___69893,output_schema69887_69894,input_schema69888_69895,input_checker69889_69896,output_checker69890_69897){
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
});})(validate__38286__auto__,ufv___69893,output_schema69887_69894,input_schema69888_69895,input_checker69889_69896,output_checker69890_69897))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___69901 = output_checker69890_69897.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___69901)){
var error__38288__auto___69902 = temp__4657__auto___69901;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__38288__auto___69902)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69887_69894,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___69902], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___69893,output_schema69887_69894,input_schema69888_69895,input_checker69889_69896,output_checker69890_69897))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema69887_69894,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69888_69895], null)));
var ufv___69908 = schema.utils.use_fn_validation;
var output_schema69903_69909 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema69904_69910 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker69905_69911 = schema.core.checker.call(null,input_schema69904_69910);
var output_checker69906_69912 = schema.core.checker.call(null,output_schema69903_69909);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___69908,output_schema69903_69909,input_schema69904_69910,input_checker69905_69911,output_checker69906_69912){
return (function plumbing$fnk$schema$required_toplevel_keys(G__69907){
var validate__38286__auto__ = ufv___69908.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___69913 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69907], null);
var temp__4657__auto___69914 = input_checker69905_69911.call(null,args__38287__auto___69913);
if(cljs.core.truth_(temp__4657__auto___69914)){
var error__38288__auto___69915 = temp__4657__auto___69914;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__38288__auto___69915)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69904_69910,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___69913,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___69915], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var input_schema = G__69907;
while(true){
return cljs.core.keep.call(null,((function (validate__38286__auto__,ufv___69908,output_schema69903_69909,input_schema69904_69910,input_checker69905_69911,output_checker69906_69912){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__38286__auto__,ufv___69908,output_schema69903_69909,input_schema69904_69910,input_checker69905_69911,output_checker69906_69912))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___69916 = output_checker69906_69912.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___69916)){
var error__38288__auto___69917 = temp__4657__auto___69916;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__38288__auto___69917)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69903_69909,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___69917], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___69908,output_schema69903_69909,input_schema69904_69910,input_checker69905_69911,output_checker69906_69912))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema69903_69909,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69904_69910], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__69934(s__69935){
return (new cljs.core.LazySeq(null,(function (){
var s__69935__$1 = s__69935;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__69935__$1);
if(temp__4657__auto__){
var s__69935__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__69935__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__69935__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__69937 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__69936 = (0);
while(true){
if((i__69936 < size__25530__auto__)){
var vec__69944 = cljs.core._nth.call(null,c__25529__auto__,i__69936);
var k = cljs.core.nth.call(null,vec__69944,(0),null);
var v = cljs.core.nth.call(null,vec__69944,(1),null);
cljs.core.chunk_append.call(null,b__69937,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__69950 = (i__69936 + (1));
i__69936 = G__69950;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69937),plumbing$fnk$schema$guess_expr_output_schema_$_iter__69934.call(null,cljs.core.chunk_rest.call(null,s__69935__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69937),null);
}
} else {
var vec__69947 = cljs.core.first.call(null,s__69935__$2);
var k = cljs.core.nth.call(null,vec__69947,(0),null);
var v = cljs.core.nth.call(null,vec__69947,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__69934.call(null,cljs.core.rest.call(null,s__69935__$2)));
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
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__69967(s__69968){
return (new cljs.core.LazySeq(null,(function (){
var s__69968__$1 = s__69968;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__69968__$1);
if(temp__4657__auto__){
var s__69968__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__69968__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__69968__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__69970 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__69969 = (0);
while(true){
if((i__69969 < size__25530__auto__)){
var vec__69977 = cljs.core._nth.call(null,c__25529__auto__,i__69969);
var k = cljs.core.nth.call(null,vec__69977,(0),null);
var v = cljs.core.nth.call(null,vec__69977,(1),null);
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
cljs.core.chunk_append.call(null,b__69970,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__69983 = (i__69969 + (1));
i__69969 = G__69983;
continue;
} else {
var G__69984 = (i__69969 + (1));
i__69969 = G__69984;
continue;
}
} else {
var G__69985 = (i__69969 + (1));
i__69969 = G__69985;
continue;
}
} else {
var G__69986 = (i__69969 + (1));
i__69969 = G__69986;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69970),plumbing$fnk$schema$schema_diff_$_iter__69967.call(null,cljs.core.chunk_rest.call(null,s__69968__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69970),null);
}
} else {
var vec__69980 = cljs.core.first.call(null,s__69968__$2);
var k = cljs.core.nth.call(null,vec__69980,(0),null);
var v = cljs.core.nth.call(null,vec__69980,(1),null);
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
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__69967.call(null,cljs.core.rest.call(null,s__69968__$2)));
} else {
var G__69987 = cljs.core.rest.call(null,s__69968__$2);
s__69968__$1 = G__69987;
continue;
}
} else {
var G__69988 = cljs.core.rest.call(null,s__69968__$2);
s__69968__$1 = G__69988;
continue;
}
} else {
var G__69989 = cljs.core.rest.call(null,s__69968__$2);
s__69968__$1 = G__69989;
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
var ufv___70036 = schema.utils.use_fn_validation;
var output_schema69990_70037 = schema.core.Any;
var input_schema69991_70038 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker69992_70039 = schema.core.checker.call(null,input_schema69991_70038);
var output_checker69993_70040 = schema.core.checker.call(null,output_schema69990_70037);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___70036,output_schema69990_70037,input_schema69991_70038,input_checker69992_70039,output_checker69993_70040){
return (function plumbing$fnk$schema$compose_schemata(G__69994,G__69995){
var validate__38286__auto__ = true;
if(validate__38286__auto__){
var args__38287__auto___70041 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69994,G__69995], null);
var temp__4657__auto___70042 = input_checker69992_70039.call(null,args__38287__auto___70041);
if(cljs.core.truth_(temp__4657__auto___70042)){
var error__38288__auto___70043 = temp__4657__auto___70042;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__38288__auto___70043)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69991_70038,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___70041,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___70043], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var G__70022 = G__69994;
var vec__70024 = G__70022;
var i2 = cljs.core.nth.call(null,vec__70024,(0),null);
var o2 = cljs.core.nth.call(null,vec__70024,(1),null);
var G__70023 = G__69995;
var vec__70027 = G__70023;
var i1 = cljs.core.nth.call(null,vec__70027,(0),null);
var o1 = cljs.core.nth.call(null,vec__70027,(1),null);
var G__70022__$1 = G__70022;
var G__70023__$1 = G__70023;
while(true){
var vec__70030 = G__70022__$1;
var i2__$1 = cljs.core.nth.call(null,vec__70030,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__70030,(1),null);
var vec__70033 = G__70023__$1;
var i1__$1 = cljs.core.nth.call(null,vec__70033,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__70033,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__38286__auto__){
var temp__4657__auto___70044 = output_checker69993_70040.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___70044)){
var error__38288__auto___70045 = temp__4657__auto___70044;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__38288__auto___70045)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69990_70037,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___70045], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___70036,output_schema69990_70037,input_schema69991_70038,input_checker69992_70039,output_checker69993_70040))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema69990_70037,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69991_70038], null)));
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
var ufv___70188 = schema.utils.use_fn_validation;
var output_schema70046_70189 = schema.core.Any;
var input_schema70047_70190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker70048_70191 = schema.core.checker.call(null,input_schema70047_70190);
var output_checker70049_70192 = schema.core.checker.call(null,output_schema70046_70189);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___70188,output_schema70046_70189,input_schema70047_70190,input_checker70048_70191,output_checker70049_70192){
return (function plumbing$fnk$schema$split_schema(G__70050,G__70051){
var validate__38286__auto__ = ufv___70188.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___70193 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__70050,G__70051], null);
var temp__4657__auto___70194 = input_checker70048_70191.call(null,args__38287__auto___70193);
if(cljs.core.truth_(temp__4657__auto___70194)){
var error__38288__auto___70195 = temp__4657__auto___70194;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__38288__auto___70195)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema70047_70190,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___70193,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___70195], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var s = G__70050;
var ks = G__70051;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__25531__auto__ = ((function (ks__$1,validate__38286__auto__,ufv___70188,output_schema70046_70189,input_schema70047_70190,input_checker70048_70191,output_checker70049_70192){
return (function plumbing$fnk$schema$split_schema_$_iter__70120(s__70121){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__38286__auto__,ufv___70188,output_schema70046_70189,input_schema70047_70190,input_checker70048_70191,output_checker70049_70192){
return (function (){
var s__70121__$1 = s__70121;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__70121__$1);
if(temp__4657__auto__){
var s__70121__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70121__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__70121__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__70123 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__70122 = (0);
while(true){
if((i__70122 < size__25530__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__25529__auto__,i__70122);
cljs.core.chunk_append.call(null,b__70123,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = ((function (i__70122,in_QMARK_,c__25529__auto__,size__25530__auto__,b__70123,s__70121__$2,temp__4657__auto__,ks__$1,validate__38286__auto__,ufv___70188,output_schema70046_70189,input_schema70047_70190,input_checker70048_70191,output_checker70049_70192){
return (function plumbing$fnk$schema$split_schema_$_iter__70120_$_iter__70156(s__70157){
return (new cljs.core.LazySeq(null,((function (i__70122,in_QMARK_,c__25529__auto__,size__25530__auto__,b__70123,s__70121__$2,temp__4657__auto__,ks__$1,validate__38286__auto__,ufv___70188,output_schema70046_70189,input_schema70047_70190,input_checker70048_70191,output_checker70049_70192){
return (function (){
var s__70157__$1 = s__70157;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__70157__$1);
if(temp__4657__auto____$1){
var s__70157__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70157__$2)){
var c__25529__auto____$1 = cljs.core.chunk_first.call(null,s__70157__$2);
var size__25530__auto____$1 = cljs.core.count.call(null,c__25529__auto____$1);
var b__70159 = cljs.core.chunk_buffer.call(null,size__25530__auto____$1);
if((function (){var i__70158 = (0);
while(true){
if((i__70158 < size__25530__auto____$1)){
var vec__70166 = cljs.core._nth.call(null,c__25529__auto____$1,i__70158);
var k = cljs.core.nth.call(null,vec__70166,(0),null);
var v = cljs.core.nth.call(null,vec__70166,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24739__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__70159,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__70196 = (i__70158 + (1));
i__70158 = G__70196;
continue;
} else {
var G__70197 = (i__70158 + (1));
i__70158 = G__70197;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70159),plumbing$fnk$schema$split_schema_$_iter__70120_$_iter__70156.call(null,cljs.core.chunk_rest.call(null,s__70157__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70159),null);
}
} else {
var vec__70169 = cljs.core.first.call(null,s__70157__$2);
var k = cljs.core.nth.call(null,vec__70169,(0),null);
var v = cljs.core.nth.call(null,vec__70169,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24739__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__70120_$_iter__70156.call(null,cljs.core.rest.call(null,s__70157__$2)));
} else {
var G__70198 = cljs.core.rest.call(null,s__70157__$2);
s__70157__$1 = G__70198;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__70122,in_QMARK_,c__25529__auto__,size__25530__auto__,b__70123,s__70121__$2,temp__4657__auto__,ks__$1,validate__38286__auto__,ufv___70188,output_schema70046_70189,input_schema70047_70190,input_checker70048_70191,output_checker70049_70192))
,null,null));
});})(i__70122,in_QMARK_,c__25529__auto__,size__25530__auto__,b__70123,s__70121__$2,temp__4657__auto__,ks__$1,validate__38286__auto__,ufv___70188,output_schema70046_70189,input_schema70047_70190,input_checker70048_70191,output_checker70049_70192))
;
return iter__25531__auto__.call(null,s);
})()));

var G__70199 = (i__70122 + (1));
i__70122 = G__70199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70123),plumbing$fnk$schema$split_schema_$_iter__70120.call(null,cljs.core.chunk_rest.call(null,s__70121__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70123),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__70121__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25531__auto__ = ((function (in_QMARK_,s__70121__$2,temp__4657__auto__,ks__$1,validate__38286__auto__,ufv___70188,output_schema70046_70189,input_schema70047_70190,input_checker70048_70191,output_checker70049_70192){
return (function plumbing$fnk$schema$split_schema_$_iter__70120_$_iter__70172(s__70173){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__70121__$2,temp__4657__auto__,ks__$1,validate__38286__auto__,ufv___70188,output_schema70046_70189,input_schema70047_70190,input_checker70048_70191,output_checker70049_70192){
return (function (){
var s__70173__$1 = s__70173;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__70173__$1);
if(temp__4657__auto____$1){
var s__70173__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70173__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__70173__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__70175 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__70174 = (0);
while(true){
if((i__70174 < size__25530__auto__)){
var vec__70182 = cljs.core._nth.call(null,c__25529__auto__,i__70174);
var k = cljs.core.nth.call(null,vec__70182,(0),null);
var v = cljs.core.nth.call(null,vec__70182,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24739__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__70175,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__70200 = (i__70174 + (1));
i__70174 = G__70200;
continue;
} else {
var G__70201 = (i__70174 + (1));
i__70174 = G__70201;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70175),plumbing$fnk$schema$split_schema_$_iter__70120_$_iter__70172.call(null,cljs.core.chunk_rest.call(null,s__70173__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70175),null);
}
} else {
var vec__70185 = cljs.core.first.call(null,s__70173__$2);
var k = cljs.core.nth.call(null,vec__70185,(0),null);
var v = cljs.core.nth.call(null,vec__70185,(1),null);
if(cljs.core.truth_((function (){var and__24739__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24739__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24739__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__70120_$_iter__70172.call(null,cljs.core.rest.call(null,s__70173__$2)));
} else {
var G__70202 = cljs.core.rest.call(null,s__70173__$2);
s__70173__$1 = G__70202;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__70121__$2,temp__4657__auto__,ks__$1,validate__38286__auto__,ufv___70188,output_schema70046_70189,input_schema70047_70190,input_checker70048_70191,output_checker70049_70192))
,null,null));
});})(in_QMARK_,s__70121__$2,temp__4657__auto__,ks__$1,validate__38286__auto__,ufv___70188,output_schema70046_70189,input_schema70047_70190,input_checker70048_70191,output_checker70049_70192))
;
return iter__25531__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__70120.call(null,cljs.core.rest.call(null,s__70121__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__38286__auto__,ufv___70188,output_schema70046_70189,input_schema70047_70190,input_checker70048_70191,output_checker70049_70192))
,null,null));
});})(ks__$1,validate__38286__auto__,ufv___70188,output_schema70046_70189,input_schema70047_70190,input_checker70048_70191,output_checker70049_70192))
;
return iter__25531__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___70203 = output_checker70049_70192.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___70203)){
var error__38288__auto___70204 = temp__4657__auto___70203;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__38288__auto___70204)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema70046_70189,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___70204], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___70188,output_schema70046_70189,input_schema70047_70190,input_checker70048_70191,output_checker70049_70192))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema70046_70189,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema70047_70190], null)));
var ufv___70275 = schema.utils.use_fn_validation;
var output_schema70205_70276 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema70206_70277 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker70207_70278 = schema.core.checker.call(null,input_schema70206_70277);
var output_checker70208_70279 = schema.core.checker.call(null,output_schema70205_70276);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___70275,output_schema70205_70276,input_schema70206_70277,input_checker70207_70278,output_checker70208_70279){
return (function plumbing$fnk$schema$sequence_schemata(G__70209,G__70210){
var validate__38286__auto__ = ufv___70275.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___70280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__70209,G__70210], null);
var temp__4657__auto___70281 = input_checker70207_70278.call(null,args__38287__auto___70280);
if(cljs.core.truth_(temp__4657__auto___70281)){
var error__38288__auto___70282 = temp__4657__auto___70281;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__38288__auto___70282)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema70206_70277,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___70280,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___70282], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var G__70252 = G__70209;
var vec__70254 = G__70252;
var i1 = cljs.core.nth.call(null,vec__70254,(0),null);
var o1 = cljs.core.nth.call(null,vec__70254,(1),null);
var G__70253 = G__70210;
var vec__70257 = G__70253;
var k = cljs.core.nth.call(null,vec__70257,(0),null);
var vec__70260 = cljs.core.nth.call(null,vec__70257,(1),null);
var i2 = cljs.core.nth.call(null,vec__70260,(0),null);
var o2 = cljs.core.nth.call(null,vec__70260,(1),null);
var G__70252__$1 = G__70252;
var G__70253__$1 = G__70253;
while(true){
var vec__70263 = G__70252__$1;
var i1__$1 = cljs.core.nth.call(null,vec__70263,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__70263,(1),null);
var vec__70266 = G__70253__$1;
var k__$1 = cljs.core.nth.call(null,vec__70266,(0),null);
var vec__70269 = cljs.core.nth.call(null,vec__70266,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__70269,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__70269,(1),null);
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

var vec__70272 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__70272,(0),null);
var unused = cljs.core.nth.call(null,vec__70272,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___70283 = output_checker70208_70279.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___70283)){
var error__38288__auto___70284 = temp__4657__auto___70283;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__38288__auto___70284)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema70205_70276,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___70284], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___70275,output_schema70205_70276,input_schema70206_70277,input_checker70207_70278,output_checker70208_70279))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema70205_70276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema70206_70277], null)));

//# sourceMappingURL=schema.js.map?rel=1478402645217