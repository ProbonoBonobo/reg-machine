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
var ufv___33101 = schema.utils.use_fn_validation;
var output_schema33095_33102 = schema.core.Any;
var input_schema33096_33103 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33097_33104 = schema.core.checker.call(null,input_schema33096_33103);
var output_checker33098_33105 = schema.core.checker.call(null,output_schema33095_33102);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___33101,output_schema33095_33102,input_schema33096_33103,input_checker33097_33104,output_checker33098_33105){
return (function om_bootstrap$button$render_anchor(G__33099,G__33100){
var validate__20540__auto__ = ufv___33101.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33106 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33099,G__33100], null);
var temp__4425__auto___33107 = input_checker33097_33104.call(null,args__20541__auto___33106);
if(cljs.core.truth_(temp__4425__auto___33107)){
var error__20542__auto___33108 = temp__4425__auto___33107;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33108)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33096_33103,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33106,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33108], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__33099;
var children = G__33100;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33109 = output_checker33098_33105.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33109)){
var error__20542__auto___33110 = temp__4425__auto___33109;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33110)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33095_33102,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33110], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33101,output_schema33095_33102,input_schema33096_33103,input_checker33097_33104,output_checker33098_33105))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema33095_33102,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33096_33103], null)));
var ufv___33120 = schema.utils.use_fn_validation;
var output_schema33111_33121 = om_bootstrap.types.Component;
var input_schema33112_33122 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Button","Button",-1787718586,null)], null))),schema.core.Any], null);
var input_checker33113_33123 = schema.core.checker.call(null,input_schema33112_33122);
var output_checker33114_33124 = schema.core.checker.call(null,output_schema33111_33121);
/**
 * Inputs: [props :- Button & children]
 *   Returns: t/Component
 * 
 *   Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___33120,output_schema33111_33121,input_schema33112_33122,input_checker33113_33123,output_checker33114_33124){
return (function om_bootstrap$button$button(var_args){
var args__20266__auto__ = [];
var len__20259__auto___33125 = arguments.length;
var i__20260__auto___33126 = (0);
while(true){
if((i__20260__auto___33126 < len__20259__auto___33125)){
args__20266__auto__.push((arguments[i__20260__auto___33126]));

var G__33127 = (i__20260__auto___33126 + (1));
i__20260__auto___33126 = G__33127;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___33120,output_schema33111_33121,input_schema33112_33122,input_checker33113_33123,output_checker33114_33124))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33120,output_schema33111_33121,input_schema33112_33122,input_checker33113_33123,output_checker33114_33124){
return (function (G__33115,rest33116){
var validate__20540__auto__ = ufv___33120.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33128 = cljs.core.list_STAR_.call(null,G__33115,rest33116);
var temp__4425__auto___33129 = input_checker33113_33123.call(null,args__20541__auto___33128);
if(cljs.core.truth_(temp__4425__auto___33129)){
var error__20542__auto___33130 = temp__4425__auto___33129;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__20542__auto___33130)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33112_33122,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33128,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33130], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var props = G__33115;
var children = rest33116;
while(true){
var vec__33119 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__33119,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__33119,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__19201__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
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
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33131 = output_checker33114_33124.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33131)){
var error__20542__auto___33132 = temp__4425__auto___33131;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__20542__auto___33132)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33111_33121,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33132], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33120,output_schema33111_33121,input_schema33112_33122,input_checker33113_33123,output_checker33114_33124))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___33120,output_schema33111_33121,input_schema33112_33122,input_checker33113_33123,output_checker33114_33124){
return (function (seq33117){
var G__33118 = cljs.core.first.call(null,seq33117);
var seq33117__$1 = cljs.core.next.call(null,seq33117);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__33118,seq33117__$1);
});})(ufv___33120,output_schema33111_33121,input_schema33112_33122,input_checker33113_33123,output_checker33114_33124))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema33111_33121,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33112_33122], null)));
var ufv___33142 = schema.utils.use_fn_validation;
var output_schema33133_33143 = om_bootstrap.types.Component;
var input_schema33134_33144 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker33135_33145 = schema.core.checker.call(null,input_schema33134_33144);
var output_checker33136_33146 = schema.core.checker.call(null,output_schema33133_33143);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___33142,output_schema33133_33143,input_schema33134_33144,input_checker33135_33145,output_checker33136_33146){
return (function om_bootstrap$button$toolbar(var_args){
var args__20266__auto__ = [];
var len__20259__auto___33147 = arguments.length;
var i__20260__auto___33148 = (0);
while(true){
if((i__20260__auto___33148 < len__20259__auto___33147)){
args__20266__auto__.push((arguments[i__20260__auto___33148]));

var G__33149 = (i__20260__auto___33148 + (1));
i__20260__auto___33148 = G__33149;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___33142,output_schema33133_33143,input_schema33134_33144,input_checker33135_33145,output_checker33136_33146))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33142,output_schema33133_33143,input_schema33134_33144,input_checker33135_33145,output_checker33136_33146){
return (function (G__33137,rest33138){
var validate__20540__auto__ = ufv___33142.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33150 = cljs.core.list_STAR_.call(null,G__33137,rest33138);
var temp__4425__auto___33151 = input_checker33135_33145.call(null,args__20541__auto___33150);
if(cljs.core.truth_(temp__4425__auto___33151)){
var error__20542__auto___33152 = temp__4425__auto___33151;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__20542__auto___33152)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33134_33144,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33150,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33152], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__33137;
var children = rest33138;
while(true){
var vec__33141 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__33141,(0),null);
var props = cljs.core.nth.call(null,vec__33141,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"role": "toolbar", "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33153 = output_checker33136_33146.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33153)){
var error__20542__auto___33154 = temp__4425__auto___33153;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__20542__auto___33154)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33133_33143,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33154], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33142,output_schema33133_33143,input_schema33134_33144,input_checker33135_33145,output_checker33136_33146))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___33142,output_schema33133_33143,input_schema33134_33144,input_checker33135_33145,output_checker33136_33146){
return (function (seq33139){
var G__33140 = cljs.core.first.call(null,seq33139);
var seq33139__$1 = cljs.core.next.call(null,seq33139);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__33140,seq33139__$1);
});})(ufv___33142,output_schema33133_33143,input_schema33134_33144,input_checker33135_33145,output_checker33136_33146))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema33133_33143,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33134_33144], null)));
var ufv___33164 = schema.utils.use_fn_validation;
var output_schema33155_33165 = om_bootstrap.types.Component;
var input_schema33156_33166 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null)], null))),schema.core.Any], null);
var input_checker33157_33167 = schema.core.checker.call(null,input_schema33156_33166);
var output_checker33158_33168 = schema.core.checker.call(null,output_schema33155_33165);
/**
 * Inputs: [opts :- ButtonGroup & children]
 *   Returns: t/Component
 * 
 *   Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___33164,output_schema33155_33165,input_schema33156_33166,input_checker33157_33167,output_checker33158_33168){
return (function om_bootstrap$button$button_group(var_args){
var args__20266__auto__ = [];
var len__20259__auto___33169 = arguments.length;
var i__20260__auto___33170 = (0);
while(true){
if((i__20260__auto___33170 < len__20259__auto___33169)){
args__20266__auto__.push((arguments[i__20260__auto___33170]));

var G__33171 = (i__20260__auto___33170 + (1));
i__20260__auto___33170 = G__33171;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___33164,output_schema33155_33165,input_schema33156_33166,input_checker33157_33167,output_checker33158_33168))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33164,output_schema33155_33165,input_schema33156_33166,input_checker33157_33167,output_checker33158_33168){
return (function (G__33159,rest33160){
var validate__20540__auto__ = ufv___33164.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33172 = cljs.core.list_STAR_.call(null,G__33159,rest33160);
var temp__4425__auto___33173 = input_checker33157_33167.call(null,args__20541__auto___33172);
if(cljs.core.truth_(temp__4425__auto___33173)){
var error__20542__auto___33174 = temp__4425__auto___33173;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__20542__auto___33174)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33156_33166,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33172,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33174], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__33159;
var children = rest33160;
while(true){
var vec__33163 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__33163,(0),null);
var props = cljs.core.nth.call(null,vec__33163,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33175 = output_checker33158_33168.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33175)){
var error__20542__auto___33176 = temp__4425__auto___33175;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__20542__auto___33176)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33155_33165,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33176], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33164,output_schema33155_33165,input_schema33156_33166,input_checker33157_33167,output_checker33158_33168))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___33164,output_schema33155_33165,input_schema33156_33166,input_checker33157_33167,output_checker33158_33168){
return (function (seq33161){
var G__33162 = cljs.core.first.call(null,seq33161);
var seq33161__$1 = cljs.core.next.call(null,seq33161);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__33162,seq33161__$1);
});})(ufv___33164,output_schema33155_33165,input_schema33156_33166,input_checker33157_33167,output_checker33158_33168))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema33155_33165,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33156_33166], null)));
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

var component_fnk__30600__auto___33206 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema33181 = schema.core.Any;
var input_schema33182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map33180","map33180",1566072540,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker33183 = schema.core.checker.call(null,input_schema33182);
var output_checker33184 = schema.core.checker.call(null,output_schema33181);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184){
return (function om_bootstrap$button$constructor33178(G__33185){
var validate__20540__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33207 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33185], null);
var temp__4425__auto___33208 = input_checker33183.call(null,args__20541__auto___33207);
if(cljs.core.truth_(temp__4425__auto___33208)){
var error__20542__auto___33209 = temp__4425__auto___33208;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33178","constructor33178",537526581,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33209)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33182,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33207,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33209], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var map33180 = G__33185;
while(true){
if(cljs.core.map_QMARK_.call(null,map33180)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map33180)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map33180,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button33192 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button33192 = (function (owner,input_checker33183,output_schema33181,input_schema33182,constructor33178,validate__20540__auto__,map33180,output_checker33184,ufv__,G__33185,meta33193){
this.owner = owner;
this.input_checker33183 = input_checker33183;
this.output_schema33181 = output_schema33181;
this.input_schema33182 = input_schema33182;
this.constructor33178 = constructor33178;
this.validate__20540__auto__ = validate__20540__auto__;
this.map33180 = map33180;
this.output_checker33184 = output_checker33184;
this.ufv__ = ufv__;
this.G__33185 = G__33185;
this.meta33193 = meta33193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button33192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__20540__auto__,ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184){
return (function (_33194,meta33193__$1){
var self__ = this;
var _33194__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button33192(self__.owner,self__.input_checker33183,self__.output_schema33181,self__.input_schema33182,self__.constructor33178,self__.validate__20540__auto__,self__.map33180,self__.output_checker33184,self__.ufv__,self__.G__33185,meta33193__$1));
});})(owner,validate__20540__auto__,ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184))
;

om_bootstrap.button.t_om_bootstrap$button33192.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__20540__auto__,ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184){
return (function (_33194){
var self__ = this;
var _33194__$1 = this;
return self__.meta33193;
});})(owner,validate__20540__auto__,ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184))
;

om_bootstrap.button.t_om_bootstrap$button33192.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button33192.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__20540__auto__,ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__20540__auto__,ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184))
;

om_bootstrap.button.t_om_bootstrap$button33192.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button33192.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__20540__auto__,ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__33195 = om.core.get_props.call(null,self__.owner);
var map__33195__$1 = ((((!((map__33195 == null)))?((((map__33195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33195):map__33195);
var opts = cljs.core.get.call(null,map__33195__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__33195__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__33196 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__33196,(0),null);
var props = cljs.core.nth.call(null,vec__33196,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__33195,map__33195__$1,opts,children,vec__33196,bs,props,classes,___$1,owner,validate__20540__auto__,ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184){
return (function (e){
var temp__4425__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var on_select = temp__4425__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__33195,map__33195__$1,opts,children,vec__33196,bs,props,classes,___$1,owner,validate__20540__auto__,ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184))
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
});})(owner,validate__20540__auto__,ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184))
;

om_bootstrap.button.t_om_bootstrap$button33192.getBasis = ((function (owner,validate__20540__auto__,ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker33183","input-checker33183",-1789358332,null),new cljs.core.Symbol(null,"output-schema33181","output-schema33181",812772007,null),new cljs.core.Symbol(null,"input-schema33182","input-schema33182",1273301107,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33178","constructor33178",537526581,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__20540__auto__","validate__20540__auto__",-1942755946,null),new cljs.core.Symbol(null,"map33180","map33180",1566072540,null),new cljs.core.Symbol(null,"output-checker33184","output-checker33184",474910620,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__33185","G__33185",1168601535,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"meta33193","meta33193",-1625521107,null)], null);
});})(owner,validate__20540__auto__,ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184))
;

om_bootstrap.button.t_om_bootstrap$button33192.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button33192.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button33192";

om_bootstrap.button.t_om_bootstrap$button33192.cljs$lang$ctorPrWriter = ((function (owner,validate__20540__auto__,ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184){
return (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"om-bootstrap.button/t_om_bootstrap$button33192");
});})(owner,validate__20540__auto__,ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184))
;

om_bootstrap.button.__GT_t_om_bootstrap$button33192 = ((function (owner,validate__20540__auto__,ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184){
return (function om_bootstrap$button$constructor33178_$___GT_t_om_bootstrap$button33192(owner__$1,input_checker33183__$1,output_schema33181__$1,input_schema33182__$1,constructor33178__$1,validate__20540__auto____$1,map33180__$1,output_checker33184__$1,ufv____$1,G__33185__$1,meta33193){
return (new om_bootstrap.button.t_om_bootstrap$button33192(owner__$1,input_checker33183__$1,output_schema33181__$1,input_schema33182__$1,constructor33178__$1,validate__20540__auto____$1,map33180__$1,output_checker33184__$1,ufv____$1,G__33185__$1,meta33193));
});})(owner,validate__20540__auto__,ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button33192(owner,input_checker33183,output_schema33181,input_schema33182,om_bootstrap$button$constructor33178,validate__20540__auto__,map33180,output_checker33184,ufv__,G__33185,null));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33210 = output_checker33184.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33210)){
var error__20542__auto___33211 = temp__4425__auto___33210;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33178","constructor33178",537526581,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33211)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33181,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33211], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv__,output_schema33181,input_schema33182,input_checker33183,output_checker33184))
,schema.core.make_fn_schema.call(null,output_schema33181,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33182], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 *   wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__30600__auto___33206){
return (function om_bootstrap$button$menu_item_STAR_(var_args){
var args__20266__auto__ = [];
var len__20259__auto___33212 = arguments.length;
var i__20260__auto___33213 = (0);
while(true){
if((i__20260__auto___33213 < len__20259__auto___33212)){
args__20266__auto__.push((arguments[i__20260__auto___33213]));

var G__33214 = (i__20260__auto___33213 + (1));
i__20260__auto___33213 = G__33214;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((2) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((2)),(0))):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20267__auto__);
});})(component_fnk__30600__auto___33206))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__30600__auto___33206){
return (function (data__30601__auto__,owner33177,p__33201){
var vec__33202 = p__33201;
var opts__30602__auto__ = cljs.core.nth.call(null,vec__33202,(0),null);
return component_fnk__30600__auto___33206.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__30602__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner33177,new cljs.core.Keyword(null,"data","data",-232669377),data__30601__auto__], null));
});})(component_fnk__30600__auto___33206))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__30600__auto___33206){
return (function (seq33198){
var G__33199 = cljs.core.first.call(null,seq33198);
var seq33198__$1 = cljs.core.next.call(null,seq33198);
var G__33200 = cljs.core.first.call(null,seq33198__$1);
var seq33198__$2 = cljs.core.next.call(null,seq33198__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33199,G__33200,seq33198__$2);
});})(component_fnk__30600__auto___33206))
;

om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(var_args){
var args33203 = [];
var len__20259__auto___33215 = arguments.length;
var i__20260__auto___33216 = (0);
while(true){
if((i__20260__auto___33216 < len__20259__auto___33215)){
args33203.push((arguments[i__20260__auto___33216]));

var G__33217 = (i__20260__auto___33216 + (1));
i__20260__auto___33216 = G__33217;
continue;
} else {
}
break;
}

var G__33205 = args33203.length;
switch (G__33205) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33203.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__30569__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__30569__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__30569__auto__,m33179){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__30569__auto__,m33179);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___33227 = schema.utils.use_fn_validation;
var output_schema33219_33228 = om_bootstrap.types.Component;
var input_schema33220_33229 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"MenuItem","MenuItem",1235363736,null)], null))),schema.core.Any], null);
var input_checker33221_33230 = schema.core.checker.call(null,input_schema33220_33229);
var output_checker33222_33231 = schema.core.checker.call(null,output_schema33219_33228);
/**
 * Inputs: [opts :- MenuItem & children]
 *   Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___33227,output_schema33219_33228,input_schema33220_33229,input_checker33221_33230,output_checker33222_33231){
return (function om_bootstrap$button$menu_item(var_args){
var args__20266__auto__ = [];
var len__20259__auto___33232 = arguments.length;
var i__20260__auto___33233 = (0);
while(true){
if((i__20260__auto___33233 < len__20259__auto___33232)){
args__20266__auto__.push((arguments[i__20260__auto___33233]));

var G__33234 = (i__20260__auto___33233 + (1));
i__20260__auto___33233 = G__33234;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___33227,output_schema33219_33228,input_schema33220_33229,input_checker33221_33230,output_checker33222_33231))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33227,output_schema33219_33228,input_schema33220_33229,input_checker33221_33230,output_checker33222_33231){
return (function (G__33223,rest33224){
var validate__20540__auto__ = ufv___33227.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33235 = cljs.core.list_STAR_.call(null,G__33223,rest33224);
var temp__4425__auto___33236 = input_checker33221_33230.call(null,args__20541__auto___33235);
if(cljs.core.truth_(temp__4425__auto___33236)){
var error__20542__auto___33237 = temp__4425__auto___33236;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33237)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33220_33229,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33235,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33237], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__33223;
var children = rest33224;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33238 = output_checker33222_33231.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33238)){
var error__20542__auto___33239 = temp__4425__auto___33238;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33239)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33219_33228,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33239], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33227,output_schema33219_33228,input_schema33220_33229,input_checker33221_33230,output_checker33222_33231))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___33227,output_schema33219_33228,input_schema33220_33229,input_checker33221_33230,output_checker33222_33231){
return (function (seq33225){
var G__33226 = cljs.core.first.call(null,seq33225);
var seq33225__$1 = cljs.core.next.call(null,seq33225);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__33226,seq33225__$1);
});})(ufv___33227,output_schema33219_33228,input_schema33220_33229,input_checker33221_33230,output_checker33222_33231))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema33219_33228,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33220_33229], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___33250 = schema.utils.use_fn_validation;
var output_schema33241_33251 = om_bootstrap.types.Component;
var input_schema33242_33252 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownMenu","DropdownMenu",881901742,null)], null))),schema.core.Any], null);
var input_checker33243_33253 = schema.core.checker.call(null,input_schema33242_33252);
var output_checker33244_33254 = schema.core.checker.call(null,output_schema33241_33251);
/**
 * Inputs: [opts :- DropdownMenu & children]
 *   Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___33250,output_schema33241_33251,input_schema33242_33252,input_checker33243_33253,output_checker33244_33254){
return (function om_bootstrap$button$dropdown_menu(var_args){
var args__20266__auto__ = [];
var len__20259__auto___33255 = arguments.length;
var i__20260__auto___33256 = (0);
while(true){
if((i__20260__auto___33256 < len__20259__auto___33255)){
args__20266__auto__.push((arguments[i__20260__auto___33256]));

var G__33257 = (i__20260__auto___33256 + (1));
i__20260__auto___33256 = G__33257;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___33250,output_schema33241_33251,input_schema33242_33252,input_checker33243_33253,output_checker33244_33254))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33250,output_schema33241_33251,input_schema33242_33252,input_checker33243_33253,output_checker33244_33254){
return (function (G__33245,rest33246){
var validate__20540__auto__ = ufv___33250.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33258 = cljs.core.list_STAR_.call(null,G__33245,rest33246);
var temp__4425__auto___33259 = input_checker33243_33253.call(null,args__20541__auto___33258);
if(cljs.core.truth_(temp__4425__auto___33259)){
var error__20542__auto___33260 = temp__4425__auto___33259;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33260)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33242_33252,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33258,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33260], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__33245;
var children = rest33246;
while(true){
var vec__33249 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__33249,(0),null);
var props = cljs.core.nth.call(null,vec__33249,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4423__auto__)){
var on_select = temp__4423__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4423__auto__,vec__33249,bs,props,classes,ul_attrs,validate__20540__auto__,ufv___33250,output_schema33241_33251,input_schema33242_33252,input_checker33243_33253,output_checker33244_33254){
return (function (p1__33240_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__33240_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4423__auto__,vec__33249,bs,props,classes,ul_attrs,validate__20540__auto__,ufv___33250,output_schema33241_33251,input_schema33242_33252,input_checker33243_33253,output_checker33244_33254))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33261 = output_checker33244_33254.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33261)){
var error__20542__auto___33262 = temp__4425__auto___33261;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33262)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33241_33251,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33262], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33250,output_schema33241_33251,input_schema33242_33252,input_checker33243_33253,output_checker33244_33254))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___33250,output_schema33241_33251,input_schema33242_33252,input_checker33243_33253,output_checker33244_33254){
return (function (seq33247){
var G__33248 = cljs.core.first.call(null,seq33247);
var seq33247__$1 = cljs.core.next.call(null,seq33247);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__33248,seq33247__$1);
});})(ufv___33250,output_schema33241_33251,input_schema33242_33252,input_checker33243_33253,output_checker33244_33254))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema33241_33251,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33242_33252], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__30571__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__30571__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__30571__auto__;
})();

var component_fnk__30600__auto___33293 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema33268 = schema.core.Any;
var input_schema33269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map33267","map33267",-1865866580,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker33270 = schema.core.checker.call(null,input_schema33269);
var output_checker33271 = schema.core.checker.call(null,output_schema33268);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271){
return (function om_bootstrap$button$constructor33265(G__33272){
var validate__20540__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33294 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33272], null);
var temp__4425__auto___33295 = input_checker33270.call(null,args__20541__auto___33294);
if(cljs.core.truth_(temp__4425__auto___33295)){
var error__20542__auto___33296 = temp__4425__auto___33295;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33265","constructor33265",-1706767613,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33296)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33269,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33294,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33296], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var map33267 = G__33272;
while(true){
if(cljs.core.map_QMARK_.call(null,map33267)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map33267)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map33267,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map33267,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button33279 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button33279 = (function (constructor33265,owner,G__33272,map33267,output_schema33268,input_schema33269,state,validate__20540__auto__,output_checker33271,ufv__,input_checker33270,meta33280){
this.constructor33265 = constructor33265;
this.owner = owner;
this.G__33272 = G__33272;
this.map33267 = map33267;
this.output_schema33268 = output_schema33268;
this.input_schema33269 = input_schema33269;
this.state = state;
this.validate__20540__auto__ = validate__20540__auto__;
this.output_checker33271 = output_checker33271;
this.ufv__ = ufv__;
this.input_checker33270 = input_checker33270;
this.meta33280 = meta33280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button33279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271){
return (function (_33281,meta33280__$1){
var self__ = this;
var _33281__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button33279(self__.constructor33265,self__.owner,self__.G__33272,self__.map33267,self__.output_schema33268,self__.input_schema33269,self__.state,self__.validate__20540__auto__,self__.output_checker33271,self__.ufv__,self__.input_checker33270,meta33280__$1));
});})(state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271))
;

om_bootstrap.button.t_om_bootstrap$button33279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271){
return (function (_33281){
var self__ = this;
var _33281__$1 = this;
return self__.meta33280;
});})(state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271))
;

om_bootstrap.button.t_om_bootstrap$button33279.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button33279.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271))
;

om_bootstrap.button.t_om_bootstrap$button33279.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button33279.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__33282 = om.core.get_props.call(null,self__.owner);
var map__33282__$1 = ((((!((map__33282 == null)))?((((map__33282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33282):map__33282);
var opts = cljs.core.get.call(null,map__33282__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__33282__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__33283 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__33283,(0),null);
var props = cljs.core.nth.call(null,vec__33283,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__33282,map__33282__$1,opts,children,vec__33283,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__33282,map__33282__$1,opts,children,vec__33283,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271))
], null);
var update_child_props = ((function (open_QMARK_,map__33282,map__33282__$1,opts,children,vec__33283,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__19201__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__33282,map__33282__$1,opts,children,vec__33283,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271){
return (function (key){
var temp__4423__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4423__auto__)){
var os = temp__4423__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__33282,map__33282__$1,opts,children,vec__33283,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__33282,map__33282__$1,opts,children,vec__33283,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__33282,map__33282__$1,opts,children,vec__33283,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271){
return (function (p1__33263_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__33263_SHARP_,update_child_props);
});})(open_QMARK_,map__33282,map__33282__$1,opts,children,vec__33283,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271))
,children))], null));
});})(state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271))
;

om_bootstrap.button.t_om_bootstrap$button33279.getBasis = ((function (state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33265","constructor33265",-1706767613,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__33272","G__33272",145022794,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"map33267","map33267",-1865866580,null),new cljs.core.Symbol(null,"output-schema33268","output-schema33268",-816719409,null),new cljs.core.Symbol(null,"input-schema33269","input-schema33269",1460972881,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__20540__auto__","validate__20540__auto__",-1942755946,null),new cljs.core.Symbol(null,"output-checker33271","output-checker33271",-1127050115,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"input-checker33270","input-checker33270",-1857007362,null),new cljs.core.Symbol(null,"meta33280","meta33280",612049456,null)], null);
});})(state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271))
;

om_bootstrap.button.t_om_bootstrap$button33279.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button33279.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button33279";

om_bootstrap.button.t_om_bootstrap$button33279.cljs$lang$ctorPrWriter = ((function (state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271){
return (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"om-bootstrap.button/t_om_bootstrap$button33279");
});})(state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271))
;

om_bootstrap.button.__GT_t_om_bootstrap$button33279 = ((function (state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271){
return (function om_bootstrap$button$constructor33265_$___GT_t_om_bootstrap$button33279(constructor33265__$1,owner__$1,G__33272__$1,map33267__$1,output_schema33268__$1,input_schema33269__$1,state__$1,validate__20540__auto____$1,output_checker33271__$1,ufv____$1,input_checker33270__$1,meta33280){
return (new om_bootstrap.button.t_om_bootstrap$button33279(constructor33265__$1,owner__$1,G__33272__$1,map33267__$1,output_schema33268__$1,input_schema33269__$1,state__$1,validate__20540__auto____$1,output_checker33271__$1,ufv____$1,input_checker33270__$1,meta33280));
});})(state,owner,validate__20540__auto__,ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button33279(om_bootstrap$button$constructor33265,owner,G__33272,map33267,output_schema33268,input_schema33269,state,validate__20540__auto__,output_checker33271,ufv__,input_checker33270,null));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33297 = output_checker33271.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33297)){
var error__20542__auto___33298 = temp__4425__auto___33297;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33265","constructor33265",-1706767613,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33298)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33268,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33298], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv__,output_schema33268,input_schema33269,input_checker33270,output_checker33271))
,schema.core.make_fn_schema.call(null,output_schema33268,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33269], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__30600__auto___33293){
return (function om_bootstrap$button$dropdown_STAR_(var_args){
var args__20266__auto__ = [];
var len__20259__auto___33299 = arguments.length;
var i__20260__auto___33300 = (0);
while(true){
if((i__20260__auto___33300 < len__20259__auto___33299)){
args__20266__auto__.push((arguments[i__20260__auto___33300]));

var G__33301 = (i__20260__auto___33300 + (1));
i__20260__auto___33300 = G__33301;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((2) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((2)),(0))):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20267__auto__);
});})(component_fnk__30600__auto___33293))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__30600__auto___33293){
return (function (data__30601__auto__,owner33264,p__33288){
var vec__33289 = p__33288;
var opts__30602__auto__ = cljs.core.nth.call(null,vec__33289,(0),null);
return component_fnk__30600__auto___33293.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner33264),new cljs.core.Keyword(null,"opts","opts",155075701),opts__30602__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner33264,new cljs.core.Keyword(null,"data","data",-232669377),data__30601__auto__], null));
});})(component_fnk__30600__auto___33293))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__30600__auto___33293){
return (function (seq33285){
var G__33286 = cljs.core.first.call(null,seq33285);
var seq33285__$1 = cljs.core.next.call(null,seq33285);
var G__33287 = cljs.core.first.call(null,seq33285__$1);
var seq33285__$2 = cljs.core.next.call(null,seq33285__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33286,G__33287,seq33285__$2);
});})(component_fnk__30600__auto___33293))
;

om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(var_args){
var args33290 = [];
var len__20259__auto___33302 = arguments.length;
var i__20260__auto___33303 = (0);
while(true){
if((i__20260__auto___33303 < len__20259__auto___33302)){
args33290.push((arguments[i__20260__auto___33303]));

var G__33304 = (i__20260__auto___33303 + (1));
i__20260__auto___33303 = G__33304;
continue;
} else {
}
break;
}

var G__33292 = args33290.length;
switch (G__33292) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33290.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__30569__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__30569__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__30569__auto__,m33266){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__30569__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m33266));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___33314 = schema.utils.use_fn_validation;
var output_schema33306_33315 = om_bootstrap.types.Component;
var input_schema33307_33316 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownButton","DropdownButton",251375015,null)], null))),schema.core.Any], null);
var input_checker33308_33317 = schema.core.checker.call(null,input_schema33307_33316);
var output_checker33309_33318 = schema.core.checker.call(null,output_schema33306_33315);
/**
 * Inputs: [opts :- DropdownButton & children]
 *   Returns: t/Component
 * 
 *   Returns a dropdown button component. The component manages its own
 *   dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___33314,output_schema33306_33315,input_schema33307_33316,input_checker33308_33317,output_checker33309_33318){
return (function om_bootstrap$button$dropdown(var_args){
var args__20266__auto__ = [];
var len__20259__auto___33319 = arguments.length;
var i__20260__auto___33320 = (0);
while(true){
if((i__20260__auto___33320 < len__20259__auto___33319)){
args__20266__auto__.push((arguments[i__20260__auto___33320]));

var G__33321 = (i__20260__auto___33320 + (1));
i__20260__auto___33320 = G__33321;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___33314,output_schema33306_33315,input_schema33307_33316,input_checker33308_33317,output_checker33309_33318))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33314,output_schema33306_33315,input_schema33307_33316,input_checker33308_33317,output_checker33309_33318){
return (function (G__33310,rest33311){
var validate__20540__auto__ = ufv___33314.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33322 = cljs.core.list_STAR_.call(null,G__33310,rest33311);
var temp__4425__auto___33323 = input_checker33308_33317.call(null,args__20541__auto___33322);
if(cljs.core.truth_(temp__4425__auto___33323)){
var error__20542__auto___33324 = temp__4425__auto___33323;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__20542__auto___33324)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33307_33316,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33322,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33324], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__33310;
var children = rest33311;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33325 = output_checker33309_33318.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33325)){
var error__20542__auto___33326 = temp__4425__auto___33325;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__20542__auto___33326)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33306_33315,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33326], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33314,output_schema33306_33315,input_schema33307_33316,input_checker33308_33317,output_checker33309_33318))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___33314,output_schema33306_33315,input_schema33307_33316,input_checker33308_33317,output_checker33309_33318){
return (function (seq33312){
var G__33313 = cljs.core.first.call(null,seq33312);
var seq33312__$1 = cljs.core.next.call(null,seq33312);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__33313,seq33312__$1);
});})(ufv___33314,output_schema33306_33315,input_schema33307_33316,input_checker33308_33317,output_checker33309_33318))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema33306_33315,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33307_33316], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__30571__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__30571__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__30571__auto__;
})();

var component_fnk__30600__auto___33356 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema33331 = schema.core.Any;
var input_schema33332 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map33330","map33330",338349405,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker33333 = schema.core.checker.call(null,input_schema33332);
var output_checker33334 = schema.core.checker.call(null,output_schema33331);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334){
return (function om_bootstrap$button$constructor33328(G__33335){
var validate__20540__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33357 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33335], null);
var temp__4425__auto___33358 = input_checker33333.call(null,args__20541__auto___33357);
if(cljs.core.truth_(temp__4425__auto___33358)){
var error__20542__auto___33359 = temp__4425__auto___33358;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33328","constructor33328",-1536635757,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33359)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33332,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33357,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33359], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var map33330 = G__33335;
while(true){
if(cljs.core.map_QMARK_.call(null,map33330)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map33330)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map33330,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map33330,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button33342 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button33342 = (function (owner,input_checker33333,output_checker33334,input_schema33332,constructor33328,state,validate__20540__auto__,G__33335,map33330,ufv__,output_schema33331,meta33343){
this.owner = owner;
this.input_checker33333 = input_checker33333;
this.output_checker33334 = output_checker33334;
this.input_schema33332 = input_schema33332;
this.constructor33328 = constructor33328;
this.state = state;
this.validate__20540__auto__ = validate__20540__auto__;
this.G__33335 = G__33335;
this.map33330 = map33330;
this.ufv__ = ufv__;
this.output_schema33331 = output_schema33331;
this.meta33343 = meta33343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button33342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334){
return (function (_33344,meta33343__$1){
var self__ = this;
var _33344__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button33342(self__.owner,self__.input_checker33333,self__.output_checker33334,self__.input_schema33332,self__.constructor33328,self__.state,self__.validate__20540__auto__,self__.G__33335,self__.map33330,self__.ufv__,self__.output_schema33331,meta33343__$1));
});})(state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334))
;

om_bootstrap.button.t_om_bootstrap$button33342.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334){
return (function (_33344){
var self__ = this;
var _33344__$1 = this;
return self__.meta33343;
});})(state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334))
;

om_bootstrap.button.t_om_bootstrap$button33342.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button33342.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334))
;

om_bootstrap.button.t_om_bootstrap$button33342.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button33342.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__33345 = om.core.get_props.call(null,self__.owner);
var map__33345__$1 = ((((!((map__33345 == null)))?((((map__33345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33345):map__33345);
var opts = cljs.core.get.call(null,map__33345__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__33345__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__33346 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__33346,(0),null);
var props = cljs.core.nth.call(null,vec__33346,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__33345,map__33345__$1,opts,children,vec__33346,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334){
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
});})(open_QMARK_,map__33345,map__33345__$1,opts,children,vec__33346,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__33345,map__33345__$1,opts,children,vec__33346,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__33345,map__33345__$1,opts,children,vec__33346,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__33345,map__33345__$1,opts,children,vec__33346,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334){
return (function (k){
var temp__4425__auto___33360 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto___33360)){
var f_33361 = temp__4425__auto___33360;
f_33361.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__33345,map__33345__$1,opts,children,vec__33346,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334))
;

om_bootstrap.button.t_om_bootstrap$button33342.getBasis = ((function (state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker33333","input-checker33333",1439767656,null),new cljs.core.Symbol(null,"output-checker33334","output-checker33334",1239796970,null),new cljs.core.Symbol(null,"input-schema33332","input-schema33332",2033827857,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33328","constructor33328",-1536635757,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__20540__auto__","validate__20540__auto__",-1942755946,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__33335","G__33335",562690779,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"map33330","map33330",338349405,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"output-schema33331","output-schema33331",2013532894,null),new cljs.core.Symbol(null,"meta33343","meta33343",263228819,null)], null);
});})(state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334))
;

om_bootstrap.button.t_om_bootstrap$button33342.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button33342.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button33342";

om_bootstrap.button.t_om_bootstrap$button33342.cljs$lang$ctorPrWriter = ((function (state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334){
return (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"om-bootstrap.button/t_om_bootstrap$button33342");
});})(state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334))
;

om_bootstrap.button.__GT_t_om_bootstrap$button33342 = ((function (state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334){
return (function om_bootstrap$button$constructor33328_$___GT_t_om_bootstrap$button33342(owner__$1,input_checker33333__$1,output_checker33334__$1,input_schema33332__$1,constructor33328__$1,state__$1,validate__20540__auto____$1,G__33335__$1,map33330__$1,ufv____$1,output_schema33331__$1,meta33343){
return (new om_bootstrap.button.t_om_bootstrap$button33342(owner__$1,input_checker33333__$1,output_checker33334__$1,input_schema33332__$1,constructor33328__$1,state__$1,validate__20540__auto____$1,G__33335__$1,map33330__$1,ufv____$1,output_schema33331__$1,meta33343));
});})(state,owner,validate__20540__auto__,ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button33342(owner,input_checker33333,output_checker33334,input_schema33332,om_bootstrap$button$constructor33328,state,validate__20540__auto__,G__33335,map33330,ufv__,output_schema33331,null));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33362 = output_checker33334.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33362)){
var error__20542__auto___33363 = temp__4425__auto___33362;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33328","constructor33328",-1536635757,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33363)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33331,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33363], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv__,output_schema33331,input_schema33332,input_checker33333,output_checker33334))
,schema.core.make_fn_schema.call(null,output_schema33331,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33332], null)));
})();
/**
 * Generates a split button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__30600__auto___33356){
return (function om_bootstrap$button$split_STAR_(var_args){
var args__20266__auto__ = [];
var len__20259__auto___33364 = arguments.length;
var i__20260__auto___33365 = (0);
while(true){
if((i__20260__auto___33365 < len__20259__auto___33364)){
args__20266__auto__.push((arguments[i__20260__auto___33365]));

var G__33366 = (i__20260__auto___33365 + (1));
i__20260__auto___33365 = G__33366;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((2) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((2)),(0))):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20267__auto__);
});})(component_fnk__30600__auto___33356))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__30600__auto___33356){
return (function (data__30601__auto__,owner33327,p__33351){
var vec__33352 = p__33351;
var opts__30602__auto__ = cljs.core.nth.call(null,vec__33352,(0),null);
return component_fnk__30600__auto___33356.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner33327),new cljs.core.Keyword(null,"opts","opts",155075701),opts__30602__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner33327,new cljs.core.Keyword(null,"data","data",-232669377),data__30601__auto__], null));
});})(component_fnk__30600__auto___33356))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__30600__auto___33356){
return (function (seq33348){
var G__33349 = cljs.core.first.call(null,seq33348);
var seq33348__$1 = cljs.core.next.call(null,seq33348);
var G__33350 = cljs.core.first.call(null,seq33348__$1);
var seq33348__$2 = cljs.core.next.call(null,seq33348__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33349,G__33350,seq33348__$2);
});})(component_fnk__30600__auto___33356))
;

om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(var_args){
var args33353 = [];
var len__20259__auto___33367 = arguments.length;
var i__20260__auto___33368 = (0);
while(true){
if((i__20260__auto___33368 < len__20259__auto___33367)){
args33353.push((arguments[i__20260__auto___33368]));

var G__33369 = (i__20260__auto___33368 + (1));
i__20260__auto___33368 = G__33369;
continue;
} else {
}
break;
}

var G__33355 = args33353.length;
switch (G__33355) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33353.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__30569__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__30569__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__30569__auto__,m33329){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__30569__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m33329));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___33379 = schema.utils.use_fn_validation;
var output_schema33371_33380 = schema.core.Any;
var input_schema33372_33381 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SplitButton","SplitButton",1856385687,null)], null))),schema.core.Any], null);
var input_checker33373_33382 = schema.core.checker.call(null,input_schema33372_33381);
var output_checker33374_33383 = schema.core.checker.call(null,output_schema33371_33380);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___33379,output_schema33371_33380,input_schema33372_33381,input_checker33373_33382,output_checker33374_33383){
return (function om_bootstrap$button$split(var_args){
var args__20266__auto__ = [];
var len__20259__auto___33384 = arguments.length;
var i__20260__auto___33385 = (0);
while(true){
if((i__20260__auto___33385 < len__20259__auto___33384)){
args__20266__auto__.push((arguments[i__20260__auto___33385]));

var G__33386 = (i__20260__auto___33385 + (1));
i__20260__auto___33385 = G__33386;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___33379,output_schema33371_33380,input_schema33372_33381,input_checker33373_33382,output_checker33374_33383))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33379,output_schema33371_33380,input_schema33372_33381,input_checker33373_33382,output_checker33374_33383){
return (function (G__33375,rest33376){
var validate__20540__auto__ = ufv___33379.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33387 = cljs.core.list_STAR_.call(null,G__33375,rest33376);
var temp__4425__auto___33388 = input_checker33373_33382.call(null,args__20541__auto___33387);
if(cljs.core.truth_(temp__4425__auto___33388)){
var error__20542__auto___33389 = temp__4425__auto___33388;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33389)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33372_33381,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33387,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33389], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__33375;
var children = rest33376;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33390 = output_checker33374_33383.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33390)){
var error__20542__auto___33391 = temp__4425__auto___33390;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20542__auto___33391)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33371_33380,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33391], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33379,output_schema33371_33380,input_schema33372_33381,input_checker33373_33382,output_checker33374_33383))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___33379,output_schema33371_33380,input_schema33372_33381,input_checker33373_33382,output_checker33374_33383){
return (function (seq33377){
var G__33378 = cljs.core.first.call(null,seq33377);
var seq33377__$1 = cljs.core.next.call(null,seq33377);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__33378,seq33377__$1);
});})(ufv___33379,output_schema33371_33380,input_schema33372_33381,input_checker33373_33382,output_checker33374_33383))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema33371_33380,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33372_33381], null)));

//# sourceMappingURL=button.js.map?rel=1444632656223