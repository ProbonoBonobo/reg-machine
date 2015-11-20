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
var ufv___36657 = schema.utils.use_fn_validation;
var output_schema36649_36658 = om_bootstrap.types.Component;
var input_schema36650_36659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker36651_36660 = schema.core.checker.call(null,input_schema36650_36659);
var output_checker36652_36661 = schema.core.checker.call(null,output_schema36649_36658);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   A lightweight, flexible component that can optionally extend the
 * entire viewport to showcase key content on your site.
 */
om_bootstrap.random.jumbotron = ((function (ufv___36657,output_schema36649_36658,input_schema36650_36659,input_checker36651_36660,output_checker36652_36661){
return (function om_bootstrap$random$jumbotron(var_args){
var args__20266__auto__ = [];
var len__20259__auto___36662 = arguments.length;
var i__20260__auto___36663 = (0);
while(true){
if((i__20260__auto___36663 < len__20259__auto___36662)){
args__20266__auto__.push((arguments[i__20260__auto___36663]));

var G__36664 = (i__20260__auto___36663 + (1));
i__20260__auto___36663 = G__36664;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___36657,output_schema36649_36658,input_schema36650_36659,input_checker36651_36660,output_checker36652_36661))
;

om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___36657,output_schema36649_36658,input_schema36650_36659,input_checker36651_36660,output_checker36652_36661){
return (function (G__36653,rest36654){
var validate__20540__auto__ = ufv___36657.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___36665 = cljs.core.list_STAR_.call(null,G__36653,rest36654);
var temp__4425__auto___36666 = input_checker36651_36660.call(null,args__20541__auto___36665);
if(cljs.core.truth_(temp__4425__auto___36666)){
var error__20542__auto___36667 = temp__4425__auto___36666;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__20542__auto___36667)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36650_36659,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___36665,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36667], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__36653;
var children = rest36654;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___36668 = output_checker36652_36661.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___36668)){
var error__20542__auto___36669 = temp__4425__auto___36668;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__20542__auto___36669)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36649_36658,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36669], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___36657,output_schema36649_36658,input_schema36650_36659,input_checker36651_36660,output_checker36652_36661))
;

om_bootstrap.random.jumbotron.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.jumbotron.cljs$lang$applyTo = ((function (ufv___36657,output_schema36649_36658,input_schema36650_36659,input_checker36651_36660,output_checker36652_36661){
return (function (seq36655){
var G__36656 = cljs.core.first.call(null,seq36655);
var seq36655__$1 = cljs.core.next.call(null,seq36655);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic(G__36656,seq36655__$1);
});})(ufv___36657,output_schema36649_36658,input_schema36650_36659,input_checker36651_36660,output_checker36652_36661))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.jumbotron),schema.core.make_fn_schema.call(null,output_schema36649_36658,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36650_36659], null)));
var ufv___36679 = schema.utils.use_fn_validation;
var output_schema36670_36680 = om_bootstrap.types.Component;
var input_schema36671_36681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker36672_36682 = schema.core.checker.call(null,input_schema36671_36681);
var output_checker36673_36683 = schema.core.checker.call(null,output_schema36670_36680);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Create a (label {} "label!") to show highlight information.
 */
