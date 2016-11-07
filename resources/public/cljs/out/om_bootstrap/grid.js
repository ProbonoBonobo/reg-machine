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
var ufv___47385 = schema.utils.use_fn_validation;
var output_schema47374_47386 = om_bootstrap.types.Component;
var input_schema47375_47387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null))),schema.core.Any], null);
var input_checker47376_47388 = schema.core.checker.call(null,input_schema47375_47387);
var output_checker47377_47389 = schema.core.checker.call(null,output_schema47374_47386);
/**
 * Inputs: [opts :- Grid & children]
 *   Returns: t/Component
 * 
 *   Generates a wrapper for a bootstrap grid.
 */
om_bootstrap.grid.grid = ((function (ufv___47385,output_schema47374_47386,input_schema47375_47387,input_checker47376_47388,output_checker47377_47389){
return (function om_bootstrap$grid$grid(var_args){
var args__25833__auto__ = [];
var len__25826__auto___47390 = arguments.length;
var i__25827__auto___47391 = (0);
while(true){
if((i__25827__auto___47391 < len__25826__auto___47390)){
args__25833__auto__.push((arguments[i__25827__auto___47391]));

var G__47392 = (i__25827__auto___47391 + (1));
i__25827__auto___47391 = G__47392;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___47385,output_schema47374_47386,input_schema47375_47387,input_checker47376_47388,output_checker47377_47389))
;

om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___47385,output_schema47374_47386,input_schema47375_47387,input_checker47376_47388,output_checker47377_47389){
return (function (G__47378,rest47379){
var validate__30032__auto__ = ufv___47385.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___47393 = cljs.core.list_STAR_.call(null,G__47378,rest47379);
var temp__4657__auto___47394 = input_checker47376_47388.call(null,args__30033__auto___47393);
if(cljs.core.truth_(temp__4657__auto___47394)){
var error__30034__auto___47395 = temp__4657__auto___47394;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__30034__auto___47395)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47375_47387,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___47393,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47395], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__47378;
var children = rest47379;
while(true){
var vec__47382 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__47382,(0),null);
var props = cljs.core.nth.call(null,vec__47382,(1),null);
var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___47396 = output_checker47377_47389.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___47396)){
var error__30034__auto___47397 = temp__4657__auto___47396;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__30034__auto___47397)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47374_47386,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47397], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___47385,output_schema47374_47386,input_schema47375_47387,input_checker47376_47388,output_checker47377_47389))
;

om_bootstrap.grid.grid.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.grid.cljs$lang$applyTo = ((function (ufv___47385,output_schema47374_47386,input_schema47375_47387,input_checker47376_47388,output_checker47377_47389){
return (function (seq47380){
var G__47381 = cljs.core.first.call(null,seq47380);
var seq47380__$1 = cljs.core.next.call(null,seq47380);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic(G__47381,seq47380__$1);
});})(ufv___47385,output_schema47374_47386,input_schema47375_47387,input_checker47376_47388,output_checker47377_47389))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.grid),schema.core.make_fn_schema.call(null,output_schema47374_47386,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47375_47387], null)));
var ufv___47406 = schema.utils.use_fn_validation;
var output_schema47398_47407 = om_bootstrap.types.Component;
var input_schema47399_47408 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker47400_47409 = schema.core.checker.call(null,input_schema47399_47408);
var output_checker47401_47410 = schema.core.checker.call(null,output_schema47398_47407);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap row element.
 */
