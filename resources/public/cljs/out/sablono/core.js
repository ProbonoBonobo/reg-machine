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
var G__55643__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__55640 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__55641 = cljs.core.seq.call(null,vec__55640);
var first__55642 = cljs.core.first.call(null,seq__55641);
var seq__55641__$1 = cljs.core.next.call(null,seq__55641);
var tag = first__55642;
var body = seq__55641__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__55643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55644__i = 0, G__55644__a = new Array(arguments.length -  0);
while (G__55644__i < G__55644__a.length) {G__55644__a[G__55644__i] = arguments[G__55644__i + 0]; ++G__55644__i;}
  args = new cljs.core.IndexedSeq(G__55644__a,0);
} 
return G__55643__delegate.call(this,args);};
G__55643.cljs$lang$maxFixedArity = 0;
G__55643.cljs$lang$applyTo = (function (arglist__55645){
var args = cljs.core.seq(arglist__55645);
return G__55643__delegate(args);
});
G__55643.cljs$core$IFn$_invoke$arity$variadic = G__55643__delegate;
return G__55643;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7326__auto__ = (function sablono$core$update_arglists_$_iter__55650(s__55651){
return (new cljs.core.LazySeq(null,(function (){
var s__55651__$1 = s__55651;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55651__$1);
if(temp__4657__auto__){
var s__55651__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55651__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__55651__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__55653 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__55652 = (0);
while(true){
if((i__55652 < size__7325__auto__)){
var args = cljs.core._nth.call(null,c__7324__auto__,i__55652);
cljs.core.chunk_append.call(null,b__55653,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__55654 = (i__55652 + (1));
i__55652 = G__55654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55653),sablono$core$update_arglists_$_iter__55650.call(null,cljs.core.chunk_rest.call(null,s__55651__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55653),null);
}
} else {
var args = cljs.core.first.call(null,s__55651__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__55650.call(null,cljs.core.rest.call(null,s__55651__$2)));
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
var len__7651__auto___55660 = arguments.length;
var i__7652__auto___55661 = (0);
while(true){
if((i__7652__auto___55661 < len__7651__auto___55660)){
args__7658__auto__.push((arguments[i__7652__auto___55661]));

var G__55662 = (i__7652__auto___55661 + (1));
i__7652__auto___55661 = G__55662;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7326__auto__ = (function sablono$core$iter__55656(s__55657){
return (new cljs.core.LazySeq(null,(function (){
var s__55657__$1 = s__55657;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55657__$1);
if(temp__4657__auto__){
var s__55657__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55657__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__55657__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__55659 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__55658 = (0);
while(true){
if((i__55658 < size__7325__auto__)){
var style = cljs.core._nth.call(null,c__7324__auto__,i__55658);
cljs.core.chunk_append.call(null,b__55659,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__55663 = (i__55658 + (1));
i__55658 = G__55663;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55659),sablono$core$iter__55656.call(null,cljs.core.chunk_rest.call(null,s__55657__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55659),null);
}
} else {
var style = cljs.core.first.call(null,s__55657__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__55656.call(null,cljs.core.rest.call(null,s__55657__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq55655){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55655));
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
sablono.core.link_to55664 = (function sablono$core$link_to55664(var_args){
var args__7658__auto__ = [];
var len__7651__auto___55667 = arguments.length;
var i__7652__auto___55668 = (0);
while(true){
if((i__7652__auto___55668 < len__7651__auto___55667)){
args__7658__auto__.push((arguments[i__7652__auto___55668]));

var G__55669 = (i__7652__auto___55668 + (1));
i__7652__auto___55668 = G__55669;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to55664.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.link_to55664.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to55664.cljs$lang$maxFixedArity = (1);

sablono.core.link_to55664.cljs$lang$applyTo = (function (seq55665){
var G__55666 = cljs.core.first.call(null,seq55665);
var seq55665__$1 = cljs.core.next.call(null,seq55665);
return sablono.core.link_to55664.cljs$core$IFn$_invoke$arity$variadic(G__55666,seq55665__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to55664);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to55670 = (function sablono$core$mail_to55670(var_args){
var args__7658__auto__ = [];
var len__7651__auto___55677 = arguments.length;
var i__7652__auto___55678 = (0);
while(true){
if((i__7652__auto___55678 < len__7651__auto___55677)){
args__7658__auto__.push((arguments[i__7652__auto___55678]));

var G__55679 = (i__7652__auto___55678 + (1));
i__7652__auto___55678 = G__55679;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to55670.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.mail_to55670.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__55673){
var vec__55674 = p__55673;
var content = cljs.core.nth.call(null,vec__55674,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6543__auto__ = content;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to55670.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to55670.cljs$lang$applyTo = (function (seq55671){
var G__55672 = cljs.core.first.call(null,seq55671);
var seq55671__$1 = cljs.core.next.call(null,seq55671);
return sablono.core.mail_to55670.cljs$core$IFn$_invoke$arity$variadic(G__55672,seq55671__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to55670);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list55680 = (function sablono$core$unordered_list55680(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__7326__auto__ = (function sablono$core$unordered_list55680_$_iter__55685(s__55686){
return (new cljs.core.LazySeq(null,(function (){
var s__55686__$1 = s__55686;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55686__$1);
if(temp__4657__auto__){
var s__55686__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55686__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__55686__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__55688 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__55687 = (0);
while(true){
if((i__55687 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__55687);
cljs.core.chunk_append.call(null,b__55688,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__55689 = (i__55687 + (1));
i__55687 = G__55689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55688),sablono$core$unordered_list55680_$_iter__55685.call(null,cljs.core.chunk_rest.call(null,s__55686__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55688),null);
}
} else {
var x = cljs.core.first.call(null,s__55686__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list55680_$_iter__55685.call(null,cljs.core.rest.call(null,s__55686__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list55680);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list55690 = (function sablono$core$ordered_list55690(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__7326__auto__ = (function sablono$core$ordered_list55690_$_iter__55695(s__55696){
return (new cljs.core.LazySeq(null,(function (){
var s__55696__$1 = s__55696;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55696__$1);
if(temp__4657__auto__){
var s__55696__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55696__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__55696__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__55698 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__55697 = (0);
while(true){
if((i__55697 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__55697);
cljs.core.chunk_append.call(null,b__55698,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__55699 = (i__55697 + (1));
i__55697 = G__55699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55698),sablono$core$ordered_list55690_$_iter__55695.call(null,cljs.core.chunk_rest.call(null,s__55696__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55698),null);
}
} else {
var x = cljs.core.first.call(null,s__55696__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list55690_$_iter__55695.call(null,cljs.core.rest.call(null,s__55696__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list55690);
/**
 * Create an image element.
 */
sablono.core.image55700 = (function sablono$core$image55700(var_args){
var args55701 = [];
var len__7651__auto___55704 = arguments.length;
var i__7652__auto___55705 = (0);
while(true){
if((i__7652__auto___55705 < len__7651__auto___55704)){
args55701.push((arguments[i__7652__auto___55705]));

var G__55706 = (i__7652__auto___55705 + (1));
i__7652__auto___55705 = G__55706;
continue;
} else {
}
break;
}

var G__55703 = args55701.length;
switch (G__55703) {
case 1:
return sablono.core.image55700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image55700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55701.length)].join('')));

}
});

sablono.core.image55700.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image55700.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image55700.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image55700);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__55708_SHARP_,p2__55709_SHARP_){
return [cljs.core.str(p1__55708_SHARP_),cljs.core.str("["),cljs.core.str(p2__55709_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__55710_SHARP_,p2__55711_SHARP_){
return [cljs.core.str(p1__55710_SHARP_),cljs.core.str("-"),cljs.core.str(p2__55711_SHARP_)].join('');
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
sablono.core.color_field55712 = (function sablono$core$color_field55712(var_args){
var args55713 = [];
var len__7651__auto___55780 = arguments.length;
var i__7652__auto___55781 = (0);
while(true){
if((i__7652__auto___55781 < len__7651__auto___55780)){
args55713.push((arguments[i__7652__auto___55781]));

var G__55782 = (i__7652__auto___55781 + (1));
i__7652__auto___55781 = G__55782;
continue;
} else {
}
break;
}

var G__55715 = args55713.length;
switch (G__55715) {
case 1:
return sablono.core.color_field55712.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field55712.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55713.length)].join('')));

}
});

sablono.core.color_field55712.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.color_field55712.call(null,name__10988__auto__,null);
});

sablono.core.color_field55712.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.color_field55712.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field55712);

/**
 * Creates a date input field.
 */
sablono.core.date_field55716 = (function sablono$core$date_field55716(var_args){
var args55717 = [];
var len__7651__auto___55784 = arguments.length;
var i__7652__auto___55785 = (0);
while(true){
if((i__7652__auto___55785 < len__7651__auto___55784)){
args55717.push((arguments[i__7652__auto___55785]));

var G__55786 = (i__7652__auto___55785 + (1));
i__7652__auto___55785 = G__55786;
continue;
} else {
}
break;
}

var G__55719 = args55717.length;
switch (G__55719) {
case 1:
return sablono.core.date_field55716.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field55716.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55717.length)].join('')));

}
});

sablono.core.date_field55716.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.date_field55716.call(null,name__10988__auto__,null);
});

sablono.core.date_field55716.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.date_field55716.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field55716);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field55720 = (function sablono$core$datetime_field55720(var_args){
var args55721 = [];
var len__7651__auto___55788 = arguments.length;
var i__7652__auto___55789 = (0);
while(true){
if((i__7652__auto___55789 < len__7651__auto___55788)){
args55721.push((arguments[i__7652__auto___55789]));

var G__55790 = (i__7652__auto___55789 + (1));
i__7652__auto___55789 = G__55790;
continue;
} else {
}
break;
}

var G__55723 = args55721.length;
switch (G__55723) {
case 1:
return sablono.core.datetime_field55720.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field55720.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55721.length)].join('')));

}
});

sablono.core.datetime_field55720.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.datetime_field55720.call(null,name__10988__auto__,null);
});

sablono.core.datetime_field55720.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.datetime_field55720.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field55720);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field55724 = (function sablono$core$datetime_local_field55724(var_args){
var args55725 = [];
var len__7651__auto___55792 = arguments.length;
var i__7652__auto___55793 = (0);
while(true){
if((i__7652__auto___55793 < len__7651__auto___55792)){
args55725.push((arguments[i__7652__auto___55793]));

var G__55794 = (i__7652__auto___55793 + (1));
i__7652__auto___55793 = G__55794;
continue;
} else {
}
break;
}

var G__55727 = args55725.length;
switch (G__55727) {
case 1:
return sablono.core.datetime_local_field55724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field55724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55725.length)].join('')));

}
});

sablono.core.datetime_local_field55724.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.datetime_local_field55724.call(null,name__10988__auto__,null);
});

sablono.core.datetime_local_field55724.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.datetime_local_field55724.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field55724);

/**
 * Creates a email input field.
 */
sablono.core.email_field55728 = (function sablono$core$email_field55728(var_args){
var args55729 = [];
var len__7651__auto___55796 = arguments.length;
var i__7652__auto___55797 = (0);
while(true){
if((i__7652__auto___55797 < len__7651__auto___55796)){
args55729.push((arguments[i__7652__auto___55797]));

var G__55798 = (i__7652__auto___55797 + (1));
i__7652__auto___55797 = G__55798;
continue;
} else {
}
break;
}

var G__55731 = args55729.length;
switch (G__55731) {
case 1:
return sablono.core.email_field55728.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field55728.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55729.length)].join('')));

}
});

sablono.core.email_field55728.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.email_field55728.call(null,name__10988__auto__,null);
});

sablono.core.email_field55728.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.email_field55728.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field55728);

/**
 * Creates a file input field.
 */
sablono.core.file_field55732 = (function sablono$core$file_field55732(var_args){
var args55733 = [];
var len__7651__auto___55800 = arguments.length;
var i__7652__auto___55801 = (0);
while(true){
if((i__7652__auto___55801 < len__7651__auto___55800)){
args55733.push((arguments[i__7652__auto___55801]));

var G__55802 = (i__7652__auto___55801 + (1));
i__7652__auto___55801 = G__55802;
continue;
} else {
}
break;
}

var G__55735 = args55733.length;
switch (G__55735) {
case 1:
return sablono.core.file_field55732.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field55732.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55733.length)].join('')));

}
});

sablono.core.file_field55732.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.file_field55732.call(null,name__10988__auto__,null);
});

sablono.core.file_field55732.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.file_field55732.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field55732);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field55736 = (function sablono$core$hidden_field55736(var_args){
var args55737 = [];
var len__7651__auto___55804 = arguments.length;
var i__7652__auto___55805 = (0);
while(true){
if((i__7652__auto___55805 < len__7651__auto___55804)){
args55737.push((arguments[i__7652__auto___55805]));

var G__55806 = (i__7652__auto___55805 + (1));
i__7652__auto___55805 = G__55806;
continue;
} else {
}
break;
}

var G__55739 = args55737.length;
switch (G__55739) {
case 1:
return sablono.core.hidden_field55736.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field55736.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55737.length)].join('')));

}
});

sablono.core.hidden_field55736.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.hidden_field55736.call(null,name__10988__auto__,null);
});

sablono.core.hidden_field55736.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.hidden_field55736.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field55736);

