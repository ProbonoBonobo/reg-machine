// Compiled by ClojureScript 1.9.227 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__28306__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__28303 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__28304 = cljs.core.seq.call(null,vec__28303);
var first__28305 = cljs.core.first.call(null,seq__28304);
var seq__28304__$1 = cljs.core.next.call(null,seq__28304);
var tag = first__28305;
var body = seq__28304__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__28306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28307__i = 0, G__28307__a = new Array(arguments.length -  0);
while (G__28307__i < G__28307__a.length) {G__28307__a[G__28307__i] = arguments[G__28307__i + 0]; ++G__28307__i;}
  args = new cljs.core.IndexedSeq(G__28307__a,0);
} 
return G__28306__delegate.call(this,args);};
G__28306.cljs$lang$maxFixedArity = 0;
G__28306.cljs$lang$applyTo = (function (arglist__28308){
var args = cljs.core.seq(arglist__28308);
return G__28306__delegate(args);
});
G__28306.cljs$core$IFn$_invoke$arity$variadic = G__28306__delegate;
return G__28306;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7184__auto__ = (function sablono$core$update_arglists_$_iter__28313(s__28314){
return (new cljs.core.LazySeq(null,(function (){
var s__28314__$1 = s__28314;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28314__$1);
if(temp__4657__auto__){
var s__28314__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28314__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__28314__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__28316 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__28315 = (0);
while(true){
if((i__28315 < size__7183__auto__)){
var args = cljs.core._nth.call(null,c__7182__auto__,i__28315);
cljs.core.chunk_append.call(null,b__28316,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__28317 = (i__28315 + (1));
i__28315 = G__28317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28316),sablono$core$update_arglists_$_iter__28313.call(null,cljs.core.chunk_rest.call(null,s__28314__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28316),null);
}
} else {
var args = cljs.core.first.call(null,s__28314__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__28313.call(null,cljs.core.rest.call(null,s__28314__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7486__auto__ = [];
var len__7479__auto___28323 = arguments.length;
var i__7480__auto___28324 = (0);
while(true){
if((i__7480__auto___28324 < len__7479__auto___28323)){
args__7486__auto__.push((arguments[i__7480__auto___28324]));

var G__28325 = (i__7480__auto___28324 + (1));
i__7480__auto___28324 = G__28325;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7184__auto__ = (function sablono$core$iter__28319(s__28320){
return (new cljs.core.LazySeq(null,(function (){
var s__28320__$1 = s__28320;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28320__$1);
if(temp__4657__auto__){
var s__28320__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28320__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__28320__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__28322 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__28321 = (0);
while(true){
if((i__28321 < size__7183__auto__)){
var style = cljs.core._nth.call(null,c__7182__auto__,i__28321);
cljs.core.chunk_append.call(null,b__28322,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__28326 = (i__28321 + (1));
i__28321 = G__28326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28322),sablono$core$iter__28319.call(null,cljs.core.chunk_rest.call(null,s__28320__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28322),null);
}
} else {
var style = cljs.core.first.call(null,s__28320__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__28319.call(null,cljs.core.rest.call(null,s__28320__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq28318){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28318));
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
sablono.core.link_to28327 = (function sablono$core$link_to28327(var_args){
var args__7486__auto__ = [];
var len__7479__auto___28330 = arguments.length;
var i__7480__auto___28331 = (0);
while(true){
if((i__7480__auto___28331 < len__7479__auto___28330)){
args__7486__auto__.push((arguments[i__7480__auto___28331]));

var G__28332 = (i__7480__auto___28331 + (1));
i__7480__auto___28331 = G__28332;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to28327.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

sablono.core.link_to28327.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to28327.cljs$lang$maxFixedArity = (1);

sablono.core.link_to28327.cljs$lang$applyTo = (function (seq28328){
var G__28329 = cljs.core.first.call(null,seq28328);
var seq28328__$1 = cljs.core.next.call(null,seq28328);
return sablono.core.link_to28327.cljs$core$IFn$_invoke$arity$variadic(G__28329,seq28328__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28327);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to28333 = (function sablono$core$mail_to28333(var_args){
var args__7486__auto__ = [];
var len__7479__auto___28340 = arguments.length;
var i__7480__auto___28341 = (0);
while(true){
if((i__7480__auto___28341 < len__7479__auto___28340)){
args__7486__auto__.push((arguments[i__7480__auto___28341]));

var G__28342 = (i__7480__auto___28341 + (1));
i__7480__auto___28341 = G__28342;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to28333.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

sablono.core.mail_to28333.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__28336){
var vec__28337 = p__28336;
var content = cljs.core.nth.call(null,vec__28337,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6404__auto__ = content;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to28333.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to28333.cljs$lang$applyTo = (function (seq28334){
var G__28335 = cljs.core.first.call(null,seq28334);
var seq28334__$1 = cljs.core.next.call(null,seq28334);
return sablono.core.mail_to28333.cljs$core$IFn$_invoke$arity$variadic(G__28335,seq28334__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28333);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list28343 = (function sablono$core$unordered_list28343(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__7184__auto__ = (function sablono$core$unordered_list28343_$_iter__28348(s__28349){
return (new cljs.core.LazySeq(null,(function (){
var s__28349__$1 = s__28349;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28349__$1);
if(temp__4657__auto__){
var s__28349__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28349__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__28349__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__28351 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__28350 = (0);
while(true){
if((i__28350 < size__7183__auto__)){
var x = cljs.core._nth.call(null,c__7182__auto__,i__28350);
cljs.core.chunk_append.call(null,b__28351,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28352 = (i__28350 + (1));
i__28350 = G__28352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28351),sablono$core$unordered_list28343_$_iter__28348.call(null,cljs.core.chunk_rest.call(null,s__28349__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28351),null);
}
} else {
var x = cljs.core.first.call(null,s__28349__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list28343_$_iter__28348.call(null,cljs.core.rest.call(null,s__28349__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28343);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list28353 = (function sablono$core$ordered_list28353(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__7184__auto__ = (function sablono$core$ordered_list28353_$_iter__28358(s__28359){
return (new cljs.core.LazySeq(null,(function (){
var s__28359__$1 = s__28359;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28359__$1);
if(temp__4657__auto__){
var s__28359__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28359__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__28359__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__28361 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__28360 = (0);
while(true){
if((i__28360 < size__7183__auto__)){
var x = cljs.core._nth.call(null,c__7182__auto__,i__28360);
cljs.core.chunk_append.call(null,b__28361,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28362 = (i__28360 + (1));
i__28360 = G__28362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28361),sablono$core$ordered_list28353_$_iter__28358.call(null,cljs.core.chunk_rest.call(null,s__28359__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28361),null);
}
} else {
var x = cljs.core.first.call(null,s__28359__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list28353_$_iter__28358.call(null,cljs.core.rest.call(null,s__28359__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28353);
/**
 * Create an image element.
 */
sablono.core.image28363 = (function sablono$core$image28363(var_args){
var args28364 = [];
var len__7479__auto___28367 = arguments.length;
var i__7480__auto___28368 = (0);
while(true){
if((i__7480__auto___28368 < len__7479__auto___28367)){
args28364.push((arguments[i__7480__auto___28368]));

var G__28369 = (i__7480__auto___28368 + (1));
i__7480__auto___28368 = G__28369;
continue;
} else {
}
break;
}

var G__28366 = args28364.length;
switch (G__28366) {
case 1:
return sablono.core.image28363.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image28363.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28364.length)].join('')));

}
});

sablono.core.image28363.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image28363.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image28363.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28363);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__28371_SHARP_,p2__28372_SHARP_){
return [cljs.core.str(p1__28371_SHARP_),cljs.core.str("["),cljs.core.str(p2__28372_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__28373_SHARP_,p2__28374_SHARP_){
return [cljs.core.str(p1__28373_SHARP_),cljs.core.str("-"),cljs.core.str(p2__28374_SHARP_)].join('');
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
sablono.core.color_field28375 = (function sablono$core$color_field28375(var_args){
var args28376 = [];
var len__7479__auto___28443 = arguments.length;
var i__7480__auto___28444 = (0);
while(true){
if((i__7480__auto___28444 < len__7479__auto___28443)){
args28376.push((arguments[i__7480__auto___28444]));

var G__28445 = (i__7480__auto___28444 + (1));
i__7480__auto___28444 = G__28445;
continue;
} else {
}
break;
}

var G__28378 = args28376.length;
switch (G__28378) {
case 1:
return sablono.core.color_field28375.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28375.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28376.length)].join('')));

}
});

sablono.core.color_field28375.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.color_field28375.call(null,name__22001__auto__,null);
});

sablono.core.color_field28375.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.color_field28375.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28375);

/**
 * Creates a date input field.
 */
sablono.core.date_field28379 = (function sablono$core$date_field28379(var_args){
var args28380 = [];
var len__7479__auto___28447 = arguments.length;
var i__7480__auto___28448 = (0);
while(true){
if((i__7480__auto___28448 < len__7479__auto___28447)){
args28380.push((arguments[i__7480__auto___28448]));

var G__28449 = (i__7480__auto___28448 + (1));
i__7480__auto___28448 = G__28449;
continue;
} else {
}
break;
}

var G__28382 = args28380.length;
switch (G__28382) {
case 1:
return sablono.core.date_field28379.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28379.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28380.length)].join('')));

}
});

sablono.core.date_field28379.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.date_field28379.call(null,name__22001__auto__,null);
});

sablono.core.date_field28379.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.date_field28379.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28379);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28383 = (function sablono$core$datetime_field28383(var_args){
var args28384 = [];
var len__7479__auto___28451 = arguments.length;
var i__7480__auto___28452 = (0);
while(true){
if((i__7480__auto___28452 < len__7479__auto___28451)){
args28384.push((arguments[i__7480__auto___28452]));

var G__28453 = (i__7480__auto___28452 + (1));
i__7480__auto___28452 = G__28453;
continue;
} else {
}
break;
}

var G__28386 = args28384.length;
switch (G__28386) {
case 1:
return sablono.core.datetime_field28383.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28383.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28384.length)].join('')));

}
});

sablono.core.datetime_field28383.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.datetime_field28383.call(null,name__22001__auto__,null);
});

sablono.core.datetime_field28383.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.datetime_field28383.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28383);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28387 = (function sablono$core$datetime_local_field28387(var_args){
var args28388 = [];
var len__7479__auto___28455 = arguments.length;
var i__7480__auto___28456 = (0);
while(true){
if((i__7480__auto___28456 < len__7479__auto___28455)){
args28388.push((arguments[i__7480__auto___28456]));

var G__28457 = (i__7480__auto___28456 + (1));
i__7480__auto___28456 = G__28457;
continue;
} else {
}
break;
}

var G__28390 = args28388.length;
switch (G__28390) {
case 1:
return sablono.core.datetime_local_field28387.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28387.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28388.length)].join('')));

}
});

sablono.core.datetime_local_field28387.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.datetime_local_field28387.call(null,name__22001__auto__,null);
});

sablono.core.datetime_local_field28387.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.datetime_local_field28387.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28387);

/**
 * Creates a email input field.
 */
sablono.core.email_field28391 = (function sablono$core$email_field28391(var_args){
var args28392 = [];
var len__7479__auto___28459 = arguments.length;
var i__7480__auto___28460 = (0);
while(true){
if((i__7480__auto___28460 < len__7479__auto___28459)){
args28392.push((arguments[i__7480__auto___28460]));

var G__28461 = (i__7480__auto___28460 + (1));
i__7480__auto___28460 = G__28461;
continue;
} else {
}
break;
}

var G__28394 = args28392.length;
switch (G__28394) {
case 1:
return sablono.core.email_field28391.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28391.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28392.length)].join('')));

}
});

sablono.core.email_field28391.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.email_field28391.call(null,name__22001__auto__,null);
});

sablono.core.email_field28391.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.email_field28391.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28391);

/**
 * Creates a file input field.
 */
sablono.core.file_field28395 = (function sablono$core$file_field28395(var_args){
var args28396 = [];
var len__7479__auto___28463 = arguments.length;
var i__7480__auto___28464 = (0);
while(true){
if((i__7480__auto___28464 < len__7479__auto___28463)){
args28396.push((arguments[i__7480__auto___28464]));

var G__28465 = (i__7480__auto___28464 + (1));
i__7480__auto___28464 = G__28465;
continue;
} else {
}
break;
}

var G__28398 = args28396.length;
switch (G__28398) {
case 1:
return sablono.core.file_field28395.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field28395.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28396.length)].join('')));

}
});

sablono.core.file_field28395.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.file_field28395.call(null,name__22001__auto__,null);
});

sablono.core.file_field28395.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.file_field28395.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28395);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field28399 = (function sablono$core$hidden_field28399(var_args){
var args28400 = [];
var len__7479__auto___28467 = arguments.length;
var i__7480__auto___28468 = (0);
while(true){
if((i__7480__auto___28468 < len__7479__auto___28467)){
args28400.push((arguments[i__7480__auto___28468]));

var G__28469 = (i__7480__auto___28468 + (1));
i__7480__auto___28468 = G__28469;
continue;
} else {
}
break;
}

var G__28402 = args28400.length;
switch (G__28402) {
case 1:
return sablono.core.hidden_field28399.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field28399.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28400.length)].join('')));

}
});

sablono.core.hidden_field28399.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.hidden_field28399.call(null,name__22001__auto__,null);
});

sablono.core.hidden_field28399.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.hidden_field28399.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28399);

/**
 * Creates a month input field.
 */
sablono.core.month_field28403 = (function sablono$core$month_field28403(var_args){
var args28404 = [];
var len__7479__auto___28471 = arguments.length;
var i__7480__auto___28472 = (0);
while(true){
if((i__7480__auto___28472 < len__7479__auto___28471)){
args28404.push((arguments[i__7480__auto___28472]));

var G__28473 = (i__7480__auto___28472 + (1));
i__7480__auto___28472 = G__28473;
continue;
} else {
}
break;
}

var G__28406 = args28404.length;
switch (G__28406) {
case 1:
return sablono.core.month_field28403.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field28403.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28404.length)].join('')));

}
});

