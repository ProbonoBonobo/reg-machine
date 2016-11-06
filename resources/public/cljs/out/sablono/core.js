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
var G__67519__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__67516 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__67517 = cljs.core.seq.call(null,vec__67516);
var first__67518 = cljs.core.first.call(null,seq__67517);
var seq__67517__$1 = cljs.core.next.call(null,seq__67517);
var tag = first__67518;
var body = seq__67517__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__67519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67520__i = 0, G__67520__a = new Array(arguments.length -  0);
while (G__67520__i < G__67520__a.length) {G__67520__a[G__67520__i] = arguments[G__67520__i + 0]; ++G__67520__i;}
  args = new cljs.core.IndexedSeq(G__67520__a,0);
} 
return G__67519__delegate.call(this,args);};
G__67519.cljs$lang$maxFixedArity = 0;
G__67519.cljs$lang$applyTo = (function (arglist__67521){
var args = cljs.core.seq(arglist__67521);
return G__67519__delegate(args);
});
G__67519.cljs$core$IFn$_invoke$arity$variadic = G__67519__delegate;
return G__67519;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25531__auto__ = (function sablono$core$update_arglists_$_iter__67526(s__67527){
return (new cljs.core.LazySeq(null,(function (){
var s__67527__$1 = s__67527;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__67527__$1);
if(temp__4657__auto__){
var s__67527__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67527__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__67527__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__67529 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__67528 = (0);
while(true){
if((i__67528 < size__25530__auto__)){
var args = cljs.core._nth.call(null,c__25529__auto__,i__67528);
cljs.core.chunk_append.call(null,b__67529,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__67530 = (i__67528 + (1));
i__67528 = G__67530;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67529),sablono$core$update_arglists_$_iter__67526.call(null,cljs.core.chunk_rest.call(null,s__67527__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67529),null);
}
} else {
var args = cljs.core.first.call(null,s__67527__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__67526.call(null,cljs.core.rest.call(null,s__67527__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25531__auto__.call(null,arglists);
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
var args__25833__auto__ = [];
var len__25826__auto___67536 = arguments.length;
var i__25827__auto___67537 = (0);
while(true){
if((i__25827__auto___67537 < len__25826__auto___67536)){
args__25833__auto__.push((arguments[i__25827__auto___67537]));

var G__67538 = (i__25827__auto___67537 + (1));
i__25827__auto___67537 = G__67538;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25531__auto__ = (function sablono$core$iter__67532(s__67533){
return (new cljs.core.LazySeq(null,(function (){
var s__67533__$1 = s__67533;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__67533__$1);
if(temp__4657__auto__){
var s__67533__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67533__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__67533__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__67535 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__67534 = (0);
while(true){
if((i__67534 < size__25530__auto__)){
var style = cljs.core._nth.call(null,c__25529__auto__,i__67534);
cljs.core.chunk_append.call(null,b__67535,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__67539 = (i__67534 + (1));
i__67534 = G__67539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67535),sablono$core$iter__67532.call(null,cljs.core.chunk_rest.call(null,s__67533__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67535),null);
}
} else {
var style = cljs.core.first.call(null,s__67533__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__67532.call(null,cljs.core.rest.call(null,s__67533__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25531__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq67531){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67531));
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
sablono.core.link_to67540 = (function sablono$core$link_to67540(var_args){
var args__25833__auto__ = [];
var len__25826__auto___67543 = arguments.length;
var i__25827__auto___67544 = (0);
while(true){
if((i__25827__auto___67544 < len__25826__auto___67543)){
args__25833__auto__.push((arguments[i__25827__auto___67544]));

var G__67545 = (i__25827__auto___67544 + (1));
i__25827__auto___67544 = G__67545;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to67540.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

sablono.core.link_to67540.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to67540.cljs$lang$maxFixedArity = (1);

sablono.core.link_to67540.cljs$lang$applyTo = (function (seq67541){
var G__67542 = cljs.core.first.call(null,seq67541);
var seq67541__$1 = cljs.core.next.call(null,seq67541);
return sablono.core.link_to67540.cljs$core$IFn$_invoke$arity$variadic(G__67542,seq67541__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to67540);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to67546 = (function sablono$core$mail_to67546(var_args){
var args__25833__auto__ = [];
var len__25826__auto___67553 = arguments.length;
var i__25827__auto___67554 = (0);
while(true){
if((i__25827__auto___67554 < len__25826__auto___67553)){
args__25833__auto__.push((arguments[i__25827__auto___67554]));

var G__67555 = (i__25827__auto___67554 + (1));
i__25827__auto___67554 = G__67555;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to67546.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

sablono.core.mail_to67546.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__67549){
var vec__67550 = p__67549;
var content = cljs.core.nth.call(null,vec__67550,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24751__auto__ = content;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to67546.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to67546.cljs$lang$applyTo = (function (seq67547){
var G__67548 = cljs.core.first.call(null,seq67547);
var seq67547__$1 = cljs.core.next.call(null,seq67547);
return sablono.core.mail_to67546.cljs$core$IFn$_invoke$arity$variadic(G__67548,seq67547__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to67546);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list67556 = (function sablono$core$unordered_list67556(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25531__auto__ = (function sablono$core$unordered_list67556_$_iter__67561(s__67562){
return (new cljs.core.LazySeq(null,(function (){
var s__67562__$1 = s__67562;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__67562__$1);
if(temp__4657__auto__){
var s__67562__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67562__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__67562__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__67564 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__67563 = (0);
while(true){
if((i__67563 < size__25530__auto__)){
var x = cljs.core._nth.call(null,c__25529__auto__,i__67563);
cljs.core.chunk_append.call(null,b__67564,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__67565 = (i__67563 + (1));
i__67563 = G__67565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67564),sablono$core$unordered_list67556_$_iter__67561.call(null,cljs.core.chunk_rest.call(null,s__67562__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67564),null);
}
} else {
var x = cljs.core.first.call(null,s__67562__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list67556_$_iter__67561.call(null,cljs.core.rest.call(null,s__67562__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25531__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list67556);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list67566 = (function sablono$core$ordered_list67566(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25531__auto__ = (function sablono$core$ordered_list67566_$_iter__67571(s__67572){
return (new cljs.core.LazySeq(null,(function (){
var s__67572__$1 = s__67572;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__67572__$1);
if(temp__4657__auto__){
var s__67572__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67572__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__67572__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__67574 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__67573 = (0);
while(true){
if((i__67573 < size__25530__auto__)){
var x = cljs.core._nth.call(null,c__25529__auto__,i__67573);
cljs.core.chunk_append.call(null,b__67574,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__67575 = (i__67573 + (1));
i__67573 = G__67575;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67574),sablono$core$ordered_list67566_$_iter__67571.call(null,cljs.core.chunk_rest.call(null,s__67572__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67574),null);
}
} else {
var x = cljs.core.first.call(null,s__67572__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list67566_$_iter__67571.call(null,cljs.core.rest.call(null,s__67572__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25531__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list67566);
/**
 * Create an image element.
 */
sablono.core.image67576 = (function sablono$core$image67576(var_args){
var args67577 = [];
var len__25826__auto___67580 = arguments.length;
var i__25827__auto___67581 = (0);
while(true){
if((i__25827__auto___67581 < len__25826__auto___67580)){
args67577.push((arguments[i__25827__auto___67581]));

var G__67582 = (i__25827__auto___67581 + (1));
i__25827__auto___67581 = G__67582;
continue;
} else {
}
break;
}

var G__67579 = args67577.length;
switch (G__67579) {
case 1:
return sablono.core.image67576.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image67576.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67577.length)].join('')));

}
});

sablono.core.image67576.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image67576.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image67576.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image67576);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__67584_SHARP_,p2__67585_SHARP_){
return [cljs.core.str(p1__67584_SHARP_),cljs.core.str("["),cljs.core.str(p2__67585_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__67586_SHARP_,p2__67587_SHARP_){
return [cljs.core.str(p1__67586_SHARP_),cljs.core.str("-"),cljs.core.str(p2__67587_SHARP_)].join('');
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
sablono.core.color_field67588 = (function sablono$core$color_field67588(var_args){
var args67589 = [];
var len__25826__auto___67656 = arguments.length;
var i__25827__auto___67657 = (0);
while(true){
if((i__25827__auto___67657 < len__25826__auto___67656)){
args67589.push((arguments[i__25827__auto___67657]));

var G__67658 = (i__25827__auto___67657 + (1));
i__25827__auto___67657 = G__67658;
continue;
} else {
}
break;
}

var G__67591 = args67589.length;
switch (G__67591) {
case 1:
return sablono.core.color_field67588.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field67588.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67589.length)].join('')));

}
});

sablono.core.color_field67588.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.color_field67588.call(null,name__33808__auto__,null);
});

sablono.core.color_field67588.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.color_field67588.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field67588);

/**
 * Creates a date input field.
 */
sablono.core.date_field67592 = (function sablono$core$date_field67592(var_args){
var args67593 = [];
var len__25826__auto___67660 = arguments.length;
var i__25827__auto___67661 = (0);
while(true){
if((i__25827__auto___67661 < len__25826__auto___67660)){
args67593.push((arguments[i__25827__auto___67661]));

var G__67662 = (i__25827__auto___67661 + (1));
i__25827__auto___67661 = G__67662;
continue;
} else {
}
break;
}

var G__67595 = args67593.length;
switch (G__67595) {
case 1:
return sablono.core.date_field67592.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field67592.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67593.length)].join('')));

}
});

sablono.core.date_field67592.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.date_field67592.call(null,name__33808__auto__,null);
});

sablono.core.date_field67592.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.date_field67592.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field67592);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field67596 = (function sablono$core$datetime_field67596(var_args){
var args67597 = [];
var len__25826__auto___67664 = arguments.length;
var i__25827__auto___67665 = (0);
while(true){
if((i__25827__auto___67665 < len__25826__auto___67664)){
args67597.push((arguments[i__25827__auto___67665]));

var G__67666 = (i__25827__auto___67665 + (1));
i__25827__auto___67665 = G__67666;
continue;
} else {
}
break;
}

var G__67599 = args67597.length;
switch (G__67599) {
case 1:
return sablono.core.datetime_field67596.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field67596.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67597.length)].join('')));

}
});

sablono.core.datetime_field67596.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.datetime_field67596.call(null,name__33808__auto__,null);
});

sablono.core.datetime_field67596.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.datetime_field67596.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field67596);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field67600 = (function sablono$core$datetime_local_field67600(var_args){
var args67601 = [];
var len__25826__auto___67668 = arguments.length;
var i__25827__auto___67669 = (0);
while(true){
if((i__25827__auto___67669 < len__25826__auto___67668)){
args67601.push((arguments[i__25827__auto___67669]));

var G__67670 = (i__25827__auto___67669 + (1));
i__25827__auto___67669 = G__67670;
continue;
} else {
}
break;
}

var G__67603 = args67601.length;
switch (G__67603) {
case 1:
return sablono.core.datetime_local_field67600.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field67600.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67601.length)].join('')));

}
});

sablono.core.datetime_local_field67600.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.datetime_local_field67600.call(null,name__33808__auto__,null);
});

sablono.core.datetime_local_field67600.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.datetime_local_field67600.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field67600);

/**
 * Creates a email input field.
 */
sablono.core.email_field67604 = (function sablono$core$email_field67604(var_args){
var args67605 = [];
var len__25826__auto___67672 = arguments.length;
var i__25827__auto___67673 = (0);
while(true){
if((i__25827__auto___67673 < len__25826__auto___67672)){
args67605.push((arguments[i__25827__auto___67673]));

var G__67674 = (i__25827__auto___67673 + (1));
i__25827__auto___67673 = G__67674;
continue;
} else {
}
break;
}

var G__67607 = args67605.length;
switch (G__67607) {
case 1:
return sablono.core.email_field67604.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field67604.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67605.length)].join('')));

}
});

sablono.core.email_field67604.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.email_field67604.call(null,name__33808__auto__,null);
});

sablono.core.email_field67604.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.email_field67604.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field67604);

/**
 * Creates a file input field.
 */
sablono.core.file_field67608 = (function sablono$core$file_field67608(var_args){
var args67609 = [];
var len__25826__auto___67676 = arguments.length;
var i__25827__auto___67677 = (0);
while(true){
if((i__25827__auto___67677 < len__25826__auto___67676)){
args67609.push((arguments[i__25827__auto___67677]));

var G__67678 = (i__25827__auto___67677 + (1));
i__25827__auto___67677 = G__67678;
continue;
} else {
}
break;
}

var G__67611 = args67609.length;
switch (G__67611) {
case 1:
return sablono.core.file_field67608.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field67608.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67609.length)].join('')));

}
});

sablono.core.file_field67608.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.file_field67608.call(null,name__33808__auto__,null);
});

sablono.core.file_field67608.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.file_field67608.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field67608);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field67612 = (function sablono$core$hidden_field67612(var_args){
var args67613 = [];
var len__25826__auto___67680 = arguments.length;
var i__25827__auto___67681 = (0);
while(true){
if((i__25827__auto___67681 < len__25826__auto___67680)){
args67613.push((arguments[i__25827__auto___67681]));

var G__67682 = (i__25827__auto___67681 + (1));
i__25827__auto___67681 = G__67682;
continue;
} else {
}
break;
}

var G__67615 = args67613.length;
switch (G__67615) {
case 1:
return sablono.core.hidden_field67612.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field67612.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67613.length)].join('')));

}
});

sablono.core.hidden_field67612.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.hidden_field67612.call(null,name__33808__auto__,null);
});

sablono.core.hidden_field67612.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.hidden_field67612.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field67612);

/**
 * Creates a month input field.
 */
sablono.core.month_field67616 = (function sablono$core$month_field67616(var_args){
var args67617 = [];
var len__25826__auto___67684 = arguments.length;
var i__25827__auto___67685 = (0);
while(true){
if((i__25827__auto___67685 < len__25826__auto___67684)){
args67617.push((arguments[i__25827__auto___67685]));

var G__67686 = (i__25827__auto___67685 + (1));
i__25827__auto___67685 = G__67686;
continue;
} else {
}
break;
}

var G__67619 = args67617.length;
switch (G__67619) {
case 1:
return sablono.core.month_field67616.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field67616.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67617.length)].join('')));

}
});

