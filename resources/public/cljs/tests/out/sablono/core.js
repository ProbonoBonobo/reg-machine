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
var G__65094__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__65091 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__65092 = cljs.core.seq.call(null,vec__65091);
var first__65093 = cljs.core.first.call(null,seq__65092);
var seq__65092__$1 = cljs.core.next.call(null,seq__65092);
var tag = first__65093;
var body = seq__65092__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__65094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65095__i = 0, G__65095__a = new Array(arguments.length -  0);
while (G__65095__i < G__65095__a.length) {G__65095__a[G__65095__i] = arguments[G__65095__i + 0]; ++G__65095__i;}
  args = new cljs.core.IndexedSeq(G__65095__a,0);
} 
return G__65094__delegate.call(this,args);};
G__65094.cljs$lang$maxFixedArity = 0;
G__65094.cljs$lang$applyTo = (function (arglist__65096){
var args = cljs.core.seq(arglist__65096);
return G__65094__delegate(args);
});
G__65094.cljs$core$IFn$_invoke$arity$variadic = G__65094__delegate;
return G__65094;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7326__auto__ = (function sablono$core$update_arglists_$_iter__65101(s__65102){
return (new cljs.core.LazySeq(null,(function (){
var s__65102__$1 = s__65102;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__65102__$1);
if(temp__4657__auto__){
var s__65102__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65102__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__65102__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__65104 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__65103 = (0);
while(true){
if((i__65103 < size__7325__auto__)){
var args = cljs.core._nth.call(null,c__7324__auto__,i__65103);
cljs.core.chunk_append.call(null,b__65104,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__65105 = (i__65103 + (1));
i__65103 = G__65105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65104),sablono$core$update_arglists_$_iter__65101.call(null,cljs.core.chunk_rest.call(null,s__65102__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65104),null);
}
} else {
var args = cljs.core.first.call(null,s__65102__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__65101.call(null,cljs.core.rest.call(null,s__65102__$2)));
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
var len__7651__auto___65111 = arguments.length;
var i__7652__auto___65112 = (0);
while(true){
if((i__7652__auto___65112 < len__7651__auto___65111)){
args__7658__auto__.push((arguments[i__7652__auto___65112]));

var G__65113 = (i__7652__auto___65112 + (1));
i__7652__auto___65112 = G__65113;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7326__auto__ = (function sablono$core$iter__65107(s__65108){
return (new cljs.core.LazySeq(null,(function (){
var s__65108__$1 = s__65108;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__65108__$1);
if(temp__4657__auto__){
var s__65108__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65108__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__65108__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__65110 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__65109 = (0);
while(true){
if((i__65109 < size__7325__auto__)){
var style = cljs.core._nth.call(null,c__7324__auto__,i__65109);
cljs.core.chunk_append.call(null,b__65110,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__65114 = (i__65109 + (1));
i__65109 = G__65114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65110),sablono$core$iter__65107.call(null,cljs.core.chunk_rest.call(null,s__65108__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65110),null);
}
} else {
var style = cljs.core.first.call(null,s__65108__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__65107.call(null,cljs.core.rest.call(null,s__65108__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq65106){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65106));
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
sablono.core.link_to65115 = (function sablono$core$link_to65115(var_args){
var args__7658__auto__ = [];
var len__7651__auto___65118 = arguments.length;
var i__7652__auto___65119 = (0);
while(true){
if((i__7652__auto___65119 < len__7651__auto___65118)){
args__7658__auto__.push((arguments[i__7652__auto___65119]));

var G__65120 = (i__7652__auto___65119 + (1));
i__7652__auto___65119 = G__65120;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to65115.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.link_to65115.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to65115.cljs$lang$maxFixedArity = (1);

sablono.core.link_to65115.cljs$lang$applyTo = (function (seq65116){
var G__65117 = cljs.core.first.call(null,seq65116);
var seq65116__$1 = cljs.core.next.call(null,seq65116);
return sablono.core.link_to65115.cljs$core$IFn$_invoke$arity$variadic(G__65117,seq65116__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to65115);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to65121 = (function sablono$core$mail_to65121(var_args){
var args__7658__auto__ = [];
var len__7651__auto___65128 = arguments.length;
var i__7652__auto___65129 = (0);
while(true){
if((i__7652__auto___65129 < len__7651__auto___65128)){
args__7658__auto__.push((arguments[i__7652__auto___65129]));

var G__65130 = (i__7652__auto___65129 + (1));
i__7652__auto___65129 = G__65130;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to65121.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.mail_to65121.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__65124){
var vec__65125 = p__65124;
var content = cljs.core.nth.call(null,vec__65125,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6543__auto__ = content;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to65121.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to65121.cljs$lang$applyTo = (function (seq65122){
var G__65123 = cljs.core.first.call(null,seq65122);
var seq65122__$1 = cljs.core.next.call(null,seq65122);
return sablono.core.mail_to65121.cljs$core$IFn$_invoke$arity$variadic(G__65123,seq65122__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to65121);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list65131 = (function sablono$core$unordered_list65131(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__7326__auto__ = (function sablono$core$unordered_list65131_$_iter__65136(s__65137){
return (new cljs.core.LazySeq(null,(function (){
var s__65137__$1 = s__65137;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__65137__$1);
if(temp__4657__auto__){
var s__65137__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65137__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__65137__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__65139 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__65138 = (0);
while(true){
if((i__65138 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__65138);
cljs.core.chunk_append.call(null,b__65139,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__65140 = (i__65138 + (1));
i__65138 = G__65140;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65139),sablono$core$unordered_list65131_$_iter__65136.call(null,cljs.core.chunk_rest.call(null,s__65137__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65139),null);
}
} else {
var x = cljs.core.first.call(null,s__65137__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list65131_$_iter__65136.call(null,cljs.core.rest.call(null,s__65137__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list65131);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list65141 = (function sablono$core$ordered_list65141(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__7326__auto__ = (function sablono$core$ordered_list65141_$_iter__65146(s__65147){
return (new cljs.core.LazySeq(null,(function (){
var s__65147__$1 = s__65147;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__65147__$1);
if(temp__4657__auto__){
var s__65147__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65147__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__65147__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__65149 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__65148 = (0);
while(true){
if((i__65148 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__65148);
cljs.core.chunk_append.call(null,b__65149,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__65150 = (i__65148 + (1));
i__65148 = G__65150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65149),sablono$core$ordered_list65141_$_iter__65146.call(null,cljs.core.chunk_rest.call(null,s__65147__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65149),null);
}
} else {
var x = cljs.core.first.call(null,s__65147__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list65141_$_iter__65146.call(null,cljs.core.rest.call(null,s__65147__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list65141);
/**
 * Create an image element.
 */
sablono.core.image65151 = (function sablono$core$image65151(var_args){
var args65152 = [];
var len__7651__auto___65155 = arguments.length;
var i__7652__auto___65156 = (0);
while(true){
if((i__7652__auto___65156 < len__7651__auto___65155)){
args65152.push((arguments[i__7652__auto___65156]));

var G__65157 = (i__7652__auto___65156 + (1));
i__7652__auto___65156 = G__65157;
continue;
} else {
}
break;
}

var G__65154 = args65152.length;
switch (G__65154) {
case 1:
return sablono.core.image65151.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image65151.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65152.length)].join('')));

}
});

sablono.core.image65151.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image65151.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image65151.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image65151);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__65159_SHARP_,p2__65160_SHARP_){
return [cljs.core.str(p1__65159_SHARP_),cljs.core.str("["),cljs.core.str(p2__65160_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__65161_SHARP_,p2__65162_SHARP_){
return [cljs.core.str(p1__65161_SHARP_),cljs.core.str("-"),cljs.core.str(p2__65162_SHARP_)].join('');
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
sablono.core.color_field65163 = (function sablono$core$color_field65163(var_args){
var args65164 = [];
var len__7651__auto___65231 = arguments.length;
var i__7652__auto___65232 = (0);
while(true){
if((i__7652__auto___65232 < len__7651__auto___65231)){
args65164.push((arguments[i__7652__auto___65232]));

var G__65233 = (i__7652__auto___65232 + (1));
i__7652__auto___65232 = G__65233;
continue;
} else {
}
break;
}

var G__65166 = args65164.length;
switch (G__65166) {
case 1:
return sablono.core.color_field65163.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field65163.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65164.length)].join('')));

}
});

sablono.core.color_field65163.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.color_field65163.call(null,name__10988__auto__,null);
});

sablono.core.color_field65163.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.color_field65163.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field65163);

/**
 * Creates a date input field.
 */
sablono.core.date_field65167 = (function sablono$core$date_field65167(var_args){
var args65168 = [];
var len__7651__auto___65235 = arguments.length;
var i__7652__auto___65236 = (0);
while(true){
if((i__7652__auto___65236 < len__7651__auto___65235)){
args65168.push((arguments[i__7652__auto___65236]));

var G__65237 = (i__7652__auto___65236 + (1));
i__7652__auto___65236 = G__65237;
continue;
} else {
}
break;
}

var G__65170 = args65168.length;
switch (G__65170) {
case 1:
return sablono.core.date_field65167.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field65167.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65168.length)].join('')));

}
});

sablono.core.date_field65167.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.date_field65167.call(null,name__10988__auto__,null);
});

sablono.core.date_field65167.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.date_field65167.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field65167);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field65171 = (function sablono$core$datetime_field65171(var_args){
var args65172 = [];
var len__7651__auto___65239 = arguments.length;
var i__7652__auto___65240 = (0);
while(true){
if((i__7652__auto___65240 < len__7651__auto___65239)){
args65172.push((arguments[i__7652__auto___65240]));

var G__65241 = (i__7652__auto___65240 + (1));
i__7652__auto___65240 = G__65241;
continue;
} else {
}
break;
}

var G__65174 = args65172.length;
switch (G__65174) {
case 1:
return sablono.core.datetime_field65171.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field65171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65172.length)].join('')));

}
});

sablono.core.datetime_field65171.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.datetime_field65171.call(null,name__10988__auto__,null);
});

sablono.core.datetime_field65171.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.datetime_field65171.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field65171);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field65175 = (function sablono$core$datetime_local_field65175(var_args){
var args65176 = [];
var len__7651__auto___65243 = arguments.length;
var i__7652__auto___65244 = (0);
while(true){
if((i__7652__auto___65244 < len__7651__auto___65243)){
args65176.push((arguments[i__7652__auto___65244]));

var G__65245 = (i__7652__auto___65244 + (1));
i__7652__auto___65244 = G__65245;
continue;
} else {
}
break;
}

var G__65178 = args65176.length;
switch (G__65178) {
case 1:
return sablono.core.datetime_local_field65175.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field65175.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65176.length)].join('')));

}
});

sablono.core.datetime_local_field65175.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.datetime_local_field65175.call(null,name__10988__auto__,null);
});

sablono.core.datetime_local_field65175.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.datetime_local_field65175.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field65175);

/**
 * Creates a email input field.
 */
sablono.core.email_field65179 = (function sablono$core$email_field65179(var_args){
var args65180 = [];
var len__7651__auto___65247 = arguments.length;
var i__7652__auto___65248 = (0);
while(true){
if((i__7652__auto___65248 < len__7651__auto___65247)){
args65180.push((arguments[i__7652__auto___65248]));

var G__65249 = (i__7652__auto___65248 + (1));
i__7652__auto___65248 = G__65249;
continue;
} else {
}
break;
}

var G__65182 = args65180.length;
switch (G__65182) {
case 1:
return sablono.core.email_field65179.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field65179.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65180.length)].join('')));

}
});

sablono.core.email_field65179.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.email_field65179.call(null,name__10988__auto__,null);
});

sablono.core.email_field65179.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.email_field65179.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field65179);

/**
 * Creates a file input field.
 */
sablono.core.file_field65183 = (function sablono$core$file_field65183(var_args){
var args65184 = [];
var len__7651__auto___65251 = arguments.length;
var i__7652__auto___65252 = (0);
while(true){
if((i__7652__auto___65252 < len__7651__auto___65251)){
args65184.push((arguments[i__7652__auto___65252]));

var G__65253 = (i__7652__auto___65252 + (1));
i__7652__auto___65252 = G__65253;
continue;
} else {
}
break;
}

var G__65186 = args65184.length;
switch (G__65186) {
case 1:
return sablono.core.file_field65183.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field65183.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65184.length)].join('')));

}
});

sablono.core.file_field65183.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.file_field65183.call(null,name__10988__auto__,null);
});

sablono.core.file_field65183.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.file_field65183.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field65183);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field65187 = (function sablono$core$hidden_field65187(var_args){
var args65188 = [];
var len__7651__auto___65255 = arguments.length;
var i__7652__auto___65256 = (0);
while(true){
if((i__7652__auto___65256 < len__7651__auto___65255)){
args65188.push((arguments[i__7652__auto___65256]));

var G__65257 = (i__7652__auto___65256 + (1));
i__7652__auto___65256 = G__65257;
continue;
} else {
}
break;
}

var G__65190 = args65188.length;
switch (G__65190) {
case 1:
return sablono.core.hidden_field65187.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field65187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65188.length)].join('')));

}
});

sablono.core.hidden_field65187.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.hidden_field65187.call(null,name__10988__auto__,null);
});

sablono.core.hidden_field65187.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.hidden_field65187.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field65187);

