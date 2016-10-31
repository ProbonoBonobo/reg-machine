// Compiled by ClojureScript 1.9.227 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 *  Like update-in, but for updating a single top-level key.
 *  Any additional args will be passed to f after the value.
 * 
 *  WARNING As of Clojure 1.7 this function exists in clojure.core and
 *  will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(var_args){
var args34891 = [];
var len__7479__auto___34900 = arguments.length;
var i__7480__auto___34901 = (0);
while(true){
if((i__7480__auto___34901 < len__7479__auto___34900)){
args34891.push((arguments[i__7480__auto___34901]));

var G__34902 = (i__7480__auto___34901 + (1));
i__7480__auto___34901 = G__34902;
continue;
} else {
}
break;
}

var G__34899 = args34891.length;
switch (G__34899) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args34891.slice((5)),(0),null));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7498__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq34892){
var G__34893 = cljs.core.first.call(null,seq34892);
var seq34892__$1 = cljs.core.next.call(null,seq34892);
var G__34894 = cljs.core.first.call(null,seq34892__$1);
var seq34892__$2 = cljs.core.next.call(null,seq34892__$1);
var G__34895 = cljs.core.first.call(null,seq34892__$2);
var seq34892__$3 = cljs.core.next.call(null,seq34892__$2);
var G__34896 = cljs.core.first.call(null,seq34892__$3);
var seq34892__$4 = cljs.core.next.call(null,seq34892__$3);
var G__34897 = cljs.core.first.call(null,seq34892__$4);
var seq34892__$5 = cljs.core.next.call(null,seq34892__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__34893,G__34894,G__34895,G__34896,G__34897,seq34892__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);

/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__10298__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__34916_34926 = cljs.core.seq.call(null,m);
var chunk__34917_34927 = null;
var count__34918_34928 = (0);
var i__34919_34929 = (0);
while(true){
if((i__34919_34929 < count__34918_34928)){
var vec__34920_34930 = cljs.core._nth.call(null,chunk__34917_34927,i__34919_34929);
var k_34931 = cljs.core.nth.call(null,vec__34920_34930,(0),null);
var v_34932 = cljs.core.nth.call(null,vec__34920_34930,(1),null);
var m34915_34933 = cljs.core.deref.call(null,m_atom__10298__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10298__auto__,cljs.core.assoc_BANG_.call(null,m34915_34933,k_34931,f.call(null,v_34932)));

var G__34934 = seq__34916_34926;
var G__34935 = chunk__34917_34927;
var G__34936 = count__34918_34928;
var G__34937 = (i__34919_34929 + (1));
seq__34916_34926 = G__34934;
chunk__34917_34927 = G__34935;
count__34918_34928 = G__34936;
i__34919_34929 = G__34937;
continue;
} else {
var temp__4657__auto___34938 = cljs.core.seq.call(null,seq__34916_34926);
if(temp__4657__auto___34938){
var seq__34916_34939__$1 = temp__4657__auto___34938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34916_34939__$1)){
var c__7215__auto___34940 = cljs.core.chunk_first.call(null,seq__34916_34939__$1);
var G__34941 = cljs.core.chunk_rest.call(null,seq__34916_34939__$1);
var G__34942 = c__7215__auto___34940;
var G__34943 = cljs.core.count.call(null,c__7215__auto___34940);
var G__34944 = (0);
seq__34916_34926 = G__34941;
chunk__34917_34927 = G__34942;
count__34918_34928 = G__34943;
i__34919_34929 = G__34944;
continue;
} else {
var vec__34923_34945 = cljs.core.first.call(null,seq__34916_34939__$1);
var k_34946 = cljs.core.nth.call(null,vec__34923_34945,(0),null);
var v_34947 = cljs.core.nth.call(null,vec__34923_34945,(1),null);
var m34915_34948 = cljs.core.deref.call(null,m_atom__10298__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10298__auto__,cljs.core.assoc_BANG_.call(null,m34915_34948,k_34946,f.call(null,v_34947)));

var G__34949 = cljs.core.next.call(null,seq__34916_34939__$1);
var G__34950 = null;
var G__34951 = (0);
var G__34952 = (0);
seq__34916_34926 = G__34949;
chunk__34917_34927 = G__34950;
count__34918_34928 = G__34951;
i__34919_34929 = G__34952;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10298__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__10298__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__34965_34975 = cljs.core.seq.call(null,m);
var chunk__34966_34976 = null;
var count__34967_34977 = (0);
var i__34968_34978 = (0);
while(true){
if((i__34968_34978 < count__34967_34977)){
var vec__34969_34979 = cljs.core._nth.call(null,chunk__34966_34976,i__34968_34978);
var k_34980 = cljs.core.nth.call(null,vec__34969_34979,(0),null);
var v_34981 = cljs.core.nth.call(null,vec__34969_34979,(1),null);
var m34964_34982 = cljs.core.deref.call(null,m_atom__10298__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10298__auto__,cljs.core.assoc_BANG_.call(null,m34964_34982,f.call(null,k_34980),v_34981));

var G__34983 = seq__34965_34975;
var G__34984 = chunk__34966_34976;
var G__34985 = count__34967_34977;
var G__34986 = (i__34968_34978 + (1));
seq__34965_34975 = G__34983;
chunk__34966_34976 = G__34984;
count__34967_34977 = G__34985;
i__34968_34978 = G__34986;
continue;
} else {
var temp__4657__auto___34987 = cljs.core.seq.call(null,seq__34965_34975);
if(temp__4657__auto___34987){
var seq__34965_34988__$1 = temp__4657__auto___34987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34965_34988__$1)){
var c__7215__auto___34989 = cljs.core.chunk_first.call(null,seq__34965_34988__$1);
var G__34990 = cljs.core.chunk_rest.call(null,seq__34965_34988__$1);
var G__34991 = c__7215__auto___34989;
var G__34992 = cljs.core.count.call(null,c__7215__auto___34989);
var G__34993 = (0);
seq__34965_34975 = G__34990;
chunk__34966_34976 = G__34991;
count__34967_34977 = G__34992;
i__34968_34978 = G__34993;
continue;
} else {
var vec__34972_34994 = cljs.core.first.call(null,seq__34965_34988__$1);
var k_34995 = cljs.core.nth.call(null,vec__34972_34994,(0),null);
var v_34996 = cljs.core.nth.call(null,vec__34972_34994,(1),null);
var m34964_34997 = cljs.core.deref.call(null,m_atom__10298__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10298__auto__,cljs.core.assoc_BANG_.call(null,m34964_34997,f.call(null,k_34995),v_34996));

var G__34998 = cljs.core.next.call(null,seq__34965_34988__$1);
var G__34999 = null;
var G__35000 = (0);
var G__35001 = (0);
seq__34965_34975 = G__34998;
chunk__34966_34976 = G__34999;
count__34967_34977 = G__35000;
i__34968_34978 = G__35001;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10298__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__10298__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__35008_35012 = cljs.core.seq.call(null,ks);
var chunk__35009_35013 = null;
var count__35010_35014 = (0);
var i__35011_35015 = (0);
while(true){
if((i__35011_35015 < count__35010_35014)){
var k_35016 = cljs.core._nth.call(null,chunk__35009_35013,i__35011_35015);
var m35007_35017 = cljs.core.deref.call(null,m_atom__10298__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10298__auto__,cljs.core.assoc_BANG_.call(null,m35007_35017,k_35016,f.call(null,k_35016)));

var G__35018 = seq__35008_35012;
var G__35019 = chunk__35009_35013;
var G__35020 = count__35010_35014;
var G__35021 = (i__35011_35015 + (1));
seq__35008_35012 = G__35018;
chunk__35009_35013 = G__35019;
count__35010_35014 = G__35020;
i__35011_35015 = G__35021;
continue;
} else {
var temp__4657__auto___35022 = cljs.core.seq.call(null,seq__35008_35012);
if(temp__4657__auto___35022){
var seq__35008_35023__$1 = temp__4657__auto___35022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35008_35023__$1)){
var c__7215__auto___35024 = cljs.core.chunk_first.call(null,seq__35008_35023__$1);
var G__35025 = cljs.core.chunk_rest.call(null,seq__35008_35023__$1);
var G__35026 = c__7215__auto___35024;
var G__35027 = cljs.core.count.call(null,c__7215__auto___35024);
var G__35028 = (0);
seq__35008_35012 = G__35025;
chunk__35009_35013 = G__35026;
count__35010_35014 = G__35027;
i__35011_35015 = G__35028;
continue;
} else {
var k_35029 = cljs.core.first.call(null,seq__35008_35023__$1);
var m35007_35030 = cljs.core.deref.call(null,m_atom__10298__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10298__auto__,cljs.core.assoc_BANG_.call(null,m35007_35030,k_35029,f.call(null,k_35029)));

var G__35031 = cljs.core.next.call(null,seq__35008_35023__$1);
var G__35032 = null;
var G__35033 = (0);
var G__35034 = (0);
seq__35008_35012 = G__35031;
chunk__35009_35013 = G__35032;
count__35010_35014 = G__35033;
i__35011_35015 = G__35034;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10298__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__10298__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__35041_35045 = cljs.core.seq.call(null,vs);
var chunk__35042_35046 = null;
var count__35043_35047 = (0);
var i__35044_35048 = (0);
while(true){
if((i__35044_35048 < count__35043_35047)){
var v_35049 = cljs.core._nth.call(null,chunk__35042_35046,i__35044_35048);
var m35040_35050 = cljs.core.deref.call(null,m_atom__10298__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10298__auto__,cljs.core.assoc_BANG_.call(null,m35040_35050,f.call(null,v_35049),v_35049));

var G__35051 = seq__35041_35045;
var G__35052 = chunk__35042_35046;
var G__35053 = count__35043_35047;
var G__35054 = (i__35044_35048 + (1));
seq__35041_35045 = G__35051;
chunk__35042_35046 = G__35052;
count__35043_35047 = G__35053;
i__35044_35048 = G__35054;
continue;
} else {
var temp__4657__auto___35055 = cljs.core.seq.call(null,seq__35041_35045);
if(temp__4657__auto___35055){
var seq__35041_35056__$1 = temp__4657__auto___35055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35041_35056__$1)){
var c__7215__auto___35057 = cljs.core.chunk_first.call(null,seq__35041_35056__$1);
var G__35058 = cljs.core.chunk_rest.call(null,seq__35041_35056__$1);
var G__35059 = c__7215__auto___35057;
var G__35060 = cljs.core.count.call(null,c__7215__auto___35057);
var G__35061 = (0);
seq__35041_35045 = G__35058;
chunk__35042_35046 = G__35059;
count__35043_35047 = G__35060;
i__35044_35048 = G__35061;
continue;
} else {
var v_35062 = cljs.core.first.call(null,seq__35041_35056__$1);
var m35040_35063 = cljs.core.deref.call(null,m_atom__10298__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10298__auto__,cljs.core.assoc_BANG_.call(null,m35040_35063,f.call(null,v_35062),v_35062));

var G__35064 = cljs.core.next.call(null,seq__35041_35056__$1);
var G__35065 = null;
var G__35066 = (0);
var G__35067 = (0);
seq__35041_35045 = G__35064;
chunk__35042_35046 = G__35065;
count__35043_35047 = G__35066;
i__35044_35048 = G__35067;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10298__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__35068){
var vec__35072 = p__35068;
var seq__35073 = cljs.core.seq.call(null,vec__35072);
var first__35074 = cljs.core.first.call(null,seq__35073);
var seq__35073__$1 = cljs.core.next.call(null,seq__35073);
var k = first__35074;
var ks = seq__35073__$1;
if(cljs.core.truth_(m)){
var temp__4655__auto__ = (function (){var and__6392__auto__ = ks;
if(and__6392__auto__){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__6392__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var res = temp__4655__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__10298__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__35087_35097 = cljs.core.seq.call(null,x);
var chunk__35088_35098 = null;
var count__35089_35099 = (0);
var i__35090_35100 = (0);
while(true){
if((i__35090_35100 < count__35089_35099)){
var vec__35091_35101 = cljs.core._nth.call(null,chunk__35088_35098,i__35090_35100);
var k_35102 = cljs.core.nth.call(null,vec__35091_35101,(0),null);
var v_35103 = cljs.core.nth.call(null,vec__35091_35101,(1),null);
var m35086_35104 = cljs.core.deref.call(null,m_atom__10298__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10298__auto__,cljs.core.assoc_BANG_.call(null,m35086_35104,((typeof k_35102 === 'string')?cljs.core.keyword.call(null,k_35102):k_35102),plumbing$core$keywordize_map.call(null,v_35103)));

var G__35105 = seq__35087_35097;
var G__35106 = chunk__35088_35098;
var G__35107 = count__35089_35099;
var G__35108 = (i__35090_35100 + (1));
seq__35087_35097 = G__35105;
chunk__35088_35098 = G__35106;
count__35089_35099 = G__35107;
i__35090_35100 = G__35108;
continue;
} else {
var temp__4657__auto___35109 = cljs.core.seq.call(null,seq__35087_35097);
if(temp__4657__auto___35109){
var seq__35087_35110__$1 = temp__4657__auto___35109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35087_35110__$1)){
var c__7215__auto___35111 = cljs.core.chunk_first.call(null,seq__35087_35110__$1);
var G__35112 = cljs.core.chunk_rest.call(null,seq__35087_35110__$1);
var G__35113 = c__7215__auto___35111;
var G__35114 = cljs.core.count.call(null,c__7215__auto___35111);
var G__35115 = (0);
seq__35087_35097 = G__35112;
chunk__35088_35098 = G__35113;
count__35089_35099 = G__35114;
i__35090_35100 = G__35115;
continue;
} else {
var vec__35094_35116 = cljs.core.first.call(null,seq__35087_35110__$1);
var k_35117 = cljs.core.nth.call(null,vec__35094_35116,(0),null);
var v_35118 = cljs.core.nth.call(null,vec__35094_35116,(1),null);
var m35086_35119 = cljs.core.deref.call(null,m_atom__10298__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10298__auto__,cljs.core.assoc_BANG_.call(null,m35086_35119,((typeof k_35117 === 'string')?cljs.core.keyword.call(null,k_35117):k_35117),plumbing$core$keywordize_map.call(null,v_35118)));

var G__35120 = cljs.core.next.call(null,seq__35087_35110__$1);
var G__35121 = null;
var G__35122 = (0);
var G__35123 = (0);
seq__35087_35097 = G__35120;
chunk__35088_35098 = G__35121;
count__35089_35099 = G__35122;
i__35090_35100 = G__35123;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10298__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4655__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var pair__10379__auto__ = temp__4655__auto__;
return cljs.core.val.call(null,pair__10379__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__35124 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__35125 = cljs.core.next.call(null,ks);
m = G__35124;
ks = G__35125;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35144 = arguments.length;
var i__7480__auto___35145 = (0);
while(true){
if((i__7480__auto___35145 < len__7479__auto___35144)){
args__7486__auto__.push((arguments[i__7480__auto___35145]));

var G__35146 = (i__7480__auto___35145 + (1));
i__7480__auto___35145 = G__35146;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__6404__auto__ = m;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__7184__auto__ = (function plumbing$core$iter__35128(s__35129){
return (new cljs.core.LazySeq(null,(function (){
var s__35129__$1 = s__35129;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35129__$1);
if(temp__4657__auto__){
var s__35129__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35129__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__35129__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__35131 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__35130 = (0);
while(true){
if((i__35130 < size__7183__auto__)){
var vec__35138 = cljs.core._nth.call(null,c__7182__auto__,i__35130);
var k = cljs.core.nth.call(null,vec__35138,(0),null);
var v = cljs.core.nth.call(null,vec__35138,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__35131,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35147 = (i__35130 + (1));
i__35130 = G__35147;
continue;
} else {
var G__35148 = (i__35130 + (1));
i__35130 = G__35148;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35131),plumbing$core$iter__35128.call(null,cljs.core.chunk_rest.call(null,s__35129__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35131),null);
}
} else {
var vec__35141 = cljs.core.first.call(null,s__35129__$2);
var k = cljs.core.nth.call(null,vec__35141,(0),null);
var v = cljs.core.nth.call(null,vec__35141,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__35128.call(null,cljs.core.rest.call(null,s__35129__$2)));
} else {
var G__35149 = cljs.core.rest.call(null,s__35129__$2);
s__35129__$1 = G__35149;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq35126){
var G__35127 = cljs.core.first.call(null,seq35126);
var seq35126__$1 = cljs.core.next.call(null,seq35126);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__35127,seq35126__$1);
});

/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35154 = arguments.length;
var i__7480__auto___35155 = (0);
while(true){
if((i__7480__auto___35155 < len__7479__auto___35154)){
args__7486__auto__.push((arguments[i__7480__auto___35155]));

var G__35156 = (i__7480__auto___35155 + (1));
i__7480__auto___35155 = G__35156;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((3) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((3)),(0),null)):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7487__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq35150){
var G__35151 = cljs.core.first.call(null,seq35150);
var seq35150__$1 = cljs.core.next.call(null,seq35150);
var G__35152 = cljs.core.first.call(null,seq35150__$1);
var seq35150__$2 = cljs.core.next.call(null,seq35150__$1);
var G__35153 = cljs.core.first.call(null,seq35150__$2);
var seq35150__$3 = cljs.core.next.call(null,seq35150__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__35151,G__35152,G__35153,seq35150__$3);
});

/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter) 
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4657__auto__ = cljs.core.next.call(null,s);
if(temp__4657__auto__){
var n = temp__4657__auto__;
return plumbing$core$aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 *   Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(var_args){
var args35157 = [];
var len__7479__auto___35160 = arguments.length;
var i__7480__auto___35161 = (0);
while(true){
if((i__7480__auto___35161 < len__7479__auto___35160)){
args35157.push((arguments[i__7480__auto___35161]));

var G__35162 = (i__7480__auto___35161 + (1));
i__7480__auto___35161 = G__35162;
continue;
} else {
}
break;
}

var G__35159 = args35157.length;
switch (G__35159) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35157.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;

/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4657__auto__ = cljs.core.seq.call(null,xs);
if(temp__4657__auto__){
var xs__$1 = temp__4657__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__7184__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__35168(s__35169){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__35169__$1 = s__35169;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35169__$1);
if(temp__4657__auto__){
var s__35169__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35169__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__35169__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__35171 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__35170 = (0);
while(true){
if((i__35170 < size__7183__auto__)){
var x = cljs.core._nth.call(null,c__7182__auto__,i__35170);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__35171,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__35172 = (i__35170 + (1));
i__35170 = G__35172;
continue;
} else {
var G__35173 = (i__35170 + (1));
i__35170 = G__35173;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35171),plumbing$core$distinct_by_$_iter__35168.call(null,cljs.core.chunk_rest.call(null,s__35169__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35171),null);
}
} else {
var x = cljs.core.first.call(null,s__35169__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__35168.call(null,cljs.core.rest.call(null,s__35169__$2)));
} else {
var G__35174 = cljs.core.rest.call(null,s__35169__$2);
s__35169__$1 = G__35174;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__7184__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__7486__auto__ = [];
var len__7479__auto___35176 = arguments.length;
var i__7480__auto___35177 = (0);
while(true){
if((i__7480__auto___35177 < len__7479__auto___35176)){
args__7486__auto__.push((arguments[i__7480__auto___35177]));

var G__35178 = (i__7480__auto___35177 + (1));
i__7480__auto___35177 = G__35178;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq35175){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35175));
});

/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(var_args){
var args35179 = [];
var len__7479__auto___35185 = arguments.length;
var i__7480__auto___35186 = (0);
while(true){
if((i__7480__auto___35186 < len__7479__auto___35185)){
args35179.push((arguments[i__7480__auto___35186]));

var G__35187 = (i__7480__auto___35186 + (1));
i__7480__auto___35186 = G__35187;
continue;
} else {
}
break;
}

var G__35184 = args35179.length;
switch (G__35184) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args35179.slice((2)),(0),null));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7498__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__35189 = plumbing.core.conj_when.call(null,coll,x);
var G__35190 = cljs.core.first.call(null,xs);
var G__35191 = cljs.core.next.call(null,xs);
coll = G__35189;
x = G__35190;
xs = G__35191;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq35180){
var G__35181 = cljs.core.first.call(null,seq35180);
var seq35180__$1 = cljs.core.next.call(null,seq35180);
var G__35182 = cljs.core.first.call(null,seq35180__$1);
var seq35180__$2 = cljs.core.next.call(null,seq35180__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__35181,G__35182,seq35180__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(var_args){
var args35193 = [];
var len__7479__auto___35199 = arguments.length;
var i__7480__auto___35200 = (0);
while(true){
if((i__7480__auto___35200 < len__7479__auto___35199)){
args35193.push((arguments[i__7480__auto___35200]));

var G__35201 = (i__7480__auto___35200 + (1));
i__7480__auto___35200 = G__35201;
continue;
} else {
}
break;
}

var G__35198 = args35193.length;
switch (G__35198) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args35193.slice((2)),(0),null));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7498__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__35192_SHARP_){
return cljs.core.apply.call(null,f,p1__35192_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq35194){
var G__35195 = cljs.core.first.call(null,seq35194);
var seq35194__$1 = cljs.core.next.call(null,seq35194);
var G__35196 = cljs.core.first.call(null,seq35194__$1);
var seq35194__$2 = cljs.core.next.call(null,seq35194__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35195,G__35196,seq35194__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 *   arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(var_args){
var args35203 = [];
var len__7479__auto___35209 = arguments.length;
var i__7480__auto___35210 = (0);
while(true){
if((i__7480__auto___35210 < len__7479__auto___35209)){
args35203.push((arguments[i__7480__auto___35210]));

var G__35211 = (i__7480__auto___35210 + (1));
i__7480__auto___35210 = G__35211;
continue;
} else {
}
break;
}

var G__35208 = args35203.length;
switch (G__35208) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args35203.slice((2)),(0),null));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7498__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq35204){
var G__35205 = cljs.core.first.call(null,seq35204);
var seq35204__$1 = cljs.core.next.call(null,seq35204);
var G__35206 = cljs.core.first.call(null,seq35204__$1);
var seq35204__$2 = cljs.core.next.call(null,seq35204__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__35205,G__35206,seq35204__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);


//# sourceMappingURL=core.js.map