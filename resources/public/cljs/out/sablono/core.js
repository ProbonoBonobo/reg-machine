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
var G__55824__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__55821 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__55822 = cljs.core.seq.call(null,vec__55821);
var first__55823 = cljs.core.first.call(null,seq__55822);
var seq__55822__$1 = cljs.core.next.call(null,seq__55822);
var tag = first__55823;
var body = seq__55822__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__55824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55825__i = 0, G__55825__a = new Array(arguments.length -  0);
while (G__55825__i < G__55825__a.length) {G__55825__a[G__55825__i] = arguments[G__55825__i + 0]; ++G__55825__i;}
  args = new cljs.core.IndexedSeq(G__55825__a,0);
} 
return G__55824__delegate.call(this,args);};
G__55824.cljs$lang$maxFixedArity = 0;
G__55824.cljs$lang$applyTo = (function (arglist__55826){
var args = cljs.core.seq(arglist__55826);
return G__55824__delegate(args);
});
G__55824.cljs$core$IFn$_invoke$arity$variadic = G__55824__delegate;
return G__55824;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25531__auto__ = (function sablono$core$update_arglists_$_iter__55831(s__55832){
return (new cljs.core.LazySeq(null,(function (){
var s__55832__$1 = s__55832;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55832__$1);
if(temp__4657__auto__){
var s__55832__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55832__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__55832__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__55834 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__55833 = (0);
while(true){
if((i__55833 < size__25530__auto__)){
var args = cljs.core._nth.call(null,c__25529__auto__,i__55833);
cljs.core.chunk_append.call(null,b__55834,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__55835 = (i__55833 + (1));
i__55833 = G__55835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55834),sablono$core$update_arglists_$_iter__55831.call(null,cljs.core.chunk_rest.call(null,s__55832__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55834),null);
}
} else {
var args = cljs.core.first.call(null,s__55832__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__55831.call(null,cljs.core.rest.call(null,s__55832__$2)));
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
var len__25826__auto___55841 = arguments.length;
var i__25827__auto___55842 = (0);
while(true){
if((i__25827__auto___55842 < len__25826__auto___55841)){
args__25833__auto__.push((arguments[i__25827__auto___55842]));

var G__55843 = (i__25827__auto___55842 + (1));
i__25827__auto___55842 = G__55843;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25531__auto__ = (function sablono$core$iter__55837(s__55838){
return (new cljs.core.LazySeq(null,(function (){
var s__55838__$1 = s__55838;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55838__$1);
if(temp__4657__auto__){
var s__55838__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55838__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__55838__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__55840 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__55839 = (0);
while(true){
if((i__55839 < size__25530__auto__)){
var style = cljs.core._nth.call(null,c__25529__auto__,i__55839);
cljs.core.chunk_append.call(null,b__55840,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__55844 = (i__55839 + (1));
i__55839 = G__55844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55840),sablono$core$iter__55837.call(null,cljs.core.chunk_rest.call(null,s__55838__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55840),null);
}
} else {
var style = cljs.core.first.call(null,s__55838__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__55837.call(null,cljs.core.rest.call(null,s__55838__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq55836){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55836));
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
sablono.core.link_to55845 = (function sablono$core$link_to55845(var_args){
var args__25833__auto__ = [];
var len__25826__auto___55848 = arguments.length;
var i__25827__auto___55849 = (0);
while(true){
if((i__25827__auto___55849 < len__25826__auto___55848)){
args__25833__auto__.push((arguments[i__25827__auto___55849]));

var G__55850 = (i__25827__auto___55849 + (1));
i__25827__auto___55849 = G__55850;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to55845.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

sablono.core.link_to55845.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to55845.cljs$lang$maxFixedArity = (1);

sablono.core.link_to55845.cljs$lang$applyTo = (function (seq55846){
var G__55847 = cljs.core.first.call(null,seq55846);
var seq55846__$1 = cljs.core.next.call(null,seq55846);
return sablono.core.link_to55845.cljs$core$IFn$_invoke$arity$variadic(G__55847,seq55846__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to55845);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to55851 = (function sablono$core$mail_to55851(var_args){
var args__25833__auto__ = [];
var len__25826__auto___55858 = arguments.length;
var i__25827__auto___55859 = (0);
while(true){
if((i__25827__auto___55859 < len__25826__auto___55858)){
args__25833__auto__.push((arguments[i__25827__auto___55859]));

var G__55860 = (i__25827__auto___55859 + (1));
i__25827__auto___55859 = G__55860;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to55851.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

sablono.core.mail_to55851.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__55854){
var vec__55855 = p__55854;
var content = cljs.core.nth.call(null,vec__55855,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24751__auto__ = content;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to55851.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to55851.cljs$lang$applyTo = (function (seq55852){
var G__55853 = cljs.core.first.call(null,seq55852);
var seq55852__$1 = cljs.core.next.call(null,seq55852);
return sablono.core.mail_to55851.cljs$core$IFn$_invoke$arity$variadic(G__55853,seq55852__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to55851);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list55861 = (function sablono$core$unordered_list55861(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25531__auto__ = (function sablono$core$unordered_list55861_$_iter__55866(s__55867){
return (new cljs.core.LazySeq(null,(function (){
var s__55867__$1 = s__55867;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55867__$1);
if(temp__4657__auto__){
var s__55867__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55867__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__55867__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__55869 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__55868 = (0);
while(true){
if((i__55868 < size__25530__auto__)){
var x = cljs.core._nth.call(null,c__25529__auto__,i__55868);
cljs.core.chunk_append.call(null,b__55869,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__55870 = (i__55868 + (1));
i__55868 = G__55870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55869),sablono$core$unordered_list55861_$_iter__55866.call(null,cljs.core.chunk_rest.call(null,s__55867__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55869),null);
}
} else {
var x = cljs.core.first.call(null,s__55867__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list55861_$_iter__55866.call(null,cljs.core.rest.call(null,s__55867__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list55861);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list55871 = (function sablono$core$ordered_list55871(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25531__auto__ = (function sablono$core$ordered_list55871_$_iter__55876(s__55877){
return (new cljs.core.LazySeq(null,(function (){
var s__55877__$1 = s__55877;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__55877__$1);
if(temp__4657__auto__){
var s__55877__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55877__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__55877__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__55879 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__55878 = (0);
while(true){
if((i__55878 < size__25530__auto__)){
var x = cljs.core._nth.call(null,c__25529__auto__,i__55878);
cljs.core.chunk_append.call(null,b__55879,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__55880 = (i__55878 + (1));
i__55878 = G__55880;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55879),sablono$core$ordered_list55871_$_iter__55876.call(null,cljs.core.chunk_rest.call(null,s__55877__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55879),null);
}
} else {
var x = cljs.core.first.call(null,s__55877__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list55871_$_iter__55876.call(null,cljs.core.rest.call(null,s__55877__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list55871);
/**
 * Create an image element.
 */
sablono.core.image55881 = (function sablono$core$image55881(var_args){
var args55882 = [];
var len__25826__auto___55885 = arguments.length;
var i__25827__auto___55886 = (0);
while(true){
if((i__25827__auto___55886 < len__25826__auto___55885)){
args55882.push((arguments[i__25827__auto___55886]));

var G__55887 = (i__25827__auto___55886 + (1));
i__25827__auto___55886 = G__55887;
continue;
} else {
}
break;
}

var G__55884 = args55882.length;
switch (G__55884) {
case 1:
return sablono.core.image55881.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image55881.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55882.length)].join('')));

}
});

sablono.core.image55881.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image55881.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image55881.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image55881);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__55889_SHARP_,p2__55890_SHARP_){
return [cljs.core.str(p1__55889_SHARP_),cljs.core.str("["),cljs.core.str(p2__55890_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__55891_SHARP_,p2__55892_SHARP_){
return [cljs.core.str(p1__55891_SHARP_),cljs.core.str("-"),cljs.core.str(p2__55892_SHARP_)].join('');
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
sablono.core.color_field55893 = (function sablono$core$color_field55893(var_args){
var args55894 = [];
var len__25826__auto___55961 = arguments.length;
var i__25827__auto___55962 = (0);
while(true){
if((i__25827__auto___55962 < len__25826__auto___55961)){
args55894.push((arguments[i__25827__auto___55962]));

var G__55963 = (i__25827__auto___55962 + (1));
i__25827__auto___55962 = G__55963;
continue;
} else {
}
break;
}

var G__55896 = args55894.length;
switch (G__55896) {
case 1:
return sablono.core.color_field55893.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field55893.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55894.length)].join('')));

}
});

sablono.core.color_field55893.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.color_field55893.call(null,name__40515__auto__,null);
});

sablono.core.color_field55893.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.color_field55893.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field55893);

/**
 * Creates a date input field.
 */
sablono.core.date_field55897 = (function sablono$core$date_field55897(var_args){
var args55898 = [];
var len__25826__auto___55965 = arguments.length;
var i__25827__auto___55966 = (0);
while(true){
if((i__25827__auto___55966 < len__25826__auto___55965)){
args55898.push((arguments[i__25827__auto___55966]));

var G__55967 = (i__25827__auto___55966 + (1));
i__25827__auto___55966 = G__55967;
continue;
} else {
}
break;
}

var G__55900 = args55898.length;
switch (G__55900) {
case 1:
return sablono.core.date_field55897.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field55897.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55898.length)].join('')));

}
});

sablono.core.date_field55897.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.date_field55897.call(null,name__40515__auto__,null);
});

sablono.core.date_field55897.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.date_field55897.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field55897);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field55901 = (function sablono$core$datetime_field55901(var_args){
var args55902 = [];
var len__25826__auto___55969 = arguments.length;
var i__25827__auto___55970 = (0);
while(true){
if((i__25827__auto___55970 < len__25826__auto___55969)){
args55902.push((arguments[i__25827__auto___55970]));

var G__55971 = (i__25827__auto___55970 + (1));
i__25827__auto___55970 = G__55971;
continue;
} else {
}
break;
}

var G__55904 = args55902.length;
switch (G__55904) {
case 1:
return sablono.core.datetime_field55901.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field55901.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55902.length)].join('')));

}
});

sablono.core.datetime_field55901.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.datetime_field55901.call(null,name__40515__auto__,null);
});

sablono.core.datetime_field55901.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.datetime_field55901.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field55901);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field55905 = (function sablono$core$datetime_local_field55905(var_args){
var args55906 = [];
var len__25826__auto___55973 = arguments.length;
var i__25827__auto___55974 = (0);
while(true){
if((i__25827__auto___55974 < len__25826__auto___55973)){
args55906.push((arguments[i__25827__auto___55974]));

var G__55975 = (i__25827__auto___55974 + (1));
i__25827__auto___55974 = G__55975;
continue;
} else {
}
break;
}

var G__55908 = args55906.length;
switch (G__55908) {
case 1:
return sablono.core.datetime_local_field55905.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field55905.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55906.length)].join('')));

}
});

sablono.core.datetime_local_field55905.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.datetime_local_field55905.call(null,name__40515__auto__,null);
});

sablono.core.datetime_local_field55905.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.datetime_local_field55905.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field55905);

/**
 * Creates a email input field.
 */
sablono.core.email_field55909 = (function sablono$core$email_field55909(var_args){
var args55910 = [];
var len__25826__auto___55977 = arguments.length;
var i__25827__auto___55978 = (0);
while(true){
if((i__25827__auto___55978 < len__25826__auto___55977)){
args55910.push((arguments[i__25827__auto___55978]));

var G__55979 = (i__25827__auto___55978 + (1));
i__25827__auto___55978 = G__55979;
continue;
} else {
}
break;
}

var G__55912 = args55910.length;
switch (G__55912) {
case 1:
return sablono.core.email_field55909.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field55909.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55910.length)].join('')));

}
});

sablono.core.email_field55909.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.email_field55909.call(null,name__40515__auto__,null);
});

sablono.core.email_field55909.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.email_field55909.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field55909);

/**
 * Creates a file input field.
 */
sablono.core.file_field55913 = (function sablono$core$file_field55913(var_args){
var args55914 = [];
var len__25826__auto___55981 = arguments.length;
var i__25827__auto___55982 = (0);
while(true){
if((i__25827__auto___55982 < len__25826__auto___55981)){
args55914.push((arguments[i__25827__auto___55982]));

var G__55983 = (i__25827__auto___55982 + (1));
i__25827__auto___55982 = G__55983;
continue;
} else {
}
break;
}

var G__55916 = args55914.length;
switch (G__55916) {
case 1:
return sablono.core.file_field55913.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field55913.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55914.length)].join('')));

}
});

sablono.core.file_field55913.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.file_field55913.call(null,name__40515__auto__,null);
});

sablono.core.file_field55913.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.file_field55913.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field55913);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field55917 = (function sablono$core$hidden_field55917(var_args){
var args55918 = [];
var len__25826__auto___55985 = arguments.length;
var i__25827__auto___55986 = (0);
while(true){
if((i__25827__auto___55986 < len__25826__auto___55985)){
args55918.push((arguments[i__25827__auto___55986]));

var G__55987 = (i__25827__auto___55986 + (1));
i__25827__auto___55986 = G__55987;
continue;
} else {
}
break;
}

var G__55920 = args55918.length;
switch (G__55920) {
case 1:
return sablono.core.hidden_field55917.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field55917.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55918.length)].join('')));

}
});

sablono.core.hidden_field55917.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.hidden_field55917.call(null,name__40515__auto__,null);
});

sablono.core.hidden_field55917.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.hidden_field55917.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field55917);

