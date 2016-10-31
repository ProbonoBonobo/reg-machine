// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.grid');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('schema.core');
om_bootstrap.grid.Grid = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fluid?","fluid?",-742121890)),schema.core.Bool], true, false));
om_bootstrap.grid.col_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"md-pull","md-pull",979081250),null,new cljs.core.Keyword(null,"lg","lg",-80787836),null,new cljs.core.Keyword(null,"lg-push","lg-push",606284103),null,new cljs.core.Keyword(null,"sm","sm",-1402575065),null,new cljs.core.Keyword(null,"lg-pull","lg-pull",70082794),null,new cljs.core.Keyword(null,"xs-push","xs-push",-1878478835),null,new cljs.core.Keyword(null,"xs","xs",649443341),null,new cljs.core.Keyword(null,"sm-offset","sm-offset",229619439),null,new cljs.core.Keyword(null,"sm-pull","sm-pull",-368259600),null,new cljs.core.Keyword(null,"lg-offset","lg-offset",-429200045),null,new cljs.core.Keyword(null,"md-push","md-push",288470810),null,new cljs.core.Keyword(null,"sm-push","sm-push",1835708573),null,new cljs.core.Keyword(null,"md-offset","md-offset",1274386877),null,new cljs.core.Keyword(null,"xs-pull","xs-pull",-132686786),null,new cljs.core.Keyword(null,"md","md",707286655),null,new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),null], null), null);
om_bootstrap.grid.Col = om_bootstrap.types.bootstrap.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,schema.core.optional_key,om_bootstrap.grid.col_keys),cljs.core.repeat.call(null,schema.core.Int)));
var ufv___33124 = schema.utils.use_fn_validation;
var output_schema33113_33125 = om_bootstrap.types.Component;
var input_schema33114_33126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null))),schema.core.Any], null);
var input_checker33115_33127 = schema.core.checker.call(null,input_schema33114_33126);
var output_checker33116_33128 = schema.core.checker.call(null,output_schema33113_33125);
/**
 * Inputs: [opts :- Grid & children]
 *   Returns: t/Component
 * 
 *   Generates a wrapper for a bootstrap grid.
 */
om_bootstrap.grid.grid = ((function (ufv___33124,output_schema33113_33125,input_schema33114_33126,input_checker33115_33127,output_checker33116_33128){
return (function om_bootstrap$grid$grid(var_args){
var args__7486__auto__ = [];
var len__7479__auto___33129 = arguments.length;
var i__7480__auto___33130 = (0);
while(true){
if((i__7480__auto___33130 < len__7479__auto___33129)){
args__7486__auto__.push((arguments[i__7480__auto___33130]));

var G__33131 = (i__7480__auto___33130 + (1));
i__7480__auto___33130 = G__33131;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___33124,output_schema33113_33125,input_schema33114_33126,input_checker33115_33127,output_checker33116_33128))
;

om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33124,output_schema33113_33125,input_schema33114_33126,input_checker33115_33127,output_checker33116_33128){
return (function (G__33117,rest33118){
var validate__8009__auto__ = ufv___33124.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___33132 = cljs.core.list_STAR_.call(null,G__33117,rest33118);
var temp__4657__auto___33133 = input_checker33115_33127.call(null,args__8010__auto___33132);
if(cljs.core.truth_(temp__4657__auto___33133)){
var error__8011__auto___33134 = temp__4657__auto___33133;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__8011__auto___33134)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33114_33126,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___33132,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___33134], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__33117;
var children = rest33118;
while(true){
var vec__33121 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__33121,(0),null);
var props = cljs.core.nth.call(null,vec__33121,(1),null);
var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___33135 = output_checker33116_33128.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___33135)){
var error__8011__auto___33136 = temp__4657__auto___33135;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__8011__auto___33136)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33113_33125,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___33136], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___33124,output_schema33113_33125,input_schema33114_33126,input_checker33115_33127,output_checker33116_33128))
;

om_bootstrap.grid.grid.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.grid.cljs$lang$applyTo = ((function (ufv___33124,output_schema33113_33125,input_schema33114_33126,input_checker33115_33127,output_checker33116_33128){
return (function (seq33119){
var G__33120 = cljs.core.first.call(null,seq33119);
var seq33119__$1 = cljs.core.next.call(null,seq33119);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic(G__33120,seq33119__$1);
});})(ufv___33124,output_schema33113_33125,input_schema33114_33126,input_checker33115_33127,output_checker33116_33128))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.grid),schema.core.make_fn_schema.call(null,output_schema33113_33125,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33114_33126], null)));
var ufv___33145 = schema.utils.use_fn_validation;
var output_schema33137_33146 = om_bootstrap.types.Component;
var input_schema33138_33147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker33139_33148 = schema.core.checker.call(null,input_schema33138_33147);
var output_checker33140_33149 = schema.core.checker.call(null,output_schema33137_33146);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap row element.
 */