om_bootstrap.random.label = ((function (ufv___36679,output_schema36670_36680,input_schema36671_36681,input_checker36672_36682,output_checker36673_36683){
return (function om_bootstrap$random$label(var_args){
var args__20266__auto__ = [];
var len__20259__auto___36684 = arguments.length;
var i__20260__auto___36685 = (0);
while(true){
if((i__20260__auto___36685 < len__20259__auto___36684)){
args__20266__auto__.push((arguments[i__20260__auto___36685]));

var G__36686 = (i__20260__auto___36685 + (1));
i__20260__auto___36685 = G__36686;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___36679,output_schema36670_36680,input_schema36671_36681,input_checker36672_36682,output_checker36673_36683))
;

om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___36679,output_schema36670_36680,input_schema36671_36681,input_checker36672_36682,output_checker36673_36683){
return (function (G__36674,rest36675){
var validate__20540__auto__ = ufv___36679.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___36687 = cljs.core.list_STAR_.call(null,G__36674,rest36675);
var temp__4425__auto___36688 = input_checker36672_36682.call(null,args__20541__auto___36687);
if(cljs.core.truth_(temp__4425__auto___36688)){
var error__20542__auto___36689 = temp__4425__auto___36688;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__20542__auto___36689)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36671_36681,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___36687,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36689], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__36674;
var children = rest36675;
while(true){
var vec__36678 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__36678,(0),null);
var props = cljs.core.nth.call(null,vec__36678,(1),null);
var classes = om_bootstrap.types.bs_class_set.call(null,bs);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___36690 = output_checker36673_36683.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___36690)){
var error__20542__auto___36691 = temp__4425__auto___36690;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__20542__auto___36691)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36670_36680,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36691], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___36679,output_schema36670_36680,input_schema36671_36681,input_checker36672_36682,output_checker36673_36683))
;

om_bootstrap.random.label.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.label.cljs$lang$applyTo = ((function (ufv___36679,output_schema36670_36680,input_schema36671_36681,input_checker36672_36682,output_checker36673_36683){
return (function (seq36676){
var G__36677 = cljs.core.first.call(null,seq36676);
var seq36676__$1 = cljs.core.next.call(null,seq36676);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(G__36677,seq36676__$1);
});})(ufv___36679,output_schema36670_36680,input_schema36671_36681,input_checker36672_36682,output_checker36673_36683))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.label),schema.core.make_fn_schema.call(null,output_schema36670_36680,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36671_36681], null)));
var ufv___36701 = schema.utils.use_fn_validation;
var output_schema36692_36702 = om_bootstrap.types.Component;
var input_schema36693_36703 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker36694_36704 = schema.core.checker.call(null,input_schema36693_36703);
var output_checker36695_36705 = schema.core.checker.call(null,output_schema36692_36702);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Use the well as a simple effect on an element to give it an inset effect.
 */
om_bootstrap.random.well = ((function (ufv___36701,output_schema36692_36702,input_schema36693_36703,input_checker36694_36704,output_checker36695_36705){
return (function om_bootstrap$random$well(var_args){
var args__20266__auto__ = [];
var len__20259__auto___36706 = arguments.length;
var i__20260__auto___36707 = (0);
while(true){
if((i__20260__auto___36707 < len__20259__auto___36706)){
args__20266__auto__.push((arguments[i__20260__auto___36707]));

var G__36708 = (i__20260__auto___36707 + (1));
i__20260__auto___36707 = G__36708;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___36701,output_schema36692_36702,input_schema36693_36703,input_checker36694_36704,output_checker36695_36705))
;

om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___36701,output_schema36692_36702,input_schema36693_36703,input_checker36694_36704,output_checker36695_36705){
return (function (G__36696,rest36697){
var validate__20540__auto__ = ufv___36701.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___36709 = cljs.core.list_STAR_.call(null,G__36696,rest36697);
var temp__4425__auto___36710 = input_checker36694_36704.call(null,args__20541__auto___36709);
if(cljs.core.truth_(temp__4425__auto___36710)){
var error__20542__auto___36711 = temp__4425__auto___36710;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__20542__auto___36711)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36693_36703,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___36709,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36711], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__36696;
var children = rest36697;
while(true){
var vec__36700 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));
var bs = cljs.core.nth.call(null,vec__36700,(0),null);
var props = cljs.core.nth.call(null,vec__36700,(1),null);
var class$ = om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___36712 = output_checker36695_36705.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___36712)){
var error__20542__auto___36713 = temp__4425__auto___36712;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__20542__auto___36713)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36692_36702,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36713], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___36701,output_schema36692_36702,input_schema36693_36703,input_checker36694_36704,output_checker36695_36705))
;

om_bootstrap.random.well.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.well.cljs$lang$applyTo = ((function (ufv___36701,output_schema36692_36702,input_schema36693_36703,input_checker36694_36704,output_checker36695_36705){
return (function (seq36698){
var G__36699 = cljs.core.first.call(null,seq36698);
var seq36698__$1 = cljs.core.next.call(null,seq36698);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic(G__36699,seq36698__$1);
});})(ufv___36701,output_schema36692_36702,input_schema36693_36703,input_checker36694_36704,output_checker36695_36705))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.well),schema.core.make_fn_schema.call(null,output_schema36692_36702,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36693_36703], null)));
var ufv___36722 = schema.utils.use_fn_validation;
var output_schema36714_36723 = om_bootstrap.types.Component;
var input_schema36715_36724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker36716_36725 = schema.core.checker.call(null,input_schema36715_36724);
var output_checker36717_36726 = schema.core.checker.call(null,output_schema36714_36723);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   A simple shell for an h1 to appropriately space out and segment
 *   sections of content on a page. It can utilize the h1’s default small
 *   element, as well as most other components (with additional styles).
 */
