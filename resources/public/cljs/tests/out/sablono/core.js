// Compiled by ClojureScript 1.9.293 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__42769__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__42766 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__42767 = cljs.core.seq.call(null,vec__42766);
var first__42768 = cljs.core.first.call(null,seq__42767);
var seq__42767__$1 = cljs.core.next.call(null,seq__42767);
var tag = first__42768;
var body = seq__42767__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__42769 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42770__i = 0, G__42770__a = new Array(arguments.length -  0);
while (G__42770__i < G__42770__a.length) {G__42770__a[G__42770__i] = arguments[G__42770__i + 0]; ++G__42770__i;}
  args = new cljs.core.IndexedSeq(G__42770__a,0);
} 
return G__42769__delegate.call(this,args);};
G__42769.cljs$lang$maxFixedArity = 0;
G__42769.cljs$lang$applyTo = (function (arglist__42771){
var args = cljs.core.seq(arglist__42771);
return G__42769__delegate(args);
});
G__42769.cljs$core$IFn$_invoke$arity$variadic = G__42769__delegate;
return G__42769;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7326__auto__ = (function sablono$core$update_arglists_$_iter__42776(s__42777){
return (new cljs.core.LazySeq(null,(function (){
var s__42777__$1 = s__42777;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42777__$1);
if(temp__4657__auto__){
var s__42777__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42777__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__42777__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__42779 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__42778 = (0);
while(true){
if((i__42778 < size__7325__auto__)){
var args = cljs.core._nth.call(null,c__7324__auto__,i__42778);
cljs.core.chunk_append.call(null,b__42779,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__42780 = (i__42778 + (1));
i__42778 = G__42780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42779),sablono$core$update_arglists_$_iter__42776.call(null,cljs.core.chunk_rest.call(null,s__42777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42779),null);
}
} else {
var args = cljs.core.first.call(null,s__42777__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__42776.call(null,cljs.core.rest.call(null,s__42777__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7658__auto__ = [];
var len__7651__auto___42786 = arguments.length;
var i__7652__auto___42787 = (0);
while(true){
if((i__7652__auto___42787 < len__7651__auto___42786)){
args__7658__auto__.push((arguments[i__7652__auto___42787]));

var G__42788 = (i__7652__auto___42787 + (1));
i__7652__auto___42787 = G__42788;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7326__auto__ = (function sablono$core$iter__42782(s__42783){
return (new cljs.core.LazySeq(null,(function (){
var s__42783__$1 = s__42783;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42783__$1);
if(temp__4657__auto__){
var s__42783__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42783__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__42783__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__42785 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__42784 = (0);
while(true){
if((i__42784 < size__7325__auto__)){
var style = cljs.core._nth.call(null,c__7324__auto__,i__42784);
cljs.core.chunk_append.call(null,b__42785,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__42789 = (i__42784 + (1));
i__42784 = G__42789;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42785),sablono$core$iter__42782.call(null,cljs.core.chunk_rest.call(null,s__42783__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42785),null);
}
} else {
var style = cljs.core.first.call(null,s__42783__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__42782.call(null,cljs.core.rest.call(null,s__42783__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq42781){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42781));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to42790 = (function sablono$core$link_to42790(var_args){
var args__7658__auto__ = [];
var len__7651__auto___42793 = arguments.length;
var i__7652__auto___42794 = (0);
while(true){
if((i__7652__auto___42794 < len__7651__auto___42793)){
args__7658__auto__.push((arguments[i__7652__auto___42794]));

var G__42795 = (i__7652__auto___42794 + (1));
i__7652__auto___42794 = G__42795;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to42790.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.link_to42790.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to42790.cljs$lang$maxFixedArity = (1);

sablono.core.link_to42790.cljs$lang$applyTo = (function (seq42791){
var G__42792 = cljs.core.first.call(null,seq42791);
var seq42791__$1 = cljs.core.next.call(null,seq42791);
return sablono.core.link_to42790.cljs$core$IFn$_invoke$arity$variadic(G__42792,seq42791__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to42790);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to42796 = (function sablono$core$mail_to42796(var_args){
var args__7658__auto__ = [];
var len__7651__auto___42803 = arguments.length;
var i__7652__auto___42804 = (0);
while(true){
if((i__7652__auto___42804 < len__7651__auto___42803)){
args__7658__auto__.push((arguments[i__7652__auto___42804]));

var G__42805 = (i__7652__auto___42804 + (1));
i__7652__auto___42804 = G__42805;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to42796.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.mail_to42796.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__42799){
var vec__42800 = p__42799;
var content = cljs.core.nth.call(null,vec__42800,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6543__auto__ = content;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to42796.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to42796.cljs$lang$applyTo = (function (seq42797){
var G__42798 = cljs.core.first.call(null,seq42797);
var seq42797__$1 = cljs.core.next.call(null,seq42797);
return sablono.core.mail_to42796.cljs$core$IFn$_invoke$arity$variadic(G__42798,seq42797__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to42796);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list42806 = (function sablono$core$unordered_list42806(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__7326__auto__ = (function sablono$core$unordered_list42806_$_iter__42811(s__42812){
return (new cljs.core.LazySeq(null,(function (){
var s__42812__$1 = s__42812;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42812__$1);
if(temp__4657__auto__){
var s__42812__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42812__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__42812__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__42814 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__42813 = (0);
while(true){
if((i__42813 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__42813);
cljs.core.chunk_append.call(null,b__42814,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42815 = (i__42813 + (1));
i__42813 = G__42815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42814),sablono$core$unordered_list42806_$_iter__42811.call(null,cljs.core.chunk_rest.call(null,s__42812__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42814),null);
}
} else {
var x = cljs.core.first.call(null,s__42812__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list42806_$_iter__42811.call(null,cljs.core.rest.call(null,s__42812__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list42806);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list42816 = (function sablono$core$ordered_list42816(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__7326__auto__ = (function sablono$core$ordered_list42816_$_iter__42821(s__42822){
return (new cljs.core.LazySeq(null,(function (){
var s__42822__$1 = s__42822;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42822__$1);
if(temp__4657__auto__){
var s__42822__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42822__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__42822__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__42824 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__42823 = (0);
while(true){
if((i__42823 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__42823);
cljs.core.chunk_append.call(null,b__42824,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42825 = (i__42823 + (1));
i__42823 = G__42825;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42824),sablono$core$ordered_list42816_$_iter__42821.call(null,cljs.core.chunk_rest.call(null,s__42822__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42824),null);
}
} else {
var x = cljs.core.first.call(null,s__42822__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list42816_$_iter__42821.call(null,cljs.core.rest.call(null,s__42822__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list42816);
/**
 * Create an image element.
 */
sablono.core.image42826 = (function sablono$core$image42826(var_args){
var args42827 = [];
var len__7651__auto___42830 = arguments.length;
var i__7652__auto___42831 = (0);
while(true){
if((i__7652__auto___42831 < len__7651__auto___42830)){
args42827.push((arguments[i__7652__auto___42831]));

var G__42832 = (i__7652__auto___42831 + (1));
i__7652__auto___42831 = G__42832;
continue;
} else {
}
break;
}

var G__42829 = args42827.length;
switch (G__42829) {
case 1:
return sablono.core.image42826.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image42826.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42827.length)].join('')));

}
});

sablono.core.image42826.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image42826.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image42826.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image42826);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__42834_SHARP_,p2__42835_SHARP_){
return [cljs.core.str(p1__42834_SHARP_),cljs.core.str("["),cljs.core.str(p2__42835_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__42836_SHARP_,p2__42837_SHARP_){
return [cljs.core.str(p1__42836_SHARP_),cljs.core.str("-"),cljs.core.str(p2__42837_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field42838 = (function sablono$core$color_field42838(var_args){
var args42839 = [];
var len__7651__auto___42906 = arguments.length;
var i__7652__auto___42907 = (0);
while(true){
if((i__7652__auto___42907 < len__7651__auto___42906)){
args42839.push((arguments[i__7652__auto___42907]));

var G__42908 = (i__7652__auto___42907 + (1));
i__7652__auto___42907 = G__42908;
continue;
} else {
}
break;
}

var G__42841 = args42839.length;
switch (G__42841) {
case 1:
return sablono.core.color_field42838.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field42838.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42839.length)].join('')));

}
});

sablono.core.color_field42838.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.color_field42838.call(null,name__10988__auto__,null);
});

sablono.core.color_field42838.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.color_field42838.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field42838);

/**
 * Creates a date input field.
 */
sablono.core.date_field42842 = (function sablono$core$date_field42842(var_args){
var args42843 = [];
var len__7651__auto___42910 = arguments.length;
var i__7652__auto___42911 = (0);
while(true){
if((i__7652__auto___42911 < len__7651__auto___42910)){
args42843.push((arguments[i__7652__auto___42911]));

var G__42912 = (i__7652__auto___42911 + (1));
i__7652__auto___42911 = G__42912;
continue;
} else {
}
break;
}

var G__42845 = args42843.length;
switch (G__42845) {
case 1:
return sablono.core.date_field42842.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field42842.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42843.length)].join('')));

}
});

sablono.core.date_field42842.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.date_field42842.call(null,name__10988__auto__,null);
});

sablono.core.date_field42842.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.date_field42842.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field42842);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field42846 = (function sablono$core$datetime_field42846(var_args){
var args42847 = [];
var len__7651__auto___42914 = arguments.length;
var i__7652__auto___42915 = (0);
while(true){
if((i__7652__auto___42915 < len__7651__auto___42914)){
args42847.push((arguments[i__7652__auto___42915]));

var G__42916 = (i__7652__auto___42915 + (1));
i__7652__auto___42915 = G__42916;
continue;
} else {
}
break;
}

var G__42849 = args42847.length;
switch (G__42849) {
case 1:
return sablono.core.datetime_field42846.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field42846.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42847.length)].join('')));

}
});

sablono.core.datetime_field42846.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.datetime_field42846.call(null,name__10988__auto__,null);
});

sablono.core.datetime_field42846.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.datetime_field42846.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field42846);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field42850 = (function sablono$core$datetime_local_field42850(var_args){
var args42851 = [];
var len__7651__auto___42918 = arguments.length;
var i__7652__auto___42919 = (0);
while(true){
if((i__7652__auto___42919 < len__7651__auto___42918)){
args42851.push((arguments[i__7652__auto___42919]));

var G__42920 = (i__7652__auto___42919 + (1));
i__7652__auto___42919 = G__42920;
continue;
} else {
}
break;
}

var G__42853 = args42851.length;
switch (G__42853) {
case 1:
return sablono.core.datetime_local_field42850.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field42850.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42851.length)].join('')));

}
});

sablono.core.datetime_local_field42850.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.datetime_local_field42850.call(null,name__10988__auto__,null);
});

sablono.core.datetime_local_field42850.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.datetime_local_field42850.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field42850);

/**
 * Creates a email input field.
 */
sablono.core.email_field42854 = (function sablono$core$email_field42854(var_args){
var args42855 = [];
var len__7651__auto___42922 = arguments.length;
var i__7652__auto___42923 = (0);
while(true){
if((i__7652__auto___42923 < len__7651__auto___42922)){
args42855.push((arguments[i__7652__auto___42923]));

var G__42924 = (i__7652__auto___42923 + (1));
i__7652__auto___42923 = G__42924;
continue;
} else {
}
break;
}

var G__42857 = args42855.length;
switch (G__42857) {
case 1:
return sablono.core.email_field42854.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field42854.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42855.length)].join('')));

}
});

sablono.core.email_field42854.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.email_field42854.call(null,name__10988__auto__,null);
});

sablono.core.email_field42854.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.email_field42854.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field42854);

/**
 * Creates a file input field.
 */
sablono.core.file_field42858 = (function sablono$core$file_field42858(var_args){
var args42859 = [];
var len__7651__auto___42926 = arguments.length;
var i__7652__auto___42927 = (0);
while(true){
if((i__7652__auto___42927 < len__7651__auto___42926)){
args42859.push((arguments[i__7652__auto___42927]));

var G__42928 = (i__7652__auto___42927 + (1));
i__7652__auto___42927 = G__42928;
continue;
} else {
}
break;
}

var G__42861 = args42859.length;
switch (G__42861) {
case 1:
return sablono.core.file_field42858.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field42858.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42859.length)].join('')));

}
});

sablono.core.file_field42858.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.file_field42858.call(null,name__10988__auto__,null);
});

sablono.core.file_field42858.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.file_field42858.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field42858);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field42862 = (function sablono$core$hidden_field42862(var_args){
var args42863 = [];
var len__7651__auto___42930 = arguments.length;
var i__7652__auto___42931 = (0);
while(true){
if((i__7652__auto___42931 < len__7651__auto___42930)){
args42863.push((arguments[i__7652__auto___42931]));

var G__42932 = (i__7652__auto___42931 + (1));
i__7652__auto___42931 = G__42932;
continue;
} else {
}
break;
}

var G__42865 = args42863.length;
switch (G__42865) {
case 1:
return sablono.core.hidden_field42862.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field42862.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42863.length)].join('')));

}
});

sablono.core.hidden_field42862.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.hidden_field42862.call(null,name__10988__auto__,null);
});

sablono.core.hidden_field42862.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.hidden_field42862.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field42862);

/**
 * Creates a month input field.
 */
sablono.core.month_field42866 = (function sablono$core$month_field42866(var_args){
var args42867 = [];
var len__7651__auto___42934 = arguments.length;
var i__7652__auto___42935 = (0);
while(true){
if((i__7652__auto___42935 < len__7651__auto___42934)){
args42867.push((arguments[i__7652__auto___42935]));

var G__42936 = (i__7652__auto___42935 + (1));
i__7652__auto___42935 = G__42936;
continue;
} else {
}
break;
}

var G__42869 = args42867.length;
switch (G__42869) {
case 1:
return sablono.core.month_field42866.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field42866.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42867.length)].join('')));

}
});

sablono.core.month_field42866.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.month_field42866.call(null,name__10988__auto__,null);
});

