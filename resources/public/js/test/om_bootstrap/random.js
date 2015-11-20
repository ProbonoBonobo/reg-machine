// Compiled by ClojureScript 1.7.122 {}
goog.provide('om_bootstrap.random');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
var ufv___27977 = schema.utils.use_fn_validation;
var output_schema27969_27978 = om_bootstrap.types.Component;
var input_schema27970_27979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker27971_27980 = schema.core.checker.call(null,input_schema27970_27979);
var output_checker27972_27981 = schema.core.checker.call(null,output_schema27969_27978);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   A lightweight, flexible component that can optionally extend the
 * entire viewport to showcase key content on your site.
 */
om_bootstrap.random.jumbotron = ((function (ufv___27977,output_schema27969_27978,input_schema27970_27979,input_checker27971_27980,output_checker27972_27981){
return (function om_bootstrap$random$jumbotron(var_args){
var args__5626__auto__ = [];
var len__5619__auto___27982 = arguments.length;
var i__5620__auto___27983 = (0);
while(true){
if((i__5620__auto___27983 < len__5619__auto___27982)){
args__5626__auto__.push((arguments[i__5620__auto___27983]));

var G__27984 = (i__5620__auto___27983 + (1));
i__5620__auto___27983 = G__27984;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___27977,output_schema27969_27978,input_schema27970_27979,input_checker27971_27980,output_checker27972_27981))
;

om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___27977,output_schema27969_27978,input_schema27970_27979,input_checker27971_27980,output_checker27972_27981){
return (function (G__27973,rest27974){
var validate__10213__auto__ = ufv___27977.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___27985 = cljs.core.list_STAR_.call(null,G__27973,rest27974);
var temp__4425__auto___27986 = input_checker27971_27980.call(null,args__10214__auto___27985);
if(cljs.core.truth_(temp__4425__auto___27986)){
var error__10215__auto___27987 = temp__4425__auto___27986;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__10215__auto___27987)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27970_27979,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___27985,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___27987], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__27973;
var children = rest27974;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___27988 = output_checker27972_27981.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___27988)){
var error__10215__auto___27989 = temp__4425__auto___27988;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__10215__auto___27989)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27969_27978,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___27989], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___27977,output_schema27969_27978,input_schema27970_27979,input_checker27971_27980,output_checker27972_27981))
;

om_bootstrap.random.jumbotron.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.jumbotron.cljs$lang$applyTo = ((function (ufv___27977,output_schema27969_27978,input_schema27970_27979,input_checker27971_27980,output_checker27972_27981){
return (function (seq27975){
var G__27976 = cljs.core.first.call(null,seq27975);
var seq27975__$1 = cljs.core.next.call(null,seq27975);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic(G__27976,seq27975__$1);
});})(ufv___27977,output_schema27969_27978,input_schema27970_27979,input_checker27971_27980,output_checker27972_27981))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.jumbotron),schema.core.make_fn_schema.call(null,output_schema27969_27978,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27970_27979], null)));
var ufv___27999 = schema.utils.use_fn_validation;
var output_schema27990_28000 = om_bootstrap.types.Component;
var input_schema27991_28001 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker27992_28002 = schema.core.checker.call(null,input_schema27991_28001);
var output_checker27993_28003 = schema.core.checker.call(null,output_schema27990_28000);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Create a (label {} "label!") to show highlight information.
 */
