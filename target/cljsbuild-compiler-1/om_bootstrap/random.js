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
var ufv___35674 = schema.utils.use_fn_validation;
var output_schema35666_35675 = om_bootstrap.types.Component;
var input_schema35667_35676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker35668_35677 = schema.core.checker.call(null,input_schema35667_35676);
var output_checker35669_35678 = schema.core.checker.call(null,output_schema35666_35675);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   A lightweight, flexible component that can optionally extend the
 * entire viewport to showcase key content on your site.
 */
om_bootstrap.random.jumbotron = ((function (ufv___35674,output_schema35666_35675,input_schema35667_35676,input_checker35668_35677,output_checker35669_35678){
return (function om_bootstrap$random$jumbotron(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35679 = arguments.length;
var i__7480__auto___35680 = (0);
while(true){
if((i__7480__auto___35680 < len__7479__auto___35679)){
args__7486__auto__.push((arguments[i__7480__auto___35680]));

var G__35681 = (i__7480__auto___35680 + (1));
i__7480__auto___35680 = G__35681;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35674,output_schema35666_35675,input_schema35667_35676,input_checker35668_35677,output_checker35669_35678))
;

om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35674,output_schema35666_35675,input_schema35667_35676,input_checker35668_35677,output_checker35669_35678){
return (function (G__35670,rest35671){
var validate__8009__auto__ = ufv___35674.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35682 = cljs.core.list_STAR_.call(null,G__35670,rest35671);
var temp__4657__auto___35683 = input_checker35668_35677.call(null,args__8010__auto___35682);
if(cljs.core.truth_(temp__4657__auto___35683)){
var error__8011__auto___35684 = temp__4657__auto___35683;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__8011__auto___35684)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35667_35676,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35682,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35684], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35670;
var children = rest35671;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35685 = output_checker35669_35678.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35685)){
var error__8011__auto___35686 = temp__4657__auto___35685;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__8011__auto___35686)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35666_35675,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35686], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35674,output_schema35666_35675,input_schema35667_35676,input_checker35668_35677,output_checker35669_35678))
;

om_bootstrap.random.jumbotron.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.jumbotron.cljs$lang$applyTo = ((function (ufv___35674,output_schema35666_35675,input_schema35667_35676,input_checker35668_35677,output_checker35669_35678){
return (function (seq35672){
var G__35673 = cljs.core.first.call(null,seq35672);
var seq35672__$1 = cljs.core.next.call(null,seq35672);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic(G__35673,seq35672__$1);
});})(ufv___35674,output_schema35666_35675,input_schema35667_35676,input_checker35668_35677,output_checker35669_35678))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.jumbotron),schema.core.make_fn_schema.call(null,output_schema35666_35675,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35667_35676], null)));
var ufv___35698 = schema.utils.use_fn_validation;
var output_schema35687_35699 = om_bootstrap.types.Component;
var input_schema35688_35700 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker35689_35701 = schema.core.checker.call(null,input_schema35688_35700);
var output_checker35690_35702 = schema.core.checker.call(null,output_schema35687_35699);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Create a (label {} "label!") to show highlight information.
 */
