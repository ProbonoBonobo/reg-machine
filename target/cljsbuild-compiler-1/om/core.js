// Compiled by ClojureScript 1.9.227 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('om.dom');
goog.require('goog.dom');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.display_name[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$);
} else {
var m__7068__auto____$1 = (om.core.display_name["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.init_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$);
} else {
var m__7068__auto____$1 = (om.core.init_state["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.should_update[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,next_props,next_state);
} else {
var m__7068__auto____$1 = (om.core.should_update["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.will_mount[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$);
} else {
var m__7068__auto____$1 = (om.core.will_mount["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.did_mount[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$);
} else {
var m__7068__auto____$1 = (om.core.did_mount["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.will_unmount[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$);
} else {
var m__7068__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.will_update[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,next_props,next_state);
} else {
var m__7068__auto____$1 = (om.core.will_update["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.did_update[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__7068__auto____$1 = (om.core.did_update["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.will_receive_props[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,next_props);
} else {
var m__7068__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.render[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$);
} else {
var m__7068__auto____$1 = (om.core.render["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.render_props[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,props,state);
} else {
var m__7068__auto____$1 = (om.core.render_props["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,props,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core.render_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,state);
} else {
var m__7068__auto____$1 = (om.core.render_state["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__7068__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args32229 = [];
var len__7479__auto___32232 = arguments.length;
var i__7480__auto___32233 = (0);
while(true){
if((i__7480__auto___32233 < len__7479__auto___32232)){
args32229.push((arguments[i__7480__auto___32233]));

var G__32234 = (i__7480__auto___32233 + (1));
i__7480__auto___32233 = G__32234;
continue;
} else {
}
break;
}

var G__32231 = args32229.length;
switch (G__32231) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32229.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$);
} else {
var m__7068__auto____$1 = (om.core._get_state["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,ks);
} else {
var m__7068__auto____$1 = (om.core._get_state["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args32236 = [];
var len__7479__auto___32239 = arguments.length;
var i__7480__auto___32240 = (0);
while(true){
if((i__7480__auto___32240 < len__7479__auto___32239)){
args32236.push((arguments[i__7480__auto___32240]));

var G__32241 = (i__7480__auto___32240 + (1));
i__7480__auto___32240 = G__32241;
continue;
} else {
}
break;
}

var G__32238 = args32236.length;
switch (G__32238) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32236.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_render_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$);
} else {
var m__7068__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_render_state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,ks);
} else {
var m__7068__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args32243 = [];
var len__7479__auto___32246 = arguments.length;
var i__7480__auto___32247 = (0);
while(true){
if((i__7480__auto___32247 < len__7479__auto___32246)){
args32243.push((arguments[i__7480__auto___32247]));

var G__32248 = (i__7480__auto___32247 + (1));
i__7480__auto___32247 = G__32248;
continue;
} else {
}
break;
}

var G__32245 = args32243.length;
switch (G__32245) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32243.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,val,render);
} else {
var m__7068__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,ks,val,render);
} else {
var m__7068__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;



/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_queue[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$);
} else {
var m__7068__auto____$1 = (om.core._get_queue["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,c);
} else {
var m__7068__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$);
} else {
var m__7068__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__7067__auto__ = (((x == null))?null:x);
var m__7068__auto__ = (om.core._value[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,x);
} else {
var m__7068__auto____$1 = (om.core._value["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__7067__auto__ = (((cursor == null))?null:cursor);
var m__7068__auto__ = (om.core._path[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,cursor);
} else {
var m__7068__auto____$1 = (om.core._path["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__7067__auto__ = (((cursor == null))?null:cursor);
var m__7068__auto__ = (om.core._state[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,cursor);
} else {
var m__7068__auto____$1 = (om.core._state["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args32250 = [];
var len__7479__auto___32253 = arguments.length;
var i__7480__auto___32254 = (0);
while(true){
if((i__7480__auto___32254 < len__7479__auto___32253)){
args32250.push((arguments[i__7480__auto___32254]));

var G__32255 = (i__7480__auto___32254 + (1));
i__7480__auto___32254 = G__32255;
continue;
} else {
}
break;
}

var G__32252 = args32250.length;
switch (G__32252) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32250.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__7067__auto__ = (((value == null))?null:value);
var m__7068__auto__ = (om.core._to_cursor[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,value,state);
} else {
var m__7068__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__7067__auto__ = (((value == null))?null:value);
var m__7068__auto__ = (om.core._to_cursor[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,value,state,path);
} else {
var m__7068__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__7067__auto__ = (((cursor == null))?null:cursor);
var m__7068__auto__ = (om.core._derive[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,cursor,derived,state,path);
} else {
var m__7068__auto____$1 = (om.core._derive["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__7067__auto__ = (((cursor == null))?null:cursor);
var m__7068__auto__ = (om.core._transact_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,cursor,korks,f,tag);
} else {
var m__7068__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__7067__auto__ = (((x == null))?null:x);
var m__7068__auto__ = (om.core._listen_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,x,key,tx_listen);
} else {
var m__7068__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__7067__auto__ = (((x == null))?null:x);
var m__7068__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,x,key);
} else {
var m__7068__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__7067__auto__ = (((x == null))?null:x);
var m__7068__auto__ = (om.core._notify_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__7068__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,id,p,val);
} else {
var m__7068__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,id,p,val);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,id,p);
} else {
var m__7068__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,id);
} else {
var m__7068__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_property[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,id,p);
} else {
var m__7068__auto____$1 = (om.core._get_property["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__7067__auto__ = (((cursor == null))?null:cursor);
var m__7068__auto__ = (om.core._root_key[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,cursor);
} else {
var m__7068__auto____$1 = (om.core._root_key["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._adapt[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,other);
} else {
var m__7068__auto____$1 = (om.core._adapt["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,c);
} else {
var m__7068__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$,c);
} else {
var m__7068__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$);
} else {
var m__7068__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__7067__auto__ = (((this$ == null))?null:this$);
var m__7068__auto__ = (om.core._get_deps[goog.typeOf(x__7067__auto__)]);
if(!((m__7068__auto__ == null))){
return m__7068__auto__.call(null,this$);
} else {
var m__7068__auto____$1 = (om.core._get_deps["_"]);
if(!((m__7068__auto____$1 == null))){
return m__7068__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});


om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args32261 = [];
var len__7479__auto___32265 = arguments.length;
var i__7480__auto___32266 = (0);
while(true){
if((i__7480__auto___32266 < len__7479__auto___32265)){
args32261.push((arguments[i__7480__auto___32266]));

var G__32267 = (i__7480__auto___32266 + (1));
i__7480__auto___32266 = G__32267;
continue;
} else {
}
break;
}

var G__32263 = args32261.length;
switch (G__32263) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32261.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__32264 = (x.props["__om_cursor"]);
if(cljs.core.seq.call(null,korks__$1)){
return cljs.core.get_in.call(null,G__32264,korks__$1);
} else {
return G__32264;
}
});

om.core.get_props.cljs$lang$maxFixedArity = 2;

/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args32269 = [];
var len__7479__auto___32272 = arguments.length;
var i__7480__auto___32273 = (0);
while(true){
if((i__7480__auto___32273 < len__7479__auto___32272)){
args32269.push((arguments[i__7480__auto___32273]));

var G__32274 = (i__7480__auto___32273 + (1));
i__7480__auto___32273 = G__32274;
continue;
} else {
}
break;
}

var G__32271 = args32269.length;
switch (G__32271) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32269.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args32276 = [];
var len__7479__auto___32279 = arguments.length;
var i__7480__auto___32280 = (0);
while(true){
if((i__7480__auto___32280 < len__7479__auto___32279)){
args32276.push((arguments[i__7480__auto___32280]));

var G__32281 = (i__7480__auto___32280 + (1));
i__7480__auto___32280 = G__32281;
continue;
} else {
}
break;
}

var G__32278 = args32276.length;
switch (G__32278) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32276.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;

om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4657__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var pending_state = temp__4657__auto__;
var G__32284 = state;
(G__32284["__om_prev_state"] = (state["__om_state"]));

(G__32284["__om_state"] = pending_state);

(G__32284["__om_pending_state"] = null);

return G__32284;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args32285 = [];
var len__7479__auto___32288 = arguments.length;
var i__7480__auto___32289 = (0);
while(true){
if((i__7480__auto___32289 < len__7479__auto___32288)){
args32285.push((arguments[i__7480__auto___32289]));

var G__32290 = (i__7480__auto___32289 + (1));
i__7480__auto___32289 = G__32290;
continue;
} else {
}
break;
}

var G__32287 = args32285.length;
switch (G__32287) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32285.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__6404__auto__ = props;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return owner.props;
}
})();
var temp__4657__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var props_state = temp__4657__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__6404__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;

om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_32314 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,({"props": prev_props, "isOmComponent": true})),(function (){var or__6404__auto__ = (state_32314["__om_prev_state"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (state_32314["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4657__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__32295 = cljs.core.seq.call(null,refs);
var chunk__32296 = null;
var count__32297 = (0);
var i__32298 = (0);
while(true){
if((i__32298 < count__32297)){
var ref = cljs.core._nth.call(null,chunk__32296,i__32298);
om.core.unobserve.call(null,this$,ref);

var G__32315 = seq__32295;
var G__32316 = chunk__32296;
var G__32317 = count__32297;
var G__32318 = (i__32298 + (1));
seq__32295 = G__32315;
chunk__32296 = G__32316;
count__32297 = G__32317;
i__32298 = G__32318;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32295);
if(temp__4657__auto____$1){
var seq__32295__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32295__$1)){
var c__7215__auto__ = cljs.core.chunk_first.call(null,seq__32295__$1);
var G__32319 = cljs.core.chunk_rest.call(null,seq__32295__$1);
var G__32320 = c__7215__auto__;
var G__32321 = cljs.core.count.call(null,c__7215__auto__);
var G__32322 = (0);
seq__32295 = G__32319;
chunk__32296 = G__32320;
count__32297 = G__32321;
i__32298 = G__32322;
continue;
} else {
var ref = cljs.core.first.call(null,seq__32295__$1);
om.core.unobserve.call(null,this$,ref);

var G__32323 = cljs.core.next.call(null,seq__32295__$1);
var G__32324 = null;
var G__32325 = (0);
var G__32326 = (0);
seq__32295 = G__32323;
chunk__32296 = G__32324;
count__32297 = G__32325;
i__32298 = G__32326;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__6392__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__6392__auto__)){
var and__6392__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__6392__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__6392__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__6392__auto__){
return cljs.core.some.call(null,((function (and__6392__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__32292_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__32292_SHARP_);
});})(and__6392__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__6392__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_32301 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_32302 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_32303 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_32304 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_32305 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_32305;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_32304;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_32303;

om.core._STAR_state_STAR_ = _STAR_state_STAR_32302;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_32301;
}}),(function (next_props,next_state){
var this$ = this;
var c_32327 = om.core.children.call(null,this$);
if(((!((c_32327 == null)))?(((false) || (c_32327.om$core$IWillUpdate$))?true:(((!c_32327.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_32327):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_32327))){
var state_32328 = this$.state;
om.core.will_update.call(null,c_32327,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__6404__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = ({"__om_id": (function (){var or__6404__auto__ = id;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))});
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_32329 = om.core.children.call(null,this$);
if(((!((c_32329 == null)))?(((false) || (c_32329.om$core$IWillMount$))?true:(((!c_32329.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_32329):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_32329))){
om.core.will_mount.call(null,c_32329);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x32331 = obj;
x32331.om$core$ISetState$ = true;

x32331.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x32331){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__6392__auto__ = !((app_state == null));
if(and__6392__auto__){
return render;
} else {
return and__6392__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x32331))
;

x32331.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x32331){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__6392__auto__ = !((app_state == null));
if(and__6392__auto__){
return render;
} else {
return and__6392__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x32331))
;

x32331.om$core$IGetRenderState$ = true;

x32331.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x32331){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x32331))
;

x32331.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x32331){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x32331))
;

x32331.om$core$IGetState$ = true;

x32331.om$core$IGetState$_get_state$arity$1 = ((function (x32331){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__6404__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (state["__om_state"]);
}
});})(x32331))
;

x32331.om$core$IGetState$_get_state$arity$2 = ((function (x32331){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x32331))
;

return x32331;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__6404__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__6404__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return ({"__om_id": om_id});
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_32341 = om.core.children.call(null,this$);
if(((!((c_32341 == null)))?(((false) || (c_32341.om$core$IWillMount$))?true:(((!c_32341.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_32341):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_32341))){
om.core.will_mount.call(null,c_32341);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4657__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__32335 = cljs.core.seq.call(null,refs);
var chunk__32336 = null;
var count__32337 = (0);
var i__32338 = (0);
while(true){
if((i__32338 < count__32337)){
var ref = cljs.core._nth.call(null,chunk__32336,i__32338);
om.core.unobserve.call(null,this$,ref);

var G__32342 = seq__32335;
var G__32343 = chunk__32336;
var G__32344 = count__32337;
var G__32345 = (i__32338 + (1));
seq__32335 = G__32342;
chunk__32336 = G__32343;
count__32337 = G__32344;
i__32338 = G__32345;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32335);
if(temp__4657__auto____$1){
var seq__32335__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32335__$1)){
var c__7215__auto__ = cljs.core.chunk_first.call(null,seq__32335__$1);
var G__32346 = cljs.core.chunk_rest.call(null,seq__32335__$1);
var G__32347 = c__7215__auto__;
var G__32348 = cljs.core.count.call(null,c__7215__auto__);
var G__32349 = (0);
seq__32335 = G__32346;
chunk__32336 = G__32347;
count__32337 = G__32348;
i__32338 = G__32349;
continue;
} else {
var ref = cljs.core.first.call(null,seq__32335__$1);
om.core.unobserve.call(null,this$,ref);

var G__32350 = cljs.core.next.call(null,seq__32335__$1);
var G__32351 = null;
var G__32352 = (0);
var G__32353 = (0);
seq__32335 = G__32350;
chunk__32336 = G__32351;
count__32337 = G__32352;
i__32338 = G__32353;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_32354 = this$.props;
var c_32355 = om.core.children.call(null,this$);
if(((!((c_32355 == null)))?(((false) || (c_32355.om$core$IWillUpdate$))?true:(((!c_32355.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_32355):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_32355))){
var state_32356 = this$.state;
om.core.will_update.call(null,c_32355,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_32357 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,({"props": prev_props, "isOmComponent": true})),(function (){var or__6404__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x32359 = cljs.core.clj__GT_js.call(null,methods$);
x32359.om$core$ISetState$ = true;

x32359.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x32359){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__6392__auto__ = !((gstate == null));
if(and__6392__auto__){
return render;
} else {
return and__6392__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x32359))
;

x32359.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x32359){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x32359))
;

x32359.om$core$IGetRenderState$ = true;

x32359.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x32359){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x32359))
;

x32359.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x32359){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x32359))
;

x32359.om$core$IGetState$ = true;

x32359.om$core$IGetState$_get_state$arity$1 = ((function (x32359){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__6404__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x32359))
;

x32359.om$core$IGetState$_get_state$arity$2 = ((function (x32359){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x32359))
;

return x32359;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__32363){
var vec__32364 = p__32363;
var k = cljs.core.nth.call(null,vec__32364,(0),null);
var v = cljs.core.nth.call(null,vec__32364,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__32367 = null;
var G__32367__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__32367__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__32367 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__32367__2.call(this,self__,k);
case 3:
return G__32367__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32367.cljs$core$IFn$_invoke$arity$2 = G__32367__2;
G__32367.cljs$core$IFn$_invoke$arity$3 = G__32367__3;
return G__32367;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args32362){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args32362)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__32369 = null;
var G__32369__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__32369__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__32369 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__32369__2.call(this,self__,k);
case 3:
return G__32369__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32369.cljs$core$IFn$_invoke$arity$2 = G__32369__2;
G__32369.cljs$core$IFn$_invoke$arity$3 = G__32369__3;
return G__32369;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args32368){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args32368)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write.call(null,writer__7011__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x32371 = cljs.core.clone.call(null,val);
x32371.cljs$core$IDeref$ = true;

x32371.cljs$core$IDeref$_deref$arity$1 = ((function (x32371){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x32371))
;

x32371.om$core$ICursor$ = true;

x32371.om$core$ICursor$_path$arity$1 = ((function (x32371){
return (function (_){
var ___$1 = this;
return path;
});})(x32371))
;

x32371.om$core$ICursor$_state$arity$1 = ((function (x32371){
return (function (_){
var ___$1 = this;
return state;
});})(x32371))
;

x32371.om$core$ITransact$ = true;

x32371.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32371){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x32371))
;

x32371.cljs$core$IEquiv$ = true;

x32371.cljs$core$IEquiv$_equiv$arity$2 = ((function (x32371){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x32371))
;

return x32371;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args32372 = [];
var len__7479__auto___32377 = arguments.length;
var i__7480__auto___32378 = (0);
while(true){
if((i__7480__auto___32378 < len__7479__auto___32377)){
args32372.push((arguments[i__7480__auto___32378]));

var G__32379 = (i__7480__auto___32378 + (1));
i__7480__auto___32378 = G__32379;
continue;
} else {
}
break;
}

var G__32374 = args32372.length;
switch (G__32374) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32372.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;

om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error("Assert failed: (satisfies? IDeref atom)"));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x32384 = cljs.core.clone.call(null,x);
x32384.cljs$core$ICloneable$ = true;

x32384.cljs$core$ICloneable$_clone$arity$1 = ((function (x32384){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x32384))
;

x32384.om$core$IAdapt$ = true;

x32384.om$core$IAdapt$_adapt$arity$2 = ((function (x32384){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x32384))
;

x32384.om$core$ICursorDerive$ = true;

x32384.om$core$ICursorDerive$_derive$arity$4 = ((function (x32384){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x32384))
;

x32384.om$core$ITransact$ = true;

x32384.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32384){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x32384))
;

return x32384;
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(((!((cursor == null)))?(((false) || (cursor.om$core$IOmRef$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,cursor))){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x32392 = cljs.core.clone.call(null,cursor);
x32392.om$core$ICursorDerive$ = true;

x32392.om$core$ICursorDerive$_derive$arity$4 = ((function (x32392,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x32392,path,storage))
;

x32392.om$core$IOmRef$ = true;

x32392.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x32392,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x32392,path,storage))
;

x32392.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x32392,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x32392,path,storage))
;

x32392.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x32392,path,storage){
return (function (_){
var ___$1 = this;
var seq__32393 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__32394 = null;
var count__32395 = (0);
var i__32396 = (0);
while(true){
if((i__32396 < count__32395)){
var c = cljs.core._nth.call(null,chunk__32394,i__32396);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__32397 = seq__32393;
var G__32398 = chunk__32394;
var G__32399 = count__32395;
var G__32400 = (i__32396 + (1));
seq__32393 = G__32397;
chunk__32394 = G__32398;
count__32395 = G__32399;
i__32396 = G__32400;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32393);
if(temp__4657__auto__){
var seq__32393__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32393__$1)){
var c__7215__auto__ = cljs.core.chunk_first.call(null,seq__32393__$1);
var G__32401 = cljs.core.chunk_rest.call(null,seq__32393__$1);
var G__32402 = c__7215__auto__;
var G__32403 = cljs.core.count.call(null,c__7215__auto__);
var G__32404 = (0);
seq__32393 = G__32401;
chunk__32394 = G__32402;
count__32395 = G__32403;
i__32396 = G__32404;
continue;
} else {
var c = cljs.core.first.call(null,seq__32393__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__32405 = cljs.core.next.call(null,seq__32393__$1);
var G__32406 = null;
var G__32407 = (0);
var G__32408 = (0);
seq__32393 = G__32405;
chunk__32394 = G__32406;
count__32395 = G__32407;
i__32396 = G__32408;
continue;
}
} else {
return null;
}
}
break;
}
});})(x32392,path,storage))
;

x32392.om$core$IOmRef$_get_deps$arity$1 = ((function (x32392,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x32392,path,storage))
;

x32392.om$core$ITransact$ = true;

x32392.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32392,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x32392,path,storage))
;

return x32392;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__6404__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (component? c)"));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error("Assert failed: (cursor? ref)"));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__6404__auto__ = state.om$render$T;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args32409 = [];
var len__7479__auto___32416 = arguments.length;
var i__7480__auto___32417 = (0);
while(true){
if((i__7480__auto___32417 < len__7479__auto___32416)){
args32409.push((arguments[i__7480__auto___32417]));

var G__32418 = (i__7480__auto___32417 + (1));
i__7480__auto___32417 = G__32418;
continue;
} else {
}
break;
}

var G__32411 = args32409.length;
switch (G__32411) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32409.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__32412_32420 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__32413_32421 = null;
var count__32414_32422 = (0);
var i__32415_32423 = (0);
while(true){
if((i__32415_32423 < count__32414_32422)){
var f_32424 = cljs.core._nth.call(null,chunk__32413_32421,i__32415_32423);
f_32424.call(null);

var G__32425 = seq__32412_32420;
var G__32426 = chunk__32413_32421;
var G__32427 = count__32414_32422;
var G__32428 = (i__32415_32423 + (1));
seq__32412_32420 = G__32425;
chunk__32413_32421 = G__32426;
count__32414_32422 = G__32427;
i__32415_32423 = G__32428;
continue;
} else {
var temp__4657__auto___32429 = cljs.core.seq.call(null,seq__32412_32420);
if(temp__4657__auto___32429){
var seq__32412_32430__$1 = temp__4657__auto___32429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32412_32430__$1)){
var c__7215__auto___32431 = cljs.core.chunk_first.call(null,seq__32412_32430__$1);
var G__32432 = cljs.core.chunk_rest.call(null,seq__32412_32430__$1);
var G__32433 = c__7215__auto___32431;
var G__32434 = cljs.core.count.call(null,c__7215__auto___32431);
var G__32435 = (0);
seq__32412_32420 = G__32432;
chunk__32413_32421 = G__32433;
count__32414_32422 = G__32434;
i__32415_32423 = G__32435;
continue;
} else {
var f_32436 = cljs.core.first.call(null,seq__32412_32430__$1);
f_32436.call(null);

var G__32437 = cljs.core.next.call(null,seq__32412_32430__$1);
var G__32438 = null;
var G__32439 = (0);
var G__32440 = (0);
seq__32412_32420 = G__32437;
chunk__32413_32421 = G__32438;
count__32414_32422 = G__32439;
i__32415_32423 = G__32440;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;

om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__6404__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__6404__auto__){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__6404__auto____$1){
return or__6404__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str("(or (satisfies? IRender x) (satisfies? IRenderProps x) (satisfies? IRenderState x))")].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args32451 = [];
var len__7479__auto___32454 = arguments.length;
var i__7480__auto___32455 = (0);
while(true){
if((i__7480__auto___32455 < len__7479__auto___32454)){
args32451.push((arguments[i__7480__auto___32455]));

var G__32456 = (i__7480__auto___32455 + (1));
i__7480__auto___32455 = G__32456;
continue;
} else {
}
break;
}

var G__32453 = args32451.length;
switch (G__32453) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32451.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__6404__auto__ = descriptor;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
var or__6404__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__6404__auto____$1)){
return or__6404__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;

om.core.getf = (function om$core$getf(var_args){
var args32458 = [];
var len__7479__auto___32461 = arguments.length;
var i__7480__auto___32462 = (0);
while(true){
if((i__7480__auto___32462 < len__7479__auto___32461)){
args32458.push((arguments[i__7480__auto___32462]));

var G__32463 = (i__7480__auto___32462 + (1));
i__7480__auto___32462 = G__32463;
continue;
} else {
}
break;
}

var G__32460 = args32458.length;
switch (G__32460) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32458.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;

om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args32465 = [];
var len__7479__auto___32470 = arguments.length;
var i__7480__auto___32471 = (0);
while(true){
if((i__7480__auto___32471 < len__7479__auto___32470)){
args32465.push((arguments[i__7480__auto___32471]));

var G__32472 = (i__7480__auto___32471 + (1));
i__7480__auto___32471 = G__32472;
continue;
} else {
}
break;
}

var G__32467 = args32465.length;
switch (G__32467) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32465.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str("(valid-opts? m)")].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,({"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
}));
} else {
var map__32468 = m;
var map__32468__$1 = ((((!((map__32468 == null)))?((((map__32468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32468):map__32468);
var key = cljs.core.get.call(null,map__32468__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__32468__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__32468__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__32468__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__32468__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4655__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var i = temp__4655__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__6404__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,({"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__32468,map__32468__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__32468,map__32468__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__32468,map__32468__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__32468,map__32468__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__6404__auto__ = rkey;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_}));

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args32474 = [];
var len__7479__auto___32477 = arguments.length;
var i__7480__auto___32478 = (0);
while(true){
if((i__7480__auto___32478 < len__7479__auto___32477)){
args32474.push((arguments[i__7480__auto___32478]));

var G__32479 = (i__7480__auto___32478 + (1));
i__7480__auto___32478 = G__32479;
continue;
} else {
}
break;
}

var G__32476 = args32474.length;
switch (G__32476) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32474.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;

/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args32481 = [];
var len__7479__auto___32484 = arguments.length;
var i__7480__auto___32485 = (0);
while(true){
if((i__7480__auto___32485 < len__7479__auto___32484)){
args32481.push((arguments[i__7480__auto___32485]));

var G__32486 = (i__7480__auto___32485 + (1));
i__7480__auto___32485 = G__32486;
continue;
} else {
}
break;
}

var G__32483 = args32481.length;
switch (G__32483) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32481.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;

om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_32512 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_32513 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_32514 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x32501_32515 = state;
x32501_32515.om$core$IRootProperties$ = true;

x32501_32515.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x32501_32515,properties_32512,listeners_32513,render_queue_32514){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_32512,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x32501_32515,properties_32512,listeners_32513,render_queue_32514))
;

x32501_32515.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x32501_32515,properties_32512,listeners_32513,render_queue_32514){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_32512,cljs.core.dissoc,id,k);
});})(x32501_32515,properties_32512,listeners_32513,render_queue_32514))
;

x32501_32515.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x32501_32515,properties_32512,listeners_32513,render_queue_32514){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_32512,cljs.core.dissoc,id);
});})(x32501_32515,properties_32512,listeners_32513,render_queue_32514))
;

x32501_32515.om$core$IRootProperties$_get_property$arity$3 = ((function (x32501_32515,properties_32512,listeners_32513,render_queue_32514){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_32512),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x32501_32515,properties_32512,listeners_32513,render_queue_32514))
;

x32501_32515.om$core$INotify$ = true;

x32501_32515.om$core$INotify$_listen_BANG_$arity$3 = ((function (x32501_32515,properties_32512,listeners_32513,render_queue_32514){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_32513,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x32501_32515,properties_32512,listeners_32513,render_queue_32514))
;

x32501_32515.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x32501_32515,properties_32512,listeners_32513,render_queue_32514){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_32513,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x32501_32515,properties_32512,listeners_32513,render_queue_32514))
;

x32501_32515.om$core$INotify$_notify_BANG_$arity$3 = ((function (x32501_32515,properties_32512,listeners_32513,render_queue_32514){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__32502_32516 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_32513));
var chunk__32503_32517 = null;
var count__32504_32518 = (0);
var i__32505_32519 = (0);
while(true){
if((i__32505_32519 < count__32504_32518)){
var vec__32506_32520 = cljs.core._nth.call(null,chunk__32503_32517,i__32505_32519);
var __32521 = cljs.core.nth.call(null,vec__32506_32520,(0),null);
var f_32522 = cljs.core.nth.call(null,vec__32506_32520,(1),null);
f_32522.call(null,tx_data,root_cursor);

var G__32523 = seq__32502_32516;
var G__32524 = chunk__32503_32517;
var G__32525 = count__32504_32518;
var G__32526 = (i__32505_32519 + (1));
seq__32502_32516 = G__32523;
chunk__32503_32517 = G__32524;
count__32504_32518 = G__32525;
i__32505_32519 = G__32526;
continue;
} else {
var temp__4657__auto___32527 = cljs.core.seq.call(null,seq__32502_32516);
if(temp__4657__auto___32527){
var seq__32502_32528__$1 = temp__4657__auto___32527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32502_32528__$1)){
var c__7215__auto___32529 = cljs.core.chunk_first.call(null,seq__32502_32528__$1);
var G__32530 = cljs.core.chunk_rest.call(null,seq__32502_32528__$1);
var G__32531 = c__7215__auto___32529;
var G__32532 = cljs.core.count.call(null,c__7215__auto___32529);
var G__32533 = (0);
seq__32502_32516 = G__32530;
chunk__32503_32517 = G__32531;
count__32504_32518 = G__32532;
i__32505_32519 = G__32533;
continue;
} else {
var vec__32509_32534 = cljs.core.first.call(null,seq__32502_32528__$1);
var __32535 = cljs.core.nth.call(null,vec__32509_32534,(0),null);
var f_32536 = cljs.core.nth.call(null,vec__32509_32534,(1),null);
f_32536.call(null,tx_data,root_cursor);

var G__32537 = cljs.core.next.call(null,seq__32502_32528__$1);
var G__32538 = null;
var G__32539 = (0);
var G__32540 = (0);
seq__32502_32516 = G__32537;
chunk__32503_32517 = G__32538;
count__32504_32518 = G__32539;
i__32505_32519 = G__32540;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x32501_32515,properties_32512,listeners_32513,render_queue_32514))
;

x32501_32515.om$core$IRenderQueue$ = true;

x32501_32515.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x32501_32515,properties_32512,listeners_32513,render_queue_32514){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_32514);
});})(x32501_32515,properties_32512,listeners_32513,render_queue_32514))
;

x32501_32515.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x32501_32515,properties_32512,listeners_32513,render_queue_32514){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_32514),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_32514,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x32501_32515,properties_32512,listeners_32513,render_queue_32514))
;

x32501_32515.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x32501_32515,properties_32512,listeners_32513,render_queue_32514){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_32514,cljs.core.empty);
});})(x32501_32515,properties_32512,listeners_32513,render_queue_32514))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x32542 = cljs.core.clone.call(null,cursor);
x32542.cljs$core$ICloneable$ = true;

x32542.cljs$core$ICloneable$_clone$arity$1 = ((function (x32542){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x32542))
;

x32542.om$core$IAdapt$ = true;

x32542.om$core$IAdapt$_adapt$arity$2 = ((function (x32542){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x32542))
;

x32542.om$core$IRootKey$ = true;

x32542.om$core$IRootKey$_root_key$arity$1 = ((function (x32542){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x32542))
;

return x32542;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__32543){
var map__32631 = p__32543;
var map__32631__$1 = ((((!((map__32631 == null)))?((((map__32631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32631):map__32631);
var options = map__32631__$1;
var target = cljs.core.get.call(null,map__32631__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__32631__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__32631__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__32631__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__32631__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__32631__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__32631__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str("(ifn? f)")].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str("(not (nil? target))")].join('')));
}

var roots_SINGLEQUOTE__32718 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__32718,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__32718,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__6404__auto__ = adapt;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__32631,map__32631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_32719 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_32676 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_32677 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_32678 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_32679 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_32679;

om.core._STAR_state_STAR_ = _STAR_state_STAR_32678;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_32677;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_32676;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_32719);
} else {
}
}

var queue_32720 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_32720)){
} else {
var seq__32680_32721 = cljs.core.seq.call(null,queue_32720);
var chunk__32681_32722 = null;
var count__32682_32723 = (0);
var i__32683_32724 = (0);
while(true){
if((i__32683_32724 < count__32682_32723)){
var c_32725 = cljs.core._nth.call(null,chunk__32681_32722,i__32683_32724);
if(cljs.core.truth_(c_32725.isMounted())){
var temp__4657__auto___32726 = (c_32725.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___32726)){
var next_props_32727 = temp__4657__auto___32726;
(c_32725.props["__om_cursor"] = next_props_32727);

(c_32725.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__6404__auto__ = !((function (){var G__32685 = om.core.children.call(null,c_32725);
if(!((G__32685 == null))){
if((false) || (G__32685.om$core$ICheckState$)){
return true;
} else {
if((!G__32685.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__32685);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__32685);
}
})());
if(or__6404__auto__){
return or__6404__auto__;
} else {
return c_32725.shouldComponentUpdate(c_32725.props,c_32725.state);
}
})())){
c_32725.forceUpdate();
} else {
}
} else {
}

var G__32728 = seq__32680_32721;
var G__32729 = chunk__32681_32722;
var G__32730 = count__32682_32723;
var G__32731 = (i__32683_32724 + (1));
seq__32680_32721 = G__32728;
chunk__32681_32722 = G__32729;
count__32682_32723 = G__32730;
i__32683_32724 = G__32731;
continue;
} else {
var temp__4657__auto___32732 = cljs.core.seq.call(null,seq__32680_32721);
if(temp__4657__auto___32732){
var seq__32680_32733__$1 = temp__4657__auto___32732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32680_32733__$1)){
var c__7215__auto___32734 = cljs.core.chunk_first.call(null,seq__32680_32733__$1);
var G__32735 = cljs.core.chunk_rest.call(null,seq__32680_32733__$1);
var G__32736 = c__7215__auto___32734;
var G__32737 = cljs.core.count.call(null,c__7215__auto___32734);
var G__32738 = (0);
seq__32680_32721 = G__32735;
chunk__32681_32722 = G__32736;
count__32682_32723 = G__32737;
i__32683_32724 = G__32738;
continue;
} else {
var c_32739 = cljs.core.first.call(null,seq__32680_32733__$1);
if(cljs.core.truth_(c_32739.isMounted())){
var temp__4657__auto___32740__$1 = (c_32739.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___32740__$1)){
var next_props_32741 = temp__4657__auto___32740__$1;
(c_32739.props["__om_cursor"] = next_props_32741);

(c_32739.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__6404__auto__ = !((function (){var G__32687 = om.core.children.call(null,c_32739);
if(!((G__32687 == null))){
if((false) || (G__32687.om$core$ICheckState$)){
return true;
} else {
if((!G__32687.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__32687);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__32687);
}
})());
if(or__6404__auto__){
return or__6404__auto__;
} else {
return c_32739.shouldComponentUpdate(c_32739.props,c_32739.state);
}
})())){
c_32739.forceUpdate();
} else {
}
} else {
}

var G__32742 = cljs.core.next.call(null,seq__32680_32733__$1);
var G__32743 = null;
var G__32744 = (0);
var G__32745 = (0);
seq__32680_32721 = G__32742;
chunk__32681_32722 = G__32743;
count__32682_32723 = G__32744;
i__32683_32724 = G__32745;
continue;
}
} else {
}
}
break;
}
}

var _refs_32746 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_32746)){
} else {
var seq__32688_32747 = cljs.core.seq.call(null,_refs_32746);
var chunk__32689_32748 = null;
var count__32690_32749 = (0);
var i__32691_32750 = (0);
while(true){
if((i__32691_32750 < count__32690_32749)){
var vec__32692_32751 = cljs.core._nth.call(null,chunk__32689_32748,i__32691_32750);
var path_32752__$1 = cljs.core.nth.call(null,vec__32692_32751,(0),null);
var cs_32753 = cljs.core.nth.call(null,vec__32692_32751,(1),null);
var cs_32754__$1 = cljs.core.deref.call(null,cs_32753);
var seq__32695_32755 = cljs.core.seq.call(null,cs_32754__$1);
var chunk__32696_32756 = null;
var count__32697_32757 = (0);
var i__32698_32758 = (0);
while(true){
if((i__32698_32758 < count__32697_32757)){
var vec__32699_32759 = cljs.core._nth.call(null,chunk__32696_32756,i__32698_32758);
var id_32760 = cljs.core.nth.call(null,vec__32699_32759,(0),null);
var c_32761 = cljs.core.nth.call(null,vec__32699_32759,(1),null);
if(cljs.core.truth_(c_32761.shouldComponentUpdate(c_32761.props,c_32761.state))){
c_32761.forceUpdate();
} else {
}

var G__32762 = seq__32695_32755;
var G__32763 = chunk__32696_32756;
var G__32764 = count__32697_32757;
var G__32765 = (i__32698_32758 + (1));
seq__32695_32755 = G__32762;
chunk__32696_32756 = G__32763;
count__32697_32757 = G__32764;
i__32698_32758 = G__32765;
continue;
} else {
var temp__4657__auto___32766 = cljs.core.seq.call(null,seq__32695_32755);
if(temp__4657__auto___32766){
var seq__32695_32767__$1 = temp__4657__auto___32766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32695_32767__$1)){
var c__7215__auto___32768 = cljs.core.chunk_first.call(null,seq__32695_32767__$1);
var G__32769 = cljs.core.chunk_rest.call(null,seq__32695_32767__$1);
var G__32770 = c__7215__auto___32768;
var G__32771 = cljs.core.count.call(null,c__7215__auto___32768);
var G__32772 = (0);
seq__32695_32755 = G__32769;
chunk__32696_32756 = G__32770;
count__32697_32757 = G__32771;
i__32698_32758 = G__32772;
continue;
} else {
var vec__32702_32773 = cljs.core.first.call(null,seq__32695_32767__$1);
var id_32774 = cljs.core.nth.call(null,vec__32702_32773,(0),null);
var c_32775 = cljs.core.nth.call(null,vec__32702_32773,(1),null);
if(cljs.core.truth_(c_32775.shouldComponentUpdate(c_32775.props,c_32775.state))){
c_32775.forceUpdate();
} else {
}

var G__32776 = cljs.core.next.call(null,seq__32695_32767__$1);
var G__32777 = null;
var G__32778 = (0);
var G__32779 = (0);
seq__32695_32755 = G__32776;
chunk__32696_32756 = G__32777;
count__32697_32757 = G__32778;
i__32698_32758 = G__32779;
continue;
}
} else {
}
}
break;
}

var G__32780 = seq__32688_32747;
var G__32781 = chunk__32689_32748;
var G__32782 = count__32690_32749;
var G__32783 = (i__32691_32750 + (1));
seq__32688_32747 = G__32780;
chunk__32689_32748 = G__32781;
count__32690_32749 = G__32782;
i__32691_32750 = G__32783;
continue;
} else {
var temp__4657__auto___32784 = cljs.core.seq.call(null,seq__32688_32747);
if(temp__4657__auto___32784){
var seq__32688_32785__$1 = temp__4657__auto___32784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32688_32785__$1)){
var c__7215__auto___32786 = cljs.core.chunk_first.call(null,seq__32688_32785__$1);
var G__32787 = cljs.core.chunk_rest.call(null,seq__32688_32785__$1);
var G__32788 = c__7215__auto___32786;
var G__32789 = cljs.core.count.call(null,c__7215__auto___32786);
var G__32790 = (0);
seq__32688_32747 = G__32787;
chunk__32689_32748 = G__32788;
count__32690_32749 = G__32789;
i__32691_32750 = G__32790;
continue;
} else {
var vec__32705_32791 = cljs.core.first.call(null,seq__32688_32785__$1);
var path_32792__$1 = cljs.core.nth.call(null,vec__32705_32791,(0),null);
var cs_32793 = cljs.core.nth.call(null,vec__32705_32791,(1),null);
var cs_32794__$1 = cljs.core.deref.call(null,cs_32793);
var seq__32708_32795 = cljs.core.seq.call(null,cs_32794__$1);
var chunk__32709_32796 = null;
var count__32710_32797 = (0);
var i__32711_32798 = (0);
while(true){
if((i__32711_32798 < count__32710_32797)){
var vec__32712_32799 = cljs.core._nth.call(null,chunk__32709_32796,i__32711_32798);
var id_32800 = cljs.core.nth.call(null,vec__32712_32799,(0),null);
var c_32801 = cljs.core.nth.call(null,vec__32712_32799,(1),null);
if(cljs.core.truth_(c_32801.shouldComponentUpdate(c_32801.props,c_32801.state))){
c_32801.forceUpdate();
} else {
}

var G__32802 = seq__32708_32795;
var G__32803 = chunk__32709_32796;
var G__32804 = count__32710_32797;
var G__32805 = (i__32711_32798 + (1));
seq__32708_32795 = G__32802;
chunk__32709_32796 = G__32803;
count__32710_32797 = G__32804;
i__32711_32798 = G__32805;
continue;
} else {
var temp__4657__auto___32806__$1 = cljs.core.seq.call(null,seq__32708_32795);
if(temp__4657__auto___32806__$1){
var seq__32708_32807__$1 = temp__4657__auto___32806__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32708_32807__$1)){
var c__7215__auto___32808 = cljs.core.chunk_first.call(null,seq__32708_32807__$1);
var G__32809 = cljs.core.chunk_rest.call(null,seq__32708_32807__$1);
var G__32810 = c__7215__auto___32808;
var G__32811 = cljs.core.count.call(null,c__7215__auto___32808);
var G__32812 = (0);
seq__32708_32795 = G__32809;
chunk__32709_32796 = G__32810;
count__32710_32797 = G__32811;
i__32711_32798 = G__32812;
continue;
} else {
var vec__32715_32813 = cljs.core.first.call(null,seq__32708_32807__$1);
var id_32814 = cljs.core.nth.call(null,vec__32715_32813,(0),null);
var c_32815 = cljs.core.nth.call(null,vec__32715_32813,(1),null);
if(cljs.core.truth_(c_32815.shouldComponentUpdate(c_32815.props,c_32815.state))){
c_32815.forceUpdate();
} else {
}

var G__32816 = cljs.core.next.call(null,seq__32708_32807__$1);
var G__32817 = null;
var G__32818 = (0);
var G__32819 = (0);
seq__32708_32795 = G__32816;
chunk__32709_32796 = G__32817;
count__32710_32797 = G__32818;
i__32711_32798 = G__32819;
continue;
}
} else {
}
}
break;
}

