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
var args77753 = [];
var len__25826__auto___77756 = arguments.length;
var i__25827__auto___77757 = (0);
while(true){
if((i__25827__auto___77757 < len__25826__auto___77756)){
args77753.push((arguments[i__25827__auto___77757]));

var G__77758 = (i__25827__auto___77757 + (1));
i__25827__auto___77757 = G__77758;
continue;
} else {
}
break;
}

var G__77755 = args77753.length;
switch (G__77755) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args77753.length)].join('')));

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
var len__25826__auto___77761 = arguments.length;
var i__25827__auto___77762 = (0);
while(true){
if((i__25827__auto___77762 < len__25826__auto___77761)){
args__25833__auto__.push((arguments[i__25827__auto___77762]));

var G__77763 = (i__25827__auto___77762 + (1));
i__25827__auto___77762 = G__77763;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq77760){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq77760));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25833__auto__ = [];
var len__25826__auto___77765 = arguments.length;
var i__25827__auto___77766 = (0);
while(true){
if((i__25827__auto___77766 < len__25826__auto___77765)){
args__25833__auto__.push((arguments[i__25827__auto___77766]));

var G__77767 = (i__25827__auto___77766 + (1));
i__25827__auto___77766 = G__77767;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq77764){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq77764));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__77768 = cljs.core._EQ_;
var expr__77769 = (function (){var or__24751__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e77772){if((e77772 instanceof Error)){
var e = e77772;
return false;
} else {
throw e77772;

}
}})();
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__77768.call(null,"true",expr__77769))){
return true;
} else {
if(cljs.core.truth_(pred__77768.call(null,"false",expr__77769))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__77769)].join('')));
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
}catch (e77774){if((e77774 instanceof Error)){
var e = e77774;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e77774;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__77775){
var map__77778 = p__77775;
var map__77778__$1 = ((((!((map__77778 == null)))?((((map__77778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77778):map__77778);
var message = cljs.core.get.call(null,map__77778__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__77778__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27930__auto___77940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___77940,ch){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___77940,ch){
return (function (state_77909){
var state_val_77910 = (state_77909[(1)]);
if((state_val_77910 === (7))){
var inst_77905 = (state_77909[(2)]);
var state_77909__$1 = state_77909;
var statearr_77911_77941 = state_77909__$1;
(statearr_77911_77941[(2)] = inst_77905);

(statearr_77911_77941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77910 === (1))){
var state_77909__$1 = state_77909;
var statearr_77912_77942 = state_77909__$1;
(statearr_77912_77942[(2)] = null);

(statearr_77912_77942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77910 === (4))){
var inst_77862 = (state_77909[(7)]);
var inst_77862__$1 = (state_77909[(2)]);
var state_77909__$1 = (function (){var statearr_77913 = state_77909;
(statearr_77913[(7)] = inst_77862__$1);

return statearr_77913;
})();
if(cljs.core.truth_(inst_77862__$1)){
var statearr_77914_77943 = state_77909__$1;
(statearr_77914_77943[(1)] = (5));

} else {
var statearr_77915_77944 = state_77909__$1;
(statearr_77915_77944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77910 === (15))){
var inst_77869 = (state_77909[(8)]);
var inst_77884 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_77869);
var inst_77885 = cljs.core.first.call(null,inst_77884);
var inst_77886 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_77885);
var inst_77887 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_77886)].join('');
var inst_77888 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_77887);
var state_77909__$1 = state_77909;
var statearr_77916_77945 = state_77909__$1;
(statearr_77916_77945[(2)] = inst_77888);

(statearr_77916_77945[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77910 === (13))){
var inst_77893 = (state_77909[(2)]);
var state_77909__$1 = state_77909;
var statearr_77917_77946 = state_77909__$1;
(statearr_77917_77946[(2)] = inst_77893);

(statearr_77917_77946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77910 === (6))){
var state_77909__$1 = state_77909;
var statearr_77918_77947 = state_77909__$1;
(statearr_77918_77947[(2)] = null);

(statearr_77918_77947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77910 === (17))){
var inst_77891 = (state_77909[(2)]);
var state_77909__$1 = state_77909;
var statearr_77919_77948 = state_77909__$1;
(statearr_77919_77948[(2)] = inst_77891);

(statearr_77919_77948[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77910 === (3))){
var inst_77907 = (state_77909[(2)]);
var state_77909__$1 = state_77909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77909__$1,inst_77907);
} else {
if((state_val_77910 === (12))){
var inst_77868 = (state_77909[(9)]);
var inst_77882 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_77868,opts);
var state_77909__$1 = state_77909;
if(cljs.core.truth_(inst_77882)){
var statearr_77920_77949 = state_77909__$1;
(statearr_77920_77949[(1)] = (15));

} else {
var statearr_77921_77950 = state_77909__$1;
(statearr_77921_77950[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77910 === (2))){
var state_77909__$1 = state_77909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77909__$1,(4),ch);
} else {
if((state_val_77910 === (11))){
var inst_77869 = (state_77909[(8)]);
var inst_77874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77875 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_77869);
var inst_77876 = cljs.core.async.timeout.call(null,(1000));
var inst_77877 = [inst_77875,inst_77876];
var inst_77878 = (new cljs.core.PersistentVector(null,2,(5),inst_77874,inst_77877,null));
var state_77909__$1 = state_77909;
return cljs.core.async.ioc_alts_BANG_.call(null,state_77909__$1,(14),inst_77878);
} else {
if((state_val_77910 === (9))){
var inst_77869 = (state_77909[(8)]);
var inst_77895 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_77896 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_77869);
var inst_77897 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_77896);
var inst_77898 = [cljs.core.str("Not loading: "),cljs.core.str(inst_77897)].join('');
var inst_77899 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_77898);
var state_77909__$1 = (function (){var statearr_77922 = state_77909;
(statearr_77922[(10)] = inst_77895);

return statearr_77922;
})();
var statearr_77923_77951 = state_77909__$1;
(statearr_77923_77951[(2)] = inst_77899);

(statearr_77923_77951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77910 === (5))){
var inst_77862 = (state_77909[(7)]);
var inst_77864 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_77865 = (new cljs.core.PersistentArrayMap(null,2,inst_77864,null));
var inst_77866 = (new cljs.core.PersistentHashSet(null,inst_77865,null));
var inst_77867 = figwheel.client.focus_msgs.call(null,inst_77866,inst_77862);
var inst_77868 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_77867);
var inst_77869 = cljs.core.first.call(null,inst_77867);
var inst_77870 = figwheel.client.autoload_QMARK_.call(null);
var state_77909__$1 = (function (){var statearr_77924 = state_77909;
(statearr_77924[(9)] = inst_77868);

(statearr_77924[(8)] = inst_77869);

return statearr_77924;
})();
if(cljs.core.truth_(inst_77870)){
var statearr_77925_77952 = state_77909__$1;
(statearr_77925_77952[(1)] = (8));

} else {
var statearr_77926_77953 = state_77909__$1;
(statearr_77926_77953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77910 === (14))){
var inst_77880 = (state_77909[(2)]);
var state_77909__$1 = state_77909;
var statearr_77927_77954 = state_77909__$1;
(statearr_77927_77954[(2)] = inst_77880);

(statearr_77927_77954[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77910 === (16))){
var state_77909__$1 = state_77909;
var statearr_77928_77955 = state_77909__$1;
(statearr_77928_77955[(2)] = null);

(statearr_77928_77955[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77910 === (10))){
var inst_77901 = (state_77909[(2)]);
var state_77909__$1 = (function (){var statearr_77929 = state_77909;
(statearr_77929[(11)] = inst_77901);

return statearr_77929;
})();
var statearr_77930_77956 = state_77909__$1;
(statearr_77930_77956[(2)] = null);

(statearr_77930_77956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77910 === (8))){
var inst_77868 = (state_77909[(9)]);
var inst_77872 = figwheel.client.reload_file_state_QMARK_.call(null,inst_77868,opts);
var state_77909__$1 = state_77909;
if(cljs.core.truth_(inst_77872)){
var statearr_77931_77957 = state_77909__$1;
(statearr_77931_77957[(1)] = (11));

} else {
var statearr_77932_77958 = state_77909__$1;
(statearr_77932_77958[(1)] = (12));

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
});})(c__27930__auto___77940,ch))
;
return ((function (switch__27865__auto__,c__27930__auto___77940,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27866__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27866__auto____0 = (function (){
var statearr_77936 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77936[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27866__auto__);

(statearr_77936[(1)] = (1));

return statearr_77936;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27866__auto____1 = (function (state_77909){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_77909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e77937){if((e77937 instanceof Object)){
var ex__27869__auto__ = e77937;
var statearr_77938_77959 = state_77909;
(statearr_77938_77959[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77960 = state_77909;
state_77909 = G__77960;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27866__auto__ = function(state_77909){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27866__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27866__auto____1.call(this,state_77909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27866__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27866__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___77940,ch))
})();
var state__27932__auto__ = (function (){var statearr_77939 = f__27931__auto__.call(null);
(statearr_77939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___77940);

return statearr_77939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___77940,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__77961_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__77961_SHARP_));
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
var base_path_77964 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_77964){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e77963){if((e77963 instanceof Error)){
var e = e77963;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_77964], null));
} else {
var e = e77963;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_77964))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__77965){
var map__77974 = p__77965;
var map__77974__$1 = ((((!((map__77974 == null)))?((((map__77974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77974):map__77974);
var opts = map__77974__$1;
var build_id = cljs.core.get.call(null,map__77974__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__77974,map__77974__$1,opts,build_id){
return (function (p__77976){
var vec__77977 = p__77976;
var seq__77978 = cljs.core.seq.call(null,vec__77977);
var first__77979 = cljs.core.first.call(null,seq__77978);
var seq__77978__$1 = cljs.core.next.call(null,seq__77978);
var map__77980 = first__77979;
var map__77980__$1 = ((((!((map__77980 == null)))?((((map__77980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77980):map__77980);
var msg = map__77980__$1;
var msg_name = cljs.core.get.call(null,map__77980__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__77978__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__77977,seq__77978,first__77979,seq__77978__$1,map__77980,map__77980__$1,msg,msg_name,_,map__77974,map__77974__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__77977,seq__77978,first__77979,seq__77978__$1,map__77980,map__77980__$1,msg,msg_name,_,map__77974,map__77974__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__77974,map__77974__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__77988){
var vec__77989 = p__77988;
var seq__77990 = cljs.core.seq.call(null,vec__77989);
var first__77991 = cljs.core.first.call(null,seq__77990);
var seq__77990__$1 = cljs.core.next.call(null,seq__77990);
var map__77992 = first__77991;
var map__77992__$1 = ((((!((map__77992 == null)))?((((map__77992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77992):map__77992);
var msg = map__77992__$1;
var msg_name = cljs.core.get.call(null,map__77992__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__77990__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__77994){
var map__78006 = p__77994;
var map__78006__$1 = ((((!((map__78006 == null)))?((((map__78006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78006):map__78006);
var on_compile_warning = cljs.core.get.call(null,map__78006__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__78006__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__78006,map__78006__$1,on_compile_warning,on_compile_fail){
return (function (p__78008){
var vec__78009 = p__78008;
var seq__78010 = cljs.core.seq.call(null,vec__78009);
var first__78011 = cljs.core.first.call(null,seq__78010);
var seq__78010__$1 = cljs.core.next.call(null,seq__78010);
var map__78012 = first__78011;
var map__78012__$1 = ((((!((map__78012 == null)))?((((map__78012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78012):map__78012);
var msg = map__78012__$1;
var msg_name = cljs.core.get.call(null,map__78012__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__78010__$1;
var pred__78014 = cljs.core._EQ_;
var expr__78015 = msg_name;
if(cljs.core.truth_(pred__78014.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__78015))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__78014.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__78015))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__78006,map__78006__$1,on_compile_warning,on_compile_fail))
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
return (function (state_78243){
var state_val_78244 = (state_78243[(1)]);
if((state_val_78244 === (7))){
var inst_78163 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
if(cljs.core.truth_(inst_78163)){
var statearr_78245_78295 = state_78243__$1;
(statearr_78245_78295[(1)] = (8));

} else {
var statearr_78246_78296 = state_78243__$1;
(statearr_78246_78296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (20))){
var inst_78237 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
var statearr_78247_78297 = state_78243__$1;
(statearr_78247_78297[(2)] = inst_78237);

(statearr_78247_78297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (27))){
var inst_78233 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
var statearr_78248_78298 = state_78243__$1;
(statearr_78248_78298[(2)] = inst_78233);

(statearr_78248_78298[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (1))){
var inst_78156 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_78243__$1 = state_78243;
if(cljs.core.truth_(inst_78156)){
var statearr_78249_78299 = state_78243__$1;
(statearr_78249_78299[(1)] = (2));

} else {
var statearr_78250_78300 = state_78243__$1;
(statearr_78250_78300[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (24))){
var inst_78235 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
var statearr_78251_78301 = state_78243__$1;
(statearr_78251_78301[(2)] = inst_78235);

(statearr_78251_78301[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (4))){
var inst_78241 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78243__$1,inst_78241);
} else {
if((state_val_78244 === (15))){
var inst_78239 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
var statearr_78252_78302 = state_78243__$1;
(statearr_78252_78302[(2)] = inst_78239);

(statearr_78252_78302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (21))){
var inst_78192 = (state_78243[(2)]);
var inst_78193 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78194 = figwheel.client.auto_jump_to_error.call(null,opts,inst_78193);
var state_78243__$1 = (function (){var statearr_78253 = state_78243;
(statearr_78253[(7)] = inst_78192);

return statearr_78253;
})();
var statearr_78254_78303 = state_78243__$1;
(statearr_78254_78303[(2)] = inst_78194);

(statearr_78254_78303[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (31))){
var inst_78222 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_78243__$1 = state_78243;
if(cljs.core.truth_(inst_78222)){
var statearr_78255_78304 = state_78243__$1;
(statearr_78255_78304[(1)] = (34));

} else {
var statearr_78256_78305 = state_78243__$1;
(statearr_78256_78305[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (32))){
var inst_78231 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
var statearr_78257_78306 = state_78243__$1;
(statearr_78257_78306[(2)] = inst_78231);

(statearr_78257_78306[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (33))){
var inst_78218 = (state_78243[(2)]);
var inst_78219 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78220 = figwheel.client.auto_jump_to_error.call(null,opts,inst_78219);
var state_78243__$1 = (function (){var statearr_78258 = state_78243;
(statearr_78258[(8)] = inst_78218);

return statearr_78258;
})();
var statearr_78259_78307 = state_78243__$1;
(statearr_78259_78307[(2)] = inst_78220);

(statearr_78259_78307[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (13))){
var inst_78177 = figwheel.client.heads_up.clear.call(null);
var state_78243__$1 = state_78243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78243__$1,(16),inst_78177);
} else {
if((state_val_78244 === (22))){
var inst_78198 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78199 = figwheel.client.heads_up.append_warning_message.call(null,inst_78198);
var state_78243__$1 = state_78243;
var statearr_78260_78308 = state_78243__$1;
(statearr_78260_78308[(2)] = inst_78199);

(statearr_78260_78308[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (36))){
var inst_78229 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
var statearr_78261_78309 = state_78243__$1;
(statearr_78261_78309[(2)] = inst_78229);

(statearr_78261_78309[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (29))){
var inst_78209 = (state_78243[(2)]);
var inst_78210 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78211 = figwheel.client.auto_jump_to_error.call(null,opts,inst_78210);
var state_78243__$1 = (function (){var statearr_78262 = state_78243;
(statearr_78262[(9)] = inst_78209);

return statearr_78262;
})();
var statearr_78263_78310 = state_78243__$1;
(statearr_78263_78310[(2)] = inst_78211);

(statearr_78263_78310[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (6))){
var inst_78158 = (state_78243[(10)]);
var state_78243__$1 = state_78243;
var statearr_78264_78311 = state_78243__$1;
(statearr_78264_78311[(2)] = inst_78158);

(statearr_78264_78311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (28))){
var inst_78205 = (state_78243[(2)]);
var inst_78206 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78207 = figwheel.client.heads_up.display_warning.call(null,inst_78206);
var state_78243__$1 = (function (){var statearr_78265 = state_78243;
(statearr_78265[(11)] = inst_78205);

return statearr_78265;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78243__$1,(29),inst_78207);
} else {
if((state_val_78244 === (25))){
var inst_78203 = figwheel.client.heads_up.clear.call(null);
var state_78243__$1 = state_78243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78243__$1,(28),inst_78203);
} else {
if((state_val_78244 === (34))){
var inst_78224 = figwheel.client.heads_up.flash_loaded.call(null);
var state_78243__$1 = state_78243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78243__$1,(37),inst_78224);
} else {
if((state_val_78244 === (17))){
var inst_78183 = (state_78243[(2)]);
var inst_78184 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78185 = figwheel.client.auto_jump_to_error.call(null,opts,inst_78184);
var state_78243__$1 = (function (){var statearr_78266 = state_78243;
(statearr_78266[(12)] = inst_78183);

return statearr_78266;
})();
var statearr_78267_78312 = state_78243__$1;
(statearr_78267_78312[(2)] = inst_78185);

(statearr_78267_78312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (3))){
var inst_78175 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_78243__$1 = state_78243;
if(cljs.core.truth_(inst_78175)){
var statearr_78268_78313 = state_78243__$1;
(statearr_78268_78313[(1)] = (13));

} else {
var statearr_78269_78314 = state_78243__$1;
(statearr_78269_78314[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (12))){
var inst_78171 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
var statearr_78270_78315 = state_78243__$1;
(statearr_78270_78315[(2)] = inst_78171);

(statearr_78270_78315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (2))){
var inst_78158 = (state_78243[(10)]);
var inst_78158__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_78243__$1 = (function (){var statearr_78271 = state_78243;
(statearr_78271[(10)] = inst_78158__$1);

return statearr_78271;
})();
if(cljs.core.truth_(inst_78158__$1)){
var statearr_78272_78316 = state_78243__$1;
(statearr_78272_78316[(1)] = (5));

} else {
var statearr_78273_78317 = state_78243__$1;
(statearr_78273_78317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (23))){
var inst_78201 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_78243__$1 = state_78243;
if(cljs.core.truth_(inst_78201)){
var statearr_78274_78318 = state_78243__$1;
(statearr_78274_78318[(1)] = (25));

} else {
var statearr_78275_78319 = state_78243__$1;
(statearr_78275_78319[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (35))){
var state_78243__$1 = state_78243;
var statearr_78276_78320 = state_78243__$1;
(statearr_78276_78320[(2)] = null);

(statearr_78276_78320[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (19))){
var inst_78196 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_78243__$1 = state_78243;
if(cljs.core.truth_(inst_78196)){
var statearr_78277_78321 = state_78243__$1;
(statearr_78277_78321[(1)] = (22));

} else {
var statearr_78278_78322 = state_78243__$1;
(statearr_78278_78322[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (11))){
var inst_78167 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
var statearr_78279_78323 = state_78243__$1;
(statearr_78279_78323[(2)] = inst_78167);

(statearr_78279_78323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (9))){
var inst_78169 = figwheel.client.heads_up.clear.call(null);
var state_78243__$1 = state_78243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78243__$1,(12),inst_78169);
} else {
if((state_val_78244 === (5))){
var inst_78160 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_78243__$1 = state_78243;
var statearr_78280_78324 = state_78243__$1;
(statearr_78280_78324[(2)] = inst_78160);

(statearr_78280_78324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (14))){
var inst_78187 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_78243__$1 = state_78243;
if(cljs.core.truth_(inst_78187)){
var statearr_78281_78325 = state_78243__$1;
(statearr_78281_78325[(1)] = (18));

} else {
var statearr_78282_78326 = state_78243__$1;
(statearr_78282_78326[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (26))){
var inst_78213 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_78243__$1 = state_78243;
if(cljs.core.truth_(inst_78213)){
var statearr_78283_78327 = state_78243__$1;
(statearr_78283_78327[(1)] = (30));

} else {
var statearr_78284_78328 = state_78243__$1;
(statearr_78284_78328[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (16))){
var inst_78179 = (state_78243[(2)]);
var inst_78180 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78181 = figwheel.client.heads_up.display_exception.call(null,inst_78180);
var state_78243__$1 = (function (){var statearr_78285 = state_78243;
(statearr_78285[(13)] = inst_78179);

return statearr_78285;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78243__$1,(17),inst_78181);
} else {
if((state_val_78244 === (30))){
var inst_78215 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78216 = figwheel.client.heads_up.display_warning.call(null,inst_78215);
var state_78243__$1 = state_78243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78243__$1,(33),inst_78216);
} else {
if((state_val_78244 === (10))){
var inst_78173 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
var statearr_78286_78329 = state_78243__$1;
(statearr_78286_78329[(2)] = inst_78173);

(statearr_78286_78329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (18))){
var inst_78189 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_78190 = figwheel.client.heads_up.display_exception.call(null,inst_78189);
var state_78243__$1 = state_78243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78243__$1,(21),inst_78190);
} else {
if((state_val_78244 === (37))){
var inst_78226 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
var statearr_78287_78330 = state_78243__$1;
(statearr_78287_78330[(2)] = inst_78226);

(statearr_78287_78330[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (8))){
var inst_78165 = figwheel.client.heads_up.flash_loaded.call(null);
var state_78243__$1 = state_78243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78243__$1,(11),inst_78165);
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
var statearr_78291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78291[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto__);

(statearr_78291[(1)] = (1));

return statearr_78291;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto____1 = (function (state_78243){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_78243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e78292){if((e78292 instanceof Object)){
var ex__27869__auto__ = e78292;
var statearr_78293_78331 = state_78243;
(statearr_78293_78331[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78332 = state_78243;
state_78243 = G__78332;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto__ = function(state_78243){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto____1.call(this,state_78243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__,msg_hist,msg_names,msg))
})();
var state__27932__auto__ = (function (){var statearr_78294 = f__27931__auto__.call(null);
(statearr_78294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_78294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto__,msg_hist,msg_names,msg))
);

return c__27930__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27930__auto___78395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27930__auto___78395,ch){
return (function (){
var f__27931__auto__ = (function (){var switch__27865__auto__ = ((function (c__27930__auto___78395,ch){
return (function (state_78378){
var state_val_78379 = (state_78378[(1)]);
if((state_val_78379 === (1))){
var state_78378__$1 = state_78378;
var statearr_78380_78396 = state_78378__$1;
(statearr_78380_78396[(2)] = null);

(statearr_78380_78396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78379 === (2))){
var state_78378__$1 = state_78378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78378__$1,(4),ch);
} else {
if((state_val_78379 === (3))){
var inst_78376 = (state_78378[(2)]);
var state_78378__$1 = state_78378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78378__$1,inst_78376);
} else {
if((state_val_78379 === (4))){
var inst_78366 = (state_78378[(7)]);
var inst_78366__$1 = (state_78378[(2)]);
var state_78378__$1 = (function (){var statearr_78381 = state_78378;
(statearr_78381[(7)] = inst_78366__$1);

return statearr_78381;
})();
if(cljs.core.truth_(inst_78366__$1)){
var statearr_78382_78397 = state_78378__$1;
(statearr_78382_78397[(1)] = (5));

} else {
var statearr_78383_78398 = state_78378__$1;
(statearr_78383_78398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78379 === (5))){
var inst_78366 = (state_78378[(7)]);
var inst_78368 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_78366);
var state_78378__$1 = state_78378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78378__$1,(8),inst_78368);
} else {
if((state_val_78379 === (6))){
var state_78378__$1 = state_78378;
var statearr_78384_78399 = state_78378__$1;
(statearr_78384_78399[(2)] = null);

(statearr_78384_78399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78379 === (7))){
var inst_78374 = (state_78378[(2)]);
var state_78378__$1 = state_78378;
var statearr_78385_78400 = state_78378__$1;
(statearr_78385_78400[(2)] = inst_78374);

(statearr_78385_78400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78379 === (8))){
var inst_78370 = (state_78378[(2)]);
var state_78378__$1 = (function (){var statearr_78386 = state_78378;
(statearr_78386[(8)] = inst_78370);

return statearr_78386;
})();
var statearr_78387_78401 = state_78378__$1;
(statearr_78387_78401[(2)] = null);

(statearr_78387_78401[(1)] = (2));


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
});})(c__27930__auto___78395,ch))
;
return ((function (switch__27865__auto__,c__27930__auto___78395,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27866__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27866__auto____0 = (function (){
var statearr_78391 = [null,null,null,null,null,null,null,null,null];
(statearr_78391[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27866__auto__);

(statearr_78391[(1)] = (1));

return statearr_78391;
});
var figwheel$client$heads_up_plugin_$_state_machine__27866__auto____1 = (function (state_78378){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_78378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e78392){if((e78392 instanceof Object)){
var ex__27869__auto__ = e78392;
var statearr_78393_78402 = state_78378;
(statearr_78393_78402[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78403 = state_78378;
state_78378 = G__78403;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27866__auto__ = function(state_78378){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27866__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27866__auto____1.call(this,state_78378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27866__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27866__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto___78395,ch))
})();
var state__27932__auto__ = (function (){var statearr_78394 = f__27931__auto__.call(null);
(statearr_78394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto___78395);

return statearr_78394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27932__auto__);
});})(c__27930__auto___78395,ch))
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
return (function (state_78424){
var state_val_78425 = (state_78424[(1)]);
if((state_val_78425 === (1))){
var inst_78419 = cljs.core.async.timeout.call(null,(3000));
var state_78424__$1 = state_78424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78424__$1,(2),inst_78419);
} else {
if((state_val_78425 === (2))){
var inst_78421 = (state_78424[(2)]);
var inst_78422 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_78424__$1 = (function (){var statearr_78426 = state_78424;
(statearr_78426[(7)] = inst_78421);

return statearr_78426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78424__$1,inst_78422);
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
var statearr_78430 = [null,null,null,null,null,null,null,null];
(statearr_78430[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27866__auto__);

(statearr_78430[(1)] = (1));

return statearr_78430;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27866__auto____1 = (function (state_78424){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_78424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e78431){if((e78431 instanceof Object)){
var ex__27869__auto__ = e78431;
var statearr_78432_78434 = state_78424;
(statearr_78432_78434[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78435 = state_78424;
state_78424 = G__78435;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27866__auto__ = function(state_78424){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27866__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27866__auto____1.call(this,state_78424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27866__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27866__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__))
})();
var state__27932__auto__ = (function (){var statearr_78433 = f__27931__auto__.call(null);
(statearr_78433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_78433;
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
return (function (state_78458){
var state_val_78459 = (state_78458[(1)]);
if((state_val_78459 === (1))){
var inst_78452 = cljs.core.async.timeout.call(null,(2000));
var state_78458__$1 = state_78458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78458__$1,(2),inst_78452);
} else {
if((state_val_78459 === (2))){
var inst_78454 = (state_78458[(2)]);
var inst_78455 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_78456 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_78455);
var state_78458__$1 = (function (){var statearr_78460 = state_78458;
(statearr_78460[(7)] = inst_78454);

return statearr_78460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78458__$1,inst_78456);
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
var statearr_78464 = [null,null,null,null,null,null,null,null];
(statearr_78464[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto__);

(statearr_78464[(1)] = (1));

return statearr_78464;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto____1 = (function (state_78458){
while(true){
var ret_value__27867__auto__ = (function (){try{while(true){
var result__27868__auto__ = switch__27865__auto__.call(null,state_78458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27868__auto__;
}
break;
}
}catch (e78465){if((e78465 instanceof Object)){
var ex__27869__auto__ = e78465;
var statearr_78466_78468 = state_78458;
(statearr_78466_78468[(5)] = ex__27869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78469 = state_78458;
state_78458 = G__78469;
continue;
} else {
return ret_value__27867__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto__ = function(state_78458){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto____1.call(this,state_78458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27866__auto__;
})()
;})(switch__27865__auto__,c__27930__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27932__auto__ = (function (){var statearr_78467 = f__27931__auto__.call(null);
(statearr_78467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27930__auto__);

return statearr_78467;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__78470){
var map__78474 = p__78470;
var map__78474__$1 = ((((!((map__78474 == null)))?((((map__78474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78474):map__78474);
var file = cljs.core.get.call(null,map__78474__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__78474__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__78474__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__78476 = "";
var G__78476__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__78476),cljs.core.str("file "),cljs.core.str(file)].join(''):G__78476);
var G__78476__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__78476__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__78476__$1);
if(cljs.core.truth_((function (){var and__24739__auto__ = line;
if(cljs.core.truth_(and__24739__auto__)){
return column;
} else {
return and__24739__auto__;
}
})())){
return [cljs.core.str(G__78476__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__78476__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__78477){
var map__78484 = p__78477;
var map__78484__$1 = ((((!((map__78484 == null)))?((((map__78484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78484):map__78484);
var ed = map__78484__$1;
var formatted_exception = cljs.core.get.call(null,map__78484__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__78484__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__78484__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__78486_78490 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__78487_78491 = null;
var count__78488_78492 = (0);
var i__78489_78493 = (0);
while(true){
if((i__78489_78493 < count__78488_78492)){
var msg_78494 = cljs.core._nth.call(null,chunk__78487_78491,i__78489_78493);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_78494);

var G__78495 = seq__78486_78490;
var G__78496 = chunk__78487_78491;
var G__78497 = count__78488_78492;
var G__78498 = (i__78489_78493 + (1));
seq__78486_78490 = G__78495;
chunk__78487_78491 = G__78496;
count__78488_78492 = G__78497;
i__78489_78493 = G__78498;
continue;
} else {
var temp__4657__auto___78499 = cljs.core.seq.call(null,seq__78486_78490);
if(temp__4657__auto___78499){
var seq__78486_78500__$1 = temp__4657__auto___78499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__78486_78500__$1)){
var c__25562__auto___78501 = cljs.core.chunk_first.call(null,seq__78486_78500__$1);
var G__78502 = cljs.core.chunk_rest.call(null,seq__78486_78500__$1);
var G__78503 = c__25562__auto___78501;
var G__78504 = cljs.core.count.call(null,c__25562__auto___78501);
var G__78505 = (0);
seq__78486_78490 = G__78502;
chunk__78487_78491 = G__78503;
count__78488_78492 = G__78504;
i__78489_78493 = G__78505;
continue;
} else {
var msg_78506 = cljs.core.first.call(null,seq__78486_78500__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_78506);

var G__78507 = cljs.core.next.call(null,seq__78486_78500__$1);
var G__78508 = null;
var G__78509 = (0);
var G__78510 = (0);
seq__78486_78490 = G__78507;
chunk__78487_78491 = G__78508;
count__78488_78492 = G__78509;
i__78489_78493 = G__78510;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__78511){
var map__78514 = p__78511;
var map__78514__$1 = ((((!((map__78514 == null)))?((((map__78514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78514):map__78514);
var w = map__78514__$1;
var message = cljs.core.get.call(null,map__78514__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__78526 = cljs.core.seq.call(null,plugins);
var chunk__78527 = null;
var count__78528 = (0);
var i__78529 = (0);
while(true){
if((i__78529 < count__78528)){
var vec__78530 = cljs.core._nth.call(null,chunk__78527,i__78529);
var k = cljs.core.nth.call(null,vec__78530,(0),null);
var plugin = cljs.core.nth.call(null,vec__78530,(1),null);
if(cljs.core.truth_(plugin)){
var pl_78536 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__78526,chunk__78527,count__78528,i__78529,pl_78536,vec__78530,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_78536.call(null,msg_hist);
});})(seq__78526,chunk__78527,count__78528,i__78529,pl_78536,vec__78530,k,plugin))
);
} else {
}

var G__78537 = seq__78526;
var G__78538 = chunk__78527;
var G__78539 = count__78528;
var G__78540 = (i__78529 + (1));
seq__78526 = G__78537;
chunk__78527 = G__78538;
count__78528 = G__78539;
i__78529 = G__78540;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__78526);
if(temp__4657__auto__){
var seq__78526__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__78526__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__78526__$1);
var G__78541 = cljs.core.chunk_rest.call(null,seq__78526__$1);
var G__78542 = c__25562__auto__;
var G__78543 = cljs.core.count.call(null,c__25562__auto__);
var G__78544 = (0);
seq__78526 = G__78541;
chunk__78527 = G__78542;
count__78528 = G__78543;
i__78529 = G__78544;
continue;
} else {
var vec__78533 = cljs.core.first.call(null,seq__78526__$1);
var k = cljs.core.nth.call(null,vec__78533,(0),null);
var plugin = cljs.core.nth.call(null,vec__78533,(1),null);
if(cljs.core.truth_(plugin)){
var pl_78545 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__78526,chunk__78527,count__78528,i__78529,pl_78545,vec__78533,k,plugin,seq__78526__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_78545.call(null,msg_hist);
});})(seq__78526,chunk__78527,count__78528,i__78529,pl_78545,vec__78533,k,plugin,seq__78526__$1,temp__4657__auto__))
);
} else {
}

var G__78546 = cljs.core.next.call(null,seq__78526__$1);
var G__78547 = null;
var G__78548 = (0);
var G__78549 = (0);
seq__78526 = G__78546;
chunk__78527 = G__78547;
count__78528 = G__78548;
i__78529 = G__78549;
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
var args78550 = [];
var len__25826__auto___78557 = arguments.length;
var i__25827__auto___78558 = (0);
while(true){
if((i__25827__auto___78558 < len__25826__auto___78557)){
args78550.push((arguments[i__25827__auto___78558]));

var G__78559 = (i__25827__auto___78558 + (1));
i__25827__auto___78558 = G__78559;
continue;
} else {
}
break;
}

var G__78552 = args78550.length;
switch (G__78552) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args78550.length)].join('')));

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

var seq__78553_78561 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__78554_78562 = null;
var count__78555_78563 = (0);
var i__78556_78564 = (0);
while(true){
if((i__78556_78564 < count__78555_78563)){
var msg_78565 = cljs.core._nth.call(null,chunk__78554_78562,i__78556_78564);
figwheel.client.socket.handle_incoming_message.call(null,msg_78565);

var G__78566 = seq__78553_78561;
var G__78567 = chunk__78554_78562;
var G__78568 = count__78555_78563;
var G__78569 = (i__78556_78564 + (1));
seq__78553_78561 = G__78566;
chunk__78554_78562 = G__78567;
count__78555_78563 = G__78568;
i__78556_78564 = G__78569;
continue;
} else {
var temp__4657__auto___78570 = cljs.core.seq.call(null,seq__78553_78561);
if(temp__4657__auto___78570){
var seq__78553_78571__$1 = temp__4657__auto___78570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__78553_78571__$1)){
var c__25562__auto___78572 = cljs.core.chunk_first.call(null,seq__78553_78571__$1);
var G__78573 = cljs.core.chunk_rest.call(null,seq__78553_78571__$1);
var G__78574 = c__25562__auto___78572;
var G__78575 = cljs.core.count.call(null,c__25562__auto___78572);
var G__78576 = (0);
seq__78553_78561 = G__78573;
chunk__78554_78562 = G__78574;
count__78555_78563 = G__78575;
i__78556_78564 = G__78576;
continue;
} else {
var msg_78577 = cljs.core.first.call(null,seq__78553_78571__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_78577);

var G__78578 = cljs.core.next.call(null,seq__78553_78571__$1);
var G__78579 = null;
var G__78580 = (0);
var G__78581 = (0);
seq__78553_78561 = G__78578;
chunk__78554_78562 = G__78579;
count__78555_78563 = G__78580;
i__78556_78564 = G__78581;
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
var len__25826__auto___78586 = arguments.length;
var i__25827__auto___78587 = (0);
while(true){
if((i__25827__auto___78587 < len__25826__auto___78586)){
args__25833__auto__.push((arguments[i__25827__auto___78587]));

var G__78588 = (i__25827__auto___78587 + (1));
i__25827__auto___78587 = G__78588;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__78583){
var map__78584 = p__78583;
var map__78584__$1 = ((((!((map__78584 == null)))?((((map__78584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78584):map__78584);
var opts = map__78584__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq78582){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78582));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e78590){if((e78590 instanceof Error)){
var e = e78590;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e78590;

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
return (function (p__78594){
var map__78595 = p__78594;
var map__78595__$1 = ((((!((map__78595 == null)))?((((map__78595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78595):map__78595);
var msg_name = cljs.core.get.call(null,map__78595__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1478402658781