om_bootstrap.random.label = ((function (ufv___35698,output_schema35687_35699,input_schema35688_35700,input_checker35689_35701,output_checker35690_35702){
return (function om_bootstrap$random$label(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35703 = arguments.length;
var i__7480__auto___35704 = (0);
while(true){
if((i__7480__auto___35704 < len__7479__auto___35703)){
args__7486__auto__.push((arguments[i__7480__auto___35704]));

var G__35705 = (i__7480__auto___35704 + (1));
i__7480__auto___35704 = G__35705;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35698,output_schema35687_35699,input_schema35688_35700,input_checker35689_35701,output_checker35690_35702))
;

om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35698,output_schema35687_35699,input_schema35688_35700,input_checker35689_35701,output_checker35690_35702){
return (function (G__35691,rest35692){
var validate__8009__auto__ = ufv___35698.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35706 = cljs.core.list_STAR_.call(null,G__35691,rest35692);
var temp__4657__auto___35707 = input_checker35689_35701.call(null,args__8010__auto___35706);
if(cljs.core.truth_(temp__4657__auto___35707)){
var error__8011__auto___35708 = temp__4657__auto___35707;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__8011__auto___35708)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35688_35700,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35706,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35708], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35691;
var children = rest35692;
while(true){
var vec__35695 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__35695,(0),null);
var props = cljs.core.nth.call(null,vec__35695,(1),null);
var classes = om_bootstrap.types.bs_class_set.call(null,bs);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35709 = output_checker35690_35702.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35709)){
var error__8011__auto___35710 = temp__4657__auto___35709;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__8011__auto___35710)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35687_35699,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35710], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35698,output_schema35687_35699,input_schema35688_35700,input_checker35689_35701,output_checker35690_35702))
;

om_bootstrap.random.label.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.label.cljs$lang$applyTo = ((function (ufv___35698,output_schema35687_35699,input_schema35688_35700,input_checker35689_35701,output_checker35690_35702){
return (function (seq35693){
var G__35694 = cljs.core.first.call(null,seq35693);
var seq35693__$1 = cljs.core.next.call(null,seq35693);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(G__35694,seq35693__$1);
});})(ufv___35698,output_schema35687_35699,input_schema35688_35700,input_checker35689_35701,output_checker35690_35702))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.label),schema.core.make_fn_schema.call(null,output_schema35687_35699,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35688_35700], null)));
var ufv___35722 = schema.utils.use_fn_validation;
var output_schema35711_35723 = om_bootstrap.types.Component;
var input_schema35712_35724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker35713_35725 = schema.core.checker.call(null,input_schema35712_35724);
var output_checker35714_35726 = schema.core.checker.call(null,output_schema35711_35723);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Use the well as a simple effect on an element to give it an inset effect.
 */
om_bootstrap.random.well = ((function (ufv___35722,output_schema35711_35723,input_schema35712_35724,input_checker35713_35725,output_checker35714_35726){
return (function om_bootstrap$random$well(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35727 = arguments.length;
var i__7480__auto___35728 = (0);
while(true){
if((i__7480__auto___35728 < len__7479__auto___35727)){
args__7486__auto__.push((arguments[i__7480__auto___35728]));

var G__35729 = (i__7480__auto___35728 + (1));
i__7480__auto___35728 = G__35729;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35722,output_schema35711_35723,input_schema35712_35724,input_checker35713_35725,output_checker35714_35726))
;

om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35722,output_schema35711_35723,input_schema35712_35724,input_checker35713_35725,output_checker35714_35726){
return (function (G__35715,rest35716){
var validate__8009__auto__ = ufv___35722.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35730 = cljs.core.list_STAR_.call(null,G__35715,rest35716);
var temp__4657__auto___35731 = input_checker35713_35725.call(null,args__8010__auto___35730);
if(cljs.core.truth_(temp__4657__auto___35731)){
var error__8011__auto___35732 = temp__4657__auto___35731;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__8011__auto___35732)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35712_35724,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35730,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35732], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35715;
var children = rest35716;
while(true){
var vec__35719 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));
var bs = cljs.core.nth.call(null,vec__35719,(0),null);
var props = cljs.core.nth.call(null,vec__35719,(1),null);
var class$ = om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35733 = output_checker35714_35726.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35733)){
var error__8011__auto___35734 = temp__4657__auto___35733;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__8011__auto___35734)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35711_35723,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35734], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35722,output_schema35711_35723,input_schema35712_35724,input_checker35713_35725,output_checker35714_35726))
;

om_bootstrap.random.well.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.well.cljs$lang$applyTo = ((function (ufv___35722,output_schema35711_35723,input_schema35712_35724,input_checker35713_35725,output_checker35714_35726){
return (function (seq35717){
var G__35718 = cljs.core.first.call(null,seq35717);
var seq35717__$1 = cljs.core.next.call(null,seq35717);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic(G__35718,seq35717__$1);
});})(ufv___35722,output_schema35711_35723,input_schema35712_35724,input_checker35713_35725,output_checker35714_35726))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.well),schema.core.make_fn_schema.call(null,output_schema35711_35723,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35712_35724], null)));
var ufv___35743 = schema.utils.use_fn_validation;
var output_schema35735_35744 = om_bootstrap.types.Component;
var input_schema35736_35745 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker35737_35746 = schema.core.checker.call(null,input_schema35736_35745);
var output_checker35738_35747 = schema.core.checker.call(null,output_schema35735_35744);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   A simple shell for an h1 to appropriately space out and segment
 *   sections of content on a page. It can utilize the h1’s default small
 *   element, as well as most other components (with additional styles).
 */