/**
 * Creates a month input field.
 */
sablono.core.month_field55921 = (function sablono$core$month_field55921(var_args){
var args55922 = [];
var len__25826__auto___55989 = arguments.length;
var i__25827__auto___55990 = (0);
while(true){
if((i__25827__auto___55990 < len__25826__auto___55989)){
args55922.push((arguments[i__25827__auto___55990]));

var G__55991 = (i__25827__auto___55990 + (1));
i__25827__auto___55990 = G__55991;
continue;
} else {
}
break;
}

var G__55924 = args55922.length;
switch (G__55924) {
case 1:
return sablono.core.month_field55921.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field55921.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55922.length)].join('')));

}
});

sablono.core.month_field55921.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.month_field55921.call(null,name__40515__auto__,null);
});

sablono.core.month_field55921.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.month_field55921.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field55921);

/**
 * Creates a number input field.
 */
sablono.core.number_field55925 = (function sablono$core$number_field55925(var_args){
var args55926 = [];
var len__25826__auto___55993 = arguments.length;
var i__25827__auto___55994 = (0);
while(true){
if((i__25827__auto___55994 < len__25826__auto___55993)){
args55926.push((arguments[i__25827__auto___55994]));

var G__55995 = (i__25827__auto___55994 + (1));
i__25827__auto___55994 = G__55995;
continue;
} else {
}
break;
}

var G__55928 = args55926.length;
switch (G__55928) {
case 1:
return sablono.core.number_field55925.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field55925.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55926.length)].join('')));

}
});

