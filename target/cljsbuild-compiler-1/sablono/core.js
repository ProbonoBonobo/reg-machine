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
var G__32896__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__32893 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__32894 = cljs.core.seq.call(null,vec__32893);
var first__32895 = cljs.core.first.call(null,seq__32894);
var seq__32894__$1 = cljs.core.next.call(null,seq__32894);
var tag = first__32895;
var body = seq__32894__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__32896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32897__i = 0, G__32897__a = new Array(arguments.length -  0);
while (G__32897__i < G__32897__a.length) {G__32897__a[G__32897__i] = arguments[G__32897__i + 0]; ++G__32897__i;}
  args = new cljs.core.IndexedSeq(G__32897__a,0);
} 
return G__32896__delegate.call(this,args);};
G__32896.cljs$lang$maxFixedArity = 0;
G__32896.cljs$lang$applyTo = (function (arglist__32898){
var args = cljs.core.seq(arglist__32898);
return G__32896__delegate(args);
});
G__32896.cljs$core$IFn$_invoke$arity$variadic = G__32896__delegate;
return G__32896;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7326__auto__ = (function sablono$core$update_arglists_$_iter__32903(s__32904){
return (new cljs.core.LazySeq(null,(function (){
var s__32904__$1 = s__32904;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32904__$1);
if(temp__4657__auto__){
var s__32904__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32904__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__32904__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__32906 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__32905 = (0);
while(true){
if((i__32905 < size__7325__auto__)){
var args = cljs.core._nth.call(null,c__7324__auto__,i__32905);
cljs.core.chunk_append.call(null,b__32906,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32907 = (i__32905 + (1));
i__32905 = G__32907;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32906),sablono$core$update_arglists_$_iter__32903.call(null,cljs.core.chunk_rest.call(null,s__32904__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32906),null);
}
} else {
var args = cljs.core.first.call(null,s__32904__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__32903.call(null,cljs.core.rest.call(null,s__32904__$2)));
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
var len__7651__auto___32913 = arguments.length;
var i__7652__auto___32914 = (0);
while(true){
if((i__7652__auto___32914 < len__7651__auto___32913)){
args__7658__auto__.push((arguments[i__7652__auto___32914]));

var G__32915 = (i__7652__auto___32914 + (1));
i__7652__auto___32914 = G__32915;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((0) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7659__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7326__auto__ = (function sablono$core$iter__32909(s__32910){
return (new cljs.core.LazySeq(null,(function (){
var s__32910__$1 = s__32910;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32910__$1);
if(temp__4657__auto__){
var s__32910__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32910__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__32910__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__32912 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__32911 = (0);
while(true){
if((i__32911 < size__7325__auto__)){
var style = cljs.core._nth.call(null,c__7324__auto__,i__32911);
cljs.core.chunk_append.call(null,b__32912,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__32916 = (i__32911 + (1));
i__32911 = G__32916;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32912),sablono$core$iter__32909.call(null,cljs.core.chunk_rest.call(null,s__32910__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32912),null);
}
} else {
var style = cljs.core.first.call(null,s__32910__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__32909.call(null,cljs.core.rest.call(null,s__32910__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq32908){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32908));
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
sablono.core.link_to32917 = (function sablono$core$link_to32917(var_args){
var args__7658__auto__ = [];
var len__7651__auto___32920 = arguments.length;
var i__7652__auto___32921 = (0);
while(true){
if((i__7652__auto___32921 < len__7651__auto___32920)){
args__7658__auto__.push((arguments[i__7652__auto___32921]));

var G__32922 = (i__7652__auto___32921 + (1));
i__7652__auto___32921 = G__32922;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to32917.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.link_to32917.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to32917.cljs$lang$maxFixedArity = (1);

sablono.core.link_to32917.cljs$lang$applyTo = (function (seq32918){
var G__32919 = cljs.core.first.call(null,seq32918);
var seq32918__$1 = cljs.core.next.call(null,seq32918);
return sablono.core.link_to32917.cljs$core$IFn$_invoke$arity$variadic(G__32919,seq32918__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32917);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to32923 = (function sablono$core$mail_to32923(var_args){
var args__7658__auto__ = [];
var len__7651__auto___32930 = arguments.length;
var i__7652__auto___32931 = (0);
while(true){
if((i__7652__auto___32931 < len__7651__auto___32930)){
args__7658__auto__.push((arguments[i__7652__auto___32931]));

var G__32932 = (i__7652__auto___32931 + (1));
i__7652__auto___32931 = G__32932;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to32923.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.mail_to32923.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__32926){
var vec__32927 = p__32926;
var content = cljs.core.nth.call(null,vec__32927,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6543__auto__ = content;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to32923.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to32923.cljs$lang$applyTo = (function (seq32924){
var G__32925 = cljs.core.first.call(null,seq32924);
var seq32924__$1 = cljs.core.next.call(null,seq32924);
return sablono.core.mail_to32923.cljs$core$IFn$_invoke$arity$variadic(G__32925,seq32924__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32923);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list32933 = (function sablono$core$unordered_list32933(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__7326__auto__ = (function sablono$core$unordered_list32933_$_iter__32938(s__32939){
return (new cljs.core.LazySeq(null,(function (){
var s__32939__$1 = s__32939;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32939__$1);
if(temp__4657__auto__){
var s__32939__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32939__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__32939__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__32941 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__32940 = (0);
while(true){
if((i__32940 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__32940);
cljs.core.chunk_append.call(null,b__32941,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32942 = (i__32940 + (1));
i__32940 = G__32942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32941),sablono$core$unordered_list32933_$_iter__32938.call(null,cljs.core.chunk_rest.call(null,s__32939__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32941),null);
}
} else {
var x = cljs.core.first.call(null,s__32939__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list32933_$_iter__32938.call(null,cljs.core.rest.call(null,s__32939__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32933);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list32943 = (function sablono$core$ordered_list32943(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__7326__auto__ = (function sablono$core$ordered_list32943_$_iter__32948(s__32949){
return (new cljs.core.LazySeq(null,(function (){
var s__32949__$1 = s__32949;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32949__$1);
if(temp__4657__auto__){
var s__32949__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32949__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__32949__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__32951 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__32950 = (0);
while(true){
if((i__32950 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__32950);
cljs.core.chunk_append.call(null,b__32951,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32952 = (i__32950 + (1));
i__32950 = G__32952;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32951),sablono$core$ordered_list32943_$_iter__32948.call(null,cljs.core.chunk_rest.call(null,s__32949__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32951),null);
}
} else {
var x = cljs.core.first.call(null,s__32949__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list32943_$_iter__32948.call(null,cljs.core.rest.call(null,s__32949__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32943);
/**
 * Create an image element.
 */
sablono.core.image32953 = (function sablono$core$image32953(var_args){
var args32954 = [];
var len__7651__auto___32957 = arguments.length;
var i__7652__auto___32958 = (0);
while(true){
if((i__7652__auto___32958 < len__7651__auto___32957)){
args32954.push((arguments[i__7652__auto___32958]));

var G__32959 = (i__7652__auto___32958 + (1));
i__7652__auto___32958 = G__32959;
continue;
} else {
}
break;
}

var G__32956 = args32954.length;
switch (G__32956) {
case 1:
return sablono.core.image32953.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image32953.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32954.length)].join('')));

}
});

sablono.core.image32953.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image32953.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image32953.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32953);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__32961_SHARP_,p2__32962_SHARP_){
return [cljs.core.str(p1__32961_SHARP_),cljs.core.str("["),cljs.core.str(p2__32962_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__32963_SHARP_,p2__32964_SHARP_){
return [cljs.core.str(p1__32963_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32964_SHARP_)].join('');
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
sablono.core.color_field32965 = (function sablono$core$color_field32965(var_args){
var args32966 = [];
var len__7651__auto___33033 = arguments.length;
var i__7652__auto___33034 = (0);
while(true){
if((i__7652__auto___33034 < len__7651__auto___33033)){
args32966.push((arguments[i__7652__auto___33034]));

var G__33035 = (i__7652__auto___33034 + (1));
i__7652__auto___33034 = G__33035;
continue;
} else {
}
break;
}

var G__32968 = args32966.length;
switch (G__32968) {
case 1:
return sablono.core.color_field32965.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field32965.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32966.length)].join('')));

}
});

sablono.core.color_field32965.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.color_field32965.call(null,name__10988__auto__,null);
});

sablono.core.color_field32965.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.color_field32965.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32965);

/**
 * Creates a date input field.
 */
sablono.core.date_field32969 = (function sablono$core$date_field32969(var_args){
var args32970 = [];
var len__7651__auto___33037 = arguments.length;
var i__7652__auto___33038 = (0);
while(true){
if((i__7652__auto___33038 < len__7651__auto___33037)){
args32970.push((arguments[i__7652__auto___33038]));

var G__33039 = (i__7652__auto___33038 + (1));
i__7652__auto___33038 = G__33039;
continue;
} else {
}
break;
}

var G__32972 = args32970.length;
switch (G__32972) {
case 1:
return sablono.core.date_field32969.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field32969.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32970.length)].join('')));

}
});

sablono.core.date_field32969.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.date_field32969.call(null,name__10988__auto__,null);
});

sablono.core.date_field32969.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.date_field32969.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32969);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field32973 = (function sablono$core$datetime_field32973(var_args){
var args32974 = [];
var len__7651__auto___33041 = arguments.length;
var i__7652__auto___33042 = (0);
while(true){
if((i__7652__auto___33042 < len__7651__auto___33041)){
args32974.push((arguments[i__7652__auto___33042]));

var G__33043 = (i__7652__auto___33042 + (1));
i__7652__auto___33042 = G__33043;
continue;
} else {
}
break;
}

var G__32976 = args32974.length;
switch (G__32976) {
case 1:
return sablono.core.datetime_field32973.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field32973.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32974.length)].join('')));

}
});

sablono.core.datetime_field32973.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.datetime_field32973.call(null,name__10988__auto__,null);
});

sablono.core.datetime_field32973.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.datetime_field32973.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32973);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field32977 = (function sablono$core$datetime_local_field32977(var_args){
var args32978 = [];
var len__7651__auto___33045 = arguments.length;
var i__7652__auto___33046 = (0);
while(true){
if((i__7652__auto___33046 < len__7651__auto___33045)){
args32978.push((arguments[i__7652__auto___33046]));

var G__33047 = (i__7652__auto___33046 + (1));
i__7652__auto___33046 = G__33047;
continue;
} else {
}
break;
}

var G__32980 = args32978.length;
switch (G__32980) {
case 1:
return sablono.core.datetime_local_field32977.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field32977.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32978.length)].join('')));

}
});

sablono.core.datetime_local_field32977.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.datetime_local_field32977.call(null,name__10988__auto__,null);
});

sablono.core.datetime_local_field32977.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.datetime_local_field32977.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32977);

/**
 * Creates a email input field.
 */
sablono.core.email_field32981 = (function sablono$core$email_field32981(var_args){
var args32982 = [];
var len__7651__auto___33049 = arguments.length;
var i__7652__auto___33050 = (0);
while(true){
if((i__7652__auto___33050 < len__7651__auto___33049)){
args32982.push((arguments[i__7652__auto___33050]));

var G__33051 = (i__7652__auto___33050 + (1));
i__7652__auto___33050 = G__33051;
continue;
} else {
}
break;
}

var G__32984 = args32982.length;
switch (G__32984) {
case 1:
return sablono.core.email_field32981.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field32981.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32982.length)].join('')));

}
});

sablono.core.email_field32981.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.email_field32981.call(null,name__10988__auto__,null);
});

sablono.core.email_field32981.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.email_field32981.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32981);

/**
 * Creates a file input field.
 */
sablono.core.file_field32985 = (function sablono$core$file_field32985(var_args){
var args32986 = [];
var len__7651__auto___33053 = arguments.length;
var i__7652__auto___33054 = (0);
while(true){
if((i__7652__auto___33054 < len__7651__auto___33053)){
args32986.push((arguments[i__7652__auto___33054]));

var G__33055 = (i__7652__auto___33054 + (1));
i__7652__auto___33054 = G__33055;
continue;
} else {
}
break;
}

var G__32988 = args32986.length;
switch (G__32988) {
case 1:
return sablono.core.file_field32985.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field32985.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32986.length)].join('')));

}
});

sablono.core.file_field32985.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.file_field32985.call(null,name__10988__auto__,null);
});

sablono.core.file_field32985.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.file_field32985.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32985);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field32989 = (function sablono$core$hidden_field32989(var_args){
var args32990 = [];
var len__7651__auto___33057 = arguments.length;
var i__7652__auto___33058 = (0);
while(true){
if((i__7652__auto___33058 < len__7651__auto___33057)){
args32990.push((arguments[i__7652__auto___33058]));

var G__33059 = (i__7652__auto___33058 + (1));
i__7652__auto___33058 = G__33059;
continue;
} else {
}
break;
}

var G__32992 = args32990.length;
switch (G__32992) {
case 1:
return sablono.core.hidden_field32989.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field32989.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32990.length)].join('')));

}
});

sablono.core.hidden_field32989.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.hidden_field32989.call(null,name__10988__auto__,null);
});

sablono.core.hidden_field32989.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.hidden_field32989.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32989);

/**
 * Creates a month input field.
 */
sablono.core.month_field32993 = (function sablono$core$month_field32993(var_args){
var args32994 = [];
var len__7651__auto___33061 = arguments.length;
var i__7652__auto___33062 = (0);
while(true){
if((i__7652__auto___33062 < len__7651__auto___33061)){
args32994.push((arguments[i__7652__auto___33062]));

var G__33063 = (i__7652__auto___33062 + (1));
i__7652__auto___33062 = G__33063;
continue;
} else {
}
break;
}

var G__32996 = args32994.length;
switch (G__32996) {
case 1:
return sablono.core.month_field32993.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field32993.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32994.length)].join('')));

}
});

