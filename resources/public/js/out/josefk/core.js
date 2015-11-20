// Compiled by ClojureScript 1.7.122 {}
goog.provide('josefk.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om_tools.dom');
goog.require('om_bootstrap.grid');
goog.require('quil.core');
goog.require('om_bootstrap.random');
goog.require('sablono.core');
goog.require('quil.middleware');
goog.require('om.core');
goog.require('om_bootstrap.button');
goog.require('om_bootstrap.table');
cljs.core.enable_console_print_BANG_.call(null);
josefk.core.bind_input = (function josefk$core$bind_input(input_atom){
return (function (p1__28190_SHARP_){
return cljs.core.reset_BANG_.call(null,input_atom,p1__28190_SHARP_.target.value);
});
});
josefk.core.some_component = (function josefk$core$some_component(){
var value_atom = cljs.core.atom.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),josefk.core.bind_input.call(null,value_atom)], null)], null);
});
josefk.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"opcode","opcode",-1329442167),new cljs.core.Keyword(null,"opval","opval",-1758688436),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984),new cljs.core.Keyword(null,"address-bus","address-bus",-1061702415),new cljs.core.Keyword(null,"shift-in","shift-in",744085234),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"control-bus","control-bus",762248216),new cljs.core.Keyword(null,"primary-register","primary-register",700228088),new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"secondary-register","secondary-register",536999519)],[null,"",new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"x","x",2099068185),false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),"",new cljs.core.Keyword(null,"y","y",-1757859776),"",new cljs.core.Keyword(null,"op","op",-1882987955),"",new cljs.core.Keyword(null,"result","result",1415092211),"",new cljs.core.Keyword(null,"tape","tape",-1034358222),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)]));
josefk.core.keyboard_input = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-id","key-id",433432263),null,new cljs.core.Keyword(null,"ascii-code","ascii-code",2020922785),null], null));
josefk.core.flushRegister = (function josefk$core$flushRegister(m){
return cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),m], null),"");
});
josefk.core.show = (function josefk$core$show(arg){
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"x","x",-555367584,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"x","x",2099068185)], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"y","y",-117328249,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"op","op",-242456428,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"op","op",-1882987955)], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"result","result",-1239343558,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"result","result",1415092211)], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"current-target","current-target",1674854437,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"address-bus","address-bus",578829112,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address-bus","address-bus",-1061702415)], null))], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"data-bus","data-bus",1489615543,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-bus","data-bus",-150915984)], null))], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"control-bus","control-bus",-1892187553,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"control-bus","control-bus",762248216)], null))], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"key-in","key-in",1778288722,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"tape","tape",606173305,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"tape","tape",-1034358222)], null));
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
josefk.core.null_QMARK_ = (function josefk$core$null_QMARK_(lat){
return (cljs.core.empty_QMARK_.call(null,lat)) || (cljs.core._EQ_.call(null,"",cljs.core.first.call(null,lat))) || ((cljs.core._EQ_.call(null,cljs.core.first.call(null,lat),null)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,lat),(1))));
});
josefk.core.get_route = (function josefk$core$get_route(reg){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reg], null));
});
josefk.core.divert_route = (function josefk$core$divert_route(reg,newroute){
return cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reg], null),newroute);
});
josefk.core.shunt = (function josefk$core$shunt(val,reg){
return cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),josefk.core.get_route.call(null,reg)], null),cljs.core.str,val);
});
josefk.core.put = (function josefk$core$put(val,reg){
return cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reg], null))], null),(((val instanceof cljs.core.Keyword))?val:[cljs.core.str(val)].join('')));
});
josefk.core.clear_QMARK_ = (function josefk$core$clear_QMARK_(val){
return cljs.core._EQ_.call(null,val,"clear");
});
josefk.core.operator_QMARK_ = (function josefk$core$operator_QMARK_(val){
var ops = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add","subtract","multiply","divide","/","*","+","-"], null));
return cljs.core.contains_QMARK_.call(null,ops,val);
});
josefk.core.eval_QMARK_ = (function josefk$core$eval_QMARK_(val){
var evaluators = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["equals","="], null));
return cljs.core.contains_QMARK_.call(null,evaluators,val);
});
josefk.core.num_QMARK_ = (function josefk$core$num_QMARK_(val){
return typeof val === 'number';
});
josefk.core.shift_QMARK_ = (function josefk$core$shift_QMARK_(val){
return cljs.core._EQ_.call(null,val,"shiftin");
});
josefk.core.unshift_QMARK_ = (function josefk$core$unshift_QMARK_(val){
return cljs.core._EQ_.call(null,val,"unshift");
});
josefk.core.can_evaluate_QMARK_ = (function josefk$core$can_evaluate_QMARK_(){
if(cljs.core.not_any_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.empty_QMARK_,cljs.core.map.call(null,cljs.core.str,cljs.core.map.call(null,josefk.core.show,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"op","op",-242456428,null)], null))))))){
return new cljs.core.Keyword(null,"as-usual","as-usual",-1271784377);
} else {
if(cljs.core.not_any_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.empty_QMARK_,cljs.core.map.call(null,cljs.core.str,cljs.core.map.call(null,josefk.core.show,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"data-bus","data-bus",1489615543,null)], null))))))){
return new cljs.core.Keyword(null,"as-current-continuation","as-current-continuation",12047563);
} else {
return false;

}
}
});
josefk.core.dispatch = (function josefk$core$dispatch(instruction){
if(cljs.core._EQ_.call(null,instruction,"add")){
return cljs.core._PLUS_;
} else {
if(cljs.core._EQ_.call(null,instruction,"subtract")){
return cljs.core._;
} else {
if(cljs.core._EQ_.call(null,instruction,"divide")){
return cljs.core._SLASH_;
} else {
if(cljs.core._EQ_.call(null,instruction,"multiply")){
return cljs.core._STAR_;
} else {
return null;
}
}
}
}
});
josefk.core.flip_address_switch = (function josefk$core$flip_address_switch(){
var current_mode = cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address-bus","address-bus",-1061702415)], null));
if(cljs.core._EQ_.call(null,current_mode,new cljs.core.Keyword(null,"x","x",2099068185))){
return josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"address-bus","address-bus",-1061702415),new cljs.core.Keyword(null,"y","y",-1757859776));
} else {
return josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"address-bus","address-bus",-1061702415),new cljs.core.Keyword(null,"x","x",2099068185));
}
});
josefk.core.push = (function josefk$core$push(val,p,q){
var dispatch = (function (instruction){
if(cljs.core._EQ_.call(null,instruction,"add")){
return cljs.core._PLUS_;
} else {
if(cljs.core._EQ_.call(null,instruction,"subtract")){
return cljs.core._;
} else {
if(cljs.core._EQ_.call(null,instruction,"divide")){
return cljs.core._SLASH_;
} else {
if(cljs.core._EQ_.call(null,instruction,"multiply")){
return cljs.core._STAR_;
} else {
return null;
}
}
}
}
});
if(cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"to-empty","to-empty",111633409))){
if(cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"x-register","x-register",-2027223306))){
josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"x","x",2099068185));

return josefk.core.put.call(null,val,new cljs.core.Keyword(null,"current-target","current-target",34322910));
} else {
if(cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"y-register","y-register",757629795))){
josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"y","y",-1757859776));

