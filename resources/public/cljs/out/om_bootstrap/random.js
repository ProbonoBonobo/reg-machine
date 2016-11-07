// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.random');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
var ufv___50669 = schema.utils.use_fn_validation;
var output_schema50661_50670 = om_bootstrap.types.Component;
var input_schema50662_50671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker50663_50672 = schema.core.checker.call(null,input_schema50662_50671);
var output_checker50664_50673 = schema.core.checker.call(null,output_schema50661_50670);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   A lightweight, flexible component that can optionally extend the
 * entire viewport to showcase key content on your site.
 */
om_bootstrap.random.jumbotron = ((function (ufv___50669,output_schema50661_50670,input_schema50662_50671,input_checker50663_50672,output_checker50664_50673){
return (function om_bootstrap$random$jumbotron(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50674 = arguments.length;
var i__25827__auto___50675 = (0);
while(true){
if((i__25827__auto___50675 < len__25826__auto___50674)){
args__25833__auto__.push((arguments[i__25827__auto___50675]));

var G__50676 = (i__25827__auto___50675 + (1));
i__25827__auto___50675 = G__50676;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___50669,output_schema50661_50670,input_schema50662_50671,input_checker50663_50672,output_checker50664_50673))
;

om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___50669,output_schema50661_50670,input_schema50662_50671,input_checker50663_50672,output_checker50664_50673){
return (function (G__50665,rest50666){
var validate__30032__auto__ = ufv___50669.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50677 = cljs.core.list_STAR_.call(null,G__50665,rest50666);
var temp__4657__auto___50678 = input_checker50663_50672.call(null,args__30033__auto___50677);
if(cljs.core.truth_(temp__4657__auto___50678)){
var error__30034__auto___50679 = temp__4657__auto___50678;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__30034__auto___50679)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50662_50671,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50677,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50679], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__50665;
var children = rest50666;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50680 = output_checker50664_50673.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50680)){
var error__30034__auto___50681 = temp__4657__auto___50680;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__30034__auto___50681)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50661_50670,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50681], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50669,output_schema50661_50670,input_schema50662_50671,input_checker50663_50672,output_checker50664_50673))
;

om_bootstrap.random.jumbotron.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.jumbotron.cljs$lang$applyTo = ((function (ufv___50669,output_schema50661_50670,input_schema50662_50671,input_checker50663_50672,output_checker50664_50673){
return (function (seq50667){
var G__50668 = cljs.core.first.call(null,seq50667);
var seq50667__$1 = cljs.core.next.call(null,seq50667);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic(G__50668,seq50667__$1);
});})(ufv___50669,output_schema50661_50670,input_schema50662_50671,input_checker50663_50672,output_checker50664_50673))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.jumbotron),schema.core.make_fn_schema.call(null,output_schema50661_50670,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50662_50671], null)));
var ufv___50693 = schema.utils.use_fn_validation;
var output_schema50682_50694 = om_bootstrap.types.Component;
var input_schema50683_50695 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker50684_50696 = schema.core.checker.call(null,input_schema50683_50695);
var output_checker50685_50697 = schema.core.checker.call(null,output_schema50682_50694);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Create a (label {} "label!") to show highlight information.
 */