sablono.core.month_field32993.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.month_field32993.call(null,name__10988__auto__,null);
});

sablono.core.month_field32993.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.month_field32993.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32993);

/**
 * Creates a number input field.
 */
sablono.core.number_field32997 = (function sablono$core$number_field32997(var_args){
var args32998 = [];
var len__7651__auto___33065 = arguments.length;
var i__7652__auto___33066 = (0);
while(true){
if((i__7652__auto___33066 < len__7651__auto___33065)){
args32998.push((arguments[i__7652__auto___33066]));

var G__33067 = (i__7652__auto___33066 + (1));
i__7652__auto___33066 = G__33067;
continue;
} else {
}
break;
}

var G__33000 = args32998.length;
switch (G__33000) {
case 1:
return sablono.core.number_field32997.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field32997.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32998.length)].join('')));

}
});

sablono.core.number_field32997.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.number_field32997.call(null,name__10988__auto__,null);
});

sablono.core.number_field32997.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.number_field32997.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32997);

/**
 * Creates a password input field.
 */
sablono.core.password_field33001 = (function sablono$core$password_field33001(var_args){
var args33002 = [];
var len__7651__auto___33069 = arguments.length;
var i__7652__auto___33070 = (0);
while(true){
if((i__7652__auto___33070 < len__7651__auto___33069)){
args33002.push((arguments[i__7652__auto___33070]));

var G__33071 = (i__7652__auto___33070 + (1));
i__7652__auto___33070 = G__33071;
continue;
} else {
}
break;
}

var G__33004 = args33002.length;
switch (G__33004) {
case 1:
return sablono.core.password_field33001.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field33001.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33002.length)].join('')));

}
});

