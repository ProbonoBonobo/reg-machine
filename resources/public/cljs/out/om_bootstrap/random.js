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
var ufv___57384 = schema.utils.use_fn_validation;
var output_schema57376_57385 = om_bootstrap.types.Component;
var input_schema57377_57386 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker57378_57387 = schema.core.checker.call(null,input_schema57377_57386);
var output_checker57379_57388 = schema.core.checker.call(null,output_schema57376_57385);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   A lightweight, flexible component that can optionally extend the
 * entire viewport to showcase key content on your site.
 */
om_bootstrap.random.jumbotron = ((function (ufv___57384,output_schema57376_57385,input_schema57377_57386,input_checker57378_57387,output_checker57379_57388){
return (function om_bootstrap$random$jumbotron(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57389 = arguments.length;
var i__25827__auto___57390 = (0);
while(true){
if((i__25827__auto___57390 < len__25826__auto___57389)){
args__25833__auto__.push((arguments[i__25827__auto___57390]));

var G__57391 = (i__25827__auto___57390 + (1));
i__25827__auto___57390 = G__57391;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___57384,output_schema57376_57385,input_schema57377_57386,input_checker57378_57387,output_checker57379_57388))
;

om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___57384,output_schema57376_57385,input_schema57377_57386,input_checker57378_57387,output_checker57379_57388){
return (function (G__57380,rest57381){
var validate__37921__auto__ = ufv___57384.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57392 = cljs.core.list_STAR_.call(null,G__57380,rest57381);
var temp__4657__auto___57393 = input_checker57378_57387.call(null,args__37922__auto___57392);
if(cljs.core.truth_(temp__4657__auto___57393)){
var error__37923__auto___57394 = temp__4657__auto___57393;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__37923__auto___57394)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57377_57386,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57392,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57394], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__57380;
var children = rest57381;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57395 = output_checker57379_57388.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57395)){
var error__37923__auto___57396 = temp__4657__auto___57395;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__37923__auto___57396)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57376_57385,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57396], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57384,output_schema57376_57385,input_schema57377_57386,input_checker57378_57387,output_checker57379_57388))
;

om_bootstrap.random.jumbotron.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.jumbotron.cljs$lang$applyTo = ((function (ufv___57384,output_schema57376_57385,input_schema57377_57386,input_checker57378_57387,output_checker57379_57388){
return (function (seq57382){
var G__57383 = cljs.core.first.call(null,seq57382);
var seq57382__$1 = cljs.core.next.call(null,seq57382);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic(G__57383,seq57382__$1);
});})(ufv___57384,output_schema57376_57385,input_schema57377_57386,input_checker57378_57387,output_checker57379_57388))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.jumbotron),schema.core.make_fn_schema.call(null,output_schema57376_57385,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57377_57386], null)));
var ufv___57408 = schema.utils.use_fn_validation;
var output_schema57397_57409 = om_bootstrap.types.Component;
var input_schema57398_57410 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker57399_57411 = schema.core.checker.call(null,input_schema57398_57410);
var output_checker57400_57412 = schema.core.checker.call(null,output_schema57397_57409);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Create a (label {} "label!") to show highlight information.
 */