sablono.core.number_field55925.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.number_field55925.call(null,name__40515__auto__,null);
});

sablono.core.number_field55925.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.number_field55925.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field55925);

/**
 * Creates a password input field.
 */
sablono.core.password_field55929 = (function sablono$core$password_field55929(var_args){
var args55930 = [];
var len__25826__auto___55997 = arguments.length;
var i__25827__auto___55998 = (0);
while(true){
if((i__25827__auto___55998 < len__25826__auto___55997)){
args55930.push((arguments[i__25827__auto___55998]));

var G__55999 = (i__25827__auto___55998 + (1));
i__25827__auto___55998 = G__55999;
continue;
} else {
}
break;
}

var G__55932 = args55930.length;
switch (G__55932) {
case 1:
return sablono.core.password_field55929.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field55929.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55930.length)].join('')));

}
});

sablono.core.password_field55929.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.password_field55929.call(null,name__40515__auto__,null);
});

sablono.core.password_field55929.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.password_field55929.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field55929);

/**
 * Creates a range input field.
 */
sablono.core.range_field55933 = (function sablono$core$range_field55933(var_args){
var args55934 = [];
var len__25826__auto___56001 = arguments.length;
var i__25827__auto___56002 = (0);
while(true){
if((i__25827__auto___56002 < len__25826__auto___56001)){
args55934.push((arguments[i__25827__auto___56002]));

var G__56003 = (i__25827__auto___56002 + (1));
i__25827__auto___56002 = G__56003;
continue;
} else {
}
break;
}

var G__55936 = args55934.length;
switch (G__55936) {
case 1:
return sablono.core.range_field55933.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field55933.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55934.length)].join('')));

}
});

