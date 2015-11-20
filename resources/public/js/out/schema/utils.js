// Compiled by ClojureScript 1.7.122 {}
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 */
schema.utils.assoc_when = (function schema$utils$assoc_when(var_args){
var args__20266__auto__ = [];
var len__20259__auto___34031 = arguments.length;
var i__20260__auto___34032 = (0);
while(true){
if((i__20260__auto___34032 < len__20259__auto___34031)){
args__20266__auto__.push((arguments[i__20260__auto___34032]));

var G__34033 = (i__20260__auto___34032 + (1));
i__20260__auto___34032 = G__34033;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});

schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__19201__auto__ = m;
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__19973__auto__ = (function schema$utils$iter__34023(s__34024){
return (new cljs.core.LazySeq(null,(function (){
var s__34024__$1 = s__34024;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34024__$1);
if(temp__4425__auto__){
var s__34024__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34024__$2)){
var c__19971__auto__ = cljs.core.chunk_first.call(null,s__34024__$2);
var size__19972__auto__ = cljs.core.count.call(null,c__19971__auto__);
var b__34026 = cljs.core.chunk_buffer.call(null,size__19972__auto__);
if((function (){var i__34025 = (0);
while(true){
if((i__34025 < size__19972__auto__)){
var vec__34029 = cljs.core._nth.call(null,c__19971__auto__,i__34025);
var k = cljs.core.nth.call(null,vec__34029,(0),null);
var v = cljs.core.nth.call(null,vec__34029,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__34026,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34034 = (i__34025 + (1));
i__34025 = G__34034;
continue;
} else {
var G__34035 = (i__34025 + (1));
i__34025 = G__34035;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34026),schema$utils$iter__34023.call(null,cljs.core.chunk_rest.call(null,s__34024__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34026),null);
}
} else {
var vec__34030 = cljs.core.first.call(null,s__34024__$2);
var k = cljs.core.nth.call(null,vec__34030,(0),null);
var v = cljs.core.nth.call(null,vec__34030,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__34023.call(null,cljs.core.rest.call(null,s__34024__$2)));
} else {
var G__34036 = cljs.core.rest.call(null,s__34024__$2);
s__34024__$1 = G__34036;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19973__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

schema.utils.assoc_when.cljs$lang$maxFixedArity = (1);

schema.utils.assoc_when.cljs$lang$applyTo = (function (seq34021){
var G__34022 = cljs.core.first.call(null,seq34021);
var seq34021__$1 = cljs.core.next.call(null,seq34021);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__34022,seq34021__$1);
});
schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
schema.utils.format_STAR_ = (function schema$utils$format_STAR_(var_args){
var args__20266__auto__ = [];
var len__20259__auto___34039 = arguments.length;
var i__20260__auto___34040 = (0);
while(true){
if((i__20260__auto___34040 < len__20259__auto___34039)){
args__20266__auto__.push((arguments[i__20260__auto___34040]));

var G__34041 = (i__20260__auto___34040 + (1));
i__20260__auto___34040 = G__34041;
continue;
} else {
}
break;
}

var argseq__20267__auto__ = ((((1) < args__20266__auto__.length))?(new cljs.core.IndexedSeq(args__20266__auto__.slice((1)),(0))):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20267__auto__);
});

schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1);

schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq34037){
var G__34038 = cljs.core.first.call(null,seq34037);
var seq34037__$1 = cljs.core.next.call(null,seq34037);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__34038,seq34037__$1);
});
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of.call(null,value);
if((cljs.core.count.call(null,[cljs.core.str(value)].join('')) < (20))){
return value;
} else {
return cljs.core.symbol.call(null,[cljs.core.str("a-"),cljs.core.str(t)].join(''));
}
});
/**
 * Identity version of memoize, because many schemas are records, and records
 * don't cache their hash codes (at least in Clojure 1.5.1).
 * Not thread safe, and doesn't cache falsey values.
 */
schema.utils.memoize_id = (function schema$utils$memoize_id(f){
return cljs.core.memoize.call(null,f);
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || (x.cljs$core$IRecord$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,x);
}
});
schema.utils.validation_error_explain;

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,schema.utils.validation_error_explain.call(null,this$__$1),writer,opts);
});

schema.utils.ValidationError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"expectation-delay","expectation-delay",-1886214669,null),new cljs.core.Symbol(null,"fail-explanation","fail-explanation",530278923,null)], null);
});

