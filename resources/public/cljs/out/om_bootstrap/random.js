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
var ufv___83439 = schema.utils.use_fn_validation;
var output_schema83431_83440 = om_bootstrap.types.Component;
var input_schema83432_83441 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker83433_83442 = schema.core.checker.call(null,input_schema83432_83441);
var output_checker83434_83443 = schema.core.checker.call(null,output_schema83431_83440);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   A lightweight, flexible component that can optionally extend the
 * entire viewport to showcase key content on your site.
 */
om_bootstrap.random.jumbotron = ((function (ufv___83439,output_schema83431_83440,input_schema83432_83441,input_checker83433_83442,output_checker83434_83443){
return (function om_bootstrap$random$jumbotron(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83444 = arguments.length;
var i__25827__auto___83445 = (0);
while(true){
if((i__25827__auto___83445 < len__25826__auto___83444)){
args__25833__auto__.push((arguments[i__25827__auto___83445]));

var G__83446 = (i__25827__auto___83445 + (1));
i__25827__auto___83445 = G__83446;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83439,output_schema83431_83440,input_schema83432_83441,input_checker83433_83442,output_checker83434_83443))
;

om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83439,output_schema83431_83440,input_schema83432_83441,input_checker83433_83442,output_checker83434_83443){
return (function (G__83435,rest83436){
var validate__38286__auto__ = ufv___83439.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83447 = cljs.core.list_STAR_.call(null,G__83435,rest83436);
var temp__4657__auto___83448 = input_checker83433_83442.call(null,args__38287__auto___83447);
if(cljs.core.truth_(temp__4657__auto___83448)){
var error__38288__auto___83449 = temp__4657__auto___83448;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__38288__auto___83449)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83432_83441,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83447,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83449], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83435;
var children = rest83436;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83450 = output_checker83434_83443.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83450)){
var error__38288__auto___83451 = temp__4657__auto___83450;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__38288__auto___83451)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83431_83440,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83451], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83439,output_schema83431_83440,input_schema83432_83441,input_checker83433_83442,output_checker83434_83443))
;

om_bootstrap.random.jumbotron.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.jumbotron.cljs$lang$applyTo = ((function (ufv___83439,output_schema83431_83440,input_schema83432_83441,input_checker83433_83442,output_checker83434_83443){
return (function (seq83437){
var G__83438 = cljs.core.first.call(null,seq83437);
var seq83437__$1 = cljs.core.next.call(null,seq83437);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic(G__83438,seq83437__$1);
});})(ufv___83439,output_schema83431_83440,input_schema83432_83441,input_checker83433_83442,output_checker83434_83443))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.jumbotron),schema.core.make_fn_schema.call(null,output_schema83431_83440,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83432_83441], null)));
var ufv___83463 = schema.utils.use_fn_validation;
var output_schema83452_83464 = om_bootstrap.types.Component;
var input_schema83453_83465 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker83454_83466 = schema.core.checker.call(null,input_schema83453_83465);
var output_checker83455_83467 = schema.core.checker.call(null,output_schema83452_83464);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Create a (label {} "label!") to show highlight information.
 */