om_bootstrap.random.label = ((function (ufv___50693,output_schema50682_50694,input_schema50683_50695,input_checker50684_50696,output_checker50685_50697){
return (function om_bootstrap$random$label(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50698 = arguments.length;
var i__25827__auto___50699 = (0);
while(true){
if((i__25827__auto___50699 < len__25826__auto___50698)){
args__25833__auto__.push((arguments[i__25827__auto___50699]));

var G__50700 = (i__25827__auto___50699 + (1));
i__25827__auto___50699 = G__50700;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___50693,output_schema50682_50694,input_schema50683_50695,input_checker50684_50696,output_checker50685_50697))
;

om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___50693,output_schema50682_50694,input_schema50683_50695,input_checker50684_50696,output_checker50685_50697){
return (function (G__50686,rest50687){
var validate__30032__auto__ = ufv___50693.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50701 = cljs.core.list_STAR_.call(null,G__50686,rest50687);
var temp__4657__auto___50702 = input_checker50684_50696.call(null,args__30033__auto___50701);
if(cljs.core.truth_(temp__4657__auto___50702)){
var error__30034__auto___50703 = temp__4657__auto___50702;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__30034__auto___50703)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50683_50695,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50701,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50703], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__50686;
var children = rest50687;
while(true){
var vec__50690 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__50690,(0),null);
var props = cljs.core.nth.call(null,vec__50690,(1),null);
var classes = om_bootstrap.types.bs_class_set.call(null,bs);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50704 = output_checker50685_50697.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50704)){
var error__30034__auto___50705 = temp__4657__auto___50704;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__30034__auto___50705)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50682_50694,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50705], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50693,output_schema50682_50694,input_schema50683_50695,input_checker50684_50696,output_checker50685_50697))
;

om_bootstrap.random.label.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.label.cljs$lang$applyTo = ((function (ufv___50693,output_schema50682_50694,input_schema50683_50695,input_checker50684_50696,output_checker50685_50697){
return (function (seq50688){
var G__50689 = cljs.core.first.call(null,seq50688);
var seq50688__$1 = cljs.core.next.call(null,seq50688);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(G__50689,seq50688__$1);
});})(ufv___50693,output_schema50682_50694,input_schema50683_50695,input_checker50684_50696,output_checker50685_50697))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.label),schema.core.make_fn_schema.call(null,output_schema50682_50694,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50683_50695], null)));
var ufv___50717 = schema.utils.use_fn_validation;
var output_schema50706_50718 = om_bootstrap.types.Component;
var input_schema50707_50719 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker50708_50720 = schema.core.checker.call(null,input_schema50707_50719);
var output_checker50709_50721 = schema.core.checker.call(null,output_schema50706_50718);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Use the well as a simple effect on an element to give it an inset effect.
 */
om_bootstrap.random.well = ((function (ufv___50717,output_schema50706_50718,input_schema50707_50719,input_checker50708_50720,output_checker50709_50721){
return (function om_bootstrap$random$well(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50722 = arguments.length;
var i__25827__auto___50723 = (0);
while(true){
if((i__25827__auto___50723 < len__25826__auto___50722)){
args__25833__auto__.push((arguments[i__25827__auto___50723]));

var G__50724 = (i__25827__auto___50723 + (1));
i__25827__auto___50723 = G__50724;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___50717,output_schema50706_50718,input_schema50707_50719,input_checker50708_50720,output_checker50709_50721))
;

om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___50717,output_schema50706_50718,input_schema50707_50719,input_checker50708_50720,output_checker50709_50721){
return (function (G__50710,rest50711){
var validate__30032__auto__ = ufv___50717.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50725 = cljs.core.list_STAR_.call(null,G__50710,rest50711);
var temp__4657__auto___50726 = input_checker50708_50720.call(null,args__30033__auto___50725);
if(cljs.core.truth_(temp__4657__auto___50726)){
var error__30034__auto___50727 = temp__4657__auto___50726;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__30034__auto___50727)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50707_50719,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50725,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50727], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__50710;
var children = rest50711;
while(true){
var vec__50714 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));
var bs = cljs.core.nth.call(null,vec__50714,(0),null);
var props = cljs.core.nth.call(null,vec__50714,(1),null);
var class$ = om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50728 = output_checker50709_50721.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50728)){
var error__30034__auto___50729 = temp__4657__auto___50728;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__30034__auto___50729)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50706_50718,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50729], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50717,output_schema50706_50718,input_schema50707_50719,input_checker50708_50720,output_checker50709_50721))
;

om_bootstrap.random.well.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.well.cljs$lang$applyTo = ((function (ufv___50717,output_schema50706_50718,input_schema50707_50719,input_checker50708_50720,output_checker50709_50721){
return (function (seq50712){
var G__50713 = cljs.core.first.call(null,seq50712);
var seq50712__$1 = cljs.core.next.call(null,seq50712);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic(G__50713,seq50712__$1);
});})(ufv___50717,output_schema50706_50718,input_schema50707_50719,input_checker50708_50720,output_checker50709_50721))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.well),schema.core.make_fn_schema.call(null,output_schema50706_50718,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50707_50719], null)));
var ufv___50738 = schema.utils.use_fn_validation;
var output_schema50730_50739 = om_bootstrap.types.Component;
var input_schema50731_50740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker50732_50741 = schema.core.checker.call(null,input_schema50731_50740);
var output_checker50733_50742 = schema.core.checker.call(null,output_schema50730_50739);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   A simple shell for an h1 to appropriately space out and segment
 *   sections of content on a page. It can utilize the h1’s default small
 *   element, as well as most other components (with additional styles).
 */
