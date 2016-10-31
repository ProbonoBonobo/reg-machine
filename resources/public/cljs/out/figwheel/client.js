// Compiled by ClojureScript 1.9.227 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.6";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args52089 = [];
var len__25826__auto___52092 = arguments.length;
var i__25827__auto___52093 = (0);
while(true){
if((i__25827__auto___52093 < len__25826__auto___52092)){
args52089.push((arguments[i__25827__auto___52093]));

var G__52094 = (i__25827__auto___52093 + (1));
i__25827__auto___52093 = G__52094;
continue;
} else {
}
break;
}

var G__52091 = args52089.length;
switch (G__52091) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52089.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25833__auto__ = [];
var len__25826__auto___52097 = arguments.length;
var i__25827__auto___52098 = (0);
while(true){
if((i__25827__auto___52098 < len__25826__auto___52097)){
args__25833__auto__.push((arguments[i__25827__auto___52098]));

var G__52099 = (i__25827__auto___52098 + (1));
i__25827__auto___52098 = G__52099;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq52096){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52096));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25833__auto__ = [];
var len__25826__auto___52101 = arguments.length;
var i__25827__auto___52102 = (0);
while(true){
if((i__25827__auto___52102 < len__25826__auto___52101)){
args__25833__auto__.push((arguments[i__25827__auto___52102]));

var G__52103 = (i__25827__auto___52102 + (1));
i__25827__auto___52102 = G__52103;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq52100){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52100));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__52104 = cljs.core._EQ_;
var expr__52105 = (function (){var or__24751__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e52108){if((e52108 instanceof Error)){
var e = e52108;
return false;
} else {
throw e52108;

}
}})();
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__52104.call(null,"true",expr__52105))){
return true;
} else {
if(cljs.core.truth_(pred__52104.call(null,"false",expr__52105))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__52105)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e52110){if((e52110 instanceof Error)){
var e = e52110;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e52110;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__52111){
var map__52114 = p__52111;
var map__52114__$1 = ((((!((map__52114 == null)))?((((map__52114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52114):map__52114);
var message = cljs.core.get.call(null,map__52114__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__52114__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24751__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24739__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24739__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24739__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27930__auto___52276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___52276,ch){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___52276,ch){
return (function (state_52245){
var state_val_52246 = (state_52245[(1)]);
if((state_val_52246 === (7))){
var inst_52241 = (state_52245[(2)]);
var state_52245__$1 = state_52245;
var statearr_52247_52277 = state_52245__$1;
(statearr_52247_52277[(2)] = inst_52241);

(statearr_52247_52277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (1))){
var state_52245__$1 = state_52245;
var statearr_52248_52278 = state_52245__$1;
(statearr_52248_52278[(2)] = null);

(statearr_52248_52278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (4))){
var inst_52198 = (state_52245[(7)]);
var inst_52198__$1 = (state_52245[(2)]);
var state_52245__$1 = (function (){var statearr_52249 = state_52245;
(statearr_52249[(7)] = inst_52198__$1);

return statearr_52249;
})();
if(cljs.core.truth_(inst_52198__$1)){
var statearr_52250_52279 = state_52245__$1;
(statearr_52250_52279[(1)] = (5));

} else {
var statearr_52251_52280 = state_52245__$1;
(statearr_52251_52280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (15))){
var inst_52205 = (state_52245[(8)]);
var inst_52220 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_52205);
var inst_52221 = cljs.core.first.call(null,inst_52220);
var inst_52222 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_52221);
var inst_52223 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_52222)].join('');
var inst_52224 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_52223);
var state_52245__$1 = state_52245;
var statearr_52252_52281 = state_52245__$1;
(statearr_52252_52281[(2)] = inst_52224);

(statearr_52252_52281[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (13))){
var inst_52229 = (state_52245[(2)]);
var state_52245__$1 = state_52245;
var statearr_52253_52282 = state_52245__$1;
(statearr_52253_52282[(2)] = inst_52229);

(statearr_52253_52282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (6))){
var state_52245__$1 = state_52245;
var statearr_52254_52283 = state_52245__$1;
(statearr_52254_52283[(2)] = null);

(statearr_52254_52283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (17))){
var inst_52227 = (state_52245[(2)]);
var state_52245__$1 = state_52245;
var statearr_52255_52284 = state_52245__$1;
(statearr_52255_52284[(2)] = inst_52227);

(statearr_52255_52284[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (3))){
var inst_52243 = (state_52245[(2)]);
var state_52245__$1 = state_52245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52245__$1,inst_52243);
} else {
if((state_val_52246 === (12))){
var inst_52204 = (state_52245[(9)]);
var inst_52218 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_52204,opts);
var state_52245__$1 = state_52245;
if(cljs.core.truth_(inst_52218)){
var statearr_52256_52285 = state_52245__$1;
(statearr_52256_52285[(1)] = (15));

} else {
var statearr_52257_52286 = state_52245__$1;
(statearr_52257_52286[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (2))){
var state_52245__$1 = state_52245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52245__$1,(4),ch);
} else {
if((state_val_52246 === (11))){
var inst_52205 = (state_52245[(8)]);
var inst_52210 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52211 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_52205);
var inst_52212 = cljs.core.async.timeout.call(null,(1000));
var inst_52213 = [inst_52211,inst_52212];
var inst_52214 = (new cljs.core.PersistentVector(null,2,(5),inst_52210,inst_52213,null));
var state_52245__$1 = state_52245;
return cljs.core.async.ioc_alts_BANG_.call(null,state_52245__$1,(14),inst_52214);
} else {
if((state_val_52246 === (9))){
var inst_52205 = (state_52245[(8)]);
var inst_52231 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_52232 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_52205);
var inst_52233 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52232);
var inst_52234 = [cljs.core.str("Not loading: "),cljs.core.str(inst_52233)].join('');
var inst_52235 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_52234);
var state_52245__$1 = (function (){var statearr_52258 = state_52245;
(statearr_52258[(10)] = inst_52231);

return statearr_52258;
})();
var statearr_52259_52287 = state_52245__$1;
(statearr_52259_52287[(2)] = inst_52235);

(statearr_52259_52287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (5))){
var inst_52198 = (state_52245[(7)]);
var inst_52200 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_52201 = (new cljs.core.PersistentArrayMap(null,2,inst_52200,null));
var inst_52202 = (new cljs.core.PersistentHashSet(null,inst_52201,null));
var inst_52203 = figwheel.client.focus_msgs.call(null,inst_52202,inst_52198);
var inst_52204 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_52203);
var inst_52205 = cljs.core.first.call(null,inst_52203);
var inst_52206 = figwheel.client.autoload_QMARK_.call(null);
var state_52245__$1 = (function (){var statearr_52260 = state_52245;
(statearr_52260[(8)] = inst_52205);

(statearr_52260[(9)] = inst_52204);

return statearr_52260;
})();
if(cljs.core.truth_(inst_52206)){
var statearr_52261_52288 = state_52245__$1;
(statearr_52261_52288[(1)] = (8));

} else {
var statearr_52262_52289 = state_52245__$1;
(statearr_52262_52289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (14))){
var inst_52216 = (state_52245[(2)]);
var state_52245__$1 = state_52245;
var statearr_52263_52290 = state_52245__$1;
(statearr_52263_52290[(2)] = inst_52216);

(statearr_52263_52290[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (16))){
var state_52245__$1 = state_52245;
var statearr_52264_52291 = state_52245__$1;
(statearr_52264_52291[(2)] = null);

(statearr_52264_52291[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (10))){
var inst_52237 = (state_52245[(2)]);
var state_52245__$1 = (function (){var statearr_52265 = state_52245;
(statearr_52265[(11)] = inst_52237);

return statearr_52265;
})();
var statearr_52266_52292 = state_52245__$1;
(statearr_52266_52292[(2)] = null);

(statearr_52266_52292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (8))){
var inst_52204 = (state_52245[(9)]);
var inst_52208 = figwheel.client.reload_file_state_QMARK_.call(null,inst_52204,opts);
var state_52245__$1 = state_52245;
if(cljs.core.truth_(inst_52208)){
var statearr_52267_52293 = state_52245__$1;
(statearr_52267_52293[(1)] = (11));

} else {
var statearr_52268_52294 = state_52245__$1;
(statearr_52268_52294[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27930__auto___52276,ch))
;
return ((function (switch__27865__auto__,c__27930__auto___52276,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27866__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27866__auto____0 = (function (){
var statearr_52272 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52272[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27866__auto__);

(statearr_52272[(1)] = (1));

return statearr_52272;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27866__auto____1 = (function (state_52245){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_52245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e52273){if((e52273 instanceof Object)){
var ex__27869__auto__ = e52273;
var statearr_52274_52295 = state_52245;
(statearr_52274_52295[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52296 = state_52245;
state_52245 = G__52296;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27866__auto__ = function(state_52245){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27866__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27866__auto____1.call(this,state_52245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27866__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27866__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___52276,ch))
})();
var state__27932__auto__ = (function (){var statearr_52275 = f__27931__auto__.call(null);
(statearr_52275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___52276);

return statearr_52275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___52276,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__52297_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__52297_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_52300 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_52300){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e52299){if((e52299 instanceof Error)){
var e = e52299;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_52300], null));
} else {
var e = e52299;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_52300))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__52301){
var map__52310 = p__52301;
var map__52310__$1 = ((((!((map__52310 == null)))?((((map__52310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52310):map__52310);
var opts = map__52310__$1;
var build_id = cljs.core.get.call(null,map__52310__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__52310,map__52310__$1,opts,build_id){
return (function (p__52312){
var vec__52313 = p__52312;
var seq__52314 = cljs.core.seq.call(null,vec__52313);
var first__52315 = cljs.core.first.call(null,seq__52314);
var seq__52314__$1 = cljs.core.next.call(null,seq__52314);
var map__52316 = first__52315;
var map__52316__$1 = ((((!((map__52316 == null)))?((((map__52316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52316):map__52316);
var msg = map__52316__$1;
var msg_name = cljs.core.get.call(null,map__52316__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52314__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__52313,seq__52314,first__52315,seq__52314__$1,map__52316,map__52316__$1,msg,msg_name,_,map__52310,map__52310__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__52313,seq__52314,first__52315,seq__52314__$1,map__52316,map__52316__$1,msg,msg_name,_,map__52310,map__52310__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__52310,map__52310__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__52324){
var vec__52325 = p__52324;
var seq__52326 = cljs.core.seq.call(null,vec__52325);
var first__52327 = cljs.core.first.call(null,seq__52326);
var seq__52326__$1 = cljs.core.next.call(null,seq__52326);
var map__52328 = first__52327;
var map__52328__$1 = ((((!((map__52328 == null)))?((((map__52328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52328):map__52328);
var msg = map__52328__$1;
var msg_name = cljs.core.get.call(null,map__52328__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52326__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__52330){
var map__52342 = p__52330;
var map__52342__$1 = ((((!((map__52342 == null)))?((((map__52342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52342):map__52342);
var on_compile_warning = cljs.core.get.call(null,map__52342__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__52342__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__52342,map__52342__$1,on_compile_warning,on_compile_fail){
return (function (p__52344){
var vec__52345 = p__52344;
var seq__52346 = cljs.core.seq.call(null,vec__52345);
var first__52347 = cljs.core.first.call(null,seq__52346);
var seq__52346__$1 = cljs.core.next.call(null,seq__52346);
var map__52348 = first__52347;
var map__52348__$1 = ((((!((map__52348 == null)))?((((map__52348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52348):map__52348);
var msg = map__52348__$1;
var msg_name = cljs.core.get.call(null,map__52348__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52346__$1;
var pred__52350 = cljs.core._EQ_;
var expr__52351 = msg_name;
if(cljs.core.truth_(pred__52350.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__52351))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__52350.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__52351))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__52342,map__52342__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto__,msg_hist,msg_names,msg){
return (function (state_52579){
var state_val_52580 = (state_52579[(1)]);
if((state_val_52580 === (7))){
var inst_52499 = (state_52579[(2)]);
var state_52579__$1 = state_52579;
if(cljs.core.truth_(inst_52499)){
var statearr_52581_52631 = state_52579__$1;
(statearr_52581_52631[(1)] = (8));

} else {
var statearr_52582_52632 = state_52579__$1;
(statearr_52582_52632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (20))){
var inst_52573 = (state_52579[(2)]);
var state_52579__$1 = state_52579;
var statearr_52583_52633 = state_52579__$1;
(statearr_52583_52633[(2)] = inst_52573);

(statearr_52583_52633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (27))){
var inst_52569 = (state_52579[(2)]);
var state_52579__$1 = state_52579;
var statearr_52584_52634 = state_52579__$1;
(statearr_52584_52634[(2)] = inst_52569);

(statearr_52584_52634[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (1))){
var inst_52492 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_52579__$1 = state_52579;
if(cljs.core.truth_(inst_52492)){
var statearr_52585_52635 = state_52579__$1;
(statearr_52585_52635[(1)] = (2));

} else {
var statearr_52586_52636 = state_52579__$1;
(statearr_52586_52636[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (24))){
var inst_52571 = (state_52579[(2)]);
var state_52579__$1 = state_52579;
var statearr_52587_52637 = state_52579__$1;
(statearr_52587_52637[(2)] = inst_52571);

(statearr_52587_52637[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (4))){
var inst_52577 = (state_52579[(2)]);
var state_52579__$1 = state_52579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52579__$1,inst_52577);
} else {
if((state_val_52580 === (15))){
var inst_52575 = (state_52579[(2)]);
var state_52579__$1 = state_52579;
var statearr_52588_52638 = state_52579__$1;
(statearr_52588_52638[(2)] = inst_52575);

(statearr_52588_52638[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (21))){
var inst_52528 = (state_52579[(2)]);
var inst_52529 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52530 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52529);
var state_52579__$1 = (function (){var statearr_52589 = state_52579;
(statearr_52589[(7)] = inst_52528);

return statearr_52589;
})();
var statearr_52590_52639 = state_52579__$1;
(statearr_52590_52639[(2)] = inst_52530);

(statearr_52590_52639[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (31))){
var inst_52558 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_52579__$1 = state_52579;
if(cljs.core.truth_(inst_52558)){
var statearr_52591_52640 = state_52579__$1;
(statearr_52591_52640[(1)] = (34));

} else {
var statearr_52592_52641 = state_52579__$1;
(statearr_52592_52641[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (32))){
var inst_52567 = (state_52579[(2)]);
var state_52579__$1 = state_52579;
var statearr_52593_52642 = state_52579__$1;
(statearr_52593_52642[(2)] = inst_52567);

(statearr_52593_52642[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (33))){
var inst_52554 = (state_52579[(2)]);
var inst_52555 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52556 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52555);
var state_52579__$1 = (function (){var statearr_52594 = state_52579;
(statearr_52594[(8)] = inst_52554);

return statearr_52594;
})();
var statearr_52595_52643 = state_52579__$1;
(statearr_52595_52643[(2)] = inst_52556);

(statearr_52595_52643[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (13))){
var inst_52513 = figwheel.client.heads_up.clear.call(null);
var state_52579__$1 = state_52579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52579__$1,(16),inst_52513);
} else {
if((state_val_52580 === (22))){
var inst_52534 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52535 = figwheel.client.heads_up.append_warning_message.call(null,inst_52534);
var state_52579__$1 = state_52579;
var statearr_52596_52644 = state_52579__$1;
(statearr_52596_52644[(2)] = inst_52535);

(statearr_52596_52644[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (36))){
var inst_52565 = (state_52579[(2)]);
var state_52579__$1 = state_52579;
var statearr_52597_52645 = state_52579__$1;
(statearr_52597_52645[(2)] = inst_52565);

(statearr_52597_52645[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (29))){
var inst_52545 = (state_52579[(2)]);
var inst_52546 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52547 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52546);
var state_52579__$1 = (function (){var statearr_52598 = state_52579;
(statearr_52598[(9)] = inst_52545);

return statearr_52598;
})();
var statearr_52599_52646 = state_52579__$1;
(statearr_52599_52646[(2)] = inst_52547);

(statearr_52599_52646[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (6))){
var inst_52494 = (state_52579[(10)]);
var state_52579__$1 = state_52579;
var statearr_52600_52647 = state_52579__$1;
(statearr_52600_52647[(2)] = inst_52494);

(statearr_52600_52647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (28))){
var inst_52541 = (state_52579[(2)]);
var inst_52542 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52543 = figwheel.client.heads_up.display_warning.call(null,inst_52542);
var state_52579__$1 = (function (){var statearr_52601 = state_52579;
(statearr_52601[(11)] = inst_52541);

return statearr_52601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52579__$1,(29),inst_52543);
} else {
if((state_val_52580 === (25))){
var inst_52539 = figwheel.client.heads_up.clear.call(null);
var state_52579__$1 = state_52579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52579__$1,(28),inst_52539);
} else {
if((state_val_52580 === (34))){
var inst_52560 = figwheel.client.heads_up.flash_loaded.call(null);
var state_52579__$1 = state_52579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52579__$1,(37),inst_52560);
} else {
if((state_val_52580 === (17))){
var inst_52519 = (state_52579[(2)]);
var inst_52520 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52521 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52520);
var state_52579__$1 = (function (){var statearr_52602 = state_52579;
(statearr_52602[(12)] = inst_52519);

return statearr_52602;
})();
var statearr_52603_52648 = state_52579__$1;
(statearr_52603_52648[(2)] = inst_52521);

(statearr_52603_52648[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (3))){
var inst_52511 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_52579__$1 = state_52579;
if(cljs.core.truth_(inst_52511)){
var statearr_52604_52649 = state_52579__$1;
(statearr_52604_52649[(1)] = (13));

} else {
var statearr_52605_52650 = state_52579__$1;
(statearr_52605_52650[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (12))){
var inst_52507 = (state_52579[(2)]);
var state_52579__$1 = state_52579;
var statearr_52606_52651 = state_52579__$1;
(statearr_52606_52651[(2)] = inst_52507);

(statearr_52606_52651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (2))){
var inst_52494 = (state_52579[(10)]);
var inst_52494__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_52579__$1 = (function (){var statearr_52607 = state_52579;
(statearr_52607[(10)] = inst_52494__$1);

return statearr_52607;
})();
if(cljs.core.truth_(inst_52494__$1)){
var statearr_52608_52652 = state_52579__$1;
(statearr_52608_52652[(1)] = (5));

} else {
var statearr_52609_52653 = state_52579__$1;
(statearr_52609_52653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (23))){
var inst_52537 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_52579__$1 = state_52579;
if(cljs.core.truth_(inst_52537)){
var statearr_52610_52654 = state_52579__$1;
(statearr_52610_52654[(1)] = (25));

} else {
var statearr_52611_52655 = state_52579__$1;
(statearr_52611_52655[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (35))){
var state_52579__$1 = state_52579;
var statearr_52612_52656 = state_52579__$1;
(statearr_52612_52656[(2)] = null);

(statearr_52612_52656[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (19))){
var inst_52532 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_52579__$1 = state_52579;
if(cljs.core.truth_(inst_52532)){
var statearr_52613_52657 = state_52579__$1;
(statearr_52613_52657[(1)] = (22));

} else {
var statearr_52614_52658 = state_52579__$1;
(statearr_52614_52658[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (11))){
var inst_52503 = (state_52579[(2)]);
var state_52579__$1 = state_52579;
var statearr_52615_52659 = state_52579__$1;
(statearr_52615_52659[(2)] = inst_52503);

(statearr_52615_52659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (9))){
var inst_52505 = figwheel.client.heads_up.clear.call(null);
var state_52579__$1 = state_52579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52579__$1,(12),inst_52505);
} else {
if((state_val_52580 === (5))){
var inst_52496 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_52579__$1 = state_52579;
var statearr_52616_52660 = state_52579__$1;
(statearr_52616_52660[(2)] = inst_52496);

(statearr_52616_52660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (14))){
var inst_52523 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_52579__$1 = state_52579;
if(cljs.core.truth_(inst_52523)){
var statearr_52617_52661 = state_52579__$1;
(statearr_52617_52661[(1)] = (18));

} else {
var statearr_52618_52662 = state_52579__$1;
(statearr_52618_52662[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (26))){
var inst_52549 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_52579__$1 = state_52579;
if(cljs.core.truth_(inst_52549)){
var statearr_52619_52663 = state_52579__$1;
(statearr_52619_52663[(1)] = (30));

} else {
var statearr_52620_52664 = state_52579__$1;
(statearr_52620_52664[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (16))){
var inst_52515 = (state_52579[(2)]);
var inst_52516 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52517 = figwheel.client.heads_up.display_exception.call(null,inst_52516);
var state_52579__$1 = (function (){var statearr_52621 = state_52579;
(statearr_52621[(13)] = inst_52515);

return statearr_52621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52579__$1,(17),inst_52517);
} else {
if((state_val_52580 === (30))){
var inst_52551 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52552 = figwheel.client.heads_up.display_warning.call(null,inst_52551);
var state_52579__$1 = state_52579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52579__$1,(33),inst_52552);
} else {
if((state_val_52580 === (10))){
var inst_52509 = (state_52579[(2)]);
var state_52579__$1 = state_52579;
var statearr_52622_52665 = state_52579__$1;
(statearr_52622_52665[(2)] = inst_52509);

(statearr_52622_52665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (18))){
var inst_52525 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52526 = figwheel.client.heads_up.display_exception.call(null,inst_52525);
var state_52579__$1 = state_52579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52579__$1,(21),inst_52526);
} else {
if((state_val_52580 === (37))){
var inst_52562 = (state_52579[(2)]);
var state_52579__$1 = state_52579;
var statearr_52623_52666 = state_52579__$1;
(statearr_52623_52666[(2)] = inst_52562);

(statearr_52623_52666[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (8))){
var inst_52501 = figwheel.client.heads_up.flash_loaded.call(null);
var state_52579__$1 = state_52579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52579__$1,(11),inst_52501);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27930__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27865__auto__,c__27930__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto____0 = (function (){
var statearr_52627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52627[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto__);

(statearr_52627[(1)] = (1));

return statearr_52627;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto____1 = (function (state_52579){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_52579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e52628){if((e52628 instanceof Object)){
var ex__27869__auto__ = e52628;
var statearr_52629_52667 = state_52579;
(statearr_52629_52667[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52668 = state_52579;
state_52579 = G__52668;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto__ = function(state_52579){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto____1.call(this,state_52579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__,msg_hist,msg_names,msg))
})();
var state__27932__auto__ = (function (){var statearr_52630 = f__27931__auto__.call(null);
(statearr_52630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_52630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto__,msg_hist,msg_names,msg))
);

return c__27930__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27930__auto___52731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___52731,ch){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___52731,ch){
return (function (state_52714){
var state_val_52715 = (state_52714[(1)]);
if((state_val_52715 === (1))){
var state_52714__$1 = state_52714;
var statearr_52716_52732 = state_52714__$1;
(statearr_52716_52732[(2)] = null);

(statearr_52716_52732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52715 === (2))){
var state_52714__$1 = state_52714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52714__$1,(4),ch);
} else {
if((state_val_52715 === (3))){
var inst_52712 = (state_52714[(2)]);
var state_52714__$1 = state_52714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52714__$1,inst_52712);
} else {
if((state_val_52715 === (4))){
var inst_52702 = (state_52714[(7)]);
var inst_52702__$1 = (state_52714[(2)]);
var state_52714__$1 = (function (){var statearr_52717 = state_52714;
(statearr_52717[(7)] = inst_52702__$1);

return statearr_52717;
})();
if(cljs.core.truth_(inst_52702__$1)){
var statearr_52718_52733 = state_52714__$1;
(statearr_52718_52733[(1)] = (5));

} else {
var statearr_52719_52734 = state_52714__$1;
(statearr_52719_52734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52715 === (5))){
var inst_52702 = (state_52714[(7)]);
var inst_52704 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_52702);
var state_52714__$1 = state_52714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52714__$1,(8),inst_52704);
} else {
if((state_val_52715 === (6))){
var state_52714__$1 = state_52714;
var statearr_52720_52735 = state_52714__$1;
(statearr_52720_52735[(2)] = null);

(statearr_52720_52735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52715 === (7))){
var inst_52710 = (state_52714[(2)]);
var state_52714__$1 = state_52714;
var statearr_52721_52736 = state_52714__$1;
(statearr_52721_52736[(2)] = inst_52710);

(statearr_52721_52736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52715 === (8))){
var inst_52706 = (state_52714[(2)]);
var state_52714__$1 = (function (){var statearr_52722 = state_52714;
(statearr_52722[(8)] = inst_52706);

return statearr_52722;
})();
var statearr_52723_52737 = state_52714__$1;
(statearr_52723_52737[(2)] = null);

(statearr_52723_52737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__27930__auto___52731,ch))
;
return ((function (switch__27865__auto__,c__27930__auto___52731,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27866__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27866__auto____0 = (function (){
var statearr_52727 = [null,null,null,null,null,null,null,null,null];
(statearr_52727[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27866__auto__);

(statearr_52727[(1)] = (1));

return statearr_52727;
});
var figwheel$client$heads_up_plugin_$_state_machine__27866__auto____1 = (function (state_52714){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_52714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e52728){if((e52728 instanceof Object)){
var ex__27869__auto__ = e52728;
var statearr_52729_52738 = state_52714;
(statearr_52729_52738[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52739 = state_52714;
state_52714 = G__52739;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27866__auto__ = function(state_52714){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27866__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27866__auto____1.call(this,state_52714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27866__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27866__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___52731,ch))
})();
var state__27932__auto__ = (function (){var statearr_52730 = f__27931__auto__.call(null);
(statearr_52730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___52731);

return statearr_52730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___52731,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto__){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto__){
return (function (state_52760){
var state_val_52761 = (state_52760[(1)]);
if((state_val_52761 === (1))){
var inst_52755 = cljs.core.async.timeout.call(null,(3000));
var state_52760__$1 = state_52760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52760__$1,(2),inst_52755);
} else {
if((state_val_52761 === (2))){
var inst_52757 = (state_52760[(2)]);
var inst_52758 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_52760__$1 = (function (){var statearr_52762 = state_52760;
(statearr_52762[(7)] = inst_52757);

return statearr_52762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52760__$1,inst_52758);
} else {
return null;
}
}
});})(c__27930__auto__))
;
return ((function (switch__27865__auto__,c__27930__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27866__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27866__auto____0 = (function (){
var statearr_52766 = [null,null,null,null,null,null,null,null];
(statearr_52766[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27866__auto__);

(statearr_52766[(1)] = (1));

return statearr_52766;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27866__auto____1 = (function (state_52760){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_52760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e52767){if((e52767 instanceof Object)){
var ex__27869__auto__ = e52767;
var statearr_52768_52770 = state_52760;
(statearr_52768_52770[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52771 = state_52760;
state_52760 = G__52771;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27866__auto__ = function(state_52760){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27866__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27866__auto____1.call(this,state_52760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27866__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27866__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__))
})();
var state__27932__auto__ = (function (){var statearr_52769 = f__27931__auto__.call(null);
(statearr_52769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_52769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto__))
);

return c__27930__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto__,figwheel_version,temp__4657__auto__){
return (function (state_52794){
var state_val_52795 = (state_52794[(1)]);
if((state_val_52795 === (1))){
var inst_52788 = cljs.core.async.timeout.call(null,(2000));
var state_52794__$1 = state_52794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52794__$1,(2),inst_52788);
} else {
if((state_val_52795 === (2))){
var inst_52790 = (state_52794[(2)]);
var inst_52791 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_52792 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_52791);
var state_52794__$1 = (function (){var statearr_52796 = state_52794;
(statearr_52796[(7)] = inst_52790);

return statearr_52796;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52794__$1,inst_52792);
} else {
return null;
}
}
});})(c__27930__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27865__auto__,c__27930__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto____0 = (function (){
var statearr_52800 = [null,null,null,null,null,null,null,null];
(statearr_52800[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto__);

(statearr_52800[(1)] = (1));

return statearr_52800;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto____1 = (function (state_52794){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_52794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e52801){if((e52801 instanceof Object)){
var ex__27869__auto__ = e52801;
var statearr_52802_52804 = state_52794;
(statearr_52802_52804[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52805 = state_52794;
state_52794 = G__52805;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto__ = function(state_52794){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto____1.call(this,state_52794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27932__auto__ = (function (){var statearr_52803 = f__27931__auto__.call(null);
(statearr_52803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_52803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto__,figwheel_version,temp__4657__auto__))
);

return c__27930__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__52806){
var map__52810 = p__52806;
var map__52810__$1 = ((((!((map__52810 == null)))?((((map__52810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52810):map__52810);
var file = cljs.core.get.call(null,map__52810__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52810__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52810__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__52812 = "";
var G__52812__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__52812),cljs.core.str("file "),cljs.core.str(file)].join(''):G__52812);
var G__52812__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__52812__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__52812__$1);
if(cljs.core.truth_((function (){var and__24739__auto__ = line;
if(cljs.core.truth_(and__24739__auto__)){
return column;
} else {
return and__24739__auto__;
}
})())){
return [cljs.core.str(G__52812__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__52812__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__52813){
var map__52820 = p__52813;
var map__52820__$1 = ((((!((map__52820 == null)))?((((map__52820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52820):map__52820);
var ed = map__52820__$1;
var formatted_exception = cljs.core.get.call(null,map__52820__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__52820__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__52820__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__52822_52826 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__52823_52827 = null;
var count__52824_52828 = (0);
var i__52825_52829 = (0);
while(true){
if((i__52825_52829 < count__52824_52828)){
var msg_52830 = cljs.core._nth.call(null,chunk__52823_52827,i__52825_52829);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52830);

var G__52831 = seq__52822_52826;
var G__52832 = chunk__52823_52827;
var G__52833 = count__52824_52828;
var G__52834 = (i__52825_52829 + (1));
seq__52822_52826 = G__52831;
chunk__52823_52827 = G__52832;
count__52824_52828 = G__52833;
i__52825_52829 = G__52834;
continue;
} else {
var temp__4657__auto___52835 = cljs.core.seq.call(null,seq__52822_52826);
if(temp__4657__auto___52835){
var seq__52822_52836__$1 = temp__4657__auto___52835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52822_52836__$1)){
var c__25562__auto___52837 = cljs.core.chunk_first.call(null,seq__52822_52836__$1);
var G__52838 = cljs.core.chunk_rest.call(null,seq__52822_52836__$1);
var G__52839 = c__25562__auto___52837;
var G__52840 = cljs.core.count.call(null,c__25562__auto___52837);
var G__52841 = (0);
seq__52822_52826 = G__52838;
chunk__52823_52827 = G__52839;
count__52824_52828 = G__52840;
i__52825_52829 = G__52841;
continue;
} else {
var msg_52842 = cljs.core.first.call(null,seq__52822_52836__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52842);

var G__52843 = cljs.core.next.call(null,seq__52822_52836__$1);
var G__52844 = null;
var G__52845 = (0);
var G__52846 = (0);
seq__52822_52826 = G__52843;
chunk__52823_52827 = G__52844;
count__52824_52828 = G__52845;
i__52825_52829 = G__52846;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__52847){
var map__52850 = p__52847;
var map__52850__$1 = ((((!((map__52850 == null)))?((((map__52850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52850):map__52850);
var w = map__52850__$1;
var message = cljs.core.get.call(null,map__52850__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24739__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24739__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24739__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__52862 = cljs.core.seq.call(null,plugins);
var chunk__52863 = null;
var count__52864 = (0);
var i__52865 = (0);
while(true){
if((i__52865 < count__52864)){
var vec__52866 = cljs.core._nth.call(null,chunk__52863,i__52865);
var k = cljs.core.nth.call(null,vec__52866,(0),null);
var plugin = cljs.core.nth.call(null,vec__52866,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52872 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52862,chunk__52863,count__52864,i__52865,pl_52872,vec__52866,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_52872.call(null,msg_hist);
});})(seq__52862,chunk__52863,count__52864,i__52865,pl_52872,vec__52866,k,plugin))
);
} else {
}

var G__52873 = seq__52862;
var G__52874 = chunk__52863;
var G__52875 = count__52864;
var G__52876 = (i__52865 + (1));
seq__52862 = G__52873;
chunk__52863 = G__52874;
count__52864 = G__52875;
i__52865 = G__52876;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52862);
if(temp__4657__auto__){
var seq__52862__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52862__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__52862__$1);
var G__52877 = cljs.core.chunk_rest.call(null,seq__52862__$1);
var G__52878 = c__25562__auto__;
var G__52879 = cljs.core.count.call(null,c__25562__auto__);
var G__52880 = (0);
seq__52862 = G__52877;
chunk__52863 = G__52878;
count__52864 = G__52879;
i__52865 = G__52880;
continue;
} else {
var vec__52869 = cljs.core.first.call(null,seq__52862__$1);
var k = cljs.core.nth.call(null,vec__52869,(0),null);
var plugin = cljs.core.nth.call(null,vec__52869,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52881 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52862,chunk__52863,count__52864,i__52865,pl_52881,vec__52869,k,plugin,seq__52862__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_52881.call(null,msg_hist);
});})(seq__52862,chunk__52863,count__52864,i__52865,pl_52881,vec__52869,k,plugin,seq__52862__$1,temp__4657__auto__))
);
} else {
}

var G__52882 = cljs.core.next.call(null,seq__52862__$1);
var G__52883 = null;
var G__52884 = (0);
var G__52885 = (0);
seq__52862 = G__52882;
chunk__52863 = G__52883;
count__52864 = G__52884;
i__52865 = G__52885;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args52886 = [];
var len__25826__auto___52893 = arguments.length;
var i__25827__auto___52894 = (0);
while(true){
if((i__25827__auto___52894 < len__25826__auto___52893)){
args52886.push((arguments[i__25827__auto___52894]));

var G__52895 = (i__25827__auto___52894 + (1));
i__25827__auto___52894 = G__52895;
continue;
} else {
}
break;
}

var G__52888 = args52886.length;
switch (G__52888) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52886.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__52889_52897 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__52890_52898 = null;
var count__52891_52899 = (0);
var i__52892_52900 = (0);
while(true){
if((i__52892_52900 < count__52891_52899)){
var msg_52901 = cljs.core._nth.call(null,chunk__52890_52898,i__52892_52900);
figwheel.client.socket.handle_incoming_message.call(null,msg_52901);

var G__52902 = seq__52889_52897;
var G__52903 = chunk__52890_52898;
var G__52904 = count__52891_52899;
var G__52905 = (i__52892_52900 + (1));
seq__52889_52897 = G__52902;
chunk__52890_52898 = G__52903;
count__52891_52899 = G__52904;
i__52892_52900 = G__52905;
continue;
} else {
var temp__4657__auto___52906 = cljs.core.seq.call(null,seq__52889_52897);
if(temp__4657__auto___52906){
var seq__52889_52907__$1 = temp__4657__auto___52906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52889_52907__$1)){
var c__25562__auto___52908 = cljs.core.chunk_first.call(null,seq__52889_52907__$1);
var G__52909 = cljs.core.chunk_rest.call(null,seq__52889_52907__$1);
var G__52910 = c__25562__auto___52908;
var G__52911 = cljs.core.count.call(null,c__25562__auto___52908);
var G__52912 = (0);
seq__52889_52897 = G__52909;
chunk__52890_52898 = G__52910;
count__52891_52899 = G__52911;
i__52892_52900 = G__52912;
continue;
} else {
var msg_52913 = cljs.core.first.call(null,seq__52889_52907__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_52913);

var G__52914 = cljs.core.next.call(null,seq__52889_52907__$1);
var G__52915 = null;
var G__52916 = (0);
var G__52917 = (0);
seq__52889_52897 = G__52914;
chunk__52890_52898 = G__52915;
count__52891_52899 = G__52916;
i__52892_52900 = G__52917;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25833__auto__ = [];
var len__25826__auto___52922 = arguments.length;
var i__25827__auto___52923 = (0);
while(true){
if((i__25827__auto___52923 < len__25826__auto___52922)){
args__25833__auto__.push((arguments[i__25827__auto___52923]));

var G__52924 = (i__25827__auto___52923 + (1));
i__25827__auto___52923 = G__52924;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__52919){
var map__52920 = p__52919;
var map__52920__$1 = ((((!((map__52920 == null)))?((((map__52920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52920):map__52920);
var opts = map__52920__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq52918){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52918));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e52926){if((e52926 instanceof Error)){
var e = e52926;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e52926;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__52930){
var map__52931 = p__52930;
var map__52931__$1 = ((((!((map__52931 == null)))?((((map__52931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52931):map__52931);
var msg_name = cljs.core.get.call(null,map__52931__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1477762299914