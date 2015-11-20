// Compiled by ClojureScript 1.7.122 {}
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
var G__39791__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__39790 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__39790,(0),null);
var body = cljs.core.nthnext.call(null,vec__39790,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__39791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39792__i = 0, G__39792__a = new Array(arguments.length -  0);
while (G__39792__i < G__39792__a.length) {G__39792__a[G__39792__i] = arguments[G__39792__i + 0]; ++G__39792__i;}
  args = new cljs.core.IndexedSeq(G__39792__a,0);
} 
return G__39791__delegate.call(this,args);};
G__39791.cljs$lang$maxFixedArity = 0;
G__39791.cljs$lang$applyTo = (function (arglist__39793){
var args = cljs.core.seq(arglist__39793);
return G__39791__delegate(args);
});
G__39791.cljs$core$IFn$_invoke$arity$variadic = G__39791__delegate;
return G__39791;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19973__auto__ = (function sablono$core$update_arglists_$_iter__39798(s__39799){
return (new cljs.core.LazySeq(null,(function (){
var s__39799__$1 = s__39799;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__39799__$1);
if(temp__4425__auto__){
var s__39799__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39799__$2)){
var c__19971__auto__ = cljs.core.chunk_first.call(null,s__39799__$2);
var size__19972__auto__ = cljs.core.count.call(null,c__19971__auto__);
var b__39801 = cljs.core.chunk_buffer.call(null,size__19972__auto__);
if((function (){var i__39800 = (0);
while(true){
if((i__39800 < size__19972__auto__)){
var args = cljs.core._nth.call(null,c__19971__auto__,i__39800);
cljs.core.chunk_append.call(null,b__39801,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__39802 = (i__39800 + (1));
i__39800 = G__39802;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39801),sablono$core$update_arglists_$_iter__39798.call(null,cljs.core.chunk_rest.call(null,s__39799__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39801),null);
}
} else {
var args = cljs.core.first.call(null,s__39799__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__39798.call(null,cljs.core.rest.call(null,s__39799__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19973__auto__.call(null,arglists);
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
var args__20266__auto__ = [];
var len__20259__auto___39808 = arguments.length;
var i__20260__auto___39809 = (0);
while(true){
if((i__20260__auto___39809 < len__20259__auto___39808)){
args__20266__auto__.push((arguments[i__20260__auto___39809]));

var G__39810 = (i__20260__auto___39809 + (1));
i__20260__auto___39809 = G__39810;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((0) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__20267__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19973__auto__ = (function sablono$core$iter__39804(s__39805){
return (new cljs.core.LazySeq(null,(function (){
var s__39805__$1 = s__39805;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__39805__$1);
if(temp__4425__auto__){
var s__39805__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39805__$2)){
var c__19971__auto__ = cljs.core.chunk_first.call(null,s__39805__$2);
var size__19972__auto__ = cljs.core.count.call(null,c__19971__auto__);
var b__39807 = cljs.core.chunk_buffer.call(null,size__19972__auto__);
if((function (){var i__39806 = (0);
while(true){
if((i__39806 < size__19972__auto__)){
var style = cljs.core._nth.call(null,c__19971__auto__,i__39806);
cljs.core.chunk_append.call(null,b__39807,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__39811 = (i__39806 + (1));
i__39806 = G__39811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39807),sablono$core$iter__39804.call(null,cljs.core.chunk_rest.call(null,s__39805__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39807),null);
}
} else {
var style = cljs.core.first.call(null,s__39805__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__39804.call(null,cljs.core.rest.call(null,s__39805__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19973__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq39803){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39803));
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
sablono.core.link_to39812 = (function sablono$core$link_to39812(var_args){
var args__20266__auto__ = [];
var len__20259__auto___39815 = arguments.length;
var i__20260__auto___39816 = (0);
while(true){
if((i__20260__auto___39816 < len__20259__auto___39815)){
args__20266__auto__.push((arguments[i__20260__auto___39816]));

var G__39817 = (i__20260__auto___39816 + (1));
i__20260__auto___39816 = G__39817;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return sablono.core.link_to39812.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});

sablono.core.link_to39812.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to39812.cljs$lang$maxFixedArity = (1);

sablono.core.link_to39812.cljs$lang$applyTo = (function (seq39813){
var G__39814 = cljs.core.first.call(null,seq39813);
var seq39813__$1 = cljs.core.next.call(null,seq39813);
return sablono.core.link_to39812.cljs$core$IFn$_invoke$arity$variadic(G__39814,seq39813__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to39812);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to39818 = (function sablono$core$mail_to39818(var_args){
var args__20266__auto__ = [];
var len__20259__auto___39823 = arguments.length;
var i__20260__auto___39824 = (0);
while(true){
if((i__20260__auto___39824 < len__20259__auto___39823)){
args__20266__auto__.push((arguments[i__20260__auto___39824]));

var G__39825 = (i__20260__auto___39824 + (1));
i__20260__auto___39824 = G__39825;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return sablono.core.mail_to39818.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});

sablono.core.mail_to39818.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__39821){
var vec__39822 = p__39821;
var content = cljs.core.nth.call(null,vec__39822,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__19201__auto__ = content;
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to39818.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to39818.cljs$lang$applyTo = (function (seq39819){
var G__39820 = cljs.core.first.call(null,seq39819);
var seq39819__$1 = cljs.core.next.call(null,seq39819);
return sablono.core.mail_to39818.cljs$core$IFn$_invoke$arity$variadic(G__39820,seq39819__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to39818);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list39826 = (function sablono$core$unordered_list39826(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19973__auto__ = (function sablono$core$unordered_list39826_$_iter__39831(s__39832){
return (new cljs.core.LazySeq(null,(function (){
var s__39832__$1 = s__39832;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__39832__$1);
if(temp__4425__auto__){
var s__39832__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39832__$2)){
var c__19971__auto__ = cljs.core.chunk_first.call(null,s__39832__$2);
var size__19972__auto__ = cljs.core.count.call(null,c__19971__auto__);
var b__39834 = cljs.core.chunk_buffer.call(null,size__19972__auto__);
if((function (){var i__39833 = (0);
while(true){
if((i__39833 < size__19972__auto__)){
var x = cljs.core._nth.call(null,c__19971__auto__,i__39833);
cljs.core.chunk_append.call(null,b__39834,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__39835 = (i__39833 + (1));
i__39833 = G__39835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39834),sablono$core$unordered_list39826_$_iter__39831.call(null,cljs.core.chunk_rest.call(null,s__39832__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39834),null);
}
} else {
var x = cljs.core.first.call(null,s__39832__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list39826_$_iter__39831.call(null,cljs.core.rest.call(null,s__39832__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19973__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list39826);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list39836 = (function sablono$core$ordered_list39836(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19973__auto__ = (function sablono$core$ordered_list39836_$_iter__39841(s__39842){
return (new cljs.core.LazySeq(null,(function (){
var s__39842__$1 = s__39842;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__39842__$1);
if(temp__4425__auto__){
var s__39842__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39842__$2)){
var c__19971__auto__ = cljs.core.chunk_first.call(null,s__39842__$2);
var size__19972__auto__ = cljs.core.count.call(null,c__19971__auto__);
var b__39844 = cljs.core.chunk_buffer.call(null,size__19972__auto__);
if((function (){var i__39843 = (0);
while(true){
if((i__39843 < size__19972__auto__)){
var x = cljs.core._nth.call(null,c__19971__auto__,i__39843);
cljs.core.chunk_append.call(null,b__39844,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__39845 = (i__39843 + (1));
i__39843 = G__39845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39844),sablono$core$ordered_list39836_$_iter__39841.call(null,cljs.core.chunk_rest.call(null,s__39842__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39844),null);
}
} else {
var x = cljs.core.first.call(null,s__39842__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list39836_$_iter__39841.call(null,cljs.core.rest.call(null,s__39842__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19973__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list39836);
/**
 * Create an image element.
 */
sablono.core.image39846 = (function sablono$core$image39846(var_args){
var args39847 = [];
var len__20259__auto___39850 = arguments.length;
var i__20260__auto___39851 = (0);
while(true){
if((i__20260__auto___39851 < len__20259__auto___39850)){
args39847.push((arguments[i__20260__auto___39851]));

var G__39852 = (i__20260__auto___39851 + (1));
i__20260__auto___39851 = G__39852;
continue;
} else {
}
break;
}

var G__39849 = args39847.length;
switch (G__39849) {
case 1:
return sablono.core.image39846.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image39846.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39847.length)].join('')));

}
});

sablono.core.image39846.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image39846.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image39846.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image39846);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__39854_SHARP_,p2__39855_SHARP_){
return [cljs.core.str(p1__39854_SHARP_),cljs.core.str("["),cljs.core.str(p2__39855_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__39856_SHARP_,p2__39857_SHARP_){
return [cljs.core.str(p1__39856_SHARP_),cljs.core.str("-"),cljs.core.str(p2__39857_SHARP_)].join('');
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
sablono.core.color_field39858 = (function sablono$core$color_field39858(var_args){
var args39859 = [];
var len__20259__auto___39926 = arguments.length;
var i__20260__auto___39927 = (0);
while(true){
if((i__20260__auto___39927 < len__20259__auto___39926)){
args39859.push((arguments[i__20260__auto___39927]));

var G__39928 = (i__20260__auto___39927 + (1));
i__20260__auto___39927 = G__39928;
continue;
} else {
}
break;
}

var G__39861 = args39859.length;
switch (G__39861) {
case 1:
return sablono.core.color_field39858.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field39858.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39859.length)].join('')));

}
});

sablono.core.color_field39858.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.color_field39858.call(null,name__25996__auto__,null);
});

sablono.core.color_field39858.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.color_field39858.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field39858);

/**
 * Creates a date input field.
 */
sablono.core.date_field39862 = (function sablono$core$date_field39862(var_args){
var args39863 = [];
var len__20259__auto___39930 = arguments.length;
var i__20260__auto___39931 = (0);
while(true){
if((i__20260__auto___39931 < len__20259__auto___39930)){
args39863.push((arguments[i__20260__auto___39931]));

var G__39932 = (i__20260__auto___39931 + (1));
i__20260__auto___39931 = G__39932;
continue;
} else {
}
break;
}

var G__39865 = args39863.length;
switch (G__39865) {
case 1:
return sablono.core.date_field39862.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field39862.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39863.length)].join('')));

}
});

sablono.core.date_field39862.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.date_field39862.call(null,name__25996__auto__,null);
});

sablono.core.date_field39862.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.date_field39862.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field39862);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field39866 = (function sablono$core$datetime_field39866(var_args){
var args39867 = [];
var len__20259__auto___39934 = arguments.length;
var i__20260__auto___39935 = (0);
while(true){
if((i__20260__auto___39935 < len__20259__auto___39934)){
args39867.push((arguments[i__20260__auto___39935]));

var G__39936 = (i__20260__auto___39935 + (1));
i__20260__auto___39935 = G__39936;
continue;
} else {
}
break;
}

var G__39869 = args39867.length;
switch (G__39869) {
case 1:
return sablono.core.datetime_field39866.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field39866.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39867.length)].join('')));

}
});

sablono.core.datetime_field39866.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.datetime_field39866.call(null,name__25996__auto__,null);
});

sablono.core.datetime_field39866.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.datetime_field39866.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field39866);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field39870 = (function sablono$core$datetime_local_field39870(var_args){
var args39871 = [];
var len__20259__auto___39938 = arguments.length;
var i__20260__auto___39939 = (0);
while(true){
if((i__20260__auto___39939 < len__20259__auto___39938)){
args39871.push((arguments[i__20260__auto___39939]));

var G__39940 = (i__20260__auto___39939 + (1));
i__20260__auto___39939 = G__39940;
continue;
} else {
}
break;
}

var G__39873 = args39871.length;
switch (G__39873) {
case 1:
return sablono.core.datetime_local_field39870.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field39870.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39871.length)].join('')));

}
});

sablono.core.datetime_local_field39870.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.datetime_local_field39870.call(null,name__25996__auto__,null);
});

sablono.core.datetime_local_field39870.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.datetime_local_field39870.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field39870);

/**
 * Creates a email input field.
 */
sablono.core.email_field39874 = (function sablono$core$email_field39874(var_args){
var args39875 = [];
var len__20259__auto___39942 = arguments.length;
var i__20260__auto___39943 = (0);
while(true){
if((i__20260__auto___39943 < len__20259__auto___39942)){
args39875.push((arguments[i__20260__auto___39943]));

var G__39944 = (i__20260__auto___39943 + (1));
i__20260__auto___39943 = G__39944;
continue;
} else {
}
break;
}

var G__39877 = args39875.length;
switch (G__39877) {
case 1:
return sablono.core.email_field39874.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field39874.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39875.length)].join('')));

}
});

sablono.core.email_field39874.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.email_field39874.call(null,name__25996__auto__,null);
});

sablono.core.email_field39874.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.email_field39874.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field39874);

/**
 * Creates a file input field.
 */
sablono.core.file_field39878 = (function sablono$core$file_field39878(var_args){
var args39879 = [];
var len__20259__auto___39946 = arguments.length;
var i__20260__auto___39947 = (0);
while(true){
if((i__20260__auto___39947 < len__20259__auto___39946)){
args39879.push((arguments[i__20260__auto___39947]));

var G__39948 = (i__20260__auto___39947 + (1));
i__20260__auto___39947 = G__39948;
continue;
} else {
}
break;
}

var G__39881 = args39879.length;
switch (G__39881) {
case 1:
return sablono.core.file_field39878.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field39878.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39879.length)].join('')));

}
});

sablono.core.file_field39878.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.file_field39878.call(null,name__25996__auto__,null);
});

sablono.core.file_field39878.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.file_field39878.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field39878);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field39882 = (function sablono$core$hidden_field39882(var_args){
var args39883 = [];
var len__20259__auto___39950 = arguments.length;
var i__20260__auto___39951 = (0);
while(true){
if((i__20260__auto___39951 < len__20259__auto___39950)){
args39883.push((arguments[i__20260__auto___39951]));

var G__39952 = (i__20260__auto___39951 + (1));
i__20260__auto___39951 = G__39952;
continue;
} else {
}
break;
}

var G__39885 = args39883.length;
switch (G__39885) {
case 1:
return sablono.core.hidden_field39882.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field39882.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39883.length)].join('')));

}
});

sablono.core.hidden_field39882.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.hidden_field39882.call(null,name__25996__auto__,null);
});

sablono.core.hidden_field39882.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.hidden_field39882.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field39882);

/**
 * Creates a month input field.
 */
sablono.core.month_field39886 = (function sablono$core$month_field39886(var_args){
var args39887 = [];
var len__20259__auto___39954 = arguments.length;
var i__20260__auto___39955 = (0);
while(true){
if((i__20260__auto___39955 < len__20259__auto___39954)){
args39887.push((arguments[i__20260__auto___39955]));

var G__39956 = (i__20260__auto___39955 + (1));
i__20260__auto___39955 = G__39956;
continue;
} else {
}
break;
}

var G__39889 = args39887.length;
switch (G__39889) {
case 1:
return sablono.core.month_field39886.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field39886.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39887.length)].join('')));

}
});

sablono.core.month_field39886.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.month_field39886.call(null,name__25996__auto__,null);
});

sablono.core.month_field39886.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.month_field39886.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field39886);

/**
 * Creates a number input field.
 */
sablono.core.number_field39890 = (function sablono$core$number_field39890(var_args){
var args39891 = [];
var len__20259__auto___39958 = arguments.length;
var i__20260__auto___39959 = (0);
while(true){
if((i__20260__auto___39959 < len__20259__auto___39958)){
args39891.push((arguments[i__20260__auto___39959]));

var G__39960 = (i__20260__auto___39959 + (1));
i__20260__auto___39959 = G__39960;
continue;
} else {
}
break;
}

var G__39893 = args39891.length;
switch (G__39893) {
case 1:
return sablono.core.number_field39890.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field39890.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39891.length)].join('')));

}
});

