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
var ufv___69079 = schema.utils.use_fn_validation;
var output_schema69071_69080 = om_bootstrap.types.Component;
var input_schema69072_69081 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker69073_69082 = schema.core.checker.call(null,input_schema69072_69081);
var output_checker69074_69083 = schema.core.checker.call(null,output_schema69071_69080);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   A lightweight, flexible component that can optionally extend the
 * entire viewport to showcase key content on your site.
 */
om_bootstrap.random.jumbotron = ((function (ufv___69079,output_schema69071_69080,input_schema69072_69081,input_checker69073_69082,output_checker69074_69083){
return (function om_bootstrap$random$jumbotron(var_args){
var args__25833__auto__ = [];
var len__25826__auto___69084 = arguments.length;
var i__25827__auto___69085 = (0);
while(true){
if((i__25827__auto___69085 < len__25826__auto___69084)){
args__25833__auto__.push((arguments[i__25827__auto___69085]));

var G__69086 = (i__25827__auto___69085 + (1));
i__25827__auto___69085 = G__69086;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___69079,output_schema69071_69080,input_schema69072_69081,input_checker69073_69082,output_checker69074_69083))
;

om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___69079,output_schema69071_69080,input_schema69072_69081,input_checker69073_69082,output_checker69074_69083){
return (function (G__69075,rest69076){
var validate__30368__auto__ = ufv___69079.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___69087 = cljs.core.list_STAR_.call(null,G__69075,rest69076);
var temp__4657__auto___69088 = input_checker69073_69082.call(null,args__30369__auto___69087);
if(cljs.core.truth_(temp__4657__auto___69088)){
var error__30370__auto___69089 = temp__4657__auto___69088;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__30370__auto___69089)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69072_69081,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___69087,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69089], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__69075;
var children = rest69076;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___69090 = output_checker69074_69083.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___69090)){
var error__30370__auto___69091 = temp__4657__auto___69090;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A lightweight, flexible component that can optionally extend the\n   entire viewport to showcase key content on your site."], null)),cljs.core.pr_str.call(null,error__30370__auto___69091)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69071_69080,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69091], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___69079,output_schema69071_69080,input_schema69072_69081,input_checker69073_69082,output_checker69074_69083))
;

om_bootstrap.random.jumbotron.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.jumbotron.cljs$lang$applyTo = ((function (ufv___69079,output_schema69071_69080,input_schema69072_69081,input_checker69073_69082,output_checker69074_69083){
return (function (seq69077){
var G__69078 = cljs.core.first.call(null,seq69077);
var seq69077__$1 = cljs.core.next.call(null,seq69077);
return om_bootstrap.random.jumbotron.cljs$core$IFn$_invoke$arity$variadic(G__69078,seq69077__$1);
});})(ufv___69079,output_schema69071_69080,input_schema69072_69081,input_checker69073_69082,output_checker69074_69083))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.jumbotron),schema.core.make_fn_schema.call(null,output_schema69071_69080,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69072_69081], null)));
var ufv___69103 = schema.utils.use_fn_validation;
var output_schema69092_69104 = om_bootstrap.types.Component;
var input_schema69093_69105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker69094_69106 = schema.core.checker.call(null,input_schema69093_69105);
var output_checker69095_69107 = schema.core.checker.call(null,output_schema69092_69104);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Create a (label {} "label!") to show highlight information.
 */
om_bootstrap.random.label = ((function (ufv___69103,output_schema69092_69104,input_schema69093_69105,input_checker69094_69106,output_checker69095_69107){
return (function om_bootstrap$random$label(var_args){
var args__25833__auto__ = [];
var len__25826__auto___69108 = arguments.length;
var i__25827__auto___69109 = (0);
while(true){
if((i__25827__auto___69109 < len__25826__auto___69108)){
args__25833__auto__.push((arguments[i__25827__auto___69109]));

var G__69110 = (i__25827__auto___69109 + (1));
i__25827__auto___69109 = G__69110;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___69103,output_schema69092_69104,input_schema69093_69105,input_checker69094_69106,output_checker69095_69107))
;

om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___69103,output_schema69092_69104,input_schema69093_69105,input_checker69094_69106,output_checker69095_69107){
return (function (G__69096,rest69097){
var validate__30368__auto__ = ufv___69103.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___69111 = cljs.core.list_STAR_.call(null,G__69096,rest69097);
var temp__4657__auto___69112 = input_checker69094_69106.call(null,args__30369__auto___69111);
if(cljs.core.truth_(temp__4657__auto___69112)){
var error__30370__auto___69113 = temp__4657__auto___69112;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__30370__auto___69113)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69093_69105,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___69111,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69113], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__69096;
var children = rest69097;
while(true){
var vec__69100 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__69100,(0),null);
var props = cljs.core.nth.call(null,vec__69100,(1),null);
var classes = om_bootstrap.types.bs_class_set.call(null,bs);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___69114 = output_checker69095_69107.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___69114)){
var error__30370__auto___69115 = temp__4657__auto___69114;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Create a (label {} \"label!\") to show highlight information."], null)),cljs.core.pr_str.call(null,error__30370__auto___69115)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69092_69104,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69115], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___69103,output_schema69092_69104,input_schema69093_69105,input_checker69094_69106,output_checker69095_69107))
;

om_bootstrap.random.label.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.label.cljs$lang$applyTo = ((function (ufv___69103,output_schema69092_69104,input_schema69093_69105,input_checker69094_69106,output_checker69095_69107){
return (function (seq69098){
var G__69099 = cljs.core.first.call(null,seq69098);
var seq69098__$1 = cljs.core.next.call(null,seq69098);
return om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(G__69099,seq69098__$1);
});})(ufv___69103,output_schema69092_69104,input_schema69093_69105,input_checker69094_69106,output_checker69095_69107))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.label),schema.core.make_fn_schema.call(null,output_schema69092_69104,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69093_69105], null)));
var ufv___69127 = schema.utils.use_fn_validation;
var output_schema69116_69128 = om_bootstrap.types.Component;
var input_schema69117_69129 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker69118_69130 = schema.core.checker.call(null,input_schema69117_69129);
var output_checker69119_69131 = schema.core.checker.call(null,output_schema69116_69128);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Use the well as a simple effect on an element to give it an inset effect.
 */
