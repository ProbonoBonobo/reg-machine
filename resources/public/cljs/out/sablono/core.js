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
var G__48472__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__48469 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__48470 = cljs.core.seq.call(null,vec__48469);
var first__48471 = cljs.core.first.call(null,seq__48470);
var seq__48470__$1 = cljs.core.next.call(null,seq__48470);
var tag = first__48471;
var body = seq__48470__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__48472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48473__i = 0, G__48473__a = new Array(arguments.length -  0);
while (G__48473__i < G__48473__a.length) {G__48473__a[G__48473__i] = arguments[G__48473__i + 0]; ++G__48473__i;}
  args = new cljs.core.IndexedSeq(G__48473__a,0);
} 
return G__48472__delegate.call(this,args);};
G__48472.cljs$lang$maxFixedArity = 0;
G__48472.cljs$lang$applyTo = (function (arglist__48474){
var args = cljs.core.seq(arglist__48474);
return G__48472__delegate(args);
});
G__48472.cljs$core$IFn$_invoke$arity$variadic = G__48472__delegate;
return G__48472;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25531__auto__ = (function sablono$core$update_arglists_$_iter__48479(s__48480){
return (new cljs.core.LazySeq(null,(function (){
var s__48480__$1 = s__48480;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__48480__$1);
if(temp__4657__auto__){
var s__48480__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48480__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__48480__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__48482 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__48481 = (0);
while(true){
if((i__48481 < size__25530__auto__)){
var args = cljs.core._nth.call(null,c__25529__auto__,i__48481);
cljs.core.chunk_append.call(null,b__48482,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__48483 = (i__48481 + (1));
i__48481 = G__48483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48482),sablono$core$update_arglists_$_iter__48479.call(null,cljs.core.chunk_rest.call(null,s__48480__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48482),null);
}
} else {
var args = cljs.core.first.call(null,s__48480__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__48479.call(null,cljs.core.rest.call(null,s__48480__$2)));
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
var len__25826__auto___48489 = arguments.length;
var i__25827__auto___48490 = (0);
while(true){
if((i__25827__auto___48490 < len__25826__auto___48489)){
args__25833__auto__.push((arguments[i__25827__auto___48490]));

var G__48491 = (i__25827__auto___48490 + (1));
i__25827__auto___48490 = G__48491;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25531__auto__ = (function sablono$core$iter__48485(s__48486){
return (new cljs.core.LazySeq(null,(function (){
var s__48486__$1 = s__48486;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__48486__$1);
if(temp__4657__auto__){
var s__48486__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48486__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__48486__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__48488 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__48487 = (0);
while(true){
if((i__48487 < size__25530__auto__)){
var style = cljs.core._nth.call(null,c__25529__auto__,i__48487);
cljs.core.chunk_append.call(null,b__48488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__48492 = (i__48487 + (1));
i__48487 = G__48492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48488),sablono$core$iter__48485.call(null,cljs.core.chunk_rest.call(null,s__48486__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48488),null);
}
} else {
var style = cljs.core.first.call(null,s__48486__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__48485.call(null,cljs.core.rest.call(null,s__48486__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq48484){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48484));
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
sablono.core.link_to48493 = (function sablono$core$link_to48493(var_args){
var args__25833__auto__ = [];
var len__25826__auto___48496 = arguments.length;
var i__25827__auto___48497 = (0);
while(true){
if((i__25827__auto___48497 < len__25826__auto___48496)){
args__25833__auto__.push((arguments[i__25827__auto___48497]));

var G__48498 = (i__25827__auto___48497 + (1));
i__25827__auto___48497 = G__48498;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to48493.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

sablono.core.link_to48493.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to48493.cljs$lang$maxFixedArity = (1);

sablono.core.link_to48493.cljs$lang$applyTo = (function (seq48494){
var G__48495 = cljs.core.first.call(null,seq48494);
var seq48494__$1 = cljs.core.next.call(null,seq48494);
return sablono.core.link_to48493.cljs$core$IFn$_invoke$arity$variadic(G__48495,seq48494__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to48493);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to48499 = (function sablono$core$mail_to48499(var_args){
var args__25833__auto__ = [];
var len__25826__auto___48506 = arguments.length;
var i__25827__auto___48507 = (0);
while(true){
if((i__25827__auto___48507 < len__25826__auto___48506)){
args__25833__auto__.push((arguments[i__25827__auto___48507]));

var G__48508 = (i__25827__auto___48507 + (1));
i__25827__auto___48507 = G__48508;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to48499.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

sablono.core.mail_to48499.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__48502){
var vec__48503 = p__48502;
var content = cljs.core.nth.call(null,vec__48503,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24751__auto__ = content;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to48499.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to48499.cljs$lang$applyTo = (function (seq48500){
var G__48501 = cljs.core.first.call(null,seq48500);
var seq48500__$1 = cljs.core.next.call(null,seq48500);
return sablono.core.mail_to48499.cljs$core$IFn$_invoke$arity$variadic(G__48501,seq48500__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to48499);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list48509 = (function sablono$core$unordered_list48509(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25531__auto__ = (function sablono$core$unordered_list48509_$_iter__48514(s__48515){
return (new cljs.core.LazySeq(null,(function (){
var s__48515__$1 = s__48515;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__48515__$1);
if(temp__4657__auto__){
var s__48515__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48515__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__48515__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__48517 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__48516 = (0);
while(true){
if((i__48516 < size__25530__auto__)){
var x = cljs.core._nth.call(null,c__25529__auto__,i__48516);
cljs.core.chunk_append.call(null,b__48517,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__48518 = (i__48516 + (1));
i__48516 = G__48518;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48517),sablono$core$unordered_list48509_$_iter__48514.call(null,cljs.core.chunk_rest.call(null,s__48515__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48517),null);
}
} else {
var x = cljs.core.first.call(null,s__48515__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list48509_$_iter__48514.call(null,cljs.core.rest.call(null,s__48515__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list48509);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list48519 = (function sablono$core$ordered_list48519(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25531__auto__ = (function sablono$core$ordered_list48519_$_iter__48524(s__48525){
return (new cljs.core.LazySeq(null,(function (){
var s__48525__$1 = s__48525;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__48525__$1);
if(temp__4657__auto__){
var s__48525__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48525__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__48525__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__48527 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__48526 = (0);
while(true){
if((i__48526 < size__25530__auto__)){
var x = cljs.core._nth.call(null,c__25529__auto__,i__48526);
cljs.core.chunk_append.call(null,b__48527,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__48528 = (i__48526 + (1));
i__48526 = G__48528;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48527),sablono$core$ordered_list48519_$_iter__48524.call(null,cljs.core.chunk_rest.call(null,s__48525__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48527),null);
}
} else {
var x = cljs.core.first.call(null,s__48525__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list48519_$_iter__48524.call(null,cljs.core.rest.call(null,s__48525__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list48519);
/**
 * Create an image element.
 */
sablono.core.image48529 = (function sablono$core$image48529(var_args){
var args48530 = [];
var len__25826__auto___48533 = arguments.length;
var i__25827__auto___48534 = (0);
while(true){
if((i__25827__auto___48534 < len__25826__auto___48533)){
args48530.push((arguments[i__25827__auto___48534]));

var G__48535 = (i__25827__auto___48534 + (1));
i__25827__auto___48534 = G__48535;
continue;
} else {
}
break;
}

var G__48532 = args48530.length;
switch (G__48532) {
case 1:
return sablono.core.image48529.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image48529.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48530.length)].join('')));

}
});

sablono.core.image48529.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image48529.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image48529.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image48529);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__48537_SHARP_,p2__48538_SHARP_){
return [cljs.core.str(p1__48537_SHARP_),cljs.core.str("["),cljs.core.str(p2__48538_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__48539_SHARP_,p2__48540_SHARP_){
return [cljs.core.str(p1__48539_SHARP_),cljs.core.str("-"),cljs.core.str(p2__48540_SHARP_)].join('');
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
sablono.core.color_field48541 = (function sablono$core$color_field48541(var_args){
var args48542 = [];
var len__25826__auto___48609 = arguments.length;
var i__25827__auto___48610 = (0);
while(true){
if((i__25827__auto___48610 < len__25826__auto___48609)){
args48542.push((arguments[i__25827__auto___48610]));

var G__48611 = (i__25827__auto___48610 + (1));
i__25827__auto___48610 = G__48611;
continue;
} else {
}
break;
}

var G__48544 = args48542.length;
switch (G__48544) {
case 1:
return sablono.core.color_field48541.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field48541.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48542.length)].join('')));

}
});

sablono.core.color_field48541.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.color_field48541.call(null,name__48456__auto__,null);
});

sablono.core.color_field48541.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.color_field48541.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field48541);

/**
 * Creates a date input field.
 */
sablono.core.date_field48545 = (function sablono$core$date_field48545(var_args){
var args48546 = [];
var len__25826__auto___48613 = arguments.length;
var i__25827__auto___48614 = (0);
while(true){
if((i__25827__auto___48614 < len__25826__auto___48613)){
args48546.push((arguments[i__25827__auto___48614]));

var G__48615 = (i__25827__auto___48614 + (1));
i__25827__auto___48614 = G__48615;
continue;
} else {
}
break;
}

var G__48548 = args48546.length;
switch (G__48548) {
case 1:
return sablono.core.date_field48545.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field48545.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48546.length)].join('')));

}
});

sablono.core.date_field48545.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.date_field48545.call(null,name__48456__auto__,null);
});

sablono.core.date_field48545.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.date_field48545.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field48545);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field48549 = (function sablono$core$datetime_field48549(var_args){
var args48550 = [];
var len__25826__auto___48617 = arguments.length;
var i__25827__auto___48618 = (0);
while(true){
if((i__25827__auto___48618 < len__25826__auto___48617)){
args48550.push((arguments[i__25827__auto___48618]));

var G__48619 = (i__25827__auto___48618 + (1));
i__25827__auto___48618 = G__48619;
continue;
} else {
}
break;
}

var G__48552 = args48550.length;
switch (G__48552) {
case 1:
return sablono.core.datetime_field48549.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field48549.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48550.length)].join('')));

}
});

sablono.core.datetime_field48549.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.datetime_field48549.call(null,name__48456__auto__,null);
});

sablono.core.datetime_field48549.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.datetime_field48549.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field48549);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field48553 = (function sablono$core$datetime_local_field48553(var_args){
var args48554 = [];
var len__25826__auto___48621 = arguments.length;
var i__25827__auto___48622 = (0);
while(true){
if((i__25827__auto___48622 < len__25826__auto___48621)){
args48554.push((arguments[i__25827__auto___48622]));

var G__48623 = (i__25827__auto___48622 + (1));
i__25827__auto___48622 = G__48623;
continue;
} else {
}
break;
}

var G__48556 = args48554.length;
switch (G__48556) {
case 1:
return sablono.core.datetime_local_field48553.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field48553.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48554.length)].join('')));

}
});

sablono.core.datetime_local_field48553.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.datetime_local_field48553.call(null,name__48456__auto__,null);
});

sablono.core.datetime_local_field48553.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.datetime_local_field48553.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field48553);

/**
 * Creates a email input field.
 */
sablono.core.email_field48557 = (function sablono$core$email_field48557(var_args){
var args48558 = [];
var len__25826__auto___48625 = arguments.length;
var i__25827__auto___48626 = (0);
while(true){
if((i__25827__auto___48626 < len__25826__auto___48625)){
args48558.push((arguments[i__25827__auto___48626]));

var G__48627 = (i__25827__auto___48626 + (1));
i__25827__auto___48626 = G__48627;
continue;
} else {
}
break;
}

var G__48560 = args48558.length;
switch (G__48560) {
case 1:
return sablono.core.email_field48557.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field48557.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48558.length)].join('')));

}
});

sablono.core.email_field48557.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.email_field48557.call(null,name__48456__auto__,null);
});

sablono.core.email_field48557.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.email_field48557.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field48557);

/**
 * Creates a file input field.
 */
sablono.core.file_field48561 = (function sablono$core$file_field48561(var_args){
var args48562 = [];
var len__25826__auto___48629 = arguments.length;
var i__25827__auto___48630 = (0);
while(true){
if((i__25827__auto___48630 < len__25826__auto___48629)){
args48562.push((arguments[i__25827__auto___48630]));

var G__48631 = (i__25827__auto___48630 + (1));
i__25827__auto___48630 = G__48631;
continue;
} else {
}
break;
}

var G__48564 = args48562.length;
switch (G__48564) {
case 1:
return sablono.core.file_field48561.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field48561.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48562.length)].join('')));

}
});

sablono.core.file_field48561.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.file_field48561.call(null,name__48456__auto__,null);
});

sablono.core.file_field48561.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.file_field48561.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field48561);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field48565 = (function sablono$core$hidden_field48565(var_args){
var args48566 = [];
var len__25826__auto___48633 = arguments.length;
var i__25827__auto___48634 = (0);
while(true){
if((i__25827__auto___48634 < len__25826__auto___48633)){
args48566.push((arguments[i__25827__auto___48634]));

var G__48635 = (i__25827__auto___48634 + (1));
i__25827__auto___48634 = G__48635;
continue;
} else {
}
break;
}

var G__48568 = args48566.length;
switch (G__48568) {
case 1:
return sablono.core.hidden_field48565.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field48565.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48566.length)].join('')));

}
});

sablono.core.hidden_field48565.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.hidden_field48565.call(null,name__48456__auto__,null);
});

sablono.core.hidden_field48565.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.hidden_field48565.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field48565);