om_bootstrap.random.label = ((function (ufv___83463,output_schema83452_83464,input_schema83453_83465,input_checker83454_83466,output_checker83455_83467){
return (function om_bootstrap$random$label(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83468 = arguments.length;
var i__25827__auto___83469 = (0);
while(true){
if((i__25827__auto___83469 < len__25826__auto___83468)){
args__25833__auto__.push((arguments[i__25827__auto___83469]));

var G__83470 = (i__25827__auto___83469 + (1));
i__25827__auto___83469 = G__83470;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83463,output_schema83452_83464,input_schema83453_83465,input_checker83454_83466,output_checker83455_83467))
;

om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83463,output_schema83452_83464,input_schema83453_83465,input_checker83454_83466,output_checker83455_83467){
return (function (G__83456,rest83457){
var validate__38286__auto__ = ufv___83463.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83471 = cljs.core.list_STAR_.call(null,G__83456,rest83457);
var temp__4657__auto___83472 = input_checker83454_83466.call(null,args__38287__auto___83471);
if(cljs.core.truth_(temp__4657__auto___83472)){
var error__38288__auto___83473 = temp__4657__auto___83472;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__38288__auto___83473)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83453_83465,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83471,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83473], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83456;
var children = rest83457;
while(true){
var vec__83460 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__83460,(0),null);
var props = cljs.core.nth.call(null,vec__83460,(1),null);
var classes = om_bootstrap.types.bs_class_set.call(null,bs);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83474 = output_checker83455_83467.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83474)){
var error__38288__auto___83475 = temp__4657__auto___83474;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__38288__auto___83475)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83452_83464,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83475], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83463,output_schema83452_83464,input_schema83453_83465,input_checker83454_83466,output_checker83455_83467))
;

om_bootstrap.random.label.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.label.cljs$lang$applyTo = ((function (ufv___83463,output_schema83452_83464,input_schema83453_83465,input_checker83454_83466,output_checker83455_83467){
return (function (seq83458){
var G__83459 = cljs.core.first.call(null,seq83458);
var seq83458__$1 = cljs.core.next.call(null,seq83458);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(G__83459,seq83458__$1);
});})(ufv___83463,output_schema83452_83464,input_schema83453_83465,input_checker83454_83466,output_checker83455_83467))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.label),schema.core.make_fn_schema.call(null,output_schema83452_83464,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83453_83465], null)));
var ufv___83487 = schema.utils.use_fn_validation;
var output_schema83476_83488 = om_bootstrap.types.Component;
var input_schema83477_83489 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker83478_83490 = schema.core.checker.call(null,input_schema83477_83489);
var output_checker83479_83491 = schema.core.checker.call(null,output_schema83476_83488);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Use the well as a simple effect on an element to give it an inset effect.
 */
om_bootstrap.random.well = ((function (ufv___83487,output_schema83476_83488,input_schema83477_83489,input_checker83478_83490,output_checker83479_83491){
return (function om_bootstrap$random$well(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83492 = arguments.length;
var i__25827__auto___83493 = (0);
while(true){
if((i__25827__auto___83493 < len__25826__auto___83492)){
args__25833__auto__.push((arguments[i__25827__auto___83493]));

var G__83494 = (i__25827__auto___83493 + (1));
i__25827__auto___83493 = G__83494;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83487,output_schema83476_83488,input_schema83477_83489,input_checker83478_83490,output_checker83479_83491))
;

om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83487,output_schema83476_83488,input_schema83477_83489,input_checker83478_83490,output_checker83479_83491){
return (function (G__83480,rest83481){
var validate__38286__auto__ = ufv___83487.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83495 = cljs.core.list_STAR_.call(null,G__83480,rest83481);
var temp__4657__auto___83496 = input_checker83478_83490.call(null,args__38287__auto___83495);
if(cljs.core.truth_(temp__4657__auto___83496)){
var error__38288__auto___83497 = temp__4657__auto___83496;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__38288__auto___83497)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83477_83489,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83495,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83497], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83480;
var children = rest83481;
while(true){
var vec__83484 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));
var bs = cljs.core.nth.call(null,vec__83484,(0),null);
var props = cljs.core.nth.call(null,vec__83484,(1),null);
var class$ = om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83498 = output_checker83479_83491.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83498)){
var error__38288__auto___83499 = temp__4657__auto___83498;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__38288__auto___83499)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83476_83488,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83499], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83487,output_schema83476_83488,input_schema83477_83489,input_checker83478_83490,output_checker83479_83491))
;

om_bootstrap.random.well.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.well.cljs$lang$applyTo = ((function (ufv___83487,output_schema83476_83488,input_schema83477_83489,input_checker83478_83490,output_checker83479_83491){
return (function (seq83482){
var G__83483 = cljs.core.first.call(null,seq83482);
var seq83482__$1 = cljs.core.next.call(null,seq83482);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic(G__83483,seq83482__$1);
});})(ufv___83487,output_schema83476_83488,input_schema83477_83489,input_checker83478_83490,output_checker83479_83491))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.well),schema.core.make_fn_schema.call(null,output_schema83476_83488,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83477_83489], null)));
var ufv___83508 = schema.utils.use_fn_validation;
var output_schema83500_83509 = om_bootstrap.types.Component;
var input_schema83501_83510 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker83502_83511 = schema.core.checker.call(null,input_schema83501_83510);
var output_checker83503_83512 = schema.core.checker.call(null,output_schema83500_83509);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   A simple shell for an h1 to appropriately space out and segment
 *   sections of content on a page. It can utilize the h1’s default small
 *   element, as well as most other components (with additional styles).
 */