sablono.core.month_field67616.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.month_field67616.call(null,name__33808__auto__,null);
});

sablono.core.month_field67616.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.month_field67616.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field67616);

/**
 * Creates a number input field.
 */
sablono.core.number_field67620 = (function sablono$core$number_field67620(var_args){
var args67621 = [];
var len__25826__auto___67688 = arguments.length;
var i__25827__auto___67689 = (0);
while(true){
if((i__25827__auto___67689 < len__25826__auto___67688)){
args67621.push((arguments[i__25827__auto___67689]));

var G__67690 = (i__25827__auto___67689 + (1));
i__25827__auto___67689 = G__67690;
continue;
} else {
}
break;
}

var G__67623 = args67621.length;
switch (G__67623) {
case 1:
return sablono.core.number_field67620.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field67620.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67621.length)].join('')));

}
});

sablono.core.number_field67620.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.number_field67620.call(null,name__33808__auto__,null);
});

sablono.core.number_field67620.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.number_field67620.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field67620);

/**
 * Creates a password input field.
 */
sablono.core.password_field67624 = (function sablono$core$password_field67624(var_args){
var args67625 = [];
var len__25826__auto___67692 = arguments.length;
var i__25827__auto___67693 = (0);
while(true){
if((i__25827__auto___67693 < len__25826__auto___67692)){
args67625.push((arguments[i__25827__auto___67693]));

var G__67694 = (i__25827__auto___67693 + (1));
i__25827__auto___67693 = G__67694;
continue;
} else {
}
break;
}

var G__67627 = args67625.length;
switch (G__67627) {
case 1:
return sablono.core.password_field67624.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field67624.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67625.length)].join('')));

}
});

