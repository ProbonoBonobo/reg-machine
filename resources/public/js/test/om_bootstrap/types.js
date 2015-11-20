// Compiled by ClojureScript 1.7.122 {}
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___22639 = schema.utils.use_fn_validation;
var output_schema22634_22640 = schema.core.Any;
var input_schema22635_22641 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker22636_22642 = schema.core.checker.call(null,input_schema22635_22641);
var output_checker22637_22643 = schema.core.checker.call(null,output_schema22634_22640);
/**
 * Inputs: [schema :- {s/Any s/Any}]
 * 
 *   Returns all keys from a schema.
 */
om_bootstrap.types.schema_keys = ((function (ufv___22639,output_schema22634_22640,input_schema22635_22641,input_checker22636_22642,output_checker22637_22643){
return (function om_bootstrap$types$schema_keys(G__22638){
var validate__10213__auto__ = ufv___22639.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22644 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22638], null);
var temp__4425__auto___22645 = input_checker22636_22642.call(null,args__10214__auto___22644);
if(cljs.core.truth_(temp__4425__auto___22645)){
var error__10215__auto___22646 = temp__4425__auto___22645;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__10215__auto___22646)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22635_22641,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22644,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22646], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var schema__$1 = G__22638;
while(true){
return cljs.core.map.call(null,((function (validate__10213__auto__,ufv___22639,output_schema22634_22640,input_schema22635_22641,input_checker22636_22642,output_checker22637_22643){
return (function (k){
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k))){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__10213__auto__,ufv___22639,output_schema22634_22640,input_schema22635_22641,input_checker22636_22642,output_checker22637_22643))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22647 = output_checker22637_22643.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22647)){
var error__10215__auto___22648 = temp__4425__auto___22647;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__10215__auto___22648)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22634_22640,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22648], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22639,output_schema22634_22640,input_schema22635_22641,input_checker22636_22642,output_checker22637_22643))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema22634_22640,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22635_22641], null)));
var ufv___22654 = schema.utils.use_fn_validation;
var output_schema22649_22655 = schema.core.Any;
var input_schema22650_22656 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker22651_22657 = schema.core.checker.call(null,input_schema22650_22656);
var output_checker22652_22658 = schema.core.checker.call(null,output_schema22649_22655);
/**
 * Inputs: [schema]
 * 
 *   Returns a map schema that accepts the supplied map schema, plus any
 *   other optional keys that show up in the map. Such a schema can only
 *   enforce that required keys are missing.
 */
om_bootstrap.types.at_least = ((function (ufv___22654,output_schema22649_22655,input_schema22650_22656,input_checker22651_22657,output_checker22652_22658){
return (function om_bootstrap$types$at_least(G__22653){
var validate__10213__auto__ = ufv___22654.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22659 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22653], null);
var temp__4425__auto___22660 = input_checker22651_22657.call(null,args__10214__auto___22659);
if(cljs.core.truth_(temp__4425__auto___22660)){
var error__10215__auto___22661 = temp__4425__auto___22660;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__10215__auto___22661)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22650_22656,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22659,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22661], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var schema__$1 = G__22653;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22662 = output_checker22652_22658.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22662)){
var error__10215__auto___22663 = temp__4425__auto___22662;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__10215__auto___22663)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22649_22655,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22663], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22654,output_schema22649_22655,input_schema22650_22656,input_checker22651_22657,output_checker22652_22658))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema22649_22655,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22650_22656], null)));
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
var ufv___22679 = schema.utils.use_fn_validation;
var output_schema22664_22680 = schema.core.pair.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema22665_22681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema22670_22682 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker22666_22683 = schema.core.checker.call(null,input_schema22665_22681);
var output_checker22667_22684 = schema.core.checker.call(null,output_schema22664_22680);
var input_checker22671_22685 = schema.core.checker.call(null,input_schema22670_22682);
var output_checker22672_22686 = schema.core.checker.call(null,output_schema22664_22680);
/**
 * Inputs: ([schema opts] [schema opts defaults])
 *   Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
 * 
 *   Returns two maps; the first is all of the schema options, the
 *   second is the REST of the options.
 */