om_bootstrap.random.label = ((function (ufv___57408,output_schema57397_57409,input_schema57398_57410,input_checker57399_57411,output_checker57400_57412){
return (function om_bootstrap$random$label(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57413 = arguments.length;
var i__25827__auto___57414 = (0);
while(true){
if((i__25827__auto___57414 < len__25826__auto___57413)){
args__25833__auto__.push((arguments[i__25827__auto___57414]));

var G__57415 = (i__25827__auto___57414 + (1));
i__25827__auto___57414 = G__57415;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___57408,output_schema57397_57409,input_schema57398_57410,input_checker57399_57411,output_checker57400_57412))
;

om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___57408,output_schema57397_57409,input_schema57398_57410,input_checker57399_57411,output_checker57400_57412){
return (function (G__57401,rest57402){
var validate__37921__auto__ = ufv___57408.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57416 = cljs.core.list_STAR_.call(null,G__57401,rest57402);
var temp__4657__auto___57417 = input_checker57399_57411.call(null,args__37922__auto___57416);
if(cljs.core.truth_(temp__4657__auto___57417)){
var error__37923__auto___57418 = temp__4657__auto___57417;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__37923__auto___57418)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57398_57410,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57416,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57418], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__57401;
var children = rest57402;
while(true){
var vec__57405 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__57405,(0),null);
var props = cljs.core.nth.call(null,vec__57405,(1),null);
var classes = om_bootstrap.types.bs_class_set.call(null,bs);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57419 = output_checker57400_57412.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57419)){
var error__37923__auto___57420 = temp__4657__auto___57419;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__37923__auto___57420)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57397_57409,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57420], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57408,output_schema57397_57409,input_schema57398_57410,input_checker57399_57411,output_checker57400_57412))
;

om_bootstrap.random.label.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.label.cljs$lang$applyTo = ((function (ufv___57408,output_schema57397_57409,input_schema57398_57410,input_checker57399_57411,output_checker57400_57412){
return (function (seq57403){
var G__57404 = cljs.core.first.call(null,seq57403);
var seq57403__$1 = cljs.core.next.call(null,seq57403);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(G__57404,seq57403__$1);
});})(ufv___57408,output_schema57397_57409,input_schema57398_57410,input_checker57399_57411,output_checker57400_57412))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.label),schema.core.make_fn_schema.call(null,output_schema57397_57409,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57398_57410], null)));
var ufv___57432 = schema.utils.use_fn_validation;
var output_schema57421_57433 = om_bootstrap.types.Component;
var input_schema57422_57434 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker57423_57435 = schema.core.checker.call(null,input_schema57422_57434);
var output_checker57424_57436 = schema.core.checker.call(null,output_schema57421_57433);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Use the well as a simple effect on an element to give it an inset effect.
 */
om_bootstrap.random.well = ((function (ufv___57432,output_schema57421_57433,input_schema57422_57434,input_checker57423_57435,output_checker57424_57436){
return (function om_bootstrap$random$well(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57437 = arguments.length;
var i__25827__auto___57438 = (0);
while(true){
if((i__25827__auto___57438 < len__25826__auto___57437)){
args__25833__auto__.push((arguments[i__25827__auto___57438]));

var G__57439 = (i__25827__auto___57438 + (1));
i__25827__auto___57438 = G__57439;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___57432,output_schema57421_57433,input_schema57422_57434,input_checker57423_57435,output_checker57424_57436))
;

om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___57432,output_schema57421_57433,input_schema57422_57434,input_checker57423_57435,output_checker57424_57436){
return (function (G__57425,rest57426){
var validate__37921__auto__ = ufv___57432.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57440 = cljs.core.list_STAR_.call(null,G__57425,rest57426);
var temp__4657__auto___57441 = input_checker57423_57435.call(null,args__37922__auto___57440);
if(cljs.core.truth_(temp__4657__auto___57441)){
var error__37923__auto___57442 = temp__4657__auto___57441;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__37923__auto___57442)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57422_57434,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57440,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57442], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__57425;
var children = rest57426;
while(true){
var vec__57429 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));
var bs = cljs.core.nth.call(null,vec__57429,(0),null);
var props = cljs.core.nth.call(null,vec__57429,(1),null);
var class$ = om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57443 = output_checker57424_57436.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57443)){
var error__37923__auto___57444 = temp__4657__auto___57443;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__37923__auto___57444)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57421_57433,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57444], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57432,output_schema57421_57433,input_schema57422_57434,input_checker57423_57435,output_checker57424_57436))
;

om_bootstrap.random.well.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.well.cljs$lang$applyTo = ((function (ufv___57432,output_schema57421_57433,input_schema57422_57434,input_checker57423_57435,output_checker57424_57436){
return (function (seq57427){
var G__57428 = cljs.core.first.call(null,seq57427);
var seq57427__$1 = cljs.core.next.call(null,seq57427);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic(G__57428,seq57427__$1);
});})(ufv___57432,output_schema57421_57433,input_schema57422_57434,input_checker57423_57435,output_checker57424_57436))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.well),schema.core.make_fn_schema.call(null,output_schema57421_57433,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57422_57434], null)));
var ufv___57453 = schema.utils.use_fn_validation;
var output_schema57445_57454 = om_bootstrap.types.Component;
var input_schema57446_57455 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker57447_57456 = schema.core.checker.call(null,input_schema57446_57455);
var output_checker57448_57457 = schema.core.checker.call(null,output_schema57445_57454);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   A simple shell for an h1 to appropriately space out and segment
 *   sections of content on a page. It can utilize the h1’s default small
 *   element, as well as most other components (with additional styles).
 */
