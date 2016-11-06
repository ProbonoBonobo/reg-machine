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
var ufv___66895 = schema.utils.use_fn_validation;
var output_schema66884_66896 = om_bootstrap.types.Component;
var input_schema66885_66897 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null))),schema.core.Any], null);
var input_checker66886_66898 = schema.core.checker.call(null,input_schema66885_66897);
var output_checker66887_66899 = schema.core.checker.call(null,output_schema66884_66896);
/**
 * Inputs: [opts :- Grid & children]
 *   Returns: t/Component
 * 
 *   Generates a wrapper for a bootstrap grid.
 */
om_bootstrap.grid.grid = ((function (ufv___66895,output_schema66884_66896,input_schema66885_66897,input_checker66886_66898,output_checker66887_66899){
return (function om_bootstrap$grid$grid(var_args){
var args__25833__auto__ = [];
var len__25826__auto___66900 = arguments.length;
var i__25827__auto___66901 = (0);
while(true){
if((i__25827__auto___66901 < len__25826__auto___66900)){
args__25833__auto__.push((arguments[i__25827__auto___66901]));

var G__66902 = (i__25827__auto___66901 + (1));
i__25827__auto___66901 = G__66902;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___66895,output_schema66884_66896,input_schema66885_66897,input_checker66886_66898,output_checker66887_66899))
;

om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___66895,output_schema66884_66896,input_schema66885_66897,input_checker66886_66898,output_checker66887_66899){
return (function (G__66888,rest66889){
var validate__30368__auto__ = ufv___66895.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___66903 = cljs.core.list_STAR_.call(null,G__66888,rest66889);
var temp__4657__auto___66904 = input_checker66886_66898.call(null,args__30369__auto___66903);
if(cljs.core.truth_(temp__4657__auto___66904)){
var error__30370__auto___66905 = temp__4657__auto___66904;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__30370__auto___66905)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema66885_66897,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___66903,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66905], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__66888;
var children = rest66889;
while(true){
var vec__66892 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__66892,(0),null);
var props = cljs.core.nth.call(null,vec__66892,(1),null);
var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___66906 = output_checker66887_66899.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___66906)){
var error__30370__auto___66907 = temp__4657__auto___66906;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__30370__auto___66907)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema66884_66896,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66907], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___66895,output_schema66884_66896,input_schema66885_66897,input_checker66886_66898,output_checker66887_66899))
;

om_bootstrap.grid.grid.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.grid.cljs$lang$applyTo = ((function (ufv___66895,output_schema66884_66896,input_schema66885_66897,input_checker66886_66898,output_checker66887_66899){
return (function (seq66890){
var G__66891 = cljs.core.first.call(null,seq66890);
var seq66890__$1 = cljs.core.next.call(null,seq66890);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic(G__66891,seq66890__$1);
});})(ufv___66895,output_schema66884_66896,input_schema66885_66897,input_checker66886_66898,output_checker66887_66899))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.grid),schema.core.make_fn_schema.call(null,output_schema66884_66896,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema66885_66897], null)));
var ufv___66916 = schema.utils.use_fn_validation;
var output_schema66908_66917 = om_bootstrap.types.Component;
var input_schema66909_66918 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker66910_66919 = schema.core.checker.call(null,input_schema66909_66918);
var output_checker66911_66920 = schema.core.checker.call(null,output_schema66908_66917);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap row element.
 */
