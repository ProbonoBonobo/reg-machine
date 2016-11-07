// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___47283 = schema.utils.use_fn_validation;
var output_schema47278_47284 = schema.core.Any;
var input_schema47279_47285 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker47280_47286 = schema.core.checker.call(null,input_schema47279_47285);
var output_checker47281_47287 = schema.core.checker.call(null,output_schema47278_47284);
/**
 * Inputs: [schema :- {s/Any s/Any}]
 * 
 *   Returns all keys from a schema.
 */
om_bootstrap.types.schema_keys = ((function (ufv___47283,output_schema47278_47284,input_schema47279_47285,input_checker47280_47286,output_checker47281_47287){
return (function om_bootstrap$types$schema_keys(G__47282){
var validate__30032__auto__ = ufv___47283.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___47288 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47282], null);
var temp__4657__auto___47289 = input_checker47280_47286.call(null,args__30033__auto___47288);
if(cljs.core.truth_(temp__4657__auto___47289)){
var error__30034__auto___47290 = temp__4657__auto___47289;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__30034__auto___47290)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47279_47285,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___47288,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47290], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var schema__$1 = G__47282;
while(true){
return cljs.core.map.call(null,((function (validate__30032__auto__,ufv___47283,output_schema47278_47284,input_schema47279_47285,input_checker47280_47286,output_checker47281_47287){
return (function (k){
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k))){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__30032__auto__,ufv___47283,output_schema47278_47284,input_schema47279_47285,input_checker47280_47286,output_checker47281_47287))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___47291 = output_checker47281_47287.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___47291)){
var error__30034__auto___47292 = temp__4657__auto___47291;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__30034__auto___47292)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47278_47284,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47292], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___47283,output_schema47278_47284,input_schema47279_47285,input_checker47280_47286,output_checker47281_47287))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema47278_47284,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47279_47285], null)));
var ufv___47298 = schema.utils.use_fn_validation;
var output_schema47293_47299 = schema.core.Any;
var input_schema47294_47300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker47295_47301 = schema.core.checker.call(null,input_schema47294_47300);
var output_checker47296_47302 = schema.core.checker.call(null,output_schema47293_47299);
/**
 * Inputs: [schema]
 * 
 *   Returns a map schema that accepts the supplied map schema, plus any
 *   other optional keys that show up in the map. Such a schema can only
 *   enforce that required keys are missing.
 */
om_bootstrap.types.at_least = ((function (ufv___47298,output_schema47293_47299,input_schema47294_47300,input_checker47295_47301,output_checker47296_47302){
return (function om_bootstrap$types$at_least(G__47297){
var validate__30032__auto__ = ufv___47298.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___47303 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47297], null);
var temp__4657__auto___47304 = input_checker47295_47301.call(null,args__30033__auto___47303);
if(cljs.core.truth_(temp__4657__auto___47304)){
var error__30034__auto___47305 = temp__4657__auto___47304;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__30034__auto___47305)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47294_47300,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___47303,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47305], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var schema__$1 = G__47297;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___47306 = output_checker47296_47302.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___47306)){
var error__30034__auto___47307 = temp__4657__auto___47306;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__30034__auto___47307)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47293_47299,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47307], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___47298,output_schema47293_47299,input_schema47294_47300,input_checker47295_47301,output_checker47296_47302))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema47293_47299,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47294_47300], null)));
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
var ufv___47323 = schema.utils.use_fn_validation;
var output_schema47308_47324 = schema.core.pair.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema47309_47325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema47314_47326 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker47310_47327 = schema.core.checker.call(null,input_schema47309_47325);
var output_checker47311_47328 = schema.core.checker.call(null,output_schema47308_47324);
var input_checker47315_47329 = schema.core.checker.call(null,input_schema47314_47326);
var output_checker47316_47330 = schema.core.checker.call(null,output_schema47308_47324);
/**
 * Inputs: ([schema opts] [schema opts defaults])
 *   Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
 * 
 *   Returns two maps; the first is all of the schema options, the
 *   second is the REST of the options.
 */
