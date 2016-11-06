// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___66793 = schema.utils.use_fn_validation;
var output_schema66788_66794 = schema.core.Any;
var input_schema66789_66795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker66790_66796 = schema.core.checker.call(null,input_schema66789_66795);
var output_checker66791_66797 = schema.core.checker.call(null,output_schema66788_66794);
/**
 * Inputs: [schema :- {s/Any s/Any}]
 * 
 *   Returns all keys from a schema.
 */
om_bootstrap.types.schema_keys = ((function (ufv___66793,output_schema66788_66794,input_schema66789_66795,input_checker66790_66796,output_checker66791_66797){
return (function om_bootstrap$types$schema_keys(G__66792){
var validate__30368__auto__ = ufv___66793.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___66798 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__66792], null);
var temp__4657__auto___66799 = input_checker66790_66796.call(null,args__30369__auto___66798);
if(cljs.core.truth_(temp__4657__auto___66799)){
var error__30370__auto___66800 = temp__4657__auto___66799;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__30370__auto___66800)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema66789_66795,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___66798,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66800], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var schema__$1 = G__66792;
while(true){
return cljs.core.map.call(null,((function (validate__30368__auto__,ufv___66793,output_schema66788_66794,input_schema66789_66795,input_checker66790_66796,output_checker66791_66797){
return (function (k){
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k))){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__30368__auto__,ufv___66793,output_schema66788_66794,input_schema66789_66795,input_checker66790_66796,output_checker66791_66797))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___66801 = output_checker66791_66797.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___66801)){
var error__30370__auto___66802 = temp__4657__auto___66801;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__30370__auto___66802)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema66788_66794,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66802], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___66793,output_schema66788_66794,input_schema66789_66795,input_checker66790_66796,output_checker66791_66797))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema66788_66794,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema66789_66795], null)));
var ufv___66808 = schema.utils.use_fn_validation;
var output_schema66803_66809 = schema.core.Any;
var input_schema66804_66810 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker66805_66811 = schema.core.checker.call(null,input_schema66804_66810);
var output_checker66806_66812 = schema.core.checker.call(null,output_schema66803_66809);
/**
 * Inputs: [schema]
 * 
 *   Returns a map schema that accepts the supplied map schema, plus any
 *   other optional keys that show up in the map. Such a schema can only
 *   enforce that required keys are missing.
 */
om_bootstrap.types.at_least = ((function (ufv___66808,output_schema66803_66809,input_schema66804_66810,input_checker66805_66811,output_checker66806_66812){
return (function om_bootstrap$types$at_least(G__66807){
var validate__30368__auto__ = ufv___66808.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___66813 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__66807], null);
var temp__4657__auto___66814 = input_checker66805_66811.call(null,args__30369__auto___66813);
if(cljs.core.truth_(temp__4657__auto___66814)){
var error__30370__auto___66815 = temp__4657__auto___66814;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__30370__auto___66815)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema66804_66810,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___66813,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66815], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var schema__$1 = G__66807;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___66816 = output_checker66806_66812.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___66816)){
var error__30370__auto___66817 = temp__4657__auto___66816;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__30370__auto___66817)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema66803_66809,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66817], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___66808,output_schema66803_66809,input_schema66804_66810,input_checker66805_66811,output_checker66806_66812))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema66803_66809,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema66804_66810], null)));
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
var ufv___66833 = schema.utils.use_fn_validation;
var output_schema66818_66834 = schema.core.pair.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema66819_66835 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema66824_66836 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker66820_66837 = schema.core.checker.call(null,input_schema66819_66835);
var output_checker66821_66838 = schema.core.checker.call(null,output_schema66818_66834);
var input_checker66825_66839 = schema.core.checker.call(null,input_schema66824_66836);
var output_checker66826_66840 = schema.core.checker.call(null,output_schema66818_66834);
/**
 * Inputs: ([schema opts] [schema opts defaults])
 *   Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
 * 
 *   Returns two maps; the first is all of the schema options, the
 *   second is the REST of the options.
 */