om_bootstrap.random.page_header = ((function (ufv___36722,output_schema36714_36723,input_schema36715_36724,input_checker36716_36725,output_checker36717_36726){
return (function om_bootstrap$random$page_header(var_args){
var args__20266__auto__ = [];
var len__20259__auto___36727 = arguments.length;
var i__20260__auto___36728 = (0);
while(true){
if((i__20260__auto___36728 < len__20259__auto___36727)){
args__20266__auto__.push((arguments[i__20260__auto___36728]));

var G__36729 = (i__20260__auto___36728 + (1));
i__20260__auto___36728 = G__36729;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___36722,output_schema36714_36723,input_schema36715_36724,input_checker36716_36725,output_checker36717_36726))
;

om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___36722,output_schema36714_36723,input_schema36715_36724,input_checker36716_36725,output_checker36717_36726){
return (function (G__36718,rest36719){
var validate__20540__auto__ = ufv___36722.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___36730 = cljs.core.list_STAR_.call(null,G__36718,rest36719);
var temp__4425__auto___36731 = input_checker36716_36725.call(null,args__20541__auto___36730);
if(cljs.core.truth_(temp__4425__auto___36731)){
var error__20542__auto___36732 = temp__4425__auto___36731;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__20542__auto___36732)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36715_36724,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___36730,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36732], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__36718;
var children = rest36719;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___36733 = output_checker36717_36726.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___36733)){
var error__20542__auto___36734 = temp__4425__auto___36733;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__20542__auto___36734)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36714_36723,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36734], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___36722,output_schema36714_36723,input_schema36715_36724,input_checker36716_36725,output_checker36717_36726))
;

om_bootstrap.random.page_header.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.page_header.cljs$lang$applyTo = ((function (ufv___36722,output_schema36714_36723,input_schema36715_36724,input_checker36716_36725,output_checker36717_36726){
return (function (seq36720){
var G__36721 = cljs.core.first.call(null,seq36720);
var seq36720__$1 = cljs.core.next.call(null,seq36720);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic(G__36721,seq36720__$1);
});})(ufv___36722,output_schema36714_36723,input_schema36715_36724,input_checker36716_36725,output_checker36717_36726))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.page_header),schema.core.make_fn_schema.call(null,output_schema36714_36723,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36715_36724], null)));
om_bootstrap.random.Placement = schema.core.enum$.call(null,"top","right","bottom","left");
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___36744 = schema.utils.use_fn_validation;
var output_schema36735_36745 = om_bootstrap.types.Component;
var input_schema36736_36746 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.ToolTip,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ToolTip","ToolTip",1279361896,null)], null))),schema.core.Any], null);
var input_checker36737_36747 = schema.core.checker.call(null,input_schema36736_36746);
var output_checker36738_36748 = schema.core.checker.call(null,output_schema36735_36745);
/**
 * Inputs: [opts :- ToolTip & children]
 *   Returns: t/Component
 */
om_bootstrap.random.tooltip = ((function (ufv___36744,output_schema36735_36745,input_schema36736_36746,input_checker36737_36747,output_checker36738_36748){
return (function om_bootstrap$random$tooltip(var_args){
var args__20266__auto__ = [];
var len__20259__auto___36749 = arguments.length;
var i__20260__auto___36750 = (0);
while(true){
if((i__20260__auto___36750 < len__20259__auto___36749)){
args__20266__auto__.push((arguments[i__20260__auto___36750]));

var G__36751 = (i__20260__auto___36750 + (1));
i__20260__auto___36750 = G__36751;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___36744,output_schema36735_36745,input_schema36736_36746,input_checker36737_36747,output_checker36738_36748))
;

om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___36744,output_schema36735_36745,input_schema36736_36746,input_checker36737_36747,output_checker36738_36748){
return (function (G__36739,rest36740){
var validate__20540__auto__ = ufv___36744.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___36752 = cljs.core.list_STAR_.call(null,G__36739,rest36740);
var temp__4425__auto___36753 = input_checker36737_36747.call(null,args__20541__auto___36752);
if(cljs.core.truth_(temp__4425__auto___36753)){
var error__20542__auto___36754 = temp__4425__auto___36753;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___36754)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36736_36746,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___36752,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36754], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__36739;
var children = rest36740;
while(true){
var vec__36743 = om_bootstrap.types.separate.call(null,om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__36743,(0),null);
var _ = cljs.core.nth.call(null,vec__36743,(1),null);
var classes = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19201__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes)), "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs))}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"className": "tooltip-arrow", "style": {"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs))}}),cljs.core.apply.call(null,React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___36755 = output_checker36738_36748.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___36755)){
var error__20542__auto___36756 = temp__4425__auto___36755;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___36756)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36735_36745,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36756], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___36744,output_schema36735_36745,input_schema36736_36746,input_checker36737_36747,output_checker36738_36748))
;

