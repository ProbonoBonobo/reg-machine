// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om_tools.mixin');
goog.require('schema.core');
var ufv___50154 = schema.utils.use_fn_validation;
var output_schema50147_50155 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema50148_50156 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null)))], null);
var input_checker50149_50157 = schema.core.checker.call(null,input_schema50148_50156);
var output_checker50150_50158 = schema.core.checker.call(null,output_schema50147_50155);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 *   Returns: (s/=> s/Any)
 * 
 *   Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___50154,output_schema50147_50155,input_schema50148_50156,input_checker50149_50157,output_checker50150_50158){
return (function om_bootstrap$mixins$event_listener(G__50151,G__50152,G__50153){
var validate__30032__auto__ = ufv___50154.get_cell();
if(cljs.core.truth_(validate__30032__auto__)){
var args__30033__auto___50159 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50151,G__50152,G__50153], null);
var temp__4657__auto___50160 = input_checker50149_50157.call(null,args__30033__auto___50159);
if(cljs.core.truth_(temp__4657__auto___50160)){
var error__30034__auto___50161 = temp__4657__auto___50160;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__30034__auto___50161)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50148_50156,new cljs.core.Keyword(null,"value","value",305978217),args__30033__auto___50159,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50161], null));
} else {
}
} else {
}

var o__30035__auto__ = (function (){var target = G__50151;
var event_type = G__50152;
var callback = G__50153;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__30032__auto__,ufv___50154,output_schema50147_50155,input_schema50148_50156,input_checker50149_50157,output_checker50150_50158){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__30032__auto__,ufv___50154,output_schema50147_50155,input_schema50148_50156,input_checker50149_50157,output_checker50150_50158))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__30032__auto__,ufv___50154,output_schema50147_50155,input_schema50148_50156,input_checker50149_50157,output_checker50150_50158){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__30032__auto__,ufv___50154,output_schema50147_50155,input_schema50148_50156,input_checker50149_50157,output_checker50150_50158))
} else {
return ((function (validate__30032__auto__,ufv___50154,output_schema50147_50155,input_schema50148_50156,input_checker50149_50157,output_checker50150_50158){
return (function (){
return null;
});
;})(validate__30032__auto__,ufv___50154,output_schema50147_50155,input_schema50148_50156,input_checker50149_50157,output_checker50150_50158))

}
}
break;
}
})();
if(cljs.core.truth_(validate__30032__auto__)){
var temp__4657__auto___50162 = output_checker50150_50158.call(null,o__30035__auto__);
if(cljs.core.truth_(temp__4657__auto___50162)){
var error__30034__auto___50163 = temp__4657__auto___50162;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__30034__auto___50163)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50147_50155,new cljs.core.Keyword(null,"value","value",305978217),o__30035__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__30034__auto___50163], null));
} else {
}
} else {
}

