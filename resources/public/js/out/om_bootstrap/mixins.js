// Compiled by ClojureScript 1.7.122 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om_tools.mixin');
goog.require('schema.core');
var ufv___33628 = schema.utils.use_fn_validation;
var output_schema33621_33629 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema33622_33630 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null)))], null);
var input_checker33623_33631 = schema.core.checker.call(null,input_schema33622_33630);
var output_checker33624_33632 = schema.core.checker.call(null,output_schema33621_33629);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 *   Returns: (s/=> s/Any)
 * 
 *   Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___33628,output_schema33621_33629,input_schema33622_33630,input_checker33623_33631,output_checker33624_33632){
return (function om_bootstrap$mixins$event_listener(G__33625,G__33626,G__33627){
var validate__20540__auto__ = ufv___33628.get_cell();
if(cljs.core.truth_(validate__20540__auto__)){
var args__20541__auto___33633 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33625,G__33626,G__33627], null);
var temp__4425__auto___33634 = input_checker33623_33631.call(null,args__20541__auto___33633);
if(cljs.core.truth_(temp__4425__auto___33634)){
var error__20542__auto___33635 = temp__4425__auto___33634;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__20542__auto___33635)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33622_33630,new cljs.core.Keyword(null,"value","value",305978217),args__20541__auto___33633,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33635], null));
} else {
}
} else {
}

var o__20543__auto__ = (function (){var target = G__33625;
var event_type = G__33626;
var callback = G__33627;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__20540__auto__,ufv___33628,output_schema33621_33629,input_schema33622_33630,input_checker33623_33631,output_checker33624_33632){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__20540__auto__,ufv___33628,output_schema33621_33629,input_schema33622_33630,input_checker33623_33631,output_checker33624_33632))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__20540__auto__,ufv___33628,output_schema33621_33629,input_schema33622_33630,input_checker33623_33631,output_checker33624_33632){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__20540__auto__,ufv___33628,output_schema33621_33629,input_schema33622_33630,input_checker33623_33631,output_checker33624_33632))
} else {
return ((function (validate__20540__auto__,ufv___33628,output_schema33621_33629,input_schema33622_33630,input_checker33623_33631,output_checker33624_33632){
return (function (){
return null;
});
;})(validate__20540__auto__,ufv___33628,output_schema33621_33629,input_schema33622_33630,input_checker33623_33631,output_checker33624_33632))

}
}
break;
}
})();
if(cljs.core.truth_(validate__20540__auto__)){
var temp__4425__auto___33636 = output_checker33624_33632.call(null,o__20543__auto__);
if(cljs.core.truth_(temp__4425__auto___33636)){
var error__20542__auto___33637 = temp__4425__auto___33636;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__20542__auto___33637)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33621_33629,new cljs.core.Keyword(null,"value","value",305978217),o__20543__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20542__auto___33637], null));
} else {
}
} else {
}

