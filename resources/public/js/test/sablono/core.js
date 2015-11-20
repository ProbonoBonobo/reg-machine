// Compiled by ClojureScript 1.7.122 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__31257__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__31256 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__31256,(0),null);
var body = cljs.core.nthnext.call(null,vec__31256,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__31257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31258__i = 0, G__31258__a = new Array(arguments.length -  0);
while (G__31258__i < G__31258__a.length) {G__31258__a[G__31258__i] = arguments[G__31258__i + 0]; ++G__31258__i;}
  args = new cljs.core.IndexedSeq(G__31258__a,0);
} 
return G__31257__delegate.call(this,args);};
G__31257.cljs$lang$maxFixedArity = 0;
G__31257.cljs$lang$applyTo = (function (arglist__31259){
var args = cljs.core.seq(arglist__31259);
return G__31257__delegate(args);
});
G__31257.cljs$core$IFn$_invoke$arity$variadic = G__31257__delegate;
return G__31257;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5333__auto__ = (function sablono$core$update_arglists_$_iter__31264(s__31265){
return (new cljs.core.LazySeq(null,(function (){
var s__31265__$1 = s__31265;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31265__$1);
if(temp__4425__auto__){
var s__31265__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31265__$2)){
var c__5331__auto__ = cljs.core.chunk_first.call(null,s__31265__$2);
var size__5332__auto__ = cljs.core.count.call(null,c__5331__auto__);
var b__31267 = cljs.core.chunk_buffer.call(null,size__5332__auto__);
if((function (){var i__31266 = (0);
while(true){
if((i__31266 < size__5332__auto__)){
var args = cljs.core._nth.call(null,c__5331__auto__,i__31266);
cljs.core.chunk_append.call(null,b__31267,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__31268 = (i__31266 + (1));
i__31266 = G__31268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31267),sablono$core$update_arglists_$_iter__31264.call(null,cljs.core.chunk_rest.call(null,s__31265__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31267),null);
}
} else {
var args = cljs.core.first.call(null,s__31265__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__31264.call(null,cljs.core.rest.call(null,s__31265__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5333__auto__.call(null,arglists);
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
var args__5626__auto__ = [];
var len__5619__auto___31274 = arguments.length;
var i__5620__auto___31275 = (0);
while(true){
if((i__5620__auto___31275 < len__5619__auto___31274)){
args__5626__auto__.push((arguments[i__5620__auto___31275]));

var G__31276 = (i__5620__auto___31275 + (1));
i__5620__auto___31275 = G__31276;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((0) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5627__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5333__auto__ = (function sablono$core$iter__31270(s__31271){
return (new cljs.core.LazySeq(null,(function (){
var s__31271__$1 = s__31271;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31271__$1);
if(temp__4425__auto__){
var s__31271__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31271__$2)){
var c__5331__auto__ = cljs.core.chunk_first.call(null,s__31271__$2);
var size__5332__auto__ = cljs.core.count.call(null,c__5331__auto__);
var b__31273 = cljs.core.chunk_buffer.call(null,size__5332__auto__);
if((function (){var i__31272 = (0);
while(true){
if((i__31272 < size__5332__auto__)){
var style = cljs.core._nth.call(null,c__5331__auto__,i__31272);
cljs.core.chunk_append.call(null,b__31273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__31277 = (i__31272 + (1));
i__31272 = G__31277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31273),sablono$core$iter__31270.call(null,cljs.core.chunk_rest.call(null,s__31271__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31273),null);
}
} else {
var style = cljs.core.first.call(null,s__31271__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__31270.call(null,cljs.core.rest.call(null,s__31271__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5333__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq31269){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31269));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
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
sablono.core.link_to31278 = (function sablono$core$link_to31278(var_args){
var args__5626__auto__ = [];
var len__5619__auto___31281 = arguments.length;
var i__5620__auto___31282 = (0);
while(true){
if((i__5620__auto___31282 < len__5619__auto___31281)){
args__5626__auto__.push((arguments[i__5620__auto___31282]));

var G__31283 = (i__5620__auto___31282 + (1));
i__5620__auto___31282 = G__31283;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return sablono.core.link_to31278.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

sablono.core.link_to31278.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to31278.cljs$lang$maxFixedArity = (1);

sablono.core.link_to31278.cljs$lang$applyTo = (function (seq31279){
var G__31280 = cljs.core.first.call(null,seq31279);
var seq31279__$1 = cljs.core.next.call(null,seq31279);
return sablono.core.link_to31278.cljs$core$IFn$_invoke$arity$variadic(G__31280,seq31279__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to31278);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to31284 = (function sablono$core$mail_to31284(var_args){
var args__5626__auto__ = [];
var len__5619__auto___31289 = arguments.length;
var i__5620__auto___31290 = (0);
while(true){
if((i__5620__auto___31290 < len__5619__auto___31289)){
args__5626__auto__.push((arguments[i__5620__auto___31290]));

var G__31291 = (i__5620__auto___31290 + (1));
i__5620__auto___31290 = G__31291;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return sablono.core.mail_to31284.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

sablono.core.mail_to31284.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__31287){
var vec__31288 = p__31287;
var content = cljs.core.nth.call(null,vec__31288,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4561__auto__ = content;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to31284.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to31284.cljs$lang$applyTo = (function (seq31285){
var G__31286 = cljs.core.first.call(null,seq31285);
var seq31285__$1 = cljs.core.next.call(null,seq31285);
return sablono.core.mail_to31284.cljs$core$IFn$_invoke$arity$variadic(G__31286,seq31285__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to31284);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list31292 = (function sablono$core$unordered_list31292(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5333__auto__ = (function sablono$core$unordered_list31292_$_iter__31297(s__31298){
return (new cljs.core.LazySeq(null,(function (){
var s__31298__$1 = s__31298;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31298__$1);
if(temp__4425__auto__){
var s__31298__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31298__$2)){
var c__5331__auto__ = cljs.core.chunk_first.call(null,s__31298__$2);
var size__5332__auto__ = cljs.core.count.call(null,c__5331__auto__);
var b__31300 = cljs.core.chunk_buffer.call(null,size__5332__auto__);
if((function (){var i__31299 = (0);
while(true){
if((i__31299 < size__5332__auto__)){
var x = cljs.core._nth.call(null,c__5331__auto__,i__31299);
cljs.core.chunk_append.call(null,b__31300,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31301 = (i__31299 + (1));
i__31299 = G__31301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31300),sablono$core$unordered_list31292_$_iter__31297.call(null,cljs.core.chunk_rest.call(null,s__31298__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31300),null);
}
} else {
var x = cljs.core.first.call(null,s__31298__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list31292_$_iter__31297.call(null,cljs.core.rest.call(null,s__31298__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5333__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list31292);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list31302 = (function sablono$core$ordered_list31302(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5333__auto__ = (function sablono$core$ordered_list31302_$_iter__31307(s__31308){
return (new cljs.core.LazySeq(null,(function (){
var s__31308__$1 = s__31308;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31308__$1);
if(temp__4425__auto__){
var s__31308__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31308__$2)){
var c__5331__auto__ = cljs.core.chunk_first.call(null,s__31308__$2);
var size__5332__auto__ = cljs.core.count.call(null,c__5331__auto__);
var b__31310 = cljs.core.chunk_buffer.call(null,size__5332__auto__);
if((function (){var i__31309 = (0);
while(true){
if((i__31309 < size__5332__auto__)){
var x = cljs.core._nth.call(null,c__5331__auto__,i__31309);
cljs.core.chunk_append.call(null,b__31310,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31311 = (i__31309 + (1));
i__31309 = G__31311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31310),sablono$core$ordered_list31302_$_iter__31307.call(null,cljs.core.chunk_rest.call(null,s__31308__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31310),null);
}
} else {
var x = cljs.core.first.call(null,s__31308__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list31302_$_iter__31307.call(null,cljs.core.rest.call(null,s__31308__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5333__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list31302);
/**
 * Create an image element.
 */
sablono.core.image31312 = (function sablono$core$image31312(var_args){
var args31313 = [];
var len__5619__auto___31316 = arguments.length;
var i__5620__auto___31317 = (0);
while(true){
if((i__5620__auto___31317 < len__5619__auto___31316)){
args31313.push((arguments[i__5620__auto___31317]));

var G__31318 = (i__5620__auto___31317 + (1));
i__5620__auto___31317 = G__31318;
continue;
} else {
}
break;
}

var G__31315 = args31313.length;
switch (G__31315) {
case 1:
return sablono.core.image31312.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image31312.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31313.length)].join('')));

}
});

sablono.core.image31312.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image31312.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image31312.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image31312);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__31320_SHARP_,p2__31321_SHARP_){
return [cljs.core.str(p1__31320_SHARP_),cljs.core.str("["),cljs.core.str(p2__31321_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__31322_SHARP_,p2__31323_SHARP_){
return [cljs.core.str(p1__31322_SHARP_),cljs.core.str("-"),cljs.core.str(p2__31323_SHARP_)].join('');
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
sablono.core.color_field31324 = (function sablono$core$color_field31324(var_args){
var args31325 = [];
var len__5619__auto___31392 = arguments.length;
var i__5620__auto___31393 = (0);
while(true){
if((i__5620__auto___31393 < len__5619__auto___31392)){
args31325.push((arguments[i__5620__auto___31393]));

var G__31394 = (i__5620__auto___31393 + (1));
i__5620__auto___31393 = G__31394;
continue;
} else {
}
break;
}

var G__31327 = args31325.length;
switch (G__31327) {
case 1:
return sablono.core.color_field31324.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field31324.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31325.length)].join('')));

}
});

sablono.core.color_field31324.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.color_field31324.call(null,name__12353__auto__,null);
});

sablono.core.color_field31324.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.color_field31324.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field31324);

/**
 * Creates a date input field.
 */
sablono.core.date_field31328 = (function sablono$core$date_field31328(var_args){
var args31329 = [];
var len__5619__auto___31396 = arguments.length;
var i__5620__auto___31397 = (0);
while(true){
if((i__5620__auto___31397 < len__5619__auto___31396)){
args31329.push((arguments[i__5620__auto___31397]));

var G__31398 = (i__5620__auto___31397 + (1));
i__5620__auto___31397 = G__31398;
continue;
} else {
}
break;
}

var G__31331 = args31329.length;
switch (G__31331) {
case 1:
return sablono.core.date_field31328.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field31328.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31329.length)].join('')));

}
});

sablono.core.date_field31328.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.date_field31328.call(null,name__12353__auto__,null);
});

sablono.core.date_field31328.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.date_field31328.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field31328);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field31332 = (function sablono$core$datetime_field31332(var_args){
var args31333 = [];
var len__5619__auto___31400 = arguments.length;
var i__5620__auto___31401 = (0);
while(true){
if((i__5620__auto___31401 < len__5619__auto___31400)){
args31333.push((arguments[i__5620__auto___31401]));

var G__31402 = (i__5620__auto___31401 + (1));
i__5620__auto___31401 = G__31402;
continue;
} else {
}
break;
}

var G__31335 = args31333.length;
switch (G__31335) {
case 1:
return sablono.core.datetime_field31332.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field31332.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31333.length)].join('')));

}
});

sablono.core.datetime_field31332.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.datetime_field31332.call(null,name__12353__auto__,null);
});

sablono.core.datetime_field31332.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.datetime_field31332.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field31332);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field31336 = (function sablono$core$datetime_local_field31336(var_args){
var args31337 = [];
var len__5619__auto___31404 = arguments.length;
var i__5620__auto___31405 = (0);
while(true){
if((i__5620__auto___31405 < len__5619__auto___31404)){
args31337.push((arguments[i__5620__auto___31405]));

var G__31406 = (i__5620__auto___31405 + (1));
i__5620__auto___31405 = G__31406;
continue;
} else {
}
break;
}

var G__31339 = args31337.length;
switch (G__31339) {
case 1:
return sablono.core.datetime_local_field31336.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field31336.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31337.length)].join('')));

}
});

sablono.core.datetime_local_field31336.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.datetime_local_field31336.call(null,name__12353__auto__,null);
});

sablono.core.datetime_local_field31336.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.datetime_local_field31336.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field31336);

/**
 * Creates a email input field.
 */
sablono.core.email_field31340 = (function sablono$core$email_field31340(var_args){
var args31341 = [];
var len__5619__auto___31408 = arguments.length;
var i__5620__auto___31409 = (0);
while(true){
if((i__5620__auto___31409 < len__5619__auto___31408)){
args31341.push((arguments[i__5620__auto___31409]));

var G__31410 = (i__5620__auto___31409 + (1));
i__5620__auto___31409 = G__31410;
continue;
} else {
}
break;
}

var G__31343 = args31341.length;
switch (G__31343) {
case 1:
return sablono.core.email_field31340.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field31340.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31341.length)].join('')));

}
});

sablono.core.email_field31340.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.email_field31340.call(null,name__12353__auto__,null);
});

sablono.core.email_field31340.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.email_field31340.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field31340);

/**
 * Creates a file input field.
 */
sablono.core.file_field31344 = (function sablono$core$file_field31344(var_args){
var args31345 = [];
var len__5619__auto___31412 = arguments.length;
var i__5620__auto___31413 = (0);
while(true){
if((i__5620__auto___31413 < len__5619__auto___31412)){
args31345.push((arguments[i__5620__auto___31413]));

var G__31414 = (i__5620__auto___31413 + (1));
i__5620__auto___31413 = G__31414;
continue;
} else {
}
break;
}

var G__31347 = args31345.length;
switch (G__31347) {
case 1:
return sablono.core.file_field31344.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field31344.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31345.length)].join('')));

}
});

sablono.core.file_field31344.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.file_field31344.call(null,name__12353__auto__,null);
});

sablono.core.file_field31344.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.file_field31344.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field31344);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field31348 = (function sablono$core$hidden_field31348(var_args){
var args31349 = [];
var len__5619__auto___31416 = arguments.length;
var i__5620__auto___31417 = (0);
while(true){
if((i__5620__auto___31417 < len__5619__auto___31416)){
args31349.push((arguments[i__5620__auto___31417]));

var G__31418 = (i__5620__auto___31417 + (1));
i__5620__auto___31417 = G__31418;
continue;
} else {
}
break;
}

var G__31351 = args31349.length;
switch (G__31351) {
case 1:
return sablono.core.hidden_field31348.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field31348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31349.length)].join('')));

}
});

sablono.core.hidden_field31348.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.hidden_field31348.call(null,name__12353__auto__,null);
});

sablono.core.hidden_field31348.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.hidden_field31348.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field31348);

/**
 * Creates a month input field.
 */
sablono.core.month_field31352 = (function sablono$core$month_field31352(var_args){
var args31353 = [];
var len__5619__auto___31420 = arguments.length;
var i__5620__auto___31421 = (0);
while(true){
if((i__5620__auto___31421 < len__5619__auto___31420)){
args31353.push((arguments[i__5620__auto___31421]));

var G__31422 = (i__5620__auto___31421 + (1));
i__5620__auto___31421 = G__31422;
continue;
} else {
}
break;
}

var G__31355 = args31353.length;
switch (G__31355) {
case 1:
return sablono.core.month_field31352.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field31352.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31353.length)].join('')));

}
});

sablono.core.month_field31352.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.month_field31352.call(null,name__12353__auto__,null);
});

sablono.core.month_field31352.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.month_field31352.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field31352);

/**
 * Creates a number input field.
 */
sablono.core.number_field31356 = (function sablono$core$number_field31356(var_args){
var args31357 = [];
var len__5619__auto___31424 = arguments.length;
var i__5620__auto___31425 = (0);
while(true){
if((i__5620__auto___31425 < len__5619__auto___31424)){
args31357.push((arguments[i__5620__auto___31425]));

var G__31426 = (i__5620__auto___31425 + (1));
i__5620__auto___31425 = G__31426;
continue;
} else {
}
break;
}

var G__31359 = args31357.length;
switch (G__31359) {
case 1:
return sablono.core.number_field31356.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field31356.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31357.length)].join('')));

}
});

sablono.core.number_field31356.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.number_field31356.call(null,name__12353__auto__,null);
});

