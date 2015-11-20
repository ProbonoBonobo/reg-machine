// Compiled by ClojureScript 1.7.122 {}
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___33399 = schema.utils.use_fn_validation;
var output_schema33394_33400 = schema.core.Any;
var input_schema33395_33401 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker33396_33402 = schema.core.checker.call(null,input_schema33395_33401);
var output_checker33397_33403 = schema.core.checker.call(null,output_schema33394_33400);
/**
 * Inputs: [schema :- {s/Any s/Any}]
 * 
 *   Returns all keys from a schema.
 */
om_bootstrap.types.schema_keys = ((function (ufv___33399,output_schema33394_33400,input_schema33395_33401,input_checker33396_33402,output_checker33397_33403){
return (function om_bootstrap$types$schema_keys(G__33398){
var validate__20540__auto__ = ufv___33399.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33404 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33398], null);
var temp__4425__auto___33405 = input_checker33396_33402.call(null,args__20541__auto___33404);
if(cljs.core.truth_(temp__4425__auto___33405)){
var error__20542__auto___33406 = temp__4425__auto___33405;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__20542__auto___33406)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33395_33401,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33404,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33406], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var schema__$1 = G__33398;
while(true){
return cljs.core.map.call(null,((function (validate__20540__auto__,ufv___33399,output_schema33394_33400,input_schema33395_33401,input_checker33396_33402,output_checker33397_33403){
return (function (k){
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k))){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__20540__auto__,ufv___33399,output_schema33394_33400,input_schema33395_33401,input_checker33396_33402,output_checker33397_33403))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33407 = output_checker33397_33403.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33407)){
var error__20542__auto___33408 = temp__4425__auto___33407;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__20542__auto___33408)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33394_33400,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33408], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33399,output_schema33394_33400,input_schema33395_33401,input_checker33396_33402,output_checker33397_33403))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema33394_33400,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33395_33401], null)));
var ufv___33414 = schema.utils.use_fn_validation;
var output_schema33409_33415 = schema.core.Any;
var input_schema33410_33416 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33411_33417 = schema.core.checker.call(null,input_schema33410_33416);
var output_checker33412_33418 = schema.core.checker.call(null,output_schema33409_33415);
/**
 * Inputs: [schema]
 * 
 *   Returns a map schema that accepts the supplied map schema, plus any
 *   other optional keys that show up in the map. Such a schema can only
 *   enforce that required keys are missing.
 */
om_bootstrap.types.at_least = ((function (ufv___33414,output_schema33409_33415,input_schema33410_33416,input_checker33411_33417,output_checker33412_33418){
return (function om_bootstrap$types$at_least(G__33413){
var validate__20540__auto__ = ufv___33414.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33419 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33413], null);
var temp__4425__auto___33420 = input_checker33411_33417.call(null,args__20541__auto___33419);
if(cljs.core.truth_(temp__4425__auto___33420)){
var error__20542__auto___33421 = temp__4425__auto___33420;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__20542__auto___33421)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33410_33416,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33419,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33421], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var schema__$1 = G__33413;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33422 = output_checker33412_33418.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33422)){
var error__20542__auto___33423 = temp__4425__auto___33422;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__20542__auto___33423)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33409_33415,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33423], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33414,output_schema33409_33415,input_schema33410_33416,input_checker33411_33417,output_checker33412_33418))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema33409_33415,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33410_33416], null)));
om_bootstrap.types.Component = schema.core.named.call(null,schema.core.Any,"Alias for an om component, since I don't know what type to put here.");
om_bootstrap.types.Renderable = schema.core.named.call(null,schema.core.Any,"Anything that can get rendered.");
/**
 * Map of keyword to the proper bootstrap class name.
 */
om_bootstrap.types.class_map = cljs.core.PersistentHashMap.fromArrays(["alert","label","form","progress-bar","modal","navbar","button-toolbar","panel-group","nav","column","row","input-group","panel","well","button-group","button","glyphicon"],["alert","label","form","progress-bar","modal","navbar","btn-toolbar","panel-group","nav","col","row","input-group","panel","well","btn-group","btn","glyphicon"]);
/**
 * Map of style keywords -> styles.
 */