sablono.core.month_field42866.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.month_field42866.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field42866);

/**
 * Creates a number input field.
 */
sablono.core.number_field42870 = (function sablono$core$number_field42870(var_args){
var args42871 = [];
var len__7651__auto___42938 = arguments.length;
var i__7652__auto___42939 = (0);
while(true){
if((i__7652__auto___42939 < len__7651__auto___42938)){
args42871.push((arguments[i__7652__auto___42939]));

var G__42940 = (i__7652__auto___42939 + (1));
i__7652__auto___42939 = G__42940;
continue;
} else {
}
break;
}

var G__42873 = args42871.length;
switch (G__42873) {
case 1:
return sablono.core.number_field42870.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field42870.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42871.length)].join('')));

}
});

sablono.core.number_field42870.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.number_field42870.call(null,name__10988__auto__,null);
});

sablono.core.number_field42870.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.number_field42870.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field42870);

/**
 * Creates a password input field.
 */
sablono.core.password_field42874 = (function sablono$core$password_field42874(var_args){
var args42875 = [];
var len__7651__auto___42942 = arguments.length;
var i__7652__auto___42943 = (0);
while(true){
if((i__7652__auto___42943 < len__7651__auto___42942)){
args42875.push((arguments[i__7652__auto___42943]));

var G__42944 = (i__7652__auto___42943 + (1));
i__7652__auto___42943 = G__42944;
continue;
} else {
}
break;
}

var G__42877 = args42875.length;
switch (G__42877) {
case 1:
return sablono.core.password_field42874.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field42874.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42875.length)].join('')));

}
});

