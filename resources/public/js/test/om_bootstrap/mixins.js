// Compiled by ClojureScript 1.7.122 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om_tools.mixin');
goog.require('schema.core');
var ufv___22868 = schema.utils.use_fn_validation;
var output_schema22861_22869 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema22862_22870 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null)))], null);
var input_checker22863_22871 = schema.core.checker.call(null,input_schema22862_22870);
var output_checker22864_22872 = schema.core.checker.call(null,output_schema22861_22869);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 *   Returns: (s/=> s/Any)
 * 
 *   Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___22868,output_schema22861_22869,input_schema22862_22870,input_checker22863_22871,output_checker22864_22872){
return (function om_bootstrap$mixins$event_listener(G__22865,G__22866,G__22867){
var validate__10213__auto__ = ufv___22868.get_cell();
if(cljs.core.truth_(validate__10213__auto__)){
var args__10214__auto___22873 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22865,G__22866,G__22867], null);
var temp__4425__auto___22874 = input_checker22863_22871.call(null,args__10214__auto___22873);
if(cljs.core.truth_(temp__4425__auto___22874)){
var error__10215__auto___22875 = temp__4425__auto___22874;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__10215__auto___22875)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22862_22870,new cljs.core.Keyword(null,"value","value",305978217),args__10214__auto___22873,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22875], null));
} else {
}
} else {
}

var o__10216__auto__ = (function (){var target = G__22865;
var event_type = G__22866;
var callback = G__22867;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__10213__auto__,ufv___22868,output_schema22861_22869,input_schema22862_22870,input_checker22863_22871,output_checker22864_22872){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__10213__auto__,ufv___22868,output_schema22861_22869,input_schema22862_22870,input_checker22863_22871,output_checker22864_22872))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__10213__auto__,ufv___22868,output_schema22861_22869,input_schema22862_22870,input_checker22863_22871,output_checker22864_22872){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__10213__auto__,ufv___22868,output_schema22861_22869,input_schema22862_22870,input_checker22863_22871,output_checker22864_22872))
} else {
return ((function (validate__10213__auto__,ufv___22868,output_schema22861_22869,input_schema22862_22870,input_checker22863_22871,output_checker22864_22872){
return (function (){
return null;
});
;})(validate__10213__auto__,ufv___22868,output_schema22861_22869,input_schema22862_22870,input_checker22863_22871,output_checker22864_22872))

}
}
break;
}
})();
if(cljs.core.truth_(validate__10213__auto__)){
var temp__4425__auto___22876 = output_checker22864_22872.call(null,o__10216__auto__);
if(cljs.core.truth_(temp__4425__auto___22876)){
var error__10215__auto___22877 = temp__4425__auto___22876;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__10215__auto___22877)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22861_22869,new cljs.core.Keyword(null,"value","value",305978217),o__10216__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10215__auto___22877], null));
} else {
}
} else {
}