sablono.core.number_field39890.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.number_field39890.call(null,name__25996__auto__,null);
});

sablono.core.number_field39890.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.number_field39890.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field39890);

/**
 * Creates a password input field.
 */
sablono.core.password_field39894 = (function sablono$core$password_field39894(var_args){
var args39895 = [];
var len__20259__auto___39962 = arguments.length;
var i__20260__auto___39963 = (0);
while(true){
if((i__20260__auto___39963 < len__20259__auto___39962)){
args39895.push((arguments[i__20260__auto___39963]));

var G__39964 = (i__20260__auto___39963 + (1));
i__20260__auto___39963 = G__39964;
continue;
} else {
}
break;
}

var G__39897 = args39895.length;
switch (G__39897) {
case 1:
return sablono.core.password_field39894.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field39894.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39895.length)].join('')));

}
});

sablono.core.password_field39894.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.password_field39894.call(null,name__25996__auto__,null);
});

sablono.core.password_field39894.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.password_field39894.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field39894);

/**
 * Creates a range input field.
 */
sablono.core.range_field39898 = (function sablono$core$range_field39898(var_args){
var args39899 = [];
var len__20259__auto___39966 = arguments.length;
var i__20260__auto___39967 = (0);
while(true){
if((i__20260__auto___39967 < len__20259__auto___39966)){
args39899.push((arguments[i__20260__auto___39967]));

var G__39968 = (i__20260__auto___39967 + (1));
i__20260__auto___39967 = G__39968;
continue;
} else {
}
break;
}

var G__39901 = args39899.length;
switch (G__39901) {
case 1:
return sablono.core.range_field39898.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field39898.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39899.length)].join('')));

}
});