om_bootstrap.random.label = ((function (ufv___27999,output_schema27990_28000,input_schema27991_28001,input_checker27992_28002,output_checker27993_28003){
return (function om_bootstrap$random$label(var_args){
var args__5626__auto__ = [];
var len__5619__auto___28004 = arguments.length;
var i__5620__auto___28005 = (0);
while(true){
if((i__5620__auto___28005 < len__5619__auto___28004)){
args__5626__auto__.push((arguments[i__5620__auto___28005]));

var G__28006 = (i__5620__auto___28005 + (1));
i__5620__auto___28005 = G__28006;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___27999,output_schema27990_28000,input_schema27991_28001,input_checker27992_28002,output_checker27993_28003))
;

om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___27999,output_schema27990_28000,input_schema27991_28001,input_checker27992_28002,output_checker27993_28003){
return (function (G__27994,rest27995){
var validate__10213__auto__ = ufv___27999.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___28007 = cljs.core.list_STAR_.call(null,G__27994,rest27995);
var temp__4425__auto___28008 = input_checker27992_28002.call(null,args__10214__auto___28007);
if(cljs.core.truth_(temp__4425__auto___28008)){
var error__10215__auto___28009 = temp__4425__auto___28008;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__10215__auto___28009)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27991_28001,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___28007,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28009], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__27994;
var children = rest27995;
while(true){
var vec__27998 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__27998,(0),null);
var props = cljs.core.nth.call(null,vec__27998,(1),null);
var classes = om_bootstrap.types.bs_class_set.call(null,bs);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___28010 = output_checker27993_28003.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___28010)){
var error__10215__auto___28011 = temp__4425__auto___28010;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__10215__auto___28011)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27990_28000,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28011], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___27999,output_schema27990_28000,input_schema27991_28001,input_checker27992_28002,output_checker27993_28003))
;

om_bootstrap.random.label.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.label.cljs$lang$applyTo = ((function (ufv___27999,output_schema27990_28000,input_schema27991_28001,input_checker27992_28002,output_checker27993_28003){
return (function (seq27996){
var G__27997 = cljs.core.first.call(null,seq27996);
var seq27996__$1 = cljs.core.next.call(null,seq27996);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(G__27997,seq27996__$1);
});})(ufv___27999,output_schema27990_28000,input_schema27991_28001,input_checker27992_28002,output_checker27993_28003))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.label),schema.core.make_fn_schema.call(null,output_schema27990_28000,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27991_28001], null)));
var ufv___28021 = schema.utils.use_fn_validation;
var output_schema28012_28022 = om_bootstrap.types.Component;
var input_schema28013_28023 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker28014_28024 = schema.core.checker.call(null,input_schema28013_28023);
var output_checker28015_28025 = schema.core.checker.call(null,output_schema28012_28022);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Use the well as a simple effect on an element to give it an inset effect.
 */
om_bootstrap.random.well = ((function (ufv___28021,output_schema28012_28022,input_schema28013_28023,input_checker28014_28024,output_checker28015_28025){
return (function om_bootstrap$random$well(var_args){
var args__5626__auto__ = [];
var len__5619__auto___28026 = arguments.length;
var i__5620__auto___28027 = (0);
while(true){
if((i__5620__auto___28027 < len__5619__auto___28026)){
args__5626__auto__.push((arguments[i__5620__auto___28027]));

var G__28028 = (i__5620__auto___28027 + (1));
i__5620__auto___28027 = G__28028;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___28021,output_schema28012_28022,input_schema28013_28023,input_checker28014_28024,output_checker28015_28025))
;

om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28021,output_schema28012_28022,input_schema28013_28023,input_checker28014_28024,output_checker28015_28025){
return (function (G__28016,rest28017){
var validate__10213__auto__ = ufv___28021.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___28029 = cljs.core.list_STAR_.call(null,G__28016,rest28017);
var temp__4425__auto___28030 = input_checker28014_28024.call(null,args__10214__auto___28029);
if(cljs.core.truth_(temp__4425__auto___28030)){
var error__10215__auto___28031 = temp__4425__auto___28030;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__10215__auto___28031)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28013_28023,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___28029,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28031], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__28016;
var children = rest28017;
while(true){
var vec__28020 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));
var bs = cljs.core.nth.call(null,vec__28020,(0),null);
var props = cljs.core.nth.call(null,vec__28020,(1),null);
var class$ = om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___28032 = output_checker28015_28025.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___28032)){
var error__10215__auto___28033 = temp__4425__auto___28032;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__10215__auto___28033)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28012_28022,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28033], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___28021,output_schema28012_28022,input_schema28013_28023,input_checker28014_28024,output_checker28015_28025))
;

om_bootstrap.random.well.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.well.cljs$lang$applyTo = ((function (ufv___28021,output_schema28012_28022,input_schema28013_28023,input_checker28014_28024,output_checker28015_28025){
return (function (seq28018){
var G__28019 = cljs.core.first.call(null,seq28018);
var seq28018__$1 = cljs.core.next.call(null,seq28018);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic(G__28019,seq28018__$1);
});})(ufv___28021,output_schema28012_28022,input_schema28013_28023,input_checker28014_28024,output_checker28015_28025))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.well),schema.core.make_fn_schema.call(null,output_schema28012_28022,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28013_28023], null)));
var ufv___28042 = schema.utils.use_fn_validation;
var output_schema28034_28043 = om_bootstrap.types.Component;
var input_schema28035_28044 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker28036_28045 = schema.core.checker.call(null,input_schema28035_28044);
var output_checker28037_28046 = schema.core.checker.call(null,output_schema28034_28043);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   A simple shell for an h1 to appropriately space out and segment
 *   sections of content on a page. It can utilize the h1’s default small
 *   element, as well as most other components (with additional styles).
 */
