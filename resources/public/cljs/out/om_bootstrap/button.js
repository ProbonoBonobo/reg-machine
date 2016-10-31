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
var ufv___57031 = schema.utils.use_fn_validation;
var output_schema57025_57032 = schema.core.Any;
var input_schema57026_57033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker57027_57034 = schema.core.checker.call(null,input_schema57026_57033);
var output_checker57028_57035 = schema.core.checker.call(null,output_schema57025_57032);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___57031,output_schema57025_57032,input_schema57026_57033,input_checker57027_57034,output_checker57028_57035){
return (function om_bootstrap$button$render_anchor(G__57029,G__57030){
var validate__37921__auto__ = ufv___57031.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57036 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57029,G__57030], null);
var temp__4657__auto___57037 = input_checker57027_57034.call(null,args__37922__auto___57036);
if(cljs.core.truth_(temp__4657__auto___57037)){
var error__37923__auto___57038 = temp__4657__auto___57037;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57038)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57026_57033,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57036,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57038], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__57029;
var children = G__57030;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57039 = output_checker57028_57035.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57039)){
var error__37923__auto___57040 = temp__4657__auto___57039;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57040)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57025_57032,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57040], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57031,output_schema57025_57032,input_schema57026_57033,input_checker57027_57034,output_checker57028_57035))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema57025_57032,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57026_57033], null)));
var ufv___57052 = schema.utils.use_fn_validation;
var output_schema57041_57053 = om_bootstrap.types.Component;
var input_schema57042_57054 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Button","Button",-1787718586,null)], null))),schema.core.Any], null);
var input_checker57043_57055 = schema.core.checker.call(null,input_schema57042_57054);
var output_checker57044_57056 = schema.core.checker.call(null,output_schema57041_57053);
/**
 * Inputs: [props :- Button & children]
 *   Returns: t/Component
 * 
 *   Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___57052,output_schema57041_57053,input_schema57042_57054,input_checker57043_57055,output_checker57044_57056){
return (function om_bootstrap$button$button(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57057 = arguments.length;
var i__25827__auto___57058 = (0);
while(true){
if((i__25827__auto___57058 < len__25826__auto___57057)){
args__25833__auto__.push((arguments[i__25827__auto___57058]));

var G__57059 = (i__25827__auto___57058 + (1));
i__25827__auto___57058 = G__57059;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___57052,output_schema57041_57053,input_schema57042_57054,input_checker57043_57055,output_checker57044_57056))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___57052,output_schema57041_57053,input_schema57042_57054,input_checker57043_57055,output_checker57044_57056){
return (function (G__57045,rest57046){
var validate__37921__auto__ = ufv___57052.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57060 = cljs.core.list_STAR_.call(null,G__57045,rest57046);
var temp__4657__auto___57061 = input_checker57043_57055.call(null,args__37922__auto___57060);
if(cljs.core.truth_(temp__4657__auto___57061)){
var error__37923__auto___57062 = temp__4657__auto___57061;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__37923__auto___57062)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57042_57054,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57060,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57062], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var props = G__57045;
var children = rest57046;
while(true){
var vec__57049 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__57049,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__57049,(1),null);
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
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57063 = output_checker57044_57056.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57063)){
var error__37923__auto___57064 = temp__4657__auto___57063;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__37923__auto___57064)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57041_57053,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57064], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57052,output_schema57041_57053,input_schema57042_57054,input_checker57043_57055,output_checker57044_57056))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___57052,output_schema57041_57053,input_schema57042_57054,input_checker57043_57055,output_checker57044_57056){
return (function (seq57047){
var G__57048 = cljs.core.first.call(null,seq57047);
var seq57047__$1 = cljs.core.next.call(null,seq57047);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__57048,seq57047__$1);
});})(ufv___57052,output_schema57041_57053,input_schema57042_57054,input_checker57043_57055,output_checker57044_57056))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema57041_57053,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57042_57054], null)));
var ufv___57076 = schema.utils.use_fn_validation;
var output_schema57065_57077 = om_bootstrap.types.Component;
var input_schema57066_57078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker57067_57079 = schema.core.checker.call(null,input_schema57066_57078);
var output_checker57068_57080 = schema.core.checker.call(null,output_schema57065_57077);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___57076,output_schema57065_57077,input_schema57066_57078,input_checker57067_57079,output_checker57068_57080){
return (function om_bootstrap$button$toolbar(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57081 = arguments.length;
var i__25827__auto___57082 = (0);
while(true){
if((i__25827__auto___57082 < len__25826__auto___57081)){
args__25833__auto__.push((arguments[i__25827__auto___57082]));

var G__57083 = (i__25827__auto___57082 + (1));
i__25827__auto___57082 = G__57083;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___57076,output_schema57065_57077,input_schema57066_57078,input_checker57067_57079,output_checker57068_57080))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___57076,output_schema57065_57077,input_schema57066_57078,input_checker57067_57079,output_checker57068_57080){
return (function (G__57069,rest57070){
var validate__37921__auto__ = ufv___57076.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57084 = cljs.core.list_STAR_.call(null,G__57069,rest57070);
var temp__4657__auto___57085 = input_checker57067_57079.call(null,args__37922__auto___57084);
if(cljs.core.truth_(temp__4657__auto___57085)){
var error__37923__auto___57086 = temp__4657__auto___57085;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__37923__auto___57086)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57066_57078,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57084,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57086], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__57069;
var children = rest57070;
while(true){
var vec__57073 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__57073,(0),null);
var props = cljs.core.nth.call(null,vec__57073,(1),null);
return cljs.core.apply.call(null,React.DOM.div,({"role": "toolbar", "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs)))}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57087 = output_checker57068_57080.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57087)){
var error__37923__auto___57088 = temp__4657__auto___57087;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__37923__auto___57088)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57065_57077,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57088], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57076,output_schema57065_57077,input_schema57066_57078,input_checker57067_57079,output_checker57068_57080))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___57076,output_schema57065_57077,input_schema57066_57078,input_checker57067_57079,output_checker57068_57080){
return (function (seq57071){
var G__57072 = cljs.core.first.call(null,seq57071);
var seq57071__$1 = cljs.core.next.call(null,seq57071);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__57072,seq57071__$1);
});})(ufv___57076,output_schema57065_57077,input_schema57066_57078,input_checker57067_57079,output_checker57068_57080))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema57065_57077,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57066_57078], null)));
var ufv___57100 = schema.utils.use_fn_validation;
var output_schema57089_57101 = om_bootstrap.types.Component;
var input_schema57090_57102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null)], null))),schema.core.Any], null);
var input_checker57091_57103 = schema.core.checker.call(null,input_schema57090_57102);
var output_checker57092_57104 = schema.core.checker.call(null,output_schema57089_57101);
/**
 * Inputs: [opts :- ButtonGroup & children]
 *   Returns: t/Component
 * 
 *   Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___57100,output_schema57089_57101,input_schema57090_57102,input_checker57091_57103,output_checker57092_57104){
return (function om_bootstrap$button$button_group(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57105 = arguments.length;
var i__25827__auto___57106 = (0);
while(true){
if((i__25827__auto___57106 < len__25826__auto___57105)){
args__25833__auto__.push((arguments[i__25827__auto___57106]));

var G__57107 = (i__25827__auto___57106 + (1));
i__25827__auto___57106 = G__57107;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___57100,output_schema57089_57101,input_schema57090_57102,input_checker57091_57103,output_checker57092_57104))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___57100,output_schema57089_57101,input_schema57090_57102,input_checker57091_57103,output_checker57092_57104){
return (function (G__57093,rest57094){
var validate__37921__auto__ = ufv___57100.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57108 = cljs.core.list_STAR_.call(null,G__57093,rest57094);
var temp__4657__auto___57109 = input_checker57091_57103.call(null,args__37922__auto___57108);
if(cljs.core.truth_(temp__4657__auto___57109)){
var error__37923__auto___57110 = temp__4657__auto___57109;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__37923__auto___57110)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57090_57102,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57108,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57110], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__57093;
var children = rest57094;
while(true){
var vec__57097 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__57097,(0),null);
var props = cljs.core.nth.call(null,vec__57097,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57111 = output_checker57092_57104.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57111)){
var error__37923__auto___57112 = temp__4657__auto___57111;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__37923__auto___57112)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57089_57101,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57112], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57100,output_schema57089_57101,input_schema57090_57102,input_checker57091_57103,output_checker57092_57104))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___57100,output_schema57089_57101,input_schema57090_57102,input_checker57091_57103,output_checker57092_57104){
return (function (seq57095){
var G__57096 = cljs.core.first.call(null,seq57095);
var seq57095__$1 = cljs.core.next.call(null,seq57095);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__57096,seq57095__$1);
});})(ufv___57100,output_schema57089_57101,input_schema57090_57102,input_checker57091_57103,output_checker57092_57104))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema57089_57101,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57090_57102], null)));
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

var component_fnk__43054__auto___57148 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema57117 = schema.core.Any;
var input_schema57118 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map57116","map57116",-213898486,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker57119 = schema.core.checker.call(null,input_schema57118);
var output_checker57120 = schema.core.checker.call(null,output_schema57117);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120){
return (function om_bootstrap$button$constructor57114(G__57121){
var validate__37921__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57149 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57121], null);
var temp__4657__auto___57150 = input_checker57119.call(null,args__37922__auto___57149);
if(cljs.core.truth_(temp__4657__auto___57150)){
var error__37923__auto___57151 = temp__4657__auto___57150;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor57114","constructor57114",2092009868,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57151)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57118,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57149,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57151], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var map57116 = G__57121;
while(true){
if(cljs.core.map_QMARK_.call(null,map57116)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map57116)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map57116,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button57130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button57130 = (function (owner,map57116,constructor57114,output_checker57120,output_schema57117,validate__37921__auto__,input_checker57119,G__57121,ufv__,input_schema57118,meta57131){
this.owner = owner;
this.map57116 = map57116;
this.constructor57114 = constructor57114;
this.output_checker57120 = output_checker57120;
this.output_schema57117 = output_schema57117;
this.validate__37921__auto__ = validate__37921__auto__;
this.input_checker57119 = input_checker57119;
this.G__57121 = G__57121;
this.ufv__ = ufv__;
this.input_schema57118 = input_schema57118;
this.meta57131 = meta57131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button57130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__37921__auto__,ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120){
return (function (_57132,meta57131__$1){
var self__ = this;
var _57132__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button57130(self__.owner,self__.map57116,self__.constructor57114,self__.output_checker57120,self__.output_schema57117,self__.validate__37921__auto__,self__.input_checker57119,self__.G__57121,self__.ufv__,self__.input_schema57118,meta57131__$1));
});})(owner,validate__37921__auto__,ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120))
;

om_bootstrap.button.t_om_bootstrap$button57130.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__37921__auto__,ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120){
return (function (_57132){
var self__ = this;
var _57132__$1 = this;
return self__.meta57131;
});})(owner,validate__37921__auto__,ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120))
;

om_bootstrap.button.t_om_bootstrap$button57130.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button57130.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__37921__auto__,ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__37921__auto__,ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120))
;

om_bootstrap.button.t_om_bootstrap$button57130.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button57130.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__37921__auto__,ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__57133 = om.core.get_props.call(null,self__.owner);
var map__57133__$1 = ((((!((map__57133 == null)))?((((map__57133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57133):map__57133);
var opts = cljs.core.get.call(null,map__57133__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__57133__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__57134 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__57134,(0),null);
var props = cljs.core.nth.call(null,vec__57134,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__57133,map__57133__$1,opts,children,vec__57134,bs,props,classes,___$1,owner,validate__37921__auto__,ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120){
return (function (e){
var temp__4657__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var on_select = temp__4657__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__57133,map__57133__$1,opts,children,vec__57134,bs,props,classes,___$1,owner,validate__37921__auto__,ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120))
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
});})(owner,validate__37921__auto__,ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120))
;

om_bootstrap.button.t_om_bootstrap$button57130.getBasis = ((function (owner,validate__37921__auto__,ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map57116","map57116",-213898486,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor57114","constructor57114",2092009868,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker57120","output-checker57120",377740020,null),new cljs.core.Symbol(null,"output-schema57117","output-schema57117",-1134980651,null),new cljs.core.Symbol(null,"validate__37921__auto__","validate__37921__auto__",-900160587,null),new cljs.core.Symbol(null,"input-checker57119","input-checker57119",-712409641,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__57121","G__57121",-1309434788,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"input-schema57118","input-schema57118",620052926,null),new cljs.core.Symbol(null,"meta57131","meta57131",929187791,null)], null);
});})(owner,validate__37921__auto__,ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120))
;

om_bootstrap.button.t_om_bootstrap$button57130.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button57130.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button57130";

om_bootstrap.button.t_om_bootstrap$button57130.cljs$lang$ctorPrWriter = ((function (owner,validate__37921__auto__,ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-bootstrap.button/t_om_bootstrap$button57130");
});})(owner,validate__37921__auto__,ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120))
;

om_bootstrap.button.__GT_t_om_bootstrap$button57130 = ((function (owner,validate__37921__auto__,ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120){
return (function om_bootstrap$button$constructor57114_$___GT_t_om_bootstrap$button57130(owner__$1,map57116__$1,constructor57114__$1,output_checker57120__$1,output_schema57117__$1,validate__37921__auto____$1,input_checker57119__$1,G__57121__$1,ufv____$1,input_schema57118__$1,meta57131){
return (new om_bootstrap.button.t_om_bootstrap$button57130(owner__$1,map57116__$1,constructor57114__$1,output_checker57120__$1,output_schema57117__$1,validate__37921__auto____$1,input_checker57119__$1,G__57121__$1,ufv____$1,input_schema57118__$1,meta57131));
});})(owner,validate__37921__auto__,ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button57130(owner,map57116,om_bootstrap$button$constructor57114,output_checker57120,output_schema57117,validate__37921__auto__,input_checker57119,G__57121,ufv__,input_schema57118,null));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57152 = output_checker57120.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57152)){
var error__37923__auto___57153 = temp__4657__auto___57152;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor57114","constructor57114",2092009868,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57153)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57117,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57153], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv__,output_schema57117,input_schema57118,input_checker57119,output_checker57120))
,schema.core.make_fn_schema.call(null,output_schema57117,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57118], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 *   wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__43054__auto___57148){
return (function om_bootstrap$button$menu_item_STAR_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57154 = arguments.length;
var i__25827__auto___57155 = (0);
while(true){
if((i__25827__auto___57155 < len__25826__auto___57154)){
args__25833__auto__.push((arguments[i__25827__auto___57155]));

var G__57156 = (i__25827__auto___57155 + (1));
i__25827__auto___57155 = G__57156;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});})(component_fnk__43054__auto___57148))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__43054__auto___57148){
return (function (data__43055__auto__,owner57113,p__57141){
var vec__57142 = p__57141;
var opts__43056__auto__ = cljs.core.nth.call(null,vec__57142,(0),null);
return component_fnk__43054__auto___57148.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__43056__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner57113,new cljs.core.Keyword(null,"data","data",-232669377),data__43055__auto__], null));
});})(component_fnk__43054__auto___57148))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__43054__auto___57148){
return (function (seq57138){
var G__57139 = cljs.core.first.call(null,seq57138);
var seq57138__$1 = cljs.core.next.call(null,seq57138);
var G__57140 = cljs.core.first.call(null,seq57138__$1);
var seq57138__$2 = cljs.core.next.call(null,seq57138__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__57139,G__57140,seq57138__$2);
});})(component_fnk__43054__auto___57148))
;


om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(var_args){
var args57145 = [];
var len__25826__auto___57157 = arguments.length;
var i__25827__auto___57158 = (0);
while(true){
if((i__25827__auto___57158 < len__25826__auto___57157)){
args57145.push((arguments[i__25827__auto___57158]));

var G__57159 = (i__25827__auto___57158 + (1));
i__25827__auto___57158 = G__57159;
continue;
} else {
}
break;
}

var G__57147 = args57145.length;
switch (G__57147) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57145.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__43023__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__43023__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__43023__auto__,m57115){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__43023__auto__,m57115);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___57169 = schema.utils.use_fn_validation;
var output_schema57161_57170 = om_bootstrap.types.Component;
var input_schema57162_57171 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"MenuItem","MenuItem",1235363736,null)], null))),schema.core.Any], null);
var input_checker57163_57172 = schema.core.checker.call(null,input_schema57162_57171);
var output_checker57164_57173 = schema.core.checker.call(null,output_schema57161_57170);
/**
 * Inputs: [opts :- MenuItem & children]
 *   Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___57169,output_schema57161_57170,input_schema57162_57171,input_checker57163_57172,output_checker57164_57173){
return (function om_bootstrap$button$menu_item(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57174 = arguments.length;
var i__25827__auto___57175 = (0);
while(true){
if((i__25827__auto___57175 < len__25826__auto___57174)){
args__25833__auto__.push((arguments[i__25827__auto___57175]));

var G__57176 = (i__25827__auto___57175 + (1));
i__25827__auto___57175 = G__57176;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___57169,output_schema57161_57170,input_schema57162_57171,input_checker57163_57172,output_checker57164_57173))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___57169,output_schema57161_57170,input_schema57162_57171,input_checker57163_57172,output_checker57164_57173){
return (function (G__57165,rest57166){
var validate__37921__auto__ = ufv___57169.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57177 = cljs.core.list_STAR_.call(null,G__57165,rest57166);
var temp__4657__auto___57178 = input_checker57163_57172.call(null,args__37922__auto___57177);
if(cljs.core.truth_(temp__4657__auto___57178)){
var error__37923__auto___57179 = temp__4657__auto___57178;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57179)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57162_57171,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57177,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57179], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__57165;
var children = rest57166;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57180 = output_checker57164_57173.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57180)){
var error__37923__auto___57181 = temp__4657__auto___57180;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57181)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57161_57170,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57181], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57169,output_schema57161_57170,input_schema57162_57171,input_checker57163_57172,output_checker57164_57173))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___57169,output_schema57161_57170,input_schema57162_57171,input_checker57163_57172,output_checker57164_57173){
return (function (seq57167){
var G__57168 = cljs.core.first.call(null,seq57167);
var seq57167__$1 = cljs.core.next.call(null,seq57167);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__57168,seq57167__$1);
});})(ufv___57169,output_schema57161_57170,input_schema57162_57171,input_checker57163_57172,output_checker57164_57173))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema57161_57170,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57162_57171], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___57194 = schema.utils.use_fn_validation;
var output_schema57183_57195 = om_bootstrap.types.Component;
var input_schema57184_57196 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownMenu","DropdownMenu",881901742,null)], null))),schema.core.Any], null);
var input_checker57185_57197 = schema.core.checker.call(null,input_schema57184_57196);
var output_checker57186_57198 = schema.core.checker.call(null,output_schema57183_57195);
/**
 * Inputs: [opts :- DropdownMenu & children]
 *   Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___57194,output_schema57183_57195,input_schema57184_57196,input_checker57185_57197,output_checker57186_57198){
return (function om_bootstrap$button$dropdown_menu(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57199 = arguments.length;
var i__25827__auto___57200 = (0);
while(true){
if((i__25827__auto___57200 < len__25826__auto___57199)){
args__25833__auto__.push((arguments[i__25827__auto___57200]));

var G__57201 = (i__25827__auto___57200 + (1));
i__25827__auto___57200 = G__57201;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___57194,output_schema57183_57195,input_schema57184_57196,input_checker57185_57197,output_checker57186_57198))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___57194,output_schema57183_57195,input_schema57184_57196,input_checker57185_57197,output_checker57186_57198){
return (function (G__57187,rest57188){
var validate__37921__auto__ = ufv___57194.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57202 = cljs.core.list_STAR_.call(null,G__57187,rest57188);
var temp__4657__auto___57203 = input_checker57185_57197.call(null,args__37922__auto___57202);
if(cljs.core.truth_(temp__4657__auto___57203)){
var error__37923__auto___57204 = temp__4657__auto___57203;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57204)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57184_57196,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57202,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57204], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__57187;
var children = rest57188;
while(true){
var vec__57191 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__57191,(0),null);
var props = cljs.core.nth.call(null,vec__57191,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4655__auto__)){
var on_select = temp__4655__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4655__auto__,vec__57191,bs,props,classes,ul_attrs,validate__37921__auto__,ufv___57194,output_schema57183_57195,input_schema57184_57196,input_checker57185_57197,output_checker57186_57198){
return (function (p1__57182_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__57182_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4655__auto__,vec__57191,bs,props,classes,ul_attrs,validate__37921__auto__,ufv___57194,output_schema57183_57195,input_schema57184_57196,input_checker57185_57197,output_checker57186_57198))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57205 = output_checker57186_57198.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57205)){
var error__37923__auto___57206 = temp__4657__auto___57205;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57206)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57183_57195,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57206], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57194,output_schema57183_57195,input_schema57184_57196,input_checker57185_57197,output_checker57186_57198))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___57194,output_schema57183_57195,input_schema57184_57196,input_checker57185_57197,output_checker57186_57198){
return (function (seq57189){
var G__57190 = cljs.core.first.call(null,seq57189);
var seq57189__$1 = cljs.core.next.call(null,seq57189);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__57190,seq57189__$1);
});})(ufv___57194,output_schema57183_57195,input_schema57184_57196,input_checker57185_57197,output_checker57186_57198))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema57183_57195,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57184_57196], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__43025__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__43025__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__43025__auto__;
})();

var component_fnk__43054__auto___57243 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema57212 = schema.core.Any;
var input_schema57213 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map57211","map57211",870540171,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker57214 = schema.core.checker.call(null,input_schema57213);
var output_checker57215 = schema.core.checker.call(null,output_schema57212);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215){
return (function om_bootstrap$button$constructor57209(G__57216){
var validate__37921__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57244 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57216], null);
var temp__4657__auto___57245 = input_checker57214.call(null,args__37922__auto___57244);
if(cljs.core.truth_(temp__4657__auto___57245)){
var error__37923__auto___57246 = temp__4657__auto___57245;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor57209","constructor57209",490518448,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57246)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57213,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57244,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57246], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var map57211 = G__57216;
while(true){
if(cljs.core.map_QMARK_.call(null,map57211)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map57211)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map57211,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map57211,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button57225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button57225 = (function (owner,map57211,output_schema57212,G__57216,constructor57209,input_checker57214,state,validate__37921__auto__,output_checker57215,ufv__,input_schema57213,meta57226){
this.owner = owner;
this.map57211 = map57211;
this.output_schema57212 = output_schema57212;
this.G__57216 = G__57216;
this.constructor57209 = constructor57209;
this.input_checker57214 = input_checker57214;
this.state = state;
this.validate__37921__auto__ = validate__37921__auto__;
this.output_checker57215 = output_checker57215;
this.ufv__ = ufv__;
this.input_schema57213 = input_schema57213;
this.meta57226 = meta57226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button57225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215){
return (function (_57227,meta57226__$1){
var self__ = this;
var _57227__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button57225(self__.owner,self__.map57211,self__.output_schema57212,self__.G__57216,self__.constructor57209,self__.input_checker57214,self__.state,self__.validate__37921__auto__,self__.output_checker57215,self__.ufv__,self__.input_schema57213,meta57226__$1));
});})(state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215))
;

om_bootstrap.button.t_om_bootstrap$button57225.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215){
return (function (_57227){
var self__ = this;
var _57227__$1 = this;
return self__.meta57226;
});})(state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215))
;

om_bootstrap.button.t_om_bootstrap$button57225.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button57225.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215))
;

om_bootstrap.button.t_om_bootstrap$button57225.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button57225.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__57228 = om.core.get_props.call(null,self__.owner);
var map__57228__$1 = ((((!((map__57228 == null)))?((((map__57228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57228):map__57228);
var opts = cljs.core.get.call(null,map__57228__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__57228__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__57229 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__57229,(0),null);
var props = cljs.core.nth.call(null,vec__57229,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__57228,map__57228__$1,opts,children,vec__57229,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__57228,map__57228__$1,opts,children,vec__57229,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215))
], null);
var update_child_props = ((function (open_QMARK_,map__57228,map__57228__$1,opts,children,vec__57229,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__24751__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__57228,map__57228__$1,opts,children,vec__57229,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215){
return (function (key){
var temp__4655__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4655__auto__)){
var os = temp__4655__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__57228,map__57228__$1,opts,children,vec__57229,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__57228,map__57228__$1,opts,children,vec__57229,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span(({"className": "caret"}))),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__57228,map__57228__$1,opts,children,vec__57229,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215){
return (function (p1__57207_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__57207_SHARP_,update_child_props);
});})(open_QMARK_,map__57228,map__57228__$1,opts,children,vec__57229,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215))
,children))], null));
});})(state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215))
;

om_bootstrap.button.t_om_bootstrap$button57225.getBasis = ((function (state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map57211","map57211",870540171,null),new cljs.core.Symbol(null,"output-schema57212","output-schema57212",-469847252,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__57216","G__57216",1403951085,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor57209","constructor57209",490518448,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker57214","input-checker57214",-1408428975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__37921__auto__","validate__37921__auto__",-900160587,null),new cljs.core.Symbol(null,"output-checker57215","output-checker57215",490276697,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"input-schema57213","input-schema57213",-90904066,null),new cljs.core.Symbol(null,"meta57226","meta57226",987383815,null)], null);
});})(state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215))
;

om_bootstrap.button.t_om_bootstrap$button57225.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button57225.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button57225";

om_bootstrap.button.t_om_bootstrap$button57225.cljs$lang$ctorPrWriter = ((function (state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-bootstrap.button/t_om_bootstrap$button57225");
});})(state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215))
;

om_bootstrap.button.__GT_t_om_bootstrap$button57225 = ((function (state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215){
return (function om_bootstrap$button$constructor57209_$___GT_t_om_bootstrap$button57225(owner__$1,map57211__$1,output_schema57212__$1,G__57216__$1,constructor57209__$1,input_checker57214__$1,state__$1,validate__37921__auto____$1,output_checker57215__$1,ufv____$1,input_schema57213__$1,meta57226){
return (new om_bootstrap.button.t_om_bootstrap$button57225(owner__$1,map57211__$1,output_schema57212__$1,G__57216__$1,constructor57209__$1,input_checker57214__$1,state__$1,validate__37921__auto____$1,output_checker57215__$1,ufv____$1,input_schema57213__$1,meta57226));
});})(state,owner,validate__37921__auto__,ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button57225(owner,map57211,output_schema57212,G__57216,om_bootstrap$button$constructor57209,input_checker57214,state,validate__37921__auto__,output_checker57215,ufv__,input_schema57213,null));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57247 = output_checker57215.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57247)){
var error__37923__auto___57248 = temp__4657__auto___57247;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor57209","constructor57209",490518448,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57248)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57212,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57248], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv__,output_schema57212,input_schema57213,input_checker57214,output_checker57215))
,schema.core.make_fn_schema.call(null,output_schema57212,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57213], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__43054__auto___57243){
return (function om_bootstrap$button$dropdown_STAR_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57249 = arguments.length;
var i__25827__auto___57250 = (0);
while(true){
if((i__25827__auto___57250 < len__25826__auto___57249)){
args__25833__auto__.push((arguments[i__25827__auto___57250]));

var G__57251 = (i__25827__auto___57250 + (1));
i__25827__auto___57250 = G__57251;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});})(component_fnk__43054__auto___57243))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__43054__auto___57243){
return (function (data__43055__auto__,owner57208,p__57236){
var vec__57237 = p__57236;
var opts__43056__auto__ = cljs.core.nth.call(null,vec__57237,(0),null);
return component_fnk__43054__auto___57243.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner57208),new cljs.core.Keyword(null,"opts","opts",155075701),opts__43056__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner57208,new cljs.core.Keyword(null,"data","data",-232669377),data__43055__auto__], null));
});})(component_fnk__43054__auto___57243))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__43054__auto___57243){
return (function (seq57233){
var G__57234 = cljs.core.first.call(null,seq57233);
var seq57233__$1 = cljs.core.next.call(null,seq57233);
var G__57235 = cljs.core.first.call(null,seq57233__$1);
var seq57233__$2 = cljs.core.next.call(null,seq57233__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__57234,G__57235,seq57233__$2);
});})(component_fnk__43054__auto___57243))
;


om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(var_args){
var args57240 = [];
var len__25826__auto___57252 = arguments.length;
var i__25827__auto___57253 = (0);
while(true){
if((i__25827__auto___57253 < len__25826__auto___57252)){
args57240.push((arguments[i__25827__auto___57253]));

var G__57254 = (i__25827__auto___57253 + (1));
i__25827__auto___57253 = G__57254;
continue;
} else {
}
break;
}

var G__57242 = args57240.length;
switch (G__57242) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57240.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__43023__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__43023__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__43023__auto__,m57210){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__43023__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m57210));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___57264 = schema.utils.use_fn_validation;
var output_schema57256_57265 = om_bootstrap.types.Component;
var input_schema57257_57266 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownButton","DropdownButton",251375015,null)], null))),schema.core.Any], null);
var input_checker57258_57267 = schema.core.checker.call(null,input_schema57257_57266);
var output_checker57259_57268 = schema.core.checker.call(null,output_schema57256_57265);
/**
 * Inputs: [opts :- DropdownButton & children]
 *   Returns: t/Component
 * 
 *   Returns a dropdown button component. The component manages its own
 *   dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___57264,output_schema57256_57265,input_schema57257_57266,input_checker57258_57267,output_checker57259_57268){
return (function om_bootstrap$button$dropdown(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57269 = arguments.length;
var i__25827__auto___57270 = (0);
while(true){
if((i__25827__auto___57270 < len__25826__auto___57269)){
args__25833__auto__.push((arguments[i__25827__auto___57270]));

var G__57271 = (i__25827__auto___57270 + (1));
i__25827__auto___57270 = G__57271;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___57264,output_schema57256_57265,input_schema57257_57266,input_checker57258_57267,output_checker57259_57268))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___57264,output_schema57256_57265,input_schema57257_57266,input_checker57258_57267,output_checker57259_57268){
return (function (G__57260,rest57261){
var validate__37921__auto__ = ufv___57264.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57272 = cljs.core.list_STAR_.call(null,G__57260,rest57261);
var temp__4657__auto___57273 = input_checker57258_57267.call(null,args__37922__auto___57272);
if(cljs.core.truth_(temp__4657__auto___57273)){
var error__37923__auto___57274 = temp__4657__auto___57273;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__37923__auto___57274)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57257_57266,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57272,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57274], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__57260;
var children = rest57261;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57275 = output_checker57259_57268.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57275)){
var error__37923__auto___57276 = temp__4657__auto___57275;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__37923__auto___57276)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57256_57265,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57276], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57264,output_schema57256_57265,input_schema57257_57266,input_checker57258_57267,output_checker57259_57268))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___57264,output_schema57256_57265,input_schema57257_57266,input_checker57258_57267,output_checker57259_57268){
return (function (seq57262){
var G__57263 = cljs.core.first.call(null,seq57262);
var seq57262__$1 = cljs.core.next.call(null,seq57262);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__57263,seq57262__$1);
});})(ufv___57264,output_schema57256_57265,input_schema57257_57266,input_checker57258_57267,output_checker57259_57268))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema57256_57265,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57257_57266], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__43025__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__43025__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__43025__auto__;
})();

var component_fnk__43054__auto___57312 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema57281 = schema.core.Any;
var input_schema57282 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map57280","map57280",197171387,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker57283 = schema.core.checker.call(null,input_schema57282);
var output_checker57284 = schema.core.checker.call(null,output_schema57281);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284){
return (function om_bootstrap$button$constructor57278(G__57285){
var validate__37921__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57313 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57285], null);
var temp__4657__auto___57314 = input_checker57283.call(null,args__37922__auto___57313);
if(cljs.core.truth_(temp__4657__auto___57314)){
var error__37923__auto___57315 = temp__4657__auto___57314;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor57278","constructor57278",-1495358063,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57315)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57282,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57313,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57315], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var map57280 = G__57285;
while(true){
if(cljs.core.map_QMARK_.call(null,map57280)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map57280)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map57280,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map57280,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button57294 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button57294 = (function (input_checker57283,output_schema57281,owner,constructor57278,state,validate__37921__auto__,output_checker57284,map57280,G__57285,input_schema57282,ufv__,meta57295){
this.input_checker57283 = input_checker57283;
this.output_schema57281 = output_schema57281;
this.owner = owner;
this.constructor57278 = constructor57278;
this.state = state;
this.validate__37921__auto__ = validate__37921__auto__;
this.output_checker57284 = output_checker57284;
this.map57280 = map57280;
this.G__57285 = G__57285;
this.input_schema57282 = input_schema57282;
this.ufv__ = ufv__;
this.meta57295 = meta57295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button57294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284){
return (function (_57296,meta57295__$1){
var self__ = this;
var _57296__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button57294(self__.input_checker57283,self__.output_schema57281,self__.owner,self__.constructor57278,self__.state,self__.validate__37921__auto__,self__.output_checker57284,self__.map57280,self__.G__57285,self__.input_schema57282,self__.ufv__,meta57295__$1));
});})(state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284))
;

om_bootstrap.button.t_om_bootstrap$button57294.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284){
return (function (_57296){
var self__ = this;
var _57296__$1 = this;
return self__.meta57295;
});})(state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284))
;

om_bootstrap.button.t_om_bootstrap$button57294.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button57294.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284))
;

om_bootstrap.button.t_om_bootstrap$button57294.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button57294.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__57297 = om.core.get_props.call(null,self__.owner);
var map__57297__$1 = ((((!((map__57297 == null)))?((((map__57297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57297):map__57297);
var opts = cljs.core.get.call(null,map__57297__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__57297__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__57298 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__57298,(0),null);
var props = cljs.core.nth.call(null,vec__57298,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__57297,map__57297__$1,opts,children,vec__57298,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284){
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
});})(open_QMARK_,map__57297,map__57297__$1,opts,children,vec__57298,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__57297,map__57297__$1,opts,children,vec__57298,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__57297,map__57297__$1,opts,children,vec__57298,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284))
], null)),cljs.core.apply.call(null,React.DOM.span,({"className": "sr-only"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span(({"className": "caret"})));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__57297,map__57297__$1,opts,children,vec__57298,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284){
return (function (k){
var temp__4657__auto___57316 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto___57316)){
var f_57317 = temp__4657__auto___57316;
f_57317.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__57297,map__57297__$1,opts,children,vec__57298,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284))
;

om_bootstrap.button.t_om_bootstrap$button57294.getBasis = ((function (state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-checker57283","input-checker57283",465158497,null),new cljs.core.Symbol(null,"output-schema57281","output-schema57281",708968995,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor57278","constructor57278",-1495358063,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__37921__auto__","validate__37921__auto__",-900160587,null),new cljs.core.Symbol(null,"output-checker57284","output-checker57284",1747593177,null),new cljs.core.Symbol(null,"map57280","map57280",197171387,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__57285","G__57285",1127208763,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"input-schema57282","input-schema57282",-944850531,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta57295","meta57295",200447675,null)], null);
});})(state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284))
;

om_bootstrap.button.t_om_bootstrap$button57294.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button57294.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button57294";

om_bootstrap.button.t_om_bootstrap$button57294.cljs$lang$ctorPrWriter = ((function (state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284){
return (function (this__25357__auto__,writer__25358__auto__,opt__25359__auto__){
return cljs.core._write.call(null,writer__25358__auto__,"om-bootstrap.button/t_om_bootstrap$button57294");
});})(state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284))
;

om_bootstrap.button.__GT_t_om_bootstrap$button57294 = ((function (state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284){
return (function om_bootstrap$button$constructor57278_$___GT_t_om_bootstrap$button57294(input_checker57283__$1,output_schema57281__$1,owner__$1,constructor57278__$1,state__$1,validate__37921__auto____$1,output_checker57284__$1,map57280__$1,G__57285__$1,input_schema57282__$1,ufv____$1,meta57295){
return (new om_bootstrap.button.t_om_bootstrap$button57294(input_checker57283__$1,output_schema57281__$1,owner__$1,constructor57278__$1,state__$1,validate__37921__auto____$1,output_checker57284__$1,map57280__$1,G__57285__$1,input_schema57282__$1,ufv____$1,meta57295));
});})(state,owner,validate__37921__auto__,ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button57294(input_checker57283,output_schema57281,owner,om_bootstrap$button$constructor57278,state,validate__37921__auto__,output_checker57284,map57280,G__57285,input_schema57282,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57318 = output_checker57284.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57318)){
var error__37923__auto___57319 = temp__4657__auto___57318;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor57278","constructor57278",-1495358063,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57319)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57281,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57319], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv__,output_schema57281,input_schema57282,input_checker57283,output_checker57284))
,schema.core.make_fn_schema.call(null,output_schema57281,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57282], null)));
})();
/**
 * Generates a split button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__43054__auto___57312){
return (function om_bootstrap$button$split_STAR_(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57320 = arguments.length;
var i__25827__auto___57321 = (0);
while(true){
if((i__25827__auto___57321 < len__25826__auto___57320)){
args__25833__auto__.push((arguments[i__25827__auto___57321]));

var G__57322 = (i__25827__auto___57321 + (1));
i__25827__auto___57321 = G__57322;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((2) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25834__auto__);
});})(component_fnk__43054__auto___57312))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__43054__auto___57312){
return (function (data__43055__auto__,owner57277,p__57305){
var vec__57306 = p__57305;
var opts__43056__auto__ = cljs.core.nth.call(null,vec__57306,(0),null);
return component_fnk__43054__auto___57312.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner57277),new cljs.core.Keyword(null,"opts","opts",155075701),opts__43056__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner57277,new cljs.core.Keyword(null,"data","data",-232669377),data__43055__auto__], null));
});})(component_fnk__43054__auto___57312))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__43054__auto___57312){
return (function (seq57302){
var G__57303 = cljs.core.first.call(null,seq57302);
var seq57302__$1 = cljs.core.next.call(null,seq57302);
var G__57304 = cljs.core.first.call(null,seq57302__$1);
var seq57302__$2 = cljs.core.next.call(null,seq57302__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__57303,G__57304,seq57302__$2);
});})(component_fnk__43054__auto___57312))
;


om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(var_args){
var args57309 = [];
var len__25826__auto___57323 = arguments.length;
var i__25827__auto___57324 = (0);
while(true){
if((i__25827__auto___57324 < len__25826__auto___57323)){
args57309.push((arguments[i__25827__auto___57324]));

var G__57325 = (i__25827__auto___57324 + (1));
i__25827__auto___57324 = G__57325;
continue;
} else {
}
break;
}

var G__57311 = args57309.length;
switch (G__57311) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57309.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__43023__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__43023__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__43023__auto__,m57279){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__43023__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m57279));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___57335 = schema.utils.use_fn_validation;
var output_schema57327_57336 = schema.core.Any;
var input_schema57328_57337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SplitButton","SplitButton",1856385687,null)], null))),schema.core.Any], null);
var input_checker57329_57338 = schema.core.checker.call(null,input_schema57328_57337);
var output_checker57330_57339 = schema.core.checker.call(null,output_schema57327_57336);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___57335,output_schema57327_57336,input_schema57328_57337,input_checker57329_57338,output_checker57330_57339){
return (function om_bootstrap$button$split(var_args){
var args__25833__auto__ = [];
var len__25826__auto___57340 = arguments.length;
var i__25827__auto___57341 = (0);
while(true){
if((i__25827__auto___57341 < len__25826__auto___57340)){
args__25833__auto__.push((arguments[i__25827__auto___57341]));

var G__57342 = (i__25827__auto___57341 + (1));
i__25827__auto___57341 = G__57342;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___57335,output_schema57327_57336,input_schema57328_57337,input_checker57329_57338,output_checker57330_57339))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___57335,output_schema57327_57336,input_schema57328_57337,input_checker57329_57338,output_checker57330_57339){
return (function (G__57331,rest57332){
var validate__37921__auto__ = ufv___57335.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___57343 = cljs.core.list_STAR_.call(null,G__57331,rest57332);
var temp__4657__auto___57344 = input_checker57329_57338.call(null,args__37922__auto___57343);
if(cljs.core.truth_(temp__4657__auto___57344)){
var error__37923__auto___57345 = temp__4657__auto___57344;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57345)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57328_57337,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___57343,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57345], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var opts = G__57331;
var children = rest57332;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___57346 = output_checker57330_57339.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___57346)){
var error__37923__auto___57347 = temp__4657__auto___57346;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37923__auto___57347)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57327_57336,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___57347], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___57335,output_schema57327_57336,input_schema57328_57337,input_checker57329_57338,output_checker57330_57339))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___57335,output_schema57327_57336,input_schema57328_57337,input_checker57329_57338,output_checker57330_57339){
return (function (seq57333){
var G__57334 = cljs.core.first.call(null,seq57333);
var seq57333__$1 = cljs.core.next.call(null,seq57333);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__57334,seq57333__$1);
});})(ufv___57335,output_schema57327_57336,input_schema57328_57337,input_checker57329_57338,output_checker57330_57339))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema57327_57336,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57328_57337], null)));

//# sourceMappingURL=button.js.map?rel=1477762309010