sablono.core.month_field28403.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.month_field28403.call(null,name__22001__auto__,null);
});

sablono.core.month_field28403.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.month_field28403.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28403);

/**
 * Creates a number input field.
 */
sablono.core.number_field28407 = (function sablono$core$number_field28407(var_args){
var args28408 = [];
var len__7479__auto___28475 = arguments.length;
var i__7480__auto___28476 = (0);
while(true){
if((i__7480__auto___28476 < len__7479__auto___28475)){
args28408.push((arguments[i__7480__auto___28476]));

var G__28477 = (i__7480__auto___28476 + (1));
i__7480__auto___28476 = G__28477;
continue;
} else {
}
break;
}

var G__28410 = args28408.length;
switch (G__28410) {
case 1:
return sablono.core.number_field28407.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field28407.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28408.length)].join('')));

}
});

sablono.core.number_field28407.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.number_field28407.call(null,name__22001__auto__,null);
});

sablono.core.number_field28407.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.number_field28407.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28407);

/**
 * Creates a password input field.
 */
sablono.core.password_field28411 = (function sablono$core$password_field28411(var_args){
var args28412 = [];
var len__7479__auto___28479 = arguments.length;
var i__7480__auto___28480 = (0);
while(true){
if((i__7480__auto___28480 < len__7479__auto___28479)){
args28412.push((arguments[i__7480__auto___28480]));

var G__28481 = (i__7480__auto___28480 + (1));
i__7480__auto___28480 = G__28481;
continue;
} else {
}
break;
}

var G__28414 = args28412.length;
switch (G__28414) {
case 1:
return sablono.core.password_field28411.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field28411.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28412.length)].join('')));

}
});

