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
var ufv___68726 = schema.utils.use_fn_validation;
var output_schema68720_68727 = schema.core.Any;
var input_schema68721_68728 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker68722_68729 = schema.core.checker.call(null,input_schema68721_68728);
var output_checker68723_68730 = schema.core.checker.call(null,output_schema68720_68727);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___68726,output_schema68720_68727,input_schema68721_68728,input_checker68722_68729,output_checker68723_68730){
return (function om_bootstrap$button$render_anchor(G__68724,G__68725){
var validate__30368__auto__ = ufv___68726.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___68731 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__68724,G__68725], null);
var temp__4657__auto___68732 = input_checker68722_68729.call(null,args__30369__auto___68731);
if(cljs.core.truth_(temp__4657__auto___68732)){
var error__30370__auto___68733 = temp__4657__auto___68732;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___68733)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema68721_68728,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___68731,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68733], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__68724;
var children = G__68725;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___68734 = output_checker68723_68730.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___68734)){
var error__30370__auto___68735 = temp__4657__auto___68734;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___68735)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema68720_68727,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68735], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___68726,output_schema68720_68727,input_schema68721_68728,input_checker68722_68729,output_checker68723_68730))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema68720_68727,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema68721_68728], null)));
var ufv___68747 = schema.utils.use_fn_validation;
var output_schema68736_68748 = om_bootstrap.types.Component;
var input_schema68737_68749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Button","Button",-1787718586,null)], null))),schema.core.Any], null);
var input_checker68738_68750 = schema.core.checker.call(null,input_schema68737_68749);
var output_checker68739_68751 = schema.core.checker.call(null,output_schema68736_68748);
/**
 * Inputs: [props :- Button & children]
 *   Returns: t/Component
 * 
 *   Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___68747,output_schema68736_68748,input_schema68737_68749,input_checker68738_68750,output_checker68739_68751){
return (function om_bootstrap$button$button(var_args){
var args__25833__auto__ = [];
var len__25826__auto___68752 = arguments.length;
var i__25827__auto___68753 = (0);
while(true){
if((i__25827__auto___68753 < len__25826__auto___68752)){
args__25833__auto__.push((arguments[i__25827__auto___68753]));

var G__68754 = (i__25827__auto___68753 + (1));
i__25827__auto___68753 = G__68754;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___68747,output_schema68736_68748,input_schema68737_68749,input_checker68738_68750,output_checker68739_68751))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___68747,output_schema68736_68748,input_schema68737_68749,input_checker68738_68750,output_checker68739_68751){
return (function (G__68740,rest68741){
var validate__30368__auto__ = ufv___68747.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___68755 = cljs.core.list_STAR_.call(null,G__68740,rest68741);
var temp__4657__auto___68756 = input_checker68738_68750.call(null,args__30369__auto___68755);
if(cljs.core.truth_(temp__4657__auto___68756)){
var error__30370__auto___68757 = temp__4657__auto___68756;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__30370__auto___68757)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema68737_68749,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___68755,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68757], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var props = G__68740;
var children = rest68741;
while(true){
var vec__68744 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__68744,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__68744,(1),null);
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
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___68758 = output_checker68739_68751.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___68758)){
var error__30370__auto___68759 = temp__4657__auto___68758;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__30370__auto___68759)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema68736_68748,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68759], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___68747,output_schema68736_68748,input_schema68737_68749,input_checker68738_68750,output_checker68739_68751))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___68747,output_schema68736_68748,input_schema68737_68749,input_checker68738_68750,output_checker68739_68751){
return (function (seq68742){
var G__68743 = cljs.core.first.call(null,seq68742);
var seq68742__$1 = cljs.core.next.call(null,seq68742);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__68743,seq68742__$1);
});})(ufv___68747,output_schema68736_68748,input_schema68737_68749,input_checker68738_68750,output_checker68739_68751))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema68736_68748,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema68737_68749], null)));
var ufv___68771 = schema.utils.use_fn_validation;
var output_schema68760_68772 = om_bootstrap.types.Component;
var input_schema68761_68773 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker68762_68774 = schema.core.checker.call(null,input_schema68761_68773);
var output_checker68763_68775 = schema.core.checker.call(null,output_schema68760_68772);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___68771,output_schema68760_68772,input_schema68761_68773,input_checker68762_68774,output_checker68763_68775){
return (function om_bootstrap$button$toolbar(var_args){
var args__25833__auto__ = [];
var len__25826__auto___68776 = arguments.length;
var i__25827__auto___68777 = (0);
while(true){
if((i__25827__auto___68777 < len__25826__auto___68776)){
args__25833__auto__.push((arguments[i__25827__auto___68777]));

var G__68778 = (i__25827__auto___68777 + (1));
i__25827__auto___68777 = G__68778;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___68771,output_schema68760_68772,input_schema68761_68773,input_checker68762_68774,output_checker68763_68775))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___68771,output_schema68760_68772,input_schema68761_68773,input_checker68762_68774,output_checker68763_68775){
return (function (G__68764,rest68765){
var validate__30368__auto__ = ufv___68771.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___68779 = cljs.core.list_STAR_.call(null,G__68764,rest68765);
var temp__4657__auto___68780 = input_checker68762_68774.call(null,args__30369__auto___68779);
if(cljs.core.truth_(temp__4657__auto___68780)){
var error__30370__auto___68781 = temp__4657__auto___68780;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__30370__auto___68781)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema68761_68773,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___68779,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68781], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__68764;
var children = rest68765;
while(true){
var vec__68768 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__68768,(0),null);
var props = cljs.core.nth.call(null,vec__68768,(1),null);
return cljs.core.apply.call(null,React.DOM.div,({"role": "toolbar", "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs)))}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___68782 = output_checker68763_68775.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___68782)){
var error__30370__auto___68783 = temp__4657__auto___68782;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__30370__auto___68783)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema68760_68772,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68783], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___68771,output_schema68760_68772,input_schema68761_68773,input_checker68762_68774,output_checker68763_68775))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___68771,output_schema68760_68772,input_schema68761_68773,input_checker68762_68774,output_checker68763_68775){
return (function (seq68766){
var G__68767 = cljs.core.first.call(null,seq68766);
var seq68766__$1 = cljs.core.next.call(null,seq68766);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__68767,seq68766__$1);
});})(ufv___68771,output_schema68760_68772,input_schema68761_68773,input_checker68762_68774,output_checker68763_68775))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema68760_68772,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema68761_68773], null)));
var ufv___68795 = schema.utils.use_fn_validation;
var output_schema68784_68796 = om_bootstrap.types.Component;
var input_schema68785_68797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null)], null))),schema.core.Any], null);
var input_checker68786_68798 = schema.core.checker.call(null,input_schema68785_68797);
var output_checker68787_68799 = schema.core.checker.call(null,output_schema68784_68796);
/**
 * Inputs: [opts :- ButtonGroup & children]
 *   Returns: t/Component
 * 
 *   Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___68795,output_schema68784_68796,input_schema68785_68797,input_checker68786_68798,output_checker68787_68799){
return (function om_bootstrap$button$button_group(var_args){
var args__25833__auto__ = [];
var len__25826__auto___68800 = arguments.length;
var i__25827__auto___68801 = (0);
while(true){
if((i__25827__auto___68801 < len__25826__auto___68800)){
args__25833__auto__.push((arguments[i__25827__auto___68801]));

var G__68802 = (i__25827__auto___68801 + (1));
i__25827__auto___68801 = G__68802;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___68795,output_schema68784_68796,input_schema68785_68797,input_checker68786_68798,output_checker68787_68799))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___68795,output_schema68784_68796,input_schema68785_68797,input_checker68786_68798,output_checker68787_68799){
return (function (G__68788,rest68789){
var validate__30368__auto__ = ufv___68795.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___68803 = cljs.core.list_STAR_.call(null,G__68788,rest68789);
var temp__4657__auto___68804 = input_checker68786_68798.call(null,args__30369__auto___68803);
if(cljs.core.truth_(temp__4657__auto___68804)){
var error__30370__auto___68805 = temp__4657__auto___68804;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__30370__auto___68805)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema68785_68797,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___68803,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68805], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__68788;
var children = rest68789;
while(true){
var vec__68792 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__68792,(0),null);
var props = cljs.core.nth.call(null,vec__68792,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___68806 = output_checker68787_68799.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___68806)){
var error__30370__auto___68807 = temp__4657__auto___68806;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__30370__auto___68807)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema68784_68796,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68807], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___68795,output_schema68784_68796,input_schema68785_68797,input_checker68786_68798,output_checker68787_68799))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___68795,output_schema68784_68796,input_schema68785_68797,input_checker68786_68798,output_checker68787_68799){
return (function (seq68790){
var G__68791 = cljs.core.first.call(null,seq68790);
var seq68790__$1 = cljs.core.next.call(null,seq68790);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__68791,seq68790__$1);
});})(ufv___68795,output_schema68784_68796,input_schema68785_68797,input_checker68786_68798,output_checker68787_68799))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema68784_68796,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema68785_68797], null)));
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

var component_fnk__40996__auto___68843 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema68812 = schema.core.Any;
var input_schema68813 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map68811","map68811",1439585579,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker68814 = schema.core.checker.call(null,input_schema68813);
var output_checker68815 = schema.core.checker.call(null,output_schema68812);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815){
return (function om_bootstrap$button$constructor68809(G__68816){
var validate__30368__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___68844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__68816], null);
var temp__4657__auto___68845 = input_checker68814.call(null,args__30369__auto___68844);
if(cljs.core.truth_(temp__4657__auto___68845)){
var error__30370__auto___68846 = temp__4657__auto___68845;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor68809","constructor68809",527755935,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___68846)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema68813,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___68844,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68846], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var map68811 = G__68816;
while(true){
if(cljs.core.map_QMARK_.call(null,map68811)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map68811)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map68811,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button68825 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button68825 = (function (owner,map68811,validate__30368__auto__,G__68816,output_schema68812,input_schema68813,input_checker68814,ufv__,output_checker68815,constructor68809,meta68826){
this.owner = owner;
this.map68811 = map68811;
this.validate__30368__auto__ = validate__30368__auto__;
this.G__68816 = G__68816;
this.output_schema68812 = output_schema68812;
this.input_schema68813 = input_schema68813;
this.input_checker68814 = input_checker68814;
this.ufv__ = ufv__;
this.output_checker68815 = output_checker68815;
this.constructor68809 = constructor68809;
this.meta68826 = meta68826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button68825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__30368__auto__,ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815){
return (function (_68827,meta68826__$1){
var self__ = this;
var _68827__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button68825(self__.owner,self__.map68811,self__.validate__30368__auto__,self__.G__68816,self__.output_schema68812,self__.input_schema68813,self__.input_checker68814,self__.ufv__,self__.output_checker68815,self__.constructor68809,meta68826__$1));
});})(owner,validate__30368__auto__,ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815))
;

om_bootstrap.button.t_om_bootstrap$button68825.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__30368__auto__,ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815){
return (function (_68827){
var self__ = this;
var _68827__$1 = this;
return self__.meta68826;
});})(owner,validate__30368__auto__,ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815))
;

om_bootstrap.button.t_om_bootstrap$button68825.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button68825.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__30368__auto__,ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__30368__auto__,ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815))
;

om_bootstrap.button.t_om_bootstrap$button68825.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button68825.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__30368__auto__,ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__68828 = om.core.get_props.call(null,self__.owner);
var map__68828__$1 = ((((!((map__68828 == null)))?((((map__68828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68828):map__68828);
var opts = cljs.core.get.call(null,map__68828__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__68828__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__68829 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__68829,(0),null);
var props = cljs.core.nth.call(null,vec__68829,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__68828,map__68828__$1,opts,children,vec__68829,bs,props,classes,___$1,owner,validate__30368__auto__,ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815){
return (function (e){
var temp__4657__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var on_select = temp__4657__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__68828,map__68828__$1,opts,children,vec__68829,bs,props,classes,___$1,owner,validate__30368__auto__,ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815))
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
});})(owner,validate__30368__auto__,ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815))
;

om_bootstrap.button.t_om_bootstrap$button68825.getBasis = ((function (owner,validate__30368__auto__,ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map68811","map68811",1439585579,null),new cljs.core.Symbol(null,"validate__30368__auto__","validate__30368__auto__",81766895,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__68816","G__68816",-86544364,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"output-schema68812","output-schema68812",219884409,null),new cljs.core.Symbol(null,"input-schema68813","input-schema68813",-665403331,null),new cljs.core.Symbol(null,"input-checker68814","input-checker68814",2138431997,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"output-checker68815","output-checker68815",-1424713027,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor68809","constructor68809",527755935,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"meta68826","meta68826",-508641321,null)], null);
});})(owner,validate__30368__auto__,ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815))
;

om_bootstrap.button.t_om_bootstrap$button68825.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button68825.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button68825";

om_bootstrap.button.t_om_bootstrap$button68825.cljs$lang$ctorPrWriter = ((function (owner,validate__30368__auto__,ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-bootstrap.button/t_om_bootstrap$button68825");
});})(owner,validate__30368__auto__,ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815))
;

om_bootstrap.button.__GT_t_om_bootstrap$button68825 = ((function (owner,validate__30368__auto__,ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815){
return (function om_bootstrap$button$constructor68809_$___GT_t_om_bootstrap$button68825(owner__$1,map68811__$1,validate__30368__auto____$1,G__68816__$1,output_schema68812__$1,input_schema68813__$1,input_checker68814__$1,ufv____$1,output_checker68815__$1,constructor68809__$1,meta68826){
return (new om_bootstrap.button.t_om_bootstrap$button68825(owner__$1,map68811__$1,validate__30368__auto____$1,G__68816__$1,output_schema68812__$1,input_schema68813__$1,input_checker68814__$1,ufv____$1,output_checker68815__$1,constructor68809__$1,meta68826));
});})(owner,validate__30368__auto__,ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button68825(owner,map68811,validate__30368__auto__,G__68816,output_schema68812,input_schema68813,input_checker68814,ufv__,output_checker68815,om_bootstrap$button$constructor68809,null));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___68847 = output_checker68815.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___68847)){
var error__30370__auto___68848 = temp__4657__auto___68847;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor68809","constructor68809",527755935,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___68848)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema68812,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68848], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv__,output_schema68812,input_schema68813,input_checker68814,output_checker68815))
,schema.core.make_fn_schema.call(null,output_schema68812,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema68813], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 *   wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__40996__auto___68843){
return (function om_bootstrap$button$menu_item_STAR_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___68849 = arguments.length;
var i__25827__auto___68850 = (0);
while(true){
if((i__25827__auto___68850 < len__25826__auto___68849)){
args__25833__auto__.push((arguments[i__25827__auto___68850]));

var G__68851 = (i__25827__auto___68850 + (1));
i__25827__auto___68850 = G__68851;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});})(component_fnk__40996__auto___68843))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__40996__auto___68843){
return (function (data__40997__auto__,owner68808,p__68836){
var vec__68837 = p__68836;
var opts__40998__auto__ = cljs.core.nth.call(null,vec__68837,(0),null);
return component_fnk__40996__auto___68843.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__40998__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner68808,new cljs.core.Keyword(null,"data","data",-232669377),data__40997__auto__], null));
});})(component_fnk__40996__auto___68843))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__40996__auto___68843){
return (function (seq68833){
var G__68834 = cljs.core.first.call(null,seq68833);
var seq68833__$1 = cljs.core.next.call(null,seq68833);
var G__68835 = cljs.core.first.call(null,seq68833__$1);
var seq68833__$2 = cljs.core.next.call(null,seq68833__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__68834,G__68835,seq68833__$2);
});})(component_fnk__40996__auto___68843))
;


om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(var_args){
var args68840 = [];
var len__25826__auto___68852 = arguments.length;
var i__25827__auto___68853 = (0);
while(true){
if((i__25827__auto___68853 < len__25826__auto___68852)){
args68840.push((arguments[i__25827__auto___68853]));

var G__68854 = (i__25827__auto___68853 + (1));
i__25827__auto___68853 = G__68854;
continue;
} else {
}
break;
}

var G__68842 = args68840.length;
switch (G__68842) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68840.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__40965__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__40965__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__40965__auto__,m68810){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__40965__auto__,m68810);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___68864 = schema.utils.use_fn_validation;
var output_schema68856_68865 = om_bootstrap.types.Component;
var input_schema68857_68866 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"MenuItem","MenuItem",1235363736,null)], null))),schema.core.Any], null);
var input_checker68858_68867 = schema.core.checker.call(null,input_schema68857_68866);
var output_checker68859_68868 = schema.core.checker.call(null,output_schema68856_68865);
/**
 * Inputs: [opts :- MenuItem & children]
 *   Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___68864,output_schema68856_68865,input_schema68857_68866,input_checker68858_68867,output_checker68859_68868){
return (function om_bootstrap$button$menu_item(var_args){
var args__25833__auto__ = [];
var len__25826__auto___68869 = arguments.length;
var i__25827__auto___68870 = (0);
while(true){
if((i__25827__auto___68870 < len__25826__auto___68869)){
args__25833__auto__.push((arguments[i__25827__auto___68870]));

var G__68871 = (i__25827__auto___68870 + (1));
i__25827__auto___68870 = G__68871;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___68864,output_schema68856_68865,input_schema68857_68866,input_checker68858_68867,output_checker68859_68868))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___68864,output_schema68856_68865,input_schema68857_68866,input_checker68858_68867,output_checker68859_68868){
return (function (G__68860,rest68861){
var validate__30368__auto__ = ufv___68864.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___68872 = cljs.core.list_STAR_.call(null,G__68860,rest68861);
var temp__4657__auto___68873 = input_checker68858_68867.call(null,args__30369__auto___68872);
if(cljs.core.truth_(temp__4657__auto___68873)){
var error__30370__auto___68874 = temp__4657__auto___68873;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___68874)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema68857_68866,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___68872,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68874], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__68860;
var children = rest68861;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___68875 = output_checker68859_68868.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___68875)){
var error__30370__auto___68876 = temp__4657__auto___68875;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___68876)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema68856_68865,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68876], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___68864,output_schema68856_68865,input_schema68857_68866,input_checker68858_68867,output_checker68859_68868))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___68864,output_schema68856_68865,input_schema68857_68866,input_checker68858_68867,output_checker68859_68868){
return (function (seq68862){
var G__68863 = cljs.core.first.call(null,seq68862);
var seq68862__$1 = cljs.core.next.call(null,seq68862);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__68863,seq68862__$1);
});})(ufv___68864,output_schema68856_68865,input_schema68857_68866,input_checker68858_68867,output_checker68859_68868))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema68856_68865,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema68857_68866], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___68889 = schema.utils.use_fn_validation;
var output_schema68878_68890 = om_bootstrap.types.Component;
var input_schema68879_68891 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownMenu","DropdownMenu",881901742,null)], null))),schema.core.Any], null);
var input_checker68880_68892 = schema.core.checker.call(null,input_schema68879_68891);
var output_checker68881_68893 = schema.core.checker.call(null,output_schema68878_68890);
/**
 * Inputs: [opts :- DropdownMenu & children]
 *   Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___68889,output_schema68878_68890,input_schema68879_68891,input_checker68880_68892,output_checker68881_68893){
return (function om_bootstrap$button$dropdown_menu(var_args){
var args__25833__auto__ = [];
var len__25826__auto___68894 = arguments.length;
var i__25827__auto___68895 = (0);
while(true){
if((i__25827__auto___68895 < len__25826__auto___68894)){
args__25833__auto__.push((arguments[i__25827__auto___68895]));

var G__68896 = (i__25827__auto___68895 + (1));
i__25827__auto___68895 = G__68896;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___68889,output_schema68878_68890,input_schema68879_68891,input_checker68880_68892,output_checker68881_68893))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___68889,output_schema68878_68890,input_schema68879_68891,input_checker68880_68892,output_checker68881_68893){
return (function (G__68882,rest68883){
var validate__30368__auto__ = ufv___68889.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___68897 = cljs.core.list_STAR_.call(null,G__68882,rest68883);
var temp__4657__auto___68898 = input_checker68880_68892.call(null,args__30369__auto___68897);
if(cljs.core.truth_(temp__4657__auto___68898)){
var error__30370__auto___68899 = temp__4657__auto___68898;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___68899)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema68879_68891,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___68897,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68899], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__68882;
var children = rest68883;
while(true){
var vec__68886 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__68886,(0),null);
var props = cljs.core.nth.call(null,vec__68886,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4655__auto__)){
var on_select = temp__4655__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4655__auto__,vec__68886,bs,props,classes,ul_attrs,validate__30368__auto__,ufv___68889,output_schema68878_68890,input_schema68879_68891,input_checker68880_68892,output_checker68881_68893){
return (function (p1__68877_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__68877_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4655__auto__,vec__68886,bs,props,classes,ul_attrs,validate__30368__auto__,ufv___68889,output_schema68878_68890,input_schema68879_68891,input_checker68880_68892,output_checker68881_68893))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___68900 = output_checker68881_68893.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___68900)){
var error__30370__auto___68901 = temp__4657__auto___68900;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___68901)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema68878_68890,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68901], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___68889,output_schema68878_68890,input_schema68879_68891,input_checker68880_68892,output_checker68881_68893))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___68889,output_schema68878_68890,input_schema68879_68891,input_checker68880_68892,output_checker68881_68893){
return (function (seq68884){
var G__68885 = cljs.core.first.call(null,seq68884);
var seq68884__$1 = cljs.core.next.call(null,seq68884);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__68885,seq68884__$1);
});})(ufv___68889,output_schema68878_68890,input_schema68879_68891,input_checker68880_68892,output_checker68881_68893))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema68878_68890,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema68879_68891], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__40967__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__40967__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__40967__auto__;
})();

var component_fnk__40996__auto___68938 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema68907 = schema.core.Any;
var input_schema68908 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map68906","map68906",1398136612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker68909 = schema.core.checker.call(null,input_schema68908);
var output_checker68910 = schema.core.checker.call(null,output_schema68907);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910){
return (function om_bootstrap$button$constructor68904(G__68911){
var validate__30368__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___68939 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__68911], null);
var temp__4657__auto___68940 = input_checker68909.call(null,args__30369__auto___68939);
if(cljs.core.truth_(temp__4657__auto___68940)){
var error__30370__auto___68941 = temp__4657__auto___68940;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor68904","constructor68904",1184880065,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___68941)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema68908,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___68939,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68941], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var map68906 = G__68911;
while(true){
if(cljs.core.map_QMARK_.call(null,map68906)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map68906)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map68906,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map68906,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button68920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button68920 = (function (constructor68904,owner,map68906,output_checker68910,G__68911,validate__30368__auto__,state,input_schema68908,input_checker68909,output_schema68907,ufv__,meta68921){
this.constructor68904 = constructor68904;
this.owner = owner;
this.map68906 = map68906;
this.output_checker68910 = output_checker68910;
this.G__68911 = G__68911;
this.validate__30368__auto__ = validate__30368__auto__;
this.state = state;
this.input_schema68908 = input_schema68908;
this.input_checker68909 = input_checker68909;
this.output_schema68907 = output_schema68907;
this.ufv__ = ufv__;
this.meta68921 = meta68921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button68920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910){
return (function (_68922,meta68921__$1){
var self__ = this;
var _68922__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button68920(self__.constructor68904,self__.owner,self__.map68906,self__.output_checker68910,self__.G__68911,self__.validate__30368__auto__,self__.state,self__.input_schema68908,self__.input_checker68909,self__.output_schema68907,self__.ufv__,meta68921__$1));
});})(state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910))
;

om_bootstrap.button.t_om_bootstrap$button68920.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910){
return (function (_68922){
var self__ = this;
var _68922__$1 = this;
return self__.meta68921;
});})(state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910))
;

om_bootstrap.button.t_om_bootstrap$button68920.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button68920.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910))
;

om_bootstrap.button.t_om_bootstrap$button68920.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button68920.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__68923 = om.core.get_props.call(null,self__.owner);
var map__68923__$1 = ((((!((map__68923 == null)))?((((map__68923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68923):map__68923);
var opts = cljs.core.get.call(null,map__68923__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__68923__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__68924 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__68924,(0),null);
var props = cljs.core.nth.call(null,vec__68924,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__68923,map__68923__$1,opts,children,vec__68924,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__68923,map__68923__$1,opts,children,vec__68924,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910))
], null);
var update_child_props = ((function (open_QMARK_,map__68923,map__68923__$1,opts,children,vec__68924,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__68923,map__68923__$1,opts,children,vec__68924,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910){
return (function (key){
var temp__4655__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4655__auto__)){
var os = temp__4655__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__68923,map__68923__$1,opts,children,vec__68924,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__68923,map__68923__$1,opts,children,vec__68924,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span(({"className": "caret"}))),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__68923,map__68923__$1,opts,children,vec__68924,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910){
return (function (p1__68902_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__68902_SHARP_,update_child_props);
});})(open_QMARK_,map__68923,map__68923__$1,opts,children,vec__68924,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910))
,children))], null));
});})(state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910))
;

om_bootstrap.button.t_om_bootstrap$button68920.getBasis = ((function (state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"constructor68904","constructor68904",1184880065,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map68906","map68906",1398136612,null),new cljs.core.Symbol(null,"output-checker68910","output-checker68910",1701988811,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__68911","G__68911",-939421812,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"validate__30368__auto__","validate__30368__auto__",81766895,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema68908","input-schema68908",-669197867,null),new cljs.core.Symbol(null,"input-checker68909","input-checker68909",668403606,null),new cljs.core.Symbol(null,"output-schema68907","output-schema68907",-578741319,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta68921","meta68921",-1728852338,null)], null);
});})(state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910))
;

om_bootstrap.button.t_om_bootstrap$button68920.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button68920.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button68920";

om_bootstrap.button.t_om_bootstrap$button68920.cljs$lang$ctorPrWriter = ((function (state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-bootstrap.button/t_om_bootstrap$button68920");
});})(state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910))
;

om_bootstrap.button.__GT_t_om_bootstrap$button68920 = ((function (state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910){
return (function om_bootstrap$button$constructor68904_$___GT_t_om_bootstrap$button68920(constructor68904__$1,owner__$1,map68906__$1,output_checker68910__$1,G__68911__$1,validate__30368__auto____$1,state__$1,input_schema68908__$1,input_checker68909__$1,output_schema68907__$1,ufv____$1,meta68921){
return (new om_bootstrap.button.t_om_bootstrap$button68920(constructor68904__$1,owner__$1,map68906__$1,output_checker68910__$1,G__68911__$1,validate__30368__auto____$1,state__$1,input_schema68908__$1,input_checker68909__$1,output_schema68907__$1,ufv____$1,meta68921));
});})(state,owner,validate__30368__auto__,ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button68920(om_bootstrap$button$constructor68904,owner,map68906,output_checker68910,G__68911,validate__30368__auto__,state,input_schema68908,input_checker68909,output_schema68907,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___68942 = output_checker68910.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___68942)){
var error__30370__auto___68943 = temp__4657__auto___68942;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor68904","constructor68904",1184880065,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___68943)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema68907,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68943], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv__,output_schema68907,input_schema68908,input_checker68909,output_checker68910))
,schema.core.make_fn_schema.call(null,output_schema68907,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema68908], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__40996__auto___68938){
return (function om_bootstrap$button$dropdown_STAR_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___68944 = arguments.length;
var i__25827__auto___68945 = (0);
while(true){
if((i__25827__auto___68945 < len__25826__auto___68944)){
args__25833__auto__.push((arguments[i__25827__auto___68945]));

var G__68946 = (i__25827__auto___68945 + (1));
i__25827__auto___68945 = G__68946;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});})(component_fnk__40996__auto___68938))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__40996__auto___68938){
return (function (data__40997__auto__,owner68903,p__68931){
var vec__68932 = p__68931;
var opts__40998__auto__ = cljs.core.nth.call(null,vec__68932,(0),null);
return component_fnk__40996__auto___68938.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner68903),new cljs.core.Keyword(null,"opts","opts",155075701),opts__40998__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner68903,new cljs.core.Keyword(null,"data","data",-232669377),data__40997__auto__], null));
});})(component_fnk__40996__auto___68938))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__40996__auto___68938){
return (function (seq68928){
var G__68929 = cljs.core.first.call(null,seq68928);
var seq68928__$1 = cljs.core.next.call(null,seq68928);
var G__68930 = cljs.core.first.call(null,seq68928__$1);
var seq68928__$2 = cljs.core.next.call(null,seq68928__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__68929,G__68930,seq68928__$2);
});})(component_fnk__40996__auto___68938))
;


om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(var_args){
var args68935 = [];
var len__25826__auto___68947 = arguments.length;
var i__25827__auto___68948 = (0);
while(true){
if((i__25827__auto___68948 < len__25826__auto___68947)){
args68935.push((arguments[i__25827__auto___68948]));

var G__68949 = (i__25827__auto___68948 + (1));
i__25827__auto___68948 = G__68949;
continue;
} else {
}
break;
}

var G__68937 = args68935.length;
switch (G__68937) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68935.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__40965__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__40965__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__40965__auto__,m68905){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__40965__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m68905));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___68959 = schema.utils.use_fn_validation;
var output_schema68951_68960 = om_bootstrap.types.Component;
var input_schema68952_68961 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownButton","DropdownButton",251375015,null)], null))),schema.core.Any], null);
var input_checker68953_68962 = schema.core.checker.call(null,input_schema68952_68961);
var output_checker68954_68963 = schema.core.checker.call(null,output_schema68951_68960);
/**
 * Inputs: [opts :- DropdownButton & children]
 *   Returns: t/Component
 * 
 *   Returns a dropdown button component. The component manages its own
 *   dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___68959,output_schema68951_68960,input_schema68952_68961,input_checker68953_68962,output_checker68954_68963){
return (function om_bootstrap$button$dropdown(var_args){
var args__25833__auto__ = [];
var len__25826__auto___68964 = arguments.length;
var i__25827__auto___68965 = (0);
while(true){
if((i__25827__auto___68965 < len__25826__auto___68964)){
args__25833__auto__.push((arguments[i__25827__auto___68965]));

var G__68966 = (i__25827__auto___68965 + (1));
i__25827__auto___68965 = G__68966;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___68959,output_schema68951_68960,input_schema68952_68961,input_checker68953_68962,output_checker68954_68963))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___68959,output_schema68951_68960,input_schema68952_68961,input_checker68953_68962,output_checker68954_68963){
return (function (G__68955,rest68956){
var validate__30368__auto__ = ufv___68959.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___68967 = cljs.core.list_STAR_.call(null,G__68955,rest68956);
var temp__4657__auto___68968 = input_checker68953_68962.call(null,args__30369__auto___68967);
if(cljs.core.truth_(temp__4657__auto___68968)){
var error__30370__auto___68969 = temp__4657__auto___68968;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__30370__auto___68969)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema68952_68961,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___68967,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68969], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__68955;
var children = rest68956;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___68970 = output_checker68954_68963.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___68970)){
var error__30370__auto___68971 = temp__4657__auto___68970;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__30370__auto___68971)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema68951_68960,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68971], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___68959,output_schema68951_68960,input_schema68952_68961,input_checker68953_68962,output_checker68954_68963))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___68959,output_schema68951_68960,input_schema68952_68961,input_checker68953_68962,output_checker68954_68963){
return (function (seq68957){
var G__68958 = cljs.core.first.call(null,seq68957);
var seq68957__$1 = cljs.core.next.call(null,seq68957);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__68958,seq68957__$1);
});})(ufv___68959,output_schema68951_68960,input_schema68952_68961,input_checker68953_68962,output_checker68954_68963))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema68951_68960,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema68952_68961], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__40967__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__40967__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__40967__auto__;
})();

var component_fnk__40996__auto___69007 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema68976 = schema.core.Any;
var input_schema68977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map68975","map68975",600974371,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker68978 = schema.core.checker.call(null,input_schema68977);
var output_checker68979 = schema.core.checker.call(null,output_schema68976);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979){
return (function om_bootstrap$button$constructor68973(G__68980){
var validate__30368__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___69008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__68980], null);
var temp__4657__auto___69009 = input_checker68978.call(null,args__30369__auto___69008);
if(cljs.core.truth_(temp__4657__auto___69009)){
var error__30370__auto___69010 = temp__4657__auto___69009;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor68973","constructor68973",1264246366,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___69010)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema68977,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___69008,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69010], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var map68975 = G__68980;
while(true){
if(cljs.core.map_QMARK_.call(null,map68975)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map68975)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map68975,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map68975,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button68989 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button68989 = (function (map68975,owner,input_checker68978,input_schema68977,output_schema68976,validate__30368__auto__,G__68980,state,output_checker68979,ufv__,constructor68973,meta68990){
this.map68975 = map68975;
this.owner = owner;
this.input_checker68978 = input_checker68978;
this.input_schema68977 = input_schema68977;
this.output_schema68976 = output_schema68976;
this.validate__30368__auto__ = validate__30368__auto__;
this.G__68980 = G__68980;
this.state = state;
this.output_checker68979 = output_checker68979;
this.ufv__ = ufv__;
this.constructor68973 = constructor68973;
this.meta68990 = meta68990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button68989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979){
return (function (_68991,meta68990__$1){
var self__ = this;
var _68991__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button68989(self__.map68975,self__.owner,self__.input_checker68978,self__.input_schema68977,self__.output_schema68976,self__.validate__30368__auto__,self__.G__68980,self__.state,self__.output_checker68979,self__.ufv__,self__.constructor68973,meta68990__$1));
});})(state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979))
;

om_bootstrap.button.t_om_bootstrap$button68989.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979){
return (function (_68991){
var self__ = this;
var _68991__$1 = this;
return self__.meta68990;
});})(state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979))
;

om_bootstrap.button.t_om_bootstrap$button68989.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button68989.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979))
;

om_bootstrap.button.t_om_bootstrap$button68989.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button68989.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__68992 = om.core.get_props.call(null,self__.owner);
var map__68992__$1 = ((((!((map__68992 == null)))?((((map__68992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68992):map__68992);
var opts = cljs.core.get.call(null,map__68992__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__68992__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__68993 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__68993,(0),null);
var props = cljs.core.nth.call(null,vec__68993,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__68992,map__68992__$1,opts,children,vec__68993,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979){
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
});})(open_QMARK_,map__68992,map__68992__$1,opts,children,vec__68993,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__68992,map__68992__$1,opts,children,vec__68993,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__68992,map__68992__$1,opts,children,vec__68993,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979))
], null)),cljs.core.apply.call(null,React.DOM.span,({"className": "sr-only"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span(({"className": "caret"})));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__68992,map__68992__$1,opts,children,vec__68993,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979){
return (function (k){
var temp__4657__auto___69011 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto___69011)){
var f_69012 = temp__4657__auto___69011;
f_69012.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__68992,map__68992__$1,opts,children,vec__68993,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979))
;

om_bootstrap.button.t_om_bootstrap$button68989.getBasis = ((function (state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map68975","map68975",600974371,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker68978","input-checker68978",-711952154,null),new cljs.core.Symbol(null,"input-schema68977","input-schema68977",-1361508985,null),new cljs.core.Symbol(null,"output-schema68976","output-schema68976",1208652138,null),new cljs.core.Symbol(null,"validate__30368__auto__","validate__30368__auto__",81766895,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__68980","G__68980",-1825113903,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker68979","output-checker68979",578948119,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor68973","constructor68973",1264246366,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"meta68990","meta68990",-1944294228,null)], null);
});})(state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979))
;

om_bootstrap.button.t_om_bootstrap$button68989.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button68989.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button68989";

om_bootstrap.button.t_om_bootstrap$button68989.cljs$lang$ctorPrWriter = ((function (state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-bootstrap.button/t_om_bootstrap$button68989");
});})(state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979))
;

om_bootstrap.button.__GT_t_om_bootstrap$button68989 = ((function (state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979){
return (function om_bootstrap$button$constructor68973_$___GT_t_om_bootstrap$button68989(map68975__$1,owner__$1,input_checker68978__$1,input_schema68977__$1,output_schema68976__$1,validate__30368__auto____$1,G__68980__$1,state__$1,output_checker68979__$1,ufv____$1,constructor68973__$1,meta68990){
return (new om_bootstrap.button.t_om_bootstrap$button68989(map68975__$1,owner__$1,input_checker68978__$1,input_schema68977__$1,output_schema68976__$1,validate__30368__auto____$1,G__68980__$1,state__$1,output_checker68979__$1,ufv____$1,constructor68973__$1,meta68990));
});})(state,owner,validate__30368__auto__,ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button68989(map68975,owner,input_checker68978,input_schema68977,output_schema68976,validate__30368__auto__,G__68980,state,output_checker68979,ufv__,om_bootstrap$button$constructor68973,null));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___69013 = output_checker68979.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___69013)){
var error__30370__auto___69014 = temp__4657__auto___69013;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor68973","constructor68973",1264246366,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___69014)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema68976,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69014], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv__,output_schema68976,input_schema68977,input_checker68978,output_checker68979))
,schema.core.make_fn_schema.call(null,output_schema68976,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema68977], null)));
})();
/**
 * Generates a split button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__40996__auto___69007){
return (function om_bootstrap$button$split_STAR_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___69015 = arguments.length;
var i__25827__auto___69016 = (0);
while(true){
if((i__25827__auto___69016 < len__25826__auto___69015)){
args__25833__auto__.push((arguments[i__25827__auto___69016]));

var G__69017 = (i__25827__auto___69016 + (1));
i__25827__auto___69016 = G__69017;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});})(component_fnk__40996__auto___69007))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__40996__auto___69007){
return (function (data__40997__auto__,owner68972,p__69000){
var vec__69001 = p__69000;
var opts__40998__auto__ = cljs.core.nth.call(null,vec__69001,(0),null);
return component_fnk__40996__auto___69007.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner68972),new cljs.core.Keyword(null,"opts","opts",155075701),opts__40998__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner68972,new cljs.core.Keyword(null,"data","data",-232669377),data__40997__auto__], null));
});})(component_fnk__40996__auto___69007))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__40996__auto___69007){
return (function (seq68997){
var G__68998 = cljs.core.first.call(null,seq68997);
var seq68997__$1 = cljs.core.next.call(null,seq68997);
var G__68999 = cljs.core.first.call(null,seq68997__$1);
var seq68997__$2 = cljs.core.next.call(null,seq68997__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__68998,G__68999,seq68997__$2);
});})(component_fnk__40996__auto___69007))
;


om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(var_args){
var args69004 = [];
var len__25826__auto___69018 = arguments.length;
var i__25827__auto___69019 = (0);
while(true){
if((i__25827__auto___69019 < len__25826__auto___69018)){
args69004.push((arguments[i__25827__auto___69019]));

var G__69020 = (i__25827__auto___69019 + (1));
i__25827__auto___69019 = G__69020;
continue;
} else {
}
break;
}

var G__69006 = args69004.length;
switch (G__69006) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69004.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__40965__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__40965__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__40965__auto__,m68974){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__40965__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m68974));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___69030 = schema.utils.use_fn_validation;
var output_schema69022_69031 = schema.core.Any;
var input_schema69023_69032 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SplitButton","SplitButton",1856385687,null)], null))),schema.core.Any], null);
var input_checker69024_69033 = schema.core.checker.call(null,input_schema69023_69032);
var output_checker69025_69034 = schema.core.checker.call(null,output_schema69022_69031);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___69030,output_schema69022_69031,input_schema69023_69032,input_checker69024_69033,output_checker69025_69034){
return (function om_bootstrap$button$split(var_args){
var args__25833__auto__ = [];
var len__25826__auto___69035 = arguments.length;
var i__25827__auto___69036 = (0);
while(true){
if((i__25827__auto___69036 < len__25826__auto___69035)){
args__25833__auto__.push((arguments[i__25827__auto___69036]));

var G__69037 = (i__25827__auto___69036 + (1));
i__25827__auto___69036 = G__69037;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___69030,output_schema69022_69031,input_schema69023_69032,input_checker69024_69033,output_checker69025_69034))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___69030,output_schema69022_69031,input_schema69023_69032,input_checker69024_69033,output_checker69025_69034){
return (function (G__69026,rest69027){
var validate__30368__auto__ = ufv___69030.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___69038 = cljs.core.list_STAR_.call(null,G__69026,rest69027);
var temp__4657__auto___69039 = input_checker69024_69033.call(null,args__30369__auto___69038);
if(cljs.core.truth_(temp__4657__auto___69039)){
var error__30370__auto___69040 = temp__4657__auto___69039;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___69040)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69023_69032,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___69038,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69040], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__69026;
var children = rest69027;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___69041 = output_checker69025_69034.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___69041)){
var error__30370__auto___69042 = temp__4657__auto___69041;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__30370__auto___69042)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69022_69031,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___69042], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___69030,output_schema69022_69031,input_schema69023_69032,input_checker69024_69033,output_checker69025_69034))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___69030,output_schema69022_69031,input_schema69023_69032,input_checker69024_69033,output_checker69025_69034){
return (function (seq69028){
var G__69029 = cljs.core.first.call(null,seq69028);
var seq69028__$1 = cljs.core.next.call(null,seq69028);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__69029,seq69028__$1);
});})(ufv___69030,output_schema69022_69031,input_schema69023_69032,input_checker69024_69033,output_checker69025_69034))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema69022_69031,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69023_69032], null)));

//# sourceMappingURL=button.js.map?rel=1478399654034