om_bootstrap.random.page_header = ((function (ufv___83508,output_schema83500_83509,input_schema83501_83510,input_checker83502_83511,output_checker83503_83512){
return (function om_bootstrap$random$page_header(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83513 = arguments.length;
var i__25827__auto___83514 = (0);
while(true){
if((i__25827__auto___83514 < len__25826__auto___83513)){
args__25833__auto__.push((arguments[i__25827__auto___83514]));

var G__83515 = (i__25827__auto___83514 + (1));
i__25827__auto___83514 = G__83515;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83508,output_schema83500_83509,input_schema83501_83510,input_checker83502_83511,output_checker83503_83512))
;

om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83508,output_schema83500_83509,input_schema83501_83510,input_checker83502_83511,output_checker83503_83512){
return (function (G__83504,rest83505){
var validate__38286__auto__ = ufv___83508.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83516 = cljs.core.list_STAR_.call(null,G__83504,rest83505);
var temp__4657__auto___83517 = input_checker83502_83511.call(null,args__38287__auto___83516);
if(cljs.core.truth_(temp__4657__auto___83517)){
var error__38288__auto___83518 = temp__4657__auto___83517;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__38288__auto___83518)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83501_83510,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83516,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83518], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83504;
var children = rest83505;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83519 = output_checker83503_83512.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83519)){
var error__38288__auto___83520 = temp__4657__auto___83519;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__38288__auto___83520)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83500_83509,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83520], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83508,output_schema83500_83509,input_schema83501_83510,input_checker83502_83511,output_checker83503_83512))
;

om_bootstrap.random.page_header.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.page_header.cljs$lang$applyTo = ((function (ufv___83508,output_schema83500_83509,input_schema83501_83510,input_checker83502_83511,output_checker83503_83512){
return (function (seq83506){
var G__83507 = cljs.core.first.call(null,seq83506);
var seq83506__$1 = cljs.core.next.call(null,seq83506);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic(G__83507,seq83506__$1);
});})(ufv___83508,output_schema83500_83509,input_schema83501_83510,input_checker83502_83511,output_checker83503_83512))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.page_header),schema.core.make_fn_schema.call(null,output_schema83500_83509,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83501_83510], null)));
om_bootstrap.random.Placement = schema.core.enum$.call(null,"top","right","bottom","left");
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___83532 = schema.utils.use_fn_validation;
var output_schema83521_83533 = om_bootstrap.types.Component;
var input_schema83522_83534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.ToolTip,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ToolTip","ToolTip",1279361896,null)], null))),schema.core.Any], null);
var input_checker83523_83535 = schema.core.checker.call(null,input_schema83522_83534);
var output_checker83524_83536 = schema.core.checker.call(null,output_schema83521_83533);
/**
 * Inputs: [opts :- ToolTip & children]
 *   Returns: t/Component
 */
om_bootstrap.random.tooltip = ((function (ufv___83532,output_schema83521_83533,input_schema83522_83534,input_checker83523_83535,output_checker83524_83536){
return (function om_bootstrap$random$tooltip(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83537 = arguments.length;
var i__25827__auto___83538 = (0);
while(true){
if((i__25827__auto___83538 < len__25826__auto___83537)){
args__25833__auto__.push((arguments[i__25827__auto___83538]));

var G__83539 = (i__25827__auto___83538 + (1));
i__25827__auto___83538 = G__83539;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83532,output_schema83521_83533,input_schema83522_83534,input_checker83523_83535,output_checker83524_83536))
;

om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83532,output_schema83521_83533,input_schema83522_83534,input_checker83523_83535,output_checker83524_83536){
return (function (G__83525,rest83526){
var validate__38286__auto__ = ufv___83532.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83540 = cljs.core.list_STAR_.call(null,G__83525,rest83526);
var temp__4657__auto___83541 = input_checker83523_83535.call(null,args__38287__auto___83540);
if(cljs.core.truth_(temp__4657__auto___83541)){
var error__38288__auto___83542 = temp__4657__auto___83541;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83542)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83522_83534,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83540,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83542], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83525;
var children = rest83526;
while(true){
var vec__83529 = om_bootstrap.types.separate.call(null,om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__83529,(0),null);
var _ = cljs.core.nth.call(null,vec__83529,(1),null);
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
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83543 = output_checker83524_83536.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83543)){
var error__38288__auto___83544 = temp__4657__auto___83543;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83544)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83521_83533,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83544], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83532,output_schema83521_83533,input_schema83522_83534,input_checker83523_83535,output_checker83524_83536))
;

om_bootstrap.random.tooltip.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.tooltip.cljs$lang$applyTo = ((function (ufv___83532,output_schema83521_83533,input_schema83522_83534,input_checker83523_83535,output_checker83524_83536){
return (function (seq83527){
var G__83528 = cljs.core.first.call(null,seq83527);
var seq83527__$1 = cljs.core.next.call(null,seq83527);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic(G__83528,seq83527__$1);
});})(ufv___83532,output_schema83521_83533,input_schema83522_83534,input_checker83523_83535,output_checker83524_83536))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.tooltip),schema.core.make_fn_schema.call(null,output_schema83521_83533,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83522_83534], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__45350__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__45350__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);