om_bootstrap.random.page_header = ((function (ufv___50738,output_schema50730_50739,input_schema50731_50740,input_checker50732_50741,output_checker50733_50742){
return (function om_bootstrap$random$page_header(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50743 = arguments.length;
var i__25827__auto___50744 = (0);
while(true){
if((i__25827__auto___50744 < len__25826__auto___50743)){
args__25833__auto__.push((arguments[i__25827__auto___50744]));

var G__50745 = (i__25827__auto___50744 + (1));
i__25827__auto___50744 = G__50745;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___50738,output_schema50730_50739,input_schema50731_50740,input_checker50732_50741,output_checker50733_50742))
;

om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___50738,output_schema50730_50739,input_schema50731_50740,input_checker50732_50741,output_checker50733_50742){
return (function (G__50734,rest50735){
var validate__30032__auto__ = ufv___50738.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50746 = cljs.core.list_STAR_.call(null,G__50734,rest50735);
var temp__4657__auto___50747 = input_checker50732_50741.call(null,args__30033__auto___50746);
if(cljs.core.truth_(temp__4657__auto___50747)){
var error__30034__auto___50748 = temp__4657__auto___50747;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__30034__auto___50748)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50731_50740,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50746,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50748], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__50734;
var children = rest50735;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50749 = output_checker50733_50742.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50749)){
var error__30034__auto___50750 = temp__4657__auto___50749;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__30034__auto___50750)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50730_50739,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50750], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50738,output_schema50730_50739,input_schema50731_50740,input_checker50732_50741,output_checker50733_50742))
;

om_bootstrap.random.page_header.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.page_header.cljs$lang$applyTo = ((function (ufv___50738,output_schema50730_50739,input_schema50731_50740,input_checker50732_50741,output_checker50733_50742){
return (function (seq50736){
var G__50737 = cljs.core.first.call(null,seq50736);
var seq50736__$1 = cljs.core.next.call(null,seq50736);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic(G__50737,seq50736__$1);
});})(ufv___50738,output_schema50730_50739,input_schema50731_50740,input_checker50732_50741,output_checker50733_50742))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.page_header),schema.core.make_fn_schema.call(null,output_schema50730_50739,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50731_50740], null)));
om_bootstrap.random.Placement = schema.core.enum$.call(null,"top","right","bottom","left");
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___50762 = schema.utils.use_fn_validation;
var output_schema50751_50763 = om_bootstrap.types.Component;
var input_schema50752_50764 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.ToolTip,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ToolTip","ToolTip",1279361896,null)], null))),schema.core.Any], null);
var input_checker50753_50765 = schema.core.checker.call(null,input_schema50752_50764);
var output_checker50754_50766 = schema.core.checker.call(null,output_schema50751_50763);
/**
 * Inputs: [opts :- ToolTip & children]
 *   Returns: t/Component
 */
