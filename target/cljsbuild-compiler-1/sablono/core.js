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
var G__62248__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__62245 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__62246 = cljs.core.seq.call(null,vec__62245);
var first__62247 = cljs.core.first.call(null,seq__62246);
var seq__62246__$1 = cljs.core.next.call(null,seq__62246);
var tag = first__62247;
var body = seq__62246__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__62248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62249__i = 0, G__62249__a = new Array(arguments.length -  0);
while (G__62249__i < G__62249__a.length) {G__62249__a[G__62249__i] = arguments[G__62249__i + 0]; ++G__62249__i;}
  args = new cljs.core.IndexedSeq(G__62249__a,0);
} 
return G__62248__delegate.call(this,args);};
G__62248.cljs$lang$maxFixedArity = 0;
G__62248.cljs$lang$applyTo = (function (arglist__62250){
var args = cljs.core.seq(arglist__62250);
return G__62248__delegate(args);
});
G__62248.cljs$core$IFn$_invoke$arity$variadic = G__62248__delegate;
return G__62248;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7326__auto__ = (function sablono$core$update_arglists_$_iter__62255(s__62256){
return (new cljs.core.LazySeq(null,(function (){
var s__62256__$1 = s__62256;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__62256__$1);
if(temp__4657__auto__){
var s__62256__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62256__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__62256__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__62258 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__62257 = (0);
while(true){
if((i__62257 < size__7325__auto__)){
var args = cljs.core._nth.call(null,c__7324__auto__,i__62257);
cljs.core.chunk_append.call(null,b__62258,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__62259 = (i__62257 + (1));
i__62257 = G__62259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62258),sablono$core$update_arglists_$_iter__62255.call(null,cljs.core.chunk_rest.call(null,s__62256__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62258),null);
}
} else {
var args = cljs.core.first.call(null,s__62256__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__62255.call(null,cljs.core.rest.call(null,s__62256__$2)));
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
var len__7651__auto___62265 = arguments.length;
var i__7652__auto___62266 = (0);
while(true){
if((i__7652__auto___62266 < len__7651__auto___62265)){
args__7658__auto__.push((arguments[i__7652__auto___62266]));

var G__62267 = (i__7652__auto___62266 + (1));
i__7652__auto___62266 = G__62267;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7326__auto__ = (function sablono$core$iter__62261(s__62262){
return (new cljs.core.LazySeq(null,(function (){
var s__62262__$1 = s__62262;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__62262__$1);
if(temp__4657__auto__){
var s__62262__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62262__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__62262__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__62264 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__62263 = (0);
while(true){
if((i__62263 < size__7325__auto__)){
var style = cljs.core._nth.call(null,c__7324__auto__,i__62263);
cljs.core.chunk_append.call(null,b__62264,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__62268 = (i__62263 + (1));
i__62263 = G__62268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62264),sablono$core$iter__62261.call(null,cljs.core.chunk_rest.call(null,s__62262__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62264),null);
}
} else {
var style = cljs.core.first.call(null,s__62262__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__62261.call(null,cljs.core.rest.call(null,s__62262__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq62260){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62260));
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
sablono.core.link_to62269 = (function sablono$core$link_to62269(var_args){
var args__7658__auto__ = [];
var len__7651__auto___62272 = arguments.length;
var i__7652__auto___62273 = (0);
while(true){
if((i__7652__auto___62273 < len__7651__auto___62272)){
args__7658__auto__.push((arguments[i__7652__auto___62273]));

var G__62274 = (i__7652__auto___62273 + (1));
i__7652__auto___62273 = G__62274;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to62269.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.link_to62269.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to62269.cljs$lang$maxFixedArity = (1);

sablono.core.link_to62269.cljs$lang$applyTo = (function (seq62270){
var G__62271 = cljs.core.first.call(null,seq62270);
var seq62270__$1 = cljs.core.next.call(null,seq62270);
return sablono.core.link_to62269.cljs$core$IFn$_invoke$arity$variadic(G__62271,seq62270__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to62269);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to62275 = (function sablono$core$mail_to62275(var_args){
var args__7658__auto__ = [];
var len__7651__auto___62282 = arguments.length;
var i__7652__auto___62283 = (0);
while(true){
if((i__7652__auto___62283 < len__7651__auto___62282)){
args__7658__auto__.push((arguments[i__7652__auto___62283]));

var G__62284 = (i__7652__auto___62283 + (1));
i__7652__auto___62283 = G__62284;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to62275.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.mail_to62275.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__62278){
var vec__62279 = p__62278;
var content = cljs.core.nth.call(null,vec__62279,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6543__auto__ = content;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to62275.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to62275.cljs$lang$applyTo = (function (seq62276){
var G__62277 = cljs.core.first.call(null,seq62276);
var seq62276__$1 = cljs.core.next.call(null,seq62276);
return sablono.core.mail_to62275.cljs$core$IFn$_invoke$arity$variadic(G__62277,seq62276__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to62275);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list62285 = (function sablono$core$unordered_list62285(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__7326__auto__ = (function sablono$core$unordered_list62285_$_iter__62290(s__62291){
return (new cljs.core.LazySeq(null,(function (){
var s__62291__$1 = s__62291;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__62291__$1);
if(temp__4657__auto__){
var s__62291__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62291__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__62291__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__62293 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__62292 = (0);
while(true){
if((i__62292 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__62292);
cljs.core.chunk_append.call(null,b__62293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__62294 = (i__62292 + (1));
i__62292 = G__62294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62293),sablono$core$unordered_list62285_$_iter__62290.call(null,cljs.core.chunk_rest.call(null,s__62291__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62293),null);
}
} else {
var x = cljs.core.first.call(null,s__62291__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list62285_$_iter__62290.call(null,cljs.core.rest.call(null,s__62291__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list62285);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list62295 = (function sablono$core$ordered_list62295(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__7326__auto__ = (function sablono$core$ordered_list62295_$_iter__62300(s__62301){
return (new cljs.core.LazySeq(null,(function (){
var s__62301__$1 = s__62301;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__62301__$1);
if(temp__4657__auto__){
var s__62301__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62301__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__62301__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__62303 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__62302 = (0);
while(true){
if((i__62302 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__62302);
cljs.core.chunk_append.call(null,b__62303,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__62304 = (i__62302 + (1));
i__62302 = G__62304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62303),sablono$core$ordered_list62295_$_iter__62300.call(null,cljs.core.chunk_rest.call(null,s__62301__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62303),null);
}
} else {
var x = cljs.core.first.call(null,s__62301__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list62295_$_iter__62300.call(null,cljs.core.rest.call(null,s__62301__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list62295);
/**
 * Create an image element.
 */
sablono.core.image62305 = (function sablono$core$image62305(var_args){
var args62306 = [];
var len__7651__auto___62309 = arguments.length;
var i__7652__auto___62310 = (0);
while(true){
if((i__7652__auto___62310 < len__7651__auto___62309)){
args62306.push((arguments[i__7652__auto___62310]));

var G__62311 = (i__7652__auto___62310 + (1));
i__7652__auto___62310 = G__62311;
continue;
} else {
}
break;
}

var G__62308 = args62306.length;
switch (G__62308) {
case 1:
return sablono.core.image62305.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image62305.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62306.length)].join('')));

}
});

sablono.core.image62305.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image62305.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image62305.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image62305);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__62313_SHARP_,p2__62314_SHARP_){
return [cljs.core.str(p1__62313_SHARP_),cljs.core.str("["),cljs.core.str(p2__62314_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__62315_SHARP_,p2__62316_SHARP_){
return [cljs.core.str(p1__62315_SHARP_),cljs.core.str("-"),cljs.core.str(p2__62316_SHARP_)].join('');
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
sablono.core.color_field62317 = (function sablono$core$color_field62317(var_args){
var args62318 = [];
var len__7651__auto___62385 = arguments.length;
var i__7652__auto___62386 = (0);
while(true){
if((i__7652__auto___62386 < len__7651__auto___62385)){
args62318.push((arguments[i__7652__auto___62386]));

var G__62387 = (i__7652__auto___62386 + (1));
i__7652__auto___62386 = G__62387;
continue;
} else {
}
break;
}

var G__62320 = args62318.length;
switch (G__62320) {
case 1:
return sablono.core.color_field62317.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field62317.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62318.length)].join('')));

}
});

sablono.core.color_field62317.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.color_field62317.call(null,name__14448__auto__,null);
});

sablono.core.color_field62317.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.color_field62317.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field62317);

/**
 * Creates a date input field.
 */
sablono.core.date_field62321 = (function sablono$core$date_field62321(var_args){
var args62322 = [];
var len__7651__auto___62389 = arguments.length;
var i__7652__auto___62390 = (0);
while(true){
if((i__7652__auto___62390 < len__7651__auto___62389)){
args62322.push((arguments[i__7652__auto___62390]));

var G__62391 = (i__7652__auto___62390 + (1));
i__7652__auto___62390 = G__62391;
continue;
} else {
}
break;
}

var G__62324 = args62322.length;
switch (G__62324) {
case 1:
return sablono.core.date_field62321.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field62321.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62322.length)].join('')));

}
});

sablono.core.date_field62321.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.date_field62321.call(null,name__14448__auto__,null);
});

sablono.core.date_field62321.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.date_field62321.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field62321);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field62325 = (function sablono$core$datetime_field62325(var_args){
var args62326 = [];
var len__7651__auto___62393 = arguments.length;
var i__7652__auto___62394 = (0);
while(true){
if((i__7652__auto___62394 < len__7651__auto___62393)){
args62326.push((arguments[i__7652__auto___62394]));

var G__62395 = (i__7652__auto___62394 + (1));
i__7652__auto___62394 = G__62395;
continue;
} else {
}
break;
}

var G__62328 = args62326.length;
switch (G__62328) {
case 1:
return sablono.core.datetime_field62325.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field62325.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62326.length)].join('')));

}
});

sablono.core.datetime_field62325.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.datetime_field62325.call(null,name__14448__auto__,null);
});

sablono.core.datetime_field62325.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.datetime_field62325.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field62325);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field62329 = (function sablono$core$datetime_local_field62329(var_args){
var args62330 = [];
var len__7651__auto___62397 = arguments.length;
var i__7652__auto___62398 = (0);
while(true){
if((i__7652__auto___62398 < len__7651__auto___62397)){
args62330.push((arguments[i__7652__auto___62398]));

var G__62399 = (i__7652__auto___62398 + (1));
i__7652__auto___62398 = G__62399;
continue;
} else {
}
break;
}

var G__62332 = args62330.length;
switch (G__62332) {
case 1:
return sablono.core.datetime_local_field62329.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field62329.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62330.length)].join('')));

}
});

sablono.core.datetime_local_field62329.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.datetime_local_field62329.call(null,name__14448__auto__,null);
});

sablono.core.datetime_local_field62329.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.datetime_local_field62329.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field62329);

/**
 * Creates a email input field.
 */
sablono.core.email_field62333 = (function sablono$core$email_field62333(var_args){
var args62334 = [];
var len__7651__auto___62401 = arguments.length;
var i__7652__auto___62402 = (0);
while(true){
if((i__7652__auto___62402 < len__7651__auto___62401)){
args62334.push((arguments[i__7652__auto___62402]));

var G__62403 = (i__7652__auto___62402 + (1));
i__7652__auto___62402 = G__62403;
continue;
} else {
}
break;
}

var G__62336 = args62334.length;
switch (G__62336) {
case 1:
return sablono.core.email_field62333.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field62333.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62334.length)].join('')));

}
});

sablono.core.email_field62333.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.email_field62333.call(null,name__14448__auto__,null);
});

sablono.core.email_field62333.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.email_field62333.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field62333);

/**
 * Creates a file input field.
 */
sablono.core.file_field62337 = (function sablono$core$file_field62337(var_args){
var args62338 = [];
var len__7651__auto___62405 = arguments.length;
var i__7652__auto___62406 = (0);
while(true){
if((i__7652__auto___62406 < len__7651__auto___62405)){
args62338.push((arguments[i__7652__auto___62406]));

var G__62407 = (i__7652__auto___62406 + (1));
i__7652__auto___62406 = G__62407;
continue;
} else {
}
break;
}

var G__62340 = args62338.length;
switch (G__62340) {
case 1:
return sablono.core.file_field62337.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field62337.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62338.length)].join('')));

}
});

sablono.core.file_field62337.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.file_field62337.call(null,name__14448__auto__,null);
});

sablono.core.file_field62337.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.file_field62337.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field62337);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field62341 = (function sablono$core$hidden_field62341(var_args){
var args62342 = [];
var len__7651__auto___62409 = arguments.length;
var i__7652__auto___62410 = (0);
while(true){
if((i__7652__auto___62410 < len__7651__auto___62409)){
args62342.push((arguments[i__7652__auto___62410]));

var G__62411 = (i__7652__auto___62410 + (1));
i__7652__auto___62410 = G__62411;
continue;
} else {
}
break;
}

var G__62344 = args62342.length;
switch (G__62344) {
case 1:
return sablono.core.hidden_field62341.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field62341.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62342.length)].join('')));

}
});

sablono.core.hidden_field62341.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.hidden_field62341.call(null,name__14448__auto__,null);
});

sablono.core.hidden_field62341.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.hidden_field62341.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field62341);

