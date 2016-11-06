// Compiled by ClojureScript 1.9.227 {}
goog.provide('succulent.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('cljs.tools.reader');
goog.require('om_tools.dom');
goog.require('om_bootstrap.grid');
goog.require('quil.core');
goog.require('reagent.core');
goog.require('cljs.js');
goog.require('sablono.core');
goog.require('quil.middleware');
goog.require('om.core');
goog.require('om_bootstrap.button');
goog.require('om_bootstrap.random');
goog.require('om_bootstrap.table');
console.log("Booted");
succulent.core.bind_input = (function succulent$core$bind_input(input_atom){
return (function (p1__38370_SHARP_){
return cljs.core.reset_BANG_.call(null,input_atom,p1__38370_SHARP_.target.value);
});
});
succulent.core.some_component = (function succulent$core$some_component(){
var value_atom = reagent.core.atom.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),succulent.core.bind_input.call(null,value_atom)], null)], null);
});
succulent.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"opcode","opcode",-1329442167),new cljs.core.Keyword(null,"opval","opval",-1758688436),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984),new cljs.core.Keyword(null,"address-bus","address-bus",-1061702415),new cljs.core.Keyword(null,"shift-in","shift-in",744085234),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"control-bus","control-bus",762248216),new cljs.core.Keyword(null,"primary-register","primary-register",700228088),new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"secondary-register","secondary-register",536999519)],[null,"",new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"x","x",2099068185),false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),"",new cljs.core.Keyword(null,"y","y",-1757859776),"",new cljs.core.Keyword(null,"op","op",-1882987955),"",new cljs.core.Keyword(null,"result","result",1415092211),"",new cljs.core.Keyword(null,"tape","tape",-1034358222),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)]));
succulent.core.db = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mutex","mutex",745504759),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"threads","threads",-1717798734),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreA","semaphoreA",-948329321),new cljs.core.Keyword(null,"semaphoreB","semaphoreB",-399834027)], null),new cljs.core.Keyword(null,"active-thread","active-thread",1610323599),new cljs.core.Keyword(null,"semaphoreA","semaphoreA",-948329321)], null),new cljs.core.Keyword(null,"semaphoreA","semaphoreA",-948329321),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),""], null),new cljs.core.Keyword(null,"available","available",-1470697127),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955)], null),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"locked?","locked?",995448757),false], null),new cljs.core.Keyword(null,"semaphoreB","semaphoreB",-399834027),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),(2),new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r1","r1",690974900),"",new cljs.core.Keyword(null,"r2","r2",252844174),"",new cljs.core.Keyword(null,"r3","r3",-2027148174),""], null),new cljs.core.Keyword(null,"available","available",-1470697127),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r3","r3",-2027148174)], null),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"locked?","locked?",995448757),true], null),new cljs.core.Keyword(null,"accumulator","accumulator",1546185501),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),"",new cljs.core.Keyword(null,"r1","r1",690974900),"",new cljs.core.Keyword(null,"r2","r2",252844174),"",new cljs.core.Keyword(null,"r3","r3",-2027148174),"",new cljs.core.Keyword(null,"null","null",-180137709),""], null),new cljs.core.Keyword(null,"opcode","opcode",-1329442167),(0)], null));
succulent.core.siginterrupt = (function succulent$core$siginterrupt(){
cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mutex","mutex",745504759),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core.bit_xor,(1));

cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mutex","mutex",745504759),new cljs.core.Keyword(null,"active-thread","active-thread",1610323599)], null),cljs.core.get.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mutex","mutex",745504759),new cljs.core.Keyword(null,"threads","threads",-1717798734)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mutex","mutex",745504759),new cljs.core.Keyword(null,"state","state",-1988618099)], null))));

cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreA","semaphoreA",-948329321),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core.inc);

cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreB","semaphoreB",-399834027),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core.inc);

cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreA","semaphoreA",-948329321),new cljs.core.Keyword(null,"locked?","locked?",995448757)], null),cljs.core.not);

cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreA","semaphoreA",-948329321),new cljs.core.Keyword(null,"selected","selected",574897764)], null),cljs.core.get.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreA","semaphoreA",-948329321),new cljs.core.Keyword(null,"registers","registers",81921893)], null)),cljs.core.mod.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreA","semaphoreA",-948329321),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),(1))));

cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreB","semaphoreB",-399834027),new cljs.core.Keyword(null,"locked?","locked?",995448757)], null),cljs.core.not);

