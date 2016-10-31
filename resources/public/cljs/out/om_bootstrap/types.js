// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___55489 = schema.utils.use_fn_validation;
var output_schema55484_55490 = schema.core.Any;
var input_schema55485_55491 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker55486_55492 = schema.core.checker.call(null,input_schema55485_55491);
var output_checker55487_55493 = schema.core.checker.call(null,output_schema55484_55490);
/**
 * Inputs: [schema :- {s/Any s/Any}]
 * 
 *   Returns all keys from a schema.
 */
om_bootstrap.types.schema_keys = ((function (ufv___55489,output_schema55484_55490,input_schema55485_55491,input_checker55486_55492,output_checker55487_55493){
return (function om_bootstrap$types$schema_keys(G__55488){
var validate__37921__auto__ = ufv___55489.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___55494 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55488], null);
var temp__4657__auto___55495 = input_checker55486_55492.call(null,args__37922__auto___55494);
if(cljs.core.truth_(temp__4657__auto___55495)){
var error__37923__auto___55496 = temp__4657__auto___55495;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__37923__auto___55496)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55485_55491,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___55494,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___55496], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var schema__$1 = G__55488;
while(true){
return cljs.core.map.call(null,((function (validate__37921__auto__,ufv___55489,output_schema55484_55490,input_schema55485_55491,input_checker55486_55492,output_checker55487_55493){
return (function (k){
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k))){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__37921__auto__,ufv___55489,output_schema55484_55490,input_schema55485_55491,input_checker55486_55492,output_checker55487_55493))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___55497 = output_checker55487_55493.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___55497)){
var error__37923__auto___55498 = temp__4657__auto___55497;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__37923__auto___55498)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55484_55490,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___55498], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___55489,output_schema55484_55490,input_schema55485_55491,input_checker55486_55492,output_checker55487_55493))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema55484_55490,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55485_55491], null)));
var ufv___55504 = schema.utils.use_fn_validation;
var output_schema55499_55505 = schema.core.Any;
var input_schema55500_55506 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker55501_55507 = schema.core.checker.call(null,input_schema55500_55506);
var output_checker55502_55508 = schema.core.checker.call(null,output_schema55499_55505);
/**
 * Inputs: [schema]
 * 
 *   Returns a map schema that accepts the supplied map schema, plus any
 *   other optional keys that show up in the map. Such a schema can only
 *   enforce that required keys are missing.
 */
om_bootstrap.types.at_least = ((function (ufv___55504,output_schema55499_55505,input_schema55500_55506,input_checker55501_55507,output_checker55502_55508){
return (function om_bootstrap$types$at_least(G__55503){
var validate__37921__auto__ = ufv___55504.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___55509 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55503], null);
var temp__4657__auto___55510 = input_checker55501_55507.call(null,args__37922__auto___55509);
if(cljs.core.truth_(temp__4657__auto___55510)){
var error__37923__auto___55511 = temp__4657__auto___55510;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__37923__auto___55511)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55500_55506,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___55509,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___55511], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var schema__$1 = G__55503;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___55512 = output_checker55502_55508.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___55512)){
var error__37923__auto___55513 = temp__4657__auto___55512;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__37923__auto___55513)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55499_55505,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___55513], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___55504,output_schema55499_55505,input_schema55500_55506,input_checker55501_55507,output_checker55502_55508))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema55499_55505,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55500_55506], null)));
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
var ufv___55529 = schema.utils.use_fn_validation;
var output_schema55514_55530 = schema.core.pair.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema55515_55531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema55520_55532 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker55516_55533 = schema.core.checker.call(null,input_schema55515_55531);
var output_checker55517_55534 = schema.core.checker.call(null,output_schema55514_55530);
var input_checker55521_55535 = schema.core.checker.call(null,input_schema55520_55532);
var output_checker55522_55536 = schema.core.checker.call(null,output_schema55514_55530);
/**
 * Inputs: ([schema opts] [schema opts defaults])
 *   Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
 * 
 *   Returns two maps; the first is all of the schema options, the
 *   second is the REST of the options.
 */