/**
 * Creates a month input field.
 */
sablono.core.month_field55740 = (function sablono$core$month_field55740(var_args){
var args55741 = [];
var len__7651__auto___55808 = arguments.length;
var i__7652__auto___55809 = (0);
while(true){
if((i__7652__auto___55809 < len__7651__auto___55808)){
args55741.push((arguments[i__7652__auto___55809]));

var G__55810 = (i__7652__auto___55809 + (1));
i__7652__auto___55809 = G__55810;
continue;
} else {
}
break;
}

var G__55743 = args55741.length;
switch (G__55743) {
case 1:
return sablono.core.month_field55740.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field55740.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55741.length)].join('')));

}
});

sablono.core.month_field55740.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.month_field55740.call(null,name__10988__auto__,null);
});

sablono.core.month_field55740.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.month_field55740.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field55740);

/**
 * Creates a number input field.
 */
sablono.core.number_field55744 = (function sablono$core$number_field55744(var_args){
var args55745 = [];
var len__7651__auto___55812 = arguments.length;
var i__7652__auto___55813 = (0);
while(true){
if((i__7652__auto___55813 < len__7651__auto___55812)){
args55745.push((arguments[i__7652__auto___55813]));

var G__55814 = (i__7652__auto___55813 + (1));
i__7652__auto___55813 = G__55814;
continue;
} else {
}
break;
}

var G__55747 = args55745.length;
switch (G__55747) {
case 1:
return sablono.core.number_field55744.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field55744.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55745.length)].join('')));

}
});