sablono.core.number_field31356.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.number_field31356.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field31356);

/**
 * Creates a password input field.
 */
sablono.core.password_field31360 = (function sablono$core$password_field31360(var_args){
var args31361 = [];
var len__5619__auto___31428 = arguments.length;
var i__5620__auto___31429 = (0);
while(true){
if((i__5620__auto___31429 < len__5619__auto___31428)){
args31361.push((arguments[i__5620__auto___31429]));

var G__31430 = (i__5620__auto___31429 + (1));
i__5620__auto___31429 = G__31430;
continue;
} else {
}
break;
}

var G__31363 = args31361.length;
switch (G__31363) {
case 1:
return sablono.core.password_field31360.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field31360.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31361.length)].join('')));

}
});

sablono.core.password_field31360.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.password_field31360.call(null,name__12353__auto__,null);
});

sablono.core.password_field31360.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.password_field31360.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field31360);

/**
 * Creates a range input field.
 */
sablono.core.range_field31364 = (function sablono$core$range_field31364(var_args){
var args31365 = [];
var len__5619__auto___31432 = arguments.length;
var i__5620__auto___31433 = (0);
while(true){
if((i__5620__auto___31433 < len__5619__auto___31432)){
args31365.push((arguments[i__5620__auto___31433]));

var G__31434 = (i__5620__auto___31433 + (1));
i__5620__auto___31433 = G__31434;
continue;
} else {
}
break;
}

var G__31367 = args31365.length;
switch (G__31367) {
case 1:
return sablono.core.range_field31364.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field31364.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31365.length)].join('')));

}
});