sablono.core.range_field39898.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.range_field39898.call(null,name__25996__auto__,null);
});

sablono.core.range_field39898.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.range_field39898.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field39898);

/**
 * Creates a search input field.
 */
sablono.core.search_field39902 = (function sablono$core$search_field39902(var_args){
var args39903 = [];
var len__20259__auto___39970 = arguments.length;
var i__20260__auto___39971 = (0);
while(true){
if((i__20260__auto___39971 < len__20259__auto___39970)){
args39903.push((arguments[i__20260__auto___39971]));

var G__39972 = (i__20260__auto___39971 + (1));
i__20260__auto___39971 = G__39972;
continue;
} else {
}
break;
}

var G__39905 = args39903.length;
switch (G__39905) {
case 1:
return sablono.core.search_field39902.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field39902.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39903.length)].join('')));

}
});

sablono.core.search_field39902.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.search_field39902.call(null,name__25996__auto__,null);
});

sablono.core.search_field39902.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.search_field39902.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field39902);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field39906 = (function sablono$core$tel_field39906(var_args){
var args39907 = [];
var len__20259__auto___39974 = arguments.length;
var i__20260__auto___39975 = (0);
while(true){
if((i__20260__auto___39975 < len__20259__auto___39974)){
args39907.push((arguments[i__20260__auto___39975]));

var G__39976 = (i__20260__auto___39975 + (1));
i__20260__auto___39975 = G__39976;
continue;
} else {
}
break;
}

var G__39909 = args39907.length;
switch (G__39909) {
case 1:
return sablono.core.tel_field39906.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field39906.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39907.length)].join('')));

}
});

