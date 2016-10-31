// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.core');
goog.require('schema.core');
/**
 * Returns a map that consists of the rest of the maps conj-ed onto
 *   the first.  If a key occurs in more than one map, the mapping(s)
 *   from the latter (left-to-right) will be combined with the mapping in
 *   the result by looking up the proper merge function and in the
 *   supplied map of key -> merge-fn and using that for the big merge. If
 *   a key doesn't have a merge function, the right value wins (as with
 *   merge).
 */
om_bootstrap.util.merge_with_fns = (function om_bootstrap$util$merge_with_fns(k__GT_fn,maps){
var merge_entry = (function om_bootstrap$util$merge_with_fns_$_merge_entry(m,e){
var k = cljs.core.key.call(null,e);
var v = cljs.core.val.call(null,e);
var temp__4655__auto__ = (function (){var and__6392__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__6392__auto__){
return k__GT_fn.call(null,k);
} else {
return and__6392__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function om_bootstrap$util$merge_with_fns_$_merge(m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__6404__auto__ = m1;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___32891 = schema.utils.use_fn_validation;
var output_schema32886_32892 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema32887_32893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker32888_32894 = schema.core.checker.call(null,input_schema32887_32893);
var output_checker32889_32895 = schema.core.checker.call(null,output_schema32886_32892);
/**
 * Inputs: [x :- s/Any]
 *   Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___32891,output_schema32886_32892,input_schema32887_32893,input_checker32888_32894,output_checker32889_32895){
return (function om_bootstrap$util$collectify(G__32890){
var validate__8009__auto__ = ufv___32891.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___32896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32890], null);
var temp__4657__auto___32897 = input_checker32888_32894.call(null,args__8010__auto___32896);
if(cljs.core.truth_(temp__4657__auto___32897)){
var error__8011__auto___32898 = temp__4657__auto___32897;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__8011__auto___32898)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32887_32893,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___32896,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___32898], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var x = G__32890;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___32899 = output_checker32889_32895.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___32899)){
var error__8011__auto___32900 = temp__4657__auto___32899;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__8011__auto___32900)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32886_32892,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___32900], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___32891,output_schema32886_32892,input_schema32887_32893,input_checker32888_32894,output_checker32889_32895))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema32886_32892,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32887_32893], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 *   the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___32906 = schema.utils.use_fn_validation;
var output_schema32901_32907 = schema.core.Bool;
var input_schema32902_32908 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker32903_32909 = schema.core.checker.call(null,input_schema32902_32908);
var output_checker32904_32910 = schema.core.checker.call(null,output_schema32901_32907);
/**
 * Inputs: [x]
 *   Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___32906,output_schema32901_32907,input_schema32902_32908,input_checker32903_32909,output_checker32904_32910){
return (function om_bootstrap$util$om_component_QMARK_(G__32905){
var validate__8009__auto__ = ufv___32906.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___32911 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32905], null);
var temp__4657__auto___32912 = input_checker32903_32909.call(null,args__8010__auto___32911);
if(cljs.core.truth_(temp__4657__auto___32912)){
var error__8011__auto___32913 = temp__4657__auto___32912;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___32913)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32902_32908,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___32911,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___32913], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var x = G__32905;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___32914 = output_checker32904_32910.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___32914)){
var error__8011__auto___32915 = temp__4657__auto___32914;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__8011__auto___32915)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32901_32907,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___32915], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___32906,output_schema32901_32907,input_schema32902_32908,input_checker32903_32909,output_checker32904_32910))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema32901_32907,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32902_32908], null)));
var ufv___32921 = schema.utils.use_fn_validation;
var output_schema32916_32922 = schema.core.Bool;
var input_schema32917_32923 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker32918_32924 = schema.core.checker.call(null,input_schema32917_32923);
var output_checker32919_32925 = schema.core.checker.call(null,output_schema32916_32922);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   TODO: Once Om updates its externs to include this file, we can
 *   remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___32921,output_schema32916_32922,input_schema32917_32923,input_checker32918_32924,output_checker32919_32925){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__32920){
var validate__8009__auto__ = ufv___32921.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___32926 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32920], null);
var temp__4657__auto___32927 = input_checker32918_32924.call(null,args__8010__auto___32926);
if(cljs.core.truth_(temp__4657__auto___32927)){
var error__8011__auto___32928 = temp__4657__auto___32927;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__8011__auto___32928)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32917_32923,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___32926,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___32928], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var child = G__32920;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___32929 = output_checker32919_32925.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___32929)){
var error__8011__auto___32930 = temp__4657__auto___32929;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__8011__auto___32930)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32916_32922,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___32930], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___32921,output_schema32916_32922,input_schema32917_32923,input_checker32918_32924,output_checker32919_32925))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema32916_32922,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32917_32923], null)));
var ufv___32936 = schema.utils.use_fn_validation;
var output_schema32931_32937 = schema.core.Bool;
var input_schema32932_32938 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker32933_32939 = schema.core.checker.call(null,input_schema32932_32938);
var output_checker32934_32940 = schema.core.checker.call(null,output_schema32931_32937);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied argument is a valid React component,
 *   false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___32936,output_schema32931_32937,input_schema32932_32938,input_checker32933_32939,output_checker32934_32940){
return (function om_bootstrap$util$valid_component_QMARK_(G__32935){
var validate__8009__auto__ = ufv___32936.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___32941 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32935], null);
var temp__4657__auto___32942 = input_checker32933_32939.call(null,args__8010__auto___32941);
if(cljs.core.truth_(temp__4657__auto___32942)){
var error__8011__auto___32943 = temp__4657__auto___32942;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__8011__auto___32943)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32932_32938,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___32941,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___32943], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var child = G__32935;
while(true){
var or__6404__auto__ = typeof child === 'string';
if(or__6404__auto__){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = typeof child === 'number';
if(or__6404__auto____$1){
return or__6404__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___32944 = output_checker32934_32940.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___32944)){
var error__8011__auto___32945 = temp__4657__auto___32944;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__8011__auto___32945)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32931_32937,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___32945], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___32936,output_schema32931_32937,input_schema32932_32938,input_checker32933_32939,output_checker32934_32940))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema32931_32937,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32932_32938], null)));
var ufv___32951 = schema.utils.use_fn_validation;
var output_schema32946_32952 = schema.core.Bool;
var input_schema32947_32953 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker32948_32954 = schema.core.checker.call(null,input_schema32947_32953);
var output_checker32949_32955 = schema.core.checker.call(null,output_schema32946_32952);
/**
 * Inputs: [children]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied sequence contains some valid React component,
 *   false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___32951,output_schema32946_32952,input_schema32947_32953,input_checker32948_32954,output_checker32949_32955){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__32950){
var validate__8009__auto__ = ufv___32951.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___32956 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32950], null);
var temp__4657__auto___32957 = input_checker32948_32954.call(null,args__8010__auto___32956);
if(cljs.core.truth_(temp__4657__auto___32957)){
var error__8011__auto___32958 = temp__4657__auto___32957;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__8011__auto___32958)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32947_32953,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___32956,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___32958], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var children = G__32950;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___32959 = output_checker32949_32955.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___32959)){
var error__8011__auto___32960 = temp__4657__auto___32959;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__8011__auto___32960)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32946_32952,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___32960], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___32951,output_schema32946_32952,input_schema32947_32953,input_checker32948_32954,output_checker32949_32955))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema32946_32952,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32947_32953], null)));
/**
 * Generates a new function that calls each supplied side-effecting
 *   function.
 */
om_bootstrap.util.chain_fns = (function om_bootstrap$util$chain_fns(l,r){
if(cljs.core.truth_((function (){var and__6392__auto__ = l;
if(cljs.core.truth_(and__6392__auto__)){
return r;
} else {
return and__6392__auto__;
}
})())){
return (function() { 
var G__32961__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__32961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32962__i = 0, G__32962__a = new Array(arguments.length -  0);
while (G__32962__i < G__32962__a.length) {G__32962__a[G__32962__i] = arguments[G__32962__i + 0]; ++G__32962__i;}
  args = new cljs.core.IndexedSeq(G__32962__a,0);
} 
return G__32961__delegate.call(this,args);};
G__32961.cljs$lang$maxFixedArity = 0;
G__32961.cljs$lang$applyTo = (function (arglist__32963){
var args = cljs.core.seq(arglist__32963);
return G__32961__delegate(args);
});
G__32961.cljs$core$IFn$_invoke$arity$variadic = G__32961__delegate;
return G__32961;
})()
;
} else {
var or__6404__auto__ = l;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return r;
}
}
});
/**
 * Map of React keyword to a custom function for its merge. Tries to
 *   do a decent job with event handlers as well; currently only
 *   handles :on-select :on-click, :on-blur, kebab-cased as om-tools
 *   prefers.
 */
om_bootstrap.util.react_merges = (function (){var merge_class = (function (l,r){
return [cljs.core.str(l),cljs.core.str(" "),cljs.core.str(r)].join('');
});
var orig_fn = ((function (merge_class){
return (function (l,r){
var or__6404__auto__ = l;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return r;
}
});})(merge_class))
;
var empty_fn = ((function (merge_class,orig_fn){
return (function (_,___$1){
return null;
});})(merge_class,orig_fn))
;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"class","class",-2030961996)],[empty_fn,empty_fn,orig_fn,om_bootstrap.util.chain_fns,om_bootstrap.util.chain_fns,merge_class,cljs.core.merge,om_bootstrap.util.chain_fns,merge_class]);
})();
/**
 * Merges two maps that represent React properties. Merges occur
 *   according to the functions defined in `react-merges`.
 */