om_bootstrap.random.page_header = ((function (ufv___28042,output_schema28034_28043,input_schema28035_28044,input_checker28036_28045,output_checker28037_28046){
return (function om_bootstrap$random$page_header(var_args){
var args__5626__auto__ = [];
var len__5619__auto___28047 = arguments.length;
var i__5620__auto___28048 = (0);
while(true){
if((i__5620__auto___28048 < len__5619__auto___28047)){
args__5626__auto__.push((arguments[i__5620__auto___28048]));

var G__28049 = (i__5620__auto___28048 + (1));
i__5620__auto___28048 = G__28049;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___28042,output_schema28034_28043,input_schema28035_28044,input_checker28036_28045,output_checker28037_28046))
;

om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28042,output_schema28034_28043,input_schema28035_28044,input_checker28036_28045,output_checker28037_28046){
return (function (G__28038,rest28039){
var validate__10213__auto__ = ufv___28042.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___28050 = cljs.core.list_STAR_.call(null,G__28038,rest28039);
var temp__4425__auto___28051 = input_checker28036_28045.call(null,args__10214__auto___28050);
if(cljs.core.truth_(temp__4425__auto___28051)){
var error__10215__auto___28052 = temp__4425__auto___28051;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__10215__auto___28052)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28035_28044,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___28050,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28052], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__28038;
var children = rest28039;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___28053 = output_checker28037_28046.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___28053)){
var error__10215__auto___28054 = temp__4425__auto___28053;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__10215__auto___28054)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28034_28043,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28054], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___28042,output_schema28034_28043,input_schema28035_28044,input_checker28036_28045,output_checker28037_28046))
;

om_bootstrap.random.page_header.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.page_header.cljs$lang$applyTo = ((function (ufv___28042,output_schema28034_28043,input_schema28035_28044,input_checker28036_28045,output_checker28037_28046){
return (function (seq28040){
var G__28041 = cljs.core.first.call(null,seq28040);
var seq28040__$1 = cljs.core.next.call(null,seq28040);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic(G__28041,seq28040__$1);
});})(ufv___28042,output_schema28034_28043,input_schema28035_28044,input_checker28036_28045,output_checker28037_28046))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.page_header),schema.core.make_fn_schema.call(null,output_schema28034_28043,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28035_28044], null)));
om_bootstrap.random.Placement = schema.core.enum$.call(null,"top","right","bottom","left");
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___28064 = schema.utils.use_fn_validation;
var output_schema28055_28065 = om_bootstrap.types.Component;
var input_schema28056_28066 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.ToolTip,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ToolTip","ToolTip",1279361896,null)], null))),schema.core.Any], null);
var input_checker28057_28067 = schema.core.checker.call(null,input_schema28056_28066);
var output_checker28058_28068 = schema.core.checker.call(null,output_schema28055_28065);
/**
 * Inputs: [opts :- ToolTip & children]
 *   Returns: t/Component
 */
om_bootstrap.random.tooltip = ((function (ufv___28064,output_schema28055_28065,input_schema28056_28066,input_checker28057_28067,output_checker28058_28068){
return (function om_bootstrap$random$tooltip(var_args){
var args__5626__auto__ = [];
var len__5619__auto___28069 = arguments.length;
var i__5620__auto___28070 = (0);
while(true){
if((i__5620__auto___28070 < len__5619__auto___28069)){
args__5626__auto__.push((arguments[i__5620__auto___28070]));

var G__28071 = (i__5620__auto___28070 + (1));
i__5620__auto___28070 = G__28071;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___28064,output_schema28055_28065,input_schema28056_28066,input_checker28057_28067,output_checker28058_28068))
;

om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28064,output_schema28055_28065,input_schema28056_28066,input_checker28057_28067,output_checker28058_28068){
return (function (G__28059,rest28060){
var validate__10213__auto__ = ufv___28064.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___28072 = cljs.core.list_STAR_.call(null,G__28059,rest28060);
var temp__4425__auto___28073 = input_checker28057_28067.call(null,args__10214__auto___28072);
if(cljs.core.truth_(temp__4425__auto___28073)){
var error__10215__auto___28074 = temp__4425__auto___28073;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___28074)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28056_28066,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___28072,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28074], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__28059;
var children = rest28060;
while(true){
var vec__28063 = om_bootstrap.types.separate.call(null,om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__28063,(0),null);
var _ = cljs.core.nth.call(null,vec__28063,(1),null);
var classes = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__4561__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes)), "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs))}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "tooltip-arrow", "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs))}}),cljs.core.apply.call(null,React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___28075 = output_checker28058_28068.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___28075)){
var error__10215__auto___28076 = temp__4425__auto___28075;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___28076)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28055_28065,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28076], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___28064,output_schema28055_28065,input_schema28056_28066,input_checker28057_28067,output_checker28058_28068))
;

