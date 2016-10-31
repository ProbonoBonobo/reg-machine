// Compiled by ClojureScript 1.9.227 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__6404__auto__ = (function (){var and__6392__auto__ = typeof Symbol !== 'undefined';
if(and__6392__auto__){
var and__6392__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__6392__auto____$1){
var and__6392__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__6392__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__6392__auto____$2;
}
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})();
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__29485_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__29485_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args29486 = [];
var len__7479__auto___29489 = arguments.length;
var i__7480__auto___29490 = (0);
while(true){
if((i__7480__auto___29490 < len__7479__auto___29489)){
args29486.push((arguments[i__7480__auto___29490]));

var G__29491 = (i__7480__auto___29490 + (1));
i__7480__auto___29490 = G__29491;
continue;
} else {
}
break;
}

var G__29488 = args29486.length;
switch (G__29488) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29486.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__6392__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__6392__auto__){
var map__29499 = c;
var map__29499__$1 = ((((!((map__29499 == null)))?((((map__29499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29499):map__29499);
var path = cljs.core.get.call(null,map__29499__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__29499__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__6392__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
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
var base__28636__auto___29505 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__6404__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__28636__auto___29505);
}

var seq__29501_29506 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__29502_29507 = null;
var count__29503_29508 = (0);
var i__29504_29509 = (0);
while(true){
if((i__29504_29509 < count__29503_29508)){
var property__28637__auto___29510 = cljs.core._nth.call(null,chunk__29502_29507,i__29504_29509);
if(cljs.core.truth_((base__28636__auto___29505[property__28637__auto___29510]))){
(devcards.core.CodeHighlight.prototype[property__28637__auto___29510] = (base__28636__auto___29505[property__28637__auto___29510]));
} else {
}

var G__29511 = seq__29501_29506;
var G__29512 = chunk__29502_29507;
var G__29513 = count__29503_29508;
var G__29514 = (i__29504_29509 + (1));
seq__29501_29506 = G__29511;
chunk__29502_29507 = G__29512;
count__29503_29508 = G__29513;
i__29504_29509 = G__29514;
continue;
} else {
var temp__4657__auto___29515 = cljs.core.seq.call(null,seq__29501_29506);
if(temp__4657__auto___29515){
var seq__29501_29516__$1 = temp__4657__auto___29515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29501_29516__$1)){
var c__7215__auto___29517 = cljs.core.chunk_first.call(null,seq__29501_29516__$1);
var G__29518 = cljs.core.chunk_rest.call(null,seq__29501_29516__$1);
var G__29519 = c__7215__auto___29517;
var G__29520 = cljs.core.count.call(null,c__7215__auto___29517);
var G__29521 = (0);
seq__29501_29506 = G__29518;
chunk__29502_29507 = G__29519;
count__29503_29508 = G__29520;
i__29504_29509 = G__29521;
continue;
} else {
var property__28637__auto___29522 = cljs.core.first.call(null,seq__29501_29516__$1);
if(cljs.core.truth_((base__28636__auto___29505[property__28637__auto___29522]))){
(devcards.core.CodeHighlight.prototype[property__28637__auto___29522] = (base__28636__auto___29505[property__28637__auto___29522]));
} else {
}

var G__29523 = cljs.core.next.call(null,seq__29501_29516__$1);
var G__29524 = null;
var G__29525 = (0);
var G__29526 = (0);
seq__29501_29506 = G__29523;
chunk__29502_29507 = G__29524;
count__29503_29508 = G__29525;
i__29504_29509 = G__29526;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__7329__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7330__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7331__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7332__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7333__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7333__auto__,method_table__7329__auto__,prefer_table__7330__auto__,method_cache__7331__auto__,cached_hierarchy__7332__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29527){
var map__29528 = p__29527;
var map__29528__$1 = ((((!((map__29528 == null)))?((((map__29528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29528):map__29528);
var content = cljs.core.get.call(null,map__29528__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__29530){
var map__29531 = p__29530;
var map__29531__$1 = ((((!((map__29531 == null)))?((((map__29531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29531):map__29531);
var block = map__29531__$1;
var content = cljs.core.get.call(null,map__29531__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__7486__auto__ = [];
var len__7479__auto___29534 = arguments.length;
var i__7480__auto___29535 = (0);
while(true){
if((i__7480__auto___29535 < len__7479__auto___29534)){
args__7486__auto__.push((arguments[i__7480__auto___29535]));

var G__29536 = (i__7480__auto___29535 + (1));
i__7480__auto___29535 = G__29536;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq29533){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29533));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__29538 = devcards.system.devcards_rendered_card_class;
var G__29538__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__29538),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__29538);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__29538__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__29538__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args29539 = [];
var len__7479__auto___29547 = arguments.length;
var i__7480__auto___29548 = (0);
while(true){
if((i__7480__auto___29548 < len__7479__auto___29547)){
args29539.push((arguments[i__7480__auto___29548]));

var G__29549 = (i__7480__auto___29548 + (1));
i__7480__auto___29548 = G__29549;
continue;
} else {
}
break;
}

var G__29541 = args29539.length;
switch (G__29541) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29539.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__29542 = card;
var map__29542__$1 = ((((!((map__29542 == null)))?((((map__29542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29542):map__29542);
var path = cljs.core.get.call(null,map__29542__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__29542__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": [cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__29542,map__29542__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__29542,map__29542__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs29544 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs29544))?sablono.interpreter.attributes.call(null,attrs29544):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29544))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29544)], null))));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (devcards.core._devcard_options[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,devcard_opts);
} else {
var m__7068__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (devcards.core._devcard[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,devcard_opts);
} else {
var m__7068__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__28636__auto___29556 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs29551 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29551))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs29551)):({"className": "com-rigsomelight-dont-update"})),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29551))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29551)], null))));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__28636__auto___29556);
}

var seq__29552_29557 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__29553_29558 = null;
var count__29554_29559 = (0);
var i__29555_29560 = (0);
while(true){
if((i__29555_29560 < count__29554_29559)){
var property__28637__auto___29561 = cljs.core._nth.call(null,chunk__29553_29558,i__29555_29560);
if(cljs.core.truth_((base__28636__auto___29556[property__28637__auto___29561]))){
(devcards.core.DontUpdate.prototype[property__28637__auto___29561] = (base__28636__auto___29556[property__28637__auto___29561]));
} else {
}

var G__29562 = seq__29552_29557;
var G__29563 = chunk__29553_29558;
var G__29564 = count__29554_29559;
var G__29565 = (i__29555_29560 + (1));
seq__29552_29557 = G__29562;
chunk__29553_29558 = G__29563;
count__29554_29559 = G__29564;
i__29555_29560 = G__29565;
continue;
} else {
var temp__4657__auto___29566 = cljs.core.seq.call(null,seq__29552_29557);
if(temp__4657__auto___29566){
var seq__29552_29567__$1 = temp__4657__auto___29566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29552_29567__$1)){
var c__7215__auto___29568 = cljs.core.chunk_first.call(null,seq__29552_29567__$1);
var G__29569 = cljs.core.chunk_rest.call(null,seq__29552_29567__$1);
var G__29570 = c__7215__auto___29568;
var G__29571 = cljs.core.count.call(null,c__7215__auto___29568);
var G__29572 = (0);
seq__29552_29557 = G__29569;
chunk__29553_29558 = G__29570;
count__29554_29559 = G__29571;
i__29555_29560 = G__29572;
continue;
} else {
var property__28637__auto___29573 = cljs.core.first.call(null,seq__29552_29567__$1);
if(cljs.core.truth_((base__28636__auto___29556[property__28637__auto___29573]))){
(devcards.core.DontUpdate.prototype[property__28637__auto___29573] = (base__28636__auto___29556[property__28637__auto___29573]));
} else {
}

var G__29574 = cljs.core.next.call(null,seq__29552_29567__$1);
var G__29575 = null;
var G__29576 = (0);
var G__29577 = (0);
seq__29552_29557 = G__29574;
chunk__29553_29558 = G__29575;
count__29554_29559 = G__29576;
i__29555_29560 = G__29577;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__6404__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__7238__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__7238__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__7238__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__7238__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto____$3);
})(),x__7238__auto____$2);
})(),x__7238__auto____$1);
})(),x__7238__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__28636__auto___29584 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__6404__auto__ = (function (){var and__6392__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__6392__auto__)){
return this$.state;
} else {
return and__6392__auto__;
}
})();
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__6392__auto__ = data_atom;
if(cljs.core.truth_(and__6392__auto__)){
return id;
} else {
return and__6392__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__28636__auto___29584);
}