sablono.core.range_field31364.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.range_field31364.call(null,name__12353__auto__,null);
});

sablono.core.range_field31364.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.range_field31364.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field31364);

/**
 * Creates a search input field.
 */
sablono.core.search_field31368 = (function sablono$core$search_field31368(var_args){
var args31369 = [];
var len__5619__auto___31436 = arguments.length;
var i__5620__auto___31437 = (0);
while(true){
if((i__5620__auto___31437 < len__5619__auto___31436)){
args31369.push((arguments[i__5620__auto___31437]));

var G__31438 = (i__5620__auto___31437 + (1));
i__5620__auto___31437 = G__31438;
continue;
} else {
}
break;
}

var G__31371 = args31369.length;
switch (G__31371) {
case 1:
return sablono.core.search_field31368.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field31368.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31369.length)].join('')));

}
});

sablono.core.search_field31368.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.search_field31368.call(null,name__12353__auto__,null);
});

sablono.core.search_field31368.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.search_field31368.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field31368);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field31372 = (function sablono$core$tel_field31372(var_args){
var args31373 = [];
var len__5619__auto___31440 = arguments.length;
var i__5620__auto___31441 = (0);
while(true){
if((i__5620__auto___31441 < len__5619__auto___31440)){
args31373.push((arguments[i__5620__auto___31441]));

var G__31442 = (i__5620__auto___31441 + (1));
i__5620__auto___31441 = G__31442;
continue;
} else {
}
break;
}

var G__31375 = args31373.length;
switch (G__31375) {
case 1:
return sablono.core.tel_field31372.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field31372.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31373.length)].join('')));

}
});