/**
 * Creates a month input field.
 */
sablono.core.month_field62345 = (function sablono$core$month_field62345(var_args){
var args62346 = [];
var len__7651__auto___62413 = arguments.length;
var i__7652__auto___62414 = (0);
while(true){
if((i__7652__auto___62414 < len__7651__auto___62413)){
args62346.push((arguments[i__7652__auto___62414]));

var G__62415 = (i__7652__auto___62414 + (1));
i__7652__auto___62414 = G__62415;
continue;
} else {
}
break;
}

var G__62348 = args62346.length;
switch (G__62348) {
case 1:
return sablono.core.month_field62345.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field62345.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62346.length)].join('')));

}
});

sablono.core.month_field62345.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.month_field62345.call(null,name__14448__auto__,null);
});

sablono.core.month_field62345.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.month_field62345.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field62345);

/**
 * Creates a number input field.
 */
sablono.core.number_field62349 = (function sablono$core$number_field62349(var_args){
var args62350 = [];
var len__7651__auto___62417 = arguments.length;
var i__7652__auto___62418 = (0);
while(true){
if((i__7652__auto___62418 < len__7651__auto___62417)){
args62350.push((arguments[i__7652__auto___62418]));

var G__62419 = (i__7652__auto___62418 + (1));
i__7652__auto___62418 = G__62419;
continue;
} else {
}
break;
}

var G__62352 = args62350.length;
switch (G__62352) {
case 1:
return sablono.core.number_field62349.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field62349.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62350.length)].join('')));

}
});