om_bootstrap.random.page_header = ((function (ufv___35743,output_schema35735_35744,input_schema35736_35745,input_checker35737_35746,output_checker35738_35747){
return (function om_bootstrap$random$page_header(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35748 = arguments.length;
var i__7480__auto___35749 = (0);
while(true){
if((i__7480__auto___35749 < len__7479__auto___35748)){
args__7486__auto__.push((arguments[i__7480__auto___35749]));

var G__35750 = (i__7480__auto___35749 + (1));
i__7480__auto___35749 = G__35750;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35743,output_schema35735_35744,input_schema35736_35745,input_checker35737_35746,output_checker35738_35747))
;

om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35743,output_schema35735_35744,input_schema35736_35745,input_checker35737_35746,output_checker35738_35747){
return (function (G__35739,rest35740){
var validate__8009__auto__ = ufv___35743.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35751 = cljs.core.list_STAR_.call(null,G__35739,rest35740);
var temp__4657__auto___35752 = input_checker35737_35746.call(null,args__8010__auto___35751);
if(cljs.core.truth_(temp__4657__auto___35752)){
var error__8011__auto___35753 = temp__4657__auto___35752;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__8011__auto___35753)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35736_35745,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35751,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35753], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35739;
var children = rest35740;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35754 = output_checker35738_35747.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35754)){
var error__8011__auto___35755 = temp__4657__auto___35754;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__8011__auto___35755)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35735_35744,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35755], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35743,output_schema35735_35744,input_schema35736_35745,input_checker35737_35746,output_checker35738_35747))
;

om_bootstrap.random.page_header.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.page_header.cljs$lang$applyTo = ((function (ufv___35743,output_schema35735_35744,input_schema35736_35745,input_checker35737_35746,output_checker35738_35747){
return (function (seq35741){
var G__35742 = cljs.core.first.call(null,seq35741);
var seq35741__$1 = cljs.core.next.call(null,seq35741);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic(G__35742,seq35741__$1);
});})(ufv___35743,output_schema35735_35744,input_schema35736_35745,input_checker35737_35746,output_checker35738_35747))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.page_header),schema.core.make_fn_schema.call(null,output_schema35735_35744,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35736_35745], null)));
om_bootstrap.random.Placement = schema.core.enum$.call(null,"top","right","bottom","left");
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___35767 = schema.utils.use_fn_validation;
var output_schema35756_35768 = om_bootstrap.types.Component;
var input_schema35757_35769 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.ToolTip,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ToolTip","ToolTip",1279361896,null)], null))),schema.core.Any], null);
var input_checker35758_35770 = schema.core.checker.call(null,input_schema35757_35769);
var output_checker35759_35771 = schema.core.checker.call(null,output_schema35756_35768);
/**
 * Inputs: [opts :- ToolTip & children]
 *   Returns: t/Component
 */
om_bootstrap.random.tooltip = ((function (ufv___35767,output_schema35756_35768,input_schema35757_35769,input_checker35758_35770,output_checker35759_35771){
return (function om_bootstrap$random$tooltip(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35772 = arguments.length;
var i__7480__auto___35773 = (0);
while(true){
if((i__7480__auto___35773 < len__7479__auto___35772)){
args__7486__auto__.push((arguments[i__7480__auto___35773]));

var G__35774 = (i__7480__auto___35773 + (1));
i__7480__auto___35773 = G__35774;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35767,output_schema35756_35768,input_schema35757_35769,input_checker35758_35770,output_checker35759_35771))
;

om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35767,output_schema35756_35768,input_schema35757_35769,input_checker35758_35770,output_checker35759_35771){
return (function (G__35760,rest35761){
var validate__8009__auto__ = ufv___35767.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35775 = cljs.core.list_STAR_.call(null,G__35760,rest35761);
var temp__4657__auto___35776 = input_checker35758_35770.call(null,args__8010__auto___35775);
if(cljs.core.truth_(temp__4657__auto___35776)){
var error__8011__auto___35777 = temp__4657__auto___35776;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35777)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35757_35769,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35775,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35777], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35760;
var children = rest35761;
while(true){
var vec__35764 = om_bootstrap.types.separate.call(null,om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__35764,(0),null);
var _ = cljs.core.nth.call(null,vec__35764,(1),null);
var classes = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__6404__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);
return cljs.core.apply.call(null,React.DOM.div,({"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes)), "style": ({"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs))})}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div(({"className": "tooltip-arrow", "style": ({"left": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs)), "top": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs))})})),cljs.core.apply.call(null,React.DOM.div,({"className": "tooltip-inner"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35778 = output_checker35759_35771.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35778)){
var error__8011__auto___35779 = temp__4657__auto___35778;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35779)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35756_35768,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35779], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35767,output_schema35756_35768,input_schema35757_35769,input_checker35758_35770,output_checker35759_35771))
;