om_bootstrap.util.merge_props = (function om_bootstrap$util$merge_props(var_args){
var args__7486__auto__ = [];
var len__7479__auto___32965 = arguments.length;
var i__7480__auto___32966 = (0);
while(true){
if((i__7480__auto___32966 < len__7479__auto___32965)){
args__7486__auto__.push((arguments[i__7480__auto___32966]));

var G__32967 = (i__7480__auto___32966 + (1));
i__7480__auto___32966 = G__32967;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (prop_maps){
var react_merge = (function om_bootstrap$util$react_merge(xs){
return om_bootstrap.util.merge_with_fns.call(null,om_bootstrap.util.react_merges,xs);
});
var normalize_class = (function om_bootstrap$util$normalize_class(m){
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996))){
return react_merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m)], null)], null));
} else {
return m;
}
});
var ret = react_merge.call(null,cljs.core.map.call(null,normalize_class,prop_maps));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ret))){
return cljs.core.dissoc.call(null,ret,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return ret;
}
});

om_bootstrap.util.merge_props.cljs$lang$maxFixedArity = (0);

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq32964){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32964));
});

/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = {};
var seq__32976_32980 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__32977_32981 = null;
var count__32978_32982 = (0);
var i__32979_32983 = (0);
while(true){
if((i__32979_32983 < count__32978_32982)){
var k_32984 = cljs.core._nth.call(null,chunk__32977_32981,i__32979_32983);
if(cljs.core.truth_(arr.hasOwnProperty(k_32984))){
(ret[k_32984] = (arr[k_32984]));
} else {
}

var G__32985 = seq__32976_32980;
var G__32986 = chunk__32977_32981;
var G__32987 = count__32978_32982;
var G__32988 = (i__32979_32983 + (1));
seq__32976_32980 = G__32985;
chunk__32977_32981 = G__32986;
count__32978_32982 = G__32987;
i__32979_32983 = G__32988;
continue;
} else {
var temp__4657__auto___32989 = cljs.core.seq.call(null,seq__32976_32980);
if(temp__4657__auto___32989){
var seq__32976_32990__$1 = temp__4657__auto___32989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32976_32990__$1)){
var c__7215__auto___32991 = cljs.core.chunk_first.call(null,seq__32976_32990__$1);
var G__32992 = cljs.core.chunk_rest.call(null,seq__32976_32990__$1);
var G__32993 = c__7215__auto___32991;
var G__32994 = cljs.core.count.call(null,c__7215__auto___32991);
var G__32995 = (0);
seq__32976_32980 = G__32992;
chunk__32977_32981 = G__32993;
count__32978_32982 = G__32994;
i__32979_32983 = G__32995;
continue;
} else {
var k_32996 = cljs.core.first.call(null,seq__32976_32990__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_32996))){
(ret[k_32996] = (arr[k_32996]));
} else {
}