sablono.core.tel_field31372.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.tel_field31372.call(null,name__12353__auto__,null);
});

sablono.core.tel_field31372.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.tel_field31372.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field31372);

/**
 * Creates a text input field.
 */
sablono.core.text_field31376 = (function sablono$core$text_field31376(var_args){
var args31377 = [];
var len__5619__auto___31444 = arguments.length;
var i__5620__auto___31445 = (0);
while(true){
if((i__5620__auto___31445 < len__5619__auto___31444)){
args31377.push((arguments[i__5620__auto___31445]));

var G__31446 = (i__5620__auto___31445 + (1));
i__5620__auto___31445 = G__31446;
continue;
} else {
}
break;
}

var G__31379 = args31377.length;
switch (G__31379) {
case 1:
return sablono.core.text_field31376.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field31376.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31377.length)].join('')));

}
});

sablono.core.text_field31376.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.text_field31376.call(null,name__12353__auto__,null);
});

sablono.core.text_field31376.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.text_field31376.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field31376);

/**
 * Creates a time input field.
 */
sablono.core.time_field31380 = (function sablono$core$time_field31380(var_args){
var args31381 = [];
var len__5619__auto___31448 = arguments.length;
var i__5620__auto___31449 = (0);
while(true){
if((i__5620__auto___31449 < len__5619__auto___31448)){
args31381.push((arguments[i__5620__auto___31449]));

var G__31450 = (i__5620__auto___31449 + (1));
i__5620__auto___31449 = G__31450;
continue;
} else {
}
break;
}

var G__31383 = args31381.length;
switch (G__31383) {
case 1:
return sablono.core.time_field31380.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field31380.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31381.length)].join('')));

}
});