om_bootstrap.random.tooltip.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.tooltip.cljs$lang$applyTo = ((function (ufv___35767,output_schema35756_35768,input_schema35757_35769,input_checker35758_35770,output_checker35759_35771){
return (function (seq35762){
var G__35763 = cljs.core.first.call(null,seq35762);
var seq35762__$1 = cljs.core.next.call(null,seq35762);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic(G__35763,seq35762__$1);
});})(ufv___35767,output_schema35756_35768,input_schema35757_35769,input_checker35758_35770,output_checker35759_35771))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.tooltip),schema.core.make_fn_schema.call(null,output_schema35756_35768,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35757_35769], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__22956__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__22956__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);

return descriptor__22956__auto__;
})();

var component_fnk__22985__auto___35808 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema35785 = schema.core.Any;
var input_schema35786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map35783","map35783",-74377714,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker35787 = schema.core.checker.call(null,input_schema35786);
var output_checker35788 = schema.core.checker.call(null,output_schema35785);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788){
return (function om_bootstrap$random$constructor35781(G__35789){
var validate__8009__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35809 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35789], null);
var temp__4657__auto___35810 = input_checker35787.call(null,args__8010__auto___35809);
if(cljs.core.truth_(temp__4657__auto___35810)){
var error__8011__auto___35811 = temp__4657__auto___35810;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor35781","constructor35781",1592907237,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35811)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35786,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35809,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35811], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var map35783 = G__35789;
while(true){
if(cljs.core.map_QMARK_.call(null,map35783)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map35783)));
}

var map35784 = plumbing.fnk.schema.safe_get.call(null,map35783,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var bs = plumbing.fnk.schema.safe_get.call(null,map35784,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var props = plumbing.fnk.schema.safe_get.call(null,map35784,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map35784,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map35783,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.random.t_om_bootstrap$random35794 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.random.t_om_bootstrap$random35794 = (function (output_checker35788,input_schema35786,owner,constructor35781,output_schema35785,props,children,map35783,input_checker35787,validate__8009__auto__,G__35789,ufv__,map35784,bs,meta35795){
this.output_checker35788 = output_checker35788;
this.input_schema35786 = input_schema35786;
this.owner = owner;
this.constructor35781 = constructor35781;
this.output_schema35785 = output_schema35785;
this.props = props;
this.children = children;
this.map35783 = map35783;
this.input_checker35787 = input_checker35787;
this.validate__8009__auto__ = validate__8009__auto__;
this.G__35789 = G__35789;
this.ufv__ = ufv__;
this.map35784 = map35784;
this.bs = bs;
this.meta35795 = meta35795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.random.t_om_bootstrap$random35794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map35784,validate__8009__auto__,ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788){
return (function (_35796,meta35795__$1){
var self__ = this;
var _35796__$1 = this;
return (new om_bootstrap.random.t_om_bootstrap$random35794(self__.output_checker35788,self__.input_schema35786,self__.owner,self__.constructor35781,self__.output_schema35785,self__.props,self__.children,self__.map35783,self__.input_checker35787,self__.validate__8009__auto__,self__.G__35789,self__.ufv__,self__.map35784,self__.bs,meta35795__$1));
});})(owner,children,props,bs,map35784,validate__8009__auto__,ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788))
;

om_bootstrap.random.t_om_bootstrap$random35794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map35784,validate__8009__auto__,ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788){
return (function (_35796){
var self__ = this;
var _35796__$1 = this;
return self__.meta35795;
});})(owner,children,props,bs,map35784,validate__8009__auto__,ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788))
;

om_bootstrap.random.t_om_bootstrap$random35794.prototype.om$core$IDisplayName$ = true;

om_bootstrap.random.t_om_bootstrap$random35794.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map35784,validate__8009__auto__,ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788){
return (function (_){
var self__ = this;
var ___$1 = this;
return "alert*";
});})(owner,children,props,bs,map35784,validate__8009__auto__,ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788))
;

om_bootstrap.random.t_om_bootstrap$random35794.prototype.om$core$IDidMount$ = true;