return josefk.core.put.call(null,val,new cljs.core.Keyword(null,"current-target","current-target",34322910));
} else {
if(cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"op-register","op-register",859209393))){
return josefk.core.put.call(null,val,new cljs.core.Keyword(null,"control-bus","control-bus",762248216));
} else {
return null;
}
}
}
} else {
if(cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"to-non-empty","to-non-empty",1774910489))){
if(cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"x-register","x-register",-2027223306))){
return josefk.core.shunt.call(null,val,new cljs.core.Keyword(null,"current-target","current-target",34322910));
} else {
if(cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"y-register","y-register",757629795))){
return josefk.core.shunt.call(null,val,new cljs.core.Keyword(null,"current-target","current-target",34322910));
} else {
if(cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"op-register","op-register",859209393))){
return josefk.core.put.call(null,val,new cljs.core.Keyword(null,"control-bus","control-bus",762248216));
} else {
return null;
}
}
}
} else {
if((cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"to-fresh-sparkly","to-fresh-sparkly",262748089))) && (cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"x-register","x-register",-2027223306)))){
josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"result","result",1415092211));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"y","y",-1757859776));

josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"x","x",2099068185));

return josefk$core$push.call(null,val,new cljs.core.Keyword(null,"to-empty","to-empty",111633409),new cljs.core.Keyword(null,"x-register","x-register",-2027223306));
} else {
if((cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"to-fully-evaluated","to-fully-evaluated",453468989))) && (cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"op-register","op-register",859209393)))){
josefk.core.put.call(null,cljs.core.apply.call(null,dispatch.call(null,josefk.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseFloat(josefk.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null))),parseFloat(josefk.core.show.call(null,new cljs.core.Symbol(null,"y","y",-117328249,null)))], null)),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

josefk.core.put.call(null,josefk.core.show.call(null,new cljs.core.Symbol(null,"data-bus","data-bus",1489615543,null)),new cljs.core.Keyword(null,"primary-register","primary-register",700228088));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"result","result",1415092211));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"y","y",-1757859776));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));

josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"x","x",2099068185));

return josefk$core$push.call(null,val,new cljs.core.Keyword(null,"to-empty","to-empty",111633409),new cljs.core.Keyword(null,"op-register","op-register",859209393));
} else {
if((cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"to-fully-evaluated","to-fully-evaluated",453468989))) && (cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"output-register","output-register",-153573239)))){
josefk.core.put.call(null,cljs.core.apply.call(null,dispatch.call(null,josefk.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseFloat(josefk.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null))),parseFloat(josefk.core.show.call(null,new cljs.core.Symbol(null,"y","y",-117328249,null)))], null)),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"y","y",-1757859776));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));

return josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"result","result",1415092211));
} else {
if((cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"to-previously-evaluated","to-previously-evaluated",-431967995))) && (cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"op-register","op-register",859209393)))){
josefk.core.put.call(null,josefk.core.show.call(null,new cljs.core.Symbol(null,"data-bus","data-bus",1489615543,null)),new cljs.core.Keyword(null,"primary-register","primary-register",700228088));

josefk.core.put.call(null,val,new cljs.core.Keyword(null,"control-bus","control-bus",762248216));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"result","result",1415092211));

return josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"x","x",2099068185));
} else {
if((cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"to-unevaluated","to-unevaluated",981072364))) && (cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"output-register","output-register",-153573239)))){
josefk.core.put.call(null,josefk.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

return josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"result","result",1415092211));
} else {
if((cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"to-unevaluated","to-unevaluated",981072364))) && (cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"output-register","output-register",-153573239)))){
josefk.core.put.call(null,josefk.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));

return josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"result","result",1415092211));
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
});
josefk.core.bus_driver = (function josefk$core$bus_driver(val){
var address_bus = josefk.core.show.call(null,new cljs.core.Symbol(null,"address-bus","address-bus",578829112,null));
var control_bus = josefk.core.show.call(null,new cljs.core.Symbol(null,"control-bus","control-bus",-1892187553,null));
var data_bus = josefk.core.show.call(null,new cljs.core.Symbol(null,"data-bus","data-bus",1489615543,null));
var key_in = josefk.core.show.call(null,new cljs.core.Symbol(null,"key-in","key-in",1778288722,null));
var x = josefk.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = josefk.core.show.call(null,new cljs.core.Symbol(null,"y","y",-117328249,null));
var op = josefk.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null));
var ans = josefk.core.show.call(null,new cljs.core.Symbol(null,"result","result",-1239343558,null));
if(cljs.core.truth_(josefk.core.clear_QMARK_.call(null,val))){
return cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),"",new cljs.core.Keyword(null,"y","y",-1757859776),"",new cljs.core.Keyword(null,"op","op",-1882987955),"",new cljs.core.Keyword(null,"result","result",1415092211),"",new cljs.core.Keyword(null,"tape","tape",-1034358222),cljs.core.PersistentVector.EMPTY], null));
} else {
if(cljs.core.truth_(josefk.core.num_QMARK_.call(null,val))){
if(cljs.core.empty_QMARK_.call(null,ans)){
if(cljs.core.empty_QMARK_.call(null,y)){
if(cljs.core.empty_QMARK_.call(null,op)){
if(cljs.core.empty_QMARK_.call(null,x)){
cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(0));

return josefk.core.push.call(null,val,new cljs.core.Keyword(null,"to-empty","to-empty",111633409),new cljs.core.Keyword(null,"x-register","x-register",-2027223306));
} else {
cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(3));

return josefk.core.push.call(null,val,new cljs.core.Keyword(null,"to-non-empty","to-non-empty",1774910489),new cljs.core.Keyword(null,"x-register","x-register",-2027223306));
}
} else {
cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(1));

return josefk.core.push.call(null,val,new cljs.core.Keyword(null,"to-empty","to-empty",111633409),new cljs.core.Keyword(null,"y-register","y-register",757629795));
}
} else {
cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(3));

return josefk.core.push.call(null,val,new cljs.core.Keyword(null,"to-non-empty","to-non-empty",1774910489),new cljs.core.Keyword(null,"y-register","y-register",757629795));
}
} else {
cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(5));

return josefk.core.push.call(null,val,new cljs.core.Keyword(null,"to-fresh-sparkly","to-fresh-sparkly",262748089),new cljs.core.Keyword(null,"x-register","x-register",-2027223306));
}
} else {
if(cljs.core.truth_(josefk.core.shift_QMARK_.call(null,val))){
return cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null),true);
} else {
if(cljs.core.truth_(josefk.core.unshift_QMARK_.call(null,val))){
return cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null),false);
} else {
if(cljs.core.truth_(josefk.core.operator_QMARK_.call(null,val))){
if(cljs.core.empty_QMARK_.call(null,ans)){
if(cljs.core.empty_QMARK_.call(null,y)){
if(cljs.core.empty_QMARK_.call(null,op)){
if(cljs.core.empty_QMARK_.call(null,x)){
cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(4));

return josefk.core.push.call(null,"",new cljs.core.Keyword(null,"nothin-baby","nothin-baby",-1423848032),new cljs.core.Keyword(null,"shhh-just-the-wind","shhh-just-the-wind",62705193));
} else {
cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(2));

return josefk.core.push.call(null,val,new cljs.core.Keyword(null,"to-empty","to-empty",111633409),new cljs.core.Keyword(null,"op-register","op-register",859209393));
}
} else {
cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(2));

return josefk.core.push.call(null,val,new cljs.core.Keyword(null,"to-non-empty","to-non-empty",1774910489),new cljs.core.Keyword(null,"op-register","op-register",859209393));
}
} else {
cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(6));