sablono.core.time_field31380.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.time_field31380.call(null,name__12353__auto__,null);
});

sablono.core.time_field31380.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.time_field31380.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field31380);

/**
 * Creates a url input field.
 */
sablono.core.url_field31384 = (function sablono$core$url_field31384(var_args){
var args31385 = [];
var len__5619__auto___31452 = arguments.length;
var i__5620__auto___31453 = (0);
while(true){
if((i__5620__auto___31453 < len__5619__auto___31452)){
args31385.push((arguments[i__5620__auto___31453]));

var G__31454 = (i__5620__auto___31453 + (1));
i__5620__auto___31453 = G__31454;
continue;
} else {
}
break;
}

var G__31387 = args31385.length;
switch (G__31387) {
case 1:
return sablono.core.url_field31384.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field31384.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31385.length)].join('')));

}
});

sablono.core.url_field31384.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.url_field31384.call(null,name__12353__auto__,null);
});

sablono.core.url_field31384.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.url_field31384.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field31384);

/**
 * Creates a week input field.
 */
sablono.core.week_field31388 = (function sablono$core$week_field31388(var_args){
var args31389 = [];
var len__5619__auto___31456 = arguments.length;
var i__5620__auto___31457 = (0);
while(true){
if((i__5620__auto___31457 < len__5619__auto___31456)){
args31389.push((arguments[i__5620__auto___31457]));

var G__31458 = (i__5620__auto___31457 + (1));
i__5620__auto___31457 = G__31458;
continue;
} else {
}
break;
}

var G__31391 = args31389.length;
switch (G__31391) {
case 1:
return sablono.core.week_field31388.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field31388.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31389.length)].join('')));

}
});