om_bootstrap.types.style_map = cljs.core.PersistentHashMap.fromArrays(["success","warning","inline","pills","info","tabs","primary","danger","link","default"],["success","warning","inline","pills","info","tabs","primary","danger","link","default"]);
om_bootstrap.types.size_map = new cljs.core.PersistentArrayMap(null, 4, ["large","lg","medium","md","small","sm","xsmall","xs"], null);
om_bootstrap.types.BSClass = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.class_map));
om_bootstrap.types.BSStyle = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.style_map));
om_bootstrap.types.BSSize = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.size_map));
om_bootstrap.types.BootstrapClass = cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590)),om_bootstrap.types.BSClass,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),om_bootstrap.types.BSStyle,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)),om_bootstrap.types.BSSize], true, false);
/**
 * Applies all default bootstrap options to the supplied schema. If
 *   the incoming schema has one of the the keys from BootstrapClass,
 *   that wins (even if it's required).
 */
om_bootstrap.types.bootstrap = (function om_bootstrap$types$bootstrap(schema__$1){
var bootstrap_schema = cljs.core.apply.call(null,cljs.core.dissoc,om_bootstrap.types.BootstrapClass,cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,cljs.core.select_keys.call(null,schema__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)], null)))));
return om_bootstrap.types.at_least.call(null,cljs.core.merge.call(null,bootstrap_schema,schema__$1));
});
var ufv___33439 = schema.utils.use_fn_validation;
var output_schema33424_33440 = schema.core.pair.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema33425_33441 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema33430_33442 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33426_33443 = schema.core.checker.call(null,input_schema33425_33441);
var output_checker33427_33444 = schema.core.checker.call(null,output_schema33424_33440);
var input_checker33431_33445 = schema.core.checker.call(null,input_schema33430_33442);
var output_checker33432_33446 = schema.core.checker.call(null,output_schema33424_33440);
/**
 * Inputs: ([schema opts] [schema opts defaults])
 *   Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
 * 
 *   Returns two maps; the first is all of the schema options, the
 *   second is the REST of the options.
 */
om_bootstrap.types.separate = ((function (ufv___33439,output_schema33424_33440,input_schema33425_33441,input_schema33430_33442,input_checker33426_33443,output_checker33427_33444,input_checker33431_33445,output_checker33432_33446){
return (function om_bootstrap$types$separate(var_args){
var args33436 = [];
var len__20259__auto___33447 = arguments.length;
var i__20260__auto___33448 = (0);
while(true){
if((i__20260__auto___33448 < len__20259__auto___33447)){
args33436.push((arguments[i__20260__auto___33448]));

var G__33449 = (i__20260__auto___33448 + (1));
i__20260__auto___33448 = G__33449;
continue;
} else {
}
break;
}

var G__33438 = args33436.length;
switch (G__33438) {
case 2:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33436.length)].join('')));

}
});})(ufv___33439,output_schema33424_33440,input_schema33425_33441,input_schema33430_33442,input_checker33426_33443,output_checker33427_33444,input_checker33431_33445,output_checker33432_33446))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___33439,output_schema33424_33440,input_schema33425_33441,input_schema33430_33442,input_checker33426_33443,output_checker33427_33444,input_checker33431_33445,output_checker33432_33446){
return (function (G__33428,G__33429){
var validate__20540__auto__ = ufv___33439.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33451 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33428,G__33429], null);
var temp__4425__auto___33452 = input_checker33426_33443.call(null,args__20541__auto___33451);
if(cljs.core.truth_(temp__4425__auto___33452)){
var error__20542__auto___33453 = temp__4425__auto___33452;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__20542__auto___33453)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33425_33441,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33451,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33453], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var schema__$1 = G__33428;
var opts = G__33429;
while(true){
return om_bootstrap.types.separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33454 = output_checker33427_33444.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33454)){
var error__20542__auto___33455 = temp__4425__auto___33454;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__20542__auto___33455)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33424_33440,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33455], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33439,output_schema33424_33440,input_schema33425_33441,input_schema33430_33442,input_checker33426_33443,output_checker33427_33444,input_checker33431_33445,output_checker33432_33446))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___33439,output_schema33424_33440,input_schema33425_33441,input_schema33430_33442,input_checker33426_33443,output_checker33427_33444,input_checker33431_33445,output_checker33432_33446){
return (function (G__33433,G__33434,G__33435){
var validate__20540__auto__ = ufv___33439.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33456 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33433,G__33434,G__33435], null);
var temp__4425__auto___33457 = input_checker33431_33445.call(null,args__20541__auto___33456);
if(cljs.core.truth_(temp__4425__auto___33457)){
var error__20542__auto___33458 = temp__4425__auto___33457;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__20542__auto___33458)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33430_33442,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33456,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33458], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var schema__$1 = G__33433;
var opts = G__33434;
var defaults = G__33435;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33459 = output_checker33432_33446.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33459)){
var error__20542__auto___33460 = temp__4425__auto___33459;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__20542__auto___33460)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33424_33440,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33460], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33439,output_schema33424_33440,input_schema33425_33441,input_schema33430_33442,input_checker33426_33443,output_checker33427_33444,input_checker33431_33445,output_checker33432_33446))
;