sablono.core.password_field28411.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.password_field28411.call(null,name__22001__auto__,null);
});

sablono.core.password_field28411.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.password_field28411.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28411);

/**
 * Creates a range input field.
 */
sablono.core.range_field28415 = (function sablono$core$range_field28415(var_args){
var args28416 = [];
var len__7479__auto___28483 = arguments.length;
var i__7480__auto___28484 = (0);
while(true){
if((i__7480__auto___28484 < len__7479__auto___28483)){
args28416.push((arguments[i__7480__auto___28484]));

var G__28485 = (i__7480__auto___28484 + (1));
i__7480__auto___28484 = G__28485;
continue;
} else {
}
break;
}

var G__28418 = args28416.length;
switch (G__28418) {
case 1:
return sablono.core.range_field28415.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field28415.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28416.length)].join('')));

}
});

sablono.core.range_field28415.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.range_field28415.call(null,name__22001__auto__,null);
});

sablono.core.range_field28415.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.range_field28415.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28415);

/**
 * Creates a search input field.
 */
sablono.core.search_field28419 = (function sablono$core$search_field28419(var_args){
var args28420 = [];
var len__7479__auto___28487 = arguments.length;
var i__7480__auto___28488 = (0);
while(true){
if((i__7480__auto___28488 < len__7479__auto___28487)){
args28420.push((arguments[i__7480__auto___28488]));

var G__28489 = (i__7480__auto___28488 + (1));
i__7480__auto___28488 = G__28489;
continue;
} else {
}
break;
}

var G__28422 = args28420.length;
switch (G__28422) {
case 1:
return sablono.core.search_field28419.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field28419.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28420.length)].join('')));

}
});