/**
 * Creates a month input field.
 */
sablono.core.month_field65191 = (function sablono$core$month_field65191(var_args){
var args65192 = [];
var len__7651__auto___65259 = arguments.length;
var i__7652__auto___65260 = (0);
while(true){
if((i__7652__auto___65260 < len__7651__auto___65259)){
args65192.push((arguments[i__7652__auto___65260]));

var G__65261 = (i__7652__auto___65260 + (1));
i__7652__auto___65260 = G__65261;
continue;
} else {
}
break;
}

var G__65194 = args65192.length;
switch (G__65194) {
case 1:
return sablono.core.month_field65191.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field65191.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65192.length)].join('')));

}
});

sablono.core.month_field65191.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.month_field65191.call(null,name__10988__auto__,null);
});

sablono.core.month_field65191.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.month_field65191.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field65191);

/**
 * Creates a number input field.
 */
sablono.core.number_field65195 = (function sablono$core$number_field65195(var_args){
var args65196 = [];
var len__7651__auto___65263 = arguments.length;
var i__7652__auto___65264 = (0);
while(true){
if((i__7652__auto___65264 < len__7651__auto___65263)){
args65196.push((arguments[i__7652__auto___65264]));

var G__65265 = (i__7652__auto___65264 + (1));
i__7652__auto___65264 = G__65265;
continue;
} else {
}
break;
}

var G__65198 = args65196.length;
switch (G__65198) {
case 1:
return sablono.core.number_field65195.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field65195.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65196.length)].join('')));

}
});

