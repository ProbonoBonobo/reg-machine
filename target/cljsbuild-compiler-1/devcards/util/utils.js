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
var _STAR_print_newline_STAR_29976_29978 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29977_29979 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29976_29978,_STAR_print_fn_STAR_29977_29979,sb__7532__auto__){
return (function (x__7533__auto__){
return sb__7532__auto__.append(x__7533__auto__);
});})(_STAR_print_newline_STAR_29976_29978,_STAR_print_fn_STAR_29977_29979,sb__7532__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29977_29979;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29976_29978;
}
return [cljs.core.str(sb__7532__auto__)].join('');
}catch (e29974){if((e29974 instanceof Error)){
var e1 = e29974;
try{return obj.toString();
}catch (e29975){if((e29975 instanceof Error)){
var e2 = e29975;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e29975;

}
}} else {
throw e29974;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_29981 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_29981;
}});

//# sourceMappingURL=utils.js.map