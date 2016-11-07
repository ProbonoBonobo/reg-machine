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
var args41430 = [];
var len__25826__auto___41433 = arguments.length;
var i__25827__auto___41434 = (0);
while(true){
if((i__25827__auto___41434 < len__25826__auto___41433)){
args41430.push((arguments[i__25827__auto___41434]));

var G__41435 = (i__25827__auto___41434 + (1));
i__25827__auto___41434 = G__41435;
continue;
} else {
}
break;
}

var G__41432 = args41430.length;
switch (G__41432) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41430.length)].join('')));

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
var len__25826__auto___41438 = arguments.length;
var i__25827__auto___41439 = (0);
while(true){
if((i__25827__auto___41439 < len__25826__auto___41438)){
args__25833__auto__.push((arguments[i__25827__auto___41439]));

var G__41440 = (i__25827__auto___41439 + (1));
i__25827__auto___41439 = G__41440;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41437){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41437));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25833__auto__ = [];
var len__25826__auto___41442 = arguments.length;
var i__25827__auto___41443 = (0);
while(true){
if((i__25827__auto___41443 < len__25826__auto___41442)){
args__25833__auto__.push((arguments[i__25827__auto___41443]));

var G__41444 = (i__25827__auto___41443 + (1));
i__25827__auto___41443 = G__41444;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41441){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41441));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__41445 = cljs.core._EQ_;
var expr__41446 = (function (){var or__24751__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e41449){if((e41449 instanceof Error)){
var e = e41449;
return false;
} else {
throw e41449;

}
}})();
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__41445.call(null,"true",expr__41446))){
return true;
} else {
if(cljs.core.truth_(pred__41445.call(null,"false",expr__41446))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__41446)].join('')));
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
}catch (e41451){if((e41451 instanceof Error)){
var e = e41451;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e41451;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41452){
var map__41455 = p__41452;
var map__41455__$1 = ((((!((map__41455 == null)))?((((map__41455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41455):map__41455);
var message = cljs.core.get.call(null,map__41455__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41455__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__34203__auto___41617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___41617,ch){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___41617,ch){
return (function (state_41586){
var state_val_41587 = (state_41586[(1)]);
if((state_val_41587 === (7))){
var inst_41582 = (state_41586[(2)]);
var state_41586__$1 = state_41586;
var statearr_41588_41618 = state_41586__$1;
(statearr_41588_41618[(2)] = inst_41582);

(statearr_41588_41618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41587 === (1))){
var state_41586__$1 = state_41586;
var statearr_41589_41619 = state_41586__$1;
(statearr_41589_41619[(2)] = null);

(statearr_41589_41619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41587 === (4))){
var inst_41539 = (state_41586[(7)]);
var inst_41539__$1 = (state_41586[(2)]);
var state_41586__$1 = (function (){var statearr_41590 = state_41586;
(statearr_41590[(7)] = inst_41539__$1);

return statearr_41590;
})();
if(cljs.core.truth_(inst_41539__$1)){
var statearr_41591_41620 = state_41586__$1;
(statearr_41591_41620[(1)] = (5));

} else {
var statearr_41592_41621 = state_41586__$1;
(statearr_41592_41621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41587 === (15))){
var inst_41546 = (state_41586[(8)]);
var inst_41561 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41546);
var inst_41562 = cljs.core.first.call(null,inst_41561);
var inst_41563 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41562);
var inst_41564 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_41563)].join('');
var inst_41565 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41564);
var state_41586__$1 = state_41586;
var statearr_41593_41622 = state_41586__$1;
(statearr_41593_41622[(2)] = inst_41565);

(statearr_41593_41622[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41587 === (13))){
var inst_41570 = (state_41586[(2)]);
var state_41586__$1 = state_41586;
var statearr_41594_41623 = state_41586__$1;
(statearr_41594_41623[(2)] = inst_41570);

(statearr_41594_41623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41587 === (6))){
var state_41586__$1 = state_41586;
var statearr_41595_41624 = state_41586__$1;
(statearr_41595_41624[(2)] = null);

(statearr_41595_41624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41587 === (17))){
var inst_41568 = (state_41586[(2)]);
var state_41586__$1 = state_41586;
var statearr_41596_41625 = state_41586__$1;
(statearr_41596_41625[(2)] = inst_41568);

(statearr_41596_41625[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41587 === (3))){
var inst_41584 = (state_41586[(2)]);
var state_41586__$1 = state_41586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41586__$1,inst_41584);
} else {
if((state_val_41587 === (12))){
var inst_41545 = (state_41586[(9)]);
var inst_41559 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41545,opts);
var state_41586__$1 = state_41586;
if(cljs.core.truth_(inst_41559)){
var statearr_41597_41626 = state_41586__$1;
(statearr_41597_41626[(1)] = (15));

} else {
var statearr_41598_41627 = state_41586__$1;
(statearr_41598_41627[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41587 === (2))){
var state_41586__$1 = state_41586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41586__$1,(4),ch);
} else {
if((state_val_41587 === (11))){
var inst_41546 = (state_41586[(8)]);
var inst_41551 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41552 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41546);
var inst_41553 = cljs.core.async.timeout.call(null,(1000));
var inst_41554 = [inst_41552,inst_41553];
var inst_41555 = (new cljs.core.PersistentVector(null,2,(5),inst_41551,inst_41554,null));
var state_41586__$1 = state_41586;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41586__$1,(14),inst_41555);
} else {
if((state_val_41587 === (9))){
var inst_41546 = (state_41586[(8)]);
var inst_41572 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41573 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41546);
var inst_41574 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41573);
var inst_41575 = [cljs.core.str("Not loading: "),cljs.core.str(inst_41574)].join('');
var inst_41576 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41575);
var state_41586__$1 = (function (){var statearr_41599 = state_41586;
(statearr_41599[(10)] = inst_41572);

return statearr_41599;
})();
var statearr_41600_41628 = state_41586__$1;
(statearr_41600_41628[(2)] = inst_41576);

(statearr_41600_41628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41587 === (5))){
var inst_41539 = (state_41586[(7)]);
var inst_41541 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41542 = (new cljs.core.PersistentArrayMap(null,2,inst_41541,null));
var inst_41543 = (new cljs.core.PersistentHashSet(null,inst_41542,null));
var inst_41544 = figwheel.client.focus_msgs.call(null,inst_41543,inst_41539);
var inst_41545 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41544);
var inst_41546 = cljs.core.first.call(null,inst_41544);
var inst_41547 = figwheel.client.autoload_QMARK_.call(null);
var state_41586__$1 = (function (){var statearr_41601 = state_41586;
(statearr_41601[(8)] = inst_41546);

(statearr_41601[(9)] = inst_41545);

return statearr_41601;
})();
if(cljs.core.truth_(inst_41547)){
var statearr_41602_41629 = state_41586__$1;
(statearr_41602_41629[(1)] = (8));

} else {
var statearr_41603_41630 = state_41586__$1;
(statearr_41603_41630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41587 === (14))){
var inst_41557 = (state_41586[(2)]);
var state_41586__$1 = state_41586;
var statearr_41604_41631 = state_41586__$1;
(statearr_41604_41631[(2)] = inst_41557);

(statearr_41604_41631[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41587 === (16))){
var state_41586__$1 = state_41586;
var statearr_41605_41632 = state_41586__$1;
(statearr_41605_41632[(2)] = null);

(statearr_41605_41632[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41587 === (10))){
var inst_41578 = (state_41586[(2)]);
var state_41586__$1 = (function (){var statearr_41606 = state_41586;
(statearr_41606[(11)] = inst_41578);

return statearr_41606;
})();
var statearr_41607_41633 = state_41586__$1;
(statearr_41607_41633[(2)] = null);

(statearr_41607_41633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41587 === (8))){
var inst_41545 = (state_41586[(9)]);
var inst_41549 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41545,opts);
var state_41586__$1 = state_41586;
if(cljs.core.truth_(inst_41549)){
var statearr_41608_41634 = state_41586__$1;
(statearr_41608_41634[(1)] = (11));

} else {
var statearr_41609_41635 = state_41586__$1;
(statearr_41609_41635[(1)] = (12));

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
});})(c__34203__auto___41617,ch))
;
return ((function (switch__34091__auto__,c__34203__auto___41617,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34092__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34092__auto____0 = (function (){
var statearr_41613 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41613[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34092__auto__);

(statearr_41613[(1)] = (1));

return statearr_41613;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34092__auto____1 = (function (state_41586){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_41586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e41614){if((e41614 instanceof Object)){
var ex__34095__auto__ = e41614;
var statearr_41615_41636 = state_41586;
(statearr_41615_41636[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41637 = state_41586;
state_41586 = G__41637;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34092__auto__ = function(state_41586){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34092__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34092__auto____1.call(this,state_41586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34092__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34092__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___41617,ch))
})();
var state__34205__auto__ = (function (){var statearr_41616 = f__34204__auto__.call(null);
(statearr_41616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___41617);

return statearr_41616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___41617,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41638_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41638_SHARP_));
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
var base_path_41641 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41641){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e41640){if((e41640 instanceof Error)){
var e = e41640;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41641], null));
} else {
var e = e41640;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_41641))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41642){
var map__41651 = p__41642;
var map__41651__$1 = ((((!((map__41651 == null)))?((((map__41651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41651):map__41651);
var opts = map__41651__$1;
var build_id = cljs.core.get.call(null,map__41651__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41651,map__41651__$1,opts,build_id){
return (function (p__41653){
var vec__41654 = p__41653;
var seq__41655 = cljs.core.seq.call(null,vec__41654);
var first__41656 = cljs.core.first.call(null,seq__41655);
var seq__41655__$1 = cljs.core.next.call(null,seq__41655);
var map__41657 = first__41656;
var map__41657__$1 = ((((!((map__41657 == null)))?((((map__41657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41657):map__41657);
var msg = map__41657__$1;
var msg_name = cljs.core.get.call(null,map__41657__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41655__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41654,seq__41655,first__41656,seq__41655__$1,map__41657,map__41657__$1,msg,msg_name,_,map__41651,map__41651__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41654,seq__41655,first__41656,seq__41655__$1,map__41657,map__41657__$1,msg,msg_name,_,map__41651,map__41651__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41651,map__41651__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41665){
var vec__41666 = p__41665;
var seq__41667 = cljs.core.seq.call(null,vec__41666);
var first__41668 = cljs.core.first.call(null,seq__41667);
var seq__41667__$1 = cljs.core.next.call(null,seq__41667);
var map__41669 = first__41668;
var map__41669__$1 = ((((!((map__41669 == null)))?((((map__41669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41669):map__41669);
var msg = map__41669__$1;
var msg_name = cljs.core.get.call(null,map__41669__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41667__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41671){
var map__41683 = p__41671;
var map__41683__$1 = ((((!((map__41683 == null)))?((((map__41683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41683):map__41683);
var on_compile_warning = cljs.core.get.call(null,map__41683__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41683__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41683,map__41683__$1,on_compile_warning,on_compile_fail){
return (function (p__41685){
var vec__41686 = p__41685;
var seq__41687 = cljs.core.seq.call(null,vec__41686);
var first__41688 = cljs.core.first.call(null,seq__41687);
var seq__41687__$1 = cljs.core.next.call(null,seq__41687);
var map__41689 = first__41688;
var map__41689__$1 = ((((!((map__41689 == null)))?((((map__41689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41689):map__41689);
var msg = map__41689__$1;
var msg_name = cljs.core.get.call(null,map__41689__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41687__$1;
var pred__41691 = cljs.core._EQ_;
var expr__41692 = msg_name;
if(cljs.core.truth_(pred__41691.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41692))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41691.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41692))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41683,map__41683__$1,on_compile_warning,on_compile_fail))
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
var c__34203__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto__,msg_hist,msg_names,msg){
return (function (state_41920){
var state_val_41921 = (state_41920[(1)]);
if((state_val_41921 === (7))){
var inst_41840 = (state_41920[(2)]);
var state_41920__$1 = state_41920;
if(cljs.core.truth_(inst_41840)){
var statearr_41922_41972 = state_41920__$1;
(statearr_41922_41972[(1)] = (8));

} else {
var statearr_41923_41973 = state_41920__$1;
(statearr_41923_41973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (20))){
var inst_41914 = (state_41920[(2)]);
var state_41920__$1 = state_41920;
var statearr_41924_41974 = state_41920__$1;
(statearr_41924_41974[(2)] = inst_41914);

(statearr_41924_41974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (27))){
var inst_41910 = (state_41920[(2)]);
var state_41920__$1 = state_41920;
var statearr_41925_41975 = state_41920__$1;
(statearr_41925_41975[(2)] = inst_41910);

(statearr_41925_41975[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (1))){
var inst_41833 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41920__$1 = state_41920;
if(cljs.core.truth_(inst_41833)){
var statearr_41926_41976 = state_41920__$1;
(statearr_41926_41976[(1)] = (2));

} else {
var statearr_41927_41977 = state_41920__$1;
(statearr_41927_41977[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (24))){
var inst_41912 = (state_41920[(2)]);
var state_41920__$1 = state_41920;
var statearr_41928_41978 = state_41920__$1;
(statearr_41928_41978[(2)] = inst_41912);

(statearr_41928_41978[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (4))){
var inst_41918 = (state_41920[(2)]);
var state_41920__$1 = state_41920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41920__$1,inst_41918);
} else {
if((state_val_41921 === (15))){
var inst_41916 = (state_41920[(2)]);
var state_41920__$1 = state_41920;
var statearr_41929_41979 = state_41920__$1;
(statearr_41929_41979[(2)] = inst_41916);

(statearr_41929_41979[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (21))){
var inst_41869 = (state_41920[(2)]);
var inst_41870 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41871 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41870);
var state_41920__$1 = (function (){var statearr_41930 = state_41920;
(statearr_41930[(7)] = inst_41869);

return statearr_41930;
})();
var statearr_41931_41980 = state_41920__$1;
(statearr_41931_41980[(2)] = inst_41871);

(statearr_41931_41980[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (31))){
var inst_41899 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41920__$1 = state_41920;
if(cljs.core.truth_(inst_41899)){
var statearr_41932_41981 = state_41920__$1;
(statearr_41932_41981[(1)] = (34));

} else {
var statearr_41933_41982 = state_41920__$1;
(statearr_41933_41982[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (32))){
var inst_41908 = (state_41920[(2)]);
var state_41920__$1 = state_41920;
var statearr_41934_41983 = state_41920__$1;
(statearr_41934_41983[(2)] = inst_41908);

(statearr_41934_41983[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (33))){
var inst_41895 = (state_41920[(2)]);
var inst_41896 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41897 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41896);
var state_41920__$1 = (function (){var statearr_41935 = state_41920;
(statearr_41935[(8)] = inst_41895);

return statearr_41935;
})();
var statearr_41936_41984 = state_41920__$1;
(statearr_41936_41984[(2)] = inst_41897);

(statearr_41936_41984[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (13))){
var inst_41854 = figwheel.client.heads_up.clear.call(null);
var state_41920__$1 = state_41920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41920__$1,(16),inst_41854);
} else {
if((state_val_41921 === (22))){
var inst_41875 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41876 = figwheel.client.heads_up.append_warning_message.call(null,inst_41875);
var state_41920__$1 = state_41920;
var statearr_41937_41985 = state_41920__$1;
(statearr_41937_41985[(2)] = inst_41876);

(statearr_41937_41985[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (36))){
var inst_41906 = (state_41920[(2)]);
var state_41920__$1 = state_41920;
var statearr_41938_41986 = state_41920__$1;
(statearr_41938_41986[(2)] = inst_41906);

(statearr_41938_41986[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (29))){
var inst_41886 = (state_41920[(2)]);
var inst_41887 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41888 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41887);
var state_41920__$1 = (function (){var statearr_41939 = state_41920;
(statearr_41939[(9)] = inst_41886);

return statearr_41939;
})();
var statearr_41940_41987 = state_41920__$1;
(statearr_41940_41987[(2)] = inst_41888);

(statearr_41940_41987[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (6))){
var inst_41835 = (state_41920[(10)]);
var state_41920__$1 = state_41920;
var statearr_41941_41988 = state_41920__$1;
(statearr_41941_41988[(2)] = inst_41835);

(statearr_41941_41988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (28))){
var inst_41882 = (state_41920[(2)]);
var inst_41883 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41884 = figwheel.client.heads_up.display_warning.call(null,inst_41883);
var state_41920__$1 = (function (){var statearr_41942 = state_41920;
(statearr_41942[(11)] = inst_41882);

return statearr_41942;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41920__$1,(29),inst_41884);
} else {
if((state_val_41921 === (25))){
var inst_41880 = figwheel.client.heads_up.clear.call(null);
var state_41920__$1 = state_41920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41920__$1,(28),inst_41880);
} else {
if((state_val_41921 === (34))){
var inst_41901 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41920__$1 = state_41920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41920__$1,(37),inst_41901);
} else {
if((state_val_41921 === (17))){
var inst_41860 = (state_41920[(2)]);
var inst_41861 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41862 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41861);
var state_41920__$1 = (function (){var statearr_41943 = state_41920;
(statearr_41943[(12)] = inst_41860);

return statearr_41943;
})();
var statearr_41944_41989 = state_41920__$1;
(statearr_41944_41989[(2)] = inst_41862);

(statearr_41944_41989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (3))){
var inst_41852 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41920__$1 = state_41920;
if(cljs.core.truth_(inst_41852)){
var statearr_41945_41990 = state_41920__$1;
(statearr_41945_41990[(1)] = (13));

} else {
var statearr_41946_41991 = state_41920__$1;
(statearr_41946_41991[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (12))){
var inst_41848 = (state_41920[(2)]);
var state_41920__$1 = state_41920;
var statearr_41947_41992 = state_41920__$1;
(statearr_41947_41992[(2)] = inst_41848);

(statearr_41947_41992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (2))){
var inst_41835 = (state_41920[(10)]);
var inst_41835__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41920__$1 = (function (){var statearr_41948 = state_41920;
(statearr_41948[(10)] = inst_41835__$1);

return statearr_41948;
})();
if(cljs.core.truth_(inst_41835__$1)){
var statearr_41949_41993 = state_41920__$1;
(statearr_41949_41993[(1)] = (5));

} else {
var statearr_41950_41994 = state_41920__$1;
(statearr_41950_41994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (23))){
var inst_41878 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41920__$1 = state_41920;
if(cljs.core.truth_(inst_41878)){
var statearr_41951_41995 = state_41920__$1;
(statearr_41951_41995[(1)] = (25));

} else {
var statearr_41952_41996 = state_41920__$1;
(statearr_41952_41996[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (35))){
var state_41920__$1 = state_41920;
var statearr_41953_41997 = state_41920__$1;
(statearr_41953_41997[(2)] = null);

(statearr_41953_41997[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (19))){
var inst_41873 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41920__$1 = state_41920;
if(cljs.core.truth_(inst_41873)){
var statearr_41954_41998 = state_41920__$1;
(statearr_41954_41998[(1)] = (22));

} else {
var statearr_41955_41999 = state_41920__$1;
(statearr_41955_41999[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (11))){
var inst_41844 = (state_41920[(2)]);
var state_41920__$1 = state_41920;
var statearr_41956_42000 = state_41920__$1;
(statearr_41956_42000[(2)] = inst_41844);

(statearr_41956_42000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (9))){
var inst_41846 = figwheel.client.heads_up.clear.call(null);
var state_41920__$1 = state_41920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41920__$1,(12),inst_41846);
} else {
if((state_val_41921 === (5))){
var inst_41837 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41920__$1 = state_41920;
var statearr_41957_42001 = state_41920__$1;
(statearr_41957_42001[(2)] = inst_41837);

(statearr_41957_42001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (14))){
var inst_41864 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41920__$1 = state_41920;
if(cljs.core.truth_(inst_41864)){
var statearr_41958_42002 = state_41920__$1;
(statearr_41958_42002[(1)] = (18));

} else {
var statearr_41959_42003 = state_41920__$1;
(statearr_41959_42003[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (26))){
var inst_41890 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41920__$1 = state_41920;
if(cljs.core.truth_(inst_41890)){
var statearr_41960_42004 = state_41920__$1;
(statearr_41960_42004[(1)] = (30));

} else {
var statearr_41961_42005 = state_41920__$1;
(statearr_41961_42005[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (16))){
var inst_41856 = (state_41920[(2)]);
var inst_41857 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41858 = figwheel.client.heads_up.display_exception.call(null,inst_41857);
var state_41920__$1 = (function (){var statearr_41962 = state_41920;
(statearr_41962[(13)] = inst_41856);

return statearr_41962;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41920__$1,(17),inst_41858);
} else {
if((state_val_41921 === (30))){
var inst_41892 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41893 = figwheel.client.heads_up.display_warning.call(null,inst_41892);
var state_41920__$1 = state_41920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41920__$1,(33),inst_41893);
} else {
if((state_val_41921 === (10))){
var inst_41850 = (state_41920[(2)]);
var state_41920__$1 = state_41920;
var statearr_41963_42006 = state_41920__$1;
(statearr_41963_42006[(2)] = inst_41850);

(statearr_41963_42006[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (18))){
var inst_41866 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41867 = figwheel.client.heads_up.display_exception.call(null,inst_41866);
var state_41920__$1 = state_41920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41920__$1,(21),inst_41867);
} else {
if((state_val_41921 === (37))){
var inst_41903 = (state_41920[(2)]);
var state_41920__$1 = state_41920;
var statearr_41964_42007 = state_41920__$1;
(statearr_41964_42007[(2)] = inst_41903);

(statearr_41964_42007[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (8))){
var inst_41842 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41920__$1 = state_41920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41920__$1,(11),inst_41842);
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
});})(c__34203__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34091__auto__,c__34203__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34092__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34092__auto____0 = (function (){
var statearr_41968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41968[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34092__auto__);

(statearr_41968[(1)] = (1));

return statearr_41968;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34092__auto____1 = (function (state_41920){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_41920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e41969){if((e41969 instanceof Object)){
var ex__34095__auto__ = e41969;
var statearr_41970_42008 = state_41920;
(statearr_41970_42008[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42009 = state_41920;
state_41920 = G__42009;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34092__auto__ = function(state_41920){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34092__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34092__auto____1.call(this,state_41920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34092__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34092__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto__,msg_hist,msg_names,msg))
})();
var state__34205__auto__ = (function (){var statearr_41971 = f__34204__auto__.call(null);
(statearr_41971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto__);

return statearr_41971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto__,msg_hist,msg_names,msg))
);

return c__34203__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34203__auto___42072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto___42072,ch){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto___42072,ch){
return (function (state_42055){
var state_val_42056 = (state_42055[(1)]);
if((state_val_42056 === (1))){
var state_42055__$1 = state_42055;
var statearr_42057_42073 = state_42055__$1;
(statearr_42057_42073[(2)] = null);

(statearr_42057_42073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42056 === (2))){
var state_42055__$1 = state_42055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42055__$1,(4),ch);
} else {
if((state_val_42056 === (3))){
var inst_42053 = (state_42055[(2)]);
var state_42055__$1 = state_42055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42055__$1,inst_42053);
} else {
if((state_val_42056 === (4))){
var inst_42043 = (state_42055[(7)]);
var inst_42043__$1 = (state_42055[(2)]);
var state_42055__$1 = (function (){var statearr_42058 = state_42055;
(statearr_42058[(7)] = inst_42043__$1);

return statearr_42058;
})();
if(cljs.core.truth_(inst_42043__$1)){
var statearr_42059_42074 = state_42055__$1;
(statearr_42059_42074[(1)] = (5));

} else {
var statearr_42060_42075 = state_42055__$1;
(statearr_42060_42075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42056 === (5))){
var inst_42043 = (state_42055[(7)]);
var inst_42045 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42043);
var state_42055__$1 = state_42055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42055__$1,(8),inst_42045);
} else {
if((state_val_42056 === (6))){
var state_42055__$1 = state_42055;
var statearr_42061_42076 = state_42055__$1;
(statearr_42061_42076[(2)] = null);

(statearr_42061_42076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42056 === (7))){
var inst_42051 = (state_42055[(2)]);
var state_42055__$1 = state_42055;
var statearr_42062_42077 = state_42055__$1;
(statearr_42062_42077[(2)] = inst_42051);

(statearr_42062_42077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42056 === (8))){
var inst_42047 = (state_42055[(2)]);
var state_42055__$1 = (function (){var statearr_42063 = state_42055;
(statearr_42063[(8)] = inst_42047);

return statearr_42063;
})();
var statearr_42064_42078 = state_42055__$1;
(statearr_42064_42078[(2)] = null);

(statearr_42064_42078[(1)] = (2));


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
});})(c__34203__auto___42072,ch))
;
return ((function (switch__34091__auto__,c__34203__auto___42072,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34092__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34092__auto____0 = (function (){
var statearr_42068 = [null,null,null,null,null,null,null,null,null];
(statearr_42068[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34092__auto__);

(statearr_42068[(1)] = (1));

return statearr_42068;
});
var figwheel$client$heads_up_plugin_$_state_machine__34092__auto____1 = (function (state_42055){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_42055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e42069){if((e42069 instanceof Object)){
var ex__34095__auto__ = e42069;
var statearr_42070_42079 = state_42055;
(statearr_42070_42079[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42080 = state_42055;
state_42055 = G__42080;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34092__auto__ = function(state_42055){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34092__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34092__auto____1.call(this,state_42055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34092__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34092__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto___42072,ch))
})();
var state__34205__auto__ = (function (){var statearr_42071 = f__34204__auto__.call(null);
(statearr_42071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto___42072);

return statearr_42071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto___42072,ch))
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
var c__34203__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto__){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto__){
return (function (state_42101){
var state_val_42102 = (state_42101[(1)]);
if((state_val_42102 === (1))){
var inst_42096 = cljs.core.async.timeout.call(null,(3000));
var state_42101__$1 = state_42101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42101__$1,(2),inst_42096);
} else {
if((state_val_42102 === (2))){
var inst_42098 = (state_42101[(2)]);
var inst_42099 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42101__$1 = (function (){var statearr_42103 = state_42101;
(statearr_42103[(7)] = inst_42098);

return statearr_42103;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42101__$1,inst_42099);
} else {
return null;
}
}
});})(c__34203__auto__))
;
return ((function (switch__34091__auto__,c__34203__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34092__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34092__auto____0 = (function (){
var statearr_42107 = [null,null,null,null,null,null,null,null];
(statearr_42107[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34092__auto__);

(statearr_42107[(1)] = (1));

return statearr_42107;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34092__auto____1 = (function (state_42101){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_42101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e42108){if((e42108 instanceof Object)){
var ex__34095__auto__ = e42108;
var statearr_42109_42111 = state_42101;
(statearr_42109_42111[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42112 = state_42101;
state_42101 = G__42112;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34092__auto__ = function(state_42101){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34092__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34092__auto____1.call(this,state_42101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34092__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34092__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto__))
})();
var state__34205__auto__ = (function (){var statearr_42110 = f__34204__auto__.call(null);
(statearr_42110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto__);

return statearr_42110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto__))
);

return c__34203__auto__;
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
var c__34203__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34203__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__34204__auto__ = (function (){var switch__34091__auto__ = ((function (c__34203__auto__,figwheel_version,temp__4657__auto__){
return (function (state_42135){
var state_val_42136 = (state_42135[(1)]);
if((state_val_42136 === (1))){
var inst_42129 = cljs.core.async.timeout.call(null,(2000));
var state_42135__$1 = state_42135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42135__$1,(2),inst_42129);
} else {
if((state_val_42136 === (2))){
var inst_42131 = (state_42135[(2)]);
var inst_42132 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_42133 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42132);
var state_42135__$1 = (function (){var statearr_42137 = state_42135;
(statearr_42137[(7)] = inst_42131);

return statearr_42137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42135__$1,inst_42133);
} else {
return null;
}
}
});})(c__34203__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__34091__auto__,c__34203__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34092__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34092__auto____0 = (function (){
var statearr_42141 = [null,null,null,null,null,null,null,null];
(statearr_42141[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34092__auto__);

(statearr_42141[(1)] = (1));

return statearr_42141;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34092__auto____1 = (function (state_42135){
while(true){
var ret_value__34093__auto__ = (function (){try{while(true){
var result__34094__auto__ = switch__34091__auto__.call(null,state_42135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34094__auto__;
}
break;
}
}catch (e42142){if((e42142 instanceof Object)){
var ex__34095__auto__ = e42142;
var statearr_42143_42145 = state_42135;
(statearr_42143_42145[(5)] = ex__34095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42146 = state_42135;
state_42135 = G__42146;
continue;
} else {
return ret_value__34093__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34092__auto__ = function(state_42135){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34092__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34092__auto____1.call(this,state_42135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34092__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34092__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34092__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34092__auto__;
})()
;})(switch__34091__auto__,c__34203__auto__,figwheel_version,temp__4657__auto__))
})();
var state__34205__auto__ = (function (){var statearr_42144 = f__34204__auto__.call(null);
(statearr_42144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34203__auto__);

return statearr_42144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34205__auto__);
});})(c__34203__auto__,figwheel_version,temp__4657__auto__))
);

return c__34203__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42147){
var map__42151 = p__42147;
var map__42151__$1 = ((((!((map__42151 == null)))?((((map__42151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42151):map__42151);
var file = cljs.core.get.call(null,map__42151__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42151__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42151__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42153 = "";
var G__42153__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__42153),cljs.core.str("file "),cljs.core.str(file)].join(''):G__42153);
var G__42153__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__42153__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__42153__$1);
if(cljs.core.truth_((function (){var and__24739__auto__ = line;
if(cljs.core.truth_(and__24739__auto__)){
return column;
} else {
return and__24739__auto__;
}
})())){
return [cljs.core.str(G__42153__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__42153__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42154){
var map__42161 = p__42154;
var map__42161__$1 = ((((!((map__42161 == null)))?((((map__42161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42161):map__42161);
var ed = map__42161__$1;
var formatted_exception = cljs.core.get.call(null,map__42161__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42161__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42161__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42163_42167 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42164_42168 = null;
var count__42165_42169 = (0);
var i__42166_42170 = (0);
while(true){
if((i__42166_42170 < count__42165_42169)){
var msg_42171 = cljs.core._nth.call(null,chunk__42164_42168,i__42166_42170);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42171);

var G__42172 = seq__42163_42167;
var G__42173 = chunk__42164_42168;
var G__42174 = count__42165_42169;
var G__42175 = (i__42166_42170 + (1));
seq__42163_42167 = G__42172;
chunk__42164_42168 = G__42173;
count__42165_42169 = G__42174;
i__42166_42170 = G__42175;
continue;
} else {
var temp__4657__auto___42176 = cljs.core.seq.call(null,seq__42163_42167);
if(temp__4657__auto___42176){
var seq__42163_42177__$1 = temp__4657__auto___42176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42163_42177__$1)){
var c__25562__auto___42178 = cljs.core.chunk_first.call(null,seq__42163_42177__$1);
var G__42179 = cljs.core.chunk_rest.call(null,seq__42163_42177__$1);
var G__42180 = c__25562__auto___42178;
var G__42181 = cljs.core.count.call(null,c__25562__auto___42178);
var G__42182 = (0);
seq__42163_42167 = G__42179;
chunk__42164_42168 = G__42180;
count__42165_42169 = G__42181;
i__42166_42170 = G__42182;
continue;
} else {
var msg_42183 = cljs.core.first.call(null,seq__42163_42177__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42183);

var G__42184 = cljs.core.next.call(null,seq__42163_42177__$1);
var G__42185 = null;
var G__42186 = (0);
var G__42187 = (0);
seq__42163_42167 = G__42184;
chunk__42164_42168 = G__42185;
count__42165_42169 = G__42186;
i__42166_42170 = G__42187;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42188){
var map__42191 = p__42188;
var map__42191__$1 = ((((!((map__42191 == null)))?((((map__42191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42191):map__42191);
var w = map__42191__$1;
var message = cljs.core.get.call(null,map__42191__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__42203 = cljs.core.seq.call(null,plugins);
var chunk__42204 = null;
var count__42205 = (0);
var i__42206 = (0);
while(true){
if((i__42206 < count__42205)){
var vec__42207 = cljs.core._nth.call(null,chunk__42204,i__42206);
var k = cljs.core.nth.call(null,vec__42207,(0),null);
var plugin = cljs.core.nth.call(null,vec__42207,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42213 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42203,chunk__42204,count__42205,i__42206,pl_42213,vec__42207,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42213.call(null,msg_hist);
});})(seq__42203,chunk__42204,count__42205,i__42206,pl_42213,vec__42207,k,plugin))
);
} else {
}

var G__42214 = seq__42203;
var G__42215 = chunk__42204;
var G__42216 = count__42205;
var G__42217 = (i__42206 + (1));
seq__42203 = G__42214;
chunk__42204 = G__42215;
count__42205 = G__42216;
i__42206 = G__42217;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42203);
if(temp__4657__auto__){
var seq__42203__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42203__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__42203__$1);
var G__42218 = cljs.core.chunk_rest.call(null,seq__42203__$1);
var G__42219 = c__25562__auto__;
var G__42220 = cljs.core.count.call(null,c__25562__auto__);
var G__42221 = (0);
seq__42203 = G__42218;
chunk__42204 = G__42219;
count__42205 = G__42220;
i__42206 = G__42221;
continue;
} else {
var vec__42210 = cljs.core.first.call(null,seq__42203__$1);
var k = cljs.core.nth.call(null,vec__42210,(0),null);
var plugin = cljs.core.nth.call(null,vec__42210,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42222 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42203,chunk__42204,count__42205,i__42206,pl_42222,vec__42210,k,plugin,seq__42203__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42222.call(null,msg_hist);
});})(seq__42203,chunk__42204,count__42205,i__42206,pl_42222,vec__42210,k,plugin,seq__42203__$1,temp__4657__auto__))
);
} else {
}

var G__42223 = cljs.core.next.call(null,seq__42203__$1);
var G__42224 = null;
var G__42225 = (0);
var G__42226 = (0);
seq__42203 = G__42223;
chunk__42204 = G__42224;
count__42205 = G__42225;
i__42206 = G__42226;
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
var args42227 = [];
var len__25826__auto___42234 = arguments.length;
var i__25827__auto___42235 = (0);
while(true){
if((i__25827__auto___42235 < len__25826__auto___42234)){
args42227.push((arguments[i__25827__auto___42235]));

var G__42236 = (i__25827__auto___42235 + (1));
i__25827__auto___42235 = G__42236;
continue;
} else {
}
break;
}

var G__42229 = args42227.length;
switch (G__42229) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42227.length)].join('')));

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

var seq__42230_42238 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42231_42239 = null;
var count__42232_42240 = (0);
var i__42233_42241 = (0);
while(true){
if((i__42233_42241 < count__42232_42240)){
var msg_42242 = cljs.core._nth.call(null,chunk__42231_42239,i__42233_42241);
figwheel.client.socket.handle_incoming_message.call(null,msg_42242);

var G__42243 = seq__42230_42238;
var G__42244 = chunk__42231_42239;
var G__42245 = count__42232_42240;
var G__42246 = (i__42233_42241 + (1));
seq__42230_42238 = G__42243;
chunk__42231_42239 = G__42244;
count__42232_42240 = G__42245;
i__42233_42241 = G__42246;
continue;
} else {
var temp__4657__auto___42247 = cljs.core.seq.call(null,seq__42230_42238);
if(temp__4657__auto___42247){
var seq__42230_42248__$1 = temp__4657__auto___42247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42230_42248__$1)){
var c__25562__auto___42249 = cljs.core.chunk_first.call(null,seq__42230_42248__$1);
var G__42250 = cljs.core.chunk_rest.call(null,seq__42230_42248__$1);
var G__42251 = c__25562__auto___42249;
var G__42252 = cljs.core.count.call(null,c__25562__auto___42249);
var G__42253 = (0);
seq__42230_42238 = G__42250;
chunk__42231_42239 = G__42251;
count__42232_42240 = G__42252;
i__42233_42241 = G__42253;
continue;
} else {
var msg_42254 = cljs.core.first.call(null,seq__42230_42248__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42254);

var G__42255 = cljs.core.next.call(null,seq__42230_42248__$1);
var G__42256 = null;
var G__42257 = (0);
var G__42258 = (0);
seq__42230_42238 = G__42255;
chunk__42231_42239 = G__42256;
count__42232_42240 = G__42257;
i__42233_42241 = G__42258;
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
var len__25826__auto___42263 = arguments.length;
var i__25827__auto___42264 = (0);
while(true){
if((i__25827__auto___42264 < len__25826__auto___42263)){
args__25833__auto__.push((arguments[i__25827__auto___42264]));

var G__42265 = (i__25827__auto___42264 + (1));
i__25827__auto___42264 = G__42265;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42260){
var map__42261 = p__42260;
var map__42261__$1 = ((((!((map__42261 == null)))?((((map__42261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42261):map__42261);
var opts = map__42261__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42259){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42259));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42267){if((e42267 instanceof Error)){
var e = e42267;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e42267;

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
return (function (p__42271){
var map__42272 = p__42271;
var map__42272__$1 = ((((!((map__42272 == null)))?((((map__42272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42272):map__42272);
var msg_name = cljs.core.get.call(null,map__42272__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1478445840073