om_bootstrap.random.well = ((function (ufv___69127,output_schema69116_69128,input_schema69117_69129,input_checker69118_69130,output_checker69119_69131){
return (function om_bootstrap$random$well(var_args){
var args__25833__auto__ = [];
var len__25826__auto___69132 = arguments.length;
var i__25827__auto___69133 = (0);
while(true){
if((i__25827__auto___69133 < len__25826__auto___69132)){
args__25833__auto__.push((arguments[i__25827__auto___69133]));

var G__69134 = (i__25827__auto___69133 + (1));
i__25827__auto___69133 = G__69134;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___69127,output_schema69116_69128,input_schema69117_69129,input_checker69118_69130,output_checker69119_69131))
;

om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___69127,output_schema69116_69128,input_schema69117_69129,input_checker69118_69130,output_checker69119_69131){
return (function (G__69120,rest69121){
var validate__30368__auto__ = ufv___69127.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___69135 = cljs.core.list_STAR_.call(null,G__69120,rest69121);
var temp__4657__auto___69136 = input_checker69118_69130.call(null,args__30369__auto___69135);
if(cljs.core.truth_(temp__4657__auto___69136)){
var error__30370__auto___69137 = temp__4657__auto___69136;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__30370__auto___69137)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69117_69129,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___69135,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69137], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__69120;
var children = rest69121;
while(true){
var vec__69124 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));
var bs = cljs.core.nth.call(null,vec__69124,(0),null);
var props = cljs.core.nth.call(null,vec__69124,(1),null);
var class$ = om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___69138 = output_checker69119_69131.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___69138)){
var error__30370__auto___69139 = temp__4657__auto___69138;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"well","well",1222012171,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Use the well as a simple effect on an element to give it an inset effect."], null)),cljs.core.pr_str.call(null,error__30370__auto___69139)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69116_69128,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69139], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___69127,output_schema69116_69128,input_schema69117_69129,input_checker69118_69130,output_checker69119_69131))
;

om_bootstrap.random.well.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.well.cljs$lang$applyTo = ((function (ufv___69127,output_schema69116_69128,input_schema69117_69129,input_checker69118_69130,output_checker69119_69131){
return (function (seq69122){
var G__69123 = cljs.core.first.call(null,seq69122);
var seq69122__$1 = cljs.core.next.call(null,seq69122);
return om_bootstrap.random.well.cljs$core$IFn$_invoke$arity$variadic(G__69123,seq69122__$1);
});})(ufv___69127,output_schema69116_69128,input_schema69117_69129,input_checker69118_69130,output_checker69119_69131))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.well),schema.core.make_fn_schema.call(null,output_schema69116_69128,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69117_69129], null)));
var ufv___69148 = schema.utils.use_fn_validation;
var output_schema69140_69149 = om_bootstrap.types.Component;
var input_schema69141_69150 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker69142_69151 = schema.core.checker.call(null,input_schema69141_69150);
var output_checker69143_69152 = schema.core.checker.call(null,output_schema69140_69149);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   A simple shell for an h1 to appropriately space out and segment
 *   sections of content on a page. It can utilize the h1’s default small
 *   element, as well as most other components (with additional styles).
 */
