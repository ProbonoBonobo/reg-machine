// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om_tools.mixin');
goog.require('schema.core');
var ufv___68642 = schema.utils.use_fn_validation;
var output_schema68635_68643 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema68636_68644 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null)))], null);
var input_checker68637_68645 = schema.core.checker.call(null,input_schema68636_68644);
var output_checker68638_68646 = schema.core.checker.call(null,output_schema68635_68643);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 *   Returns: (s/=> s/Any)
 * 
 *   Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___68642,output_schema68635_68643,input_schema68636_68644,input_checker68637_68645,output_checker68638_68646){
return (function om_bootstrap$mixins$event_listener(G__68639,G__68640,G__68641){
var validate__30368__auto__ = ufv___68642.get_cell();
if(cljs.core.truth_(validate__30368__auto__)){
var args__30369__auto___68647 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__68639,G__68640,G__68641], null);
var temp__4657__auto___68648 = input_checker68637_68645.call(null,args__30369__auto___68647);
if(cljs.core.truth_(temp__4657__auto___68648)){
var error__30370__auto___68649 = temp__4657__auto___68648;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__30370__auto___68649)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema68636_68644,new cljs.core.Keyword(null,"value","value",305978217),args__30369__auto___68647,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68649], null));
} else {
}
} else {
}

var o__30371__auto__ = (function (){var target = G__68639;
var event_type = G__68640;
var callback = G__68641;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__30368__auto__,ufv___68642,output_schema68635_68643,input_schema68636_68644,input_checker68637_68645,output_checker68638_68646){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__30368__auto__,ufv___68642,output_schema68635_68643,input_schema68636_68644,input_checker68637_68645,output_checker68638_68646))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__30368__auto__,ufv___68642,output_schema68635_68643,input_schema68636_68644,input_checker68637_68645,output_checker68638_68646){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__30368__auto__,ufv___68642,output_schema68635_68643,input_schema68636_68644,input_checker68637_68645,output_checker68638_68646))
} else {
return ((function (validate__30368__auto__,ufv___68642,output_schema68635_68643,input_schema68636_68644,input_checker68637_68645,output_checker68638_68646){
return (function (){
return null;
});
;})(validate__30368__auto__,ufv___68642,output_schema68635_68643,input_schema68636_68644,input_checker68637_68645,output_checker68638_68646))

}
}
break;
}
})();
if(cljs.core.truth_(validate__30368__auto__)){
var temp__4657__auto___68650 = output_checker68638_68646.call(null,o__30371__auto__);
if(cljs.core.truth_(temp__4657__auto___68650)){
var error__30370__auto___68651 = temp__4657__auto___68650;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__30370__auto___68651)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema68635_68643,new cljs.core.Keyword(null,"value","value",305978217),o__30371__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30370__auto___68651], null));
} else {
}
} else {
}

return o__30371__auto__;
});})(ufv___68642,output_schema68635_68643,input_schema68636_68644,input_checker68637_68645,output_checker68638_68646))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema68635_68643,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema68636_68644], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = ({"componentWillMount": (function (){
var this68652 = this;
return ((function (this68652){
return (function (owner){
return owner.listeners = [];
});})(this68652))
.call(null,this68652);
}), "componentWillUnmount": (function (){
var this68653 = this;
return ((function (this68653){
return (function (owner){
var seq__68658 = cljs.core.seq.call(null,owner.listeners);
var chunk__68659 = null;
var count__68660 = (0);
var i__68661 = (0);
while(true){
if((i__68661 < count__68660)){
var l = cljs.core._nth.call(null,chunk__68659,i__68661);
l.call(null);

var G__68662 = seq__68658;
var G__68663 = chunk__68659;
var G__68664 = count__68660;
var G__68665 = (i__68661 + (1));
seq__68658 = G__68662;
chunk__68659 = G__68663;
count__68660 = G__68664;
i__68661 = G__68665;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__68658);
if(temp__4657__auto__){
var seq__68658__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68658__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__68658__$1);
var G__68666 = cljs.core.chunk_rest.call(null,seq__68658__$1);
var G__68667 = c__25562__auto__;
var G__68668 = cljs.core.count.call(null,c__25562__auto__);
var G__68669 = (0);
seq__68658 = G__68666;
chunk__68659 = G__68667;
count__68660 = G__68668;
i__68661 = G__68669;
continue;
} else {
var l = cljs.core.first.call(null,seq__68658__$1);
l.call(null);

var G__68670 = cljs.core.next.call(null,seq__68658__$1);
var G__68671 = null;
var G__68672 = (0);
var G__68673 = (0);
seq__68658 = G__68670;
chunk__68659 = G__68671;
count__68660 = G__68672;
i__68661 = G__68673;
continue;
}
} else {
return null;
}
}
break;
}
});})(this68653))
.call(null,this68653);
}), "set_listener": (function (target68655,event_type68656,callback68657){
var this68654 = this;
return ((function (this68654){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this68654))
.call(null,this68654,target68655,event_type68656,callback68657);
})});
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = ({"componentWillMount": (function (){
var this68675 = this;
return ((function (this68675){
return (function (owner){
return owner.timeouts = [];
});})(this68675))
.call(null,this68675);
}), "componentWillUnmount": (function (){
var this68676 = this;
return ((function (this68676){
return (function (owner){
return owner.timeouts.map(((function (this68676){
return (function (p1__68674_SHARP_){
return clearTimeout(p1__68674_SHARP_);
});})(this68676))
);
});})(this68676))
.call(null,this68676);
}), "set_timeout": (function (f68678,timeout68679){
var this68677 = this;
return ((function (this68677){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this68677))
.call(null,this68677,f68678,timeout68679);
})});
/**
 * Accepts two DOM elements; returns true if the supplied node is
 *   nested inside the supplied root, false otherwise.
 */
om_bootstrap.mixins.in_root_QMARK_ = (function om_bootstrap$mixins$in_root_QMARK_(node,root){
var node__$1 = node;
while(true){
if((node__$1 == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,root,node__$1)){
return true;
} else {
var G__68680 = node__$1.parentNode;
node__$1 = G__68680;
continue;

}
}
break;
}
});
om_bootstrap.mixins.ESCAPE_KEY = (27);
/**
 * For dropdowns, binds a handler for that sets the dropdown-mixin's
 *   `:open?` state to false if the user clicks outside the owning
 *   component OR hits the escape key.
 */