om_bootstrap.random.tooltip.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.tooltip.cljs$lang$applyTo = ((function (ufv___28064,output_schema28055_28065,input_schema28056_28066,input_checker28057_28067,output_checker28058_28068){
return (function (seq28061){
var G__28062 = cljs.core.first.call(null,seq28061);
var seq28061__$1 = cljs.core.next.call(null,seq28061);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic(G__28062,seq28061__$1);
});})(ufv___28064,output_schema28055_28065,input_schema28056_28066,input_checker28057_28067,output_checker28058_28068))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.tooltip),schema.core.make_fn_schema.call(null,output_schema28055_28065,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28056_28066], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__18052__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__18052__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);

return descriptor__18052__auto__;
})();

var component_fnk__18081__auto___28103 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema28082 = schema.core.Any;
var input_schema28083 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map28080","map28080",310156892,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker28084 = schema.core.checker.call(null,input_schema28083);
var output_checker28085 = schema.core.checker.call(null,output_schema28082);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085){
return (function om_bootstrap$random$constructor28078(G__28086){
var validate__10213__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___28104 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28086], null);
var temp__4425__auto___28105 = input_checker28084.call(null,args__10214__auto___28104);
if(cljs.core.truth_(temp__4425__auto___28105)){
var error__10215__auto___28106 = temp__4425__auto___28105;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor28078","constructor28078",1042837623,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___28106)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28083,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___28104,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28106], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var map28080 = G__28086;
while(true){
if(cljs.core.map_QMARK_.call(null,map28080)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28080)));
}

var map28081 = plumbing.fnk.schema.safe_get.call(null,map28080,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var bs = plumbing.fnk.schema.safe_get.call(null,map28081,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var props = plumbing.fnk.schema.safe_get.call(null,map28081,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map28081,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map28080,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.random.t_om_bootstrap$random28091 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.random.t_om_bootstrap$random28091 = (function (owner,G__28086,props,output_checker28085,children,input_schema28083,input_checker28084,output_schema28082,constructor28078,validate__10213__auto__,map28081,map28080,ufv__,bs,meta28092){
this.owner = owner;
this.G__28086 = G__28086;
this.props = props;
this.output_checker28085 = output_checker28085;
this.children = children;
this.input_schema28083 = input_schema28083;
this.input_checker28084 = input_checker28084;
this.output_schema28082 = output_schema28082;
this.constructor28078 = constructor28078;
this.validate__10213__auto__ = validate__10213__auto__;
this.map28081 = map28081;
this.map28080 = map28080;
this.ufv__ = ufv__;
this.bs = bs;
this.meta28092 = meta28092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.random.t_om_bootstrap$random28091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map28081,validate__10213__auto__,ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085){
return (function (_28093,meta28092__$1){
var self__ = this;
var _28093__$1 = this;
return (new om_bootstrap.random.t_om_bootstrap$random28091(self__.owner,self__.G__28086,self__.props,self__.output_checker28085,self__.children,self__.input_schema28083,self__.input_checker28084,self__.output_schema28082,self__.constructor28078,self__.validate__10213__auto__,self__.map28081,self__.map28080,self__.ufv__,self__.bs,meta28092__$1));
});})(owner,children,props,bs,map28081,validate__10213__auto__,ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085))
;

om_bootstrap.random.t_om_bootstrap$random28091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map28081,validate__10213__auto__,ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085){
return (function (_28093){
var self__ = this;
var _28093__$1 = this;
return self__.meta28092;
});})(owner,children,props,bs,map28081,validate__10213__auto__,ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085))
;

om_bootstrap.random.t_om_bootstrap$random28091.prototype.om$core$IDisplayName$ = true;

om_bootstrap.random.t_om_bootstrap$random28091.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map28081,validate__10213__auto__,ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085){
return (function (_){
var self__ = this;
var ___$1 = this;
return "alert*";
});})(owner,children,props,bs,map28081,validate__10213__auto__,ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085))
;

om_bootstrap.random.t_om_bootstrap$random28091.prototype.om$core$IDidMount$ = true;

om_bootstrap.random.t_om_bootstrap$random28091.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map28081,validate__10213__auto__,ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__4549__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);
if(cljs.core.truth_(and__4549__auto__)){
return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else {
return and__4549__auto__;
}
})())){
var G__28094 = self__.owner;
G__28094.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));

return G__28094;
} else {
return null;
}
});})(owner,children,props,bs,map28081,validate__10213__auto__,ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085))
;