sablono.core.number_field65195.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.number_field65195.call(null,name__10988__auto__,null);
});

sablono.core.number_field65195.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.number_field65195.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field65195);

/**
 * Creates a password input field.
 */
sablono.core.password_field65199 = (function sablono$core$password_field65199(var_args){
var args65200 = [];
var len__7651__auto___65267 = arguments.length;
var i__7652__auto___65268 = (0);
while(true){
if((i__7652__auto___65268 < len__7651__auto___65267)){
args65200.push((arguments[i__7652__auto___65268]));

var G__65269 = (i__7652__auto___65268 + (1));
i__7652__auto___65268 = G__65269;
continue;
} else {
}
break;
}

var G__65202 = args65200.length;
switch (G__65202) {
case 1:
return sablono.core.password_field65199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field65199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65200.length)].join('')));

}
});

sablono.core.password_field65199.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.password_field65199.call(null,name__10988__auto__,null);
});

sablono.core.password_field65199.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.password_field65199.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field65199);

/**
 * Creates a range input field.
 */
sablono.core.range_field65203 = (function sablono$core$range_field65203(var_args){
var args65204 = [];
var len__7651__auto___65271 = arguments.length;
var i__7652__auto___65272 = (0);
while(true){
if((i__7652__auto___65272 < len__7651__auto___65271)){
args65204.push((arguments[i__7652__auto___65272]));

var G__65273 = (i__7652__auto___65272 + (1));
i__7652__auto___65272 = G__65273;
continue;
} else {
}
break;
}

var G__65206 = args65204.length;
switch (G__65206) {
case 1:
return sablono.core.range_field65203.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field65203.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65204.length)].join('')));

}
});