sablono.core.number_field62349.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.number_field62349.call(null,name__14448__auto__,null);
});

sablono.core.number_field62349.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.number_field62349.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field62349);

/**
 * Creates a password input field.
 */
sablono.core.password_field62353 = (function sablono$core$password_field62353(var_args){
var args62354 = [];
var len__7651__auto___62421 = arguments.length;
var i__7652__auto___62422 = (0);
while(true){
if((i__7652__auto___62422 < len__7651__auto___62421)){
args62354.push((arguments[i__7652__auto___62422]));

var G__62423 = (i__7652__auto___62422 + (1));
i__7652__auto___62422 = G__62423;
continue;
} else {
}
break;
}

var G__62356 = args62354.length;
switch (G__62356) {
case 1:
return sablono.core.password_field62353.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field62353.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62354.length)].join('')));

}
});

sablono.core.password_field62353.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.password_field62353.call(null,name__14448__auto__,null);
});

sablono.core.password_field62353.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.password_field62353.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field62353);

/**
 * Creates a range input field.
 */
sablono.core.range_field62357 = (function sablono$core$range_field62357(var_args){
var args62358 = [];
var len__7651__auto___62425 = arguments.length;
var i__7652__auto___62426 = (0);
while(true){
if((i__7652__auto___62426 < len__7651__auto___62425)){
args62358.push((arguments[i__7652__auto___62426]));

var G__62427 = (i__7652__auto___62426 + (1));
i__7652__auto___62426 = G__62427;
continue;
} else {
}
break;
}

var G__62360 = args62358.length;
switch (G__62360) {
case 1:
return sablono.core.range_field62357.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field62357.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62358.length)].join('')));

}
});

