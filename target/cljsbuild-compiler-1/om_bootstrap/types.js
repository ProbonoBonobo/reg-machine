// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___33022 = schema.utils.use_fn_validation;
var output_schema33017_33023 = schema.core.Any;
var input_schema33018_33024 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker33019_33025 = schema.core.checker.call(null,input_schema33018_33024);
var output_checker33020_33026 = schema.core.checker.call(null,output_schema33017_33023);
/**
 * Inputs: [schema :- {s/Any s/Any}]
 * 
 *   Returns all keys from a schema.
 */
om_bootstrap.types.schema_keys = ((function (ufv___33022,output_schema33017_33023,input_schema33018_33024,input_checker33019_33025,output_checker33020_33026){
return (function om_bootstrap$types$schema_keys(G__33021){
var validate__8009__auto__ = ufv___33022.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___33027 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33021], null);
var temp__4657__auto___33028 = input_checker33019_33025.call(null,args__8010__auto___33027);
if(cljs.core.truth_(temp__4657__auto___33028)){
var error__8011__auto___33029 = temp__4657__auto___33028;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__8011__auto___33029)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33018_33024,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___33027,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___33029], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var schema__$1 = G__33021;
while(true){
return cljs.core.map.call(null,((function (validate__8009__auto__,ufv___33022,output_schema33017_33023,input_schema33018_33024,input_checker33019_33025,output_checker33020_33026){
return (function (k){
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k))){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__8009__auto__,ufv___33022,output_schema33017_33023,input_schema33018_33024,input_checker33019_33025,output_checker33020_33026))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___33030 = output_checker33020_33026.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___33030)){
var error__8011__auto___33031 = temp__4657__auto___33030;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__8011__auto___33031)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33017_33023,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___33031], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___33022,output_schema33017_33023,input_schema33018_33024,input_checker33019_33025,output_checker33020_33026))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema33017_33023,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33018_33024], null)));
var ufv___33037 = schema.utils.use_fn_validation;
var output_schema33032_33038 = schema.core.Any;
var input_schema33033_33039 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33034_33040 = schema.core.checker.call(null,input_schema33033_33039);
var output_checker33035_33041 = schema.core.checker.call(null,output_schema33032_33038);
/**
 * Inputs: [schema]
 * 
 *   Returns a map schema that accepts the supplied map schema, plus any
 *   other optional keys that show up in the map. Such a schema can only
 *   enforce that required keys are missing.
 */
om_bootstrap.types.at_least = ((function (ufv___33037,output_schema33032_33038,input_schema33033_33039,input_checker33034_33040,output_checker33035_33041){
return (function om_bootstrap$types$at_least(G__33036){
var validate__8009__auto__ = ufv___33037.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___33042 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33036], null);
var temp__4657__auto___33043 = input_checker33034_33040.call(null,args__8010__auto___33042);
if(cljs.core.truth_(temp__4657__auto___33043)){
var error__8011__auto___33044 = temp__4657__auto___33043;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__8011__auto___33044)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33033_33039,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___33042,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___33044], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var schema__$1 = G__33036;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___33045 = output_checker33035_33041.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___33045)){
var error__8011__auto___33046 = temp__4657__auto___33045;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__8011__auto___33046)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33032_33038,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___33046], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___33037,output_schema33032_33038,input_schema33033_33039,input_checker33034_33040,output_checker33035_33041))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema33032_33038,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33033_33039], null)));
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
var ufv___33062 = schema.utils.use_fn_validation;
var output_schema33047_33063 = schema.core.pair.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema33048_33064 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema33053_33065 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33049_33066 = schema.core.checker.call(null,input_schema33048_33064);
var output_checker33050_33067 = schema.core.checker.call(null,output_schema33047_33063);
var input_checker33054_33068 = schema.core.checker.call(null,input_schema33053_33065);
var output_checker33055_33069 = schema.core.checker.call(null,output_schema33047_33063);
/**
 * Inputs: ([schema opts] [schema opts defaults])
 *   Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
 * 
 *   Returns two maps; the first is all of the schema options, the
 *   second is the REST of the options.
 */