sablono.core.password_field42874.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.password_field42874.call(null,name__10988__auto__,null);
});

sablono.core.password_field42874.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.password_field42874.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field42874);

/**
 * Creates a range input field.
 */
sablono.core.range_field42878 = (function sablono$core$range_field42878(var_args){
var args42879 = [];
var len__7651__auto___42946 = arguments.length;
var i__7652__auto___42947 = (0);
while(true){
if((i__7652__auto___42947 < len__7651__auto___42946)){
args42879.push((arguments[i__7652__auto___42947]));

var G__42948 = (i__7652__auto___42947 + (1));
i__7652__auto___42947 = G__42948;
continue;
} else {
}
break;
}

var G__42881 = args42879.length;
switch (G__42881) {
case 1:
return sablono.core.range_field42878.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field42878.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42879.length)].join('')));

}
});

sablono.core.range_field42878.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.range_field42878.call(null,name__10988__auto__,null);
});

sablono.core.range_field42878.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.range_field42878.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field42878);

/**
 * Creates a search input field.
 */
sablono.core.search_field42882 = (function sablono$core$search_field42882(var_args){
var args42883 = [];
var len__7651__auto___42950 = arguments.length;
var i__7652__auto___42951 = (0);
while(true){
if((i__7652__auto___42951 < len__7651__auto___42950)){
args42883.push((arguments[i__7652__auto___42951]));

var G__42952 = (i__7652__auto___42951 + (1));
i__7652__auto___42951 = G__42952;
continue;
} else {
}
break;
}

var G__42885 = args42883.length;
switch (G__42885) {
case 1:
return sablono.core.search_field42882.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field42882.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42883.length)].join('')));

}
});