sablono.core.range_field65203.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.range_field65203.call(null,name__10988__auto__,null);
});

sablono.core.range_field65203.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.range_field65203.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field65203);

/**
 * Creates a search input field.
 */
sablono.core.search_field65207 = (function sablono$core$search_field65207(var_args){
var args65208 = [];
var len__7651__auto___65275 = arguments.length;
var i__7652__auto___65276 = (0);
while(true){
if((i__7652__auto___65276 < len__7651__auto___65275)){
args65208.push((arguments[i__7652__auto___65276]));

var G__65277 = (i__7652__auto___65276 + (1));
i__7652__auto___65276 = G__65277;
continue;
} else {
}
break;
}

var G__65210 = args65208.length;
switch (G__65210) {
case 1:
return sablono.core.search_field65207.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field65207.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65208.length)].join('')));

}
});

sablono.core.search_field65207.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.search_field65207.call(null,name__10988__auto__,null);
});

sablono.core.search_field65207.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.search_field65207.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field65207);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field65211 = (function sablono$core$tel_field65211(var_args){
var args65212 = [];
var len__7651__auto___65279 = arguments.length;
var i__7652__auto___65280 = (0);
while(true){
if((i__7652__auto___65280 < len__7651__auto___65279)){
args65212.push((arguments[i__7652__auto___65280]));

var G__65281 = (i__7652__auto___65280 + (1));
i__7652__auto___65280 = G__65281;
continue;
} else {
}
break;
}

var G__65214 = args65212.length;
switch (G__65214) {
case 1:
return sablono.core.tel_field65211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field65211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65212.length)].join('')));

}
});