var G__32820 = cljs.core.next.call(null,seq__32688_32785__$1);
var G__32821 = null;
var G__32822 = (0);
var G__32823 = (0);
seq__32688_32747 = G__32820;
chunk__32689_32748 = G__32821;
count__32690_32749 = G__32822;
i__32691_32750 = G__32823;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__32631,map__32631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32631,map__32631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32631,map__32631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32631,map__32631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32631,map__32631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32631,map__32631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32631,map__32631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32631,map__32631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32631,map__32631__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error("Assert failed: (gdom/isElement target)"));
}

var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args32826 = [];
var len__7479__auto___32829 = arguments.length;
var i__7480__auto___32830 = (0);
while(true){
if((i__7480__auto___32830 < len__7479__auto___32829)){
args32826.push((arguments[i__7480__auto___32830]));

var G__32831 = (i__7480__auto___32830 + (1));
i__7480__auto___32830 = G__32831;
continue;
} else {
}
break;
}

var G__32828 = args32826.length;
switch (G__32828) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32826.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (transactable? cursor)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args32833 = [];
var len__7479__auto___32836 = arguments.length;
var i__7480__auto___32837 = (0);
while(true){
if((i__7480__auto___32837 < len__7479__auto___32836)){
args32833.push((arguments[i__7480__auto___32837]));

var G__32838 = (i__7480__auto___32837 + (1));
i__7480__auto___32837 = G__32838;
continue;
} else {
}
break;
}

