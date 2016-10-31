// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om_tools.mixin');
goog.require('schema.core');
var ufv___35237 = schema.utils.use_fn_validation;
var output_schema35230_35238 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema35231_35239 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null)))], null);
var input_checker35232_35240 = schema.core.checker.call(null,input_schema35231_35239);
var output_checker35233_35241 = schema.core.checker.call(null,output_schema35230_35238);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 *   Returns: (s/=> s/Any)
 * 
 *   Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___35237,output_schema35230_35238,input_schema35231_35239,input_checker35232_35240,output_checker35233_35241){
return (function om_bootstrap$mixins$event_listener(G__35234,G__35235,G__35236){
var validate__8009__auto__ = ufv___35237.get_cell();
if(cljs.core.truth_(validate__8009__auto__)){
var args__8010__auto___35242 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35234,G__35235,G__35236], null);
var temp__4657__auto___35243 = input_checker35232_35240.call(null,args__8010__auto___35242);
if(cljs.core.truth_(temp__4657__auto___35243)){
var error__8011__auto___35244 = temp__4657__auto___35243;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__8011__auto___35244)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35231_35239,new cljs.core.Keyword(null,"value","value",305978217),args__8010__auto___35242,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35244], null));
} else {
}
} else {
}

var o__8012__auto__ = (function (){var target = G__35234;
var event_type = G__35235;
var callback = G__35236;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__8009__auto__,ufv___35237,output_schema35230_35238,input_schema35231_35239,input_checker35232_35240,output_checker35233_35241){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__8009__auto__,ufv___35237,output_schema35230_35238,input_schema35231_35239,input_checker35232_35240,output_checker35233_35241))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__8009__auto__,ufv___35237,output_schema35230_35238,input_schema35231_35239,input_checker35232_35240,output_checker35233_35241){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__8009__auto__,ufv___35237,output_schema35230_35238,input_schema35231_35239,input_checker35232_35240,output_checker35233_35241))
} else {
return ((function (validate__8009__auto__,ufv___35237,output_schema35230_35238,input_schema35231_35239,input_checker35232_35240,output_checker35233_35241){
return (function (){
return null;
});
;})(validate__8009__auto__,ufv___35237,output_schema35230_35238,input_schema35231_35239,input_checker35232_35240,output_checker35233_35241))

}
}
break;
}
})();
if(cljs.core.truth_(validate__8009__auto__)){
var temp__4657__auto___35245 = output_checker35233_35241.call(null,o__8012__auto__);
if(cljs.core.truth_(temp__4657__auto___35245)){
var error__8011__auto___35246 = temp__4657__auto___35245;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__8011__auto___35246)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35230_35238,new cljs.core.Keyword(null,"value","value",305978217),o__8012__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8011__auto___35246], null));
} else {
}
} else {
}

