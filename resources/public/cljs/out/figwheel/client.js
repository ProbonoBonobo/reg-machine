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
var args34424 = [];
var len__25826__auto___34427 = arguments.length;
var i__25827__auto___34428 = (0);
while(true){
if((i__25827__auto___34428 < len__25826__auto___34427)){
args34424.push((arguments[i__25827__auto___34428]));

var G__34429 = (i__25827__auto___34428 + (1));
i__25827__auto___34428 = G__34429;
continue;
} else {
}
break;
}

var G__34426 = args34424.length;
switch (G__34426) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34424.length)].join('')));

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
var len__25826__auto___34432 = arguments.length;
var i__25827__auto___34433 = (0);
while(true){
if((i__25827__auto___34433 < len__25826__auto___34432)){
args__25833__auto__.push((arguments[i__25827__auto___34433]));

var G__34434 = (i__25827__auto___34433 + (1));
i__25827__auto___34433 = G__34434;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34431){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34431));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25833__auto__ = [];
var len__25826__auto___34436 = arguments.length;
var i__25827__auto___34437 = (0);
while(true){
if((i__25827__auto___34437 < len__25826__auto___34436)){
args__25833__auto__.push((arguments[i__25827__auto___34437]));

var G__34438 = (i__25827__auto___34437 + (1));
i__25827__auto___34437 = G__34438;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34435){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34435));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34439 = cljs.core._EQ_;
var expr__34440 = (function (){var or__24751__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e34443){if((e34443 instanceof Error)){
var e = e34443;
return false;
} else {
throw e34443;

}
}})();
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34439.call(null,"true",expr__34440))){
return true;
} else {
if(cljs.core.truth_(pred__34439.call(null,"false",expr__34440))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34440)].join('')));
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
}catch (e34445){if((e34445 instanceof Error)){
var e = e34445;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e34445;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34446){
var map__34449 = p__34446;
var map__34449__$1 = ((((!((map__34449 == null)))?((((map__34449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34449):map__34449);
var message = cljs.core.get.call(null,map__34449__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34449__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__26996__auto___34611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___34611,ch){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___34611,ch){
return (function (state_34580){
var state_val_34581 = (state_34580[(1)]);
if((state_val_34581 === (7))){
var inst_34576 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34582_34612 = state_34580__$1;
(statearr_34582_34612[(2)] = inst_34576);

(statearr_34582_34612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (1))){
var state_34580__$1 = state_34580;
var statearr_34583_34613 = state_34580__$1;
(statearr_34583_34613[(2)] = null);

(statearr_34583_34613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (4))){
var inst_34533 = (state_34580[(7)]);
var inst_34533__$1 = (state_34580[(2)]);
var state_34580__$1 = (function (){var statearr_34584 = state_34580;
(statearr_34584[(7)] = inst_34533__$1);

return statearr_34584;
})();
if(cljs.core.truth_(inst_34533__$1)){
var statearr_34585_34614 = state_34580__$1;
(statearr_34585_34614[(1)] = (5));

} else {
var statearr_34586_34615 = state_34580__$1;
(statearr_34586_34615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (15))){
var inst_34540 = (state_34580[(8)]);
var inst_34555 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34540);
var inst_34556 = cljs.core.first.call(null,inst_34555);
var inst_34557 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34556);
var inst_34558 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34557)].join('');
var inst_34559 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34558);
var state_34580__$1 = state_34580;
var statearr_34587_34616 = state_34580__$1;
(statearr_34587_34616[(2)] = inst_34559);

(statearr_34587_34616[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (13))){
var inst_34564 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34588_34617 = state_34580__$1;
(statearr_34588_34617[(2)] = inst_34564);

(statearr_34588_34617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (6))){
var state_34580__$1 = state_34580;
var statearr_34589_34618 = state_34580__$1;
(statearr_34589_34618[(2)] = null);

(statearr_34589_34618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (17))){
var inst_34562 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34590_34619 = state_34580__$1;
(statearr_34590_34619[(2)] = inst_34562);

(statearr_34590_34619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (3))){
var inst_34578 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34580__$1,inst_34578);
} else {
if((state_val_34581 === (12))){
var inst_34539 = (state_34580[(9)]);
var inst_34553 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34539,opts);
var state_34580__$1 = state_34580;
if(cljs.core.truth_(inst_34553)){
var statearr_34591_34620 = state_34580__$1;
(statearr_34591_34620[(1)] = (15));

} else {
var statearr_34592_34621 = state_34580__$1;
(statearr_34592_34621[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (2))){
var state_34580__$1 = state_34580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34580__$1,(4),ch);
} else {
if((state_val_34581 === (11))){
var inst_34540 = (state_34580[(8)]);
var inst_34545 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34546 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34540);
var inst_34547 = cljs.core.async.timeout.call(null,(1000));
var inst_34548 = [inst_34546,inst_34547];
var inst_34549 = (new cljs.core.PersistentVector(null,2,(5),inst_34545,inst_34548,null));
var state_34580__$1 = state_34580;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34580__$1,(14),inst_34549);
} else {
if((state_val_34581 === (9))){
var inst_34540 = (state_34580[(8)]);
var inst_34566 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34567 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34540);
var inst_34568 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34567);
var inst_34569 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34568)].join('');
var inst_34570 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34569);
var state_34580__$1 = (function (){var statearr_34593 = state_34580;
(statearr_34593[(10)] = inst_34566);

return statearr_34593;
})();
var statearr_34594_34622 = state_34580__$1;
(statearr_34594_34622[(2)] = inst_34570);

(statearr_34594_34622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (5))){
var inst_34533 = (state_34580[(7)]);
var inst_34535 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34536 = (new cljs.core.PersistentArrayMap(null,2,inst_34535,null));
var inst_34537 = (new cljs.core.PersistentHashSet(null,inst_34536,null));
var inst_34538 = figwheel.client.focus_msgs.call(null,inst_34537,inst_34533);
var inst_34539 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34538);
var inst_34540 = cljs.core.first.call(null,inst_34538);
var inst_34541 = figwheel.client.autoload_QMARK_.call(null);
var state_34580__$1 = (function (){var statearr_34595 = state_34580;
(statearr_34595[(8)] = inst_34540);

(statearr_34595[(9)] = inst_34539);

return statearr_34595;
})();
if(cljs.core.truth_(inst_34541)){
var statearr_34596_34623 = state_34580__$1;
(statearr_34596_34623[(1)] = (8));

} else {
var statearr_34597_34624 = state_34580__$1;
(statearr_34597_34624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (14))){
var inst_34551 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34598_34625 = state_34580__$1;
(statearr_34598_34625[(2)] = inst_34551);

(statearr_34598_34625[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (16))){
var state_34580__$1 = state_34580;
var statearr_34599_34626 = state_34580__$1;
(statearr_34599_34626[(2)] = null);

(statearr_34599_34626[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (10))){
var inst_34572 = (state_34580[(2)]);
var state_34580__$1 = (function (){var statearr_34600 = state_34580;
(statearr_34600[(11)] = inst_34572);

return statearr_34600;
})();
var statearr_34601_34627 = state_34580__$1;
(statearr_34601_34627[(2)] = null);

(statearr_34601_34627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (8))){
var inst_34539 = (state_34580[(9)]);
var inst_34543 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34539,opts);
var state_34580__$1 = state_34580;
if(cljs.core.truth_(inst_34543)){
var statearr_34602_34628 = state_34580__$1;
(statearr_34602_34628[(1)] = (11));

} else {
var statearr_34603_34629 = state_34580__$1;
(statearr_34603_34629[(1)] = (12));

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
});})(c__26996__auto___34611,ch))
;
return ((function (switch__26884__auto__,c__26996__auto___34611,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26885__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26885__auto____0 = (function (){
var statearr_34607 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34607[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26885__auto__);

(statearr_34607[(1)] = (1));

return statearr_34607;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26885__auto____1 = (function (state_34580){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_34580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e34608){if((e34608 instanceof Object)){
var ex__26888__auto__ = e34608;
var statearr_34609_34630 = state_34580;
(statearr_34609_34630[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34631 = state_34580;
state_34580 = G__34631;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26885__auto__ = function(state_34580){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26885__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26885__auto____1.call(this,state_34580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26885__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26885__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___34611,ch))
})();
var state__26998__auto__ = (function (){var statearr_34610 = f__26997__auto__.call(null);
(statearr_34610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___34611);

return statearr_34610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___34611,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34632_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34632_SHARP_));
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
var base_path_34635 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34635){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34634){if((e34634 instanceof Error)){
var e = e34634;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34635], null));
} else {
var e = e34634;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34635))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34636){
var map__34645 = p__34636;
var map__34645__$1 = ((((!((map__34645 == null)))?((((map__34645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34645):map__34645);
var opts = map__34645__$1;
var build_id = cljs.core.get.call(null,map__34645__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34645,map__34645__$1,opts,build_id){
return (function (p__34647){
var vec__34648 = p__34647;
var seq__34649 = cljs.core.seq.call(null,vec__34648);
var first__34650 = cljs.core.first.call(null,seq__34649);
var seq__34649__$1 = cljs.core.next.call(null,seq__34649);
var map__34651 = first__34650;
var map__34651__$1 = ((((!((map__34651 == null)))?((((map__34651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34651):map__34651);
var msg = map__34651__$1;
var msg_name = cljs.core.get.call(null,map__34651__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34649__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34648,seq__34649,first__34650,seq__34649__$1,map__34651,map__34651__$1,msg,msg_name,_,map__34645,map__34645__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34648,seq__34649,first__34650,seq__34649__$1,map__34651,map__34651__$1,msg,msg_name,_,map__34645,map__34645__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34645,map__34645__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34659){
var vec__34660 = p__34659;
var seq__34661 = cljs.core.seq.call(null,vec__34660);
var first__34662 = cljs.core.first.call(null,seq__34661);
var seq__34661__$1 = cljs.core.next.call(null,seq__34661);
var map__34663 = first__34662;
var map__34663__$1 = ((((!((map__34663 == null)))?((((map__34663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34663):map__34663);
var msg = map__34663__$1;
var msg_name = cljs.core.get.call(null,map__34663__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34661__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34665){
var map__34677 = p__34665;
var map__34677__$1 = ((((!((map__34677 == null)))?((((map__34677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34677):map__34677);
var on_compile_warning = cljs.core.get.call(null,map__34677__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34677__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34677,map__34677__$1,on_compile_warning,on_compile_fail){
return (function (p__34679){
var vec__34680 = p__34679;
var seq__34681 = cljs.core.seq.call(null,vec__34680);
var first__34682 = cljs.core.first.call(null,seq__34681);
var seq__34681__$1 = cljs.core.next.call(null,seq__34681);
var map__34683 = first__34682;
var map__34683__$1 = ((((!((map__34683 == null)))?((((map__34683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34683):map__34683);
var msg = map__34683__$1;
var msg_name = cljs.core.get.call(null,map__34683__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34681__$1;
var pred__34685 = cljs.core._EQ_;
var expr__34686 = msg_name;
if(cljs.core.truth_(pred__34685.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34686))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34685.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34686))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34677,map__34677__$1,on_compile_warning,on_compile_fail))
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
var c__26996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto__,msg_hist,msg_names,msg){
return (function (state_34914){
var state_val_34915 = (state_34914[(1)]);
if((state_val_34915 === (7))){
var inst_34834 = (state_34914[(2)]);
var state_34914__$1 = state_34914;
if(cljs.core.truth_(inst_34834)){
var statearr_34916_34966 = state_34914__$1;
(statearr_34916_34966[(1)] = (8));

} else {
var statearr_34917_34967 = state_34914__$1;
(statearr_34917_34967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (20))){
var inst_34908 = (state_34914[(2)]);
var state_34914__$1 = state_34914;
var statearr_34918_34968 = state_34914__$1;
(statearr_34918_34968[(2)] = inst_34908);

(statearr_34918_34968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (27))){
var inst_34904 = (state_34914[(2)]);
var state_34914__$1 = state_34914;
var statearr_34919_34969 = state_34914__$1;
(statearr_34919_34969[(2)] = inst_34904);

(statearr_34919_34969[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (1))){
var inst_34827 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34914__$1 = state_34914;
if(cljs.core.truth_(inst_34827)){
var statearr_34920_34970 = state_34914__$1;
(statearr_34920_34970[(1)] = (2));

} else {
var statearr_34921_34971 = state_34914__$1;
(statearr_34921_34971[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (24))){
var inst_34906 = (state_34914[(2)]);
var state_34914__$1 = state_34914;
var statearr_34922_34972 = state_34914__$1;
(statearr_34922_34972[(2)] = inst_34906);

(statearr_34922_34972[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (4))){
var inst_34912 = (state_34914[(2)]);
var state_34914__$1 = state_34914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34914__$1,inst_34912);
} else {
if((state_val_34915 === (15))){
var inst_34910 = (state_34914[(2)]);
var state_34914__$1 = state_34914;
var statearr_34923_34973 = state_34914__$1;
(statearr_34923_34973[(2)] = inst_34910);

(statearr_34923_34973[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (21))){
var inst_34863 = (state_34914[(2)]);
var inst_34864 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34865 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34864);
var state_34914__$1 = (function (){var statearr_34924 = state_34914;
(statearr_34924[(7)] = inst_34863);

return statearr_34924;
})();
var statearr_34925_34974 = state_34914__$1;
(statearr_34925_34974[(2)] = inst_34865);

(statearr_34925_34974[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (31))){
var inst_34893 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34914__$1 = state_34914;
if(cljs.core.truth_(inst_34893)){
var statearr_34926_34975 = state_34914__$1;
(statearr_34926_34975[(1)] = (34));

} else {
var statearr_34927_34976 = state_34914__$1;
(statearr_34927_34976[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (32))){
var inst_34902 = (state_34914[(2)]);
var state_34914__$1 = state_34914;
var statearr_34928_34977 = state_34914__$1;
(statearr_34928_34977[(2)] = inst_34902);

(statearr_34928_34977[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (33))){
var inst_34889 = (state_34914[(2)]);
var inst_34890 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34891 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34890);
var state_34914__$1 = (function (){var statearr_34929 = state_34914;
(statearr_34929[(8)] = inst_34889);

return statearr_34929;
})();
var statearr_34930_34978 = state_34914__$1;
(statearr_34930_34978[(2)] = inst_34891);

(statearr_34930_34978[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (13))){
var inst_34848 = figwheel.client.heads_up.clear.call(null);
var state_34914__$1 = state_34914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34914__$1,(16),inst_34848);
} else {
if((state_val_34915 === (22))){
var inst_34869 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34870 = figwheel.client.heads_up.append_warning_message.call(null,inst_34869);
var state_34914__$1 = state_34914;
var statearr_34931_34979 = state_34914__$1;
(statearr_34931_34979[(2)] = inst_34870);

(statearr_34931_34979[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (36))){
var inst_34900 = (state_34914[(2)]);
var state_34914__$1 = state_34914;
var statearr_34932_34980 = state_34914__$1;
(statearr_34932_34980[(2)] = inst_34900);

(statearr_34932_34980[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (29))){
var inst_34880 = (state_34914[(2)]);
var inst_34881 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34882 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34881);
var state_34914__$1 = (function (){var statearr_34933 = state_34914;
(statearr_34933[(9)] = inst_34880);

return statearr_34933;
})();
var statearr_34934_34981 = state_34914__$1;
(statearr_34934_34981[(2)] = inst_34882);

(statearr_34934_34981[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (6))){
var inst_34829 = (state_34914[(10)]);
var state_34914__$1 = state_34914;
var statearr_34935_34982 = state_34914__$1;
(statearr_34935_34982[(2)] = inst_34829);

(statearr_34935_34982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (28))){
var inst_34876 = (state_34914[(2)]);
var inst_34877 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34878 = figwheel.client.heads_up.display_warning.call(null,inst_34877);
var state_34914__$1 = (function (){var statearr_34936 = state_34914;
(statearr_34936[(11)] = inst_34876);

return statearr_34936;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34914__$1,(29),inst_34878);
} else {
if((state_val_34915 === (25))){
var inst_34874 = figwheel.client.heads_up.clear.call(null);
var state_34914__$1 = state_34914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34914__$1,(28),inst_34874);
} else {
if((state_val_34915 === (34))){
var inst_34895 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34914__$1 = state_34914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34914__$1,(37),inst_34895);
} else {
if((state_val_34915 === (17))){
var inst_34854 = (state_34914[(2)]);
var inst_34855 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34856 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34855);
var state_34914__$1 = (function (){var statearr_34937 = state_34914;
(statearr_34937[(12)] = inst_34854);

return statearr_34937;
})();
var statearr_34938_34983 = state_34914__$1;
(statearr_34938_34983[(2)] = inst_34856);

(statearr_34938_34983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (3))){
var inst_34846 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34914__$1 = state_34914;
if(cljs.core.truth_(inst_34846)){
var statearr_34939_34984 = state_34914__$1;
(statearr_34939_34984[(1)] = (13));

} else {
var statearr_34940_34985 = state_34914__$1;
(statearr_34940_34985[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (12))){
var inst_34842 = (state_34914[(2)]);
var state_34914__$1 = state_34914;
var statearr_34941_34986 = state_34914__$1;
(statearr_34941_34986[(2)] = inst_34842);

(statearr_34941_34986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (2))){
var inst_34829 = (state_34914[(10)]);
var inst_34829__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34914__$1 = (function (){var statearr_34942 = state_34914;
(statearr_34942[(10)] = inst_34829__$1);

return statearr_34942;
})();
if(cljs.core.truth_(inst_34829__$1)){
var statearr_34943_34987 = state_34914__$1;
(statearr_34943_34987[(1)] = (5));

} else {
var statearr_34944_34988 = state_34914__$1;
(statearr_34944_34988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (23))){
var inst_34872 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34914__$1 = state_34914;
if(cljs.core.truth_(inst_34872)){
var statearr_34945_34989 = state_34914__$1;
(statearr_34945_34989[(1)] = (25));

} else {
var statearr_34946_34990 = state_34914__$1;
(statearr_34946_34990[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (35))){
var state_34914__$1 = state_34914;
var statearr_34947_34991 = state_34914__$1;
(statearr_34947_34991[(2)] = null);

(statearr_34947_34991[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (19))){
var inst_34867 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34914__$1 = state_34914;
if(cljs.core.truth_(inst_34867)){
var statearr_34948_34992 = state_34914__$1;
(statearr_34948_34992[(1)] = (22));

} else {
var statearr_34949_34993 = state_34914__$1;
(statearr_34949_34993[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (11))){
var inst_34838 = (state_34914[(2)]);
var state_34914__$1 = state_34914;
var statearr_34950_34994 = state_34914__$1;
(statearr_34950_34994[(2)] = inst_34838);

(statearr_34950_34994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (9))){
var inst_34840 = figwheel.client.heads_up.clear.call(null);
var state_34914__$1 = state_34914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34914__$1,(12),inst_34840);
} else {
if((state_val_34915 === (5))){
var inst_34831 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34914__$1 = state_34914;
var statearr_34951_34995 = state_34914__$1;
(statearr_34951_34995[(2)] = inst_34831);

(statearr_34951_34995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (14))){
var inst_34858 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34914__$1 = state_34914;
if(cljs.core.truth_(inst_34858)){
var statearr_34952_34996 = state_34914__$1;
(statearr_34952_34996[(1)] = (18));

} else {
var statearr_34953_34997 = state_34914__$1;
(statearr_34953_34997[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (26))){
var inst_34884 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34914__$1 = state_34914;
if(cljs.core.truth_(inst_34884)){
var statearr_34954_34998 = state_34914__$1;
(statearr_34954_34998[(1)] = (30));

} else {
var statearr_34955_34999 = state_34914__$1;
(statearr_34955_34999[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (16))){
var inst_34850 = (state_34914[(2)]);
var inst_34851 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34852 = figwheel.client.heads_up.display_exception.call(null,inst_34851);
var state_34914__$1 = (function (){var statearr_34956 = state_34914;
(statearr_34956[(13)] = inst_34850);

return statearr_34956;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34914__$1,(17),inst_34852);
} else {
if((state_val_34915 === (30))){
var inst_34886 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34887 = figwheel.client.heads_up.display_warning.call(null,inst_34886);
var state_34914__$1 = state_34914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34914__$1,(33),inst_34887);
} else {
if((state_val_34915 === (10))){
var inst_34844 = (state_34914[(2)]);
var state_34914__$1 = state_34914;
var statearr_34957_35000 = state_34914__$1;
(statearr_34957_35000[(2)] = inst_34844);

(statearr_34957_35000[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (18))){
var inst_34860 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34861 = figwheel.client.heads_up.display_exception.call(null,inst_34860);
var state_34914__$1 = state_34914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34914__$1,(21),inst_34861);
} else {
if((state_val_34915 === (37))){
var inst_34897 = (state_34914[(2)]);
var state_34914__$1 = state_34914;
var statearr_34958_35001 = state_34914__$1;
(statearr_34958_35001[(2)] = inst_34897);

(statearr_34958_35001[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (8))){
var inst_34836 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34914__$1 = state_34914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34914__$1,(11),inst_34836);
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
});})(c__26996__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26884__auto__,c__26996__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26885__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26885__auto____0 = (function (){
var statearr_34962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34962[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26885__auto__);

(statearr_34962[(1)] = (1));

return statearr_34962;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26885__auto____1 = (function (state_34914){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_34914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e34963){if((e34963 instanceof Object)){
var ex__26888__auto__ = e34963;
var statearr_34964_35002 = state_34914;
(statearr_34964_35002[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35003 = state_34914;
state_34914 = G__35003;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26885__auto__ = function(state_34914){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26885__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26885__auto____1.call(this,state_34914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26885__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26885__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto__,msg_hist,msg_names,msg))
})();
var state__26998__auto__ = (function (){var statearr_34965 = f__26997__auto__.call(null);
(statearr_34965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto__);

return statearr_34965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto__,msg_hist,msg_names,msg))
);

return c__26996__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26996__auto___35066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto___35066,ch){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto___35066,ch){
return (function (state_35049){
var state_val_35050 = (state_35049[(1)]);
if((state_val_35050 === (1))){
var state_35049__$1 = state_35049;
var statearr_35051_35067 = state_35049__$1;
(statearr_35051_35067[(2)] = null);

(statearr_35051_35067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (2))){
var state_35049__$1 = state_35049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35049__$1,(4),ch);
} else {
if((state_val_35050 === (3))){
var inst_35047 = (state_35049[(2)]);
var state_35049__$1 = state_35049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35049__$1,inst_35047);
} else {
if((state_val_35050 === (4))){
var inst_35037 = (state_35049[(7)]);
var inst_35037__$1 = (state_35049[(2)]);
var state_35049__$1 = (function (){var statearr_35052 = state_35049;
(statearr_35052[(7)] = inst_35037__$1);

return statearr_35052;
})();
if(cljs.core.truth_(inst_35037__$1)){
var statearr_35053_35068 = state_35049__$1;
(statearr_35053_35068[(1)] = (5));

} else {
var statearr_35054_35069 = state_35049__$1;
(statearr_35054_35069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (5))){
var inst_35037 = (state_35049[(7)]);
var inst_35039 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35037);
var state_35049__$1 = state_35049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35049__$1,(8),inst_35039);
} else {
if((state_val_35050 === (6))){
var state_35049__$1 = state_35049;
var statearr_35055_35070 = state_35049__$1;
(statearr_35055_35070[(2)] = null);

(statearr_35055_35070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (7))){
var inst_35045 = (state_35049[(2)]);
var state_35049__$1 = state_35049;
var statearr_35056_35071 = state_35049__$1;
(statearr_35056_35071[(2)] = inst_35045);

(statearr_35056_35071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (8))){
var inst_35041 = (state_35049[(2)]);
var state_35049__$1 = (function (){var statearr_35057 = state_35049;
(statearr_35057[(8)] = inst_35041);

return statearr_35057;
})();
var statearr_35058_35072 = state_35049__$1;
(statearr_35058_35072[(2)] = null);

(statearr_35058_35072[(1)] = (2));


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
});})(c__26996__auto___35066,ch))
;
return ((function (switch__26884__auto__,c__26996__auto___35066,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26885__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26885__auto____0 = (function (){
var statearr_35062 = [null,null,null,null,null,null,null,null,null];
(statearr_35062[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26885__auto__);

(statearr_35062[(1)] = (1));

return statearr_35062;
});
var figwheel$client$heads_up_plugin_$_state_machine__26885__auto____1 = (function (state_35049){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_35049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e35063){if((e35063 instanceof Object)){
var ex__26888__auto__ = e35063;
var statearr_35064_35073 = state_35049;
(statearr_35064_35073[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35074 = state_35049;
state_35049 = G__35074;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26885__auto__ = function(state_35049){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26885__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26885__auto____1.call(this,state_35049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26885__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26885__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto___35066,ch))
})();
var state__26998__auto__ = (function (){var statearr_35065 = f__26997__auto__.call(null);
(statearr_35065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto___35066);

return statearr_35065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto___35066,ch))
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
var c__26996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto__){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto__){
return (function (state_35095){
var state_val_35096 = (state_35095[(1)]);
if((state_val_35096 === (1))){
var inst_35090 = cljs.core.async.timeout.call(null,(3000));
var state_35095__$1 = state_35095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35095__$1,(2),inst_35090);
} else {
if((state_val_35096 === (2))){
var inst_35092 = (state_35095[(2)]);
var inst_35093 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35095__$1 = (function (){var statearr_35097 = state_35095;
(statearr_35097[(7)] = inst_35092);

return statearr_35097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35095__$1,inst_35093);
} else {
return null;
}
}
});})(c__26996__auto__))
;
return ((function (switch__26884__auto__,c__26996__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26885__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26885__auto____0 = (function (){
var statearr_35101 = [null,null,null,null,null,null,null,null];
(statearr_35101[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26885__auto__);

(statearr_35101[(1)] = (1));

return statearr_35101;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26885__auto____1 = (function (state_35095){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_35095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e35102){if((e35102 instanceof Object)){
var ex__26888__auto__ = e35102;
var statearr_35103_35105 = state_35095;
(statearr_35103_35105[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35106 = state_35095;
state_35095 = G__35106;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26885__auto__ = function(state_35095){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26885__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26885__auto____1.call(this,state_35095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26885__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26885__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto__))
})();
var state__26998__auto__ = (function (){var statearr_35104 = f__26997__auto__.call(null);
(statearr_35104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto__);

return statearr_35104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto__))
);

return c__26996__auto__;
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
var c__26996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26996__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__26997__auto__ = (function (){var switch__26884__auto__ = ((function (c__26996__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35129){
var state_val_35130 = (state_35129[(1)]);
if((state_val_35130 === (1))){
var inst_35123 = cljs.core.async.timeout.call(null,(2000));
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35129__$1,(2),inst_35123);
} else {
if((state_val_35130 === (2))){
var inst_35125 = (state_35129[(2)]);
var inst_35126 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35127 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35126);
var state_35129__$1 = (function (){var statearr_35131 = state_35129;
(statearr_35131[(7)] = inst_35125);

return statearr_35131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35129__$1,inst_35127);
} else {
return null;
}
}
});})(c__26996__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26884__auto__,c__26996__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26885__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26885__auto____0 = (function (){
var statearr_35135 = [null,null,null,null,null,null,null,null];
(statearr_35135[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26885__auto__);

(statearr_35135[(1)] = (1));

return statearr_35135;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26885__auto____1 = (function (state_35129){
while(true){
var ret_value__26886__auto__ = (function (){try{while(true){
var result__26887__auto__ = switch__26884__auto__.call(null,state_35129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26887__auto__;
}
break;
}
}catch (e35136){if((e35136 instanceof Object)){
var ex__26888__auto__ = e35136;
var statearr_35137_35139 = state_35129;
(statearr_35137_35139[(5)] = ex__26888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35140 = state_35129;
state_35129 = G__35140;
continue;
} else {
return ret_value__26886__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26885__auto__ = function(state_35129){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26885__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26885__auto____1.call(this,state_35129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26885__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26885__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26885__auto__;
})()
;})(switch__26884__auto__,c__26996__auto__,figwheel_version,temp__4657__auto__))
})();
var state__26998__auto__ = (function (){var statearr_35138 = f__26997__auto__.call(null);
(statearr_35138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26996__auto__);

return statearr_35138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26998__auto__);
});})(c__26996__auto__,figwheel_version,temp__4657__auto__))
);

return c__26996__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35141){
var map__35145 = p__35141;
var map__35145__$1 = ((((!((map__35145 == null)))?((((map__35145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35145):map__35145);
var file = cljs.core.get.call(null,map__35145__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35145__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35145__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35147 = "";
var G__35147__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35147),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35147);
var G__35147__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35147__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35147__$1);
if(cljs.core.truth_((function (){var and__24739__auto__ = line;
if(cljs.core.truth_(and__24739__auto__)){
return column;
} else {
return and__24739__auto__;
}
})())){
return [cljs.core.str(G__35147__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35147__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35148){
var map__35155 = p__35148;
var map__35155__$1 = ((((!((map__35155 == null)))?((((map__35155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35155):map__35155);
var ed = map__35155__$1;
var formatted_exception = cljs.core.get.call(null,map__35155__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35155__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35155__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35157_35161 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35158_35162 = null;
var count__35159_35163 = (0);
var i__35160_35164 = (0);
while(true){
if((i__35160_35164 < count__35159_35163)){
var msg_35165 = cljs.core._nth.call(null,chunk__35158_35162,i__35160_35164);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35165);

var G__35166 = seq__35157_35161;
var G__35167 = chunk__35158_35162;
var G__35168 = count__35159_35163;
var G__35169 = (i__35160_35164 + (1));
seq__35157_35161 = G__35166;
chunk__35158_35162 = G__35167;
count__35159_35163 = G__35168;
i__35160_35164 = G__35169;
continue;
} else {
var temp__4657__auto___35170 = cljs.core.seq.call(null,seq__35157_35161);
if(temp__4657__auto___35170){
var seq__35157_35171__$1 = temp__4657__auto___35170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35157_35171__$1)){
var c__25562__auto___35172 = cljs.core.chunk_first.call(null,seq__35157_35171__$1);
var G__35173 = cljs.core.chunk_rest.call(null,seq__35157_35171__$1);
var G__35174 = c__25562__auto___35172;
var G__35175 = cljs.core.count.call(null,c__25562__auto___35172);
var G__35176 = (0);
seq__35157_35161 = G__35173;
chunk__35158_35162 = G__35174;
count__35159_35163 = G__35175;
i__35160_35164 = G__35176;
continue;
} else {
var msg_35177 = cljs.core.first.call(null,seq__35157_35171__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35177);

var G__35178 = cljs.core.next.call(null,seq__35157_35171__$1);
var G__35179 = null;
var G__35180 = (0);
var G__35181 = (0);
seq__35157_35161 = G__35178;
chunk__35158_35162 = G__35179;
count__35159_35163 = G__35180;
i__35160_35164 = G__35181;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35182){
var map__35185 = p__35182;
var map__35185__$1 = ((((!((map__35185 == null)))?((((map__35185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35185):map__35185);
var w = map__35185__$1;
var message = cljs.core.get.call(null,map__35185__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__35197 = cljs.core.seq.call(null,plugins);
var chunk__35198 = null;
var count__35199 = (0);
var i__35200 = (0);
while(true){
if((i__35200 < count__35199)){
var vec__35201 = cljs.core._nth.call(null,chunk__35198,i__35200);
var k = cljs.core.nth.call(null,vec__35201,(0),null);
var plugin = cljs.core.nth.call(null,vec__35201,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35207 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35197,chunk__35198,count__35199,i__35200,pl_35207,vec__35201,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35207.call(null,msg_hist);
});})(seq__35197,chunk__35198,count__35199,i__35200,pl_35207,vec__35201,k,plugin))
);
} else {
}

var G__35208 = seq__35197;
var G__35209 = chunk__35198;
var G__35210 = count__35199;
var G__35211 = (i__35200 + (1));
seq__35197 = G__35208;
chunk__35198 = G__35209;
count__35199 = G__35210;
i__35200 = G__35211;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35197);
if(temp__4657__auto__){
var seq__35197__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35197__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__35197__$1);
var G__35212 = cljs.core.chunk_rest.call(null,seq__35197__$1);
var G__35213 = c__25562__auto__;
var G__35214 = cljs.core.count.call(null,c__25562__auto__);
var G__35215 = (0);
seq__35197 = G__35212;
chunk__35198 = G__35213;
count__35199 = G__35214;
i__35200 = G__35215;
continue;
} else {
var vec__35204 = cljs.core.first.call(null,seq__35197__$1);
var k = cljs.core.nth.call(null,vec__35204,(0),null);
var plugin = cljs.core.nth.call(null,vec__35204,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35216 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35197,chunk__35198,count__35199,i__35200,pl_35216,vec__35204,k,plugin,seq__35197__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35216.call(null,msg_hist);
});})(seq__35197,chunk__35198,count__35199,i__35200,pl_35216,vec__35204,k,plugin,seq__35197__$1,temp__4657__auto__))
);
} else {
}

var G__35217 = cljs.core.next.call(null,seq__35197__$1);
var G__35218 = null;
var G__35219 = (0);
var G__35220 = (0);
seq__35197 = G__35217;
chunk__35198 = G__35218;
count__35199 = G__35219;
i__35200 = G__35220;
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
var args35221 = [];
var len__25826__auto___35228 = arguments.length;
var i__25827__auto___35229 = (0);
while(true){
if((i__25827__auto___35229 < len__25826__auto___35228)){
args35221.push((arguments[i__25827__auto___35229]));

var G__35230 = (i__25827__auto___35229 + (1));
i__25827__auto___35229 = G__35230;
continue;
} else {
}
break;
}

var G__35223 = args35221.length;
switch (G__35223) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35221.length)].join('')));

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

var seq__35224_35232 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35225_35233 = null;
var count__35226_35234 = (0);
var i__35227_35235 = (0);
while(true){
if((i__35227_35235 < count__35226_35234)){
var msg_35236 = cljs.core._nth.call(null,chunk__35225_35233,i__35227_35235);
figwheel.client.socket.handle_incoming_message.call(null,msg_35236);

var G__35237 = seq__35224_35232;
var G__35238 = chunk__35225_35233;
var G__35239 = count__35226_35234;
var G__35240 = (i__35227_35235 + (1));
seq__35224_35232 = G__35237;
chunk__35225_35233 = G__35238;
count__35226_35234 = G__35239;
i__35227_35235 = G__35240;
continue;
} else {
var temp__4657__auto___35241 = cljs.core.seq.call(null,seq__35224_35232);
if(temp__4657__auto___35241){
var seq__35224_35242__$1 = temp__4657__auto___35241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35224_35242__$1)){
var c__25562__auto___35243 = cljs.core.chunk_first.call(null,seq__35224_35242__$1);
var G__35244 = cljs.core.chunk_rest.call(null,seq__35224_35242__$1);
var G__35245 = c__25562__auto___35243;
var G__35246 = cljs.core.count.call(null,c__25562__auto___35243);
var G__35247 = (0);
seq__35224_35232 = G__35244;
chunk__35225_35233 = G__35245;
count__35226_35234 = G__35246;
i__35227_35235 = G__35247;
continue;
} else {
var msg_35248 = cljs.core.first.call(null,seq__35224_35242__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35248);

var G__35249 = cljs.core.next.call(null,seq__35224_35242__$1);
var G__35250 = null;
var G__35251 = (0);
var G__35252 = (0);
seq__35224_35232 = G__35249;
chunk__35225_35233 = G__35250;
count__35226_35234 = G__35251;
i__35227_35235 = G__35252;
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
var len__25826__auto___35257 = arguments.length;
var i__25827__auto___35258 = (0);
while(true){
if((i__25827__auto___35258 < len__25826__auto___35257)){
args__25833__auto__.push((arguments[i__25827__auto___35258]));

var G__35259 = (i__25827__auto___35258 + (1));
i__25827__auto___35258 = G__35259;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35254){
var map__35255 = p__35254;
var map__35255__$1 = ((((!((map__35255 == null)))?((((map__35255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35255):map__35255);
var opts = map__35255__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35253){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35253));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35261){if((e35261 instanceof Error)){
var e = e35261;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35261;

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
return (function (p__35265){
var map__35266 = p__35265;
var map__35266__$1 = ((((!((map__35266 == null)))?((((map__35266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35266):map__35266);
var msg_name = cljs.core.get.call(null,map__35266__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1479332390256