om_bootstrap.grid.row = ((function (ufv___66916,output_schema66908_66917,input_schema66909_66918,input_checker66910_66919,output_checker66911_66920){
return (function om_bootstrap$grid$row(var_args){
var args__25833__auto__ = [];
var len__25826__auto___66921 = arguments.length;
var i__25827__auto___66922 = (0);
while(true){
if((i__25827__auto___66922 < len__25826__auto___66921)){
args__25833__auto__.push((arguments[i__25827__auto___66922]));

var G__66923 = (i__25827__auto___66922 + (1));
i__25827__auto___66922 = G__66923;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___66916,output_schema66908_66917,input_schema66909_66918,input_checker66910_66919,output_checker66911_66920))
;

om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___66916,output_schema66908_66917,input_schema66909_66918,input_checker66910_66919,output_checker66911_66920){
return (function (G__66912,rest66913){
var validate__30368__auto__ = ufv___66916.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___66924 = cljs.core.list_STAR_.call(null,G__66912,rest66913);
var temp__4657__auto___66925 = input_checker66910_66919.call(null,args__30369__auto___66924);
if(cljs.core.truth_(temp__4657__auto___66925)){
var error__30370__auto___66926 = temp__4657__auto___66925;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__30370__auto___66926)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema66909_66918,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___66924,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66926], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__66912;
var children = rest66913;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___66927 = output_checker66911_66920.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___66927)){
var error__30370__auto___66928 = temp__4657__auto___66927;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__30370__auto___66928)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema66908_66917,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66928], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___66916,output_schema66908_66917,input_schema66909_66918,input_checker66910_66919,output_checker66911_66920))
;

om_bootstrap.grid.row.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.row.cljs$lang$applyTo = ((function (ufv___66916,output_schema66908_66917,input_schema66909_66918,input_checker66910_66919,output_checker66911_66920){
return (function (seq66914){
var G__66915 = cljs.core.first.call(null,seq66914);
var seq66914__$1 = cljs.core.next.call(null,seq66914);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(G__66915,seq66914__$1);
});})(ufv___66916,output_schema66908_66917,input_schema66909_66918,input_checker66910_66919,output_checker66911_66920))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.row),schema.core.make_fn_schema.call(null,output_schema66908_66917,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema66909_66918], null)));
var ufv___66944 = schema.utils.use_fn_validation;
var output_schema66929_66945 = om_bootstrap.types.Component;
var input_schema66930_66946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Col,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Col","Col",1039814105,null)], null))),schema.core.Any], null);
var input_checker66931_66947 = schema.core.checker.call(null,input_schema66930_66946);
var output_checker66932_66948 = schema.core.checker.call(null,output_schema66929_66945);
/**
 * Inputs: [opts :- Col & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap column element.
 */
om_bootstrap.grid.col = ((function (ufv___66944,output_schema66929_66945,input_schema66930_66946,input_checker66931_66947,output_checker66932_66948){
return (function om_bootstrap$grid$col(var_args){
var args__25833__auto__ = [];
var len__25826__auto___66949 = arguments.length;
var i__25827__auto___66950 = (0);
while(true){
if((i__25827__auto___66950 < len__25826__auto___66949)){
args__25833__auto__.push((arguments[i__25827__auto___66950]));

var G__66951 = (i__25827__auto___66950 + (1));
i__25827__auto___66950 = G__66951;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___66944,output_schema66929_66945,input_schema66930_66946,input_checker66931_66947,output_checker66932_66948))
;

om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___66944,output_schema66929_66945,input_schema66930_66946,input_checker66931_66947,output_checker66932_66948){
return (function (G__66933,rest66934){
var validate__30368__auto__ = ufv___66944.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___66952 = cljs.core.list_STAR_.call(null,G__66933,rest66934);
var temp__4657__auto___66953 = input_checker66931_66947.call(null,args__30369__auto___66952);
if(cljs.core.truth_(temp__4657__auto___66953)){
var error__30370__auto___66954 = temp__4657__auto___66953;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__30370__auto___66954)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema66930_66946,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___66952,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66954], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var opts = G__66933;
var children = rest66934;
while(true){
var vec__66937 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__66937,(0),null);
var props = cljs.core.nth.call(null,vec__66937,(1),null);
var class$ = om_tools.dom.class_set.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (vec__66937,bs,props,validate__30368__auto__,ufv___66944,output_schema66929_66945,input_schema66930_66946,input_checker66931_66947,output_checker66932_66948){
return (function (p__66940){
var vec__66941 = p__66940;
var k = cljs.core.nth.call(null,vec__66941,(0),null);
var v = cljs.core.nth.call(null,vec__66941,(1),null);
return [cljs.core.str("col-"),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-"),cljs.core.str(v)].join('');
});})(vec__66937,bs,props,validate__30368__auto__,ufv___66944,output_schema66929_66945,input_schema66930_66946,input_checker66931_66947,output_checker66932_66948))
,cljs.core.select_keys.call(null,bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.call(null,true)));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___66955 = output_checker66932_66948.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___66955)){
var error__30370__auto___66956 = temp__4657__auto___66955;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__30370__auto___66956)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema66929_66945,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___66956], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___66944,output_schema66929_66945,input_schema66930_66946,input_checker66931_66947,output_checker66932_66948))
;

om_bootstrap.grid.col.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.col.cljs$lang$applyTo = ((function (ufv___66944,output_schema66929_66945,input_schema66930_66946,input_checker66931_66947,output_checker66932_66948){
return (function (seq66935){
var G__66936 = cljs.core.first.call(null,seq66935);
var seq66935__$1 = cljs.core.next.call(null,seq66935);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(G__66936,seq66935__$1);
});})(ufv___66944,output_schema66929_66945,input_schema66930_66946,input_checker66931_66947,output_checker66932_66948))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.col),schema.core.make_fn_schema.call(null,output_schema66929_66945,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema66930_66946], null)));

//# sourceMappingURL=grid.js.map?rel=1478399640912