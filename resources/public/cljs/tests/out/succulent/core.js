// Compiled by ClojureScript 1.9.293 {}
goog.provide('succulent.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('quil.core');
goog.require('quil.middleware');
succulent.core.flatvecs = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(9),(3),(1),(-9)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99999)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(524287),(4)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","5","b","*","+","8","3","="], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9","9","3","*","4","0","0","="], null)], null);
succulent.core.nestvecs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0),(9),(9),(-9),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(8),(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null),(8)], null),(9)], null),(9)], null),(999)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4)], null)], null)], null)], null)], null)], null)], null)], null);
succulent.core.exp = (function succulent$core$exp(x,n){
var acc = (1);
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return acc;
} else {
var G__47971 = (x * acc);
var G__47972 = (n__$1 - (1));
acc = G__47971;
n__$1 = G__47972;
continue;
}
break;
}
});
succulent.core.bool_QMARK_ = (function succulent$core$bool_QMARK_(x){
return (x === true) || (x === false);
});
succulent.core.int__GT_bool = (function succulent$core$int__GT_bool(i){
if(!(typeof i === 'number')){
return false;
} else {
if((i < (1))){
return false;
} else {
if((i > (0))){
return true;
} else {
return false;

}
}
}
});
succulent.core.bool__GT_int = (function succulent$core$bool__GT_int(b){
if(cljs.core.not.call(null,succulent.core.bool_QMARK_.call(null,b))){
return (-1);
} else {
if(b === true){
return (1);
} else {
if(b === false){
return (0);
} else {
return (-1);

}
}
}
});
succulent.core.ascii_QMARK_ = (function succulent$core$ascii_QMARK_(val){
return (((31) < val)) && ((val < (127)));
});
succulent.core.ascii = (function succulent$core$ascii(val){
var modval = cljs.core.mod.call(null,val,(256));
if(cljs.core.truth_(succulent.core.ascii_QMARK_.call(null,modval))){
return [cljs.core.str(cljs.core.char$.call(null,modval))].join('');
} else {
return [cljs.core.str(cljs.core.char$.call(null,(254)))].join('');
}
});
succulent.core.lookup_symbol = (function succulent$core$lookup_symbol(sym){
if(cljs.core._EQ_.call(null,sym,(43))){
return "plus";
} else {
if(cljs.core._EQ_.call(null,sym,(45))){
return "minus";
} else {
if(cljs.core._EQ_.call(null,sym,(47))){
return "divide";
} else {
if(cljs.core._EQ_.call(null,sym,(42))){
return "multiply";
} else {
if(cljs.core._EQ_.call(null,sym,(94))){
return "exponent";
} else {
if(cljs.core._EQ_.call(null,sym,"plus")){
return (function (p1__47973_SHARP_,p2__47974_SHARP_){
return (p1__47973_SHARP_ + p2__47974_SHARP_);
});
} else {
if(cljs.core._EQ_.call(null,sym,"divide")){
return (function (p1__47975_SHARP_,p2__47976_SHARP_){
return (p1__47975_SHARP_ / p2__47976_SHARP_);
});
} else {
if(cljs.core._EQ_.call(null,sym,"minus")){
return (function (p1__47977_SHARP_,p2__47978_SHARP_){
return (p1__47977_SHARP_ - p2__47978_SHARP_);
});
} else {
if(cljs.core._EQ_.call(null,sym,"multiply")){
return (function (p1__47979_SHARP_,p2__47980_SHARP_){
return (p1__47979_SHARP_ * p2__47980_SHARP_);
});
} else {
if(cljs.core._EQ_.call(null,sym,"exponent")){
return (function (p1__47981_SHARP_,p2__47982_SHARP_){
return succulent.core.exp.call(null,p1__47981_SHARP_,p2__47982_SHARP_);
});
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
succulent.core.K = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"numbers","numbers",1036309864),cljs.core.sorted_set.call(null,(48),(49),(50),(51),(52),(53),(54),(55),(56),(57)),new cljs.core.Keyword(null,"operators","operators",-2064102509),cljs.core.sorted_set.call(null,(43),(47),(42),(94),(45)),new cljs.core.Keyword(null,"minus-sign","minus-sign",-1575532731),cljs.core.sorted_set.call(null,(45)),new cljs.core.Keyword(null,"equals-sign","equals-sign",147089326),cljs.core.sorted_set.call(null,(61)),new cljs.core.Keyword(null,"ascii-range","ascii-range",1140172296),cljs.core.into.call(null,cljs.core.sorted_set.call(null),cljs.core.range.call(null,(0),(255))),new cljs.core.Keyword(null,"dont-cares","dont-cares",805602029),clojure.set.difference.call(null,succulent.core.K.call(null,new cljs.core.Keyword(null,"ascii-range","ascii-range",1140172296)),clojure.set.union.call(null,succulent.core.K.call(null,new cljs.core.Keyword(null,"numbers","numbers",1036309864)),succulent.core.K.call(null,new cljs.core.Keyword(null,"operators","operators",-2064102509)),succulent.core.K.call(null,new cljs.core.Keyword(null,"minus-sign","minus-sign",-1575532731)),succulent.core.K.call(null,new cljs.core.Keyword(null,"equals-sign","equals-sign",147089326)))),new cljs.core.Keyword(null,"char-range","char-range",1443391389),cljs.core.into.call(null,cljs.core.sorted_set.call(null),cljs.core.map.call(null,succulent.core.ascii,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.range.call(null,(0),(255)))))], null);
succulent.core.multiplexer = (function succulent$core$multiplexer(k){
return clojure.string.join.call(null,cljs.core.map.call(null,succulent.core.bool__GT_int,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.contains_QMARK_.call(null,succulent.core.K.call(null,new cljs.core.Keyword(null,"numbers","numbers",1036309864)),k),cljs.core.contains_QMARK_.call(null,succulent.core.K.call(null,new cljs.core.Keyword(null,"operator","operator",-1860875338)),k),cljs.core.contains_QMARK_.call(null,succulent.core.K.call(null,new cljs.core.Keyword(null,"minus-sign","minus-sign",-1575532731)),k),cljs.core.contains_QMARK_.call(null,succulent.core.K.call(null,new cljs.core.Keyword(null,"equals-sign","equals-sign",147089326)),k),cljs.core.contains_QMARK_.call(null,succulent.core.K.call(null,new cljs.core.Keyword(null,"dont-cares","dont-cares",805602029)),k)], null)));
});
succulent.core.attach_tag = (function succulent$core$attach_tag(k){
var intval = parseInt([cljs.core.str(cljs.core.char$.call(null,k))].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,intval], null);
});
succulent.core.cachedascii = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.map.call(null,cljs.core.juxt.call(null,succulent.core.ascii,succulent.core.attach_tag),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.range.call(null,(0),(255)))));
succulent.core.asciitable = (function succulent$core$asciitable(x){
if(cljs.core.contains_QMARK_.call(null,succulent.core.K.call(null,new cljs.core.Keyword(null,"char-range","char-range",1443391389)),x)){
return cljs.core.get.call(null,succulent.core.cachedascii,x);
} else {
if(cljs.core.contains_QMARK_.call(null,succulent.core.K.call(null,new cljs.core.Keyword(null,"ascii-range","ascii-range",1140172296)),x)){
return cljs.core.get.call(null,succulent.core.cachedascii,succulent.core.ascii.call(null,x));
} else {
return [cljs.core.str("Unknown arg to asciitable: "),cljs.core.str(x)].join('');

}
}
});
succulent.core.inspect_tag = (function succulent$core$inspect_tag(e){
return cljs.core.second.call(null,succulent.core.asciitable.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
succulent.core.pred_reg = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
succulent.core.make_fexpr = (function succulent$core$make_fexpr(f,fname){
return cljs.core.reset_BANG_.call(null,succulent.core.pred_reg,cljs.core.conj.call(null,cljs.core.deref.call(null,succulent.core.pred_reg),cljs.core.PersistentArrayMap.fromArray([fname,f], true, false)));
});
succulent.core.print_fexpr = (function succulent$core$print_fexpr(fname){
return cljs.core.apply.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.pred_reg),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname], null)),cljs.core.PersistentVector.EMPTY);
});
succulent.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"val","val",128701612),"",new cljs.core.Keyword(null,"locked?","locked?",995448757),(0)], null),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"val","val",128701612),"",new cljs.core.Keyword(null,"locked?","locked?",995448757),(1)], null),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"val","val",128701612),"",new cljs.core.Keyword(null,"locked?","locked?",995448757),(1)], null)], null),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"val","val",128701612),"",new cljs.core.Keyword(null,"locked?","locked?",995448757),(0)], null),new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"val","val",128701612),"",new cljs.core.Keyword(null,"locked?","locked?",995448757),(1)], null)], null)], null));
succulent.core.nuke_BANG_ = (function succulent$core$nuke_BANG_(){
return cljs.core.reset_BANG_.call(null,succulent.core.app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"val","val",128701612),"",new cljs.core.Keyword(null,"locked?","locked?",995448757),(0)], null),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"val","val",128701612),"",new cljs.core.Keyword(null,"locked?","locked?",995448757),(1)], null),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"val","val",128701612),"",new cljs.core.Keyword(null,"locked?","locked?",995448757),(1)], null)], null),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"val","val",128701612),"",new cljs.core.Keyword(null,"locked?","locked?",995448757),(0)], null),new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"val","val",128701612),"",new cljs.core.Keyword(null,"locked?","locked?",995448757),(1)], null)], null)], null));
});
succulent.core.data_QMARK_ = (function succulent$core$data_QMARK_(reg){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r2","r2",252844174),null,new cljs.core.Keyword(null,"r3","r3",-2027148174),null,new cljs.core.Keyword(null,"r1","r1",690974900),null], null), null),reg);
});
succulent.core.locked_QMARK_ = (function succulent$core$locked_QMARK_(target){
if(cljs.core.truth_(succulent.core.data_QMARK_.call(null,target))){
if(cljs.core._EQ_.call(null,target,new cljs.core.Keyword(null,"r1","r1",690974900))){
return cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"locked?","locked?",995448757)], null)));
} else {
if(cljs.core._EQ_.call(null,target,new cljs.core.Keyword(null,"r2","r2",252844174))){
return cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"locked?","locked?",995448757)], null)));
} else {
return cljs.core._EQ_.call(null,(0),cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"locked?","locked?",995448757)], null)));
}
}
} else {
if(cljs.core._EQ_.call(null,target,new cljs.core.Keyword(null,"op","op",-1882987955))){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"val","val",128701612)], null))));
} else {
return !(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.Keyword(null,"val","val",128701612)], null))));
}
}
});
succulent.core.get_state = (function succulent$core$get_state(target){
var val = cljs.core.get_in.call(null,succulent.core.app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),target,new cljs.core.Keyword(null,"val","val",128701612)], null));
if(cljs.core.empty_QMARK_.call(null,val)){
return (0);
} else {
if(cljs.core.truth_(succulent.core.locked_QMARK_.call(null,target))){
return (2);
} else {
return (1);

}
}
});
succulent.core.get_focus = (function succulent$core$get_focus(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null));
});
succulent.core.get_target = (function succulent$core$get_target(branch){
if(cljs.core._EQ_.call(null,branch,new cljs.core.Keyword(null,"data","data",-232669377))){
if(cljs.core.truth_(succulent.core.locked_QMARK_.call(null,new cljs.core.Keyword(null,"r1","r1",690974900)))){
if(cljs.core.truth_(succulent.core.locked_QMARK_.call(null,new cljs.core.Keyword(null,"r3","r3",-2027148174)))){
return new cljs.core.Keyword(null,"r2","r2",252844174);
} else {
return new cljs.core.Keyword(null,"r1","r1",690974900);
}
} else {
return new cljs.core.Keyword(null,"r1","r1",690974900);
}
} else {
if(cljs.core._EQ_.call(null,branch,new cljs.core.Keyword(null,"acc","acc",838566312))){
if(cljs.core.truth_(succulent.core.locked_QMARK_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955)))){
return new cljs.core.Keyword(null,"eq","eq",-618539067);
} else {
return new cljs.core.Keyword(null,"op","op",-1882987955);
}
} else {
return null;
}
}
});
succulent.core.inc_data_reg = (function succulent$core$inc_data_reg(targ){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r1","r1",690974900)], null).indexOf((new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r3","r3",-2027148174)], null).indexOf(targ) + (1)));
});
succulent.core.put = (function succulent$core$put(val,targ){
if(cljs.core.truth_(succulent.core.locked_QMARK_.call(null,targ))){
return succulent.core.put.call(null,val,succulent.core.inc_data_reg.call(null,targ));
} else {
return cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),targ], null),cljs.core.str,val);
}
});
succulent.core.get_op = (function succulent$core$get_op(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"op","op",-1882987955)], null));
});
succulent.core.get_val = (function succulent$core$get_val(r){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),r,new cljs.core.Keyword(null,"val","val",128701612)], null));
});
succulent.core.num_QMARK_ = (function succulent$core$num_QMARK_(x){
return ((x > (47))) && ((x < (58)));
});
succulent.core.op_QMARK_ = (function succulent$core$op_QMARK_(x){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(43),null,(61),null,(47),null,(45),null,(42),null], null), null),x);
});
succulent.core.semaphora = (function succulent$core$semaphora(k){
var charCode = k.charCodeAt();
if(cljs.core.truth_(succulent.core.num_QMARK_.call(null,charCode))){
return succulent.core.put.call(null,k,succulent.core.get_target.call(null,new cljs.core.Keyword(null,"data","data",-232669377)));
} else {
if(cljs.core.truth_(succulent.core.op_QMARK_.call(null,charCode))){
return cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),succulent.core.get_target.call(null,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"locked?","locked?",995448757)], null),cljs.core.bit_or,(1));
} else {
return "Not yet implemented";

}
}
});
succulent.core.semaphorb = (function succulent$core$semaphorb(k){
var charCode = k.charCodeAt();
if(cljs.core._EQ_.call(null,charCode,(43))){
return cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acc","acc",838566312),succulent.core.get_target.call(null,new cljs.core.Keyword(null,"acc","acc",838566312)),new cljs.core.Keyword(null,"val","val",128701612)], null),cljs.core.str,"add");
} else {
if(cljs.core._EQ_.call(null,charCode,(45))){
return cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acc","acc",838566312),succulent.core.get_target.call(null,new cljs.core.Keyword(null,"acc","acc",838566312)),new cljs.core.Keyword(null,"val","val",128701612)], null),cljs.core.str,"subtract");
} else {
if(cljs.core._EQ_.call(null,charCode,(42))){
return cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acc","acc",838566312),succulent.core.get_target.call(null,new cljs.core.Keyword(null,"acc","acc",838566312)),new cljs.core.Keyword(null,"val","val",128701612)], null),cljs.core.str,"multiply");
} else {
if(cljs.core._EQ_.call(null,charCode,(61))){
return cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acc","acc",838566312),succulent.core.get_target.call(null,new cljs.core.Keyword(null,"acc","acc",838566312)),new cljs.core.Keyword(null,"val","val",128701612)], null),cljs.core.str,"equals");
} else {
return null;
}
}
}
}
});
succulent.core.send = (function succulent$core$send(k){
succulent.core.semaphora.call(null,k.charAt((0)));

return succulent.core.semaphorb.call(null,k.charAt((0)));
});

//# sourceMappingURL=core.js.map?rel=1479783334291