return descriptor__45350__auto__;
})();

var component_fnk__45379__auto___83573 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema83550 = schema.core.Any;
var input_schema83551 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map83548","map83548",-730413848,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker83552 = schema.core.checker.call(null,input_schema83551);
var output_checker83553 = schema.core.checker.call(null,output_schema83550);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553){
return (function om_bootstrap$random$constructor83546(G__83554){
var validate__38286__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83574 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__83554], null);
var temp__4657__auto___83575 = input_checker83552.call(null,args__38287__auto___83574);
if(cljs.core.truth_(temp__4657__auto___83575)){
var error__38288__auto___83576 = temp__4657__auto___83575;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor83546","constructor83546",825494717,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83576)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83551,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83574,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83576], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var map83548 = G__83554;
while(true){
if(cljs.core.map_QMARK_.call(null,map83548)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map83548)));
}

var map83549 = plumbing.fnk.schema.safe_get.call(null,map83548,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var bs = plumbing.fnk.schema.safe_get.call(null,map83549,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var props = plumbing.fnk.schema.safe_get.call(null,map83549,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map83549,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map83548,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.random.t_om_bootstrap$random83559 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.random.t_om_bootstrap$random83559 = (function (validate__38286__auto__,owner,props,map83548,children,output_checker83553,map83549,G__83554,input_schema83551,constructor83546,ufv__,bs,output_schema83550,input_checker83552,meta83560){
this.validate__38286__auto__ = validate__38286__auto__;
this.owner = owner;
this.props = props;
this.map83548 = map83548;
this.children = children;
this.output_checker83553 = output_checker83553;
this.map83549 = map83549;
this.G__83554 = G__83554;
this.input_schema83551 = input_schema83551;
this.constructor83546 = constructor83546;
this.ufv__ = ufv__;
this.bs = bs;
this.output_schema83550 = output_schema83550;
this.input_checker83552 = input_checker83552;
this.meta83560 = meta83560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.random.t_om_bootstrap$random83559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map83549,validate__38286__auto__,ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553){
return (function (_83561,meta83560__$1){
var self__ = this;
var _83561__$1 = this;
return (new om_bootstrap.random.t_om_bootstrap$random83559(self__.validate__38286__auto__,self__.owner,self__.props,self__.map83548,self__.children,self__.output_checker83553,self__.map83549,self__.G__83554,self__.input_schema83551,self__.constructor83546,self__.ufv__,self__.bs,self__.output_schema83550,self__.input_checker83552,meta83560__$1));
});})(owner,children,props,bs,map83549,validate__38286__auto__,ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553))
;

om_bootstrap.random.t_om_bootstrap$random83559.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map83549,validate__38286__auto__,ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553){
return (function (_83561){
var self__ = this;
var _83561__$1 = this;
return self__.meta83560;
});})(owner,children,props,bs,map83549,validate__38286__auto__,ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553))
;

om_bootstrap.random.t_om_bootstrap$random83559.prototype.om$core$IDisplayName$ = true;

om_bootstrap.random.t_om_bootstrap$random83559.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map83549,validate__38286__auto__,ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553){
return (function (_){
var self__ = this;
var ___$1 = this;
return "alert*";
});})(owner,children,props,bs,map83549,validate__38286__auto__,ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553))
;

om_bootstrap.random.t_om_bootstrap$random83559.prototype.om$core$IDidMount$ = true;

om_bootstrap.random.t_om_bootstrap$random83559.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map83549,validate__38286__auto__,ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553){
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
var G__83562 = self__.owner;
G__83562.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));