om_bootstrap.random.page_header = ((function (ufv___57453,output_schema57445_57454,input_schema57446_57455,input_checker57447_57456,output_checker57448_57457){
return (function om_bootstrap$random$page_header(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57458 = arguments.length;
var i__25827__auto___57459 = (0);
while(true){
if((i__25827__auto___57459 < len__25826__auto___57458)){
args__25833__auto__.push((arguments[i__25827__auto___57459]));

var G__57460 = (i__25827__auto___57459 + (1));
i__25827__auto___57459 = G__57460;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___57453,output_schema57445_57454,input_schema57446_57455,input_checker57447_57456,output_checker57448_57457))
;

om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___57453,output_schema57445_57454,input_schema57446_57455,input_checker57447_57456,output_checker57448_57457){
return (function (G__57449,rest57450){
var validate__37921__auto__ = ufv___57453.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57461 = cljs.core.list_STAR_.call(null,G__57449,rest57450);
var temp__4657__auto___57462 = input_checker57447_57456.call(null,args__37922__auto___57461);
if(cljs.core.truth_(temp__4657__auto___57462)){
var error__37923__auto___57463 = temp__4657__auto___57462;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__37923__auto___57463)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57446_57455,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57461,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57463], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__57449;
var children = rest57450;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57464 = output_checker57448_57457.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57464)){
var error__37923__auto___57465 = temp__4657__auto___57464;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__37923__auto___57465)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57445_57454,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57465], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57453,output_schema57445_57454,input_schema57446_57455,input_checker57447_57456,output_checker57448_57457))
;

om_bootstrap.random.page_header.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.page_header.cljs$lang$applyTo = ((function (ufv___57453,output_schema57445_57454,input_schema57446_57455,input_checker57447_57456,output_checker57448_57457){
return (function (seq57451){
var G__57452 = cljs.core.first.call(null,seq57451);
var seq57451__$1 = cljs.core.next.call(null,seq57451);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic(G__57452,seq57451__$1);
});})(ufv___57453,output_schema57445_57454,input_schema57446_57455,input_checker57447_57456,output_checker57448_57457))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.page_header),schema.core.make_fn_schema.call(null,output_schema57445_57454,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57446_57455], null)));
om_bootstrap.random.Placement = schema.core.enum$.call(null,"top","right","bottom","left");
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___57477 = schema.utils.use_fn_validation;
var output_schema57466_57478 = om_bootstrap.types.Component;
var input_schema57467_57479 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.ToolTip,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ToolTip","ToolTip",1279361896,null)], null))),schema.core.Any], null);
var input_checker57468_57480 = schema.core.checker.call(null,input_schema57467_57479);
var output_checker57469_57481 = schema.core.checker.call(null,output_schema57466_57478);
/**
 * Inputs: [opts :- ToolTip & children]
 *   Returns: t/Component
 */
om_bootstrap.random.tooltip = ((function (ufv___57477,output_schema57466_57478,input_schema57467_57479,input_checker57468_57480,output_checker57469_57481){
return (function om_bootstrap$random$tooltip(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57482 = arguments.length;
var i__25827__auto___57483 = (0);
while(true){
if((i__25827__auto___57483 < len__25826__auto___57482)){
args__25833__auto__.push((arguments[i__25827__auto___57483]));

var G__57484 = (i__25827__auto___57483 + (1));
i__25827__auto___57483 = G__57484;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___57477,output_schema57466_57478,input_schema57467_57479,input_checker57468_57480,output_checker57469_57481))
;

om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___57477,output_schema57466_57478,input_schema57467_57479,input_checker57468_57480,output_checker57469_57481){
return (function (G__57470,rest57471){
var validate__37921__auto__ = ufv___57477.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57485 = cljs.core.list_STAR_.call(null,G__57470,rest57471);
var temp__4657__auto___57486 = input_checker57468_57480.call(null,args__37922__auto___57485);
if(cljs.core.truth_(temp__4657__auto___57486)){
var error__37923__auto___57487 = temp__4657__auto___57486;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57487)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57467_57479,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57485,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57487], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__57470;
var children = rest57471;
while(true){
var vec__57474 = om_bootstrap.types.separate.call(null,om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__57474,(0),null);
var _ = cljs.core.nth.call(null,vec__57474,(1),null);
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
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57488 = output_checker57469_57481.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57488)){
var error__37923__auto___57489 = temp__4657__auto___57488;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57489)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57466_57478,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57489], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57477,output_schema57466_57478,input_schema57467_57479,input_checker57468_57480,output_checker57469_57481))
;

om_bootstrap.random.tooltip.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.tooltip.cljs$lang$applyTo = ((function (ufv___57477,output_schema57466_57478,input_schema57467_57479,input_checker57468_57480,output_checker57469_57481){
return (function (seq57472){
var G__57473 = cljs.core.first.call(null,seq57472);
var seq57472__$1 = cljs.core.next.call(null,seq57472);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic(G__57473,seq57472__$1);
});})(ufv___57477,output_schema57466_57478,input_schema57467_57479,input_checker57468_57480,output_checker57469_57481))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.tooltip),schema.core.make_fn_schema.call(null,output_schema57466_57478,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57467_57479], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__43025__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__43025__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);

