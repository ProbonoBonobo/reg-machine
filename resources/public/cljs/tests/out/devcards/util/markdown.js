// Compiled by ClojureScript 1.9.293 {}
goog.provide('devcards.util.markdown');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljsjs.showdown');
devcards.util.markdown.leading_space_count = (function devcards$util$markdown$leading_space_count(s){
var temp__4657__auto__ = cljs.core.second.call(null,cljs.core.re_matches.call(null,/^([\s]*).*/,s));
if(cljs.core.truth_(temp__4657__auto__)){
var ws = temp__4657__auto__;
return ws.length;
} else {
return null;
}
});
devcards.util.markdown.is_bullet_item_QMARK_ = (function devcards$util$markdown$is_bullet_item_QMARK_(s){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/^\s*([-*+]|[0-9]+\.)\s.*/,s));
});
/**
 * Find the common left edge of bullet lists in a collection of lines.
 */
devcards.util.markdown.bullets_left_edge = (function devcards$util$markdown$bullets_left_edge(lines){
var or__6543__auto__ = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,devcards.util.markdown.leading_space_count,cljs.core.filter.call(null,devcards.util.markdown.is_bullet_item_QMARK_,lines)));
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return (0);
}
});
/**
 * Strip the left margin's extra whitespace, but leave bullet list indents in tact.
 */
devcards.util.markdown.strip_left_margin = (function devcards$util$markdown$strip_left_margin(s,margin){
if(cljs.core.truth_(devcards.util.markdown.is_bullet_item_QMARK_.call(null,s))){
return cljs.core.subs.call(null,s,margin);
} else {
return clojure.string.trim.call(null,s);
}
});
var conv_class_65882 = Showdown.converter;
var converter_65883 = (new conv_class_65882());
/**
 * render markdown
 */
devcards.util.markdown.markdown_to_html = ((function (conv_class_65882,converter_65883){
return (function devcards$util$markdown$markdown_to_html(markdown_txt){
return converter_65883.makeHtml(markdown_txt);
});})(conv_class_65882,converter_65883))
;
devcards.util.markdown.matches_delim_QMARK_ = (function devcards$util$markdown$matches_delim_QMARK_(line){
return cljs.core.re_matches.call(null,/^[\s]*```(\w*).*/,line);
});
if(typeof devcards.util.markdown.block_parser !== 'undefined'){
} else {
devcards.util.markdown.block_parser = (function (){var method_table__7471__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7472__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7473__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7474__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7475__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.util.markdown","block-parser"),((function (method_table__7471__auto__,prefer_table__7472__auto__,method_cache__7473__auto__,cached_hierarchy__7474__auto__,hierarchy__7475__auto__){
return (function (p__65884,line){
var map__65885 = p__65884;
var map__65885__$1 = ((((!((map__65885 == null)))?((((map__65885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65885):map__65885);
var stage = cljs.core.get.call(null,map__65885__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.util.markdown.matches_delim_QMARK_.call(null,line))?new cljs.core.Keyword(null,"delim","delim",1621565472):new cljs.core.Keyword(null,"line","line",212345235)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stage)], null);
});})(method_table__7471__auto__,prefer_table__7472__auto__,method_cache__7473__auto__,cached_hierarchy__7474__auto__,hierarchy__7475__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7475__auto__,method_table__7471__auto__,prefer_table__7472__auto__,method_cache__7473__auto__,cached_hierarchy__7474__auto__));
})();
}
cljs.core._add_method.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null),(function (p__65887,line){
var map__65888 = p__65887;
var map__65888__$1 = ((((!((map__65888 == null)))?((((map__65888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65888):map__65888);
var st = map__65888__$1;
var stage = cljs.core.get.call(null,map__65888__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var left_margin = cljs.core.get.call(null,map__65888__$1,new cljs.core.Keyword(null,"left-margin","left-margin",1869643147));
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.conj,devcards.util.markdown.strip_left_margin.call(null,line,left_margin));
}));
cljs.core._add_method.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"code-block","code-block",-2113425141)], null),(function (p__65890,line){
var map__65891 = p__65890;
var map__65891__$1 = ((((!((map__65891 == null)))?((((map__65891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65891):map__65891);
var st = map__65891__$1;
var stage = cljs.core.get.call(null,map__65891__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.conj,cljs.core.subs.call(null,line,new cljs.core.Keyword(null,"leading-spaces","leading-spaces",1148061085).cljs$core$IFn$_invoke$arity$1(stage)));
}));
cljs.core._add_method.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delim","delim",1621565472),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null),(function (p__65893,line){
var map__65894 = p__65893;
var map__65894__$1 = ((((!((map__65894 == null)))?((((map__65894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65894.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65894):map__65894);
var st = map__65894__$1;
var stage = cljs.core.get.call(null,map__65894__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.call(null,map__65894__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
var lang = cljs.core.second.call(null,devcards.util.markdown.matches_delim_QMARK_.call(null,line));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.conj.call(null,accum,stage)),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code-block","code-block",-2113425141),new cljs.core.Keyword(null,"lang","lang",-1819677104),((clojure.string.blank_QMARK_.call(null,lang))?null:lang),new cljs.core.Keyword(null,"leading-spaces","leading-spaces",1148061085),devcards.util.markdown.leading_space_count.call(null,line),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null));
}));
cljs.core._add_method.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delim","delim",1621565472),new cljs.core.Keyword(null,"code-block","code-block",-2113425141)], null),(function (p__65896,line){
var map__65897 = p__65896;
var map__65897__$1 = ((((!((map__65897 == null)))?((((map__65897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65897.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65897):map__65897);
var st = map__65897__$1;
var stage = cljs.core.get.call(null,map__65897__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.call(null,map__65897__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.conj.call(null,accum,stage)),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.parse_out_blocks_STAR_ = (function devcards$util$markdown$parse_out_blocks_STAR_(m){
var lines = clojure.string.split.call(null,m,"\n");
return cljs.core.reduce.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"left-margin","left-margin",1869643147),devcards.util.markdown.bullets_left_edge.call(null,lines)], null),lines);
});
devcards.util.markdown.parse_out_blocks = (function devcards$util$markdown$parse_out_blocks(m){
var map__65905 = devcards.util.markdown.parse_out_blocks_STAR_.call(null,m);
var map__65905__$1 = ((((!((map__65905 == null)))?((((map__65905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65905):map__65905);
var stage = cljs.core.get.call(null,map__65905__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.call(null,map__65905__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
return cljs.core.map.call(null,((function (map__65905,map__65905__$1,stage,accum){
return (function (x){
return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224)], null),((function (map__65905,map__65905__$1,stage,accum){
return (function (p1__65899_SHARP_){
return clojure.string.join.call(null,"\n",p1__65899_SHARP_);
});})(map__65905,map__65905__$1,stage,accum))
);
});})(map__65905,map__65905__$1,stage,accum))
,cljs.core.filter.call(null,((function (map__65905,map__65905__$1,stage,accum){
return (function (p__65907){
var map__65908 = p__65907;
var map__65908__$1 = ((((!((map__65908 == null)))?((((map__65908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65908):map__65908);
var content = cljs.core.get.call(null,map__65908__$1,new cljs.core.Keyword(null,"content","content",15833224));
return cljs.core.not_empty.call(null,content);
});})(map__65905,map__65905__$1,stage,accum))
,cljs.core.conj.call(null,accum,stage)));
});

//# sourceMappingURL=markdown.js.map?rel=1479783843149