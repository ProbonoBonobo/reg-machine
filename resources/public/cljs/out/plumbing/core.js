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
var args32580 = [];
var len__25826__auto___32589 = arguments.length;
var i__25827__auto___32590 = (0);
while(true){
if((i__25827__auto___32590 < len__25826__auto___32589)){
args32580.push((arguments[i__25827__auto___32590]));

var G__32591 = (i__25827__auto___32590 + (1));
i__25827__auto___32590 = G__32591;
continue;
} else {
}
break;
}

var G__32588 = args32580.length;
switch (G__32588) {
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
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args32580.slice((5)),(0),null));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__25845__auto__);

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

plumbing.core.update.cljs$lang$applyTo = (function (seq32581){
var G__32582 = cljs.core.first.call(null,seq32581);
var seq32581__$1 = cljs.core.next.call(null,seq32581);
var G__32583 = cljs.core.first.call(null,seq32581__$1);
var seq32581__$2 = cljs.core.next.call(null,seq32581__$1);
var G__32584 = cljs.core.first.call(null,seq32581__$2);
var seq32581__$3 = cljs.core.next.call(null,seq32581__$2);
var G__32585 = cljs.core.first.call(null,seq32581__$3);
var seq32581__$4 = cljs.core.next.call(null,seq32581__$3);
var G__32586 = cljs.core.first.call(null,seq32581__$4);
var seq32581__$5 = cljs.core.next.call(null,seq32581__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__32582,G__32583,G__32584,G__32585,G__32586,seq32581__$5);
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
var m_atom__32321__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__32605_32615 = cljs.core.seq.call(null,m);
var chunk__32606_32616 = null;
var count__32607_32617 = (0);
var i__32608_32618 = (0);
while(true){
if((i__32608_32618 < count__32607_32617)){
var vec__32609_32619 = cljs.core._nth.call(null,chunk__32606_32616,i__32608_32618);
var k_32620 = cljs.core.nth.call(null,vec__32609_32619,(0),null);
var v_32621 = cljs.core.nth.call(null,vec__32609_32619,(1),null);
var m32604_32622 = cljs.core.deref.call(null,m_atom__32321__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32321__auto__,cljs.core.assoc_BANG_.call(null,m32604_32622,k_32620,f.call(null,v_32621)));

var G__32623 = seq__32605_32615;
var G__32624 = chunk__32606_32616;
var G__32625 = count__32607_32617;
var G__32626 = (i__32608_32618 + (1));
seq__32605_32615 = G__32623;
chunk__32606_32616 = G__32624;
count__32607_32617 = G__32625;
i__32608_32618 = G__32626;
continue;
} else {
var temp__4657__auto___32627 = cljs.core.seq.call(null,seq__32605_32615);
if(temp__4657__auto___32627){
var seq__32605_32628__$1 = temp__4657__auto___32627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32605_32628__$1)){
var c__25562__auto___32629 = cljs.core.chunk_first.call(null,seq__32605_32628__$1);
var G__32630 = cljs.core.chunk_rest.call(null,seq__32605_32628__$1);
var G__32631 = c__25562__auto___32629;
var G__32632 = cljs.core.count.call(null,c__25562__auto___32629);
var G__32633 = (0);
seq__32605_32615 = G__32630;
chunk__32606_32616 = G__32631;
count__32607_32617 = G__32632;
i__32608_32618 = G__32633;
continue;
} else {
var vec__32612_32634 = cljs.core.first.call(null,seq__32605_32628__$1);
var k_32635 = cljs.core.nth.call(null,vec__32612_32634,(0),null);
var v_32636 = cljs.core.nth.call(null,vec__32612_32634,(1),null);
var m32604_32637 = cljs.core.deref.call(null,m_atom__32321__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32321__auto__,cljs.core.assoc_BANG_.call(null,m32604_32637,k_32635,f.call(null,v_32636)));

var G__32638 = cljs.core.next.call(null,seq__32605_32628__$1);
var G__32639 = null;
var G__32640 = (0);
var G__32641 = (0);
seq__32605_32615 = G__32638;
chunk__32606_32616 = G__32639;
count__32607_32617 = G__32640;
i__32608_32618 = G__32641;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__32321__auto__));

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
var m_atom__32321__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__32654_32664 = cljs.core.seq.call(null,m);
var chunk__32655_32665 = null;
var count__32656_32666 = (0);
var i__32657_32667 = (0);
while(true){
if((i__32657_32667 < count__32656_32666)){
var vec__32658_32668 = cljs.core._nth.call(null,chunk__32655_32665,i__32657_32667);
var k_32669 = cljs.core.nth.call(null,vec__32658_32668,(0),null);
var v_32670 = cljs.core.nth.call(null,vec__32658_32668,(1),null);
var m32653_32671 = cljs.core.deref.call(null,m_atom__32321__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32321__auto__,cljs.core.assoc_BANG_.call(null,m32653_32671,f.call(null,k_32669),v_32670));

var G__32672 = seq__32654_32664;
var G__32673 = chunk__32655_32665;
var G__32674 = count__32656_32666;
var G__32675 = (i__32657_32667 + (1));
seq__32654_32664 = G__32672;
chunk__32655_32665 = G__32673;
count__32656_32666 = G__32674;
i__32657_32667 = G__32675;
continue;
} else {
var temp__4657__auto___32676 = cljs.core.seq.call(null,seq__32654_32664);
if(temp__4657__auto___32676){
var seq__32654_32677__$1 = temp__4657__auto___32676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32654_32677__$1)){
var c__25562__auto___32678 = cljs.core.chunk_first.call(null,seq__32654_32677__$1);
var G__32679 = cljs.core.chunk_rest.call(null,seq__32654_32677__$1);
var G__32680 = c__25562__auto___32678;
var G__32681 = cljs.core.count.call(null,c__25562__auto___32678);
var G__32682 = (0);
seq__32654_32664 = G__32679;
chunk__32655_32665 = G__32680;
count__32656_32666 = G__32681;
i__32657_32667 = G__32682;
continue;
} else {
var vec__32661_32683 = cljs.core.first.call(null,seq__32654_32677__$1);
var k_32684 = cljs.core.nth.call(null,vec__32661_32683,(0),null);
var v_32685 = cljs.core.nth.call(null,vec__32661_32683,(1),null);
var m32653_32686 = cljs.core.deref.call(null,m_atom__32321__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32321__auto__,cljs.core.assoc_BANG_.call(null,m32653_32686,f.call(null,k_32684),v_32685));

var G__32687 = cljs.core.next.call(null,seq__32654_32677__$1);
var G__32688 = null;
var G__32689 = (0);
var G__32690 = (0);
seq__32654_32664 = G__32687;
chunk__32655_32665 = G__32688;
count__32656_32666 = G__32689;
i__32657_32667 = G__32690;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__32321__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__32321__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__32697_32701 = cljs.core.seq.call(null,ks);
var chunk__32698_32702 = null;
var count__32699_32703 = (0);
var i__32700_32704 = (0);
while(true){
if((i__32700_32704 < count__32699_32703)){
var k_32705 = cljs.core._nth.call(null,chunk__32698_32702,i__32700_32704);
var m32696_32706 = cljs.core.deref.call(null,m_atom__32321__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32321__auto__,cljs.core.assoc_BANG_.call(null,m32696_32706,k_32705,f.call(null,k_32705)));

var G__32707 = seq__32697_32701;
var G__32708 = chunk__32698_32702;
var G__32709 = count__32699_32703;
var G__32710 = (i__32700_32704 + (1));
seq__32697_32701 = G__32707;
chunk__32698_32702 = G__32708;
count__32699_32703 = G__32709;
i__32700_32704 = G__32710;
continue;
} else {
var temp__4657__auto___32711 = cljs.core.seq.call(null,seq__32697_32701);
if(temp__4657__auto___32711){
var seq__32697_32712__$1 = temp__4657__auto___32711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32697_32712__$1)){
var c__25562__auto___32713 = cljs.core.chunk_first.call(null,seq__32697_32712__$1);
var G__32714 = cljs.core.chunk_rest.call(null,seq__32697_32712__$1);
var G__32715 = c__25562__auto___32713;
var G__32716 = cljs.core.count.call(null,c__25562__auto___32713);
var G__32717 = (0);
seq__32697_32701 = G__32714;
chunk__32698_32702 = G__32715;
count__32699_32703 = G__32716;
i__32700_32704 = G__32717;
continue;
} else {
var k_32718 = cljs.core.first.call(null,seq__32697_32712__$1);
var m32696_32719 = cljs.core.deref.call(null,m_atom__32321__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32321__auto__,cljs.core.assoc_BANG_.call(null,m32696_32719,k_32718,f.call(null,k_32718)));

var G__32720 = cljs.core.next.call(null,seq__32697_32712__$1);
var G__32721 = null;
var G__32722 = (0);
var G__32723 = (0);
seq__32697_32701 = G__32720;
chunk__32698_32702 = G__32721;
count__32699_32703 = G__32722;
i__32700_32704 = G__32723;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__32321__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__32321__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__32730_32734 = cljs.core.seq.call(null,vs);
var chunk__32731_32735 = null;
var count__32732_32736 = (0);
var i__32733_32737 = (0);
while(true){
if((i__32733_32737 < count__32732_32736)){
var v_32738 = cljs.core._nth.call(null,chunk__32731_32735,i__32733_32737);
var m32729_32739 = cljs.core.deref.call(null,m_atom__32321__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32321__auto__,cljs.core.assoc_BANG_.call(null,m32729_32739,f.call(null,v_32738),v_32738));

var G__32740 = seq__32730_32734;
var G__32741 = chunk__32731_32735;
var G__32742 = count__32732_32736;
var G__32743 = (i__32733_32737 + (1));
seq__32730_32734 = G__32740;
chunk__32731_32735 = G__32741;
count__32732_32736 = G__32742;
i__32733_32737 = G__32743;
continue;
} else {
var temp__4657__auto___32744 = cljs.core.seq.call(null,seq__32730_32734);
if(temp__4657__auto___32744){
var seq__32730_32745__$1 = temp__4657__auto___32744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32730_32745__$1)){
var c__25562__auto___32746 = cljs.core.chunk_first.call(null,seq__32730_32745__$1);
var G__32747 = cljs.core.chunk_rest.call(null,seq__32730_32745__$1);
var G__32748 = c__25562__auto___32746;
var G__32749 = cljs.core.count.call(null,c__25562__auto___32746);
var G__32750 = (0);
seq__32730_32734 = G__32747;
chunk__32731_32735 = G__32748;
count__32732_32736 = G__32749;
i__32733_32737 = G__32750;
continue;
} else {
var v_32751 = cljs.core.first.call(null,seq__32730_32745__$1);
var m32729_32752 = cljs.core.deref.call(null,m_atom__32321__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32321__auto__,cljs.core.assoc_BANG_.call(null,m32729_32752,f.call(null,v_32751),v_32751));

var G__32753 = cljs.core.next.call(null,seq__32730_32745__$1);
var G__32754 = null;
var G__32755 = (0);
var G__32756 = (0);
seq__32730_32734 = G__32753;
chunk__32731_32735 = G__32754;
count__32732_32736 = G__32755;
i__32733_32737 = G__32756;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__32321__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__32757){
var vec__32761 = p__32757;
var seq__32762 = cljs.core.seq.call(null,vec__32761);
var first__32763 = cljs.core.first.call(null,seq__32762);
var seq__32762__$1 = cljs.core.next.call(null,seq__32762);
var k = first__32763;
var ks = seq__32762__$1;
if(cljs.core.truth_(m)){
var temp__4655__auto__ = (function (){var and__24739__auto__ = ks;
if(and__24739__auto__){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__24739__auto__;
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
var m_atom__32321__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__32776_32786 = cljs.core.seq.call(null,x);
var chunk__32777_32787 = null;
var count__32778_32788 = (0);
var i__32779_32789 = (0);
while(true){
if((i__32779_32789 < count__32778_32788)){
var vec__32780_32790 = cljs.core._nth.call(null,chunk__32777_32787,i__32779_32789);
var k_32791 = cljs.core.nth.call(null,vec__32780_32790,(0),null);
var v_32792 = cljs.core.nth.call(null,vec__32780_32790,(1),null);
var m32775_32793 = cljs.core.deref.call(null,m_atom__32321__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32321__auto__,cljs.core.assoc_BANG_.call(null,m32775_32793,((typeof k_32791 === 'string')?cljs.core.keyword.call(null,k_32791):k_32791),plumbing$core$keywordize_map.call(null,v_32792)));

var G__32794 = seq__32776_32786;
var G__32795 = chunk__32777_32787;
var G__32796 = count__32778_32788;
var G__32797 = (i__32779_32789 + (1));
seq__32776_32786 = G__32794;
chunk__32777_32787 = G__32795;
count__32778_32788 = G__32796;
i__32779_32789 = G__32797;
continue;
} else {
var temp__4657__auto___32798 = cljs.core.seq.call(null,seq__32776_32786);
if(temp__4657__auto___32798){
var seq__32776_32799__$1 = temp__4657__auto___32798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32776_32799__$1)){
var c__25562__auto___32800 = cljs.core.chunk_first.call(null,seq__32776_32799__$1);
var G__32801 = cljs.core.chunk_rest.call(null,seq__32776_32799__$1);
var G__32802 = c__25562__auto___32800;
var G__32803 = cljs.core.count.call(null,c__25562__auto___32800);
var G__32804 = (0);
seq__32776_32786 = G__32801;
chunk__32777_32787 = G__32802;
count__32778_32788 = G__32803;
i__32779_32789 = G__32804;
continue;
} else {
var vec__32783_32805 = cljs.core.first.call(null,seq__32776_32799__$1);
var k_32806 = cljs.core.nth.call(null,vec__32783_32805,(0),null);
var v_32807 = cljs.core.nth.call(null,vec__32783_32805,(1),null);
var m32775_32808 = cljs.core.deref.call(null,m_atom__32321__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32321__auto__,cljs.core.assoc_BANG_.call(null,m32775_32808,((typeof k_32806 === 'string')?cljs.core.keyword.call(null,k_32806):k_32806),plumbing$core$keywordize_map.call(null,v_32807)));

var G__32809 = cljs.core.next.call(null,seq__32776_32799__$1);
var G__32810 = null;
var G__32811 = (0);
var G__32812 = (0);
seq__32776_32786 = G__32809;
chunk__32777_32787 = G__32810;
count__32778_32788 = G__32811;
i__32779_32789 = G__32812;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__32321__auto__));
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
var pair__32402__auto__ = temp__4655__auto__;
return cljs.core.val.call(null,pair__32402__auto__);
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
var G__32813 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__32814 = cljs.core.next.call(null,ks);
m = G__32813;
ks = G__32814;
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
var args__25833__auto__ = [];
var len__25826__auto___32833 = arguments.length;
var i__25827__auto___32834 = (0);
while(true){
if((i__25827__auto___32834 < len__25826__auto___32833)){
args__25833__auto__.push((arguments[i__25827__auto___32834]));

var G__32835 = (i__25827__auto___32834 + (1));
i__25827__auto___32834 = G__32835;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((1) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((1)),(0),null)):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25834__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__24751__auto__ = m;
if(cljs.core.truth_(or__24751__auto__)){
return or__24751__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__25531__auto__ = (function plumbing$core$iter__32817(s__32818){
return (new cljs.core.LazySeq(null,(function (){
var s__32818__$1 = s__32818;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32818__$1);
if(temp__4657__auto__){
var s__32818__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32818__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__32818__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__32820 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__32819 = (0);
while(true){
if((i__32819 < size__25530__auto__)){
var vec__32827 = cljs.core._nth.call(null,c__25529__auto__,i__32819);
var k = cljs.core.nth.call(null,vec__32827,(0),null);
var v = cljs.core.nth.call(null,vec__32827,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__32820,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__32836 = (i__32819 + (1));
i__32819 = G__32836;
continue;
} else {
var G__32837 = (i__32819 + (1));
i__32819 = G__32837;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32820),plumbing$core$iter__32817.call(null,cljs.core.chunk_rest.call(null,s__32818__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32820),null);
}
} else {
var vec__32830 = cljs.core.first.call(null,s__32818__$2);
var k = cljs.core.nth.call(null,vec__32830,(0),null);
var v = cljs.core.nth.call(null,vec__32830,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__32817.call(null,cljs.core.rest.call(null,s__32818__$2)));
} else {
var G__32838 = cljs.core.rest.call(null,s__32818__$2);
s__32818__$1 = G__32838;
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
return iter__25531__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq32815){
var G__32816 = cljs.core.first.call(null,seq32815);
var seq32815__$1 = cljs.core.next.call(null,seq32815);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__32816,seq32815__$1);
});

/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__25833__auto__ = [];
var len__25826__auto___32843 = arguments.length;
var i__25827__auto___32844 = (0);
while(true){
if((i__25827__auto___32844 < len__25826__auto___32843)){
args__25833__auto__.push((arguments[i__25827__auto___32844]));

var G__32845 = (i__25827__auto___32844 + (1));
i__25827__auto___32844 = G__32845;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((3) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((3)),(0),null)):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25834__auto__);
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

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq32839){
var G__32840 = cljs.core.first.call(null,seq32839);
var seq32839__$1 = cljs.core.next.call(null,seq32839);
var G__32841 = cljs.core.first.call(null,seq32839__$1);
var seq32839__$2 = cljs.core.next.call(null,seq32839__$1);
var G__32842 = cljs.core.first.call(null,seq32839__$2);
var seq32839__$3 = cljs.core.next.call(null,seq32839__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__32840,G__32841,G__32842,seq32839__$3);
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
var args32846 = [];
var len__25826__auto___32849 = arguments.length;
var i__25827__auto___32850 = (0);
while(true){
if((i__25827__auto___32850 < len__25826__auto___32849)){
args32846.push((arguments[i__25827__auto___32850]));

var G__32851 = (i__25827__auto___32850 + (1));
i__25827__auto___32850 = G__32851;
continue;
} else {
}
break;
}

var G__32848 = args32846.length;
switch (G__32848) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32846.length)].join('')));

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
var iter__25531__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__32857(s__32858){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__32858__$1 = s__32858;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32858__$1);
if(temp__4657__auto__){
var s__32858__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32858__$2)){
var c__25529__auto__ = cljs.core.chunk_first.call(null,s__32858__$2);
var size__25530__auto__ = cljs.core.count.call(null,c__25529__auto__);
var b__32860 = cljs.core.chunk_buffer.call(null,size__25530__auto__);
if((function (){var i__32859 = (0);
while(true){
if((i__32859 < size__25530__auto__)){
var x = cljs.core._nth.call(null,c__25529__auto__,i__32859);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__32860,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__32861 = (i__32859 + (1));
i__32859 = G__32861;
continue;
} else {
var G__32862 = (i__32859 + (1));
i__32859 = G__32862;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32860),plumbing$core$distinct_by_$_iter__32857.call(null,cljs.core.chunk_rest.call(null,s__32858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32860),null);
}
} else {
var x = cljs.core.first.call(null,s__32858__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__32857.call(null,cljs.core.rest.call(null,s__32858__$2)));
} else {
var G__32863 = cljs.core.rest.call(null,s__32858__$2);
s__32858__$1 = G__32863;
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
return iter__25531__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__25833__auto__ = [];
var len__25826__auto___32865 = arguments.length;
var i__25827__auto___32866 = (0);
while(true){
if((i__25827__auto___32866 < len__25826__auto___32865)){
args__25833__auto__.push((arguments[i__25827__auto___32866]));

var G__32867 = (i__25827__auto___32866 + (1));
i__25827__auto___32866 = G__32867;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
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

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq32864){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32864));
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
var args32868 = [];
var len__25826__auto___32874 = arguments.length;
var i__25827__auto___32875 = (0);
while(true){
if((i__25827__auto___32875 < len__25826__auto___32874)){
args32868.push((arguments[i__25827__auto___32875]));

var G__32876 = (i__25827__auto___32875 + (1));
i__25827__auto___32875 = G__32876;
continue;
} else {
}
break;
}

var G__32873 = args32868.length;
switch (G__32873) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args32868.slice((2)),(0),null));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25845__auto__);

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
var G__32878 = plumbing.core.conj_when.call(null,coll,x);
var G__32879 = cljs.core.first.call(null,xs);
var G__32880 = cljs.core.next.call(null,xs);
coll = G__32878;
x = G__32879;
xs = G__32880;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq32869){
var G__32870 = cljs.core.first.call(null,seq32869);
var seq32869__$1 = cljs.core.next.call(null,seq32869);
var G__32871 = cljs.core.first.call(null,seq32869__$1);
var seq32869__$2 = cljs.core.next.call(null,seq32869__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__32870,G__32871,seq32869__$2);
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
var args32882 = [];
var len__25826__auto___32888 = arguments.length;
var i__25827__auto___32889 = (0);
while(true){
if((i__25827__auto___32889 < len__25826__auto___32888)){
args32882.push((arguments[i__25827__auto___32889]));

var G__32890 = (i__25827__auto___32889 + (1));
i__25827__auto___32889 = G__32890;
continue;
} else {
}
break;
}

var G__32887 = args32882.length;
switch (G__32887) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args32882.slice((2)),(0),null));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25845__auto__);

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
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__32881_SHARP_){
return cljs.core.apply.call(null,f,p1__32881_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq32883){
var G__32884 = cljs.core.first.call(null,seq32883);
var seq32883__$1 = cljs.core.next.call(null,seq32883);
var G__32885 = cljs.core.first.call(null,seq32883__$1);
var seq32883__$2 = cljs.core.next.call(null,seq32883__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32884,G__32885,seq32883__$2);
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
var args32892 = [];
var len__25826__auto___32898 = arguments.length;
var i__25827__auto___32899 = (0);
while(true){
if((i__25827__auto___32899 < len__25826__auto___32898)){
args32892.push((arguments[i__25827__auto___32899]));

var G__32900 = (i__25827__auto___32899 + (1));
i__25827__auto___32899 = G__32900;
continue;
} else {
}
break;
}

var G__32897 = args32892.length;
switch (G__32897) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25845__auto__ = (new cljs.core.IndexedSeq(args32892.slice((2)),(0),null));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25845__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq32893){
var G__32894 = cljs.core.first.call(null,seq32893);
var seq32893__$1 = cljs.core.next.call(null,seq32893);
var G__32895 = cljs.core.first.call(null,seq32893__$1);
var seq32893__$2 = cljs.core.next.call(null,seq32893__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__32894,G__32895,seq32893__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);


//# sourceMappingURL=core.js.map?rel=1478445826583