om_bootstrap.grid.row = ((function (ufv___33145,output_schema33137_33146,input_schema33138_33147,input_checker33139_33148,output_checker33140_33149){
return (function om_bootstrap$grid$row(var_args){
var args__7486__auto__ = [];
var len__7479__auto___33150 = arguments.length;
var i__7480__auto___33151 = (0);
while(true){
if((i__7480__auto___33151 < len__7479__auto___33150)){
args__7486__auto__.push((arguments[i__7480__auto___33151]));

var G__33152 = (i__7480__auto___33151 + (1));
i__7480__auto___33151 = G__33152;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___33145,output_schema33137_33146,input_schema33138_33147,input_checker33139_33148,output_checker33140_33149))
;

om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33145,output_schema33137_33146,input_schema33138_33147,input_checker33139_33148,output_checker33140_33149){
return (function (G__33141,rest33142){
var validate__8009__auto__ = ufv___33145.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___33153 = cljs.core.list_STAR_.call(null,G__33141,rest33142);
var temp__4657__auto___33154 = input_checker33139_33148.call(null,args__8010__auto___33153);
if(cljs.core.truth_(temp__4657__auto___33154)){
var error__8011__auto___33155 = temp__4657__auto___33154;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__8011__auto___33155)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33138_33147,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___33153,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___33155], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__33141;
var children = rest33142;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___33156 = output_checker33140_33149.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___33156)){
var error__8011__auto___33157 = temp__4657__auto___33156;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__8011__auto___33157)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33137_33146,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___33157], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___33145,output_schema33137_33146,input_schema33138_33147,input_checker33139_33148,output_checker33140_33149))
;

om_bootstrap.grid.row.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.row.cljs$lang$applyTo = ((function (ufv___33145,output_schema33137_33146,input_schema33138_33147,input_checker33139_33148,output_checker33140_33149){
return (function (seq33143){
var G__33144 = cljs.core.first.call(null,seq33143);
var seq33143__$1 = cljs.core.next.call(null,seq33143);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(G__33144,seq33143__$1);
});})(ufv___33145,output_schema33137_33146,input_schema33138_33147,input_checker33139_33148,output_checker33140_33149))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.row),schema.core.make_fn_schema.call(null,output_schema33137_33146,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33138_33147], null)));
var ufv___33173 = schema.utils.use_fn_validation;
var output_schema33158_33174 = om_bootstrap.types.Component;
var input_schema33159_33175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Col,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Col","Col",1039814105,null)], null))),schema.core.Any], null);
var input_checker33160_33176 = schema.core.checker.call(null,input_schema33159_33175);
var output_checker33161_33177 = schema.core.checker.call(null,output_schema33158_33174);
/**
 * Inputs: [opts :- Col & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap column element.
 */
om_bootstrap.grid.col = ((function (ufv___33173,output_schema33158_33174,input_schema33159_33175,input_checker33160_33176,output_checker33161_33177){
return (function om_bootstrap$grid$col(var_args){
var args__7486__auto__ = [];
var len__7479__auto___33178 = arguments.length;
var i__7480__auto___33179 = (0);
while(true){
if((i__7480__auto___33179 < len__7479__auto___33178)){
args__7486__auto__.push((arguments[i__7480__auto___33179]));

var G__33180 = (i__7480__auto___33179 + (1));
i__7480__auto___33179 = G__33180;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___33173,output_schema33158_33174,input_schema33159_33175,input_checker33160_33176,output_checker33161_33177))
;

om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33173,output_schema33158_33174,input_schema33159_33175,input_checker33160_33176,output_checker33161_33177){
return (function (G__33162,rest33163){
var validate__8009__auto__ = ufv___33173.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___33181 = cljs.core.list_STAR_.call(null,G__33162,rest33163);
var temp__4657__auto___33182 = input_checker33160_33176.call(null,args__8010__auto___33181);
if(cljs.core.truth_(temp__4657__auto___33182)){
var error__8011__auto___33183 = temp__4657__auto___33182;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__8011__auto___33183)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33159_33175,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___33181,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___33183], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__33162;
var children = rest33163;
while(true){
var vec__33166 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__33166,(0),null);
var props = cljs.core.nth.call(null,vec__33166,(1),null);
var class$ = om_tools.dom.class_set.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (vec__33166,bs,props,validate__8009__auto__,ufv___33173,output_schema33158_33174,input_schema33159_33175,input_checker33160_33176,output_checker33161_33177){
return (function (p__33169){
var vec__33170 = p__33169;
var k = cljs.core.nth.call(null,vec__33170,(0),null);
var v = cljs.core.nth.call(null,vec__33170,(1),null);
return [cljs.core.str("col-"),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-"),cljs.core.str(v)].join('');
});})(vec__33166,bs,props,validate__8009__auto__,ufv___33173,output_schema33158_33174,input_schema33159_33175,input_checker33160_33176,output_checker33161_33177))
,cljs.core.select_keys.call(null,bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.call(null,true)));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___33184 = output_checker33161_33177.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___33184)){
var error__8011__auto___33185 = temp__4657__auto___33184;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__8011__auto___33185)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33158_33174,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___33185], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___33173,output_schema33158_33174,input_schema33159_33175,input_checker33160_33176,output_checker33161_33177))
;

om_bootstrap.grid.col.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.col.cljs$lang$applyTo = ((function (ufv___33173,output_schema33158_33174,input_schema33159_33175,input_checker33160_33176,output_checker33161_33177){
return (function (seq33164){
var G__33165 = cljs.core.first.call(null,seq33164);
var seq33164__$1 = cljs.core.next.call(null,seq33164);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(G__33165,seq33164__$1);
});})(ufv___33173,output_schema33158_33174,input_schema33159_33175,input_checker33160_33176,output_checker33161_33177))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.col),schema.core.make_fn_schema.call(null,output_schema33158_33174,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33159_33175], null)));

//# sourceMappingURL=grid.js.map