sablono.core.range_field62357.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.range_field62357.call(null,name__14448__auto__,null);
});

sablono.core.range_field62357.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.range_field62357.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field62357);

/**
 * Creates a search input field.
 */
sablono.core.search_field62361 = (function sablono$core$search_field62361(var_args){
var args62362 = [];
var len__7651__auto___62429 = arguments.length;
var i__7652__auto___62430 = (0);
while(true){
if((i__7652__auto___62430 < len__7651__auto___62429)){
args62362.push((arguments[i__7652__auto___62430]));

var G__62431 = (i__7652__auto___62430 + (1));
i__7652__auto___62430 = G__62431;
continue;
} else {
}
break;
}

var G__62364 = args62362.length;
switch (G__62364) {
case 1:
return sablono.core.search_field62361.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field62361.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62362.length)].join('')));

}
});

sablono.core.search_field62361.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.search_field62361.call(null,name__14448__auto__,null);
});

sablono.core.search_field62361.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.search_field62361.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field62361);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field62365 = (function sablono$core$tel_field62365(var_args){
var args62366 = [];
var len__7651__auto___62433 = arguments.length;
var i__7652__auto___62434 = (0);
while(true){
if((i__7652__auto___62434 < len__7651__auto___62433)){
args62366.push((arguments[i__7652__auto___62434]));

var G__62435 = (i__7652__auto___62434 + (1));
i__7652__auto___62434 = G__62435;
continue;
} else {
}
break;
}

var G__62368 = args62366.length;
switch (G__62368) {
case 1:
return sablono.core.tel_field62365.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field62365.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62366.length)].join('')));

}
});