return descriptor__43025__auto__;
})();

var component_fnk__43054__auto___57518 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema57495 = schema.core.Any;
var input_schema57496 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map57493","map57493",1336886547,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker57497 = schema.core.checker.call(null,input_schema57496);
var output_checker57498 = schema.core.checker.call(null,output_schema57495);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498){
return (function om_bootstrap$random$constructor57491(G__57499){
var validate__37921__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57519 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57499], null);
var temp__4657__auto___57520 = input_checker57497.call(null,args__37922__auto___57519);
if(cljs.core.truth_(temp__4657__auto___57520)){
var error__37923__auto___57521 = temp__4657__auto___57520;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor57491","constructor57491",-1335605254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57521)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57496,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57519,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57521], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var map57493 = G__57499;
while(true){
if(cljs.core.map_QMARK_.call(null,map57493)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map57493)));
}

var map57494 = plumbing.fnk.schema.safe_get.call(null,map57493,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var bs = plumbing.fnk.schema.safe_get.call(null,map57494,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var props = plumbing.fnk.schema.safe_get.call(null,map57494,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map57494,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map57493,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.random.t_om_bootstrap$random57504 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.random.t_om_bootstrap$random57504 = (function (owner,props,output_checker57498,children,map57494,G__57499,input_schema57496,input_checker57497,map57493,validate__37921__auto__,constructor57491,ufv__,bs,output_schema57495,meta57505){
this.owner = owner;
this.props = props;
this.output_checker57498 = output_checker57498;
this.children = children;
this.map57494 = map57494;
this.G__57499 = G__57499;
this.input_schema57496 = input_schema57496;
this.input_checker57497 = input_checker57497;
this.map57493 = map57493;
this.validate__37921__auto__ = validate__37921__auto__;
this.constructor57491 = constructor57491;
this.ufv__ = ufv__;
this.bs = bs;
this.output_schema57495 = output_schema57495;
this.meta57505 = meta57505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.random.t_om_bootstrap$random57504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map57494,validate__37921__auto__,ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498){
return (function (_57506,meta57505__$1){
var self__ = this;
var _57506__$1 = this;
return (new om_bootstrap.random.t_om_bootstrap$random57504(self__.owner,self__.props,self__.output_checker57498,self__.children,self__.map57494,self__.G__57499,self__.input_schema57496,self__.input_checker57497,self__.map57493,self__.validate__37921__auto__,self__.constructor57491,self__.ufv__,self__.bs,self__.output_schema57495,meta57505__$1));
});})(owner,children,props,bs,map57494,validate__37921__auto__,ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498))
;

om_bootstrap.random.t_om_bootstrap$random57504.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map57494,validate__37921__auto__,ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498){
return (function (_57506){
var self__ = this;
var _57506__$1 = this;
return self__.meta57505;
});})(owner,children,props,bs,map57494,validate__37921__auto__,ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498))
;

om_bootstrap.random.t_om_bootstrap$random57504.prototype.om$core$IDisplayName$ = true;

om_bootstrap.random.t_om_bootstrap$random57504.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map57494,validate__37921__auto__,ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498){
return (function (_){
var self__ = this;
var ___$1 = this;
return "alert*";
});})(owner,children,props,bs,map57494,validate__37921__auto__,ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498))
;

om_bootstrap.random.t_om_bootstrap$random57504.prototype.om$core$IDidMount$ = true;

om_bootstrap.random.t_om_bootstrap$random57504.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map57494,validate__37921__auto__,ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498){
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
var G__57507 = self__.owner;
G__57507.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));