om_bootstrap.random.tooltip = ((function (ufv___50762,output_schema50751_50763,input_schema50752_50764,input_checker50753_50765,output_checker50754_50766){
return (function om_bootstrap$random$tooltip(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50767 = arguments.length;
var i__25827__auto___50768 = (0);
while(true){
if((i__25827__auto___50768 < len__25826__auto___50767)){
args__25833__auto__.push((arguments[i__25827__auto___50768]));

var G__50769 = (i__25827__auto___50768 + (1));
i__25827__auto___50768 = G__50769;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___50762,output_schema50751_50763,input_schema50752_50764,input_checker50753_50765,output_checker50754_50766))
;

om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___50762,output_schema50751_50763,input_schema50752_50764,input_checker50753_50765,output_checker50754_50766){
return (function (G__50755,rest50756){
var validate__30032__auto__ = ufv___50762.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50770 = cljs.core.list_STAR_.call(null,G__50755,rest50756);
var temp__4657__auto___50771 = input_checker50753_50765.call(null,args__30033__auto___50770);
if(cljs.core.truth_(temp__4657__auto___50771)){
var error__30034__auto___50772 = temp__4657__auto___50771;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50772)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50752_50764,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50770,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50772], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__50755;
var children = rest50756;
while(true){
var vec__50759 = om_bootstrap.types.separate.call(null,om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__50759,(0),null);
var _ = cljs.core.nth.call(null,vec__50759,(1),null);
var classes = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__24751__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);
return cljs.core.apply.call(null,React.DOM.div,({"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes)), "style": ({"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs))})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div(({"className": "tooltip-arrow", "style": ({"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs))})})),cljs.core.apply.call(null,React.DOM.div,({"className": "tooltip-inner"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50773 = output_checker50754_50766.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50773)){
var error__30034__auto___50774 = temp__4657__auto___50773;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50774)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50751_50763,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50774], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50762,output_schema50751_50763,input_schema50752_50764,input_checker50753_50765,output_checker50754_50766))
;

om_bootstrap.random.tooltip.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.tooltip.cljs$lang$applyTo = ((function (ufv___50762,output_schema50751_50763,input_schema50752_50764,input_checker50753_50765,output_checker50754_50766){
return (function (seq50757){
var G__50758 = cljs.core.first.call(null,seq50757);
var seq50757__$1 = cljs.core.next.call(null,seq50757);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic(G__50758,seq50757__$1);
});})(ufv___50762,output_schema50751_50763,input_schema50752_50764,input_checker50753_50765,output_checker50754_50766))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.tooltip),schema.core.make_fn_schema.call(null,output_schema50751_50763,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50752_50764], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__50257__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__50257__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);

return descriptor__50257__auto__;
})();

var component_fnk__50286__auto___50803 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema50780 = schema.core.Any;
var input_schema50781 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map50778","map50778",-19459632,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker50782 = schema.core.checker.call(null,input_schema50781);
var output_checker50783 = schema.core.checker.call(null,output_schema50780);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783){
return (function om_bootstrap$random$constructor50776(G__50784){
var validate__30032__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50804 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50784], null);
var temp__4657__auto___50805 = input_checker50782.call(null,args__30033__auto___50804);
if(cljs.core.truth_(temp__4657__auto___50805)){
var error__30034__auto___50806 = temp__4657__auto___50805;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor50776","constructor50776",-1966037231,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50806)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50781,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50804,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50806], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var map50778 = G__50784;
while(true){
if(cljs.core.map_QMARK_.call(null,map50778)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map50778)));
}

var map50779 = plumbing.fnk.schema.safe_get.call(null,map50778,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var bs = plumbing.fnk.schema.safe_get.call(null,map50779,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var props = plumbing.fnk.schema.safe_get.call(null,map50779,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map50779,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map50778,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.random.t_om_bootstrap$random50789 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.random.t_om_bootstrap$random50789 = (function (output_checker50783,validate__30032__auto__,owner,props,output_schema50780,children,map50778,constructor50776,input_schema50781,G__50784,map50779,input_checker50782,ufv__,bs,meta50790){
this.output_checker50783 = output_checker50783;
this.validate__30032__auto__ = validate__30032__auto__;
this.owner = owner;
this.props = props;
this.output_schema50780 = output_schema50780;
this.children = children;
this.map50778 = map50778;
this.constructor50776 = constructor50776;
this.input_schema50781 = input_schema50781;
this.G__50784 = G__50784;
this.map50779 = map50779;
this.input_checker50782 = input_checker50782;
this.ufv__ = ufv__;
this.bs = bs;
this.meta50790 = meta50790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.random.t_om_bootstrap$random50789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map50779,validate__30032__auto__,ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783){
return (function (_50791,meta50790__$1){
var self__ = this;
var _50791__$1 = this;
return (new om_bootstrap.random.t_om_bootstrap$random50789(self__.output_checker50783,self__.validate__30032__auto__,self__.owner,self__.props,self__.output_schema50780,self__.children,self__.map50778,self__.constructor50776,self__.input_schema50781,self__.G__50784,self__.map50779,self__.input_checker50782,self__.ufv__,self__.bs,meta50790__$1));
});})(owner,children,props,bs,map50779,validate__30032__auto__,ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783))
;

om_bootstrap.random.t_om_bootstrap$random50789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map50779,validate__30032__auto__,ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783){
return (function (_50791){
var self__ = this;
var _50791__$1 = this;
return self__.meta50790;
});})(owner,children,props,bs,map50779,validate__30032__auto__,ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783))
;

om_bootstrap.random.t_om_bootstrap$random50789.prototype.om$core$IDisplayName$ = true;

om_bootstrap.random.t_om_bootstrap$random50789.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map50779,validate__30032__auto__,ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783){
return (function (_){
var self__ = this;
var ___$1 = this;
return "alert*";
});})(owner,children,props,bs,map50779,validate__30032__auto__,ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783))
;

om_bootstrap.random.t_om_bootstrap$random50789.prototype.om$core$IDidMount$ = true;

om_bootstrap.random.t_om_bootstrap$random50789.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map50779,validate__30032__auto__,ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__24739__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);
if(cljs.core.truth_(and__24739__auto__)){
return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else {
return and__24739__auto__;
}
})())){
var G__50792 = self__.owner;
G__50792.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));

return G__50792;
} else {
return null;
}
});})(owner,children,props,bs,map50779,validate__30032__auto__,ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783))
;