sablono.core.search_field28419.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.search_field28419.call(null,name__22001__auto__,null);
});

sablono.core.search_field28419.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.search_field28419.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28419);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28423 = (function sablono$core$tel_field28423(var_args){
var args28424 = [];
var len__7479__auto___28491 = arguments.length;
var i__7480__auto___28492 = (0);
while(true){
if((i__7480__auto___28492 < len__7479__auto___28491)){
args28424.push((arguments[i__7480__auto___28492]));

var G__28493 = (i__7480__auto___28492 + (1));
i__7480__auto___28492 = G__28493;
continue;
} else {
}
break;
}

var G__28426 = args28424.length;
switch (G__28426) {
case 1:
return sablono.core.tel_field28423.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28423.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28424.length)].join('')));

}
});

sablono.core.tel_field28423.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.tel_field28423.call(null,name__22001__auto__,null);
});

sablono.core.tel_field28423.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.tel_field28423.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28423);

/**
 * Creates a text input field.
 */
sablono.core.text_field28427 = (function sablono$core$text_field28427(var_args){
var args28428 = [];
var len__7479__auto___28495 = arguments.length;
var i__7480__auto___28496 = (0);
while(true){
if((i__7480__auto___28496 < len__7479__auto___28495)){
args28428.push((arguments[i__7480__auto___28496]));

var G__28497 = (i__7480__auto___28496 + (1));
i__7480__auto___28496 = G__28497;
continue;
} else {
}
break;
}

var G__28430 = args28428.length;
switch (G__28430) {
case 1:
return sablono.core.text_field28427.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28427.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28428.length)].join('')));

}
});

