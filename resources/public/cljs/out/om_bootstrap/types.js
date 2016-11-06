// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___81153 = schema.utils.use_fn_validation;
var output_schema81148_81154 = schema.core.Any;
var input_schema81149_81155 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker81150_81156 = schema.core.checker.call(null,input_schema81149_81155);
var output_checker81151_81157 = schema.core.checker.call(null,output_schema81148_81154);
/**
 * Inputs: [schema :- {s/Any s/Any}]
 * 
 *   Returns all keys from a schema.
 */
om_bootstrap.types.schema_keys = ((function (ufv___81153,output_schema81148_81154,input_schema81149_81155,input_checker81150_81156,output_checker81151_81157){
return (function om_bootstrap$types$schema_keys(G__81152){
var validate__38286__auto__ = ufv___81153.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___81158 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__81152], null);
var temp__4657__auto___81159 = input_checker81150_81156.call(null,args__38287__auto___81158);
if(cljs.core.truth_(temp__4657__auto___81159)){
var error__38288__auto___81160 = temp__4657__auto___81159;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__38288__auto___81160)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema81149_81155,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___81158,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81160], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var schema__$1 = G__81152;
while(true){
return cljs.core.map.call(null,((function (validate__38286__auto__,ufv___81153,output_schema81148_81154,input_schema81149_81155,input_checker81150_81156,output_checker81151_81157){
return (function (k){
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k))){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__38286__auto__,ufv___81153,output_schema81148_81154,input_schema81149_81155,input_checker81150_81156,output_checker81151_81157))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___81161 = output_checker81151_81157.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___81161)){
var error__38288__auto___81162 = temp__4657__auto___81161;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__38288__auto___81162)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema81148_81154,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81162], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___81153,output_schema81148_81154,input_schema81149_81155,input_checker81150_81156,output_checker81151_81157))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema81148_81154,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema81149_81155], null)));
var ufv___81168 = schema.utils.use_fn_validation;
var output_schema81163_81169 = schema.core.Any;
var input_schema81164_81170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker81165_81171 = schema.core.checker.call(null,input_schema81164_81170);
var output_checker81166_81172 = schema.core.checker.call(null,output_schema81163_81169);
/**
 * Inputs: [schema]
 * 
 *   Returns a map schema that accepts the supplied map schema, plus any
 *   other optional keys that show up in the map. Such a schema can only
 *   enforce that required keys are missing.
 */
om_bootstrap.types.at_least = ((function (ufv___81168,output_schema81163_81169,input_schema81164_81170,input_checker81165_81171,output_checker81166_81172){
return (function om_bootstrap$types$at_least(G__81167){
var validate__38286__auto__ = ufv___81168.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___81173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__81167], null);
var temp__4657__auto___81174 = input_checker81165_81171.call(null,args__38287__auto___81173);
if(cljs.core.truth_(temp__4657__auto___81174)){
var error__38288__auto___81175 = temp__4657__auto___81174;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__38288__auto___81175)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema81164_81170,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___81173,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81175], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var schema__$1 = G__81167;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___81176 = output_checker81166_81172.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___81176)){
var error__38288__auto___81177 = temp__4657__auto___81176;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__38288__auto___81177)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema81163_81169,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81177], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___81168,output_schema81163_81169,input_schema81164_81170,input_checker81165_81171,output_checker81166_81172))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema81163_81169,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema81164_81170], null)));
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
var ufv___81193 = schema.utils.use_fn_validation;
var output_schema81178_81194 = schema.core.pair.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema81179_81195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema81184_81196 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker81180_81197 = schema.core.checker.call(null,input_schema81179_81195);
var output_checker81181_81198 = schema.core.checker.call(null,output_schema81178_81194);
var input_checker81185_81199 = schema.core.checker.call(null,input_schema81184_81196);
var output_checker81186_81200 = schema.core.checker.call(null,output_schema81178_81194);
/**
 * Inputs: ([schema opts] [schema opts defaults])
 *   Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
 * 
 *   Returns two maps; the first is all of the schema options, the
 *   second is the REST of the options.
 */