return josefk.core.push.call(null,val,new cljs.core.Keyword(null,"to-fully-evaluated","to-fully-evaluated",453468989),new cljs.core.Keyword(null,"op-register","op-register",859209393));
}
} else {
cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(8));

return josefk.core.push.call(null,val,new cljs.core.Keyword(null,"to-previously-evaluated","to-previously-evaluated",-431967995),new cljs.core.Keyword(null,"op-register","op-register",859209393));
}
} else {
if(cljs.core.truth_(josefk.core.eval_QMARK_.call(null,val))){
if(cljs.core.empty_QMARK_.call(null,ans)){
if(cljs.core.empty_QMARK_.call(null,y)){
if(cljs.core.empty_QMARK_.call(null,op)){
if(cljs.core.empty_QMARK_.call(null,x)){
cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(2));

return josefk.core.push.call(null,"",new cljs.core.Keyword(null,"nothin-baby","nothin-baby",-1423848032),new cljs.core.Keyword(null,"shhh-just-the-wind","shhh-just-the-wind",62705193));
} else {
cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(10));

return josefk.core.push.call(null,val,new cljs.core.Keyword(null,"to-unevaluated","to-unevaluated",981072364),new cljs.core.Keyword(null,"output-register","output-register",-153573239));
}
} else {
cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(10));

return josefk.core.push.call(null,val,new cljs.core.Keyword(null,"to-unevaluated","to-unevaluated",981072364),new cljs.core.Keyword(null,"output-register","output-register",-153573239));
}
} else {
cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(7));

return josefk.core.push.call(null,val,new cljs.core.Keyword(null,"to-fully-evaluated","to-fully-evaluated",453468989),new cljs.core.Keyword(null,"output-register","output-register",-153573239));
}
} else {
cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(2));

return josefk.core.push.call(null,"",new cljs.core.Keyword(null,"nothin-baby","nothin-baby",-1423848032),new cljs.core.Keyword(null,"shhh-just-the-wind","shhh-just-the-wind",62705193));
}
} else {
return null;
}
}
}
}
}
}
});
josefk.core.opcode = cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (e){
josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"x","x",2099068185));

return josefk.core.put.call(null,e,new cljs.core.Keyword(null,"current-target","current-target",34322910));
}),(function (e){
josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"y","y",-1757859776));

return josefk.core.put.call(null,e,new cljs.core.Keyword(null,"current-target","current-target",34322910));
}),(function (e){
return josefk.core.put.call(null,e,new cljs.core.Keyword(null,"control-bus","control-bus",762248216));
}),(function (e){
return josefk.core.shunt.call(null,e,new cljs.core.Keyword(null,"current-target","current-target",34322910));
}),(function (e){
return josefk.core.shunt.call(null,e,new cljs.core.Keyword(null,"current-target","current-target",34322910));
}),(function (e){
josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"result","result",1415092211));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"y","y",-1757859776));

josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"x","x",2099068185));

return josefk.core.put.call(null,e,new cljs.core.Keyword(null,"current-target","current-target",34322910));
}),(function (e){
if(cljs.core.truth_(josefk.core.can_evaluate_QMARK_.call(null))){
josefk.core.put.call(null,cljs.core.apply.call(null,josefk.core.dispatch.call(null,josefk.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseFloat(josefk.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null))),parseFloat(josefk.core.show.call(null,new cljs.core.Symbol(null,"y","y",-117328249,null)))], null)),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

josefk.core.put.call(null,josefk.core.show.call(null,new cljs.core.Symbol(null,"data-bus","data-bus",1489615543,null)),new cljs.core.Keyword(null,"primary-register","primary-register",700228088));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"result","result",1415092211));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"y","y",-1757859776));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));

josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"x","x",2099068185));

return josefk.core.put.call(null,e,new cljs.core.Keyword(null,"control-bus","control-bus",762248216));
} else {
return null;
}
}),(function (){
if(cljs.core.truth_(josefk.core.can_evaluate_QMARK_.call(null))){
josefk.core.put.call(null,cljs.core.apply.call(null,josefk.core.dispatch.call(null,josefk.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseFloat(josefk.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null))),parseFloat(josefk.core.show.call(null,new cljs.core.Symbol(null,"y","y",-117328249,null)))], null)),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"y","y",-1757859776));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));

return josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"result","result",1415092211));
} else {
return null;
}
}),(function (e){
josefk.core.put.call(null,josefk.core.show.call(null,new cljs.core.Symbol(null,"data-bus","data-bus",1489615543,null)),new cljs.core.Keyword(null,"primary-register","primary-register",700228088));

josefk.core.put.call(null,e,new cljs.core.Keyword(null,"control-bus","control-bus",762248216));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"result","result",1415092211));

return josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"x","x",2099068185));
}),(function (){
josefk.core.put.call(null,josefk.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

return josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"result","result",1415092211));
}),(function (){
josefk.core.put.call(null,josefk.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

josefk.core.flushRegister.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));

return josefk.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"result","result",1415092211));
})], null));
josefk.core.shortbus = (function josefk$core$shortbus(num){
var address_bus = josefk.core.show.call(null,new cljs.core.Symbol(null,"address-bus","address-bus",578829112,null));
var control_bus = josefk.core.show.call(null,new cljs.core.Symbol(null,"control-bus","control-bus",-1892187553,null));
var data_bus = josefk.core.show.call(null,new cljs.core.Symbol(null,"data-bus","data-bus",1489615543,null));
var key_in = josefk.core.show.call(null,new cljs.core.Symbol(null,"key-in","key-in",1778288722,null));
var x = josefk.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = josefk.core.show.call(null,new cljs.core.Symbol(null,"y","y",-117328249,null));
var op = josefk.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null));
var ans = josefk.core.show.call(null,new cljs.core.Symbol(null,"result","result",-1239343558,null));
cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opval","opval",-1758688436)], null),num);