om_bootstrap.random.page_header = ((function (ufv___69148,output_schema69140_69149,input_schema69141_69150,input_checker69142_69151,output_checker69143_69152){
return (function om_bootstrap$random$page_header(var_args){
var args__25833__auto__ = [];
var len__25826__auto___69153 = arguments.length;
var i__25827__auto___69154 = (0);
while(true){
if((i__25827__auto___69154 < len__25826__auto___69153)){
args__25833__auto__.push((arguments[i__25827__auto___69154]));

var G__69155 = (i__25827__auto___69154 + (1));
i__25827__auto___69154 = G__69155;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___69148,output_schema69140_69149,input_schema69141_69150,input_checker69142_69151,output_checker69143_69152))
;

om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___69148,output_schema69140_69149,input_schema69141_69150,input_checker69142_69151,output_checker69143_69152){
return (function (G__69144,rest69145){
var validate__30368__auto__ = ufv___69148.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___69156 = cljs.core.list_STAR_.call(null,G__69144,rest69145);
var temp__4657__auto___69157 = input_checker69142_69151.call(null,args__30369__auto___69156);
if(cljs.core.truth_(temp__4657__auto___69157)){
var error__30370__auto___69158 = temp__4657__auto___69157;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__30370__auto___69158)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69141_69150,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___69156,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69158], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__69144;
var children = rest69145;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___69159 = output_checker69143_69152.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___69159)){
var error__30370__auto___69160 = temp__4657__auto___69159;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A simple shell for an h1 to appropriately space out and segment\n  sections of content on a page. It can utilize the h1\u2019s default small\n  element, as well as most other components (with additional styles)."], null)),cljs.core.pr_str.call(null,error__30370__auto___69160)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69140_69149,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69160], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___69148,output_schema69140_69149,input_schema69141_69150,input_checker69142_69151,output_checker69143_69152))
;

om_bootstrap.random.page_header.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.page_header.cljs$lang$applyTo = ((function (ufv___69148,output_schema69140_69149,input_schema69141_69150,input_checker69142_69151,output_checker69143_69152){
return (function (seq69146){
var G__69147 = cljs.core.first.call(null,seq69146);
var seq69146__$1 = cljs.core.next.call(null,seq69146);
return om_bootstrap.random.page_header.cljs$core$IFn$_invoke$arity$variadic(G__69147,seq69146__$1);
});})(ufv___69148,output_schema69140_69149,input_schema69141_69150,input_checker69142_69151,output_checker69143_69152))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.page_header),schema.core.make_fn_schema.call(null,output_schema69140_69149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69141_69150], null)));
om_bootstrap.random.Placement = schema.core.enum$.call(null,"top","right","bottom","left");
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___69172 = schema.utils.use_fn_validation;
var output_schema69161_69173 = om_bootstrap.types.Component;
var input_schema69162_69174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.ToolTip,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ToolTip","ToolTip",1279361896,null)], null))),schema.core.Any], null);
var input_checker69163_69175 = schema.core.checker.call(null,input_schema69162_69174);
var output_checker69164_69176 = schema.core.checker.call(null,output_schema69161_69173);
/**
 * Inputs: [opts :- ToolTip & children]
 *   Returns: t/Component
 */
om_bootstrap.random.tooltip = ((function (ufv___69172,output_schema69161_69173,input_schema69162_69174,input_checker69163_69175,output_checker69164_69176){
return (function om_bootstrap$random$tooltip(var_args){
var args__25833__auto__ = [];
var len__25826__auto___69177 = arguments.length;
var i__25827__auto___69178 = (0);
while(true){
if((i__25827__auto___69178 < len__25826__auto___69177)){
args__25833__auto__.push((arguments[i__25827__auto___69178]));

var G__69179 = (i__25827__auto___69178 + (1));
i__25827__auto___69178 = G__69179;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___69172,output_schema69161_69173,input_schema69162_69174,input_checker69163_69175,output_checker69164_69176))
;

om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___69172,output_schema69161_69173,input_schema69162_69174,input_checker69163_69175,output_checker69164_69176){
return (function (G__69165,rest69166){
var validate__30368__auto__ = ufv___69172.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___69180 = cljs.core.list_STAR_.call(null,G__69165,rest69166);
var temp__4657__auto___69181 = input_checker69163_69175.call(null,args__30369__auto___69180);
if(cljs.core.truth_(temp__4657__auto___69181)){
var error__30370__auto___69182 = temp__4657__auto___69181;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___69182)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69162_69174,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___69180,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69182], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__69165;
var children = rest69166;
while(true){
var vec__69169 = om_bootstrap.types.separate.call(null,om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__69169,(0),null);
var _ = cljs.core.nth.call(null,vec__69169,(1),null);
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
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___69183 = output_checker69164_69176.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___69183)){
var error__30370__auto___69184 = temp__4657__auto___69183;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___69184)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69161_69173,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69184], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___69172,output_schema69161_69173,input_schema69162_69174,input_checker69163_69175,output_checker69164_69176))
;

om_bootstrap.random.tooltip.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.tooltip.cljs$lang$applyTo = ((function (ufv___69172,output_schema69161_69173,input_schema69162_69174,input_checker69163_69175,output_checker69164_69176){
return (function (seq69167){
var G__69168 = cljs.core.first.call(null,seq69167);
var seq69167__$1 = cljs.core.next.call(null,seq69167);
return om_bootstrap.random.tooltip.cljs$core$IFn$_invoke$arity$variadic(G__69168,seq69167__$1);
});})(ufv___69172,output_schema69161_69173,input_schema69162_69174,input_checker69163_69175,output_checker69164_69176))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.tooltip),schema.core.make_fn_schema.call(null,output_schema69161_69173,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69162_69174], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__40967__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__40967__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);

return descriptor__40967__auto__;
})();