om_bootstrap.random.t_om_bootstrap$random28091.prototype.om$core$IRender$ = true;

om_bootstrap.random.t_om_bootstrap$random28091.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map28081,validate__10213__auto__,ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085){
return (function (_){
var self__ = this;
var ___$1 = this;
var classes = om_bootstrap.types.bs_class_set.call(null,self__.bs);
var dismiss_button = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);
if(cljs.core.truth_(temp__4425__auto__)){
var od = temp__4425__auto__;
return React.DOM.button({"type": "button", "className": "close", "onClick": om_tools.dom.format_opts.call(null,od), "aria-hidden": true},"&times;");
} else {
return null;
}
})();
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map28081,validate__10213__auto__,ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085))
;

om_bootstrap.random.t_om_bootstrap$random28091.getBasis = ((function (owner,children,props,bs,map28081,validate__10213__auto__,ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__28086","G__28086",486774533,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker28085","output-checker28085",-486754489,null),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema28083","input-schema28083",456154127,null),new cljs.core.Symbol(null,"input-checker28084","input-checker28084",443470289,null),new cljs.core.Symbol(null,"output-schema28082","output-schema28082",-60295405,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor28078","constructor28078",1042837623,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__10213__auto__","validate__10213__auto__",1108052152,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map28081","map28081",493798841,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map28080","map28080",310156892,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"bs","bs",-906042210,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"meta28092","meta28092",-608901634,null)], null);
});})(owner,children,props,bs,map28081,validate__10213__auto__,ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085))
;

om_bootstrap.random.t_om_bootstrap$random28091.cljs$lang$type = true;

om_bootstrap.random.t_om_bootstrap$random28091.cljs$lang$ctorStr = "om-bootstrap.random/t_om_bootstrap$random28091";

om_bootstrap.random.t_om_bootstrap$random28091.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map28081,validate__10213__auto__,ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"om-bootstrap.random/t_om_bootstrap$random28091");
});})(owner,children,props,bs,map28081,validate__10213__auto__,ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085))
;

om_bootstrap.random.__GT_t_om_bootstrap$random28091 = ((function (owner,children,props,bs,map28081,validate__10213__auto__,ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085){
return (function om_bootstrap$random$constructor28078_$___GT_t_om_bootstrap$random28091(owner__$1,G__28086__$1,props__$1,output_checker28085__$1,children__$1,input_schema28083__$1,input_checker28084__$1,output_schema28082__$1,constructor28078__$1,validate__10213__auto____$1,map28081__$1,map28080__$1,ufv____$1,bs__$1,meta28092){
return (new om_bootstrap.random.t_om_bootstrap$random28091(owner__$1,G__28086__$1,props__$1,output_checker28085__$1,children__$1,input_schema28083__$1,input_checker28084__$1,output_schema28082__$1,constructor28078__$1,validate__10213__auto____$1,map28081__$1,map28080__$1,ufv____$1,bs__$1,meta28092));
});})(owner,children,props,bs,map28081,validate__10213__auto__,ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085))
;

}

return (new om_bootstrap.random.t_om_bootstrap$random28091(owner,G__28086,props,output_checker28085,children,input_schema28083,input_checker28084,output_schema28082,om_bootstrap$random$constructor28078,validate__10213__auto__,map28081,map28080,ufv__,bs,null));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___28107 = output_checker28085.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___28107)){
var error__10215__auto___28108 = temp__4425__auto___28107;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor28078","constructor28078",1042837623,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___28108)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28082,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28108], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv__,output_schema28082,input_schema28083,input_checker28084,output_checker28085))
,schema.core.make_fn_schema.call(null,output_schema28082,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28083], null)));
})();
/**
 * Renders the alert component with timeout mixed in. TODO: This
 * should probably use the component macro and be defined inline under
 * the alert function. No need for a separate name.
 */
om_bootstrap.random.alert_STAR_ = ((function (component_fnk__18081__auto___28103){
return (function om_bootstrap$random$alert_STAR_(var_args){
var args__5626__auto__ = [];
var len__5619__auto___28109 = arguments.length;
var i__5620__auto___28110 = (0);
while(true){
if((i__5620__auto___28110 < len__5619__auto___28109)){
args__5626__auto__.push((arguments[i__5620__auto___28110]));

var G__28111 = (i__5620__auto___28110 + (1));
i__5620__auto___28110 = G__28111;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((2) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((2)),(0))):null);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5627__auto__);
});})(component_fnk__18081__auto___28103))
;

