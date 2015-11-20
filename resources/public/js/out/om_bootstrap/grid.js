// Compiled by ClojureScript 1.7.122 {}
goog.provide('om_bootstrap.grid');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('schema.core');
om_bootstrap.grid.Grid = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fluid?","fluid?",-742121890)),schema.core.Bool], true, false));
om_bootstrap.grid.col_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"md-pull","md-pull",979081250),null,new cljs.core.Keyword(null,"lg","lg",-80787836),null,new cljs.core.Keyword(null,"lg-push","lg-push",606284103),null,new cljs.core.Keyword(null,"sm","sm",-1402575065),null,new cljs.core.Keyword(null,"lg-pull","lg-pull",70082794),null,new cljs.core.Keyword(null,"xs-push","xs-push",-1878478835),null,new cljs.core.Keyword(null,"xs","xs",649443341),null,new cljs.core.Keyword(null,"sm-offset","sm-offset",229619439),null,new cljs.core.Keyword(null,"sm-pull","sm-pull",-368259600),null,new cljs.core.Keyword(null,"lg-offset","lg-offset",-429200045),null,new cljs.core.Keyword(null,"md-push","md-push",288470810),null,new cljs.core.Keyword(null,"sm-push","sm-push",1835708573),null,new cljs.core.Keyword(null,"md-offset","md-offset",1274386877),null,new cljs.core.Keyword(null,"xs-pull","xs-pull",-132686786),null,new cljs.core.Keyword(null,"md","md",707286655),null,new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),null], null), null);
om_bootstrap.grid.Col = om_bootstrap.types.bootstrap.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,schema.core.optional_key,om_bootstrap.grid.col_keys),cljs.core.repeat.call(null,schema.core.Int)));
var ufv___36895 = schema.utils.use_fn_validation;
var output_schema36886_36896 = om_bootstrap.types.Component;
var input_schema36887_36897 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null))),schema.core.Any], null);
var input_checker36888_36898 = schema.core.checker.call(null,input_schema36887_36897);
var output_checker36889_36899 = schema.core.checker.call(null,output_schema36886_36896);
/**
 * Inputs: [opts :- Grid & children]
 *   Returns: t/Component
 * 
 *   Generates a wrapper for a bootstrap grid.
 */
om_bootstrap.grid.grid = ((function (ufv___36895,output_schema36886_36896,input_schema36887_36897,input_checker36888_36898,output_checker36889_36899){
return (function om_bootstrap$grid$grid(var_args){
var args__20266__auto__ = [];
var len__20259__auto___36900 = arguments.length;
var i__20260__auto___36901 = (0);
while(true){
if((i__20260__auto___36901 < len__20259__auto___36900)){
args__20266__auto__.push((arguments[i__20260__auto___36901]));

var G__36902 = (i__20260__auto___36901 + (1));
i__20260__auto___36901 = G__36902;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___36895,output_schema36886_36896,input_schema36887_36897,input_checker36888_36898,output_checker36889_36899))
;

om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___36895,output_schema36886_36896,input_schema36887_36897,input_checker36888_36898,output_checker36889_36899){
return (function (G__36890,rest36891){
var validate__20540__auto__ = ufv___36895.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___36903 = cljs.core.list_STAR_.call(null,G__36890,rest36891);
var temp__4425__auto___36904 = input_checker36888_36898.call(null,args__20541__auto___36903);
if(cljs.core.truth_(temp__4425__auto___36904)){
var error__20542__auto___36905 = temp__4425__auto___36904;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__20542__auto___36905)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36887_36897,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___36903,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36905], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__36890;
var children = rest36891;
while(true){
var vec__36894 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__36894,(0),null);
var props = cljs.core.nth.call(null,vec__36894,(1),null);
var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___36906 = output_checker36889_36899.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___36906)){
var error__20542__auto___36907 = temp__4425__auto___36906;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__20542__auto___36907)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36886_36896,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36907], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___36895,output_schema36886_36896,input_schema36887_36897,input_checker36888_36898,output_checker36889_36899))
;

om_bootstrap.grid.grid.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.grid.cljs$lang$applyTo = ((function (ufv___36895,output_schema36886_36896,input_schema36887_36897,input_checker36888_36898,output_checker36889_36899){
return (function (seq36892){
var G__36893 = cljs.core.first.call(null,seq36892);
var seq36892__$1 = cljs.core.next.call(null,seq36892);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic(G__36893,seq36892__$1);
});})(ufv___36895,output_schema36886_36896,input_schema36887_36897,input_checker36888_36898,output_checker36889_36899))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.grid),schema.core.make_fn_schema.call(null,output_schema36886_36896,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36887_36897], null)));
var ufv___36916 = schema.utils.use_fn_validation;
var output_schema36908_36917 = om_bootstrap.types.Component;
var input_schema36909_36918 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker36910_36919 = schema.core.checker.call(null,input_schema36909_36918);
var output_checker36911_36920 = schema.core.checker.call(null,output_schema36908_36917);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap row element.
 */
