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
var ufv___81255 = schema.utils.use_fn_validation;
var output_schema81244_81256 = om_bootstrap.types.Component;
var input_schema81245_81257 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null))),schema.core.Any], null);
var input_checker81246_81258 = schema.core.checker.call(null,input_schema81245_81257);
var output_checker81247_81259 = schema.core.checker.call(null,output_schema81244_81256);
/**
 * Inputs: [opts :- Grid & children]
 *   Returns: t/Component
 * 
 *   Generates a wrapper for a bootstrap grid.
 */
om_bootstrap.grid.grid = ((function (ufv___81255,output_schema81244_81256,input_schema81245_81257,input_checker81246_81258,output_checker81247_81259){
return (function om_bootstrap$grid$grid(var_args){
var args__25833__auto__ = [];
var len__25826__auto___81260 = arguments.length;
var i__25827__auto___81261 = (0);
while(true){
if((i__25827__auto___81261 < len__25826__auto___81260)){
args__25833__auto__.push((arguments[i__25827__auto___81261]));

var G__81262 = (i__25827__auto___81261 + (1));
i__25827__auto___81261 = G__81262;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___81255,output_schema81244_81256,input_schema81245_81257,input_checker81246_81258,output_checker81247_81259))
;

om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___81255,output_schema81244_81256,input_schema81245_81257,input_checker81246_81258,output_checker81247_81259){
return (function (G__81248,rest81249){
var validate__38286__auto__ = ufv___81255.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___81263 = cljs.core.list_STAR_.call(null,G__81248,rest81249);
var temp__4657__auto___81264 = input_checker81246_81258.call(null,args__38287__auto___81263);
if(cljs.core.truth_(temp__4657__auto___81264)){
var error__38288__auto___81265 = temp__4657__auto___81264;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__38288__auto___81265)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema81245_81257,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___81263,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81265], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__81248;
var children = rest81249;
while(true){
var vec__81252 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__81252,(0),null);
var props = cljs.core.nth.call(null,vec__81252,(1),null);
var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___81266 = output_checker81247_81259.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___81266)){
var error__38288__auto___81267 = temp__4657__auto___81266;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__38288__auto___81267)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema81244_81256,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81267], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___81255,output_schema81244_81256,input_schema81245_81257,input_checker81246_81258,output_checker81247_81259))
;

om_bootstrap.grid.grid.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.grid.cljs$lang$applyTo = ((function (ufv___81255,output_schema81244_81256,input_schema81245_81257,input_checker81246_81258,output_checker81247_81259){
return (function (seq81250){
var G__81251 = cljs.core.first.call(null,seq81250);
var seq81250__$1 = cljs.core.next.call(null,seq81250);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic(G__81251,seq81250__$1);
});})(ufv___81255,output_schema81244_81256,input_schema81245_81257,input_checker81246_81258,output_checker81247_81259))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.grid),schema.core.make_fn_schema.call(null,output_schema81244_81256,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema81245_81257], null)));
var ufv___81276 = schema.utils.use_fn_validation;
var output_schema81268_81277 = om_bootstrap.types.Component;
var input_schema81269_81278 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker81270_81279 = schema.core.checker.call(null,input_schema81269_81278);
var output_checker81271_81280 = schema.core.checker.call(null,output_schema81268_81277);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap row element.
 */