sablono.core.text_field28427.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.text_field28427.call(null,name__22001__auto__,null);
});

sablono.core.text_field28427.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.text_field28427.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28427);

/**
 * Creates a time input field.
 */
sablono.core.time_field28431 = (function sablono$core$time_field28431(var_args){
var args28432 = [];
var len__7479__auto___28499 = arguments.length;
var i__7480__auto___28500 = (0);
while(true){
if((i__7480__auto___28500 < len__7479__auto___28499)){
args28432.push((arguments[i__7480__auto___28500]));

var G__28501 = (i__7480__auto___28500 + (1));
i__7480__auto___28500 = G__28501;
continue;
} else {
}
break;
}

var G__28434 = args28432.length;
switch (G__28434) {
case 1:
return sablono.core.time_field28431.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28431.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28432.length)].join('')));

}
});

sablono.core.time_field28431.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.time_field28431.call(null,name__22001__auto__,null);
});

sablono.core.time_field28431.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.time_field28431.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28431);

/**
 * Creates a url input field.
 */
sablono.core.url_field28435 = (function sablono$core$url_field28435(var_args){
var args28436 = [];
var len__7479__auto___28503 = arguments.length;
var i__7480__auto___28504 = (0);
while(true){
if((i__7480__auto___28504 < len__7479__auto___28503)){
args28436.push((arguments[i__7480__auto___28504]));

var G__28505 = (i__7480__auto___28504 + (1));
i__7480__auto___28504 = G__28505;
continue;
} else {
}
break;
}

var G__28438 = args28436.length;
switch (G__28438) {
case 1:
return sablono.core.url_field28435.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28435.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28436.length)].join('')));

}
});