sablono.core.search_field42882.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.search_field42882.call(null,name__10988__auto__,null);
});

sablono.core.search_field42882.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.search_field42882.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field42882);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field42886 = (function sablono$core$tel_field42886(var_args){
var args42887 = [];
var len__7651__auto___42954 = arguments.length;
var i__7652__auto___42955 = (0);
while(true){
if((i__7652__auto___42955 < len__7651__auto___42954)){
args42887.push((arguments[i__7652__auto___42955]));

var G__42956 = (i__7652__auto___42955 + (1));
i__7652__auto___42955 = G__42956;
continue;
} else {
}
break;
}

var G__42889 = args42887.length;
switch (G__42889) {
case 1:
return sablono.core.tel_field42886.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field42886.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42887.length)].join('')));

}
});

sablono.core.tel_field42886.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.tel_field42886.call(null,name__10988__auto__,null);
});

sablono.core.tel_field42886.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.tel_field42886.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field42886);

/**
 * Creates a text input field.
 */
sablono.core.text_field42890 = (function sablono$core$text_field42890(var_args){
var args42891 = [];
var len__7651__auto___42958 = arguments.length;
var i__7652__auto___42959 = (0);
while(true){
if((i__7652__auto___42959 < len__7651__auto___42958)){
args42891.push((arguments[i__7652__auto___42959]));

var G__42960 = (i__7652__auto___42959 + (1));
i__7652__auto___42959 = G__42960;
continue;
} else {
}
break;
}

var G__42893 = args42891.length;
switch (G__42893) {
case 1:
return sablono.core.text_field42890.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field42890.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42891.length)].join('')));

}
});

