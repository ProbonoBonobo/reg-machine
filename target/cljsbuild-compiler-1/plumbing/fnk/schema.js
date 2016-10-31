// Compiled by ClojureScript 1.9.227 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__8766__8767__auto__){
if(!((p1__8766__8767__auto__ == null))){
if((false) || (p1__8766__8767__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__8766__8767__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__8766__8767__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__8766__8767__auto__);
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
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__34424_SHARP_){
return (cljs.core.val.call(null,p1__34424_SHARP_) > (1));
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

var vec__34428 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__34428,(0),null);
var v = cljs.core.nth.call(null,vec__34428,(1),null);
var p = vec__34428;
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
var ufv___34436 = schema.utils.use_fn_validation;
var output_schema34431_34437 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema34432_34438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker34433_34439 = schema.core.checker.call(null,input_schema34432_34438);
var output_checker34434_34440 = schema.core.checker.call(null,output_schema34431_34437);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___34436,output_schema34431_34437,input_schema34432_34438,input_checker34433_34439,output_checker34434_34440){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__34435){
var validate__8009__auto__ = ufv___34436.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___34441 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34435], null);
var temp__4657__auto___34442 = input_checker34433_34439.call(null,args__8010__auto___34441);
if(cljs.core.truth_(temp__4657__auto___34442)){
var error__8011__auto___34443 = temp__4657__auto___34442;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__8011__auto___34443)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34432_34438,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___34441,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___34443], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var k = G__34435;
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
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___34444 = output_checker34434_34440.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___34444)){
var error__8011__auto___34445 = temp__4657__auto___34444;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__8011__auto___34445)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34431_34437,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___34445], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___34436,output_schema34431_34437,input_schema34432_34438,input_checker34433_34439,output_checker34434_34440))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema34431_34437,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34432_34438], null)));
var ufv___34451 = schema.utils.use_fn_validation;
var output_schema34446_34452 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema34447_34453 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker34448_34454 = schema.core.checker.call(null,input_schema34447_34453);
var output_checker34449_34455 = schema.core.checker.call(null,output_schema34446_34452);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___34451,output_schema34446_34452,input_schema34447_34453,input_checker34448_34454,output_checker34449_34455){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__34450){
var validate__8009__auto__ = ufv___34451.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___34456 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34450], null);
var temp__4657__auto___34457 = input_checker34448_34454.call(null,args__8010__auto___34456);
if(cljs.core.truth_(temp__4657__auto___34457)){
var error__8011__auto___34458 = temp__4657__auto___34457;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__8011__auto___34458)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34447_34453,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___34456,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___34458], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var s = G__34450;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___34459 = output_checker34449_34455.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___34459)){
var error__8011__auto___34460 = temp__4657__auto___34459;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__8011__auto___34460)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34446_34452,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___34460], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___34451,output_schema34446_34452,input_schema34447_34453,input_checker34448_34454,output_checker34449_34455))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema34446_34452,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34447_34453], null)));
var ufv___34466 = schema.utils.use_fn_validation;
var output_schema34461_34467 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema34462_34468 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker34463_34469 = schema.core.checker.call(null,input_schema34462_34468);
var output_checker34464_34470 = schema.core.checker.call(null,output_schema34461_34467);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___34466,output_schema34461_34467,input_schema34462_34468,input_checker34463_34469,output_checker34464_34470){
return (function plumbing$fnk$schema$split_schema_keys(G__34465){
var validate__8009__auto__ = ufv___34466.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___34471 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34465], null);
var temp__4657__auto___34472 = input_checker34463_34469.call(null,args__8010__auto___34471);
if(cljs.core.truth_(temp__4657__auto___34472)){
var error__8011__auto___34473 = temp__4657__auto___34472;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__8011__auto___34473)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34462_34468,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___34471,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___34473], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var s = G__34465;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___34474 = output_checker34464_34470.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___34474)){
var error__8011__auto___34475 = temp__4657__auto___34474;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__8011__auto___34475)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34461_34467,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___34475], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___34466,output_schema34461_34467,input_schema34462_34468,input_checker34463_34469,output_checker34464_34470))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema34461_34467,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34462_34468], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__7486__auto__ = [];
var len__7479__auto___34487 = arguments.length;
var i__7480__auto___34488 = (0);
while(true){
if((i__7480__auto___34488 < len__7479__auto___34487)){
args__7486__auto__.push((arguments[i__7480__auto___34488]));

var G__34489 = (i__7480__auto___34488 + (1));
i__7480__auto___34488 = G__34489;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((3) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((3)),(0),null)):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7487__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__34480){
var vec__34481 = p__34480;
var k = cljs.core.nth.call(null,vec__34481,(0),null);
var v = cljs.core.nth.call(null,vec__34481,(1),null);
var pk = key_project.call(null,k);
var temp__4655__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__34484 = temp__4655__auto__;
var ok = cljs.core.nth.call(null,vec__34484,(0),null);
var ov = cljs.core.nth.call(null,vec__34484,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq34476){
var G__34477 = cljs.core.first.call(null,seq34476);
var seq34476__$1 = cljs.core.next.call(null,seq34476);
var G__34478 = cljs.core.first.call(null,seq34476__$1);
var seq34476__$2 = cljs.core.next.call(null,seq34476__$1);
var G__34479 = cljs.core.first.call(null,seq34476__$2);
var seq34476__$3 = cljs.core.next.call(null,seq34476__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__34477,G__34478,G__34479,seq34476__$3);
});