sablono.core.tel_field39906.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.tel_field39906.call(null,name__25996__auto__,null);
});

sablono.core.tel_field39906.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.tel_field39906.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field39906);

/**
 * Creates a text input field.
 */
sablono.core.text_field39910 = (function sablono$core$text_field39910(var_args){
var args39911 = [];
var len__20259__auto___39978 = arguments.length;
var i__20260__auto___39979 = (0);
while(true){
if((i__20260__auto___39979 < len__20259__auto___39978)){
args39911.push((arguments[i__20260__auto___39979]));

var G__39980 = (i__20260__auto___39979 + (1));
i__20260__auto___39979 = G__39980;
continue;
} else {
}
break;
}

var G__39913 = args39911.length;
switch (G__39913) {
case 1:
return sablono.core.text_field39910.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field39910.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39911.length)].join('')));

}
});

sablono.core.text_field39910.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.text_field39910.call(null,name__25996__auto__,null);
});

sablono.core.text_field39910.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.text_field39910.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field39910);

/**
 * Creates a time input field.
 */
sablono.core.time_field39914 = (function sablono$core$time_field39914(var_args){
var args39915 = [];
var len__20259__auto___39982 = arguments.length;
var i__20260__auto___39983 = (0);
while(true){
if((i__20260__auto___39983 < len__20259__auto___39982)){
args39915.push((arguments[i__20260__auto___39983]));

var G__39984 = (i__20260__auto___39983 + (1));
i__20260__auto___39983 = G__39984;
continue;
} else {
}
break;
}

var G__39917 = args39915.length;
switch (G__39917) {
case 1:
return sablono.core.time_field39914.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field39914.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39915.length)].join('')));

}
});