sablono.core.password_field33001.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.password_field33001.call(null,name__10988__auto__,null);
});

sablono.core.password_field33001.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.password_field33001.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field33001);

/**
 * Creates a range input field.
 */
sablono.core.range_field33005 = (function sablono$core$range_field33005(var_args){
var args33006 = [];
var len__7651__auto___33073 = arguments.length;
var i__7652__auto___33074 = (0);
while(true){
if((i__7652__auto___33074 < len__7651__auto___33073)){
args33006.push((arguments[i__7652__auto___33074]));

var G__33075 = (i__7652__auto___33074 + (1));
i__7652__auto___33074 = G__33075;
continue;
} else {
}
break;
}

var G__33008 = args33006.length;
switch (G__33008) {
case 1:
return sablono.core.range_field33005.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field33005.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33006.length)].join('')));

}
});

sablono.core.range_field33005.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.range_field33005.call(null,name__10988__auto__,null);
});

sablono.core.range_field33005.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.range_field33005.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field33005);

/**
 * Creates a search input field.
 */
sablono.core.search_field33009 = (function sablono$core$search_field33009(var_args){
var args33010 = [];
var len__7651__auto___33077 = arguments.length;
var i__7652__auto___33078 = (0);
while(true){
if((i__7652__auto___33078 < len__7651__auto___33077)){
args33010.push((arguments[i__7652__auto___33078]));

var G__33079 = (i__7652__auto___33078 + (1));
i__7652__auto___33078 = G__33079;
continue;
} else {
}
break;
}

var G__33012 = args33010.length;
switch (G__33012) {
case 1:
return sablono.core.search_field33009.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field33009.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33010.length)].join('')));

}
});