om_bootstrap.random.t_om_bootstrap$random35794.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map35784,validate__8009__auto__,ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);
if(cljs.core.truth_(and__6392__auto__)){
return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else {
return and__6392__auto__;
}
})())){
var G__35797 = self__.owner;
G__35797.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));

return G__35797;
} else {
return null;
}
});})(owner,children,props,bs,map35784,validate__8009__auto__,ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788))
;

om_bootstrap.random.t_om_bootstrap$random35794.prototype.om$core$IRender$ = true;

om_bootstrap.random.t_om_bootstrap$random35794.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map35784,validate__8009__auto__,ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788){
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
});})(owner,children,props,bs,map35784,validate__8009__auto__,ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788))
;

om_bootstrap.random.t_om_bootstrap$random35794.getBasis = ((function (owner,children,props,bs,map35784,validate__8009__auto__,ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-checker35788","output-checker35788",1283471104,null),new cljs.core.Symbol(null,"input-schema35786","input-schema35786",-1934454364,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor35781","constructor35781",1592907237,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema35785","output-schema35785",-967364186,null),cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map35783","map35783",-74377714,null),new cljs.core.Symbol(null,"input-checker35787","input-checker35787",-1777548204,null),new cljs.core.Symbol(null,"validate__8009__auto__","validate__8009__auto__",-1286401962,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__35789","G__35789",701553689,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map35784","map35784",-258579651,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"bs","bs",-906042210,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"meta35795","meta35795",1942637930,null)], null);
});})(owner,children,props,bs,map35784,validate__8009__auto__,ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788))
;

om_bootstrap.random.t_om_bootstrap$random35794.cljs$lang$type = true;

om_bootstrap.random.t_om_bootstrap$random35794.cljs$lang$ctorStr = "om-bootstrap.random/t_om_bootstrap$random35794";

om_bootstrap.random.t_om_bootstrap$random35794.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map35784,validate__8009__auto__,ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"om-bootstrap.random/t_om_bootstrap$random35794");
});})(owner,children,props,bs,map35784,validate__8009__auto__,ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788))
;

om_bootstrap.random.__GT_t_om_bootstrap$random35794 = ((function (owner,children,props,bs,map35784,validate__8009__auto__,ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788){
return (function om_bootstrap$random$constructor35781_$___GT_t_om_bootstrap$random35794(output_checker35788__$1,input_schema35786__$1,owner__$1,constructor35781__$1,output_schema35785__$1,props__$1,children__$1,map35783__$1,input_checker35787__$1,validate__8009__auto____$1,G__35789__$1,ufv____$1,map35784__$1,bs__$1,meta35795){
return (new om_bootstrap.random.t_om_bootstrap$random35794(output_checker35788__$1,input_schema35786__$1,owner__$1,constructor35781__$1,output_schema35785__$1,props__$1,children__$1,map35783__$1,input_checker35787__$1,validate__8009__auto____$1,G__35789__$1,ufv____$1,map35784__$1,bs__$1,meta35795));
});})(owner,children,props,bs,map35784,validate__8009__auto__,ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788))
;

}

return (new om_bootstrap.random.t_om_bootstrap$random35794(output_checker35788,input_schema35786,owner,om_bootstrap$random$constructor35781,output_schema35785,props,children,map35783,input_checker35787,validate__8009__auto__,G__35789,ufv__,map35784,bs,null));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35812 = output_checker35788.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35812)){
var error__8011__auto___35813 = temp__4657__auto___35812;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor35781","constructor35781",1592907237,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35813)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35785,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35813], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv__,output_schema35785,input_schema35786,input_checker35787,output_checker35788))
,schema.core.make_fn_schema.call(null,output_schema35785,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35786], null)));
})();
/**
 * Renders the alert component with timeout mixed in. TODO: This
 * should probably use the component macro and be defined inline under
 * the alert function. No need for a separate name.
 */
om_bootstrap.random.alert_STAR_ = ((function (component_fnk__22985__auto___35808){
return (function om_bootstrap$random$alert_STAR_(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35814 = arguments.length;
var i__7480__auto___35815 = (0);
while(true){
if((i__7480__auto___35815 < len__7479__auto___35814)){
args__7486__auto__.push((arguments[i__7480__auto___35815]));

var G__35816 = (i__7480__auto___35815 + (1));
i__7480__auto___35815 = G__35816;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((2) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((2)),(0),null)):null);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7487__auto__);
});})(component_fnk__22985__auto___35808))
;