var component_fnk__40996__auto___69213 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema69190 = schema.core.Any;
var input_schema69191 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map69188","map69188",-1759004209,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker69192 = schema.core.checker.call(null,input_schema69191);
var output_checker69193 = schema.core.checker.call(null,output_schema69190);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193){
return (function om_bootstrap$random$constructor69186(G__69194){
var validate__30368__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___69214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69194], null);
var temp__4657__auto___69215 = input_checker69192.call(null,args__30369__auto___69214);
if(cljs.core.truth_(temp__4657__auto___69215)){
var error__30370__auto___69216 = temp__4657__auto___69215;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor69186","constructor69186",1833763153,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___69216)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69191,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___69214,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69216], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var map69188 = G__69194;
while(true){
if(cljs.core.map_QMARK_.call(null,map69188)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map69188)));
}

var map69189 = plumbing.fnk.schema.safe_get.call(null,map69188,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var bs = plumbing.fnk.schema.safe_get.call(null,map69189,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var props = plumbing.fnk.schema.safe_get.call(null,map69189,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var children = plumbing.fnk.schema.safe_get.call(null,map69189,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var owner = plumbing.fnk.schema.safe_get.call(null,map69188,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.random.t_om_bootstrap$random69199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.random.t_om_bootstrap$random69199 = (function (owner,props,children,output_schema69190,map69188,validate__30368__auto__,input_schema69191,constructor69186,input_checker69192,G__69194,map69189,output_checker69193,ufv__,bs,meta69200){
this.owner = owner;
this.props = props;
this.children = children;
this.output_schema69190 = output_schema69190;
this.map69188 = map69188;
this.validate__30368__auto__ = validate__30368__auto__;
this.input_schema69191 = input_schema69191;
this.constructor69186 = constructor69186;
this.input_checker69192 = input_checker69192;
this.G__69194 = G__69194;
this.map69189 = map69189;
this.output_checker69193 = output_checker69193;
this.ufv__ = ufv__;
this.bs = bs;
this.meta69200 = meta69200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.random.t_om_bootstrap$random69199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map69189,validate__30368__auto__,ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193){
return (function (_69201,meta69200__$1){
var self__ = this;
var _69201__$1 = this;
return (new om_bootstrap.random.t_om_bootstrap$random69199(self__.owner,self__.props,self__.children,self__.output_schema69190,self__.map69188,self__.validate__30368__auto__,self__.input_schema69191,self__.constructor69186,self__.input_checker69192,self__.G__69194,self__.map69189,self__.output_checker69193,self__.ufv__,self__.bs,meta69200__$1));
});})(owner,children,props,bs,map69189,validate__30368__auto__,ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193))
;

om_bootstrap.random.t_om_bootstrap$random69199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map69189,validate__30368__auto__,ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193){
return (function (_69201){
var self__ = this;
var _69201__$1 = this;
return self__.meta69200;
});})(owner,children,props,bs,map69189,validate__30368__auto__,ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193))
;

om_bootstrap.random.t_om_bootstrap$random69199.prototype.om$core$IDisplayName$ = true;

om_bootstrap.random.t_om_bootstrap$random69199.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map69189,validate__30368__auto__,ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193){
return (function (_){
var self__ = this;
var ___$1 = this;
return "alert*";
});})(owner,children,props,bs,map69189,validate__30368__auto__,ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193))
;

om_bootstrap.random.t_om_bootstrap$random69199.prototype.om$core$IDidMount$ = true;