sablono.core.search_field33009.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.search_field33009.call(null,name__10988__auto__,null);
});

sablono.core.search_field33009.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.search_field33009.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field33009);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field33013 = (function sablono$core$tel_field33013(var_args){
var args33014 = [];
var len__7651__auto___33081 = arguments.length;
var i__7652__auto___33082 = (0);
while(true){
if((i__7652__auto___33082 < len__7651__auto___33081)){
args33014.push((arguments[i__7652__auto___33082]));

var G__33083 = (i__7652__auto___33082 + (1));
i__7652__auto___33082 = G__33083;
continue;
} else {
}
break;
}

var G__33016 = args33014.length;
switch (G__33016) {
case 1:
return sablono.core.tel_field33013.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field33013.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33014.length)].join('')));

}
});

sablono.core.tel_field33013.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.tel_field33013.call(null,name__10988__auto__,null);
});

sablono.core.tel_field33013.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.tel_field33013.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field33013);

/**
 * Creates a text input field.
 */
sablono.core.text_field33017 = (function sablono$core$text_field33017(var_args){
var args33018 = [];
var len__7651__auto___33085 = arguments.length;
var i__7652__auto___33086 = (0);
while(true){
if((i__7652__auto___33086 < len__7651__auto___33085)){
args33018.push((arguments[i__7652__auto___33086]));

var G__33087 = (i__7652__auto___33086 + (1));
i__7652__auto___33086 = G__33087;
continue;
} else {
}
break;
}

var G__33020 = args33018.length;
switch (G__33020) {
case 1:
return sablono.core.text_field33017.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field33017.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33018.length)].join('')));

}
});

