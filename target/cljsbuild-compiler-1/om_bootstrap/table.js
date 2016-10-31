// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.table');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om.core');
om_bootstrap.table.Table = cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"striped?","striped?",-797214979)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bordered?","bordered?",562358476)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"condensed?","condensed?",-109797520)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"responsive?","responsive?",-683696941)),schema.core.Bool], true, false);
var ufv___35651 = schema.utils.use_fn_validation;
var output_schema35640_35652 = schema.core.Any;
var input_schema35641_35653 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.table.Table,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Table","Table",1594602603,null)], null))),schema.core.Any], null);
var input_checker35642_35654 = schema.core.checker.call(null,input_schema35641_35653);
var output_checker35643_35655 = schema.core.checker.call(null,output_schema35640_35652);
/**
 * Inputs: [opts :- Table & children]
 * 
 *   Generates a Bootstrap table wrapper.
 */
om_bootstrap.table.table = ((function (ufv___35651,output_schema35640_35652,input_schema35641_35653,input_checker35642_35654,output_checker35643_35655){
return (function om_bootstrap$table$table(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35656 = arguments.length;
var i__7480__auto___35657 = (0);
while(true){
if((i__7480__auto___35657 < len__7479__auto___35656)){
args__7486__auto__.push((arguments[i__7480__auto___35657]));

var G__35658 = (i__7480__auto___35657 + (1));
i__7480__auto___35657 = G__35658;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});})(ufv___35651,output_schema35640_35652,input_schema35641_35653,input_checker35642_35654,output_checker35643_35655))
;

om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___35651,output_schema35640_35652,input_schema35641_35653,input_checker35642_35654,output_checker35643_35655){
return (function (G__35644,rest35645){
var validate__8009__auto__ = ufv___35651.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35659 = cljs.core.list_STAR_.call(null,G__35644,rest35645);
var temp__4657__auto___35660 = input_checker35642_35654.call(null,args__8010__auto___35659);
if(cljs.core.truth_(temp__4657__auto___35660)){
var error__8011__auto___35661 = temp__4657__auto___35660;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"table","table",1075588491,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap table wrapper."], null)),cljs.core.pr_str.call(null,error__8011__auto___35661)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35641_35653,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35659,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35661], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var opts = G__35644;
var children = rest35645;
while(true){
var vec__35648 = om_bootstrap.types.separate.call(null,om_bootstrap.table.Table,opts);
var bs = cljs.core.nth.call(null,vec__35648,(0),null);
var props = cljs.core.nth.call(null,vec__35648,(1),null);
var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"table","table",-564943036),true,new cljs.core.Keyword(null,"table-striped","table-striped",-120331850),new cljs.core.Keyword(null,"striped?","striped?",-797214979).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"table-bordered","table-bordered",382462305),new cljs.core.Keyword(null,"bordered?","bordered?",562358476).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"table-condensed","table-condensed",716299039),new cljs.core.Keyword(null,"condensed?","condensed?",-109797520).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"table-hover","table-hover",486607258),new cljs.core.Keyword(null,"hover?","hover?",-1201331489).cljs$core$IFn$_invoke$arity$1(opts)], null);
var props__$1 = om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses)], null));
var table = om_tools.dom.element.call(null,React.DOM.table,props__$1,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"responsive?","responsive?",-683696941).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.apply.call(null,React.DOM.div,({"className": "table-responsive"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[table],null))));
} else {
return table;
}
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35662 = output_checker35643_35655.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35662)){
var error__8011__auto___35663 = temp__4657__auto___35662;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"table","table",1075588491,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap table wrapper."], null)),cljs.core.pr_str.call(null,error__8011__auto___35663)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35640_35652,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35663], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35651,output_schema35640_35652,input_schema35641_35653,input_checker35642_35654,output_checker35643_35655))
;

om_bootstrap.table.table.cljs$lang$maxFixedArity = (1);

om_bootstrap.table.table.cljs$lang$applyTo = ((function (ufv___35651,output_schema35640_35652,input_schema35641_35653,input_checker35642_35654,output_checker35643_35655){
return (function (seq35646){
var G__35647 = cljs.core.first.call(null,seq35646);
var seq35646__$1 = cljs.core.next.call(null,seq35646);
return om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic(G__35647,seq35646__$1);
});})(ufv___35651,output_schema35640_35652,input_schema35641_35653,input_checker35642_35654,output_checker35643_35655))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.table.table),schema.core.make_fn_schema.call(null,output_schema35640_35652,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35641_35653], null)));

//# sourceMappingURL=table.js.map