return cljs.core.swap_BANG_.call(null,succulent.core.db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreB","semaphoreB",-399834027),new cljs.core.Keyword(null,"selected","selected",574897764)], null),cljs.core.get.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreB","semaphoreB",-399834027),new cljs.core.Keyword(null,"registers","registers",81921893)], null)),cljs.core.mod.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semaphoreB","semaphoreB",-399834027),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),(3))));
});
succulent.core.href = (function succulent$core$href(resource){
var ref_ptr = cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mutex","mutex",745504759),new cljs.core.Keyword(null,"state","state",-1988618099)], null));
var threadpool = cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mutex","mutex",745504759),new cljs.core.Keyword(null,"threads","threads",-1717798734)], null));
var current_owner = cljs.core.get.call(null,threadpool,ref_ptr,new cljs.core.Keyword(null,"out-of-bounds","out-of-bounds",-1665987201));
var active_thread = cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threads","threads",-1717798734),current_owner], null));
var semA_ptr = cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threads","threads",-1717798734),active_thread,new cljs.core.Keyword(null,"state","state",-1988618099)], null));
var semA_target = cljs.core.get.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threads","threads",-1717798734),active_thread,new cljs.core.Keyword(null,"registers","registers",81921893)], null)),semA_ptr,new cljs.core.Keyword(null,"semA-out-of-bounds","semA-out-of-bounds",-132574979));
var semB_ptr = cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threads","threads",-1717798734),active_thread,new cljs.core.Keyword(null,"state","state",-1988618099)], null));
var semB_target = cljs.core.get.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"threads","threads",-1717798734),active_thread,new cljs.core.Keyword(null,"registers","registers",81921893)], null)),semB_ptr,new cljs.core.Keyword(null,"semB-out-of-bounds","semB-out-of-bounds",137938344));
var active_target = (((ref_ptr === (0)))?semA_target:semB_target);
if(cljs.core._EQ_.call(null,resource,new cljs.core.Keyword(null,"active-thread","active-thread",1610323599))){
return active_thread;
} else {
if(cljs.core._EQ_.call(null,resource,new cljs.core.Keyword(null,"target-register","target-register",-198112602))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accumulator","accumulator",1546185501),active_target], null));
} else {
if(cljs.core._EQ_.call(null,resource,new cljs.core.Keyword(null,"accumulator","accumulator",1546185501))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accumulator","accumulator",1546185501)], null));
} else {
return null;
}
}
}
});
succulent.core.keyboard_input = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key-id","key-id",433432263),"",new cljs.core.Keyword(null,"ascii-code","ascii-code",2020922785),"",new cljs.core.Keyword(null,"tag","tag",-1290361223),""], null));
succulent.core.flushRegister = (function succulent$core$flushRegister(m){
return cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),m], null),"");
});
succulent.core.show = (function succulent$core$show(arg){
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"x","x",-555367584,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"x","x",2099068185)], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"y","y",-117328249,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"op","op",-242456428,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"op","op",-1882987955)], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"result","result",-1239343558,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"result","result",1415092211)], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"current-target","current-target",1674854437,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"address-bus","address-bus",578829112,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address-bus","address-bus",-1061702415)], null))], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"data-bus","data-bus",1489615543,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-bus","data-bus",-150915984)], null))], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"control-bus","control-bus",-1892187553,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"control-bus","control-bus",762248216)], null))], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"key-in","key-in",1778288722,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null));
} else {
if(cljs.core._EQ_.call(null,arg,new cljs.core.Symbol(null,"tape","tape",606173305,null))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"tape","tape",-1034358222)], null));
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
succulent.core.get_route = (function succulent$core$get_route(reg){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reg], null));
});
succulent.core.divert_route = (function succulent$core$divert_route(reg,newroute){
return cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reg], null),newroute);
});
succulent.core.shunt = (function succulent$core$shunt(val,reg){
return cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),succulent.core.get_route.call(null,reg)], null),cljs.core.str,val);
});
succulent.core.put = (function succulent$core$put(val,reg){
return cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reg], null))], null),(((val instanceof cljs.core.Keyword))?val:[cljs.core.str(val)].join('')));
});
succulent.core.clear_QMARK_ = (function succulent$core$clear_QMARK_(val){
return cljs.core._EQ_.call(null,val,"clear");
});
succulent.core.operator_QMARK_ = (function succulent$core$operator_QMARK_(val){
var ops = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add","subtract","multiply","divide","/","*","+","-"], null));
return cljs.core.contains_QMARK_.call(null,ops,val);
});
succulent.core.eval_QMARK_ = (function succulent$core$eval_QMARK_(val){
var evaluators = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["equals","="], null));
return cljs.core.contains_QMARK_.call(null,evaluators,val);
});
succulent.core.num_QMARK_ = (function succulent$core$num_QMARK_(val){
return isFinite(parseInt(val));
});
succulent.core.shift_QMARK_ = (function succulent$core$shift_QMARK_(val){
return cljs.core._EQ_.call(null,val,"shiftin");
});
succulent.core.unshift_QMARK_ = (function succulent$core$unshift_QMARK_(val){
return cljs.core._EQ_.call(null,val,"unshift");
});
succulent.core.can_evaluate_QMARK_ = (function succulent$core$can_evaluate_QMARK_(){
if(cljs.core.not_any_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.empty_QMARK_,cljs.core.map.call(null,cljs.core.str,cljs.core.map.call(null,succulent.core.show,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"op","op",-242456428,null)], null))))))){
return new cljs.core.Keyword(null,"as-usual","as-usual",-1271784377);
} else {
if(cljs.core.not_any_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.empty_QMARK_,cljs.core.map.call(null,cljs.core.str,cljs.core.map.call(null,succulent.core.show,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"data-bus","data-bus",1489615543,null)], null))))))){
return new cljs.core.Keyword(null,"as-current-continuation","as-current-continuation",12047563);
} else {
return false;

}
}
});
succulent.core.dispatch = (function succulent$core$dispatch(instruction){
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
succulent.core.flip_address_switch = (function succulent$core$flip_address_switch(){
var current_mode = cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address-bus","address-bus",-1061702415)], null));
if(cljs.core._EQ_.call(null,current_mode,new cljs.core.Keyword(null,"x","x",2099068185))){
return succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"address-bus","address-bus",-1061702415),new cljs.core.Keyword(null,"y","y",-1757859776));
} else {
return succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"address-bus","address-bus",-1061702415),new cljs.core.Keyword(null,"x","x",2099068185));
}
});
succulent.core.push = (function succulent$core$push(val,p,q){
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
succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"x","x",2099068185));

return succulent.core.put.call(null,val,new cljs.core.Keyword(null,"current-target","current-target",34322910));
} else {
if(cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"y-register","y-register",757629795))){
succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"y","y",-1757859776));

return succulent.core.put.call(null,val,new cljs.core.Keyword(null,"current-target","current-target",34322910));
} else {
if(cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"op-register","op-register",859209393))){
return succulent.core.put.call(null,val,new cljs.core.Keyword(null,"control-bus","control-bus",762248216));
} else {
return null;
}
}
}
} else {
if(cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"to-non-empty","to-non-empty",1774910489))){
if(cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"x-register","x-register",-2027223306))){
return succulent.core.shunt.call(null,val,new cljs.core.Keyword(null,"current-target","current-target",34322910));
} else {
if(cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"y-register","y-register",757629795))){
return succulent.core.shunt.call(null,val,new cljs.core.Keyword(null,"current-target","current-target",34322910));
} else {
if(cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"op-register","op-register",859209393))){
return succulent.core.put.call(null,val,new cljs.core.Keyword(null,"control-bus","control-bus",762248216));
} else {
return null;
}
}
}
} else {
if((cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"to-fresh-sparkly","to-fresh-sparkly",262748089))) && (cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"x-register","x-register",-2027223306)))){
succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"result","result",1415092211));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"y","y",-1757859776));

succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"x","x",2099068185));

return succulent$core$push.call(null,val,new cljs.core.Keyword(null,"to-empty","to-empty",111633409),new cljs.core.Keyword(null,"x-register","x-register",-2027223306));
} else {
if((cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"to-fully-evaluated","to-fully-evaluated",453468989))) && (cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"op-register","op-register",859209393)))){
succulent.core.put.call(null,cljs.core.apply.call(null,dispatch.call(null,succulent.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseFloat(succulent.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null))),parseFloat(succulent.core.show.call(null,new cljs.core.Symbol(null,"y","y",-117328249,null)))], null)),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

succulent.core.put.call(null,succulent.core.show.call(null,new cljs.core.Symbol(null,"data-bus","data-bus",1489615543,null)),new cljs.core.Keyword(null,"primary-register","primary-register",700228088));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"result","result",1415092211));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"y","y",-1757859776));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));

succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"x","x",2099068185));

return succulent$core$push.call(null,val,new cljs.core.Keyword(null,"to-empty","to-empty",111633409),new cljs.core.Keyword(null,"op-register","op-register",859209393));
} else {
if((cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"to-fully-evaluated","to-fully-evaluated",453468989))) && (cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"output-register","output-register",-153573239)))){
succulent.core.put.call(null,cljs.core.apply.call(null,dispatch.call(null,succulent.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseFloat(succulent.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null))),parseFloat(succulent.core.show.call(null,new cljs.core.Symbol(null,"y","y",-117328249,null)))], null)),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"y","y",-1757859776));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));

return succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"result","result",1415092211));
} else {
if((cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"to-previously-evaluated","to-previously-evaluated",-431967995))) && (cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"op-register","op-register",859209393)))){
succulent.core.put.call(null,succulent.core.show.call(null,new cljs.core.Symbol(null,"data-bus","data-bus",1489615543,null)),new cljs.core.Keyword(null,"primary-register","primary-register",700228088));

succulent.core.put.call(null,val,new cljs.core.Keyword(null,"control-bus","control-bus",762248216));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"result","result",1415092211));

return succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"x","x",2099068185));
} else {
if((cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"to-unevaluated","to-unevaluated",981072364))) && (cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"output-register","output-register",-153573239)))){
succulent.core.put.call(null,succulent.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

return succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"result","result",1415092211));
} else {
if((cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"to-unevaluated","to-unevaluated",981072364))) && (cljs.core._EQ_.call(null,q,new cljs.core.Keyword(null,"output-register","output-register",-153573239)))){
succulent.core.put.call(null,succulent.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));

return succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"result","result",1415092211));
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
succulent.core.bus_driver = (function succulent$core$bus_driver(input){
var address_bus = succulent.core.show.call(null,new cljs.core.Symbol(null,"address-bus","address-bus",578829112,null));
var control_bus = succulent.core.show.call(null,new cljs.core.Symbol(null,"control-bus","control-bus",-1892187553,null));
var data_bus = succulent.core.show.call(null,new cljs.core.Symbol(null,"data-bus","data-bus",1489615543,null));
var key_in = succulent.core.show.call(null,new cljs.core.Symbol(null,"key-in","key-in",1778288722,null));
var x = succulent.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = succulent.core.show.call(null,new cljs.core.Symbol(null,"y","y",-117328249,null));
var op = succulent.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null));
var ans = succulent.core.show.call(null,new cljs.core.Symbol(null,"result","result",-1239343558,null));
var tag = cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223)], null));
var k = cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null));
console.log("Bus driver called with arg: ",cljs.core.val);

if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"number","number",1570378438))){
if(cljs.core.empty_QMARK_.call(null,ans)){
if(cljs.core.empty_QMARK_.call(null,y)){
if(cljs.core.empty_QMARK_.call(null,op)){
if(cljs.core.empty_QMARK_.call(null,x)){
cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(0));

return succulent.core.push.call(null,cljs.core.val,new cljs.core.Keyword(null,"to-empty","to-empty",111633409),new cljs.core.Keyword(null,"x-register","x-register",-2027223306));
} else {
cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(3));

return succulent.core.push.call(null,cljs.core.val,new cljs.core.Keyword(null,"to-non-empty","to-non-empty",1774910489),new cljs.core.Keyword(null,"x-register","x-register",-2027223306));
}
} else {
cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(1));

return succulent.core.push.call(null,cljs.core.val,new cljs.core.Keyword(null,"to-empty","to-empty",111633409),new cljs.core.Keyword(null,"y-register","y-register",757629795));
}
} else {
cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(3));

return succulent.core.push.call(null,cljs.core.val,new cljs.core.Keyword(null,"to-non-empty","to-non-empty",1774910489),new cljs.core.Keyword(null,"y-register","y-register",757629795));
}
} else {
cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(5));

return succulent.core.push.call(null,cljs.core.val,new cljs.core.Keyword(null,"to-fresh-sparkly","to-fresh-sparkly",262748089),new cljs.core.Keyword(null,"x-register","x-register",-2027223306));
}
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"operator","operator",-1860875338))){
if(cljs.core.empty_QMARK_.call(null,ans)){
if(cljs.core.empty_QMARK_.call(null,y)){
if(cljs.core.empty_QMARK_.call(null,op)){
if(cljs.core.empty_QMARK_.call(null,x)){
cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(4));

return succulent.core.push.call(null,"",new cljs.core.Keyword(null,"nothin-baby","nothin-baby",-1423848032),new cljs.core.Keyword(null,"shhh-just-the-wind","shhh-just-the-wind",62705193));
} else {
cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(2));

return succulent.core.push.call(null,cljs.core.val,new cljs.core.Keyword(null,"to-empty","to-empty",111633409),new cljs.core.Keyword(null,"op-register","op-register",859209393));
}
} else {
cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(2));

return succulent.core.push.call(null,cljs.core.val,new cljs.core.Keyword(null,"to-non-empty","to-non-empty",1774910489),new cljs.core.Keyword(null,"op-register","op-register",859209393));
}
} else {
cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(6));

return succulent.core.push.call(null,cljs.core.val,new cljs.core.Keyword(null,"to-fully-evaluated","to-fully-evaluated",453468989),new cljs.core.Keyword(null,"op-register","op-register",859209393));
}
} else {
cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(8));

return succulent.core.push.call(null,cljs.core.val,new cljs.core.Keyword(null,"to-previously-evaluated","to-previously-evaluated",-431967995),new cljs.core.Keyword(null,"op-register","op-register",859209393));
}
} else {
if(cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"equals","equals",-463033970))){
if(cljs.core.empty_QMARK_.call(null,ans)){
if(cljs.core.empty_QMARK_.call(null,y)){
if(cljs.core.empty_QMARK_.call(null,op)){
if(cljs.core.empty_QMARK_.call(null,x)){
cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(2));

return succulent.core.push.call(null,"",new cljs.core.Keyword(null,"nothin-baby","nothin-baby",-1423848032),new cljs.core.Keyword(null,"shhh-just-the-wind","shhh-just-the-wind",62705193));
} else {
cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(10));

return succulent.core.push.call(null,cljs.core.val,new cljs.core.Keyword(null,"to-unevaluated","to-unevaluated",981072364),new cljs.core.Keyword(null,"output-register","output-register",-153573239));
}
} else {
cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(10));

return succulent.core.push.call(null,cljs.core.val,new cljs.core.Keyword(null,"to-unevaluated","to-unevaluated",981072364),new cljs.core.Keyword(null,"output-register","output-register",-153573239));
}
} else {
cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(7));

return succulent.core.push.call(null,cljs.core.val,new cljs.core.Keyword(null,"to-fully-evaluated","to-fully-evaluated",453468989),new cljs.core.Keyword(null,"output-register","output-register",-153573239));
}
} else {
cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null),(2));

return succulent.core.push.call(null,"",new cljs.core.Keyword(null,"nothin-baby","nothin-baby",-1423848032),new cljs.core.Keyword(null,"shhh-just-the-wind","shhh-just-the-wind",62705193));
}
} else {
return null;
}
}
}
});
succulent.core.opcode = cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (e){
succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"x","x",2099068185));

return succulent.core.put.call(null,e,new cljs.core.Keyword(null,"current-target","current-target",34322910));
}),(function (e){
succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"y","y",-1757859776));

return succulent.core.put.call(null,e,new cljs.core.Keyword(null,"current-target","current-target",34322910));
}),(function (e){
return succulent.core.put.call(null,e,new cljs.core.Keyword(null,"control-bus","control-bus",762248216));
}),(function (e){
return succulent.core.shunt.call(null,e,new cljs.core.Keyword(null,"current-target","current-target",34322910));
}),(function (e){
return succulent.core.shunt.call(null,e,new cljs.core.Keyword(null,"current-target","current-target",34322910));
}),(function (e){
succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"result","result",1415092211));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"y","y",-1757859776));

succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"x","x",2099068185));

return succulent.core.put.call(null,e,new cljs.core.Keyword(null,"current-target","current-target",34322910));
}),(function (e){
if(cljs.core.truth_(succulent.core.can_evaluate_QMARK_.call(null))){
succulent.core.put.call(null,cljs.core.apply.call(null,succulent.core.dispatch.call(null,succulent.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseFloat(succulent.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null))),parseFloat(succulent.core.show.call(null,new cljs.core.Symbol(null,"y","y",-117328249,null)))], null)),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

succulent.core.put.call(null,succulent.core.show.call(null,new cljs.core.Symbol(null,"data-bus","data-bus",1489615543,null)),new cljs.core.Keyword(null,"primary-register","primary-register",700228088));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"result","result",1415092211));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"y","y",-1757859776));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));

succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"x","x",2099068185));

return succulent.core.put.call(null,e,new cljs.core.Keyword(null,"control-bus","control-bus",762248216));
} else {
return null;
}
}),(function (){
if(cljs.core.truth_(succulent.core.can_evaluate_QMARK_.call(null))){
succulent.core.put.call(null,cljs.core.apply.call(null,succulent.core.dispatch.call(null,succulent.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseFloat(succulent.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null))),parseFloat(succulent.core.show.call(null,new cljs.core.Symbol(null,"y","y",-117328249,null)))], null)),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"y","y",-1757859776));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));

return succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"result","result",1415092211));
} else {
return null;
}
}),(function (e){
succulent.core.put.call(null,succulent.core.show.call(null,new cljs.core.Symbol(null,"data-bus","data-bus",1489615543,null)),new cljs.core.Keyword(null,"primary-register","primary-register",700228088));

succulent.core.put.call(null,e,new cljs.core.Keyword(null,"control-bus","control-bus",762248216));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"result","result",1415092211));

return succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"x","x",2099068185));
}),(function (){
succulent.core.put.call(null,succulent.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

return succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"result","result",1415092211));
}),(function (){
succulent.core.put.call(null,succulent.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Keyword(null,"data-bus","data-bus",-150915984));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"x","x",2099068185));

succulent.core.flushRegister.call(null,new cljs.core.Keyword(null,"op","op",-1882987955));

return succulent.core.divert_route.call(null,new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"result","result",1415092211));
})], null));
succulent.core.shortbus = (function succulent$core$shortbus(num){
var address_bus = succulent.core.show.call(null,new cljs.core.Symbol(null,"address-bus","address-bus",578829112,null));
var control_bus = succulent.core.show.call(null,new cljs.core.Symbol(null,"control-bus","control-bus",-1892187553,null));
var data_bus = succulent.core.show.call(null,new cljs.core.Symbol(null,"data-bus","data-bus",1489615543,null));
var key_in = succulent.core.show.call(null,new cljs.core.Symbol(null,"key-in","key-in",1778288722,null));
var x = succulent.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null));
var y = succulent.core.show.call(null,new cljs.core.Symbol(null,"y","y",-117328249,null));
var op = succulent.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null));
var ans = succulent.core.show.call(null,new cljs.core.Symbol(null,"result","result",-1239343558,null));
cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opval","opval",-1758688436)], null),num);