sablono.core.time_field39914.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.time_field39914.call(null,name__25996__auto__,null);
});

sablono.core.time_field39914.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.time_field39914.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field39914);

/**
 * Creates a url input field.
 */
sablono.core.url_field39918 = (function sablono$core$url_field39918(var_args){
var args39919 = [];
var len__20259__auto___39986 = arguments.length;
var i__20260__auto___39987 = (0);
while(true){
if((i__20260__auto___39987 < len__20259__auto___39986)){
args39919.push((arguments[i__20260__auto___39987]));

var G__39988 = (i__20260__auto___39987 + (1));
i__20260__auto___39987 = G__39988;
continue;
} else {
}
break;
}

var G__39921 = args39919.length;
switch (G__39921) {
case 1:
return sablono.core.url_field39918.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field39918.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39919.length)].join('')));

}
});

sablono.core.url_field39918.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.url_field39918.call(null,name__25996__auto__,null);
});

sablono.core.url_field39918.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.url_field39918.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field39918);

/**
 * Creates a week input field.
 */
sablono.core.week_field39922 = (function sablono$core$week_field39922(var_args){
var args39923 = [];
var len__20259__auto___39990 = arguments.length;
var i__20260__auto___39991 = (0);
while(true){
if((i__20260__auto___39991 < len__20259__auto___39990)){
args39923.push((arguments[i__20260__auto___39991]));

var G__39992 = (i__20260__auto___39991 + (1));
i__20260__auto___39991 = G__39992;
continue;
} else {
}
break;
}

var G__39925 = args39923.length;
switch (G__39925) {
case 1:
return sablono.core.week_field39922.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field39922.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39923.length)].join('')));

}
});