om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__18081__auto___28103){
return (function (data__18082__auto__,owner28077,p__28098){
var vec__28099 = p__28098;
var opts__18083__auto__ = cljs.core.nth.call(null,vec__28099,(0),null);
return component_fnk__18081__auto___28103.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__18083__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28077,new cljs.core.Keyword(null,"data","data",-232669377),data__18082__auto__], null));
});})(component_fnk__18081__auto___28103))
;

om_bootstrap.random.alert_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.random.alert_STAR_.cljs$lang$applyTo = ((function (component_fnk__18081__auto___28103){
return (function (seq28095){
var G__28096 = cljs.core.first.call(null,seq28095);
var seq28095__$1 = cljs.core.next.call(null,seq28095);
var G__28097 = cljs.core.first.call(null,seq28095__$1);
var seq28095__$2 = cljs.core.next.call(null,seq28095__$1);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__28096,G__28097,seq28095__$2);
});})(component_fnk__18081__auto___28103))
;

om_bootstrap.random.__GT_alert_STAR_ = (function om_bootstrap$random$__GT_alert_STAR_(var_args){
var args28100 = [];
var len__5619__auto___28112 = arguments.length;
var i__5620__auto___28113 = (0);
while(true){
if((i__5620__auto___28113 < len__5619__auto___28112)){
args28100.push((arguments[i__5620__auto___28113]));

var G__28114 = (i__5620__auto___28113 + (1));
i__5620__auto___28113 = G__28114;
continue;
} else {
}
break;
}

var G__28102 = args28100.length;
switch (G__28102) {
case 1:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28100.length)].join('')));

}
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__18050__auto__){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__18050__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__18050__auto__,m28079){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__18050__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m28079));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___28125 = schema.utils.use_fn_validation;
var output_schema28116_28126 = om_bootstrap.types.Component;
var input_schema28117_28127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Alert,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Alert","Alert",231771408,null)], null))),schema.core.Any], null);
var input_checker28118_28128 = schema.core.checker.call(null,input_schema28117_28127);
var output_checker28119_28129 = schema.core.checker.call(null,output_schema28116_28126);
/**
 * Inputs: [opts :- Alert & children]
 *   Returns: t/Component
 * 
 *   Wrapper for the alert component to allow a better user interface.
 */
om_bootstrap.random.alert = ((function (ufv___28125,output_schema28116_28126,input_schema28117_28127,input_checker28118_28128,output_checker28119_28129){
return (function om_bootstrap$random$alert(var_args){
var args__5626__auto__ = [];
var len__5619__auto___28130 = arguments.length;
var i__5620__auto___28131 = (0);
while(true){
if((i__5620__auto___28131 < len__5619__auto___28130)){
args__5626__auto__.push((arguments[i__5620__auto___28131]));

var G__28132 = (i__5620__auto___28131 + (1));
i__5620__auto___28131 = G__28132;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___28125,output_schema28116_28126,input_schema28117_28127,input_checker28118_28128,output_checker28119_28129))
;

om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28125,output_schema28116_28126,input_schema28117_28127,input_checker28118_28128,output_checker28119_28129){
return (function (G__28120,rest28121){
var validate__10213__auto__ = ufv___28125.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___28133 = cljs.core.list_STAR_.call(null,G__28120,rest28121);
var temp__4425__auto___28134 = input_checker28118_28128.call(null,args__10214__auto___28133);
if(cljs.core.truth_(temp__4425__auto___28134)){
var error__10215__auto___28135 = temp__4425__auto___28134;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__10215__auto___28135)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28117_28127,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___28133,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28135], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__28120;
var children = rest28121;
while(true){
var vec__28124 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);
var bs = cljs.core.nth.call(null,vec__28124,(0),null);
var props = cljs.core.nth.call(null,vec__28124,(1),null);
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___28136 = output_checker28119_28129.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___28136)){
var error__10215__auto___28137 = temp__4425__auto___28136;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__10215__auto___28137)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28116_28126,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28137], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___28125,output_schema28116_28126,input_schema28117_28127,input_checker28118_28128,output_checker28119_28129))
;

om_bootstrap.random.alert.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.alert.cljs$lang$applyTo = ((function (ufv___28125,output_schema28116_28126,input_schema28117_28127,input_checker28118_28128,output_checker28119_28129){
return (function (seq28122){
var G__28123 = cljs.core.first.call(null,seq28122);
var seq28122__$1 = cljs.core.next.call(null,seq28122);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic(G__28123,seq28122__$1);
});})(ufv___28125,output_schema28116_28126,input_schema28117_28127,input_checker28118_28128,output_checker28119_28129))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.alert),schema.core.make_fn_schema.call(null,output_schema28116_28126,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28117_28127], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___28147 = schema.utils.use_fn_validation;
var output_schema28138_28148 = om_bootstrap.types.Component;
var input_schema28139_28149 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Popover,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Popover","Popover",-1480406690,null)], null))),schema.core.Any], null);
var input_checker28140_28150 = schema.core.checker.call(null,input_schema28139_28149);
var output_checker28141_28151 = schema.core.checker.call(null,output_schema28138_28148);
/**
 * Inputs: [opts :- Popover & children]
 *   Returns: t/Component
 */