sablono.core.tel_field62365.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.tel_field62365.call(null,name__14448__auto__,null);
});

sablono.core.tel_field62365.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.tel_field62365.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field62365);

/**
 * Creates a text input field.
 */
sablono.core.text_field62369 = (function sablono$core$text_field62369(var_args){
var args62370 = [];
var len__7651__auto___62437 = arguments.length;
var i__7652__auto___62438 = (0);
while(true){
if((i__7652__auto___62438 < len__7651__auto___62437)){
args62370.push((arguments[i__7652__auto___62438]));

var G__62439 = (i__7652__auto___62438 + (1));
i__7652__auto___62438 = G__62439;
continue;
} else {
}
break;
}

var G__62372 = args62370.length;
switch (G__62372) {
case 1:
return sablono.core.text_field62369.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field62369.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62370.length)].join('')));

}
});

sablono.core.text_field62369.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.text_field62369.call(null,name__14448__auto__,null);
});

sablono.core.text_field62369.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.text_field62369.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field62369);

/**
 * Creates a time input field.
 */
sablono.core.time_field62373 = (function sablono$core$time_field62373(var_args){
var args62374 = [];
var len__7651__auto___62441 = arguments.length;
var i__7652__auto___62442 = (0);
while(true){
if((i__7652__auto___62442 < len__7651__auto___62441)){
args62374.push((arguments[i__7652__auto___62442]));

var G__62443 = (i__7652__auto___62442 + (1));
i__7652__auto___62442 = G__62443;
continue;
} else {
}
break;
}

var G__62376 = args62374.length;
switch (G__62376) {
case 1:
return sablono.core.time_field62373.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field62373.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62374.length)].join('')));

}
});