sablono.core.number_field55744.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.number_field55744.call(null,name__10988__auto__,null);
});

sablono.core.number_field55744.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.number_field55744.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field55744);

/**
 * Creates a password input field.
 */
sablono.core.password_field55748 = (function sablono$core$password_field55748(var_args){
var args55749 = [];
var len__7651__auto___55816 = arguments.length;
var i__7652__auto___55817 = (0);
while(true){
if((i__7652__auto___55817 < len__7651__auto___55816)){
args55749.push((arguments[i__7652__auto___55817]));

var G__55818 = (i__7652__auto___55817 + (1));
i__7652__auto___55817 = G__55818;
continue;
} else {
}
break;
}

var G__55751 = args55749.length;
switch (G__55751) {
case 1:
return sablono.core.password_field55748.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field55748.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55749.length)].join('')));

}
});

sablono.core.password_field55748.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.password_field55748.call(null,name__10988__auto__,null);
});

sablono.core.password_field55748.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.password_field55748.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field55748);

/**
 * Creates a range input field.
 */
sablono.core.range_field55752 = (function sablono$core$range_field55752(var_args){
var args55753 = [];
var len__7651__auto___55820 = arguments.length;
var i__7652__auto___55821 = (0);
while(true){
if((i__7652__auto___55821 < len__7651__auto___55820)){
args55753.push((arguments[i__7652__auto___55821]));

var G__55822 = (i__7652__auto___55821 + (1));
i__7652__auto___55821 = G__55822;
continue;
} else {
}
break;
}

var G__55755 = args55753.length;
switch (G__55755) {
case 1:
return sablono.core.range_field55752.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field55752.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55753.length)].join('')));

}
});