var G__32997 = cljs.core.next.call(null,seq__32976_32990__$1);
var G__32998 = null;
var G__32999 = (0);
var G__33000 = (0);
seq__32976_32980 = G__32997;
chunk__32977_32981 = G__32998;
count__32978_32982 = G__32999;
i__32979_32983 = G__33000;
continue;
}
} else {
}
}
break;
}

return ret;
});
om_bootstrap.util.create_element = (function om_bootstrap$util$create_element(var_args){
var args33001 = [];
var len__7479__auto___33004 = arguments.length;
var i__7480__auto___33005 = (0);
while(true){
if((i__7480__auto___33005 < len__7479__auto___33004)){
args33001.push((arguments[i__7480__auto___33005]));

var G__33006 = (i__7480__auto___33005 + (1));
i__7480__auto___33005 = G__33006;
continue;
} else {
}
break;
}

var G__33003 = args33001.length;
switch (G__33003) {
case 1:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33001.length)].join('')));

}
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.create_element.call(null,child,null);
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2 = (function (child,props){
return React.createElement(child.type,props);
});

om_bootstrap.util.create_element.cljs$lang$maxFixedArity = 2;

/**
 * Merges the supplied extra properties into the underlying Om cursor
 *   and calls the constructor to clone the React component.
 * 
 *   Requires that the supplied child has an Om cursor attached to it! 
 */