sablono.core.text_field42890.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.text_field42890.call(null,name__10988__auto__,null);
});

sablono.core.text_field42890.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.text_field42890.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field42890);

/**
 * Creates a time input field.
 */
sablono.core.time_field42894 = (function sablono$core$time_field42894(var_args){
var args42895 = [];
var len__7651__auto___42962 = arguments.length;
var i__7652__auto___42963 = (0);
while(true){
if((i__7652__auto___42963 < len__7651__auto___42962)){
args42895.push((arguments[i__7652__auto___42963]));

var G__42964 = (i__7652__auto___42963 + (1));
i__7652__auto___42963 = G__42964;
continue;
} else {
}
break;
}

var G__42897 = args42895.length;
switch (G__42897) {
case 1:
return sablono.core.time_field42894.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field42894.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42895.length)].join('')));

}
});

sablono.core.time_field42894.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.time_field42894.call(null,name__10988__auto__,null);
});

sablono.core.time_field42894.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.time_field42894.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field42894);

/**
 * Creates a url input field.
 */
sablono.core.url_field42898 = (function sablono$core$url_field42898(var_args){
var args42899 = [];
var len__7651__auto___42966 = arguments.length;
var i__7652__auto___42967 = (0);
while(true){
if((i__7652__auto___42967 < len__7651__auto___42966)){
args42899.push((arguments[i__7652__auto___42967]));

var G__42968 = (i__7652__auto___42967 + (1));
i__7652__auto___42967 = G__42968;
continue;
} else {
}
break;
}

var G__42901 = args42899.length;
switch (G__42901) {
case 1:
return sablono.core.url_field42898.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field42898.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42899.length)].join('')));

}
});