return o__20543__auto__;
});})(ufv___33628,output_schema33621_33629,input_schema33622_33630,input_checker33623_33631,output_checker33624_33632))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema33621_33629,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33622_33630], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = {"componentWillMount": (function (){
var this33638 = this;
return ((function (this33638){
return (function (owner){
return owner.listeners = [];
});})(this33638))
.call(null,this33638);
}), "componentWillUnmount": (function (){
var this33639 = this;
return ((function (this33639){
return (function (owner){
var seq__33644 = cljs.core.seq.call(null,owner.listeners);
var chunk__33645 = null;
var count__33646 = (0);
var i__33647 = (0);
while(true){
if((i__33647 < count__33646)){
var l = cljs.core._nth.call(null,chunk__33645,i__33647);
l.call(null);

var G__33648 = seq__33644;
var G__33649 = chunk__33645;
var G__33650 = count__33646;
var G__33651 = (i__33647 + (1));
seq__33644 = G__33648;
chunk__33645 = G__33649;
count__33646 = G__33650;
i__33647 = G__33651;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33644);
if(temp__4425__auto__){
var seq__33644__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33644__$1)){
var c__20004__auto__ = cljs.core.chunk_first.call(null,seq__33644__$1);
var G__33652 = cljs.core.chunk_rest.call(null,seq__33644__$1);
var G__33653 = c__20004__auto__;
var G__33654 = cljs.core.count.call(null,c__20004__auto__);
var G__33655 = (0);
seq__33644 = G__33652;
chunk__33645 = G__33653;
count__33646 = G__33654;
i__33647 = G__33655;
continue;
} else {
var l = cljs.core.first.call(null,seq__33644__$1);
l.call(null);

var G__33656 = cljs.core.next.call(null,seq__33644__$1);
var G__33657 = null;
var G__33658 = (0);
var G__33659 = (0);
seq__33644 = G__33656;
chunk__33645 = G__33657;
count__33646 = G__33658;
i__33647 = G__33659;
continue;
}
} else {
return null;
}
}
break;
}
});})(this33639))
.call(null,this33639);
}), "set_listener": (function (target33641,event_type33642,callback33643){
var this33640 = this;
return ((function (this33640){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this33640))
.call(null,this33640,target33641,event_type33642,callback33643);
})};
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = {"componentWillMount": (function (){
var this33661 = this;
return ((function (this33661){
return (function (owner){
return owner.timeouts = [];
});})(this33661))
.call(null,this33661);
}), "componentWillUnmount": (function (){
var this33662 = this;
return ((function (this33662){
return (function (owner){
return owner.timeouts.map(((function (this33662){
return (function (p1__33660_SHARP_){
return clearTimeout(p1__33660_SHARP_);
});})(this33662))
);
});})(this33662))
.call(null,this33662);
}), "set_timeout": (function (f33664,timeout33665){
var this33663 = this;
return ((function (this33663){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this33663))
.call(null,this33663,f33664,timeout33665);
})};
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
var G__33666 = node__$1.parentNode;
node__$1 = G__33666;
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
var temp__4425__auto__ = owner.dropdownListeners;
if(cljs.core.truth_(temp__4425__auto__)){
var listeners = temp__4425__auto__;
var seq__33671_33675 = cljs.core.seq.call(null,listeners);
var chunk__33672_33676 = null;
var count__33673_33677 = (0);
var i__33674_33678 = (0);
while(true){
if((i__33674_33678 < count__33673_33677)){
var l_33679 = cljs.core._nth.call(null,chunk__33672_33676,i__33674_33678);
l_33679.call(null);

var G__33680 = seq__33671_33675;
var G__33681 = chunk__33672_33676;
var G__33682 = count__33673_33677;
var G__33683 = (i__33674_33678 + (1));
seq__33671_33675 = G__33680;
chunk__33672_33676 = G__33681;
count__33673_33677 = G__33682;
i__33674_33678 = G__33683;
continue;
} else {
var temp__4425__auto___33684__$1 = cljs.core.seq.call(null,seq__33671_33675);
if(temp__4425__auto___33684__$1){
var seq__33671_33685__$1 = temp__4425__auto___33684__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33671_33685__$1)){
var c__20004__auto___33686 = cljs.core.chunk_first.call(null,seq__33671_33685__$1);
var G__33687 = cljs.core.chunk_rest.call(null,seq__33671_33685__$1);
var G__33688 = c__20004__auto___33686;
var G__33689 = cljs.core.count.call(null,c__20004__auto___33686);
var G__33690 = (0);
seq__33671_33675 = G__33687;
chunk__33672_33676 = G__33688;
count__33673_33677 = G__33689;
i__33674_33678 = G__33690;
continue;
} else {
var l_33691 = cljs.core.first.call(null,seq__33671_33685__$1);
l_33691.call(null);

var G__33692 = cljs.core.next.call(null,seq__33671_33685__$1);
var G__33693 = null;
var G__33694 = (0);
var G__33695 = (0);
seq__33671_33675 = G__33692;
chunk__33672_33676 = G__33693;
count__33673_33677 = G__33694;
i__33674_33678 = G__33695;
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
om_bootstrap.mixins.dropdown_mixin = {"getInitialState": (function (){
var this33696 = this;
return ((function (this33696){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this33696))
.call(null,this33696);
}), "componentWillUnmount": (function (){
var this33697 = this;
return ((function (this33697){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this33697))
.call(null,this33697);
}), "isDropdownOpen": (function (){
var this33698 = this;
return ((function (this33698){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this33698))
.call(null,this33698);
}), "setDropdownState": (function (open_QMARK_33700){
var this33699 = this;
return ((function (this33699){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this33699))
.call(null,this33699,open_QMARK_33700);
})};
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = {"getInitialState": (function (){
var this33701 = this;
return ((function (this33701){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null);
});})(this33701))
.call(null,this33701);
}), "isPanelCollapsed": (function (){
var this33702 = this;
return ((function (this33702){
return (function (owner){
var collapsed_QMARK_ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
if((collapsed_QMARK_ == null)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);

return true;
} else {
return collapsed_QMARK_;
}
});})(this33702))
.call(null,this33702);
}), "toggleCollapsed": (function (){
var this33703 = this;
return ((function (this33703){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this33703))
.call(null,this33703);
})};

//# sourceMappingURL=mixins.js.map?rel=1444632656618