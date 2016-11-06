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
var G__81879__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__81876 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__81877 = cljs.core.seq.call(null,vec__81876);
var first__81878 = cljs.core.first.call(null,seq__81877);
var seq__81877__$1 = cljs.core.next.call(null,seq__81877);
var tag = first__81878;
var body = seq__81877__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__81879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81880__i = 0, G__81880__a = new Array(arguments.length -  0);
while (G__81880__i < G__81880__a.length) {G__81880__a[G__81880__i] = arguments[G__81880__i + 0]; ++G__81880__i;}
  args = new cljs.core.IndexedSeq(G__81880__a,0);
} 
return G__81879__delegate.call(this,args);};
G__81879.cljs$lang$maxFixedArity = 0;
G__81879.cljs$lang$applyTo = (function (arglist__81881){
var args = cljs.core.seq(arglist__81881);
return G__81879__delegate(args);
});
G__81879.cljs$core$IFn$_invoke$arity$variadic = G__81879__delegate;
return G__81879;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25531__auto__ = (function sablono$core$update_arglists_$_iter__81886(s__81887){
return (new cljs.core.LazySeq(null,(function (){
var s__81887__$1 = s__81887;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__81887__$1);
if(temp__4657__auto__){
var s__81887__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__81887__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__81887__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__81889 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__81888 = (0);
while(true){
if((i__81888 < size__25530__auto__)){
var args = cljs.core._nth.call(null,c__25529__auto__,i__81888);
cljs.core.chunk_append.call(null,b__81889,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__81890 = (i__81888 + (1));
i__81888 = G__81890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81889),sablono$core$update_arglists_$_iter__81886.call(null,cljs.core.chunk_rest.call(null,s__81887__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81889),null);
}
} else {
var args = cljs.core.first.call(null,s__81887__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__81886.call(null,cljs.core.rest.call(null,s__81887__$2)));
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
var len__25826__auto___81896 = arguments.length;
var i__25827__auto___81897 = (0);
while(true){
if((i__25827__auto___81897 < len__25826__auto___81896)){
args__25833__auto__.push((arguments[i__25827__auto___81897]));

var G__81898 = (i__25827__auto___81897 + (1));
i__25827__auto___81897 = G__81898;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25531__auto__ = (function sablono$core$iter__81892(s__81893){
return (new cljs.core.LazySeq(null,(function (){
var s__81893__$1 = s__81893;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__81893__$1);
if(temp__4657__auto__){
var s__81893__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__81893__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__81893__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__81895 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__81894 = (0);
while(true){
if((i__81894 < size__25530__auto__)){
var style = cljs.core._nth.call(null,c__25529__auto__,i__81894);
cljs.core.chunk_append.call(null,b__81895,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__81899 = (i__81894 + (1));
i__81894 = G__81899;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81895),sablono$core$iter__81892.call(null,cljs.core.chunk_rest.call(null,s__81893__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81895),null);
}
} else {
var style = cljs.core.first.call(null,s__81893__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__81892.call(null,cljs.core.rest.call(null,s__81893__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq81891){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq81891));
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
sablono.core.link_to81900 = (function sablono$core$link_to81900(var_args){
var args__25833__auto__ = [];
var len__25826__auto___81903 = arguments.length;
var i__25827__auto___81904 = (0);
while(true){
if((i__25827__auto___81904 < len__25826__auto___81903)){
args__25833__auto__.push((arguments[i__25827__auto___81904]));

var G__81905 = (i__25827__auto___81904 + (1));
i__25827__auto___81904 = G__81905;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to81900.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

sablono.core.link_to81900.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to81900.cljs$lang$maxFixedArity = (1);

sablono.core.link_to81900.cljs$lang$applyTo = (function (seq81901){
var G__81902 = cljs.core.first.call(null,seq81901);
var seq81901__$1 = cljs.core.next.call(null,seq81901);
return sablono.core.link_to81900.cljs$core$IFn$_invoke$arity$variadic(G__81902,seq81901__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to81900);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to81906 = (function sablono$core$mail_to81906(var_args){
var args__25833__auto__ = [];
var len__25826__auto___81913 = arguments.length;
var i__25827__auto___81914 = (0);
while(true){
if((i__25827__auto___81914 < len__25826__auto___81913)){
args__25833__auto__.push((arguments[i__25827__auto___81914]));

var G__81915 = (i__25827__auto___81914 + (1));
i__25827__auto___81914 = G__81915;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to81906.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

sablono.core.mail_to81906.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__81909){
var vec__81910 = p__81909;
var content = cljs.core.nth.call(null,vec__81910,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24751__auto__ = content;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to81906.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to81906.cljs$lang$applyTo = (function (seq81907){
var G__81908 = cljs.core.first.call(null,seq81907);
var seq81907__$1 = cljs.core.next.call(null,seq81907);
return sablono.core.mail_to81906.cljs$core$IFn$_invoke$arity$variadic(G__81908,seq81907__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to81906);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list81916 = (function sablono$core$unordered_list81916(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25531__auto__ = (function sablono$core$unordered_list81916_$_iter__81921(s__81922){
return (new cljs.core.LazySeq(null,(function (){
var s__81922__$1 = s__81922;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__81922__$1);
if(temp__4657__auto__){
var s__81922__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__81922__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__81922__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__81924 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__81923 = (0);
while(true){
if((i__81923 < size__25530__auto__)){
var x = cljs.core._nth.call(null,c__25529__auto__,i__81923);
cljs.core.chunk_append.call(null,b__81924,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__81925 = (i__81923 + (1));
i__81923 = G__81925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81924),sablono$core$unordered_list81916_$_iter__81921.call(null,cljs.core.chunk_rest.call(null,s__81922__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81924),null);
}
} else {
var x = cljs.core.first.call(null,s__81922__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list81916_$_iter__81921.call(null,cljs.core.rest.call(null,s__81922__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list81916);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list81926 = (function sablono$core$ordered_list81926(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25531__auto__ = (function sablono$core$ordered_list81926_$_iter__81931(s__81932){
return (new cljs.core.LazySeq(null,(function (){
var s__81932__$1 = s__81932;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__81932__$1);
if(temp__4657__auto__){
var s__81932__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__81932__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__81932__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__81934 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__81933 = (0);
while(true){
if((i__81933 < size__25530__auto__)){
var x = cljs.core._nth.call(null,c__25529__auto__,i__81933);
cljs.core.chunk_append.call(null,b__81934,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__81935 = (i__81933 + (1));
i__81933 = G__81935;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81934),sablono$core$ordered_list81926_$_iter__81931.call(null,cljs.core.chunk_rest.call(null,s__81932__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81934),null);
}
} else {
var x = cljs.core.first.call(null,s__81932__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list81926_$_iter__81931.call(null,cljs.core.rest.call(null,s__81932__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list81926);
/**
 * Create an image element.
 */
sablono.core.image81936 = (function sablono$core$image81936(var_args){
var args81937 = [];
var len__25826__auto___81940 = arguments.length;
var i__25827__auto___81941 = (0);
while(true){
if((i__25827__auto___81941 < len__25826__auto___81940)){
args81937.push((arguments[i__25827__auto___81941]));

var G__81942 = (i__25827__auto___81941 + (1));
i__25827__auto___81941 = G__81942;
continue;
} else {
}
break;
}

var G__81939 = args81937.length;
switch (G__81939) {
case 1:
return sablono.core.image81936.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image81936.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81937.length)].join('')));

}
});

sablono.core.image81936.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image81936.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image81936.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image81936);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__81944_SHARP_,p2__81945_SHARP_){
return [cljs.core.str(p1__81944_SHARP_),cljs.core.str("["),cljs.core.str(p2__81945_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__81946_SHARP_,p2__81947_SHARP_){
return [cljs.core.str(p1__81946_SHARP_),cljs.core.str("-"),cljs.core.str(p2__81947_SHARP_)].join('');
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
sablono.core.color_field81948 = (function sablono$core$color_field81948(var_args){
var args81949 = [];
var len__25826__auto___82016 = arguments.length;
var i__25827__auto___82017 = (0);
while(true){
if((i__25827__auto___82017 < len__25826__auto___82016)){
args81949.push((arguments[i__25827__auto___82017]));

var G__82018 = (i__25827__auto___82017 + (1));
i__25827__auto___82017 = G__82018;
continue;
} else {
}
break;
}

var G__81951 = args81949.length;
switch (G__81951) {
case 1:
return sablono.core.color_field81948.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field81948.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81949.length)].join('')));

}
});

sablono.core.color_field81948.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.color_field81948.call(null,name__42840__auto__,null);
});

sablono.core.color_field81948.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.color_field81948.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field81948);

/**
 * Creates a date input field.
 */
sablono.core.date_field81952 = (function sablono$core$date_field81952(var_args){
var args81953 = [];
var len__25826__auto___82020 = arguments.length;
var i__25827__auto___82021 = (0);
while(true){
if((i__25827__auto___82021 < len__25826__auto___82020)){
args81953.push((arguments[i__25827__auto___82021]));

var G__82022 = (i__25827__auto___82021 + (1));
i__25827__auto___82021 = G__82022;
continue;
} else {
}
break;
}

var G__81955 = args81953.length;
switch (G__81955) {
case 1:
return sablono.core.date_field81952.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field81952.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81953.length)].join('')));

}
});

sablono.core.date_field81952.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.date_field81952.call(null,name__42840__auto__,null);
});

sablono.core.date_field81952.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.date_field81952.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field81952);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field81956 = (function sablono$core$datetime_field81956(var_args){
var args81957 = [];
var len__25826__auto___82024 = arguments.length;
var i__25827__auto___82025 = (0);
while(true){
if((i__25827__auto___82025 < len__25826__auto___82024)){
args81957.push((arguments[i__25827__auto___82025]));

var G__82026 = (i__25827__auto___82025 + (1));
i__25827__auto___82025 = G__82026;
continue;
} else {
}
break;
}

var G__81959 = args81957.length;
switch (G__81959) {
case 1:
return sablono.core.datetime_field81956.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field81956.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81957.length)].join('')));

}
});

sablono.core.datetime_field81956.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.datetime_field81956.call(null,name__42840__auto__,null);
});

sablono.core.datetime_field81956.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.datetime_field81956.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field81956);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field81960 = (function sablono$core$datetime_local_field81960(var_args){
var args81961 = [];
var len__25826__auto___82028 = arguments.length;
var i__25827__auto___82029 = (0);
while(true){
if((i__25827__auto___82029 < len__25826__auto___82028)){
args81961.push((arguments[i__25827__auto___82029]));

var G__82030 = (i__25827__auto___82029 + (1));
i__25827__auto___82029 = G__82030;
continue;
} else {
}
break;
}

var G__81963 = args81961.length;
switch (G__81963) {
case 1:
return sablono.core.datetime_local_field81960.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field81960.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81961.length)].join('')));

}
});

sablono.core.datetime_local_field81960.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.datetime_local_field81960.call(null,name__42840__auto__,null);
});

sablono.core.datetime_local_field81960.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.datetime_local_field81960.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field81960);

/**
 * Creates a email input field.
 */
sablono.core.email_field81964 = (function sablono$core$email_field81964(var_args){
var args81965 = [];
var len__25826__auto___82032 = arguments.length;
var i__25827__auto___82033 = (0);
while(true){
if((i__25827__auto___82033 < len__25826__auto___82032)){
args81965.push((arguments[i__25827__auto___82033]));

var G__82034 = (i__25827__auto___82033 + (1));
i__25827__auto___82033 = G__82034;
continue;
} else {
}
break;
}

var G__81967 = args81965.length;
switch (G__81967) {
case 1:
return sablono.core.email_field81964.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field81964.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81965.length)].join('')));

}
});

sablono.core.email_field81964.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.email_field81964.call(null,name__42840__auto__,null);
});

sablono.core.email_field81964.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.email_field81964.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field81964);

/**
 * Creates a file input field.
 */
sablono.core.file_field81968 = (function sablono$core$file_field81968(var_args){
var args81969 = [];
var len__25826__auto___82036 = arguments.length;
var i__25827__auto___82037 = (0);
while(true){
if((i__25827__auto___82037 < len__25826__auto___82036)){
args81969.push((arguments[i__25827__auto___82037]));

var G__82038 = (i__25827__auto___82037 + (1));
i__25827__auto___82037 = G__82038;
continue;
} else {
}
break;
}

var G__81971 = args81969.length;
switch (G__81971) {
case 1:
return sablono.core.file_field81968.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field81968.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81969.length)].join('')));

}
});

sablono.core.file_field81968.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.file_field81968.call(null,name__42840__auto__,null);
});

sablono.core.file_field81968.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.file_field81968.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field81968);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field81972 = (function sablono$core$hidden_field81972(var_args){
var args81973 = [];
var len__25826__auto___82040 = arguments.length;
var i__25827__auto___82041 = (0);
while(true){
if((i__25827__auto___82041 < len__25826__auto___82040)){
args81973.push((arguments[i__25827__auto___82041]));

var G__82042 = (i__25827__auto___82041 + (1));
i__25827__auto___82041 = G__82042;
continue;
} else {
}
break;
}

var G__81975 = args81973.length;
switch (G__81975) {
case 1:
return sablono.core.hidden_field81972.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field81972.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81973.length)].join('')));

}
});

sablono.core.hidden_field81972.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.hidden_field81972.call(null,name__42840__auto__,null);
});

sablono.core.hidden_field81972.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.hidden_field81972.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field81972);