om_bootstrap.random.popover = ((function (ufv___28147,output_schema28138_28148,input_schema28139_28149,input_checker28140_28150,output_checker28141_28151){
return (function om_bootstrap$random$popover(var_args){
var args__5626__auto__ = [];
var len__5619__auto___28152 = arguments.length;
var i__5620__auto___28153 = (0);
while(true){
if((i__5620__auto___28153 < len__5619__auto___28152)){
args__5626__auto__.push((arguments[i__5620__auto___28153]));

var G__28154 = (i__5620__auto___28153 + (1));
i__5620__auto___28153 = G__28154;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___28147,output_schema28138_28148,input_schema28139_28149,input_checker28140_28150,output_checker28141_28151))
;

om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28147,output_schema28138_28148,input_schema28139_28149,input_checker28140_28150,output_checker28141_28151){
return (function (G__28142,rest28143){
var validate__10213__auto__ = ufv___28147.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___28155 = cljs.core.list_STAR_.call(null,G__28142,rest28143);
var temp__4425__auto___28156 = input_checker28140_28150.call(null,args__10214__auto___28155);
if(cljs.core.truth_(temp__4425__auto___28156)){
var error__10215__auto___28157 = temp__4425__auto___28156;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___28157)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28139_28149,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___28155,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28157], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__28142;
var children = rest28143;
while(true){
var vec__28146 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__28146,(0),null);
var _ = cljs.core.nth.call(null,vec__28146,(1),null);
var classes = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__4561__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes)), "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "display": "block"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "arrow", "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs))}}),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var title = temp__4425__auto__;
return cljs.core.apply.call(null,React.DOM.h3,{"className": "popover-title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else {
return null;
}
})(),cljs.core.apply.call(null,React.DOM.div,{"className": "popover-content"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___28158 = output_checker28141_28151.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___28158)){
var error__10215__auto___28159 = temp__4425__auto___28158;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___28159)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28138_28148,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28159], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___28147,output_schema28138_28148,input_schema28139_28149,input_checker28140_28150,output_checker28141_28151))
;

om_bootstrap.random.popover.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.popover.cljs$lang$applyTo = ((function (ufv___28147,output_schema28138_28148,input_schema28139_28149,input_checker28140_28150,output_checker28141_28151){
return (function (seq28144){
var G__28145 = cljs.core.first.call(null,seq28144);
var seq28144__$1 = cljs.core.next.call(null,seq28144);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic(G__28145,seq28144__$1);
});})(ufv___28147,output_schema28138_28148,input_schema28139_28149,input_checker28140_28150,output_checker28141_28151))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.popover),schema.core.make_fn_schema.call(null,output_schema28138_28148,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28139_28149], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___28169 = schema.utils.use_fn_validation;
var output_schema28160_28170 = om_bootstrap.types.Component;
var input_schema28161_28171 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Badge,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Badge","Badge",1932684841,null)], null))),schema.core.Any], null);
var input_checker28162_28172 = schema.core.checker.call(null,input_schema28161_28171);
var output_checker28163_28173 = schema.core.checker.call(null,output_schema28160_28170);
/**
 * Inputs: [opts :- Badge & children]
 *   Returns: t/Component
 */
om_bootstrap.random.badge = ((function (ufv___28169,output_schema28160_28170,input_schema28161_28171,input_checker28162_28172,output_checker28163_28173){
return (function om_bootstrap$random$badge(var_args){
var args__5626__auto__ = [];
var len__5619__auto___28174 = arguments.length;
var i__5620__auto___28175 = (0);
while(true){
if((i__5620__auto___28175 < len__5619__auto___28174)){
args__5626__auto__.push((arguments[i__5620__auto___28175]));

var G__28176 = (i__5620__auto___28175 + (1));
i__5620__auto___28175 = G__28176;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___28169,output_schema28160_28170,input_schema28161_28171,input_checker28162_28172,output_checker28163_28173))
;

om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28169,output_schema28160_28170,input_schema28161_28171,input_checker28162_28172,output_checker28163_28173){
return (function (G__28164,rest28165){
var validate__10213__auto__ = ufv___28169.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___28177 = cljs.core.list_STAR_.call(null,G__28164,rest28165);
var temp__4425__auto___28178 = input_checker28162_28172.call(null,args__10214__auto___28177);
if(cljs.core.truth_(temp__4425__auto___28178)){
var error__10215__auto___28179 = temp__4425__auto___28178;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___28179)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28161_28171,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___28177,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28179], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__28164;
var children = rest28165;
while(true){
var vec__28168 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Badge,opts);
var bs = cljs.core.nth.call(null,vec__28168,(0),null);
var props = cljs.core.nth.call(null,vec__28168,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_.call(null,children)], null);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___28180 = output_checker28163_28173.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___28180)){
var error__10215__auto___28181 = temp__4425__auto___28180;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___28181)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28160_28170,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28181], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___28169,output_schema28160_28170,input_schema28161_28171,input_checker28162_28172,output_checker28163_28173))
;