om_bootstrap.random.t_om_bootstrap$random69199.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map69189,validate__30368__auto__,ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193){
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
var G__69202 = self__.owner;
G__69202.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));

return G__69202;
} else {
return null;
}
});})(owner,children,props,bs,map69189,validate__30368__auto__,ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193))
;

om_bootstrap.random.t_om_bootstrap$random69199.prototype.om$core$IRender$ = true;

om_bootstrap.random.t_om_bootstrap$random69199.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map69189,validate__30368__auto__,ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193){
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
});})(owner,children,props,bs,map69189,validate__30368__auto__,ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193))
;

om_bootstrap.random.t_om_bootstrap$random69199.getBasis = ((function (owner,children,props,bs,map69189,validate__30368__auto__,ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema69190","output-schema69190",384938700,null),new cljs.core.Symbol(null,"map69188","map69188",-1759004209,null),new cljs.core.Symbol(null,"validate__30368__auto__","validate__30368__auto__",81766895,null),new cljs.core.Symbol(null,"input-schema69191","input-schema69191",-1970679728,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor69186","constructor69186",1833763153,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker69192","input-checker69192",1891907569,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__69194","G__69194",460735802,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"map69189","map69189",-1681418246,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker69193","output-checker69193",817322940,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"bs","bs",-906042210,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"meta69200","meta69200",2002208257,null)], null);
});})(owner,children,props,bs,map69189,validate__30368__auto__,ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193))
;

om_bootstrap.random.t_om_bootstrap$random69199.cljs$lang$type = true;

om_bootstrap.random.t_om_bootstrap$random69199.cljs$lang$ctorStr = "om-bootstrap.random/t_om_bootstrap$random69199";

om_bootstrap.random.t_om_bootstrap$random69199.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map69189,validate__30368__auto__,ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-bootstrap.random/t_om_bootstrap$random69199");
});})(owner,children,props,bs,map69189,validate__30368__auto__,ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193))
;

om_bootstrap.random.__GT_t_om_bootstrap$random69199 = ((function (owner,children,props,bs,map69189,validate__30368__auto__,ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193){
return (function om_bootstrap$random$constructor69186_$___GT_t_om_bootstrap$random69199(owner__$1,props__$1,children__$1,output_schema69190__$1,map69188__$1,validate__30368__auto____$1,input_schema69191__$1,constructor69186__$1,input_checker69192__$1,G__69194__$1,map69189__$1,output_checker69193__$1,ufv____$1,bs__$1,meta69200){
return (new om_bootstrap.random.t_om_bootstrap$random69199(owner__$1,props__$1,children__$1,output_schema69190__$1,map69188__$1,validate__30368__auto____$1,input_schema69191__$1,constructor69186__$1,input_checker69192__$1,G__69194__$1,map69189__$1,output_checker69193__$1,ufv____$1,bs__$1,meta69200));
});})(owner,children,props,bs,map69189,validate__30368__auto__,ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193))
;

}

return (new om_bootstrap.random.t_om_bootstrap$random69199(owner,props,children,output_schema69190,map69188,validate__30368__auto__,input_schema69191,om_bootstrap$random$constructor69186,input_checker69192,G__69194,map69189,output_checker69193,ufv__,bs,null));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___69217 = output_checker69193.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___69217)){
var error__30370__auto___69218 = temp__4657__auto___69217;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor69186","constructor69186",1833763153,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___69218)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69190,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69218], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv__,output_schema69190,input_schema69191,input_checker69192,output_checker69193))
,schema.core.make_fn_schema.call(null,output_schema69190,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69191], null)));
})();
/**
 * Renders the alert component with timeout mixed in. TODO: This
 * should probably use the component macro and be defined inline under
 * the alert function. No need for a separate name.
 */
om_bootstrap.random.alert_STAR_ = ((function (component_fnk__40996__auto___69213){
return (function om_bootstrap$random$alert_STAR_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___69219 = arguments.length;
var i__25827__auto___69220 = (0);
while(true){
if((i__25827__auto___69220 < len__25826__auto___69219)){
args__25833__auto__.push((arguments[i__25827__auto___69220]));

var G__69221 = (i__25827__auto___69220 + (1));
i__25827__auto___69220 = G__69221;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});})(component_fnk__40996__auto___69213))
;

om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__40996__auto___69213){
return (function (data__40997__auto__,owner69185,p__69206){
var vec__69207 = p__69206;
var opts__40998__auto__ = cljs.core.nth.call(null,vec__69207,(0),null);
return component_fnk__40996__auto___69213.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__40998__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner69185,new cljs.core.Keyword(null,"data","data",-232669377),data__40997__auto__], null));
});})(component_fnk__40996__auto___69213))
;

