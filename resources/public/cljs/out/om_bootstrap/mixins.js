// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om_tools.mixin');
goog.require('schema.core');
var ufv___83002 = schema.utils.use_fn_validation;
var output_schema82995_83003 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema82996_83004 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null)))], null);
var input_checker82997_83005 = schema.core.checker.call(null,input_schema82996_83004);
var output_checker82998_83006 = schema.core.checker.call(null,output_schema82995_83003);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 *   Returns: (s/=> s/Any)
 * 
 *   Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___83002,output_schema82995_83003,input_schema82996_83004,input_checker82997_83005,output_checker82998_83006){
return (function om_bootstrap$mixins$event_listener(G__82999,G__83000,G__83001){
var validate__38286__auto__ = ufv___83002.get_cell();
if(cljs.core.truth_(validate__38286__auto__)){
var args__38287__auto___83007 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__82999,G__83000,G__83001], null);
var temp__4657__auto___83008 = input_checker82997_83005.call(null,args__38287__auto___83007);
if(cljs.core.truth_(temp__4657__auto___83008)){
var error__38288__auto___83009 = temp__4657__auto___83008;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__38288__auto___83009)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema82996_83004,new cljs.core.Keyword(null,"value","value",305978217),args__38287__auto___83007,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83009], null));
} else {
}
} else {
}

var o__38289__auto__ = (function (){var target = G__82999;
var event_type = G__83000;
var callback = G__83001;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__38286__auto__,ufv___83002,output_schema82995_83003,input_schema82996_83004,input_checker82997_83005,output_checker82998_83006){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__38286__auto__,ufv___83002,output_schema82995_83003,input_schema82996_83004,input_checker82997_83005,output_checker82998_83006))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__38286__auto__,ufv___83002,output_schema82995_83003,input_schema82996_83004,input_checker82997_83005,output_checker82998_83006){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__38286__auto__,ufv___83002,output_schema82995_83003,input_schema82996_83004,input_checker82997_83005,output_checker82998_83006))
} else {
return ((function (validate__38286__auto__,ufv___83002,output_schema82995_83003,input_schema82996_83004,input_checker82997_83005,output_checker82998_83006){
return (function (){
return null;
});
;})(validate__38286__auto__,ufv___83002,output_schema82995_83003,input_schema82996_83004,input_checker82997_83005,output_checker82998_83006))

}
}
break;
}
})();
if(cljs.core.truth_(validate__38286__auto__)){
var temp__4657__auto___83010 = output_checker82998_83006.call(null,o__38289__auto__);
if(cljs.core.truth_(temp__4657__auto___83010)){
var error__38288__auto___83011 = temp__4657__auto___83010;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__38288__auto___83011)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema82995_83003,new cljs.core.Keyword(null,"value","value",305978217),o__38289__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__38288__auto___83011], null));
} else {
}
} else {
}