sablono.core.text_field33017.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.text_field33017.call(null,name__10988__auto__,null);
});

sablono.core.text_field33017.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.text_field33017.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field33017);

/**
 * Creates a time input field.
 */
sablono.core.time_field33021 = (function sablono$core$time_field33021(var_args){
var args33022 = [];
var len__7651__auto___33089 = arguments.length;
var i__7652__auto___33090 = (0);
while(true){
if((i__7652__auto___33090 < len__7651__auto___33089)){
args33022.push((arguments[i__7652__auto___33090]));

var G__33091 = (i__7652__auto___33090 + (1));
i__7652__auto___33090 = G__33091;
continue;
} else {
}
break;
}

var G__33024 = args33022.length;
switch (G__33024) {
case 1:
return sablono.core.time_field33021.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field33021.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33022.length)].join('')));

}
});

sablono.core.time_field33021.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.time_field33021.call(null,name__10988__auto__,null);
});

sablono.core.time_field33021.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.time_field33021.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field33021);

/**
 * Creates a url input field.
 */
sablono.core.url_field33025 = (function sablono$core$url_field33025(var_args){
var args33026 = [];
var len__7651__auto___33093 = arguments.length;
var i__7652__auto___33094 = (0);
while(true){
if((i__7652__auto___33094 < len__7651__auto___33093)){
args33026.push((arguments[i__7652__auto___33094]));

var G__33095 = (i__7652__auto___33094 + (1));
i__7652__auto___33094 = G__33095;
continue;
} else {
}
break;
}

var G__33028 = args33026.length;
switch (G__33028) {
case 1:
return sablono.core.url_field33025.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field33025.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33026.length)].join('')));

}
});

