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
var args63393 = [];
var len__25826__auto___63396 = arguments.length;
var i__25827__auto___63397 = (0);
while(true){
if((i__25827__auto___63397 < len__25826__auto___63396)){
args63393.push((arguments[i__25827__auto___63397]));

var G__63398 = (i__25827__auto___63397 + (1));
i__25827__auto___63397 = G__63398;
continue;
} else {
}
break;
}

var G__63395 = args63393.length;
switch (G__63395) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63393.length)].join('')));

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
var len__25826__auto___63401 = arguments.length;
var i__25827__auto___63402 = (0);
while(true){
if((i__25827__auto___63402 < len__25826__auto___63401)){
args__25833__auto__.push((arguments[i__25827__auto___63402]));

var G__63403 = (i__25827__auto___63402 + (1));
i__25827__auto___63402 = G__63403;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq63400){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq63400));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25833__auto__ = [];
var len__25826__auto___63405 = arguments.length;
var i__25827__auto___63406 = (0);
while(true){
if((i__25827__auto___63406 < len__25826__auto___63405)){
args__25833__auto__.push((arguments[i__25827__auto___63406]));

var G__63407 = (i__25827__auto___63406 + (1));
i__25827__auto___63406 = G__63407;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq63404){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq63404));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__63408 = cljs.core._EQ_;
var expr__63409 = (function (){var or__24751__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e63412){if((e63412 instanceof Error)){
var e = e63412;
return false;
} else {
throw e63412;

}
}})();
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__63408.call(null,"true",expr__63409))){
return true;
} else {
if(cljs.core.truth_(pred__63408.call(null,"false",expr__63409))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__63409)].join('')));
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
}catch (e63414){if((e63414 instanceof Error)){
var e = e63414;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e63414;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__63415){
var map__63418 = p__63415;
var map__63418__$1 = ((((!((map__63418 == null)))?((((map__63418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63418):map__63418);
var message = cljs.core.get.call(null,map__63418__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__63418__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__37979__auto___63580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___63580,ch){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___63580,ch){
return (function (state_63549){
var state_val_63550 = (state_63549[(1)]);
if((state_val_63550 === (7))){
var inst_63545 = (state_63549[(2)]);
var state_63549__$1 = state_63549;
var statearr_63551_63581 = state_63549__$1;
(statearr_63551_63581[(2)] = inst_63545);

(statearr_63551_63581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (1))){
var state_63549__$1 = state_63549;
var statearr_63552_63582 = state_63549__$1;
(statearr_63552_63582[(2)] = null);

(statearr_63552_63582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (4))){
var inst_63502 = (state_63549[(7)]);
var inst_63502__$1 = (state_63549[(2)]);
var state_63549__$1 = (function (){var statearr_63553 = state_63549;
(statearr_63553[(7)] = inst_63502__$1);

return statearr_63553;
})();
if(cljs.core.truth_(inst_63502__$1)){
var statearr_63554_63583 = state_63549__$1;
(statearr_63554_63583[(1)] = (5));

} else {
var statearr_63555_63584 = state_63549__$1;
(statearr_63555_63584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (15))){
var inst_63509 = (state_63549[(8)]);
var inst_63524 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_63509);
var inst_63525 = cljs.core.first.call(null,inst_63524);
var inst_63526 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_63525);
var inst_63527 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_63526)].join('');
var inst_63528 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_63527);
var state_63549__$1 = state_63549;
var statearr_63556_63585 = state_63549__$1;
(statearr_63556_63585[(2)] = inst_63528);

(statearr_63556_63585[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (13))){
var inst_63533 = (state_63549[(2)]);
var state_63549__$1 = state_63549;
var statearr_63557_63586 = state_63549__$1;
(statearr_63557_63586[(2)] = inst_63533);

(statearr_63557_63586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (6))){
var state_63549__$1 = state_63549;
var statearr_63558_63587 = state_63549__$1;
(statearr_63558_63587[(2)] = null);

(statearr_63558_63587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (17))){
var inst_63531 = (state_63549[(2)]);
var state_63549__$1 = state_63549;
var statearr_63559_63588 = state_63549__$1;
(statearr_63559_63588[(2)] = inst_63531);

(statearr_63559_63588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (3))){
var inst_63547 = (state_63549[(2)]);
var state_63549__$1 = state_63549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63549__$1,inst_63547);
} else {
if((state_val_63550 === (12))){
var inst_63508 = (state_63549[(9)]);
var inst_63522 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_63508,opts);
var state_63549__$1 = state_63549;
if(cljs.core.truth_(inst_63522)){
var statearr_63560_63589 = state_63549__$1;
(statearr_63560_63589[(1)] = (15));

} else {
var statearr_63561_63590 = state_63549__$1;
(statearr_63561_63590[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (2))){
var state_63549__$1 = state_63549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63549__$1,(4),ch);
} else {
if((state_val_63550 === (11))){
var inst_63509 = (state_63549[(8)]);
var inst_63514 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63515 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_63509);
var inst_63516 = cljs.core.async.timeout.call(null,(1000));
var inst_63517 = [inst_63515,inst_63516];
var inst_63518 = (new cljs.core.PersistentVector(null,2,(5),inst_63514,inst_63517,null));
var state_63549__$1 = state_63549;
return cljs.core.async.ioc_alts_BANG_.call(null,state_63549__$1,(14),inst_63518);
} else {
if((state_val_63550 === (9))){
var inst_63509 = (state_63549[(8)]);
var inst_63535 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_63536 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_63509);
var inst_63537 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_63536);
var inst_63538 = [cljs.core.str("Not loading: "),cljs.core.str(inst_63537)].join('');
var inst_63539 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_63538);
var state_63549__$1 = (function (){var statearr_63562 = state_63549;
(statearr_63562[(10)] = inst_63535);

return statearr_63562;
})();
var statearr_63563_63591 = state_63549__$1;
(statearr_63563_63591[(2)] = inst_63539);

(statearr_63563_63591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (5))){
var inst_63502 = (state_63549[(7)]);
var inst_63504 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_63505 = (new cljs.core.PersistentArrayMap(null,2,inst_63504,null));
var inst_63506 = (new cljs.core.PersistentHashSet(null,inst_63505,null));
var inst_63507 = figwheel.client.focus_msgs.call(null,inst_63506,inst_63502);
var inst_63508 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_63507);
var inst_63509 = cljs.core.first.call(null,inst_63507);
var inst_63510 = figwheel.client.autoload_QMARK_.call(null);
var state_63549__$1 = (function (){var statearr_63564 = state_63549;
(statearr_63564[(8)] = inst_63509);

(statearr_63564[(9)] = inst_63508);

return statearr_63564;
})();
if(cljs.core.truth_(inst_63510)){
var statearr_63565_63592 = state_63549__$1;
(statearr_63565_63592[(1)] = (8));

} else {
var statearr_63566_63593 = state_63549__$1;
(statearr_63566_63593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (14))){
var inst_63520 = (state_63549[(2)]);
var state_63549__$1 = state_63549;
var statearr_63567_63594 = state_63549__$1;
(statearr_63567_63594[(2)] = inst_63520);

(statearr_63567_63594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (16))){
var state_63549__$1 = state_63549;
var statearr_63568_63595 = state_63549__$1;
(statearr_63568_63595[(2)] = null);

(statearr_63568_63595[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (10))){
var inst_63541 = (state_63549[(2)]);
var state_63549__$1 = (function (){var statearr_63569 = state_63549;
(statearr_63569[(11)] = inst_63541);

return statearr_63569;
})();
var statearr_63570_63596 = state_63549__$1;
(statearr_63570_63596[(2)] = null);

(statearr_63570_63596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63550 === (8))){
var inst_63508 = (state_63549[(9)]);
var inst_63512 = figwheel.client.reload_file_state_QMARK_.call(null,inst_63508,opts);
var state_63549__$1 = state_63549;
if(cljs.core.truth_(inst_63512)){
var statearr_63571_63597 = state_63549__$1;
(statearr_63571_63597[(1)] = (11));

} else {
var statearr_63572_63598 = state_63549__$1;
(statearr_63572_63598[(1)] = (12));

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
});})(c__37979__auto___63580,ch))
;
return ((function (switch__37867__auto__,c__37979__auto___63580,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37868__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37868__auto____0 = (function (){
var statearr_63576 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63576[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37868__auto__);

(statearr_63576[(1)] = (1));

return statearr_63576;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37868__auto____1 = (function (state_63549){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_63549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e63577){if((e63577 instanceof Object)){
var ex__37871__auto__ = e63577;
var statearr_63578_63599 = state_63549;
(statearr_63578_63599[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63600 = state_63549;
state_63549 = G__63600;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37868__auto__ = function(state_63549){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37868__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37868__auto____1.call(this,state_63549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37868__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37868__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___63580,ch))
})();
var state__37981__auto__ = (function (){var statearr_63579 = f__37980__auto__.call(null);
(statearr_63579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___63580);

return statearr_63579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___63580,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__63601_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__63601_SHARP_));
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
var base_path_63604 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_63604){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e63603){if((e63603 instanceof Error)){
var e = e63603;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_63604], null));
} else {
var e = e63603;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_63604))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__63605){
var map__63614 = p__63605;
var map__63614__$1 = ((((!((map__63614 == null)))?((((map__63614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63614):map__63614);
var opts = map__63614__$1;
var build_id = cljs.core.get.call(null,map__63614__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__63614,map__63614__$1,opts,build_id){
return (function (p__63616){
var vec__63617 = p__63616;
var seq__63618 = cljs.core.seq.call(null,vec__63617);
var first__63619 = cljs.core.first.call(null,seq__63618);
var seq__63618__$1 = cljs.core.next.call(null,seq__63618);
var map__63620 = first__63619;
var map__63620__$1 = ((((!((map__63620 == null)))?((((map__63620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63620):map__63620);
var msg = map__63620__$1;
var msg_name = cljs.core.get.call(null,map__63620__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__63618__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__63617,seq__63618,first__63619,seq__63618__$1,map__63620,map__63620__$1,msg,msg_name,_,map__63614,map__63614__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__63617,seq__63618,first__63619,seq__63618__$1,map__63620,map__63620__$1,msg,msg_name,_,map__63614,map__63614__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__63614,map__63614__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__63628){
var vec__63629 = p__63628;
var seq__63630 = cljs.core.seq.call(null,vec__63629);
var first__63631 = cljs.core.first.call(null,seq__63630);
var seq__63630__$1 = cljs.core.next.call(null,seq__63630);
var map__63632 = first__63631;
var map__63632__$1 = ((((!((map__63632 == null)))?((((map__63632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63632):map__63632);
var msg = map__63632__$1;
var msg_name = cljs.core.get.call(null,map__63632__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__63630__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__63634){
var map__63646 = p__63634;
var map__63646__$1 = ((((!((map__63646 == null)))?((((map__63646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63646):map__63646);
var on_compile_warning = cljs.core.get.call(null,map__63646__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__63646__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__63646,map__63646__$1,on_compile_warning,on_compile_fail){
return (function (p__63648){
var vec__63649 = p__63648;
var seq__63650 = cljs.core.seq.call(null,vec__63649);
var first__63651 = cljs.core.first.call(null,seq__63650);
var seq__63650__$1 = cljs.core.next.call(null,seq__63650);
var map__63652 = first__63651;
var map__63652__$1 = ((((!((map__63652 == null)))?((((map__63652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63652):map__63652);
var msg = map__63652__$1;
var msg_name = cljs.core.get.call(null,map__63652__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__63650__$1;
var pred__63654 = cljs.core._EQ_;
var expr__63655 = msg_name;
if(cljs.core.truth_(pred__63654.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__63655))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__63654.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__63655))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__63646,map__63646__$1,on_compile_warning,on_compile_fail))
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
var c__37979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto__,msg_hist,msg_names,msg){
return (function (state_63883){
var state_val_63884 = (state_63883[(1)]);
if((state_val_63884 === (7))){
var inst_63803 = (state_63883[(2)]);
var state_63883__$1 = state_63883;
if(cljs.core.truth_(inst_63803)){
var statearr_63885_63935 = state_63883__$1;
(statearr_63885_63935[(1)] = (8));

} else {
var statearr_63886_63936 = state_63883__$1;
(statearr_63886_63936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (20))){
var inst_63877 = (state_63883[(2)]);
var state_63883__$1 = state_63883;
var statearr_63887_63937 = state_63883__$1;
(statearr_63887_63937[(2)] = inst_63877);

(statearr_63887_63937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (27))){
var inst_63873 = (state_63883[(2)]);
var state_63883__$1 = state_63883;
var statearr_63888_63938 = state_63883__$1;
(statearr_63888_63938[(2)] = inst_63873);

(statearr_63888_63938[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (1))){
var inst_63796 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_63883__$1 = state_63883;
if(cljs.core.truth_(inst_63796)){
var statearr_63889_63939 = state_63883__$1;
(statearr_63889_63939[(1)] = (2));

} else {
var statearr_63890_63940 = state_63883__$1;
(statearr_63890_63940[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (24))){
var inst_63875 = (state_63883[(2)]);
var state_63883__$1 = state_63883;
var statearr_63891_63941 = state_63883__$1;
(statearr_63891_63941[(2)] = inst_63875);

(statearr_63891_63941[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (4))){
var inst_63881 = (state_63883[(2)]);
var state_63883__$1 = state_63883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63883__$1,inst_63881);
} else {
if((state_val_63884 === (15))){
var inst_63879 = (state_63883[(2)]);
var state_63883__$1 = state_63883;
var statearr_63892_63942 = state_63883__$1;
(statearr_63892_63942[(2)] = inst_63879);

(statearr_63892_63942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (21))){
var inst_63832 = (state_63883[(2)]);
var inst_63833 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_63834 = figwheel.client.auto_jump_to_error.call(null,opts,inst_63833);
var state_63883__$1 = (function (){var statearr_63893 = state_63883;
(statearr_63893[(7)] = inst_63832);

return statearr_63893;
})();
var statearr_63894_63943 = state_63883__$1;
(statearr_63894_63943[(2)] = inst_63834);

(statearr_63894_63943[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (31))){
var inst_63862 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_63883__$1 = state_63883;
if(cljs.core.truth_(inst_63862)){
var statearr_63895_63944 = state_63883__$1;
(statearr_63895_63944[(1)] = (34));

} else {
var statearr_63896_63945 = state_63883__$1;
(statearr_63896_63945[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (32))){
var inst_63871 = (state_63883[(2)]);
var state_63883__$1 = state_63883;
var statearr_63897_63946 = state_63883__$1;
(statearr_63897_63946[(2)] = inst_63871);

(statearr_63897_63946[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (33))){
var inst_63858 = (state_63883[(2)]);
var inst_63859 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_63860 = figwheel.client.auto_jump_to_error.call(null,opts,inst_63859);
var state_63883__$1 = (function (){var statearr_63898 = state_63883;
(statearr_63898[(8)] = inst_63858);

return statearr_63898;
})();
var statearr_63899_63947 = state_63883__$1;
(statearr_63899_63947[(2)] = inst_63860);

(statearr_63899_63947[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (13))){
var inst_63817 = figwheel.client.heads_up.clear.call(null);
var state_63883__$1 = state_63883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63883__$1,(16),inst_63817);
} else {
if((state_val_63884 === (22))){
var inst_63838 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_63839 = figwheel.client.heads_up.append_warning_message.call(null,inst_63838);
var state_63883__$1 = state_63883;
var statearr_63900_63948 = state_63883__$1;
(statearr_63900_63948[(2)] = inst_63839);

(statearr_63900_63948[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (36))){
var inst_63869 = (state_63883[(2)]);
var state_63883__$1 = state_63883;
var statearr_63901_63949 = state_63883__$1;
(statearr_63901_63949[(2)] = inst_63869);

(statearr_63901_63949[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (29))){
var inst_63849 = (state_63883[(2)]);
var inst_63850 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_63851 = figwheel.client.auto_jump_to_error.call(null,opts,inst_63850);
var state_63883__$1 = (function (){var statearr_63902 = state_63883;
(statearr_63902[(9)] = inst_63849);

return statearr_63902;
})();
var statearr_63903_63950 = state_63883__$1;
(statearr_63903_63950[(2)] = inst_63851);

(statearr_63903_63950[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (6))){
var inst_63798 = (state_63883[(10)]);
var state_63883__$1 = state_63883;
var statearr_63904_63951 = state_63883__$1;
(statearr_63904_63951[(2)] = inst_63798);

(statearr_63904_63951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (28))){
var inst_63845 = (state_63883[(2)]);
var inst_63846 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_63847 = figwheel.client.heads_up.display_warning.call(null,inst_63846);
var state_63883__$1 = (function (){var statearr_63905 = state_63883;
(statearr_63905[(11)] = inst_63845);

return statearr_63905;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63883__$1,(29),inst_63847);
} else {
if((state_val_63884 === (25))){
var inst_63843 = figwheel.client.heads_up.clear.call(null);
var state_63883__$1 = state_63883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63883__$1,(28),inst_63843);
} else {
if((state_val_63884 === (34))){
var inst_63864 = figwheel.client.heads_up.flash_loaded.call(null);
var state_63883__$1 = state_63883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63883__$1,(37),inst_63864);
} else {
if((state_val_63884 === (17))){
var inst_63823 = (state_63883[(2)]);
var inst_63824 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_63825 = figwheel.client.auto_jump_to_error.call(null,opts,inst_63824);
var state_63883__$1 = (function (){var statearr_63906 = state_63883;
(statearr_63906[(12)] = inst_63823);

return statearr_63906;
})();
var statearr_63907_63952 = state_63883__$1;
(statearr_63907_63952[(2)] = inst_63825);

(statearr_63907_63952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (3))){
var inst_63815 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_63883__$1 = state_63883;
if(cljs.core.truth_(inst_63815)){
var statearr_63908_63953 = state_63883__$1;
(statearr_63908_63953[(1)] = (13));

} else {
var statearr_63909_63954 = state_63883__$1;
(statearr_63909_63954[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (12))){
var inst_63811 = (state_63883[(2)]);
var state_63883__$1 = state_63883;
var statearr_63910_63955 = state_63883__$1;
(statearr_63910_63955[(2)] = inst_63811);

(statearr_63910_63955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (2))){
var inst_63798 = (state_63883[(10)]);
var inst_63798__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_63883__$1 = (function (){var statearr_63911 = state_63883;
(statearr_63911[(10)] = inst_63798__$1);

return statearr_63911;
})();
if(cljs.core.truth_(inst_63798__$1)){
var statearr_63912_63956 = state_63883__$1;
(statearr_63912_63956[(1)] = (5));

} else {
var statearr_63913_63957 = state_63883__$1;
(statearr_63913_63957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (23))){
var inst_63841 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_63883__$1 = state_63883;
if(cljs.core.truth_(inst_63841)){
var statearr_63914_63958 = state_63883__$1;
(statearr_63914_63958[(1)] = (25));

} else {
var statearr_63915_63959 = state_63883__$1;
(statearr_63915_63959[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (35))){
var state_63883__$1 = state_63883;
var statearr_63916_63960 = state_63883__$1;
(statearr_63916_63960[(2)] = null);

(statearr_63916_63960[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (19))){
var inst_63836 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_63883__$1 = state_63883;
if(cljs.core.truth_(inst_63836)){
var statearr_63917_63961 = state_63883__$1;
(statearr_63917_63961[(1)] = (22));

} else {
var statearr_63918_63962 = state_63883__$1;
(statearr_63918_63962[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (11))){
var inst_63807 = (state_63883[(2)]);
var state_63883__$1 = state_63883;
var statearr_63919_63963 = state_63883__$1;
(statearr_63919_63963[(2)] = inst_63807);

(statearr_63919_63963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (9))){
var inst_63809 = figwheel.client.heads_up.clear.call(null);
var state_63883__$1 = state_63883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63883__$1,(12),inst_63809);
} else {
if((state_val_63884 === (5))){
var inst_63800 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_63883__$1 = state_63883;
var statearr_63920_63964 = state_63883__$1;
(statearr_63920_63964[(2)] = inst_63800);

(statearr_63920_63964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (14))){
var inst_63827 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_63883__$1 = state_63883;
if(cljs.core.truth_(inst_63827)){
var statearr_63921_63965 = state_63883__$1;
(statearr_63921_63965[(1)] = (18));

} else {
var statearr_63922_63966 = state_63883__$1;
(statearr_63922_63966[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (26))){
var inst_63853 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_63883__$1 = state_63883;
if(cljs.core.truth_(inst_63853)){
var statearr_63923_63967 = state_63883__$1;
(statearr_63923_63967[(1)] = (30));

} else {
var statearr_63924_63968 = state_63883__$1;
(statearr_63924_63968[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (16))){
var inst_63819 = (state_63883[(2)]);
var inst_63820 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_63821 = figwheel.client.heads_up.display_exception.call(null,inst_63820);
var state_63883__$1 = (function (){var statearr_63925 = state_63883;
(statearr_63925[(13)] = inst_63819);

return statearr_63925;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63883__$1,(17),inst_63821);
} else {
if((state_val_63884 === (30))){
var inst_63855 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_63856 = figwheel.client.heads_up.display_warning.call(null,inst_63855);
var state_63883__$1 = state_63883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63883__$1,(33),inst_63856);
} else {
if((state_val_63884 === (10))){
var inst_63813 = (state_63883[(2)]);
var state_63883__$1 = state_63883;
var statearr_63926_63969 = state_63883__$1;
(statearr_63926_63969[(2)] = inst_63813);

(statearr_63926_63969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (18))){
var inst_63829 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_63830 = figwheel.client.heads_up.display_exception.call(null,inst_63829);
var state_63883__$1 = state_63883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63883__$1,(21),inst_63830);
} else {
if((state_val_63884 === (37))){
var inst_63866 = (state_63883[(2)]);
var state_63883__$1 = state_63883;
var statearr_63927_63970 = state_63883__$1;
(statearr_63927_63970[(2)] = inst_63866);

(statearr_63927_63970[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63884 === (8))){
var inst_63805 = figwheel.client.heads_up.flash_loaded.call(null);
var state_63883__$1 = state_63883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63883__$1,(11),inst_63805);
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
});})(c__37979__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__37867__auto__,c__37979__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37868__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37868__auto____0 = (function (){
var statearr_63931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63931[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37868__auto__);

(statearr_63931[(1)] = (1));

return statearr_63931;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37868__auto____1 = (function (state_63883){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_63883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e63932){if((e63932 instanceof Object)){
var ex__37871__auto__ = e63932;
var statearr_63933_63971 = state_63883;
(statearr_63933_63971[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63972 = state_63883;
state_63883 = G__63972;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37868__auto__ = function(state_63883){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37868__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37868__auto____1.call(this,state_63883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37868__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37868__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto__,msg_hist,msg_names,msg))
})();
var state__37981__auto__ = (function (){var statearr_63934 = f__37980__auto__.call(null);
(statearr_63934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto__);

return statearr_63934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto__,msg_hist,msg_names,msg))
);

return c__37979__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37979__auto___64035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto___64035,ch){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto___64035,ch){
return (function (state_64018){
var state_val_64019 = (state_64018[(1)]);
if((state_val_64019 === (1))){
var state_64018__$1 = state_64018;
var statearr_64020_64036 = state_64018__$1;
(statearr_64020_64036[(2)] = null);

(statearr_64020_64036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64019 === (2))){
var state_64018__$1 = state_64018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64018__$1,(4),ch);
} else {
if((state_val_64019 === (3))){
var inst_64016 = (state_64018[(2)]);
var state_64018__$1 = state_64018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64018__$1,inst_64016);
} else {
if((state_val_64019 === (4))){
var inst_64006 = (state_64018[(7)]);
var inst_64006__$1 = (state_64018[(2)]);
var state_64018__$1 = (function (){var statearr_64021 = state_64018;
(statearr_64021[(7)] = inst_64006__$1);

return statearr_64021;
})();
if(cljs.core.truth_(inst_64006__$1)){
var statearr_64022_64037 = state_64018__$1;
(statearr_64022_64037[(1)] = (5));

} else {
var statearr_64023_64038 = state_64018__$1;
(statearr_64023_64038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64019 === (5))){
var inst_64006 = (state_64018[(7)]);
var inst_64008 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_64006);
var state_64018__$1 = state_64018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64018__$1,(8),inst_64008);
} else {
if((state_val_64019 === (6))){
var state_64018__$1 = state_64018;
var statearr_64024_64039 = state_64018__$1;
(statearr_64024_64039[(2)] = null);

(statearr_64024_64039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64019 === (7))){
var inst_64014 = (state_64018[(2)]);
var state_64018__$1 = state_64018;
var statearr_64025_64040 = state_64018__$1;
(statearr_64025_64040[(2)] = inst_64014);

(statearr_64025_64040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64019 === (8))){
var inst_64010 = (state_64018[(2)]);
var state_64018__$1 = (function (){var statearr_64026 = state_64018;
(statearr_64026[(8)] = inst_64010);

return statearr_64026;
})();
var statearr_64027_64041 = state_64018__$1;
(statearr_64027_64041[(2)] = null);

(statearr_64027_64041[(1)] = (2));


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
});})(c__37979__auto___64035,ch))
;
return ((function (switch__37867__auto__,c__37979__auto___64035,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37868__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37868__auto____0 = (function (){
var statearr_64031 = [null,null,null,null,null,null,null,null,null];
(statearr_64031[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37868__auto__);

(statearr_64031[(1)] = (1));

return statearr_64031;
});
var figwheel$client$heads_up_plugin_$_state_machine__37868__auto____1 = (function (state_64018){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_64018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e64032){if((e64032 instanceof Object)){
var ex__37871__auto__ = e64032;
var statearr_64033_64042 = state_64018;
(statearr_64033_64042[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64043 = state_64018;
state_64018 = G__64043;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37868__auto__ = function(state_64018){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37868__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37868__auto____1.call(this,state_64018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37868__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37868__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto___64035,ch))
})();
var state__37981__auto__ = (function (){var statearr_64034 = f__37980__auto__.call(null);
(statearr_64034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto___64035);

return statearr_64034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto___64035,ch))
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
var c__37979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto__){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto__){
return (function (state_64064){
var state_val_64065 = (state_64064[(1)]);
if((state_val_64065 === (1))){
var inst_64059 = cljs.core.async.timeout.call(null,(3000));
var state_64064__$1 = state_64064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64064__$1,(2),inst_64059);
} else {
if((state_val_64065 === (2))){
var inst_64061 = (state_64064[(2)]);
var inst_64062 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_64064__$1 = (function (){var statearr_64066 = state_64064;
(statearr_64066[(7)] = inst_64061);

return statearr_64066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64064__$1,inst_64062);
} else {
return null;
}
}
});})(c__37979__auto__))
;
return ((function (switch__37867__auto__,c__37979__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__37868__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__37868__auto____0 = (function (){
var statearr_64070 = [null,null,null,null,null,null,null,null];
(statearr_64070[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37868__auto__);

(statearr_64070[(1)] = (1));

return statearr_64070;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37868__auto____1 = (function (state_64064){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_64064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e64071){if((e64071 instanceof Object)){
var ex__37871__auto__ = e64071;
var statearr_64072_64074 = state_64064;
(statearr_64072_64074[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64075 = state_64064;
state_64064 = G__64075;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37868__auto__ = function(state_64064){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37868__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37868__auto____1.call(this,state_64064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37868__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37868__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto__))
})();
var state__37981__auto__ = (function (){var statearr_64073 = f__37980__auto__.call(null);
(statearr_64073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto__);

return statearr_64073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto__))
);

return c__37979__auto__;
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
var c__37979__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37979__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__37980__auto__ = (function (){var switch__37867__auto__ = ((function (c__37979__auto__,figwheel_version,temp__4657__auto__){
return (function (state_64098){
var state_val_64099 = (state_64098[(1)]);
if((state_val_64099 === (1))){
var inst_64092 = cljs.core.async.timeout.call(null,(2000));
var state_64098__$1 = state_64098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64098__$1,(2),inst_64092);
} else {
if((state_val_64099 === (2))){
var inst_64094 = (state_64098[(2)]);
var inst_64095 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_64096 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_64095);
var state_64098__$1 = (function (){var statearr_64100 = state_64098;
(statearr_64100[(7)] = inst_64094);

return statearr_64100;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64098__$1,inst_64096);
} else {
return null;
}
}
});})(c__37979__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__37867__auto__,c__37979__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37868__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37868__auto____0 = (function (){
var statearr_64104 = [null,null,null,null,null,null,null,null];
(statearr_64104[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37868__auto__);

(statearr_64104[(1)] = (1));

return statearr_64104;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37868__auto____1 = (function (state_64098){
while(true){
var ret_value__37869__auto__ = (function (){try{while(true){
var result__37870__auto__ = switch__37867__auto__.call(null,state_64098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37870__auto__;
}
break;
}
}catch (e64105){if((e64105 instanceof Object)){
var ex__37871__auto__ = e64105;
var statearr_64106_64108 = state_64098;
(statearr_64106_64108[(5)] = ex__37871__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64109 = state_64098;
state_64098 = G__64109;
continue;
} else {
return ret_value__37869__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37868__auto__ = function(state_64098){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37868__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37868__auto____1.call(this,state_64098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37868__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37868__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37868__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37868__auto__;
})()
;})(switch__37867__auto__,c__37979__auto__,figwheel_version,temp__4657__auto__))
})();
var state__37981__auto__ = (function (){var statearr_64107 = f__37980__auto__.call(null);
(statearr_64107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37979__auto__);

return statearr_64107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37981__auto__);
});})(c__37979__auto__,figwheel_version,temp__4657__auto__))
);

return c__37979__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__64110){
var map__64114 = p__64110;
var map__64114__$1 = ((((!((map__64114 == null)))?((((map__64114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64114):map__64114);
var file = cljs.core.get.call(null,map__64114__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__64114__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__64114__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__64116 = "";
var G__64116__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__64116),cljs.core.str("file "),cljs.core.str(file)].join(''):G__64116);
var G__64116__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__64116__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__64116__$1);
if(cljs.core.truth_((function (){var and__24739__auto__ = line;
if(cljs.core.truth_(and__24739__auto__)){
return column;
} else {
return and__24739__auto__;
}
})())){
return [cljs.core.str(G__64116__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__64116__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__64117){
var map__64124 = p__64117;
var map__64124__$1 = ((((!((map__64124 == null)))?((((map__64124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64124):map__64124);
var ed = map__64124__$1;
var formatted_exception = cljs.core.get.call(null,map__64124__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__64124__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__64124__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__64126_64130 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__64127_64131 = null;
var count__64128_64132 = (0);
var i__64129_64133 = (0);
while(true){
if((i__64129_64133 < count__64128_64132)){
var msg_64134 = cljs.core._nth.call(null,chunk__64127_64131,i__64129_64133);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_64134);

var G__64135 = seq__64126_64130;
var G__64136 = chunk__64127_64131;
var G__64137 = count__64128_64132;
var G__64138 = (i__64129_64133 + (1));
seq__64126_64130 = G__64135;
chunk__64127_64131 = G__64136;
count__64128_64132 = G__64137;
i__64129_64133 = G__64138;
continue;
} else {
var temp__4657__auto___64139 = cljs.core.seq.call(null,seq__64126_64130);
if(temp__4657__auto___64139){
var seq__64126_64140__$1 = temp__4657__auto___64139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64126_64140__$1)){
var c__25562__auto___64141 = cljs.core.chunk_first.call(null,seq__64126_64140__$1);
var G__64142 = cljs.core.chunk_rest.call(null,seq__64126_64140__$1);
var G__64143 = c__25562__auto___64141;
var G__64144 = cljs.core.count.call(null,c__25562__auto___64141);
var G__64145 = (0);
seq__64126_64130 = G__64142;
chunk__64127_64131 = G__64143;
count__64128_64132 = G__64144;
i__64129_64133 = G__64145;
continue;
} else {
var msg_64146 = cljs.core.first.call(null,seq__64126_64140__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_64146);

var G__64147 = cljs.core.next.call(null,seq__64126_64140__$1);
var G__64148 = null;
var G__64149 = (0);
var G__64150 = (0);
seq__64126_64130 = G__64147;
chunk__64127_64131 = G__64148;
count__64128_64132 = G__64149;
i__64129_64133 = G__64150;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__64151){
var map__64154 = p__64151;
var map__64154__$1 = ((((!((map__64154 == null)))?((((map__64154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64154):map__64154);
var w = map__64154__$1;
var message = cljs.core.get.call(null,map__64154__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__64166 = cljs.core.seq.call(null,plugins);
var chunk__64167 = null;
var count__64168 = (0);
var i__64169 = (0);
while(true){
if((i__64169 < count__64168)){
var vec__64170 = cljs.core._nth.call(null,chunk__64167,i__64169);
var k = cljs.core.nth.call(null,vec__64170,(0),null);
var plugin = cljs.core.nth.call(null,vec__64170,(1),null);
if(cljs.core.truth_(plugin)){
var pl_64176 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__64166,chunk__64167,count__64168,i__64169,pl_64176,vec__64170,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_64176.call(null,msg_hist);
});})(seq__64166,chunk__64167,count__64168,i__64169,pl_64176,vec__64170,k,plugin))
);
} else {
}

var G__64177 = seq__64166;
var G__64178 = chunk__64167;
var G__64179 = count__64168;
var G__64180 = (i__64169 + (1));
seq__64166 = G__64177;
chunk__64167 = G__64178;
count__64168 = G__64179;
i__64169 = G__64180;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__64166);
if(temp__4657__auto__){
var seq__64166__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64166__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__64166__$1);
var G__64181 = cljs.core.chunk_rest.call(null,seq__64166__$1);
var G__64182 = c__25562__auto__;
var G__64183 = cljs.core.count.call(null,c__25562__auto__);
var G__64184 = (0);
seq__64166 = G__64181;
chunk__64167 = G__64182;
count__64168 = G__64183;
i__64169 = G__64184;
continue;
} else {
var vec__64173 = cljs.core.first.call(null,seq__64166__$1);
var k = cljs.core.nth.call(null,vec__64173,(0),null);
var plugin = cljs.core.nth.call(null,vec__64173,(1),null);
if(cljs.core.truth_(plugin)){
var pl_64185 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__64166,chunk__64167,count__64168,i__64169,pl_64185,vec__64173,k,plugin,seq__64166__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_64185.call(null,msg_hist);
});})(seq__64166,chunk__64167,count__64168,i__64169,pl_64185,vec__64173,k,plugin,seq__64166__$1,temp__4657__auto__))
);
} else {
}

var G__64186 = cljs.core.next.call(null,seq__64166__$1);
var G__64187 = null;
var G__64188 = (0);
var G__64189 = (0);
seq__64166 = G__64186;
chunk__64167 = G__64187;
count__64168 = G__64188;
i__64169 = G__64189;
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
var args64190 = [];
var len__25826__auto___64197 = arguments.length;
var i__25827__auto___64198 = (0);
while(true){
if((i__25827__auto___64198 < len__25826__auto___64197)){
args64190.push((arguments[i__25827__auto___64198]));

var G__64199 = (i__25827__auto___64198 + (1));
i__25827__auto___64198 = G__64199;
continue;
} else {
}
break;
}

var G__64192 = args64190.length;
switch (G__64192) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64190.length)].join('')));

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

var seq__64193_64201 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__64194_64202 = null;
var count__64195_64203 = (0);
var i__64196_64204 = (0);
while(true){
if((i__64196_64204 < count__64195_64203)){
var msg_64205 = cljs.core._nth.call(null,chunk__64194_64202,i__64196_64204);
figwheel.client.socket.handle_incoming_message.call(null,msg_64205);

var G__64206 = seq__64193_64201;
var G__64207 = chunk__64194_64202;
var G__64208 = count__64195_64203;
var G__64209 = (i__64196_64204 + (1));
seq__64193_64201 = G__64206;
chunk__64194_64202 = G__64207;
count__64195_64203 = G__64208;
i__64196_64204 = G__64209;
continue;
} else {
var temp__4657__auto___64210 = cljs.core.seq.call(null,seq__64193_64201);
if(temp__4657__auto___64210){
var seq__64193_64211__$1 = temp__4657__auto___64210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64193_64211__$1)){
var c__25562__auto___64212 = cljs.core.chunk_first.call(null,seq__64193_64211__$1);
var G__64213 = cljs.core.chunk_rest.call(null,seq__64193_64211__$1);
var G__64214 = c__25562__auto___64212;
var G__64215 = cljs.core.count.call(null,c__25562__auto___64212);
var G__64216 = (0);
seq__64193_64201 = G__64213;
chunk__64194_64202 = G__64214;
count__64195_64203 = G__64215;
i__64196_64204 = G__64216;
continue;
} else {
var msg_64217 = cljs.core.first.call(null,seq__64193_64211__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_64217);

var G__64218 = cljs.core.next.call(null,seq__64193_64211__$1);
var G__64219 = null;
var G__64220 = (0);
var G__64221 = (0);
seq__64193_64201 = G__64218;
chunk__64194_64202 = G__64219;
count__64195_64203 = G__64220;
i__64196_64204 = G__64221;
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
var len__25826__auto___64226 = arguments.length;
var i__25827__auto___64227 = (0);
while(true){
if((i__25827__auto___64227 < len__25826__auto___64226)){
args__25833__auto__.push((arguments[i__25827__auto___64227]));

var G__64228 = (i__25827__auto___64227 + (1));
i__25827__auto___64227 = G__64228;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__64223){
var map__64224 = p__64223;
var map__64224__$1 = ((((!((map__64224 == null)))?((((map__64224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64224):map__64224);
var opts = map__64224__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq64222){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64222));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e64230){if((e64230 instanceof Error)){
var e = e64230;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e64230;

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
return (function (p__64234){
var map__64235 = p__64234;
var map__64235__$1 = ((((!((map__64235 == null)))?((((map__64235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64235):map__64235);
var msg_name = cljs.core.get.call(null,map__64235__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1478399635341