om_bootstrap.random.t_om_bootstrap$random50789.prototype.om$core$IRender$ = true;

om_bootstrap.random.t_om_bootstrap$random50789.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map50779,validate__30032__auto__,ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783){
return (function (_){
var self__ = this;
var ___$1 = this;
var classes = om_bootstrap.types.bs_class_set.call(null,self__.bs);
var dismiss_button = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);
if(cljs.core.truth_(temp__4657__auto__)){
var od = temp__4657__auto__;
return React.DOM.button(({"type": "button", "className": "close", "onClick": om_tools.dom.format_opts.call(null,od), "aria-hidden": true}),"&times;");
} else {
return null;
}
})();
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map50779,validate__30032__auto__,ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783))
;

om_bootstrap.random.t_om_bootstrap$random50789.getBasis = ((function (owner,children,props,bs,map50779,validate__30032__auto__,ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-checker50783","output-checker50783",886707682,null),new cljs.core.Symbol(null,"validate__30032__auto__","validate__30032__auto__",-1861236669,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema50780","output-schema50780",-1495098489,null),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map50778","map50778",-19459632,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor50776","constructor50776",-1966037231,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema50781","input-schema50781",1908089074,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__50784","G__50784",1467354042,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"map50779","map50779",-2000283205,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker50782","input-checker50782",-1795055395,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"bs","bs",-906042210,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"meta50790","meta50790",1002844073,null)], null);
});})(owner,children,props,bs,map50779,validate__30032__auto__,ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783))
;

om_bootstrap.random.t_om_bootstrap$random50789.cljs$lang$type = true;

om_bootstrap.random.t_om_bootstrap$random50789.cljs$lang$ctorStr = "om-bootstrap.random/t_om_bootstrap$random50789";

om_bootstrap.random.t_om_bootstrap$random50789.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map50779,validate__30032__auto__,ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-bootstrap.random/t_om_bootstrap$random50789");
});})(owner,children,props,bs,map50779,validate__30032__auto__,ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783))
;

om_bootstrap.random.__GT_t_om_bootstrap$random50789 = ((function (owner,children,props,bs,map50779,validate__30032__auto__,ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783){
return (function om_bootstrap$random$constructor50776_$___GT_t_om_bootstrap$random50789(output_checker50783__$1,validate__30032__auto____$1,owner__$1,props__$1,output_schema50780__$1,children__$1,map50778__$1,constructor50776__$1,input_schema50781__$1,G__50784__$1,map50779__$1,input_checker50782__$1,ufv____$1,bs__$1,meta50790){
return (new om_bootstrap.random.t_om_bootstrap$random50789(output_checker50783__$1,validate__30032__auto____$1,owner__$1,props__$1,output_schema50780__$1,children__$1,map50778__$1,constructor50776__$1,input_schema50781__$1,G__50784__$1,map50779__$1,input_checker50782__$1,ufv____$1,bs__$1,meta50790));
});})(owner,children,props,bs,map50779,validate__30032__auto__,ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783))
;

}

return (new om_bootstrap.random.t_om_bootstrap$random50789(output_checker50783,validate__30032__auto__,owner,props,output_schema50780,children,map50778,om_bootstrap$random$constructor50776,input_schema50781,G__50784,map50779,input_checker50782,ufv__,bs,null));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50807 = output_checker50783.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50807)){
var error__30034__auto___50808 = temp__4657__auto___50807;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor50776","constructor50776",-1966037231,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50808)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50780,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50808], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv__,output_schema50780,input_schema50781,input_checker50782,output_checker50783))
,schema.core.make_fn_schema.call(null,output_schema50780,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50781], null)));
})();
/**
 * Renders the alert component with timeout mixed in. TODO: This
 * should probably use the component macro and be defined inline under
 * the alert function. No need for a separate name.
 */
om_bootstrap.random.alert_STAR_ = ((function (component_fnk__50286__auto___50803){
return (function om_bootstrap$random$alert_STAR_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50809 = arguments.length;
var i__25827__auto___50810 = (0);
while(true){
if((i__25827__auto___50810 < len__25826__auto___50809)){
args__25833__auto__.push((arguments[i__25827__auto___50810]));

var G__50811 = (i__25827__auto___50810 + (1));
i__25827__auto___50810 = G__50811;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});})(component_fnk__50286__auto___50803))
;

om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__50286__auto___50803){
return (function (data__50287__auto__,owner50775,p__50796){
var vec__50797 = p__50796;
var opts__50288__auto__ = cljs.core.nth.call(null,vec__50797,(0),null);
return component_fnk__50286__auto___50803.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__50288__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner50775,new cljs.core.Keyword(null,"data","data",-232669377),data__50287__auto__], null));
});})(component_fnk__50286__auto___50803))
;

