// Compiled by ClojureScript 1.9.227 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om_tools.mixin');
goog.require('schema.core');
var ufv___56947 = schema.utils.use_fn_validation;
var output_schema56940_56948 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema56941_56949 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null)))], null);
var input_checker56942_56950 = schema.core.checker.call(null,input_schema56941_56949);
var output_checker56943_56951 = schema.core.checker.call(null,output_schema56940_56948);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 *   Returns: (s/=> s/Any)
 * 
 *   Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___56947,output_schema56940_56948,input_schema56941_56949,input_checker56942_56950,output_checker56943_56951){
return (function om_bootstrap$mixins$event_listener(G__56944,G__56945,G__56946){
var validate__37921__auto__ = ufv___56947.get_cell();
if(cljs.core.truth_(validate__37921__auto__)){
var args__37922__auto___56952 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__56944,G__56945,G__56946], null);
var temp__4657__auto___56953 = input_checker56942_56950.call(null,args__37922__auto___56952);
if(cljs.core.truth_(temp__4657__auto___56953)){
var error__37923__auto___56954 = temp__4657__auto___56953;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__37923__auto___56954)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56941_56949,new cljs.core.Keyword(null,"value","value",305978217),args__37922__auto___56952,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___56954], null));
} else {
}
} else {
}

var o__37924__auto__ = (function (){var target = G__56944;
var event_type = G__56945;
var callback = G__56946;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__37921__auto__,ufv___56947,output_schema56940_56948,input_schema56941_56949,input_checker56942_56950,output_checker56943_56951){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__37921__auto__,ufv___56947,output_schema56940_56948,input_schema56941_56949,input_checker56942_56950,output_checker56943_56951))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__37921__auto__,ufv___56947,output_schema56940_56948,input_schema56941_56949,input_checker56942_56950,output_checker56943_56951){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__37921__auto__,ufv___56947,output_schema56940_56948,input_schema56941_56949,input_checker56942_56950,output_checker56943_56951))
} else {
return ((function (validate__37921__auto__,ufv___56947,output_schema56940_56948,input_schema56941_56949,input_checker56942_56950,output_checker56943_56951){
return (function (){
return null;
});
;})(validate__37921__auto__,ufv___56947,output_schema56940_56948,input_schema56941_56949,input_checker56942_56950,output_checker56943_56951))

}
}
break;
}
})();
if(cljs.core.truth_(validate__37921__auto__)){
var temp__4657__auto___56955 = output_checker56943_56951.call(null,o__37924__auto__);
if(cljs.core.truth_(temp__4657__auto___56955)){
var error__37923__auto___56956 = temp__4657__auto___56955;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__37923__auto___56956)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56940_56948,new cljs.core.Keyword(null,"value","value",305978217),o__37924__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37923__auto___56956], null));
} else {
}
} else {
}