om_bootstrap.grid.row = ((function (ufv___36916,output_schema36908_36917,input_schema36909_36918,input_checker36910_36919,output_checker36911_36920){
return (function om_bootstrap$grid$row(var_args){
var args__20266__auto__ = [];
var len__20259__auto___36921 = arguments.length;
var i__20260__auto___36922 = (0);
while(true){
if((i__20260__auto___36922 < len__20259__auto___36921)){
args__20266__auto__.push((arguments[i__20260__auto___36922]));

var G__36923 = (i__20260__auto___36922 + (1));
i__20260__auto___36922 = G__36923;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___36916,output_schema36908_36917,input_schema36909_36918,input_checker36910_36919,output_checker36911_36920))
;

om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___36916,output_schema36908_36917,input_schema36909_36918,input_checker36910_36919,output_checker36911_36920){
return (function (G__36912,rest36913){
var validate__20540__auto__ = ufv___36916.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___36924 = cljs.core.list_STAR_.call(null,G__36912,rest36913);
var temp__4425__auto___36925 = input_checker36910_36919.call(null,args__20541__auto___36924);
if(cljs.core.truth_(temp__4425__auto___36925)){
var error__20542__auto___36926 = temp__4425__auto___36925;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__20542__auto___36926)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36909_36918,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___36924,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36926], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__36912;
var children = rest36913;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___36927 = output_checker36911_36920.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___36927)){
var error__20542__auto___36928 = temp__4425__auto___36927;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__20542__auto___36928)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36908_36917,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36928], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___36916,output_schema36908_36917,input_schema36909_36918,input_checker36910_36919,output_checker36911_36920))
;

om_bootstrap.grid.row.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.row.cljs$lang$applyTo = ((function (ufv___36916,output_schema36908_36917,input_schema36909_36918,input_checker36910_36919,output_checker36911_36920){
return (function (seq36914){
var G__36915 = cljs.core.first.call(null,seq36914);
var seq36914__$1 = cljs.core.next.call(null,seq36914);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(G__36915,seq36914__$1);
});})(ufv___36916,output_schema36908_36917,input_schema36909_36918,input_checker36910_36919,output_checker36911_36920))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.row),schema.core.make_fn_schema.call(null,output_schema36908_36917,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36909_36918], null)));
var ufv___36940 = schema.utils.use_fn_validation;
var output_schema36929_36941 = om_bootstrap.types.Component;
var input_schema36930_36942 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Col,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Col","Col",1039814105,null)], null))),schema.core.Any], null);
var input_checker36931_36943 = schema.core.checker.call(null,input_schema36930_36942);
var output_checker36932_36944 = schema.core.checker.call(null,output_schema36929_36941);
/**
 * Inputs: [opts :- Col & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap column element.
 */
om_bootstrap.grid.col = ((function (ufv___36940,output_schema36929_36941,input_schema36930_36942,input_checker36931_36943,output_checker36932_36944){
return (function om_bootstrap$grid$col(var_args){
var args__20266__auto__ = [];
var len__20259__auto___36945 = arguments.length;
var i__20260__auto___36946 = (0);
while(true){
if((i__20260__auto___36946 < len__20259__auto___36945)){
args__20266__auto__.push((arguments[i__20260__auto___36946]));

var G__36947 = (i__20260__auto___36946 + (1));
i__20260__auto___36946 = G__36947;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});})(ufv___36940,output_schema36929_36941,input_schema36930_36942,input_checker36931_36943,output_checker36932_36944))
;

om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___36940,output_schema36929_36941,input_schema36930_36942,input_checker36931_36943,output_checker36932_36944){
return (function (G__36933,rest36934){
var validate__20540__auto__ = ufv___36940.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___36948 = cljs.core.list_STAR_.call(null,G__36933,rest36934);
var temp__4425__auto___36949 = input_checker36931_36943.call(null,args__20541__auto___36948);
if(cljs.core.truth_(temp__4425__auto___36949)){
var error__20542__auto___36950 = temp__4425__auto___36949;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__20542__auto___36950)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36930_36942,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___36948,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36950], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var opts = G__36933;
var children = rest36934;
while(true){
var vec__36937 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__36937,(0),null);
var props = cljs.core.nth.call(null,vec__36937,(1),null);
var class$ = om_tools.dom.class_set.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (vec__36937,bs,props,validate__20540__auto__,ufv___36940,output_schema36929_36941,input_schema36930_36942,input_checker36931_36943,output_checker36932_36944){
return (function (p__36938){
var vec__36939 = p__36938;
var k = cljs.core.nth.call(null,vec__36939,(0),null);
var v = cljs.core.nth.call(null,vec__36939,(1),null);
return [cljs.core.str("col-"),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-"),cljs.core.str(v)].join('');
});})(vec__36937,bs,props,validate__20540__auto__,ufv___36940,output_schema36929_36941,input_schema36930_36942,input_checker36931_36943,output_checker36932_36944))
,cljs.core.select_keys.call(null,bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.call(null,true)));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___36951 = output_checker36932_36944.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___36951)){
var error__20542__auto___36952 = temp__4425__auto___36951;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__20542__auto___36952)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36929_36941,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___36952], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___36940,output_schema36929_36941,input_schema36930_36942,input_checker36931_36943,output_checker36932_36944))
;

om_bootstrap.grid.col.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.col.cljs$lang$applyTo = ((function (ufv___36940,output_schema36929_36941,input_schema36930_36942,input_checker36931_36943,output_checker36932_36944){
return (function (seq36935){
var G__36936 = cljs.core.first.call(null,seq36935);
var seq36935__$1 = cljs.core.next.call(null,seq36935);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(G__36936,seq36935__$1);
});})(ufv___36940,output_schema36929_36941,input_schema36930_36942,input_checker36931_36943,output_checker36932_36944))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.col),schema.core.make_fn_schema.call(null,output_schema36929_36941,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36930_36942], null)));

//# sourceMappingURL=grid.js.map?rel=1444632660881