om_bootstrap.random.alert_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.random.alert_STAR_.cljs$lang$applyTo = ((function (component_fnk__50286__auto___50803){
return (function (seq50793){
var G__50794 = cljs.core.first.call(null,seq50793);
var seq50793__$1 = cljs.core.next.call(null,seq50793);
var G__50795 = cljs.core.first.call(null,seq50793__$1);
var seq50793__$2 = cljs.core.next.call(null,seq50793__$1);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__50794,G__50795,seq50793__$2);
});})(component_fnk__50286__auto___50803))
;


om_bootstrap.random.__GT_alert_STAR_ = (function om_bootstrap$random$__GT_alert_STAR_(var_args){
var args50800 = [];
var len__25826__auto___50812 = arguments.length;
var i__25827__auto___50813 = (0);
while(true){
if((i__25827__auto___50813 < len__25826__auto___50812)){
args50800.push((arguments[i__25827__auto___50813]));

var G__50814 = (i__25827__auto___50813 + (1));
i__25827__auto___50813 = G__50814;
continue;
} else {
}
break;
}

var G__50802 = args50800.length;
switch (G__50802) {
case 1:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50800.length)].join('')));

}
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__50255__auto__){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__50255__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__50255__auto__,m50777){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__50255__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m50777));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___50827 = schema.utils.use_fn_validation;
var output_schema50816_50828 = om_bootstrap.types.Component;
var input_schema50817_50829 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Alert,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Alert","Alert",231771408,null)], null))),schema.core.Any], null);
var input_checker50818_50830 = schema.core.checker.call(null,input_schema50817_50829);
var output_checker50819_50831 = schema.core.checker.call(null,output_schema50816_50828);
/**
 * Inputs: [opts :- Alert & children]
 *   Returns: t/Component
 * 
 *   Wrapper for the alert component to allow a better user interface.
 */
om_bootstrap.random.alert = ((function (ufv___50827,output_schema50816_50828,input_schema50817_50829,input_checker50818_50830,output_checker50819_50831){
return (function om_bootstrap$random$alert(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50832 = arguments.length;
var i__25827__auto___50833 = (0);
while(true){
if((i__25827__auto___50833 < len__25826__auto___50832)){
args__25833__auto__.push((arguments[i__25827__auto___50833]));

var G__50834 = (i__25827__auto___50833 + (1));
i__25827__auto___50833 = G__50834;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___50827,output_schema50816_50828,input_schema50817_50829,input_checker50818_50830,output_checker50819_50831))
;

om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___50827,output_schema50816_50828,input_schema50817_50829,input_checker50818_50830,output_checker50819_50831){
return (function (G__50820,rest50821){
var validate__30032__auto__ = ufv___50827.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50835 = cljs.core.list_STAR_.call(null,G__50820,rest50821);
var temp__4657__auto___50836 = input_checker50818_50830.call(null,args__30033__auto___50835);
if(cljs.core.truth_(temp__4657__auto___50836)){
var error__30034__auto___50837 = temp__4657__auto___50836;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__30034__auto___50837)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50817_50829,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50835,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50837], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__50820;
var children = rest50821;
while(true){
var vec__50824 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);
var bs = cljs.core.nth.call(null,vec__50824,(0),null);
var props = cljs.core.nth.call(null,vec__50824,(1),null);
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50838 = output_checker50819_50831.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50838)){
var error__30034__auto___50839 = temp__4657__auto___50838;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__30034__auto___50839)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50816_50828,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50839], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50827,output_schema50816_50828,input_schema50817_50829,input_checker50818_50830,output_checker50819_50831))
;

om_bootstrap.random.alert.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.alert.cljs$lang$applyTo = ((function (ufv___50827,output_schema50816_50828,input_schema50817_50829,input_checker50818_50830,output_checker50819_50831){
return (function (seq50822){
var G__50823 = cljs.core.first.call(null,seq50822);
var seq50822__$1 = cljs.core.next.call(null,seq50822);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic(G__50823,seq50822__$1);
});})(ufv___50827,output_schema50816_50828,input_schema50817_50829,input_checker50818_50830,output_checker50819_50831))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.alert),schema.core.make_fn_schema.call(null,output_schema50816_50828,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50817_50829], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___50851 = schema.utils.use_fn_validation;
var output_schema50840_50852 = om_bootstrap.types.Component;
var input_schema50841_50853 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Popover,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Popover","Popover",-1480406690,null)], null))),schema.core.Any], null);
var input_checker50842_50854 = schema.core.checker.call(null,input_schema50841_50853);
var output_checker50843_50855 = schema.core.checker.call(null,output_schema50840_50852);
/**
 * Inputs: [opts :- Popover & children]
 *   Returns: t/Component
 */