sablono.core.tel_field65211.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.tel_field65211.call(null,name__10988__auto__,null);
});

sablono.core.tel_field65211.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.tel_field65211.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field65211);

/**
 * Creates a text input field.
 */
sablono.core.text_field65215 = (function sablono$core$text_field65215(var_args){
var args65216 = [];
var len__7651__auto___65283 = arguments.length;
var i__7652__auto___65284 = (0);
while(true){
if((i__7652__auto___65284 < len__7651__auto___65283)){
args65216.push((arguments[i__7652__auto___65284]));

var G__65285 = (i__7652__auto___65284 + (1));
i__7652__auto___65284 = G__65285;
continue;
} else {
}
break;
}

var G__65218 = args65216.length;
switch (G__65218) {
case 1:
return sablono.core.text_field65215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field65215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65216.length)].join('')));

}
});

sablono.core.text_field65215.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.text_field65215.call(null,name__10988__auto__,null);
});

sablono.core.text_field65215.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.text_field65215.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field65215);

/**
 * Creates a time input field.
 */
sablono.core.time_field65219 = (function sablono$core$time_field65219(var_args){
var args65220 = [];
var len__7651__auto___65287 = arguments.length;
var i__7652__auto___65288 = (0);
while(true){
if((i__7652__auto___65288 < len__7651__auto___65287)){
args65220.push((arguments[i__7652__auto___65288]));

var G__65289 = (i__7652__auto___65288 + (1));
i__7652__auto___65288 = G__65289;
continue;
} else {
}
break;
}

var G__65222 = args65220.length;
switch (G__65222) {
case 1:
return sablono.core.time_field65219.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field65219.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65220.length)].join('')));

}
});