sablono.core.week_field39922.cljs$core$IFn$_invoke$arity$1 = (function (name__25996__auto__){
return sablono.core.week_field39922.call(null,name__25996__auto__,null);
});

sablono.core.week_field39922.cljs$core$IFn$_invoke$arity$2 = (function (name__25996__auto__,value__25997__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__25996__auto__,value__25997__auto__);
});

sablono.core.week_field39922.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field39922);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box39994 = (function sablono$core$check_box39994(var_args){
var args39995 = [];
var len__20259__auto___39998 = arguments.length;
var i__20260__auto___39999 = (0);
while(true){
if((i__20260__auto___39999 < len__20259__auto___39998)){
args39995.push((arguments[i__20260__auto___39999]));

var G__40000 = (i__20260__auto___39999 + (1));
i__20260__auto___39999 = G__40000;
continue;
} else {
}
break;
}

var G__39997 = args39995.length;
switch (G__39997) {
case 1:
return sablono.core.check_box39994.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box39994.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box39994.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39995.length)].join('')));

}
});

sablono.core.check_box39994.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box39994.call(null,name,null);
});

sablono.core.check_box39994.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box39994.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box39994.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box39994.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box39994);
/**
 * Creates a radio button.
 */
sablono.core.radio_button40002 = (function sablono$core$radio_button40002(var_args){
var args40003 = [];
var len__20259__auto___40006 = arguments.length;
var i__20260__auto___40007 = (0);
while(true){
if((i__20260__auto___40007 < len__20259__auto___40006)){
args40003.push((arguments[i__20260__auto___40007]));

var G__40008 = (i__20260__auto___40007 + (1));
i__20260__auto___40007 = G__40008;
continue;
} else {
}
break;
}

var G__40005 = args40003.length;
switch (G__40005) {
case 1:
return sablono.core.radio_button40002.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button40002.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button40002.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40003.length)].join('')));

}
});

sablono.core.radio_button40002.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button40002.call(null,group,null);
});