return G__83562;
} else {
return null;
}
});})(owner,children,props,bs,map83549,validate__38286__auto__,ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553))
;

om_bootstrap.random.t_om_bootstrap$random83559.prototype.om$core$IRender$ = true;

om_bootstrap.random.t_om_bootstrap$random83559.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map83549,validate__38286__auto__,ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553){
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
});})(owner,children,props,bs,map83549,validate__38286__auto__,ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553))
;

om_bootstrap.random.t_om_bootstrap$random83559.getBasis = ((function (owner,children,props,bs,map83549,validate__38286__auto__,ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validate__38286__auto__","validate__38286__auto__",-478810592,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map83548","map83548",-730413848,null),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker83553","output-checker83553",-324785712,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map83549","map83549",-1942524428,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__83554","G__83554",603943636,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"input-schema83551","input-schema83551",-169876391,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor83546","constructor83546",825494717,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"bs","bs",-906042210,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema83550","output-schema83550",-474126050,null),new cljs.core.Symbol(null,"input-checker83552","input-checker83552",1579284830,null),new cljs.core.Symbol(null,"meta83560","meta83560",1759658494,null)], null);
});})(owner,children,props,bs,map83549,validate__38286__auto__,ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553))
;

om_bootstrap.random.t_om_bootstrap$random83559.cljs$lang$type = true;

om_bootstrap.random.t_om_bootstrap$random83559.cljs$lang$ctorStr = "om-bootstrap.random/t_om_bootstrap$random83559";

om_bootstrap.random.t_om_bootstrap$random83559.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map83549,validate__38286__auto__,ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-bootstrap.random/t_om_bootstrap$random83559");
});})(owner,children,props,bs,map83549,validate__38286__auto__,ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553))
;

om_bootstrap.random.__GT_t_om_bootstrap$random83559 = ((function (owner,children,props,bs,map83549,validate__38286__auto__,ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553){
return (function om_bootstrap$random$constructor83546_$___GT_t_om_bootstrap$random83559(validate__38286__auto____$1,owner__$1,props__$1,map83548__$1,children__$1,output_checker83553__$1,map83549__$1,G__83554__$1,input_schema83551__$1,constructor83546__$1,ufv____$1,bs__$1,output_schema83550__$1,input_checker83552__$1,meta83560){
return (new om_bootstrap.random.t_om_bootstrap$random83559(validate__38286__auto____$1,owner__$1,props__$1,map83548__$1,children__$1,output_checker83553__$1,map83549__$1,G__83554__$1,input_schema83551__$1,constructor83546__$1,ufv____$1,bs__$1,output_schema83550__$1,input_checker83552__$1,meta83560));
});})(owner,children,props,bs,map83549,validate__38286__auto__,ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553))
;

}

return (new om_bootstrap.random.t_om_bootstrap$random83559(validate__38286__auto__,owner,props,map83548,children,output_checker83553,map83549,G__83554,input_schema83551,om_bootstrap$random$constructor83546,ufv__,bs,output_schema83550,input_checker83552,null));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83577 = output_checker83553.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83577)){
var error__38288__auto___83578 = temp__4657__auto___83577;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor83546","constructor83546",825494717,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83578)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83550,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83578], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv__,output_schema83550,input_schema83551,input_checker83552,output_checker83553))
,schema.core.make_fn_schema.call(null,output_schema83550,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83551], null)));
})();
/**
 * Renders the alert component with timeout mixed in. TODO: This
 * should probably use the component macro and be defined inline under
 * the alert function. No need for a separate name.
 */
om_bootstrap.random.alert_STAR_ = ((function (component_fnk__45379__auto___83573){
return (function om_bootstrap$random$alert_STAR_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83579 = arguments.length;
var i__25827__auto___83580 = (0);
while(true){
if((i__25827__auto___83580 < len__25826__auto___83579)){
args__25833__auto__.push((arguments[i__25827__auto___83580]));

var G__83581 = (i__25827__auto___83580 + (1));
i__25827__auto___83580 = G__83581;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});})(component_fnk__45379__auto___83573))
;

om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__45379__auto___83573){
return (function (data__45380__auto__,owner83545,p__83566){
var vec__83567 = p__83566;
var opts__45381__auto__ = cljs.core.nth.call(null,vec__83567,(0),null);
return component_fnk__45379__auto___83573.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__45381__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner83545,new cljs.core.Keyword(null,"data","data",-232669377),data__45380__auto__], null));
});})(component_fnk__45379__auto___83573))
;

