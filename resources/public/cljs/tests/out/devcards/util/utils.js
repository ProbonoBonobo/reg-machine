// Compiled by ClojureScript 1.9.293 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__7532__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39776_39778 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39777_39779 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39776_39778,_STAR_print_fn_STAR_39777_39779,sb__7532__auto__){
return (function (x__7533__auto__){
return sb__7532__auto__.append(x__7533__auto__);
});})(_STAR_print_newline_STAR_39776_39778,_STAR_print_fn_STAR_39777_39779,sb__7532__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39777_39779;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39776_39778;
}
return [cljs.core.str(sb__7532__auto__)].join('');
}catch (e39774){if((e39774 instanceof Error)){
var e1 = e39774;
try{return obj.toString();
}catch (e39775){if((e39775 instanceof Error)){
var e2 = e39775;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e39775;

}
}} else {
throw e39774;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_39781 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_39781;
}});

//# sourceMappingURL=utils.js.map?rel=1479783227156