var ufv___34497 = schema.utils.use_fn_validation;
var output_schema34491_34498 = plumbing.fnk.schema.InputSchema;
var input_schema34492_34499 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker34493_34500 = schema.core.checker.call(null,input_schema34492_34499);
var output_checker34494_34501 = schema.core.checker.call(null,output_schema34491_34498);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___34497,output_schema34491_34498,input_schema34492_34499,input_checker34493_34500,output_checker34494_34501){
return (function plumbing$fnk$schema$union_input_schemata(G__34495,G__34496){
var validate__8009__auto__ = ufv___34497.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___34502 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34495,G__34496], null);
var temp__4657__auto___34503 = input_checker34493_34500.call(null,args__8010__auto___34502);
if(cljs.core.truth_(temp__4657__auto___34503)){
var error__8011__auto___34504 = temp__4657__auto___34503;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__8011__auto___34504)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34492_34499,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___34502,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___34504], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var i1 = G__34495;
var i2 = G__34496;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__8009__auto__,ufv___34497,output_schema34491_34498,input_schema34492_34499,input_checker34493_34500,output_checker34494_34501){
return (function (p1__34490_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__34490_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__34490_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__8009__auto__,ufv___34497,output_schema34491_34498,input_schema34492_34499,input_checker34493_34500,output_checker34494_34501))
,((function (validate__8009__auto__,ufv___34497,output_schema34491_34498,input_schema34492_34499,input_checker34493_34500,output_checker34494_34501){
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
});})(validate__8009__auto__,ufv___34497,output_schema34491_34498,input_schema34492_34499,input_checker34493_34500,output_checker34494_34501))
,((function (validate__8009__auto__,ufv___34497,output_schema34491_34498,input_schema34492_34499,input_checker34493_34500,output_checker34494_34501){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__6392__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__6392__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__6392__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__8009__auto__,ufv___34497,output_schema34491_34498,input_schema34492_34499,input_checker34493_34500,output_checker34494_34501))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___34505 = output_checker34494_34501.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___34505)){
var error__8011__auto___34506 = temp__4657__auto___34505;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__8011__auto___34506)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34491_34498,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___34506], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___34497,output_schema34491_34498,input_schema34492_34499,input_checker34493_34500,output_checker34494_34501))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema34491_34498,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34492_34499], null)));
var ufv___34512 = schema.utils.use_fn_validation;
var output_schema34507_34513 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema34508_34514 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker34509_34515 = schema.core.checker.call(null,input_schema34508_34514);
var output_checker34510_34516 = schema.core.checker.call(null,output_schema34507_34513);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___34512,output_schema34507_34513,input_schema34508_34514,input_checker34509_34515,output_checker34510_34516){
return (function plumbing$fnk$schema$required_toplevel_keys(G__34511){
var validate__8009__auto__ = ufv___34512.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___34517 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34511], null);
var temp__4657__auto___34518 = input_checker34509_34515.call(null,args__8010__auto___34517);
if(cljs.core.truth_(temp__4657__auto___34518)){
var error__8011__auto___34519 = temp__4657__auto___34518;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__8011__auto___34519)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34508_34514,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___34517,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___34519], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var input_schema = G__34511;
while(true){
return cljs.core.keep.call(null,((function (validate__8009__auto__,ufv___34512,output_schema34507_34513,input_schema34508_34514,input_checker34509_34515,output_checker34510_34516){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__8009__auto__,ufv___34512,output_schema34507_34513,input_schema34508_34514,input_checker34509_34515,output_checker34510_34516))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___34520 = output_checker34510_34516.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___34520)){
var error__8011__auto___34521 = temp__4657__auto___34520;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__8011__auto___34521)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34507_34513,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___34521], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___34512,output_schema34507_34513,input_schema34508_34514,input_checker34509_34515,output_checker34510_34516))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema34507_34513,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34508_34514], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__34538(s__34539){
return (new cljs.core.LazySeq(null,(function (){
var s__34539__$1 = s__34539;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34539__$1);
if(temp__4657__auto__){
var s__34539__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34539__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__34539__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__34541 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__34540 = (0);
while(true){
if((i__34540 < size__7183__auto__)){
var vec__34548 = cljs.core._nth.call(null,c__7182__auto__,i__34540);
var k = cljs.core.nth.call(null,vec__34548,(0),null);
var v = cljs.core.nth.call(null,vec__34548,(1),null);
cljs.core.chunk_append.call(null,b__34541,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__34554 = (i__34540 + (1));
i__34540 = G__34554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34541),plumbing$fnk$schema$guess_expr_output_schema_$_iter__34538.call(null,cljs.core.chunk_rest.call(null,s__34539__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34541),null);
}
} else {
var vec__34551 = cljs.core.first.call(null,s__34539__$2);
var k = cljs.core.nth.call(null,vec__34551,(0),null);
var v = cljs.core.nth.call(null,vec__34551,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__34538.call(null,cljs.core.rest.call(null,s__34539__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__.call(null,expr);
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
return cljs.core._conj.call(null,(function (){var x__7238__auto__ = schema.core.explain.call(null,output_schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})(),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__34571(s__34572){
return (new cljs.core.LazySeq(null,(function (){
var s__34572__$1 = s__34572;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34572__$1);
if(temp__4657__auto__){
var s__34572__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34572__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__34572__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__34574 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__34573 = (0);
while(true){
if((i__34573 < size__7183__auto__)){
var vec__34581 = cljs.core._nth.call(null,c__7182__auto__,i__34573);
var k = cljs.core.nth.call(null,vec__34581,(0),null);
var v = cljs.core.nth.call(null,vec__34581,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__6404__auto__ = required_QMARK_;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__34574,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__34587 = (i__34573 + (1));
i__34573 = G__34587;
continue;
} else {
var G__34588 = (i__34573 + (1));
i__34573 = G__34588;
continue;
}
} else {
var G__34589 = (i__34573 + (1));
i__34573 = G__34589;
continue;
}
} else {
var G__34590 = (i__34573 + (1));
i__34573 = G__34590;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34574),plumbing$fnk$schema$schema_diff_$_iter__34571.call(null,cljs.core.chunk_rest.call(null,s__34572__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34574),null);
}
} else {
var vec__34584 = cljs.core.first.call(null,s__34572__$2);
var k = cljs.core.nth.call(null,vec__34584,(0),null);
var v = cljs.core.nth.call(null,vec__34584,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__6404__auto__ = required_QMARK_;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__34571.call(null,cljs.core.rest.call(null,s__34572__$2)));
} else {
var G__34591 = cljs.core.rest.call(null,s__34572__$2);
s__34572__$1 = G__34591;
continue;
}
} else {
var G__34592 = cljs.core.rest.call(null,s__34572__$2);
s__34572__$1 = G__34592;
continue;
}
} else {
var G__34593 = cljs.core.rest.call(null,s__34572__$2);
s__34572__$1 = G__34593;
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
return iter__7184__auto__.call(null,input_schema);
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
var ufv___34640 = schema.utils.use_fn_validation;
var output_schema34594_34641 = schema.core.Any;
var input_schema34595_34642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker34596_34643 = schema.core.checker.call(null,input_schema34595_34642);
var output_checker34597_34644 = schema.core.checker.call(null,output_schema34594_34641);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___34640,output_schema34594_34641,input_schema34595_34642,input_checker34596_34643,output_checker34597_34644){
return (function plumbing$fnk$schema$compose_schemata(G__34598,G__34599){
var validate__8009__auto__ = true;
if(validate__8009__auto__){
var args__8010__auto___34645 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34598,G__34599], null);
var temp__4657__auto___34646 = input_checker34596_34643.call(null,args__8010__auto___34645);
if(cljs.core.truth_(temp__4657__auto___34646)){
var error__8011__auto___34647 = temp__4657__auto___34646;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__8011__auto___34647)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34595_34642,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___34645,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___34647], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var G__34626 = G__34598;
var vec__34628 = G__34626;
var i2 = cljs.core.nth.call(null,vec__34628,(0),null);
var o2 = cljs.core.nth.call(null,vec__34628,(1),null);
var G__34627 = G__34599;
var vec__34631 = G__34627;
var i1 = cljs.core.nth.call(null,vec__34631,(0),null);
var o1 = cljs.core.nth.call(null,vec__34631,(1),null);
var G__34626__$1 = G__34626;
var G__34627__$1 = G__34627;
while(true){
var vec__34634 = G__34626__$1;
var i2__$1 = cljs.core.nth.call(null,vec__34634,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__34634,(1),null);
var vec__34637 = G__34627__$1;
var i1__$1 = cljs.core.nth.call(null,vec__34637,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__34637,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__8009__auto__){
var temp__4657__auto___34648 = output_checker34597_34644.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___34648)){
var error__8011__auto___34649 = temp__4657__auto___34648;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__8011__auto___34649)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34594_34641,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___34649], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___34640,output_schema34594_34641,input_schema34595_34642,input_checker34596_34643,output_checker34597_34644))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema34594_34641,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34595_34642], null)));
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
var ufv___34792 = schema.utils.use_fn_validation;
var output_schema34650_34793 = schema.core.Any;
var input_schema34651_34794 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker34652_34795 = schema.core.checker.call(null,input_schema34651_34794);
var output_checker34653_34796 = schema.core.checker.call(null,output_schema34650_34793);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___34792,output_schema34650_34793,input_schema34651_34794,input_checker34652_34795,output_checker34653_34796){
return (function plumbing$fnk$schema$split_schema(G__34654,G__34655){
var validate__8009__auto__ = ufv___34792.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___34797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34654,G__34655], null);
var temp__4657__auto___34798 = input_checker34652_34795.call(null,args__8010__auto___34797);
if(cljs.core.truth_(temp__4657__auto___34798)){
var error__8011__auto___34799 = temp__4657__auto___34798;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__8011__auto___34799)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34651_34794,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___34797,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___34799], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var s = G__34654;
var ks = G__34655;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__7184__auto__ = ((function (ks__$1,validate__8009__auto__,ufv___34792,output_schema34650_34793,input_schema34651_34794,input_checker34652_34795,output_checker34653_34796){
return (function plumbing$fnk$schema$split_schema_$_iter__34724(s__34725){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__8009__auto__,ufv___34792,output_schema34650_34793,input_schema34651_34794,input_checker34652_34795,output_checker34653_34796){
return (function (){
var s__34725__$1 = s__34725;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34725__$1);
if(temp__4657__auto__){
var s__34725__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34725__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__34725__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__34727 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__34726 = (0);
while(true){
if((i__34726 < size__7183__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__7182__auto__,i__34726);
cljs.core.chunk_append.call(null,b__34727,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = ((function (i__34726,in_QMARK_,c__7182__auto__,size__7183__auto__,b__34727,s__34725__$2,temp__4657__auto__,ks__$1,validate__8009__auto__,ufv___34792,output_schema34650_34793,input_schema34651_34794,input_checker34652_34795,output_checker34653_34796){
return (function plumbing$fnk$schema$split_schema_$_iter__34724_$_iter__34760(s__34761){
return (new cljs.core.LazySeq(null,((function (i__34726,in_QMARK_,c__7182__auto__,size__7183__auto__,b__34727,s__34725__$2,temp__4657__auto__,ks__$1,validate__8009__auto__,ufv___34792,output_schema34650_34793,input_schema34651_34794,input_checker34652_34795,output_checker34653_34796){
return (function (){
var s__34761__$1 = s__34761;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__34761__$1);
if(temp__4657__auto____$1){
var s__34761__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34761__$2)){
var c__7182__auto____$1 = cljs.core.chunk_first.call(null,s__34761__$2);
var size__7183__auto____$1 = cljs.core.count.call(null,c__7182__auto____$1);
var b__34763 = cljs.core.chunk_buffer.call(null,size__7183__auto____$1);
if((function (){var i__34762 = (0);
while(true){
if((i__34762 < size__7183__auto____$1)){
var vec__34770 = cljs.core._nth.call(null,c__7182__auto____$1,i__34762);
var k = cljs.core.nth.call(null,vec__34770,(0),null);
var v = cljs.core.nth.call(null,vec__34770,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__6392__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__34763,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34800 = (i__34762 + (1));
i__34762 = G__34800;
continue;
} else {
var G__34801 = (i__34762 + (1));
i__34762 = G__34801;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34763),plumbing$fnk$schema$split_schema_$_iter__34724_$_iter__34760.call(null,cljs.core.chunk_rest.call(null,s__34761__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34763),null);
}
} else {
var vec__34773 = cljs.core.first.call(null,s__34761__$2);
var k = cljs.core.nth.call(null,vec__34773,(0),null);
var v = cljs.core.nth.call(null,vec__34773,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__6392__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__34724_$_iter__34760.call(null,cljs.core.rest.call(null,s__34761__$2)));
} else {
var G__34802 = cljs.core.rest.call(null,s__34761__$2);
s__34761__$1 = G__34802;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__34726,in_QMARK_,c__7182__auto__,size__7183__auto__,b__34727,s__34725__$2,temp__4657__auto__,ks__$1,validate__8009__auto__,ufv___34792,output_schema34650_34793,input_schema34651_34794,input_checker34652_34795,output_checker34653_34796))
,null,null));
});})(i__34726,in_QMARK_,c__7182__auto__,size__7183__auto__,b__34727,s__34725__$2,temp__4657__auto__,ks__$1,validate__8009__auto__,ufv___34792,output_schema34650_34793,input_schema34651_34794,input_checker34652_34795,output_checker34653_34796))
;
return iter__7184__auto__.call(null,s);
})()));

var G__34803 = (i__34726 + (1));
i__34726 = G__34803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34727),plumbing$fnk$schema$split_schema_$_iter__34724.call(null,cljs.core.chunk_rest.call(null,s__34725__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34727),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__34725__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = ((function (in_QMARK_,s__34725__$2,temp__4657__auto__,ks__$1,validate__8009__auto__,ufv___34792,output_schema34650_34793,input_schema34651_34794,input_checker34652_34795,output_checker34653_34796){
return (function plumbing$fnk$schema$split_schema_$_iter__34724_$_iter__34776(s__34777){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__34725__$2,temp__4657__auto__,ks__$1,validate__8009__auto__,ufv___34792,output_schema34650_34793,input_schema34651_34794,input_checker34652_34795,output_checker34653_34796){
return (function (){
var s__34777__$1 = s__34777;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__34777__$1);
if(temp__4657__auto____$1){
var s__34777__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34777__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__34777__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__34779 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__34778 = (0);
while(true){
if((i__34778 < size__7183__auto__)){
var vec__34786 = cljs.core._nth.call(null,c__7182__auto__,i__34778);
var k = cljs.core.nth.call(null,vec__34786,(0),null);
var v = cljs.core.nth.call(null,vec__34786,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__6392__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__34779,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34804 = (i__34778 + (1));
i__34778 = G__34804;
continue;
} else {
var G__34805 = (i__34778 + (1));
i__34778 = G__34805;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34779),plumbing$fnk$schema$split_schema_$_iter__34724_$_iter__34776.call(null,cljs.core.chunk_rest.call(null,s__34777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34779),null);
}
} else {
var vec__34789 = cljs.core.first.call(null,s__34777__$2);
var k = cljs.core.nth.call(null,vec__34789,(0),null);
var v = cljs.core.nth.call(null,vec__34789,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__6392__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__34724_$_iter__34776.call(null,cljs.core.rest.call(null,s__34777__$2)));
} else {
var G__34806 = cljs.core.rest.call(null,s__34777__$2);
s__34777__$1 = G__34806;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__34725__$2,temp__4657__auto__,ks__$1,validate__8009__auto__,ufv___34792,output_schema34650_34793,input_schema34651_34794,input_checker34652_34795,output_checker34653_34796))
,null,null));
});})(in_QMARK_,s__34725__$2,temp__4657__auto__,ks__$1,validate__8009__auto__,ufv___34792,output_schema34650_34793,input_schema34651_34794,input_checker34652_34795,output_checker34653_34796))
;
return iter__7184__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__34724.call(null,cljs.core.rest.call(null,s__34725__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__8009__auto__,ufv___34792,output_schema34650_34793,input_schema34651_34794,input_checker34652_34795,output_checker34653_34796))
,null,null));
});})(ks__$1,validate__8009__auto__,ufv___34792,output_schema34650_34793,input_schema34651_34794,input_checker34652_34795,output_checker34653_34796))
;
return iter__7184__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___34807 = output_checker34653_34796.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___34807)){
var error__8011__auto___34808 = temp__4657__auto___34807;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__8011__auto___34808)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34650_34793,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___34808], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___34792,output_schema34650_34793,input_schema34651_34794,input_checker34652_34795,output_checker34653_34796))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema34650_34793,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34651_34794], null)));
var ufv___34879 = schema.utils.use_fn_validation;
var output_schema34809_34880 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema34810_34881 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker34811_34882 = schema.core.checker.call(null,input_schema34810_34881);
var output_checker34812_34883 = schema.core.checker.call(null,output_schema34809_34880);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___34879,output_schema34809_34880,input_schema34810_34881,input_checker34811_34882,output_checker34812_34883){
return (function plumbing$fnk$schema$sequence_schemata(G__34813,G__34814){
var validate__8009__auto__ = ufv___34879.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___34884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34813,G__34814], null);
var temp__4657__auto___34885 = input_checker34811_34882.call(null,args__8010__auto___34884);
if(cljs.core.truth_(temp__4657__auto___34885)){
var error__8011__auto___34886 = temp__4657__auto___34885;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__8011__auto___34886)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34810_34881,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___34884,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___34886], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var G__34856 = G__34813;
var vec__34858 = G__34856;
var i1 = cljs.core.nth.call(null,vec__34858,(0),null);
var o1 = cljs.core.nth.call(null,vec__34858,(1),null);
var G__34857 = G__34814;
var vec__34861 = G__34857;
var k = cljs.core.nth.call(null,vec__34861,(0),null);
var vec__34864 = cljs.core.nth.call(null,vec__34861,(1),null);
var i2 = cljs.core.nth.call(null,vec__34864,(0),null);
var o2 = cljs.core.nth.call(null,vec__34864,(1),null);
var G__34856__$1 = G__34856;
var G__34857__$1 = G__34857;
while(true){
var vec__34867 = G__34856__$1;
var i1__$1 = cljs.core.nth.call(null,vec__34867,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__34867,(1),null);
var vec__34870 = G__34857__$1;
var k__$1 = cljs.core.nth.call(null,vec__34870,(0),null);
var vec__34873 = cljs.core.nth.call(null,vec__34870,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__34873,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__34873,(1),null);
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

var vec__34876 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__34876,(0),null);
var unused = cljs.core.nth.call(null,vec__34876,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___34887 = output_checker34812_34883.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___34887)){
var error__8011__auto___34888 = temp__4657__auto___34887;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__8011__auto___34888)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34809_34880,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___34888], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___34879,output_schema34809_34880,input_schema34810_34881,input_checker34811_34882,output_checker34812_34883))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema34809_34880,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34810_34881], null)));

//# sourceMappingURL=schema.js.map