return G__57507;
} else {
return null;
}
});})(owner,children,props,bs,map57494,validate__37921__auto__,ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498))
;

om_bootstrap.random.t_om_bootstrap$random57504.prototype.om$core$IRender$ = true;

om_bootstrap.random.t_om_bootstrap$random57504.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map57494,validate__37921__auto__,ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498){
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
});})(owner,children,props,bs,map57494,validate__37921__auto__,ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498))
;

om_bootstrap.random.t_om_bootstrap$random57504.getBasis = ((function (owner,children,props,bs,map57494,validate__37921__auto__,ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker57498","output-checker57498",1127486504,null),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"map57494","map57494",-149462646,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__57499","G__57499",263246956,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"input-schema57496","input-schema57496",336032077,null),new cljs.core.Symbol(null,"input-checker57497","input-checker57497",956473038,null),new cljs.core.Symbol(null,"map57493","map57493",1336886547,null),new cljs.core.Symbol(null,"validate__37921__auto__","validate__37921__auto__",-900160587,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor57491","constructor57491",-1335605254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"bs","bs",-906042210,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema57495","output-schema57495",1059896607,null),new cljs.core.Symbol(null,"meta57505","meta57505",-506203094,null)], null);
});})(owner,children,props,bs,map57494,validate__37921__auto__,ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498))
;

om_bootstrap.random.t_om_bootstrap$random57504.cljs$lang$type = true;

om_bootstrap.random.t_om_bootstrap$random57504.cljs$lang$ctorStr = "om-bootstrap.random/t_om_bootstrap$random57504";

om_bootstrap.random.t_om_bootstrap$random57504.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map57494,validate__37921__auto__,ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-bootstrap.random/t_om_bootstrap$random57504");
});})(owner,children,props,bs,map57494,validate__37921__auto__,ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498))
;

om_bootstrap.random.__GT_t_om_bootstrap$random57504 = ((function (owner,children,props,bs,map57494,validate__37921__auto__,ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498){
return (function om_bootstrap$random$constructor57491_$___GT_t_om_bootstrap$random57504(owner__$1,props__$1,output_checker57498__$1,children__$1,map57494__$1,G__57499__$1,input_schema57496__$1,input_checker57497__$1,map57493__$1,validate__37921__auto____$1,constructor57491__$1,ufv____$1,bs__$1,output_schema57495__$1,meta57505){
return (new om_bootstrap.random.t_om_bootstrap$random57504(owner__$1,props__$1,output_checker57498__$1,children__$1,map57494__$1,G__57499__$1,input_schema57496__$1,input_checker57497__$1,map57493__$1,validate__37921__auto____$1,constructor57491__$1,ufv____$1,bs__$1,output_schema57495__$1,meta57505));
});})(owner,children,props,bs,map57494,validate__37921__auto__,ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498))
;

}

return (new om_bootstrap.random.t_om_bootstrap$random57504(owner,props,output_checker57498,children,map57494,G__57499,input_schema57496,input_checker57497,map57493,validate__37921__auto__,om_bootstrap$random$constructor57491,ufv__,bs,output_schema57495,null));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57522 = output_checker57498.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57522)){
var error__37923__auto___57523 = temp__4657__auto___57522;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor57491","constructor57491",-1335605254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57523)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57495,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57523], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv__,output_schema57495,input_schema57496,input_checker57497,output_checker57498))
,schema.core.make_fn_schema.call(null,output_schema57495,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57496], null)));
})();
/**
 * Renders the alert component with timeout mixed in. TODO: This
 * should probably use the component macro and be defined inline under
 * the alert function. No need for a separate name.
 */
om_bootstrap.random.alert_STAR_ = ((function (component_fnk__43054__auto___57518){
return (function om_bootstrap$random$alert_STAR_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57524 = arguments.length;
var i__25827__auto___57525 = (0);
while(true){
if((i__25827__auto___57525 < len__25826__auto___57524)){
args__25833__auto__.push((arguments[i__25827__auto___57525]));

var G__57526 = (i__25827__auto___57525 + (1));
i__25827__auto___57525 = G__57526;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});})(component_fnk__43054__auto___57518))
;

om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__43054__auto___57518){
return (function (data__43055__auto__,owner57490,p__57511){
var vec__57512 = p__57511;
var opts__43056__auto__ = cljs.core.nth.call(null,vec__57512,(0),null);
return component_fnk__43054__auto___57518.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__43056__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner57490,new cljs.core.Keyword(null,"data","data",-232669377),data__43055__auto__], null));
});})(component_fnk__43054__auto___57518))
;