sablono.core.url_field28435.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.url_field28435.call(null,name__22001__auto__,null);
});

sablono.core.url_field28435.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.url_field28435.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28435);

/**
 * Creates a week input field.
 */
sablono.core.week_field28439 = (function sablono$core$week_field28439(var_args){
var args28440 = [];
var len__7479__auto___28507 = arguments.length;
var i__7480__auto___28508 = (0);
while(true){
if((i__7480__auto___28508 < len__7479__auto___28507)){
args28440.push((arguments[i__7480__auto___28508]));

var G__28509 = (i__7480__auto___28508 + (1));
i__7480__auto___28508 = G__28509;
continue;
} else {
}
break;
}

var G__28442 = args28440.length;
switch (G__28442) {
case 1:
return sablono.core.week_field28439.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28439.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28440.length)].join('')));

}
});

sablono.core.week_field28439.cljs$core$IFn$_invoke$arity$1 = (function (name__22001__auto__){
return sablono.core.week_field28439.call(null,name__22001__auto__,null);
});

sablono.core.week_field28439.cljs$core$IFn$_invoke$arity$2 = (function (name__22001__auto__,value__22002__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22001__auto__,value__22002__auto__);
});

sablono.core.week_field28439.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28439);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box28511 = (function sablono$core$check_box28511(var_args){
var args28512 = [];
var len__7479__auto___28515 = arguments.length;
var i__7480__auto___28516 = (0);
while(true){
if((i__7480__auto___28516 < len__7479__auto___28515)){
args28512.push((arguments[i__7480__auto___28516]));

var G__28517 = (i__7480__auto___28516 + (1));
i__7480__auto___28516 = G__28517;
continue;
} else {
}
break;
}

var G__28514 = args28512.length;
switch (G__28514) {
case 1:
return sablono.core.check_box28511.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box28511.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box28511.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28512.length)].join('')));

}
});

sablono.core.check_box28511.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box28511.call(null,name,null);
});

sablono.core.check_box28511.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box28511.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box28511.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box28511.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28511);
/**
 * Creates a radio button.
 */
sablono.core.radio_button28519 = (function sablono$core$radio_button28519(var_args){
var args28520 = [];
var len__7479__auto___28523 = arguments.length;
var i__7480__auto___28524 = (0);
while(true){
if((i__7480__auto___28524 < len__7479__auto___28523)){
args28520.push((arguments[i__7480__auto___28524]));

var G__28525 = (i__7480__auto___28524 + (1));
i__7480__auto___28524 = G__28525;
continue;
} else {
}
break;
}

var G__28522 = args28520.length;
switch (G__28522) {
case 1:
return sablono.core.radio_button28519.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button28519.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button28519.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28520.length)].join('')));

}
});

sablono.core.radio_button28519.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button28519.call(null,group,null);
});