om_bootstrap.types.separate = ((function (ufv___66833,output_schema66818_66834,input_schema66819_66835,input_schema66824_66836,input_checker66820_66837,output_checker66821_66838,input_checker66825_66839,output_checker66826_66840){
return (function om_bootstrap$types$separate(var_args){
var args66830 = [];
var len__25826__auto___66841 = arguments.length;
var i__25827__auto___66842 = (0);
while(true){
if((i__25827__auto___66842 < len__25826__auto___66841)){
args66830.push((arguments[i__25827__auto___66842]));

var G__66843 = (i__25827__auto___66842 + (1));
i__25827__auto___66842 = G__66843;
continue;
} else {
}
break;
}

var G__66832 = args66830.length;
switch (G__66832) {
case 2:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66830.length)].join('')));

}
});})(ufv___66833,output_schema66818_66834,input_schema66819_66835,input_schema66824_66836,input_checker66820_66837,output_checker66821_66838,input_checker66825_66839,output_checker66826_66840))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___66833,output_schema66818_66834,input_schema66819_66835,input_schema66824_66836,input_checker66820_66837,output_checker66821_66838,input_checker66825_66839,output_checker66826_66840){
return (function (G__66822,G__66823){
var validate__30368__auto__ = ufv___66833.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___66845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__66822,G__66823], null);
var temp__4657__auto___66846 = input_checker66820_66837.call(null,args__30369__auto___66845);
if(cljs.core.truth_(temp__4657__auto___66846)){
var error__30370__auto___66847 = temp__4657__auto___66846;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__30370__auto___66847)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema66819_66835,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___66845,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66847], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var schema__$1 = G__66822;
var opts = G__66823;
while(true){
return om_bootstrap.types.separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___66848 = output_checker66821_66838.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___66848)){
var error__30370__auto___66849 = temp__4657__auto___66848;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__30370__auto___66849)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema66818_66834,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66849], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___66833,output_schema66818_66834,input_schema66819_66835,input_schema66824_66836,input_checker66820_66837,output_checker66821_66838,input_checker66825_66839,output_checker66826_66840))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___66833,output_schema66818_66834,input_schema66819_66835,input_schema66824_66836,input_checker66820_66837,output_checker66821_66838,input_checker66825_66839,output_checker66826_66840){
return (function (G__66827,G__66828,G__66829){
var validate__30368__auto__ = ufv___66833.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___66850 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__66827,G__66828,G__66829], null);
var temp__4657__auto___66851 = input_checker66825_66839.call(null,args__30369__auto___66850);
if(cljs.core.truth_(temp__4657__auto___66851)){
var error__30370__auto___66852 = temp__4657__auto___66851;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__30370__auto___66852)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema66824_66836,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___66850,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66852], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var schema__$1 = G__66827;
var opts = G__66828;
var defaults = G__66829;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___66853 = output_checker66826_66840.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___66853)){
var error__30370__auto___66854 = temp__4657__auto___66853;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__30370__auto___66854)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema66818_66834,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66854], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___66833,output_schema66818_66834,input_schema66819_66835,input_schema66824_66836,input_checker66820_66837,output_checker66821_66838,input_checker66825_66839,output_checker66826_66840))
;

om_bootstrap.types.separate.cljs$lang$maxFixedArity = 3;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema66818_66834,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema66819_66835,input_schema66824_66836], null)));
var ufv___66872 = schema.utils.use_fn_validation;
var output_schema66855_66873 = cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema66856_66874 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker66857_66875 = schema.core.checker.call(null,input_schema66856_66874);
var output_checker66858_66876 = schema.core.checker.call(null,output_schema66855_66873);
/**
 * Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
 *   Returns: {s/Str s/Bool}
 * 
 *   Returns input for class-set.
 */
om_bootstrap.types.bs_class_set = ((function (ufv___66872,output_schema66855_66873,input_schema66856_66874,input_checker66857_66875,output_checker66858_66876){
return (function om_bootstrap$types$bs_class_set(G__66859){
var validate__30368__auto__ = ufv___66872.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___66877 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__66859], null);
var temp__4657__auto___66878 = input_checker66857_66875.call(null,args__30369__auto___66877);
if(cljs.core.truth_(temp__4657__auto___66878)){
var error__30370__auto___66879 = temp__4657__auto___66878;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__30370__auto___66879)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema66856_66874,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___66877,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66879], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var G__66867 = G__66859;
var map__66868 = G__66867;
var map__66868__$1 = ((((!((map__66868 == null)))?((((map__66868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66868):map__66868);
var bs_class = cljs.core.get.call(null,map__66868__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style = cljs.core.get.call(null,map__66868__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size = cljs.core.get.call(null,map__66868__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var G__66867__$1 = G__66867;
while(true){
var map__66870 = G__66867__$1;
var map__66870__$1 = ((((!((map__66870 == null)))?((((map__66870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66870):map__66870);
var bs_class__$1 = cljs.core.get.call(null,map__66870__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style__$1 = cljs.core.get.call(null,map__66870__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size__$1 = cljs.core.get.call(null,map__66870__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
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
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___66880 = output_checker66858_66876.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___66880)){
var error__30370__auto___66881 = temp__4657__auto___66880;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__30370__auto___66881)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema66855_66873,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66881], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___66872,output_schema66855_66873,input_schema66856_66874,input_checker66857_66875,output_checker66858_66876))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema66855_66873,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema66856_66874], null)));

//# sourceMappingURL=types.js.map?rel=1478399640788