om_bootstrap.random.alert_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.random.alert_STAR_.cljs$lang$applyTo = ((function (component_fnk__45379__auto___83573){
return (function (seq83563){
var G__83564 = cljs.core.first.call(null,seq83563);
var seq83563__$1 = cljs.core.next.call(null,seq83563);
var G__83565 = cljs.core.first.call(null,seq83563__$1);
var seq83563__$2 = cljs.core.next.call(null,seq83563__$1);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__83564,G__83565,seq83563__$2);
});})(component_fnk__45379__auto___83573))
;


om_bootstrap.random.__GT_alert_STAR_ = (function om_bootstrap$random$__GT_alert_STAR_(var_args){
var args83570 = [];
var len__25826__auto___83582 = arguments.length;
var i__25827__auto___83583 = (0);
while(true){
if((i__25827__auto___83583 < len__25826__auto___83582)){
args83570.push((arguments[i__25827__auto___83583]));

var G__83584 = (i__25827__auto___83583 + (1));
i__25827__auto___83583 = G__83584;
continue;
} else {
}
break;
}

var G__83572 = args83570.length;
switch (G__83572) {
case 1:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83570.length)].join('')));

}
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__45348__auto__){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__45348__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__45348__auto__,m83547){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__45348__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m83547));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___83597 = schema.utils.use_fn_validation;
var output_schema83586_83598 = om_bootstrap.types.Component;
var input_schema83587_83599 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Alert,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Alert","Alert",231771408,null)], null))),schema.core.Any], null);
var input_checker83588_83600 = schema.core.checker.call(null,input_schema83587_83599);
var output_checker83589_83601 = schema.core.checker.call(null,output_schema83586_83598);
/**
 * Inputs: [opts :- Alert & children]
 *   Returns: t/Component
 * 
 *   Wrapper for the alert component to allow a better user interface.
 */
om_bootstrap.random.alert = ((function (ufv___83597,output_schema83586_83598,input_schema83587_83599,input_checker83588_83600,output_checker83589_83601){
return (function om_bootstrap$random$alert(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83602 = arguments.length;
var i__25827__auto___83603 = (0);
while(true){
if((i__25827__auto___83603 < len__25826__auto___83602)){
args__25833__auto__.push((arguments[i__25827__auto___83603]));

var G__83604 = (i__25827__auto___83603 + (1));
i__25827__auto___83603 = G__83604;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83597,output_schema83586_83598,input_schema83587_83599,input_checker83588_83600,output_checker83589_83601))
;

om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83597,output_schema83586_83598,input_schema83587_83599,input_checker83588_83600,output_checker83589_83601){
return (function (G__83590,rest83591){
var validate__38286__auto__ = ufv___83597.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83605 = cljs.core.list_STAR_.call(null,G__83590,rest83591);
var temp__4657__auto___83606 = input_checker83588_83600.call(null,args__38287__auto___83605);
if(cljs.core.truth_(temp__4657__auto___83606)){
var error__38288__auto___83607 = temp__4657__auto___83606;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__38288__auto___83607)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83587_83599,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83605,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83607], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83590;
var children = rest83591;
while(true){
var vec__83594 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);
var bs = cljs.core.nth.call(null,vec__83594,(0),null);
var props = cljs.core.nth.call(null,vec__83594,(1),null);
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83608 = output_checker83589_83601.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83608)){
var error__38288__auto___83609 = temp__4657__auto___83608;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__38288__auto___83609)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83586_83598,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83609], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83597,output_schema83586_83598,input_schema83587_83599,input_checker83588_83600,output_checker83589_83601))
;

om_bootstrap.random.alert.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.alert.cljs$lang$applyTo = ((function (ufv___83597,output_schema83586_83598,input_schema83587_83599,input_checker83588_83600,output_checker83589_83601){
return (function (seq83592){
var G__83593 = cljs.core.first.call(null,seq83592);
var seq83592__$1 = cljs.core.next.call(null,seq83592);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic(G__83593,seq83592__$1);
});})(ufv___83597,output_schema83586_83598,input_schema83587_83599,input_checker83588_83600,output_checker83589_83601))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.alert),schema.core.make_fn_schema.call(null,output_schema83586_83598,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83587_83599], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___83621 = schema.utils.use_fn_validation;
var output_schema83610_83622 = om_bootstrap.types.Component;
var input_schema83611_83623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Popover,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Popover","Popover",-1480406690,null)], null))),schema.core.Any], null);
var input_checker83612_83624 = schema.core.checker.call(null,input_schema83611_83623);
var output_checker83613_83625 = schema.core.checker.call(null,output_schema83610_83622);
/**
 * Inputs: [opts :- Popover & children]
 *   Returns: t/Component
 */