om_bootstrap.random.popover = ((function (ufv___50851,output_schema50840_50852,input_schema50841_50853,input_checker50842_50854,output_checker50843_50855){
return (function om_bootstrap$random$popover(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50856 = arguments.length;
var i__25827__auto___50857 = (0);
while(true){
if((i__25827__auto___50857 < len__25826__auto___50856)){
args__25833__auto__.push((arguments[i__25827__auto___50857]));

var G__50858 = (i__25827__auto___50857 + (1));
i__25827__auto___50857 = G__50858;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___50851,output_schema50840_50852,input_schema50841_50853,input_checker50842_50854,output_checker50843_50855))
;

om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___50851,output_schema50840_50852,input_schema50841_50853,input_checker50842_50854,output_checker50843_50855){
return (function (G__50844,rest50845){
var validate__30032__auto__ = ufv___50851.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50859 = cljs.core.list_STAR_.call(null,G__50844,rest50845);
var temp__4657__auto___50860 = input_checker50842_50854.call(null,args__30033__auto___50859);
if(cljs.core.truth_(temp__4657__auto___50860)){
var error__30034__auto___50861 = temp__4657__auto___50860;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50861)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50841_50853,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50859,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50861], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__50844;
var children = rest50845;
while(true){
var vec__50848 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__50848,(0),null);
var _ = cljs.core.nth.call(null,vec__50848,(1),null);
var classes = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__24751__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);
return cljs.core.apply.call(null,React.DOM.div,({"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes)), "style": ({"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "display": "block"})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div(({"className": "arrow", "style": ({"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs))})})),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var title = temp__4657__auto__;
return cljs.core.apply.call(null,React.DOM.h3,({"className": "popover-title"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else {
return null;
}
})(),cljs.core.apply.call(null,React.DOM.div,({"className": "popover-content"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50862 = output_checker50843_50855.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50862)){
var error__30034__auto___50863 = temp__4657__auto___50862;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50863)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50840_50852,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50863], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50851,output_schema50840_50852,input_schema50841_50853,input_checker50842_50854,output_checker50843_50855))
;

om_bootstrap.random.popover.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.popover.cljs$lang$applyTo = ((function (ufv___50851,output_schema50840_50852,input_schema50841_50853,input_checker50842_50854,output_checker50843_50855){
return (function (seq50846){
var G__50847 = cljs.core.first.call(null,seq50846);
var seq50846__$1 = cljs.core.next.call(null,seq50846);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic(G__50847,seq50846__$1);
});})(ufv___50851,output_schema50840_50852,input_schema50841_50853,input_checker50842_50854,output_checker50843_50855))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.popover),schema.core.make_fn_schema.call(null,output_schema50840_50852,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50841_50853], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___50875 = schema.utils.use_fn_validation;
var output_schema50864_50876 = om_bootstrap.types.Component;
var input_schema50865_50877 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Badge,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Badge","Badge",1932684841,null)], null))),schema.core.Any], null);
var input_checker50866_50878 = schema.core.checker.call(null,input_schema50865_50877);
var output_checker50867_50879 = schema.core.checker.call(null,output_schema50864_50876);
/**
 * Inputs: [opts :- Badge & children]
 *   Returns: t/Component
 */
om_bootstrap.random.badge = ((function (ufv___50875,output_schema50864_50876,input_schema50865_50877,input_checker50866_50878,output_checker50867_50879){
return (function om_bootstrap$random$badge(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50880 = arguments.length;
var i__25827__auto___50881 = (0);
while(true){
if((i__25827__auto___50881 < len__25826__auto___50880)){
args__25833__auto__.push((arguments[i__25827__auto___50881]));

var G__50882 = (i__25827__auto___50881 + (1));
i__25827__auto___50881 = G__50882;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___50875,output_schema50864_50876,input_schema50865_50877,input_checker50866_50878,output_checker50867_50879))
;

om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___50875,output_schema50864_50876,input_schema50865_50877,input_checker50866_50878,output_checker50867_50879){
return (function (G__50868,rest50869){
var validate__30032__auto__ = ufv___50875.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50883 = cljs.core.list_STAR_.call(null,G__50868,rest50869);
var temp__4657__auto___50884 = input_checker50866_50878.call(null,args__30033__auto___50883);
if(cljs.core.truth_(temp__4657__auto___50884)){
var error__30034__auto___50885 = temp__4657__auto___50884;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50885)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50865_50877,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50883,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50885], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__50868;
var children = rest50869;
while(true){
var vec__50872 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Badge,opts);
var bs = cljs.core.nth.call(null,vec__50872,(0),null);
var props = cljs.core.nth.call(null,vec__50872,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_.call(null,children)], null);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50886 = output_checker50867_50879.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50886)){
var error__30034__auto___50887 = temp__4657__auto___50886;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50887)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50864_50876,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50887], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50875,output_schema50864_50876,input_schema50865_50877,input_checker50866_50878,output_checker50867_50879))
;

om_bootstrap.random.badge.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.badge.cljs$lang$applyTo = ((function (ufv___50875,output_schema50864_50876,input_schema50865_50877,input_checker50866_50878,output_checker50867_50879){
return (function (seq50870){
var G__50871 = cljs.core.first.call(null,seq50870);
var seq50870__$1 = cljs.core.next.call(null,seq50870);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic(G__50871,seq50870__$1);
});})(ufv___50875,output_schema50864_50876,input_schema50865_50877,input_checker50866_50878,output_checker50867_50879))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.badge),schema.core.make_fn_schema.call(null,output_schema50864_50876,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50865_50877], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___50899 = schema.utils.use_fn_validation;
var output_schema50888_50900 = om_bootstrap.types.Component;
var input_schema50889_50901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Glyphicon,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Glyphicon","Glyphicon",-683810897,null)], null))),schema.core.Any], null);
var input_checker50890_50902 = schema.core.checker.call(null,input_schema50889_50901);
var output_checker50891_50903 = schema.core.checker.call(null,output_schema50888_50900);
/**
 * Inputs: [opts :- Glyphicon & children]
 *   Returns: t/Component
 */
om_bootstrap.random.glyphicon = ((function (ufv___50899,output_schema50888_50900,input_schema50889_50901,input_checker50890_50902,output_checker50891_50903){
return (function om_bootstrap$random$glyphicon(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50904 = arguments.length;
var i__25827__auto___50905 = (0);
while(true){
if((i__25827__auto___50905 < len__25826__auto___50904)){
args__25833__auto__.push((arguments[i__25827__auto___50905]));

var G__50906 = (i__25827__auto___50905 + (1));
i__25827__auto___50905 = G__50906;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___50899,output_schema50888_50900,input_schema50889_50901,input_checker50890_50902,output_checker50891_50903))
;

om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___50899,output_schema50888_50900,input_schema50889_50901,input_checker50890_50902,output_checker50891_50903){
return (function (G__50892,rest50893){
var validate__30032__auto__ = ufv___50899.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50907 = cljs.core.list_STAR_.call(null,G__50892,rest50893);
var temp__4657__auto___50908 = input_checker50890_50902.call(null,args__30033__auto___50907);
if(cljs.core.truth_(temp__4657__auto___50908)){
var error__30034__auto___50909 = temp__4657__auto___50908;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50909)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50889_50901,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50907,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50909], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__50892;
var children = rest50893;
while(true){
var vec__50896 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));
var bs = cljs.core.nth.call(null,vec__50896,(0),null);
var props = cljs.core.nth.call(null,vec__50896,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),[cljs.core.str("glyphicon-"),cljs.core.str(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))].join(''),true);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50910 = output_checker50891_50903.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50910)){
var error__30034__auto___50911 = temp__4657__auto___50910;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50911)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50888_50900,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50911], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50899,output_schema50888_50900,input_schema50889_50901,input_checker50890_50902,output_checker50891_50903))
;

om_bootstrap.random.glyphicon.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.glyphicon.cljs$lang$applyTo = ((function (ufv___50899,output_schema50888_50900,input_schema50889_50901,input_checker50890_50902,output_checker50891_50903){
return (function (seq50894){
var G__50895 = cljs.core.first.call(null,seq50894);
var seq50894__$1 = cljs.core.next.call(null,seq50894);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic(G__50895,seq50894__$1);
});})(ufv___50899,output_schema50888_50900,input_schema50889_50901,input_checker50890_50902,output_checker50891_50903))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.glyphicon),schema.core.make_fn_schema.call(null,output_schema50888_50900,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50889_50901], null)));

//# sourceMappingURL=random.js.map?rel=1478445863836