sablono.core.password_field67624.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.password_field67624.call(null,name__33808__auto__,null);
});

sablono.core.password_field67624.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.password_field67624.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field67624);

/**
 * Creates a range input field.
 */
sablono.core.range_field67628 = (function sablono$core$range_field67628(var_args){
var args67629 = [];
var len__25826__auto___67696 = arguments.length;
var i__25827__auto___67697 = (0);
while(true){
if((i__25827__auto___67697 < len__25826__auto___67696)){
args67629.push((arguments[i__25827__auto___67697]));

var G__67698 = (i__25827__auto___67697 + (1));
i__25827__auto___67697 = G__67698;
continue;
} else {
}
break;
}

var G__67631 = args67629.length;
switch (G__67631) {
case 1:
return sablono.core.range_field67628.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field67628.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67629.length)].join('')));

}
});

sablono.core.range_field67628.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.range_field67628.call(null,name__33808__auto__,null);
});

sablono.core.range_field67628.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.range_field67628.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field67628);

/**
 * Creates a search input field.
 */
sablono.core.search_field67632 = (function sablono$core$search_field67632(var_args){
var args67633 = [];
var len__25826__auto___67700 = arguments.length;
var i__25827__auto___67701 = (0);
while(true){
if((i__25827__auto___67701 < len__25826__auto___67700)){
args67633.push((arguments[i__25827__auto___67701]));

var G__67702 = (i__25827__auto___67701 + (1));
i__25827__auto___67701 = G__67702;
continue;
} else {
}
break;
}

var G__67635 = args67633.length;
switch (G__67635) {
case 1:
return sablono.core.search_field67632.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field67632.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67633.length)].join('')));

}
});