om_bootstrap.random.badge.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.badge.cljs$lang$applyTo = ((function (ufv___28169,output_schema28160_28170,input_schema28161_28171,input_checker28162_28172,output_checker28163_28173){
return (function (seq28166){
var G__28167 = cljs.core.first.call(null,seq28166);
var seq28166__$1 = cljs.core.next.call(null,seq28166);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic(G__28167,seq28166__$1);
});})(ufv___28169,output_schema28160_28170,input_schema28161_28171,input_checker28162_28172,output_checker28163_28173))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.badge),schema.core.make_fn_schema.call(null,output_schema28160_28170,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28161_28171], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___28191 = schema.utils.use_fn_validation;
var output_schema28182_28192 = om_bootstrap.types.Component;
var input_schema28183_28193 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Glyphicon,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Glyphicon","Glyphicon",-683810897,null)], null))),schema.core.Any], null);
var input_checker28184_28194 = schema.core.checker.call(null,input_schema28183_28193);
var output_checker28185_28195 = schema.core.checker.call(null,output_schema28182_28192);
/**
 * Inputs: [opts :- Glyphicon & children]
 *   Returns: t/Component
 */
om_bootstrap.random.glyphicon = ((function (ufv___28191,output_schema28182_28192,input_schema28183_28193,input_checker28184_28194,output_checker28185_28195){
return (function om_bootstrap$random$glyphicon(var_args){
var args__5626__auto__ = [];
var len__5619__auto___28196 = arguments.length;
var i__5620__auto___28197 = (0);
while(true){
if((i__5620__auto___28197 < len__5619__auto___28196)){
args__5626__auto__.push((arguments[i__5620__auto___28197]));

var G__28198 = (i__5620__auto___28197 + (1));
i__5620__auto___28197 = G__28198;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___28191,output_schema28182_28192,input_schema28183_28193,input_checker28184_28194,output_checker28185_28195))
;

om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___28191,output_schema28182_28192,input_schema28183_28193,input_checker28184_28194,output_checker28185_28195){
return (function (G__28186,rest28187){
var validate__10213__auto__ = ufv___28191.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___28199 = cljs.core.list_STAR_.call(null,G__28186,rest28187);
var temp__4425__auto___28200 = input_checker28184_28194.call(null,args__10214__auto___28199);
if(cljs.core.truth_(temp__4425__auto___28200)){
var error__10215__auto___28201 = temp__4425__auto___28200;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___28201)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28183_28193,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___28199,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28201], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__28186;
var children = rest28187;
while(true){
var vec__28190 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));
var bs = cljs.core.nth.call(null,vec__28190,(0),null);
var props = cljs.core.nth.call(null,vec__28190,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),[cljs.core.str("glyphicon-"),cljs.core.str(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))].join(''),true);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___28202 = output_checker28185_28195.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___28202)){
var error__10215__auto___28203 = temp__4425__auto___28202;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___28203)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28182_28192,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___28203], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___28191,output_schema28182_28192,input_schema28183_28193,input_checker28184_28194,output_checker28185_28195))
;

om_bootstrap.random.glyphicon.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.glyphicon.cljs$lang$applyTo = ((function (ufv___28191,output_schema28182_28192,input_schema28183_28193,input_checker28184_28194,output_checker28185_28195){
return (function (seq28188){
var G__28189 = cljs.core.first.call(null,seq28188);
var seq28188__$1 = cljs.core.next.call(null,seq28188);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic(G__28189,seq28188__$1);
});})(ufv___28191,output_schema28182_28192,input_schema28183_28193,input_checker28184_28194,output_checker28185_28195))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.glyphicon),schema.core.make_fn_schema.call(null,output_schema28182_28192,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28183_28193], null)));
