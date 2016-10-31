// Compiled by ClojureScript 1.9.227 {}
goog.provide('succulent.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om_tools.dom');
goog.require('om_bootstrap.grid');
goog.require('quil.core');
goog.require('reagent.core');
goog.require('sablono.core');
goog.require('quil.middleware');
goog.require('om.core');
goog.require('om_bootstrap.button');
goog.require('om_bootstrap.random');
goog.require('om_bootstrap.table');
console.log("Booted");
if(typeof succulent.core.todos !== 'undefined'){
} else {
succulent.core.todos = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
}
if(typeof succulent.core.counter !== 'undefined'){
} else {
succulent.core.counter = reagent.core.atom.call(null,(0));
}
succulent.core.add_todo = (function succulent$core$add_todo(text){
var id = cljs.core.swap_BANG_.call(null,succulent.core.counter,cljs.core.inc);
return cljs.core.swap_BANG_.call(null,succulent.core.todos,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),text,new cljs.core.Keyword(null,"done","done",-889844188),false], null));
});
succulent.core.toggle = (function succulent$core$toggle(id){
return cljs.core.swap_BANG_.call(null,succulent.core.todos,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"done","done",-889844188)], null),cljs.core.not);
});
succulent.core.save = (function succulent$core$save(id,title){
return cljs.core.swap_BANG_.call(null,succulent.core.todos,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null),title);
});
succulent.core.delete$ = (function succulent$core$delete(id){
return cljs.core.swap_BANG_.call(null,succulent.core.todos,cljs.core.dissoc,id);
});
succulent.core.mmap = (function succulent$core$mmap(m,f,a){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),f.call(null,a,m));
});
succulent.core.complete_all = (function succulent$core$complete_all(v){
return cljs.core.swap_BANG_.call(null,succulent.core.todos,succulent.core.mmap,cljs.core.map,(function (p1__14391_SHARP_){
return cljs.core.assoc_in.call(null,p1__14391_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"done","done",-889844188)], null),v);
}));
});
succulent.core.clear_done = (function succulent$core$clear_done(){
return cljs.core.swap_BANG_.call(null,succulent.core.todos,succulent.core.mmap,cljs.core.remove,(function (p1__14392_SHARP_){
return cljs.core.get_in.call(null,p1__14392_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"done","done",-889844188)], null));
}));
});
if(typeof succulent.core.init !== 'undefined'){
} else {
succulent.core.init = (function (){
succulent.core.add_todo.call(null,"Rename Cloact to Reagent");

succulent.core.add_todo.call(null,"Add undo demo");

succulent.core.add_todo.call(null,"Make all rendering async");

succulent.core.add_todo.call(null,"Allow any arguments to component functions");

return succulent.core.complete_all.call(null,true);
})()
;
}
succulent.core.todo_input = (function succulent$core$todo_input(p__14395){
var map__14402 = p__14395;
var map__14402__$1 = ((((!((map__14402 == null)))?((((map__14402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14402):map__14402);
var title = cljs.core.get.call(null,map__14402__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_save = cljs.core.get.call(null,map__14402__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_stop = cljs.core.get.call(null,map__14402__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = reagent.core.atom.call(null,title);
var stop = ((function (val,map__14402,map__14402__$1,title,on_save,on_stop){
return (function (){
cljs.core.reset_BANG_.call(null,val,"");

if(cljs.core.truth_(on_stop)){
return on_stop.call(null);
} else {
return null;
}
});})(val,map__14402,map__14402__$1,title,on_save,on_stop))
;
var save = ((function (val,stop,map__14402,map__14402__$1,title,on_save,on_stop){
return (function (){
var v = clojure.string.trim.call(null,[cljs.core.str(cljs.core.deref.call(null,val))].join(''));
if(!(cljs.core.empty_QMARK_.call(null,v))){
on_save.call(null,v);
} else {
}

return stop.call(null);
});})(val,stop,map__14402,map__14402__$1,title,on_save,on_stop))
;
return ((function (val,stop,save,map__14402,map__14402__$1,title,on_save,on_stop){
return (function (p__14404){
var map__14405 = p__14404;
var map__14405__$1 = ((((!((map__14405 == null)))?((((map__14405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14405):map__14405);
var id = cljs.core.get.call(null,map__14405__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__14405__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var placeholder = cljs.core.get.call(null,map__14405__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),save,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__14405,map__14405__$1,id,class$,placeholder,val,stop,save,map__14402,map__14402__$1,title,on_save,on_stop){
return (function (p1__14393_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__14393_SHARP_.target.value);
});})(map__14405,map__14405__$1,id,class$,placeholder,val,stop,save,map__14402,map__14402__$1,title,on_save,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (map__14405,map__14405__$1,id,class$,placeholder,val,stop,save,map__14402,map__14402__$1,title,on_save,on_stop){
return (function (p1__14394_SHARP_){
var G__14407 = p1__14394_SHARP_.which;
switch (G__14407) {
case (13):
return save.call(null);

break;
case (27):
return stop.call(null);

break;
default:
return null;

}
});})(map__14405,map__14405__$1,id,class$,placeholder,val,stop,save,map__14402,map__14402__$1,title,on_save,on_stop))
], null)], null);
});
;})(val,stop,save,map__14402,map__14402__$1,title,on_save,on_stop))
});
succulent.core.todo_edit = cljs.core.with_meta.call(null,succulent.core.todo_input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__14409_SHARP_){
return reagent.core.dom_node.call(null,p1__14409_SHARP_).focus();
})], null));
succulent.core.todo_stats = (function succulent$core$todo_stats(p__14410){
var map__14414 = p__14410;
var map__14414__$1 = ((((!((map__14414 == null)))?((((map__14414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14414):map__14414);
var filt = cljs.core.get.call(null,map__14414__$1,new cljs.core.Keyword(null,"filt","filt",169229082));
var active = cljs.core.get.call(null,map__14414__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var done = cljs.core.get.call(null,map__14414__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var props_for = ((function (map__14414,map__14414__$1,filt,active,done){
return (function (name){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,name,cljs.core.deref.call(null,filt)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__14414,map__14414__$1,filt,active,done){
return (function (){
return cljs.core.reset_BANG_.call(null,filt,name);
});})(map__14414,map__14414__$1,filt,active,done))
], null);
});})(map__14414,map__14414__$1,filt,active,done))
;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#todo-count","span#todo-count",-1116128108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active], null)," ",(function (){var G__14416 = active;
switch (G__14416) {
case (1):
return "item";

break;
default:
return "items";

}
})()," left"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#filters","ul#filters",-899831395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for.call(null,new cljs.core.Keyword(null,"all","all",892129742)),"All"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for.call(null,new cljs.core.Keyword(null,"active","active",1895962068)),"Active"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for.call(null,new cljs.core.Keyword(null,"done","done",-889844188)),"Completed"], null)], null)], null),(((done > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#clear-completed","button#clear-completed",-1698725142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),succulent.core.clear_done], null),"Clear completed ",done], null):null)], null);
});
succulent.core.todo_item = (function succulent$core$todo_item(){
var editing = reagent.core.atom.call(null,false);
return ((function (editing){
return (function (p__14422){
var map__14423 = p__14422;
var map__14423__$1 = ((((!((map__14423 == null)))?((((map__14423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14423):map__14423);
var id = cljs.core.get.call(null,map__14423__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var done = cljs.core.get.call(null,map__14423__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var title = cljs.core.get.call(null,map__14423__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str((cljs.core.truth_(done)?"completed ":null)),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,editing))?"editing":null))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),done,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__14423,map__14423__$1,id,done,title,editing){
return (function (){
return succulent.core.toggle.call(null,id);
});})(map__14423,map__14423__$1,id,done,title,editing))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__14423,map__14423__$1,id,done,title,editing){
return (function (){
return cljs.core.reset_BANG_.call(null,editing,true);
});})(map__14423,map__14423__$1,id,done,title,editing))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__14423,map__14423__$1,id,done,title,editing){
return (function (){
return succulent.core.delete$.call(null,id);
});})(map__14423,map__14423__$1,id,done,title,editing))
], null)], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,editing))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.todo_edit,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (map__14423,map__14423__$1,id,done,title,editing){
return (function (p1__14418_SHARP_){
return succulent.core.save.call(null,id,p1__14418_SHARP_);
});})(map__14423,map__14423__$1,id,done,title,editing))
,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),((function (map__14423,map__14423__$1,id,done,title,editing){
return (function (){
return cljs.core.reset_BANG_.call(null,editing,false);
});})(map__14423,map__14423__$1,id,done,title,editing))
], null)], null):null)], null);
});
;})(editing))
});
succulent.core.todo_app = (function succulent$core$todo_app(props){
var filt = reagent.core.atom.call(null,new cljs.core.Keyword(null,"all","all",892129742));
return ((function (filt){
return (function (){
var items = cljs.core.vals.call(null,cljs.core.deref.call(null,succulent.core.todos));
var done = cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"done","done",-889844188),items));
var active = (cljs.core.count.call(null,items) - done);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#todoapp","section#todoapp",41606040),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header#header","header#header",1650878621),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.todo_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"new-todo",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"on-save","on-save",1618176266),succulent.core.add_todo], null)], null)], null),(((cljs.core.count.call(null,items) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#main","section#main",559170339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#toggle-all","input#toggle-all",-512330812),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(active === (0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (items,done,active,filt){
return (function (){
return succulent.core.complete_all.call(null,(active > (0)));
});})(items,done,active,filt))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#todo-list","ul#todo-list",-1648361723),(function (){var iter__7184__auto__ = ((function (items,done,active,filt){
return (function succulent$core$todo_app_$_iter__14430(s__14431){
return (new cljs.core.LazySeq(null,((function (items,done,active,filt){
return (function (){
var s__14431__$1 = s__14431;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14431__$1);
if(temp__4657__auto__){
var s__14431__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14431__$2)){
var c__7182__auto__ = cljs.core.chunk_first.call(null,s__14431__$2);
var size__7183__auto__ = cljs.core.count.call(null,c__7182__auto__);
var b__14433 = cljs.core.chunk_buffer.call(null,size__7183__auto__);
if((function (){var i__14432 = (0);
while(true){
if((i__14432 < size__7183__auto__)){
var todo = cljs.core._nth.call(null,c__7182__auto__,i__14432);
cljs.core.chunk_append.call(null,b__14433,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.todo_item,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__14435 = (i__14432 + (1));
i__14432 = G__14435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14433),succulent$core$todo_app_$_iter__14430.call(null,cljs.core.chunk_rest.call(null,s__14431__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14433),null);
}
} else {
var todo = cljs.core.first.call(null,s__14431__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.todo_item,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),succulent$core$todo_app_$_iter__14430.call(null,cljs.core.rest.call(null,s__14431__$2)));
}
} else {
return null;
}
break;
}
});})(items,done,active,filt))
,null,null));
});})(items,done,active,filt))
;
return iter__7184__auto__.call(null,cljs.core.filter.call(null,(function (){var G__14434 = (((cljs.core.deref.call(null,filt) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,filt).fqn:null);
switch (G__14434) {
case "active":
return cljs.core.complement.call(null,new cljs.core.Keyword(null,"done","done",-889844188));

break;
case "done":
return new cljs.core.Keyword(null,"done","done",-889844188);

break;
case "all":
return cljs.core.identity;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.deref.call(null,filt))].join('')));

}
})(),items));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer#footer","footer#footer",-1164052935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.todo_stats,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),active,new cljs.core.Keyword(null,"done","done",-889844188),done,new cljs.core.Keyword(null,"filt","filt",169229082),filt], null)], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer#info","footer#info",1634811413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Double-click to edit a todo"], null)], null)], null);
});
;})(filt))
});
succulent.core.run = (function succulent$core$run(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [succulent.core.todo_app], null),document.getElementById("app"));
});
goog.exportSymbol('succulent.core.run', succulent.core.run);

//# sourceMappingURL=core.js.map