sablono.core.search_field67632.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.search_field67632.call(null,name__33808__auto__,null);
});

sablono.core.search_field67632.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.search_field67632.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field67632);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field67636 = (function sablono$core$tel_field67636(var_args){
var args67637 = [];
var len__25826__auto___67704 = arguments.length;
var i__25827__auto___67705 = (0);
while(true){
if((i__25827__auto___67705 < len__25826__auto___67704)){
args67637.push((arguments[i__25827__auto___67705]));

var G__67706 = (i__25827__auto___67705 + (1));
i__25827__auto___67705 = G__67706;
continue;
} else {
}
break;
}

var G__67639 = args67637.length;
switch (G__67639) {
case 1:
return sablono.core.tel_field67636.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field67636.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67637.length)].join('')));

}
});

sablono.core.tel_field67636.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.tel_field67636.call(null,name__33808__auto__,null);
});

sablono.core.tel_field67636.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.tel_field67636.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field67636);

/**
 * Creates a text input field.
 */
sablono.core.text_field67640 = (function sablono$core$text_field67640(var_args){
var args67641 = [];
var len__25826__auto___67708 = arguments.length;
var i__25827__auto___67709 = (0);
while(true){
if((i__25827__auto___67709 < len__25826__auto___67708)){
args67641.push((arguments[i__25827__auto___67709]));

var G__67710 = (i__25827__auto___67709 + (1));
i__25827__auto___67709 = G__67710;
continue;
} else {
}
break;
}

var G__67643 = args67641.length;
switch (G__67643) {
case 1:
return sablono.core.text_field67640.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field67640.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67641.length)].join('')));

}
});