sablono.core.url_field42898.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.url_field42898.call(null,name__10988__auto__,null);
});

sablono.core.url_field42898.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.url_field42898.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field42898);

/**
 * Creates a week input field.
 */
sablono.core.week_field42902 = (function sablono$core$week_field42902(var_args){
var args42903 = [];
var len__7651__auto___42970 = arguments.length;
var i__7652__auto___42971 = (0);
while(true){
if((i__7652__auto___42971 < len__7651__auto___42970)){
args42903.push((arguments[i__7652__auto___42971]));

var G__42972 = (i__7652__auto___42971 + (1));
i__7652__auto___42971 = G__42972;
continue;
} else {
}
break;
}

var G__42905 = args42903.length;
switch (G__42905) {
case 1:
return sablono.core.week_field42902.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field42902.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42903.length)].join('')));

}
});

sablono.core.week_field42902.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.week_field42902.call(null,name__10988__auto__,null);
});

sablono.core.week_field42902.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.week_field42902.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field42902);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box42974 = (function sablono$core$check_box42974(var_args){
var args42975 = [];
var len__7651__auto___42978 = arguments.length;
var i__7652__auto___42979 = (0);
while(true){
if((i__7652__auto___42979 < len__7651__auto___42978)){
args42975.push((arguments[i__7652__auto___42979]));

var G__42980 = (i__7652__auto___42979 + (1));
i__7652__auto___42979 = G__42980;
continue;
} else {
}
break;
}

var G__42977 = args42975.length;
switch (G__42977) {
case 1:
return sablono.core.check_box42974.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box42974.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box42974.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42975.length)].join('')));

}
});

sablono.core.check_box42974.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box42974.call(null,name,null);
});

sablono.core.check_box42974.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box42974.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box42974.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box42974.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box42974);
/**
 * Creates a radio button.
 */
sablono.core.radio_button42982 = (function sablono$core$radio_button42982(var_args){
var args42983 = [];
var len__7651__auto___42986 = arguments.length;
var i__7652__auto___42987 = (0);
while(true){
if((i__7652__auto___42987 < len__7651__auto___42986)){
args42983.push((arguments[i__7652__auto___42987]));

var G__42988 = (i__7652__auto___42987 + (1));
i__7652__auto___42987 = G__42988;
continue;
} else {
}
break;
}

var G__42985 = args42983.length;
switch (G__42985) {
case 1:
return sablono.core.radio_button42982.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button42982.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button42982.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42983.length)].join('')));

}
});

sablono.core.radio_button42982.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button42982.call(null,group,null);
});