om_bootstrap.random.alert_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.random.alert_STAR_.cljs$lang$applyTo = ((function (component_fnk__43054__auto___57518){
return (function (seq57508){
var G__57509 = cljs.core.first.call(null,seq57508);
var seq57508__$1 = cljs.core.next.call(null,seq57508);
var G__57510 = cljs.core.first.call(null,seq57508__$1);
var seq57508__$2 = cljs.core.next.call(null,seq57508__$1);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__57509,G__57510,seq57508__$2);
});})(component_fnk__43054__auto___57518))
;


om_bootstrap.random.__GT_alert_STAR_ = (function om_bootstrap$random$__GT_alert_STAR_(var_args){
var args57515 = [];
var len__25826__auto___57527 = arguments.length;
var i__25827__auto___57528 = (0);
while(true){
if((i__25827__auto___57528 < len__25826__auto___57527)){
args57515.push((arguments[i__25827__auto___57528]));

var G__57529 = (i__25827__auto___57528 + (1));
i__25827__auto___57528 = G__57529;
continue;
} else {
}
break;
}

var G__57517 = args57515.length;
switch (G__57517) {
case 1:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57515.length)].join('')));

}
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__43023__auto__){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__43023__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__43023__auto__,m57492){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__43023__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m57492));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___57542 = schema.utils.use_fn_validation;
var output_schema57531_57543 = om_bootstrap.types.Component;
var input_schema57532_57544 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Alert,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Alert","Alert",231771408,null)], null))),schema.core.Any], null);
var input_checker57533_57545 = schema.core.checker.call(null,input_schema57532_57544);
var output_checker57534_57546 = schema.core.checker.call(null,output_schema57531_57543);
/**
 * Inputs: [opts :- Alert & children]
 *   Returns: t/Component
 * 
 *   Wrapper for the alert component to allow a better user interface.
 */
om_bootstrap.random.alert = ((function (ufv___57542,output_schema57531_57543,input_schema57532_57544,input_checker57533_57545,output_checker57534_57546){
return (function om_bootstrap$random$alert(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57547 = arguments.length;
var i__25827__auto___57548 = (0);
while(true){
if((i__25827__auto___57548 < len__25826__auto___57547)){
args__25833__auto__.push((arguments[i__25827__auto___57548]));

var G__57549 = (i__25827__auto___57548 + (1));
i__25827__auto___57548 = G__57549;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___57542,output_schema57531_57543,input_schema57532_57544,input_checker57533_57545,output_checker57534_57546))
;

om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___57542,output_schema57531_57543,input_schema57532_57544,input_checker57533_57545,output_checker57534_57546){
return (function (G__57535,rest57536){
var validate__37921__auto__ = ufv___57542.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57550 = cljs.core.list_STAR_.call(null,G__57535,rest57536);
var temp__4657__auto___57551 = input_checker57533_57545.call(null,args__37922__auto___57550);
if(cljs.core.truth_(temp__4657__auto___57551)){
var error__37923__auto___57552 = temp__4657__auto___57551;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__37923__auto___57552)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57532_57544,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57550,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57552], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__57535;
var children = rest57536;
while(true){
var vec__57539 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);
var bs = cljs.core.nth.call(null,vec__57539,(0),null);
var props = cljs.core.nth.call(null,vec__57539,(1),null);
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57553 = output_checker57534_57546.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57553)){
var error__37923__auto___57554 = temp__4657__auto___57553;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__37923__auto___57554)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57531_57543,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57554], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57542,output_schema57531_57543,input_schema57532_57544,input_checker57533_57545,output_checker57534_57546))
;

om_bootstrap.random.alert.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.alert.cljs$lang$applyTo = ((function (ufv___57542,output_schema57531_57543,input_schema57532_57544,input_checker57533_57545,output_checker57534_57546){
return (function (seq57537){
var G__57538 = cljs.core.first.call(null,seq57537);
var seq57537__$1 = cljs.core.next.call(null,seq57537);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic(G__57538,seq57537__$1);
});})(ufv___57542,output_schema57531_57543,input_schema57532_57544,input_checker57533_57545,output_checker57534_57546))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.alert),schema.core.make_fn_schema.call(null,output_schema57531_57543,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57532_57544], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___57566 = schema.utils.use_fn_validation;
var output_schema57555_57567 = om_bootstrap.types.Component;
var input_schema57556_57568 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Popover,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Popover","Popover",-1480406690,null)], null))),schema.core.Any], null);
var input_checker57557_57569 = schema.core.checker.call(null,input_schema57556_57568);
var output_checker57558_57570 = schema.core.checker.call(null,output_schema57555_57567);
/**
 * Inputs: [opts :- Popover & children]
 *   Returns: t/Component
 */