/**
 * Creates a month input field.
 */
sablono.core.month_field48569 = (function sablono$core$month_field48569(var_args){
var args48570 = [];
var len__25826__auto___48637 = arguments.length;
var i__25827__auto___48638 = (0);
while(true){
if((i__25827__auto___48638 < len__25826__auto___48637)){
args48570.push((arguments[i__25827__auto___48638]));

var G__48639 = (i__25827__auto___48638 + (1));
i__25827__auto___48638 = G__48639;
continue;
} else {
}
break;
}

var G__48572 = args48570.length;
switch (G__48572) {
case 1:
return sablono.core.month_field48569.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field48569.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48570.length)].join('')));

}
});

sablono.core.month_field48569.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.month_field48569.call(null,name__48456__auto__,null);
});

sablono.core.month_field48569.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.month_field48569.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field48569);

/**
 * Creates a number input field.
 */
sablono.core.number_field48573 = (function sablono$core$number_field48573(var_args){
var args48574 = [];
var len__25826__auto___48641 = arguments.length;
var i__25827__auto___48642 = (0);
while(true){
if((i__25827__auto___48642 < len__25826__auto___48641)){
args48574.push((arguments[i__25827__auto___48642]));

var G__48643 = (i__25827__auto___48642 + (1));
i__25827__auto___48642 = G__48643;
continue;
} else {
}
break;
}

var G__48576 = args48574.length;
switch (G__48576) {
case 1:
return sablono.core.number_field48573.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field48573.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48574.length)].join('')));

}
});