return o__8012__auto__;
});})(ufv___35237,output_schema35230_35238,input_schema35231_35239,input_checker35232_35240,output_checker35233_35241))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema35230_35238,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35231_35239], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = ({"componentWillMount": (function (){
var this35247 = this;
return ((function (this35247){
return (function (owner){
return owner.listeners = [];
});})(this35247))
.call(null,this35247);
}), "componentWillUnmount": (function (){
var this35248 = this;
return ((function (this35248){
return (function (owner){
var seq__35253 = cljs.core.seq.call(null,owner.listeners);
var chunk__35254 = null;
var count__35255 = (0);
var i__35256 = (0);
while(true){
if((i__35256 < count__35255)){
var l = cljs.core._nth.call(null,chunk__35254,i__35256);
l.call(null);

var G__35257 = seq__35253;
var G__35258 = chunk__35254;
var G__35259 = count__35255;
var G__35260 = (i__35256 + (1));
seq__35253 = G__35257;
chunk__35254 = G__35258;
count__35255 = G__35259;
i__35256 = G__35260;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35253);
if(temp__4657__auto__){
var seq__35253__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35253__$1)){
var c__7215__auto__ = cljs.core.chunk_first.call(null,seq__35253__$1);
var G__35261 = cljs.core.chunk_rest.call(null,seq__35253__$1);
var G__35262 = c__7215__auto__;
var G__35263 = cljs.core.count.call(null,c__7215__auto__);
var G__35264 = (0);
seq__35253 = G__35261;
chunk__35254 = G__35262;
count__35255 = G__35263;
i__35256 = G__35264;
continue;
} else {
var l = cljs.core.first.call(null,seq__35253__$1);
l.call(null);

var G__35265 = cljs.core.next.call(null,seq__35253__$1);
var G__35266 = null;
var G__35267 = (0);
var G__35268 = (0);
seq__35253 = G__35265;
chunk__35254 = G__35266;
count__35255 = G__35267;
i__35256 = G__35268;
continue;
}
} else {
return null;
}
}
break;
}
});})(this35248))
.call(null,this35248);
}), "set_listener": (function (target35250,event_type35251,callback35252){
var this35249 = this;
return ((function (this35249){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this35249))
.call(null,this35249,target35250,event_type35251,callback35252);
})});
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = ({"componentWillMount": (function (){
var this35270 = this;
return ((function (this35270){
return (function (owner){
return owner.timeouts = [];
});})(this35270))
.call(null,this35270);
}), "componentWillUnmount": (function (){
var this35271 = this;
return ((function (this35271){
return (function (owner){
return owner.timeouts.map(((function (this35271){
return (function (p1__35269_SHARP_){
return clearTimeout(p1__35269_SHARP_);
});})(this35271))
);
});})(this35271))
.call(null,this35271);
}), "set_timeout": (function (f35273,timeout35274){
var this35272 = this;
return ((function (this35272){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this35272))
.call(null,this35272,f35273,timeout35274);
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
var G__35275 = node__$1.parentNode;
node__$1 = G__35275;
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
var seq__35280_35284 = cljs.core.seq.call(null,listeners);
var chunk__35281_35285 = null;
var count__35282_35286 = (0);
var i__35283_35287 = (0);
while(true){
if((i__35283_35287 < count__35282_35286)){
var l_35288 = cljs.core._nth.call(null,chunk__35281_35285,i__35283_35287);
l_35288.call(null);

var G__35289 = seq__35280_35284;
var G__35290 = chunk__35281_35285;
var G__35291 = count__35282_35286;
var G__35292 = (i__35283_35287 + (1));
seq__35280_35284 = G__35289;
chunk__35281_35285 = G__35290;
count__35282_35286 = G__35291;
i__35283_35287 = G__35292;
continue;
} else {
var temp__4657__auto___35293__$1 = cljs.core.seq.call(null,seq__35280_35284);
if(temp__4657__auto___35293__$1){
var seq__35280_35294__$1 = temp__4657__auto___35293__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35280_35294__$1)){
var c__7215__auto___35295 = cljs.core.chunk_first.call(null,seq__35280_35294__$1);
var G__35296 = cljs.core.chunk_rest.call(null,seq__35280_35294__$1);
var G__35297 = c__7215__auto___35295;
var G__35298 = cljs.core.count.call(null,c__7215__auto___35295);
var G__35299 = (0);
seq__35280_35284 = G__35296;
chunk__35281_35285 = G__35297;
count__35282_35286 = G__35298;
i__35283_35287 = G__35299;
continue;
} else {
var l_35300 = cljs.core.first.call(null,seq__35280_35294__$1);
l_35300.call(null);

var G__35301 = cljs.core.next.call(null,seq__35280_35294__$1);
var G__35302 = null;
var G__35303 = (0);
var G__35304 = (0);
seq__35280_35284 = G__35301;
chunk__35281_35285 = G__35302;
count__35282_35286 = G__35303;
i__35283_35287 = G__35304;
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
var this35305 = this;
return ((function (this35305){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this35305))
.call(null,this35305);
}), "componentWillUnmount": (function (){
var this35306 = this;
return ((function (this35306){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this35306))
.call(null,this35306);
}), "isDropdownOpen": (function (){
var this35307 = this;
return ((function (this35307){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this35307))
.call(null,this35307);
}), "setDropdownState": (function (open_QMARK_35309){
var this35308 = this;
return ((function (this35308){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this35308))
.call(null,this35308,open_QMARK_35309);
})});
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = ({"getInitialState": (function (){
var this35310 = this;
return ((function (this35310){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null);
});})(this35310))
.call(null,this35310);
}), "isPanelCollapsed": (function (){
var this35311 = this;
return ((function (this35311){
return (function (owner){
var collapsed_QMARK_ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
if((collapsed_QMARK_ == null)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);

return true;
} else {
return collapsed_QMARK_;
}
});})(this35311))
.call(null,this35311);
}), "toggleCollapsed": (function (){
var this35312 = this;
return ((function (this35312){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this35312))
.call(null,this35312);
})});

//# sourceMappingURL=mixins.js.map