var G__32835 = args32833.length;
switch (G__32835) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32833.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React refs. Given a owning pure node
 *   extract the ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args32842 = [];
var len__7479__auto___32845 = arguments.length;
var i__7480__auto___32846 = (0);
while(true){
if((i__7480__auto___32846 < len__7479__auto___32845)){
args32842.push((arguments[i__7480__auto___32846]));

var G__32847 = (i__7480__auto___32846 + (1));
i__7480__auto___32846 = G__32847;
continue;
} else {
}
break;
}

var G__32844 = args32842.length;
switch (G__32844) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32842.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var temp__4657__auto__ = owner.refs;
if(cljs.core.truth_(temp__4657__auto__)){
var refs = temp__4657__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;

/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args32849 = [];
var len__7479__auto___32852 = arguments.length;
var i__7480__auto___32853 = (0);
while(true){
if((i__7480__auto___32853 < len__7479__auto___32852)){
args32849.push((arguments[i__7480__auto___32853]));

var G__32854 = (i__7480__auto___32853 + (1));
i__7480__auto___32853 = G__32854;
continue;
} else {
}
break;
}

var G__32851 = args32849.length;
switch (G__32851) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32849.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args32856 = [];
var len__7479__auto___32859 = arguments.length;
var i__7480__auto___32860 = (0);
while(true){
if((i__7480__auto___32860 < len__7479__auto___32859)){
args32856.push((arguments[i__7480__auto___32860]));

var G__32861 = (i__7480__auto___32860 + (1));
i__7480__auto___32860 = G__32861;
continue;
} else {
}
break;
}

var G__32858 = args32856.length;
switch (G__32858) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32856.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args32863 = [];
var len__7479__auto___32866 = arguments.length;
var i__7480__auto___32867 = (0);
while(true){
if((i__7480__auto___32867 < len__7479__auto___32866)){
args32863.push((arguments[i__7480__auto___32867]));

var G__32868 = (i__7480__auto___32867 + (1));
i__7480__auto___32867 = G__32868;
continue;
} else {
}
break;
}

var G__32865 = args32863.length;
switch (G__32865) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32863.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args32870 = [];
var len__7479__auto___32873 = arguments.length;
var i__7480__auto___32874 = (0);
while(true){
if((i__7480__auto___32874 < len__7479__auto___32873)){
args32870.push((arguments[i__7480__auto___32874]));

var G__32875 = (i__7480__auto___32874 + (1));
i__7480__auto___32874 = G__32875;
continue;
} else {
}
break;
}

var G__32872 = args32870.length;
switch (G__32872) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32870.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args32877 = [];
var len__7479__auto___32880 = arguments.length;
var i__7480__auto___32881 = (0);
while(true){
if((i__7480__auto___32881 < len__7479__auto___32880)){
args32877.push((arguments[i__7480__auto___32881]));

var G__32882 = (i__7480__auto___32881 + (1));
i__7480__auto___32881 = G__32882;
continue;
} else {
}
break;
}

var G__32879 = args32877.length;
switch (G__32879) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32877.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map