sablono.core.radio_button40002.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button40002.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button40002.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button40002.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button40002);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options40010 = (function sablono$core$select_options40010(coll){
var iter__19973__auto__ = (function sablono$core$select_options40010_$_iter__40019(s__40020){
return (new cljs.core.LazySeq(null,(function (){
var s__40020__$1 = s__40020;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__40020__$1);
if(temp__4425__auto__){
var s__40020__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40020__$2)){
var c__19971__auto__ = cljs.core.chunk_first.call(null,s__40020__$2);
var size__19972__auto__ = cljs.core.count.call(null,c__19971__auto__);
var b__40022 = cljs.core.chunk_buffer.call(null,size__19972__auto__);
if((function (){var i__40021 = (0);
while(true){
if((i__40021 < size__19972__auto__)){
var x = cljs.core._nth.call(null,c__19971__auto__,i__40021);
cljs.core.chunk_append.call(null,b__40022,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__40025 = x;
var text = cljs.core.nth.call(null,vec__40025,(0),null);
var val = cljs.core.nth.call(null,vec__40025,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__40025,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options40010.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__40027 = (i__40021 + (1));
i__40021 = G__40027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40022),sablono$core$select_options40010_$_iter__40019.call(null,cljs.core.chunk_rest.call(null,s__40020__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40022),null);
}
} else {
var x = cljs.core.first.call(null,s__40020__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__40026 = x;
var text = cljs.core.nth.call(null,vec__40026,(0),null);
var val = cljs.core.nth.call(null,vec__40026,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__40026,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options40010.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options40010_$_iter__40019.call(null,cljs.core.rest.call(null,s__40020__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19973__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options40010);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down40028 = (function sablono$core$drop_down40028(var_args){
var args40029 = [];
var len__20259__auto___40032 = arguments.length;
var i__20260__auto___40033 = (0);
while(true){
if((i__20260__auto___40033 < len__20259__auto___40032)){
args40029.push((arguments[i__20260__auto___40033]));

var G__40034 = (i__20260__auto___40033 + (1));
i__20260__auto___40033 = G__40034;
continue;
} else {
}
break;
}

var G__40031 = args40029.length;
switch (G__40031) {
case 2:
return sablono.core.drop_down40028.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down40028.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40029.length)].join('')));

}
});

sablono.core.drop_down40028.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down40028.call(null,name,options,null);
});

sablono.core.drop_down40028.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down40028.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down40028);
/**
 * Creates a text area element.
 */
sablono.core.text_area40036 = (function sablono$core$text_area40036(var_args){
var args40037 = [];
var len__20259__auto___40040 = arguments.length;
var i__20260__auto___40041 = (0);
while(true){
if((i__20260__auto___40041 < len__20259__auto___40040)){
args40037.push((arguments[i__20260__auto___40041]));

var G__40042 = (i__20260__auto___40041 + (1));
i__20260__auto___40041 = G__40042;
continue;
} else {
}
break;
}

var G__40039 = args40037.length;
switch (G__40039) {
case 1:
return sablono.core.text_area40036.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area40036.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40037.length)].join('')));

}
});

sablono.core.text_area40036.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area40036.call(null,name,null);
});

sablono.core.text_area40036.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area40036.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area40036);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label40044 = (function sablono$core$label40044(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label40044);
/**
 * Creates a submit button.
 */
sablono.core.submit_button40045 = (function sablono$core$submit_button40045(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button40045);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button40046 = (function sablono$core$reset_button40046(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button40046);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to40047 = (function sablono$core$form_to40047(var_args){
var args__20266__auto__ = [];
var len__20259__auto___40052 = arguments.length;
var i__20260__auto___40053 = (0);
while(true){
if((i__20260__auto___40053 < len__20259__auto___40052)){
args__20266__auto__.push((arguments[i__20260__auto___40053]));

var G__40054 = (i__20260__auto___40053 + (1));
i__20260__auto___40053 = G__40054;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return sablono.core.form_to40047.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});

sablono.core.form_to40047.cljs$core$IFn$_invoke$arity$variadic = (function (p__40050,body){
var vec__40051 = p__40050;
var method = cljs.core.nth.call(null,vec__40051,(0),null);
var action = cljs.core.nth.call(null,vec__40051,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to40047.cljs$lang$maxFixedArity = (1);

sablono.core.form_to40047.cljs$lang$applyTo = (function (seq40048){
var G__40049 = cljs.core.first.call(null,seq40048);
var seq40048__$1 = cljs.core.next.call(null,seq40048);
return sablono.core.form_to40047.cljs$core$IFn$_invoke$arity$variadic(G__40049,seq40048__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to40047);

//# sourceMappingURL=core.js.map?rel=1444632662900