sablono.core.time_field62373.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.time_field62373.call(null,name__14448__auto__,null);
});

sablono.core.time_field62373.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.time_field62373.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field62373);

/**
 * Creates a url input field.
 */
sablono.core.url_field62377 = (function sablono$core$url_field62377(var_args){
var args62378 = [];
var len__7651__auto___62445 = arguments.length;
var i__7652__auto___62446 = (0);
while(true){
if((i__7652__auto___62446 < len__7651__auto___62445)){
args62378.push((arguments[i__7652__auto___62446]));

var G__62447 = (i__7652__auto___62446 + (1));
i__7652__auto___62446 = G__62447;
continue;
} else {
}
break;
}

var G__62380 = args62378.length;
switch (G__62380) {
case 1:
return sablono.core.url_field62377.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field62377.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62378.length)].join('')));

}
});

sablono.core.url_field62377.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.url_field62377.call(null,name__14448__auto__,null);
});

sablono.core.url_field62377.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.url_field62377.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field62377);

/**
 * Creates a week input field.
 */
sablono.core.week_field62381 = (function sablono$core$week_field62381(var_args){
var args62382 = [];
var len__7651__auto___62449 = arguments.length;
var i__7652__auto___62450 = (0);
while(true){
if((i__7652__auto___62450 < len__7651__auto___62449)){
args62382.push((arguments[i__7652__auto___62450]));

var G__62451 = (i__7652__auto___62450 + (1));
i__7652__auto___62450 = G__62451;
continue;
} else {
}
break;
}

var G__62384 = args62382.length;
switch (G__62384) {
case 1:
return sablono.core.week_field62381.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field62381.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62382.length)].join('')));

}
});

sablono.core.week_field62381.cljs$core$IFn$_invoke$arity$1 = (function (name__14448__auto__){
return sablono.core.week_field62381.call(null,name__14448__auto__,null);
});

sablono.core.week_field62381.cljs$core$IFn$_invoke$arity$2 = (function (name__14448__auto__,value__14449__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__14448__auto__,value__14449__auto__);
});

sablono.core.week_field62381.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field62381);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box62453 = (function sablono$core$check_box62453(var_args){
var args62454 = [];
var len__7651__auto___62457 = arguments.length;
var i__7652__auto___62458 = (0);
while(true){
if((i__7652__auto___62458 < len__7651__auto___62457)){
args62454.push((arguments[i__7652__auto___62458]));

var G__62459 = (i__7652__auto___62458 + (1));
i__7652__auto___62458 = G__62459;
continue;
} else {
}
break;
}

var G__62456 = args62454.length;
switch (G__62456) {
case 1:
return sablono.core.check_box62453.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box62453.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box62453.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62454.length)].join('')));

}
});

sablono.core.check_box62453.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box62453.call(null,name,null);
});

sablono.core.check_box62453.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box62453.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box62453.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box62453.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box62453);
/**
 * Creates a radio button.
 */
sablono.core.radio_button62461 = (function sablono$core$radio_button62461(var_args){
var args62462 = [];
var len__7651__auto___62465 = arguments.length;
var i__7652__auto___62466 = (0);
while(true){
if((i__7652__auto___62466 < len__7651__auto___62465)){
args62462.push((arguments[i__7652__auto___62466]));

var G__62467 = (i__7652__auto___62466 + (1));
i__7652__auto___62466 = G__62467;
continue;
} else {
}
break;
}

var G__62464 = args62462.length;
switch (G__62464) {
case 1:
return sablono.core.radio_button62461.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button62461.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button62461.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62462.length)].join('')));

}
});

sablono.core.radio_button62461.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button62461.call(null,group,null);
});