sablono.core.time_field65219.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.time_field65219.call(null,name__10988__auto__,null);
});

sablono.core.time_field65219.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.time_field65219.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field65219);

/**
 * Creates a url input field.
 */
sablono.core.url_field65223 = (function sablono$core$url_field65223(var_args){
var args65224 = [];
var len__7651__auto___65291 = arguments.length;
var i__7652__auto___65292 = (0);
while(true){
if((i__7652__auto___65292 < len__7651__auto___65291)){
args65224.push((arguments[i__7652__auto___65292]));

var G__65293 = (i__7652__auto___65292 + (1));
i__7652__auto___65292 = G__65293;
continue;
} else {
}
break;
}

var G__65226 = args65224.length;
switch (G__65226) {
case 1:
return sablono.core.url_field65223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field65223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65224.length)].join('')));

}
});

sablono.core.url_field65223.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.url_field65223.call(null,name__10988__auto__,null);
});

sablono.core.url_field65223.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.url_field65223.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field65223);

/**
 * Creates a week input field.
 */
sablono.core.week_field65227 = (function sablono$core$week_field65227(var_args){
var args65228 = [];
var len__7651__auto___65295 = arguments.length;
var i__7652__auto___65296 = (0);
while(true){
if((i__7652__auto___65296 < len__7651__auto___65295)){
args65228.push((arguments[i__7652__auto___65296]));

var G__65297 = (i__7652__auto___65296 + (1));
i__7652__auto___65296 = G__65297;
continue;
} else {
}
break;
}

var G__65230 = args65228.length;
switch (G__65230) {
case 1:
return sablono.core.week_field65227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field65227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65228.length)].join('')));

}
});

sablono.core.week_field65227.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.week_field65227.call(null,name__10988__auto__,null);
});

sablono.core.week_field65227.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.week_field65227.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field65227);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box65299 = (function sablono$core$check_box65299(var_args){
var args65300 = [];
var len__7651__auto___65303 = arguments.length;
var i__7652__auto___65304 = (0);
while(true){
if((i__7652__auto___65304 < len__7651__auto___65303)){
args65300.push((arguments[i__7652__auto___65304]));

var G__65305 = (i__7652__auto___65304 + (1));
i__7652__auto___65304 = G__65305;
continue;
} else {
}
break;
}

var G__65302 = args65300.length;
switch (G__65302) {
case 1:
return sablono.core.check_box65299.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box65299.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box65299.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65300.length)].join('')));

}
});

sablono.core.check_box65299.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box65299.call(null,name,null);
});

sablono.core.check_box65299.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box65299.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box65299.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box65299.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box65299);
/**
 * Creates a radio button.
 */
sablono.core.radio_button65307 = (function sablono$core$radio_button65307(var_args){
var args65308 = [];
var len__7651__auto___65311 = arguments.length;
var i__7652__auto___65312 = (0);
while(true){
if((i__7652__auto___65312 < len__7651__auto___65311)){
args65308.push((arguments[i__7652__auto___65312]));

var G__65313 = (i__7652__auto___65312 + (1));
i__7652__auto___65312 = G__65313;
continue;
} else {
}
break;
}

var G__65310 = args65308.length;
switch (G__65310) {
case 1:
return sablono.core.radio_button65307.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button65307.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button65307.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65308.length)].join('')));

}
});

sablono.core.radio_button65307.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button65307.call(null,group,null);
});

