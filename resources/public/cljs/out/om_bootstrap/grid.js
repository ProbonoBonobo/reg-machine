// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.grid');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('schema.core');
om_bootstrap.grid.Grid = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fluid?","fluid?",-742121890)),schema.core.Bool], true, false));
om_bootstrap.grid.col_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"md-pull","md-pull",979081250),null,new cljs.core.Keyword(null,"lg","lg",-80787836),null,new cljs.core.Keyword(null,"lg-push","lg-push",606284103),null,new cljs.core.Keyword(null,"sm","sm",-1402575065),null,new cljs.core.Keyword(null,"lg-pull","lg-pull",70082794),null,new cljs.core.Keyword(null,"xs-push","xs-push",-1878478835),null,new cljs.core.Keyword(null,"xs","xs",649443341),null,new cljs.core.Keyword(null,"sm-offset","sm-offset",229619439),null,new cljs.core.Keyword(null,"sm-pull","sm-pull",-368259600),null,new cljs.core.Keyword(null,"lg-offset","lg-offset",-429200045),null,new cljs.core.Keyword(null,"md-push","md-push",288470810),null,new cljs.core.Keyword(null,"sm-push","sm-push",1835708573),null,new cljs.core.Keyword(null,"md-offset","md-offset",1274386877),null,new cljs.core.Keyword(null,"xs-pull","xs-pull",-132686786),null,new cljs.core.Keyword(null,"md","md",707286655),null,new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),null], null), null);
om_bootstrap.grid.Col = om_bootstrap.types.bootstrap.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,schema.core.optional_key,om_bootstrap.grid.col_keys),cljs.core.repeat.call(null,schema.core.Int)));
var ufv___55591 = schema.utils.use_fn_validation;
var output_schema55580_55592 = om_bootstrap.types.Component;
var input_schema55581_55593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null))),schema.core.Any], null);
var input_checker55582_55594 = schema.core.checker.call(null,input_schema55581_55593);
var output_checker55583_55595 = schema.core.checker.call(null,output_schema55580_55592);
/**
 * Inputs: [opts :- Grid & children]
 *   Returns: t/Component
 * 
 *   Generates a wrapper for a bootstrap grid.
 */
om_bootstrap.grid.grid = ((function (ufv___55591,output_schema55580_55592,input_schema55581_55593,input_checker55582_55594,output_checker55583_55595){
return (function om_bootstrap$grid$grid(var_args){
var args__25833__auto__ = [];
var len__25826__auto___55596 = arguments.length;
var i__25827__auto___55597 = (0);
while(true){
if((i__25827__auto___55597 < len__25826__auto___55596)){
args__25833__auto__.push((arguments[i__25827__auto___55597]));

var G__55598 = (i__25827__auto___55597 + (1));
i__25827__auto___55597 = G__55598;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___55591,output_schema55580_55592,input_schema55581_55593,input_checker55582_55594,output_checker55583_55595))
;

om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___55591,output_schema55580_55592,input_schema55581_55593,input_checker55582_55594,output_checker55583_55595){
return (function (G__55584,rest55585){
var validate__37921__auto__ = ufv___55591.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___55599 = cljs.core.list_STAR_.call(null,G__55584,rest55585);
var temp__4657__auto___55600 = input_checker55582_55594.call(null,args__37922__auto___55599);
if(cljs.core.truth_(temp__4657__auto___55600)){
var error__37923__auto___55601 = temp__4657__auto___55600;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__37923__auto___55601)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55581_55593,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___55599,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___55601], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__55584;
var children = rest55585;
while(true){
var vec__55588 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__55588,(0),null);
var props = cljs.core.nth.call(null,vec__55588,(1),null);
var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___55602 = output_checker55583_55595.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___55602)){
var error__37923__auto___55603 = temp__4657__auto___55602;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__37923__auto___55603)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55580_55592,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___55603], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___55591,output_schema55580_55592,input_schema55581_55593,input_checker55582_55594,output_checker55583_55595))
;

om_bootstrap.grid.grid.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.grid.cljs$lang$applyTo = ((function (ufv___55591,output_schema55580_55592,input_schema55581_55593,input_checker55582_55594,output_checker55583_55595){
return (function (seq55586){
var G__55587 = cljs.core.first.call(null,seq55586);
var seq55586__$1 = cljs.core.next.call(null,seq55586);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic(G__55587,seq55586__$1);
});})(ufv___55591,output_schema55580_55592,input_schema55581_55593,input_checker55582_55594,output_checker55583_55595))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.grid),schema.core.make_fn_schema.call(null,output_schema55580_55592,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55581_55593], null)));
var ufv___55612 = schema.utils.use_fn_validation;
var output_schema55604_55613 = om_bootstrap.types.Component;
var input_schema55605_55614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker55606_55615 = schema.core.checker.call(null,input_schema55605_55614);
var output_checker55607_55616 = schema.core.checker.call(null,output_schema55604_55613);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap row element.
 */