sablono.core.url_field33025.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.url_field33025.call(null,name__10988__auto__,null);
});

sablono.core.url_field33025.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.url_field33025.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field33025);

/**
 * Creates a week input field.
 */
sablono.core.week_field33029 = (function sablono$core$week_field33029(var_args){
var args33030 = [];
var len__7651__auto___33097 = arguments.length;
var i__7652__auto___33098 = (0);
while(true){
if((i__7652__auto___33098 < len__7651__auto___33097)){
args33030.push((arguments[i__7652__auto___33098]));

var G__33099 = (i__7652__auto___33098 + (1));
i__7652__auto___33098 = G__33099;
continue;
} else {
}
break;
}

var G__33032 = args33030.length;
switch (G__33032) {
case 1:
return sablono.core.week_field33029.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field33029.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33030.length)].join('')));

}
});

sablono.core.week_field33029.cljs$core$IFn$_invoke$arity$1 = (function (name__10988__auto__){
return sablono.core.week_field33029.call(null,name__10988__auto__,null);
});

sablono.core.week_field33029.cljs$core$IFn$_invoke$arity$2 = (function (name__10988__auto__,value__10989__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10988__auto__,value__10989__auto__);
});

sablono.core.week_field33029.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field33029);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box33101 = (function sablono$core$check_box33101(var_args){
var args33102 = [];
var len__7651__auto___33105 = arguments.length;
var i__7652__auto___33106 = (0);
while(true){
if((i__7652__auto___33106 < len__7651__auto___33105)){
args33102.push((arguments[i__7652__auto___33106]));

var G__33107 = (i__7652__auto___33106 + (1));
i__7652__auto___33106 = G__33107;
continue;
} else {
}
break;
}

var G__33104 = args33102.length;
switch (G__33104) {
case 1:
return sablono.core.check_box33101.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box33101.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box33101.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33102.length)].join('')));

}
});

sablono.core.check_box33101.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box33101.call(null,name,null);
});

sablono.core.check_box33101.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box33101.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box33101.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box33101.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box33101);
/**
 * Creates a radio button.
 */
sablono.core.radio_button33109 = (function sablono$core$radio_button33109(var_args){
var args33110 = [];
var len__7651__auto___33113 = arguments.length;
var i__7652__auto___33114 = (0);
while(true){
if((i__7652__auto___33114 < len__7651__auto___33113)){
args33110.push((arguments[i__7652__auto___33114]));

var G__33115 = (i__7652__auto___33114 + (1));
i__7652__auto___33114 = G__33115;
continue;
} else {
}
break;
}

var G__33112 = args33110.length;
switch (G__33112) {
case 1:
return sablono.core.radio_button33109.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button33109.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button33109.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33110.length)].join('')));

}
});

sablono.core.radio_button33109.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button33109.call(null,group,null);
});