if(cljs.core.truth_(josefk.core.num_QMARK_.call(null,num))){
if(cljs.core.empty_QMARK_.call(null,ans)){
if(cljs.core.empty_QMARK_.call(null,y)){
if(cljs.core.empty_QMARK_.call(null,op)){
if(cljs.core.empty_QMARK_.call(null,x)){
return cljs.core.apply.call(null,josefk.core.opcode.call(null,(0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
} else {
return cljs.core.apply.call(null,josefk.core.opcode.call(null,(3)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
}
} else {
return cljs.core.apply.call(null,josefk.core.opcode.call(null,(1)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
}
} else {
return cljs.core.apply.call(null,josefk.core.opcode.call(null,(4)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
}
} else {
return cljs.core.apply.call(null,josefk.core.opcode.call(null,(5)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
}
} else {
if(cljs.core.truth_(josefk.core.shift_QMARK_.call(null,num))){
return cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null),true);
} else {
if(cljs.core.truth_(josefk.core.unshift_QMARK_.call(null,num))){
return cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null),false);
} else {
if(cljs.core.truth_(josefk.core.operator_QMARK_.call(null,num))){
if(cljs.core.empty_QMARK_.call(null,ans)){
if(cljs.core.empty_QMARK_.call(null,y)){
if(cljs.core.empty_QMARK_.call(null,op)){
if(cljs.core.empty_QMARK_.call(null,x)){
return cljs.core.apply.call(null,josefk.core.opcode.call(null,(-1)),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.core.apply.call(null,josefk.core.opcode.call(null,(2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
}
} else {
return cljs.core.apply.call(null,josefk.core.opcode.call(null,(2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
}
} else {
return cljs.core.apply.call(null,josefk.core.opcode.call(null,(6)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
}
} else {
return cljs.core.apply.call(null,josefk.core.opcode.call(null,(8)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
}
} else {
if(cljs.core.truth_(josefk.core.eval_QMARK_.call(null,cljs.core.val))){
if(cljs.core.empty_QMARK_.call(null,ans)){
if(cljs.core.empty_QMARK_.call(null,y)){
if(cljs.core.empty_QMARK_.call(null,op)){
if(cljs.core.empty_QMARK_.call(null,x)){
return cljs.core.apply.call(null,josefk.core.opcode.call(null,(-1)),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.core.apply.call(null,josefk.core.opcode.call(null,(10)),cljs.core.PersistentVector.EMPTY);
}
} else {
return cljs.core.apply.call(null,josefk.core.opcode.call(null,(11)),cljs.core.PersistentVector.EMPTY);
}
} else {
return cljs.core.apply.call(null,josefk.core.opcode.call(null,(7)),cljs.core.PersistentVector.EMPTY);
}
} else {
return cljs.core.apply.call(null,josefk.core.opcode.call(null,(-1)),cljs.core.PersistentVector.EMPTY);
}
} else {
return null;
}
}
}
}
}
});
josefk.core.butt_stuff = (function josefk$core$butt_stuff(arg){
cljs.core.swap_BANG_.call(null,josefk.core.keyboard_input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null),[cljs.core.str(arg)].join(''));

josefk.core.bus_driver.call(null,arg);

if(!(cljs.core._EQ_.call(null,arg,new cljs.core.Keyword(null,"shift-in","shift-in",744085234)))){
return cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null),false);
} else {
return null;
}
});
josefk.core.a_simple_stateful_object = (function josefk$core$a_simple_stateful_object(app_state,input){
var target_register = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null));
return React.createElement("div",null,React.createElement("div",null,(function (){var attrs28194 = om_bootstrap.random.well.call(null,cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),josefk.core.get_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910))], null)))].join(''));
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs28194))?sablono.interpreter.attributes.call(null,attrs28194):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28194))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28194)], null))));
})()),React.createElement("h3",null,React.createElement("button",{"href": "#", "onClick": ((function (target_register){
return (function (){
return josefk.core.butt_stuff.call(null,(1));
});})(target_register))
},"1")," ",React.createElement("button",{"href": "#", "onClick": ((function (target_register){
return (function (){
return josefk.core.butt_stuff.call(null,(2));
});})(target_register))
},"2")," ",React.createElement("button",{"href": "#", "onClick": ((function (target_register){
return (function (){
return josefk.core.butt_stuff.call(null,(3));
});})(target_register))
},"3")," ",React.createElement("button",{"href": "#", "onClick": ((function (target_register){
return (function (){
return josefk.core.butt_stuff.call(null,"add");
});})(target_register))
},"+")," ",React.createElement("button",{"href": "#", "onClick": ((function (target_register){
return (function (){
return josefk.core.butt_stuff.call(null,"divide");
});})(target_register))
},"/")," "),React.createElement("h3",null,React.createElement("button",{"href": "#", "onClick": ((function (target_register){
return (function (){
return josefk.core.butt_stuff.call(null,(4));
});})(target_register))
},"4")," ",React.createElement("button",{"href": "#", "onClick": ((function (target_register){
return (function (){
return josefk.core.butt_stuff.call(null,(5));
});})(target_register))
},"5")," ",React.createElement("button",{"href": "#", "onClick": ((function (target_register){
return (function (){
return josefk.core.butt_stuff.call(null,(6));
});})(target_register))
},"6")," ",React.createElement("button",{"href": "#", "onClick": ((function (target_register){
return (function (){
return josefk.core.butt_stuff.call(null,"subtract");
});})(target_register))
},"-")," ",React.createElement("button",{"href": "#", "onClick": ((function (target_register){
return (function (){
return josefk.core.butt_stuff.call(null,"multiply");
});})(target_register))
},"*")," "),React.createElement("h3",null,React.createElement("button",{"href": "#", "onClick": ((function (target_register){
return (function (){
return josefk.core.butt_stuff.call(null,(7));
});})(target_register))
},"7")," ",React.createElement("button",{"href": "#", "onClick": ((function (target_register){
return (function (){
return josefk.core.butt_stuff.call(null,(8));
});})(target_register))
},"8")," ",React.createElement("button",{"href": "#", "onClick": ((function (target_register){
return (function (){
return josefk.core.butt_stuff.call(null,(9));
});})(target_register))
},"9")," ",React.createElement("button",{"href": "#", "onClick": ((function (target_register){
return (function (){
return josefk.core.butt_stuff.call(null,"equals");
});})(target_register))
},"=")," ",React.createElement("button",{"href": "#", "onClick": ((function (target_register){
return (function (){
return josefk.core.butt_stuff.call(null,"clear");
});})(target_register))
},"clear")," "),React.createElement("div",null,React.createElement("p",null,"")),sablono.interpreter.interpret.call(null,om_bootstrap.table.table.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"striped?","striped?",-797214979),true,new cljs.core.Keyword(null,"bordered?","bordered?",562358476),true,new cljs.core.Keyword(null,"condensed?","condensed?",-109797520),false,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),true], null),om_tools.dom.element.call(null,React.DOM.thead,cljs.core.apply.call(null,React.DOM.tr,{"className": "col-md-*"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.th({"width": (30)},"Input Monad: "),React.DOM.th({"width": (100)},"Current key: ")],null)))),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.tbody,om_tools.dom.element.call(null,React.DOM.tr,om_tools.dom.element.call(null,React.DOM.td,React.DOM.code({},"State Register:"),cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null)))].join(''),cljs.core.PersistentVector.EMPTY)],null))),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.tr,om_tools.dom.element.call(null,React.DOM.td,React.DOM.code({},"Shift key:"),cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,cljs.core.apply.call(null,React.DOM.code,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null)))].join('')],null)))),cljs.core.PersistentVector.EMPTY)],null)))],null))))));
});
josefk.core.stringnums = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3","4","5","6","7","8","9","0"], null));
josefk.core.stringops = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+","-","/","*"], null));
josefk.core.ascii_number_QMARK_ = (function josefk$core$ascii_number_QMARK_(ascii_code){
return ((ascii_code < (58))) && ((ascii_code > (47)));
});
josefk.core.ascii_shift_QMARK_ = (function josefk$core$ascii_shift_QMARK_(ascii_code){
return cljs.core._EQ_.call(null,(16),ascii_code);
});
josefk.core.convert_to_int = (function josefk$core$convert_to_int(ascii_code){
return (ascii_code - (48));
});
window.addEventListener("keydown",(function (e){
var ascii_code = e.keyCode;
var character = String.fromCharCode(e.keyCode);
var shifted_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null));
cljs.core.swap_BANG_.call(null,josefk.core.keyboard_input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null),character);