om_bootstrap.types.separate.cljs$lang$maxFixedArity = 3;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema33424_33440,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33425_33441,input_schema33430_33442], null)));
var ufv___33478 = schema.utils.use_fn_validation;
var output_schema33461_33479 = cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema33462_33480 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker33463_33481 = schema.core.checker.call(null,input_schema33462_33480);
var output_checker33464_33482 = schema.core.checker.call(null,output_schema33461_33479);
/**
 * Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
 *   Returns: {s/Str s/Bool}
 * 
 *   Returns input for class-set.
 */
om_bootstrap.types.bs_class_set = ((function (ufv___33478,output_schema33461_33479,input_schema33462_33480,input_checker33463_33481,output_checker33464_33482){
return (function om_bootstrap$types$bs_class_set(G__33465){
var validate__20540__auto__ = ufv___33478.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33465], null);
var temp__4425__auto___33484 = input_checker33463_33481.call(null,args__20541__auto___33483);
if(cljs.core.truth_(temp__4425__auto___33484)){
var error__20542__auto___33485 = temp__4425__auto___33484;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__20542__auto___33485)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33462_33480,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33483,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33485], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var G__33473 = G__33465;
var map__33474 = G__33473;
var map__33474__$1 = ((((!((map__33474 == null)))?((((map__33474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33474):map__33474);
var bs_class = cljs.core.get.call(null,map__33474__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style = cljs.core.get.call(null,map__33474__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size = cljs.core.get.call(null,map__33474__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var G__33473__$1 = G__33473;
while(true){
var map__33476 = G__33473__$1;
var map__33476__$1 = ((((!((map__33476 == null)))?((((map__33476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33476):map__33476);
var bs_class__$1 = cljs.core.get.call(null,map__33476__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style__$1 = cljs.core.get.call(null,map__33476__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size__$1 = cljs.core.get.call(null,map__33476__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var temp__4423__auto__ = om_bootstrap.types.class_map.call(null,bs_class__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var klass = temp__4423__auto__;
var prefix = [cljs.core.str(cljs.core.name.call(null,klass)),cljs.core.str("-")].join('');
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4425__auto__ = om_bootstrap.types.size_map.call(null,bs_size__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var size = temp__4425__auto__;
return cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,size))].join(''),true], true, false);
} else {
return null;
}
})(),(function (){var temp__4425__auto__ = om_bootstrap.types.style_map.call(null,bs_style__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var style = temp__4425__auto__;
return cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,style))].join(''),true], true, false);
} else {
return null;
}
})());
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33486 = output_checker33464_33482.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33486)){
var error__20542__auto___33487 = temp__4425__auto___33486;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__20542__auto___33487)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33461_33479,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33487], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33478,output_schema33461_33479,input_schema33462_33480,input_checker33463_33481,output_checker33464_33482))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema33461_33479,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33462_33480], null)));

//# sourceMappingURL=types.js.map?rel=1444632656373