om_bootstrap.random.tooltip.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.tooltip.cljs$lang$applyTo = ((function (ufv___36744,output_schema36735_36745,input_schema36736_36746,input_checker36737_36747,output_checker36738_36748){
return (function (seq36741){
var G__36742 = cljs.core.first.call(null,seq36741);
var seq36741__$1 = cljs.core.next.call(null,seq36741);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic(G__36742,seq36741__$1);
});})(ufv___36744,output_schema36735_36745,input_schema36736_36746,input_checker36737_36747,output_checker36738_36748))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.tooltip),schema.core.make_fn_schema.call(null,output_schema36735_36745,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36736_36746], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__30571__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__30571__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);

return descriptor__30571__auto__;
})();

var component_fnk__30600__auto___36783 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema36762 = schema.core.Any;
var input_schema36763 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map36760","map36760",1207154234,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker36764 = schema.core.checker.call(null,input_schema36763);
var output_checker36765 = schema.core.checker.call(null,output_schema36762);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765){
return (function om_bootstrap$random$constructor36758(G__36766){
var validate__20540__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___36784 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36766], null);
var temp__4425__auto___36785 = input_checker36764.call(null,args__20541__auto___36784);
if(cljs.core.truth_(temp__4425__auto___36785)){
var error__20542__auto___36786 = temp__4425__auto___36785;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor36758","constructor36758",-104781723,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___36786)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36763,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___36784,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36786], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var map36760 = G__36766;
while(true){
if(cljs.core.map_QMARK_.call(null,map36760)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map36760)));
}

var map36761 = plumbing.fnk.schema.safe_get.call(null,map36760,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var bs = plumbing.fnk.schema.safe_get.call(null,map36761,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var props = plumbing.fnk.schema.safe_get.call(null,map36761,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map36761,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map36760,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.random.t_om_bootstrap$random36771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.random.t_om_bootstrap$random36771 = (function (output_checker36765,owner,constructor36758,props,children,input_schema36763,validate__20540__auto__,input_checker36764,output_schema36762,map36760,G__36766,ufv__,map36761,bs,meta36772){
this.output_checker36765 = output_checker36765;
this.owner = owner;
this.constructor36758 = constructor36758;
this.props = props;
this.children = children;
this.input_schema36763 = input_schema36763;
this.validate__20540__auto__ = validate__20540__auto__;
this.input_checker36764 = input_checker36764;
this.output_schema36762 = output_schema36762;
this.map36760 = map36760;
this.G__36766 = G__36766;
this.ufv__ = ufv__;
this.map36761 = map36761;
this.bs = bs;
this.meta36772 = meta36772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.random.t_om_bootstrap$random36771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map36761,validate__20540__auto__,ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765){
return (function (_36773,meta36772__$1){
var self__ = this;
var _36773__$1 = this;
return (new om_bootstrap.random.t_om_bootstrap$random36771(self__.output_checker36765,self__.owner,self__.constructor36758,self__.props,self__.children,self__.input_schema36763,self__.validate__20540__auto__,self__.input_checker36764,self__.output_schema36762,self__.map36760,self__.G__36766,self__.ufv__,self__.map36761,self__.bs,meta36772__$1));
});})(owner,children,props,bs,map36761,validate__20540__auto__,ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765))
;

om_bootstrap.random.t_om_bootstrap$random36771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map36761,validate__20540__auto__,ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765){
return (function (_36773){
var self__ = this;
var _36773__$1 = this;
return self__.meta36772;
});})(owner,children,props,bs,map36761,validate__20540__auto__,ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765))
;

om_bootstrap.random.t_om_bootstrap$random36771.prototype.om$core$IDisplayName$ = true;

om_bootstrap.random.t_om_bootstrap$random36771.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map36761,validate__20540__auto__,ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765){
return (function (_){
var self__ = this;
var ___$1 = this;
return "alert*";
});})(owner,children,props,bs,map36761,validate__20540__auto__,ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765))
;

om_bootstrap.random.t_om_bootstrap$random36771.prototype.om$core$IDidMount$ = true;

om_bootstrap.random.t_om_bootstrap$random36771.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map36761,validate__20540__auto__,ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__19189__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);
if(cljs.core.truth_(and__19189__auto__)){
return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else {
return and__19189__auto__;
}
})())){
var G__36774 = self__.owner;
G__36774.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));

