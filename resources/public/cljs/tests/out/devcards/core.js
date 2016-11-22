// Compiled by ClojureScript 1.9.293 {}
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
devcards.core.react_element_type_symbol = (function (){var or__6543__auto__ = (function (){var and__6531__auto__ = typeof Symbol !== 'undefined';
if(and__6531__auto__){
var and__6531__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__6531__auto____$1){
var and__6531__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__6531__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__6531__auto____$2;
}
} else {
return and__6531__auto____$1;
}
} else {
return and__6531__auto__;
}
})();
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
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
return (
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__65912_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__65912_SHARP_.detail], null));
}));

return true;
})()
)
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
var args65913 = [];
var len__7651__auto___65916 = arguments.length;
var i__7652__auto___65917 = (0);
while(true){
if((i__7652__auto___65917 < len__7651__auto___65916)){
args65913.push((arguments[i__7652__auto___65917]));

var G__65918 = (i__7652__auto___65917 + (1));
i__7652__auto___65917 = G__65918;
continue;
} else {
}
break;
}

var G__65915 = args65913.length;
switch (G__65915) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65913.length)].join('')));

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
var and__6531__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__6531__auto__){
var map__65926 = c;
var map__65926__$1 = ((((!((map__65926 == null)))?((((map__65926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65926):map__65926);
var path = cljs.core.get.call(null,map__65926__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__65926__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__6531__auto__;
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
var base__11027__auto___65932 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__6543__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__11027__auto___65932);
}

var seq__65928_65933 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__65929_65934 = null;
var count__65930_65935 = (0);
var i__65931_65936 = (0);
while(true){
if((i__65931_65936 < count__65930_65935)){
var property__11028__auto___65937 = cljs.core._nth.call(null,chunk__65929_65934,i__65931_65936);
if(cljs.core.truth_((base__11027__auto___65932[property__11028__auto___65937]))){
(devcards.core.CodeHighlight.prototype[property__11028__auto___65937] = (base__11027__auto___65932[property__11028__auto___65937]));
} else {
}

var G__65938 = seq__65928_65933;
var G__65939 = chunk__65929_65934;
var G__65940 = count__65930_65935;
var G__65941 = (i__65931_65936 + (1));
seq__65928_65933 = G__65938;
chunk__65929_65934 = G__65939;
count__65930_65935 = G__65940;
i__65931_65936 = G__65941;
continue;
} else {
var temp__4657__auto___65942 = cljs.core.seq.call(null,seq__65928_65933);
if(temp__4657__auto___65942){
var seq__65928_65943__$1 = temp__4657__auto___65942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65928_65943__$1)){
var c__7357__auto___65944 = cljs.core.chunk_first.call(null,seq__65928_65943__$1);
var G__65945 = cljs.core.chunk_rest.call(null,seq__65928_65943__$1);
var G__65946 = c__7357__auto___65944;
var G__65947 = cljs.core.count.call(null,c__7357__auto___65944);
var G__65948 = (0);
seq__65928_65933 = G__65945;
chunk__65929_65934 = G__65946;
count__65930_65935 = G__65947;
i__65931_65936 = G__65948;
continue;
} else {
var property__11028__auto___65949 = cljs.core.first.call(null,seq__65928_65943__$1);
if(cljs.core.truth_((base__11027__auto___65932[property__11028__auto___65949]))){
(devcards.core.CodeHighlight.prototype[property__11028__auto___65949] = (base__11027__auto___65932[property__11028__auto___65949]));
} else {
}

var G__65950 = cljs.core.next.call(null,seq__65928_65943__$1);
var G__65951 = null;
var G__65952 = (0);
var G__65953 = (0);
seq__65928_65933 = G__65950;
chunk__65929_65934 = G__65951;
count__65930_65935 = G__65952;
i__65931_65936 = G__65953;
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
devcards.core.markdown_block__GT_react = (function (){var method_table__7471__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7472__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7473__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7474__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7475__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7475__auto__,method_table__7471__auto__,prefer_table__7472__auto__,method_cache__7473__auto__,cached_hierarchy__7474__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__65954){
var map__65955 = p__65954;
var map__65955__$1 = ((((!((map__65955 == null)))?((((map__65955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65955):map__65955);
var content = cljs.core.get.call(null,map__65955__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__65957){
var map__65958 = p__65957;
var map__65958__$1 = ((((!((map__65958 == null)))?((((map__65958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65958):map__65958);
var block = map__65958__$1;
var content = cljs.core.get.call(null,map__65958__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__7658__auto__ = [];
var len__7651__auto___65961 = arguments.length;
var i__7652__auto___65962 = (0);
while(true){
if((i__7652__auto___65962 < len__7651__auto___65961)){
args__7658__auto__.push((arguments[i__7652__auto___65962]));

var G__65963 = (i__7652__auto___65962 + (1));
i__7652__auto___65962 = G__65963;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
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

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq65960){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65960));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__65965 = devcards.system.devcards_rendered_card_class;
var G__65965__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__65965),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__65965);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__65965__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__65965__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args65966 = [];
var len__7651__auto___65974 = arguments.length;
var i__7652__auto___65975 = (0);
while(true){
if((i__7652__auto___65975 < len__7651__auto___65974)){
args65966.push((arguments[i__7652__auto___65975]));

var G__65976 = (i__7652__auto___65975 + (1));
i__7652__auto___65975 = G__65976;
continue;
} else {
}
break;
}

var G__65968 = args65966.length;
switch (G__65968) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65966.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__65969 = card;
var map__65969__$1 = ((((!((map__65969 == null)))?((((map__65969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65969):map__65969);
var path = cljs.core.get.call(null,map__65969__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__65969__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], true))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__65969,map__65969__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__65969,map__65969__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs65971 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs65971))?sablono.interpreter.attributes.call(null,attrs65971):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs65971))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs65971)], null))));
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
var x__7206__auto__ = (((this$ == null))?null:this$);
var m__7207__auto__ = (devcards.core._devcard_options[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,this$,devcard_opts);
} else {
var m__7207__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,this$,devcard_opts);
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
var x__7206__auto__ = (((this$ == null))?null:this$);
var m__7207__auto__ = (devcards.core._devcard[goog.typeOf(x__7206__auto__)]);
if(!((m__7207__auto__ == null))){
return m__7207__auto__.call(null,this$,devcard_opts);
} else {
var m__7207__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__7207__auto____$1 == null))){
return m__7207__auto____$1.call(null,this$,devcard_opts);
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
var base__11027__auto___65983 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs65978 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs65978))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-dont-update",null], null), null)], null),attrs65978)):({"className": "com-rigsomelight-dont-update"})),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs65978))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs65978)], null))));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__11027__auto___65983);
}

var seq__65979_65984 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__65980_65985 = null;
var count__65981_65986 = (0);
var i__65982_65987 = (0);
while(true){
if((i__65982_65987 < count__65981_65986)){
var property__11028__auto___65988 = cljs.core._nth.call(null,chunk__65980_65985,i__65982_65987);
if(cljs.core.truth_((base__11027__auto___65983[property__11028__auto___65988]))){
(devcards.core.DontUpdate.prototype[property__11028__auto___65988] = (base__11027__auto___65983[property__11028__auto___65988]));
} else {
}

var G__65989 = seq__65979_65984;
var G__65990 = chunk__65980_65985;
var G__65991 = count__65981_65986;
var G__65992 = (i__65982_65987 + (1));
seq__65979_65984 = G__65989;
chunk__65980_65985 = G__65990;
count__65981_65986 = G__65991;
i__65982_65987 = G__65992;
continue;
} else {
var temp__4657__auto___65993 = cljs.core.seq.call(null,seq__65979_65984);
if(temp__4657__auto___65993){
var seq__65979_65994__$1 = temp__4657__auto___65993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65979_65994__$1)){
var c__7357__auto___65995 = cljs.core.chunk_first.call(null,seq__65979_65994__$1);
var G__65996 = cljs.core.chunk_rest.call(null,seq__65979_65994__$1);
var G__65997 = c__7357__auto___65995;
var G__65998 = cljs.core.count.call(null,c__7357__auto___65995);
var G__65999 = (0);
seq__65979_65984 = G__65996;
chunk__65980_65985 = G__65997;
count__65981_65986 = G__65998;
i__65982_65987 = G__65999;
continue;
} else {
var property__11028__auto___66000 = cljs.core.first.call(null,seq__65979_65994__$1);
if(cljs.core.truth_((base__11027__auto___65983[property__11028__auto___66000]))){
(devcards.core.DontUpdate.prototype[property__11028__auto___66000] = (base__11027__auto___65983[property__11028__auto___66000]));
} else {
}

var G__66001 = cljs.core.next.call(null,seq__65979_65994__$1);
var G__66002 = null;
var G__66003 = (0);
var G__66004 = (0);
seq__65979_65984 = G__66001;
chunk__65980_65985 = G__66002;
count__65981_65986 = G__66003;
i__65982_65987 = G__66004;
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
var data = (function (){var or__6543__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$)))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
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
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__7380__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__7380__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto____$3);
})(),x__7380__auto____$2);
})(),x__7380__auto____$1);
})(),x__7380__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__11027__auto___66011 = ({"getInitialState": (function (){
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
return this$.setState((function (){var or__6543__auto__ = (function (){var and__6531__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__6531__auto__)){
return this$.state;
} else {
return and__6531__auto__;
}
})();
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
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
if(cljs.core.truth_((function (){var and__6531__auto__ = data_atom;
if(cljs.core.truth_(and__6531__auto__)){
return id;
} else {
return and__6531__auto__;
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
devcards.core.DevcardBase = React.createClass(base__11027__auto___66011);
}

var seq__66007_66012 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__66008_66013 = null;
var count__66009_66014 = (0);
var i__66010_66015 = (0);
while(true){
if((i__66010_66015 < count__66009_66014)){
var property__11028__auto___66016 = cljs.core._nth.call(null,chunk__66008_66013,i__66010_66015);
if(cljs.core.truth_((base__11027__auto___66011[property__11028__auto___66016]))){
(devcards.core.DevcardBase.prototype[property__11028__auto___66016] = (base__11027__auto___66011[property__11028__auto___66016]));
} else {
}

var G__66017 = seq__66007_66012;
var G__66018 = chunk__66008_66013;
var G__66019 = count__66009_66014;
var G__66020 = (i__66010_66015 + (1));
seq__66007_66012 = G__66017;
chunk__66008_66013 = G__66018;
count__66009_66014 = G__66019;
i__66010_66015 = G__66020;
continue;
} else {
var temp__4657__auto___66021 = cljs.core.seq.call(null,seq__66007_66012);
if(temp__4657__auto___66021){
var seq__66007_66022__$1 = temp__4657__auto___66021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66007_66022__$1)){
var c__7357__auto___66023 = cljs.core.chunk_first.call(null,seq__66007_66022__$1);
var G__66024 = cljs.core.chunk_rest.call(null,seq__66007_66022__$1);
var G__66025 = c__7357__auto___66023;
var G__66026 = cljs.core.count.call(null,c__7357__auto___66023);
var G__66027 = (0);
seq__66007_66012 = G__66024;
chunk__66008_66013 = G__66025;
count__66009_66014 = G__66026;
i__66010_66015 = G__66027;
continue;
} else {
var property__11028__auto___66028 = cljs.core.first.call(null,seq__66007_66022__$1);
if(cljs.core.truth_((base__11027__auto___66011[property__11028__auto___66028]))){
(devcards.core.DevcardBase.prototype[property__11028__auto___66028] = (base__11027__auto___66011[property__11028__auto___66028]));
} else {
}

var G__66029 = cljs.core.next.call(null,seq__66007_66022__$1);
var G__66030 = null;
var G__66031 = (0);
var G__66032 = (0);
seq__66007_66012 = G__66029;
chunk__66008_66013 = G__66030;
count__66009_66014 = G__66031;
i__66010_66015 = G__66032;
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
var base__11027__auto___66037 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__6531__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__6531__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__6531__auto__;
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
devcards.core.DomComponent = React.createClass(base__11027__auto___66037);
}

var seq__66033_66038 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__66034_66039 = null;
var count__66035_66040 = (0);
var i__66036_66041 = (0);
while(true){
if((i__66036_66041 < count__66035_66040)){
var property__11028__auto___66042 = cljs.core._nth.call(null,chunk__66034_66039,i__66036_66041);
if(cljs.core.truth_((base__11027__auto___66037[property__11028__auto___66042]))){
(devcards.core.DomComponent.prototype[property__11028__auto___66042] = (base__11027__auto___66037[property__11028__auto___66042]));
} else {
}

var G__66043 = seq__66033_66038;
var G__66044 = chunk__66034_66039;
var G__66045 = count__66035_66040;
var G__66046 = (i__66036_66041 + (1));
seq__66033_66038 = G__66043;
chunk__66034_66039 = G__66044;
count__66035_66040 = G__66045;
i__66036_66041 = G__66046;
continue;
} else {
var temp__4657__auto___66047 = cljs.core.seq.call(null,seq__66033_66038);
if(temp__4657__auto___66047){
var seq__66033_66048__$1 = temp__4657__auto___66047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66033_66048__$1)){
var c__7357__auto___66049 = cljs.core.chunk_first.call(null,seq__66033_66048__$1);
var G__66050 = cljs.core.chunk_rest.call(null,seq__66033_66048__$1);
var G__66051 = c__7357__auto___66049;
var G__66052 = cljs.core.count.call(null,c__7357__auto___66049);
var G__66053 = (0);
seq__66033_66038 = G__66050;
chunk__66034_66039 = G__66051;
count__66035_66040 = G__66052;
i__66036_66041 = G__66053;
continue;
} else {
var property__11028__auto___66054 = cljs.core.first.call(null,seq__66033_66048__$1);
if(cljs.core.truth_((base__11027__auto___66037[property__11028__auto___66054]))){
(devcards.core.DomComponent.prototype[property__11028__auto___66054] = (base__11027__auto___66037[property__11028__auto___66054]));
} else {
}

var G__66055 = cljs.core.next.call(null,seq__66033_66048__$1);
var G__66056 = null;
var G__66057 = (0);
var G__66058 = (0);
seq__66033_66038 = G__66055;
chunk__66034_66039 = G__66056;
count__66035_66040 = G__66057;
i__66036_66041 = G__66058;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__6543__auto__ = x === true;
if(or__6543__auto__){
return or__6543__auto__;
} else {
var or__6543__auto____$1 = x === false;
if(or__6543__auto____$1){
return or__6543__auto____$1;
} else {
var or__6543__auto____$2 = (x == null);
if(or__6543__auto____$2){
return or__6543__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__6543__auto__ = typeof x === 'string';
if(or__6543__auto__){
return or__6543__auto__;
} else {
var or__6543__auto____$1 = (x == null);
if(or__6543__auto____$1){
return or__6543__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__6543__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__66059_SHARP_){
return !(p1__66059_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__66068 = opts;
var map__66068__$1 = ((((!((map__66068 == null)))?((((map__66068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66068):map__66068);
var name = cljs.core.get.call(null,map__66068__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__66068__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__66068__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__66068__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__6543__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__6543__auto__){
return or__6543__auto__;
} else {
var or__6543__auto____$1 = (options == null);
if(or__6543__auto____$1){
return or__6543__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__6543__auto__ = (initial_data == null);
if(or__6543__auto__){
return or__6543__auto__;
} else {
var or__6543__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__6543__auto____$1){
return or__6543__auto____$1;
} else {
var or__6543__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__6543__auto____$2){
return or__6543__auto____$2;
} else {
var or__6543__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === initial_data.cljs$core$IAtom$)))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__6543__auto____$3){
return or__6543__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__66068,map__66068__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__66060_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__66060_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__66068,map__66068__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs66076 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs66076))?sablono.interpreter.attributes.call(null,attrs66076):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs66076))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs66076)], null))));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs66080 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs66080))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-fail",null,"com-rigsomelight-devcards-panel-heading",null], null), null)], null),attrs66080)):({"className": "com-rigsomelight-devcards-fail com-rigsomelight-devcards-panel-heading"})),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs66080))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs66080)], null))));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs66081 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs66081))?sablono.interpreter.attributes.call(null,attrs66081):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs66081))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs66081)], null))));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs66082 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs66082))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-padding-top-border",null], null), null)], null),attrs66082)):({"className": "com-rigsomelight-devcards-padding-top-border"})),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs66082))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs66082)], null))));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__66083_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__66083_SHARP_);
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
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7165__auto__,k__7166__auto__){
var self__ = this;
var this__7165__auto____$1 = this;
return cljs.core._lookup.call(null,this__7165__auto____$1,k__7166__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7167__auto__,k66085,else__7168__auto__){
var self__ = this;
var this__7167__auto____$1 = this;
var G__66087 = (((k66085 instanceof cljs.core.Keyword))?k66085.fqn:null);
switch (G__66087) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k66085,else__7168__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7179__auto__,writer__7180__auto__,opts__7181__auto__){
var self__ = this;
var this__7179__auto____$1 = this;
var pr_pair__7182__auto__ = ((function (this__7179__auto____$1){
return (function (keyval__7183__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7180__auto__,cljs.core.pr_writer,""," ","",opts__7181__auto__,keyval__7183__auto__);
});})(this__7179__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7180__auto__,pr_pair__7182__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__7181__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66084){
var self__ = this;
var G__66084__$1 = this;
return (new cljs.core.RecordIter((0),G__66084__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7163__auto__){
var self__ = this;
var this__7163__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7169__auto__){
var self__ = this;
var this__7169__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7160__auto__){
var self__ = this;
var this__7160__auto____$1 = this;
var h__6978__auto__ = self__.__hash;
if(!((h__6978__auto__ == null))){
return h__6978__auto__;
} else {
var h__6978__auto____$1 = cljs.core.hash_imap.call(null,this__7160__auto____$1);
self__.__hash = h__6978__auto____$1;

return h__6978__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7161__auto__,other__7162__auto__){
var self__ = this;
var this__7161__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6531__auto__ = other__7162__auto__;
if(cljs.core.truth_(and__6531__auto__)){
var and__6531__auto____$1 = (this__7161__auto____$1.constructor === other__7162__auto__.constructor);
if(and__6531__auto____$1){
return cljs.core.equiv_map.call(null,this__7161__auto____$1,other__7162__auto__);
} else {
return and__6531__auto____$1;
}
} else {
return and__6531__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7174__auto__,k__7175__auto__){
var self__ = this;
var this__7174__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__7175__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7174__auto____$1),self__.__meta),k__7175__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7175__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7172__auto__,k__7173__auto__,G__66084){
var self__ = this;
var this__7172__auto____$1 = this;
var pred__66088 = cljs.core.keyword_identical_QMARK_;
var expr__66089 = k__7173__auto__;
if(cljs.core.truth_(pred__66088.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__66089))){
return (new devcards.core.IdentiyOptions(G__66084,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7173__auto__,G__66084),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7177__auto__){
var self__ = this;
var this__7177__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7164__auto__,G__66084){
var self__ = this;
var this__7164__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__66084,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7170__auto__,entry__7171__auto__){
var self__ = this;
var this__7170__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7171__auto__)){
return cljs.core._assoc.call(null,this__7170__auto____$1,cljs.core._nth.call(null,entry__7171__auto__,(0)),cljs.core._nth.call(null,entry__7171__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7170__auto____$1,entry__7171__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__7199__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__7199__auto__,writer__7200__auto__){
return cljs.core._write.call(null,writer__7200__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__66086){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__66086),null,cljs.core.dissoc.call(null,G__66086,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__66092){
var map__66095 = p__66092;
var map__66095__$1 = ((((!((map__66095 == null)))?((((map__66095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66095):map__66095);
var devcard_opts = map__66095__$1;
var options = cljs.core.get.call(null,map__66095__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__66095,map__66095__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__66095,map__66095__$1,devcard_opts,options))
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
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7165__auto__,k__7166__auto__){
var self__ = this;
var this__7165__auto____$1 = this;
return cljs.core._lookup.call(null,this__7165__auto____$1,k__7166__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7167__auto__,k66098,else__7168__auto__){
var self__ = this;
var this__7167__auto____$1 = this;
var G__66100 = (((k66098 instanceof cljs.core.Keyword))?k66098.fqn:null);
switch (G__66100) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k66098,else__7168__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7179__auto__,writer__7180__auto__,opts__7181__auto__){
var self__ = this;
var this__7179__auto____$1 = this;
var pr_pair__7182__auto__ = ((function (this__7179__auto____$1){
return (function (keyval__7183__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7180__auto__,cljs.core.pr_writer,""," ","",opts__7181__auto__,keyval__7183__auto__);
});})(this__7179__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7180__auto__,pr_pair__7182__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__7181__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66097){
var self__ = this;
var G__66097__$1 = this;
return (new cljs.core.RecordIter((0),G__66097__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7163__auto__){
var self__ = this;
var this__7163__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7169__auto__){
var self__ = this;
var this__7169__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7160__auto__){
var self__ = this;
var this__7160__auto____$1 = this;
var h__6978__auto__ = self__.__hash;
if(!((h__6978__auto__ == null))){
return h__6978__auto__;
} else {
var h__6978__auto____$1 = cljs.core.hash_imap.call(null,this__7160__auto____$1);
self__.__hash = h__6978__auto____$1;

return h__6978__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7161__auto__,other__7162__auto__){
var self__ = this;
var this__7161__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6531__auto__ = other__7162__auto__;
if(cljs.core.truth_(and__6531__auto__)){
var and__6531__auto____$1 = (this__7161__auto____$1.constructor === other__7162__auto__.constructor);
if(and__6531__auto____$1){
return cljs.core.equiv_map.call(null,this__7161__auto____$1,other__7162__auto__);
} else {
return and__6531__auto____$1;
}
} else {
return and__6531__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7174__auto__,k__7175__auto__){
var self__ = this;
var this__7174__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__7175__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7174__auto____$1),self__.__meta),k__7175__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7175__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7172__auto__,k__7173__auto__,G__66097){
var self__ = this;
var this__7172__auto____$1 = this;
var pred__66101 = cljs.core.keyword_identical_QMARK_;
var expr__66102 = k__7173__auto__;
if(cljs.core.truth_(pred__66101.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__66102))){
return (new devcards.core.AtomLikeOptions(G__66097,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7173__auto__,G__66097),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7177__auto__){
var self__ = this;
var this__7177__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7164__auto__,G__66097){
var self__ = this;
var this__7164__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__66097,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7170__auto__,entry__7171__auto__){
var self__ = this;
var this__7170__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7171__auto__)){
return cljs.core._assoc.call(null,this__7170__auto____$1,cljs.core._nth.call(null,entry__7171__auto__,(0)),cljs.core._nth.call(null,entry__7171__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7170__auto____$1,entry__7171__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__7199__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__7199__auto__,writer__7200__auto__){
return cljs.core._write.call(null,writer__7200__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__66099){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__66099),null,cljs.core.dissoc.call(null,G__66099,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.cljs$core$IDeref$)))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
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
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7165__auto__,k__7166__auto__){
var self__ = this;
var this__7165__auto____$1 = this;
return cljs.core._lookup.call(null,this__7165__auto____$1,k__7166__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7167__auto__,k66108,else__7168__auto__){
var self__ = this;
var this__7167__auto____$1 = this;
var G__66110 = (((k66108 instanceof cljs.core.Keyword))?k66108.fqn:null);
switch (G__66110) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k66108,else__7168__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7179__auto__,writer__7180__auto__,opts__7181__auto__){
var self__ = this;
var this__7179__auto____$1 = this;
var pr_pair__7182__auto__ = ((function (this__7179__auto____$1){
return (function (keyval__7183__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7180__auto__,cljs.core.pr_writer,""," ","",opts__7181__auto__,keyval__7183__auto__);
});})(this__7179__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7180__auto__,pr_pair__7182__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__7181__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66107){
var self__ = this;
var G__66107__$1 = this;
return (new cljs.core.RecordIter((0),G__66107__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7163__auto__){
var self__ = this;
var this__7163__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7169__auto__){
var self__ = this;
var this__7169__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7160__auto__){
var self__ = this;
var this__7160__auto____$1 = this;
var h__6978__auto__ = self__.__hash;
if(!((h__6978__auto__ == null))){
return h__6978__auto__;
} else {
var h__6978__auto____$1 = cljs.core.hash_imap.call(null,this__7160__auto____$1);
self__.__hash = h__6978__auto____$1;

return h__6978__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7161__auto__,other__7162__auto__){
var self__ = this;
var this__7161__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6531__auto__ = other__7162__auto__;
if(cljs.core.truth_(and__6531__auto__)){
var and__6531__auto____$1 = (this__7161__auto____$1.constructor === other__7162__auto__.constructor);
if(and__6531__auto____$1){
return cljs.core.equiv_map.call(null,this__7161__auto____$1,other__7162__auto__);
} else {
return and__6531__auto____$1;
}
} else {
return and__6531__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7174__auto__,k__7175__auto__){
var self__ = this;
var this__7174__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__7175__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7174__auto____$1),self__.__meta),k__7175__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7175__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7172__auto__,k__7173__auto__,G__66107){
var self__ = this;
var this__7172__auto____$1 = this;
var pred__66111 = cljs.core.keyword_identical_QMARK_;
var expr__66112 = k__7173__auto__;
if(cljs.core.truth_(pred__66111.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__66112))){
return (new devcards.core.EdnLikeOptions(G__66107,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7173__auto__,G__66107),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7177__auto__){
var self__ = this;
var this__7177__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7164__auto__,G__66107){
var self__ = this;
var this__7164__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__66107,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7170__auto__,entry__7171__auto__){
var self__ = this;
var this__7170__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7171__auto__)){
return cljs.core._assoc.call(null,this__7170__auto____$1,cljs.core._nth.call(null,entry__7171__auto__,(0)),cljs.core._nth.call(null,entry__7171__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7170__auto____$1,entry__7171__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__7199__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__7199__auto__,writer__7200__auto__){
return cljs.core._write.call(null,writer__7200__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__66109){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__66109),null,cljs.core.dissoc.call(null,G__66109,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__6531__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__6531__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
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
return and__6531__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
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
if(((!((main_obj == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.devcards$core$IDevcardOptions$)))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
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
if((function (){var G__66126 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__66126 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__66126.devcards$core$IDevcard$))){
return true;
} else {
if((!G__66126.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__66126);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__66126);
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
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__66129 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__66129__$1 = ((((!((map__66129 == null)))?((((map__66129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66129):map__66129);
var history = cljs.core.get.call(null,map__66129__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__66129__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__66133 = cljs.core.deref.call(null,history_atom);
var map__66133__$1 = ((((!((map__66133 == null)))?((((map__66133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66133):map__66133);
var history = cljs.core.get.call(null,map__66133__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__66133__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__66137 = cljs.core.deref.call(null,history_atom);
var map__66137__$1 = ((((!((map__66137 == null)))?((((map__66137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66137):map__66137);
var history = cljs.core.get.call(null,map__66137__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__66137__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__66141 = cljs.core.deref.call(null,history_atom);
var map__66141__$1 = ((((!((map__66141 == null)))?((((map__66141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66141):map__66141);
var history = cljs.core.get.call(null,map__66141__$1,new cljs.core.Keyword(null,"history","history",-247395220));
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
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__7380__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__6531__auto__ = data_atom;
if(cljs.core.truth_(and__6531__auto__)){
return id;
} else {
return and__6531__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__66143){
var map__66144 = p__66143;
var map__66144__$1 = ((((!((map__66144 == null)))?((((map__66144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66144):map__66144);
var ha = map__66144__$1;
var pointer = cljs.core.get.call(null,map__66144__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__66144__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__66144__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
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
if(cljs.core.truth_((function (){var or__6543__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__6543__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
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
var _STAR_current_env_STAR_66159 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_66159;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__7471__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7472__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7473__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7474__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7475__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7475__auto__,method_table__7471__auto__,prefer_table__7472__auto__,method_cache__7473__auto__,cached_hierarchy__7474__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs66160 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs66160))?sablono.interpreter.attributes.call(null,attrs66160):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs66160))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs66160)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__66161,body){
var map__66165 = p__66161;
var map__66165__$1 = ((((!((map__66165 == null)))?((((map__66165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66165):map__66165);
var message = cljs.core.get.call(null,map__66165__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs66167 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs66167))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-test-message",null], null), null)], null),attrs66167)):({"className": "com-rigsomelight-devcards-test-message"})),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs66167))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs66167)], null))));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__66168){
var map__66176 = p__66168;
var map__66176__$1 = ((((!((map__66176 == null)))?((((map__66176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66176):map__66176);
var m = map__66176__$1;
var expected = cljs.core.get.call(null,map__66176__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__66176__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__66176__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs66178 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs66178))?sablono.interpreter.attributes.call(null,attrs66178):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs66178))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs66178),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null))));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs66185 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs66185))?sablono.interpreter.attributes.call(null,attrs66185):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs66185))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs66185)], null))));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs66186 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs66186))?sablono.interpreter.attributes.call(null,attrs66186):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs66186))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs66186)], null))));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__66187){
var map__66188 = p__66187;
var map__66188__$1 = ((((!((map__66188 == null)))?((((map__66188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66188):map__66188);
var testing_contexts = cljs.core.get.call(null,map__66188__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs66190 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__66188,map__66188__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__66188,map__66188__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__7380__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs66190))?sablono.interpreter.attributes.call(null,attrs66190):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs66190))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs66190)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs66199 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__66200,p__66201){
var map__66202 = p__66200;
var map__66202__$1 = ((((!((map__66202 == null)))?((((map__66202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66202):map__66202);
var last_context = cljs.core.get.call(null,map__66202__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__66202__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__66203 = p__66201;
var i = cljs.core.nth.call(null,vec__66203,(0),null);
var t = cljs.core.nth.call(null,vec__66203,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__7380__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs66199))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-test-card",null], null), null)], null),attrs66199)):({"className": "com-rigsomelight-devcards-test-card"})),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs66199))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs66199)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__66219){
var map__66220 = p__66219;
var map__66220__$1 = ((((!((map__66220 == null)))?((((map__66220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66220):map__66220);
var type = cljs.core.get.call(null,map__66220__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__66218 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__66218__$1 = ((((!((map__66218 == null)))?((((map__66218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66218):map__66218);
var fail = cljs.core.get.call(null,map__66218__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__66218__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__66218__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__66218,map__66218__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__66218,map__66218__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__66218,map__66218__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__66218,map__66218__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__66218,map__66218__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__66218,map__66218__$1,fail,pass,error,error__$1){
return (function (p__66223){
var map__66224 = p__66223;
var map__66224__$1 = ((((!((map__66224 == null)))?((((map__66224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66224):map__66224);
var type = cljs.core.get.call(null,map__66224__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__66218,map__66218__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__66218,map__66218__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__66218,map__66218__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__66218,map__66218__$1,fail,pass,error,error__$1){
return (function (p__66226){
var map__66227 = p__66226;
var map__66227__$1 = ((((!((map__66227 == null)))?((((map__66227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66227):map__66227);
var type = cljs.core.get.call(null,map__66227__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__66218,map__66218__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__66218,map__66218__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__6543__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
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
devcards.core.test_loop = (function (){var c__10513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto__){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto__){
return (function (state_66319){
var state_val_66320 = (state_66319[(1)]);
if((state_val_66320 === (7))){
var state_66319__$1 = state_66319;
var statearr_66321_66370 = state_66319__$1;
(statearr_66321_66370[(2)] = false);

(statearr_66321_66370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (20))){
var inst_66257 = (state_66319[(7)]);
var inst_66277 = cljs.core.apply.call(null,cljs.core.hash_map,inst_66257);
var state_66319__$1 = state_66319;
var statearr_66322_66371 = state_66319__$1;
(statearr_66322_66371[(2)] = inst_66277);

(statearr_66322_66371[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (27))){
var inst_66282 = (state_66319[(8)]);
var inst_66294 = (state_66319[(9)]);
var inst_66298 = inst_66282.call(null,inst_66294);
var state_66319__$1 = state_66319;
var statearr_66323_66372 = state_66319__$1;
(statearr_66323_66372[(2)] = inst_66298);

(statearr_66323_66372[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (1))){
var state_66319__$1 = state_66319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66319__$1,(2),devcards.core.test_channel);
} else {
if((state_val_66320 === (24))){
var state_66319__$1 = state_66319;
var statearr_66324_66373 = state_66319__$1;
(statearr_66324_66373[(2)] = null);

(statearr_66324_66373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (4))){
var state_66319__$1 = state_66319;
var statearr_66325_66374 = state_66319__$1;
(statearr_66325_66374[(2)] = false);

(statearr_66325_66374[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (15))){
var state_66319__$1 = state_66319;
var statearr_66326_66375 = state_66319__$1;
(statearr_66326_66375[(2)] = false);

(statearr_66326_66375[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (21))){
var inst_66257 = (state_66319[(7)]);
var state_66319__$1 = state_66319;
var statearr_66327_66376 = state_66319__$1;
(statearr_66327_66376[(2)] = inst_66257);

(statearr_66327_66376[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (13))){
var inst_66317 = (state_66319[(2)]);
var state_66319__$1 = state_66319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66319__$1,inst_66317);
} else {
if((state_val_66320 === (22))){
var inst_66281 = (state_66319[(10)]);
var inst_66280 = (state_66319[(2)]);
var inst_66281__$1 = cljs.core.get.call(null,inst_66280,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_66282 = cljs.core.get.call(null,inst_66280,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_66319__$1 = (function (){var statearr_66328 = state_66319;
(statearr_66328[(10)] = inst_66281__$1);

(statearr_66328[(8)] = inst_66282);

return statearr_66328;
})();
if(cljs.core.truth_(inst_66281__$1)){
var statearr_66329_66377 = state_66319__$1;
(statearr_66329_66377[(1)] = (23));

} else {
var statearr_66330_66378 = state_66319__$1;
(statearr_66330_66378[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (29))){
var inst_66308 = (state_66319[(2)]);
var inst_66309 = cljs.test.clear_env_BANG_.call(null);
var state_66319__$1 = (function (){var statearr_66331 = state_66319;
(statearr_66331[(11)] = inst_66308);

(statearr_66331[(12)] = inst_66309);

return statearr_66331;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66319__$1,(30),devcards.core.test_channel);
} else {
if((state_val_66320 === (6))){
var state_66319__$1 = state_66319;
var statearr_66332_66379 = state_66319__$1;
(statearr_66332_66379[(2)] = true);

(statearr_66332_66379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (28))){
var inst_66282 = (state_66319[(8)]);
var inst_66300 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_66301 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_66302 = cljs.core.PersistentHashMap.fromArrays(inst_66300,inst_66301);
var inst_66303 = devcards.core.collect_test.call(null,inst_66302);
var inst_66304 = cljs.test.get_current_env.call(null);
var inst_66305 = cljs.core.assoc.call(null,inst_66304,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_66306 = inst_66282.call(null,inst_66305);
var state_66319__$1 = (function (){var statearr_66333 = state_66319;
(statearr_66333[(13)] = inst_66303);

return statearr_66333;
})();
var statearr_66334_66380 = state_66319__$1;
(statearr_66334_66380[(2)] = inst_66306);

(statearr_66334_66380[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (25))){
var inst_66315 = (state_66319[(2)]);
var state_66319__$1 = state_66319;
var statearr_66335_66381 = state_66319__$1;
(statearr_66335_66381[(2)] = inst_66315);

(statearr_66335_66381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (17))){
var state_66319__$1 = state_66319;
var statearr_66336_66382 = state_66319__$1;
(statearr_66336_66382[(2)] = true);

(statearr_66336_66382[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (3))){
var inst_66233 = (state_66319[(14)]);
var inst_66238 = inst_66233.cljs$lang$protocol_mask$partition0$;
var inst_66239 = (inst_66238 & (64));
var inst_66240 = inst_66233.cljs$core$ISeq$;
var inst_66241 = (cljs.core.PROTOCOL_SENTINEL === inst_66240);
var inst_66242 = (inst_66239) || (inst_66241);
var state_66319__$1 = state_66319;
if(cljs.core.truth_(inst_66242)){
var statearr_66337_66383 = state_66319__$1;
(statearr_66337_66383[(1)] = (6));

} else {
var statearr_66338_66384 = state_66319__$1;
(statearr_66338_66384[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (12))){
var inst_66257 = (state_66319[(7)]);
var inst_66261 = (inst_66257 == null);
var inst_66262 = cljs.core.not.call(null,inst_66261);
var state_66319__$1 = state_66319;
if(inst_66262){
var statearr_66339_66385 = state_66319__$1;
(statearr_66339_66385[(1)] = (14));

} else {
var statearr_66340_66386 = state_66319__$1;
(statearr_66340_66386[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (2))){
var inst_66233 = (state_66319[(14)]);
var inst_66233__$1 = (state_66319[(2)]);
var inst_66235 = (inst_66233__$1 == null);
var inst_66236 = cljs.core.not.call(null,inst_66235);
var state_66319__$1 = (function (){var statearr_66341 = state_66319;
(statearr_66341[(14)] = inst_66233__$1);

return statearr_66341;
})();
if(inst_66236){
var statearr_66342_66387 = state_66319__$1;
(statearr_66342_66387[(1)] = (3));

} else {
var statearr_66343_66388 = state_66319__$1;
(statearr_66343_66388[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (23))){
var inst_66281 = (state_66319[(10)]);
var inst_66287 = (state_66319[(15)]);
var inst_66287__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_66288 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66289 = devcards.core.run_card_tests.call(null,inst_66281);
var inst_66290 = [inst_66289,inst_66287__$1];
var inst_66291 = (new cljs.core.PersistentVector(null,2,(5),inst_66288,inst_66290,null));
var state_66319__$1 = (function (){var statearr_66344 = state_66319;
(statearr_66344[(15)] = inst_66287__$1);

return statearr_66344;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_66319__$1,(26),inst_66291);
} else {
if((state_val_66320 === (19))){
var inst_66272 = (state_66319[(2)]);
var state_66319__$1 = state_66319;
var statearr_66345_66389 = state_66319__$1;
(statearr_66345_66389[(2)] = inst_66272);

(statearr_66345_66389[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (11))){
var inst_66233 = (state_66319[(14)]);
var inst_66254 = (state_66319[(2)]);
var inst_66255 = cljs.core.get.call(null,inst_66254,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_66256 = cljs.core.get.call(null,inst_66254,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_66257 = inst_66233;
var state_66319__$1 = (function (){var statearr_66346 = state_66319;
(statearr_66346[(16)] = inst_66255);

(statearr_66346[(17)] = inst_66256);

(statearr_66346[(7)] = inst_66257);

return statearr_66346;
})();
var statearr_66347_66390 = state_66319__$1;
(statearr_66347_66390[(2)] = null);

(statearr_66347_66390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (9))){
var inst_66233 = (state_66319[(14)]);
var inst_66251 = cljs.core.apply.call(null,cljs.core.hash_map,inst_66233);
var state_66319__$1 = state_66319;
var statearr_66348_66391 = state_66319__$1;
(statearr_66348_66391[(2)] = inst_66251);

(statearr_66348_66391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (5))){
var inst_66249 = (state_66319[(2)]);
var state_66319__$1 = state_66319;
if(cljs.core.truth_(inst_66249)){
var statearr_66349_66392 = state_66319__$1;
(statearr_66349_66392[(1)] = (9));

} else {
var statearr_66350_66393 = state_66319__$1;
(statearr_66350_66393[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (14))){
var inst_66257 = (state_66319[(7)]);
var inst_66264 = inst_66257.cljs$lang$protocol_mask$partition0$;
var inst_66265 = (inst_66264 & (64));
var inst_66266 = inst_66257.cljs$core$ISeq$;
var inst_66267 = (cljs.core.PROTOCOL_SENTINEL === inst_66266);
var inst_66268 = (inst_66265) || (inst_66267);
var state_66319__$1 = state_66319;
if(cljs.core.truth_(inst_66268)){
var statearr_66351_66394 = state_66319__$1;
(statearr_66351_66394[(1)] = (17));

} else {
var statearr_66352_66395 = state_66319__$1;
(statearr_66352_66395[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (26))){
var inst_66287 = (state_66319[(15)]);
var inst_66293 = (state_66319[(2)]);
var inst_66294 = cljs.core.nth.call(null,inst_66293,(0),null);
var inst_66295 = cljs.core.nth.call(null,inst_66293,(1),null);
var inst_66296 = cljs.core.not_EQ_.call(null,inst_66295,inst_66287);
var state_66319__$1 = (function (){var statearr_66353 = state_66319;
(statearr_66353[(9)] = inst_66294);

return statearr_66353;
})();
if(inst_66296){
var statearr_66354_66396 = state_66319__$1;
(statearr_66354_66396[(1)] = (27));

} else {
var statearr_66355_66397 = state_66319__$1;
(statearr_66355_66397[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (16))){
var inst_66275 = (state_66319[(2)]);
var state_66319__$1 = state_66319;
if(cljs.core.truth_(inst_66275)){
var statearr_66356_66398 = state_66319__$1;
(statearr_66356_66398[(1)] = (20));

} else {
var statearr_66357_66399 = state_66319__$1;
(statearr_66357_66399[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (30))){
var inst_66311 = (state_66319[(2)]);
var inst_66257 = inst_66311;
var state_66319__$1 = (function (){var statearr_66358 = state_66319;
(statearr_66358[(7)] = inst_66257);

return statearr_66358;
})();
var statearr_66359_66400 = state_66319__$1;
(statearr_66359_66400[(2)] = null);

(statearr_66359_66400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (10))){
var inst_66233 = (state_66319[(14)]);
var state_66319__$1 = state_66319;
var statearr_66360_66401 = state_66319__$1;
(statearr_66360_66401[(2)] = inst_66233);

(statearr_66360_66401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (18))){
var state_66319__$1 = state_66319;
var statearr_66361_66402 = state_66319__$1;
(statearr_66361_66402[(2)] = false);

(statearr_66361_66402[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66320 === (8))){
var inst_66246 = (state_66319[(2)]);
var state_66319__$1 = state_66319;
var statearr_66362_66403 = state_66319__$1;
(statearr_66362_66403[(2)] = inst_66246);

(statearr_66362_66403[(1)] = (5));


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
});})(c__10513__auto__))
;
return ((function (switch__10492__auto__,c__10513__auto__){
return (function() {
var devcards$core$state_machine__10493__auto__ = null;
var devcards$core$state_machine__10493__auto____0 = (function (){
var statearr_66366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66366[(0)] = devcards$core$state_machine__10493__auto__);

(statearr_66366[(1)] = (1));

return statearr_66366;
});
var devcards$core$state_machine__10493__auto____1 = (function (state_66319){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_66319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e66367){if((e66367 instanceof Object)){
var ex__10496__auto__ = e66367;
var statearr_66368_66404 = state_66319;
(statearr_66368_66404[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66405 = state_66319;
state_66319 = G__66405;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
devcards$core$state_machine__10493__auto__ = function(state_66319){
switch(arguments.length){
case 0:
return devcards$core$state_machine__10493__auto____0.call(this);
case 1:
return devcards$core$state_machine__10493__auto____1.call(this,state_66319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__10493__auto____0;
devcards$core$state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__10493__auto____1;
return devcards$core$state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto__))
})();
var state__10515__auto__ = (function (){var statearr_66369 = f__10514__auto__.call(null);
(statearr_66369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto__);

return statearr_66369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto__))
);

return c__10513__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__11027__auto___66410 = ({"componentWillMount": (function (){
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
devcards.core.TestDevcard = React.createClass(base__11027__auto___66410);
}

var seq__66406_66411 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__66407_66412 = null;
var count__66408_66413 = (0);
var i__66409_66414 = (0);
while(true){
if((i__66409_66414 < count__66408_66413)){
var property__11028__auto___66415 = cljs.core._nth.call(null,chunk__66407_66412,i__66409_66414);
if(cljs.core.truth_((base__11027__auto___66410[property__11028__auto___66415]))){
(devcards.core.TestDevcard.prototype[property__11028__auto___66415] = (base__11027__auto___66410[property__11028__auto___66415]));
} else {
}

var G__66416 = seq__66406_66411;
var G__66417 = chunk__66407_66412;
var G__66418 = count__66408_66413;
var G__66419 = (i__66409_66414 + (1));
seq__66406_66411 = G__66416;
chunk__66407_66412 = G__66417;
count__66408_66413 = G__66418;
i__66409_66414 = G__66419;
continue;
} else {
var temp__4657__auto___66420 = cljs.core.seq.call(null,seq__66406_66411);
if(temp__4657__auto___66420){
var seq__66406_66421__$1 = temp__4657__auto___66420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66406_66421__$1)){
var c__7357__auto___66422 = cljs.core.chunk_first.call(null,seq__66406_66421__$1);
var G__66423 = cljs.core.chunk_rest.call(null,seq__66406_66421__$1);
var G__66424 = c__7357__auto___66422;
var G__66425 = cljs.core.count.call(null,c__7357__auto___66422);
var G__66426 = (0);
seq__66406_66411 = G__66423;
chunk__66407_66412 = G__66424;
count__66408_66413 = G__66425;
i__66409_66414 = G__66426;
continue;
} else {
var property__11028__auto___66427 = cljs.core.first.call(null,seq__66406_66421__$1);
if(cljs.core.truth_((base__11027__auto___66410[property__11028__auto___66427]))){
(devcards.core.TestDevcard.prototype[property__11028__auto___66427] = (base__11027__auto___66410[property__11028__auto___66427]));
} else {
}

var G__66428 = cljs.core.next.call(null,seq__66406_66421__$1);
var G__66429 = null;
var G__66430 = (0);
var G__66431 = (0);
seq__66406_66411 = G__66428;
chunk__66407_66412 = G__66429;
count__66408_66413 = G__66430;
i__66409_66414 = G__66431;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__7658__auto__ = [];
var len__7651__auto___66436 = arguments.length;
var i__7652__auto___66437 = (0);
while(true){
if((i__7652__auto___66437 < len__7651__auto___66436)){
args__7658__auto__.push((arguments[i__7652__auto___66437]));

var G__66438 = (i__7652__auto___66437 + (1));
i__7652__auto___66437 = G__66438;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core66433 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core66433 = (function (test_thunks,meta66434){
this.test_thunks = test_thunks;
this.meta66434 = meta66434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core66433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66435,meta66434__$1){
var self__ = this;
var _66435__$1 = this;
return (new devcards.core.t_devcards$core66433(self__.test_thunks,meta66434__$1));
});

devcards.core.t_devcards$core66433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66435){
var self__ = this;
var _66435__$1 = this;
return self__.meta66434;
});

devcards.core.t_devcards$core66433.prototype.devcards$core$IDevcard$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.t_devcards$core66433.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core66433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta66434","meta66434",684166648,null)], null);
});

devcards.core.t_devcards$core66433.cljs$lang$type = true;

devcards.core.t_devcards$core66433.cljs$lang$ctorStr = "devcards.core/t_devcards$core66433";

devcards.core.t_devcards$core66433.cljs$lang$ctorPrWriter = (function (this__7149__auto__,writer__7150__auto__,opt__7151__auto__){
return cljs.core._write.call(null,writer__7150__auto__,"devcards.core/t_devcards$core66433");
});

devcards.core.__GT_t_devcards$core66433 = (function devcards$core$__GT_t_devcards$core66433(test_thunks__$1,meta66434){
return (new devcards.core.t_devcards$core66433(test_thunks__$1,meta66434));
});

}

return (new devcards.core.t_devcards$core66433(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq66432){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66432));
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

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs66440 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs66440))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-base",null,"com-rigsomelight-devcards-string-render",null], null), null)], null),attrs66440)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs66440))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs66440)], null))));
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
return React.render((function (){var attrs66442 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs66442))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-base",null,"com-rigsomelight-devcards-string-render",null], null), null)], null),attrs66442)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs66442))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs66442)], null))));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__10513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10513__auto__){
return (function (){
var f__10514__auto__ = (function (){var switch__10492__auto__ = ((function (c__10513__auto__){
return (function (state_66472){
var state_val_66473 = (state_66472[(1)]);
if((state_val_66473 === (1))){
var inst_66463 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_66472__$1 = state_66472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66472__$1,(2),inst_66463);
} else {
if((state_val_66473 === (2))){
var inst_66465 = (state_66472[(2)]);
var inst_66466 = cljs.core.async.timeout.call(null,(100));
var state_66472__$1 = (function (){var statearr_66474 = state_66472;
(statearr_66474[(7)] = inst_66465);

return statearr_66474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66472__$1,(3),inst_66466);
} else {
if((state_val_66473 === (3))){
var inst_66468 = (state_66472[(2)]);
var inst_66469 = (function (){return ((function (inst_66468,state_val_66473,c__10513__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_66468,state_val_66473,c__10513__auto__))
})();
var inst_66470 = setTimeout(inst_66469,(0));
var state_66472__$1 = (function (){var statearr_66475 = state_66472;
(statearr_66475[(8)] = inst_66468);

return statearr_66475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66472__$1,inst_66470);
} else {
return null;
}
}
}
});})(c__10513__auto__))
;
return ((function (switch__10492__auto__,c__10513__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__10493__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__10493__auto____0 = (function (){
var statearr_66479 = [null,null,null,null,null,null,null,null,null];
(statearr_66479[(0)] = devcards$core$mount_namespace_$_state_machine__10493__auto__);

(statearr_66479[(1)] = (1));

return statearr_66479;
});
var devcards$core$mount_namespace_$_state_machine__10493__auto____1 = (function (state_66472){
while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_66472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10495__auto__;
}
break;
}
}catch (e66480){if((e66480 instanceof Object)){
var ex__10496__auto__ = e66480;
var statearr_66481_66483 = state_66472;
(statearr_66481_66483[(5)] = ex__10496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66484 = state_66472;
state_66472 = G__66484;
continue;
} else {
return ret_value__10494__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__10493__auto__ = function(state_66472){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__10493__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__10493__auto____1.call(this,state_66472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__10493__auto____0;
devcards$core$mount_namespace_$_state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__10493__auto____1;
return devcards$core$mount_namespace_$_state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10513__auto__))
})();
var state__10515__auto__ = (function (){var statearr_66482 = f__10514__auto__.call(null);
(statearr_66482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10513__auto__);

return statearr_66482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10515__auto__);
});})(c__10513__auto__))
);

return c__10513__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1479783844398