sablono.core.number_field48573.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.number_field48573.call(null,name__48456__auto__,null);
});

sablono.core.number_field48573.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.number_field48573.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field48573);

/**
 * Creates a password input field.
 */
sablono.core.password_field48577 = (function sablono$core$password_field48577(var_args){
var args48578 = [];
var len__25826__auto___48645 = arguments.length;
var i__25827__auto___48646 = (0);
while(true){
if((i__25827__auto___48646 < len__25826__auto___48645)){
args48578.push((arguments[i__25827__auto___48646]));

var G__48647 = (i__25827__auto___48646 + (1));
i__25827__auto___48646 = G__48647;
continue;
} else {
}
break;
}

var G__48580 = args48578.length;
switch (G__48580) {
case 1:
return sablono.core.password_field48577.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field48577.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48578.length)].join('')));

}
});

sablono.core.password_field48577.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.password_field48577.call(null,name__48456__auto__,null);
});

sablono.core.password_field48577.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.password_field48577.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field48577);

/**
 * Creates a range input field.
 */
sablono.core.range_field48581 = (function sablono$core$range_field48581(var_args){
var args48582 = [];
var len__25826__auto___48649 = arguments.length;
var i__25827__auto___48650 = (0);
while(true){
if((i__25827__auto___48650 < len__25826__auto___48649)){
args48582.push((arguments[i__25827__auto___48650]));

var G__48651 = (i__25827__auto___48650 + (1));
i__25827__auto___48650 = G__48651;
continue;
} else {
}
break;
}

var G__48584 = args48582.length;
switch (G__48584) {
case 1:
return sablono.core.range_field48581.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field48581.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48582.length)].join('')));

}
});

