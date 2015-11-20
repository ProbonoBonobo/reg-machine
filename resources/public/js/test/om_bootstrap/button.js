// Compiled by ClojureScript 1.7.122 {}
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
var ufv___22341 = schema.utils.use_fn_validation;
var output_schema22335_22342 = schema.core.Any;
var input_schema22336_22343 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker22337_22344 = schema.core.checker.call(null,input_schema22336_22343);
var output_checker22338_22345 = schema.core.checker.call(null,output_schema22335_22342);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___22341,output_schema22335_22342,input_schema22336_22343,input_checker22337_22344,output_checker22338_22345){
return (function om_bootstrap$button$render_anchor(G__22339,G__22340){
var validate__10213__auto__ = ufv___22341.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22346 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22339,G__22340], null);
var temp__4425__auto___22347 = input_checker22337_22344.call(null,args__10214__auto___22346);
if(cljs.core.truth_(temp__4425__auto___22347)){
var error__10215__auto___22348 = temp__4425__auto___22347;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22348)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22336_22343,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22346,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22348], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__22339;
var children = G__22340;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22349 = output_checker22338_22345.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22349)){
var error__10215__auto___22350 = temp__4425__auto___22349;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22350)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22335_22342,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22350], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22341,output_schema22335_22342,input_schema22336_22343,input_checker22337_22344,output_checker22338_22345))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema22335_22342,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22336_22343], null)));
var ufv___22360 = schema.utils.use_fn_validation;
var output_schema22351_22361 = om_bootstrap.types.Component;
var input_schema22352_22362 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Button","Button",-1787718586,null)], null))),schema.core.Any], null);
var input_checker22353_22363 = schema.core.checker.call(null,input_schema22352_22362);
var output_checker22354_22364 = schema.core.checker.call(null,output_schema22351_22361);
/**
 * Inputs: [props :- Button & children]
 *   Returns: t/Component
 * 
 *   Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___22360,output_schema22351_22361,input_schema22352_22362,input_checker22353_22363,output_checker22354_22364){
return (function om_bootstrap$button$button(var_args){
var args__5626__auto__ = [];
var len__5619__auto___22365 = arguments.length;
var i__5620__auto___22366 = (0);
while(true){
if((i__5620__auto___22366 < len__5619__auto___22365)){
args__5626__auto__.push((arguments[i__5620__auto___22366]));

var G__22367 = (i__5620__auto___22366 + (1));
i__5620__auto___22366 = G__22367;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___22360,output_schema22351_22361,input_schema22352_22362,input_checker22353_22363,output_checker22354_22364))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22360,output_schema22351_22361,input_schema22352_22362,input_checker22353_22363,output_checker22354_22364){
return (function (G__22355,rest22356){
var validate__10213__auto__ = ufv___22360.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22368 = cljs.core.list_STAR_.call(null,G__22355,rest22356);
var temp__4425__auto___22369 = input_checker22353_22363.call(null,args__10214__auto___22368);
if(cljs.core.truth_(temp__4425__auto___22369)){
var error__10215__auto___22370 = temp__4425__auto___22369;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__10215__auto___22370)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22352_22362,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22368,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22370], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var props = G__22355;
var children = rest22356;
while(true){
var vec__22359 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__22359,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__22359,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__4561__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
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
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22371 = output_checker22354_22364.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22371)){
var error__10215__auto___22372 = temp__4425__auto___22371;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__10215__auto___22372)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22351_22361,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22372], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22360,output_schema22351_22361,input_schema22352_22362,input_checker22353_22363,output_checker22354_22364))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___22360,output_schema22351_22361,input_schema22352_22362,input_checker22353_22363,output_checker22354_22364){
return (function (seq22357){
var G__22358 = cljs.core.first.call(null,seq22357);
var seq22357__$1 = cljs.core.next.call(null,seq22357);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__22358,seq22357__$1);
});})(ufv___22360,output_schema22351_22361,input_schema22352_22362,input_checker22353_22363,output_checker22354_22364))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema22351_22361,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22352_22362], null)));
var ufv___22382 = schema.utils.use_fn_validation;
var output_schema22373_22383 = om_bootstrap.types.Component;
var input_schema22374_22384 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker22375_22385 = schema.core.checker.call(null,input_schema22374_22384);
var output_checker22376_22386 = schema.core.checker.call(null,output_schema22373_22383);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___22382,output_schema22373_22383,input_schema22374_22384,input_checker22375_22385,output_checker22376_22386){
return (function om_bootstrap$button$toolbar(var_args){
var args__5626__auto__ = [];
var len__5619__auto___22387 = arguments.length;
var i__5620__auto___22388 = (0);
while(true){
if((i__5620__auto___22388 < len__5619__auto___22387)){
args__5626__auto__.push((arguments[i__5620__auto___22388]));

var G__22389 = (i__5620__auto___22388 + (1));
i__5620__auto___22388 = G__22389;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___22382,output_schema22373_22383,input_schema22374_22384,input_checker22375_22385,output_checker22376_22386))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22382,output_schema22373_22383,input_schema22374_22384,input_checker22375_22385,output_checker22376_22386){
return (function (G__22377,rest22378){
var validate__10213__auto__ = ufv___22382.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22390 = cljs.core.list_STAR_.call(null,G__22377,rest22378);
var temp__4425__auto___22391 = input_checker22375_22385.call(null,args__10214__auto___22390);
if(cljs.core.truth_(temp__4425__auto___22391)){
var error__10215__auto___22392 = temp__4425__auto___22391;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__10215__auto___22392)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22374_22384,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22390,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22392], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__22377;
var children = rest22378;
while(true){
var vec__22381 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__22381,(0),null);
var props = cljs.core.nth.call(null,vec__22381,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"role": "toolbar", "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22393 = output_checker22376_22386.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22393)){
var error__10215__auto___22394 = temp__4425__auto___22393;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__10215__auto___22394)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22373_22383,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22394], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22382,output_schema22373_22383,input_schema22374_22384,input_checker22375_22385,output_checker22376_22386))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___22382,output_schema22373_22383,input_schema22374_22384,input_checker22375_22385,output_checker22376_22386){
return (function (seq22379){
var G__22380 = cljs.core.first.call(null,seq22379);
var seq22379__$1 = cljs.core.next.call(null,seq22379);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__22380,seq22379__$1);
});})(ufv___22382,output_schema22373_22383,input_schema22374_22384,input_checker22375_22385,output_checker22376_22386))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema22373_22383,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22374_22384], null)));
var ufv___22404 = schema.utils.use_fn_validation;
var output_schema22395_22405 = om_bootstrap.types.Component;
var input_schema22396_22406 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null)], null))),schema.core.Any], null);
var input_checker22397_22407 = schema.core.checker.call(null,input_schema22396_22406);
var output_checker22398_22408 = schema.core.checker.call(null,output_schema22395_22405);
/**
 * Inputs: [opts :- ButtonGroup & children]
 *   Returns: t/Component
 * 
 *   Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___22404,output_schema22395_22405,input_schema22396_22406,input_checker22397_22407,output_checker22398_22408){
return (function om_bootstrap$button$button_group(var_args){
var args__5626__auto__ = [];
var len__5619__auto___22409 = arguments.length;
var i__5620__auto___22410 = (0);
while(true){
if((i__5620__auto___22410 < len__5619__auto___22409)){
args__5626__auto__.push((arguments[i__5620__auto___22410]));

var G__22411 = (i__5620__auto___22410 + (1));
i__5620__auto___22410 = G__22411;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___22404,output_schema22395_22405,input_schema22396_22406,input_checker22397_22407,output_checker22398_22408))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22404,output_schema22395_22405,input_schema22396_22406,input_checker22397_22407,output_checker22398_22408){
return (function (G__22399,rest22400){
var validate__10213__auto__ = ufv___22404.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22412 = cljs.core.list_STAR_.call(null,G__22399,rest22400);
var temp__4425__auto___22413 = input_checker22397_22407.call(null,args__10214__auto___22412);
if(cljs.core.truth_(temp__4425__auto___22413)){
var error__10215__auto___22414 = temp__4425__auto___22413;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__10215__auto___22414)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22396_22406,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22412,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22414], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__22399;
var children = rest22400;
while(true){
var vec__22403 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__22403,(0),null);
var props = cljs.core.nth.call(null,vec__22403,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22415 = output_checker22398_22408.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22415)){
var error__10215__auto___22416 = temp__4425__auto___22415;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__10215__auto___22416)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22395_22405,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22416], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22404,output_schema22395_22405,input_schema22396_22406,input_checker22397_22407,output_checker22398_22408))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___22404,output_schema22395_22405,input_schema22396_22406,input_checker22397_22407,output_checker22398_22408){
return (function (seq22401){
var G__22402 = cljs.core.first.call(null,seq22401);
var seq22401__$1 = cljs.core.next.call(null,seq22401);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__22402,seq22401__$1);
});})(ufv___22404,output_schema22395_22405,input_schema22396_22406,input_checker22397_22407,output_checker22398_22408))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema22395_22405,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22396_22406], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function om_bootstrap$button$render_nav_item(props,open_QMARK_,children){
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function om_bootstrap$button$render_button_group(props,open_QMARK_,children){
var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));

var component_fnk__18081__auto___22446 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22421 = schema.core.Any;
var input_schema22422 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map22420","map22420",826936219,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker22423 = schema.core.checker.call(null,input_schema22422);
var output_checker22424 = schema.core.checker.call(null,output_schema22421);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424){
return (function om_bootstrap$button$constructor22418(G__22425){
var validate__10213__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22447 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22425], null);
var temp__4425__auto___22448 = input_checker22423.call(null,args__10214__auto___22447);
if(cljs.core.truth_(temp__4425__auto___22448)){
var error__10215__auto___22449 = temp__4425__auto___22448;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22418","constructor22418",380745193,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22449)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22422,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22447,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22449], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var map22420 = G__22425;
while(true){
if(cljs.core.map_QMARK_.call(null,map22420)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map22420)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map22420,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button22432 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button22432 = (function (input_checker22423,input_schema22422,owner,constructor22418,G__22425,output_checker22424,output_schema22421,validate__10213__auto__,map22420,ufv__,meta22433){
this.input_checker22423 = input_checker22423;
this.input_schema22422 = input_schema22422;
this.owner = owner;
this.constructor22418 = constructor22418;
this.G__22425 = G__22425;
this.output_checker22424 = output_checker22424;
this.output_schema22421 = output_schema22421;
this.validate__10213__auto__ = validate__10213__auto__;
this.map22420 = map22420;
this.ufv__ = ufv__;
this.meta22433 = meta22433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button22432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__10213__auto__,ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424){
return (function (_22434,meta22433__$1){
var self__ = this;
var _22434__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button22432(self__.input_checker22423,self__.input_schema22422,self__.owner,self__.constructor22418,self__.G__22425,self__.output_checker22424,self__.output_schema22421,self__.validate__10213__auto__,self__.map22420,self__.ufv__,meta22433__$1));
});})(owner,validate__10213__auto__,ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424))
;

om_bootstrap.button.t_om_bootstrap$button22432.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__10213__auto__,ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424){
return (function (_22434){
var self__ = this;
var _22434__$1 = this;
return self__.meta22433;
});})(owner,validate__10213__auto__,ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424))
;

om_bootstrap.button.t_om_bootstrap$button22432.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button22432.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__10213__auto__,ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__10213__auto__,ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424))
;

om_bootstrap.button.t_om_bootstrap$button22432.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button22432.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__10213__auto__,ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22435 = om.core.get_props.call(null,self__.owner);
var map__22435__$1 = ((((!((map__22435 == null)))?((((map__22435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22435):map__22435);
var opts = cljs.core.get.call(null,map__22435__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__22435__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__22436 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__22436,(0),null);
var props = cljs.core.nth.call(null,vec__22436,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__22435,map__22435__$1,opts,children,vec__22436,bs,props,classes,___$1,owner,validate__10213__auto__,ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424){
return (function (e){
var temp__4425__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var on_select = temp__4425__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__22435,map__22435__$1,opts,children,vec__22436,bs,props,classes,___$1,owner,validate__10213__auto__,ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424))
;
var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,handle_click), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "tabIndex": "-1"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));
var li_attrs = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var k = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
} else {
return null;
}
})());
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
});})(owner,validate__10213__auto__,ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424))
;

om_bootstrap.button.t_om_bootstrap$button22432.getBasis = ((function (owner,validate__10213__auto__,ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-checker22423","input-checker22423",-2062856512,null),new cljs.core.Symbol(null,"input-schema22422","input-schema22422",1352681090,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22418","constructor22418",380745193,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__22425","G__22425",-1362032213,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"output-checker22424","output-checker22424",-1452261458,null),new cljs.core.Symbol(null,"output-schema22421","output-schema22421",680859511,null),new cljs.core.Symbol(null,"validate__10213__auto__","validate__10213__auto__",1108052152,null),new cljs.core.Symbol(null,"map22420","map22420",826936219,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta22433","meta22433",470251802,null)], null);
});})(owner,validate__10213__auto__,ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424))
;

om_bootstrap.button.t_om_bootstrap$button22432.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button22432.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button22432";

om_bootstrap.button.t_om_bootstrap$button22432.cljs$lang$ctorPrWriter = ((function (owner,validate__10213__auto__,ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"om-bootstrap.button/t_om_bootstrap$button22432");
});})(owner,validate__10213__auto__,ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424))
;

om_bootstrap.button.__GT_t_om_bootstrap$button22432 = ((function (owner,validate__10213__auto__,ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424){
return (function om_bootstrap$button$constructor22418_$___GT_t_om_bootstrap$button22432(input_checker22423__$1,input_schema22422__$1,owner__$1,constructor22418__$1,G__22425__$1,output_checker22424__$1,output_schema22421__$1,validate__10213__auto____$1,map22420__$1,ufv____$1,meta22433){
return (new om_bootstrap.button.t_om_bootstrap$button22432(input_checker22423__$1,input_schema22422__$1,owner__$1,constructor22418__$1,G__22425__$1,output_checker22424__$1,output_schema22421__$1,validate__10213__auto____$1,map22420__$1,ufv____$1,meta22433));
});})(owner,validate__10213__auto__,ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button22432(input_checker22423,input_schema22422,owner,om_bootstrap$button$constructor22418,G__22425,output_checker22424,output_schema22421,validate__10213__auto__,map22420,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22450 = output_checker22424.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22450)){
var error__10215__auto___22451 = temp__4425__auto___22450;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22418","constructor22418",380745193,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22451)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22421,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22451], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv__,output_schema22421,input_schema22422,input_checker22423,output_checker22424))
,schema.core.make_fn_schema.call(null,output_schema22421,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22422], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 *   wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__18081__auto___22446){
return (function om_bootstrap$button$menu_item_STAR_(var_args){
var args__5626__auto__ = [];
var len__5619__auto___22452 = arguments.length;
var i__5620__auto___22453 = (0);
while(true){
if((i__5620__auto___22453 < len__5619__auto___22452)){
args__5626__auto__.push((arguments[i__5620__auto___22453]));

var G__22454 = (i__5620__auto___22453 + (1));
i__5620__auto___22453 = G__22454;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((2) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((2)),(0))):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5627__auto__);
});})(component_fnk__18081__auto___22446))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__18081__auto___22446){
return (function (data__18082__auto__,owner22417,p__22441){
var vec__22442 = p__22441;
var opts__18083__auto__ = cljs.core.nth.call(null,vec__22442,(0),null);
return component_fnk__18081__auto___22446.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__18083__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner22417,new cljs.core.Keyword(null,"data","data",-232669377),data__18082__auto__], null));
});})(component_fnk__18081__auto___22446))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__18081__auto___22446){
return (function (seq22438){
var G__22439 = cljs.core.first.call(null,seq22438);
var seq22438__$1 = cljs.core.next.call(null,seq22438);
var G__22440 = cljs.core.first.call(null,seq22438__$1);
var seq22438__$2 = cljs.core.next.call(null,seq22438__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__22439,G__22440,seq22438__$2);
});})(component_fnk__18081__auto___22446))
;

om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(var_args){
var args22443 = [];
var len__5619__auto___22455 = arguments.length;
var i__5620__auto___22456 = (0);
while(true){
if((i__5620__auto___22456 < len__5619__auto___22455)){
args22443.push((arguments[i__5620__auto___22456]));

var G__22457 = (i__5620__auto___22456 + (1));
i__5620__auto___22456 = G__22457;
continue;
} else {
}
break;
}

var G__22445 = args22443.length;
switch (G__22445) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22443.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__18050__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__18050__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__18050__auto__,m22419){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__18050__auto__,m22419);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___22467 = schema.utils.use_fn_validation;
var output_schema22459_22468 = om_bootstrap.types.Component;
var input_schema22460_22469 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"MenuItem","MenuItem",1235363736,null)], null))),schema.core.Any], null);
var input_checker22461_22470 = schema.core.checker.call(null,input_schema22460_22469);
var output_checker22462_22471 = schema.core.checker.call(null,output_schema22459_22468);
/**
 * Inputs: [opts :- MenuItem & children]
 *   Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___22467,output_schema22459_22468,input_schema22460_22469,input_checker22461_22470,output_checker22462_22471){
return (function om_bootstrap$button$menu_item(var_args){
var args__5626__auto__ = [];
var len__5619__auto___22472 = arguments.length;
var i__5620__auto___22473 = (0);
while(true){
if((i__5620__auto___22473 < len__5619__auto___22472)){
args__5626__auto__.push((arguments[i__5620__auto___22473]));

var G__22474 = (i__5620__auto___22473 + (1));
i__5620__auto___22473 = G__22474;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___22467,output_schema22459_22468,input_schema22460_22469,input_checker22461_22470,output_checker22462_22471))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22467,output_schema22459_22468,input_schema22460_22469,input_checker22461_22470,output_checker22462_22471){
return (function (G__22463,rest22464){
var validate__10213__auto__ = ufv___22467.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22475 = cljs.core.list_STAR_.call(null,G__22463,rest22464);
var temp__4425__auto___22476 = input_checker22461_22470.call(null,args__10214__auto___22475);
if(cljs.core.truth_(temp__4425__auto___22476)){
var error__10215__auto___22477 = temp__4425__auto___22476;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22477)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22460_22469,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22475,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22477], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__22463;
var children = rest22464;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22478 = output_checker22462_22471.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22478)){
var error__10215__auto___22479 = temp__4425__auto___22478;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22479)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22459_22468,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22479], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22467,output_schema22459_22468,input_schema22460_22469,input_checker22461_22470,output_checker22462_22471))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___22467,output_schema22459_22468,input_schema22460_22469,input_checker22461_22470,output_checker22462_22471){
return (function (seq22465){
var G__22466 = cljs.core.first.call(null,seq22465);
var seq22465__$1 = cljs.core.next.call(null,seq22465);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__22466,seq22465__$1);
});})(ufv___22467,output_schema22459_22468,input_schema22460_22469,input_checker22461_22470,output_checker22462_22471))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema22459_22468,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22460_22469], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___22490 = schema.utils.use_fn_validation;
var output_schema22481_22491 = om_bootstrap.types.Component;
var input_schema22482_22492 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownMenu","DropdownMenu",881901742,null)], null))),schema.core.Any], null);
var input_checker22483_22493 = schema.core.checker.call(null,input_schema22482_22492);
var output_checker22484_22494 = schema.core.checker.call(null,output_schema22481_22491);
/**
 * Inputs: [opts :- DropdownMenu & children]
 *   Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___22490,output_schema22481_22491,input_schema22482_22492,input_checker22483_22493,output_checker22484_22494){
return (function om_bootstrap$button$dropdown_menu(var_args){
var args__5626__auto__ = [];
var len__5619__auto___22495 = arguments.length;
var i__5620__auto___22496 = (0);
while(true){
if((i__5620__auto___22496 < len__5619__auto___22495)){
args__5626__auto__.push((arguments[i__5620__auto___22496]));

var G__22497 = (i__5620__auto___22496 + (1));
i__5620__auto___22496 = G__22497;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___22490,output_schema22481_22491,input_schema22482_22492,input_checker22483_22493,output_checker22484_22494))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22490,output_schema22481_22491,input_schema22482_22492,input_checker22483_22493,output_checker22484_22494){
return (function (G__22485,rest22486){
var validate__10213__auto__ = ufv___22490.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22498 = cljs.core.list_STAR_.call(null,G__22485,rest22486);
var temp__4425__auto___22499 = input_checker22483_22493.call(null,args__10214__auto___22498);
if(cljs.core.truth_(temp__4425__auto___22499)){
var error__10215__auto___22500 = temp__4425__auto___22499;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22500)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22482_22492,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22498,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22500], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__22485;
var children = rest22486;
while(true){
var vec__22489 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__22489,(0),null);
var props = cljs.core.nth.call(null,vec__22489,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4423__auto__)){
var on_select = temp__4423__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4423__auto__,vec__22489,bs,props,classes,ul_attrs,validate__10213__auto__,ufv___22490,output_schema22481_22491,input_schema22482_22492,input_checker22483_22493,output_checker22484_22494){
return (function (p1__22480_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__22480_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4423__auto__,vec__22489,bs,props,classes,ul_attrs,validate__10213__auto__,ufv___22490,output_schema22481_22491,input_schema22482_22492,input_checker22483_22493,output_checker22484_22494))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22501 = output_checker22484_22494.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22501)){
var error__10215__auto___22502 = temp__4425__auto___22501;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22502)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22481_22491,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22502], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22490,output_schema22481_22491,input_schema22482_22492,input_checker22483_22493,output_checker22484_22494))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___22490,output_schema22481_22491,input_schema22482_22492,input_checker22483_22493,output_checker22484_22494){
return (function (seq22487){
var G__22488 = cljs.core.first.call(null,seq22487);
var seq22487__$1 = cljs.core.next.call(null,seq22487);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__22488,seq22487__$1);
});})(ufv___22490,output_schema22481_22491,input_schema22482_22492,input_checker22483_22493,output_checker22484_22494))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema22481_22491,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22482_22492], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__18052__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__18052__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__18052__auto__;
})();

var component_fnk__18081__auto___22533 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22508 = schema.core.Any;
var input_schema22509 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map22507","map22507",1888286944,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker22510 = schema.core.checker.call(null,input_schema22509);
var output_checker22511 = schema.core.checker.call(null,output_schema22508);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511){
return (function om_bootstrap$button$constructor22505(G__22512){
var validate__10213__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22512], null);
var temp__4425__auto___22535 = input_checker22510.call(null,args__10214__auto___22534);
if(cljs.core.truth_(temp__4425__auto___22535)){
var error__10215__auto___22536 = temp__4425__auto___22535;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22505","constructor22505",191493380,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22536)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22509,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22534,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22536], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var map22507 = G__22512;
while(true){
if(cljs.core.map_QMARK_.call(null,map22507)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map22507)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map22507,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map22507,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button22519 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button22519 = (function (map22507,input_checker22510,constructor22505,owner,output_checker22511,input_schema22509,output_schema22508,state,validate__10213__auto__,G__22512,ufv__,meta22520){
this.map22507 = map22507;
this.input_checker22510 = input_checker22510;
this.constructor22505 = constructor22505;
this.owner = owner;
this.output_checker22511 = output_checker22511;
this.input_schema22509 = input_schema22509;
this.output_schema22508 = output_schema22508;
this.state = state;
this.validate__10213__auto__ = validate__10213__auto__;
this.G__22512 = G__22512;
this.ufv__ = ufv__;
this.meta22520 = meta22520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button22519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511){
return (function (_22521,meta22520__$1){
var self__ = this;
var _22521__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button22519(self__.map22507,self__.input_checker22510,self__.constructor22505,self__.owner,self__.output_checker22511,self__.input_schema22509,self__.output_schema22508,self__.state,self__.validate__10213__auto__,self__.G__22512,self__.ufv__,meta22520__$1));
});})(state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511))
;

om_bootstrap.button.t_om_bootstrap$button22519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511){
return (function (_22521){
var self__ = this;
var _22521__$1 = this;
return self__.meta22520;
});})(state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511))
;

om_bootstrap.button.t_om_bootstrap$button22519.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button22519.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511))
;

om_bootstrap.button.t_om_bootstrap$button22519.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button22519.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__22522 = om.core.get_props.call(null,self__.owner);
var map__22522__$1 = ((((!((map__22522 == null)))?((((map__22522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22522):map__22522);
var opts = cljs.core.get.call(null,map__22522__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__22522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__22523 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__22523,(0),null);
var props = cljs.core.nth.call(null,vec__22523,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__22522,map__22522__$1,opts,children,vec__22523,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__22522,map__22522__$1,opts,children,vec__22523,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511))
], null);
var update_child_props = ((function (open_QMARK_,map__22522,map__22522__$1,opts,children,vec__22523,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__4561__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__22522,map__22522__$1,opts,children,vec__22523,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511){
return (function (key){
var temp__4423__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4423__auto__)){
var os = temp__4423__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__22522,map__22522__$1,opts,children,vec__22523,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__22522,map__22522__$1,opts,children,vec__22523,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__22522,map__22522__$1,opts,children,vec__22523,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511){
return (function (p1__22503_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__22503_SHARP_,update_child_props);
});})(open_QMARK_,map__22522,map__22522__$1,opts,children,vec__22523,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511))
,children))], null));
});})(state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511))
;

om_bootstrap.button.t_om_bootstrap$button22519.getBasis = ((function (state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map22507","map22507",1888286944,null),new cljs.core.Symbol(null,"input-checker22510","input-checker22510",498689155,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22505","constructor22505",191493380,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker22511","output-checker22511",283211087,null),new cljs.core.Symbol(null,"input-schema22509","input-schema22509",549575056,null),new cljs.core.Symbol(null,"output-schema22508","output-schema22508",-684266863,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__10213__auto__","validate__10213__auto__",1108052152,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__22512","G__22512",-66419299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta22520","meta22520",-286947465,null)], null);
});})(state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511))
;

om_bootstrap.button.t_om_bootstrap$button22519.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button22519.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button22519";

om_bootstrap.button.t_om_bootstrap$button22519.cljs$lang$ctorPrWriter = ((function (state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"om-bootstrap.button/t_om_bootstrap$button22519");
});})(state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511))
;

om_bootstrap.button.__GT_t_om_bootstrap$button22519 = ((function (state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511){
return (function om_bootstrap$button$constructor22505_$___GT_t_om_bootstrap$button22519(map22507__$1,input_checker22510__$1,constructor22505__$1,owner__$1,output_checker22511__$1,input_schema22509__$1,output_schema22508__$1,state__$1,validate__10213__auto____$1,G__22512__$1,ufv____$1,meta22520){
return (new om_bootstrap.button.t_om_bootstrap$button22519(map22507__$1,input_checker22510__$1,constructor22505__$1,owner__$1,output_checker22511__$1,input_schema22509__$1,output_schema22508__$1,state__$1,validate__10213__auto____$1,G__22512__$1,ufv____$1,meta22520));
});})(state,owner,validate__10213__auto__,ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button22519(map22507,input_checker22510,om_bootstrap$button$constructor22505,owner,output_checker22511,input_schema22509,output_schema22508,state,validate__10213__auto__,G__22512,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22537 = output_checker22511.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22537)){
var error__10215__auto___22538 = temp__4425__auto___22537;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22505","constructor22505",191493380,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22538)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22508,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22538], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv__,output_schema22508,input_schema22509,input_checker22510,output_checker22511))
,schema.core.make_fn_schema.call(null,output_schema22508,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22509], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__18081__auto___22533){
return (function om_bootstrap$button$dropdown_STAR_(var_args){
var args__5626__auto__ = [];
var len__5619__auto___22539 = arguments.length;
var i__5620__auto___22540 = (0);
while(true){
if((i__5620__auto___22540 < len__5619__auto___22539)){
args__5626__auto__.push((arguments[i__5620__auto___22540]));

var G__22541 = (i__5620__auto___22540 + (1));
i__5620__auto___22540 = G__22541;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((2) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((2)),(0))):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5627__auto__);
});})(component_fnk__18081__auto___22533))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__18081__auto___22533){
return (function (data__18082__auto__,owner22504,p__22528){
var vec__22529 = p__22528;
var opts__18083__auto__ = cljs.core.nth.call(null,vec__22529,(0),null);
return component_fnk__18081__auto___22533.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner22504),new cljs.core.Keyword(null,"opts","opts",155075701),opts__18083__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner22504,new cljs.core.Keyword(null,"data","data",-232669377),data__18082__auto__], null));
});})(component_fnk__18081__auto___22533))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__18081__auto___22533){
return (function (seq22525){
var G__22526 = cljs.core.first.call(null,seq22525);
var seq22525__$1 = cljs.core.next.call(null,seq22525);
var G__22527 = cljs.core.first.call(null,seq22525__$1);
var seq22525__$2 = cljs.core.next.call(null,seq22525__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__22526,G__22527,seq22525__$2);
});})(component_fnk__18081__auto___22533))
;

om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(var_args){
var args22530 = [];
var len__5619__auto___22542 = arguments.length;
var i__5620__auto___22543 = (0);
while(true){
if((i__5620__auto___22543 < len__5619__auto___22542)){
args22530.push((arguments[i__5620__auto___22543]));

var G__22544 = (i__5620__auto___22543 + (1));
i__5620__auto___22543 = G__22544;
continue;
} else {
}
break;
}

var G__22532 = args22530.length;
switch (G__22532) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22530.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__18050__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__18050__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__18050__auto__,m22506){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__18050__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m22506));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___22554 = schema.utils.use_fn_validation;
var output_schema22546_22555 = om_bootstrap.types.Component;
var input_schema22547_22556 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownButton","DropdownButton",251375015,null)], null))),schema.core.Any], null);
var input_checker22548_22557 = schema.core.checker.call(null,input_schema22547_22556);
var output_checker22549_22558 = schema.core.checker.call(null,output_schema22546_22555);
/**
 * Inputs: [opts :- DropdownButton & children]
 *   Returns: t/Component
 * 
 *   Returns a dropdown button component. The component manages its own
 *   dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___22554,output_schema22546_22555,input_schema22547_22556,input_checker22548_22557,output_checker22549_22558){
return (function om_bootstrap$button$dropdown(var_args){
var args__5626__auto__ = [];
var len__5619__auto___22559 = arguments.length;
var i__5620__auto___22560 = (0);
while(true){
if((i__5620__auto___22560 < len__5619__auto___22559)){
args__5626__auto__.push((arguments[i__5620__auto___22560]));

var G__22561 = (i__5620__auto___22560 + (1));
i__5620__auto___22560 = G__22561;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___22554,output_schema22546_22555,input_schema22547_22556,input_checker22548_22557,output_checker22549_22558))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22554,output_schema22546_22555,input_schema22547_22556,input_checker22548_22557,output_checker22549_22558){
return (function (G__22550,rest22551){
var validate__10213__auto__ = ufv___22554.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22562 = cljs.core.list_STAR_.call(null,G__22550,rest22551);
var temp__4425__auto___22563 = input_checker22548_22557.call(null,args__10214__auto___22562);
if(cljs.core.truth_(temp__4425__auto___22563)){
var error__10215__auto___22564 = temp__4425__auto___22563;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__10215__auto___22564)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22547_22556,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22562,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22564], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__22550;
var children = rest22551;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22565 = output_checker22549_22558.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22565)){
var error__10215__auto___22566 = temp__4425__auto___22565;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__10215__auto___22566)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22546_22555,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22566], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22554,output_schema22546_22555,input_schema22547_22556,input_checker22548_22557,output_checker22549_22558))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___22554,output_schema22546_22555,input_schema22547_22556,input_checker22548_22557,output_checker22549_22558){
return (function (seq22552){
var G__22553 = cljs.core.first.call(null,seq22552);
var seq22552__$1 = cljs.core.next.call(null,seq22552);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__22553,seq22552__$1);
});})(ufv___22554,output_schema22546_22555,input_schema22547_22556,input_checker22548_22557,output_checker22549_22558))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema22546_22555,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22547_22556], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__18052__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__18052__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__18052__auto__;
})();

var component_fnk__18081__auto___22596 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22571 = schema.core.Any;
var input_schema22572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map22570","map22570",1669599395,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker22573 = schema.core.checker.call(null,input_schema22572);
var output_checker22574 = schema.core.checker.call(null,output_schema22571);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574){
return (function om_bootstrap$button$constructor22568(G__22575){
var validate__10213__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22575], null);
var temp__4425__auto___22598 = input_checker22573.call(null,args__10214__auto___22597);
if(cljs.core.truth_(temp__4425__auto___22598)){
var error__10215__auto___22599 = temp__4425__auto___22598;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22568","constructor22568",-920002860,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22599)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22572,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22597,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22599], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var map22570 = G__22575;
while(true){
if(cljs.core.map_QMARK_.call(null,map22570)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map22570)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map22570,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map22570,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button22582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button22582 = (function (map22570,owner,output_checker22574,input_checker22573,G__22575,state,constructor22568,validate__10213__auto__,ufv__,input_schema22572,output_schema22571,meta22583){
this.map22570 = map22570;
this.owner = owner;
this.output_checker22574 = output_checker22574;
this.input_checker22573 = input_checker22573;
this.G__22575 = G__22575;
this.state = state;
this.constructor22568 = constructor22568;
this.validate__10213__auto__ = validate__10213__auto__;
this.ufv__ = ufv__;
this.input_schema22572 = input_schema22572;
this.output_schema22571 = output_schema22571;
this.meta22583 = meta22583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button22582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574){
return (function (_22584,meta22583__$1){
var self__ = this;
var _22584__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button22582(self__.map22570,self__.owner,self__.output_checker22574,self__.input_checker22573,self__.G__22575,self__.state,self__.constructor22568,self__.validate__10213__auto__,self__.ufv__,self__.input_schema22572,self__.output_schema22571,meta22583__$1));
});})(state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574))
;

om_bootstrap.button.t_om_bootstrap$button22582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574){
return (function (_22584){
var self__ = this;
var _22584__$1 = this;
return self__.meta22583;
});})(state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574))
;

om_bootstrap.button.t_om_bootstrap$button22582.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button22582.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574))
;

om_bootstrap.button.t_om_bootstrap$button22582.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button22582.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__22585 = om.core.get_props.call(null,self__.owner);
var map__22585__$1 = ((((!((map__22585 == null)))?((((map__22585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22585):map__22585);
var opts = cljs.core.get.call(null,map__22585__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__22585__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__22586 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__22586,(0),null);
var props = cljs.core.nth.call(null,vec__22586,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__22585,map__22585__$1,opts,children,vec__22586,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574){
return (function (e){
if(cljs.core.truth_(open_QMARK_)){
set_dropdown.call(null,false);
} else {
}

var temp__4425__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return f.call(null,e);
} else {
return null;
}
});})(open_QMARK_,map__22585,map__22585__$1,opts,children,vec__22586,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__22585,map__22585__$1,opts,children,vec__22586,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__22585,map__22585__$1,opts,children,vec__22586,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__22585,map__22585__$1,opts,children,vec__22586,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574){
return (function (k){
var temp__4425__auto___22600 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto___22600)){
var f_22601 = temp__4425__auto___22600;
f_22601.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__22585,map__22585__$1,opts,children,vec__22586,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574))
;

om_bootstrap.button.t_om_bootstrap$button22582.getBasis = ((function (state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map22570","map22570",1669599395,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker22574","output-checker22574",-1812584659,null),new cljs.core.Symbol(null,"input-checker22573","input-checker22573",1440921839,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__22575","G__22575",2116650895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22568","constructor22568",-920002860,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__10213__auto__","validate__10213__auto__",1108052152,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"input-schema22572","input-schema22572",68871614,null),new cljs.core.Symbol(null,"output-schema22571","output-schema22571",656555647,null),new cljs.core.Symbol(null,"meta22583","meta22583",2049475102,null)], null);
});})(state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574))
;

om_bootstrap.button.t_om_bootstrap$button22582.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button22582.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button22582";

om_bootstrap.button.t_om_bootstrap$button22582.cljs$lang$ctorPrWriter = ((function (state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"om-bootstrap.button/t_om_bootstrap$button22582");
});})(state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574))
;

om_bootstrap.button.__GT_t_om_bootstrap$button22582 = ((function (state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574){
return (function om_bootstrap$button$constructor22568_$___GT_t_om_bootstrap$button22582(map22570__$1,owner__$1,output_checker22574__$1,input_checker22573__$1,G__22575__$1,state__$1,constructor22568__$1,validate__10213__auto____$1,ufv____$1,input_schema22572__$1,output_schema22571__$1,meta22583){
return (new om_bootstrap.button.t_om_bootstrap$button22582(map22570__$1,owner__$1,output_checker22574__$1,input_checker22573__$1,G__22575__$1,state__$1,constructor22568__$1,validate__10213__auto____$1,ufv____$1,input_schema22572__$1,output_schema22571__$1,meta22583));
});})(state,owner,validate__10213__auto__,ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button22582(map22570,owner,output_checker22574,input_checker22573,G__22575,state,om_bootstrap$button$constructor22568,validate__10213__auto__,ufv__,input_schema22572,output_schema22571,null));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22602 = output_checker22574.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22602)){
var error__10215__auto___22603 = temp__4425__auto___22602;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22568","constructor22568",-920002860,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22603)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22571,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22603], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv__,output_schema22571,input_schema22572,input_checker22573,output_checker22574))
,schema.core.make_fn_schema.call(null,output_schema22571,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22572], null)));
})();
/**
 * Generates a split button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__18081__auto___22596){
return (function om_bootstrap$button$split_STAR_(var_args){
var args__5626__auto__ = [];
var len__5619__auto___22604 = arguments.length;
var i__5620__auto___22605 = (0);
while(true){
if((i__5620__auto___22605 < len__5619__auto___22604)){
args__5626__auto__.push((arguments[i__5620__auto___22605]));

var G__22606 = (i__5620__auto___22605 + (1));
i__5620__auto___22605 = G__22606;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((2) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((2)),(0))):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5627__auto__);
});})(component_fnk__18081__auto___22596))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__18081__auto___22596){
return (function (data__18082__auto__,owner22567,p__22591){
var vec__22592 = p__22591;
var opts__18083__auto__ = cljs.core.nth.call(null,vec__22592,(0),null);
return component_fnk__18081__auto___22596.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner22567),new cljs.core.Keyword(null,"opts","opts",155075701),opts__18083__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner22567,new cljs.core.Keyword(null,"data","data",-232669377),data__18082__auto__], null));
});})(component_fnk__18081__auto___22596))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__18081__auto___22596){
return (function (seq22588){
var G__22589 = cljs.core.first.call(null,seq22588);
var seq22588__$1 = cljs.core.next.call(null,seq22588);
var G__22590 = cljs.core.first.call(null,seq22588__$1);
var seq22588__$2 = cljs.core.next.call(null,seq22588__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__22589,G__22590,seq22588__$2);
});})(component_fnk__18081__auto___22596))
;

om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(var_args){
var args22593 = [];
var len__5619__auto___22607 = arguments.length;
var i__5620__auto___22608 = (0);
while(true){
if((i__5620__auto___22608 < len__5619__auto___22607)){
args22593.push((arguments[i__5620__auto___22608]));

var G__22609 = (i__5620__auto___22608 + (1));
i__5620__auto___22608 = G__22609;
continue;
} else {
}
break;
}

var G__22595 = args22593.length;
switch (G__22595) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22593.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__18050__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__18050__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__18050__auto__,m22569){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__18050__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m22569));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___22619 = schema.utils.use_fn_validation;
var output_schema22611_22620 = schema.core.Any;
var input_schema22612_22621 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SplitButton","SplitButton",1856385687,null)], null))),schema.core.Any], null);
var input_checker22613_22622 = schema.core.checker.call(null,input_schema22612_22621);
var output_checker22614_22623 = schema.core.checker.call(null,output_schema22611_22620);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___22619,output_schema22611_22620,input_schema22612_22621,input_checker22613_22622,output_checker22614_22623){
return (function om_bootstrap$button$split(var_args){
var args__5626__auto__ = [];
var len__5619__auto___22624 = arguments.length;
var i__5620__auto___22625 = (0);
while(true){
if((i__5620__auto___22625 < len__5619__auto___22624)){
args__5626__auto__.push((arguments[i__5620__auto___22625]));

var G__22626 = (i__5620__auto___22625 + (1));
i__5620__auto___22625 = G__22626;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});})(ufv___22619,output_schema22611_22620,input_schema22612_22621,input_checker22613_22622,output_checker22614_22623))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22619,output_schema22611_22620,input_schema22612_22621,input_checker22613_22622,output_checker22614_22623){
return (function (G__22615,rest22616){
var validate__10213__auto__ = ufv___22619.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22627 = cljs.core.list_STAR_.call(null,G__22615,rest22616);
var temp__4425__auto___22628 = input_checker22613_22622.call(null,args__10214__auto___22627);
if(cljs.core.truth_(temp__4425__auto___22628)){
var error__10215__auto___22629 = temp__4425__auto___22628;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22629)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22612_22621,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22627,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22629], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var opts = G__22615;
var children = rest22616;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22630 = output_checker22614_22623.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22630)){
var error__10215__auto___22631 = temp__4425__auto___22630;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__10215__auto___22631)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22611_22620,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22631], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22619,output_schema22611_22620,input_schema22612_22621,input_checker22613_22622,output_checker22614_22623))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___22619,output_schema22611_22620,input_schema22612_22621,input_checker22613_22622,output_checker22614_22623){
return (function (seq22617){
var G__22618 = cljs.core.first.call(null,seq22617);
var seq22617__$1 = cljs.core.next.call(null,seq22617);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__22618,seq22617__$1);
});})(ufv___22619,output_schema22611_22620,input_schema22612_22621,input_checker22613_22622,output_checker22614_22623))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema22611_22620,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22612_22621], null)));