return o__10216__auto__;
});})(ufv___22868,output_schema22861_22869,input_schema22862_22870,input_checker22863_22871,output_checker22864_22872))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema22861_22869,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22862_22870], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = {"componentWillMount": (function (){
var this22878 = this;
return ((function (this22878){
return (function (owner){
return owner.listeners = [];
});})(this22878))
.call(null,this22878);
}), "componentWillUnmount": (function (){
var this22879 = this;
return ((function (this22879){
return (function (owner){
var seq__22884 = cljs.core.seq.call(null,owner.listeners);
var chunk__22885 = null;
var count__22886 = (0);
var i__22887 = (0);
while(true){
if((i__22887 < count__22886)){
var l = cljs.core._nth.call(null,chunk__22885,i__22887);
l.call(null);

var G__22888 = seq__22884;
var G__22889 = chunk__22885;
var G__22890 = count__22886;
var G__22891 = (i__22887 + (1));
seq__22884 = G__22888;
chunk__22885 = G__22889;
count__22886 = G__22890;
i__22887 = G__22891;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22884);
if(temp__4425__auto__){
var seq__22884__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22884__$1)){
var c__5364__auto__ = cljs.core.chunk_first.call(null,seq__22884__$1);
var G__22892 = cljs.core.chunk_rest.call(null,seq__22884__$1);
var G__22893 = c__5364__auto__;
var G__22894 = cljs.core.count.call(null,c__5364__auto__);
var G__22895 = (0);
seq__22884 = G__22892;
chunk__22885 = G__22893;
count__22886 = G__22894;
i__22887 = G__22895;
continue;
} else {
var l = cljs.core.first.call(null,seq__22884__$1);
l.call(null);

var G__22896 = cljs.core.next.call(null,seq__22884__$1);
var G__22897 = null;
var G__22898 = (0);
var G__22899 = (0);
seq__22884 = G__22896;
chunk__22885 = G__22897;
count__22886 = G__22898;
i__22887 = G__22899;
continue;
}
} else {
return null;
}
}
break;
}
});})(this22879))
.call(null,this22879);
}), "set_listener": (function (target22881,event_type22882,callback22883){
var this22880 = this;
return ((function (this22880){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this22880))
.call(null,this22880,target22881,event_type22882,callback22883);
})};
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = {"componentWillMount": (function (){
var this22901 = this;
return ((function (this22901){
return (function (owner){
return owner.timeouts = [];
});})(this22901))
.call(null,this22901);
}), "componentWillUnmount": (function (){
var this22902 = this;
return ((function (this22902){
return (function (owner){
return owner.timeouts.map(((function (this22902){
return (function (p1__22900_SHARP_){
return clearTimeout(p1__22900_SHARP_);
});})(this22902))
);
});})(this22902))
.call(null,this22902);
}), "set_timeout": (function (f22904,timeout22905){
var this22903 = this;
return ((function (this22903){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this22903))
.call(null,this22903,f22904,timeout22905);
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
var G__22906 = node__$1.parentNode;
node__$1 = G__22906;
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
var seq__22911_22915 = cljs.core.seq.call(null,listeners);
var chunk__22912_22916 = null;
var count__22913_22917 = (0);
var i__22914_22918 = (0);
while(true){
if((i__22914_22918 < count__22913_22917)){
var l_22919 = cljs.core._nth.call(null,chunk__22912_22916,i__22914_22918);
l_22919.call(null);

var G__22920 = seq__22911_22915;
var G__22921 = chunk__22912_22916;
var G__22922 = count__22913_22917;
var G__22923 = (i__22914_22918 + (1));
seq__22911_22915 = G__22920;
chunk__22912_22916 = G__22921;
count__22913_22917 = G__22922;
i__22914_22918 = G__22923;
continue;
} else {
var temp__4425__auto___22924__$1 = cljs.core.seq.call(null,seq__22911_22915);
if(temp__4425__auto___22924__$1){
var seq__22911_22925__$1 = temp__4425__auto___22924__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22911_22925__$1)){
var c__5364__auto___22926 = cljs.core.chunk_first.call(null,seq__22911_22925__$1);
var G__22927 = cljs.core.chunk_rest.call(null,seq__22911_22925__$1);
var G__22928 = c__5364__auto___22926;
var G__22929 = cljs.core.count.call(null,c__5364__auto___22926);
var G__22930 = (0);
seq__22911_22915 = G__22927;
chunk__22912_22916 = G__22928;
count__22913_22917 = G__22929;
i__22914_22918 = G__22930;
continue;
} else {
var l_22931 = cljs.core.first.call(null,seq__22911_22925__$1);
l_22931.call(null);

var G__22932 = cljs.core.next.call(null,seq__22911_22925__$1);
var G__22933 = null;
var G__22934 = (0);
var G__22935 = (0);
seq__22911_22915 = G__22932;
chunk__22912_22916 = G__22933;
count__22913_22917 = G__22934;
i__22914_22918 = G__22935;
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
var this22936 = this;
return ((function (this22936){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this22936))
.call(null,this22936);
}), "componentWillUnmount": (function (){
var this22937 = this;
return ((function (this22937){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this22937))
.call(null,this22937);
}), "isDropdownOpen": (function (){
var this22938 = this;
return ((function (this22938){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this22938))
.call(null,this22938);
}), "setDropdownState": (function (open_QMARK_22940){
var this22939 = this;
return ((function (this22939){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this22939))
.call(null,this22939,open_QMARK_22940);
})};
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = {"getInitialState": (function (){
var this22941 = this;
return ((function (this22941){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null);
});})(this22941))
.call(null,this22941);
}), "isPanelCollapsed": (function (){
var this22942 = this;
return ((function (this22942){
return (function (owner){
var collapsed_QMARK_ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
if((collapsed_QMARK_ == null)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);

return true;
} else {
return collapsed_QMARK_;
}
});})(this22942))
.call(null,this22942);
}), "toggleCollapsed": (function (){
var this22943 = this;
return ((function (this22943){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this22943))
.call(null,this22943);
})};