om_bootstrap.random.popover = ((function (ufv___83621,output_schema83610_83622,input_schema83611_83623,input_checker83612_83624,output_checker83613_83625){
return (function om_bootstrap$random$popover(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83626 = arguments.length;
var i__25827__auto___83627 = (0);
while(true){
if((i__25827__auto___83627 < len__25826__auto___83626)){
args__25833__auto__.push((arguments[i__25827__auto___83627]));

var G__83628 = (i__25827__auto___83627 + (1));
i__25827__auto___83627 = G__83628;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83621,output_schema83610_83622,input_schema83611_83623,input_checker83612_83624,output_checker83613_83625))
;

om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83621,output_schema83610_83622,input_schema83611_83623,input_checker83612_83624,output_checker83613_83625){
return (function (G__83614,rest83615){
var validate__38286__auto__ = ufv___83621.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83629 = cljs.core.list_STAR_.call(null,G__83614,rest83615);
var temp__4657__auto___83630 = input_checker83612_83624.call(null,args__38287__auto___83629);
if(cljs.core.truth_(temp__4657__auto___83630)){
var error__38288__auto___83631 = temp__4657__auto___83630;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83631)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83611_83623,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83629,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83631], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83614;
var children = rest83615;
while(true){
var vec__83618 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__83618,(0),null);
var _ = cljs.core.nth.call(null,vec__83618,(1),null);
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
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83632 = output_checker83613_83625.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83632)){
var error__38288__auto___83633 = temp__4657__auto___83632;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83633)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83610_83622,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83633], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83621,output_schema83610_83622,input_schema83611_83623,input_checker83612_83624,output_checker83613_83625))
;

om_bootstrap.random.popover.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.popover.cljs$lang$applyTo = ((function (ufv___83621,output_schema83610_83622,input_schema83611_83623,input_checker83612_83624,output_checker83613_83625){
return (function (seq83616){
var G__83617 = cljs.core.first.call(null,seq83616);
var seq83616__$1 = cljs.core.next.call(null,seq83616);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic(G__83617,seq83616__$1);
});})(ufv___83621,output_schema83610_83622,input_schema83611_83623,input_checker83612_83624,output_checker83613_83625))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.popover),schema.core.make_fn_schema.call(null,output_schema83610_83622,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83611_83623], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___83645 = schema.utils.use_fn_validation;
var output_schema83634_83646 = om_bootstrap.types.Component;
var input_schema83635_83647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Badge,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Badge","Badge",1932684841,null)], null))),schema.core.Any], null);
var input_checker83636_83648 = schema.core.checker.call(null,input_schema83635_83647);
var output_checker83637_83649 = schema.core.checker.call(null,output_schema83634_83646);
/**
 * Inputs: [opts :- Badge & children]
 *   Returns: t/Component
 */
om_bootstrap.random.badge = ((function (ufv___83645,output_schema83634_83646,input_schema83635_83647,input_checker83636_83648,output_checker83637_83649){
return (function om_bootstrap$random$badge(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83650 = arguments.length;
var i__25827__auto___83651 = (0);
while(true){
if((i__25827__auto___83651 < len__25826__auto___83650)){
args__25833__auto__.push((arguments[i__25827__auto___83651]));

var G__83652 = (i__25827__auto___83651 + (1));
i__25827__auto___83651 = G__83652;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83645,output_schema83634_83646,input_schema83635_83647,input_checker83636_83648,output_checker83637_83649))
;

om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83645,output_schema83634_83646,input_schema83635_83647,input_checker83636_83648,output_checker83637_83649){
return (function (G__83638,rest83639){
var validate__38286__auto__ = ufv___83645.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83653 = cljs.core.list_STAR_.call(null,G__83638,rest83639);
var temp__4657__auto___83654 = input_checker83636_83648.call(null,args__38287__auto___83653);
if(cljs.core.truth_(temp__4657__auto___83654)){
var error__38288__auto___83655 = temp__4657__auto___83654;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83655)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83635_83647,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83653,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83655], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83638;
var children = rest83639;
while(true){
var vec__83642 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Badge,opts);
var bs = cljs.core.nth.call(null,vec__83642,(0),null);
var props = cljs.core.nth.call(null,vec__83642,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_.call(null,children)], null);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83656 = output_checker83637_83649.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83656)){
var error__38288__auto___83657 = temp__4657__auto___83656;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83657)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83634_83646,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83657], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83645,output_schema83634_83646,input_schema83635_83647,input_checker83636_83648,output_checker83637_83649))
;