return G__36774;
} else {
return null;
}
});})(owner,children,props,bs,map36761,validate__20540__auto__,ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765))
;

om_bootstrap.random.t_om_bootstrap$random36771.prototype.om$core$IRender$ = true;

om_bootstrap.random.t_om_bootstrap$random36771.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map36761,validate__20540__auto__,ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765){
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
});})(owner,children,props,bs,map36761,validate__20540__auto__,ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765))
;

om_bootstrap.random.t_om_bootstrap$random36771.getBasis = ((function (owner,children,props,bs,map36761,validate__20540__auto__,ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-checker36765","output-checker36765",1161642179,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor36758","constructor36758",-104781723,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema36763","input-schema36763",2043190447,null),new cljs.core.Symbol(null,"validate__20540__auto__","validate__20540__auto__",-1942755946,null),new cljs.core.Symbol(null,"input-checker36764","input-checker36764",-113623368,null),new cljs.core.Symbol(null,"output-schema36762","output-schema36762",-519343559,null),new cljs.core.Symbol(null,"map36760","map36760",1207154234,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__36766","G__36766",-1356682116,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map36761","map36761",-173593987,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"bs","bs",-906042210,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"meta36772","meta36772",-248413252,null)], null);
});})(owner,children,props,bs,map36761,validate__20540__auto__,ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765))
;

om_bootstrap.random.t_om_bootstrap$random36771.cljs$lang$type = true;

om_bootstrap.random.t_om_bootstrap$random36771.cljs$lang$ctorStr = "om-bootstrap.random/t_om_bootstrap$random36771";

om_bootstrap.random.t_om_bootstrap$random36771.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map36761,validate__20540__auto__,ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765){
return (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"om-bootstrap.random/t_om_bootstrap$random36771");
});})(owner,children,props,bs,map36761,validate__20540__auto__,ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765))
;

om_bootstrap.random.__GT_t_om_bootstrap$random36771 = ((function (owner,children,props,bs,map36761,validate__20540__auto__,ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765){
return (function om_bootstrap$random$constructor36758_$___GT_t_om_bootstrap$random36771(output_checker36765__$1,owner__$1,constructor36758__$1,props__$1,children__$1,input_schema36763__$1,validate__20540__auto____$1,input_checker36764__$1,output_schema36762__$1,map36760__$1,G__36766__$1,ufv____$1,map36761__$1,bs__$1,meta36772){
return (new om_bootstrap.random.t_om_bootstrap$random36771(output_checker36765__$1,owner__$1,constructor36758__$1,props__$1,children__$1,input_schema36763__$1,validate__20540__auto____$1,input_checker36764__$1,output_schema36762__$1,map36760__$1,G__36766__$1,ufv____$1,map36761__$1,bs__$1,meta36772));
});})(owner,children,props,bs,map36761,validate__20540__auto__,ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765))
;

}

return (new om_bootstrap.random.t_om_bootstrap$random36771(output_checker36765,owner,om_bootstrap$random$constructor36758,props,children,input_schema36763,validate__20540__auto__,input_checker36764,output_schema36762,map36760,G__36766,ufv__,map36761,bs,null));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___36787 = output_checker36765.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___36787)){
var error__20542__auto___36788 = temp__4425__auto___36787;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor36758","constructor36758",-104781723,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___36788)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36762,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36788], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv__,output_schema36762,input_schema36763,input_checker36764,output_checker36765))
,schema.core.make_fn_schema.call(null,output_schema36762,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36763], null)));
})();
/**
 * Renders the alert component with timeout mixed in. TODO: This
 * should probably use the component macro and be defined inline under
 * the alert function. No need for a separate name.
 */
om_bootstrap.random.alert_STAR_ = ((function (component_fnk__30600__auto___36783){
return (function om_bootstrap$random$alert_STAR_(var_args){
var args__20266__auto__ = [];
var len__20259__auto___36789 = arguments.length;
var i__20260__auto___36790 = (0);
while(true){
if((i__20260__auto___36790 < len__20259__auto___36789)){
args__20266__auto__.push((arguments[i__20260__auto___36790]));

var G__36791 = (i__20260__auto___36790 + (1));
i__20260__auto___36790 = G__36791;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((2) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((2)),(0))):null);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20267__auto__);
});})(component_fnk__30600__auto___36783))
;