om_bootstrap.util.clone_om = (function om_bootstrap$util$clone_om(child,extra_props){
var om_props = om_bootstrap.util.get_props.call(null,child);
var props = ({});
var cloned_child = goog.object.clone(child);
goog.object.extend(props,child.props,({"__om_cursor": ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props))}));

goog.object.extend(cloned_child,({"props": props}));

return cloned_child;
});
/**
 * This function is called if the React component child was NOT
 *   generated by Om. Merges the supplied properties into the -props
 *   field of the supplied React component and creates a shallow copy.
 */
om_bootstrap.util.clone_basic_react = (function om_bootstrap$util$clone_basic_react(child,extra_props){
var props = cljs.core.js__GT_clj.call(null,child.props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4657__auto__)){
var children = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
return null;
}
})());
return om_bootstrap.util.create_element.call(null,child,cljs.core.clj__GT_js.call(null,new_props));
});
/**
 * Returns a shallow copy of the supplied component (child); the copy
 *   will have any props provided by extra-props merged in. Props are
 *   merged in the same manner as merge-props, so props like :class will
 *   be merged intelligently.
 * 
 *   extra-props can be a function of the old props that returns new
 *   props, OR it can be a map of props.
 * 
 *   If the supplied child is an Om component, any supplied extra
 *   properties will be merged into the underlying cursor and accessible
 *   in the Om constructor.
 */
om_bootstrap.util.clone_with_props = (function om_bootstrap$util$clone_with_props(var_args){
var args33008 = [];
var len__7479__auto___33011 = arguments.length;
var i__7480__auto___33012 = (0);
while(true){
if((i__7480__auto___33012 < len__7479__auto___33011)){
args33008.push((arguments[i__7480__auto___33012]));

var G__33013 = (i__7480__auto___33012 + (1));
i__7480__auto___33012 = G__33013;
continue;
} else {
}
break;
}

var G__33010 = args33008.length;
switch (G__33010) {
case 1:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33008.length)].join('')));

}
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.clone_with_props.call(null,child,cljs.core.PersistentArrayMap.EMPTY);
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2 = (function (child,extra_props){
if(cljs.core.not.call(null,om_bootstrap.util.strict_valid_component_QMARK_.call(null,child))){
return child;
} else {
if(cljs.core.truth_(om_bootstrap.util.om_component_QMARK_.call(null,child))){
return om_bootstrap.util.clone_om.call(null,child,extra_props);
} else {
if((cljs.core.map_QMARK_.call(null,extra_props)) && (cljs.core.empty_QMARK_.call(null,extra_props))){
return om_bootstrap.util.create_element.call(null,child,child.props);
} else {
return om_bootstrap.util.clone_basic_react.call(null,child,extra_props);

}
}
}
});

om_bootstrap.util.clone_with_props.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=util.js.map