if(cljs.core.truth_(succulent.core.num_QMARK_.call(null,num))){
if(cljs.core.empty_QMARK_.call(null,ans)){
if(cljs.core.empty_QMARK_.call(null,y)){
if(cljs.core.empty_QMARK_.call(null,op)){
if(cljs.core.empty_QMARK_.call(null,x)){
return cljs.core.apply.call(null,succulent.core.opcode.call(null,(0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
} else {
return cljs.core.apply.call(null,succulent.core.opcode.call(null,(3)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
}
} else {
return cljs.core.apply.call(null,succulent.core.opcode.call(null,(1)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
}
} else {
return cljs.core.apply.call(null,succulent.core.opcode.call(null,(4)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
}
} else {
return cljs.core.apply.call(null,succulent.core.opcode.call(null,(5)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
}
} else {
if(cljs.core.truth_(succulent.core.shift_QMARK_.call(null,num))){
return cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null),true);
} else {
if(cljs.core.truth_(succulent.core.unshift_QMARK_.call(null,num))){
return cljs.core.swap_BANG_.call(null,succulent.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null),false);
} else {
if(cljs.core.truth_(succulent.core.operator_QMARK_.call(null,num))){
if(cljs.core.empty_QMARK_.call(null,ans)){
if(cljs.core.empty_QMARK_.call(null,y)){
if(cljs.core.empty_QMARK_.call(null,op)){
if(cljs.core.empty_QMARK_.call(null,x)){
return cljs.core.apply.call(null,succulent.core.opcode.call(null,(-1)),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.core.apply.call(null,succulent.core.opcode.call(null,(2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
}
} else {
return cljs.core.apply.call(null,succulent.core.opcode.call(null,(2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
}
} else {
return cljs.core.apply.call(null,succulent.core.opcode.call(null,(6)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
}
} else {
return cljs.core.apply.call(null,succulent.core.opcode.call(null,(8)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null));
}
} else {
if(cljs.core.truth_(succulent.core.eval_QMARK_.call(null,cljs.core.val))){
if(cljs.core.empty_QMARK_.call(null,ans)){
if(cljs.core.empty_QMARK_.call(null,y)){
if(cljs.core.empty_QMARK_.call(null,op)){
if(cljs.core.empty_QMARK_.call(null,x)){
return cljs.core.apply.call(null,succulent.core.opcode.call(null,(-1)),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.core.apply.call(null,succulent.core.opcode.call(null,(10)),cljs.core.PersistentVector.EMPTY);
}
} else {
return cljs.core.apply.call(null,succulent.core.opcode.call(null,(11)),cljs.core.PersistentVector.EMPTY);
}
} else {
return cljs.core.apply.call(null,succulent.core.opcode.call(null,(7)),cljs.core.PersistentVector.EMPTY);
}
} else {
return cljs.core.apply.call(null,succulent.core.opcode.call(null,(-1)),cljs.core.PersistentVector.EMPTY);
}
} else {
return null;
}
}
}
}
}
});
succulent.core.butt_stuff = (function succulent$core$butt_stuff(arg){
cljs.core.swap_BANG_.call(null,succulent.core.keyboard_input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null),[cljs.core.str(arg)].join(''));

return succulent.core.bus_driver.call(null,arg);
});
succulent.core.a_simple_stateful_object = (function succulent$core$a_simple_stateful_object(app_state,input){
var target_register = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null));
return React.createElement("div",null,React.createElement("div",null,(function (){var attrs38374 = om_bootstrap.random.well.call(null,cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_register], null)))].join(''));
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs38374))?sablono.interpreter.attributes.call(null,attrs38374):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs38374))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38374)], null))));
})(),React.createElement("h3",null,React.createElement("button",({"href": "#", "onClick": ((function (target_register){
return (function (){
return succulent.core.butt_stuff.call(null,(1));
});})(target_register))
}),"1")," ",React.createElement("button",({"href": "#", "onClick": ((function (target_register){
return (function (){
return succulent.core.butt_stuff.call(null,(2));
});})(target_register))
}),"2")," ",React.createElement("button",({"href": "#", "onClick": ((function (target_register){
return (function (){
return succulent.core.butt_stuff.call(null,(3));
});})(target_register))
}),"3")," ",React.createElement("button",({"href": "#", "onClick": ((function (target_register){
return (function (){
return succulent.core.butt_stuff.call(null,"add");
});})(target_register))
}),"+")," ",React.createElement("button",({"href": "#", "onClick": ((function (target_register){
return (function (){
return succulent.core.butt_stuff.call(null,"divide");
});})(target_register))
}),"/")," "),React.createElement("h3",null,React.createElement("button",({"href": "#", "onClick": ((function (target_register){
return (function (){
return succulent.core.butt_stuff.call(null,(4));
});})(target_register))
}),"4")," ",React.createElement("button",({"href": "#", "onClick": ((function (target_register){
return (function (){
return succulent.core.butt_stuff.call(null,(5));
});})(target_register))
}),"5")," ",React.createElement("button",({"href": "#", "onClick": ((function (target_register){
return (function (){
return succulent.core.butt_stuff.call(null,(6));
});})(target_register))
}),"6")," ",React.createElement("button",({"href": "#", "onClick": ((function (target_register){
return (function (){
return succulent.core.butt_stuff.call(null,"subtract");
});})(target_register))
}),"-")," ",React.createElement("button",({"href": "#", "onClick": ((function (target_register){
return (function (){
return succulent.core.butt_stuff.call(null,"multiply");
});})(target_register))
}),"*")," "),React.createElement("h3",null,React.createElement("button",({"href": "#", "onClick": ((function (target_register){
return (function (){
return succulent.core.butt_stuff.call(null,(7));
});})(target_register))
}),"7")," ",React.createElement("button",({"href": "#", "onClick": ((function (target_register){
return (function (){
return succulent.core.butt_stuff.call(null,(8));
});})(target_register))
}),"8")," ",React.createElement("button",({"href": "#", "onClick": ((function (target_register){
return (function (){
return succulent.core.butt_stuff.call(null,(9));
});})(target_register))
}),"9")," ",React.createElement("button",({"href": "#", "onClick": ((function (target_register){
return (function (){
return succulent.core.butt_stuff.call(null,"equals");
});})(target_register))
}),"=")," ",React.createElement("button",({"href": "#", "onClick": ((function (target_register){
return (function (){
return succulent.core.butt_stuff.call(null,"clear");
});})(target_register))
}),"clear")," "),React.createElement("div",null,React.createElement("p",null,"")),sablono.interpreter.interpret.call(null,om_bootstrap.table.table.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"striped?","striped?",-797214979),true,new cljs.core.Keyword(null,"bordered?","bordered?",562358476),true,new cljs.core.Keyword(null,"condensed?","condensed?",-109797520),false,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),true], null),om_tools.dom.element.call(null,React.DOM.thead,cljs.core.apply.call(null,React.DOM.tr,({"className": "col-md-*"}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.th(({"width": (30)}),"Inpu Monad: "),React.DOM.th(({"width": (100)}),"Current key: ")],null)))),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.tbody,om_tools.dom.element.call(null,React.DOM.tr,om_tools.dom.element.call(null,React.DOM.td,React.DOM.code(({}),"State Register:"),cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null)))].join(''),cljs.core.PersistentVector.EMPTY)],null))),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.tr,om_tools.dom.element.call(null,React.DOM.td,React.DOM.code(({}),"Shift key:"),cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,cljs.core.apply.call(null,React.DOM.code,({}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null)))].join('')],null)))),cljs.core.PersistentVector.EMPTY)],null))),om_tools.dom.element.call(null,React.DOM.tr,om_tools.dom.element.call(null,React.DOM.td,React.DOM.code(({}),"Has interacted? "),cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.td,cljs.core.apply.call(null,React.DOM.code,({}),cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"has-interacted","has-interacted",1098167656)], null)))].join('')],null)))),cljs.core.PersistentVector.EMPTY)],null)))],null)))))));
});
succulent.core.stringnums = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3","4","5","6","7","8","9","0"], null));
succulent.core.stringops = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+","-","/","*"], null));
succulent.core.ascii_number_QMARK_ = (function succulent$core$ascii_number_QMARK_(ascii_code){
return ((ascii_code < (58))) && ((ascii_code > (47)));
});
succulent.core.ascii_shift_QMARK_ = (function succulent$core$ascii_shift_QMARK_(ascii_code){
return cljs.core._EQ_.call(null,(16),ascii_code);
});
succulent.core.convert_to_int = (function succulent$core$convert_to_int(ascii_code){
return (ascii_code - (48));
});
succulent.core.NaN_QMARK_ = (function succulent$core$NaN_QMARK_(e){
var ch_38377 = e.key;
parseInt(ch_38377);

return isNaN();
});
succulent.core.numeric_QMARK_ = (function succulent$core$numeric_QMARK_(e){
return cljs.core.complement.call(null,succulent.core.NaN_QMARK_.call(null,e));
});
succulent.core.notop_QMARK_ = (function succulent$core$notop_QMARK_(ascii_code){
return cljs.core.not_any_QMARK_.call(null,(function (p1__38378_SHARP_){
return cljs.core._EQ_.call(null,ascii_code,p1__38378_SHARP_);
}),cljs.core.list((42),(43),(45),(47)));
});
succulent.core.op_QMARK_ = (function succulent$core$op_QMARK_(ascii_code){
return cljs.core.complement.call(null,succulent.core.notop_QMARK_.call(null,ascii_code));
});
succulent.core.tag = (function succulent$core$tag(ascii_code){
var num = ascii_code;
var operators = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(43),null,(47),null,(45),null,(42),null], null), null);
var numbers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(54),null,(48),null,(50),null,(56),null,(51),null,(57),null,(53),null,(52),null,(49),null], null), null);
var equals = (61);
if(cljs.core.contains_QMARK_.call(null,operators,num)){
return new cljs.core.Keyword(null,"operator","operator",-1860875338);
} else {
if(cljs.core.contains_QMARK_.call(null,numbers,num)){
return new cljs.core.Keyword(null,"number","number",1570378438);
} else {
if(cljs.core._EQ_.call(null,equals,num)){
return new cljs.core.Keyword(null,"equals","equals",-463033970);
} else {
return "Value not in ascii range: ".call(null,ascii_code);

}
}
}
});
window.addEventListener("keypress",(function (e){
var character = e.key;
var ascii_code = e.keyCode;
var keyCode = e.code;
var is_number_QMARK_ = cljs.core.not.call(null,isNaN(parseInt(character)));
var is_operator_QMARK_ = succulent.core.op_QMARK_.call(null,ascii_code);
cljs.core.swap_BANG_.call(null,succulent.core.keyboard_input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null),character);

cljs.core.swap_BANG_.call(null,succulent.core.keyboard_input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ascii-code","ascii-code",2020922785)], null),String(ascii_code));

cljs.core.swap_BANG_.call(null,succulent.core.keyboard_input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),String(succulent.core.tag.call(null,ascii_code)));

console.log("ascii-code: ",ascii_code," character: ",character," number? ",cljs.core.not.call(null,isNaN(parseInt(character))));

console.log("keyboard-input:   [:key-id] ",cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null)),", [:ascii-code] ",cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ascii-code","ascii-code",2020922785)], null)),", [:tag] ",cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223)], null)));

return succulent.core.shortbus.call(null,character);
}));
succulent.core.render_BANG_ = (function succulent$core$render_BANG_(){
return ReactDOM.render(succulent.core.a_simple_stateful_object.call(null,succulent.core.app_state,succulent.core.keyboard_input),document.getElementById("app"));
});
succulent.core.quil_setup = (function succulent$core$quil_setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
succulent.core.x_scalar = 22.2222;
succulent.core.y_scalar = 22.2727;
succulent.core.quil_update_state = (function succulent$core$quil_update_state(state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255))], null);
});
succulent.core.op_sentinel_x = ((15) * succulent.core.x_scalar);
succulent.core.op_sentinel_y = (7.33 * succulent.core.y_scalar);
succulent.core.targ_x = ((15) * succulent.core.x_scalar);
succulent.core.targ_y = (11.75 * succulent.core.y_scalar);
succulent.core.line = (function succulent$core$line(line_num){
var line_height = 0.55;
return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2.5 * succulent.core.x_scalar),((6.75 + (line_num * line_height)) * succulent.core.y_scalar)], null)));
});
succulent.core.translate_target = (function succulent$core$translate_target(){
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null)),new cljs.core.Keyword(null,"x","x",2099068185))){
return "r1";
} else {
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null)),new cljs.core.Keyword(null,"y","y",-1757859776))){
return "r2";
} else {
return "r3";
}
}
});
succulent.core.draw_rectangle = (function succulent$core$draw_rectangle(x1,y1,x2,y2){
return cljs.core.comp.call(null,quil.core.rect.call(null,(x1 * succulent.core.x_scalar),(y1 * succulent.core.y_scalar),(x2 * succulent.core.x_scalar),(y2 * succulent.core.y_scalar)));
});
succulent.core.draw_triangle = (function succulent$core$draw_triangle(ordinality){
var x_coords = cljs.core.map.call(null,(function (x){
return (x + (ordinality * (3)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2.25,2.5,(2)], null));
var y_coords = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),4.5,4.5], null);
return cljs.core.comp.call(null,quil.core.triangle.call(null,(cljs.core.nth.call(null,x_coords,(0)) * succulent.core.x_scalar),(cljs.core.nth.call(null,y_coords,(0)) * succulent.core.y_scalar),(cljs.core.nth.call(null,x_coords,(1)) * succulent.core.x_scalar),(cljs.core.nth.call(null,y_coords,(1)) * succulent.core.y_scalar),(cljs.core.nth.call(null,x_coords,(2)) * succulent.core.x_scalar),(cljs.core.nth.call(null,y_coords,(2)) * succulent.core.y_scalar)));
});
succulent.core.draw_circle = (function succulent$core$draw_circle(cx,cy,r){
return cljs.core.comp.call(null,quil.core.ellipse.call(null,(cx * succulent.core.x_scalar),(cy * succulent.core.y_scalar),(r * ((succulent.core.x_scalar + succulent.core.y_scalar) / (2))),(r * ((succulent.core.x_scalar + succulent.core.y_scalar) / (2)))));
});
succulent.core.draw_caption = (function succulent$core$draw_caption(s,x1,y1){
return cljs.core.comp.call(null,quil.core.text.call(null,s,(x1 * succulent.core.x_scalar),(y1 * succulent.core.y_scalar)));
});
succulent.core.print_to_console = (function succulent$core$print_to_console(var_args){
var args__25833__auto__ = [];
var len__25826__auto___38380 = arguments.length;
var i__25827__auto___38381 = (0);
while(true){
if((i__25827__auto___38381 < len__25826__auto___38380)){
args__25833__auto__.push((arguments[i__25827__auto___38381]));

var G__38382 = (i__25827__auto___38381 + (1));
i__25827__auto___38381 = G__38382;
continue;
} else {
}
break;
}

var argseq__25834__auto__ = ((((0) < args__25833__auto__.length))?(new cljs.core.IndexedSeq(args__25833__auto__.slice((0)),(0),null)):null);
return succulent.core.print_to_console.cljs$core$IFn$_invoke$arity$variadic(argseq__25834__auto__);
});