om_bootstrap.random.alert_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.random.alert_STAR_.cljs$lang$applyTo = ((function (component_fnk__40996__auto___69213){
return (function (seq69203){
var G__69204 = cljs.core.first.call(null,seq69203);
var seq69203__$1 = cljs.core.next.call(null,seq69203);
var G__69205 = cljs.core.first.call(null,seq69203__$1);
var seq69203__$2 = cljs.core.next.call(null,seq69203__$1);
return om_bootstrap.random.alert_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__69204,G__69205,seq69203__$2);
});})(component_fnk__40996__auto___69213))
;


om_bootstrap.random.__GT_alert_STAR_ = (function om_bootstrap$random$__GT_alert_STAR_(var_args){
var args69210 = [];
var len__25826__auto___69222 = arguments.length;
var i__25827__auto___69223 = (0);
while(true){
if((i__25827__auto___69223 < len__25826__auto___69222)){
args69210.push((arguments[i__25827__auto___69223]));

var G__69224 = (i__25827__auto___69223 + (1));
i__25827__auto___69223 = G__69224;
continue;
} else {
}
break;
}

var G__69212 = args69210.length;
switch (G__69212) {
case 1:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69210.length)].join('')));

}
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__40965__auto__){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__40965__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__40965__auto__,m69187){
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,cursor__40965__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m69187));
});

om_bootstrap.random.__GT_alert_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___69237 = schema.utils.use_fn_validation;
var output_schema69226_69238 = om_bootstrap.types.Component;
var input_schema69227_69239 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Alert,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Alert","Alert",231771408,null)], null))),schema.core.Any], null);
var input_checker69228_69240 = schema.core.checker.call(null,input_schema69227_69239);
var output_checker69229_69241 = schema.core.checker.call(null,output_schema69226_69238);
/**
 * Inputs: [opts :- Alert & children]
 *   Returns: t/Component
 * 
 *   Wrapper for the alert component to allow a better user interface.
 */
