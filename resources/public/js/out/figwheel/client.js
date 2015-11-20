// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40152__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__40152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40153__i = 0, G__40153__a = new Array(arguments.length -  0);
while (G__40153__i < G__40153__a.length) {G__40153__a[G__40153__i] = arguments[G__40153__i + 0]; ++G__40153__i;}
  args = new cljs.core.IndexedSeq(G__40153__a,0);
} 
return G__40152__delegate.call(this,args);};
G__40152.cljs$lang$maxFixedArity = 0;
G__40152.cljs$lang$applyTo = (function (arglist__40154){
var args = cljs.core.seq(arglist__40154);
return G__40152__delegate(args);
});
G__40152.cljs$core$IFn$_invoke$arity$variadic = G__40152__delegate;
return G__40152;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40155){
var map__40158 = p__40155;
var map__40158__$1 = ((((!((map__40158 == null)))?((((map__40158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40158):map__40158);
var message = cljs.core.get.call(null,map__40158__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40158__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19201__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19189__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19189__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19189__auto__;
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
var c__28184__auto___40288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___40288,ch){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___40288,ch){
return (function (state_40262){
var state_val_40263 = (state_40262[(1)]);
if((state_val_40263 === (7))){
var inst_40258 = (state_40262[(2)]);
var state_40262__$1 = state_40262;
var statearr_40264_40289 = state_40262__$1;
(statearr_40264_40289[(2)] = inst_40258);

(statearr_40264_40289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (1))){
var state_40262__$1 = state_40262;
var statearr_40265_40290 = state_40262__$1;
(statearr_40265_40290[(2)] = null);

(statearr_40265_40290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (4))){
var inst_40226 = (state_40262[(7)]);
var inst_40226__$1 = (state_40262[(2)]);
var state_40262__$1 = (function (){var statearr_40266 = state_40262;
(statearr_40266[(7)] = inst_40226__$1);

return statearr_40266;
})();
if(cljs.core.truth_(inst_40226__$1)){
var statearr_40267_40291 = state_40262__$1;
(statearr_40267_40291[(1)] = (5));

} else {
var statearr_40268_40292 = state_40262__$1;
(statearr_40268_40292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (13))){
var state_40262__$1 = state_40262;
var statearr_40269_40293 = state_40262__$1;
(statearr_40269_40293[(2)] = null);

(statearr_40269_40293[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (6))){
var state_40262__$1 = state_40262;
var statearr_40270_40294 = state_40262__$1;
(statearr_40270_40294[(2)] = null);

(statearr_40270_40294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (3))){
var inst_40260 = (state_40262[(2)]);
var state_40262__$1 = state_40262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40262__$1,inst_40260);
} else {
if((state_val_40263 === (12))){
var inst_40233 = (state_40262[(8)]);
var inst_40246 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40233);
var inst_40247 = cljs.core.first.call(null,inst_40246);
var inst_40248 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40247);
var inst_40249 = console.warn("Figwheel: Not loading code with warnings - ",inst_40248);
var state_40262__$1 = state_40262;
var statearr_40271_40295 = state_40262__$1;
(statearr_40271_40295[(2)] = inst_40249);

(statearr_40271_40295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (2))){
var state_40262__$1 = state_40262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40262__$1,(4),ch);
} else {
if((state_val_40263 === (11))){
var inst_40242 = (state_40262[(2)]);
var state_40262__$1 = state_40262;
var statearr_40272_40296 = state_40262__$1;
(statearr_40272_40296[(2)] = inst_40242);

(statearr_40272_40296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (9))){
var inst_40232 = (state_40262[(9)]);
var inst_40244 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40232,opts);
var state_40262__$1 = state_40262;
if(cljs.core.truth_(inst_40244)){
var statearr_40273_40297 = state_40262__$1;
(statearr_40273_40297[(1)] = (12));

} else {
var statearr_40274_40298 = state_40262__$1;
(statearr_40274_40298[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (5))){
var inst_40232 = (state_40262[(9)]);
var inst_40226 = (state_40262[(7)]);
var inst_40228 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40229 = (new cljs.core.PersistentArrayMap(null,2,inst_40228,null));
var inst_40230 = (new cljs.core.PersistentHashSet(null,inst_40229,null));
var inst_40231 = figwheel.client.focus_msgs.call(null,inst_40230,inst_40226);
var inst_40232__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40231);
var inst_40233 = cljs.core.first.call(null,inst_40231);
var inst_40234 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40232__$1,opts);
var state_40262__$1 = (function (){var statearr_40275 = state_40262;
(statearr_40275[(8)] = inst_40233);

(statearr_40275[(9)] = inst_40232__$1);

return statearr_40275;
})();
if(cljs.core.truth_(inst_40234)){
var statearr_40276_40299 = state_40262__$1;
(statearr_40276_40299[(1)] = (8));

} else {
var statearr_40277_40300 = state_40262__$1;
(statearr_40277_40300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (14))){
var inst_40252 = (state_40262[(2)]);
var state_40262__$1 = state_40262;
var statearr_40278_40301 = state_40262__$1;
(statearr_40278_40301[(2)] = inst_40252);

(statearr_40278_40301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (10))){
var inst_40254 = (state_40262[(2)]);
var state_40262__$1 = (function (){var statearr_40279 = state_40262;
(statearr_40279[(10)] = inst_40254);

return statearr_40279;
})();
var statearr_40280_40302 = state_40262__$1;
(statearr_40280_40302[(2)] = null);

(statearr_40280_40302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (8))){
var inst_40233 = (state_40262[(8)]);
var inst_40236 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40237 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40233);
var inst_40238 = cljs.core.async.timeout.call(null,(1000));
var inst_40239 = [inst_40237,inst_40238];
var inst_40240 = (new cljs.core.PersistentVector(null,2,(5),inst_40236,inst_40239,null));
var state_40262__$1 = state_40262;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40262__$1,(11),inst_40240);
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
});})(c__28184__auto___40288,ch))
;
return ((function (switch__28119__auto__,c__28184__auto___40288,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28120__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28120__auto____0 = (function (){
var statearr_40284 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40284[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28120__auto__);

(statearr_40284[(1)] = (1));

return statearr_40284;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28120__auto____1 = (function (state_40262){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_40262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e40285){if((e40285 instanceof Object)){
var ex__28123__auto__ = e40285;
var statearr_40286_40303 = state_40262;
(statearr_40286_40303[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40304 = state_40262;
state_40262 = G__40304;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28120__auto__ = function(state_40262){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28120__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28120__auto____1.call(this,state_40262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28120__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28120__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___40288,ch))
})();
var state__28186__auto__ = (function (){var statearr_40287 = f__28185__auto__.call(null);
(statearr_40287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___40288);

return statearr_40287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___40288,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40305_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40305_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_40314 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__40307_SHARP_,p2__40306_SHARP_){
return [cljs.core.str(p2__40306_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40314){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_40312 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_40313 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_40312,_STAR_print_newline_STAR_40313,base_path_40314){
return (function() { 
var G__40315__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__40315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40316__i = 0, G__40316__a = new Array(arguments.length -  0);
while (G__40316__i < G__40316__a.length) {G__40316__a[G__40316__i] = arguments[G__40316__i + 0]; ++G__40316__i;}
  args = new cljs.core.IndexedSeq(G__40316__a,0);
} 
return G__40315__delegate.call(this,args);};
G__40315.cljs$lang$maxFixedArity = 0;
G__40315.cljs$lang$applyTo = (function (arglist__40317){
var args = cljs.core.seq(arglist__40317);
return G__40315__delegate(args);
});
G__40315.cljs$core$IFn$_invoke$arity$variadic = G__40315__delegate;
return G__40315;
})()
;})(_STAR_print_fn_STAR_40312,_STAR_print_newline_STAR_40313,base_path_40314))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40313;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40312;
}}catch (e40311){if((e40311 instanceof Error)){
var e = e40311;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40314], null));
} else {
var e = e40311;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_40314))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40318){
var map__40325 = p__40318;
var map__40325__$1 = ((((!((map__40325 == null)))?((((map__40325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40325):map__40325);
var opts = map__40325__$1;
var build_id = cljs.core.get.call(null,map__40325__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40325,map__40325__$1,opts,build_id){
return (function (p__40327){
var vec__40328 = p__40327;
var map__40329 = cljs.core.nth.call(null,vec__40328,(0),null);
var map__40329__$1 = ((((!((map__40329 == null)))?((((map__40329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40329):map__40329);
var msg = map__40329__$1;
var msg_name = cljs.core.get.call(null,map__40329__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40328,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__40328,map__40329,map__40329__$1,msg,msg_name,_,map__40325,map__40325__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40328,map__40329,map__40329__$1,msg,msg_name,_,map__40325,map__40325__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40325,map__40325__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40335){
var vec__40336 = p__40335;
var map__40337 = cljs.core.nth.call(null,vec__40336,(0),null);
var map__40337__$1 = ((((!((map__40337 == null)))?((((map__40337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40337):map__40337);
var msg = map__40337__$1;
var msg_name = cljs.core.get.call(null,map__40337__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40336,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40339){
var map__40349 = p__40339;
var map__40349__$1 = ((((!((map__40349 == null)))?((((map__40349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40349):map__40349);
var on_compile_warning = cljs.core.get.call(null,map__40349__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40349__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40349,map__40349__$1,on_compile_warning,on_compile_fail){
return (function (p__40351){
var vec__40352 = p__40351;
var map__40353 = cljs.core.nth.call(null,vec__40352,(0),null);
var map__40353__$1 = ((((!((map__40353 == null)))?((((map__40353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40353):map__40353);
var msg = map__40353__$1;
var msg_name = cljs.core.get.call(null,map__40353__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40352,(1));
var pred__40355 = cljs.core._EQ_;
var expr__40356 = msg_name;
if(cljs.core.truth_(pred__40355.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40356))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40355.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40356))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40349,map__40349__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto__,msg_hist,msg_names,msg){
return (function (state_40553){
var state_val_40554 = (state_40553[(1)]);
if((state_val_40554 === (7))){
var inst_40489 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
var statearr_40555_40596 = state_40553__$1;
(statearr_40555_40596[(2)] = inst_40489);

(statearr_40555_40596[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (20))){
var inst_40515 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40553__$1 = state_40553;
if(cljs.core.truth_(inst_40515)){
var statearr_40556_40597 = state_40553__$1;
(statearr_40556_40597[(1)] = (22));

} else {
var statearr_40557_40598 = state_40553__$1;
(statearr_40557_40598[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (27))){
var inst_40527 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40528 = figwheel.client.heads_up.display_warning.call(null,inst_40527);
var state_40553__$1 = state_40553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40553__$1,(30),inst_40528);
} else {
if((state_val_40554 === (1))){
var inst_40477 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40553__$1 = state_40553;
if(cljs.core.truth_(inst_40477)){
var statearr_40558_40599 = state_40553__$1;
(statearr_40558_40599[(1)] = (2));

} else {
var statearr_40559_40600 = state_40553__$1;
(statearr_40559_40600[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (24))){
var inst_40543 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
var statearr_40560_40601 = state_40553__$1;
(statearr_40560_40601[(2)] = inst_40543);

(statearr_40560_40601[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (4))){
var inst_40551 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40553__$1,inst_40551);
} else {
if((state_val_40554 === (15))){
var inst_40504 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40505 = figwheel.client.format_messages.call(null,inst_40504);
var inst_40506 = figwheel.client.heads_up.display_error.call(null,inst_40505);
var state_40553__$1 = state_40553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40553__$1,(18),inst_40506);
} else {
if((state_val_40554 === (21))){
var inst_40545 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
var statearr_40561_40602 = state_40553__$1;
(statearr_40561_40602[(2)] = inst_40545);

(statearr_40561_40602[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (31))){
var inst_40534 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40553__$1 = state_40553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40553__$1,(34),inst_40534);
} else {
if((state_val_40554 === (32))){
var state_40553__$1 = state_40553;
var statearr_40562_40603 = state_40553__$1;
(statearr_40562_40603[(2)] = null);

(statearr_40562_40603[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (33))){
var inst_40539 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
var statearr_40563_40604 = state_40553__$1;
(statearr_40563_40604[(2)] = inst_40539);

(statearr_40563_40604[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (13))){
var inst_40495 = (state_40553[(2)]);
var inst_40496 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40497 = figwheel.client.format_messages.call(null,inst_40496);
var inst_40498 = figwheel.client.heads_up.display_error.call(null,inst_40497);
var state_40553__$1 = (function (){var statearr_40564 = state_40553;
(statearr_40564[(7)] = inst_40495);

return statearr_40564;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40553__$1,(14),inst_40498);
} else {
if((state_val_40554 === (22))){
var inst_40517 = figwheel.client.heads_up.clear.call(null);
var state_40553__$1 = state_40553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40553__$1,(25),inst_40517);
} else {
if((state_val_40554 === (29))){
var inst_40541 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
var statearr_40565_40605 = state_40553__$1;
(statearr_40565_40605[(2)] = inst_40541);

(statearr_40565_40605[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (6))){
var inst_40485 = figwheel.client.heads_up.clear.call(null);
var state_40553__$1 = state_40553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40553__$1,(9),inst_40485);
} else {
if((state_val_40554 === (28))){
var inst_40532 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40553__$1 = state_40553;
if(cljs.core.truth_(inst_40532)){
var statearr_40566_40606 = state_40553__$1;
(statearr_40566_40606[(1)] = (31));

} else {
var statearr_40567_40607 = state_40553__$1;
(statearr_40567_40607[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (25))){
var inst_40519 = (state_40553[(2)]);
var inst_40520 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40521 = figwheel.client.heads_up.display_warning.call(null,inst_40520);
var state_40553__$1 = (function (){var statearr_40568 = state_40553;
(statearr_40568[(8)] = inst_40519);

return statearr_40568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40553__$1,(26),inst_40521);
} else {
if((state_val_40554 === (34))){
var inst_40536 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
var statearr_40569_40608 = state_40553__$1;
(statearr_40569_40608[(2)] = inst_40536);

(statearr_40569_40608[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (17))){
var inst_40547 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
var statearr_40570_40609 = state_40553__$1;
(statearr_40570_40609[(2)] = inst_40547);

(statearr_40570_40609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (3))){
var inst_40491 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40553__$1 = state_40553;
if(cljs.core.truth_(inst_40491)){
var statearr_40571_40610 = state_40553__$1;
(statearr_40571_40610[(1)] = (10));

} else {
var statearr_40572_40611 = state_40553__$1;
(statearr_40572_40611[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (12))){
var inst_40549 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
var statearr_40573_40612 = state_40553__$1;
(statearr_40573_40612[(2)] = inst_40549);

(statearr_40573_40612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (2))){
var inst_40479 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40553__$1 = state_40553;
if(cljs.core.truth_(inst_40479)){
var statearr_40574_40613 = state_40553__$1;
(statearr_40574_40613[(1)] = (5));

} else {
var statearr_40575_40614 = state_40553__$1;
(statearr_40575_40614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (23))){
var inst_40525 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40553__$1 = state_40553;
if(cljs.core.truth_(inst_40525)){
var statearr_40576_40615 = state_40553__$1;
(statearr_40576_40615[(1)] = (27));

} else {
var statearr_40577_40616 = state_40553__$1;
(statearr_40577_40616[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (19))){
var inst_40512 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40513 = figwheel.client.heads_up.append_message.call(null,inst_40512);
var state_40553__$1 = state_40553;
var statearr_40578_40617 = state_40553__$1;
(statearr_40578_40617[(2)] = inst_40513);

(statearr_40578_40617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (11))){
var inst_40502 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40553__$1 = state_40553;
if(cljs.core.truth_(inst_40502)){
var statearr_40579_40618 = state_40553__$1;
(statearr_40579_40618[(1)] = (15));

} else {
var statearr_40580_40619 = state_40553__$1;
(statearr_40580_40619[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (9))){
var inst_40487 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
var statearr_40581_40620 = state_40553__$1;
(statearr_40581_40620[(2)] = inst_40487);

(statearr_40581_40620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (5))){
var inst_40481 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40553__$1 = state_40553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40553__$1,(8),inst_40481);
} else {
if((state_val_40554 === (14))){
var inst_40500 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
var statearr_40582_40621 = state_40553__$1;
(statearr_40582_40621[(2)] = inst_40500);

(statearr_40582_40621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (26))){
var inst_40523 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
var statearr_40583_40622 = state_40553__$1;
(statearr_40583_40622[(2)] = inst_40523);

(statearr_40583_40622[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (16))){
var inst_40510 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40553__$1 = state_40553;
if(cljs.core.truth_(inst_40510)){
var statearr_40584_40623 = state_40553__$1;
(statearr_40584_40623[(1)] = (19));

} else {
var statearr_40585_40624 = state_40553__$1;
(statearr_40585_40624[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (30))){
var inst_40530 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
var statearr_40586_40625 = state_40553__$1;
(statearr_40586_40625[(2)] = inst_40530);

(statearr_40586_40625[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (10))){
var inst_40493 = figwheel.client.heads_up.clear.call(null);
var state_40553__$1 = state_40553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40553__$1,(13),inst_40493);
} else {
if((state_val_40554 === (18))){
var inst_40508 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
var statearr_40587_40626 = state_40553__$1;
(statearr_40587_40626[(2)] = inst_40508);

(statearr_40587_40626[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (8))){
var inst_40483 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
var statearr_40588_40627 = state_40553__$1;
(statearr_40588_40627[(2)] = inst_40483);

(statearr_40588_40627[(1)] = (7));


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
});})(c__28184__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28119__auto__,c__28184__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28120__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28120__auto____0 = (function (){
var statearr_40592 = [null,null,null,null,null,null,null,null,null];
(statearr_40592[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28120__auto__);

(statearr_40592[(1)] = (1));

return statearr_40592;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28120__auto____1 = (function (state_40553){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_40553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e40593){if((e40593 instanceof Object)){
var ex__28123__auto__ = e40593;
var statearr_40594_40628 = state_40553;
(statearr_40594_40628[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40629 = state_40553;
state_40553 = G__40629;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28120__auto__ = function(state_40553){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28120__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28120__auto____1.call(this,state_40553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28120__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28120__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto__,msg_hist,msg_names,msg))
})();
var state__28186__auto__ = (function (){var statearr_40595 = f__28185__auto__.call(null);
(statearr_40595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto__);

return statearr_40595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto__,msg_hist,msg_names,msg))
);

return c__28184__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28184__auto___40692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto___40692,ch){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto___40692,ch){
return (function (state_40675){
var state_val_40676 = (state_40675[(1)]);
if((state_val_40676 === (1))){
var state_40675__$1 = state_40675;
var statearr_40677_40693 = state_40675__$1;
(statearr_40677_40693[(2)] = null);

(statearr_40677_40693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40676 === (2))){
var state_40675__$1 = state_40675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40675__$1,(4),ch);
} else {
if((state_val_40676 === (3))){
var inst_40673 = (state_40675[(2)]);
var state_40675__$1 = state_40675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40675__$1,inst_40673);
} else {
if((state_val_40676 === (4))){
var inst_40663 = (state_40675[(7)]);
var inst_40663__$1 = (state_40675[(2)]);
var state_40675__$1 = (function (){var statearr_40678 = state_40675;
(statearr_40678[(7)] = inst_40663__$1);

return statearr_40678;
})();
if(cljs.core.truth_(inst_40663__$1)){
var statearr_40679_40694 = state_40675__$1;
(statearr_40679_40694[(1)] = (5));

} else {
var statearr_40680_40695 = state_40675__$1;
(statearr_40680_40695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40676 === (5))){
var inst_40663 = (state_40675[(7)]);
var inst_40665 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40663);
var state_40675__$1 = state_40675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40675__$1,(8),inst_40665);
} else {
if((state_val_40676 === (6))){
var state_40675__$1 = state_40675;
var statearr_40681_40696 = state_40675__$1;
(statearr_40681_40696[(2)] = null);

(statearr_40681_40696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40676 === (7))){
var inst_40671 = (state_40675[(2)]);
var state_40675__$1 = state_40675;
var statearr_40682_40697 = state_40675__$1;
(statearr_40682_40697[(2)] = inst_40671);

(statearr_40682_40697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40676 === (8))){
var inst_40667 = (state_40675[(2)]);
var state_40675__$1 = (function (){var statearr_40683 = state_40675;
(statearr_40683[(8)] = inst_40667);

return statearr_40683;
})();
var statearr_40684_40698 = state_40675__$1;
(statearr_40684_40698[(2)] = null);

(statearr_40684_40698[(1)] = (2));


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
});})(c__28184__auto___40692,ch))
;
return ((function (switch__28119__auto__,c__28184__auto___40692,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28120__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28120__auto____0 = (function (){
var statearr_40688 = [null,null,null,null,null,null,null,null,null];
(statearr_40688[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28120__auto__);

(statearr_40688[(1)] = (1));

return statearr_40688;
});
var figwheel$client$heads_up_plugin_$_state_machine__28120__auto____1 = (function (state_40675){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_40675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e40689){if((e40689 instanceof Object)){
var ex__28123__auto__ = e40689;
var statearr_40690_40699 = state_40675;
(statearr_40690_40699[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40700 = state_40675;
state_40675 = G__40700;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28120__auto__ = function(state_40675){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28120__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28120__auto____1.call(this,state_40675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28120__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28120__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto___40692,ch))
})();
var state__28186__auto__ = (function (){var statearr_40691 = f__28185__auto__.call(null);
(statearr_40691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto___40692);

return statearr_40691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto___40692,ch))
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
var c__28184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto__){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto__){
return (function (state_40721){
var state_val_40722 = (state_40721[(1)]);
if((state_val_40722 === (1))){
var inst_40716 = cljs.core.async.timeout.call(null,(3000));
var state_40721__$1 = state_40721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40721__$1,(2),inst_40716);
} else {
if((state_val_40722 === (2))){
var inst_40718 = (state_40721[(2)]);
var inst_40719 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40721__$1 = (function (){var statearr_40723 = state_40721;
(statearr_40723[(7)] = inst_40718);

return statearr_40723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40721__$1,inst_40719);
} else {
return null;
}
}
});})(c__28184__auto__))
;
return ((function (switch__28119__auto__,c__28184__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28120__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28120__auto____0 = (function (){
var statearr_40727 = [null,null,null,null,null,null,null,null];
(statearr_40727[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28120__auto__);

(statearr_40727[(1)] = (1));

return statearr_40727;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28120__auto____1 = (function (state_40721){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_40721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e40728){if((e40728 instanceof Object)){
var ex__28123__auto__ = e40728;
var statearr_40729_40731 = state_40721;
(statearr_40729_40731[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40732 = state_40721;
state_40721 = G__40732;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28120__auto__ = function(state_40721){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28120__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28120__auto____1.call(this,state_40721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28120__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28120__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto__))
})();
var state__28186__auto__ = (function (){var statearr_40730 = f__28185__auto__.call(null);
(statearr_40730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto__);

return statearr_40730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto__))
);

return c__28184__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__19189__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__19189__auto__)){
return ("CustomEvent" in window);
} else {
return and__19189__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj40736 = {"detail":url};
return obj40736;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40737){
var map__40744 = p__40737;
var map__40744__$1 = ((((!((map__40744 == null)))?((((map__40744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40744):map__40744);
var ed = map__40744__$1;
var formatted_exception = cljs.core.get.call(null,map__40744__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40744__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40746_40750 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40747_40751 = null;
var count__40748_40752 = (0);
var i__40749_40753 = (0);
while(true){
if((i__40749_40753 < count__40748_40752)){
var msg_40754 = cljs.core._nth.call(null,chunk__40747_40751,i__40749_40753);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40754);

var G__40755 = seq__40746_40750;
var G__40756 = chunk__40747_40751;
var G__40757 = count__40748_40752;
var G__40758 = (i__40749_40753 + (1));
seq__40746_40750 = G__40755;
chunk__40747_40751 = G__40756;
count__40748_40752 = G__40757;
i__40749_40753 = G__40758;
continue;
} else {
var temp__4425__auto___40759 = cljs.core.seq.call(null,seq__40746_40750);
if(temp__4425__auto___40759){
var seq__40746_40760__$1 = temp__4425__auto___40759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40746_40760__$1)){
var c__20004__auto___40761 = cljs.core.chunk_first.call(null,seq__40746_40760__$1);
var G__40762 = cljs.core.chunk_rest.call(null,seq__40746_40760__$1);
var G__40763 = c__20004__auto___40761;
var G__40764 = cljs.core.count.call(null,c__20004__auto___40761);
var G__40765 = (0);
seq__40746_40750 = G__40762;
chunk__40747_40751 = G__40763;
count__40748_40752 = G__40764;
i__40749_40753 = G__40765;
continue;
} else {
var msg_40766 = cljs.core.first.call(null,seq__40746_40760__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40766);

var G__40767 = cljs.core.next.call(null,seq__40746_40760__$1);
var G__40768 = null;
var G__40769 = (0);
var G__40770 = (0);
seq__40746_40750 = G__40767;
chunk__40747_40751 = G__40768;
count__40748_40752 = G__40769;
i__40749_40753 = G__40770;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40771){
var map__40774 = p__40771;
var map__40774__$1 = ((((!((map__40774 == null)))?((((map__40774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40774):map__40774);
var w = map__40774__$1;
var message = cljs.core.get.call(null,map__40774__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__19189__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19189__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19189__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__40782 = cljs.core.seq.call(null,plugins);
var chunk__40783 = null;
var count__40784 = (0);
var i__40785 = (0);
while(true){
if((i__40785 < count__40784)){
var vec__40786 = cljs.core._nth.call(null,chunk__40783,i__40785);
var k = cljs.core.nth.call(null,vec__40786,(0),null);
var plugin = cljs.core.nth.call(null,vec__40786,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40788 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40782,chunk__40783,count__40784,i__40785,pl_40788,vec__40786,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40788.call(null,msg_hist);
});})(seq__40782,chunk__40783,count__40784,i__40785,pl_40788,vec__40786,k,plugin))
);
} else {
}

var G__40789 = seq__40782;
var G__40790 = chunk__40783;
var G__40791 = count__40784;
var G__40792 = (i__40785 + (1));
seq__40782 = G__40789;
chunk__40783 = G__40790;
count__40784 = G__40791;
i__40785 = G__40792;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__40782);
if(temp__4425__auto__){
var seq__40782__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40782__$1)){
var c__20004__auto__ = cljs.core.chunk_first.call(null,seq__40782__$1);
var G__40793 = cljs.core.chunk_rest.call(null,seq__40782__$1);
var G__40794 = c__20004__auto__;
var G__40795 = cljs.core.count.call(null,c__20004__auto__);
var G__40796 = (0);
seq__40782 = G__40793;
chunk__40783 = G__40794;
count__40784 = G__40795;
i__40785 = G__40796;
continue;
} else {
var vec__40787 = cljs.core.first.call(null,seq__40782__$1);
var k = cljs.core.nth.call(null,vec__40787,(0),null);
var plugin = cljs.core.nth.call(null,vec__40787,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40797 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40782,chunk__40783,count__40784,i__40785,pl_40797,vec__40787,k,plugin,seq__40782__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40797.call(null,msg_hist);
});})(seq__40782,chunk__40783,count__40784,i__40785,pl_40797,vec__40787,k,plugin,seq__40782__$1,temp__4425__auto__))
);
} else {
}

var G__40798 = cljs.core.next.call(null,seq__40782__$1);
var G__40799 = null;
var G__40800 = (0);
var G__40801 = (0);
seq__40782 = G__40798;
chunk__40783 = G__40799;
count__40784 = G__40800;
i__40785 = G__40801;
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
var args40802 = [];
var len__20259__auto___40805 = arguments.length;
var i__20260__auto___40806 = (0);
while(true){
if((i__20260__auto___40806 < len__20259__auto___40805)){
args40802.push((arguments[i__20260__auto___40806]));

var G__40807 = (i__20260__auto___40806 + (1));
i__20260__auto___40806 = G__40807;
continue;
} else {
}
break;
}

var G__40804 = args40802.length;
switch (G__40804) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40802.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__20266__auto__ = [];
var len__20259__auto___40813 = arguments.length;
var i__20260__auto___40814 = (0);
while(true){
if((i__20260__auto___40814 < len__20259__auto___40813)){
args__20266__auto__.push((arguments[i__20260__auto___40814]));

var G__40815 = (i__20260__auto___40814 + (1));
i__20260__auto___40814 = G__40815;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((0) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20267__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40810){
var map__40811 = p__40810;
var map__40811__$1 = ((((!((map__40811 == null)))?((((map__40811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40811):map__40811);
var opts = map__40811__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40809){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40809));
});

//# sourceMappingURL=client.js.map?rel=1444632663384