return o__38289__auto__;
});})(ufv___83002,output_schema82995_83003,input_schema82996_83004,input_checker82997_83005,output_checker82998_83006))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema82995_83003,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema82996_83004], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = ({"componentWillMount": (function (){
var this83012 = this;
return ((function (this83012){
return (function (owner){
return owner.listeners = [];
});})(this83012))
.call(null,this83012);
}), "componentWillUnmount": (function (){
var this83013 = this;
return ((function (this83013){
return (function (owner){
var seq__83018 = cljs.core.seq.call(null,owner.listeners);
var chunk__83019 = null;
var count__83020 = (0);
var i__83021 = (0);
while(true){
if((i__83021 < count__83020)){
var l = cljs.core._nth.call(null,chunk__83019,i__83021);
l.call(null);

var G__83022 = seq__83018;
var G__83023 = chunk__83019;
var G__83024 = count__83020;
var G__83025 = (i__83021 + (1));
seq__83018 = G__83022;
chunk__83019 = G__83023;
count__83020 = G__83024;
i__83021 = G__83025;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__83018);
if(temp__4657__auto__){
var seq__83018__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83018__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__83018__$1);
var G__83026 = cljs.core.chunk_rest.call(null,seq__83018__$1);
var G__83027 = c__25562__auto__;
var G__83028 = cljs.core.count.call(null,c__25562__auto__);
var G__83029 = (0);
seq__83018 = G__83026;
chunk__83019 = G__83027;
count__83020 = G__83028;
i__83021 = G__83029;
continue;
} else {
var l = cljs.core.first.call(null,seq__83018__$1);
l.call(null);

var G__83030 = cljs.core.next.call(null,seq__83018__$1);
var G__83031 = null;
var G__83032 = (0);
var G__83033 = (0);
seq__83018 = G__83030;
chunk__83019 = G__83031;
count__83020 = G__83032;
i__83021 = G__83033;
continue;
}
} else {
return null;
}
}
break;
}
});})(this83013))
.call(null,this83013);
}), "set_listener": (function (target83015,event_type83016,callback83017){
var this83014 = this;
return ((function (this83014){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this83014))
.call(null,this83014,target83015,event_type83016,callback83017);
})});
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = ({"componentWillMount": (function (){
var this83035 = this;
return ((function (this83035){
return (function (owner){
return owner.timeouts = [];
});})(this83035))
.call(null,this83035);
}), "componentWillUnmount": (function (){
var this83036 = this;
return ((function (this83036){
return (function (owner){
return owner.timeouts.map(((function (this83036){
return (function (p1__83034_SHARP_){
return clearTimeout(p1__83034_SHARP_);
});})(this83036))
);
});})(this83036))
.call(null,this83036);
}), "set_timeout": (function (f83038,timeout83039){
var this83037 = this;
return ((function (this83037){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this83037))
.call(null,this83037,f83038,timeout83039);
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
var G__83040 = node__$1.parentNode;
node__$1 = G__83040;
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
var seq__83045_83049 = cljs.core.seq.call(null,listeners);
var chunk__83046_83050 = null;
var count__83047_83051 = (0);
var i__83048_83052 = (0);
while(true){
if((i__83048_83052 < count__83047_83051)){
var l_83053 = cljs.core._nth.call(null,chunk__83046_83050,i__83048_83052);
l_83053.call(null);

var G__83054 = seq__83045_83049;
var G__83055 = chunk__83046_83050;
var G__83056 = count__83047_83051;
var G__83057 = (i__83048_83052 + (1));
seq__83045_83049 = G__83054;
chunk__83046_83050 = G__83055;
count__83047_83051 = G__83056;
i__83048_83052 = G__83057;
continue;
} else {
var temp__4657__auto___83058__$1 = cljs.core.seq.call(null,seq__83045_83049);
if(temp__4657__auto___83058__$1){
var seq__83045_83059__$1 = temp__4657__auto___83058__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83045_83059__$1)){
var c__25562__auto___83060 = cljs.core.chunk_first.call(null,seq__83045_83059__$1);
var G__83061 = cljs.core.chunk_rest.call(null,seq__83045_83059__$1);
var G__83062 = c__25562__auto___83060;
var G__83063 = cljs.core.count.call(null,c__25562__auto___83060);
var G__83064 = (0);
seq__83045_83049 = G__83061;
chunk__83046_83050 = G__83062;
count__83047_83051 = G__83063;
i__83048_83052 = G__83064;
continue;
} else {
var l_83065 = cljs.core.first.call(null,seq__83045_83059__$1);
l_83065.call(null);

var G__83066 = cljs.core.next.call(null,seq__83045_83059__$1);
var G__83067 = null;
var G__83068 = (0);
var G__83069 = (0);
seq__83045_83049 = G__83066;
chunk__83046_83050 = G__83067;
count__83047_83051 = G__83068;
i__83048_83052 = G__83069;
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
var this83070 = this;
return ((function (this83070){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this83070))
.call(null,this83070);
}), "componentWillUnmount": (function (){
var this83071 = this;
return ((function (this83071){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this83071))
.call(null,this83071);
}), "isDropdownOpen": (function (){
var this83072 = this;
return ((function (this83072){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this83072))
.call(null,this83072);
}), "setDropdownState": (function (open_QMARK_83074){
var this83073 = this;
return ((function (this83073){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this83073))
.call(null,this83073,open_QMARK_83074);
})});
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = ({"getInitialState": (function (){
var this83075 = this;
return ((function (this83075){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null);
});})(this83075))
.call(null,this83075);
}), "isPanelCollapsed": (function (){
var this83076 = this;
return ((function (this83076){
return (function (owner){
var collapsed_QMARK_ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
if((collapsed_QMARK_ == null)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);

return true;
} else {
return collapsed_QMARK_;
}
});})(this83076))
.call(null,this83076);
}), "toggleCollapsed": (function (){
var this83077 = this;
return ((function (this83077){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this83077))
.call(null,this83077);
})});

//# sourceMappingURL=mixins.js.map?rel=1478402677704