succulent.core.print_to_console.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.map_indexed.call(null,(function (line_number,txt){
return cljs.core.comp.call(null,quil.core.text.call(null,txt,cljs.core.get.call(null,succulent.core.line.call(null,line_number),new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core.get.call(null,succulent.core.line.call(null,line_number),new cljs.core.Keyword(null,"y","y",-1757859776))));
}),args);
});

succulent.core.print_to_console.cljs$lang$maxFixedArity = (0);

succulent.core.print_to_console.cljs$lang$applyTo = (function (seq38379){
return succulent.core.print_to_console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38379));
});

succulent.core.quil_draw_state = (function succulent$core$quil_draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var meta_bounding_box = quil.core.rect.call(null,(0.25 * succulent.core.x_scalar),(4.5 * succulent.core.y_scalar),(35.5 * succulent.core.x_scalar),(10.5 * succulent.core.y_scalar));
var input_bounding_box = quil.core.rect.call(null,((19) * succulent.core.x_scalar),((16) * succulent.core.y_scalar),((7) * succulent.core.x_scalar),((5) * succulent.core.y_scalar));
var output_bounding_box = quil.core.rect.call(null,((28) * succulent.core.x_scalar),((16) * succulent.core.y_scalar),((7) * succulent.core.x_scalar),((5) * succulent.core.y_scalar));
var acu_bounding_box = quil.core.rect.call(null,((19) * succulent.core.x_scalar),((5) * succulent.core.y_scalar),((16) * succulent.core.x_scalar),(9.5 * succulent.core.y_scalar));
var accumulator_box = quil.core.rect.call(null,((20) * succulent.core.x_scalar),((9) * succulent.core.y_scalar),((14) * succulent.core.x_scalar),((5) * succulent.core.y_scalar));
var cpu_bounding_box = quil.core.rect.call(null,((1) * succulent.core.x_scalar),((5) * succulent.core.y_scalar),((16) * succulent.core.x_scalar),(9.5 * succulent.core.y_scalar));
var op_box = quil.core.rect.call(null,((20) * succulent.core.x_scalar),(6.5 * succulent.core.y_scalar),((14) * succulent.core.x_scalar),(1.75 * succulent.core.y_scalar));
var instruction1 = quil.core.rect.call(null,(0.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction2 = quil.core.rect.call(null,(3.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction3 = quil.core.rect.call(null,(6.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction4 = quil.core.rect.call(null,(9.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction5 = quil.core.rect.call(null,(12.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction6 = quil.core.rect.call(null,(15.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction7 = quil.core.rect.call(null,(18.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction8 = quil.core.rect.call(null,(21.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction9 = quil.core.rect.call(null,(24.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction10 = quil.core.rect.call(null,(27.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var instruction11 = quil.core.rect.call(null,(30.5 * succulent.core.x_scalar),((1) * succulent.core.y_scalar),((3) * succulent.core.x_scalar),((3) * succulent.core.y_scalar));
var code = cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null));
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200)], null));

quil.core.rect.call(null,((19) * succulent.core.x_scalar),((16) * succulent.core.y_scalar),((7) * succulent.core.x_scalar),((5) * succulent.core.y_scalar));

quil.core.rect.call(null,((28) * succulent.core.x_scalar),((16) * succulent.core.y_scalar),((7) * succulent.core.x_scalar),((5) * succulent.core.y_scalar));

quil.core.rect.call(null,((19) * succulent.core.x_scalar),((5) * succulent.core.y_scalar),((16) * succulent.core.x_scalar),(9.5 * succulent.core.y_scalar));

quil.core.rect.call(null,((20) * succulent.core.x_scalar),((9) * succulent.core.y_scalar),((14) * succulent.core.x_scalar),((5) * succulent.core.y_scalar));

quil.core.rect.call(null,((1) * succulent.core.x_scalar),((5) * succulent.core.y_scalar),((16) * succulent.core.x_scalar),(9.5 * succulent.core.y_scalar));

quil.core.rect.call(null,((20) * succulent.core.x_scalar),(6.5 * succulent.core.y_scalar),((14) * succulent.core.x_scalar),(1.75 * succulent.core.y_scalar));

quil.core.rect.call(null,((10) * succulent.core.x_scalar),(8.33 * succulent.core.y_scalar),((4) * succulent.core.x_scalar),(2.41 * succulent.core.y_scalar));

quil.core.rect.call(null,((2) * succulent.core.x_scalar),(6.5 * succulent.core.y_scalar),((7) * succulent.core.x_scalar),(7.5 * succulent.core.y_scalar));

cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(63),(2),(0)], null));

quil.core.line.call(null,((12) * succulent.core.x_scalar),succulent.core.op_sentinel_y,succulent.core.op_sentinel_x,succulent.core.op_sentinel_y);

quil.core.line.call(null,((12) * succulent.core.x_scalar),succulent.core.op_sentinel_y,((12) * succulent.core.x_scalar),(8.33 * succulent.core.y_scalar));

quil.core.line.call(null,((12) * succulent.core.x_scalar),succulent.core.targ_y,succulent.core.targ_x,succulent.core.targ_y);

quil.core.line.call(null,((12) * succulent.core.x_scalar),succulent.core.targ_y,((12) * succulent.core.x_scalar),(10.75 * succulent.core.y_scalar));

if(cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shift-in","shift-in",744085234)], null)) === true){
quil.core.line.call(null,((20) * succulent.core.x_scalar),((16) * succulent.core.y_scalar),((25) * succulent.core.x_scalar),((14) * succulent.core.y_scalar));
} else {
quil.core.line.call(null,((22) * succulent.core.x_scalar),((16) * succulent.core.y_scalar),((27) * succulent.core.x_scalar),((14) * succulent.core.y_scalar));
}

quil.core.line.call(null,((32) * succulent.core.x_scalar),((16) * succulent.core.y_scalar),((27) * succulent.core.x_scalar),((14) * succulent.core.y_scalar));

if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null)),new cljs.core.Keyword(null,"x","x",2099068185))){
quil.core.ellipse.call(null,(21.25 * succulent.core.x_scalar),(10.85 * succulent.core.y_scalar),(0.25 * succulent.core.x_scalar),(0.25 * succulent.core.y_scalar));

quil.core.line.call(null,((15) * succulent.core.x_scalar),(11.75 * succulent.core.y_scalar),((20) * succulent.core.x_scalar),(10.75 * succulent.core.y_scalar));
} else {
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null)),new cljs.core.Keyword(null,"y","y",-1757859776))){
quil.core.ellipse.call(null,(21.25 * succulent.core.x_scalar),(11.85 * succulent.core.y_scalar),(0.25 * succulent.core.x_scalar),(0.25 * succulent.core.y_scalar));

quil.core.line.call(null,((15) * succulent.core.x_scalar),(11.75 * succulent.core.y_scalar),((20) * succulent.core.x_scalar),(11.75 * succulent.core.y_scalar));
} else {
quil.core.ellipse.call(null,(21.25 * succulent.core.x_scalar),(12.85 * succulent.core.y_scalar),(0.25 * succulent.core.x_scalar),(0.25 * succulent.core.y_scalar));

quil.core.line.call(null,((15) * succulent.core.x_scalar),(11.75 * succulent.core.y_scalar),((20) * succulent.core.x_scalar),(12.75 * succulent.core.y_scalar));
}
}

quil.core.line.call(null,succulent.core.op_sentinel_x,succulent.core.op_sentinel_y,((20) * succulent.core.x_scalar),succulent.core.op_sentinel_y);

if(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"op","op",-1882987955)], null)))){
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(340),(240)], null));
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(250),(340)], null));
}