sablono.core.range_field55933.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.range_field55933.call(null,name__40515__auto__,null);
});

sablono.core.range_field55933.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.range_field55933.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field55933);

/**
 * Creates a search input field.
 */
sablono.core.search_field55937 = (function sablono$core$search_field55937(var_args){
var args55938 = [];
var len__25826__auto___56005 = arguments.length;
var i__25827__auto___56006 = (0);
while(true){
if((i__25827__auto___56006 < len__25826__auto___56005)){
args55938.push((arguments[i__25827__auto___56006]));

var G__56007 = (i__25827__auto___56006 + (1));
i__25827__auto___56006 = G__56007;
continue;
} else {
}
break;
}

var G__55940 = args55938.length;
switch (G__55940) {
case 1:
return sablono.core.search_field55937.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field55937.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55938.length)].join('')));

}
});

sablono.core.search_field55937.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.search_field55937.call(null,name__40515__auto__,null);
});

sablono.core.search_field55937.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.search_field55937.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field55937);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field55941 = (function sablono$core$tel_field55941(var_args){
var args55942 = [];
var len__25826__auto___56009 = arguments.length;
var i__25827__auto___56010 = (0);
while(true){
if((i__25827__auto___56010 < len__25826__auto___56009)){
args55942.push((arguments[i__25827__auto___56010]));

var G__56011 = (i__25827__auto___56010 + (1));
i__25827__auto___56010 = G__56011;
continue;
} else {
}
break;
}

var G__55944 = args55942.length;
switch (G__55944) {
case 1:
return sablono.core.tel_field55941.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field55941.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55942.length)].join('')));

}
});