sablono.core.radio_button33109.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button33109.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button33109.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button33109.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button33109);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options33117 = (function sablono$core$select_options33117(coll){
var iter__7326__auto__ = (function sablono$core$select_options33117_$_iter__33134(s__33135){
return (new cljs.core.LazySeq(null,(function (){
var s__33135__$1 = s__33135;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33135__$1);
if(temp__4657__auto__){
var s__33135__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33135__$2)){
var c__7324__auto__ = cljs.core.chunk_first.call(null,s__33135__$2);
var size__7325__auto__ = cljs.core.count.call(null,c__7324__auto__);
var b__33137 = cljs.core.chunk_buffer.call(null,size__7325__auto__);
if((function (){var i__33136 = (0);
while(true){
if((i__33136 < size__7325__auto__)){
var x = cljs.core._nth.call(null,c__7324__auto__,i__33136);
cljs.core.chunk_append.call(null,b__33137,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33144 = x;
var text = cljs.core.nth.call(null,vec__33144,(0),null);
var val = cljs.core.nth.call(null,vec__33144,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__33144,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options33117.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__33150 = (i__33136 + (1));
i__33136 = G__33150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33137),sablono$core$select_options33117_$_iter__33134.call(null,cljs.core.chunk_rest.call(null,s__33135__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33137),null);
}
} else {
var x = cljs.core.first.call(null,s__33135__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33147 = x;
var text = cljs.core.nth.call(null,vec__33147,(0),null);
var val = cljs.core.nth.call(null,vec__33147,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__33147,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options33117.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options33117_$_iter__33134.call(null,cljs.core.rest.call(null,s__33135__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options33117);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down33151 = (function sablono$core$drop_down33151(var_args){
var args33152 = [];
var len__7651__auto___33155 = arguments.length;
var i__7652__auto___33156 = (0);
while(true){
if((i__7652__auto___33156 < len__7651__auto___33155)){
args33152.push((arguments[i__7652__auto___33156]));

var G__33157 = (i__7652__auto___33156 + (1));
i__7652__auto___33156 = G__33157;
continue;
} else {
}
break;
}

var G__33154 = args33152.length;
switch (G__33154) {
case 2:
return sablono.core.drop_down33151.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down33151.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33152.length)].join('')));

}
});

sablono.core.drop_down33151.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down33151.call(null,name,options,null);
});

sablono.core.drop_down33151.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down33151.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down33151);
/**
 * Creates a text area element.
 */
sablono.core.text_area33159 = (function sablono$core$text_area33159(var_args){
var args33160 = [];
var len__7651__auto___33163 = arguments.length;
var i__7652__auto___33164 = (0);
while(true){
if((i__7652__auto___33164 < len__7651__auto___33163)){
args33160.push((arguments[i__7652__auto___33164]));

var G__33165 = (i__7652__auto___33164 + (1));
i__7652__auto___33164 = G__33165;
continue;
} else {
}
break;
}

var G__33162 = args33160.length;
switch (G__33162) {
case 1:
return sablono.core.text_area33159.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area33159.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33160.length)].join('')));

}
});

sablono.core.text_area33159.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area33159.call(null,name,null);
});

sablono.core.text_area33159.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area33159.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area33159);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label33167 = (function sablono$core$label33167(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label33167);
/**
 * Creates a submit button.
 */
sablono.core.submit_button33168 = (function sablono$core$submit_button33168(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button33168);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button33169 = (function sablono$core$reset_button33169(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button33169);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to33170 = (function sablono$core$form_to33170(var_args){
var args__7658__auto__ = [];
var len__7651__auto___33177 = arguments.length;
var i__7652__auto___33178 = (0);
while(true){
if((i__7652__auto___33178 < len__7651__auto___33177)){
args__7658__auto__.push((arguments[i__7652__auto___33178]));

var G__33179 = (i__7652__auto___33178 + (1));
i__7652__auto___33178 = G__33179;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((1) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to33170.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7659__auto__);
});

sablono.core.form_to33170.cljs$core$IFn$_invoke$arity$variadic = (function (p__33173,body){
var vec__33174 = p__33173;
var method = cljs.core.nth.call(null,vec__33174,(0),null);
var action = cljs.core.nth.call(null,vec__33174,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to33170.cljs$lang$maxFixedArity = (1);

sablono.core.form_to33170.cljs$lang$applyTo = (function (seq33171){
var G__33172 = cljs.core.first.call(null,seq33171);
var seq33171__$1 = cljs.core.next.call(null,seq33171);
return sablono.core.form_to33170.cljs$core$IFn$_invoke$arity$variadic(G__33172,seq33171__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to33170);

//# sourceMappingURL=core.js.map