sablono.core.range_field55752.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.range_field55752.call(null,name__10988__auto__,null);
});

sablono.core.range_field55752.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.range_field55752.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field55752);

/**
 * Creates a search input field.
 */
sablono.core.search_field55756 = (function sablono$core$search_field55756(var_args){
var args55757 = [];
var len__7651__auto___55824 = arguments.length;
var i__7652__auto___55825 = (0);
while(true){
if((i__7652__auto___55825 < len__7651__auto___55824)){
args55757.push((arguments[i__7652__auto___55825]));

var G__55826 = (i__7652__auto___55825 + (1));
i__7652__auto___55825 = G__55826;
continue;
} else {
}
break;
}

var G__55759 = args55757.length;
switch (G__55759) {
case 1:
return sablono.core.search_field55756.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field55756.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55757.length)].join('')));

}
});

sablono.core.search_field55756.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.search_field55756.call(null,name__10988__auto__,null);
});

sablono.core.search_field55756.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.search_field55756.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field55756);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field55760 = (function sablono$core$tel_field55760(var_args){
var args55761 = [];
var len__7651__auto___55828 = arguments.length;
var i__7652__auto___55829 = (0);
while(true){
if((i__7652__auto___55829 < len__7651__auto___55828)){
args55761.push((arguments[i__7652__auto___55829]));

var G__55830 = (i__7652__auto___55829 + (1));
i__7652__auto___55829 = G__55830;
continue;
} else {
}
break;
}

var G__55763 = args55761.length;
switch (G__55763) {
case 1:
return sablono.core.tel_field55760.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field55760.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55761.length)].join('')));

}
});

