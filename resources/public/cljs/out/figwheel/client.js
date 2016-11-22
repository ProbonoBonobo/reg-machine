// Compiled by ClojureScript 1.9.293 {}
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
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args65590 = [];
var len__26007__auto___65593 = arguments.length;
var i__26008__auto___65594 = (0);
while(true){
if((i__26008__auto___65594 < len__26007__auto___65593)){
args65590.push((arguments[i__26008__auto___65594]));

var G__65595 = (i__26008__auto___65594 + (1));
i__26008__auto___65594 = G__65595;
continue;
} else {
}
break;
}

var G__65592 = args65590.length;
switch (G__65592) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65590.length)].join('')));

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
var args__26014__auto__ = [];
var len__26007__auto___65598 = arguments.length;
var i__26008__auto___65599 = (0);
while(true){
if((i__26008__auto___65599 < len__26007__auto___65598)){
args__26014__auto__.push((arguments[i__26008__auto___65599]));

var G__65600 = (i__26008__auto___65599 + (1));
i__26008__auto___65599 = G__65600;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq65597){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65597));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26014__auto__ = [];
var len__26007__auto___65602 = arguments.length;
var i__26008__auto___65603 = (0);
while(true){
if((i__26008__auto___65603 < len__26007__auto___65602)){
args__26014__auto__.push((arguments[i__26008__auto___65603]));

var G__65604 = (i__26008__auto___65603 + (1));
i__26008__auto___65603 = G__65604;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq65601){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65601));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__65605 = cljs.core._EQ_;
var expr__65606 = (function (){var or__24899__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e65609){if((e65609 instanceof Error)){
var e = e65609;
return false;
} else {
throw e65609;

}
}})();
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__65605.call(null,"true",expr__65606))){
return true;
} else {
if(cljs.core.truth_(pred__65605.call(null,"false",expr__65606))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__65606)].join('')));
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
}catch (e65611){if((e65611 instanceof Error)){
var e = e65611;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e65611;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__65612){
var map__65615 = p__65612;
var map__65615__$1 = ((((!((map__65615 == null)))?((((map__65615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65615):map__65615);
var message = cljs.core.get.call(null,map__65615__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__65615__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24899__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24899__auto__)){
return or__24899__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24887__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24887__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24887__auto__;
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
var c__28998__auto___65777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___65777,ch){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___65777,ch){
return (function (state_65746){
var state_val_65747 = (state_65746[(1)]);
if((state_val_65747 === (7))){
var inst_65742 = (state_65746[(2)]);
var state_65746__$1 = state_65746;
var statearr_65748_65778 = state_65746__$1;
(statearr_65748_65778[(2)] = inst_65742);

(statearr_65748_65778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (1))){
var state_65746__$1 = state_65746;
var statearr_65749_65779 = state_65746__$1;
(statearr_65749_65779[(2)] = null);

(statearr_65749_65779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (4))){
var inst_65699 = (state_65746[(7)]);
var inst_65699__$1 = (state_65746[(2)]);
var state_65746__$1 = (function (){var statearr_65750 = state_65746;
(statearr_65750[(7)] = inst_65699__$1);

return statearr_65750;
})();
if(cljs.core.truth_(inst_65699__$1)){
var statearr_65751_65780 = state_65746__$1;
(statearr_65751_65780[(1)] = (5));

} else {
var statearr_65752_65781 = state_65746__$1;
(statearr_65752_65781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (15))){
var inst_65706 = (state_65746[(8)]);
var inst_65721 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_65706);
var inst_65722 = cljs.core.first.call(null,inst_65721);
var inst_65723 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_65722);
var inst_65724 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_65723)].join('');
var inst_65725 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_65724);
var state_65746__$1 = state_65746;
var statearr_65753_65782 = state_65746__$1;
(statearr_65753_65782[(2)] = inst_65725);

(statearr_65753_65782[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (13))){
var inst_65730 = (state_65746[(2)]);
var state_65746__$1 = state_65746;
var statearr_65754_65783 = state_65746__$1;
(statearr_65754_65783[(2)] = inst_65730);

(statearr_65754_65783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (6))){
var state_65746__$1 = state_65746;
var statearr_65755_65784 = state_65746__$1;
(statearr_65755_65784[(2)] = null);

(statearr_65755_65784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (17))){
var inst_65728 = (state_65746[(2)]);
var state_65746__$1 = state_65746;
var statearr_65756_65785 = state_65746__$1;
(statearr_65756_65785[(2)] = inst_65728);

(statearr_65756_65785[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (3))){
var inst_65744 = (state_65746[(2)]);
var state_65746__$1 = state_65746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65746__$1,inst_65744);
} else {
if((state_val_65747 === (12))){
var inst_65705 = (state_65746[(9)]);
var inst_65719 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_65705,opts);
var state_65746__$1 = state_65746;
if(cljs.core.truth_(inst_65719)){
var statearr_65757_65786 = state_65746__$1;
(statearr_65757_65786[(1)] = (15));

} else {
var statearr_65758_65787 = state_65746__$1;
(statearr_65758_65787[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (2))){
var state_65746__$1 = state_65746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65746__$1,(4),ch);
} else {
if((state_val_65747 === (11))){
var inst_65706 = (state_65746[(8)]);
var inst_65711 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65712 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_65706);
var inst_65713 = cljs.core.async.timeout.call(null,(1000));
var inst_65714 = [inst_65712,inst_65713];
var inst_65715 = (new cljs.core.PersistentVector(null,2,(5),inst_65711,inst_65714,null));
var state_65746__$1 = state_65746;
return cljs.core.async.ioc_alts_BANG_.call(null,state_65746__$1,(14),inst_65715);
} else {
if((state_val_65747 === (9))){
var inst_65706 = (state_65746[(8)]);
var inst_65732 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_65733 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_65706);
var inst_65734 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_65733);
var inst_65735 = [cljs.core.str("Not loading: "),cljs.core.str(inst_65734)].join('');
var inst_65736 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_65735);
var state_65746__$1 = (function (){var statearr_65759 = state_65746;
(statearr_65759[(10)] = inst_65732);

return statearr_65759;
})();
var statearr_65760_65788 = state_65746__$1;
(statearr_65760_65788[(2)] = inst_65736);

(statearr_65760_65788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (5))){
var inst_65699 = (state_65746[(7)]);
var inst_65701 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_65702 = (new cljs.core.PersistentArrayMap(null,2,inst_65701,null));
var inst_65703 = (new cljs.core.PersistentHashSet(null,inst_65702,null));
var inst_65704 = figwheel.client.focus_msgs.call(null,inst_65703,inst_65699);
var inst_65705 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_65704);
var inst_65706 = cljs.core.first.call(null,inst_65704);
var inst_65707 = figwheel.client.autoload_QMARK_.call(null);
var state_65746__$1 = (function (){var statearr_65761 = state_65746;
(statearr_65761[(9)] = inst_65705);

(statearr_65761[(8)] = inst_65706);

return statearr_65761;
})();
if(cljs.core.truth_(inst_65707)){
var statearr_65762_65789 = state_65746__$1;
(statearr_65762_65789[(1)] = (8));

} else {
var statearr_65763_65790 = state_65746__$1;
(statearr_65763_65790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (14))){
var inst_65717 = (state_65746[(2)]);
var state_65746__$1 = state_65746;
var statearr_65764_65791 = state_65746__$1;
(statearr_65764_65791[(2)] = inst_65717);

(statearr_65764_65791[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (16))){
var state_65746__$1 = state_65746;
var statearr_65765_65792 = state_65746__$1;
(statearr_65765_65792[(2)] = null);

(statearr_65765_65792[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (10))){
var inst_65738 = (state_65746[(2)]);
var state_65746__$1 = (function (){var statearr_65766 = state_65746;
(statearr_65766[(11)] = inst_65738);

return statearr_65766;
})();
var statearr_65767_65793 = state_65746__$1;
(statearr_65767_65793[(2)] = null);

(statearr_65767_65793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65747 === (8))){
var inst_65705 = (state_65746[(9)]);
var inst_65709 = figwheel.client.reload_file_state_QMARK_.call(null,inst_65705,opts);
var state_65746__$1 = state_65746;
if(cljs.core.truth_(inst_65709)){
var statearr_65768_65794 = state_65746__$1;
(statearr_65768_65794[(1)] = (11));

} else {
var statearr_65769_65795 = state_65746__$1;
(statearr_65769_65795[(1)] = (12));

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
});})(c__28998__auto___65777,ch))
;
return ((function (switch__28886__auto__,c__28998__auto___65777,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28887__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28887__auto____0 = (function (){
var statearr_65773 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65773[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28887__auto__);

(statearr_65773[(1)] = (1));

return statearr_65773;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28887__auto____1 = (function (state_65746){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_65746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e65774){if((e65774 instanceof Object)){
var ex__28890__auto__ = e65774;
var statearr_65775_65796 = state_65746;
(statearr_65775_65796[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65797 = state_65746;
state_65746 = G__65797;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28887__auto__ = function(state_65746){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28887__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28887__auto____1.call(this,state_65746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28887__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28887__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___65777,ch))
})();
var state__29000__auto__ = (function (){var statearr_65776 = f__28999__auto__.call(null);
(statearr_65776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___65777);

return statearr_65776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___65777,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__65798_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__65798_SHARP_));
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
var base_path_65801 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_65801){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e65800){if((e65800 instanceof Error)){
var e = e65800;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_65801], null));
} else {
var e = e65800;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_65801))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__65802){
var map__65811 = p__65802;
var map__65811__$1 = ((((!((map__65811 == null)))?((((map__65811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65811):map__65811);
var opts = map__65811__$1;
var build_id = cljs.core.get.call(null,map__65811__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__65811,map__65811__$1,opts,build_id){
return (function (p__65813){
var vec__65814 = p__65813;
var seq__65815 = cljs.core.seq.call(null,vec__65814);
var first__65816 = cljs.core.first.call(null,seq__65815);
var seq__65815__$1 = cljs.core.next.call(null,seq__65815);
var map__65817 = first__65816;
var map__65817__$1 = ((((!((map__65817 == null)))?((((map__65817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65817):map__65817);
var msg = map__65817__$1;
var msg_name = cljs.core.get.call(null,map__65817__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__65815__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__65814,seq__65815,first__65816,seq__65815__$1,map__65817,map__65817__$1,msg,msg_name,_,map__65811,map__65811__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__65814,seq__65815,first__65816,seq__65815__$1,map__65817,map__65817__$1,msg,msg_name,_,map__65811,map__65811__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__65811,map__65811__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__65825){
var vec__65826 = p__65825;
var seq__65827 = cljs.core.seq.call(null,vec__65826);
var first__65828 = cljs.core.first.call(null,seq__65827);
var seq__65827__$1 = cljs.core.next.call(null,seq__65827);
var map__65829 = first__65828;
var map__65829__$1 = ((((!((map__65829 == null)))?((((map__65829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65829):map__65829);
var msg = map__65829__$1;
var msg_name = cljs.core.get.call(null,map__65829__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__65827__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__65831){
var map__65843 = p__65831;
var map__65843__$1 = ((((!((map__65843 == null)))?((((map__65843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65843):map__65843);
var on_compile_warning = cljs.core.get.call(null,map__65843__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__65843__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__65843,map__65843__$1,on_compile_warning,on_compile_fail){
return (function (p__65845){
var vec__65846 = p__65845;
var seq__65847 = cljs.core.seq.call(null,vec__65846);
var first__65848 = cljs.core.first.call(null,seq__65847);
var seq__65847__$1 = cljs.core.next.call(null,seq__65847);
var map__65849 = first__65848;
var map__65849__$1 = ((((!((map__65849 == null)))?((((map__65849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65849):map__65849);
var msg = map__65849__$1;
var msg_name = cljs.core.get.call(null,map__65849__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__65847__$1;
var pred__65851 = cljs.core._EQ_;
var expr__65852 = msg_name;
if(cljs.core.truth_(pred__65851.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__65852))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__65851.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__65852))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__65843,map__65843__$1,on_compile_warning,on_compile_fail))
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
var c__28998__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto__,msg_hist,msg_names,msg){
return (function (state_66080){
var state_val_66081 = (state_66080[(1)]);
if((state_val_66081 === (7))){
var inst_66000 = (state_66080[(2)]);
var state_66080__$1 = state_66080;
if(cljs.core.truth_(inst_66000)){
var statearr_66082_66132 = state_66080__$1;
(statearr_66082_66132[(1)] = (8));

} else {
var statearr_66083_66133 = state_66080__$1;
(statearr_66083_66133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (20))){
var inst_66074 = (state_66080[(2)]);
var state_66080__$1 = state_66080;
var statearr_66084_66134 = state_66080__$1;
(statearr_66084_66134[(2)] = inst_66074);

(statearr_66084_66134[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (27))){
var inst_66070 = (state_66080[(2)]);
var state_66080__$1 = state_66080;
var statearr_66085_66135 = state_66080__$1;
(statearr_66085_66135[(2)] = inst_66070);

(statearr_66085_66135[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (1))){
var inst_65993 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_66080__$1 = state_66080;
if(cljs.core.truth_(inst_65993)){
var statearr_66086_66136 = state_66080__$1;
(statearr_66086_66136[(1)] = (2));

} else {
var statearr_66087_66137 = state_66080__$1;
(statearr_66087_66137[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (24))){
var inst_66072 = (state_66080[(2)]);
var state_66080__$1 = state_66080;
var statearr_66088_66138 = state_66080__$1;
(statearr_66088_66138[(2)] = inst_66072);

(statearr_66088_66138[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (4))){
var inst_66078 = (state_66080[(2)]);
var state_66080__$1 = state_66080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66080__$1,inst_66078);
} else {
if((state_val_66081 === (15))){
var inst_66076 = (state_66080[(2)]);
var state_66080__$1 = state_66080;
var statearr_66089_66139 = state_66080__$1;
(statearr_66089_66139[(2)] = inst_66076);

(statearr_66089_66139[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (21))){
var inst_66029 = (state_66080[(2)]);
var inst_66030 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66031 = figwheel.client.auto_jump_to_error.call(null,opts,inst_66030);
var state_66080__$1 = (function (){var statearr_66090 = state_66080;
(statearr_66090[(7)] = inst_66029);

return statearr_66090;
})();
var statearr_66091_66140 = state_66080__$1;
(statearr_66091_66140[(2)] = inst_66031);

(statearr_66091_66140[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (31))){
var inst_66059 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_66080__$1 = state_66080;
if(cljs.core.truth_(inst_66059)){
var statearr_66092_66141 = state_66080__$1;
(statearr_66092_66141[(1)] = (34));

} else {
var statearr_66093_66142 = state_66080__$1;
(statearr_66093_66142[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (32))){
var inst_66068 = (state_66080[(2)]);
var state_66080__$1 = state_66080;
var statearr_66094_66143 = state_66080__$1;
(statearr_66094_66143[(2)] = inst_66068);

(statearr_66094_66143[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (33))){
var inst_66055 = (state_66080[(2)]);
var inst_66056 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66057 = figwheel.client.auto_jump_to_error.call(null,opts,inst_66056);
var state_66080__$1 = (function (){var statearr_66095 = state_66080;
(statearr_66095[(8)] = inst_66055);

return statearr_66095;
})();
var statearr_66096_66144 = state_66080__$1;
(statearr_66096_66144[(2)] = inst_66057);

(statearr_66096_66144[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (13))){
var inst_66014 = figwheel.client.heads_up.clear.call(null);
var state_66080__$1 = state_66080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66080__$1,(16),inst_66014);
} else {
if((state_val_66081 === (22))){
var inst_66035 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66036 = figwheel.client.heads_up.append_warning_message.call(null,inst_66035);
var state_66080__$1 = state_66080;
var statearr_66097_66145 = state_66080__$1;
(statearr_66097_66145[(2)] = inst_66036);

(statearr_66097_66145[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (36))){
var inst_66066 = (state_66080[(2)]);
var state_66080__$1 = state_66080;
var statearr_66098_66146 = state_66080__$1;
(statearr_66098_66146[(2)] = inst_66066);

(statearr_66098_66146[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (29))){
var inst_66046 = (state_66080[(2)]);
var inst_66047 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66048 = figwheel.client.auto_jump_to_error.call(null,opts,inst_66047);
var state_66080__$1 = (function (){var statearr_66099 = state_66080;
(statearr_66099[(9)] = inst_66046);

return statearr_66099;
})();
var statearr_66100_66147 = state_66080__$1;
(statearr_66100_66147[(2)] = inst_66048);

(statearr_66100_66147[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (6))){
var inst_65995 = (state_66080[(10)]);
var state_66080__$1 = state_66080;
var statearr_66101_66148 = state_66080__$1;
(statearr_66101_66148[(2)] = inst_65995);

(statearr_66101_66148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (28))){
var inst_66042 = (state_66080[(2)]);
var inst_66043 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66044 = figwheel.client.heads_up.display_warning.call(null,inst_66043);
var state_66080__$1 = (function (){var statearr_66102 = state_66080;
(statearr_66102[(11)] = inst_66042);

return statearr_66102;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66080__$1,(29),inst_66044);
} else {
if((state_val_66081 === (25))){
var inst_66040 = figwheel.client.heads_up.clear.call(null);
var state_66080__$1 = state_66080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66080__$1,(28),inst_66040);
} else {
if((state_val_66081 === (34))){
var inst_66061 = figwheel.client.heads_up.flash_loaded.call(null);
var state_66080__$1 = state_66080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66080__$1,(37),inst_66061);
} else {
if((state_val_66081 === (17))){
var inst_66020 = (state_66080[(2)]);
var inst_66021 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66022 = figwheel.client.auto_jump_to_error.call(null,opts,inst_66021);
var state_66080__$1 = (function (){var statearr_66103 = state_66080;
(statearr_66103[(12)] = inst_66020);

return statearr_66103;
})();
var statearr_66104_66149 = state_66080__$1;
(statearr_66104_66149[(2)] = inst_66022);

(statearr_66104_66149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (3))){
var inst_66012 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_66080__$1 = state_66080;
if(cljs.core.truth_(inst_66012)){
var statearr_66105_66150 = state_66080__$1;
(statearr_66105_66150[(1)] = (13));

} else {
var statearr_66106_66151 = state_66080__$1;
(statearr_66106_66151[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (12))){
var inst_66008 = (state_66080[(2)]);
var state_66080__$1 = state_66080;
var statearr_66107_66152 = state_66080__$1;
(statearr_66107_66152[(2)] = inst_66008);

(statearr_66107_66152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (2))){
var inst_65995 = (state_66080[(10)]);
var inst_65995__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_66080__$1 = (function (){var statearr_66108 = state_66080;
(statearr_66108[(10)] = inst_65995__$1);

return statearr_66108;
})();
if(cljs.core.truth_(inst_65995__$1)){
var statearr_66109_66153 = state_66080__$1;
(statearr_66109_66153[(1)] = (5));

} else {
var statearr_66110_66154 = state_66080__$1;
(statearr_66110_66154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (23))){
var inst_66038 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_66080__$1 = state_66080;
if(cljs.core.truth_(inst_66038)){
var statearr_66111_66155 = state_66080__$1;
(statearr_66111_66155[(1)] = (25));

} else {
var statearr_66112_66156 = state_66080__$1;
(statearr_66112_66156[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (35))){
var state_66080__$1 = state_66080;
var statearr_66113_66157 = state_66080__$1;
(statearr_66113_66157[(2)] = null);

(statearr_66113_66157[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (19))){
var inst_66033 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_66080__$1 = state_66080;
if(cljs.core.truth_(inst_66033)){
var statearr_66114_66158 = state_66080__$1;
(statearr_66114_66158[(1)] = (22));

} else {
var statearr_66115_66159 = state_66080__$1;
(statearr_66115_66159[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (11))){
var inst_66004 = (state_66080[(2)]);
var state_66080__$1 = state_66080;
var statearr_66116_66160 = state_66080__$1;
(statearr_66116_66160[(2)] = inst_66004);

(statearr_66116_66160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (9))){
var inst_66006 = figwheel.client.heads_up.clear.call(null);
var state_66080__$1 = state_66080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66080__$1,(12),inst_66006);
} else {
if((state_val_66081 === (5))){
var inst_65997 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_66080__$1 = state_66080;
var statearr_66117_66161 = state_66080__$1;
(statearr_66117_66161[(2)] = inst_65997);

(statearr_66117_66161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (14))){
var inst_66024 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_66080__$1 = state_66080;
if(cljs.core.truth_(inst_66024)){
var statearr_66118_66162 = state_66080__$1;
(statearr_66118_66162[(1)] = (18));

} else {
var statearr_66119_66163 = state_66080__$1;
(statearr_66119_66163[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (26))){
var inst_66050 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_66080__$1 = state_66080;
if(cljs.core.truth_(inst_66050)){
var statearr_66120_66164 = state_66080__$1;
(statearr_66120_66164[(1)] = (30));

} else {
var statearr_66121_66165 = state_66080__$1;
(statearr_66121_66165[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (16))){
var inst_66016 = (state_66080[(2)]);
var inst_66017 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66018 = figwheel.client.heads_up.display_exception.call(null,inst_66017);
var state_66080__$1 = (function (){var statearr_66122 = state_66080;
(statearr_66122[(13)] = inst_66016);

return statearr_66122;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66080__$1,(17),inst_66018);
} else {
if((state_val_66081 === (30))){
var inst_66052 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66053 = figwheel.client.heads_up.display_warning.call(null,inst_66052);
var state_66080__$1 = state_66080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66080__$1,(33),inst_66053);
} else {
if((state_val_66081 === (10))){
var inst_66010 = (state_66080[(2)]);
var state_66080__$1 = state_66080;
var statearr_66123_66166 = state_66080__$1;
(statearr_66123_66166[(2)] = inst_66010);

(statearr_66123_66166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (18))){
var inst_66026 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66027 = figwheel.client.heads_up.display_exception.call(null,inst_66026);
var state_66080__$1 = state_66080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66080__$1,(21),inst_66027);
} else {
if((state_val_66081 === (37))){
var inst_66063 = (state_66080[(2)]);
var state_66080__$1 = state_66080;
var statearr_66124_66167 = state_66080__$1;
(statearr_66124_66167[(2)] = inst_66063);

(statearr_66124_66167[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66081 === (8))){
var inst_66002 = figwheel.client.heads_up.flash_loaded.call(null);
var state_66080__$1 = state_66080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66080__$1,(11),inst_66002);
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
});})(c__28998__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28886__auto__,c__28998__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28887__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28887__auto____0 = (function (){
var statearr_66128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66128[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28887__auto__);

(statearr_66128[(1)] = (1));

return statearr_66128;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28887__auto____1 = (function (state_66080){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_66080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e66129){if((e66129 instanceof Object)){
var ex__28890__auto__ = e66129;
var statearr_66130_66168 = state_66080;
(statearr_66130_66168[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66169 = state_66080;
state_66080 = G__66169;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28887__auto__ = function(state_66080){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28887__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28887__auto____1.call(this,state_66080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28887__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28887__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__,msg_hist,msg_names,msg))
})();
var state__29000__auto__ = (function (){var statearr_66131 = f__28999__auto__.call(null);
(statearr_66131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_66131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto__,msg_hist,msg_names,msg))
);

return c__28998__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28998__auto___66232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto___66232,ch){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto___66232,ch){
return (function (state_66215){
var state_val_66216 = (state_66215[(1)]);
if((state_val_66216 === (1))){
var state_66215__$1 = state_66215;
var statearr_66217_66233 = state_66215__$1;
(statearr_66217_66233[(2)] = null);

(statearr_66217_66233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66216 === (2))){
var state_66215__$1 = state_66215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66215__$1,(4),ch);
} else {
if((state_val_66216 === (3))){
var inst_66213 = (state_66215[(2)]);
var state_66215__$1 = state_66215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66215__$1,inst_66213);
} else {
if((state_val_66216 === (4))){
var inst_66203 = (state_66215[(7)]);
var inst_66203__$1 = (state_66215[(2)]);
var state_66215__$1 = (function (){var statearr_66218 = state_66215;
(statearr_66218[(7)] = inst_66203__$1);

return statearr_66218;
})();
if(cljs.core.truth_(inst_66203__$1)){
var statearr_66219_66234 = state_66215__$1;
(statearr_66219_66234[(1)] = (5));

} else {
var statearr_66220_66235 = state_66215__$1;
(statearr_66220_66235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66216 === (5))){
var inst_66203 = (state_66215[(7)]);
var inst_66205 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_66203);
var state_66215__$1 = state_66215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66215__$1,(8),inst_66205);
} else {
if((state_val_66216 === (6))){
var state_66215__$1 = state_66215;
var statearr_66221_66236 = state_66215__$1;
(statearr_66221_66236[(2)] = null);

(statearr_66221_66236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66216 === (7))){
var inst_66211 = (state_66215[(2)]);
var state_66215__$1 = state_66215;
var statearr_66222_66237 = state_66215__$1;
(statearr_66222_66237[(2)] = inst_66211);

(statearr_66222_66237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66216 === (8))){
var inst_66207 = (state_66215[(2)]);
var state_66215__$1 = (function (){var statearr_66223 = state_66215;
(statearr_66223[(8)] = inst_66207);

return statearr_66223;
})();
var statearr_66224_66238 = state_66215__$1;
(statearr_66224_66238[(2)] = null);

(statearr_66224_66238[(1)] = (2));


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
});})(c__28998__auto___66232,ch))
;
return ((function (switch__28886__auto__,c__28998__auto___66232,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28887__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28887__auto____0 = (function (){
var statearr_66228 = [null,null,null,null,null,null,null,null,null];
(statearr_66228[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28887__auto__);

(statearr_66228[(1)] = (1));

return statearr_66228;
});
var figwheel$client$heads_up_plugin_$_state_machine__28887__auto____1 = (function (state_66215){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_66215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e66229){if((e66229 instanceof Object)){
var ex__28890__auto__ = e66229;
var statearr_66230_66239 = state_66215;
(statearr_66230_66239[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66240 = state_66215;
state_66215 = G__66240;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28887__auto__ = function(state_66215){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28887__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28887__auto____1.call(this,state_66215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28887__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28887__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto___66232,ch))
})();
var state__29000__auto__ = (function (){var statearr_66231 = f__28999__auto__.call(null);
(statearr_66231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto___66232);

return statearr_66231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto___66232,ch))
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
var c__28998__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto__){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto__){
return (function (state_66261){
var state_val_66262 = (state_66261[(1)]);
if((state_val_66262 === (1))){
var inst_66256 = cljs.core.async.timeout.call(null,(3000));
var state_66261__$1 = state_66261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66261__$1,(2),inst_66256);
} else {
if((state_val_66262 === (2))){
var inst_66258 = (state_66261[(2)]);
var inst_66259 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_66261__$1 = (function (){var statearr_66263 = state_66261;
(statearr_66263[(7)] = inst_66258);

return statearr_66263;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66261__$1,inst_66259);
} else {
return null;
}
}
});})(c__28998__auto__))
;
return ((function (switch__28886__auto__,c__28998__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28887__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28887__auto____0 = (function (){
var statearr_66267 = [null,null,null,null,null,null,null,null];
(statearr_66267[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28887__auto__);

(statearr_66267[(1)] = (1));

return statearr_66267;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28887__auto____1 = (function (state_66261){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_66261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e66268){if((e66268 instanceof Object)){
var ex__28890__auto__ = e66268;
var statearr_66269_66271 = state_66261;
(statearr_66269_66271[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66272 = state_66261;
state_66261 = G__66272;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28887__auto__ = function(state_66261){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28887__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28887__auto____1.call(this,state_66261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28887__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28887__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__))
})();
var state__29000__auto__ = (function (){var statearr_66270 = f__28999__auto__.call(null);
(statearr_66270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_66270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto__))
);

return c__28998__auto__;
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
var c__28998__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28998__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28999__auto__ = (function (){var switch__28886__auto__ = ((function (c__28998__auto__,figwheel_version,temp__4657__auto__){
return (function (state_66295){
var state_val_66296 = (state_66295[(1)]);
if((state_val_66296 === (1))){
var inst_66289 = cljs.core.async.timeout.call(null,(2000));
var state_66295__$1 = state_66295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66295__$1,(2),inst_66289);
} else {
if((state_val_66296 === (2))){
var inst_66291 = (state_66295[(2)]);
var inst_66292 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_66293 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_66292);
var state_66295__$1 = (function (){var statearr_66297 = state_66295;
(statearr_66297[(7)] = inst_66291);

return statearr_66297;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66295__$1,inst_66293);
} else {
return null;
}
}
});})(c__28998__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28886__auto__,c__28998__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28887__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28887__auto____0 = (function (){
var statearr_66301 = [null,null,null,null,null,null,null,null];
(statearr_66301[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28887__auto__);

(statearr_66301[(1)] = (1));

return statearr_66301;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28887__auto____1 = (function (state_66295){
while(true){
var ret_value__28888__auto__ = (function (){try{while(true){
var result__28889__auto__ = switch__28886__auto__.call(null,state_66295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28889__auto__;
}
break;
}
}catch (e66302){if((e66302 instanceof Object)){
var ex__28890__auto__ = e66302;
var statearr_66303_66305 = state_66295;
(statearr_66303_66305[(5)] = ex__28890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66306 = state_66295;
state_66295 = G__66306;
continue;
} else {
return ret_value__28888__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28887__auto__ = function(state_66295){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28887__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28887__auto____1.call(this,state_66295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28887__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28887__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28887__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28887__auto__;
})()
;})(switch__28886__auto__,c__28998__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29000__auto__ = (function (){var statearr_66304 = f__28999__auto__.call(null);
(statearr_66304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28998__auto__);

return statearr_66304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29000__auto__);
});})(c__28998__auto__,figwheel_version,temp__4657__auto__))
);

return c__28998__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__66307){
var map__66311 = p__66307;
var map__66311__$1 = ((((!((map__66311 == null)))?((((map__66311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66311):map__66311);
var file = cljs.core.get.call(null,map__66311__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__66311__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__66311__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__66313 = "";
var G__66313__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__66313),cljs.core.str("file "),cljs.core.str(file)].join(''):G__66313);
var G__66313__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__66313__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__66313__$1);
if(cljs.core.truth_((function (){var and__24887__auto__ = line;
if(cljs.core.truth_(and__24887__auto__)){
return column;
} else {
return and__24887__auto__;
}
})())){
return [cljs.core.str(G__66313__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__66313__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__66314){
var map__66321 = p__66314;
var map__66321__$1 = ((((!((map__66321 == null)))?((((map__66321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66321):map__66321);
var ed = map__66321__$1;
var formatted_exception = cljs.core.get.call(null,map__66321__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__66321__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__66321__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__66323_66327 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__66324_66328 = null;
var count__66325_66329 = (0);
var i__66326_66330 = (0);
while(true){
if((i__66326_66330 < count__66325_66329)){
var msg_66331 = cljs.core._nth.call(null,chunk__66324_66328,i__66326_66330);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_66331);

var G__66332 = seq__66323_66327;
var G__66333 = chunk__66324_66328;
var G__66334 = count__66325_66329;
var G__66335 = (i__66326_66330 + (1));
seq__66323_66327 = G__66332;
chunk__66324_66328 = G__66333;
count__66325_66329 = G__66334;
i__66326_66330 = G__66335;
continue;
} else {
var temp__4657__auto___66336 = cljs.core.seq.call(null,seq__66323_66327);
if(temp__4657__auto___66336){
var seq__66323_66337__$1 = temp__4657__auto___66336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66323_66337__$1)){
var c__25713__auto___66338 = cljs.core.chunk_first.call(null,seq__66323_66337__$1);
var G__66339 = cljs.core.chunk_rest.call(null,seq__66323_66337__$1);
var G__66340 = c__25713__auto___66338;
var G__66341 = cljs.core.count.call(null,c__25713__auto___66338);
var G__66342 = (0);
seq__66323_66327 = G__66339;
chunk__66324_66328 = G__66340;
count__66325_66329 = G__66341;
i__66326_66330 = G__66342;
continue;
} else {
var msg_66343 = cljs.core.first.call(null,seq__66323_66337__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_66343);

var G__66344 = cljs.core.next.call(null,seq__66323_66337__$1);
var G__66345 = null;
var G__66346 = (0);
var G__66347 = (0);
seq__66323_66327 = G__66344;
chunk__66324_66328 = G__66345;
count__66325_66329 = G__66346;
i__66326_66330 = G__66347;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__66348){
var map__66351 = p__66348;
var map__66351__$1 = ((((!((map__66351 == null)))?((((map__66351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66351):map__66351);
var w = map__66351__$1;
var message = cljs.core.get.call(null,map__66351__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__24887__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24887__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24887__auto__;
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
var seq__66363 = cljs.core.seq.call(null,plugins);
var chunk__66364 = null;
var count__66365 = (0);
var i__66366 = (0);
while(true){
if((i__66366 < count__66365)){
var vec__66367 = cljs.core._nth.call(null,chunk__66364,i__66366);
var k = cljs.core.nth.call(null,vec__66367,(0),null);
var plugin = cljs.core.nth.call(null,vec__66367,(1),null);
if(cljs.core.truth_(plugin)){
var pl_66373 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__66363,chunk__66364,count__66365,i__66366,pl_66373,vec__66367,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_66373.call(null,msg_hist);
});})(seq__66363,chunk__66364,count__66365,i__66366,pl_66373,vec__66367,k,plugin))
);
} else {
}

var G__66374 = seq__66363;
var G__66375 = chunk__66364;
var G__66376 = count__66365;
var G__66377 = (i__66366 + (1));
seq__66363 = G__66374;
chunk__66364 = G__66375;
count__66365 = G__66376;
i__66366 = G__66377;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__66363);
if(temp__4657__auto__){
var seq__66363__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66363__$1)){
var c__25713__auto__ = cljs.core.chunk_first.call(null,seq__66363__$1);
var G__66378 = cljs.core.chunk_rest.call(null,seq__66363__$1);
var G__66379 = c__25713__auto__;
var G__66380 = cljs.core.count.call(null,c__25713__auto__);
var G__66381 = (0);
seq__66363 = G__66378;
chunk__66364 = G__66379;
count__66365 = G__66380;
i__66366 = G__66381;
continue;
} else {
var vec__66370 = cljs.core.first.call(null,seq__66363__$1);
var k = cljs.core.nth.call(null,vec__66370,(0),null);
var plugin = cljs.core.nth.call(null,vec__66370,(1),null);
if(cljs.core.truth_(plugin)){
var pl_66382 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__66363,chunk__66364,count__66365,i__66366,pl_66382,vec__66370,k,plugin,seq__66363__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_66382.call(null,msg_hist);
});})(seq__66363,chunk__66364,count__66365,i__66366,pl_66382,vec__66370,k,plugin,seq__66363__$1,temp__4657__auto__))
);
} else {
}

var G__66383 = cljs.core.next.call(null,seq__66363__$1);
var G__66384 = null;
var G__66385 = (0);
var G__66386 = (0);
seq__66363 = G__66383;
chunk__66364 = G__66384;
count__66365 = G__66385;
i__66366 = G__66386;
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
var args66387 = [];
var len__26007__auto___66394 = arguments.length;
var i__26008__auto___66395 = (0);
while(true){
if((i__26008__auto___66395 < len__26007__auto___66394)){
args66387.push((arguments[i__26008__auto___66395]));

var G__66396 = (i__26008__auto___66395 + (1));
i__26008__auto___66395 = G__66396;
continue;
} else {
}
break;
}

var G__66389 = args66387.length;
switch (G__66389) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66387.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__66390_66398 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__66391_66399 = null;
var count__66392_66400 = (0);
var i__66393_66401 = (0);
while(true){
if((i__66393_66401 < count__66392_66400)){
var msg_66402 = cljs.core._nth.call(null,chunk__66391_66399,i__66393_66401);
figwheel.client.socket.handle_incoming_message.call(null,msg_66402);

var G__66403 = seq__66390_66398;
var G__66404 = chunk__66391_66399;
var G__66405 = count__66392_66400;
var G__66406 = (i__66393_66401 + (1));
seq__66390_66398 = G__66403;
chunk__66391_66399 = G__66404;
count__66392_66400 = G__66405;
i__66393_66401 = G__66406;
continue;
} else {
var temp__4657__auto___66407 = cljs.core.seq.call(null,seq__66390_66398);
if(temp__4657__auto___66407){
var seq__66390_66408__$1 = temp__4657__auto___66407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66390_66408__$1)){
var c__25713__auto___66409 = cljs.core.chunk_first.call(null,seq__66390_66408__$1);
var G__66410 = cljs.core.chunk_rest.call(null,seq__66390_66408__$1);
var G__66411 = c__25713__auto___66409;
var G__66412 = cljs.core.count.call(null,c__25713__auto___66409);
var G__66413 = (0);
seq__66390_66398 = G__66410;
chunk__66391_66399 = G__66411;
count__66392_66400 = G__66412;
i__66393_66401 = G__66413;
continue;
} else {
var msg_66414 = cljs.core.first.call(null,seq__66390_66408__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_66414);

var G__66415 = cljs.core.next.call(null,seq__66390_66408__$1);
var G__66416 = null;
var G__66417 = (0);
var G__66418 = (0);
seq__66390_66398 = G__66415;
chunk__66391_66399 = G__66416;
count__66392_66400 = G__66417;
i__66393_66401 = G__66418;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26014__auto__ = [];
var len__26007__auto___66423 = arguments.length;
var i__26008__auto___66424 = (0);
while(true){
if((i__26008__auto___66424 < len__26007__auto___66423)){
args__26014__auto__.push((arguments[i__26008__auto___66424]));

var G__66425 = (i__26008__auto___66424 + (1));
i__26008__auto___66424 = G__66425;
continue;
} else {
}
break;
}

var argseq__26015__auto__ = ((((0) < args__26014__auto__.length))?(new cljs.core.IndexedSeq(args__26014__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26015__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__66420){
var map__66421 = p__66420;
var map__66421__$1 = ((((!((map__66421 == null)))?((((map__66421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66421):map__66421);
var opts = map__66421__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq66419){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66419));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e66427){if((e66427 instanceof Error)){
var e = e66427;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e66427;

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
return (function (p__66431){
var map__66432 = p__66431;
var map__66432__$1 = ((((!((map__66432 == null)))?((((map__66432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66432):map__66432);
var msg_name = cljs.core.get.call(null,map__66432__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1479783768423