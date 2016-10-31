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
var ufv___35321 = schema.utils.use_fn_validation;
var output_schema35315_35322 = schema.core.Any;
var input_schema35316_35323 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker35317_35324 = schema.core.checker.call(null,input_schema35316_35323);
var output_checker35318_35325 = schema.core.checker.call(null,output_schema35315_35322);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___35321,output_schema35315_35322,input_schema35316_35323,input_checker35317_35324,output_checker35318_35325){
return (function om_bootstrap$button$render_anchor(G__35319,G__35320){
var validate__8009__auto__ = ufv___35321.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35326 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35319,G__35320], null);
var temp__4657__auto___35327 = input_checker35317_35324.call(null,args__8010__auto___35326);
if(cljs.core.truth_(temp__4657__auto___35327)){
var error__8011__auto___35328 = temp__4657__auto___35327;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35328)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35316_35323,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35326,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35328], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35319;
var children = G__35320;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35329 = output_checker35318_35325.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35329)){
var error__8011__auto___35330 = temp__4657__auto___35329;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35330)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35315_35322,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35330], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35321,output_schema35315_35322,input_schema35316_35323,input_checker35317_35324,output_checker35318_35325))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema35315_35322,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35316_35323], null)));
var ufv___35342 = schema.utils.use_fn_validation;
var output_schema35331_35343 = om_bootstrap.types.Component;
var input_schema35332_35344 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Button","Button",-1787718586,null)], null))),schema.core.Any], null);
var input_checker35333_35345 = schema.core.checker.call(null,input_schema35332_35344);
var output_checker35334_35346 = schema.core.checker.call(null,output_schema35331_35343);
/**
 * Inputs: [props :- Button & children]
 *   Returns: t/Component
 * 
 *   Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___35342,output_schema35331_35343,input_schema35332_35344,input_checker35333_35345,output_checker35334_35346){
return (function om_bootstrap$button$button(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35347 = arguments.length;
var i__7480__auto___35348 = (0);
while(true){
if((i__7480__auto___35348 < len__7479__auto___35347)){
args__7486__auto__.push((arguments[i__7480__auto___35348]));

var G__35349 = (i__7480__auto___35348 + (1));
i__7480__auto___35348 = G__35349;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35342,output_schema35331_35343,input_schema35332_35344,input_checker35333_35345,output_checker35334_35346))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35342,output_schema35331_35343,input_schema35332_35344,input_checker35333_35345,output_checker35334_35346){
return (function (G__35335,rest35336){
var validate__8009__auto__ = ufv___35342.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35350 = cljs.core.list_STAR_.call(null,G__35335,rest35336);
var temp__4657__auto___35351 = input_checker35333_35345.call(null,args__8010__auto___35350);
if(cljs.core.truth_(temp__4657__auto___35351)){
var error__8011__auto___35352 = temp__4657__auto___35351;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__8011__auto___35352)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35332_35344,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35350,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35352], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var props = G__35335;
var children = rest35336;
while(true){
var vec__35339 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__35339,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__35339,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,({"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)))}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__6404__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
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
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35353 = output_checker35334_35346.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35353)){
var error__8011__auto___35354 = temp__4657__auto___35353;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__8011__auto___35354)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35331_35343,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35354], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35342,output_schema35331_35343,input_schema35332_35344,input_checker35333_35345,output_checker35334_35346))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___35342,output_schema35331_35343,input_schema35332_35344,input_checker35333_35345,output_checker35334_35346){
return (function (seq35337){
var G__35338 = cljs.core.first.call(null,seq35337);
var seq35337__$1 = cljs.core.next.call(null,seq35337);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__35338,seq35337__$1);
});})(ufv___35342,output_schema35331_35343,input_schema35332_35344,input_checker35333_35345,output_checker35334_35346))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema35331_35343,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35332_35344], null)));
var ufv___35366 = schema.utils.use_fn_validation;
var output_schema35355_35367 = om_bootstrap.types.Component;
var input_schema35356_35368 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker35357_35369 = schema.core.checker.call(null,input_schema35356_35368);
var output_checker35358_35370 = schema.core.checker.call(null,output_schema35355_35367);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___35366,output_schema35355_35367,input_schema35356_35368,input_checker35357_35369,output_checker35358_35370){
return (function om_bootstrap$button$toolbar(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35371 = arguments.length;
var i__7480__auto___35372 = (0);
while(true){
if((i__7480__auto___35372 < len__7479__auto___35371)){
args__7486__auto__.push((arguments[i__7480__auto___35372]));

var G__35373 = (i__7480__auto___35372 + (1));
i__7480__auto___35372 = G__35373;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35366,output_schema35355_35367,input_schema35356_35368,input_checker35357_35369,output_checker35358_35370))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35366,output_schema35355_35367,input_schema35356_35368,input_checker35357_35369,output_checker35358_35370){
return (function (G__35359,rest35360){
var validate__8009__auto__ = ufv___35366.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35374 = cljs.core.list_STAR_.call(null,G__35359,rest35360);
var temp__4657__auto___35375 = input_checker35357_35369.call(null,args__8010__auto___35374);
if(cljs.core.truth_(temp__4657__auto___35375)){
var error__8011__auto___35376 = temp__4657__auto___35375;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__8011__auto___35376)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35356_35368,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35374,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35376], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35359;
var children = rest35360;
while(true){
var vec__35363 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__35363,(0),null);
var props = cljs.core.nth.call(null,vec__35363,(1),null);
return cljs.core.apply.call(null,React.DOM.div,({"role": "toolbar", "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs)))}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35377 = output_checker35358_35370.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35377)){
var error__8011__auto___35378 = temp__4657__auto___35377;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__8011__auto___35378)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35355_35367,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35378], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35366,output_schema35355_35367,input_schema35356_35368,input_checker35357_35369,output_checker35358_35370))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___35366,output_schema35355_35367,input_schema35356_35368,input_checker35357_35369,output_checker35358_35370){
return (function (seq35361){
var G__35362 = cljs.core.first.call(null,seq35361);
var seq35361__$1 = cljs.core.next.call(null,seq35361);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__35362,seq35361__$1);
});})(ufv___35366,output_schema35355_35367,input_schema35356_35368,input_checker35357_35369,output_checker35358_35370))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema35355_35367,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35356_35368], null)));
var ufv___35390 = schema.utils.use_fn_validation;
var output_schema35379_35391 = om_bootstrap.types.Component;
var input_schema35380_35392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null)], null))),schema.core.Any], null);
var input_checker35381_35393 = schema.core.checker.call(null,input_schema35380_35392);
var output_checker35382_35394 = schema.core.checker.call(null,output_schema35379_35391);
/**
 * Inputs: [opts :- ButtonGroup & children]
 *   Returns: t/Component
 * 
 *   Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___35390,output_schema35379_35391,input_schema35380_35392,input_checker35381_35393,output_checker35382_35394){
return (function om_bootstrap$button$button_group(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35395 = arguments.length;
var i__7480__auto___35396 = (0);
while(true){
if((i__7480__auto___35396 < len__7479__auto___35395)){
args__7486__auto__.push((arguments[i__7480__auto___35396]));

var G__35397 = (i__7480__auto___35396 + (1));
i__7480__auto___35396 = G__35397;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35390,output_schema35379_35391,input_schema35380_35392,input_checker35381_35393,output_checker35382_35394))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35390,output_schema35379_35391,input_schema35380_35392,input_checker35381_35393,output_checker35382_35394){
return (function (G__35383,rest35384){
var validate__8009__auto__ = ufv___35390.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35398 = cljs.core.list_STAR_.call(null,G__35383,rest35384);
var temp__4657__auto___35399 = input_checker35381_35393.call(null,args__8010__auto___35398);
if(cljs.core.truth_(temp__4657__auto___35399)){
var error__8011__auto___35400 = temp__4657__auto___35399;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__8011__auto___35400)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35380_35392,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35398,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35400], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35383;
var children = rest35384;
while(true){
var vec__35387 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__35387,(0),null);
var props = cljs.core.nth.call(null,vec__35387,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35401 = output_checker35382_35394.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35401)){
var error__8011__auto___35402 = temp__4657__auto___35401;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__8011__auto___35402)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35379_35391,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35402], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35390,output_schema35379_35391,input_schema35380_35392,input_checker35381_35393,output_checker35382_35394))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___35390,output_schema35379_35391,input_schema35380_35392,input_checker35381_35393,output_checker35382_35394){
return (function (seq35385){
var G__35386 = cljs.core.first.call(null,seq35385);
var seq35385__$1 = cljs.core.next.call(null,seq35385);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__35386,seq35385__$1);
});})(ufv___35390,output_schema35379_35391,input_schema35380_35392,input_checker35381_35393,output_checker35382_35394))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema35379_35391,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35380_35392], null)));
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

var component_fnk__22985__auto___35438 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema35407 = schema.core.Any;
var input_schema35408 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map35406","map35406",1913161068,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker35409 = schema.core.checker.call(null,input_schema35408);
var output_checker35410 = schema.core.checker.call(null,output_schema35407);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410){
return (function om_bootstrap$button$constructor35404(G__35411){
var validate__8009__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35439 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35411], null);
var temp__4657__auto___35440 = input_checker35409.call(null,args__8010__auto___35439);
if(cljs.core.truth_(temp__4657__auto___35440)){
var error__8011__auto___35441 = temp__4657__auto___35440;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor35404","constructor35404",-1432091103,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35441)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35408,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35439,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35441], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var map35406 = G__35411;
while(true){
if(cljs.core.map_QMARK_.call(null,map35406)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map35406)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map35406,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button35420 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button35420 = (function (output_checker35410,constructor35404,owner,input_checker35409,map35406,output_schema35407,validate__8009__auto__,G__35411,input_schema35408,ufv__,meta35421){
this.output_checker35410 = output_checker35410;
this.constructor35404 = constructor35404;
this.owner = owner;
this.input_checker35409 = input_checker35409;
this.map35406 = map35406;
this.output_schema35407 = output_schema35407;
this.validate__8009__auto__ = validate__8009__auto__;
this.G__35411 = G__35411;
this.input_schema35408 = input_schema35408;
this.ufv__ = ufv__;
this.meta35421 = meta35421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button35420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__8009__auto__,ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410){
return (function (_35422,meta35421__$1){
var self__ = this;
var _35422__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button35420(self__.output_checker35410,self__.constructor35404,self__.owner,self__.input_checker35409,self__.map35406,self__.output_schema35407,self__.validate__8009__auto__,self__.G__35411,self__.input_schema35408,self__.ufv__,meta35421__$1));
});})(owner,validate__8009__auto__,ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410))
;

om_bootstrap.button.t_om_bootstrap$button35420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__8009__auto__,ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410){
return (function (_35422){
var self__ = this;
var _35422__$1 = this;
return self__.meta35421;
});})(owner,validate__8009__auto__,ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410))
;

om_bootstrap.button.t_om_bootstrap$button35420.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button35420.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__8009__auto__,ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__8009__auto__,ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410))
;

om_bootstrap.button.t_om_bootstrap$button35420.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button35420.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__8009__auto__,ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__35423 = om.core.get_props.call(null,self__.owner);
var map__35423__$1 = ((((!((map__35423 == null)))?((((map__35423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35423):map__35423);
var opts = cljs.core.get.call(null,map__35423__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__35423__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__35424 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__35424,(0),null);
var props = cljs.core.nth.call(null,vec__35424,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__35423,map__35423__$1,opts,children,vec__35424,bs,props,classes,___$1,owner,validate__8009__auto__,ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410){
return (function (e){
var temp__4657__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var on_select = temp__4657__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__35423,map__35423__$1,opts,children,vec__35424,bs,props,classes,___$1,owner,validate__8009__auto__,ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410))
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
});})(owner,validate__8009__auto__,ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410))
;

om_bootstrap.button.t_om_bootstrap$button35420.getBasis = ((function (owner,validate__8009__auto__,ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-checker35410","output-checker35410",-873223008,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor35404","constructor35404",-1432091103,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker35409","input-checker35409",-408866359,null),new cljs.core.Symbol(null,"map35406","map35406",1913161068,null),new cljs.core.Symbol(null,"output-schema35407","output-schema35407",-1742546770,null),new cljs.core.Symbol(null,"validate__8009__auto__","validate__8009__auto__",-1286401962,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__35411","G__35411",47942902,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"input-schema35408","input-schema35408",991454936,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta35421","meta35421",-923693297,null)], null);
});})(owner,validate__8009__auto__,ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410))
;

om_bootstrap.button.t_om_bootstrap$button35420.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button35420.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button35420";

om_bootstrap.button.t_om_bootstrap$button35420.cljs$lang$ctorPrWriter = ((function (owner,validate__8009__auto__,ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"om-bootstrap.button/t_om_bootstrap$button35420");
});})(owner,validate__8009__auto__,ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410))
;

om_bootstrap.button.__GT_t_om_bootstrap$button35420 = ((function (owner,validate__8009__auto__,ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410){
return (function om_bootstrap$button$constructor35404_$___GT_t_om_bootstrap$button35420(output_checker35410__$1,constructor35404__$1,owner__$1,input_checker35409__$1,map35406__$1,output_schema35407__$1,validate__8009__auto____$1,G__35411__$1,input_schema35408__$1,ufv____$1,meta35421){
return (new om_bootstrap.button.t_om_bootstrap$button35420(output_checker35410__$1,constructor35404__$1,owner__$1,input_checker35409__$1,map35406__$1,output_schema35407__$1,validate__8009__auto____$1,G__35411__$1,input_schema35408__$1,ufv____$1,meta35421));
});})(owner,validate__8009__auto__,ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button35420(output_checker35410,om_bootstrap$button$constructor35404,owner,input_checker35409,map35406,output_schema35407,validate__8009__auto__,G__35411,input_schema35408,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35442 = output_checker35410.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35442)){
var error__8011__auto___35443 = temp__4657__auto___35442;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor35404","constructor35404",-1432091103,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35443)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35407,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35443], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv__,output_schema35407,input_schema35408,input_checker35409,output_checker35410))
,schema.core.make_fn_schema.call(null,output_schema35407,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35408], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 *   wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__22985__auto___35438){
return (function om_bootstrap$button$menu_item_STAR_(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35444 = arguments.length;
var i__7480__auto___35445 = (0);
while(true){
if((i__7480__auto___35445 < len__7479__auto___35444)){
args__7486__auto__.push((arguments[i__7480__auto___35445]));

var G__35446 = (i__7480__auto___35445 + (1));
i__7480__auto___35445 = G__35446;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((2) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7487__auto__);
});})(component_fnk__22985__auto___35438))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__22985__auto___35438){
return (function (data__22986__auto__,owner35403,p__35431){
var vec__35432 = p__35431;
var opts__22987__auto__ = cljs.core.nth.call(null,vec__35432,(0),null);
return component_fnk__22985__auto___35438.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__22987__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner35403,new cljs.core.Keyword(null,"data","data",-232669377),data__22986__auto__], null));
});})(component_fnk__22985__auto___35438))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__22985__auto___35438){
return (function (seq35428){
var G__35429 = cljs.core.first.call(null,seq35428);
var seq35428__$1 = cljs.core.next.call(null,seq35428);
var G__35430 = cljs.core.first.call(null,seq35428__$1);
var seq35428__$2 = cljs.core.next.call(null,seq35428__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__35429,G__35430,seq35428__$2);
});})(component_fnk__22985__auto___35438))
;


om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(var_args){
var args35435 = [];
var len__7479__auto___35447 = arguments.length;
var i__7480__auto___35448 = (0);
while(true){
if((i__7480__auto___35448 < len__7479__auto___35447)){
args35435.push((arguments[i__7480__auto___35448]));

var G__35449 = (i__7480__auto___35448 + (1));
i__7480__auto___35448 = G__35449;
continue;
} else {
}
break;
}

var G__35437 = args35435.length;
switch (G__35437) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35435.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22954__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__22954__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22954__auto__,m35405){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__22954__auto__,m35405);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___35459 = schema.utils.use_fn_validation;
var output_schema35451_35460 = om_bootstrap.types.Component;
var input_schema35452_35461 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"MenuItem","MenuItem",1235363736,null)], null))),schema.core.Any], null);
var input_checker35453_35462 = schema.core.checker.call(null,input_schema35452_35461);
var output_checker35454_35463 = schema.core.checker.call(null,output_schema35451_35460);
/**
 * Inputs: [opts :- MenuItem & children]
 *   Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___35459,output_schema35451_35460,input_schema35452_35461,input_checker35453_35462,output_checker35454_35463){
return (function om_bootstrap$button$menu_item(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35464 = arguments.length;
var i__7480__auto___35465 = (0);
while(true){
if((i__7480__auto___35465 < len__7479__auto___35464)){
args__7486__auto__.push((arguments[i__7480__auto___35465]));

var G__35466 = (i__7480__auto___35465 + (1));
i__7480__auto___35465 = G__35466;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35459,output_schema35451_35460,input_schema35452_35461,input_checker35453_35462,output_checker35454_35463))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35459,output_schema35451_35460,input_schema35452_35461,input_checker35453_35462,output_checker35454_35463){
return (function (G__35455,rest35456){
var validate__8009__auto__ = ufv___35459.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35467 = cljs.core.list_STAR_.call(null,G__35455,rest35456);
var temp__4657__auto___35468 = input_checker35453_35462.call(null,args__8010__auto___35467);
if(cljs.core.truth_(temp__4657__auto___35468)){
var error__8011__auto___35469 = temp__4657__auto___35468;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35469)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35452_35461,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35467,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35469], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35455;
var children = rest35456;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35470 = output_checker35454_35463.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35470)){
var error__8011__auto___35471 = temp__4657__auto___35470;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35471)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35451_35460,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35471], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35459,output_schema35451_35460,input_schema35452_35461,input_checker35453_35462,output_checker35454_35463))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___35459,output_schema35451_35460,input_schema35452_35461,input_checker35453_35462,output_checker35454_35463){
return (function (seq35457){
var G__35458 = cljs.core.first.call(null,seq35457);
var seq35457__$1 = cljs.core.next.call(null,seq35457);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__35458,seq35457__$1);
});})(ufv___35459,output_schema35451_35460,input_schema35452_35461,input_checker35453_35462,output_checker35454_35463))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema35451_35460,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35452_35461], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___35484 = schema.utils.use_fn_validation;
var output_schema35473_35485 = om_bootstrap.types.Component;
var input_schema35474_35486 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownMenu","DropdownMenu",881901742,null)], null))),schema.core.Any], null);
var input_checker35475_35487 = schema.core.checker.call(null,input_schema35474_35486);
var output_checker35476_35488 = schema.core.checker.call(null,output_schema35473_35485);
/**
 * Inputs: [opts :- DropdownMenu & children]
 *   Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___35484,output_schema35473_35485,input_schema35474_35486,input_checker35475_35487,output_checker35476_35488){
return (function om_bootstrap$button$dropdown_menu(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35489 = arguments.length;
var i__7480__auto___35490 = (0);
while(true){
if((i__7480__auto___35490 < len__7479__auto___35489)){
args__7486__auto__.push((arguments[i__7480__auto___35490]));

var G__35491 = (i__7480__auto___35490 + (1));
i__7480__auto___35490 = G__35491;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35484,output_schema35473_35485,input_schema35474_35486,input_checker35475_35487,output_checker35476_35488))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35484,output_schema35473_35485,input_schema35474_35486,input_checker35475_35487,output_checker35476_35488){
return (function (G__35477,rest35478){
var validate__8009__auto__ = ufv___35484.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35492 = cljs.core.list_STAR_.call(null,G__35477,rest35478);
var temp__4657__auto___35493 = input_checker35475_35487.call(null,args__8010__auto___35492);
if(cljs.core.truth_(temp__4657__auto___35493)){
var error__8011__auto___35494 = temp__4657__auto___35493;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35494)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35474_35486,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35492,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35494], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35477;
var children = rest35478;
while(true){
var vec__35481 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__35481,(0),null);
var props = cljs.core.nth.call(null,vec__35481,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4655__auto__)){
var on_select = temp__4655__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4655__auto__,vec__35481,bs,props,classes,ul_attrs,validate__8009__auto__,ufv___35484,output_schema35473_35485,input_schema35474_35486,input_checker35475_35487,output_checker35476_35488){
return (function (p1__35472_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__35472_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4655__auto__,vec__35481,bs,props,classes,ul_attrs,validate__8009__auto__,ufv___35484,output_schema35473_35485,input_schema35474_35486,input_checker35475_35487,output_checker35476_35488))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35495 = output_checker35476_35488.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35495)){
var error__8011__auto___35496 = temp__4657__auto___35495;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35496)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35473_35485,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35496], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35484,output_schema35473_35485,input_schema35474_35486,input_checker35475_35487,output_checker35476_35488))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___35484,output_schema35473_35485,input_schema35474_35486,input_checker35475_35487,output_checker35476_35488){
return (function (seq35479){
var G__35480 = cljs.core.first.call(null,seq35479);
var seq35479__$1 = cljs.core.next.call(null,seq35479);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__35480,seq35479__$1);
});})(ufv___35484,output_schema35473_35485,input_schema35474_35486,input_checker35475_35487,output_checker35476_35488))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema35473_35485,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35474_35486], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__22956__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__22956__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__22956__auto__;
})();

var component_fnk__22985__auto___35533 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema35502 = schema.core.Any;
var input_schema35503 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map35501","map35501",1886353794,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker35504 = schema.core.checker.call(null,input_schema35503);
var output_checker35505 = schema.core.checker.call(null,output_schema35502);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505){
return (function om_bootstrap$button$constructor35499(G__35506){
var validate__8009__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35506], null);
var temp__4657__auto___35535 = input_checker35504.call(null,args__8010__auto___35534);
if(cljs.core.truth_(temp__4657__auto___35535)){
var error__8011__auto___35536 = temp__4657__auto___35535;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor35499","constructor35499",1273262901,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35536)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35503,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35534,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35536], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var map35501 = G__35506;
while(true){
if(cljs.core.map_QMARK_.call(null,map35501)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map35501)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map35501,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map35501,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button35515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button35515 = (function (map35501,output_schema35502,input_checker35504,owner,output_checker35505,state,constructor35499,validate__8009__auto__,G__35506,input_schema35503,ufv__,meta35516){
this.map35501 = map35501;
this.output_schema35502 = output_schema35502;
this.input_checker35504 = input_checker35504;
this.owner = owner;
this.output_checker35505 = output_checker35505;
this.state = state;
this.constructor35499 = constructor35499;
this.validate__8009__auto__ = validate__8009__auto__;
this.G__35506 = G__35506;
this.input_schema35503 = input_schema35503;
this.ufv__ = ufv__;
this.meta35516 = meta35516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button35515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505){
return (function (_35517,meta35516__$1){
var self__ = this;
var _35517__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button35515(self__.map35501,self__.output_schema35502,self__.input_checker35504,self__.owner,self__.output_checker35505,self__.state,self__.constructor35499,self__.validate__8009__auto__,self__.G__35506,self__.input_schema35503,self__.ufv__,meta35516__$1));
});})(state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505))
;

om_bootstrap.button.t_om_bootstrap$button35515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505){
return (function (_35517){
var self__ = this;
var _35517__$1 = this;
return self__.meta35516;
});})(state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505))
;

om_bootstrap.button.t_om_bootstrap$button35515.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button35515.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505))
;

om_bootstrap.button.t_om_bootstrap$button35515.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button35515.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__35518 = om.core.get_props.call(null,self__.owner);
var map__35518__$1 = ((((!((map__35518 == null)))?((((map__35518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35518):map__35518);
var opts = cljs.core.get.call(null,map__35518__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__35518__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__35519 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__35519,(0),null);
var props = cljs.core.nth.call(null,vec__35519,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__35518,map__35518__$1,opts,children,vec__35519,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__35518,map__35518__$1,opts,children,vec__35519,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505))
], null);
var update_child_props = ((function (open_QMARK_,map__35518,map__35518__$1,opts,children,vec__35519,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__6404__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__35518,map__35518__$1,opts,children,vec__35519,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505){
return (function (key){
var temp__4655__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4655__auto__)){
var os = temp__4655__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__35518,map__35518__$1,opts,children,vec__35519,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__35518,map__35518__$1,opts,children,vec__35519,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span(({"className": "caret"}))),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__35518,map__35518__$1,opts,children,vec__35519,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505){
return (function (p1__35497_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__35497_SHARP_,update_child_props);
});})(open_QMARK_,map__35518,map__35518__$1,opts,children,vec__35519,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505))
,children))], null));
});})(state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505))
;

om_bootstrap.button.t_om_bootstrap$button35515.getBasis = ((function (state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map35501","map35501",1886353794,null),new cljs.core.Symbol(null,"output-schema35502","output-schema35502",1971823234,null),new cljs.core.Symbol(null,"input-checker35504","input-checker35504",-1511579613,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker35505","output-checker35505",-1437256430,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor35499","constructor35499",1273262901,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__8009__auto__","validate__8009__auto__",-1286401962,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__35506","G__35506",-864040999,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"input-schema35503","input-schema35503",-779206885,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta35516","meta35516",998372031,null)], null);
});})(state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505))
;

om_bootstrap.button.t_om_bootstrap$button35515.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button35515.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button35515";

om_bootstrap.button.t_om_bootstrap$button35515.cljs$lang$ctorPrWriter = ((function (state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"om-bootstrap.button/t_om_bootstrap$button35515");
});})(state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505))
;

om_bootstrap.button.__GT_t_om_bootstrap$button35515 = ((function (state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505){
return (function om_bootstrap$button$constructor35499_$___GT_t_om_bootstrap$button35515(map35501__$1,output_schema35502__$1,input_checker35504__$1,owner__$1,output_checker35505__$1,state__$1,constructor35499__$1,validate__8009__auto____$1,G__35506__$1,input_schema35503__$1,ufv____$1,meta35516){
return (new om_bootstrap.button.t_om_bootstrap$button35515(map35501__$1,output_schema35502__$1,input_checker35504__$1,owner__$1,output_checker35505__$1,state__$1,constructor35499__$1,validate__8009__auto____$1,G__35506__$1,input_schema35503__$1,ufv____$1,meta35516));
});})(state,owner,validate__8009__auto__,ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button35515(map35501,output_schema35502,input_checker35504,owner,output_checker35505,state,om_bootstrap$button$constructor35499,validate__8009__auto__,G__35506,input_schema35503,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35537 = output_checker35505.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35537)){
var error__8011__auto___35538 = temp__4657__auto___35537;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor35499","constructor35499",1273262901,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35538)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35502,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35538], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv__,output_schema35502,input_schema35503,input_checker35504,output_checker35505))
,schema.core.make_fn_schema.call(null,output_schema35502,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35503], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__22985__auto___35533){
return (function om_bootstrap$button$dropdown_STAR_(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35539 = arguments.length;
var i__7480__auto___35540 = (0);
while(true){
if((i__7480__auto___35540 < len__7479__auto___35539)){
args__7486__auto__.push((arguments[i__7480__auto___35540]));

var G__35541 = (i__7480__auto___35540 + (1));
i__7480__auto___35540 = G__35541;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((2) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7487__auto__);
});})(component_fnk__22985__auto___35533))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__22985__auto___35533){
return (function (data__22986__auto__,owner35498,p__35526){
var vec__35527 = p__35526;
var opts__22987__auto__ = cljs.core.nth.call(null,vec__35527,(0),null);
return component_fnk__22985__auto___35533.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner35498),new cljs.core.Keyword(null,"opts","opts",155075701),opts__22987__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner35498,new cljs.core.Keyword(null,"data","data",-232669377),data__22986__auto__], null));
});})(component_fnk__22985__auto___35533))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__22985__auto___35533){
return (function (seq35523){
var G__35524 = cljs.core.first.call(null,seq35523);
var seq35523__$1 = cljs.core.next.call(null,seq35523);
var G__35525 = cljs.core.first.call(null,seq35523__$1);
var seq35523__$2 = cljs.core.next.call(null,seq35523__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__35524,G__35525,seq35523__$2);
});})(component_fnk__22985__auto___35533))
;


om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(var_args){
var args35530 = [];
var len__7479__auto___35542 = arguments.length;
var i__7480__auto___35543 = (0);
while(true){
if((i__7480__auto___35543 < len__7479__auto___35542)){
args35530.push((arguments[i__7480__auto___35543]));

var G__35544 = (i__7480__auto___35543 + (1));
i__7480__auto___35543 = G__35544;
continue;
} else {
}
break;
}

var G__35532 = args35530.length;
switch (G__35532) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35530.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22954__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__22954__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22954__auto__,m35500){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__22954__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m35500));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___35554 = schema.utils.use_fn_validation;
var output_schema35546_35555 = om_bootstrap.types.Component;
var input_schema35547_35556 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownButton","DropdownButton",251375015,null)], null))),schema.core.Any], null);
var input_checker35548_35557 = schema.core.checker.call(null,input_schema35547_35556);
var output_checker35549_35558 = schema.core.checker.call(null,output_schema35546_35555);
/**
 * Inputs: [opts :- DropdownButton & children]
 *   Returns: t/Component
 * 
 *   Returns a dropdown button component. The component manages its own
 *   dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___35554,output_schema35546_35555,input_schema35547_35556,input_checker35548_35557,output_checker35549_35558){
return (function om_bootstrap$button$dropdown(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35559 = arguments.length;
var i__7480__auto___35560 = (0);
while(true){
if((i__7480__auto___35560 < len__7479__auto___35559)){
args__7486__auto__.push((arguments[i__7480__auto___35560]));

var G__35561 = (i__7480__auto___35560 + (1));
i__7480__auto___35560 = G__35561;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35554,output_schema35546_35555,input_schema35547_35556,input_checker35548_35557,output_checker35549_35558))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35554,output_schema35546_35555,input_schema35547_35556,input_checker35548_35557,output_checker35549_35558){
return (function (G__35550,rest35551){
var validate__8009__auto__ = ufv___35554.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35562 = cljs.core.list_STAR_.call(null,G__35550,rest35551);
var temp__4657__auto___35563 = input_checker35548_35557.call(null,args__8010__auto___35562);
if(cljs.core.truth_(temp__4657__auto___35563)){
var error__8011__auto___35564 = temp__4657__auto___35563;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__8011__auto___35564)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35547_35556,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35562,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35564], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35550;
var children = rest35551;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35565 = output_checker35549_35558.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35565)){
var error__8011__auto___35566 = temp__4657__auto___35565;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__8011__auto___35566)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35546_35555,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35566], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35554,output_schema35546_35555,input_schema35547_35556,input_checker35548_35557,output_checker35549_35558))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___35554,output_schema35546_35555,input_schema35547_35556,input_checker35548_35557,output_checker35549_35558){
return (function (seq35552){
var G__35553 = cljs.core.first.call(null,seq35552);
var seq35552__$1 = cljs.core.next.call(null,seq35552);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__35553,seq35552__$1);
});})(ufv___35554,output_schema35546_35555,input_schema35547_35556,input_checker35548_35557,output_checker35549_35558))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema35546_35555,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35547_35556], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__22956__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__22956__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__22956__auto__;
})();

var component_fnk__22985__auto___35602 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema35571 = schema.core.Any;
var input_schema35572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map35570","map35570",451001198,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker35573 = schema.core.checker.call(null,input_schema35572);
var output_checker35574 = schema.core.checker.call(null,output_schema35571);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574){
return (function om_bootstrap$button$constructor35568(G__35575){
var validate__8009__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35575], null);
var temp__4657__auto___35604 = input_checker35573.call(null,args__8010__auto___35603);
if(cljs.core.truth_(temp__4657__auto___35604)){
var error__8011__auto___35605 = temp__4657__auto___35604;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor35568","constructor35568",1295502413,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35605)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35572,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35603,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35605], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var map35570 = G__35575;
while(true){
if(cljs.core.map_QMARK_.call(null,map35570)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map35570)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map35570,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map35570,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button35584 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button35584 = (function (owner,constructor35568,map35570,output_checker35574,state,validate__8009__auto__,input_checker35573,output_schema35571,input_schema35572,ufv__,G__35575,meta35585){
this.owner = owner;
this.constructor35568 = constructor35568;
this.map35570 = map35570;
this.output_checker35574 = output_checker35574;
this.state = state;
this.validate__8009__auto__ = validate__8009__auto__;
this.input_checker35573 = input_checker35573;
this.output_schema35571 = output_schema35571;
this.input_schema35572 = input_schema35572;
this.ufv__ = ufv__;
this.G__35575 = G__35575;
this.meta35585 = meta35585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button35584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574){
return (function (_35586,meta35585__$1){
var self__ = this;
var _35586__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button35584(self__.owner,self__.constructor35568,self__.map35570,self__.output_checker35574,self__.state,self__.validate__8009__auto__,self__.input_checker35573,self__.output_schema35571,self__.input_schema35572,self__.ufv__,self__.G__35575,meta35585__$1));
});})(state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574))
;

om_bootstrap.button.t_om_bootstrap$button35584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574){
return (function (_35586){
var self__ = this;
var _35586__$1 = this;
return self__.meta35585;
});})(state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574))
;

om_bootstrap.button.t_om_bootstrap$button35584.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button35584.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574))
;

om_bootstrap.button.t_om_bootstrap$button35584.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button35584.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__35587 = om.core.get_props.call(null,self__.owner);
var map__35587__$1 = ((((!((map__35587 == null)))?((((map__35587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35587):map__35587);
var opts = cljs.core.get.call(null,map__35587__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__35587__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__35588 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__35588,(0),null);
var props = cljs.core.nth.call(null,vec__35588,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__35587,map__35587__$1,opts,children,vec__35588,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574){
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
});})(open_QMARK_,map__35587,map__35587__$1,opts,children,vec__35588,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__35587,map__35587__$1,opts,children,vec__35588,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__35587,map__35587__$1,opts,children,vec__35588,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574))
], null)),cljs.core.apply.call(null,React.DOM.span,({"className": "sr-only"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span(({"className": "caret"})));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__35587,map__35587__$1,opts,children,vec__35588,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574){
return (function (k){
var temp__4657__auto___35606 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto___35606)){
var f_35607 = temp__4657__auto___35606;
f_35607.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__35587,map__35587__$1,opts,children,vec__35588,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574))
;

om_bootstrap.button.t_om_bootstrap$button35584.getBasis = ((function (state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor35568","constructor35568",1295502413,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map35570","map35570",451001198,null),new cljs.core.Symbol(null,"output-checker35574","output-checker35574",-425211053,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__8009__auto__","validate__8009__auto__",-1286401962,null),new cljs.core.Symbol(null,"input-checker35573","input-checker35573",-554858888,null),new cljs.core.Symbol(null,"output-schema35571","output-schema35571",1773042906,null),new cljs.core.Symbol(null,"input-schema35572","input-schema35572",-339858918,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__35575","G__35575",1303048223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"meta35585","meta35585",-642856004,null)], null);
});})(state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574))
;

om_bootstrap.button.t_om_bootstrap$button35584.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button35584.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button35584";

om_bootstrap.button.t_om_bootstrap$button35584.cljs$lang$ctorPrWriter = ((function (state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"om-bootstrap.button/t_om_bootstrap$button35584");
});})(state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574))
;

om_bootstrap.button.__GT_t_om_bootstrap$button35584 = ((function (state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574){
return (function om_bootstrap$button$constructor35568_$___GT_t_om_bootstrap$button35584(owner__$1,constructor35568__$1,map35570__$1,output_checker35574__$1,state__$1,validate__8009__auto____$1,input_checker35573__$1,output_schema35571__$1,input_schema35572__$1,ufv____$1,G__35575__$1,meta35585){
return (new om_bootstrap.button.t_om_bootstrap$button35584(owner__$1,constructor35568__$1,map35570__$1,output_checker35574__$1,state__$1,validate__8009__auto____$1,input_checker35573__$1,output_schema35571__$1,input_schema35572__$1,ufv____$1,G__35575__$1,meta35585));
});})(state,owner,validate__8009__auto__,ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button35584(owner,om_bootstrap$button$constructor35568,map35570,output_checker35574,state,validate__8009__auto__,input_checker35573,output_schema35571,input_schema35572,ufv__,G__35575,null));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35608 = output_checker35574.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35608)){
var error__8011__auto___35609 = temp__4657__auto___35608;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor35568","constructor35568",1295502413,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35609)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35571,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35609], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv__,output_schema35571,input_schema35572,input_checker35573,output_checker35574))
,schema.core.make_fn_schema.call(null,output_schema35571,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35572], null)));
})();
/**
 * Generates a split button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__22985__auto___35602){
return (function om_bootstrap$button$split_STAR_(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35610 = arguments.length;
var i__7480__auto___35611 = (0);
while(true){
if((i__7480__auto___35611 < len__7479__auto___35610)){
args__7486__auto__.push((arguments[i__7480__auto___35611]));

var G__35612 = (i__7480__auto___35611 + (1));
i__7480__auto___35611 = G__35612;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((2) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7487__auto__);
});})(component_fnk__22985__auto___35602))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__22985__auto___35602){
return (function (data__22986__auto__,owner35567,p__35595){
var vec__35596 = p__35595;
var opts__22987__auto__ = cljs.core.nth.call(null,vec__35596,(0),null);
return component_fnk__22985__auto___35602.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner35567),new cljs.core.Keyword(null,"opts","opts",155075701),opts__22987__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner35567,new cljs.core.Keyword(null,"data","data",-232669377),data__22986__auto__], null));
});})(component_fnk__22985__auto___35602))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__22985__auto___35602){
return (function (seq35592){
var G__35593 = cljs.core.first.call(null,seq35592);
var seq35592__$1 = cljs.core.next.call(null,seq35592);
var G__35594 = cljs.core.first.call(null,seq35592__$1);
var seq35592__$2 = cljs.core.next.call(null,seq35592__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__35593,G__35594,seq35592__$2);
});})(component_fnk__22985__auto___35602))
;


om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(var_args){
var args35599 = [];
var len__7479__auto___35613 = arguments.length;
var i__7480__auto___35614 = (0);
while(true){
if((i__7480__auto___35614 < len__7479__auto___35613)){
args35599.push((arguments[i__7480__auto___35614]));

var G__35615 = (i__7480__auto___35614 + (1));
i__7480__auto___35614 = G__35615;
continue;
} else {
}
break;
}

var G__35601 = args35599.length;
switch (G__35601) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35599.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22954__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__22954__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22954__auto__,m35569){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__22954__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m35569));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___35625 = schema.utils.use_fn_validation;
var output_schema35617_35626 = schema.core.Any;
var input_schema35618_35627 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SplitButton","SplitButton",1856385687,null)], null))),schema.core.Any], null);
var input_checker35619_35628 = schema.core.checker.call(null,input_schema35618_35627);
var output_checker35620_35629 = schema.core.checker.call(null,output_schema35617_35626);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___35625,output_schema35617_35626,input_schema35618_35627,input_checker35619_35628,output_checker35620_35629){
return (function om_bootstrap$button$split(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35630 = arguments.length;
var i__7480__auto___35631 = (0);
while(true){
if((i__7480__auto___35631 < len__7479__auto___35630)){
args__7486__auto__.push((arguments[i__7480__auto___35631]));

var G__35632 = (i__7480__auto___35631 + (1));
i__7480__auto___35631 = G__35632;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35625,output_schema35617_35626,input_schema35618_35627,input_checker35619_35628,output_checker35620_35629))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35625,output_schema35617_35626,input_schema35618_35627,input_checker35619_35628,output_checker35620_35629){
return (function (G__35621,rest35622){
var validate__8009__auto__ = ufv___35625.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35633 = cljs.core.list_STAR_.call(null,G__35621,rest35622);
var temp__4657__auto___35634 = input_checker35619_35628.call(null,args__8010__auto___35633);
if(cljs.core.truth_(temp__4657__auto___35634)){
var error__8011__auto___35635 = temp__4657__auto___35634;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35635)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35618_35627,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35633,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35635], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35621;
var children = rest35622;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35636 = output_checker35620_35629.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35636)){
var error__8011__auto___35637 = temp__4657__auto___35636;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___35637)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35617_35626,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35637], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35625,output_schema35617_35626,input_schema35618_35627,input_checker35619_35628,output_checker35620_35629))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___35625,output_schema35617_35626,input_schema35618_35627,input_checker35619_35628,output_checker35620_35629){
return (function (seq35623){
var G__35624 = cljs.core.first.call(null,seq35623);
var seq35623__$1 = cljs.core.next.call(null,seq35623);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__35624,seq35623__$1);
});})(ufv___35625,output_schema35617_35626,input_schema35618_35627,input_checker35619_35628,output_checker35620_35629))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema35617_35626,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35618_35627], null)));

//# sourceMappingURL=button.js.map