sablono.core.text_field67640.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.text_field67640.call(null,name__33808__auto__,null);
});

sablono.core.text_field67640.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.text_field67640.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field67640);

/**
 * Creates a time input field.
 */
sablono.core.time_field67644 = (function sablono$core$time_field67644(var_args){
var args67645 = [];
var len__25826__auto___67712 = arguments.length;
var i__25827__auto___67713 = (0);
while(true){
if((i__25827__auto___67713 < len__25826__auto___67712)){
args67645.push((arguments[i__25827__auto___67713]));

var G__67714 = (i__25827__auto___67713 + (1));
i__25827__auto___67713 = G__67714;
continue;
} else {
}
break;
}

var G__67647 = args67645.length;
switch (G__67647) {
case 1:
return sablono.core.time_field67644.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field67644.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67645.length)].join('')));

}
});

sablono.core.time_field67644.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.time_field67644.call(null,name__33808__auto__,null);
});

sablono.core.time_field67644.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.time_field67644.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field67644);

/**
 * Creates a url input field.
 */
sablono.core.url_field67648 = (function sablono$core$url_field67648(var_args){
var args67649 = [];
var len__25826__auto___67716 = arguments.length;
var i__25827__auto___67717 = (0);
while(true){
if((i__25827__auto___67717 < len__25826__auto___67716)){
args67649.push((arguments[i__25827__auto___67717]));

var G__67718 = (i__25827__auto___67717 + (1));
i__25827__auto___67717 = G__67718;
continue;
} else {
}
break;
}

var G__67651 = args67649.length;
switch (G__67651) {
case 1:
return sablono.core.url_field67648.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field67648.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67649.length)].join('')));

}
});