sablono.core.radio_button28519.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button28519.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button28519.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button28519.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28519);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options28527 = (function sablono$core$select_options28527(coll){
var iter__7184__auto__ = (function sablono$core$select_options28527_$_iter__28544(s__28545){
return (new cljs.core.LazySeq(null,(function (){
var s__28545__$1 = s__28545;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28545__$1);
if(temp__4657__auto__){
var s__28545__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28545__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__28545__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__28547 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__28546 = (0);
while(true){
if((i__28546 < size__7183__auto__)){
var x = cljs.core._nth.call(null,c__7182__auto__,i__28546);
cljs.core.chunk_append.call(null,b__28547,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28554 = x;
var text = cljs.core.nth.call(null,vec__28554,(0),null);
var val = cljs.core.nth.call(null,vec__28554,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28554,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options28527.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__28560 = (i__28546 + (1));
i__28546 = G__28560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28547),sablono$core$select_options28527_$_iter__28544.call(null,cljs.core.chunk_rest.call(null,s__28545__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28547),null);
}
} else {
var x = cljs.core.first.call(null,s__28545__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28557 = x;
var text = cljs.core.nth.call(null,vec__28557,(0),null);
var val = cljs.core.nth.call(null,vec__28557,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28557,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options28527.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options28527_$_iter__28544.call(null,cljs.core.rest.call(null,s__28545__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28527);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down28561 = (function sablono$core$drop_down28561(var_args){
var args28562 = [];
var len__7479__auto___28565 = arguments.length;
var i__7480__auto___28566 = (0);
while(true){
if((i__7480__auto___28566 < len__7479__auto___28565)){
args28562.push((arguments[i__7480__auto___28566]));

var G__28567 = (i__7480__auto___28566 + (1));
i__7480__auto___28566 = G__28567;
continue;
} else {
}
break;
}

var G__28564 = args28562.length;
switch (G__28564) {
case 2:
return sablono.core.drop_down28561.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down28561.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28562.length)].join('')));

}
});

sablono.core.drop_down28561.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down28561.call(null,name,options,null);
});

sablono.core.drop_down28561.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down28561.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28561);
/**
 * Creates a text area element.
 */
sablono.core.text_area28569 = (function sablono$core$text_area28569(var_args){
var args28570 = [];
var len__7479__auto___28573 = arguments.length;
var i__7480__auto___28574 = (0);
while(true){
if((i__7480__auto___28574 < len__7479__auto___28573)){
args28570.push((arguments[i__7480__auto___28574]));

var G__28575 = (i__7480__auto___28574 + (1));
i__7480__auto___28574 = G__28575;
continue;
} else {
}
break;
}

var G__28572 = args28570.length;
switch (G__28572) {
case 1:
return sablono.core.text_area28569.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area28569.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28570.length)].join('')));

}
});

sablono.core.text_area28569.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area28569.call(null,name,null);
});

sablono.core.text_area28569.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area28569.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28569);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label28577 = (function sablono$core$label28577(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28577);
/**
 * Creates a submit button.
 */
sablono.core.submit_button28578 = (function sablono$core$submit_button28578(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28578);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button28579 = (function sablono$core$reset_button28579(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28579);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to28580 = (function sablono$core$form_to28580(var_args){
var args__7486__auto__ = [];
var len__7479__auto___28587 = arguments.length;
var i__7480__auto___28588 = (0);
while(true){
if((i__7480__auto___28588 < len__7479__auto___28587)){
args__7486__auto__.push((arguments[i__7480__auto___28588]));

var G__28589 = (i__7480__auto___28588 + (1));
i__7480__auto___28588 = G__28589;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to28580.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

sablono.core.form_to28580.cljs$core$IFn$_invoke$arity$variadic = (function (p__28583,body){
var vec__28584 = p__28583;
var method = cljs.core.nth.call(null,vec__28584,(0),null);
var action = cljs.core.nth.call(null,vec__28584,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to28580.cljs$lang$maxFixedArity = (1);

sablono.core.form_to28580.cljs$lang$applyTo = (function (seq28581){
var G__28582 = cljs.core.first.call(null,seq28581);
var seq28581__$1 = cljs.core.next.call(null,seq28581);
return sablono.core.form_to28580.cljs$core$IFn$_invoke$arity$variadic(G__28582,seq28581__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28580);

//# sourceMappingURL=core.js.map