/**
 * Creates a month input field.
 */
sablono.core.month_field81976 = (function sablono$core$month_field81976(var_args){
var args81977 = [];
var len__25826__auto___82044 = arguments.length;
var i__25827__auto___82045 = (0);
while(true){
if((i__25827__auto___82045 < len__25826__auto___82044)){
args81977.push((arguments[i__25827__auto___82045]));

var G__82046 = (i__25827__auto___82045 + (1));
i__25827__auto___82045 = G__82046;
continue;
} else {
}
break;
}

var G__81979 = args81977.length;
switch (G__81979) {
case 1:
return sablono.core.month_field81976.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field81976.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81977.length)].join('')));

}
});

sablono.core.month_field81976.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.month_field81976.call(null,name__42840__auto__,null);
});

sablono.core.month_field81976.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.month_field81976.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field81976);

/**
 * Creates a number input field.
 */
sablono.core.number_field81980 = (function sablono$core$number_field81980(var_args){
var args81981 = [];
var len__25826__auto___82048 = arguments.length;
var i__25827__auto___82049 = (0);
while(true){
if((i__25827__auto___82049 < len__25826__auto___82048)){
args81981.push((arguments[i__25827__auto___82049]));

var G__82050 = (i__25827__auto___82049 + (1));
i__25827__auto___82049 = G__82050;
continue;
} else {
}
break;
}

var G__81983 = args81981.length;
switch (G__81983) {
case 1:
return sablono.core.number_field81980.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field81980.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81981.length)].join('')));

}
});