sablono.core.url_field67648.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.url_field67648.call(null,name__33808__auto__,null);
});

sablono.core.url_field67648.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.url_field67648.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field67648);

/**
 * Creates a week input field.
 */
sablono.core.week_field67652 = (function sablono$core$week_field67652(var_args){
var args67653 = [];
var len__25826__auto___67720 = arguments.length;
var i__25827__auto___67721 = (0);
while(true){
if((i__25827__auto___67721 < len__25826__auto___67720)){
args67653.push((arguments[i__25827__auto___67721]));

var G__67722 = (i__25827__auto___67721 + (1));
i__25827__auto___67721 = G__67722;
continue;
} else {
}
break;
}

var G__67655 = args67653.length;
switch (G__67655) {
case 1:
return sablono.core.week_field67652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field67652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67653.length)].join('')));

}
});

sablono.core.week_field67652.cljs$core$IFn$_invoke$arity$1 = (function (name__33808__auto__){
return sablono.core.week_field67652.call(null,name__33808__auto__,null);
});

sablono.core.week_field67652.cljs$core$IFn$_invoke$arity$2 = (function (name__33808__auto__,value__33809__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__33808__auto__,value__33809__auto__);
});

sablono.core.week_field67652.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field67652);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box67724 = (function sablono$core$check_box67724(var_args){
var args67725 = [];
var len__25826__auto___67728 = arguments.length;
var i__25827__auto___67729 = (0);
while(true){
if((i__25827__auto___67729 < len__25826__auto___67728)){
args67725.push((arguments[i__25827__auto___67729]));

var G__67730 = (i__25827__auto___67729 + (1));
i__25827__auto___67729 = G__67730;
continue;
} else {
}
break;
}

var G__67727 = args67725.length;
switch (G__67727) {
case 1:
return sablono.core.check_box67724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box67724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box67724.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67725.length)].join('')));

}
});

sablono.core.check_box67724.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box67724.call(null,name,null);
});

sablono.core.check_box67724.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box67724.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box67724.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box67724.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box67724);
/**
 * Creates a radio button.
 */
sablono.core.radio_button67732 = (function sablono$core$radio_button67732(var_args){
var args67733 = [];
var len__25826__auto___67736 = arguments.length;
var i__25827__auto___67737 = (0);
while(true){
if((i__25827__auto___67737 < len__25826__auto___67736)){
args67733.push((arguments[i__25827__auto___67737]));

var G__67738 = (i__25827__auto___67737 + (1));
i__25827__auto___67737 = G__67738;
continue;
} else {
}
break;
}

var G__67735 = args67733.length;
switch (G__67735) {
case 1:
return sablono.core.radio_button67732.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button67732.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button67732.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67733.length)].join('')));

}
});

sablono.core.radio_button67732.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button67732.call(null,group,null);
});