om_bootstrap.types.separate = ((function (ufv___47323,output_schema47308_47324,input_schema47309_47325,input_schema47314_47326,input_checker47310_47327,output_checker47311_47328,input_checker47315_47329,output_checker47316_47330){
return (function om_bootstrap$types$separate(var_args){
var args47320 = [];
var len__25826__auto___47331 = arguments.length;
var i__25827__auto___47332 = (0);
while(true){
if((i__25827__auto___47332 < len__25826__auto___47331)){
args47320.push((arguments[i__25827__auto___47332]));

var G__47333 = (i__25827__auto___47332 + (1));
i__25827__auto___47332 = G__47333;
continue;
} else {
}
break;
}

var G__47322 = args47320.length;
switch (G__47322) {
case 2:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47320.length)].join('')));

}
});})(ufv___47323,output_schema47308_47324,input_schema47309_47325,input_schema47314_47326,input_checker47310_47327,output_checker47311_47328,input_checker47315_47329,output_checker47316_47330))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___47323,output_schema47308_47324,input_schema47309_47325,input_schema47314_47326,input_checker47310_47327,output_checker47311_47328,input_checker47315_47329,output_checker47316_47330){
return (function (G__47312,G__47313){
var validate__30032__auto__ = ufv___47323.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___47335 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47312,G__47313], null);
var temp__4657__auto___47336 = input_checker47310_47327.call(null,args__30033__auto___47335);
if(cljs.core.truth_(temp__4657__auto___47336)){
var error__30034__auto___47337 = temp__4657__auto___47336;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__30034__auto___47337)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47309_47325,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___47335,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47337], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var schema__$1 = G__47312;
var opts = G__47313;
while(true){
return om_bootstrap.types.separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___47338 = output_checker47311_47328.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___47338)){
var error__30034__auto___47339 = temp__4657__auto___47338;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__30034__auto___47339)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47308_47324,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47339], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___47323,output_schema47308_47324,input_schema47309_47325,input_schema47314_47326,input_checker47310_47327,output_checker47311_47328,input_checker47315_47329,output_checker47316_47330))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___47323,output_schema47308_47324,input_schema47309_47325,input_schema47314_47326,input_checker47310_47327,output_checker47311_47328,input_checker47315_47329,output_checker47316_47330){
return (function (G__47317,G__47318,G__47319){
var validate__30032__auto__ = ufv___47323.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___47340 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47317,G__47318,G__47319], null);
var temp__4657__auto___47341 = input_checker47315_47329.call(null,args__30033__auto___47340);
if(cljs.core.truth_(temp__4657__auto___47341)){
var error__30034__auto___47342 = temp__4657__auto___47341;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__30034__auto___47342)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47314_47326,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___47340,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47342], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var schema__$1 = G__47317;
var opts = G__47318;
var defaults = G__47319;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___47343 = output_checker47316_47330.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___47343)){
var error__30034__auto___47344 = temp__4657__auto___47343;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__30034__auto___47344)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47308_47324,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47344], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___47323,output_schema47308_47324,input_schema47309_47325,input_schema47314_47326,input_checker47310_47327,output_checker47311_47328,input_checker47315_47329,output_checker47316_47330))
;

om_bootstrap.types.separate.cljs$lang$maxFixedArity = 3;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema47308_47324,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47309_47325,input_schema47314_47326], null)));
var ufv___47362 = schema.utils.use_fn_validation;
var output_schema47345_47363 = cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema47346_47364 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker47347_47365 = schema.core.checker.call(null,input_schema47346_47364);
var output_checker47348_47366 = schema.core.checker.call(null,output_schema47345_47363);
/**
 * Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
 *   Returns: {s/Str s/Bool}
 * 
 *   Returns input for class-set.
 */
om_bootstrap.types.bs_class_set = ((function (ufv___47362,output_schema47345_47363,input_schema47346_47364,input_checker47347_47365,output_checker47348_47366){
return (function om_bootstrap$types$bs_class_set(G__47349){
var validate__30032__auto__ = ufv___47362.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___47367 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47349], null);
var temp__4657__auto___47368 = input_checker47347_47365.call(null,args__30033__auto___47367);
if(cljs.core.truth_(temp__4657__auto___47368)){
var error__30034__auto___47369 = temp__4657__auto___47368;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__30034__auto___47369)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47346_47364,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___47367,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47369], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var G__47357 = G__47349;
var map__47358 = G__47357;
var map__47358__$1 = ((((!((map__47358 == null)))?((((map__47358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47358):map__47358);
var bs_class = cljs.core.get.call(null,map__47358__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style = cljs.core.get.call(null,map__47358__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size = cljs.core.get.call(null,map__47358__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var G__47357__$1 = G__47357;
while(true){
var map__47360 = G__47357__$1;
var map__47360__$1 = ((((!((map__47360 == null)))?((((map__47360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47360):map__47360);
var bs_class__$1 = cljs.core.get.call(null,map__47360__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style__$1 = cljs.core.get.call(null,map__47360__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size__$1 = cljs.core.get.call(null,map__47360__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
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
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___47370 = output_checker47348_47366.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___47370)){
var error__30034__auto___47371 = temp__4657__auto___47370;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__30034__auto___47371)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47345_47363,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47371], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___47362,output_schema47345_47363,input_schema47346_47364,input_checker47347_47365,output_checker47348_47366))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema47345_47363,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47346_47364], null)));

//# sourceMappingURL=types.js.map?rel=1478445848058