cljs.core.swap_BANG_.call(null,josefk.core.keyboard_input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ascii-code","ascii-code",2020922785)], null),ascii_code);

if(cljs.core._EQ_.call(null,ascii_code,(16))){
return cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null),true);
} else {
if(cljs.core._EQ_.call(null,ascii_code,(48))){
return josefk.core.butt_stuff.call(null,(0));
} else {
if(cljs.core._EQ_.call(null,ascii_code,(49))){
return josefk.core.butt_stuff.call(null,(1));
} else {
if(cljs.core._EQ_.call(null,ascii_code,(50))){
return josefk.core.butt_stuff.call(null,(2));
} else {
if(cljs.core._EQ_.call(null,ascii_code,(51))){
return josefk.core.butt_stuff.call(null,(3));
} else {
if(cljs.core._EQ_.call(null,ascii_code,(52))){
return josefk.core.butt_stuff.call(null,(4));
} else {
if(cljs.core._EQ_.call(null,ascii_code,(53))){
return josefk.core.butt_stuff.call(null,(5));
} else {
if(cljs.core._EQ_.call(null,ascii_code,(54))){
return josefk.core.butt_stuff.call(null,(6));
} else {
if(cljs.core._EQ_.call(null,ascii_code,(55))){
return josefk.core.butt_stuff.call(null,(7));
} else {
if(cljs.core._EQ_.call(null,ascii_code,(56))){
if(cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null)) === true){
return josefk.core.butt_stuff.call(null,"multiply");
} else {
return josefk.core.butt_stuff.call(null,(8));
}
} else {
if(cljs.core._EQ_.call(null,ascii_code,(57))){
return josefk.core.butt_stuff.call(null,(9));
} else {
if(cljs.core._EQ_.call(null,ascii_code,(187))){
if(cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null)) === true){
return josefk.core.butt_stuff.call(null,"add");
} else {
return josefk.core.butt_stuff.call(null,"equals");
}
} else {
if(cljs.core._EQ_.call(null,ascii_code,(189))){
if(cljs.core.not.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null))) === true){
return josefk.core.butt_stuff.call(null,"subtract");
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,ascii_code,(191))){
if(cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null)) === false){
return josefk.core.butt_stuff.call(null,"divide");
} else {
return null;
}
} else {
return cljs.core.swap_BANG_.call(null,josefk.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null),false);

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
}
}
}
}
}));
josefk.core.render_BANG_ = (function josefk$core$render_BANG_(){
return React.render(josefk.core.a_simple_stateful_object.call(null,josefk.core.app_state,josefk.core.keyboard_input),document.getElementById("app"));
});
josefk.core.img = cljs.core.atom.call(null,null);
josefk.core.quil_setup = (function josefk$core$quil_setup(){
cljs.core.reset_BANG_.call(null,josefk.core.img,quil.core.load_image.call(null,"lock-1.jpg"));

quil.core.frame_rate.call(null,(10));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
josefk.core.x_scalar = 22.2222;
josefk.core.y_scalar = 22.2727;
josefk.core.quil_update_state = (function josefk$core$quil_update_state(state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255))], null);
});
josefk.core.op_sentinel_x = ((15) * josefk.core.x_scalar);
josefk.core.op_sentinel_y = (7.33 * josefk.core.y_scalar);
josefk.core.targ_x = ((15) * josefk.core.x_scalar);
josefk.core.targ_y = (11.75 * josefk.core.y_scalar);
josefk.core.line = (function josefk$core$line(line_num){
var line_height = 0.55;
return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2.5 * josefk.core.x_scalar),((6.75 + (line_num * line_height)) * josefk.core.y_scalar)], null)));
});
josefk.core.translate_target = (function josefk$core$translate_target(){
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null)),new cljs.core.Keyword(null,"x","x",2099068185))){
return "r1";
} else {
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null)),new cljs.core.Keyword(null,"y","y",-1757859776))){
return "r2";
} else {
return "r3";
}
}
});
josefk.core.draw_rectangle = (function josefk$core$draw_rectangle(x1,y1,x2,y2){
return cljs.core.comp.call(null,quil.core.rect.call(null,(x1 * josefk.core.x_scalar),(y1 * josefk.core.y_scalar),(x2 * josefk.core.x_scalar),(y2 * josefk.core.y_scalar)));
});
josefk.core.draw_triangle = (function josefk$core$draw_triangle(ordinality){
var x_coords = cljs.core.map.call(null,(function (x){
return (x + (ordinality * (3)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2.25,2.5,(2)], null));
var y_coords = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),4.5,4.5], null);
return cljs.core.comp.call(null,quil.core.triangle.call(null,(cljs.core.nth.call(null,x_coords,(0)) * josefk.core.x_scalar),(cljs.core.nth.call(null,y_coords,(0)) * josefk.core.y_scalar),(cljs.core.nth.call(null,x_coords,(1)) * josefk.core.x_scalar),(cljs.core.nth.call(null,y_coords,(1)) * josefk.core.y_scalar),(cljs.core.nth.call(null,x_coords,(2)) * josefk.core.x_scalar),(cljs.core.nth.call(null,y_coords,(2)) * josefk.core.y_scalar)));
});
josefk.core.draw_circle = (function josefk$core$draw_circle(cx,cy,r){
return cljs.core.comp.call(null,quil.core.ellipse.call(null,(cx * josefk.core.x_scalar),(cy * josefk.core.y_scalar),(r * ((josefk.core.x_scalar + josefk.core.y_scalar) / (2))),(r * ((josefk.core.x_scalar + josefk.core.y_scalar) / (2)))));
});
josefk.core.draw_caption = (function josefk$core$draw_caption(s,x1,y1){
return cljs.core.comp.call(null,quil.core.text.call(null,s,(x1 * josefk.core.x_scalar),(y1 * josefk.core.y_scalar)));
});
josefk.core.print_to_console = (function josefk$core$print_to_console(var_args){
var args__20763__auto__ = [];
var len__20756__auto___28198 = arguments.length;
var i__20757__auto___28199 = (0);
while(true){
if((i__20757__auto___28199 < len__20756__auto___28198)){
args__20763__auto__.push((arguments[i__20757__auto___28199]));

var G__28200 = (i__20757__auto___28199 + (1));
i__20757__auto___28199 = G__28200;
continue;
} else {
}
break;
}

var argseq__20764__auto__ = ((((0) < args__20763__auto__.length))?(new cljs.core.IndexedSeq(args__20763__auto__.slice((0)),(0))):null);
return josefk.core.print_to_console.cljs$core$IFn$_invoke$arity$variadic(argseq__20764__auto__);
});

josefk.core.print_to_console.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.map_indexed.call(null,(function (line_number,txt){
return cljs.core.comp.call(null,quil.core.text.call(null,txt,cljs.core.get.call(null,josefk.core.line.call(null,line_number),new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core.get.call(null,josefk.core.line.call(null,line_number),new cljs.core.Keyword(null,"y","y",-1757859776))));
}),args);
});

josefk.core.print_to_console.cljs$lang$maxFixedArity = (0);