return o__30035__auto__;
});})(ufv___50154,output_schema50147_50155,input_schema50148_50156,input_checker50149_50157,output_checker50150_50158))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema50147_50155,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50148_50156], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = ({"componentWillMount": (function (){
var this50164 = this;
return ((function (this50164){
return (function (owner){
return owner.listeners = [];
});})(this50164))
.call(null,this50164);
}), "componentWillUnmount": (function (){
var this50165 = this;
return ((function (this50165){
return (function (owner){
var seq__50170 = cljs.core.seq.call(null,owner.listeners);
var chunk__50171 = null;
var count__50172 = (0);
var i__50173 = (0);
while(true){
if((i__50173 < count__50172)){
var l = cljs.core._nth.call(null,chunk__50171,i__50173);
l.call(null);

var G__50174 = seq__50170;
var G__50175 = chunk__50171;
var G__50176 = count__50172;
var G__50177 = (i__50173 + (1));
seq__50170 = G__50174;
chunk__50171 = G__50175;
count__50172 = G__50176;
i__50173 = G__50177;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50170);
if(temp__4657__auto__){
var seq__50170__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50170__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__50170__$1);
var G__50178 = cljs.core.chunk_rest.call(null,seq__50170__$1);
var G__50179 = c__25562__auto__;
var G__50180 = cljs.core.count.call(null,c__25562__auto__);
var G__50181 = (0);
seq__50170 = G__50178;
chunk__50171 = G__50179;
count__50172 = G__50180;
i__50173 = G__50181;
continue;
} else {
var l = cljs.core.first.call(null,seq__50170__$1);
l.call(null);

var G__50182 = cljs.core.next.call(null,seq__50170__$1);
var G__50183 = null;
var G__50184 = (0);
var G__50185 = (0);
seq__50170 = G__50182;
chunk__50171 = G__50183;
count__50172 = G__50184;
i__50173 = G__50185;
continue;
}
} else {
return null;
}
}
break;
}
});})(this50165))
.call(null,this50165);
}), "set_listener": (function (target50167,event_type50168,callback50169){
var this50166 = this;
return ((function (this50166){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this50166))
.call(null,this50166,target50167,event_type50168,callback50169);
})});
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = ({"componentWillMount": (function (){
var this50187 = this;
return ((function (this50187){
return (function (owner){
return owner.timeouts = [];
});})(this50187))
.call(null,this50187);
}), "componentWillUnmount": (function (){
var this50188 = this;
return ((function (this50188){
return (function (owner){
return owner.timeouts.map(((function (this50188){
return (function (p1__50186_SHARP_){
return clearTimeout(p1__50186_SHARP_);
});})(this50188))
);
});})(this50188))
.call(null,this50188);
}), "set_timeout": (function (f50190,timeout50191){
var this50189 = this;
return ((function (this50189){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this50189))
.call(null,this50189,f50190,timeout50191);
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
var G__50192 = node__$1.parentNode;
node__$1 = G__50192;
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
var seq__50197_50201 = cljs.core.seq.call(null,listeners);
var chunk__50198_50202 = null;
var count__50199_50203 = (0);
var i__50200_50204 = (0);
while(true){
if((i__50200_50204 < count__50199_50203)){
var l_50205 = cljs.core._nth.call(null,chunk__50198_50202,i__50200_50204);
l_50205.call(null);

var G__50206 = seq__50197_50201;
var G__50207 = chunk__50198_50202;
var G__50208 = count__50199_50203;
var G__50209 = (i__50200_50204 + (1));
seq__50197_50201 = G__50206;
chunk__50198_50202 = G__50207;
count__50199_50203 = G__50208;
i__50200_50204 = G__50209;
continue;
} else {
var temp__4657__auto___50210__$1 = cljs.core.seq.call(null,seq__50197_50201);
if(temp__4657__auto___50210__$1){
var seq__50197_50211__$1 = temp__4657__auto___50210__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50197_50211__$1)){
var c__25562__auto___50212 = cljs.core.chunk_first.call(null,seq__50197_50211__$1);
var G__50213 = cljs.core.chunk_rest.call(null,seq__50197_50211__$1);
var G__50214 = c__25562__auto___50212;
var G__50215 = cljs.core.count.call(null,c__25562__auto___50212);
var G__50216 = (0);
seq__50197_50201 = G__50213;
chunk__50198_50202 = G__50214;
count__50199_50203 = G__50215;
i__50200_50204 = G__50216;
continue;
} else {
var l_50217 = cljs.core.first.call(null,seq__50197_50211__$1);
l_50217.call(null);

var G__50218 = cljs.core.next.call(null,seq__50197_50211__$1);
var G__50219 = null;
var G__50220 = (0);
var G__50221 = (0);
seq__50197_50201 = G__50218;
chunk__50198_50202 = G__50219;
count__50199_50203 = G__50220;
i__50200_50204 = G__50221;
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
var this50222 = this;
return ((function (this50222){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this50222))
.call(null,this50222);
}), "componentWillUnmount": (function (){
var this50223 = this;
return ((function (this50223){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this50223))
.call(null,this50223);
}), "isDropdownOpen": (function (){
var this50224 = this;
return ((function (this50224){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this50224))
.call(null,this50224);
}), "setDropdownState": (function (open_QMARK_50226){
var this50225 = this;
return ((function (this50225){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this50225))
.call(null,this50225,open_QMARK_50226);
})});
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = ({"getInitialState": (function (){
var this50227 = this;
return ((function (this50227){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null);
});})(this50227))
.call(null,this50227);
}), "isPanelCollapsed": (function (){
var this50228 = this;
return ((function (this50228){
return (function (owner){
var collapsed_QMARK_ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
if((collapsed_QMARK_ == null)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);

return true;
} else {
return collapsed_QMARK_;
}
});})(this50228))
.call(null,this50228);
}), "toggleCollapsed": (function (){
var this50229 = this;
return ((function (this50229){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this50229))
.call(null,this50229);
})});

//# sourceMappingURL=mixins.js.map?rel=1478445862426