sablono.core.tel_field55760.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.tel_field55760.call(null,name__10988__auto__,null);
});

sablono.core.tel_field55760.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.tel_field55760.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field55760);

/**
 * Creates a text input field.
 */
sablono.core.text_field55764 = (function sablono$core$text_field55764(var_args){
var args55765 = [];
var len__7651__auto___55832 = arguments.length;
var i__7652__auto___55833 = (0);
while(true){
if((i__7652__auto___55833 < len__7651__auto___55832)){
args55765.push((arguments[i__7652__auto___55833]));

var G__55834 = (i__7652__auto___55833 + (1));
i__7652__auto___55833 = G__55834;
continue;
} else {
}
break;
}

var G__55767 = args55765.length;
switch (G__55767) {
case 1:
return sablono.core.text_field55764.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field55764.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55765.length)].join('')));

}
});

sablono.core.text_field55764.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.text_field55764.call(null,name__10988__auto__,null);
});

sablono.core.text_field55764.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.text_field55764.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field55764);

/**
 * Creates a time input field.
 */
sablono.core.time_field55768 = (function sablono$core$time_field55768(var_args){
var args55769 = [];
var len__7651__auto___55836 = arguments.length;
var i__7652__auto___55837 = (0);
while(true){
if((i__7652__auto___55837 < len__7651__auto___55836)){
args55769.push((arguments[i__7652__auto___55837]));

var G__55838 = (i__7652__auto___55837 + (1));
i__7652__auto___55837 = G__55838;
continue;
} else {
}
break;
}

var G__55771 = args55769.length;
switch (G__55771) {
case 1:
return sablono.core.time_field55768.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field55768.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55769.length)].join('')));

}
});