schema.utils.ValidationError.cljs$lang$type = true;

schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"schema.utils/ValidationError");
});

schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,err.expectation_delay)),(function (){var or__19201__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})());
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});
schema.utils.named_error_explain;

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,schema.utils.named_error_explain.call(null,this$__$1),writer,opts);
});

schema.utils.NamedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

schema.utils.NamedError.cljs$lang$type = true;

schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"schema.utils/NamedError");
});

schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,err.name),err.error),new cljs.core.Symbol(null,"named","named",1218138048,null));
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19815__auto__,k__19816__auto__){
var self__ = this;
var this__19815__auto____$1 = this;
return cljs.core._lookup.call(null,this__19815__auto____$1,k__19816__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19817__auto__,k34045,else__19818__auto__){
var self__ = this;
var this__19817__auto____$1 = this;
var G__34047 = (((k34045 instanceof cljs.core.Keyword))?k34045.fqn:null);
switch (G__34047) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34045,else__19818__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19829__auto__,writer__19830__auto__,opts__19831__auto__){
var self__ = this;
var this__19829__auto____$1 = this;
var pr_pair__19832__auto__ = ((function (this__19829__auto____$1){
return (function (keyval__19833__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19830__auto__,cljs.core.pr_writer,""," ","",opts__19831__auto__,keyval__19833__auto__);
});})(this__19829__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19830__auto__,pr_pair__19832__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__19831__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$ = true;

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34044){
var self__ = this;
var G__34044__$1 = this;
return (new cljs.core.RecordIter((0),G__34044__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19813__auto__){
var self__ = this;
var this__19813__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19809__auto__){
var self__ = this;
var this__19809__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19819__auto__){
var self__ = this;
var this__19819__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19810__auto__){
var self__ = this;
var this__19810__auto____$1 = this;
var h__19636__auto__ = self__.__hash;
if(!((h__19636__auto__ == null))){
return h__19636__auto__;
} else {
var h__19636__auto____$1 = cljs.core.hash_imap.call(null,this__19810__auto____$1);
self__.__hash = h__19636__auto____$1;

return h__19636__auto____$1;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19811__auto__,other__19812__auto__){
var self__ = this;
var this__19811__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19189__auto__ = other__19812__auto__;
if(cljs.core.truth_(and__19189__auto__)){
var and__19189__auto____$1 = (this__19811__auto____$1.constructor === other__19812__auto__.constructor);
if(and__19189__auto____$1){
return cljs.core.equiv_map.call(null,this__19811__auto____$1,other__19812__auto__);
} else {
return and__19189__auto____$1;
}
} else {
return and__19189__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19824__auto__,k__19825__auto__){
var self__ = this;
var this__19824__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__19825__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19824__auto____$1),self__.__meta),k__19825__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19825__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19822__auto__,k__19823__auto__,G__34044){
var self__ = this;
var this__19822__auto____$1 = this;
var pred__34048 = cljs.core.keyword_identical_QMARK_;
var expr__34049 = k__19823__auto__;
if(cljs.core.truth_(pred__34048.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__34049))){
return (new schema.utils.ErrorContainer(G__34044,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19823__auto__,G__34044),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19827__auto__){
var self__ = this;
var this__19827__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19814__auto__,G__34044){
var self__ = this;
var this__19814__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__34044,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19820__auto__,entry__19821__auto__){
var self__ = this;
var this__19820__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19821__auto__)){
return cljs.core._assoc.call(null,this__19820__auto____$1,cljs.core._nth.call(null,entry__19821__auto__,(0)),cljs.core._nth.call(null,entry__19821__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19820__auto____$1,entry__19821__auto__);
}
});

schema.utils.ErrorContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__19849__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__19849__auto__,writer__19850__auto__){
return cljs.core._write.call(null,writer__19850__auto__,"schema.utils/ErrorContainer");
});

schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__34046){
return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__34046),null,cljs.core.dissoc.call(null,G__34046,new cljs.core.Keyword(null,"error","error",-978969032)),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)))].join('')));
}

return schema.utils.__GT_ErrorContainer.call(null,x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,x))){
return x.error;
} else {
return null;
}
});
/**
 * If maybe-error is an error, wrap the inner value in a NamedError; otherwise, return as-is
 */