sablono.core.number_field81980.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.number_field81980.call(null,name__42840__auto__,null);
});

sablono.core.number_field81980.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.number_field81980.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field81980);

/**
 * Creates a password input field.
 */
sablono.core.password_field81984 = (function sablono$core$password_field81984(var_args){
var args81985 = [];
var len__25826__auto___82052 = arguments.length;
var i__25827__auto___82053 = (0);
while(true){
if((i__25827__auto___82053 < len__25826__auto___82052)){
args81985.push((arguments[i__25827__auto___82053]));

var G__82054 = (i__25827__auto___82053 + (1));
i__25827__auto___82053 = G__82054;
continue;
} else {
}
break;
}

var G__81987 = args81985.length;
switch (G__81987) {
case 1:
return sablono.core.password_field81984.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field81984.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81985.length)].join('')));

}
});

sablono.core.password_field81984.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.password_field81984.call(null,name__42840__auto__,null);
});

sablono.core.password_field81984.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.password_field81984.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field81984);

/**
 * Creates a range input field.
 */
sablono.core.range_field81988 = (function sablono$core$range_field81988(var_args){
var args81989 = [];
var len__25826__auto___82056 = arguments.length;
var i__25827__auto___82057 = (0);
while(true){
if((i__25827__auto___82057 < len__25826__auto___82056)){
args81989.push((arguments[i__25827__auto___82057]));

var G__82058 = (i__25827__auto___82057 + (1));
i__25827__auto___82057 = G__82058;
continue;
} else {
}
break;
}

var G__81991 = args81989.length;
switch (G__81991) {
case 1:
return sablono.core.range_field81988.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field81988.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81989.length)].join('')));

}
});