om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__30600__auto___36783){
return (function (data__30601__auto__,owner36757,p__36778){
var vec__36779 = p__36778;
var opts__30602__auto__ = cljs.core.nth.call(null,vec__36779,(0),null);
return component_fnk__30600__auto___36783.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__30602__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner36757,new cljs.core.Keyword(null,"data","data",-232669377),data__30601__auto__], null));
});})(component_fnk__30600__auto___36783))
;

om_bootstrap.random.alert_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.random.alert_STAR_.cljs$lang$applyTo = ((function (component_fnk__30600__auto___36783){
return (function (seq36775){
var G__36776 = cljs.core.first.call(null,seq36775);
var seq36775__$1 = cljs.core.next.call(null,seq36775);
var G__36777 = cljs.core.first.call(null,seq36775__$1);
var seq36775__$2 = cljs.core.next.call(null,seq36775__$1);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__36776,G__36777,seq36775__$2);
});})(component_fnk__30600__auto___36783))
;

om_bootstrap.random.__GT_alert_STAR_ = (function om_bootstrap$random$__GT_alert_STAR_(var_args){
var args36780 = [];
var len__20259__auto___36792 = arguments.length;
var i__20260__auto___36793 = (0);
while(true){
if((i__20260__auto___36793 < len__20259__auto___36792)){
args36780.push((arguments[i__20260__auto___36793]));

var G__36794 = (i__20260__auto___36793 + (1));
i__20260__auto___36793 = G__36794;
continue;
} else {
}
break;
}

var G__36782 = args36780.length;
switch (G__36782) {
case 1:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36780.length)].join('')));

}
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__30569__auto__){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__30569__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__30569__auto__,m36759){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__30569__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m36759));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___36805 = schema.utils.use_fn_validation;
var output_schema36796_36806 = om_bootstrap.types.Component;
var input_schema36797_36807 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Alert,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Alert","Alert",231771408,null)], null))),schema.core.Any], null);
var input_checker36798_36808 = schema.core.checker.call(null,input_schema36797_36807);
var output_checker36799_36809 = schema.core.checker.call(null,output_schema36796_36806);
/**
 * Inputs: [opts :- Alert & children]
 *   Returns: t/Component
 * 
 *   Wrapper for the alert component to allow a better user interface.
 */
om_bootstrap.random.alert = ((function (ufv___36805,output_schema36796_36806,input_schema36797_36807,input_checker36798_36808,output_checker36799_36809){
return (function om_bootstrap$random$alert(var_args){
var args__20266__auto__ = [];
var len__20259__auto___36810 = arguments.length;
var i__20260__auto___36811 = (0);
while(true){
if((i__20260__auto___36811 < len__20259__auto___36810)){
args__20266__auto__.push((arguments[i__20260__auto___36811]));

var G__36812 = (i__20260__auto___36811 + (1));
i__20260__auto___36811 = G__36812;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___36805,output_schema36796_36806,input_schema36797_36807,input_checker36798_36808,output_checker36799_36809))
;

om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___36805,output_schema36796_36806,input_schema36797_36807,input_checker36798_36808,output_checker36799_36809){
return (function (G__36800,rest36801){
var validate__20540__auto__ = ufv___36805.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___36813 = cljs.core.list_STAR_.call(null,G__36800,rest36801);
var temp__4425__auto___36814 = input_checker36798_36808.call(null,args__20541__auto___36813);
if(cljs.core.truth_(temp__4425__auto___36814)){
var error__20542__auto___36815 = temp__4425__auto___36814;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__20542__auto___36815)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36797_36807,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___36813,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36815], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__36800;
var children = rest36801;
while(true){
var vec__36804 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);
var bs = cljs.core.nth.call(null,vec__36804,(0),null);
var props = cljs.core.nth.call(null,vec__36804,(1),null);
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___36816 = output_checker36799_36809.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___36816)){
var error__20542__auto___36817 = temp__4425__auto___36816;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__20542__auto___36817)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36796_36806,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36817], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___36805,output_schema36796_36806,input_schema36797_36807,input_checker36798_36808,output_checker36799_36809))
;

om_bootstrap.random.alert.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.alert.cljs$lang$applyTo = ((function (ufv___36805,output_schema36796_36806,input_schema36797_36807,input_checker36798_36808,output_checker36799_36809){
return (function (seq36802){
var G__36803 = cljs.core.first.call(null,seq36802);
var seq36802__$1 = cljs.core.next.call(null,seq36802);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic(G__36803,seq36802__$1);
});})(ufv___36805,output_schema36796_36806,input_schema36797_36807,input_checker36798_36808,output_checker36799_36809))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.alert),schema.core.make_fn_schema.call(null,output_schema36796_36806,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36797_36807], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___36827 = schema.utils.use_fn_validation;
var output_schema36818_36828 = om_bootstrap.types.Component;
var input_schema36819_36829 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Popover,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Popover","Popover",-1480406690,null)], null))),schema.core.Any], null);
var input_checker36820_36830 = schema.core.checker.call(null,input_schema36819_36829);
var output_checker36821_36831 = schema.core.checker.call(null,output_schema36818_36828);
/**
 * Inputs: [opts :- Popover & children]
 *   Returns: t/Component
 */
