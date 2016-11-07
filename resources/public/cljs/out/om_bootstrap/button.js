// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.button');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.mixin');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.button.Button = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"block?","block?",1102479923)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004)),schema.core.Bool], true, false));
om_bootstrap.button.ButtonGroup = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.Bool], true, false));
var ufv___50316 = schema.utils.use_fn_validation;
var output_schema50310_50317 = schema.core.Any;
var input_schema50311_50318 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker50312_50319 = schema.core.checker.call(null,input_schema50311_50318);
var output_checker50313_50320 = schema.core.checker.call(null,output_schema50310_50317);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___50316,output_schema50310_50317,input_schema50311_50318,input_checker50312_50319,output_checker50313_50320){
return (function om_bootstrap$button$render_anchor(G__50314,G__50315){
var validate__30032__auto__ = ufv___50316.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50321 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50314,G__50315], null);
var temp__4657__auto___50322 = input_checker50312_50319.call(null,args__30033__auto___50321);
if(cljs.core.truth_(temp__4657__auto___50322)){
var error__30034__auto___50323 = temp__4657__auto___50322;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50323)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50311_50318,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50321,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50323], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__50314;
var children = G__50315;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50324 = output_checker50313_50320.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50324)){
var error__30034__auto___50325 = temp__4657__auto___50324;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50325)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50310_50317,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50325], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50316,output_schema50310_50317,input_schema50311_50318,input_checker50312_50319,output_checker50313_50320))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema50310_50317,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50311_50318], null)));
var ufv___50337 = schema.utils.use_fn_validation;
var output_schema50326_50338 = om_bootstrap.types.Component;
var input_schema50327_50339 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Button","Button",-1787718586,null)], null))),schema.core.Any], null);
var input_checker50328_50340 = schema.core.checker.call(null,input_schema50327_50339);
var output_checker50329_50341 = schema.core.checker.call(null,output_schema50326_50338);
/**
 * Inputs: [props :- Button & children]
 *   Returns: t/Component
 * 
 *   Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___50337,output_schema50326_50338,input_schema50327_50339,input_checker50328_50340,output_checker50329_50341){
return (function om_bootstrap$button$button(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50342 = arguments.length;
var i__25827__auto___50343 = (0);
while(true){
if((i__25827__auto___50343 < len__25826__auto___50342)){
args__25833__auto__.push((arguments[i__25827__auto___50343]));

var G__50344 = (i__25827__auto___50343 + (1));
i__25827__auto___50343 = G__50344;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___50337,output_schema50326_50338,input_schema50327_50339,input_checker50328_50340,output_checker50329_50341))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___50337,output_schema50326_50338,input_schema50327_50339,input_checker50328_50340,output_checker50329_50341){
return (function (G__50330,rest50331){
var validate__30032__auto__ = ufv___50337.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50345 = cljs.core.list_STAR_.call(null,G__50330,rest50331);
var temp__4657__auto___50346 = input_checker50328_50340.call(null,args__30033__auto___50345);
if(cljs.core.truth_(temp__4657__auto___50346)){
var error__30034__auto___50347 = temp__4657__auto___50346;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__30034__auto___50347)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50327_50339,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50345,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50347], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var props = G__50330;
var children = rest50331;
while(true){
var vec__50334 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__50334,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__50334,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,({"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)))}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs);
}
})())){
return om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children);
} else {
return om_tools.dom.element.call(null,React.DOM.button,om_bootstrap.util.merge_props.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses__$1),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50348 = output_checker50329_50341.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50348)){
var error__30034__auto___50349 = temp__4657__auto___50348;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__30034__auto___50349)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50326_50338,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50349], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50337,output_schema50326_50338,input_schema50327_50339,input_checker50328_50340,output_checker50329_50341))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___50337,output_schema50326_50338,input_schema50327_50339,input_checker50328_50340,output_checker50329_50341){
return (function (seq50332){
var G__50333 = cljs.core.first.call(null,seq50332);
var seq50332__$1 = cljs.core.next.call(null,seq50332);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__50333,seq50332__$1);
});})(ufv___50337,output_schema50326_50338,input_schema50327_50339,input_checker50328_50340,output_checker50329_50341))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema50326_50338,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50327_50339], null)));
var ufv___50361 = schema.utils.use_fn_validation;
var output_schema50350_50362 = om_bootstrap.types.Component;
var input_schema50351_50363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker50352_50364 = schema.core.checker.call(null,input_schema50351_50363);
var output_checker50353_50365 = schema.core.checker.call(null,output_schema50350_50362);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___50361,output_schema50350_50362,input_schema50351_50363,input_checker50352_50364,output_checker50353_50365){
return (function om_bootstrap$button$toolbar(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50366 = arguments.length;
var i__25827__auto___50367 = (0);
while(true){
if((i__25827__auto___50367 < len__25826__auto___50366)){
args__25833__auto__.push((arguments[i__25827__auto___50367]));

var G__50368 = (i__25827__auto___50367 + (1));
i__25827__auto___50367 = G__50368;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___50361,output_schema50350_50362,input_schema50351_50363,input_checker50352_50364,output_checker50353_50365))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___50361,output_schema50350_50362,input_schema50351_50363,input_checker50352_50364,output_checker50353_50365){
return (function (G__50354,rest50355){
var validate__30032__auto__ = ufv___50361.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50369 = cljs.core.list_STAR_.call(null,G__50354,rest50355);
var temp__4657__auto___50370 = input_checker50352_50364.call(null,args__30033__auto___50369);
if(cljs.core.truth_(temp__4657__auto___50370)){
var error__30034__auto___50371 = temp__4657__auto___50370;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__30034__auto___50371)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50351_50363,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50369,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50371], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__50354;
var children = rest50355;
while(true){
var vec__50358 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__50358,(0),null);
var props = cljs.core.nth.call(null,vec__50358,(1),null);
return cljs.core.apply.call(null,React.DOM.div,({"role": "toolbar", "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs)))}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50372 = output_checker50353_50365.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50372)){
var error__30034__auto___50373 = temp__4657__auto___50372;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__30034__auto___50373)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50350_50362,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50373], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50361,output_schema50350_50362,input_schema50351_50363,input_checker50352_50364,output_checker50353_50365))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___50361,output_schema50350_50362,input_schema50351_50363,input_checker50352_50364,output_checker50353_50365){
return (function (seq50356){
var G__50357 = cljs.core.first.call(null,seq50356);
var seq50356__$1 = cljs.core.next.call(null,seq50356);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__50357,seq50356__$1);
});})(ufv___50361,output_schema50350_50362,input_schema50351_50363,input_checker50352_50364,output_checker50353_50365))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema50350_50362,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50351_50363], null)));
var ufv___50385 = schema.utils.use_fn_validation;
var output_schema50374_50386 = om_bootstrap.types.Component;
var input_schema50375_50387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null)], null))),schema.core.Any], null);
var input_checker50376_50388 = schema.core.checker.call(null,input_schema50375_50387);
var output_checker50377_50389 = schema.core.checker.call(null,output_schema50374_50386);
/**
 * Inputs: [opts :- ButtonGroup & children]
 *   Returns: t/Component
 * 
 *   Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___50385,output_schema50374_50386,input_schema50375_50387,input_checker50376_50388,output_checker50377_50389){
return (function om_bootstrap$button$button_group(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50390 = arguments.length;
var i__25827__auto___50391 = (0);
while(true){
if((i__25827__auto___50391 < len__25826__auto___50390)){
args__25833__auto__.push((arguments[i__25827__auto___50391]));

var G__50392 = (i__25827__auto___50391 + (1));
i__25827__auto___50391 = G__50392;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___50385,output_schema50374_50386,input_schema50375_50387,input_checker50376_50388,output_checker50377_50389))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___50385,output_schema50374_50386,input_schema50375_50387,input_checker50376_50388,output_checker50377_50389){
return (function (G__50378,rest50379){
var validate__30032__auto__ = ufv___50385.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50393 = cljs.core.list_STAR_.call(null,G__50378,rest50379);
var temp__4657__auto___50394 = input_checker50376_50388.call(null,args__30033__auto___50393);
if(cljs.core.truth_(temp__4657__auto___50394)){
var error__30034__auto___50395 = temp__4657__auto___50394;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__30034__auto___50395)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50375_50387,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50393,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50395], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__50378;
var children = rest50379;
while(true){
var vec__50382 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__50382,(0),null);
var props = cljs.core.nth.call(null,vec__50382,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50396 = output_checker50377_50389.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50396)){
var error__30034__auto___50397 = temp__4657__auto___50396;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__30034__auto___50397)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50374_50386,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50397], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50385,output_schema50374_50386,input_schema50375_50387,input_checker50376_50388,output_checker50377_50389))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___50385,output_schema50374_50386,input_schema50375_50387,input_checker50376_50388,output_checker50377_50389){
return (function (seq50380){
var G__50381 = cljs.core.first.call(null,seq50380);
var seq50380__$1 = cljs.core.next.call(null,seq50380);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__50381,seq50380__$1);
});})(ufv___50385,output_schema50374_50386,input_schema50375_50387,input_checker50376_50388,output_checker50377_50389))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema50374_50386,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50375_50387], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function om_bootstrap$button$render_nav_item(props,open_QMARK_,children){
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return cljs.core.apply.call(null,React.DOM.li,({"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function om_bootstrap$button$render_button_group(props,open_QMARK_,children){
var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));

var component_fnk__50286__auto___50433 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema50402 = schema.core.Any;
var input_schema50403 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map50401","map50401",1625521435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker50404 = schema.core.checker.call(null,input_schema50403);
var output_checker50405 = schema.core.checker.call(null,output_schema50402);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405){
return (function om_bootstrap$button$constructor50399(G__50406){
var validate__30032__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50406], null);
var temp__4657__auto___50435 = input_checker50404.call(null,args__30033__auto___50434);
if(cljs.core.truth_(temp__4657__auto___50435)){
var error__30034__auto___50436 = temp__4657__auto___50435;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor50399","constructor50399",-440014815,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50436)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50403,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50434,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50436], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var map50401 = G__50406;
while(true){
if(cljs.core.map_QMARK_.call(null,map50401)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map50401)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map50401,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button50415 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button50415 = (function (constructor50399,output_schema50402,validate__30032__auto__,owner,G__50406,input_schema50403,output_checker50405,input_checker50404,map50401,ufv__,meta50416){
this.constructor50399 = constructor50399;
this.output_schema50402 = output_schema50402;
this.validate__30032__auto__ = validate__30032__auto__;
this.owner = owner;
this.G__50406 = G__50406;
this.input_schema50403 = input_schema50403;
this.output_checker50405 = output_checker50405;
this.input_checker50404 = input_checker50404;
this.map50401 = map50401;
this.ufv__ = ufv__;
this.meta50416 = meta50416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button50415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__30032__auto__,ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405){
return (function (_50417,meta50416__$1){
var self__ = this;
var _50417__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button50415(self__.constructor50399,self__.output_schema50402,self__.validate__30032__auto__,self__.owner,self__.G__50406,self__.input_schema50403,self__.output_checker50405,self__.input_checker50404,self__.map50401,self__.ufv__,meta50416__$1));
});})(owner,validate__30032__auto__,ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405))
;

om_bootstrap.button.t_om_bootstrap$button50415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__30032__auto__,ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405){
return (function (_50417){
var self__ = this;
var _50417__$1 = this;
return self__.meta50416;
});})(owner,validate__30032__auto__,ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405))
;

om_bootstrap.button.t_om_bootstrap$button50415.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button50415.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__30032__auto__,ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__30032__auto__,ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405))
;

om_bootstrap.button.t_om_bootstrap$button50415.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button50415.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__30032__auto__,ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__50418 = om.core.get_props.call(null,self__.owner);
var map__50418__$1 = ((((!((map__50418 == null)))?((((map__50418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50418):map__50418);
var opts = cljs.core.get.call(null,map__50418__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__50418__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__50419 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__50419,(0),null);
var props = cljs.core.nth.call(null,vec__50419,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__50418,map__50418__$1,opts,children,vec__50419,bs,props,classes,___$1,owner,validate__30032__auto__,ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405){
return (function (e){
var temp__4657__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var on_select = temp__4657__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__50418,map__50418__$1,opts,children,vec__50419,bs,props,classes,___$1,owner,validate__30032__auto__,ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405))
;
var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,({"onClick": om_tools.dom.format_opts.call(null,handle_click), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "tabIndex": "-1"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));
var li_attrs = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var k = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
} else {
return null;
}
})());
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
});})(owner,validate__30032__auto__,ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405))
;

om_bootstrap.button.t_om_bootstrap$button50415.getBasis = ((function (owner,validate__30032__auto__,ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"constructor50399","constructor50399",-440014815,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema50402","output-schema50402",-1390646686,null),new cljs.core.Symbol(null,"validate__30032__auto__","validate__30032__auto__",-1861236669,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__50406","G__50406",646125903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"input-schema50403","input-schema50403",-892611184,null),new cljs.core.Symbol(null,"output-checker50405","output-checker50405",982062961,null),new cljs.core.Symbol(null,"input-checker50404","input-checker50404",-521047143,null),new cljs.core.Symbol(null,"map50401","map50401",1625521435,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta50416","meta50416",-1060057762,null)], null);
});})(owner,validate__30032__auto__,ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405))
;

om_bootstrap.button.t_om_bootstrap$button50415.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button50415.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button50415";

om_bootstrap.button.t_om_bootstrap$button50415.cljs$lang$ctorPrWriter = ((function (owner,validate__30032__auto__,ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-bootstrap.button/t_om_bootstrap$button50415");
});})(owner,validate__30032__auto__,ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405))
;

om_bootstrap.button.__GT_t_om_bootstrap$button50415 = ((function (owner,validate__30032__auto__,ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405){
return (function om_bootstrap$button$constructor50399_$___GT_t_om_bootstrap$button50415(constructor50399__$1,output_schema50402__$1,validate__30032__auto____$1,owner__$1,G__50406__$1,input_schema50403__$1,output_checker50405__$1,input_checker50404__$1,map50401__$1,ufv____$1,meta50416){
return (new om_bootstrap.button.t_om_bootstrap$button50415(constructor50399__$1,output_schema50402__$1,validate__30032__auto____$1,owner__$1,G__50406__$1,input_schema50403__$1,output_checker50405__$1,input_checker50404__$1,map50401__$1,ufv____$1,meta50416));
});})(owner,validate__30032__auto__,ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button50415(om_bootstrap$button$constructor50399,output_schema50402,validate__30032__auto__,owner,G__50406,input_schema50403,output_checker50405,input_checker50404,map50401,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50437 = output_checker50405.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50437)){
var error__30034__auto___50438 = temp__4657__auto___50437;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor50399","constructor50399",-440014815,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50438)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50402,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50438], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv__,output_schema50402,input_schema50403,input_checker50404,output_checker50405))
,schema.core.make_fn_schema.call(null,output_schema50402,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50403], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 *   wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__50286__auto___50433){
return (function om_bootstrap$button$menu_item_STAR_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50439 = arguments.length;
var i__25827__auto___50440 = (0);
while(true){
if((i__25827__auto___50440 < len__25826__auto___50439)){
args__25833__auto__.push((arguments[i__25827__auto___50440]));

var G__50441 = (i__25827__auto___50440 + (1));
i__25827__auto___50440 = G__50441;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});})(component_fnk__50286__auto___50433))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__50286__auto___50433){
return (function (data__50287__auto__,owner50398,p__50426){
var vec__50427 = p__50426;
var opts__50288__auto__ = cljs.core.nth.call(null,vec__50427,(0),null);
return component_fnk__50286__auto___50433.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__50288__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner50398,new cljs.core.Keyword(null,"data","data",-232669377),data__50287__auto__], null));
});})(component_fnk__50286__auto___50433))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__50286__auto___50433){
return (function (seq50423){
var G__50424 = cljs.core.first.call(null,seq50423);
var seq50423__$1 = cljs.core.next.call(null,seq50423);
var G__50425 = cljs.core.first.call(null,seq50423__$1);
var seq50423__$2 = cljs.core.next.call(null,seq50423__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__50424,G__50425,seq50423__$2);
});})(component_fnk__50286__auto___50433))
;


om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(var_args){
var args50430 = [];
var len__25826__auto___50442 = arguments.length;
var i__25827__auto___50443 = (0);
while(true){
if((i__25827__auto___50443 < len__25826__auto___50442)){
args50430.push((arguments[i__25827__auto___50443]));

var G__50444 = (i__25827__auto___50443 + (1));
i__25827__auto___50443 = G__50444;
continue;
} else {
}
break;
}

var G__50432 = args50430.length;
switch (G__50432) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50430.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__50255__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__50255__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__50255__auto__,m50400){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__50255__auto__,m50400);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___50454 = schema.utils.use_fn_validation;
var output_schema50446_50455 = om_bootstrap.types.Component;
var input_schema50447_50456 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"MenuItem","MenuItem",1235363736,null)], null))),schema.core.Any], null);
var input_checker50448_50457 = schema.core.checker.call(null,input_schema50447_50456);
var output_checker50449_50458 = schema.core.checker.call(null,output_schema50446_50455);
/**
 * Inputs: [opts :- MenuItem & children]
 *   Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___50454,output_schema50446_50455,input_schema50447_50456,input_checker50448_50457,output_checker50449_50458){
return (function om_bootstrap$button$menu_item(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50459 = arguments.length;
var i__25827__auto___50460 = (0);
while(true){
if((i__25827__auto___50460 < len__25826__auto___50459)){
args__25833__auto__.push((arguments[i__25827__auto___50460]));

var G__50461 = (i__25827__auto___50460 + (1));
i__25827__auto___50460 = G__50461;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___50454,output_schema50446_50455,input_schema50447_50456,input_checker50448_50457,output_checker50449_50458))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___50454,output_schema50446_50455,input_schema50447_50456,input_checker50448_50457,output_checker50449_50458){
return (function (G__50450,rest50451){
var validate__30032__auto__ = ufv___50454.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50462 = cljs.core.list_STAR_.call(null,G__50450,rest50451);
var temp__4657__auto___50463 = input_checker50448_50457.call(null,args__30033__auto___50462);
if(cljs.core.truth_(temp__4657__auto___50463)){
var error__30034__auto___50464 = temp__4657__auto___50463;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50464)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50447_50456,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50462,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50464], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__50450;
var children = rest50451;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50465 = output_checker50449_50458.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50465)){
var error__30034__auto___50466 = temp__4657__auto___50465;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50466)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50446_50455,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50466], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50454,output_schema50446_50455,input_schema50447_50456,input_checker50448_50457,output_checker50449_50458))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___50454,output_schema50446_50455,input_schema50447_50456,input_checker50448_50457,output_checker50449_50458){
return (function (seq50452){
var G__50453 = cljs.core.first.call(null,seq50452);
var seq50452__$1 = cljs.core.next.call(null,seq50452);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__50453,seq50452__$1);
});})(ufv___50454,output_schema50446_50455,input_schema50447_50456,input_checker50448_50457,output_checker50449_50458))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema50446_50455,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50447_50456], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___50479 = schema.utils.use_fn_validation;
var output_schema50468_50480 = om_bootstrap.types.Component;
var input_schema50469_50481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownMenu","DropdownMenu",881901742,null)], null))),schema.core.Any], null);
var input_checker50470_50482 = schema.core.checker.call(null,input_schema50469_50481);
var output_checker50471_50483 = schema.core.checker.call(null,output_schema50468_50480);
/**
 * Inputs: [opts :- DropdownMenu & children]
 *   Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___50479,output_schema50468_50480,input_schema50469_50481,input_checker50470_50482,output_checker50471_50483){
return (function om_bootstrap$button$dropdown_menu(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50484 = arguments.length;
var i__25827__auto___50485 = (0);
while(true){
if((i__25827__auto___50485 < len__25826__auto___50484)){
args__25833__auto__.push((arguments[i__25827__auto___50485]));

var G__50486 = (i__25827__auto___50485 + (1));
i__25827__auto___50485 = G__50486;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___50479,output_schema50468_50480,input_schema50469_50481,input_checker50470_50482,output_checker50471_50483))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___50479,output_schema50468_50480,input_schema50469_50481,input_checker50470_50482,output_checker50471_50483){
return (function (G__50472,rest50473){
var validate__30032__auto__ = ufv___50479.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50487 = cljs.core.list_STAR_.call(null,G__50472,rest50473);
var temp__4657__auto___50488 = input_checker50470_50482.call(null,args__30033__auto___50487);
if(cljs.core.truth_(temp__4657__auto___50488)){
var error__30034__auto___50489 = temp__4657__auto___50488;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50489)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50469_50481,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50487,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50489], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__50472;
var children = rest50473;
while(true){
var vec__50476 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__50476,(0),null);
var props = cljs.core.nth.call(null,vec__50476,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4655__auto__)){
var on_select = temp__4655__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4655__auto__,vec__50476,bs,props,classes,ul_attrs,validate__30032__auto__,ufv___50479,output_schema50468_50480,input_schema50469_50481,input_checker50470_50482,output_checker50471_50483){
return (function (p1__50467_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__50467_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4655__auto__,vec__50476,bs,props,classes,ul_attrs,validate__30032__auto__,ufv___50479,output_schema50468_50480,input_schema50469_50481,input_checker50470_50482,output_checker50471_50483))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50490 = output_checker50471_50483.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50490)){
var error__30034__auto___50491 = temp__4657__auto___50490;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50491)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50468_50480,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50491], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50479,output_schema50468_50480,input_schema50469_50481,input_checker50470_50482,output_checker50471_50483))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___50479,output_schema50468_50480,input_schema50469_50481,input_checker50470_50482,output_checker50471_50483){
return (function (seq50474){
var G__50475 = cljs.core.first.call(null,seq50474);
var seq50474__$1 = cljs.core.next.call(null,seq50474);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__50475,seq50474__$1);
});})(ufv___50479,output_schema50468_50480,input_schema50469_50481,input_checker50470_50482,output_checker50471_50483))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema50468_50480,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50469_50481], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__50257__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__50257__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__50257__auto__;
})();

var component_fnk__50286__auto___50528 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema50497 = schema.core.Any;
var input_schema50498 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map50496","map50496",2088547101,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker50499 = schema.core.checker.call(null,input_schema50498);
var output_checker50500 = schema.core.checker.call(null,output_schema50497);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500){
return (function om_bootstrap$button$constructor50494(G__50501){
var validate__30032__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50529 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50501], null);
var temp__4657__auto___50530 = input_checker50499.call(null,args__30033__auto___50529);
if(cljs.core.truth_(temp__4657__auto___50530)){
var error__30034__auto___50531 = temp__4657__auto___50530;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor50494","constructor50494",-1314555563,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50531)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50498,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50529,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50531], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var map50496 = G__50501;
while(true){
if(cljs.core.map_QMARK_.call(null,map50496)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map50496)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map50496,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map50496,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button50510 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button50510 = (function (validate__30032__auto__,owner,G__50501,input_checker50499,output_schema50497,state,constructor50494,output_checker50500,input_schema50498,ufv__,map50496,meta50511){
this.validate__30032__auto__ = validate__30032__auto__;
this.owner = owner;
this.G__50501 = G__50501;
this.input_checker50499 = input_checker50499;
this.output_schema50497 = output_schema50497;
this.state = state;
this.constructor50494 = constructor50494;
this.output_checker50500 = output_checker50500;
this.input_schema50498 = input_schema50498;
this.ufv__ = ufv__;
this.map50496 = map50496;
this.meta50511 = meta50511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button50510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500){
return (function (_50512,meta50511__$1){
var self__ = this;
var _50512__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button50510(self__.validate__30032__auto__,self__.owner,self__.G__50501,self__.input_checker50499,self__.output_schema50497,self__.state,self__.constructor50494,self__.output_checker50500,self__.input_schema50498,self__.ufv__,self__.map50496,meta50511__$1));
});})(state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500))
;

om_bootstrap.button.t_om_bootstrap$button50510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500){
return (function (_50512){
var self__ = this;
var _50512__$1 = this;
return self__.meta50511;
});})(state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500))
;

om_bootstrap.button.t_om_bootstrap$button50510.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button50510.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500))
;

om_bootstrap.button.t_om_bootstrap$button50510.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button50510.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__50513 = om.core.get_props.call(null,self__.owner);
var map__50513__$1 = ((((!((map__50513 == null)))?((((map__50513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50513):map__50513);
var opts = cljs.core.get.call(null,map__50513__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__50513__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__50514 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__50514,(0),null);
var props = cljs.core.nth.call(null,vec__50514,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__50513,map__50513__$1,opts,children,vec__50514,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__50513,map__50513__$1,opts,children,vec__50514,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500))
], null);
var update_child_props = ((function (open_QMARK_,map__50513,map__50513__$1,opts,children,vec__50514,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__50513,map__50513__$1,opts,children,vec__50514,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500){
return (function (key){
var temp__4655__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4655__auto__)){
var os = temp__4655__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__50513,map__50513__$1,opts,children,vec__50514,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__50513,map__50513__$1,opts,children,vec__50514,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span(({"className": "caret"}))),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__50513,map__50513__$1,opts,children,vec__50514,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500){
return (function (p1__50492_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__50492_SHARP_,update_child_props);
});})(open_QMARK_,map__50513,map__50513__$1,opts,children,vec__50514,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500))
,children))], null));
});})(state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500))
;

om_bootstrap.button.t_om_bootstrap$button50510.getBasis = ((function (state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validate__30032__auto__","validate__30032__auto__",-1861236669,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__50501","G__50501",184420038,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"input-checker50499","input-checker50499",606523566,null),new cljs.core.Symbol(null,"output-schema50497","output-schema50497",-359324332,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor50494","constructor50494",-1314555563,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker50500","output-checker50500",-15111237,null),new cljs.core.Symbol(null,"input-schema50498","input-schema50498",506421501,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"map50496","map50496",2088547101,null),new cljs.core.Symbol(null,"meta50511","meta50511",-1108080516,null)], null);
});})(state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500))
;

om_bootstrap.button.t_om_bootstrap$button50510.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button50510.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button50510";

om_bootstrap.button.t_om_bootstrap$button50510.cljs$lang$ctorPrWriter = ((function (state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-bootstrap.button/t_om_bootstrap$button50510");
});})(state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500))
;

om_bootstrap.button.__GT_t_om_bootstrap$button50510 = ((function (state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500){
return (function om_bootstrap$button$constructor50494_$___GT_t_om_bootstrap$button50510(validate__30032__auto____$1,owner__$1,G__50501__$1,input_checker50499__$1,output_schema50497__$1,state__$1,constructor50494__$1,output_checker50500__$1,input_schema50498__$1,ufv____$1,map50496__$1,meta50511){
return (new om_bootstrap.button.t_om_bootstrap$button50510(validate__30032__auto____$1,owner__$1,G__50501__$1,input_checker50499__$1,output_schema50497__$1,state__$1,constructor50494__$1,output_checker50500__$1,input_schema50498__$1,ufv____$1,map50496__$1,meta50511));
});})(state,owner,validate__30032__auto__,ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button50510(validate__30032__auto__,owner,G__50501,input_checker50499,output_schema50497,state,om_bootstrap$button$constructor50494,output_checker50500,input_schema50498,ufv__,map50496,null));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50532 = output_checker50500.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50532)){
var error__30034__auto___50533 = temp__4657__auto___50532;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor50494","constructor50494",-1314555563,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50533)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50497,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50533], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv__,output_schema50497,input_schema50498,input_checker50499,output_checker50500))
,schema.core.make_fn_schema.call(null,output_schema50497,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50498], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__50286__auto___50528){
return (function om_bootstrap$button$dropdown_STAR_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50534 = arguments.length;
var i__25827__auto___50535 = (0);
while(true){
if((i__25827__auto___50535 < len__25826__auto___50534)){
args__25833__auto__.push((arguments[i__25827__auto___50535]));

var G__50536 = (i__25827__auto___50535 + (1));
i__25827__auto___50535 = G__50536;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});})(component_fnk__50286__auto___50528))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__50286__auto___50528){
return (function (data__50287__auto__,owner50493,p__50521){
var vec__50522 = p__50521;
var opts__50288__auto__ = cljs.core.nth.call(null,vec__50522,(0),null);
return component_fnk__50286__auto___50528.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner50493),new cljs.core.Keyword(null,"opts","opts",155075701),opts__50288__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner50493,new cljs.core.Keyword(null,"data","data",-232669377),data__50287__auto__], null));
});})(component_fnk__50286__auto___50528))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__50286__auto___50528){
return (function (seq50518){
var G__50519 = cljs.core.first.call(null,seq50518);
var seq50518__$1 = cljs.core.next.call(null,seq50518);
var G__50520 = cljs.core.first.call(null,seq50518__$1);
var seq50518__$2 = cljs.core.next.call(null,seq50518__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__50519,G__50520,seq50518__$2);
});})(component_fnk__50286__auto___50528))
;


om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(var_args){
var args50525 = [];
var len__25826__auto___50537 = arguments.length;
var i__25827__auto___50538 = (0);
while(true){
if((i__25827__auto___50538 < len__25826__auto___50537)){
args50525.push((arguments[i__25827__auto___50538]));

var G__50539 = (i__25827__auto___50538 + (1));
i__25827__auto___50538 = G__50539;
continue;
} else {
}
break;
}

var G__50527 = args50525.length;
switch (G__50527) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50525.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__50255__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__50255__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__50255__auto__,m50495){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__50255__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m50495));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___50549 = schema.utils.use_fn_validation;
var output_schema50541_50550 = om_bootstrap.types.Component;
var input_schema50542_50551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownButton","DropdownButton",251375015,null)], null))),schema.core.Any], null);
var input_checker50543_50552 = schema.core.checker.call(null,input_schema50542_50551);
var output_checker50544_50553 = schema.core.checker.call(null,output_schema50541_50550);
/**
 * Inputs: [opts :- DropdownButton & children]
 *   Returns: t/Component
 * 
 *   Returns a dropdown button component. The component manages its own
 *   dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___50549,output_schema50541_50550,input_schema50542_50551,input_checker50543_50552,output_checker50544_50553){
return (function om_bootstrap$button$dropdown(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50554 = arguments.length;
var i__25827__auto___50555 = (0);
while(true){
if((i__25827__auto___50555 < len__25826__auto___50554)){
args__25833__auto__.push((arguments[i__25827__auto___50555]));

var G__50556 = (i__25827__auto___50555 + (1));
i__25827__auto___50555 = G__50556;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___50549,output_schema50541_50550,input_schema50542_50551,input_checker50543_50552,output_checker50544_50553))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___50549,output_schema50541_50550,input_schema50542_50551,input_checker50543_50552,output_checker50544_50553){
return (function (G__50545,rest50546){
var validate__30032__auto__ = ufv___50549.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50557 = cljs.core.list_STAR_.call(null,G__50545,rest50546);
var temp__4657__auto___50558 = input_checker50543_50552.call(null,args__30033__auto___50557);
if(cljs.core.truth_(temp__4657__auto___50558)){
var error__30034__auto___50559 = temp__4657__auto___50558;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__30034__auto___50559)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50542_50551,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50557,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50559], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__50545;
var children = rest50546;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50560 = output_checker50544_50553.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50560)){
var error__30034__auto___50561 = temp__4657__auto___50560;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__30034__auto___50561)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50541_50550,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50561], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50549,output_schema50541_50550,input_schema50542_50551,input_checker50543_50552,output_checker50544_50553))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___50549,output_schema50541_50550,input_schema50542_50551,input_checker50543_50552,output_checker50544_50553){
return (function (seq50547){
var G__50548 = cljs.core.first.call(null,seq50547);
var seq50547__$1 = cljs.core.next.call(null,seq50547);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__50548,seq50547__$1);
});})(ufv___50549,output_schema50541_50550,input_schema50542_50551,input_checker50543_50552,output_checker50544_50553))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema50541_50550,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50542_50551], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__50257__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__50257__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__50257__auto__;
})();

var component_fnk__50286__auto___50597 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema50566 = schema.core.Any;
var input_schema50567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map50565","map50565",-133915130,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker50568 = schema.core.checker.call(null,input_schema50567);
var output_checker50569 = schema.core.checker.call(null,output_schema50566);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569){
return (function om_bootstrap$button$constructor50563(G__50570){
var validate__30032__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50570], null);
var temp__4657__auto___50599 = input_checker50568.call(null,args__30033__auto___50598);
if(cljs.core.truth_(temp__4657__auto___50599)){
var error__30034__auto___50600 = temp__4657__auto___50599;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor50563","constructor50563",-2001333629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50600)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50567,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50598,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50600], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var map50565 = G__50570;
while(true){
if(cljs.core.map_QMARK_.call(null,map50565)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map50565)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map50565,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map50565,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button50579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button50579 = (function (validate__30032__auto__,constructor50563,owner,G__50570,map50565,output_schema50566,input_checker50568,input_schema50567,state,output_checker50569,ufv__,meta50580){
this.validate__30032__auto__ = validate__30032__auto__;
this.constructor50563 = constructor50563;
this.owner = owner;
this.G__50570 = G__50570;
this.map50565 = map50565;
this.output_schema50566 = output_schema50566;
this.input_checker50568 = input_checker50568;
this.input_schema50567 = input_schema50567;
this.state = state;
this.output_checker50569 = output_checker50569;
this.ufv__ = ufv__;
this.meta50580 = meta50580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button50579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569){
return (function (_50581,meta50580__$1){
var self__ = this;
var _50581__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button50579(self__.validate__30032__auto__,self__.constructor50563,self__.owner,self__.G__50570,self__.map50565,self__.output_schema50566,self__.input_checker50568,self__.input_schema50567,self__.state,self__.output_checker50569,self__.ufv__,meta50580__$1));
});})(state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569))
;

om_bootstrap.button.t_om_bootstrap$button50579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569){
return (function (_50581){
var self__ = this;
var _50581__$1 = this;
return self__.meta50580;
});})(state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569))
;

om_bootstrap.button.t_om_bootstrap$button50579.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button50579.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569))
;

om_bootstrap.button.t_om_bootstrap$button50579.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button50579.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__50582 = om.core.get_props.call(null,self__.owner);
var map__50582__$1 = ((((!((map__50582 == null)))?((((map__50582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50582):map__50582);
var opts = cljs.core.get.call(null,map__50582__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__50582__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__50583 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__50583,(0),null);
var props = cljs.core.nth.call(null,vec__50583,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__50582,map__50582__$1,opts,children,vec__50583,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569){
return (function (e){
if(cljs.core.truth_(open_QMARK_)){
set_dropdown.call(null,false);
} else {
}

var temp__4657__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return f.call(null,e);
} else {
return null;
}
});})(open_QMARK_,map__50582,map__50582__$1,opts,children,vec__50583,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__50582,map__50582__$1,opts,children,vec__50583,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__50582,map__50582__$1,opts,children,vec__50583,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569))
], null)),cljs.core.apply.call(null,React.DOM.span,({"className": "sr-only"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span(({"className": "caret"})));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__50582,map__50582__$1,opts,children,vec__50583,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569){
return (function (k){
var temp__4657__auto___50601 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto___50601)){
var f_50602 = temp__4657__auto___50601;
f_50602.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__50582,map__50582__$1,opts,children,vec__50583,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569))
;

om_bootstrap.button.t_om_bootstrap$button50579.getBasis = ((function (state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validate__30032__auto__","validate__30032__auto__",-1861236669,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor50563","constructor50563",-2001333629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__50570","G__50570",856315109,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"map50565","map50565",-133915130,null),new cljs.core.Symbol(null,"output-schema50566","output-schema50566",-848440599,null),new cljs.core.Symbol(null,"input-checker50568","input-checker50568",-924748983,null),new cljs.core.Symbol(null,"input-schema50567","input-schema50567",-1065597236,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker50569","output-checker50569",1946026874,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta50580","meta50580",-968833449,null)], null);
});})(state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569))
;

om_bootstrap.button.t_om_bootstrap$button50579.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button50579.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button50579";

om_bootstrap.button.t_om_bootstrap$button50579.cljs$lang$ctorPrWriter = ((function (state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-bootstrap.button/t_om_bootstrap$button50579");
});})(state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569))
;

om_bootstrap.button.__GT_t_om_bootstrap$button50579 = ((function (state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569){
return (function om_bootstrap$button$constructor50563_$___GT_t_om_bootstrap$button50579(validate__30032__auto____$1,constructor50563__$1,owner__$1,G__50570__$1,map50565__$1,output_schema50566__$1,input_checker50568__$1,input_schema50567__$1,state__$1,output_checker50569__$1,ufv____$1,meta50580){
return (new om_bootstrap.button.t_om_bootstrap$button50579(validate__30032__auto____$1,constructor50563__$1,owner__$1,G__50570__$1,map50565__$1,output_schema50566__$1,input_checker50568__$1,input_schema50567__$1,state__$1,output_checker50569__$1,ufv____$1,meta50580));
});})(state,owner,validate__30032__auto__,ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button50579(validate__30032__auto__,om_bootstrap$button$constructor50563,owner,G__50570,map50565,output_schema50566,input_checker50568,input_schema50567,state,output_checker50569,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50603 = output_checker50569.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50603)){
var error__30034__auto___50604 = temp__4657__auto___50603;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor50563","constructor50563",-2001333629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50604)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50566,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50604], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv__,output_schema50566,input_schema50567,input_checker50568,output_checker50569))
,schema.core.make_fn_schema.call(null,output_schema50566,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50567], null)));
})();
/**
 * Generates a split button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__50286__auto___50597){
return (function om_bootstrap$button$split_STAR_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50605 = arguments.length;
var i__25827__auto___50606 = (0);
while(true){
if((i__25827__auto___50606 < len__25826__auto___50605)){
args__25833__auto__.push((arguments[i__25827__auto___50606]));

var G__50607 = (i__25827__auto___50606 + (1));
i__25827__auto___50606 = G__50607;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});})(component_fnk__50286__auto___50597))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__50286__auto___50597){
return (function (data__50287__auto__,owner50562,p__50590){
var vec__50591 = p__50590;
var opts__50288__auto__ = cljs.core.nth.call(null,vec__50591,(0),null);
return component_fnk__50286__auto___50597.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner50562),new cljs.core.Keyword(null,"opts","opts",155075701),opts__50288__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner50562,new cljs.core.Keyword(null,"data","data",-232669377),data__50287__auto__], null));
});})(component_fnk__50286__auto___50597))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__50286__auto___50597){
return (function (seq50587){
var G__50588 = cljs.core.first.call(null,seq50587);
var seq50587__$1 = cljs.core.next.call(null,seq50587);
var G__50589 = cljs.core.first.call(null,seq50587__$1);
var seq50587__$2 = cljs.core.next.call(null,seq50587__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__50588,G__50589,seq50587__$2);
});})(component_fnk__50286__auto___50597))
;


om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(var_args){
var args50594 = [];
var len__25826__auto___50608 = arguments.length;
var i__25827__auto___50609 = (0);
while(true){
if((i__25827__auto___50609 < len__25826__auto___50608)){
args50594.push((arguments[i__25827__auto___50609]));

var G__50610 = (i__25827__auto___50609 + (1));
i__25827__auto___50609 = G__50610;
continue;
} else {
}
break;
}

var G__50596 = args50594.length;
switch (G__50596) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50594.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__50255__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__50255__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__50255__auto__,m50564){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__50255__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m50564));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___50620 = schema.utils.use_fn_validation;
var output_schema50612_50621 = schema.core.Any;
var input_schema50613_50622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SplitButton","SplitButton",1856385687,null)], null))),schema.core.Any], null);
var input_checker50614_50623 = schema.core.checker.call(null,input_schema50613_50622);
var output_checker50615_50624 = schema.core.checker.call(null,output_schema50612_50621);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___50620,output_schema50612_50621,input_schema50613_50622,input_checker50614_50623,output_checker50615_50624){
return (function om_bootstrap$button$split(var_args){
var args__25833__auto__ = [];
var len__25826__auto___50625 = arguments.length;
var i__25827__auto___50626 = (0);
while(true){
if((i__25827__auto___50626 < len__25826__auto___50625)){
args__25833__auto__.push((arguments[i__25827__auto___50626]));

var G__50627 = (i__25827__auto___50626 + (1));
i__25827__auto___50626 = G__50627;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___50620,output_schema50612_50621,input_schema50613_50622,input_checker50614_50623,output_checker50615_50624))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___50620,output_schema50612_50621,input_schema50613_50622,input_checker50614_50623,output_checker50615_50624){
return (function (G__50616,rest50617){
var validate__30032__auto__ = ufv___50620.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50628 = cljs.core.list_STAR_.call(null,G__50616,rest50617);
var temp__4657__auto___50629 = input_checker50614_50623.call(null,args__30033__auto___50628);
if(cljs.core.truth_(temp__4657__auto___50629)){
var error__30034__auto___50630 = temp__4657__auto___50629;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50630)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50613_50622,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50628,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50630], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var opts = G__50616;
var children = rest50617;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50631 = output_checker50615_50624.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50631)){
var error__30034__auto___50632 = temp__4657__auto___50631;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30034__auto___50632)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50612_50621,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50632], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50620,output_schema50612_50621,input_schema50613_50622,input_checker50614_50623,output_checker50615_50624))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___50620,output_schema50612_50621,input_schema50613_50622,input_checker50614_50623,output_checker50615_50624){
return (function (seq50618){
var G__50619 = cljs.core.first.call(null,seq50618);
var seq50618__$1 = cljs.core.next.call(null,seq50618);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__50619,seq50618__$1);
});})(ufv___50620,output_schema50612_50621,input_schema50613_50622,input_checker50614_50623,output_checker50615_50624))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema50612_50621,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50613_50622], null)));

//# sourceMappingURL=button.js.map?rel=1478445863236