sablono.core.radio_button62461.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button62461.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button62461.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button62461.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button62461);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options62469 = (function sablono$core$select_options62469(coll){
var iter__7326__auto__ = (function sablono$core$select_options62469_$_iter__62486(s__62487){
return (new cljs.core.LazySeq(null,(function (){
var s__62487__$1 = s__62487;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__62487__$1);
if(temp__4657__auto__){
var s__62487__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62487__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__62487__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__62489 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__62488 = (0);
while(true){
if((i__62488 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__62488);
cljs.core.chunk_append.call(null,b__62489,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__62496 = x;
var text = cljs.core.nth.call(null,vec__62496,(0),null);
var val = cljs.core.nth.call(null,vec__62496,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__62496,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options62469.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__62502 = (i__62488 + (1));
i__62488 = G__62502;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62489),sablono$core$select_options62469_$_iter__62486.call(null,cljs.core.chunk_rest.call(null,s__62487__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62489),null);
}
} else {
var x = cljs.core.first.call(null,s__62487__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__62499 = x;
var text = cljs.core.nth.call(null,vec__62499,(0),null);
var val = cljs.core.nth.call(null,vec__62499,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__62499,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options62469.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options62469_$_iter__62486.call(null,cljs.core.rest.call(null,s__62487__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options62469);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down62503 = (function sablono$core$drop_down62503(var_args){
var args62504 = [];
var len__7651__auto___62507 = arguments.length;
var i__7652__auto___62508 = (0);
while(true){
if((i__7652__auto___62508 < len__7651__auto___62507)){
args62504.push((arguments[i__7652__auto___62508]));

var G__62509 = (i__7652__auto___62508 + (1));
i__7652__auto___62508 = G__62509;
continue;
} else {
}
break;
}

var G__62506 = args62504.length;
switch (G__62506) {
case 2:
return sablono.core.drop_down62503.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down62503.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62504.length)].join('')));

}
});

sablono.core.drop_down62503.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down62503.call(null,name,options,null);
});

sablono.core.drop_down62503.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down62503.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down62503);
/**
 * Creates a text area element.
 */
sablono.core.text_area62511 = (function sablono$core$text_area62511(var_args){
var args62512 = [];
var len__7651__auto___62515 = arguments.length;
var i__7652__auto___62516 = (0);
while(true){
if((i__7652__auto___62516 < len__7651__auto___62515)){
args62512.push((arguments[i__7652__auto___62516]));

var G__62517 = (i__7652__auto___62516 + (1));
i__7652__auto___62516 = G__62517;
continue;
} else {
}
break;
}

var G__62514 = args62512.length;
switch (G__62514) {
case 1:
return sablono.core.text_area62511.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area62511.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62512.length)].join('')));

}
});

sablono.core.text_area62511.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area62511.call(null,name,null);
});

sablono.core.text_area62511.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area62511.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area62511);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label62519 = (function sablono$core$label62519(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label62519);
/**
 * Creates a submit button.
 */
sablono.core.submit_button62520 = (function sablono$core$submit_button62520(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button62520);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button62521 = (function sablono$core$reset_button62521(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button62521);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to62522 = (function sablono$core$form_to62522(var_args){
var args__7658__auto__ = [];
var len__7651__auto___62529 = arguments.length;
var i__7652__auto___62530 = (0);
while(true){
if((i__7652__auto___62530 < len__7651__auto___62529)){
args__7658__auto__.push((arguments[i__7652__auto___62530]));

var G__62531 = (i__7652__auto___62530 + (1));
i__7652__auto___62530 = G__62531;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to62522.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.form_to62522.cljs$core$IFn$_invoke$arity$variadic = (function (p__62525,body){
var vec__62526 = p__62525;
var method = cljs.core.nth.call(null,vec__62526,(0),null);
var action = cljs.core.nth.call(null,vec__62526,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to62522.cljs$lang$maxFixedArity = (1);

sablono.core.form_to62522.cljs$lang$applyTo = (function (seq62523){
var G__62524 = cljs.core.first.call(null,seq62523);
var seq62523__$1 = cljs.core.next.call(null,seq62523);
return sablono.core.form_to62522.cljs$core$IFn$_invoke$arity$variadic(G__62524,seq62523__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to62522);

//# sourceMappingURL=core.js.map