om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__22985__auto___35808){
return (function (data__22986__auto__,owner35780,p__35801){
var vec__35802 = p__35801;
var opts__22987__auto__ = cljs.core.nth.call(null,vec__35802,(0),null);
return component_fnk__22985__auto___35808.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__22987__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner35780,new cljs.core.Keyword(null,"data","data",-232669377),data__22986__auto__], null));
});})(component_fnk__22985__auto___35808))
;

om_bootstrap.random.alert_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.random.alert_STAR_.cljs$lang$applyTo = ((function (component_fnk__22985__auto___35808){
return (function (seq35798){
var G__35799 = cljs.core.first.call(null,seq35798);
var seq35798__$1 = cljs.core.next.call(null,seq35798);
var G__35800 = cljs.core.first.call(null,seq35798__$1);
var seq35798__$2 = cljs.core.next.call(null,seq35798__$1);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__35799,G__35800,seq35798__$2);
});})(component_fnk__22985__auto___35808))
;


om_bootstrap.random.__GT_alert_STAR_ = (function om_bootstrap$random$__GT_alert_STAR_(var_args){
var args35805 = [];
var len__7479__auto___35817 = arguments.length;
var i__7480__auto___35818 = (0);
while(true){
if((i__7480__auto___35818 < len__7479__auto___35817)){
args35805.push((arguments[i__7480__auto___35818]));

var G__35819 = (i__7480__auto___35818 + (1));
i__7480__auto___35818 = G__35819;
continue;
} else {
}
break;
}

var G__35807 = args35805.length;
switch (G__35807) {
case 1:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35805.length)].join('')));

}
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22954__auto__){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__22954__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22954__auto__,m35782){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__22954__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m35782));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___35832 = schema.utils.use_fn_validation;
var output_schema35821_35833 = om_bootstrap.types.Component;
var input_schema35822_35834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Alert,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Alert","Alert",231771408,null)], null))),schema.core.Any], null);
var input_checker35823_35835 = schema.core.checker.call(null,input_schema35822_35834);
var output_checker35824_35836 = schema.core.checker.call(null,output_schema35821_35833);
/**
 * Inputs: [opts :- Alert & children]
 *   Returns: t/Component
 * 
 *   Wrapper for the alert component to allow a better user interface.
 */
om_bootstrap.random.alert = ((function (ufv___35832,output_schema35821_35833,input_schema35822_35834,input_checker35823_35835,output_checker35824_35836){
return (function om_bootstrap$random$alert(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35837 = arguments.length;
var i__7480__auto___35838 = (0);
while(true){
if((i__7480__auto___35838 < len__7479__auto___35837)){
args__7486__auto__.push((arguments[i__7480__auto___35838]));

var G__35839 = (i__7480__auto___35838 + (1));
i__7480__auto___35838 = G__35839;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35832,output_schema35821_35833,input_schema35822_35834,input_checker35823_35835,output_checker35824_35836))
;

om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35832,output_schema35821_35833,input_schema35822_35834,input_checker35823_35835,output_checker35824_35836){
return (function (G__35825,rest35826){
var validate__8009__auto__ = ufv___35832.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35840 = cljs.core.list_STAR_.call(null,G__35825,rest35826);
var temp__4657__auto___35841 = input_checker35823_35835.call(null,args__8010__auto___35840);
if(cljs.core.truth_(temp__4657__auto___35841)){
var error__8011__auto___35842 = temp__4657__auto___35841;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__8011__auto___35842)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35822_35834,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35840,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35842], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35825;
var children = rest35826;
while(true){
var vec__35829 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);
var bs = cljs.core.nth.call(null,vec__35829,(0),null);
var props = cljs.core.nth.call(null,vec__35829,(1),null);
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35843 = output_checker35824_35836.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35843)){
var error__8011__auto___35844 = temp__4657__auto___35843;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__8011__auto___35844)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35821_35833,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35844], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35832,output_schema35821_35833,input_schema35822_35834,input_checker35823_35835,output_checker35824_35836))
;

om_bootstrap.random.alert.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.alert.cljs$lang$applyTo = ((function (ufv___35832,output_schema35821_35833,input_schema35822_35834,input_checker35823_35835,output_checker35824_35836){
return (function (seq35827){
var G__35828 = cljs.core.first.call(null,seq35827);
var seq35827__$1 = cljs.core.next.call(null,seq35827);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic(G__35828,seq35827__$1);
});})(ufv___35832,output_schema35821_35833,input_schema35822_35834,input_checker35823_35835,output_checker35824_35836))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.alert),schema.core.make_fn_schema.call(null,output_schema35821_35833,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35822_35834], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___35856 = schema.utils.use_fn_validation;
var output_schema35845_35857 = om_bootstrap.types.Component;
var input_schema35846_35858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Popover,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Popover","Popover",-1480406690,null)], null))),schema.core.Any], null);
var input_checker35847_35859 = schema.core.checker.call(null,input_schema35846_35858);
var output_checker35848_35860 = schema.core.checker.call(null,output_schema35845_35857);
/**
 * Inputs: [opts :- Popover & children]
 *   Returns: t/Component
 */