sablono.core.tel_field55941.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.tel_field55941.call(null,name__40515__auto__,null);
});

sablono.core.tel_field55941.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.tel_field55941.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field55941);

/**
 * Creates a text input field.
 */
sablono.core.text_field55945 = (function sablono$core$text_field55945(var_args){
var args55946 = [];
var len__25826__auto___56013 = arguments.length;
var i__25827__auto___56014 = (0);
while(true){
if((i__25827__auto___56014 < len__25826__auto___56013)){
args55946.push((arguments[i__25827__auto___56014]));

var G__56015 = (i__25827__auto___56014 + (1));
i__25827__auto___56014 = G__56015;
continue;
} else {
}
break;
}

var G__55948 = args55946.length;
switch (G__55948) {
case 1:
return sablono.core.text_field55945.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field55945.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55946.length)].join('')));

}
});

sablono.core.text_field55945.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.text_field55945.call(null,name__40515__auto__,null);
});

sablono.core.text_field55945.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.text_field55945.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field55945);

/**
 * Creates a time input field.
 */
sablono.core.time_field55949 = (function sablono$core$time_field55949(var_args){
var args55950 = [];
var len__25826__auto___56017 = arguments.length;
var i__25827__auto___56018 = (0);
while(true){
if((i__25827__auto___56018 < len__25826__auto___56017)){
args55950.push((arguments[i__25827__auto___56018]));

var G__56019 = (i__25827__auto___56018 + (1));
i__25827__auto___56018 = G__56019;
continue;
} else {
}
break;
}

var G__55952 = args55950.length;
switch (G__55952) {
case 1:
return sablono.core.time_field55949.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field55949.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55950.length)].join('')));

}
});