quil.core.ellipse.call(null,succulent.core.op_sentinel_x,succulent.core.op_sentinel_y,((2) * succulent.core.x_scalar),((2) * succulent.core.y_scalar));

if(!(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1),(5)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null))))){
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(340),(240)], null));
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(250),(340)], null));
}

quil.core.ellipse.call(null,succulent.core.targ_x,succulent.core.targ_y,((2) * succulent.core.x_scalar),((2) * succulent.core.y_scalar));

cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(63),(2),(0)], null));

quil.core.text.call(null,"INPUT ",(19.66 * succulent.core.x_scalar),((17) * succulent.core.y_scalar));

quil.core.text.call(null,[cljs.core.str("keyboard:")].join(''),(20.33 * succulent.core.x_scalar),((18) * succulent.core.y_scalar));

quil.core.text.call(null,[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null)))].join(''),(23.33 * succulent.core.x_scalar),((18) * succulent.core.y_scalar));

quil.core.text.call(null,[cljs.core.str("ascii code:")].join(''),(20.33 * succulent.core.x_scalar),((19) * succulent.core.y_scalar));

quil.core.text.call(null,[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ascii-code","ascii-code",2020922785)], null)))].join(''),(23.33 * succulent.core.x_scalar),((19) * succulent.core.y_scalar));

quil.core.text.call(null,"OUTPUT ",(28.66 * succulent.core.x_scalar),((17) * succulent.core.y_scalar));

quil.core.text.call(null,[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null))], null)))].join(''),(29.33 * succulent.core.x_scalar),((18) * succulent.core.y_scalar));

quil.core.text.call(null,"ACCUMULATOR ",((21) * succulent.core.x_scalar),((10) * succulent.core.y_scalar));

quil.core.text.call(null,"r1",((22) * succulent.core.x_scalar),((11) * succulent.core.y_scalar));

quil.core.text.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"x","x",2099068185)], null)),((23) * succulent.core.x_scalar),((11) * succulent.core.y_scalar));

quil.core.text.call(null,"r2",((22) * succulent.core.x_scalar),((12) * succulent.core.y_scalar));

quil.core.text.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"y","y",-1757859776)], null)),((23) * succulent.core.x_scalar),((12) * succulent.core.y_scalar));

quil.core.text.call(null,"r3",((22) * succulent.core.x_scalar),((13) * succulent.core.y_scalar));

quil.core.text.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"result","result",1415092211)], null)),((23) * succulent.core.x_scalar),((13) * succulent.core.y_scalar));

quil.core.text.call(null,"ARITHMETIC CONTROL UNIT ",((20) * succulent.core.x_scalar),((6) * succulent.core.y_scalar));

quil.core.text.call(null,"op",((22) * succulent.core.x_scalar),(7.5 * succulent.core.y_scalar));

quil.core.text.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"op","op",-1882987955)], null)),((23) * succulent.core.x_scalar),(7.5 * succulent.core.y_scalar));

quil.core.text.call(null,"CONTROL UNIT",((2) * succulent.core.x_scalar),((6) * succulent.core.y_scalar));

quil.core.text.call(null,"INSTRUCTION REGISTERS",((1) * succulent.core.x_scalar),(0.85 * succulent.core.y_scalar));