sablono.core.range_field48581.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.range_field48581.call(null,name__48456__auto__,null);
});

sablono.core.range_field48581.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.range_field48581.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field48581);

/**
 * Creates a search input field.
 */
sablono.core.search_field48585 = (function sablono$core$search_field48585(var_args){
var args48586 = [];
var len__25826__auto___48653 = arguments.length;
var i__25827__auto___48654 = (0);
while(true){
if((i__25827__auto___48654 < len__25826__auto___48653)){
args48586.push((arguments[i__25827__auto___48654]));

var G__48655 = (i__25827__auto___48654 + (1));
i__25827__auto___48654 = G__48655;
continue;
} else {
}
break;
}

var G__48588 = args48586.length;
switch (G__48588) {
case 1:
return sablono.core.search_field48585.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field48585.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48586.length)].join('')));

}
});

sablono.core.search_field48585.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.search_field48585.call(null,name__48456__auto__,null);
});

sablono.core.search_field48585.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.search_field48585.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field48585);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field48589 = (function sablono$core$tel_field48589(var_args){
var args48590 = [];
var len__25826__auto___48657 = arguments.length;
var i__25827__auto___48658 = (0);
while(true){
if((i__25827__auto___48658 < len__25826__auto___48657)){
args48590.push((arguments[i__25827__auto___48658]));

var G__48659 = (i__25827__auto___48658 + (1));
i__25827__auto___48658 = G__48659;
continue;
} else {
}
break;
}

var G__48592 = args48590.length;
switch (G__48592) {
case 1:
return sablono.core.tel_field48589.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field48589.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48590.length)].join('')));

}
});