sablono.core.range_field81988.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.range_field81988.call(null,name__42840__auto__,null);
});

sablono.core.range_field81988.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.range_field81988.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field81988);

/**
 * Creates a search input field.
 */
sablono.core.search_field81992 = (function sablono$core$search_field81992(var_args){
var args81993 = [];
var len__25826__auto___82060 = arguments.length;
var i__25827__auto___82061 = (0);
while(true){
if((i__25827__auto___82061 < len__25826__auto___82060)){
args81993.push((arguments[i__25827__auto___82061]));

var G__82062 = (i__25827__auto___82061 + (1));
i__25827__auto___82061 = G__82062;
continue;
} else {
}
break;
}

var G__81995 = args81993.length;
switch (G__81995) {
case 1:
return sablono.core.search_field81992.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field81992.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81993.length)].join('')));

}
});

sablono.core.search_field81992.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.search_field81992.call(null,name__42840__auto__,null);
});

sablono.core.search_field81992.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.search_field81992.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field81992);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field81996 = (function sablono$core$tel_field81996(var_args){
var args81997 = [];
var len__25826__auto___82064 = arguments.length;
var i__25827__auto___82065 = (0);
while(true){
if((i__25827__auto___82065 < len__25826__auto___82064)){
args81997.push((arguments[i__25827__auto___82065]));

var G__82066 = (i__25827__auto___82065 + (1));
i__25827__auto___82065 = G__82066;
continue;
} else {
}
break;
}

var G__81999 = args81997.length;
switch (G__81999) {
case 1:
return sablono.core.tel_field81996.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field81996.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81997.length)].join('')));

}
});