om_bootstrap.grid.row = ((function (ufv___55612,output_schema55604_55613,input_schema55605_55614,input_checker55606_55615,output_checker55607_55616){
return (function om_bootstrap$grid$row(var_args){
var args__25833__auto__ = [];
var len__25826__auto___55617 = arguments.length;
var i__25827__auto___55618 = (0);
while(true){
if((i__25827__auto___55618 < len__25826__auto___55617)){
args__25833__auto__.push((arguments[i__25827__auto___55618]));

var G__55619 = (i__25827__auto___55618 + (1));
i__25827__auto___55618 = G__55619;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___55612,output_schema55604_55613,input_schema55605_55614,input_checker55606_55615,output_checker55607_55616))
;

om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___55612,output_schema55604_55613,input_schema55605_55614,input_checker55606_55615,output_checker55607_55616){
return (function (G__55608,rest55609){
var validate__37921__auto__ = ufv___55612.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___55620 = cljs.core.list_STAR_.call(null,G__55608,rest55609);
var temp__4657__auto___55621 = input_checker55606_55615.call(null,args__37922__auto___55620);
if(cljs.core.truth_(temp__4657__auto___55621)){
var error__37923__auto___55622 = temp__4657__auto___55621;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__37923__auto___55622)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55605_55614,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___55620,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___55622], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__55608;
var children = rest55609;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___55623 = output_checker55607_55616.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___55623)){
var error__37923__auto___55624 = temp__4657__auto___55623;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__37923__auto___55624)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55604_55613,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___55624], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___55612,output_schema55604_55613,input_schema55605_55614,input_checker55606_55615,output_checker55607_55616))
;

om_bootstrap.grid.row.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.row.cljs$lang$applyTo = ((function (ufv___55612,output_schema55604_55613,input_schema55605_55614,input_checker55606_55615,output_checker55607_55616){
return (function (seq55610){
var G__55611 = cljs.core.first.call(null,seq55610);
var seq55610__$1 = cljs.core.next.call(null,seq55610);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(G__55611,seq55610__$1);
});})(ufv___55612,output_schema55604_55613,input_schema55605_55614,input_checker55606_55615,output_checker55607_55616))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.row),schema.core.make_fn_schema.call(null,output_schema55604_55613,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55605_55614], null)));
var ufv___55640 = schema.utils.use_fn_validation;
var output_schema55625_55641 = om_bootstrap.types.Component;
var input_schema55626_55642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Col,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Col","Col",1039814105,null)], null))),schema.core.Any], null);
var input_checker55627_55643 = schema.core.checker.call(null,input_schema55626_55642);
var output_checker55628_55644 = schema.core.checker.call(null,output_schema55625_55641);
/**
 * Inputs: [opts :- Col & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap column element.
 */
om_bootstrap.grid.col = ((function (ufv___55640,output_schema55625_55641,input_schema55626_55642,input_checker55627_55643,output_checker55628_55644){
return (function om_bootstrap$grid$col(var_args){
var args__25833__auto__ = [];
var len__25826__auto___55645 = arguments.length;
var i__25827__auto___55646 = (0);
while(true){
if((i__25827__auto___55646 < len__25826__auto___55645)){
args__25833__auto__.push((arguments[i__25827__auto___55646]));

var G__55647 = (i__25827__auto___55646 + (1));
i__25827__auto___55646 = G__55647;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___55640,output_schema55625_55641,input_schema55626_55642,input_checker55627_55643,output_checker55628_55644))
;

om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___55640,output_schema55625_55641,input_schema55626_55642,input_checker55627_55643,output_checker55628_55644){
return (function (G__55629,rest55630){
var validate__37921__auto__ = ufv___55640.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___55648 = cljs.core.list_STAR_.call(null,G__55629,rest55630);
var temp__4657__auto___55649 = input_checker55627_55643.call(null,args__37922__auto___55648);
if(cljs.core.truth_(temp__4657__auto___55649)){
var error__37923__auto___55650 = temp__4657__auto___55649;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__37923__auto___55650)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55626_55642,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___55648,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___55650], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__55629;
var children = rest55630;
while(true){
var vec__55633 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__55633,(0),null);
var props = cljs.core.nth.call(null,vec__55633,(1),null);
var class$ = om_tools.dom.class_set.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (vec__55633,bs,props,validate__37921__auto__,ufv___55640,output_schema55625_55641,input_schema55626_55642,input_checker55627_55643,output_checker55628_55644){
return (function (p__55636){
var vec__55637 = p__55636;
var k = cljs.core.nth.call(null,vec__55637,(0),null);
var v = cljs.core.nth.call(null,vec__55637,(1),null);
return [cljs.core.str("col-"),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-"),cljs.core.str(v)].join('');
});})(vec__55633,bs,props,validate__37921__auto__,ufv___55640,output_schema55625_55641,input_schema55626_55642,input_checker55627_55643,output_checker55628_55644))
,cljs.core.select_keys.call(null,bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.call(null,true)));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___55651 = output_checker55628_55644.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___55651)){
var error__37923__auto___55652 = temp__4657__auto___55651;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__37923__auto___55652)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55625_55641,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___55652], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___55640,output_schema55625_55641,input_schema55626_55642,input_checker55627_55643,output_checker55628_55644))
;

om_bootstrap.grid.col.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.col.cljs$lang$applyTo = ((function (ufv___55640,output_schema55625_55641,input_schema55626_55642,input_checker55627_55643,output_checker55628_55644){
return (function (seq55631){
var G__55632 = cljs.core.first.call(null,seq55631);
var seq55631__$1 = cljs.core.next.call(null,seq55631);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(G__55632,seq55631__$1);
});})(ufv___55640,output_schema55625_55641,input_schema55626_55642,input_checker55627_55643,output_checker55628_55644))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.col),schema.core.make_fn_schema.call(null,output_schema55625_55641,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55626_55642], null)));

//# sourceMappingURL=grid.js.map?rel=1477762305006