var seq__29580_29585 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__29581_29586 = null;
var count__29582_29587 = (0);
var i__29583_29588 = (0);
while(true){
if((i__29583_29588 < count__29582_29587)){
var property__28637__auto___29589 = cljs.core._nth.call(null,chunk__29581_29586,i__29583_29588);
if(cljs.core.truth_((base__28636__auto___29584[property__28637__auto___29589]))){
(devcards.core.DevcardBase.prototype[property__28637__auto___29589] = (base__28636__auto___29584[property__28637__auto___29589]));
} else {
}

var G__29590 = seq__29580_29585;
var G__29591 = chunk__29581_29586;
var G__29592 = count__29582_29587;
var G__29593 = (i__29583_29588 + (1));
seq__29580_29585 = G__29590;
chunk__29581_29586 = G__29591;
count__29582_29587 = G__29592;
i__29583_29588 = G__29593;
continue;
} else {
var temp__4657__auto___29594 = cljs.core.seq.call(null,seq__29580_29585);
if(temp__4657__auto___29594){
var seq__29580_29595__$1 = temp__4657__auto___29594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29580_29595__$1)){
var c__7215__auto___29596 = cljs.core.chunk_first.call(null,seq__29580_29595__$1);
var G__29597 = cljs.core.chunk_rest.call(null,seq__29580_29595__$1);
var G__29598 = c__7215__auto___29596;
var G__29599 = cljs.core.count.call(null,c__7215__auto___29596);
var G__29600 = (0);
seq__29580_29585 = G__29597;
chunk__29581_29586 = G__29598;
count__29582_29587 = G__29599;
i__29583_29588 = G__29600;
continue;
} else {
var property__28637__auto___29601 = cljs.core.first.call(null,seq__29580_29595__$1);
if(cljs.core.truth_((base__28636__auto___29584[property__28637__auto___29601]))){
(devcards.core.DevcardBase.prototype[property__28637__auto___29601] = (base__28636__auto___29584[property__28637__auto___29601]));
} else {
}

var G__29602 = cljs.core.next.call(null,seq__29580_29595__$1);
var G__29603 = null;
var G__29604 = (0);
var G__29605 = (0);
seq__29580_29585 = G__29602;
chunk__29581_29586 = G__29603;
count__29582_29587 = G__29604;
i__29583_29588 = G__29605;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__28636__auto___29610 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__6392__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div(({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__28636__auto___29610);
}

var seq__29606_29611 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__29607_29612 = null;
var count__29608_29613 = (0);
var i__29609_29614 = (0);
while(true){
if((i__29609_29614 < count__29608_29613)){
var property__28637__auto___29615 = cljs.core._nth.call(null,chunk__29607_29612,i__29609_29614);
if(cljs.core.truth_((base__28636__auto___29610[property__28637__auto___29615]))){
(devcards.core.DomComponent.prototype[property__28637__auto___29615] = (base__28636__auto___29610[property__28637__auto___29615]));
} else {
}

var G__29616 = seq__29606_29611;
var G__29617 = chunk__29607_29612;
var G__29618 = count__29608_29613;
var G__29619 = (i__29609_29614 + (1));
seq__29606_29611 = G__29616;
chunk__29607_29612 = G__29617;
count__29608_29613 = G__29618;
i__29609_29614 = G__29619;
continue;
} else {
var temp__4657__auto___29620 = cljs.core.seq.call(null,seq__29606_29611);
if(temp__4657__auto___29620){
var seq__29606_29621__$1 = temp__4657__auto___29620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29606_29621__$1)){
var c__7215__auto___29622 = cljs.core.chunk_first.call(null,seq__29606_29621__$1);
var G__29623 = cljs.core.chunk_rest.call(null,seq__29606_29621__$1);
var G__29624 = c__7215__auto___29622;
var G__29625 = cljs.core.count.call(null,c__7215__auto___29622);
var G__29626 = (0);
seq__29606_29611 = G__29623;
chunk__29607_29612 = G__29624;
count__29608_29613 = G__29625;
i__29609_29614 = G__29626;
continue;
} else {
var property__28637__auto___29627 = cljs.core.first.call(null,seq__29606_29621__$1);
if(cljs.core.truth_((base__28636__auto___29610[property__28637__auto___29627]))){
(devcards.core.DomComponent.prototype[property__28637__auto___29627] = (base__28636__auto___29610[property__28637__auto___29627]));
} else {
}

var G__29628 = cljs.core.next.call(null,seq__29606_29621__$1);
var G__29629 = null;
var G__29630 = (0);
var G__29631 = (0);
seq__29606_29611 = G__29628;
chunk__29607_29612 = G__29629;
count__29608_29613 = G__29630;
i__29609_29614 = G__29631;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__6404__auto__ = x === true;
if(or__6404__auto__){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = x === false;
if(or__6404__auto____$1){
return or__6404__auto____$1;
} else {
var or__6404__auto____$2 = (x == null);
if(or__6404__auto____$2){
return or__6404__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__6404__auto__ = typeof x === 'string';
if(or__6404__auto__){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = (x == null);
if(or__6404__auto____$1){
return or__6404__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__6404__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__29632_SHARP_){
return !(p1__29632_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__29641 = opts;
var map__29641__$1 = ((((!((map__29641 == null)))?((((map__29641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29641):map__29641);
var name = cljs.core.get.call(null,map__29641__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__29641__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__29641__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__29641__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__6404__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__6404__auto__){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = (options == null);
if(or__6404__auto____$1){
return or__6404__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__6404__auto__ = (initial_data == null);
if(or__6404__auto__){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__6404__auto____$1){
return or__6404__auto____$1;
} else {
var or__6404__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__6404__auto____$2){
return or__6404__auto____$2;
} else {
var or__6404__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__6404__auto____$3){
return or__6404__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__29641,map__29641__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__29633_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__29633_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__29641,map__29641__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs29649 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs29649))?sablono.interpreter.attributes.call(null,attrs29649):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29649))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29649)], null))));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs29653 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29653))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs29653)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29653))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29653)], null))));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs29654 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29654))?sablono.interpreter.attributes.call(null,attrs29654):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29654))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29654)], null))));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs29655 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29655))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs29655)):({"className": "com-rigsomelight-devcards-padding-top-border"})),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29655))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29655)], null))));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__29656_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__29656_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.call(null,this__7026__auto____$1,k__7027__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k29658,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__29660 = (((k29658 instanceof cljs.core.Keyword))?k29658.fqn:null);
switch (G__29660) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29658,else__7029__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7041__auto__,pr_pair__7043__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__7042__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29657){
var self__ = this;
var G__29657__$1 = this;
return (new cljs.core.RecordIter((0),G__29657__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap.call(null,this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map.call(null,this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__7036__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7036__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__29657){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__29661 = cljs.core.keyword_identical_QMARK_;
var expr__29662 = k__7034__auto__;
if(cljs.core.truth_(pred__29661.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__29662))){
return (new devcards.core.IdentiyOptions(G__29657,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7034__auto__,G__29657),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__29657){
var self__ = this;
var this__7025__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__29657,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7032__auto__)){
return cljs.core._assoc.call(null,this__7031__auto____$1,cljs.core._nth.call(null,entry__7032__auto__,(0)),cljs.core._nth.call(null,entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write.call(null,writer__7061__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__29659){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__29659),null,cljs.core.dissoc.call(null,G__29659,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__29665){
var map__29668 = p__29665;
var map__29668__$1 = ((((!((map__29668 == null)))?((((map__29668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29668):map__29668);
var devcard_opts = map__29668__$1;
var options = cljs.core.get.call(null,map__29668__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__29668,map__29668__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__29668,map__29668__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.call(null,this__7026__auto____$1,k__7027__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k29671,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__29673 = (((k29671 instanceof cljs.core.Keyword))?k29671.fqn:null);
switch (G__29673) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29671,else__7029__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7041__auto__,pr_pair__7043__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__7042__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29670){
var self__ = this;
var G__29670__$1 = this;
return (new cljs.core.RecordIter((0),G__29670__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap.call(null,this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map.call(null,this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__7036__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7036__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__29670){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__29674 = cljs.core.keyword_identical_QMARK_;
var expr__29675 = k__7034__auto__;
if(cljs.core.truth_(pred__29674.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__29675))){
return (new devcards.core.AtomLikeOptions(G__29670,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7034__auto__,G__29670),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__29670){
var self__ = this;
var this__7025__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__29670,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7032__auto__)){
return cljs.core._assoc.call(null,this__7031__auto____$1,cljs.core._nth.call(null,entry__7032__auto__,(0)),cljs.core._nth.call(null,entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write.call(null,writer__7061__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__29672){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__29672),null,cljs.core.dissoc.call(null,G__29672,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7026__auto__,k__7027__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
return cljs.core._lookup.call(null,this__7026__auto____$1,k__7027__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7028__auto__,k29681,else__7029__auto__){
var self__ = this;
var this__7028__auto____$1 = this;
var G__29683 = (((k29681 instanceof cljs.core.Keyword))?k29681.fqn:null);
switch (G__29683) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29681,else__7029__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7040__auto__,writer__7041__auto__,opts__7042__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
var pr_pair__7043__auto__ = ((function (this__7040__auto____$1){
return (function (keyval__7044__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7041__auto__,cljs.core.pr_writer,""," ","",opts__7042__auto__,keyval__7044__auto__);
});})(this__7040__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7041__auto__,pr_pair__7043__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__7042__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29680){
var self__ = this;
var G__29680__$1 = this;
return (new cljs.core.RecordIter((0),G__29680__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7024__auto__){
var self__ = this;
var this__7024__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7020__auto__){
var self__ = this;
var this__7020__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7030__auto__){
var self__ = this;
var this__7030__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7021__auto__){
var self__ = this;
var this__7021__auto____$1 = this;
var h__6839__auto__ = self__.__hash;
if(!((h__6839__auto__ == null))){
return h__6839__auto__;
} else {
var h__6839__auto____$1 = cljs.core.hash_imap.call(null,this__7021__auto____$1);
self__.__hash = h__6839__auto____$1;

return h__6839__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7022__auto__,other__7023__auto__){
var self__ = this;
var this__7022__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6392__auto__ = other__7023__auto__;
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = (this__7022__auto____$1.constructor === other__7023__auto__.constructor);
if(and__6392__auto____$1){
return cljs.core.equiv_map.call(null,this__7022__auto____$1,other__7023__auto__);
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7035__auto__,k__7036__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__7036__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7035__auto____$1),self__.__meta),k__7036__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7036__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7033__auto__,k__7034__auto__,G__29680){
var self__ = this;
var this__7033__auto____$1 = this;
var pred__29684 = cljs.core.keyword_identical_QMARK_;
var expr__29685 = k__7034__auto__;
if(cljs.core.truth_(pred__29684.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__29685))){
return (new devcards.core.EdnLikeOptions(G__29680,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7034__auto__,G__29680),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7038__auto__){
var self__ = this;
var this__7038__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7025__auto__,G__29680){
var self__ = this;
var this__7025__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__29680,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7031__auto__,entry__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7032__auto__)){
return cljs.core._assoc.call(null,this__7031__auto____$1,cljs.core._nth.call(null,entry__7032__auto__,(0)),cljs.core._nth.call(null,entry__7032__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7031__auto____$1,entry__7032__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__7060__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__7060__auto__,writer__7061__auto__){
return cljs.core._write.call(null,writer__7061__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__29682){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__29682),null,cljs.core.dissoc.call(null,G__29682,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__6392__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__6392__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__6392__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__29699 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__29699 == null))){
if((false) || (G__29699.devcards$core$IDevcard$)){
return true;
} else {
if((!G__29699.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__29699);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__29699);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__29702 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__29702__$1 = ((((!((map__29702 == null)))?((((map__29702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29702):map__29702);
var history = cljs.core.get.call(null,map__29702__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__29702__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__29706 = cljs.core.deref.call(null,history_atom);
var map__29706__$1 = ((((!((map__29706 == null)))?((((map__29706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29706):map__29706);
var history = cljs.core.get.call(null,map__29706__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__29706__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__29710 = cljs.core.deref.call(null,history_atom);
var map__29710__$1 = ((((!((map__29710 == null)))?((((map__29710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29710):map__29710);
var history = cljs.core.get.call(null,map__29710__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__29710__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__29714 = cljs.core.deref.call(null,history_atom);
var map__29714__$1 = ((((!((map__29714 == null)))?((((map__29714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29714):map__29714);
var history = cljs.core.get.call(null,map__29714__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass(({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__7238__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__6392__auto__ = data_atom;
if(cljs.core.truth_(and__6392__auto__)){
return id;
} else {
return and__6392__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__29716){
var map__29717 = p__29716;
var map__29717__$1 = ((((!((map__29717 == null)))?((((map__29717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29717):map__29717);
var ha = map__29717__$1;
var pointer = cljs.core.get.call(null,map__29717__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__29717__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__29717__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__6404__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__6404__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),sablono.interpreter.interpret.call(null,(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),""));
})()),sablono.interpreter.interpret.call(null,(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),""));
})()),sablono.interpreter.interpret.call(null,(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),""));
})()),sablono.interpreter.interpret.call(null,(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"})));
})()));
} else {
return null;
}
})}));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_29732 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_29732;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__7329__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7330__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7331__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7332__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7333__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7333__auto__,method_table__7329__auto__,prefer_table__7330__auto__,method_cache__7331__auto__,cached_hierarchy__7332__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs29733 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29733))?sablono.interpreter.attributes.call(null,attrs29733):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29733))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29733)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__29734,body){
var map__29738 = p__29734;
var map__29738__$1 = ((((!((map__29738 == null)))?((((map__29738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29738):map__29738);
var message = cljs.core.get.call(null,map__29738__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs29740 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs29740))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs29740)):({"className": "com-rigsomelight-devcards-test-message"})),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29740))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29740)], null))));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__29741){
var map__29749 = p__29741;
var map__29749__$1 = ((((!((map__29749 == null)))?((((map__29749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29749):map__29749);
var m = map__29749__$1;
var expected = cljs.core.get.call(null,map__29749__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__29749__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__29749__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs29751 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29751))?sablono.interpreter.attributes.call(null,attrs29751):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29751))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29751),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null))));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs29758 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs29758))?sablono.interpreter.attributes.call(null,attrs29758):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29758))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29758)], null))));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs29759 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29759))?sablono.interpreter.attributes.call(null,attrs29759):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29759))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29759)], null))));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__29760){
var map__29761 = p__29760;
var map__29761__$1 = ((((!((map__29761 == null)))?((((map__29761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29761):map__29761);
var testing_contexts = cljs.core.get.call(null,map__29761__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs29763 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__29761,map__29761__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__29761,map__29761__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__7238__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29763))?sablono.interpreter.attributes.call(null,attrs29763):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29763))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29763)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs29772 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__29773,p__29774){
var map__29775 = p__29773;
var map__29775__$1 = ((((!((map__29775 == null)))?((((map__29775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29775):map__29775);
var last_context = cljs.core.get.call(null,map__29775__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__29775__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__29776 = p__29774;
var i = cljs.core.nth.call(null,vec__29776,(0),null);
var t = cljs.core.nth.call(null,vec__29776,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__7238__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7238__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29772))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs29772)):({"className": "com-rigsomelight-devcards-test-card"})),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29772))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29772)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__29792){
var map__29793 = p__29792;
var map__29793__$1 = ((((!((map__29793 == null)))?((((map__29793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29793):map__29793);
var type = cljs.core.get.call(null,map__29793__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__29791 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__29791__$1 = ((((!((map__29791 == null)))?((((map__29791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29791):map__29791);
var fail = cljs.core.get.call(null,map__29791__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__29791__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__29791__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__29791,map__29791__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__29791,map__29791__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__29791,map__29791__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__29791,map__29791__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__29791,map__29791__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__29791,map__29791__$1,fail,pass,error,error__$1){
return (function (p__29796){
var map__29797 = p__29796;
var map__29797__$1 = ((((!((map__29797 == null)))?((((map__29797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29797):map__29797);
var type = cljs.core.get.call(null,map__29797__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__29791,map__29791__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__29791,map__29791__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__29791,map__29791__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__29791,map__29791__$1,fail,pass,error,error__$1){
return (function (p__29799){
var map__29800 = p__29799;
var map__29800__$1 = ((((!((map__29800 == null)))?((((map__29800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29800):map__29800);
var type = cljs.core.get.call(null,map__29800__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__29791,map__29791__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__29791,map__29791__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__6404__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__18136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto__){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto__){
return (function (state_29890){
var state_val_29891 = (state_29890[(1)]);
if((state_val_29891 === (7))){
var state_29890__$1 = state_29890;
var statearr_29892_29941 = state_29890__$1;
(statearr_29892_29941[(2)] = false);

(statearr_29892_29941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (20))){
var inst_29829 = (state_29890[(7)]);
var inst_29848 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29829);
var state_29890__$1 = state_29890;
var statearr_29893_29942 = state_29890__$1;
(statearr_29893_29942[(2)] = inst_29848);

(statearr_29893_29942[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (27))){
var inst_29853 = (state_29890[(8)]);
var inst_29865 = (state_29890[(9)]);
var inst_29869 = inst_29853.call(null,inst_29865);
var state_29890__$1 = state_29890;
var statearr_29894_29943 = state_29890__$1;
(statearr_29894_29943[(2)] = inst_29869);

(statearr_29894_29943[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (1))){
var state_29890__$1 = state_29890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29890__$1,(2),devcards.core.test_channel);
} else {
if((state_val_29891 === (24))){
var state_29890__$1 = state_29890;
var statearr_29895_29944 = state_29890__$1;
(statearr_29895_29944[(2)] = null);

(statearr_29895_29944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (4))){
var state_29890__$1 = state_29890;
var statearr_29896_29945 = state_29890__$1;
(statearr_29896_29945[(2)] = false);

(statearr_29896_29945[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (15))){
var state_29890__$1 = state_29890;
var statearr_29897_29946 = state_29890__$1;
(statearr_29897_29946[(2)] = false);

(statearr_29897_29946[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (21))){
var inst_29829 = (state_29890[(7)]);
var state_29890__$1 = state_29890;
var statearr_29898_29947 = state_29890__$1;
(statearr_29898_29947[(2)] = inst_29829);

(statearr_29898_29947[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (13))){
var inst_29888 = (state_29890[(2)]);
var state_29890__$1 = state_29890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29890__$1,inst_29888);
} else {
if((state_val_29891 === (22))){
var inst_29852 = (state_29890[(10)]);
var inst_29851 = (state_29890[(2)]);
var inst_29852__$1 = cljs.core.get.call(null,inst_29851,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_29853 = cljs.core.get.call(null,inst_29851,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_29890__$1 = (function (){var statearr_29899 = state_29890;
(statearr_29899[(10)] = inst_29852__$1);

(statearr_29899[(8)] = inst_29853);

return statearr_29899;
})();
if(cljs.core.truth_(inst_29852__$1)){
var statearr_29900_29948 = state_29890__$1;
(statearr_29900_29948[(1)] = (23));

} else {
var statearr_29901_29949 = state_29890__$1;
(statearr_29901_29949[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (29))){
var inst_29879 = (state_29890[(2)]);
var inst_29880 = cljs.test.clear_env_BANG_.call(null);
var state_29890__$1 = (function (){var statearr_29902 = state_29890;
(statearr_29902[(11)] = inst_29880);

(statearr_29902[(12)] = inst_29879);

return statearr_29902;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29890__$1,(30),devcards.core.test_channel);
} else {
if((state_val_29891 === (6))){
var state_29890__$1 = state_29890;
var statearr_29903_29950 = state_29890__$1;
(statearr_29903_29950[(2)] = true);

(statearr_29903_29950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (28))){
var inst_29853 = (state_29890[(8)]);
var inst_29871 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_29872 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_29873 = cljs.core.PersistentHashMap.fromArrays(inst_29871,inst_29872);
var inst_29874 = devcards.core.collect_test.call(null,inst_29873);
var inst_29875 = cljs.test.get_current_env.call(null);
var inst_29876 = cljs.core.assoc.call(null,inst_29875,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_29877 = inst_29853.call(null,inst_29876);
var state_29890__$1 = (function (){var statearr_29904 = state_29890;
(statearr_29904[(13)] = inst_29874);

return statearr_29904;
})();
var statearr_29905_29951 = state_29890__$1;
(statearr_29905_29951[(2)] = inst_29877);

(statearr_29905_29951[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (25))){
var inst_29886 = (state_29890[(2)]);
var state_29890__$1 = state_29890;
var statearr_29906_29952 = state_29890__$1;
(statearr_29906_29952[(2)] = inst_29886);

(statearr_29906_29952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (17))){
var state_29890__$1 = state_29890;
var statearr_29907_29953 = state_29890__$1;
(statearr_29907_29953[(2)] = true);

(statearr_29907_29953[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (3))){
var inst_29806 = (state_29890[(14)]);
var inst_29811 = inst_29806.cljs$lang$protocol_mask$partition0$;
var inst_29812 = (inst_29811 & (64));
var inst_29813 = inst_29806.cljs$core$ISeq$;
var inst_29814 = (inst_29812) || (inst_29813);
var state_29890__$1 = state_29890;
if(cljs.core.truth_(inst_29814)){
var statearr_29908_29954 = state_29890__$1;
(statearr_29908_29954[(1)] = (6));

} else {
var statearr_29909_29955 = state_29890__$1;
(statearr_29909_29955[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (12))){
var inst_29829 = (state_29890[(7)]);
var inst_29833 = (inst_29829 == null);
var inst_29834 = cljs.core.not.call(null,inst_29833);
var state_29890__$1 = state_29890;
if(inst_29834){
var statearr_29910_29956 = state_29890__$1;
(statearr_29910_29956[(1)] = (14));

} else {
var statearr_29911_29957 = state_29890__$1;
(statearr_29911_29957[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (2))){
var inst_29806 = (state_29890[(14)]);
var inst_29806__$1 = (state_29890[(2)]);
var inst_29808 = (inst_29806__$1 == null);
var inst_29809 = cljs.core.not.call(null,inst_29808);
var state_29890__$1 = (function (){var statearr_29912 = state_29890;
(statearr_29912[(14)] = inst_29806__$1);

return statearr_29912;
})();
if(inst_29809){
var statearr_29913_29958 = state_29890__$1;
(statearr_29913_29958[(1)] = (3));

} else {
var statearr_29914_29959 = state_29890__$1;
(statearr_29914_29959[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (23))){
var inst_29858 = (state_29890[(15)]);
var inst_29852 = (state_29890[(10)]);
var inst_29858__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_29859 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29860 = devcards.core.run_card_tests.call(null,inst_29852);
var inst_29861 = [inst_29860,inst_29858__$1];
var inst_29862 = (new cljs.core.PersistentVector(null,2,(5),inst_29859,inst_29861,null));
var state_29890__$1 = (function (){var statearr_29915 = state_29890;
(statearr_29915[(15)] = inst_29858__$1);

return statearr_29915;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29890__$1,(26),inst_29862);
} else {
if((state_val_29891 === (19))){
var inst_29843 = (state_29890[(2)]);
var state_29890__$1 = state_29890;
var statearr_29916_29960 = state_29890__$1;
(statearr_29916_29960[(2)] = inst_29843);

(statearr_29916_29960[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (11))){
var inst_29806 = (state_29890[(14)]);
var inst_29826 = (state_29890[(2)]);
var inst_29827 = cljs.core.get.call(null,inst_29826,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_29828 = cljs.core.get.call(null,inst_29826,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_29829 = inst_29806;
var state_29890__$1 = (function (){var statearr_29917 = state_29890;
(statearr_29917[(16)] = inst_29827);

(statearr_29917[(7)] = inst_29829);

(statearr_29917[(17)] = inst_29828);

return statearr_29917;
})();
var statearr_29918_29961 = state_29890__$1;
(statearr_29918_29961[(2)] = null);

(statearr_29918_29961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (9))){
var inst_29806 = (state_29890[(14)]);
var inst_29823 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29806);
var state_29890__$1 = state_29890;
var statearr_29919_29962 = state_29890__$1;
(statearr_29919_29962[(2)] = inst_29823);

(statearr_29919_29962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (5))){
var inst_29821 = (state_29890[(2)]);
var state_29890__$1 = state_29890;
if(cljs.core.truth_(inst_29821)){
var statearr_29920_29963 = state_29890__$1;
(statearr_29920_29963[(1)] = (9));

} else {
var statearr_29921_29964 = state_29890__$1;
(statearr_29921_29964[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (14))){
var inst_29829 = (state_29890[(7)]);
var inst_29836 = inst_29829.cljs$lang$protocol_mask$partition0$;
var inst_29837 = (inst_29836 & (64));
var inst_29838 = inst_29829.cljs$core$ISeq$;
var inst_29839 = (inst_29837) || (inst_29838);
var state_29890__$1 = state_29890;
if(cljs.core.truth_(inst_29839)){
var statearr_29922_29965 = state_29890__$1;
(statearr_29922_29965[(1)] = (17));

} else {
var statearr_29923_29966 = state_29890__$1;
(statearr_29923_29966[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (26))){
var inst_29858 = (state_29890[(15)]);
var inst_29864 = (state_29890[(2)]);
var inst_29865 = cljs.core.nth.call(null,inst_29864,(0),null);
var inst_29866 = cljs.core.nth.call(null,inst_29864,(1),null);
var inst_29867 = cljs.core.not_EQ_.call(null,inst_29866,inst_29858);
var state_29890__$1 = (function (){var statearr_29924 = state_29890;
(statearr_29924[(9)] = inst_29865);

return statearr_29924;
})();
if(inst_29867){
var statearr_29925_29967 = state_29890__$1;
(statearr_29925_29967[(1)] = (27));

} else {
var statearr_29926_29968 = state_29890__$1;
(statearr_29926_29968[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (16))){
var inst_29846 = (state_29890[(2)]);
var state_29890__$1 = state_29890;
if(cljs.core.truth_(inst_29846)){
var statearr_29927_29969 = state_29890__$1;
(statearr_29927_29969[(1)] = (20));

} else {
var statearr_29928_29970 = state_29890__$1;
(statearr_29928_29970[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (30))){
var inst_29882 = (state_29890[(2)]);
var inst_29829 = inst_29882;
var state_29890__$1 = (function (){var statearr_29929 = state_29890;
(statearr_29929[(7)] = inst_29829);

return statearr_29929;
})();
var statearr_29930_29971 = state_29890__$1;
(statearr_29930_29971[(2)] = null);

(statearr_29930_29971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (10))){
var inst_29806 = (state_29890[(14)]);
var state_29890__$1 = state_29890;
var statearr_29931_29972 = state_29890__$1;
(statearr_29931_29972[(2)] = inst_29806);

(statearr_29931_29972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (18))){
var state_29890__$1 = state_29890;
var statearr_29932_29973 = state_29890__$1;
(statearr_29932_29973[(2)] = false);

(statearr_29932_29973[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29891 === (8))){
var inst_29818 = (state_29890[(2)]);
var state_29890__$1 = state_29890;
var statearr_29933_29974 = state_29890__$1;
(statearr_29933_29974[(2)] = inst_29818);

(statearr_29933_29974[(1)] = (5));


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
});})(c__18136__auto__))
;
return ((function (switch__18024__auto__,c__18136__auto__){
return (function() {
var devcards$core$state_machine__18025__auto__ = null;
var devcards$core$state_machine__18025__auto____0 = (function (){
var statearr_29937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29937[(0)] = devcards$core$state_machine__18025__auto__);

(statearr_29937[(1)] = (1));

return statearr_29937;
});
var devcards$core$state_machine__18025__auto____1 = (function (state_29890){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_29890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e29938){if((e29938 instanceof Object)){
var ex__18028__auto__ = e29938;
var statearr_29939_29975 = state_29890;
(statearr_29939_29975[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29976 = state_29890;
state_29890 = G__29976;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
devcards$core$state_machine__18025__auto__ = function(state_29890){
switch(arguments.length){
case 0:
return devcards$core$state_machine__18025__auto____0.call(this);
case 1:
return devcards$core$state_machine__18025__auto____1.call(this,state_29890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__18025__auto____0;
devcards$core$state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__18025__auto____1;
return devcards$core$state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto__))
})();
var state__18138__auto__ = (function (){var statearr_29940 = f__18137__auto__.call(null);
(statearr_29940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto__);

return statearr_29940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto__))
);

return c__18136__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__28636__auto___29981 = ({"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__28636__auto___29981);
}

var seq__29977_29982 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__29978_29983 = null;
var count__29979_29984 = (0);
var i__29980_29985 = (0);
while(true){
if((i__29980_29985 < count__29979_29984)){
var property__28637__auto___29986 = cljs.core._nth.call(null,chunk__29978_29983,i__29980_29985);
if(cljs.core.truth_((base__28636__auto___29981[property__28637__auto___29986]))){
(devcards.core.TestDevcard.prototype[property__28637__auto___29986] = (base__28636__auto___29981[property__28637__auto___29986]));
} else {
}

var G__29987 = seq__29977_29982;
var G__29988 = chunk__29978_29983;
var G__29989 = count__29979_29984;
var G__29990 = (i__29980_29985 + (1));
seq__29977_29982 = G__29987;
chunk__29978_29983 = G__29988;
count__29979_29984 = G__29989;
i__29980_29985 = G__29990;
continue;
} else {
var temp__4657__auto___29991 = cljs.core.seq.call(null,seq__29977_29982);
if(temp__4657__auto___29991){
var seq__29977_29992__$1 = temp__4657__auto___29991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29977_29992__$1)){
var c__7215__auto___29993 = cljs.core.chunk_first.call(null,seq__29977_29992__$1);
var G__29994 = cljs.core.chunk_rest.call(null,seq__29977_29992__$1);
var G__29995 = c__7215__auto___29993;
var G__29996 = cljs.core.count.call(null,c__7215__auto___29993);
var G__29997 = (0);
seq__29977_29982 = G__29994;
chunk__29978_29983 = G__29995;
count__29979_29984 = G__29996;
i__29980_29985 = G__29997;
continue;
} else {
var property__28637__auto___29998 = cljs.core.first.call(null,seq__29977_29992__$1);
if(cljs.core.truth_((base__28636__auto___29981[property__28637__auto___29998]))){
(devcards.core.TestDevcard.prototype[property__28637__auto___29998] = (base__28636__auto___29981[property__28637__auto___29998]));
} else {
}

var G__29999 = cljs.core.next.call(null,seq__29977_29992__$1);
var G__30000 = null;
var G__30001 = (0);
var G__30002 = (0);
seq__29977_29982 = G__29999;
chunk__29978_29983 = G__30000;
count__29979_29984 = G__30001;
i__29980_29985 = G__30002;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__7486__auto__ = [];
var len__7479__auto___30007 = arguments.length;
var i__7480__auto___30008 = (0);
while(true){
if((i__7480__auto___30008 < len__7479__auto___30007)){
args__7486__auto__.push((arguments[i__7480__auto___30008]));

var G__30009 = (i__7480__auto___30008 + (1));
i__7480__auto___30008 = G__30009;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core30004 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core30004 = (function (test_thunks,meta30005){
this.test_thunks = test_thunks;
this.meta30005 = meta30005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core30004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30006,meta30005__$1){
var self__ = this;
var _30006__$1 = this;
return (new devcards.core.t_devcards$core30004(self__.test_thunks,meta30005__$1));
});

devcards.core.t_devcards$core30004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30006){
var self__ = this;
var _30006__$1 = this;
return self__.meta30005;
});

devcards.core.t_devcards$core30004.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core30004.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core30004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta30005","meta30005",-958728132,null)], null);
});

devcards.core.t_devcards$core30004.cljs$lang$type = true;

devcards.core.t_devcards$core30004.cljs$lang$ctorStr = "devcards.core/t_devcards$core30004";

devcards.core.t_devcards$core30004.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"devcards.core/t_devcards$core30004");
});

devcards.core.__GT_t_devcards$core30004 = (function devcards$core$__GT_t_devcards$core30004(test_thunks__$1,meta30005){
return (new devcards.core.t_devcards$core30004(test_thunks__$1,meta30005));
});

}

return (new devcards.core.t_devcards$core30004(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq30003){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30003));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs30011 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30011))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs30011)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30011))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30011)], null))));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs30013 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30013))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs30013)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30013))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30013)], null))));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__18136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18136__auto__){
return (function (){
var f__18137__auto__ = (function (){var switch__18024__auto__ = ((function (c__18136__auto__){
return (function (state_30043){
var state_val_30044 = (state_30043[(1)]);
if((state_val_30044 === (1))){
var inst_30034 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_30043__$1 = state_30043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30043__$1,(2),inst_30034);
} else {
if((state_val_30044 === (2))){
var inst_30036 = (state_30043[(2)]);
var inst_30037 = cljs.core.async.timeout.call(null,(100));
var state_30043__$1 = (function (){var statearr_30045 = state_30043;
(statearr_30045[(7)] = inst_30036);

return statearr_30045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30043__$1,(3),inst_30037);
} else {
if((state_val_30044 === (3))){
var inst_30039 = (state_30043[(2)]);
var inst_30040 = (function (){return ((function (inst_30039,state_val_30044,c__18136__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_30039,state_val_30044,c__18136__auto__))
})();
var inst_30041 = setTimeout(inst_30040,(0));
var state_30043__$1 = (function (){var statearr_30046 = state_30043;
(statearr_30046[(8)] = inst_30039);

return statearr_30046;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30043__$1,inst_30041);
} else {
return null;
}
}
}
});})(c__18136__auto__))
;
return ((function (switch__18024__auto__,c__18136__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__18025__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__18025__auto____0 = (function (){
var statearr_30050 = [null,null,null,null,null,null,null,null,null];
(statearr_30050[(0)] = devcards$core$mount_namespace_$_state_machine__18025__auto__);

(statearr_30050[(1)] = (1));

return statearr_30050;
});
var devcards$core$mount_namespace_$_state_machine__18025__auto____1 = (function (state_30043){
while(true){
var ret_value__18026__auto__ = (function (){try{while(true){
var result__18027__auto__ = switch__18024__auto__.call(null,state_30043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18027__auto__;
}
break;
}
}catch (e30051){if((e30051 instanceof Object)){
var ex__18028__auto__ = e30051;
var statearr_30052_30054 = state_30043;
(statearr_30052_30054[(5)] = ex__18028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30055 = state_30043;
state_30043 = G__30055;
continue;
} else {
return ret_value__18026__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__18025__auto__ = function(state_30043){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__18025__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__18025__auto____1.call(this,state_30043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__18025__auto____0;
devcards$core$mount_namespace_$_state_machine__18025__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__18025__auto____1;
return devcards$core$mount_namespace_$_state_machine__18025__auto__;
})()
;})(switch__18024__auto__,c__18136__auto__))
})();
var state__18138__auto__ = (function (){var statearr_30053 = f__18137__auto__.call(null);
(statearr_30053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18136__auto__);

return statearr_30053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18138__auto__);
});})(c__18136__auto__))
);

return c__18136__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map