josefk.core.print_to_console.cljs$lang$applyTo = (function (seq28197){
return josefk.core.print_to_console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28197));
});
josefk.core.quil_draw_state = (function josefk$core$quil_draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var meta_bounding_box = quil.core.rect.call(null,(0.25 * josefk.core.x_scalar),(4.5 * josefk.core.y_scalar),(35.5 * josefk.core.x_scalar),(10.5 * josefk.core.y_scalar));
var input_bounding_box = quil.core.rect.call(null,((19) * josefk.core.x_scalar),((16) * josefk.core.y_scalar),((7) * josefk.core.x_scalar),((5) * josefk.core.y_scalar));
var output_bounding_box = quil.core.rect.call(null,((28) * josefk.core.x_scalar),((16) * josefk.core.y_scalar),((7) * josefk.core.x_scalar),((5) * josefk.core.y_scalar));
var acu_bounding_box = quil.core.rect.call(null,((19) * josefk.core.x_scalar),((5) * josefk.core.y_scalar),((16) * josefk.core.x_scalar),(9.5 * josefk.core.y_scalar));
var accumulator_box = quil.core.rect.call(null,((20) * josefk.core.x_scalar),((9) * josefk.core.y_scalar),((14) * josefk.core.x_scalar),((5) * josefk.core.y_scalar));
var cpu_bounding_box = quil.core.rect.call(null,((1) * josefk.core.x_scalar),((5) * josefk.core.y_scalar),((16) * josefk.core.x_scalar),(9.5 * josefk.core.y_scalar));
var op_box = quil.core.rect.call(null,((20) * josefk.core.x_scalar),(6.5 * josefk.core.y_scalar),((14) * josefk.core.x_scalar),(1.75 * josefk.core.y_scalar));
var instruction1 = quil.core.rect.call(null,(0.5 * josefk.core.x_scalar),((1) * josefk.core.y_scalar),((3) * josefk.core.x_scalar),((3) * josefk.core.y_scalar));
var instruction2 = quil.core.rect.call(null,(3.5 * josefk.core.x_scalar),((1) * josefk.core.y_scalar),((3) * josefk.core.x_scalar),((3) * josefk.core.y_scalar));
var instruction3 = quil.core.rect.call(null,(6.5 * josefk.core.x_scalar),((1) * josefk.core.y_scalar),((3) * josefk.core.x_scalar),((3) * josefk.core.y_scalar));
var instruction4 = quil.core.rect.call(null,(9.5 * josefk.core.x_scalar),((1) * josefk.core.y_scalar),((3) * josefk.core.x_scalar),((3) * josefk.core.y_scalar));
var instruction5 = quil.core.rect.call(null,(12.5 * josefk.core.x_scalar),((1) * josefk.core.y_scalar),((3) * josefk.core.x_scalar),((3) * josefk.core.y_scalar));
var instruction6 = quil.core.rect.call(null,(15.5 * josefk.core.x_scalar),((1) * josefk.core.y_scalar),((3) * josefk.core.x_scalar),((3) * josefk.core.y_scalar));
var instruction7 = quil.core.rect.call(null,(18.5 * josefk.core.x_scalar),((1) * josefk.core.y_scalar),((3) * josefk.core.x_scalar),((3) * josefk.core.y_scalar));
var instruction8 = quil.core.rect.call(null,(21.5 * josefk.core.x_scalar),((1) * josefk.core.y_scalar),((3) * josefk.core.x_scalar),((3) * josefk.core.y_scalar));
var instruction9 = quil.core.rect.call(null,(24.5 * josefk.core.x_scalar),((1) * josefk.core.y_scalar),((3) * josefk.core.x_scalar),((3) * josefk.core.y_scalar));
var instruction10 = quil.core.rect.call(null,(27.5 * josefk.core.x_scalar),((1) * josefk.core.y_scalar),((3) * josefk.core.x_scalar),((3) * josefk.core.y_scalar));
var instruction11 = quil.core.rect.call(null,(30.5 * josefk.core.x_scalar),((1) * josefk.core.y_scalar),((3) * josefk.core.x_scalar),((3) * josefk.core.y_scalar));
var code = cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null));
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200)], null));

quil.core.rect.call(null,((19) * josefk.core.x_scalar),((16) * josefk.core.y_scalar),((7) * josefk.core.x_scalar),((5) * josefk.core.y_scalar));

quil.core.rect.call(null,((28) * josefk.core.x_scalar),((16) * josefk.core.y_scalar),((7) * josefk.core.x_scalar),((5) * josefk.core.y_scalar));

quil.core.rect.call(null,((19) * josefk.core.x_scalar),((5) * josefk.core.y_scalar),((16) * josefk.core.x_scalar),(9.5 * josefk.core.y_scalar));

quil.core.rect.call(null,((20) * josefk.core.x_scalar),((9) * josefk.core.y_scalar),((14) * josefk.core.x_scalar),((5) * josefk.core.y_scalar));

quil.core.rect.call(null,((1) * josefk.core.x_scalar),((5) * josefk.core.y_scalar),((16) * josefk.core.x_scalar),(9.5 * josefk.core.y_scalar));

quil.core.rect.call(null,((20) * josefk.core.x_scalar),(6.5 * josefk.core.y_scalar),((14) * josefk.core.x_scalar),(1.75 * josefk.core.y_scalar));

quil.core.rect.call(null,((10) * josefk.core.x_scalar),(8.33 * josefk.core.y_scalar),((4) * josefk.core.x_scalar),(2.41 * josefk.core.y_scalar));

quil.core.rect.call(null,((2) * josefk.core.x_scalar),(6.5 * josefk.core.y_scalar),((7) * josefk.core.x_scalar),(7.5 * josefk.core.y_scalar));

cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(63),(2),(0)], null));

quil.core.line.call(null,((12) * josefk.core.x_scalar),josefk.core.op_sentinel_y,josefk.core.op_sentinel_x,josefk.core.op_sentinel_y);

quil.core.line.call(null,((12) * josefk.core.x_scalar),josefk.core.op_sentinel_y,((12) * josefk.core.x_scalar),(8.33 * josefk.core.y_scalar));

quil.core.line.call(null,((12) * josefk.core.x_scalar),josefk.core.targ_y,josefk.core.targ_x,josefk.core.targ_y);

quil.core.line.call(null,((12) * josefk.core.x_scalar),josefk.core.targ_y,((12) * josefk.core.x_scalar),(10.75 * josefk.core.y_scalar));

if(cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null)) === true){
quil.core.line.call(null,((20) * josefk.core.x_scalar),((16) * josefk.core.y_scalar),((25) * josefk.core.x_scalar),((14) * josefk.core.y_scalar));
} else {
quil.core.line.call(null,((22) * josefk.core.x_scalar),((16) * josefk.core.y_scalar),((27) * josefk.core.x_scalar),((14) * josefk.core.y_scalar));
}

quil.core.line.call(null,((32) * josefk.core.x_scalar),((16) * josefk.core.y_scalar),((27) * josefk.core.x_scalar),((14) * josefk.core.y_scalar));