om_bootstrap.types.separate = ((function (ufv___33062,output_schema33047_33063,input_schema33048_33064,input_schema33053_33065,input_checker33049_33066,output_checker33050_33067,input_checker33054_33068,output_checker33055_33069){
return (function om_bootstrap$types$separate(var_args){
var args33059 = [];
var len__7479__auto___33070 = arguments.length;
var i__7480__auto___33071 = (0);
while(true){
if((i__7480__auto___33071 < len__7479__auto___33070)){
args33059.push((arguments[i__7480__auto___33071]));

var G__33072 = (i__7480__auto___33071 + (1));
i__7480__auto___33071 = G__33072;
continue;
} else {
}
break;
}

var G__33061 = args33059.length;
switch (G__33061) {
case 2:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33059.length)].join('')));

}
});})(ufv___33062,output_schema33047_33063,input_schema33048_33064,input_schema33053_33065,input_checker33049_33066,output_checker33050_33067,input_checker33054_33068,output_checker33055_33069))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___33062,output_schema33047_33063,input_schema33048_33064,input_schema33053_33065,input_checker33049_33066,output_checker33050_33067,input_checker33054_33068,output_checker33055_33069){
return (function (G__33051,G__33052){
var validate__8009__auto__ = ufv___33062.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___33074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33051,G__33052], null);
var temp__4657__auto___33075 = input_checker33049_33066.call(null,args__8010__auto___33074);
if(cljs.core.truth_(temp__4657__auto___33075)){
var error__8011__auto___33076 = temp__4657__auto___33075;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__8011__auto___33076)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33048_33064,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___33074,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___33076], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var schema__$1 = G__33051;
var opts = G__33052;
while(true){
return om_bootstrap.types.separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___33077 = output_checker33050_33067.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___33077)){
var error__8011__auto___33078 = temp__4657__auto___33077;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__8011__auto___33078)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33047_33063,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___33078], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___33062,output_schema33047_33063,input_schema33048_33064,input_schema33053_33065,input_checker33049_33066,output_checker33050_33067,input_checker33054_33068,output_checker33055_33069))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___33062,output_schema33047_33063,input_schema33048_33064,input_schema33053_33065,input_checker33049_33066,output_checker33050_33067,input_checker33054_33068,output_checker33055_33069){
return (function (G__33056,G__33057,G__33058){
var validate__8009__auto__ = ufv___33062.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___33079 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33056,G__33057,G__33058], null);
var temp__4657__auto___33080 = input_checker33054_33068.call(null,args__8010__auto___33079);
if(cljs.core.truth_(temp__4657__auto___33080)){
var error__8011__auto___33081 = temp__4657__auto___33080;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__8011__auto___33081)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33053_33065,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___33079,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___33081], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var schema__$1 = G__33056;
var opts = G__33057;
var defaults = G__33058;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___33082 = output_checker33055_33069.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___33082)){
var error__8011__auto___33083 = temp__4657__auto___33082;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__8011__auto___33083)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33047_33063,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___33083], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___33062,output_schema33047_33063,input_schema33048_33064,input_schema33053_33065,input_checker33049_33066,output_checker33050_33067,input_checker33054_33068,output_checker33055_33069))
;

om_bootstrap.types.separate.cljs$lang$maxFixedArity = 3;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema33047_33063,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33048_33064,input_schema33053_33065], null)));
var ufv___33101 = schema.utils.use_fn_validation;
var output_schema33084_33102 = cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema33085_33103 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker33086_33104 = schema.core.checker.call(null,input_schema33085_33103);
var output_checker33087_33105 = schema.core.checker.call(null,output_schema33084_33102);
/**
 * Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
 *   Returns: {s/Str s/Bool}
 * 
 *   Returns input for class-set.
 */
om_bootstrap.types.bs_class_set = ((function (ufv___33101,output_schema33084_33102,input_schema33085_33103,input_checker33086_33104,output_checker33087_33105){
return (function om_bootstrap$types$bs_class_set(G__33088){
var validate__8009__auto__ = ufv___33101.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___33106 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33088], null);
var temp__4657__auto___33107 = input_checker33086_33104.call(null,args__8010__auto___33106);
if(cljs.core.truth_(temp__4657__auto___33107)){
var error__8011__auto___33108 = temp__4657__auto___33107;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__8011__auto___33108)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33085_33103,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___33106,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___33108], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var G__33096 = G__33088;
var map__33097 = G__33096;
var map__33097__$1 = ((((!((map__33097 == null)))?((((map__33097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33097):map__33097);
var bs_class = cljs.core.get.call(null,map__33097__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style = cljs.core.get.call(null,map__33097__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size = cljs.core.get.call(null,map__33097__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var G__33096__$1 = G__33096;
while(true){
var map__33099 = G__33096__$1;
var map__33099__$1 = ((((!((map__33099 == null)))?((((map__33099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33099):map__33099);
var bs_class__$1 = cljs.core.get.call(null,map__33099__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style__$1 = cljs.core.get.call(null,map__33099__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size__$1 = cljs.core.get.call(null,map__33099__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var temp__4655__auto__ = om_bootstrap.types.class_map.call(null,bs_class__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var klass = temp__4655__auto__;
var prefix = [cljs.core.str(cljs.core.name.call(null,klass)),cljs.core.str("-")].join('');
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4657__auto__ = om_bootstrap.types.size_map.call(null,bs_size__$1);
if(cljs.core.truth_(temp__4657__auto__)){
var size = temp__4657__auto__;
return cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,size))].join(''),true], true, false);
} else {
return null;
}
})(),(function (){var temp__4657__auto__ = om_bootstrap.types.style_map.call(null,bs_style__$1);
if(cljs.core.truth_(temp__4657__auto__)){
var style = temp__4657__auto__;
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
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___33109 = output_checker33087_33105.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___33109)){
var error__8011__auto___33110 = temp__4657__auto___33109;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__8011__auto___33110)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33084_33102,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___33110], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___33101,output_schema33084_33102,input_schema33085_33103,input_checker33086_33104,output_checker33087_33105))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema33084_33102,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33085_33103], null)));

//# sourceMappingURL=types.js.map