sablono.core.radio_button67732.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button67732.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button67732.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button67732.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button67732);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options67740 = (function sablono$core$select_options67740(coll){
var iter__25531__auto__ = (function sablono$core$select_options67740_$_iter__67757(s__67758){
return (new cljs.core.LazySeq(null,(function (){
var s__67758__$1 = s__67758;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__67758__$1);
if(temp__4657__auto__){
var s__67758__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67758__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__67758__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__67760 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__67759 = (0);
while(true){
if((i__67759 < size__25530__auto__)){
var x = cljs.core._nth.call(null,c__25529__auto__,i__67759);
cljs.core.chunk_append.call(null,b__67760,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__67767 = x;
var text = cljs.core.nth.call(null,vec__67767,(0),null);
var val = cljs.core.nth.call(null,vec__67767,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__67767,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options67740.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__67773 = (i__67759 + (1));
i__67759 = G__67773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67760),sablono$core$select_options67740_$_iter__67757.call(null,cljs.core.chunk_rest.call(null,s__67758__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67760),null);
}
} else {
var x = cljs.core.first.call(null,s__67758__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__67770 = x;
var text = cljs.core.nth.call(null,vec__67770,(0),null);
var val = cljs.core.nth.call(null,vec__67770,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__67770,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options67740.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options67740_$_iter__67757.call(null,cljs.core.rest.call(null,s__67758__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25531__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options67740);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down67774 = (function sablono$core$drop_down67774(var_args){
var args67775 = [];
var len__25826__auto___67778 = arguments.length;
var i__25827__auto___67779 = (0);
while(true){
if((i__25827__auto___67779 < len__25826__auto___67778)){
args67775.push((arguments[i__25827__auto___67779]));

var G__67780 = (i__25827__auto___67779 + (1));
i__25827__auto___67779 = G__67780;
continue;
} else {
}
break;
}

var G__67777 = args67775.length;
switch (G__67777) {
case 2:
return sablono.core.drop_down67774.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down67774.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67775.length)].join('')));

}
});

sablono.core.drop_down67774.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down67774.call(null,name,options,null);
});

sablono.core.drop_down67774.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down67774.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down67774);
/**
 * Creates a text area element.
 */
sablono.core.text_area67782 = (function sablono$core$text_area67782(var_args){
var args67783 = [];
var len__25826__auto___67786 = arguments.length;
var i__25827__auto___67787 = (0);
while(true){
if((i__25827__auto___67787 < len__25826__auto___67786)){
args67783.push((arguments[i__25827__auto___67787]));

var G__67788 = (i__25827__auto___67787 + (1));
i__25827__auto___67787 = G__67788;
continue;
} else {
}
break;
}

var G__67785 = args67783.length;
switch (G__67785) {
case 1:
return sablono.core.text_area67782.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area67782.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67783.length)].join('')));

}
});

sablono.core.text_area67782.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area67782.call(null,name,null);
});

sablono.core.text_area67782.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area67782.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area67782);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label67790 = (function sablono$core$label67790(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label67790);
/**
 * Creates a submit button.
 */
sablono.core.submit_button67791 = (function sablono$core$submit_button67791(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button67791);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button67792 = (function sablono$core$reset_button67792(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button67792);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to67793 = (function sablono$core$form_to67793(var_args){
var args__25833__auto__ = [];
var len__25826__auto___67800 = arguments.length;
var i__25827__auto___67801 = (0);
while(true){
if((i__25827__auto___67801 < len__25826__auto___67800)){
args__25833__auto__.push((arguments[i__25827__auto___67801]));

var G__67802 = (i__25827__auto___67801 + (1));
i__25827__auto___67801 = G__67802;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to67793.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

sablono.core.form_to67793.cljs$core$IFn$_invoke$arity$variadic = (function (p__67796,body){
var vec__67797 = p__67796;
var method = cljs.core.nth.call(null,vec__67797,(0),null);
var action = cljs.core.nth.call(null,vec__67797,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to67793.cljs$lang$maxFixedArity = (1);

sablono.core.form_to67793.cljs$lang$applyTo = (function (seq67794){
var G__67795 = cljs.core.first.call(null,seq67794);
var seq67794__$1 = cljs.core.next.call(null,seq67794);
return sablono.core.form_to67793.cljs$core$IFn$_invoke$arity$variadic(G__67795,seq67794__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to67793);

//# sourceMappingURL=core.js.map?rel=1478399650861