sablono.core.time_field55768.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.time_field55768.call(null,name__10988__auto__,null);
});

sablono.core.time_field55768.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.time_field55768.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field55768);

/**
 * Creates a url input field.
 */
sablono.core.url_field55772 = (function sablono$core$url_field55772(var_args){
var args55773 = [];
var len__7651__auto___55840 = arguments.length;
var i__7652__auto___55841 = (0);
while(true){
if((i__7652__auto___55841 < len__7651__auto___55840)){
args55773.push((arguments[i__7652__auto___55841]));

var G__55842 = (i__7652__auto___55841 + (1));
i__7652__auto___55841 = G__55842;
continue;
} else {
}
break;
}

var G__55775 = args55773.length;
switch (G__55775) {
case 1:
return sablono.core.url_field55772.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field55772.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55773.length)].join('')));

}
});

sablono.core.url_field55772.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.url_field55772.call(null,name__10988__auto__,null);
});

sablono.core.url_field55772.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.url_field55772.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field55772);

/**
 * Creates a week input field.
 */
sablono.core.week_field55776 = (function sablono$core$week_field55776(var_args){
var args55777 = [];
var len__7651__auto___55844 = arguments.length;
var i__7652__auto___55845 = (0);
while(true){
if((i__7652__auto___55845 < len__7651__auto___55844)){
args55777.push((arguments[i__7652__auto___55845]));

var G__55846 = (i__7652__auto___55845 + (1));
i__7652__auto___55845 = G__55846;
continue;
} else {
}
break;
}

var G__55779 = args55777.length;
switch (G__55779) {
case 1:
return sablono.core.week_field55776.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field55776.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55777.length)].join('')));

}
});

sablono.core.week_field55776.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.week_field55776.call(null,name__10988__auto__,null);
});

sablono.core.week_field55776.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.week_field55776.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field55776);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box55848 = (function sablono$core$check_box55848(var_args){
var args55849 = [];
var len__7651__auto___55852 = arguments.length;
var i__7652__auto___55853 = (0);
while(true){
if((i__7652__auto___55853 < len__7651__auto___55852)){
args55849.push((arguments[i__7652__auto___55853]));

var G__55854 = (i__7652__auto___55853 + (1));
i__7652__auto___55853 = G__55854;
continue;
} else {
}
break;
}

var G__55851 = args55849.length;
switch (G__55851) {
case 1:
return sablono.core.check_box55848.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box55848.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box55848.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55849.length)].join('')));

}
});

sablono.core.check_box55848.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box55848.call(null,name,null);
});

sablono.core.check_box55848.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box55848.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box55848.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box55848.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box55848);
/**
 * Creates a radio button.
 */
sablono.core.radio_button55856 = (function sablono$core$radio_button55856(var_args){
var args55857 = [];
var len__7651__auto___55860 = arguments.length;
var i__7652__auto___55861 = (0);
while(true){
if((i__7652__auto___55861 < len__7651__auto___55860)){
args55857.push((arguments[i__7652__auto___55861]));

var G__55862 = (i__7652__auto___55861 + (1));
i__7652__auto___55861 = G__55862;
continue;
} else {
}
break;
}

var G__55859 = args55857.length;
switch (G__55859) {
case 1:
return sablono.core.radio_button55856.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button55856.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button55856.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55857.length)].join('')));

}
});

sablono.core.radio_button55856.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button55856.call(null,group,null);
});