sablono.core.week_field31388.cljs$core$IFn$_invoke$arity$1 = (function (name__12353__auto__){
return sablono.core.week_field31388.call(null,name__12353__auto__,null);
});

sablono.core.week_field31388.cljs$core$IFn$_invoke$arity$2 = (function (name__12353__auto__,value__12354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__12353__auto__,value__12354__auto__);
});

sablono.core.week_field31388.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field31388);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box31460 = (function sablono$core$check_box31460(var_args){
var args31461 = [];
var len__5619__auto___31464 = arguments.length;
var i__5620__auto___31465 = (0);
while(true){
if((i__5620__auto___31465 < len__5619__auto___31464)){
args31461.push((arguments[i__5620__auto___31465]));

var G__31466 = (i__5620__auto___31465 + (1));
i__5620__auto___31465 = G__31466;
continue;
} else {
}
break;
}

var G__31463 = args31461.length;
switch (G__31463) {
case 1:
return sablono.core.check_box31460.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box31460.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box31460.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31461.length)].join('')));

}
});

sablono.core.check_box31460.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box31460.call(null,name,null);
});

sablono.core.check_box31460.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box31460.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box31460.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box31460.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box31460);
/**
 * Creates a radio button.
 */
sablono.core.radio_button31468 = (function sablono$core$radio_button31468(var_args){
var args31469 = [];
var len__5619__auto___31472 = arguments.length;
var i__5620__auto___31473 = (0);
while(true){
if((i__5620__auto___31473 < len__5619__auto___31472)){
args31469.push((arguments[i__5620__auto___31473]));

var G__31474 = (i__5620__auto___31473 + (1));
i__5620__auto___31473 = G__31474;
continue;
} else {
}
break;
}

var G__31471 = args31469.length;
switch (G__31471) {
case 1:
return sablono.core.radio_button31468.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button31468.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button31468.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31469.length)].join('')));

}
});

sablono.core.radio_button31468.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button31468.call(null,group,null);
});