om_bootstrap.random.badge.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.badge.cljs$lang$applyTo = ((function (ufv___83645,output_schema83634_83646,input_schema83635_83647,input_checker83636_83648,output_checker83637_83649){
return (function (seq83640){
var G__83641 = cljs.core.first.call(null,seq83640);
var seq83640__$1 = cljs.core.next.call(null,seq83640);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic(G__83641,seq83640__$1);
});})(ufv___83645,output_schema83634_83646,input_schema83635_83647,input_checker83636_83648,output_checker83637_83649))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.badge),schema.core.make_fn_schema.call(null,output_schema83634_83646,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83635_83647], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___83669 = schema.utils.use_fn_validation;
var output_schema83658_83670 = om_bootstrap.types.Component;
var input_schema83659_83671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Glyphicon,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Glyphicon","Glyphicon",-683810897,null)], null))),schema.core.Any], null);
var input_checker83660_83672 = schema.core.checker.call(null,input_schema83659_83671);
var output_checker83661_83673 = schema.core.checker.call(null,output_schema83658_83670);
/**
 * Inputs: [opts :- Glyphicon & children]
 *   Returns: t/Component
 */
om_bootstrap.random.glyphicon = ((function (ufv___83669,output_schema83658_83670,input_schema83659_83671,input_checker83660_83672,output_checker83661_83673){
return (function om_bootstrap$random$glyphicon(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83674 = arguments.length;
var i__25827__auto___83675 = (0);
while(true){
if((i__25827__auto___83675 < len__25826__auto___83674)){
args__25833__auto__.push((arguments[i__25827__auto___83675]));

var G__83676 = (i__25827__auto___83675 + (1));
i__25827__auto___83675 = G__83676;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83669,output_schema83658_83670,input_schema83659_83671,input_checker83660_83672,output_checker83661_83673))
;

om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83669,output_schema83658_83670,input_schema83659_83671,input_checker83660_83672,output_checker83661_83673){
return (function (G__83662,rest83663){
var validate__38286__auto__ = ufv___83669.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83677 = cljs.core.list_STAR_.call(null,G__83662,rest83663);
var temp__4657__auto___83678 = input_checker83660_83672.call(null,args__38287__auto___83677);
if(cljs.core.truth_(temp__4657__auto___83678)){
var error__38288__auto___83679 = temp__4657__auto___83678;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83679)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83659_83671,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83677,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83679], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83662;
var children = rest83663;
while(true){
var vec__83666 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));
var bs = cljs.core.nth.call(null,vec__83666,(0),null);
var props = cljs.core.nth.call(null,vec__83666,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),[cljs.core.str("glyphicon-"),cljs.core.str(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))].join(''),true);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83680 = output_checker83661_83673.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83680)){
var error__38288__auto___83681 = temp__4657__auto___83680;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83681)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83658_83670,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83681], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83669,output_schema83658_83670,input_schema83659_83671,input_checker83660_83672,output_checker83661_83673))
;

om_bootstrap.random.glyphicon.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.glyphicon.cljs$lang$applyTo = ((function (ufv___83669,output_schema83658_83670,input_schema83659_83671,input_checker83660_83672,output_checker83661_83673){
return (function (seq83664){
var G__83665 = cljs.core.first.call(null,seq83664);
var seq83664__$1 = cljs.core.next.call(null,seq83664);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic(G__83665,seq83664__$1);
});})(ufv___83669,output_schema83658_83670,input_schema83659_83671,input_checker83660_83672,output_checker83661_83673))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.glyphicon),schema.core.make_fn_schema.call(null,output_schema83658_83670,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83659_83671], null)));

//# sourceMappingURL=random.js.map?rel=1478402679255