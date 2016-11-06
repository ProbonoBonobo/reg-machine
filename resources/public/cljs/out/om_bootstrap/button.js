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
var ufv___83086 = schema.utils.use_fn_validation;
var output_schema83080_83087 = schema.core.Any;
var input_schema83081_83088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker83082_83089 = schema.core.checker.call(null,input_schema83081_83088);
var output_checker83083_83090 = schema.core.checker.call(null,output_schema83080_83087);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___83086,output_schema83080_83087,input_schema83081_83088,input_checker83082_83089,output_checker83083_83090){
return (function om_bootstrap$button$render_anchor(G__83084,G__83085){
var validate__38286__auto__ = ufv___83086.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83091 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__83084,G__83085], null);
var temp__4657__auto___83092 = input_checker83082_83089.call(null,args__38287__auto___83091);
if(cljs.core.truth_(temp__4657__auto___83092)){
var error__38288__auto___83093 = temp__4657__auto___83092;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83093)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83081_83088,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83091,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83093], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83084;
var children = G__83085;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83094 = output_checker83083_83090.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83094)){
var error__38288__auto___83095 = temp__4657__auto___83094;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83095)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83080_83087,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83095], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83086,output_schema83080_83087,input_schema83081_83088,input_checker83082_83089,output_checker83083_83090))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema83080_83087,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83081_83088], null)));
var ufv___83107 = schema.utils.use_fn_validation;
var output_schema83096_83108 = om_bootstrap.types.Component;
var input_schema83097_83109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Button","Button",-1787718586,null)], null))),schema.core.Any], null);
var input_checker83098_83110 = schema.core.checker.call(null,input_schema83097_83109);
var output_checker83099_83111 = schema.core.checker.call(null,output_schema83096_83108);
/**
 * Inputs: [props :- Button & children]
 *   Returns: t/Component
 * 
 *   Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___83107,output_schema83096_83108,input_schema83097_83109,input_checker83098_83110,output_checker83099_83111){
return (function om_bootstrap$button$button(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83112 = arguments.length;
var i__25827__auto___83113 = (0);
while(true){
if((i__25827__auto___83113 < len__25826__auto___83112)){
args__25833__auto__.push((arguments[i__25827__auto___83113]));

var G__83114 = (i__25827__auto___83113 + (1));
i__25827__auto___83113 = G__83114;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83107,output_schema83096_83108,input_schema83097_83109,input_checker83098_83110,output_checker83099_83111))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83107,output_schema83096_83108,input_schema83097_83109,input_checker83098_83110,output_checker83099_83111){
return (function (G__83100,rest83101){
var validate__38286__auto__ = ufv___83107.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83115 = cljs.core.list_STAR_.call(null,G__83100,rest83101);
var temp__4657__auto___83116 = input_checker83098_83110.call(null,args__38287__auto___83115);
if(cljs.core.truth_(temp__4657__auto___83116)){
var error__38288__auto___83117 = temp__4657__auto___83116;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__38288__auto___83117)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83097_83109,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83115,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83117], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var props = G__83100;
var children = rest83101;
while(true){
var vec__83104 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__83104,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__83104,(1),null);
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
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83118 = output_checker83099_83111.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83118)){
var error__38288__auto___83119 = temp__4657__auto___83118;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__38288__auto___83119)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83096_83108,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83119], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83107,output_schema83096_83108,input_schema83097_83109,input_checker83098_83110,output_checker83099_83111))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___83107,output_schema83096_83108,input_schema83097_83109,input_checker83098_83110,output_checker83099_83111){
return (function (seq83102){
var G__83103 = cljs.core.first.call(null,seq83102);
var seq83102__$1 = cljs.core.next.call(null,seq83102);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__83103,seq83102__$1);
});})(ufv___83107,output_schema83096_83108,input_schema83097_83109,input_checker83098_83110,output_checker83099_83111))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema83096_83108,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83097_83109], null)));
var ufv___83131 = schema.utils.use_fn_validation;
var output_schema83120_83132 = om_bootstrap.types.Component;
var input_schema83121_83133 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker83122_83134 = schema.core.checker.call(null,input_schema83121_83133);
var output_checker83123_83135 = schema.core.checker.call(null,output_schema83120_83132);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___83131,output_schema83120_83132,input_schema83121_83133,input_checker83122_83134,output_checker83123_83135){
return (function om_bootstrap$button$toolbar(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83136 = arguments.length;
var i__25827__auto___83137 = (0);
while(true){
if((i__25827__auto___83137 < len__25826__auto___83136)){
args__25833__auto__.push((arguments[i__25827__auto___83137]));

var G__83138 = (i__25827__auto___83137 + (1));
i__25827__auto___83137 = G__83138;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83131,output_schema83120_83132,input_schema83121_83133,input_checker83122_83134,output_checker83123_83135))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83131,output_schema83120_83132,input_schema83121_83133,input_checker83122_83134,output_checker83123_83135){
return (function (G__83124,rest83125){
var validate__38286__auto__ = ufv___83131.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83139 = cljs.core.list_STAR_.call(null,G__83124,rest83125);
var temp__4657__auto___83140 = input_checker83122_83134.call(null,args__38287__auto___83139);
if(cljs.core.truth_(temp__4657__auto___83140)){
var error__38288__auto___83141 = temp__4657__auto___83140;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__38288__auto___83141)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83121_83133,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83139,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83141], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83124;
var children = rest83125;
while(true){
var vec__83128 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__83128,(0),null);
var props = cljs.core.nth.call(null,vec__83128,(1),null);
return cljs.core.apply.call(null,React.DOM.div,({"role": "toolbar", "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs)))}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83142 = output_checker83123_83135.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83142)){
var error__38288__auto___83143 = temp__4657__auto___83142;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__38288__auto___83143)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83120_83132,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83143], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83131,output_schema83120_83132,input_schema83121_83133,input_checker83122_83134,output_checker83123_83135))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___83131,output_schema83120_83132,input_schema83121_83133,input_checker83122_83134,output_checker83123_83135){
return (function (seq83126){
var G__83127 = cljs.core.first.call(null,seq83126);
var seq83126__$1 = cljs.core.next.call(null,seq83126);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__83127,seq83126__$1);
});})(ufv___83131,output_schema83120_83132,input_schema83121_83133,input_checker83122_83134,output_checker83123_83135))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema83120_83132,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83121_83133], null)));
var ufv___83155 = schema.utils.use_fn_validation;
var output_schema83144_83156 = om_bootstrap.types.Component;
var input_schema83145_83157 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null)], null))),schema.core.Any], null);
var input_checker83146_83158 = schema.core.checker.call(null,input_schema83145_83157);
var output_checker83147_83159 = schema.core.checker.call(null,output_schema83144_83156);
/**
 * Inputs: [opts :- ButtonGroup & children]
 *   Returns: t/Component
 * 
 *   Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___83155,output_schema83144_83156,input_schema83145_83157,input_checker83146_83158,output_checker83147_83159){
return (function om_bootstrap$button$button_group(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83160 = arguments.length;
var i__25827__auto___83161 = (0);
while(true){
if((i__25827__auto___83161 < len__25826__auto___83160)){
args__25833__auto__.push((arguments[i__25827__auto___83161]));

var G__83162 = (i__25827__auto___83161 + (1));
i__25827__auto___83161 = G__83162;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83155,output_schema83144_83156,input_schema83145_83157,input_checker83146_83158,output_checker83147_83159))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83155,output_schema83144_83156,input_schema83145_83157,input_checker83146_83158,output_checker83147_83159){
return (function (G__83148,rest83149){
var validate__38286__auto__ = ufv___83155.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83163 = cljs.core.list_STAR_.call(null,G__83148,rest83149);
var temp__4657__auto___83164 = input_checker83146_83158.call(null,args__38287__auto___83163);
if(cljs.core.truth_(temp__4657__auto___83164)){
var error__38288__auto___83165 = temp__4657__auto___83164;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__38288__auto___83165)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83145_83157,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83163,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83165], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83148;
var children = rest83149;
while(true){
var vec__83152 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__83152,(0),null);
var props = cljs.core.nth.call(null,vec__83152,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83166 = output_checker83147_83159.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83166)){
var error__38288__auto___83167 = temp__4657__auto___83166;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__38288__auto___83167)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83144_83156,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83167], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83155,output_schema83144_83156,input_schema83145_83157,input_checker83146_83158,output_checker83147_83159))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___83155,output_schema83144_83156,input_schema83145_83157,input_checker83146_83158,output_checker83147_83159){
return (function (seq83150){
var G__83151 = cljs.core.first.call(null,seq83150);
var seq83150__$1 = cljs.core.next.call(null,seq83150);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__83151,seq83150__$1);
});})(ufv___83155,output_schema83144_83156,input_schema83145_83157,input_checker83146_83158,output_checker83147_83159))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema83144_83156,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83145_83157], null)));
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

var component_fnk__45379__auto___83203 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema83172 = schema.core.Any;
var input_schema83173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map83171","map83171",-133995819,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker83174 = schema.core.checker.call(null,input_schema83173);
var output_checker83175 = schema.core.checker.call(null,output_schema83172);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175){
return (function om_bootstrap$button$constructor83169(G__83176){
var validate__38286__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83204 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__83176], null);
var temp__4657__auto___83205 = input_checker83174.call(null,args__38287__auto___83204);
if(cljs.core.truth_(temp__4657__auto___83205)){
var error__38288__auto___83206 = temp__4657__auto___83205;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor83169","constructor83169",403238773,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83206)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83173,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83204,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83206], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var map83171 = G__83176;
while(true){
if(cljs.core.map_QMARK_.call(null,map83171)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map83171)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map83171,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button83185 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button83185 = (function (validate__38286__auto__,owner,output_schema83172,G__83176,input_schema83173,map83171,constructor83169,output_checker83175,input_checker83174,ufv__,meta83186){
this.validate__38286__auto__ = validate__38286__auto__;
this.owner = owner;
this.output_schema83172 = output_schema83172;
this.G__83176 = G__83176;
this.input_schema83173 = input_schema83173;
this.map83171 = map83171;
this.constructor83169 = constructor83169;
this.output_checker83175 = output_checker83175;
this.input_checker83174 = input_checker83174;
this.ufv__ = ufv__;
this.meta83186 = meta83186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button83185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__38286__auto__,ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175){
return (function (_83187,meta83186__$1){
var self__ = this;
var _83187__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button83185(self__.validate__38286__auto__,self__.owner,self__.output_schema83172,self__.G__83176,self__.input_schema83173,self__.map83171,self__.constructor83169,self__.output_checker83175,self__.input_checker83174,self__.ufv__,meta83186__$1));
});})(owner,validate__38286__auto__,ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175))
;

om_bootstrap.button.t_om_bootstrap$button83185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__38286__auto__,ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175){
return (function (_83187){
var self__ = this;
var _83187__$1 = this;
return self__.meta83186;
});})(owner,validate__38286__auto__,ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175))
;

om_bootstrap.button.t_om_bootstrap$button83185.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button83185.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__38286__auto__,ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__38286__auto__,ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175))
;

om_bootstrap.button.t_om_bootstrap$button83185.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button83185.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__38286__auto__,ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__83188 = om.core.get_props.call(null,self__.owner);
var map__83188__$1 = ((((!((map__83188 == null)))?((((map__83188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83188):map__83188);
var opts = cljs.core.get.call(null,map__83188__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__83188__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__83189 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__83189,(0),null);
var props = cljs.core.nth.call(null,vec__83189,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__83188,map__83188__$1,opts,children,vec__83189,bs,props,classes,___$1,owner,validate__38286__auto__,ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175){
return (function (e){
var temp__4657__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var on_select = temp__4657__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__83188,map__83188__$1,opts,children,vec__83189,bs,props,classes,___$1,owner,validate__38286__auto__,ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175))
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
});})(owner,validate__38286__auto__,ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175))
;

om_bootstrap.button.t_om_bootstrap$button83185.getBasis = ((function (owner,validate__38286__auto__,ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validate__38286__auto__","validate__38286__auto__",-478810592,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema83172","output-schema83172",-1184808274,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__83176","G__83176",-1102444722,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"input-schema83173","input-schema83173",48326769,null),new cljs.core.Symbol(null,"map83171","map83171",-133995819,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor83169","constructor83169",403238773,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker83175","output-checker83175",-1138694889,null),new cljs.core.Symbol(null,"input-checker83174","input-checker83174",-2033814180,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta83186","meta83186",51689886,null)], null);
});})(owner,validate__38286__auto__,ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175))
;

om_bootstrap.button.t_om_bootstrap$button83185.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button83185.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button83185";

om_bootstrap.button.t_om_bootstrap$button83185.cljs$lang$ctorPrWriter = ((function (owner,validate__38286__auto__,ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-bootstrap.button/t_om_bootstrap$button83185");
});})(owner,validate__38286__auto__,ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175))
;

om_bootstrap.button.__GT_t_om_bootstrap$button83185 = ((function (owner,validate__38286__auto__,ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175){
return (function om_bootstrap$button$constructor83169_$___GT_t_om_bootstrap$button83185(validate__38286__auto____$1,owner__$1,output_schema83172__$1,G__83176__$1,input_schema83173__$1,map83171__$1,constructor83169__$1,output_checker83175__$1,input_checker83174__$1,ufv____$1,meta83186){
return (new om_bootstrap.button.t_om_bootstrap$button83185(validate__38286__auto____$1,owner__$1,output_schema83172__$1,G__83176__$1,input_schema83173__$1,map83171__$1,constructor83169__$1,output_checker83175__$1,input_checker83174__$1,ufv____$1,meta83186));
});})(owner,validate__38286__auto__,ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button83185(validate__38286__auto__,owner,output_schema83172,G__83176,input_schema83173,map83171,om_bootstrap$button$constructor83169,output_checker83175,input_checker83174,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83207 = output_checker83175.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83207)){
var error__38288__auto___83208 = temp__4657__auto___83207;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor83169","constructor83169",403238773,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83208)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83172,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83208], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv__,output_schema83172,input_schema83173,input_checker83174,output_checker83175))
,schema.core.make_fn_schema.call(null,output_schema83172,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83173], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 *   wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__45379__auto___83203){
return (function om_bootstrap$button$menu_item_STAR_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83209 = arguments.length;
var i__25827__auto___83210 = (0);
while(true){
if((i__25827__auto___83210 < len__25826__auto___83209)){
args__25833__auto__.push((arguments[i__25827__auto___83210]));

var G__83211 = (i__25827__auto___83210 + (1));
i__25827__auto___83210 = G__83211;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});})(component_fnk__45379__auto___83203))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__45379__auto___83203){
return (function (data__45380__auto__,owner83168,p__83196){
var vec__83197 = p__83196;
var opts__45381__auto__ = cljs.core.nth.call(null,vec__83197,(0),null);
return component_fnk__45379__auto___83203.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__45381__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner83168,new cljs.core.Keyword(null,"data","data",-232669377),data__45380__auto__], null));
});})(component_fnk__45379__auto___83203))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__45379__auto___83203){
return (function (seq83193){
var G__83194 = cljs.core.first.call(null,seq83193);
var seq83193__$1 = cljs.core.next.call(null,seq83193);
var G__83195 = cljs.core.first.call(null,seq83193__$1);
var seq83193__$2 = cljs.core.next.call(null,seq83193__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__83194,G__83195,seq83193__$2);
});})(component_fnk__45379__auto___83203))
;


om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(var_args){
var args83200 = [];
var len__25826__auto___83212 = arguments.length;
var i__25827__auto___83213 = (0);
while(true){
if((i__25827__auto___83213 < len__25826__auto___83212)){
args83200.push((arguments[i__25827__auto___83213]));

var G__83214 = (i__25827__auto___83213 + (1));
i__25827__auto___83213 = G__83214;
continue;
} else {
}
break;
}

var G__83202 = args83200.length;
switch (G__83202) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83200.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__45348__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__45348__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__45348__auto__,m83170){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__45348__auto__,m83170);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___83224 = schema.utils.use_fn_validation;
var output_schema83216_83225 = om_bootstrap.types.Component;
var input_schema83217_83226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"MenuItem","MenuItem",1235363736,null)], null))),schema.core.Any], null);
var input_checker83218_83227 = schema.core.checker.call(null,input_schema83217_83226);
var output_checker83219_83228 = schema.core.checker.call(null,output_schema83216_83225);
/**
 * Inputs: [opts :- MenuItem & children]
 *   Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___83224,output_schema83216_83225,input_schema83217_83226,input_checker83218_83227,output_checker83219_83228){
return (function om_bootstrap$button$menu_item(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83229 = arguments.length;
var i__25827__auto___83230 = (0);
while(true){
if((i__25827__auto___83230 < len__25826__auto___83229)){
args__25833__auto__.push((arguments[i__25827__auto___83230]));

var G__83231 = (i__25827__auto___83230 + (1));
i__25827__auto___83230 = G__83231;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83224,output_schema83216_83225,input_schema83217_83226,input_checker83218_83227,output_checker83219_83228))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83224,output_schema83216_83225,input_schema83217_83226,input_checker83218_83227,output_checker83219_83228){
return (function (G__83220,rest83221){
var validate__38286__auto__ = ufv___83224.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83232 = cljs.core.list_STAR_.call(null,G__83220,rest83221);
var temp__4657__auto___83233 = input_checker83218_83227.call(null,args__38287__auto___83232);
if(cljs.core.truth_(temp__4657__auto___83233)){
var error__38288__auto___83234 = temp__4657__auto___83233;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83234)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83217_83226,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83232,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83234], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83220;
var children = rest83221;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83235 = output_checker83219_83228.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83235)){
var error__38288__auto___83236 = temp__4657__auto___83235;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83236)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83216_83225,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83236], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83224,output_schema83216_83225,input_schema83217_83226,input_checker83218_83227,output_checker83219_83228))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___83224,output_schema83216_83225,input_schema83217_83226,input_checker83218_83227,output_checker83219_83228){
return (function (seq83222){
var G__83223 = cljs.core.first.call(null,seq83222);
var seq83222__$1 = cljs.core.next.call(null,seq83222);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__83223,seq83222__$1);
});})(ufv___83224,output_schema83216_83225,input_schema83217_83226,input_checker83218_83227,output_checker83219_83228))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema83216_83225,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83217_83226], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___83249 = schema.utils.use_fn_validation;
var output_schema83238_83250 = om_bootstrap.types.Component;
var input_schema83239_83251 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownMenu","DropdownMenu",881901742,null)], null))),schema.core.Any], null);
var input_checker83240_83252 = schema.core.checker.call(null,input_schema83239_83251);
var output_checker83241_83253 = schema.core.checker.call(null,output_schema83238_83250);
/**
 * Inputs: [opts :- DropdownMenu & children]
 *   Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___83249,output_schema83238_83250,input_schema83239_83251,input_checker83240_83252,output_checker83241_83253){
return (function om_bootstrap$button$dropdown_menu(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83254 = arguments.length;
var i__25827__auto___83255 = (0);
while(true){
if((i__25827__auto___83255 < len__25826__auto___83254)){
args__25833__auto__.push((arguments[i__25827__auto___83255]));

var G__83256 = (i__25827__auto___83255 + (1));
i__25827__auto___83255 = G__83256;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83249,output_schema83238_83250,input_schema83239_83251,input_checker83240_83252,output_checker83241_83253))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83249,output_schema83238_83250,input_schema83239_83251,input_checker83240_83252,output_checker83241_83253){
return (function (G__83242,rest83243){
var validate__38286__auto__ = ufv___83249.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83257 = cljs.core.list_STAR_.call(null,G__83242,rest83243);
var temp__4657__auto___83258 = input_checker83240_83252.call(null,args__38287__auto___83257);
if(cljs.core.truth_(temp__4657__auto___83258)){
var error__38288__auto___83259 = temp__4657__auto___83258;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83259)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83239_83251,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83257,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83259], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83242;
var children = rest83243;
while(true){
var vec__83246 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__83246,(0),null);
var props = cljs.core.nth.call(null,vec__83246,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4655__auto__)){
var on_select = temp__4655__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4655__auto__,vec__83246,bs,props,classes,ul_attrs,validate__38286__auto__,ufv___83249,output_schema83238_83250,input_schema83239_83251,input_checker83240_83252,output_checker83241_83253){
return (function (p1__83237_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__83237_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4655__auto__,vec__83246,bs,props,classes,ul_attrs,validate__38286__auto__,ufv___83249,output_schema83238_83250,input_schema83239_83251,input_checker83240_83252,output_checker83241_83253))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83260 = output_checker83241_83253.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83260)){
var error__38288__auto___83261 = temp__4657__auto___83260;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83261)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83238_83250,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83261], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83249,output_schema83238_83250,input_schema83239_83251,input_checker83240_83252,output_checker83241_83253))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___83249,output_schema83238_83250,input_schema83239_83251,input_checker83240_83252,output_checker83241_83253){
return (function (seq83244){
var G__83245 = cljs.core.first.call(null,seq83244);
var seq83244__$1 = cljs.core.next.call(null,seq83244);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__83245,seq83244__$1);
});})(ufv___83249,output_schema83238_83250,input_schema83239_83251,input_checker83240_83252,output_checker83241_83253))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema83238_83250,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83239_83251], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__45350__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__45350__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__45350__auto__;
})();

var component_fnk__45379__auto___83298 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema83267 = schema.core.Any;
var input_schema83268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map83266","map83266",-1889949051,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker83269 = schema.core.checker.call(null,input_schema83268);
var output_checker83270 = schema.core.checker.call(null,output_schema83267);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270){
return (function om_bootstrap$button$constructor83264(G__83271){
var validate__38286__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83299 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__83271], null);
var temp__4657__auto___83300 = input_checker83269.call(null,args__38287__auto___83299);
if(cljs.core.truth_(temp__4657__auto___83300)){
var error__38288__auto___83301 = temp__4657__auto___83300;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor83264","constructor83264",1642665881,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83301)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83268,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83299,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83301], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var map83266 = G__83271;
while(true){
if(cljs.core.map_QMARK_.call(null,map83266)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map83266)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map83266,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map83266,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button83280 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button83280 = (function (validate__38286__auto__,owner,map83266,output_checker83270,output_schema83267,input_checker83269,state,input_schema83268,constructor83264,G__83271,ufv__,meta83281){
this.validate__38286__auto__ = validate__38286__auto__;
this.owner = owner;
this.map83266 = map83266;
this.output_checker83270 = output_checker83270;
this.output_schema83267 = output_schema83267;
this.input_checker83269 = input_checker83269;
this.state = state;
this.input_schema83268 = input_schema83268;
this.constructor83264 = constructor83264;
this.G__83271 = G__83271;
this.ufv__ = ufv__;
this.meta83281 = meta83281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button83280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270){
return (function (_83282,meta83281__$1){
var self__ = this;
var _83282__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button83280(self__.validate__38286__auto__,self__.owner,self__.map83266,self__.output_checker83270,self__.output_schema83267,self__.input_checker83269,self__.state,self__.input_schema83268,self__.constructor83264,self__.G__83271,self__.ufv__,meta83281__$1));
});})(state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270))
;

om_bootstrap.button.t_om_bootstrap$button83280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270){
return (function (_83282){
var self__ = this;
var _83282__$1 = this;
return self__.meta83281;
});})(state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270))
;

om_bootstrap.button.t_om_bootstrap$button83280.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button83280.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270))
;

om_bootstrap.button.t_om_bootstrap$button83280.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button83280.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__83283 = om.core.get_props.call(null,self__.owner);
var map__83283__$1 = ((((!((map__83283 == null)))?((((map__83283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83283):map__83283);
var opts = cljs.core.get.call(null,map__83283__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__83283__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__83284 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__83284,(0),null);
var props = cljs.core.nth.call(null,vec__83284,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__83283,map__83283__$1,opts,children,vec__83284,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__83283,map__83283__$1,opts,children,vec__83284,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270))
], null);
var update_child_props = ((function (open_QMARK_,map__83283,map__83283__$1,opts,children,vec__83284,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__83283,map__83283__$1,opts,children,vec__83284,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270){
return (function (key){
var temp__4655__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4655__auto__)){
var os = temp__4655__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__83283,map__83283__$1,opts,children,vec__83284,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__83283,map__83283__$1,opts,children,vec__83284,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span(({"className": "caret"}))),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__83283,map__83283__$1,opts,children,vec__83284,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270){
return (function (p1__83262_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__83262_SHARP_,update_child_props);
});})(open_QMARK_,map__83283,map__83283__$1,opts,children,vec__83284,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270))
,children))], null));
});})(state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270))
;

om_bootstrap.button.t_om_bootstrap$button83280.getBasis = ((function (state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validate__38286__auto__","validate__38286__auto__",-478810592,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map83266","map83266",-1889949051,null),new cljs.core.Symbol(null,"output-checker83270","output-checker83270",-1608479350,null),new cljs.core.Symbol(null,"output-schema83267","output-schema83267",-515218450,null),new cljs.core.Symbol(null,"input-checker83269","input-checker83269",933666451,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema83268","input-schema83268",1231387321,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor83264","constructor83264",1642665881,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__83271","G__83271",1626476861,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta83281","meta83281",2011448296,null)], null);
});})(state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270))
;

om_bootstrap.button.t_om_bootstrap$button83280.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button83280.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button83280";

om_bootstrap.button.t_om_bootstrap$button83280.cljs$lang$ctorPrWriter = ((function (state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-bootstrap.button/t_om_bootstrap$button83280");
});})(state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270))
;

om_bootstrap.button.__GT_t_om_bootstrap$button83280 = ((function (state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270){
return (function om_bootstrap$button$constructor83264_$___GT_t_om_bootstrap$button83280(validate__38286__auto____$1,owner__$1,map83266__$1,output_checker83270__$1,output_schema83267__$1,input_checker83269__$1,state__$1,input_schema83268__$1,constructor83264__$1,G__83271__$1,ufv____$1,meta83281){
return (new om_bootstrap.button.t_om_bootstrap$button83280(validate__38286__auto____$1,owner__$1,map83266__$1,output_checker83270__$1,output_schema83267__$1,input_checker83269__$1,state__$1,input_schema83268__$1,constructor83264__$1,G__83271__$1,ufv____$1,meta83281));
});})(state,owner,validate__38286__auto__,ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button83280(validate__38286__auto__,owner,map83266,output_checker83270,output_schema83267,input_checker83269,state,input_schema83268,om_bootstrap$button$constructor83264,G__83271,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83302 = output_checker83270.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83302)){
var error__38288__auto___83303 = temp__4657__auto___83302;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor83264","constructor83264",1642665881,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83303)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83267,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83303], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv__,output_schema83267,input_schema83268,input_checker83269,output_checker83270))
,schema.core.make_fn_schema.call(null,output_schema83267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83268], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__45379__auto___83298){
return (function om_bootstrap$button$dropdown_STAR_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83304 = arguments.length;
var i__25827__auto___83305 = (0);
while(true){
if((i__25827__auto___83305 < len__25826__auto___83304)){
args__25833__auto__.push((arguments[i__25827__auto___83305]));

var G__83306 = (i__25827__auto___83305 + (1));
i__25827__auto___83305 = G__83306;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});})(component_fnk__45379__auto___83298))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__45379__auto___83298){
return (function (data__45380__auto__,owner83263,p__83291){
var vec__83292 = p__83291;
var opts__45381__auto__ = cljs.core.nth.call(null,vec__83292,(0),null);
return component_fnk__45379__auto___83298.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner83263),new cljs.core.Keyword(null,"opts","opts",155075701),opts__45381__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner83263,new cljs.core.Keyword(null,"data","data",-232669377),data__45380__auto__], null));
});})(component_fnk__45379__auto___83298))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__45379__auto___83298){
return (function (seq83288){
var G__83289 = cljs.core.first.call(null,seq83288);
var seq83288__$1 = cljs.core.next.call(null,seq83288);
var G__83290 = cljs.core.first.call(null,seq83288__$1);
var seq83288__$2 = cljs.core.next.call(null,seq83288__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__83289,G__83290,seq83288__$2);
});})(component_fnk__45379__auto___83298))
;


om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(var_args){
var args83295 = [];
var len__25826__auto___83307 = arguments.length;
var i__25827__auto___83308 = (0);
while(true){
if((i__25827__auto___83308 < len__25826__auto___83307)){
args83295.push((arguments[i__25827__auto___83308]));

var G__83309 = (i__25827__auto___83308 + (1));
i__25827__auto___83308 = G__83309;
continue;
} else {
}
break;
}

var G__83297 = args83295.length;
switch (G__83297) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83295.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__45348__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__45348__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__45348__auto__,m83265){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__45348__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m83265));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___83319 = schema.utils.use_fn_validation;
var output_schema83311_83320 = om_bootstrap.types.Component;
var input_schema83312_83321 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownButton","DropdownButton",251375015,null)], null))),schema.core.Any], null);
var input_checker83313_83322 = schema.core.checker.call(null,input_schema83312_83321);
var output_checker83314_83323 = schema.core.checker.call(null,output_schema83311_83320);
/**
 * Inputs: [opts :- DropdownButton & children]
 *   Returns: t/Component
 * 
 *   Returns a dropdown button component. The component manages its own
 *   dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___83319,output_schema83311_83320,input_schema83312_83321,input_checker83313_83322,output_checker83314_83323){
return (function om_bootstrap$button$dropdown(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83324 = arguments.length;
var i__25827__auto___83325 = (0);
while(true){
if((i__25827__auto___83325 < len__25826__auto___83324)){
args__25833__auto__.push((arguments[i__25827__auto___83325]));

var G__83326 = (i__25827__auto___83325 + (1));
i__25827__auto___83325 = G__83326;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83319,output_schema83311_83320,input_schema83312_83321,input_checker83313_83322,output_checker83314_83323))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83319,output_schema83311_83320,input_schema83312_83321,input_checker83313_83322,output_checker83314_83323){
return (function (G__83315,rest83316){
var validate__38286__auto__ = ufv___83319.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83327 = cljs.core.list_STAR_.call(null,G__83315,rest83316);
var temp__4657__auto___83328 = input_checker83313_83322.call(null,args__38287__auto___83327);
if(cljs.core.truth_(temp__4657__auto___83328)){
var error__38288__auto___83329 = temp__4657__auto___83328;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__38288__auto___83329)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83312_83321,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83327,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83329], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83315;
var children = rest83316;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83330 = output_checker83314_83323.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83330)){
var error__38288__auto___83331 = temp__4657__auto___83330;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__38288__auto___83331)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83311_83320,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83331], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83319,output_schema83311_83320,input_schema83312_83321,input_checker83313_83322,output_checker83314_83323))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___83319,output_schema83311_83320,input_schema83312_83321,input_checker83313_83322,output_checker83314_83323){
return (function (seq83317){
var G__83318 = cljs.core.first.call(null,seq83317);
var seq83317__$1 = cljs.core.next.call(null,seq83317);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__83318,seq83317__$1);
});})(ufv___83319,output_schema83311_83320,input_schema83312_83321,input_checker83313_83322,output_checker83314_83323))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema83311_83320,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83312_83321], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__45350__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__45350__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__45350__auto__;
})();

var component_fnk__45379__auto___83367 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema83336 = schema.core.Any;
var input_schema83337 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map83335","map83335",-1206840748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker83338 = schema.core.checker.call(null,input_schema83337);
var output_checker83339 = schema.core.checker.call(null,output_schema83336);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339){
return (function om_bootstrap$button$constructor83333(G__83340){
var validate__38286__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83368 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__83340], null);
var temp__4657__auto___83369 = input_checker83338.call(null,args__38287__auto___83368);
if(cljs.core.truth_(temp__4657__auto___83369)){
var error__38288__auto___83370 = temp__4657__auto___83369;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor83333","constructor83333",1597518822,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83370)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83337,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83368,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83370], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var map83335 = G__83340;
while(true){
if(cljs.core.map_QMARK_.call(null,map83335)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map83335)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map83335,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map83335,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button83349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button83349 = (function (validate__38286__auto__,owner,output_checker83339,constructor83333,G__83340,input_schema83337,map83335,state,ufv__,output_schema83336,input_checker83338,meta83350){
this.validate__38286__auto__ = validate__38286__auto__;
this.owner = owner;
this.output_checker83339 = output_checker83339;
this.constructor83333 = constructor83333;
this.G__83340 = G__83340;
this.input_schema83337 = input_schema83337;
this.map83335 = map83335;
this.state = state;
this.ufv__ = ufv__;
this.output_schema83336 = output_schema83336;
this.input_checker83338 = input_checker83338;
this.meta83350 = meta83350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button83349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339){
return (function (_83351,meta83350__$1){
var self__ = this;
var _83351__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button83349(self__.validate__38286__auto__,self__.owner,self__.output_checker83339,self__.constructor83333,self__.G__83340,self__.input_schema83337,self__.map83335,self__.state,self__.ufv__,self__.output_schema83336,self__.input_checker83338,meta83350__$1));
});})(state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339))
;

om_bootstrap.button.t_om_bootstrap$button83349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339){
return (function (_83351){
var self__ = this;
var _83351__$1 = this;
return self__.meta83350;
});})(state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339))
;

om_bootstrap.button.t_om_bootstrap$button83349.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button83349.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339))
;

om_bootstrap.button.t_om_bootstrap$button83349.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button83349.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__83352 = om.core.get_props.call(null,self__.owner);
var map__83352__$1 = ((((!((map__83352 == null)))?((((map__83352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83352):map__83352);
var opts = cljs.core.get.call(null,map__83352__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__83352__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__83353 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__83353,(0),null);
var props = cljs.core.nth.call(null,vec__83353,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__83352,map__83352__$1,opts,children,vec__83353,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339){
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
});})(open_QMARK_,map__83352,map__83352__$1,opts,children,vec__83353,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__83352,map__83352__$1,opts,children,vec__83353,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__83352,map__83352__$1,opts,children,vec__83353,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339))
], null)),cljs.core.apply.call(null,React.DOM.span,({"className": "sr-only"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span(({"className": "caret"})));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__83352,map__83352__$1,opts,children,vec__83353,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339){
return (function (k){
var temp__4657__auto___83371 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto___83371)){
var f_83372 = temp__4657__auto___83371;
f_83372.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__83352,map__83352__$1,opts,children,vec__83353,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339))
;

om_bootstrap.button.t_om_bootstrap$button83349.getBasis = ((function (state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validate__38286__auto__","validate__38286__auto__",-478810592,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker83339","output-checker83339",634627781,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor83333","constructor83333",1597518822,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__83340","G__83340",-623587090,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"input-schema83337","input-schema83337",-830406670,null),new cljs.core.Symbol(null,"map83335","map83335",-1206840748,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"output-schema83336","output-schema83336",-123916355,null),new cljs.core.Symbol(null,"input-checker83338","input-checker83338",-2113536226,null),new cljs.core.Symbol(null,"meta83350","meta83350",-641379314,null)], null);
});})(state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339))
;

om_bootstrap.button.t_om_bootstrap$button83349.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button83349.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button83349";

om_bootstrap.button.t_om_bootstrap$button83349.cljs$lang$ctorPrWriter = ((function (state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-bootstrap.button/t_om_bootstrap$button83349");
});})(state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339))
;

om_bootstrap.button.__GT_t_om_bootstrap$button83349 = ((function (state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339){
return (function om_bootstrap$button$constructor83333_$___GT_t_om_bootstrap$button83349(validate__38286__auto____$1,owner__$1,output_checker83339__$1,constructor83333__$1,G__83340__$1,input_schema83337__$1,map83335__$1,state__$1,ufv____$1,output_schema83336__$1,input_checker83338__$1,meta83350){
return (new om_bootstrap.button.t_om_bootstrap$button83349(validate__38286__auto____$1,owner__$1,output_checker83339__$1,constructor83333__$1,G__83340__$1,input_schema83337__$1,map83335__$1,state__$1,ufv____$1,output_schema83336__$1,input_checker83338__$1,meta83350));
});})(state,owner,validate__38286__auto__,ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button83349(validate__38286__auto__,owner,output_checker83339,om_bootstrap$button$constructor83333,G__83340,input_schema83337,map83335,state,ufv__,output_schema83336,input_checker83338,null));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83373 = output_checker83339.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83373)){
var error__38288__auto___83374 = temp__4657__auto___83373;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor83333","constructor83333",1597518822,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83374)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83336,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83374], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv__,output_schema83336,input_schema83337,input_checker83338,output_checker83339))
,schema.core.make_fn_schema.call(null,output_schema83336,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83337], null)));
})();
/**
 * Generates a split button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__45379__auto___83367){
return (function om_bootstrap$button$split_STAR_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83375 = arguments.length;
var i__25827__auto___83376 = (0);
while(true){
if((i__25827__auto___83376 < len__25826__auto___83375)){
args__25833__auto__.push((arguments[i__25827__auto___83376]));

var G__83377 = (i__25827__auto___83376 + (1));
i__25827__auto___83376 = G__83377;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});})(component_fnk__45379__auto___83367))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__45379__auto___83367){
return (function (data__45380__auto__,owner83332,p__83360){
var vec__83361 = p__83360;
var opts__45381__auto__ = cljs.core.nth.call(null,vec__83361,(0),null);
return component_fnk__45379__auto___83367.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner83332),new cljs.core.Keyword(null,"opts","opts",155075701),opts__45381__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner83332,new cljs.core.Keyword(null,"data","data",-232669377),data__45380__auto__], null));
});})(component_fnk__45379__auto___83367))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__45379__auto___83367){
return (function (seq83357){
var G__83358 = cljs.core.first.call(null,seq83357);
var seq83357__$1 = cljs.core.next.call(null,seq83357);
var G__83359 = cljs.core.first.call(null,seq83357__$1);
var seq83357__$2 = cljs.core.next.call(null,seq83357__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__83358,G__83359,seq83357__$2);
});})(component_fnk__45379__auto___83367))
;


om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(var_args){
var args83364 = [];
var len__25826__auto___83378 = arguments.length;
var i__25827__auto___83379 = (0);
while(true){
if((i__25827__auto___83379 < len__25826__auto___83378)){
args83364.push((arguments[i__25827__auto___83379]));

var G__83380 = (i__25827__auto___83379 + (1));
i__25827__auto___83379 = G__83380;
continue;
} else {
}
break;
}

var G__83366 = args83364.length;
switch (G__83366) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args83364.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__45348__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__45348__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__45348__auto__,m83334){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__45348__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m83334));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___83390 = schema.utils.use_fn_validation;
var output_schema83382_83391 = schema.core.Any;
var input_schema83383_83392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SplitButton","SplitButton",1856385687,null)], null))),schema.core.Any], null);
var input_checker83384_83393 = schema.core.checker.call(null,input_schema83383_83392);
var output_checker83385_83394 = schema.core.checker.call(null,output_schema83382_83391);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___83390,output_schema83382_83391,input_schema83383_83392,input_checker83384_83393,output_checker83385_83394){
return (function om_bootstrap$button$split(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83395 = arguments.length;
var i__25827__auto___83396 = (0);
while(true){
if((i__25827__auto___83396 < len__25826__auto___83395)){
args__25833__auto__.push((arguments[i__25827__auto___83396]));

var G__83397 = (i__25827__auto___83396 + (1));
i__25827__auto___83396 = G__83397;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83390,output_schema83382_83391,input_schema83383_83392,input_checker83384_83393,output_checker83385_83394))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83390,output_schema83382_83391,input_schema83383_83392,input_checker83384_83393,output_checker83385_83394){
return (function (G__83386,rest83387){
var validate__38286__auto__ = ufv___83390.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83398 = cljs.core.list_STAR_.call(null,G__83386,rest83387);
var temp__4657__auto___83399 = input_checker83384_83393.call(null,args__38287__auto___83398);
if(cljs.core.truth_(temp__4657__auto___83399)){
var error__38288__auto___83400 = temp__4657__auto___83399;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83400)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83383_83392,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83398,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83400], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83386;
var children = rest83387;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83401 = output_checker83385_83394.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83401)){
var error__38288__auto___83402 = temp__4657__auto___83401;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__38288__auto___83402)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83382_83391,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83402], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83390,output_schema83382_83391,input_schema83383_83392,input_checker83384_83393,output_checker83385_83394))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___83390,output_schema83382_83391,input_schema83383_83392,input_checker83384_83393,output_checker83385_83394){
return (function (seq83388){
var G__83389 = cljs.core.first.call(null,seq83388);
var seq83388__$1 = cljs.core.next.call(null,seq83388);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__83389,seq83388__$1);
});})(ufv___83390,output_schema83382_83391,input_schema83383_83392,input_checker83384_83393,output_checker83385_83394))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema83382_83391,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83383_83392], null)));

//# sourceMappingURL=button.js.map?rel=1478402678528