sablono.core.radio_button31468.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button31468.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button31468.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button31468.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button31468);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options31476 = (function sablono$core$select_options31476(coll){
var iter__5333__auto__ = (function sablono$core$select_options31476_$_iter__31485(s__31486){
return (new cljs.core.LazySeq(null,(function (){
var s__31486__$1 = s__31486;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31486__$1);
if(temp__4425__auto__){
var s__31486__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31486__$2)){
var c__5331__auto__ = cljs.core.chunk_first.call(null,s__31486__$2);
var size__5332__auto__ = cljs.core.count.call(null,c__5331__auto__);
var b__31488 = cljs.core.chunk_buffer.call(null,size__5332__auto__);
if((function (){var i__31487 = (0);
while(true){
if((i__31487 < size__5332__auto__)){
var x = cljs.core._nth.call(null,c__5331__auto__,i__31487);
cljs.core.chunk_append.call(null,b__31488,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31491 = x;
var text = cljs.core.nth.call(null,vec__31491,(0),null);
var val = cljs.core.nth.call(null,vec__31491,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__31491,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options31476.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__31493 = (i__31487 + (1));
i__31487 = G__31493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31488),sablono$core$select_options31476_$_iter__31485.call(null,cljs.core.chunk_rest.call(null,s__31486__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31488),null);
}
} else {
var x = cljs.core.first.call(null,s__31486__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31492 = x;
var text = cljs.core.nth.call(null,vec__31492,(0),null);
var val = cljs.core.nth.call(null,vec__31492,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__31492,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options31476.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options31476_$_iter__31485.call(null,cljs.core.rest.call(null,s__31486__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5333__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options31476);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down31494 = (function sablono$core$drop_down31494(var_args){
var args31495 = [];
var len__5619__auto___31498 = arguments.length;
var i__5620__auto___31499 = (0);
while(true){
if((i__5620__auto___31499 < len__5619__auto___31498)){
args31495.push((arguments[i__5620__auto___31499]));

var G__31500 = (i__5620__auto___31499 + (1));
i__5620__auto___31499 = G__31500;
continue;
} else {
}
break;
}

var G__31497 = args31495.length;
switch (G__31497) {
case 2:
return sablono.core.drop_down31494.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down31494.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31495.length)].join('')));

}
});

sablono.core.drop_down31494.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down31494.call(null,name,options,null);
});

sablono.core.drop_down31494.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down31494.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down31494);
/**
 * Creates a text area element.
 */
sablono.core.text_area31502 = (function sablono$core$text_area31502(var_args){
var args31503 = [];
var len__5619__auto___31506 = arguments.length;
var i__5620__auto___31507 = (0);
while(true){
if((i__5620__auto___31507 < len__5619__auto___31506)){
args31503.push((arguments[i__5620__auto___31507]));

var G__31508 = (i__5620__auto___31507 + (1));
i__5620__auto___31507 = G__31508;
continue;
} else {
}
break;
}

var G__31505 = args31503.length;
switch (G__31505) {
case 1:
return sablono.core.text_area31502.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area31502.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31503.length)].join('')));

}
});

sablono.core.text_area31502.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area31502.call(null,name,null);
});

sablono.core.text_area31502.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area31502.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area31502);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label31510 = (function sablono$core$label31510(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label31510);
/**
 * Creates a submit button.
 */
sablono.core.submit_button31511 = (function sablono$core$submit_button31511(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button31511);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button31512 = (function sablono$core$reset_button31512(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button31512);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to31513 = (function sablono$core$form_to31513(var_args){
var args__5626__auto__ = [];
var len__5619__auto___31518 = arguments.length;
var i__5620__auto___31519 = (0);
while(true){
if((i__5620__auto___31519 < len__5619__auto___31518)){
args__5626__auto__.push((arguments[i__5620__auto___31519]));

var G__31520 = (i__5620__auto___31519 + (1));
i__5620__auto___31519 = G__31520;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return sablono.core.form_to31513.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

sablono.core.form_to31513.cljs$core$IFn$_invoke$arity$variadic = (function (p__31516,body){
var vec__31517 = p__31516;
var method = cljs.core.nth.call(null,vec__31517,(0),null);
var action = cljs.core.nth.call(null,vec__31517,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to31513.cljs$lang$maxFixedArity = (1);

sablono.core.form_to31513.cljs$lang$applyTo = (function (seq31514){
var G__31515 = cljs.core.first.call(null,seq31514);
var seq31514__$1 = cljs.core.next.call(null,seq31514);
return sablono.core.form_to31513.cljs$core$IFn$_invoke$arity$variadic(G__31515,seq31514__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to31513);