if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null)),new cljs.core.Keyword(null,"x","x",2099068185))){
quil.core.ellipse.call(null,(21.25 * josefk.core.x_scalar),(10.85 * josefk.core.y_scalar),(0.25 * josefk.core.x_scalar),(0.25 * josefk.core.y_scalar));

quil.core.line.call(null,((15) * josefk.core.x_scalar),(11.75 * josefk.core.y_scalar),((20) * josefk.core.x_scalar),(10.75 * josefk.core.y_scalar));
} else {
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null)),new cljs.core.Keyword(null,"y","y",-1757859776))){
quil.core.ellipse.call(null,(21.25 * josefk.core.x_scalar),(11.85 * josefk.core.y_scalar),(0.25 * josefk.core.x_scalar),(0.25 * josefk.core.y_scalar));

quil.core.line.call(null,((15) * josefk.core.x_scalar),(11.75 * josefk.core.y_scalar),((20) * josefk.core.x_scalar),(11.75 * josefk.core.y_scalar));
} else {
quil.core.ellipse.call(null,(21.25 * josefk.core.x_scalar),(12.85 * josefk.core.y_scalar),(0.25 * josefk.core.x_scalar),(0.25 * josefk.core.y_scalar));

quil.core.line.call(null,((15) * josefk.core.x_scalar),(11.75 * josefk.core.y_scalar),((20) * josefk.core.x_scalar),(12.75 * josefk.core.y_scalar));
}
}

quil.core.line.call(null,josefk.core.op_sentinel_x,josefk.core.op_sentinel_y,((20) * josefk.core.x_scalar),josefk.core.op_sentinel_y);

if(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"op","op",-1882987955)], null)))){
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(340),(240)], null));
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(250),(340)], null));
}

quil.core.ellipse.call(null,josefk.core.op_sentinel_x,josefk.core.op_sentinel_y,((2) * josefk.core.x_scalar),((2) * josefk.core.y_scalar));

if(!(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1),(5)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null))))){
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(340),(240)], null));
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(250),(340)], null));
}

quil.core.ellipse.call(null,josefk.core.targ_x,josefk.core.targ_y,((2) * josefk.core.x_scalar),((2) * josefk.core.y_scalar));

cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(63),(2),(0)], null));

quil.core.text.call(null,"INPUT ",(19.66 * josefk.core.x_scalar),((17) * josefk.core.y_scalar));

quil.core.text.call(null,[cljs.core.str("keyboard:")].join(''),(20.33 * josefk.core.x_scalar),((18) * josefk.core.y_scalar));

quil.core.text.call(null,[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null)))].join(''),(23.33 * josefk.core.x_scalar),((18) * josefk.core.y_scalar));

quil.core.text.call(null,[cljs.core.str("ascii code:")].join(''),(20.33 * josefk.core.x_scalar),((19) * josefk.core.y_scalar));

quil.core.text.call(null,[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ascii-code","ascii-code",2020922785)], null)))].join(''),(23.33 * josefk.core.x_scalar),((19) * josefk.core.y_scalar));

quil.core.text.call(null,"OUTPUT ",(28.66 * josefk.core.x_scalar),((17) * josefk.core.y_scalar));

quil.core.text.call(null,[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null))], null)))].join(''),(29.33 * josefk.core.x_scalar),((18) * josefk.core.y_scalar));

quil.core.text.call(null,"ACCUMULATOR ",((21) * josefk.core.x_scalar),((10) * josefk.core.y_scalar));

quil.core.text.call(null,"r1",((22) * josefk.core.x_scalar),((11) * josefk.core.y_scalar));

quil.core.text.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"x","x",2099068185)], null)),((23) * josefk.core.x_scalar),((11) * josefk.core.y_scalar));

quil.core.text.call(null,"r2",((22) * josefk.core.x_scalar),((12) * josefk.core.y_scalar));

quil.core.text.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"y","y",-1757859776)], null)),((23) * josefk.core.x_scalar),((12) * josefk.core.y_scalar));

quil.core.text.call(null,"r3",((22) * josefk.core.x_scalar),((13) * josefk.core.y_scalar));

quil.core.text.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"result","result",1415092211)], null)),((23) * josefk.core.x_scalar),((13) * josefk.core.y_scalar));

quil.core.text.call(null,"ARITHMETIC CONTROL UNIT ",((20) * josefk.core.x_scalar),((6) * josefk.core.y_scalar));

quil.core.text.call(null,"op",((22) * josefk.core.x_scalar),(7.5 * josefk.core.y_scalar));

quil.core.text.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"op","op",-1882987955)], null)),((23) * josefk.core.x_scalar),(7.5 * josefk.core.y_scalar));

quil.core.text.call(null,"CONTROL UNIT",((2) * josefk.core.x_scalar),((6) * josefk.core.y_scalar));

quil.core.text.call(null,"INSTRUCTION REGISTERS",((1) * josefk.core.x_scalar),(0.85 * josefk.core.y_scalar));

quil.core.text.call(null,"0",((3) * josefk.core.x_scalar),(3.8 * josefk.core.y_scalar));

quil.core.text.call(null,"1",((6) * josefk.core.x_scalar),(3.8 * josefk.core.y_scalar));

quil.core.text.call(null,"2",((9) * josefk.core.x_scalar),(3.8 * josefk.core.y_scalar));

quil.core.text.call(null,"3",((12) * josefk.core.x_scalar),(3.8 * josefk.core.y_scalar));

quil.core.text.call(null,"4",((15) * josefk.core.x_scalar),(3.8 * josefk.core.y_scalar));

quil.core.text.call(null,"5",((18) * josefk.core.x_scalar),(3.8 * josefk.core.y_scalar));

quil.core.text.call(null,"6",((21) * josefk.core.x_scalar),(3.8 * josefk.core.y_scalar));

quil.core.text.call(null,"7",((24) * josefk.core.x_scalar),(3.8 * josefk.core.y_scalar));

quil.core.text.call(null,"8",((27) * josefk.core.x_scalar),(3.8 * josefk.core.y_scalar));

quil.core.text.call(null,"9",(29.75 * josefk.core.x_scalar),(3.8 * josefk.core.y_scalar));

quil.core.text.call(null,"10",(32.8 * josefk.core.x_scalar),(3.8 * josefk.core.y_scalar));

quil.core.text.call(null,"OPCODE",(10.5 * josefk.core.x_scalar),((9) * josefk.core.y_scalar));

quil.core.text.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null)),(11.5 * josefk.core.x_scalar),(10.25 * josefk.core.y_scalar));

if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null)),new cljs.core.Keyword(null,"x","x",2099068185))){
quil.core.text.call(null,"r1",(14.83 * josefk.core.x_scalar),(11.89 * josefk.core.y_scalar));
} else {
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null)),new cljs.core.Keyword(null,"y","y",-1757859776))){
quil.core.text.call(null,"r2",(14.83 * josefk.core.x_scalar),(11.89 * josefk.core.y_scalar));
} else {
quil.core.text.call(null,"r3",(14.83 * josefk.core.x_scalar),(11.89 * josefk.core.y_scalar));
}
}