om_bootstrap.random.popover = ((function (ufv___36827,output_schema36818_36828,input_schema36819_36829,input_checker36820_36830,output_checker36821_36831){
return (function om_bootstrap$random$popover(var_args){
var args__20266__auto__ = [];
var len__20259__auto___36832 = arguments.length;
var i__20260__auto___36833 = (0);
while(true){
if((i__20260__auto___36833 < len__20259__auto___36832)){
args__20266__auto__.push((arguments[i__20260__auto___36833]));

var G__36834 = (i__20260__auto___36833 + (1));
i__20260__auto___36833 = G__36834;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___36827,output_schema36818_36828,input_schema36819_36829,input_checker36820_36830,output_checker36821_36831))
;

om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___36827,output_schema36818_36828,input_schema36819_36829,input_checker36820_36830,output_checker36821_36831){
return (function (G__36822,rest36823){
var validate__20540__auto__ = ufv___36827.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___36835 = cljs.core.list_STAR_.call(null,G__36822,rest36823);
var temp__4425__auto___36836 = input_checker36820_36830.call(null,args__20541__auto___36835);
if(cljs.core.truth_(temp__4425__auto___36836)){
var error__20542__auto___36837 = temp__4425__auto___36836;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___36837)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36819_36829,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___36835,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36837], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__36822;
var children = rest36823;
while(true){
var vec__36826 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__36826,(0),null);
var _ = cljs.core.nth.call(null,vec__36826,(1),null);
var classes = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19201__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
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
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___36838 = output_checker36821_36831.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___36838)){
var error__20542__auto___36839 = temp__4425__auto___36838;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___36839)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36818_36828,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36839], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___36827,output_schema36818_36828,input_schema36819_36829,input_checker36820_36830,output_checker36821_36831))
;

om_bootstrap.random.popover.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.popover.cljs$lang$applyTo = ((function (ufv___36827,output_schema36818_36828,input_schema36819_36829,input_checker36820_36830,output_checker36821_36831){
return (function (seq36824){
var G__36825 = cljs.core.first.call(null,seq36824);
var seq36824__$1 = cljs.core.next.call(null,seq36824);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic(G__36825,seq36824__$1);
});})(ufv___36827,output_schema36818_36828,input_schema36819_36829,input_checker36820_36830,output_checker36821_36831))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.popover),schema.core.make_fn_schema.call(null,output_schema36818_36828,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36819_36829], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___36849 = schema.utils.use_fn_validation;
var output_schema36840_36850 = om_bootstrap.types.Component;
var input_schema36841_36851 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Badge,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Badge","Badge",1932684841,null)], null))),schema.core.Any], null);
var input_checker36842_36852 = schema.core.checker.call(null,input_schema36841_36851);
var output_checker36843_36853 = schema.core.checker.call(null,output_schema36840_36850);
/**
 * Inputs: [opts :- Badge & children]
 *   Returns: t/Component
 */
om_bootstrap.random.badge = ((function (ufv___36849,output_schema36840_36850,input_schema36841_36851,input_checker36842_36852,output_checker36843_36853){
return (function om_bootstrap$random$badge(var_args){
var args__20266__auto__ = [];
var len__20259__auto___36854 = arguments.length;
var i__20260__auto___36855 = (0);
while(true){
if((i__20260__auto___36855 < len__20259__auto___36854)){
args__20266__auto__.push((arguments[i__20260__auto___36855]));

var G__36856 = (i__20260__auto___36855 + (1));
i__20260__auto___36855 = G__36856;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___36849,output_schema36840_36850,input_schema36841_36851,input_checker36842_36852,output_checker36843_36853))
;

om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___36849,output_schema36840_36850,input_schema36841_36851,input_checker36842_36852,output_checker36843_36853){
return (function (G__36844,rest36845){
var validate__20540__auto__ = ufv___36849.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___36857 = cljs.core.list_STAR_.call(null,G__36844,rest36845);
var temp__4425__auto___36858 = input_checker36842_36852.call(null,args__20541__auto___36857);
if(cljs.core.truth_(temp__4425__auto___36858)){
var error__20542__auto___36859 = temp__4425__auto___36858;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___36859)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36841_36851,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___36857,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36859], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__36844;
var children = rest36845;
while(true){
var vec__36848 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Badge,opts);
var bs = cljs.core.nth.call(null,vec__36848,(0),null);
var props = cljs.core.nth.call(null,vec__36848,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_.call(null,children)], null);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___36860 = output_checker36843_36853.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___36860)){
var error__20542__auto___36861 = temp__4425__auto___36860;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___36861)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36840_36850,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36861], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___36849,output_schema36840_36850,input_schema36841_36851,input_checker36842_36852,output_checker36843_36853))
;