schema.utils.wrap_error_name = (function schema$utils$wrap_error_name(name,maybe_error){
var temp__4423__auto__ = schema.utils.error_val.call(null,maybe_error);
if(cljs.core.truth_(temp__4423__auto__)){
var e = temp__4423__auto__;
return schema.utils.error.call(null,schema.utils.__GT_NamedError.call(null,name,e));
} else {
return maybe_error;
}
});
/**
 * Build up a result by conjing values, producing an error if at least one
 * sub-value returns an error.
 */
schema.utils.result_builder = (function schema$utils$result_builder(lift_to_error){
return (function schema$utils$result_builder_$_conjer(m,e){
var temp__4423__auto__ = schema.utils.error_val.call(null,e);
if(cljs.core.truth_(temp__4423__auto__)){
var err = temp__4423__auto__;
return schema.utils.error.call(null,cljs.core.conj.call(null,(function (){var or__19201__auto__ = schema.utils.error_val.call(null,m);
if(cljs.core.truth_(or__19201__auto__)){
return or__19201__auto__;
} else {
return lift_to_error.call(null,m);
}
})(),err));
} else {
var temp__4423__auto____$1 = schema.utils.error_val.call(null,m);
if(cljs.core.truth_(temp__4423__auto____$1)){
var merr = temp__4423__auto____$1;
return schema.utils.error.call(null,cljs.core.conj.call(null,merr,null));
} else {
return cljs.core.conj.call(null,m,e);
}
}
});
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return (klass["schema$utils$schema"] = schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return (klass["schema$utils$schema"]);
});

/**
 * @interface
 */
schema.utils.PSimpleCell = function(){};

schema.utils.get_cell = (function schema$utils$get_cell(this$){
if((!((this$ == null))) && (!((this$.schema$utils$PSimpleCell$get_cell$arity$1 == null)))){
return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else {
var x__19856__auto__ = (((this$ == null))?null:this$);
var m__19857__auto__ = (schema.utils.get_cell[goog.typeOf(x__19856__auto__)]);
if(!((m__19857__auto__ == null))){
return m__19857__auto__.call(null,this$);
} else {
var m__19857__auto____$1 = (schema.utils.get_cell["_"]);
if(!((m__19857__auto____$1 == null))){
return m__19857__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"PSimpleCell.get_cell",this$);
}
}
}
});

schema.utils.set_cell = (function schema$utils$set_cell(this$,x){
if((!((this$ == null))) && (!((this$.schema$utils$PSimpleCell$set_cell$arity$2 == null)))){
return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else {
var x__19856__auto__ = (((this$ == null))?null:this$);
var m__19857__auto__ = (schema.utils.set_cell[goog.typeOf(x__19856__auto__)]);
if(!((m__19857__auto__ == null))){
return m__19857__auto__.call(null,this$,x);
} else {
var m__19857__auto____$1 = (schema.utils.set_cell["_"]);
if(!((m__19857__auto____$1 == null))){
return m__19857__auto____$1.call(null,this$,x);
} else {
throw cljs.core.missing_protocol.call(null,"PSimpleCell.set_cell",this$);
}
}
}
});


/**
* @constructor
 * @implements {schema.utils.PSimpleCell}
*/
schema.utils.SimpleVCell = (function (q){
this.q = q;
})
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$ = true;

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$get_cell$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.q;
});

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

schema.utils.SimpleVCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
});

schema.utils.SimpleVCell.cljs$lang$type = true;

schema.utils.SimpleVCell.cljs$lang$ctorStr = "schema.utils/SimpleVCell";

schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__19799__auto__,writer__19800__auto__,opt__19801__auto__){
return cljs.core._write.call(null,writer__19800__auto__,"schema.utils/SimpleVCell");
});

schema.utils.__GT_SimpleVCell = (function schema$utils$__GT_SimpleVCell(q){
return (new schema.utils.SimpleVCell(q));
});

/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = (new schema.utils.SimpleVCell(false));
schema.utils.use_fn_validation.get_cell = cljs.core.partial.call(null,schema.utils.get_cell,schema.utils.use_fn_validation);

schema.utils.use_fn_validation.set_cell = cljs.core.partial.call(null,schema.utils.set_cell,schema.utils.use_fn_validation);

//# sourceMappingURL=utils.js.map?rel=1444632657123