om_bootstrap.types.separate = ((function (ufv___55529,output_schema55514_55530,input_schema55515_55531,input_schema55520_55532,input_checker55516_55533,output_checker55517_55534,input_checker55521_55535,output_checker55522_55536){
return (function om_bootstrap$types$separate(var_args){
var args55526 = [];
var len__25826__auto___55537 = arguments.length;
var i__25827__auto___55538 = (0);
while(true){
if((i__25827__auto___55538 < len__25826__auto___55537)){
args55526.push((arguments[i__25827__auto___55538]));

var G__55539 = (i__25827__auto___55538 + (1));
i__25827__auto___55538 = G__55539;
continue;
} else {
}
break;
}

var G__55528 = args55526.length;
switch (G__55528) {
case 2:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55526.length)].join('')));

}
});})(ufv___55529,output_schema55514_55530,input_schema55515_55531,input_schema55520_55532,input_checker55516_55533,output_checker55517_55534,input_checker55521_55535,output_checker55522_55536))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___55529,output_schema55514_55530,input_schema55515_55531,input_schema55520_55532,input_checker55516_55533,output_checker55517_55534,input_checker55521_55535,output_checker55522_55536){
return (function (G__55518,G__55519){
var validate__37921__auto__ = ufv___55529.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___55541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55518,G__55519], null);
var temp__4657__auto___55542 = input_checker55516_55533.call(null,args__37922__auto___55541);
if(cljs.core.truth_(temp__4657__auto___55542)){
var error__37923__auto___55543 = temp__4657__auto___55542;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__37923__auto___55543)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55515_55531,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___55541,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___55543], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var schema__$1 = G__55518;
var opts = G__55519;
while(true){
return om_bootstrap.types.separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___55544 = output_checker55517_55534.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___55544)){
var error__37923__auto___55545 = temp__4657__auto___55544;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__37923__auto___55545)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55514_55530,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___55545], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___55529,output_schema55514_55530,input_schema55515_55531,input_schema55520_55532,input_checker55516_55533,output_checker55517_55534,input_checker55521_55535,output_checker55522_55536))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___55529,output_schema55514_55530,input_schema55515_55531,input_schema55520_55532,input_checker55516_55533,output_checker55517_55534,input_checker55521_55535,output_checker55522_55536){
return (function (G__55523,G__55524,G__55525){
var validate__37921__auto__ = ufv___55529.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___55546 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55523,G__55524,G__55525], null);
var temp__4657__auto___55547 = input_checker55521_55535.call(null,args__37922__auto___55546);
if(cljs.core.truth_(temp__4657__auto___55547)){
var error__37923__auto___55548 = temp__4657__auto___55547;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__37923__auto___55548)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55520_55532,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___55546,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___55548], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var schema__$1 = G__55523;
var opts = G__55524;
var defaults = G__55525;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___55549 = output_checker55522_55536.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___55549)){
var error__37923__auto___55550 = temp__4657__auto___55549;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__37923__auto___55550)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55514_55530,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___55550], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___55529,output_schema55514_55530,input_schema55515_55531,input_schema55520_55532,input_checker55516_55533,output_checker55517_55534,input_checker55521_55535,output_checker55522_55536))
;

om_bootstrap.types.separate.cljs$lang$maxFixedArity = 3;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema55514_55530,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55515_55531,input_schema55520_55532], null)));
var ufv___55568 = schema.utils.use_fn_validation;
var output_schema55551_55569 = cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema55552_55570 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker55553_55571 = schema.core.checker.call(null,input_schema55552_55570);
var output_checker55554_55572 = schema.core.checker.call(null,output_schema55551_55569);
/**
 * Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
 *   Returns: {s/Str s/Bool}
 * 
 *   Returns input for class-set.
 */
om_bootstrap.types.bs_class_set = ((function (ufv___55568,output_schema55551_55569,input_schema55552_55570,input_checker55553_55571,output_checker55554_55572){
return (function om_bootstrap$types$bs_class_set(G__55555){
var validate__37921__auto__ = ufv___55568.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___55573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55555], null);
var temp__4657__auto___55574 = input_checker55553_55571.call(null,args__37922__auto___55573);
if(cljs.core.truth_(temp__4657__auto___55574)){
var error__37923__auto___55575 = temp__4657__auto___55574;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__37923__auto___55575)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55552_55570,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___55573,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___55575], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var G__55563 = G__55555;
var map__55564 = G__55563;
var map__55564__$1 = ((((!((map__55564 == null)))?((((map__55564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55564):map__55564);
var bs_class = cljs.core.get.call(null,map__55564__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style = cljs.core.get.call(null,map__55564__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size = cljs.core.get.call(null,map__55564__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var G__55563__$1 = G__55563;
while(true){
var map__55566 = G__55563__$1;
var map__55566__$1 = ((((!((map__55566 == null)))?((((map__55566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55566):map__55566);
var bs_class__$1 = cljs.core.get.call(null,map__55566__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style__$1 = cljs.core.get.call(null,map__55566__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size__$1 = cljs.core.get.call(null,map__55566__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
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
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___55576 = output_checker55554_55572.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___55576)){
var error__37923__auto___55577 = temp__4657__auto___55576;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__37923__auto___55577)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55551_55569,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___55577], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___55568,output_schema55551_55569,input_schema55552_55570,input_checker55553_55571,output_checker55554_55572))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema55551_55569,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55552_55570], null)));

//# sourceMappingURL=types.js.map?rel=1477762304888