sablono.core.tel_field81996.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.tel_field81996.call(null,name__42840__auto__,null);
});

sablono.core.tel_field81996.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.tel_field81996.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field81996);

/**
 * Creates a text input field.
 */
sablono.core.text_field82000 = (function sablono$core$text_field82000(var_args){
var args82001 = [];
var len__25826__auto___82068 = arguments.length;
var i__25827__auto___82069 = (0);
while(true){
if((i__25827__auto___82069 < len__25826__auto___82068)){
args82001.push((arguments[i__25827__auto___82069]));

var G__82070 = (i__25827__auto___82069 + (1));
i__25827__auto___82069 = G__82070;
continue;
} else {
}
break;
}

var G__82003 = args82001.length;
switch (G__82003) {
case 1:
return sablono.core.text_field82000.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field82000.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82001.length)].join('')));

}
});

sablono.core.text_field82000.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.text_field82000.call(null,name__42840__auto__,null);
});

sablono.core.text_field82000.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.text_field82000.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field82000);

/**
 * Creates a time input field.
 */
sablono.core.time_field82004 = (function sablono$core$time_field82004(var_args){
var args82005 = [];
var len__25826__auto___82072 = arguments.length;
var i__25827__auto___82073 = (0);
while(true){
if((i__25827__auto___82073 < len__25826__auto___82072)){
args82005.push((arguments[i__25827__auto___82073]));

var G__82074 = (i__25827__auto___82073 + (1));
i__25827__auto___82073 = G__82074;
continue;
} else {
}
break;
}

var G__82007 = args82005.length;
switch (G__82007) {
case 1:
return sablono.core.time_field82004.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field82004.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82005.length)].join('')));

}
});