om_bootstrap.random.popover = ((function (ufv___57566,output_schema57555_57567,input_schema57556_57568,input_checker57557_57569,output_checker57558_57570){
return (function om_bootstrap$random$popover(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57571 = arguments.length;
var i__25827__auto___57572 = (0);
while(true){
if((i__25827__auto___57572 < len__25826__auto___57571)){
args__25833__auto__.push((arguments[i__25827__auto___57572]));

var G__57573 = (i__25827__auto___57572 + (1));
i__25827__auto___57572 = G__57573;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___57566,output_schema57555_57567,input_schema57556_57568,input_checker57557_57569,output_checker57558_57570))
;

om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___57566,output_schema57555_57567,input_schema57556_57568,input_checker57557_57569,output_checker57558_57570){
return (function (G__57559,rest57560){
var validate__37921__auto__ = ufv___57566.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57574 = cljs.core.list_STAR_.call(null,G__57559,rest57560);
var temp__4657__auto___57575 = input_checker57557_57569.call(null,args__37922__auto___57574);
if(cljs.core.truth_(temp__4657__auto___57575)){
var error__37923__auto___57576 = temp__4657__auto___57575;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57576)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57556_57568,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57574,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57576], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__57559;
var children = rest57560;
while(true){
var vec__57563 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__57563,(0),null);
var _ = cljs.core.nth.call(null,vec__57563,(1),null);
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
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57577 = output_checker57558_57570.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57577)){
var error__37923__auto___57578 = temp__4657__auto___57577;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57578)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57555_57567,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57578], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57566,output_schema57555_57567,input_schema57556_57568,input_checker57557_57569,output_checker57558_57570))
;

om_bootstrap.random.popover.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.popover.cljs$lang$applyTo = ((function (ufv___57566,output_schema57555_57567,input_schema57556_57568,input_checker57557_57569,output_checker57558_57570){
return (function (seq57561){
var G__57562 = cljs.core.first.call(null,seq57561);
var seq57561__$1 = cljs.core.next.call(null,seq57561);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic(G__57562,seq57561__$1);
});})(ufv___57566,output_schema57555_57567,input_schema57556_57568,input_checker57557_57569,output_checker57558_57570))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.popover),schema.core.make_fn_schema.call(null,output_schema57555_57567,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57556_57568], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___57590 = schema.utils.use_fn_validation;
var output_schema57579_57591 = om_bootstrap.types.Component;
var input_schema57580_57592 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Badge,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Badge","Badge",1932684841,null)], null))),schema.core.Any], null);
var input_checker57581_57593 = schema.core.checker.call(null,input_schema57580_57592);
var output_checker57582_57594 = schema.core.checker.call(null,output_schema57579_57591);
/**
 * Inputs: [opts :- Badge & children]
 *   Returns: t/Component
 */
om_bootstrap.random.badge = ((function (ufv___57590,output_schema57579_57591,input_schema57580_57592,input_checker57581_57593,output_checker57582_57594){
return (function om_bootstrap$random$badge(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57595 = arguments.length;
var i__25827__auto___57596 = (0);
while(true){
if((i__25827__auto___57596 < len__25826__auto___57595)){
args__25833__auto__.push((arguments[i__25827__auto___57596]));

var G__57597 = (i__25827__auto___57596 + (1));
i__25827__auto___57596 = G__57597;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___57590,output_schema57579_57591,input_schema57580_57592,input_checker57581_57593,output_checker57582_57594))
;

om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___57590,output_schema57579_57591,input_schema57580_57592,input_checker57581_57593,output_checker57582_57594){
return (function (G__57583,rest57584){
var validate__37921__auto__ = ufv___57590.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57598 = cljs.core.list_STAR_.call(null,G__57583,rest57584);
var temp__4657__auto___57599 = input_checker57581_57593.call(null,args__37922__auto___57598);
if(cljs.core.truth_(temp__4657__auto___57599)){
var error__37923__auto___57600 = temp__4657__auto___57599;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57600)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57580_57592,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57598,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57600], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__57583;
var children = rest57584;
while(true){
var vec__57587 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Badge,opts);
var bs = cljs.core.nth.call(null,vec__57587,(0),null);
var props = cljs.core.nth.call(null,vec__57587,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_.call(null,children)], null);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57601 = output_checker57582_57594.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57601)){
var error__37923__auto___57602 = temp__4657__auto___57601;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57602)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57579_57591,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57602], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57590,output_schema57579_57591,input_schema57580_57592,input_checker57581_57593,output_checker57582_57594))
;