om_bootstrap.random.popover = ((function (ufv___35856,output_schema35845_35857,input_schema35846_35858,input_checker35847_35859,output_checker35848_35860){
return (function om_bootstrap$random$popover(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35861 = arguments.length;
var i__7480__auto___35862 = (0);
while(true){
if((i__7480__auto___35862 < len__7479__auto___35861)){
args__7486__auto__.push((arguments[i__7480__auto___35862]));

var G__35863 = (i__7480__auto___35862 + (1));
i__7480__auto___35862 = G__35863;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35856,output_schema35845_35857,input_schema35846_35858,input_checker35847_35859,output_checker35848_35860))
;

om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35856,output_schema35845_35857,input_schema35846_35858,input_checker35847_35859,output_checker35848_35860){
return (function (G__35849,rest35850){
var validate__8009__auto__ = ufv___35856.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35864 = cljs.core.list_STAR_.call(null,G__35849,rest35850);
var temp__4657__auto___35865 = input_checker35847_35859.call(null,args__8010__auto___35864);
if(cljs.core.truth_(temp__4657__auto___35865)){
var error__8011__auto___35866 = temp__4657__auto___35865;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35866)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35846_35858,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35864,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35866], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35849;
var children = rest35850;
while(true){
var vec__35853 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__35853,(0),null);
var _ = cljs.core.nth.call(null,vec__35853,(1),null);
var classes = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__6404__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
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
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35867 = output_checker35848_35860.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35867)){
var error__8011__auto___35868 = temp__4657__auto___35867;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35868)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35845_35857,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35868], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35856,output_schema35845_35857,input_schema35846_35858,input_checker35847_35859,output_checker35848_35860))
;

om_bootstrap.random.popover.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.popover.cljs$lang$applyTo = ((function (ufv___35856,output_schema35845_35857,input_schema35846_35858,input_checker35847_35859,output_checker35848_35860){
return (function (seq35851){
var G__35852 = cljs.core.first.call(null,seq35851);
var seq35851__$1 = cljs.core.next.call(null,seq35851);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic(G__35852,seq35851__$1);
});})(ufv___35856,output_schema35845_35857,input_schema35846_35858,input_checker35847_35859,output_checker35848_35860))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.popover),schema.core.make_fn_schema.call(null,output_schema35845_35857,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35846_35858], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___35880 = schema.utils.use_fn_validation;
var output_schema35869_35881 = om_bootstrap.types.Component;
var input_schema35870_35882 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Badge,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Badge","Badge",1932684841,null)], null))),schema.core.Any], null);
var input_checker35871_35883 = schema.core.checker.call(null,input_schema35870_35882);
var output_checker35872_35884 = schema.core.checker.call(null,output_schema35869_35881);
/**
 * Inputs: [opts :- Badge & children]
 *   Returns: t/Component
 */
om_bootstrap.random.badge = ((function (ufv___35880,output_schema35869_35881,input_schema35870_35882,input_checker35871_35883,output_checker35872_35884){
return (function om_bootstrap$random$badge(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35885 = arguments.length;
var i__7480__auto___35886 = (0);
while(true){
if((i__7480__auto___35886 < len__7479__auto___35885)){
args__7486__auto__.push((arguments[i__7480__auto___35886]));

var G__35887 = (i__7480__auto___35886 + (1));
i__7480__auto___35886 = G__35887;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35880,output_schema35869_35881,input_schema35870_35882,input_checker35871_35883,output_checker35872_35884))
;

om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35880,output_schema35869_35881,input_schema35870_35882,input_checker35871_35883,output_checker35872_35884){
return (function (G__35873,rest35874){
var validate__8009__auto__ = ufv___35880.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35888 = cljs.core.list_STAR_.call(null,G__35873,rest35874);
var temp__4657__auto___35889 = input_checker35871_35883.call(null,args__8010__auto___35888);
if(cljs.core.truth_(temp__4657__auto___35889)){
var error__8011__auto___35890 = temp__4657__auto___35889;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35890)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35870_35882,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35888,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35890], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35873;
var children = rest35874;
while(true){
var vec__35877 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Badge,opts);
var bs = cljs.core.nth.call(null,vec__35877,(0),null);
var props = cljs.core.nth.call(null,vec__35877,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_.call(null,children)], null);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35891 = output_checker35872_35884.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35891)){
var error__8011__auto___35892 = temp__4657__auto___35891;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35892)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35869_35881,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35892], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35880,output_schema35869_35881,input_schema35870_35882,input_checker35871_35883,output_checker35872_35884))
;