sablono.core.time_field82004.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.time_field82004.call(null,name__42840__auto__,null);
});

sablono.core.time_field82004.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.time_field82004.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field82004);

/**
 * Creates a url input field.
 */
sablono.core.url_field82008 = (function sablono$core$url_field82008(var_args){
var args82009 = [];
var len__25826__auto___82076 = arguments.length;
var i__25827__auto___82077 = (0);
while(true){
if((i__25827__auto___82077 < len__25826__auto___82076)){
args82009.push((arguments[i__25827__auto___82077]));

var G__82078 = (i__25827__auto___82077 + (1));
i__25827__auto___82077 = G__82078;
continue;
} else {
}
break;
}

var G__82011 = args82009.length;
switch (G__82011) {
case 1:
return sablono.core.url_field82008.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field82008.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82009.length)].join('')));

}
});

sablono.core.url_field82008.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.url_field82008.call(null,name__42840__auto__,null);
});

sablono.core.url_field82008.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.url_field82008.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field82008);

/**
 * Creates a week input field.
 */
sablono.core.week_field82012 = (function sablono$core$week_field82012(var_args){
var args82013 = [];
var len__25826__auto___82080 = arguments.length;
var i__25827__auto___82081 = (0);
while(true){
if((i__25827__auto___82081 < len__25826__auto___82080)){
args82013.push((arguments[i__25827__auto___82081]));

var G__82082 = (i__25827__auto___82081 + (1));
i__25827__auto___82081 = G__82082;
continue;
} else {
}
break;
}

var G__82015 = args82013.length;
switch (G__82015) {
case 1:
return sablono.core.week_field82012.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field82012.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82013.length)].join('')));

}
});

sablono.core.week_field82012.cljs$core$IFn$_invoke$arity$1 = (function (name__42840__auto__){
return sablono.core.week_field82012.call(null,name__42840__auto__,null);
});

sablono.core.week_field82012.cljs$core$IFn$_invoke$arity$2 = (function (name__42840__auto__,value__42841__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__42840__auto__,value__42841__auto__);
});

sablono.core.week_field82012.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field82012);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box82084 = (function sablono$core$check_box82084(var_args){
var args82085 = [];
var len__25826__auto___82088 = arguments.length;
var i__25827__auto___82089 = (0);
while(true){
if((i__25827__auto___82089 < len__25826__auto___82088)){
args82085.push((arguments[i__25827__auto___82089]));

var G__82090 = (i__25827__auto___82089 + (1));
i__25827__auto___82089 = G__82090;
continue;
} else {
}
break;
}

var G__82087 = args82085.length;
switch (G__82087) {
case 1:
return sablono.core.check_box82084.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box82084.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box82084.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82085.length)].join('')));

}
});

sablono.core.check_box82084.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box82084.call(null,name,null);
});

sablono.core.check_box82084.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box82084.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box82084.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box82084.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box82084);
/**
 * Creates a radio button.
 */
sablono.core.radio_button82092 = (function sablono$core$radio_button82092(var_args){
var args82093 = [];
var len__25826__auto___82096 = arguments.length;
var i__25827__auto___82097 = (0);
while(true){
if((i__25827__auto___82097 < len__25826__auto___82096)){
args82093.push((arguments[i__25827__auto___82097]));

var G__82098 = (i__25827__auto___82097 + (1));
i__25827__auto___82097 = G__82098;
continue;
} else {
}
break;
}

var G__82095 = args82093.length;
switch (G__82095) {
case 1:
return sablono.core.radio_button82092.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button82092.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button82092.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82093.length)].join('')));

}
});

sablono.core.radio_button82092.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button82092.call(null,group,null);
});