sablono.core.tel_field48589.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.tel_field48589.call(null,name__48456__auto__,null);
});

sablono.core.tel_field48589.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.tel_field48589.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field48589);

/**
 * Creates a text input field.
 */
sablono.core.text_field48593 = (function sablono$core$text_field48593(var_args){
var args48594 = [];
var len__25826__auto___48661 = arguments.length;
var i__25827__auto___48662 = (0);
while(true){
if((i__25827__auto___48662 < len__25826__auto___48661)){
args48594.push((arguments[i__25827__auto___48662]));

var G__48663 = (i__25827__auto___48662 + (1));
i__25827__auto___48662 = G__48663;
continue;
} else {
}
break;
}

var G__48596 = args48594.length;
switch (G__48596) {
case 1:
return sablono.core.text_field48593.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field48593.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48594.length)].join('')));

}
});

sablono.core.text_field48593.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.text_field48593.call(null,name__48456__auto__,null);
});

sablono.core.text_field48593.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.text_field48593.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field48593);

/**
 * Creates a time input field.
 */
sablono.core.time_field48597 = (function sablono$core$time_field48597(var_args){
var args48598 = [];
var len__25826__auto___48665 = arguments.length;
var i__25827__auto___48666 = (0);
while(true){
if((i__25827__auto___48666 < len__25826__auto___48665)){
args48598.push((arguments[i__25827__auto___48666]));

var G__48667 = (i__25827__auto___48666 + (1));
i__25827__auto___48666 = G__48667;
continue;
} else {
}
break;
}

var G__48600 = args48598.length;
switch (G__48600) {
case 1:
return sablono.core.time_field48597.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field48597.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48598.length)].join('')));

}
});