om_bootstrap.types.separate = ((function (ufv___22679,output_schema22664_22680,input_schema22665_22681,input_schema22670_22682,input_checker22666_22683,output_checker22667_22684,input_checker22671_22685,output_checker22672_22686){
return (function om_bootstrap$types$separate(var_args){
var args22676 = [];
var len__5619__auto___22687 = arguments.length;
var i__5620__auto___22688 = (0);
while(true){
if((i__5620__auto___22688 < len__5619__auto___22687)){
args22676.push((arguments[i__5620__auto___22688]));

var G__22689 = (i__5620__auto___22688 + (1));
i__5620__auto___22688 = G__22689;
continue;
} else {
}
break;
}

var G__22678 = args22676.length;
switch (G__22678) {
case 2:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22676.length)].join('')));

}
});})(ufv___22679,output_schema22664_22680,input_schema22665_22681,input_schema22670_22682,input_checker22666_22683,output_checker22667_22684,input_checker22671_22685,output_checker22672_22686))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___22679,output_schema22664_22680,input_schema22665_22681,input_schema22670_22682,input_checker22666_22683,output_checker22667_22684,input_checker22671_22685,output_checker22672_22686){
return (function (G__22668,G__22669){
var validate__10213__auto__ = ufv___22679.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22668,G__22669], null);
var temp__4425__auto___22692 = input_checker22666_22683.call(null,args__10214__auto___22691);
if(cljs.core.truth_(temp__4425__auto___22692)){
var error__10215__auto___22693 = temp__4425__auto___22692;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__10215__auto___22693)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22665_22681,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22691,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22693], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var schema__$1 = G__22668;
var opts = G__22669;
while(true){
return om_bootstrap.types.separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22694 = output_checker22667_22684.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22694)){
var error__10215__auto___22695 = temp__4425__auto___22694;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__10215__auto___22695)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22664_22680,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22695], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22679,output_schema22664_22680,input_schema22665_22681,input_schema22670_22682,input_checker22666_22683,output_checker22667_22684,input_checker22671_22685,output_checker22672_22686))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___22679,output_schema22664_22680,input_schema22665_22681,input_schema22670_22682,input_checker22666_22683,output_checker22667_22684,input_checker22671_22685,output_checker22672_22686){
return (function (G__22673,G__22674,G__22675){
var validate__10213__auto__ = ufv___22679.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22696 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22673,G__22674,G__22675], null);
var temp__4425__auto___22697 = input_checker22671_22685.call(null,args__10214__auto___22696);
if(cljs.core.truth_(temp__4425__auto___22697)){
var error__10215__auto___22698 = temp__4425__auto___22697;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__10215__auto___22698)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22670_22682,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22696,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22698], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var schema__$1 = G__22673;
var opts = G__22674;
var defaults = G__22675;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22699 = output_checker22672_22686.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22699)){
var error__10215__auto___22700 = temp__4425__auto___22699;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__10215__auto___22700)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22664_22680,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22700], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22679,output_schema22664_22680,input_schema22665_22681,input_schema22670_22682,input_checker22666_22683,output_checker22667_22684,input_checker22671_22685,output_checker22672_22686))
;

om_bootstrap.types.separate.cljs$lang$maxFixedArity = 3;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema22664_22680,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22665_22681,input_schema22670_22682], null)));
var ufv___22718 = schema.utils.use_fn_validation;
var output_schema22701_22719 = cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema22702_22720 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker22703_22721 = schema.core.checker.call(null,input_schema22702_22720);
var output_checker22704_22722 = schema.core.checker.call(null,output_schema22701_22719);
/**
 * Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
 *   Returns: {s/Str s/Bool}
 * 
 *   Returns input for class-set.
 */
om_bootstrap.types.bs_class_set = ((function (ufv___22718,output_schema22701_22719,input_schema22702_22720,input_checker22703_22721,output_checker22704_22722){
return (function om_bootstrap$types$bs_class_set(G__22705){
var validate__10213__auto__ = ufv___22718.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22705], null);
var temp__4425__auto___22724 = input_checker22703_22721.call(null,args__10214__auto___22723);
if(cljs.core.truth_(temp__4425__auto___22724)){
var error__10215__auto___22725 = temp__4425__auto___22724;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__10215__auto___22725)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22702_22720,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22723,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22725], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var G__22713 = G__22705;
var map__22714 = G__22713;
var map__22714__$1 = ((((!((map__22714 == null)))?((((map__22714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22714):map__22714);
var bs_class = cljs.core.get.call(null,map__22714__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style = cljs.core.get.call(null,map__22714__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size = cljs.core.get.call(null,map__22714__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var G__22713__$1 = G__22713;
while(true){
var map__22716 = G__22713__$1;
var map__22716__$1 = ((((!((map__22716 == null)))?((((map__22716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22716):map__22716);
var bs_class__$1 = cljs.core.get.call(null,map__22716__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style__$1 = cljs.core.get.call(null,map__22716__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size__$1 = cljs.core.get.call(null,map__22716__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
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
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22726 = output_checker22704_22722.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22726)){
var error__10215__auto___22727 = temp__4425__auto___22726;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__10215__auto___22727)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22701_22719,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22727], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22718,output_schema22701_22719,input_schema22702_22720,input_checker22703_22721,output_checker22704_22722))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema22701_22719,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22702_22720], null)));