om_bootstrap.mixins.bind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$bind_root_close_handlers_BANG_(owner){
var set_state = (owner["setDropdownState"]);
return owner.dropdownListeners = [om_bootstrap.mixins.event_listener.call(null,document,"click",((function (set_state){
return (function (e){
if(cljs.core.truth_(om_bootstrap.mixins.in_root_QMARK_.call(null,e.target,om.core.get_node.call(null,owner)))){
return null;
} else {
return set_state.call(null,false);
}
});})(set_state))
),om_bootstrap.mixins.event_listener.call(null,document,"keyup",((function (set_state){
return (function (e){
if(cljs.core._EQ_.call(null,om_bootstrap.mixins.ESCAPE_KEY,e.keyCode)){
return set_state.call(null,false);
} else {
return null;
}
});})(set_state))
)];
});
/**
 * If they're present on the owning object, removes the listeners
 *   registered by the dropdown mixin.
 */
om_bootstrap.mixins.unbind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$unbind_root_close_handlers_BANG_(owner){
var temp__4657__auto__ = owner.dropdownListeners;
if(cljs.core.truth_(temp__4657__auto__)){
var listeners = temp__4657__auto__;
var seq__68685_68689 = cljs.core.seq.call(null,listeners);
var chunk__68686_68690 = null;
var count__68687_68691 = (0);
var i__68688_68692 = (0);
while(true){
if((i__68688_68692 < count__68687_68691)){
var l_68693 = cljs.core._nth.call(null,chunk__68686_68690,i__68688_68692);
l_68693.call(null);

var G__68694 = seq__68685_68689;
var G__68695 = chunk__68686_68690;
var G__68696 = count__68687_68691;
var G__68697 = (i__68688_68692 + (1));
seq__68685_68689 = G__68694;
chunk__68686_68690 = G__68695;
count__68687_68691 = G__68696;
i__68688_68692 = G__68697;
continue;
} else {
var temp__4657__auto___68698__$1 = cljs.core.seq.call(null,seq__68685_68689);
if(temp__4657__auto___68698__$1){
var seq__68685_68699__$1 = temp__4657__auto___68698__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68685_68699__$1)){
var c__25562__auto___68700 = cljs.core.chunk_first.call(null,seq__68685_68699__$1);
var G__68701 = cljs.core.chunk_rest.call(null,seq__68685_68699__$1);
var G__68702 = c__25562__auto___68700;
var G__68703 = cljs.core.count.call(null,c__25562__auto___68700);
var G__68704 = (0);
seq__68685_68689 = G__68701;
chunk__68686_68690 = G__68702;
count__68687_68691 = G__68703;
i__68688_68692 = G__68704;
continue;
} else {
var l_68705 = cljs.core.first.call(null,seq__68685_68699__$1);
l_68705.call(null);

var G__68706 = cljs.core.next.call(null,seq__68685_68699__$1);
var G__68707 = null;
var G__68708 = (0);
var G__68709 = (0);
seq__68685_68689 = G__68706;
chunk__68686_68690 = G__68707;
count__68687_68691 = G__68708;
i__68688_68692 = G__68709;
continue;
}
} else {
}
}
break;
}

return owner.dropdownListeners = null;
} else {
return null;
}
});
/**
 * Mixin that manages a single piece of state - :open?. If a user
 *   clicks outside the component's owning dom element OR hits the escape
 *   key, the state will jump back to false.
 * 
 *   Down the road this may need to register a callback when the state
 *   changes.
 */
om_bootstrap.mixins.dropdown_mixin = ({"getInitialState": (function (){
var this68710 = this;
return ((function (this68710){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this68710))
.call(null,this68710);
}), "componentWillUnmount": (function (){
var this68711 = this;
return ((function (this68711){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this68711))
.call(null,this68711);
}), "isDropdownOpen": (function (){
var this68712 = this;
return ((function (this68712){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this68712))
.call(null,this68712);
}), "setDropdownState": (function (open_QMARK_68714){
var this68713 = this;
return ((function (this68713){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this68713))
.call(null,this68713,open_QMARK_68714);
})});
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = ({"getInitialState": (function (){
var this68715 = this;
return ((function (this68715){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null);
});})(this68715))
.call(null,this68715);
}), "isPanelCollapsed": (function (){
var this68716 = this;
return ((function (this68716){
return (function (owner){
var collapsed_QMARK_ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
if((collapsed_QMARK_ == null)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);

return true;
} else {
return collapsed_QMARK_;
}
});})(this68716))
.call(null,this68716);
}), "toggleCollapsed": (function (){
var this68717 = this;
return ((function (this68717){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this68717))
.call(null,this68717);
})});

//# sourceMappingURL=mixins.js.map?rel=1478399653348