om_bootstrap.random.alert = ((function (ufv___69237,output_schema69226_69238,input_schema69227_69239,input_checker69228_69240,output_checker69229_69241){
return (function om_bootstrap$random$alert(var_args){
var args__25833__auto__ = [];
var len__25826__auto___69242 = arguments.length;
var i__25827__auto___69243 = (0);
while(true){
if((i__25827__auto___69243 < len__25826__auto___69242)){
args__25833__auto__.push((arguments[i__25827__auto___69243]));

var G__69244 = (i__25827__auto___69243 + (1));
i__25827__auto___69243 = G__69244;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___69237,output_schema69226_69238,input_schema69227_69239,input_checker69228_69240,output_checker69229_69241))
;

om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___69237,output_schema69226_69238,input_schema69227_69239,input_checker69228_69240,output_checker69229_69241){
return (function (G__69230,rest69231){
var validate__30368__auto__ = ufv___69237.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___69245 = cljs.core.list_STAR_.call(null,G__69230,rest69231);
var temp__4657__auto___69246 = input_checker69228_69240.call(null,args__30369__auto___69245);
if(cljs.core.truth_(temp__4657__auto___69246)){
var error__30370__auto___69247 = temp__4657__auto___69246;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__30370__auto___69247)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69227_69239,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___69245,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69247], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__69230;
var children = rest69231;
while(true){
var vec__69234 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);
var bs = cljs.core.nth.call(null,vec__69234,(0),null);
var props = cljs.core.nth.call(null,vec__69234,(1),null);
return om.core.build.call(null,om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___69248 = output_checker69229_69241.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___69248)){
var error__30370__auto___69249 = temp__4657__auto___69248;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrapper for the alert component to allow a better user interface."], null)),cljs.core.pr_str.call(null,error__30370__auto___69249)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69226_69238,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69249], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___69237,output_schema69226_69238,input_schema69227_69239,input_checker69228_69240,output_checker69229_69241))
;

om_bootstrap.random.alert.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.alert.cljs$lang$applyTo = ((function (ufv___69237,output_schema69226_69238,input_schema69227_69239,input_checker69228_69240,output_checker69229_69241){
return (function (seq69232){
var G__69233 = cljs.core.first.call(null,seq69232);
var seq69232__$1 = cljs.core.next.call(null,seq69232);
return om_bootstrap.random.alert.cljs$core$IFn$_invoke$arity$variadic(G__69233,seq69232__$1);
});})(ufv___69237,output_schema69226_69238,input_schema69227_69239,input_checker69228_69240,output_checker69229_69241))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.alert),schema.core.make_fn_schema.call(null,output_schema69226_69238,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69227_69239], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___69261 = schema.utils.use_fn_validation;
var output_schema69250_69262 = om_bootstrap.types.Component;
var input_schema69251_69263 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Popover,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Popover","Popover",-1480406690,null)], null))),schema.core.Any], null);
var input_checker69252_69264 = schema.core.checker.call(null,input_schema69251_69263);
var output_checker69253_69265 = schema.core.checker.call(null,output_schema69250_69262);
/**
 * Inputs: [opts :- Popover & children]
 *   Returns: t/Component
 */
om_bootstrap.random.popover = ((function (ufv___69261,output_schema69250_69262,input_schema69251_69263,input_checker69252_69264,output_checker69253_69265){
return (function om_bootstrap$random$popover(var_args){
var args__25833__auto__ = [];
var len__25826__auto___69266 = arguments.length;
var i__25827__auto___69267 = (0);
while(true){
if((i__25827__auto___69267 < len__25826__auto___69266)){
args__25833__auto__.push((arguments[i__25827__auto___69267]));

var G__69268 = (i__25827__auto___69267 + (1));
i__25827__auto___69267 = G__69268;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___69261,output_schema69250_69262,input_schema69251_69263,input_checker69252_69264,output_checker69253_69265))
;

om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___69261,output_schema69250_69262,input_schema69251_69263,input_checker69252_69264,output_checker69253_69265){
return (function (G__69254,rest69255){
var validate__30368__auto__ = ufv___69261.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___69269 = cljs.core.list_STAR_.call(null,G__69254,rest69255);
var temp__4657__auto___69270 = input_checker69252_69264.call(null,args__30369__auto___69269);
if(cljs.core.truth_(temp__4657__auto___69270)){
var error__30370__auto___69271 = temp__4657__auto___69270;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___69271)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69251_69263,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___69269,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69271], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__69254;
var children = rest69255;
while(true){
var vec__69258 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));
var bs = cljs.core.nth.call(null,vec__69258,(0),null);
var _ = cljs.core.nth.call(null,vec__69258,(1),null);
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
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___69272 = output_checker69253_69265.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___69272)){
var error__30370__auto___69273 = temp__4657__auto___69272;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"popover","popover",-169050609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___69273)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69250_69262,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69273], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___69261,output_schema69250_69262,input_schema69251_69263,input_checker69252_69264,output_checker69253_69265))
;

om_bootstrap.random.popover.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.popover.cljs$lang$applyTo = ((function (ufv___69261,output_schema69250_69262,input_schema69251_69263,input_checker69252_69264,output_checker69253_69265){
return (function (seq69256){
var G__69257 = cljs.core.first.call(null,seq69256);
var seq69256__$1 = cljs.core.next.call(null,seq69256);
return om_bootstrap.random.popover.cljs$core$IFn$_invoke$arity$variadic(G__69257,seq69256__$1);
});})(ufv___69261,output_schema69250_69262,input_schema69251_69263,input_checker69252_69264,output_checker69253_69265))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.popover),schema.core.make_fn_schema.call(null,output_schema69250_69262,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69251_69263], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___69285 = schema.utils.use_fn_validation;
var output_schema69274_69286 = om_bootstrap.types.Component;
var input_schema69275_69287 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Badge,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Badge","Badge",1932684841,null)], null))),schema.core.Any], null);
var input_checker69276_69288 = schema.core.checker.call(null,input_schema69275_69287);
var output_checker69277_69289 = schema.core.checker.call(null,output_schema69274_69286);
/**
 * Inputs: [opts :- Badge & children]
 *   Returns: t/Component
 */
om_bootstrap.random.badge = ((function (ufv___69285,output_schema69274_69286,input_schema69275_69287,input_checker69276_69288,output_checker69277_69289){
return (function om_bootstrap$random$badge(var_args){
var args__25833__auto__ = [];
var len__25826__auto___69290 = arguments.length;
var i__25827__auto___69291 = (0);
while(true){
if((i__25827__auto___69291 < len__25826__auto___69290)){
args__25833__auto__.push((arguments[i__25827__auto___69291]));

var G__69292 = (i__25827__auto___69291 + (1));
i__25827__auto___69291 = G__69292;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___69285,output_schema69274_69286,input_schema69275_69287,input_checker69276_69288,output_checker69277_69289))
;

om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___69285,output_schema69274_69286,input_schema69275_69287,input_checker69276_69288,output_checker69277_69289){
return (function (G__69278,rest69279){
var validate__30368__auto__ = ufv___69285.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___69293 = cljs.core.list_STAR_.call(null,G__69278,rest69279);
var temp__4657__auto___69294 = input_checker69276_69288.call(null,args__30369__auto___69293);
if(cljs.core.truth_(temp__4657__auto___69294)){
var error__30370__auto___69295 = temp__4657__auto___69294;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___69295)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69275_69287,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___69293,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69295], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__69278;
var children = rest69279;
while(true){
var vec__69282 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Badge,opts);
var bs = cljs.core.nth.call(null,vec__69282,(0),null);
var props = cljs.core.nth.call(null,vec__69282,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_.call(null,children)], null);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___69296 = output_checker69277_69289.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___69296)){
var error__30370__auto___69297 = temp__4657__auto___69296;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___69297)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69274_69286,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69297], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___69285,output_schema69274_69286,input_schema69275_69287,input_checker69276_69288,output_checker69277_69289))
;

om_bootstrap.random.badge.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.badge.cljs$lang$applyTo = ((function (ufv___69285,output_schema69274_69286,input_schema69275_69287,input_checker69276_69288,output_checker69277_69289){
return (function (seq69280){
var G__69281 = cljs.core.first.call(null,seq69280);
var seq69280__$1 = cljs.core.next.call(null,seq69280);
return om_bootstrap.random.badge.cljs$core$IFn$_invoke$arity$variadic(G__69281,seq69280__$1);
});})(ufv___69285,output_schema69274_69286,input_schema69275_69287,input_checker69276_69288,output_checker69277_69289))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.badge),schema.core.make_fn_schema.call(null,output_schema69274_69286,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69275_69287], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___69309 = schema.utils.use_fn_validation;
var output_schema69298_69310 = om_bootstrap.types.Component;
var input_schema69299_69311 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.random.Glyphicon,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Glyphicon","Glyphicon",-683810897,null)], null))),schema.core.Any], null);
var input_checker69300_69312 = schema.core.checker.call(null,input_schema69299_69311);
var output_checker69301_69313 = schema.core.checker.call(null,output_schema69298_69310);
/**
 * Inputs: [opts :- Glyphicon & children]
 *   Returns: t/Component
 */
om_bootstrap.random.glyphicon = ((function (ufv___69309,output_schema69298_69310,input_schema69299_69311,input_checker69300_69312,output_checker69301_69313){
return (function om_bootstrap$random$glyphicon(var_args){
var args__25833__auto__ = [];
var len__25826__auto___69314 = arguments.length;
var i__25827__auto___69315 = (0);
while(true){
if((i__25827__auto___69315 < len__25826__auto___69314)){
args__25833__auto__.push((arguments[i__25827__auto___69315]));

var G__69316 = (i__25827__auto___69315 + (1));
i__25827__auto___69315 = G__69316;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___69309,output_schema69298_69310,input_schema69299_69311,input_checker69300_69312,output_checker69301_69313))
;

om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___69309,output_schema69298_69310,input_schema69299_69311,input_checker69300_69312,output_checker69301_69313){
return (function (G__69302,rest69303){
var validate__30368__auto__ = ufv___69309.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___69317 = cljs.core.list_STAR_.call(null,G__69302,rest69303);
var temp__4657__auto___69318 = input_checker69300_69312.call(null,args__30369__auto___69317);
if(cljs.core.truth_(temp__4657__auto___69318)){
var error__30370__auto___69319 = temp__4657__auto___69318;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___69319)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69299_69311,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___69317,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69319], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__69302;
var children = rest69303;
while(true){
var vec__69306 = om_bootstrap.types.separate.call(null,om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));
var bs = cljs.core.nth.call(null,vec__69306,(0),null);
var props = cljs.core.nth.call(null,vec__69306,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),[cljs.core.str("glyphicon-"),cljs.core.str(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))].join(''),true);
return om_tools.dom.element.call(null,React.DOM.span,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___69320 = output_checker69301_69313.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___69320)){
var error__30370__auto___69321 = temp__4657__auto___69320;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___69321)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69298_69310,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69321], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___69309,output_schema69298_69310,input_schema69299_69311,input_checker69300_69312,output_checker69301_69313))
;

om_bootstrap.random.glyphicon.cljs$lang$maxFixedArity = (1);

om_bootstrap.random.glyphicon.cljs$lang$applyTo = ((function (ufv___69309,output_schema69298_69310,input_schema69299_69311,input_checker69300_69312,output_checker69301_69313){
return (function (seq69304){
var G__69305 = cljs.core.first.call(null,seq69304);
var seq69304__$1 = cljs.core.next.call(null,seq69304);
return om_bootstrap.random.glyphicon.cljs$core$IFn$_invoke$arity$variadic(G__69305,seq69304__$1);
});})(ufv___69309,output_schema69298_69310,input_schema69299_69311,input_checker69300_69312,output_checker69301_69313))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.random.glyphicon),schema.core.make_fn_schema.call(null,output_schema69298_69310,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69299_69311], null)));

//# sourceMappingURL=random.js.map?rel=1478399654701