om_bootstrap.grid.row = ((function (ufv___47406,output_schema47398_47407,input_schema47399_47408,input_checker47400_47409,output_checker47401_47410){
return (function om_bootstrap$grid$row(var_args){
var args__25833__auto__ = [];
var len__25826__auto___47411 = arguments.length;
var i__25827__auto___47412 = (0);
while(true){
if((i__25827__auto___47412 < len__25826__auto___47411)){
args__25833__auto__.push((arguments[i__25827__auto___47412]));

var G__47413 = (i__25827__auto___47412 + (1));
i__25827__auto___47412 = G__47413;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___47406,output_schema47398_47407,input_schema47399_47408,input_checker47400_47409,output_checker47401_47410))
;

om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___47406,output_schema47398_47407,input_schema47399_47408,input_checker47400_47409,output_checker47401_47410){
return (function (G__47402,rest47403){
var validate__30032__auto__ = ufv___47406.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___47414 = cljs.core.list_STAR_.call(null,G__47402,rest47403);
var temp__4657__auto___47415 = input_checker47400_47409.call(null,args__30033__auto___47414);
if(cljs.core.truth_(temp__4657__auto___47415)){
var error__30034__auto___47416 = temp__4657__auto___47415;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__30034__auto___47416)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47399_47408,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___47414,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47416], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__47402;
var children = rest47403;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___47417 = output_checker47401_47410.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___47417)){
var error__30034__auto___47418 = temp__4657__auto___47417;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__30034__auto___47418)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47398_47407,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47418], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___47406,output_schema47398_47407,input_schema47399_47408,input_checker47400_47409,output_checker47401_47410))
;

om_bootstrap.grid.row.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.row.cljs$lang$applyTo = ((function (ufv___47406,output_schema47398_47407,input_schema47399_47408,input_checker47400_47409,output_checker47401_47410){
return (function (seq47404){
var G__47405 = cljs.core.first.call(null,seq47404);
var seq47404__$1 = cljs.core.next.call(null,seq47404);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(G__47405,seq47404__$1);
});})(ufv___47406,output_schema47398_47407,input_schema47399_47408,input_checker47400_47409,output_checker47401_47410))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.row),schema.core.make_fn_schema.call(null,output_schema47398_47407,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47399_47408], null)));
var ufv___47434 = schema.utils.use_fn_validation;
var output_schema47419_47435 = om_bootstrap.types.Component;
var input_schema47420_47436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Col,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Col","Col",1039814105,null)], null))),schema.core.Any], null);
var input_checker47421_47437 = schema.core.checker.call(null,input_schema47420_47436);
var output_checker47422_47438 = schema.core.checker.call(null,output_schema47419_47435);
/**
 * Inputs: [opts :- Col & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap column element.
 */
om_bootstrap.grid.col = ((function (ufv___47434,output_schema47419_47435,input_schema47420_47436,input_checker47421_47437,output_checker47422_47438){
return (function om_bootstrap$grid$col(var_args){
var args__25833__auto__ = [];
var len__25826__auto___47439 = arguments.length;
var i__25827__auto___47440 = (0);
while(true){
if((i__25827__auto___47440 < len__25826__auto___47439)){
args__25833__auto__.push((arguments[i__25827__auto___47440]));

var G__47441 = (i__25827__auto___47440 + (1));
i__25827__auto___47440 = G__47441;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___47434,output_schema47419_47435,input_schema47420_47436,input_checker47421_47437,output_checker47422_47438))
;

om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___47434,output_schema47419_47435,input_schema47420_47436,input_checker47421_47437,output_checker47422_47438){
return (function (G__47423,rest47424){
var validate__30032__auto__ = ufv___47434.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___47442 = cljs.core.list_STAR_.call(null,G__47423,rest47424);
var temp__4657__auto___47443 = input_checker47421_47437.call(null,args__30033__auto___47442);
if(cljs.core.truth_(temp__4657__auto___47443)){
var error__30034__auto___47444 = temp__4657__auto___47443;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__30034__auto___47444)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47420_47436,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___47442,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47444], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__47423;
var children = rest47424;
while(true){
var vec__47427 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__47427,(0),null);
var props = cljs.core.nth.call(null,vec__47427,(1),null);
var class$ = om_tools.dom.class_set.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (vec__47427,bs,props,validate__30032__auto__,ufv___47434,output_schema47419_47435,input_schema47420_47436,input_checker47421_47437,output_checker47422_47438){
return (function (p__47430){
var vec__47431 = p__47430;
var k = cljs.core.nth.call(null,vec__47431,(0),null);
var v = cljs.core.nth.call(null,vec__47431,(1),null);
return [cljs.core.str("col-"),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-"),cljs.core.str(v)].join('');
});})(vec__47427,bs,props,validate__30032__auto__,ufv___47434,output_schema47419_47435,input_schema47420_47436,input_checker47421_47437,output_checker47422_47438))
,cljs.core.select_keys.call(null,bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.call(null,true)));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___47445 = output_checker47422_47438.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___47445)){
var error__30034__auto___47446 = temp__4657__auto___47445;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__30034__auto___47446)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47419_47435,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___47446], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___47434,output_schema47419_47435,input_schema47420_47436,input_checker47421_47437,output_checker47422_47438))
;

om_bootstrap.grid.col.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.col.cljs$lang$applyTo = ((function (ufv___47434,output_schema47419_47435,input_schema47420_47436,input_checker47421_47437,output_checker47422_47438){
return (function (seq47425){
var G__47426 = cljs.core.first.call(null,seq47425);
var seq47425__$1 = cljs.core.next.call(null,seq47425);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(G__47426,seq47425__$1);
});})(ufv___47434,output_schema47419_47435,input_schema47420_47436,input_checker47421_47437,output_checker47422_47438))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.col),schema.core.make_fn_schema.call(null,output_schema47419_47435,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47420_47436], null)));

//# sourceMappingURL=grid.js.map?rel=1478445848209