sablono.core.radio_button65307.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button65307.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button65307.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button65307.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button65307);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options65315 = (function sablono$core$select_options65315(coll){
var iter__7326__auto__ = (function sablono$core$select_options65315_$_iter__65332(s__65333){
return (new cljs.core.LazySeq(null,(function (){
var s__65333__$1 = s__65333;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__65333__$1);
if(temp__4657__auto__){
var s__65333__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65333__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__65333__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__65335 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__65334 = (0);
while(true){
if((i__65334 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__65334);
cljs.core.chunk_append.call(null,b__65335,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__65342 = x;
var text = cljs.core.nth.call(null,vec__65342,(0),null);
var val = cljs.core.nth.call(null,vec__65342,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__65342,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options65315.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__65348 = (i__65334 + (1));
i__65334 = G__65348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65335),sablono$core$select_options65315_$_iter__65332.call(null,cljs.core.chunk_rest.call(null,s__65333__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65335),null);
}
} else {
var x = cljs.core.first.call(null,s__65333__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__65345 = x;
var text = cljs.core.nth.call(null,vec__65345,(0),null);
var val = cljs.core.nth.call(null,vec__65345,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__65345,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options65315.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options65315_$_iter__65332.call(null,cljs.core.rest.call(null,s__65333__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options65315);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down65349 = (function sablono$core$drop_down65349(var_args){
var args65350 = [];
var len__7651__auto___65353 = arguments.length;
var i__7652__auto___65354 = (0);
while(true){
if((i__7652__auto___65354 < len__7651__auto___65353)){
args65350.push((arguments[i__7652__auto___65354]));

var G__65355 = (i__7652__auto___65354 + (1));
i__7652__auto___65354 = G__65355;
continue;
} else {
}
break;
}

var G__65352 = args65350.length;
switch (G__65352) {
case 2:
return sablono.core.drop_down65349.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down65349.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65350.length)].join('')));

}
});

sablono.core.drop_down65349.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down65349.call(null,name,options,null);
});

sablono.core.drop_down65349.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down65349.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down65349);
/**
 * Creates a text area element.
 */
sablono.core.text_area65357 = (function sablono$core$text_area65357(var_args){
var args65358 = [];
var len__7651__auto___65361 = arguments.length;
var i__7652__auto___65362 = (0);
while(true){
if((i__7652__auto___65362 < len__7651__auto___65361)){
args65358.push((arguments[i__7652__auto___65362]));

var G__65363 = (i__7652__auto___65362 + (1));
i__7652__auto___65362 = G__65363;
continue;
} else {
}
break;
}

var G__65360 = args65358.length;
switch (G__65360) {
case 1:
return sablono.core.text_area65357.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area65357.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65358.length)].join('')));

}
});

sablono.core.text_area65357.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area65357.call(null,name,null);
});

sablono.core.text_area65357.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area65357.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area65357);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label65365 = (function sablono$core$label65365(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label65365);
/**
 * Creates a submit button.
 */
sablono.core.submit_button65366 = (function sablono$core$submit_button65366(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button65366);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button65367 = (function sablono$core$reset_button65367(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button65367);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to65368 = (function sablono$core$form_to65368(var_args){
var args__7658__auto__ = [];
var len__7651__auto___65375 = arguments.length;
var i__7652__auto___65376 = (0);
while(true){
if((i__7652__auto___65376 < len__7651__auto___65375)){
args__7658__auto__.push((arguments[i__7652__auto___65376]));

var G__65377 = (i__7652__auto___65376 + (1));
i__7652__auto___65376 = G__65377;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to65368.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.form_to65368.cljs$core$IFn$_invoke$arity$variadic = (function (p__65371,body){
var vec__65372 = p__65371;
var method = cljs.core.nth.call(null,vec__65372,(0),null);
var action = cljs.core.nth.call(null,vec__65372,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to65368.cljs$lang$maxFixedArity = (1);

sablono.core.form_to65368.cljs$lang$applyTo = (function (seq65369){
var G__65370 = cljs.core.first.call(null,seq65369);
var seq65369__$1 = cljs.core.next.call(null,seq65369);
return sablono.core.form_to65368.cljs$core$IFn$_invoke$arity$variadic(G__65370,seq65369__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to65368);

//# sourceMappingURL=core.js.map?rel=1479783842327