sablono.core.radio_button55856.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button55856.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button55856.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button55856.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button55856);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options55864 = (function sablono$core$select_options55864(coll){
var iter__7326__auto__ = (function sablono$core$select_options55864_$_iter__55881(s__55882){
return (new cljs.core.LazySeq(null,(function (){
var s__55882__$1 = s__55882;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55882__$1);
if(temp__4657__auto__){
var s__55882__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55882__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__55882__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__55884 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__55883 = (0);
while(true){
if((i__55883 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__55883);
cljs.core.chunk_append.call(null,b__55884,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__55891 = x;
var text = cljs.core.nth.call(null,vec__55891,(0),null);
var val = cljs.core.nth.call(null,vec__55891,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__55891,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options55864.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__55897 = (i__55883 + (1));
i__55883 = G__55897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55884),sablono$core$select_options55864_$_iter__55881.call(null,cljs.core.chunk_rest.call(null,s__55882__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55884),null);
}
} else {
var x = cljs.core.first.call(null,s__55882__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__55894 = x;
var text = cljs.core.nth.call(null,vec__55894,(0),null);
var val = cljs.core.nth.call(null,vec__55894,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__55894,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options55864.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options55864_$_iter__55881.call(null,cljs.core.rest.call(null,s__55882__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options55864);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down55898 = (function sablono$core$drop_down55898(var_args){
var args55899 = [];
var len__7651__auto___55902 = arguments.length;
var i__7652__auto___55903 = (0);
while(true){
if((i__7652__auto___55903 < len__7651__auto___55902)){
args55899.push((arguments[i__7652__auto___55903]));

var G__55904 = (i__7652__auto___55903 + (1));
i__7652__auto___55903 = G__55904;
continue;
} else {
}
break;
}

var G__55901 = args55899.length;
switch (G__55901) {
case 2:
return sablono.core.drop_down55898.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down55898.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55899.length)].join('')));

}
});

sablono.core.drop_down55898.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down55898.call(null,name,options,null);
});

sablono.core.drop_down55898.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down55898.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down55898);
/**
 * Creates a text area element.
 */
sablono.core.text_area55906 = (function sablono$core$text_area55906(var_args){
var args55907 = [];
var len__7651__auto___55910 = arguments.length;
var i__7652__auto___55911 = (0);
while(true){
if((i__7652__auto___55911 < len__7651__auto___55910)){
args55907.push((arguments[i__7652__auto___55911]));

var G__55912 = (i__7652__auto___55911 + (1));
i__7652__auto___55911 = G__55912;
continue;
} else {
}
break;
}

var G__55909 = args55907.length;
switch (G__55909) {
case 1:
return sablono.core.text_area55906.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area55906.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55907.length)].join('')));

}
});

sablono.core.text_area55906.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area55906.call(null,name,null);
});

sablono.core.text_area55906.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area55906.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area55906);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label55914 = (function sablono$core$label55914(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label55914);
/**
 * Creates a submit button.
 */
sablono.core.submit_button55915 = (function sablono$core$submit_button55915(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button55915);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button55916 = (function sablono$core$reset_button55916(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button55916);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to55917 = (function sablono$core$form_to55917(var_args){
var args__7658__auto__ = [];
var len__7651__auto___55924 = arguments.length;
var i__7652__auto___55925 = (0);
while(true){
if((i__7652__auto___55925 < len__7651__auto___55924)){
args__7658__auto__.push((arguments[i__7652__auto___55925]));

var G__55926 = (i__7652__auto___55925 + (1));
i__7652__auto___55925 = G__55926;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to55917.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.form_to55917.cljs$core$IFn$_invoke$arity$variadic = (function (p__55920,body){
var vec__55921 = p__55920;
var method = cljs.core.nth.call(null,vec__55921,(0),null);
var action = cljs.core.nth.call(null,vec__55921,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to55917.cljs$lang$maxFixedArity = (1);

sablono.core.form_to55917.cljs$lang$applyTo = (function (seq55918){
var G__55919 = cljs.core.first.call(null,seq55918);
var seq55918__$1 = cljs.core.next.call(null,seq55918);
return sablono.core.form_to55917.cljs$core$IFn$_invoke$arity$variadic(G__55919,seq55918__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to55917);

//# sourceMappingURL=core.js.map?rel=1479783822042