om_bootstrap.grid.row = ((function (ufv___81276,output_schema81268_81277,input_schema81269_81278,input_checker81270_81279,output_checker81271_81280){
return (function om_bootstrap$grid$row(var_args){
var args__25833__auto__ = [];
var len__25826__auto___81281 = arguments.length;
var i__25827__auto___81282 = (0);
while(true){
if((i__25827__auto___81282 < len__25826__auto___81281)){
args__25833__auto__.push((arguments[i__25827__auto___81282]));

var G__81283 = (i__25827__auto___81282 + (1));
i__25827__auto___81282 = G__81283;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___81276,output_schema81268_81277,input_schema81269_81278,input_checker81270_81279,output_checker81271_81280))
;

om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___81276,output_schema81268_81277,input_schema81269_81278,input_checker81270_81279,output_checker81271_81280){
return (function (G__81272,rest81273){
var validate__38286__auto__ = ufv___81276.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___81284 = cljs.core.list_STAR_.call(null,G__81272,rest81273);
var temp__4657__auto___81285 = input_checker81270_81279.call(null,args__38287__auto___81284);
if(cljs.core.truth_(temp__4657__auto___81285)){
var error__38288__auto___81286 = temp__4657__auto___81285;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__38288__auto___81286)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema81269_81278,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___81284,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81286], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__81272;
var children = rest81273;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___81287 = output_checker81271_81280.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___81287)){
var error__38288__auto___81288 = temp__4657__auto___81287;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__38288__auto___81288)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema81268_81277,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81288], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___81276,output_schema81268_81277,input_schema81269_81278,input_checker81270_81279,output_checker81271_81280))
;

om_bootstrap.grid.row.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.row.cljs$lang$applyTo = ((function (ufv___81276,output_schema81268_81277,input_schema81269_81278,input_checker81270_81279,output_checker81271_81280){
return (function (seq81274){
var G__81275 = cljs.core.first.call(null,seq81274);
var seq81274__$1 = cljs.core.next.call(null,seq81274);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(G__81275,seq81274__$1);
});})(ufv___81276,output_schema81268_81277,input_schema81269_81278,input_checker81270_81279,output_checker81271_81280))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.row),schema.core.make_fn_schema.call(null,output_schema81268_81277,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema81269_81278], null)));
var ufv___81304 = schema.utils.use_fn_validation;
var output_schema81289_81305 = om_bootstrap.types.Component;
var input_schema81290_81306 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Col,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Col","Col",1039814105,null)], null))),schema.core.Any], null);
var input_checker81291_81307 = schema.core.checker.call(null,input_schema81290_81306);
var output_checker81292_81308 = schema.core.checker.call(null,output_schema81289_81305);
/**
 * Inputs: [opts :- Col & children]
 *   Returns: t/Component
 * 
 *   Generates a Bootstrap column element.
 */
om_bootstrap.grid.col = ((function (ufv___81304,output_schema81289_81305,input_schema81290_81306,input_checker81291_81307,output_checker81292_81308){
return (function om_bootstrap$grid$col(var_args){
var args__25833__auto__ = [];
var len__25826__auto___81309 = arguments.length;
var i__25827__auto___81310 = (0);
while(true){
if((i__25827__auto___81310 < len__25826__auto___81309)){
args__25833__auto__.push((arguments[i__25827__auto___81310]));

var G__81311 = (i__25827__auto___81310 + (1));
i__25827__auto___81310 = G__81311;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});})(ufv___81304,output_schema81289_81305,input_schema81290_81306,input_checker81291_81307,output_checker81292_81308))
;

om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___81304,output_schema81289_81305,input_schema81290_81306,input_checker81291_81307,output_checker81292_81308){
return (function (G__81293,rest81294){
var validate__38286__auto__ = ufv___81304.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___81312 = cljs.core.list_STAR_.call(null,G__81293,rest81294);
var temp__4657__auto___81313 = input_checker81291_81307.call(null,args__38287__auto___81312);
if(cljs.core.truth_(temp__4657__auto___81313)){
var error__38288__auto___81314 = temp__4657__auto___81313;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__38288__auto___81314)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema81290_81306,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___81312,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81314], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var opts = G__81293;
var children = rest81294;
while(true){
var vec__81297 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__81297,(0),null);
var props = cljs.core.nth.call(null,vec__81297,(1),null);
var class$ = om_tools.dom.class_set.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (vec__81297,bs,props,validate__38286__auto__,ufv___81304,output_schema81289_81305,input_schema81290_81306,input_checker81291_81307,output_checker81292_81308){
return (function (p__81300){
var vec__81301 = p__81300;
var k = cljs.core.nth.call(null,vec__81301,(0),null);
var v = cljs.core.nth.call(null,vec__81301,(1),null);
return [cljs.core.str("col-"),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-"),cljs.core.str(v)].join('');
});})(vec__81297,bs,props,validate__38286__auto__,ufv___81304,output_schema81289_81305,input_schema81290_81306,input_checker81291_81307,output_checker81292_81308))
,cljs.core.select_keys.call(null,bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.call(null,true)));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___81315 = output_checker81292_81308.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___81315)){
var error__38288__auto___81316 = temp__4657__auto___81315;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__38288__auto___81316)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema81289_81305,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___81316], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___81304,output_schema81289_81305,input_schema81290_81306,input_checker81291_81307,output_checker81292_81308))
;

om_bootstrap.grid.col.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.col.cljs$lang$applyTo = ((function (ufv___81304,output_schema81289_81305,input_schema81290_81306,input_checker81291_81307,output_checker81292_81308){
return (function (seq81295){
var G__81296 = cljs.core.first.call(null,seq81295);
var seq81295__$1 = cljs.core.next.call(null,seq81295);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(G__81296,seq81295__$1);
});})(ufv___81304,output_schema81289_81305,input_schema81290_81306,input_checker81291_81307,output_checker81292_81308))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.col),schema.core.make_fn_schema.call(null,output_schema81289_81305,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema81290_81306], null)));

//# sourceMappingURL=grid.js.map?rel=1478402664667