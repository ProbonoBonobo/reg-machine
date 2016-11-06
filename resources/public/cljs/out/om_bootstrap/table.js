// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.table');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om.core');
om_bootstrap.table.Table = cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"striped?","striped?",-797214979)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bordered?","bordered?",562358476)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"condensed?","condensed?",-109797520)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"responsive?","responsive?",-683696941)),schema.core.Bool], true, false);
var ufv___83416 = schema.utils.use_fn_validation;
var output_schema83405_83417 = schema.core.Any;
var input_schema83406_83418 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.table.Table,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Table","Table",1594602603,null)], null))),schema.core.Any], null);
var input_checker83407_83419 = schema.core.checker.call(null,input_schema83406_83418);
var output_checker83408_83420 = schema.core.checker.call(null,output_schema83405_83417);
/**
 * Inputs: [opts :- Table & children]
 * 
 *   Generates a Bootstrap table wrapper.
 */
om_bootstrap.table.table = ((function (ufv___83416,output_schema83405_83417,input_schema83406_83418,input_checker83407_83419,output_checker83408_83420){
return (function om_bootstrap$table$table(var_args){
var args__25833__auto__ = [];
var len__25826__auto___83421 = arguments.length;
var i__25827__auto___83422 = (0);
while(true){
if((i__25827__auto___83422 < len__25826__auto___83421)){
args__25833__auto__.push((arguments[i__25827__auto___83422]));

var G__83423 = (i__25827__auto___83422 + (1));
i__25827__auto___83422 = G__83423;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___83416,output_schema83405_83417,input_schema83406_83418,input_checker83407_83419,output_checker83408_83420))
;

om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___83416,output_schema83405_83417,input_schema83406_83418,input_checker83407_83419,output_checker83408_83420){
return (function (G__83409,rest83410){
var validate__38286__auto__ = ufv___83416.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83424 = cljs.core.list_STAR_.call(null,G__83409,rest83410);
var temp__4657__auto___83425 = input_checker83407_83419.call(null,args__38287__auto___83424);
if(cljs.core.truth_(temp__4657__auto___83425)){
var error__38288__auto___83426 = temp__4657__auto___83425;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"table","table",1075588491,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap table wrapper."], null)),cljs.core.pr_str.call(null,error__38288__auto___83426)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema83406_83418,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83424,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83426], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__83409;
var children = rest83410;
while(true){
var vec__83413 = om_bootstrap.types.separate.call(null,om_bootstrap.table.Table,opts);
var bs = cljs.core.nth.call(null,vec__83413,(0),null);
var props = cljs.core.nth.call(null,vec__83413,(1),null);
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
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83427 = output_checker83408_83420.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83427)){
var error__38288__auto___83428 = temp__4657__auto___83427;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"table","table",1075588491,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap table wrapper."], null)),cljs.core.pr_str.call(null,error__38288__auto___83428)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema83405_83417,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83428], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83416,output_schema83405_83417,input_schema83406_83418,input_checker83407_83419,output_checker83408_83420))
;

om_bootstrap.table.table.cljs$lang$maxFixedArity = (1);

om_bootstrap.table.table.cljs$lang$applyTo = ((function (ufv___83416,output_schema83405_83417,input_schema83406_83418,input_checker83407_83419,output_checker83408_83420){
return (function (seq83411){
var G__83412 = cljs.core.first.call(null,seq83411);
var seq83411__$1 = cljs.core.next.call(null,seq83411);
return om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic(G__83412,seq83411__$1);
});})(ufv___83416,output_schema83405_83417,input_schema83406_83418,input_checker83407_83419,output_checker83408_83420))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.table.table),schema.core.make_fn_schema.call(null,output_schema83405_83417,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema83406_83418], null)));

//# sourceMappingURL=table.js.map?rel=1478402678636