sablono.core.time_field55949.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.time_field55949.call(null,name__40515__auto__,null);
});

sablono.core.time_field55949.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.time_field55949.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field55949);

/**
 * Creates a url input field.
 */
sablono.core.url_field55953 = (function sablono$core$url_field55953(var_args){
var args55954 = [];
var len__25826__auto___56021 = arguments.length;
var i__25827__auto___56022 = (0);
while(true){
if((i__25827__auto___56022 < len__25826__auto___56021)){
args55954.push((arguments[i__25827__auto___56022]));

var G__56023 = (i__25827__auto___56022 + (1));
i__25827__auto___56022 = G__56023;
continue;
} else {
}
break;
}

var G__55956 = args55954.length;
switch (G__55956) {
case 1:
return sablono.core.url_field55953.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field55953.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55954.length)].join('')));

}
});

sablono.core.url_field55953.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.url_field55953.call(null,name__40515__auto__,null);
});

sablono.core.url_field55953.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.url_field55953.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field55953);

/**
 * Creates a week input field.
 */
sablono.core.week_field55957 = (function sablono$core$week_field55957(var_args){
var args55958 = [];
var len__25826__auto___56025 = arguments.length;
var i__25827__auto___56026 = (0);
while(true){
if((i__25827__auto___56026 < len__25826__auto___56025)){
args55958.push((arguments[i__25827__auto___56026]));

var G__56027 = (i__25827__auto___56026 + (1));
i__25827__auto___56026 = G__56027;
continue;
} else {
}
break;
}

var G__55960 = args55958.length;
switch (G__55960) {
case 1:
return sablono.core.week_field55957.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field55957.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55958.length)].join('')));

}
});

sablono.core.week_field55957.cljs$core$IFn$_invoke$arity$1 = (function (name__40515__auto__){
return sablono.core.week_field55957.call(null,name__40515__auto__,null);
});

sablono.core.week_field55957.cljs$core$IFn$_invoke$arity$2 = (function (name__40515__auto__,value__40516__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__40515__auto__,value__40516__auto__);
});

sablono.core.week_field55957.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field55957);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box56029 = (function sablono$core$check_box56029(var_args){
var args56030 = [];
var len__25826__auto___56033 = arguments.length;
var i__25827__auto___56034 = (0);
while(true){
if((i__25827__auto___56034 < len__25826__auto___56033)){
args56030.push((arguments[i__25827__auto___56034]));

var G__56035 = (i__25827__auto___56034 + (1));
i__25827__auto___56034 = G__56035;
continue;
} else {
}
break;
}

var G__56032 = args56030.length;
switch (G__56032) {
case 1:
return sablono.core.check_box56029.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box56029.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box56029.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56030.length)].join('')));

}
});

sablono.core.check_box56029.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box56029.call(null,name,null);
});

sablono.core.check_box56029.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box56029.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box56029.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box56029.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box56029);
/**
 * Creates a radio button.
 */
sablono.core.radio_button56037 = (function sablono$core$radio_button56037(var_args){
var args56038 = [];
var len__25826__auto___56041 = arguments.length;
var i__25827__auto___56042 = (0);
while(true){
if((i__25827__auto___56042 < len__25826__auto___56041)){
args56038.push((arguments[i__25827__auto___56042]));

var G__56043 = (i__25827__auto___56042 + (1));
i__25827__auto___56042 = G__56043;
continue;
} else {
}
break;
}

var G__56040 = args56038.length;
switch (G__56040) {
case 1:
return sablono.core.radio_button56037.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button56037.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button56037.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56038.length)].join('')));

}
});

sablono.core.radio_button56037.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button56037.call(null,group,null);
});

