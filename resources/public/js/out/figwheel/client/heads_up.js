// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.clojure_symbol_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__20266__auto__ = [];
var len__20259__auto___40838 = arguments.length;
var i__20260__auto___40839 = (0);
while(true){
if((i__20260__auto___40839 < len__20259__auto___40838)){
args__20266__auto__.push((arguments[i__20260__auto___40839]));

var G__40840 = (i__20260__auto___40839 + (1));
i__20260__auto___40839 = G__40840;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((2) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20267__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__40830_40841 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__40831_40842 = null;
var count__40832_40843 = (0);
var i__40833_40844 = (0);
while(true){
if((i__40833_40844 < count__40832_40843)){
var k_40845 = cljs.core._nth.call(null,chunk__40831_40842,i__40833_40844);
e.setAttribute(cljs.core.name.call(null,k_40845),cljs.core.get.call(null,attrs,k_40845));

var G__40846 = seq__40830_40841;
var G__40847 = chunk__40831_40842;
var G__40848 = count__40832_40843;
var G__40849 = (i__40833_40844 + (1));
seq__40830_40841 = G__40846;
chunk__40831_40842 = G__40847;
count__40832_40843 = G__40848;
i__40833_40844 = G__40849;
continue;
} else {
var temp__4425__auto___40850 = cljs.core.seq.call(null,seq__40830_40841);
if(temp__4425__auto___40850){
var seq__40830_40851__$1 = temp__4425__auto___40850;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40830_40851__$1)){
var c__20004__auto___40852 = cljs.core.chunk_first.call(null,seq__40830_40851__$1);
var G__40853 = cljs.core.chunk_rest.call(null,seq__40830_40851__$1);
var G__40854 = c__20004__auto___40852;
var G__40855 = cljs.core.count.call(null,c__20004__auto___40852);
var G__40856 = (0);
seq__40830_40841 = G__40853;
chunk__40831_40842 = G__40854;
count__40832_40843 = G__40855;
i__40833_40844 = G__40856;
continue;
} else {
var k_40857 = cljs.core.first.call(null,seq__40830_40851__$1);
e.setAttribute(cljs.core.name.call(null,k_40857),cljs.core.get.call(null,attrs,k_40857));

var G__40858 = cljs.core.next.call(null,seq__40830_40851__$1);
var G__40859 = null;
var G__40860 = (0);
var G__40861 = (0);
seq__40830_40841 = G__40858;
chunk__40831_40842 = G__40859;
count__40832_40843 = G__40860;
i__40833_40844 = G__40861;
continue;
}
} else {
}
}
break;
}

var seq__40834_40862 = cljs.core.seq.call(null,children);
var chunk__40835_40863 = null;
var count__40836_40864 = (0);
var i__40837_40865 = (0);
while(true){
if((i__40837_40865 < count__40836_40864)){
var ch_40866 = cljs.core._nth.call(null,chunk__40835_40863,i__40837_40865);
e.appendChild(ch_40866);

var G__40867 = seq__40834_40862;
var G__40868 = chunk__40835_40863;
var G__40869 = count__40836_40864;
var G__40870 = (i__40837_40865 + (1));
seq__40834_40862 = G__40867;
chunk__40835_40863 = G__40868;
count__40836_40864 = G__40869;
i__40837_40865 = G__40870;
continue;
} else {
var temp__4425__auto___40871 = cljs.core.seq.call(null,seq__40834_40862);
if(temp__4425__auto___40871){
var seq__40834_40872__$1 = temp__4425__auto___40871;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40834_40872__$1)){
var c__20004__auto___40873 = cljs.core.chunk_first.call(null,seq__40834_40872__$1);
var G__40874 = cljs.core.chunk_rest.call(null,seq__40834_40872__$1);
var G__40875 = c__20004__auto___40873;
var G__40876 = cljs.core.count.call(null,c__20004__auto___40873);
var G__40877 = (0);
seq__40834_40862 = G__40874;
chunk__40835_40863 = G__40875;
count__40836_40864 = G__40876;
i__40837_40865 = G__40877;
continue;
} else {
var ch_40878 = cljs.core.first.call(null,seq__40834_40872__$1);
e.appendChild(ch_40878);

var G__40879 = cljs.core.next.call(null,seq__40834_40872__$1);
var G__40880 = null;
var G__40881 = (0);
var G__40882 = (0);
seq__40834_40862 = G__40879;
chunk__40835_40863 = G__40880;
count__40836_40864 = G__40881;
i__40837_40865 = G__40882;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq40827){
var G__40828 = cljs.core.first.call(null,seq40827);
var seq40827__$1 = cljs.core.next.call(null,seq40827);
var G__40829 = cljs.core.first.call(null,seq40827__$1);
var seq40827__$2 = cljs.core.next.call(null,seq40827__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__40828,G__40829,seq40827__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__20114__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20115__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20116__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20117__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20118__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__20114__auto__,prefer_table__20115__auto__,method_cache__20116__auto__,cached_hierarchy__20117__auto__,hierarchy__20118__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__20114__auto__,prefer_table__20115__auto__,method_cache__20116__auto__,cached_hierarchy__20117__auto__,hierarchy__20118__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20118__auto__,method_table__20114__auto__,prefer_table__20115__auto__,method_cache__20116__auto__,cached_hierarchy__20117__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_40883 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_40883.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_40883.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_40883.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_40883);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__40884,st_map){
var map__40889 = p__40884;
var map__40889__$1 = ((((!((map__40889 == null)))?((((map__40889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40889):map__40889);
var container_el = cljs.core.get.call(null,map__40889__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__40889,map__40889__$1,container_el){
return (function (p__40891){
var vec__40892 = p__40891;
var k = cljs.core.nth.call(null,vec__40892,(0),null);
var v = cljs.core.nth.call(null,vec__40892,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__40889,map__40889__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__40893,dom_str){
var map__40896 = p__40893;
var map__40896__$1 = ((((!((map__40896 == null)))?((((map__40896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40896):map__40896);
var c = map__40896__$1;
var content_area_el = cljs.core.get.call(null,map__40896__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__40898){
var map__40901 = p__40898;
var map__40901__$1 = ((((!((map__40901 == null)))?((((map__40901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40901):map__40901);
var content_area_el = cljs.core.get.call(null,map__40901__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__28184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto__){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto__){
return (function (state_40944){
var state_val_40945 = (state_40944[(1)]);
if((state_val_40945 === (1))){
var inst_40929 = (state_40944[(7)]);
var inst_40929__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_40930 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_40931 = ["10px","10px","100%","68px","1.0"];
var inst_40932 = cljs.core.PersistentHashMap.fromArrays(inst_40930,inst_40931);
var inst_40933 = cljs.core.merge.call(null,inst_40932,style);
var inst_40934 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40929__$1,inst_40933);
var inst_40935 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_40929__$1,msg);
var inst_40936 = cljs.core.async.timeout.call(null,(300));
var state_40944__$1 = (function (){var statearr_40946 = state_40944;
(statearr_40946[(7)] = inst_40929__$1);

(statearr_40946[(8)] = inst_40935);

(statearr_40946[(9)] = inst_40934);

return statearr_40946;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40944__$1,(2),inst_40936);
} else {
if((state_val_40945 === (2))){
var inst_40929 = (state_40944[(7)]);
var inst_40938 = (state_40944[(2)]);
var inst_40939 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_40940 = ["auto"];
var inst_40941 = cljs.core.PersistentHashMap.fromArrays(inst_40939,inst_40940);
var inst_40942 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40929,inst_40941);
var state_40944__$1 = (function (){var statearr_40947 = state_40944;
(statearr_40947[(10)] = inst_40938);

return statearr_40947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40944__$1,inst_40942);
} else {
return null;
}
}
});})(c__28184__auto__))
;
return ((function (switch__28119__auto__,c__28184__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__28120__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__28120__auto____0 = (function (){
var statearr_40951 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40951[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__28120__auto__);

(statearr_40951[(1)] = (1));

return statearr_40951;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__28120__auto____1 = (function (state_40944){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_40944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e40952){if((e40952 instanceof Object)){
var ex__28123__auto__ = e40952;
var statearr_40953_40955 = state_40944;
(statearr_40953_40955[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40956 = state_40944;
state_40944 = G__40956;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__28120__auto__ = function(state_40944){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28120__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28120__auto____1.call(this,state_40944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__28120__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__28120__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto__))
})();
var state__28186__auto__ = (function (){var statearr_40954 = f__28185__auto__.call(null);
(statearr_40954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto__);

return statearr_40954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto__))
);

return c__28184__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__40958 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__40958,(0),null);
var ln = cljs.core.nth.call(null,vec__40958,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__40961 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__40961,(0),null);
var file_line = cljs.core.nth.call(null,vec__40961,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__40961,file_name,file_line){
return (function (p1__40959_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__40959_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__40961,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__40964 = figwheel.client.heads_up.ensure_container.call(null);
var map__40964__$1 = ((((!((map__40964 == null)))?((((map__40964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40964):map__40964);
var content_area_el = cljs.core.get.call(null,map__40964__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__28184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto__){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto__){
return (function (state_41012){
var state_val_41013 = (state_41012[(1)]);
if((state_val_41013 === (1))){
var inst_40995 = (state_41012[(7)]);
var inst_40995__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_40996 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_40997 = ["0.0"];
var inst_40998 = cljs.core.PersistentHashMap.fromArrays(inst_40996,inst_40997);
var inst_40999 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40995__$1,inst_40998);
var inst_41000 = cljs.core.async.timeout.call(null,(300));
var state_41012__$1 = (function (){var statearr_41014 = state_41012;
(statearr_41014[(8)] = inst_40999);

(statearr_41014[(7)] = inst_40995__$1);

return statearr_41014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41012__$1,(2),inst_41000);
} else {
if((state_val_41013 === (2))){
var inst_40995 = (state_41012[(7)]);
var inst_41002 = (state_41012[(2)]);
var inst_41003 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_41004 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_41005 = cljs.core.PersistentHashMap.fromArrays(inst_41003,inst_41004);
var inst_41006 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40995,inst_41005);
var inst_41007 = cljs.core.async.timeout.call(null,(200));
var state_41012__$1 = (function (){var statearr_41015 = state_41012;
(statearr_41015[(9)] = inst_41002);

(statearr_41015[(10)] = inst_41006);

return statearr_41015;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41012__$1,(3),inst_41007);
} else {
if((state_val_41013 === (3))){
var inst_40995 = (state_41012[(7)]);
var inst_41009 = (state_41012[(2)]);
var inst_41010 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_40995,"");
var state_41012__$1 = (function (){var statearr_41016 = state_41012;
(statearr_41016[(11)] = inst_41009);

return statearr_41016;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41012__$1,inst_41010);
} else {
return null;
}
}
}
});})(c__28184__auto__))
;
return ((function (switch__28119__auto__,c__28184__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__28120__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__28120__auto____0 = (function (){
var statearr_41020 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41020[(0)] = figwheel$client$heads_up$clear_$_state_machine__28120__auto__);

(statearr_41020[(1)] = (1));

return statearr_41020;
});
var figwheel$client$heads_up$clear_$_state_machine__28120__auto____1 = (function (state_41012){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_41012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e41021){if((e41021 instanceof Object)){
var ex__28123__auto__ = e41021;
var statearr_41022_41024 = state_41012;
(statearr_41022_41024[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41025 = state_41012;
state_41012 = G__41025;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__28120__auto__ = function(state_41012){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__28120__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__28120__auto____1.call(this,state_41012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__28120__auto____0;
figwheel$client$heads_up$clear_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__28120__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto__))
})();
var state__28186__auto__ = (function (){var statearr_41023 = f__28185__auto__.call(null);
(statearr_41023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto__);

return statearr_41023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto__))
);

return c__28184__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__28184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28184__auto__){
return (function (){
var f__28185__auto__ = (function (){var switch__28119__auto__ = ((function (c__28184__auto__){
return (function (state_41057){
var state_val_41058 = (state_41057[(1)]);
if((state_val_41058 === (1))){
var inst_41047 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_41057__$1 = state_41057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41057__$1,(2),inst_41047);
} else {
if((state_val_41058 === (2))){
var inst_41049 = (state_41057[(2)]);
var inst_41050 = cljs.core.async.timeout.call(null,(400));
var state_41057__$1 = (function (){var statearr_41059 = state_41057;
(statearr_41059[(7)] = inst_41049);

return statearr_41059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41057__$1,(3),inst_41050);
} else {
if((state_val_41058 === (3))){
var inst_41052 = (state_41057[(2)]);
var inst_41053 = figwheel.client.heads_up.clear.call(null);
var state_41057__$1 = (function (){var statearr_41060 = state_41057;
(statearr_41060[(8)] = inst_41052);

return statearr_41060;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41057__$1,(4),inst_41053);
} else {
if((state_val_41058 === (4))){
var inst_41055 = (state_41057[(2)]);
var state_41057__$1 = state_41057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41057__$1,inst_41055);
} else {
return null;
}
}
}
}
});})(c__28184__auto__))
;
return ((function (switch__28119__auto__,c__28184__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__28120__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__28120__auto____0 = (function (){
var statearr_41064 = [null,null,null,null,null,null,null,null,null];
(statearr_41064[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__28120__auto__);

(statearr_41064[(1)] = (1));

return statearr_41064;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__28120__auto____1 = (function (state_41057){
while(true){
var ret_value__28121__auto__ = (function (){try{while(true){
var result__28122__auto__ = switch__28119__auto__.call(null,state_41057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28122__auto__;
}
break;
}
}catch (e41065){if((e41065 instanceof Object)){
var ex__28123__auto__ = e41065;
var statearr_41066_41068 = state_41057;
(statearr_41066_41068[(5)] = ex__28123__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41069 = state_41057;
state_41057 = G__41069;
continue;
} else {
return ret_value__28121__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__28120__auto__ = function(state_41057){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28120__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28120__auto____1.call(this,state_41057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__28120__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__28120__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__28120__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__28120__auto__;
})()
;})(switch__28119__auto__,c__28184__auto__))
})();
var state__28186__auto__ = (function (){var statearr_41067 = f__28185__auto__.call(null);
(statearr_41067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28184__auto__);

return statearr_41067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28186__auto__);
});})(c__28184__auto__))
);

return c__28184__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1444632663567