sablono.core.radio_button42982.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button42982.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button42982.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button42982.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button42982);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options42990 = (function sablono$core$select_options42990(coll){
var iter__7326__auto__ = (function sablono$core$select_options42990_$_iter__43007(s__43008){
return (new cljs.core.LazySeq(null,(function (){
var s__43008__$1 = s__43008;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43008__$1);
if(temp__4657__auto__){
var s__43008__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43008__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__43008__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__43010 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__43009 = (0);
while(true){
if((i__43009 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__43009);
cljs.core.chunk_append.call(null,b__43010,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__43017 = x;
var text = cljs.core.nth.call(null,vec__43017,(0),null);
var val = cljs.core.nth.call(null,vec__43017,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__43017,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options42990.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__43023 = (i__43009 + (1));
i__43009 = G__43023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43010),sablono$core$select_options42990_$_iter__43007.call(null,cljs.core.chunk_rest.call(null,s__43008__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43010),null);
}
} else {
var x = cljs.core.first.call(null,s__43008__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__43020 = x;
var text = cljs.core.nth.call(null,vec__43020,(0),null);
var val = cljs.core.nth.call(null,vec__43020,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__43020,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options42990.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options42990_$_iter__43007.call(null,cljs.core.rest.call(null,s__43008__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7326__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options42990);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down43024 = (function sablono$core$drop_down43024(var_args){
var args43025 = [];
var len__7651__auto___43028 = arguments.length;
var i__7652__auto___43029 = (0);
while(true){
if((i__7652__auto___43029 < len__7651__auto___43028)){
args43025.push((arguments[i__7652__auto___43029]));

var G__43030 = (i__7652__auto___43029 + (1));
i__7652__auto___43029 = G__43030;
continue;
} else {
}
break;
}

var G__43027 = args43025.length;
switch (G__43027) {
case 2:
return sablono.core.drop_down43024.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down43024.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43025.length)].join('')));

}
});

sablono.core.drop_down43024.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down43024.call(null,name,options,null);
});

sablono.core.drop_down43024.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down43024.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down43024);
/**
 * Creates a text area element.
 */
sablono.core.text_area43032 = (function sablono$core$text_area43032(var_args){
var args43033 = [];
var len__7651__auto___43036 = arguments.length;
var i__7652__auto___43037 = (0);
while(true){
if((i__7652__auto___43037 < len__7651__auto___43036)){
args43033.push((arguments[i__7652__auto___43037]));

var G__43038 = (i__7652__auto___43037 + (1));
i__7652__auto___43037 = G__43038;
continue;
} else {
}
break;
}

var G__43035 = args43033.length;
switch (G__43035) {
case 1:
return sablono.core.text_area43032.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area43032.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43033.length)].join('')));

}
});

sablono.core.text_area43032.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area43032.call(null,name,null);
});

sablono.core.text_area43032.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area43032.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area43032);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label43040 = (function sablono$core$label43040(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label43040);
/**
 * Creates a submit button.
 */
sablono.core.submit_button43041 = (function sablono$core$submit_button43041(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button43041);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button43042 = (function sablono$core$reset_button43042(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button43042);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to43043 = (function sablono$core$form_to43043(var_args){
var args__7658__auto__ = [];
var len__7651__auto___43050 = arguments.length;
var i__7652__auto___43051 = (0);
while(true){
if((i__7652__auto___43051 < len__7651__auto___43050)){
args__7658__auto__.push((arguments[i__7652__auto___43051]));

var G__43052 = (i__7652__auto___43051 + (1));
i__7652__auto___43051 = G__43052;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to43043.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.form_to43043.cljs$core$IFn$_invoke$arity$variadic = (function (p__43046,body){
var vec__43047 = p__43046;
var method = cljs.core.nth.call(null,vec__43047,(0),null);
var action = cljs.core.nth.call(null,vec__43047,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to43043.cljs$lang$maxFixedArity = (1);

sablono.core.form_to43043.cljs$lang$applyTo = (function (seq43044){
var G__43045 = cljs.core.first.call(null,seq43044);
var seq43044__$1 = cljs.core.next.call(null,seq43044);
return sablono.core.form_to43043.cljs$core$IFn$_invoke$arity$variadic(G__43045,seq43044__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to43043);

//# sourceMappingURL=core.js.map?rel=1479783231070