sablono.core.radio_button56037.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button56037.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button56037.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button56037.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button56037);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options56045 = (function sablono$core$select_options56045(coll){
var iter__25531__auto__ = (function sablono$core$select_options56045_$_iter__56062(s__56063){
return (new cljs.core.LazySeq(null,(function (){
var s__56063__$1 = s__56063;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__56063__$1);
if(temp__4657__auto__){
var s__56063__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__56063__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__56063__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__56065 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__56064 = (0);
while(true){
if((i__56064 < size__25530__auto__)){
var x = cljs.core._nth.call(null,c__25529__auto__,i__56064);
cljs.core.chunk_append.call(null,b__56065,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__56072 = x;
var text = cljs.core.nth.call(null,vec__56072,(0),null);
var val = cljs.core.nth.call(null,vec__56072,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__56072,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options56045.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__56078 = (i__56064 + (1));
i__56064 = G__56078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56065),sablono$core$select_options56045_$_iter__56062.call(null,cljs.core.chunk_rest.call(null,s__56063__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56065),null);
}
} else {
var x = cljs.core.first.call(null,s__56063__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__56075 = x;
var text = cljs.core.nth.call(null,vec__56075,(0),null);
var val = cljs.core.nth.call(null,vec__56075,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__56075,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options56045.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options56045_$_iter__56062.call(null,cljs.core.rest.call(null,s__56063__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options56045);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down56079 = (function sablono$core$drop_down56079(var_args){
var args56080 = [];
var len__25826__auto___56083 = arguments.length;
var i__25827__auto___56084 = (0);
while(true){
if((i__25827__auto___56084 < len__25826__auto___56083)){
args56080.push((arguments[i__25827__auto___56084]));

var G__56085 = (i__25827__auto___56084 + (1));
i__25827__auto___56084 = G__56085;
continue;
} else {
}
break;
}

var G__56082 = args56080.length;
switch (G__56082) {
case 2:
return sablono.core.drop_down56079.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down56079.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56080.length)].join('')));

}
});

sablono.core.drop_down56079.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down56079.call(null,name,options,null);
});

sablono.core.drop_down56079.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down56079.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down56079);
/**
 * Creates a text area element.
 */
sablono.core.text_area56087 = (function sablono$core$text_area56087(var_args){
var args56088 = [];
var len__25826__auto___56091 = arguments.length;
var i__25827__auto___56092 = (0);
while(true){
if((i__25827__auto___56092 < len__25826__auto___56091)){
args56088.push((arguments[i__25827__auto___56092]));

var G__56093 = (i__25827__auto___56092 + (1));
i__25827__auto___56092 = G__56093;
continue;
} else {
}
break;
}

var G__56090 = args56088.length;
switch (G__56090) {
case 1:
return sablono.core.text_area56087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area56087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56088.length)].join('')));

}
});

sablono.core.text_area56087.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area56087.call(null,name,null);
});

sablono.core.text_area56087.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area56087.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area56087);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label56095 = (function sablono$core$label56095(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label56095);
/**
 * Creates a submit button.
 */
sablono.core.submit_button56096 = (function sablono$core$submit_button56096(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button56096);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button56097 = (function sablono$core$reset_button56097(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button56097);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to56098 = (function sablono$core$form_to56098(var_args){
var args__25833__auto__ = [];
var len__25826__auto___56105 = arguments.length;
var i__25827__auto___56106 = (0);
while(true){
if((i__25827__auto___56106 < len__25826__auto___56105)){
args__25833__auto__.push((arguments[i__25827__auto___56106]));

var G__56107 = (i__25827__auto___56106 + (1));
i__25827__auto___56106 = G__56107;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to56098.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

sablono.core.form_to56098.cljs$core$IFn$_invoke$arity$variadic = (function (p__56101,body){
var vec__56102 = p__56101;
var method = cljs.core.nth.call(null,vec__56102,(0),null);
var action = cljs.core.nth.call(null,vec__56102,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to56098.cljs$lang$maxFixedArity = (1);

sablono.core.form_to56098.cljs$lang$applyTo = (function (seq56099){
var G__56100 = cljs.core.first.call(null,seq56099);
var seq56099__$1 = cljs.core.next.call(null,seq56099);
return sablono.core.form_to56098.cljs$core$IFn$_invoke$arity$variadic(G__56100,seq56099__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to56098);

//# sourceMappingURL=core.js.map?rel=1477762305945