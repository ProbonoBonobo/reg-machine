// Compiled by ClojureScript 1.7.122 {}
goog.provide('om_bootstrap.grid');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('schema.core');
om_bootstrap.grid.Grid = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fluid?","fluid?",-742121890)),schema.core.Bool], true, false));
om_bootstrap.grid.col_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"md-pull","md-pull",979081250),null,new cljs.core.Keyword(null,"lg","lg",-80787836),null,new cljs.core.Keyword(null,"lg-push","lg-push",606284103),null,new cljs.core.Keyword(null,"sm","sm",-1402575065),null,new cljs.core.Keyword(null,"lg-pull","lg-pull",70082794),null,new cljs.core.Keyword(null,"xs-push","xs-push",-1878478835),null,new cljs.core.Keyword(null,"xs","xs",649443341),null,new cljs.core.Keyword(null,"sm-offset","sm-offset",229619439),null,new cljs.core.Keyword(null,"sm-pull","sm-pull",-368259600),null,new cljs.core.Keyword(null,"lg-offset","lg-offset",-429200045),null,new cljs.core.Keyword(null,"md-push","md-push",288470810),null,new cljs.core.Keyword(null,"sm-push","sm-push",1835708573),null,new cljs.core.Keyword(null,"md-offset","md-offset",1274386877),null,new cljs.core.Keyword(null,"xs-pull","xs-pull",-132686786),null,new cljs.core.Keyword(null,"md","md",707286655),null,new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),null], null), null);
om_bootstrap.grid.Col = om_bootstrap.types.bootstrap.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,schema.core.optional_key,om_bootstrap.grid.col_keys),cljs.core.repeat.call(null,schema.core.Int)));
var ufv___28215 = schema.utils.use_fn_validation;
var output_schema28206_28216 = om_bootstrap.types.Component;
var input_schema28207_28217 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null))),schema.core.Any], null);
var input_checker28208_28218 = schema.core.checker.call(null,input_schema28207_28217);
var output_checker28209_28219 = schema.core.checker.call(null,output_schema28206_28216);
/**
 * Inputs: [opts :- Grid & children]
 *   Returns: t/Component
 * 
 *   Generates a wrapper for a bootstrap grid.
 */
om_bootstrap.grid.grid = ((function (ufv___28215,output_schema28206_28216,input_schema28207_28217,input_checker28208_28218,output_checker28209_28219){
return (function om_bootstrap$grid$grid(var_args){
var args__5626__auto__ = [];
var len__5619__auto___28220 = arguments.length;
var i__5620__auto___28221 = (0);
while(true){
if((i__5620__auto___28221 < len__5619__auto___28220)){
args__5626__auto__.push((arguments[i__5620__auto___28221]));

var G__28222 = (i__5620__auto___28221 + (1));
i__5620__auto___28221 = G__28222;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___28215,output_schema28206_28216,input_schema28207_28217,input_checker28208_28218,output_checker28209_28219))
;

om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28215,output_schema28206_28216,input_schema28207_28217,input_checker28208_28218,output_checker28209_28219){
return (function (G__28210,rest28211){
var validate__10213__auto__ = ufv___28215.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___28223 = cljs.core.list_STAR_.call(null,G__28210,rest28211);
var temp__4425__auto___28224 = input_checker28208_28218.call(null,args__10214__auto___28223);
if(cljs.core.truth_(temp__4425__auto___28224)){
var error__10215__auto___28225 = temp__4425__auto___28224;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__10215__auto___28225)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28207_28217,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___28223,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28225], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__28210;
var children = rest28211;
while(true){
var vec__28214 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__28214,(0),null);
var props = cljs.core.nth.call(null,vec__28214,(1),null);
var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___28226 = output_checker28209_28219.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___28226)){
var error__10215__auto___28227 = temp__4425__auto___28226;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__10215__auto___28227)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28206_28216,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28227], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___28215,output_schema28206_28216,input_schema28207_28217,input_checker28208_28218,output_checker28209_28219))
;

om_bootstrap.grid.grid.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.grid.cljs$lang$applyTo = ((function (ufv___28215,output_schema28206_28216,input_schema28207_28217,input_checker28208_28218,output_checker28209_28219){
return (function (seq28212){
var G__28213 = cljs.core.first.call(null,seq28212);
var seq28212__$1 = cljs.core.next.call(null,seq28212);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic(G__28213,seq28212__$1);
});})(ufv___28215,output_schema28206_28216,input_schema28207_28217,input_checker28208_28218,output_checker28209_28219))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.grid),schema.core.make_fn_schema.call(null,output_schema28206_28216,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28207_28217], null)));
var ufv___28236 = schema.utils.use_fn_validation;
var output_schema28228_28237 = om_bootstrap.types.Component;
var input_schema28229_28238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker28230_28239 = schema.core.checker.call(null,input_schema28229_28238);
var output_checker28231_28240 = schema.core.checker.call(null,output_schema28228_28237);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap row element.
 */