om_bootstrap.random.badge.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.badge.cljs$lang$applyTo = ((function (ufv___57590,output_schema57579_57591,input_schema57580_57592,input_checker57581_57593,output_checker57582_57594){
return (function (seq57585){
var G__57586 = cljs.core.first.call(null,seq57585);
var seq57585__$1 = cljs.core.next.call(null,seq57585);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic(G__57586,seq57585__$1);
});})(ufv___57590,output_schema57579_57591,input_schema57580_57592,input_checker57581_57593,output_checker57582_57594))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.badge),schema.core.make_fn_schema.call(null,output_schema57579_57591,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57580_57592], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___57614 = schema.utils.use_fn_validation;
var output_schema57603_57615 = om_bootstrap.types.Component;
var input_schema57604_57616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Glyphicon,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Glyphicon","Glyphicon",-683810897,null)], null))),schema.core.Any], null);
var input_checker57605_57617 = schema.core.checker.call(null,input_schema57604_57616);
var output_checker57606_57618 = schema.core.checker.call(null,output_schema57603_57615);
/**
 * Inputs: [opts :- Glyphicon & children]
 *   Returns: t/Component
 */
om_bootstrap.random.glyphicon = ((function (ufv___57614,output_schema57603_57615,input_schema57604_57616,input_checker57605_57617,output_checker57606_57618){
return (function om_bootstrap$random$glyphicon(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57619 = arguments.length;
var i__25827__auto___57620 = (0);
while(true){
if((i__25827__auto___57620 < len__25826__auto___57619)){
args__25833__auto__.push((arguments[i__25827__auto___57620]));

var G__57621 = (i__25827__auto___57620 + (1));
i__25827__auto___57620 = G__57621;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___57614,output_schema57603_57615,input_schema57604_57616,input_checker57605_57617,output_checker57606_57618))
;

om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___57614,output_schema57603_57615,input_schema57604_57616,input_checker57605_57617,output_checker57606_57618){
return (function (G__57607,rest57608){
var validate__37921__auto__ = ufv___57614.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57622 = cljs.core.list_STAR_.call(null,G__57607,rest57608);
var temp__4657__auto___57623 = input_checker57605_57617.call(null,args__37922__auto___57622);
if(cljs.core.truth_(temp__4657__auto___57623)){
var error__37923__auto___57624 = temp__4657__auto___57623;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57624)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57604_57616,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57622,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57624], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__57607;
var children = rest57608;
while(true){
var vec__57611 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));
var bs = cljs.core.nth.call(null,vec__57611,(0),null);
var props = cljs.core.nth.call(null,vec__57611,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),[cljs.core.str("glyphicon-"),cljs.core.str(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))].join(''),true);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57625 = output_checker57606_57618.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57625)){
var error__37923__auto___57626 = temp__4657__auto___57625;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57626)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57603_57615,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57626], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57614,output_schema57603_57615,input_schema57604_57616,input_checker57605_57617,output_checker57606_57618))
;

om_bootstrap.random.glyphicon.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.glyphicon.cljs$lang$applyTo = ((function (ufv___57614,output_schema57603_57615,input_schema57604_57616,input_checker57605_57617,output_checker57606_57618){
return (function (seq57609){
var G__57610 = cljs.core.first.call(null,seq57609);
var seq57609__$1 = cljs.core.next.call(null,seq57609);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic(G__57610,seq57609__$1);
});})(ufv___57614,output_schema57603_57615,input_schema57604_57616,input_checker57605_57617,output_checker57606_57618))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.glyphicon),schema.core.make_fn_schema.call(null,output_schema57603_57615,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57604_57616], null)));

//# sourceMappingURL=random.js.map?rel=1477762309641