om_bootstrap.random.badge.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.badge.cljs$lang$applyTo = ((function (ufv___36849,output_schema36840_36850,input_schema36841_36851,input_checker36842_36852,output_checker36843_36853){
return (function (seq36846){
var G__36847 = cljs.core.first.call(null,seq36846);
var seq36846__$1 = cljs.core.next.call(null,seq36846);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic(G__36847,seq36846__$1);
});})(ufv___36849,output_schema36840_36850,input_schema36841_36851,input_checker36842_36852,output_checker36843_36853))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.badge),schema.core.make_fn_schema.call(null,output_schema36840_36850,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36841_36851], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___36871 = schema.utils.use_fn_validation;
var output_schema36862_36872 = om_bootstrap.types.Component;
var input_schema36863_36873 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Glyphicon,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Glyphicon","Glyphicon",-683810897,null)], null))),schema.core.Any], null);
var input_checker36864_36874 = schema.core.checker.call(null,input_schema36863_36873);
var output_checker36865_36875 = schema.core.checker.call(null,output_schema36862_36872);
/**
 * Inputs: [opts :- Glyphicon & children]
 *   Returns: t/Component
 */
om_bootstrap.random.glyphicon = ((function (ufv___36871,output_schema36862_36872,input_schema36863_36873,input_checker36864_36874,output_checker36865_36875){
return (function om_bootstrap$random$glyphicon(var_args){
var args__20266__auto__ = [];
var len__20259__auto___36876 = arguments.length;
var i__20260__auto___36877 = (0);
while(true){
if((i__20260__auto___36877 < len__20259__auto___36876)){
args__20266__auto__.push((arguments[i__20260__auto___36877]));

var G__36878 = (i__20260__auto___36877 + (1));
i__20260__auto___36877 = G__36878;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___36871,output_schema36862_36872,input_schema36863_36873,input_checker36864_36874,output_checker36865_36875))
;

om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___36871,output_schema36862_36872,input_schema36863_36873,input_checker36864_36874,output_checker36865_36875){
return (function (G__36866,rest36867){
var validate__20540__auto__ = ufv___36871.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___36879 = cljs.core.list_STAR_.call(null,G__36866,rest36867);
var temp__4425__auto___36880 = input_checker36864_36874.call(null,args__20541__auto___36879);
if(cljs.core.truth_(temp__4425__auto___36880)){
var error__20542__auto___36881 = temp__4425__auto___36880;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___36881)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36863_36873,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___36879,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36881], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__36866;
var children = rest36867;
while(true){
var vec__36870 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));
var bs = cljs.core.nth.call(null,vec__36870,(0),null);
var props = cljs.core.nth.call(null,vec__36870,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),[cljs.core.str("glyphicon-"),cljs.core.str(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))].join(''),true);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___36882 = output_checker36865_36875.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___36882)){
var error__20542__auto___36883 = temp__4425__auto___36882;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___36883)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36862_36872,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36883], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___36871,output_schema36862_36872,input_schema36863_36873,input_checker36864_36874,output_checker36865_36875))
;

om_bootstrap.random.glyphicon.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.glyphicon.cljs$lang$applyTo = ((function (ufv___36871,output_schema36862_36872,input_schema36863_36873,input_checker36864_36874,output_checker36865_36875){
return (function (seq36868){
var G__36869 = cljs.core.first.call(null,seq36868);
var seq36868__$1 = cljs.core.next.call(null,seq36868);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic(G__36869,seq36868__$1);
});})(ufv___36871,output_schema36862_36872,input_schema36863_36873,input_checker36864_36874,output_checker36865_36875))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.glyphicon),schema.core.make_fn_schema.call(null,output_schema36862_36872,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36863_36873], null)));

//# sourceMappingURL=random.js.map?rel=1444632660799