om_bootstrap.grid.row = ((function (ufv___28236,output_schema28228_28237,input_schema28229_28238,input_checker28230_28239,output_checker28231_28240){
return (function om_bootstrap$grid$row(var_args){
var args__5626__auto__ = [];
var len__5619__auto___28241 = arguments.length;
var i__5620__auto___28242 = (0);
while(true){
if((i__5620__auto___28242 < len__5619__auto___28241)){
args__5626__auto__.push((arguments[i__5620__auto___28242]));

var G__28243 = (i__5620__auto___28242 + (1));
i__5620__auto___28242 = G__28243;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___28236,output_schema28228_28237,input_schema28229_28238,input_checker28230_28239,output_checker28231_28240))
;

om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28236,output_schema28228_28237,input_schema28229_28238,input_checker28230_28239,output_checker28231_28240){
return (function (G__28232,rest28233){
var validate__10213__auto__ = ufv___28236.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___28244 = cljs.core.list_STAR_.call(null,G__28232,rest28233);
var temp__4425__auto___28245 = input_checker28230_28239.call(null,args__10214__auto___28244);
if(cljs.core.truth_(temp__4425__auto___28245)){
var error__10215__auto___28246 = temp__4425__auto___28245;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__10215__auto___28246)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28229_28238,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___28244,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28246], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__28232;
var children = rest28233;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___28247 = output_checker28231_28240.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___28247)){
var error__10215__auto___28248 = temp__4425__auto___28247;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__10215__auto___28248)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28228_28237,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28248], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___28236,output_schema28228_28237,input_schema28229_28238,input_checker28230_28239,output_checker28231_28240))
;

om_bootstrap.grid.row.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.row.cljs$lang$applyTo = ((function (ufv___28236,output_schema28228_28237,input_schema28229_28238,input_checker28230_28239,output_checker28231_28240){
return (function (seq28234){
var G__28235 = cljs.core.first.call(null,seq28234);
var seq28234__$1 = cljs.core.next.call(null,seq28234);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(G__28235,seq28234__$1);
});})(ufv___28236,output_schema28228_28237,input_schema28229_28238,input_checker28230_28239,output_checker28231_28240))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.row),schema.core.make_fn_schema.call(null,output_schema28228_28237,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28229_28238], null)));
var ufv___28260 = schema.utils.use_fn_validation;
var output_schema28249_28261 = om_bootstrap.types.Component;
var input_schema28250_28262 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Col,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Col","Col",1039814105,null)], null))),schema.core.Any], null);
var input_checker28251_28263 = schema.core.checker.call(null,input_schema28250_28262);
var output_checker28252_28264 = schema.core.checker.call(null,output_schema28249_28261);
/**
 * Inputs: [opts :- Col & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap column element.
 */
om_bootstrap.grid.col = ((function (ufv___28260,output_schema28249_28261,input_schema28250_28262,input_checker28251_28263,output_checker28252_28264){
return (function om_bootstrap$grid$col(var_args){
var args__5626__auto__ = [];
var len__5619__auto___28265 = arguments.length;
var i__5620__auto___28266 = (0);
while(true){
if((i__5620__auto___28266 < len__5619__auto___28265)){
args__5626__auto__.push((arguments[i__5620__auto___28266]));

var G__28267 = (i__5620__auto___28266 + (1));
i__5620__auto___28266 = G__28267;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___28260,output_schema28249_28261,input_schema28250_28262,input_checker28251_28263,output_checker28252_28264))
;

om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28260,output_schema28249_28261,input_schema28250_28262,input_checker28251_28263,output_checker28252_28264){
return (function (G__28253,rest28254){
var validate__10213__auto__ = ufv___28260.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___28268 = cljs.core.list_STAR_.call(null,G__28253,rest28254);
var temp__4425__auto___28269 = input_checker28251_28263.call(null,args__10214__auto___28268);
if(cljs.core.truth_(temp__4425__auto___28269)){
var error__10215__auto___28270 = temp__4425__auto___28269;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__10215__auto___28270)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28250_28262,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___28268,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28270], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__28253;
var children = rest28254;
while(true){
var vec__28257 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__28257,(0),null);
var props = cljs.core.nth.call(null,vec__28257,(1),null);
var class$ = om_tools.dom.class_set.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (vec__28257,bs,props,validate__10213__auto__,ufv___28260,output_schema28249_28261,input_schema28250_28262,input_checker28251_28263,output_checker28252_28264){
return (function (p__28258){
var vec__28259 = p__28258;
var k = cljs.core.nth.call(null,vec__28259,(0),null);
var v = cljs.core.nth.call(null,vec__28259,(1),null);
return [cljs.core.str("col-"),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-"),cljs.core.str(v)].join('');
});})(vec__28257,bs,props,validate__10213__auto__,ufv___28260,output_schema28249_28261,input_schema28250_28262,input_checker28251_28263,output_checker28252_28264))
,cljs.core.select_keys.call(null,bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.call(null,true)));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___28271 = output_checker28252_28264.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___28271)){
var error__10215__auto___28272 = temp__4425__auto___28271;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__10215__auto___28272)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28249_28261,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28272], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___28260,output_schema28249_28261,input_schema28250_28262,input_checker28251_28263,output_checker28252_28264))
;

om_bootstrap.grid.col.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.col.cljs$lang$applyTo = ((function (ufv___28260,output_schema28249_28261,input_schema28250_28262,input_checker28251_28263,output_checker28252_28264){
return (function (seq28255){
var G__28256 = cljs.core.first.call(null,seq28255);
var seq28255__$1 = cljs.core.next.call(null,seq28255);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(G__28256,seq28255__$1);
});})(ufv___28260,output_schema28249_28261,input_schema28250_28262,input_checker28251_28263,output_checker28252_28264))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.col),schema.core.make_fn_schema.call(null,output_schema28249_28261,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28250_28262], null)));