om_bootstrap.types.separate = ((function (ufv___81193,output_schema81178_81194,input_schema81179_81195,input_schema81184_81196,input_checker81180_81197,output_checker81181_81198,input_checker81185_81199,output_checker81186_81200){
return (function om_bootstrap$types$separate(var_args){
var args81190 = [];
var len__25826__auto___81201 = arguments.length;
var i__25827__auto___81202 = (0);
while(true){
if((i__25827__auto___81202 < len__25826__auto___81201)){
args81190.push((arguments[i__25827__auto___81202]));

var G__81203 = (i__25827__auto___81202 + (1));
i__25827__auto___81202 = G__81203;
continue;
} else {
}
break;
}

var G__81192 = args81190.length;
switch (G__81192) {
case 2:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81190.length)].join('')));

}
});})(ufv___81193,output_schema81178_81194,input_schema81179_81195,input_schema81184_81196,input_checker81180_81197,output_checker81181_81198,input_checker81185_81199,output_checker81186_81200))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___81193,output_schema81178_81194,input_schema81179_81195,input_schema81184_81196,input_checker81180_81197,output_checker81181_81198,input_checker81185_81199,output_checker81186_81200){
return (function (G__81182,G__81183){
var validate__38286__auto__ = ufv___81193.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___81205 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__81182,G__81183], null);
var temp__4657__auto___81206 = input_checker81180_81197.call(null,args__38287__auto___81205);
if(cljs.core.truth_(temp__4657__auto___81206)){
var error__38288__auto___81207 = temp__4657__auto___81206;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__38288__auto___81207)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema81179_81195,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___81205,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81207], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var schema__$1 = G__81182;
var opts = G__81183;
while(true){
return om_bootstrap.types.separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___81208 = output_checker81181_81198.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___81208)){
var error__38288__auto___81209 = temp__4657__auto___81208;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__38288__auto___81209)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema81178_81194,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81209], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___81193,output_schema81178_81194,input_schema81179_81195,input_schema81184_81196,input_checker81180_81197,output_checker81181_81198,input_checker81185_81199,output_checker81186_81200))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___81193,output_schema81178_81194,input_schema81179_81195,input_schema81184_81196,input_checker81180_81197,output_checker81181_81198,input_checker81185_81199,output_checker81186_81200){
return (function (G__81187,G__81188,G__81189){
var validate__38286__auto__ = ufv___81193.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___81210 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__81187,G__81188,G__81189], null);
var temp__4657__auto___81211 = input_checker81185_81199.call(null,args__38287__auto___81210);
if(cljs.core.truth_(temp__4657__auto___81211)){
var error__38288__auto___81212 = temp__4657__auto___81211;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__38288__auto___81212)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema81184_81196,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___81210,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81212], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var schema__$1 = G__81187;
var opts = G__81188;
var defaults = G__81189;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___81213 = output_checker81186_81200.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___81213)){
var error__38288__auto___81214 = temp__4657__auto___81213;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__38288__auto___81214)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema81178_81194,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81214], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___81193,output_schema81178_81194,input_schema81179_81195,input_schema81184_81196,input_checker81180_81197,output_checker81181_81198,input_checker81185_81199,output_checker81186_81200))
;

om_bootstrap.types.separate.cljs$lang$maxFixedArity = 3;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema81178_81194,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema81179_81195,input_schema81184_81196], null)));
var ufv___81232 = schema.utils.use_fn_validation;
var output_schema81215_81233 = cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema81216_81234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker81217_81235 = schema.core.checker.call(null,input_schema81216_81234);
var output_checker81218_81236 = schema.core.checker.call(null,output_schema81215_81233);
/**
 * Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
 *   Returns: {s/Str s/Bool}
 * 
 *   Returns input for class-set.
 */
om_bootstrap.types.bs_class_set = ((function (ufv___81232,output_schema81215_81233,input_schema81216_81234,input_checker81217_81235,output_checker81218_81236){
return (function om_bootstrap$types$bs_class_set(G__81219){
var validate__38286__auto__ = ufv___81232.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___81237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__81219], null);
var temp__4657__auto___81238 = input_checker81217_81235.call(null,args__38287__auto___81237);
if(cljs.core.truth_(temp__4657__auto___81238)){
var error__38288__auto___81239 = temp__4657__auto___81238;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__38288__auto___81239)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema81216_81234,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___81237,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81239], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var G__81227 = G__81219;
var map__81228 = G__81227;
var map__81228__$1 = ((((!((map__81228 == null)))?((((map__81228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81228):map__81228);
var bs_class = cljs.core.get.call(null,map__81228__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style = cljs.core.get.call(null,map__81228__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size = cljs.core.get.call(null,map__81228__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var G__81227__$1 = G__81227;
while(true){
var map__81230 = G__81227__$1;
var map__81230__$1 = ((((!((map__81230 == null)))?((((map__81230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81230):map__81230);
var bs_class__$1 = cljs.core.get.call(null,map__81230__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style__$1 = cljs.core.get.call(null,map__81230__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size__$1 = cljs.core.get.call(null,map__81230__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
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
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___81240 = output_checker81218_81236.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___81240)){
var error__38288__auto___81241 = temp__4657__auto___81240;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__38288__auto___81241)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema81215_81233,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81241], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___81232,output_schema81215_81233,input_schema81216_81234,input_checker81217_81235,output_checker81218_81236))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema81215_81233,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema81216_81234], null)));

//# sourceMappingURL=types.js.map?rel=1478402664525