quil.core.text.call(null,"0",((3) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"1",((6) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"2",((9) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"3",((12) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"4",((15) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"5",((18) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"6",((21) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"7",((24) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"8",((27) * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"9",(29.75 * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"10",(32.8 * succulent.core.x_scalar),(3.8 * succulent.core.y_scalar));

quil.core.text.call(null,"OPCODE",(10.5 * succulent.core.x_scalar),((9) * succulent.core.y_scalar));

quil.core.text.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opcode","opcode",-1329442167)], null)),(11.5 * succulent.core.x_scalar),(10.25 * succulent.core.y_scalar));

if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null)),new cljs.core.Keyword(null,"x","x",2099068185))){
quil.core.text.call(null,"r1",(14.83 * succulent.core.x_scalar),(11.89 * succulent.core.y_scalar));
} else {
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-target","current-target",34322910)], null)),new cljs.core.Keyword(null,"y","y",-1757859776))){
quil.core.text.call(null,"r2",(14.83 * succulent.core.x_scalar),(11.89 * succulent.core.y_scalar));
} else {
quil.core.text.call(null,"r3",(14.83 * succulent.core.x_scalar),(11.89 * succulent.core.y_scalar));
}
}

if(cljs.core._EQ_.call(null,code,(0))){
succulent.core.draw_triangle.call(null,(0));

return quil.core.text.call(null,succulent.core.print_to_console.call(null," ",";the first action"," ","(apply (opcode 0) [num])","=> loading...","...",cljs.core.apply.call(null,cljs.core.str,"now putting '",cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null)),"' in :r1")),(1),(1));
} else {
if(cljs.core._EQ_.call(null,code,(3))){
succulent.core.draw_triangle.call(null,(3));

return quil.core.text.call(null,succulent.core.print_to_console.call(null," ",";keep stringing to","  target register"," ","(apply (opcode 3) [num]","=> loading...","...",cljs.core.apply.call(null,cljs.core.str,"putting '",cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null)),"' in ",succulent.core.translate_target.call(null),"...")," ","update complete."),(1),(1));
} else {
if(cljs.core._EQ_.call(null,code,(1))){
succulent.core.draw_triangle.call(null,(1));

return quil.core.text.call(null,succulent.core.print_to_console.call(null," ",";switch register to r2","  ;and put val in r2"," ","(apply (opcode 1) [num]) ","=>  loading...","..."," ",cljs.core.apply.call(null,cljs.core.str,"putting '",cljs.core.get_in.call(null,cljs.core.deref.call(null,succulent.core.keyboard_input),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-id","key-id",433432263)], null)),"'","  in :r2...")," ","update complete."),(1),(1));
} else {
if(cljs.core._EQ_.call(null,code,(2))){
succulent.core.draw_triangle.call(null,(2));

return quil.core.text.call(null,succulent.core.print_to_console.call(null," ",";lock r1 and update the ","  cleared op reg"," ","(apply (opcode 2) [num]) ","=>  loading...","...",cljs.core.apply.call(null,cljs.core.str,"setting op to'",succulent.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null)),"'...")," ","update complete."),(1),(1));
} else {
if(cljs.core._EQ_.call(null,code,(6))){
succulent.core.draw_triangle.call(null,(6));

return quil.core.text.call(null,succulent.core.print_to_console.call(null," ",";chained expression","  (e.g. '5+4-7')"," ","(apply (opcode 6) [num]) ","=> loading..."," ","pushing vectorized ","      expression to r3...",cljs.core.apply.call(null,cljs.core.str,"r3 evaluates to '",succulent.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)),"'..."),cljs.core.apply.call(null,cljs.core.str,"copying '",succulent.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)),"' to locked r1..."),cljs.core.apply.call(null,cljs.core.str,"setting op to '",succulent.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null)),"'...")," ","evaluation complete."),(1),(1));
} else {
if(cljs.core._EQ_.call(null,code,(8))){
succulent.core.draw_triangle.call(null,(8));

return quil.core.text.call(null,succulent.core.print_to_console.call(null," ",";resume chaining a ","  previously evaluated","  expression"," ","(apply (opcode 8) [num]))","=> loading..."," ",[cljs.core.str("copying '"),cljs.core.str(succulent.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null))),cljs.core.str("' from r3 to locked r1...")].join(''),"now clearing r3...",cljs.core.apply.call(null,cljs.core.str,"setting op to '",succulent.core.show.call(null,new cljs.core.Symbol(null,"op","op",-242456428,null)),"'"),"evaluation complete."),(1),(1));
} else {
if(cljs.core._EQ_.call(null,code,(7))){
succulent.core.draw_triangle.call(null,(7));

return quil.core.text.call(null,succulent.core.print_to_console.call(null," ",";evaluate normally and","  flush the registers"," ","(apply (opcode 8) [num]))","=> loading..."," ","pushing (op r1 r2) to r3...",cljs.core.apply.call(null,cljs.core.str,"r3 evaluates to '",succulent.core.show.call(null,new cljs.core.Symbol(null,"result","result",-1239343558,null)),"'..."),"flushing the registers..."," ","evaluation complete."),(1),(1));
} else {
if(cljs.core._EQ_.call(null,code,(5))){
succulent.core.draw_triangle.call(null,(5));

return quil.core.text.call(null,succulent.core.print_to_console.call(null," ",";start a new expression"," ","(apply (opcode 5) [num])","=> loading...."," ","flushing r3...",cljs.core.apply.call(null,cljs.core.str,"now putting '",succulent.core.show.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)),"' in r1...")," ","update complete."),(1),(1));
} else {
if(cljs.core._EQ_.call(null,code,(10))){
succulent.core.draw_triangle.call(null,(10));

return quil.core.text.call(null,succulent.core.print_to_console.call(null," ",";bad expression","  flush registers but","  push r1 to r3"," ","(apply (opcode 10) [num]))","=> loading..."," ","pushing r1 to r3...","flushing the registers..."," ","update complete."),(1),(1));
} else {
return quil.core.text.call(null,succulent.core.print_to_console.call(null," ","[heavy breathing]"," "," "," ","listening to keyboard ","  for numbers..."),(1),(1));

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
succulent.core.input = (function succulent$core$input(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"succulent",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,succulent.core.quil_update_state))?(function() { 
var G__38383__delegate = function (args){
return cljs.core.apply.call(null,succulent.core.quil_update_state,args);
};
var G__38383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38384__i = 0, G__38384__a = new Array(arguments.length -  0);
while (G__38384__i < G__38384__a.length) {G__38384__a[G__38384__i] = arguments[G__38384__i + 0]; ++G__38384__i;}
  args = new cljs.core.IndexedSeq(G__38384__a,0);
} 
return G__38383__delegate.call(this,args);};
G__38383.cljs$lang$maxFixedArity = 0;
G__38383.cljs$lang$applyTo = (function (arglist__38385){
var args = cljs.core.seq(arglist__38385);
return G__38383__delegate(args);
});
G__38383.cljs$core$IFn$_invoke$arity$variadic = G__38383__delegate;
return G__38383;
})()
:succulent.core.quil_update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,succulent.core.quil_setup))?(function() { 
var G__38386__delegate = function (args){
return cljs.core.apply.call(null,succulent.core.quil_setup,args);
};
var G__38386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38387__i = 0, G__38387__a = new Array(arguments.length -  0);
while (G__38387__i < G__38387__a.length) {G__38387__a[G__38387__i] = arguments[G__38387__i + 0]; ++G__38387__i;}
  args = new cljs.core.IndexedSeq(G__38387__a,0);
} 
return G__38386__delegate.call(this,args);};
G__38386.cljs$lang$maxFixedArity = 0;
G__38386.cljs$lang$applyTo = (function (arglist__38388){
var args = cljs.core.seq(arglist__38388);
return G__38386__delegate(args);
});
G__38386.cljs$core$IFn$_invoke$arity$variadic = G__38386__delegate;
return G__38386;
})()
:succulent.core.quil_setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,succulent.core.quil_draw_state))?(function() { 
var G__38389__delegate = function (args){
return cljs.core.apply.call(null,succulent.core.quil_draw_state,args);
};
var G__38389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38390__i = 0, G__38390__a = new Array(arguments.length -  0);
while (G__38390__i < G__38390__a.length) {G__38390__a[G__38390__i] = arguments[G__38390__i + 0]; ++G__38390__i;}
  args = new cljs.core.IndexedSeq(G__38390__a,0);
} 
return G__38389__delegate.call(this,args);};
G__38389.cljs$lang$maxFixedArity = 0;
G__38389.cljs$lang$applyTo = (function (arglist__38391){
var args = cljs.core.seq(arglist__38391);
return G__38389__delegate(args);
});
G__38389.cljs$core$IFn$_invoke$arity$variadic = G__38389__delegate;
return G__38389;
})()
:succulent.core.quil_draw_state));
});
goog.exportSymbol('succulent.core.input', succulent.core.input);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__30240__30241__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__30240__30241__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),succulent.core.input,new cljs.core.Keyword(null,"host-id","host-id",742376279),"succulent"], null));
}
cljs.core.add_watch.call(null,succulent.core.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return succulent.core.render_BANG_.call(null);
}));
cljs.core.add_watch.call(null,succulent.core.keyboard_input,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return succulent.core.render_BANG_.call(null);
}));
succulent.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1478404006774