sablono.core.radio_button82092.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button82092.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button82092.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button82092.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button82092);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options82100 = (function sablono$core$select_options82100(coll){
var iter__25531__auto__ = (function sablono$core$select_options82100_$_iter__82117(s__82118){
return (new cljs.core.LazySeq(null,(function (){
var s__82118__$1 = s__82118;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__82118__$1);
if(temp__4657__auto__){
var s__82118__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__82118__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__82118__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__82120 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__82119 = (0);
while(true){
if((i__82119 < size__25530__auto__)){
var x = cljs.core._nth.call(null,c__25529__auto__,i__82119);
cljs.core.chunk_append.call(null,b__82120,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__82127 = x;
var text = cljs.core.nth.call(null,vec__82127,(0),null);
var val = cljs.core.nth.call(null,vec__82127,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__82127,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options82100.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__82133 = (i__82119 + (1));
i__82119 = G__82133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82120),sablono$core$select_options82100_$_iter__82117.call(null,cljs.core.chunk_rest.call(null,s__82118__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82120),null);
}
} else {
var x = cljs.core.first.call(null,s__82118__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__82130 = x;
var text = cljs.core.nth.call(null,vec__82130,(0),null);
var val = cljs.core.nth.call(null,vec__82130,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__82130,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options82100.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options82100_$_iter__82117.call(null,cljs.core.rest.call(null,s__82118__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options82100);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down82134 = (function sablono$core$drop_down82134(var_args){
var args82135 = [];
var len__25826__auto___82138 = arguments.length;
var i__25827__auto___82139 = (0);
while(true){
if((i__25827__auto___82139 < len__25826__auto___82138)){
args82135.push((arguments[i__25827__auto___82139]));

var G__82140 = (i__25827__auto___82139 + (1));
i__25827__auto___82139 = G__82140;
continue;
} else {
}
break;
}

var G__82137 = args82135.length;
switch (G__82137) {
case 2:
return sablono.core.drop_down82134.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down82134.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82135.length)].join('')));

}
});

sablono.core.drop_down82134.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down82134.call(null,name,options,null);
});

sablono.core.drop_down82134.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down82134.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down82134);
/**
 * Creates a text area element.
 */
sablono.core.text_area82142 = (function sablono$core$text_area82142(var_args){
var args82143 = [];
var len__25826__auto___82146 = arguments.length;
var i__25827__auto___82147 = (0);
while(true){
if((i__25827__auto___82147 < len__25826__auto___82146)){
args82143.push((arguments[i__25827__auto___82147]));

var G__82148 = (i__25827__auto___82147 + (1));
i__25827__auto___82147 = G__82148;
continue;
} else {
}
break;
}

var G__82145 = args82143.length;
switch (G__82145) {
case 1:
return sablono.core.text_area82142.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area82142.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82143.length)].join('')));

}
});

sablono.core.text_area82142.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area82142.call(null,name,null);
});

sablono.core.text_area82142.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area82142.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area82142);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label82150 = (function sablono$core$label82150(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label82150);
/**
 * Creates a submit button.
 */
sablono.core.submit_button82151 = (function sablono$core$submit_button82151(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button82151);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button82152 = (function sablono$core$reset_button82152(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button82152);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to82153 = (function sablono$core$form_to82153(var_args){
var args__25833__auto__ = [];
var len__25826__auto___82160 = arguments.length;
var i__25827__auto___82161 = (0);
while(true){
if((i__25827__auto___82161 < len__25826__auto___82160)){
args__25833__auto__.push((arguments[i__25827__auto___82161]));

var G__82162 = (i__25827__auto___82161 + (1));
i__25827__auto___82161 = G__82162;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to82153.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

sablono.core.form_to82153.cljs$core$IFn$_invoke$arity$variadic = (function (p__82156,body){
var vec__82157 = p__82156;
var method = cljs.core.nth.call(null,vec__82157,(0),null);
var action = cljs.core.nth.call(null,vec__82157,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to82153.cljs$lang$maxFixedArity = (1);

sablono.core.form_to82153.cljs$lang$applyTo = (function (seq82154){
var G__82155 = cljs.core.first.call(null,seq82154);
var seq82154__$1 = cljs.core.next.call(null,seq82154);
return sablono.core.form_to82153.cljs$core$IFn$_invoke$arity$variadic(G__82155,seq82154__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to82153);

//# sourceMappingURL=core.js.map?rel=1478402675122