om_bootstrap.random.badge.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.badge.cljs$lang$applyTo = ((function (ufv___35880,output_schema35869_35881,input_schema35870_35882,input_checker35871_35883,output_checker35872_35884){
return (function (seq35875){
var G__35876 = cljs.core.first.call(null,seq35875);
var seq35875__$1 = cljs.core.next.call(null,seq35875);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic(G__35876,seq35875__$1);
});})(ufv___35880,output_schema35869_35881,input_schema35870_35882,input_checker35871_35883,output_checker35872_35884))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.badge),schema.core.make_fn_schema.call(null,output_schema35869_35881,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35870_35882], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___35904 = schema.utils.use_fn_validation;
var output_schema35893_35905 = om_bootstrap.types.Component;
var input_schema35894_35906 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Glyphicon,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Glyphicon","Glyphicon",-683810897,null)], null))),schema.core.Any], null);
var input_checker35895_35907 = schema.core.checker.call(null,input_schema35894_35906);
var output_checker35896_35908 = schema.core.checker.call(null,output_schema35893_35905);
/**
 * Inputs: [opts :- Glyphicon & children]
 *   Returns: t/Component
 */
om_bootstrap.random.glyphicon = ((function (ufv___35904,output_schema35893_35905,input_schema35894_35906,input_checker35895_35907,output_checker35896_35908){
return (function om_bootstrap$random$glyphicon(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35909 = arguments.length;
var i__7480__auto___35910 = (0);
while(true){
if((i__7480__auto___35910 < len__7479__auto___35909)){
args__7486__auto__.push((arguments[i__7480__auto___35910]));

var G__35911 = (i__7480__auto___35910 + (1));
i__7480__auto___35910 = G__35911;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35904,output_schema35893_35905,input_schema35894_35906,input_checker35895_35907,output_checker35896_35908))
;

om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35904,output_schema35893_35905,input_schema35894_35906,input_checker35895_35907,output_checker35896_35908){
return (function (G__35897,rest35898){
var validate__8009__auto__ = ufv___35904.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35912 = cljs.core.list_STAR_.call(null,G__35897,rest35898);
var temp__4657__auto___35913 = input_checker35895_35907.call(null,args__8010__auto___35912);
if(cljs.core.truth_(temp__4657__auto___35913)){
var error__8011__auto___35914 = temp__4657__auto___35913;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35914)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35894_35906,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35912,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35914], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35897;
var children = rest35898;
while(true){
var vec__35901 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));
var bs = cljs.core.nth.call(null,vec__35901,(0),null);
var props = cljs.core.nth.call(null,vec__35901,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),[cljs.core.str("glyphicon-"),cljs.core.str(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))].join(''),true);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35915 = output_checker35896_35908.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35915)){
var error__8011__auto___35916 = temp__4657__auto___35915;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35916)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35893_35905,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35916], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35904,output_schema35893_35905,input_schema35894_35906,input_checker35895_35907,output_checker35896_35908))
;

om_bootstrap.random.glyphicon.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.glyphicon.cljs$lang$applyTo = ((function (ufv___35904,output_schema35893_35905,input_schema35894_35906,input_checker35895_35907,output_checker35896_35908){
return (function (seq35899){
var G__35900 = cljs.core.first.call(null,seq35899);
var seq35899__$1 = cljs.core.next.call(null,seq35899);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic(G__35900,seq35899__$1);
});})(ufv___35904,output_schema35893_35905,input_schema35894_35906,input_checker35895_35907,output_checker35896_35908))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.glyphicon),schema.core.make_fn_schema.call(null,output_schema35893_35905,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35894_35906], null)));

//# sourceMappingURL=random.js.map