sablono.core.time_field48597.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.time_field48597.call(null,name__48456__auto__,null);
});

sablono.core.time_field48597.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.time_field48597.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field48597);

/**
 * Creates a url input field.
 */
sablono.core.url_field48601 = (function sablono$core$url_field48601(var_args){
var args48602 = [];
var len__25826__auto___48669 = arguments.length;
var i__25827__auto___48670 = (0);
while(true){
if((i__25827__auto___48670 < len__25826__auto___48669)){
args48602.push((arguments[i__25827__auto___48670]));

var G__48671 = (i__25827__auto___48670 + (1));
i__25827__auto___48670 = G__48671;
continue;
} else {
}
break;
}

var G__48604 = args48602.length;
switch (G__48604) {
case 1:
return sablono.core.url_field48601.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field48601.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48602.length)].join('')));

}
});

sablono.core.url_field48601.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.url_field48601.call(null,name__48456__auto__,null);
});

sablono.core.url_field48601.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.url_field48601.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field48601);

/**
 * Creates a week input field.
 */
sablono.core.week_field48605 = (function sablono$core$week_field48605(var_args){
var args48606 = [];
var len__25826__auto___48673 = arguments.length;
var i__25827__auto___48674 = (0);
while(true){
if((i__25827__auto___48674 < len__25826__auto___48673)){
args48606.push((arguments[i__25827__auto___48674]));

var G__48675 = (i__25827__auto___48674 + (1));
i__25827__auto___48674 = G__48675;
continue;
} else {
}
break;
}

var G__48608 = args48606.length;
switch (G__48608) {
case 1:
return sablono.core.week_field48605.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field48605.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48606.length)].join('')));

}
});

sablono.core.week_field48605.cljs$core$IFn$_invoke$arity$1 = (function (name__48456__auto__){
return sablono.core.week_field48605.call(null,name__48456__auto__,null);
});

sablono.core.week_field48605.cljs$core$IFn$_invoke$arity$2 = (function (name__48456__auto__,value__48457__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__48456__auto__,value__48457__auto__);
});

sablono.core.week_field48605.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field48605);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box48677 = (function sablono$core$check_box48677(var_args){
var args48678 = [];
var len__25826__auto___48681 = arguments.length;
var i__25827__auto___48682 = (0);
while(true){
if((i__25827__auto___48682 < len__25826__auto___48681)){
args48678.push((arguments[i__25827__auto___48682]));

var G__48683 = (i__25827__auto___48682 + (1));
i__25827__auto___48682 = G__48683;
continue;
} else {
}
break;
}

var G__48680 = args48678.length;
switch (G__48680) {
case 1:
return sablono.core.check_box48677.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box48677.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box48677.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48678.length)].join('')));

}
});

sablono.core.check_box48677.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box48677.call(null,name,null);
});

sablono.core.check_box48677.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box48677.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box48677.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box48677.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box48677);
/**
 * Creates a radio button.
 */
sablono.core.radio_button48685 = (function sablono$core$radio_button48685(var_args){
var args48686 = [];
var len__25826__auto___48689 = arguments.length;
var i__25827__auto___48690 = (0);
while(true){
if((i__25827__auto___48690 < len__25826__auto___48689)){
args48686.push((arguments[i__25827__auto___48690]));

var G__48691 = (i__25827__auto___48690 + (1));
i__25827__auto___48690 = G__48691;
continue;
} else {
}
break;
}

var G__48688 = args48686.length;
switch (G__48688) {
case 1:
return sablono.core.radio_button48685.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button48685.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button48685.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48686.length)].join('')));

}
});

sablono.core.radio_button48685.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button48685.call(null,group,null);
});