if(cljs.core._EQ_.call(null,code,(0))){
josefk.core.draw_triangle.call(null,(0));

return quil.core.text.call(null,josefk.core.print_to_console.call(null," ",";the first action"," ","(apply (opcode 0) [num])","=> loading...","...",cljs.core.apply.call(null,cljs.core.str,"now putting '",cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null)),"' in :r1")),(1),(1));
} else {
if(cljs.core._EQ_.call(null,code,(3))){
josefk.core.draw_triangle.call(null,(3));

return quil.core.text.call(null,josefk.core.print_to_console.call(null," ",";keep stringing to","  target register"," ","(apply (opcode 3) [num]","=> loading...","...",cljs.core.apply.call(null,cljs.core.str,"putting '",cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null)),"' in ",josefk.core.translate_target.call(null),"...")," ","update complete."),(1),(1));
} else {
if(cljs.core._EQ_.call(null,code,(1))){
josefk.core.draw_triangle.call(null,(1));

return quil.core.text.call(null,josefk.core.print_to_console.call(null," ",";switch register to r2","  ;and put val in r2"," ","(apply (opcode 1) [num]) ","=>  loading...","..."," ",cljs.core.apply.call(null,cljs.core.str,"putting '",cljs.core.get_in.call(null,cljs.core.deref.call(null,josefk.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null)),"'","  in :r2...")," ","update complete."),(1),(1));
} else {
if(cljs.core._EQ_.call(null,code,(2))){
josefk.core.draw_triangle.call(null,(2));

return quil.core.text.call(null,josefk.core.print_to_console.call(null," ",";lock r1 and update the ","  cleared op reg"," ","(apply (opcode 2) [num]) ","=>  loading...","...",cljs.core.apply.call(null,cljs.core.str,"setting op to'",josefk.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null)),"'...")," ","update complete."),(1),(1));
} else {
if(cljs.core._EQ_.call(null,code,(6))){
josefk.core.draw_triangle.call(null,(6));

return quil.core.text.call(null,josefk.core.print_to_console.call(null," ",";chained expression","  (e.g. '5+4-7')"," ","(apply (opcode 6) [num]) ","=> loading..."," ","pushing vectorized ","      expression to r3...",cljs.core.apply.call(null,cljs.core.str,"r3 evaluates to '",josefk.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)),"'..."),cljs.core.apply.call(null,cljs.core.str,"copying '",josefk.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)),"' to locked r1..."),cljs.core.apply.call(null,cljs.core.str,"setting op to '",josefk.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null)),"'...")," ","evaluation complete."),(1),(1));
} else {
if(cljs.core._EQ_.call(null,code,(8))){
josefk.core.draw_triangle.call(null,(8));

return quil.core.text.call(null,josefk.core.print_to_console.call(null," ",";resume chaining a ","  previously evaluated","  expression"," ","(apply (opcode 8) [num]))","=> loading..."," ",[cljs.core.str("copying '"),cljs.core.str(josefk.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null))),cljs.core.str("' from r3 to locked r1...")].join(''),"now clearing r3...",cljs.core.apply.call(null,cljs.core.str,"setting op to '",josefk.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null)),"'"),"evaluation complete."),(1),(1));
} else {
if(cljs.core._EQ_.call(null,code,(7))){
josefk.core.draw_triangle.call(null,(7));

return quil.core.text.call(null,josefk.core.print_to_console.call(null," ",";evaluate normally and","  flush the registers"," ","(apply (opcode 8) [num]))","=> loading..."," ","pushing (op r1 r2) to r3...",cljs.core.apply.call(null,cljs.core.str,"r3 evaluates to '",josefk.core.show.call(null,new cljs.core.Symbol(null,"result","result",-1239343558,null)),"'..."),"flushing the registers..."," ","evaluation complete."),(1),(1));
} else {
if(cljs.core._EQ_.call(null,code,(5))){
josefk.core.draw_triangle.call(null,(5));

return quil.core.text.call(null,josefk.core.print_to_console.call(null," ",";start a new expression"," ","(apply (opcode 5) [num])","=> loading...."," ","flushing r3...",cljs.core.apply.call(null,cljs.core.str,"now putting '",josefk.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)),"' in r1...")," ","update complete."),(1),(1));
} else {
if(cljs.core._EQ_.call(null,code,(10))){
josefk.core.draw_triangle.call(null,(10));

return quil.core.text.call(null,josefk.core.print_to_console.call(null," ",";bad expression","  flush registers but","  push r1 to r3"," ","(apply (opcode 10) [num]))","=> loading..."," ","pushing r1 to r3...","flushing the registers..."," ","update complete."),(1),(1));
} else {
return quil.core.text.call(null,josefk.core.print_to_console.call(null," ","[heavy breathing]"," "," "," ","listening to keyboard ","  for numbers..."),(1),(1));

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
josefk.core.josefk = (function josefk$core$josefk(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"josefk",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,josefk.core.quil_update_state))?(function() { 
var G__28201__delegate = function (args){
return cljs.core.apply.call(null,josefk.core.quil_update_state,args);
};
var G__28201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28202__i = 0, G__28202__a = new Array(arguments.length -  0);
while (G__28202__i < G__28202__a.length) {G__28202__a[G__28202__i] = arguments[G__28202__i + 0]; ++G__28202__i;}
  args = new cljs.core.IndexedSeq(G__28202__a,0);
} 
return G__28201__delegate.call(this,args);};
G__28201.cljs$lang$maxFixedArity = 0;
G__28201.cljs$lang$applyTo = (function (arglist__28203){
var args = cljs.core.seq(arglist__28203);
return G__28201__delegate(args);
});
G__28201.cljs$core$IFn$_invoke$arity$variadic = G__28201__delegate;
return G__28201;
})()
:josefk.core.quil_update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,josefk.core.quil_setup))?(function() { 
var G__28204__delegate = function (args){
return cljs.core.apply.call(null,josefk.core.quil_setup,args);
};
var G__28204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28205__i = 0, G__28205__a = new Array(arguments.length -  0);
while (G__28205__i < G__28205__a.length) {G__28205__a[G__28205__i] = arguments[G__28205__i + 0]; ++G__28205__i;}
  args = new cljs.core.IndexedSeq(G__28205__a,0);
} 
return G__28204__delegate.call(this,args);};
G__28204.cljs$lang$maxFixedArity = 0;
G__28204.cljs$lang$applyTo = (function (arglist__28206){
var args = cljs.core.seq(arglist__28206);
return G__28204__delegate(args);
});
G__28204.cljs$core$IFn$_invoke$arity$variadic = G__28204__delegate;
return G__28204;
})()
:josefk.core.quil_setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,josefk.core.quil_draw_state))?(function() { 
var G__28207__delegate = function (args){
return cljs.core.apply.call(null,josefk.core.quil_draw_state,args);
};
var G__28207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28208__i = 0, G__28208__a = new Array(arguments.length -  0);
while (G__28208__i < G__28208__a.length) {G__28208__a[G__28208__i] = arguments[G__28208__i + 0]; ++G__28208__i;}
  args = new cljs.core.IndexedSeq(G__28208__a,0);
} 
return G__28207__delegate.call(this,args);};
G__28207.cljs$lang$maxFixedArity = 0;
G__28207.cljs$lang$applyTo = (function (arglist__28209){
var args = cljs.core.seq(arglist__28209);
return G__28207__delegate(args);
});
G__28207.cljs$core$IFn$_invoke$arity$variadic = G__28207__delegate;
return G__28207;
})()
:josefk.core.quil_draw_state));
});
goog.exportSymbol('josefk.core.josefk', josefk.core.josefk);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__25913__25914__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__25913__25914__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),josefk.core.josefk,new cljs.core.Keyword(null,"host-id","host-id",742376279),"josefk"], null));
}
cljs.core.add_watch.call(null,josefk.core.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return josefk.core.render_BANG_.call(null);
}));
cljs.core.add_watch.call(null,josefk.core.keyboard_input,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return josefk.core.render_BANG_.call(null);
}));
josefk.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map