return o__37924__auto__;
});})(ufv___56947,output_schema56940_56948,input_schema56941_56949,input_checker56942_56950,output_checker56943_56951))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema56940_56948,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56941_56949], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = ({"componentWillMount": (function (){
var this56957 = this;
return ((function (this56957){
return (function (owner){
return owner.listeners = [];
});})(this56957))
.call(null,this56957);
}), "componentWillUnmount": (function (){
var this56958 = this;
return ((function (this56958){
return (function (owner){
var seq__56963 = cljs.core.seq.call(null,owner.listeners);
var chunk__56964 = null;
var count__56965 = (0);
var i__56966 = (0);
while(true){
if((i__56966 < count__56965)){
var l = cljs.core._nth.call(null,chunk__56964,i__56966);
l.call(null);

var G__56967 = seq__56963;
var G__56968 = chunk__56964;
var G__56969 = count__56965;
var G__56970 = (i__56966 + (1));
seq__56963 = G__56967;
chunk__56964 = G__56968;
count__56965 = G__56969;
i__56966 = G__56970;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__56963);
if(temp__4657__auto__){
var seq__56963__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56963__$1)){
var c__25562__auto__ = cljs.core.chunk_first.call(null,seq__56963__$1);
var G__56971 = cljs.core.chunk_rest.call(null,seq__56963__$1);
var G__56972 = c__25562__auto__;
var G__56973 = cljs.core.count.call(null,c__25562__auto__);
var G__56974 = (0);
seq__56963 = G__56971;
chunk__56964 = G__56972;
count__56965 = G__56973;
i__56966 = G__56974;
continue;
} else {
var l = cljs.core.first.call(null,seq__56963__$1);
l.call(null);

var G__56975 = cljs.core.next.call(null,seq__56963__$1);
var G__56976 = null;
var G__56977 = (0);
var G__56978 = (0);
seq__56963 = G__56975;
chunk__56964 = G__56976;
count__56965 = G__56977;
i__56966 = G__56978;
continue;
}
} else {
return null;
}
}
break;
}
});})(this56958))
.call(null,this56958);
}), "set_listener": (function (target56960,event_type56961,callback56962){
var this56959 = this;
return ((function (this56959){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this56959))
.call(null,this56959,target56960,event_type56961,callback56962);
})});
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = ({"componentWillMount": (function (){
var this56980 = this;
return ((function (this56980){
return (function (owner){
return owner.timeouts = [];
});})(this56980))
.call(null,this56980);
}), "componentWillUnmount": (function (){
var this56981 = this;
return ((function (this56981){
return (function (owner){
return owner.timeouts.map(((function (this56981){
return (function (p1__56979_SHARP_){
return clearTimeout(p1__56979_SHARP_);
});})(this56981))
);
});})(this56981))
.call(null,this56981);
}), "set_timeout": (function (f56983,timeout56984){
var this56982 = this;
return ((function (this56982){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this56982))
.call(null,this56982,f56983,timeout56984);
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
var G__56985 = node__$1.parentNode;
node__$1 = G__56985;
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
var seq__56990_56994 = cljs.core.seq.call(null,listeners);
var chunk__56991_56995 = null;
var count__56992_56996 = (0);
var i__56993_56997 = (0);
while(true){
if((i__56993_56997 < count__56992_56996)){
var l_56998 = cljs.core._nth.call(null,chunk__56991_56995,i__56993_56997);
l_56998.call(null);

var G__56999 = seq__56990_56994;
var G__57000 = chunk__56991_56995;
var G__57001 = count__56992_56996;
var G__57002 = (i__56993_56997 + (1));
seq__56990_56994 = G__56999;
chunk__56991_56995 = G__57000;
count__56992_56996 = G__57001;
i__56993_56997 = G__57002;
continue;
} else {
var temp__4657__auto___57003__$1 = cljs.core.seq.call(null,seq__56990_56994);
if(temp__4657__auto___57003__$1){
var seq__56990_57004__$1 = temp__4657__auto___57003__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56990_57004__$1)){
var c__25562__auto___57005 = cljs.core.chunk_first.call(null,seq__56990_57004__$1);
var G__57006 = cljs.core.chunk_rest.call(null,seq__56990_57004__$1);
var G__57007 = c__25562__auto___57005;
var G__57008 = cljs.core.count.call(null,c__25562__auto___57005);
var G__57009 = (0);
seq__56990_56994 = G__57006;
chunk__56991_56995 = G__57007;
count__56992_56996 = G__57008;
i__56993_56997 = G__57009;
continue;
} else {
var l_57010 = cljs.core.first.call(null,seq__56990_57004__$1);
l_57010.call(null);

var G__57011 = cljs.core.next.call(null,seq__56990_57004__$1);
var G__57012 = null;
var G__57013 = (0);
var G__57014 = (0);
seq__56990_56994 = G__57011;
chunk__56991_56995 = G__57012;
count__56992_56996 = G__57013;
i__56993_56997 = G__57014;
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
var this57015 = this;
return ((function (this57015){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this57015))
.call(null,this57015);
}), "componentWillUnmount": (function (){
var this57016 = this;
return ((function (this57016){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this57016))
.call(null,this57016);
}), "isDropdownOpen": (function (){
var this57017 = this;
return ((function (this57017){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this57017))
.call(null,this57017);
}), "setDropdownState": (function (open_QMARK_57019){
var this57018 = this;
return ((function (this57018){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this57018))
.call(null,this57018,open_QMARK_57019);
})});
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = ({"getInitialState": (function (){
var this57020 = this;
return ((function (this57020){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null);
});})(this57020))
.call(null,this57020);
}), "isPanelCollapsed": (function (){
var this57021 = this;
return ((function (this57021){
return (function (owner){
var collapsed_QMARK_ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
if((collapsed_QMARK_ == null)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);

return true;
} else {
return collapsed_QMARK_;
}
});})(this57021))
.call(null,this57021);
}), "toggleCollapsed": (function (){
var this57022 = this;
return ((function (this57022){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this57022))
.call(null,this57022);
})});

//# sourceMappingURL=mixins.js.map?rel=1477762308328