sablono.core.radio_button48685.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button48685.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button48685.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button48685.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button48685);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options48693 = (function sablono$core$select_options48693(coll){
var iter__25531__auto__ = (function sablono$core$select_options48693_$_iter__48710(s__48711){
return (new cljs.core.LazySeq(null,(function (){
var s__48711__$1 = s__48711;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__48711__$1);
if(temp__4657__auto__){
var s__48711__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48711__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__48711__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__48713 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__48712 = (0);
while(true){
if((i__48712 < size__25530__auto__)){
var x = cljs.core._nth.call(null,c__25529__auto__,i__48712);
cljs.core.chunk_append.call(null,b__48713,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__48720 = x;
var text = cljs.core.nth.call(null,vec__48720,(0),null);
var val = cljs.core.nth.call(null,vec__48720,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__48720,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options48693.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__48726 = (i__48712 + (1));
i__48712 = G__48726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48713),sablono$core$select_options48693_$_iter__48710.call(null,cljs.core.chunk_rest.call(null,s__48711__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48713),null);
}
} else {
var x = cljs.core.first.call(null,s__48711__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__48723 = x;
var text = cljs.core.nth.call(null,vec__48723,(0),null);
var val = cljs.core.nth.call(null,vec__48723,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__48723,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options48693.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options48693_$_iter__48710.call(null,cljs.core.rest.call(null,s__48711__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options48693);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down48727 = (function sablono$core$drop_down48727(var_args){
var args48728 = [];
var len__25826__auto___48731 = arguments.length;
var i__25827__auto___48732 = (0);
while(true){
if((i__25827__auto___48732 < len__25826__auto___48731)){
args48728.push((arguments[i__25827__auto___48732]));

var G__48733 = (i__25827__auto___48732 + (1));
i__25827__auto___48732 = G__48733;
continue;
} else {
}
break;
}

var G__48730 = args48728.length;
switch (G__48730) {
case 2:
return sablono.core.drop_down48727.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down48727.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48728.length)].join('')));

}
});

sablono.core.drop_down48727.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down48727.call(null,name,options,null);
});

sablono.core.drop_down48727.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down48727.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down48727);
/**
 * Creates a text area element.
 */
sablono.core.text_area48735 = (function sablono$core$text_area48735(var_args){
var args48736 = [];
var len__25826__auto___48739 = arguments.length;
var i__25827__auto___48740 = (0);
while(true){
if((i__25827__auto___48740 < len__25826__auto___48739)){
args48736.push((arguments[i__25827__auto___48740]));

var G__48741 = (i__25827__auto___48740 + (1));
i__25827__auto___48740 = G__48741;
continue;
} else {
}
break;
}

var G__48738 = args48736.length;
switch (G__48738) {
case 1:
return sablono.core.text_area48735.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area48735.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48736.length)].join('')));

}
});

sablono.core.text_area48735.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area48735.call(null,name,null);
});

sablono.core.text_area48735.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area48735.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area48735);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label48743 = (function sablono$core$label48743(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label48743);
/**
 * Creates a submit button.
 */
sablono.core.submit_button48744 = (function sablono$core$submit_button48744(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button48744);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button48745 = (function sablono$core$reset_button48745(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button48745);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to48746 = (function sablono$core$form_to48746(var_args){
var args__25833__auto__ = [];
var len__25826__auto___48753 = arguments.length;
var i__25827__auto___48754 = (0);
while(true){
if((i__25827__auto___48754 < len__25826__auto___48753)){
args__25833__auto__.push((arguments[i__25827__auto___48754]));

var G__48755 = (i__25827__auto___48754 + (1));
i__25827__auto___48754 = G__48755;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to48746.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

sablono.core.form_to48746.cljs$core$IFn$_invoke$arity$variadic = (function (p__48749,body){
var vec__48750 = p__48749;
var method = cljs.core.nth.call(null,vec__48750,(0),null);
var action = cljs.core.nth.call(null,vec__48750,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to48746.cljs$lang$maxFixedArity = (1);

sablono.core.form_to48746.cljs$lang$applyTo = (function (seq48747){
var G__48748 = cljs.core.first.call(null,seq48747);
var seq48747__$1 = cljs.core.next.call(null,seq48747);
return sablono.core.form_to48746.cljs$core$IFn$_invoke$arity$variadic(G__48748,seq48747__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to48746);

//# sourceMappingURL=core.js.map?rel=1478445858969